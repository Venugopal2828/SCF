package com.fs.servlet;

import java.io.File;
import java.sql.Types;
import java.util.HashMap;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.apache.xerces.dom.DocumentImpl;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.cs.base.utility.ASPathConst;
import com.cs.base.xml.XMLManager;
import com.cs.core.dao.DSManager;
import com.cs.core.utility.CommDAOHelper;
import com.cs.eximap.utility.APLog;
import com.cs.eximap.utility.CSSQLStatement;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class CounterpartyInviteMailServlet {

	private static final String REJECT_CONFIG_PATH = "/EEConfig/reject-config.json";

	public CounterpartyInviteMailServlet() {
		super();
	}

	protected java.util.List<String> doPost(String mainRef) {
		return doPost(mainRef, mainRef);
	}

	protected java.util.List<String> doPost(String mainRef, String aggrNo) {

		System.out.println("[MAIL] ---skjdfdgkjkjhkjhgkfjh> Servlet started");

		System.out.println("[MAIL] mainRef received = " + mainRef);

		java.util.List<String> inviteLinks = new java.util.ArrayList<String>();

		try {
			System.out.println("[MAIL] Fetching counterparty details...");
			java.util.List<HashMap<String, String>> counterpartyList = fetchAllCounterpartyDetails(mainRef);

			if (counterpartyList == null || counterpartyList.isEmpty()) {
				System.out.println("[MAIL] No counterparties found for mainRef = " + mainRef);
				return inviteLinks;
			}

			com.fs.service.RegistrationTokenService tokenService = new com.fs.service.RegistrationTokenService();
			System.out.println("[MAIL] Skipping counterparty size = " + counterpartyList.size());

			for (HashMap<String, String> data : counterpartyList) {
				System.out.println("[MAIL] Skipping counterparty data = " + data);

				String name = data.get("BUYER_NAME");
				String email = data.get("FA_COUNTER_CONT_EM");
				String counterpartyId = data.get("FA_COUNTER_ID");
				aggrNo = mainRef;
				

				if (email == null || email.trim().isEmpty()) {
					System.out.println("[MAIL] Skipping counterparty without email, ID = " + counterpartyId);
					continue;
				}

				System.out.println("[MAIL] DB Result Name = " + name);
				System.out.println("[MAIL] DB Result Email = " + email);

				String customerName = name; // already available
				String mobile = data.get("FA_COUNTER_CONT_TEL"); // from DB

				HashMap<String, String> tokenResult = tokenService.generateRegistrationToken(mainRef, counterpartyId,
						email, customerName, mobile != null ? mobile : "", aggrNo, null);
				String inviteLink = tokenResult.get("REGISTRATION_LINK");
				inviteLinks.add(inviteLink);
				System.out.println("[MAIL] Secure Invite Link generated = " + inviteLink);
				System.out.println("[MAIL] Sending mail...");
				sendMail(name, email, inviteLink);
				System.out.println("[MAIL] Mail sent SUCCESSFULLY!");
			}

			System.out.println("[MAIL] Total invite links generated: " + inviteLinks.size());
			for (int i = 0; i < inviteLinks.size(); i++) {
				System.out.println("[MAIL] Invite Link " + (i + 1) + ": " + inviteLinks.get(i));
			}

		} catch (Exception e) {
			System.out.println("[MAIL] ERROR: " + e.getMessage());
			e.printStackTrace();
		}

		return inviteLinks;
	}

	/**
	 * Sends invitation email with specific registration link.
	 */
	public void sendInvitationEmail(String mainRef, String counterpartyEmail, String registrationLink)
			throws Exception {
		System.out.println("Sendinvitation email method==========================");
		java.util.List<HashMap<String, String>> counterpartyList = fetchAllCounterpartyDetails(mainRef);
		if (counterpartyList == null || counterpartyList.isEmpty()) {
			System.out.println("[MAIL] No counterparties found for mainRef = " + mainRef);
		}
		com.fs.service.RegistrationTokenService tokenService = new com.fs.service.RegistrationTokenService();
		System.out.println("[MAIL] Skipping counterparty size = " + counterpartyList.size());
		java.util.List<String> inviteLinks = new java.util.ArrayList<String>();

		for (HashMap<String, String> data : counterpartyList) {
			System.out.println("[MAIL] Skipping counterparty data = " + data);

			String name = data.get("FA_COUNTER_NM");
			String email = data.get("FA_COUNTER_CONT_EM");
			String counterpartyId = data.get("FA_COUNTER_ID");

			if (email == null || email.trim().isEmpty()) {
				System.out.println("[MAIL] Skipping counterparty without email, ID = " + counterpartyId);
				continue;
			}

			if (counterpartyId == null || counterpartyId.trim().isEmpty()) {
				counterpartyId = email;
			}

			System.out.println("[MAIL] DB Result Name = " + name);
			System.out.println("[MAIL] DB Result Email = " + email);

			String customerName = name;
			String mobile = data.get("FA_COUNTER_CONT_TEL");

			HashMap<String, String> tokenResult = tokenService.generateRegistrationToken(mainRef, counterpartyId, email,
					customerName, mobile, mainRef, null);
			String inviteLink = tokenResult.get("REGISTRATION_LINK");
			inviteLinks.add(inviteLink);
			System.out.println("[MAIL] Secure Invite Link generated = " + inviteLink);
			System.out.println("[MAIL] Sending mail...");
			sendMail(name, email, inviteLink);
			System.out.println("[MAIL] Mail sent SUCCESSFULLY!");
		}
	}

	public HashMap<String, String> fetchCounterpartyDetails(String cMainRef) throws Exception {
		System.out.println("[fetchCounterpartyDetails] START | cMainRef=" + cMainRef);
		HashMap<String, String> resultMap = new HashMap<>();
		try {
			java.util.List<HashMap<String, String>> all = fetchAllCounterpartyDetails(cMainRef);
			if (!all.isEmpty()) {
				resultMap = all.get(0);
			}
			return resultMap;
		} catch (Exception e) {
			System.out.println("[fetchCounterpartyDetails] ERROR | cMainRef=" + cMainRef);
			e.printStackTrace();
			throw e;
		} finally {
			System.out.println("[fetchCounterpartyDetails] END");
		}
	}

	/**
	 * Fetches all counterparties for a main reference.
	 */
	public java.util.List<HashMap<String, String>> fetchAllCounterpartyDetails(String cMainRef) throws Exception {
		System.out.println("[fetchAllCounterpartyDetails] START | cMainRef=" + cMainRef);
		java.util.List<HashMap<String, String>> list = new java.util.ArrayList<HashMap<String, String>>();
		String ds = null;
		try {
			ds = DSManager.getTrxDS("CSBANK", "US");
			System.out.println("[fetchAllCounterpartyDetails] DataSource resolved: " + ds);
			CSSQLStatement stmt = new CSSQLStatement(CSSQLStatement.I_SQL_TYPE_SELECT, "EXIMTRX.FADA_COUNTER", ds);
			/* stmt.addField("FA_BUYER_NM", null, null); */
			stmt.addField("FA_COUNTER_CONT_EM", null, null);
			stmt.addField("FA_COUNTER_CONT_TEL", null, null);
			stmt.addField("FA_COUNTER_NM", null, null);
			stmt.addField("FA_COUNTER_NM", null, null);
			stmt.addField("FA_COUNTER_ID", null, null);

			/* stmt.addField("FA_BUYER_ID", null, null); */
			String whereClause = "WHERE C_MAIN_REF = ?";
			Object[] values = { cMainRef };
			Integer[] types = { Types.VARCHAR };
			stmt.setClause(whereClause, values, types);
			String sql = stmt.genSqlString();
			System.out.println("[fetchAllCounterpartyDetails] Executing SQL: " + sql);
			DocumentImpl resultDoc = (DocumentImpl) CommDAOHelper.getInstance().commExecuteQuery(sql, ds);
			if (resultDoc == null) {
				System.out.println("[fetchAllCounterpartyDetails] Result document is NULL");
				return list;
			}
			Element rootElement = resultDoc.getDocumentElement();
			NodeList recordList = rootElement.getElementsByTagName("record");
			System.out.println("[fetchAllCounterpartyDetails] Records found: " + recordList.getLength());
			if (recordList.getLength() > 0) {
				for (int i = 0; i < recordList.getLength(); i++) {
					Node recordNode = recordList.item(i);
					/*
					 * String buyerName = XMLManager.getChildNodeValue(recordNode, "FA_BUYER_NM",
					 * true);
					 */
					String buyerEmail = XMLManager.getChildNodeValue(recordNode, "FA_COUNTER_CONT_EM", true);
					String buyerTel = XMLManager.getChildNodeValue(recordNode, "FA_COUNTER_CONT_TEL", true);
					String buyerName = XMLManager.getChildNodeValue(recordNode, "FA_COUNTER_NM", true);
					String CounterID = XMLManager.getChildNodeValue(recordNode, "FA_COUNTER_ID", true);
					
					HashMap<String, String> map = new HashMap<String, String>();
					/* map.put("BUYER_NAME", buyerName); */
					map.put("FA_COUNTER_CONT_EM", buyerEmail);
					map.put("FA_COUNTER_CONT_TEL", buyerTel);
					map.put("FA_COUNTER_NM", buyerName);
					map.put("FA_COUNTER_ID", CounterID);
					map.put("AGGR_NO", cMainRef);
					System.out.println("======AGGNO FETCHED========="+cMainRef);
					list.add(map);
					System.out.println("[fetchAllCounterpartyDetails] FA_COUNTER_NM  = " + buyerName);
					System.out.println("[fetchAllCounterpartyDetails] FA_COUNTER_CONT_TEL  = " + buyerTel);
					System.out.println("[fetchAllCounterpartyDetails] FA_COUNTER_CONT_EM = " + buyerEmail);
				}
			} else {
				System.out.println("[fetchAllCounterpartyDetails] No data found for C_MAIN_REF=" + cMainRef);
			}
			return list;
		} catch (Exception e) {
			System.out.println("[fetchAllCounterpartyDetails] ERROR | cMainRef=" + cMainRef);
			e.printStackTrace();
			throw e;
		} finally {
			System.out.println("[fetchAllCounterpartyDetails] END");
		}
	}

	public void sendMail(String name, String email, String inviteLink) throws Exception {
		System.out.println("[MAIL] Reading configuration from JSON...");
		ObjectMapper mapper = new ObjectMapper();
		JsonNode config = mapper.readTree(new File(ASPathConst.USER_DIR_PATH + "/EEConfig/mail-config.json"));
		JsonNode smtp = config.get("smtp");
		JsonNode mail = config.get("mail");
		String smtpHost = smtp.get("host").asText();
		String smtpPort = smtp.get("port").asText();
		String smtpAuth = smtp.get("auth").asText();
		String smtpStartTls = smtp.get("starttls").asText();
		String smtpProtocols = smtp.get("protocols").asText();
		String smtpUser = smtp.get("user").asText();
		String smtpPass = smtp.get("pass").asText();
		Properties props = new Properties();
		props.put("mail.smtp.host", smtpHost);
		props.put("mail.smtp.port", smtpPort);
		props.put("mail.smtp.auth", smtpAuth);
		props.put("mail.smtp.starttls.enable", smtpStartTls);
		props.put("mail.smtp.socketFactory.port", "587");
		props.put("mail.smtp.ssl.trust", smtpHost);
		System.out.println("[MAIL] Creating mail session...");
		Session session = Session.getInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(smtpUser, smtpPass);
			}
		});
		String subject = mail.get("subject").asText().replace("_", " ");
		String fromAddress = mail.get("from").asText();
		String template = mail.get("body").asText();
		String body = template.replace("${name}", name).replace("${link}", inviteLink);
		Message message = new MimeMessage(session);
		message.setFrom(new InternetAddress(fromAddress));
		message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
		message.setSubject(subject);
		message.setText(body);
		APLog.reportLog("[MAIL] Body------" + body);
		Transport.send(message);

		System.out.println("[MAIL] Mail TRANSPORT Completed!");
	}

	public void sendRejectMail(String name, String email, String inviteLink, String rejectReason) throws Exception {
		System.out.println("[REJECT MAIL] Reading configuration from json...");
		ObjectMapper mapper = new ObjectMapper();
		JsonNode config = mapper.readTree(new File(ASPathConst.USER_DIR_PATH + "/EEConfig/reject-config.json"));
		JsonNode smtp = config.get("smtp");
		JsonNode mail = config.get("mail");

		if (smtp == null || mail == null) {
			throw new Exception("reject-config.json must contain smtp and mail sections");
		}

		String smtpHost = smtp.get("host").asText();
		String smtpPort = smtp.get("port").asText();
		String smtpAuth = smtp.get("auth").asText();
		String smtpStartTls = smtp.get("starttls").asText();
		String smtpUser = smtp.get("user").asText();
		String smtpPass = smtp.get("pass").asText();
		Properties props = new Properties();
		props.put("mail.smtp.host", smtpHost);
		props.put("mail.smtp.port", smtpPort);
		props.put("mail.smtp.auth", smtpAuth);
		props.put("mail.smtp.starttls.enable", smtpStartTls);
		props.put("mail.smtp.socketFactory.port", "587");
		props.put("mail.smtp.ssl.trust", smtpHost);
		System.out.println("[REJECT MAIL] Creating mail session...");
		Session session = Session.getInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(smtpUser, smtpPass);
			}
		});

		String safeName = name != null ? name : "";
		String safeLink = inviteLink != null ? inviteLink : "";
		String safeReason = rejectReason != null ? rejectReason : "";
		String subject = mail.get("subject").asText().replace("_", " ")
			    + (rejectReason != null && !rejectReason.trim().isEmpty() ? " - " + rejectReason : "");
		String fromAddress = mail.get("from").asText();
		String template = mail.get("body").asText();
		String body = template.replace("${name}", safeName).replace("${link}", safeLink).replace("${rejectReason}",
				safeReason);

		Message message = new MimeMessage(session);
		message.setFrom(new InternetAddress(fromAddress));
		message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
		message.setSubject(subject);
		message.setText(body);
		System.out.println("[REJECT MAIL] Sending rejection mail to: " + email);
		APLog.reportLog("[REJECT MAIL] Body------" + body);
		Transport.send(message);
		System.out.println("[REJECT MAIL] Mail TRANSPORT Completed!");
	}

	public static String generateRegistrationLink(String mainRefNO, String email) throws Exception {
		return generateRegistrationLink(mainRefNO, email, mainRefNO);
	}

	public static String generateRegistrationLink(String mainRefNO, String email, String aggrNo) throws Exception {

		com.fs.service.RegistrationTokenService tokenService = new com.fs.service.RegistrationTokenService();

		String counterpartyId = null;

		String customerName = email;
		String mobile = "";

		java.util.HashMap<String, String> tokenResult = tokenService.generateRegistrationToken(mainRefNO,
				counterpartyId, email, customerName, mobile, aggrNo, null);

		return tokenResult.get("REGISTRATION_LINK");
	}

	public static String generateRejectRegistrationLink(String mainRefNO, String email, String rejectReason)
			throws Exception {

		com.fs.service.RegistrationTokenService tokenService = new com.fs.service.RegistrationTokenService();


		java.util.HashMap<String, String> tokenResult = tokenService.generateRejectRegistrationToken(rejectReason,
				mainRefNO, email, null);

		return tokenResult.get("REGISTRATION_LINK");
	}

	/**
	 * Main method for testing the invitation functionality. Replace
	 * "YOUR_MAIN_REF_HERE" with an actual C_MAIN_REF value from your database.
	 */

	public java.util.List<HashMap<String, String>> fetchStatCECPDetails(String cMainRef) throws Exception {

		System.out.println("[STAT_CE_CP] START | cMainRef=" + cMainRef);

		java.util.List<HashMap<String, String>> list = new java.util.ArrayList<>();
		String ds = DSManager.getTrxDS("CSBANK", "US");

		try {
			CSSQLStatement stmt = new CSSQLStatement(CSSQLStatement.I_SQL_TYPE_SELECT, "EXIMTRX.STAT_CE_CP", ds);

			stmt.addField("C_MAIN_REF", null, null);
			stmt.addField("EMAIL_ADD", null, null);
			stmt.addField("TEL_NO", null, null);
			stmt.addField("REJ_REASON", null, null);

			String whereClause = "WHERE C_MAIN_REF = ?";
			Object[] values = { cMainRef };
			Integer[] types = { Types.VARCHAR };

			stmt.setClause(whereClause, values, types);

			String sql = stmt.genSqlString();
			System.out.println("[STAT_CE_CP] SQL: " + sql);

			DocumentImpl resultDoc = (DocumentImpl) CommDAOHelper.getInstance().commExecuteQuery(sql, ds);

			if (resultDoc != null) {

				Element root = resultDoc.getDocumentElement();
				NodeList records = root.getElementsByTagName("record");

				for (int i = 0; i < records.getLength(); i++) {

					Node record = records.item(i);

					HashMap<String, String> map = new HashMap<>();

					map.put("EMAIL_ADD", XMLManager.getChildNodeValue(record, "EMAIL_ADD", true));
					map.put("TEL_NO", XMLManager.getChildNodeValue(record, "TEL_NO", true));
					map.put("NAME", "");
					String rejReason = XMLManager.getChildNodeValue(record, "REJ_REASON", true);
					// Keep map key stable for existing mail flow.
					map.put("REJECT_REASON", rejReason);
					list.add(map);
				}
			}

		} catch (Exception e) {
			System.out.println("[STAT_CE_CP] ERROR");
			e.printStackTrace();
		}

		System.out.println("[STAT_CE_CP] END | count=" + list.size());

		return list;
	}

	public void sendInvitationEmailForReject(String mainRef) throws Exception {

		System.out.println("[REJECT MAIL] START");

		java.util.List<HashMap<String, String>> list = fetchStatCECPDetails(mainRef);

		if (list == null || list.isEmpty()) {
			System.out.println("[REJECT MAIL] No data found in STAT_CE_CP");
			return;
		}

		for (HashMap<String, String> data : list) {

		    String email = data.get("EMAIL_ADD");
		    String name = data.get("NAME");
		    String rejectReason = data.get("REJECT_REASON");

		    if (rejectReason == null) {
		        rejectReason = "";
		    }

		    if (name == null) {
		        name = "";
		    }

		    if (email == null || email.trim().isEmpty()) {
		        System.out.println("[REJECT MAIL] Skipping record - email empty");
		        continue;
		    }

		    String baseLink = generateRejectRegistrationLink(mainRef, email, rejectReason);

		    System.out.println("[REJECT MAIL] Sending to: " + email);

		    sendRejectMail(name, email, baseLink, rejectReason);
		}
		System.out.println("[REJECT MAIL] END");
	}

	public void sendInvitationEmailForReject(String mainRef, String email, String name, String rejectReason)
			throws Exception {
		String baseLink = generateRejectRegistrationLink(mainRef, email, rejectReason);
		System.out.println("[REJECT MAIL] Sending to: " + email);
		sendRejectMail(name, email, baseLink, rejectReason);
	}

}
