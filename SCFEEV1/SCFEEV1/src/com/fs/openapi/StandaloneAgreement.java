package com.fs.openapi;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.*;

import com.cs.scf.domain.Counterparty;
import com.cs.scf.domain.Msg76;
import com.cs.scf.util.DateUtil;

public class StandaloneAgreement {

    private static final String CLIENT_URL = "http://dev-scfnew:8081/BL6CEWeb/v1";
    private static final String SERVICE_PATH = "/message-api-receiver/stp/agreement";
    private static final String USERNAME = "eeConnUserName";
    private static final String PASSWORD = "eeConnUserPwd";

    @POST
    @Consumes(MediaType.APPLICATION_XML)
    @Produces(MediaType.APPLICATION_XML)
    public Response triggerAgreement(String inputXml) {

        try {

            // ========= Parse Incoming XML =========
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            Document document = builder.parse(
                    new ByteArrayInputStream(inputXml.getBytes(StandardCharsets.UTF_8))
            );

            document.getDocumentElement().normalize();
            Element root = document.getDocumentElement();

            Map<String, String> outMsgMap = new HashMap<>();

            Node outMsgContent = root.getElementsByTagName("out-msg-content").item(0);
            NodeList nodes = outMsgContent.getChildNodes();

            for (int i = 0; i < nodes.getLength(); i++) {
                Node node = nodes.item(i);
                if (node.getNodeType() == Node.ELEMENT_NODE) {
                    outMsgMap.put(node.getNodeName(), node.getTextContent());
                }
            }

            // ========= Build Msg76 =========
            Msg76 m76 = new Msg76();

            LocalDateTime now = LocalDateTime.now();
            String requestId = UUID.randomUUID().toString();

            m76.getMsgInfo().put("DateTime", DateUtil.getDateTimeNow(now));
            m76.setReplyDate(DateUtil.asDate(now));
            m76.getMsgInfo().put("CreatedBy", "SYSTEM");

            for (Map.Entry<String, String> entry : outMsgMap.entrySet()) {
                m76.getCustomer().put(entry.getKey(), entry.getValue());
            }

            if (!m76.getCounterparty().isEmpty()) {
                Counterparty cp = m76.getCounterparty().get(0);
                for (Map.Entry<String, String> entry : outMsgMap.entrySet()) {
                    cp.getSBRMain().put(entry.getKey(), entry.getValue());
                    cp.getSBRDetail().getSBRControl().put(entry.getKey(), entry.getValue());
                    cp.getSBRDetail().getSBRPrice().put(entry.getKey(), entry.getValue());
                }
            }

            // ========= Convert Msg76 to XML =========
            JAXBContext context = JAXBContext.newInstance(Msg76.class);
            Marshaller marshaller = context.createMarshaller();
            marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);

            StringWriter writer = new StringWriter();
            marshaller.marshal(m76, writer);
            String xmlRequest = writer.toString();

            // ========= Call CE =========
            URL url = new URL(CLIENT_URL + SERVICE_PATH);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            connection.setRequestMethod("POST");
            connection.setRequestProperty("Content-Type", "application/xml");

            String auth = USERNAME + ":" + PASSWORD;
            String encodedAuth = Base64.getEncoder()
                    .encodeToString(auth.getBytes(StandardCharsets.UTF_8));

            connection.setRequestProperty("Authorization", "Basic " + encodedAuth);
            connection.setDoOutput(true);

            try (OutputStream os = connection.getOutputStream()) {
                os.write(xmlRequest.getBytes(StandardCharsets.UTF_8));
            }

            int status = connection.getResponseCode();

            BufferedReader reader = new BufferedReader(
                    new InputStreamReader(
                            status >= 200 && status < 300
                                    ? connection.getInputStream()
                                    : connection.getErrorStream()
                    )
            );

            StringBuilder responseBody = new StringBuilder();
            String line;

            while ((line = reader.readLine()) != null) {
                responseBody.append(line);
            }

            reader.close();
            connection.disconnect();

            return Response.status(status)
                    .entity(responseBody.toString())
                    .build();

        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(500)
                    .entity("<error>" + e.getMessage() + "</error>")
                    .build();
        }
    }
}