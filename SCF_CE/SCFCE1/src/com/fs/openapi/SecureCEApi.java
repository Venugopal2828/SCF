package com.fs.openapi;

import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.JSONArray;
import org.json.JSONObject;

import com.cs.eximap.utility.APLog;
import com.fs.modal.CounterPartyDB;
import com.fs.service.SendDataToEE;
import com.google.gson.Gson;

@Path("/ee")
public class SecureCEApi {

	@GET
	@Path("/ping")
	@Produces(MediaType.APPLICATION_JSON)
	public Response ping() {

		Map<String, Object> res = new HashMap<>();
		res.put("status", "success");
		res.put("message", "CE service is up");
		res.put("timestamp", System.currentTimeMillis());
		return Response.ok(new Gson().toJson(res)).build();
	}

	public static void main(String[] args) {
		String json = "{\r\n" + "  \"cMainRef\": \"MAIN_REF_1773489151888\",\r\n"
				+ "  \"cTrxRef\": \"MAIN_REF_1773489151888\",\r\n" + "  \"cUnitCode\": \"CSBANK\",\r\n"
				+ "  \"cModule\": \"SCF\",\r\n" + "  \"cEventName\": \"N\",\r\n" + "  \"cEventStatus\": \"N\",\r\n"
				+ "\r\n" + "  \"existCus\": \"No\",\r\n" + "  \"cifId\": \"\",\r\n" + "\r\n"
				+ "  \"custNm\": \"Andra Saritha\",\r\n" + "  \"faBuyerNm\": \"Andra Saritha\",\r\n" + "\r\n"
				+ "  \"faBuyerContMail\": \"saritha@gmail.com\",\r\n" + "  \"faBuyerContTel\": \"6301215288\",\r\n"
				+ "\r\n" + "  \"custContPrsn1\": \"saritha1\",\r\n"
				+ "  \"custEmail1\": \"andhrasaritha@gmail.com\",\r\n" + "  \"custMob1\": \"6321897895\",\r\n" + "\r\n"
				+ "  \"custContPrsn2\": \"saritha2\",\r\n" + "  \"custEmail2\": \"sarithamadhuri@gmail.com\",\r\n"
				+ "  \"custMob2\": \"837288484453\",\r\n" + "\r\n" + "  \"busRegNo\": \"reg787893\",\r\n"
				+ "  \"vatNo\": \"VAT7893\",\r\n" + "  \"indType\": \"trading\",\r\n" + "\r\n"
				+ "  \"faSelNm\": \"SBI\",\r\n" + "  \"accountNo\": \"98783344\",\r\n"
				+ "  \"faBuyerCity\": \"bangalore\",\r\n" + "  \"faSelCity\": \"Banglore\",\r\n" + "\r\n"
				+ "  \"payMthd\": \"check\",\r\n" + "  \"ccy\": \"INR\",\r\n" + "\r\n" + "  \"attachments\": [\r\n"
				+ "    {\r\n" + "      \"fileName\": \"invoice.pdf\",\r\n" + "      \"fileType\": \"PDF\",\r\n"
				+ "      \"fileContent\": \"SGVsbG8gVGVzdCBBdHRhY2htZW50\"\r\n" + "    }\r\n" + "  ]\r\n" + "}";

		JSONObject jsonob = new JSONObject(json);
		JSONArray attachments = jsonob.optJSONArray("attachments");
		System.out.println(attachments);
	}

	@POST
	@Path("/enterprise/enquiry/v1/eq-acc-cif")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response mockAccInq(String jsonRequest) {

		String mockResponse = "{" + "\"Acct_Restrict_Flag\":\"N\"," + "\"Acct_Restrict_Reason\":\"\","
				+ "\"Cust_Restrict_Flag\":\"N\"," + "\"Cust_Restrict_Reason\":\"\","
				+ "\"Available_Balance\":\"100000\"" + "}";

		return Response.status(200).entity(mockResponse).build();
	}

	@POST
	@Path("/scfData")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response processScfData(String jsonRequest) {

		APLog.reportLog("=== EE API /scfceData invoked ===");
		APLog.reportLog("Incoming JSON=" + jsonRequest);

		try {
			JSONObject json = new JSONObject(jsonRequest);
			JSONArray attachments = json.optJSONArray("attachment");

			String attachmentsJson;

			// Always store something (never NULL)
			if (attachments != null) {
				attachmentsJson = attachments.toString(); // can be [] or data
			} else {
				attachmentsJson = "[]"; // fallback
			}

			APLog.reportLog("ATTACHMENTS JSON = " + attachmentsJson);

			String cMainRef = json.getString("cMainRef");
			String cTrxRef = json.optString("cTrxRef", cMainRef);

			CounterPartyDB db = new CounterPartyDB();
			db.saveAttachments(cMainRef, attachmentsJson);

			APLog.reportLog("Using cMainRef=" + cMainRef);
			APLog.reportLog("Using cTrxRef=" + cTrxRef);

			SendDataToEE service = new SendDataToEE();

			String responseBody = service.pushCounterpartyToScf(cMainRef, cTrxRef, jsonRequest);

			APLog.reportLog("EE push completed");
			APLog.reportLog("Response=" + responseBody);

			Map<String, Object> res = new HashMap<>();
			res.put("status", "success");
			res.put("response", responseBody);

			return Response.ok(new Gson().toJson(res)).build();
		} catch (Throwable e) {

			APLog.reportLog("Error in /scfData");
			e.printStackTrace();
			APLog.reportLog(e.toString());

			Map<String, Object> err = new HashMap<>();
			err.put("status", "error");
			err.put("message", e.toString());
			return Response.ok(new Gson().toJson(err)).build();
		}

	}

}
