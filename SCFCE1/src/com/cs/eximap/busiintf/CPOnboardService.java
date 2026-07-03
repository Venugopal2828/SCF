package com.cs.eximap.busiintf;

import java.io.File;
import java.io.StringReader;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.UUID;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import com.fs.service.RegistrationTokenService;

import com.cs.ce.env.PathUtil;
import com.cs.core.dao.DSManager;
import com.cs.core.pojo.bo.FuncData;
import com.cs.core.pojo.bo.SimpleDO;
import com.cs.core.request.Request;
import com.cs.core.result.Result;
import com.cs.core.xml.object.funcattr.component.Component;
import com.cs.eximap.utility.APLog;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.cs.core.request.*;
import com.fs.service.SendDataToEE;

public class CPOnboardService extends CEBusiintfAdapter {
	private static final String BK_GROUP_ID = "CSBANK";
	private static final String CNTY_CODE = "US";
	private static final String MODULE = "FADA";
	private static final String MODULE_TYPE = "TRANS";
	private static final String MAIL_STATUS = "S";
	private static final String MSEND_NAME = "CSBankSupport";
	private static final String MTMPL_NAME = "ReleaseCounterParty";
	private static final String MTEMPL_DESC = "ReleaseCounterParty";
	private static final String MAIL_SENDTYPE = "TXT";

	@Override
	public Result authorizeData(Request arg0, Component arg1, Result arg2) throws Exception {
		return null;
	}

	@Override
	public Result cancelationData(Request arg0, Component arg1, Result arg2) throws Exception {
		return null;
	}

	@Override
	public Result deleteData(Request arg0, Component arg1, Result arg2) throws Exception {
		return null;
	}

	@Override
	public Result deleteMasterData(Request arg0, Component arg1, Result arg2) throws Exception {
		return null;
	}

	@Override
	public Result getDataMaster(Request arg0, Component arg1, Result arg2) throws Exception {
		return null;
	}

	@Override
	public Result getDataPending(Request arg0, Component arg1, Result arg2) throws Exception {
		return null;
	}

	@Override
	public Result inqData(Request arg0, Component arg1, Result arg2) throws Exception {
		return null;
	}

	@Override
	public Result reAssignData(Request arg0, Component arg1, Result arg2) throws Exception {
		return null;
	}

	@Override

	public Result releaseData(Request req, Component arg1, Result result) throws Exception {
		APLog.reportLog("VMTEST===releaseData Method");
		FuncData funcData = (FuncData) req.getRequestInfo();

		SimpleDO realOriData = funcData.getRealOriData();
		if (realOriData != null) {
			String[] keys = realOriData.getKeys();
			APLog.reportLog("VMTEST===realOriData Size==" + (keys != null ? keys.length : 0));
			if (keys != null) {
				for (String key : keys) {
					APLog.reportLog("VMTEST===realOriData [" + key + "] : " + realOriData.get(key));
				}
			}

			String contractRef = realOriData.get("FA_CONTRACT_REF");
			String mainRef = realOriData.get("C_MAIN_REF");
			String doTempData = realOriData.get("DO_TEMP_DATA");
			String cntrDocNo = realOriData.get("FA_CNTR_DOC_NO");
			APLog.reportLog(
					"VMTEST===contractRef==" + contractRef + " | mainRef==" + mainRef + " | cntrDocNo==" + cntrDocNo);
			APLog.reportLog("VMTEST===DO_TEMP_DATA==" + doTempData);

			List<String> cpMails = extractCpMails(doTempData);
			APLog.reportLog("VMTEST===CP_MAIL list==" + cpMails);

			String unitCode = realOriData.get("C_UNIT_CODE");
			String applyBy = realOriData.get("C_CREA_BY");
			String applyBu = realOriData.get("C_UNIT_CODE");
			String eventTimes = realOriData.get("I_EVENT_TIMES");
			String trxRef = realOriData.get("C_TRX_REF");

			List<CpEntry> cpEntries = extractCpEntries(doTempData);
			APLog.reportLog("VMTEST===CP entries count==" + cpEntries.size());

			JsonNode smtpCfg = null;
			JsonNode mailCfg = null;
			ObjectMapper mapper = new ObjectMapper();
			JsonNode config = mapper.readTree(new File(PathUtil.getCESYSPath() + "/mail-config.json"));
			smtpCfg = config.get("smtp");
			mailCfg = config.get("mail");
			APLog.reportLog("VMTEST===mail-config.json loaded from: " + PathUtil.getCESYSPath() + "/mail-config.json");

			String trxDs = DSManager.getTrxDS(BK_GROUP_ID, CNTY_CODE);

			for (CpEntry cp : cpEntries) {
				APLog.reportLog("VMTEST===Processing CP_ID==" + cp.cpId + " | CP_NAME==" + cp.cpName + " | CP_MAIL=="
						+ cp.cpMail + " | CP_SELF_ENROL==" + cp.cpSelfEnrol);

				// ✅ cpSelfEnrol=YES — do token + DB inserts + mail
				// ✅ cpSelfEnrol=NO — skip everything, no token, no DB, no mail
				if ("YES".equalsIgnoreCase(cp.cpSelfEnrol)) {
					APLog.reportLog("VMTEST===cpSelfEnrol=YES — proceeding with token + mail" + " | cpId==" + cp.cpId);

					String mailId = UUID.randomUUID().toString().replace("-", "");
					String sendFrom = mailCfg != null ? mailCfg.get("from").asText() : "support@csbank.com";
					String subject = mailCfg != null ? mailCfg.get("subject").asText().replace("_", " ")
							: "You have been invited to onboard";
					String bodyTmpl = mailCfg != null ? mailCfg.get("body").asText()
							: "Dear ${name},\n\nWish to inform you that you have been invited"
									+ " to be onboard.\n\n\nRegards,\nCEBaseLine Support" + " [www.chinasystems.com]";

					// ✅ Token generation — only for YES (name + mobile from CE DO, same as EE)
					String customerName = cp.cpName != null ? cp.cpName : "";
					String mobile = cp.cntcDetl != null ? cp.cntcDetl : "";
					RegistrationTokenService tokenService = new RegistrationTokenService();
					HashMap<String, String> tokenResult = tokenService.generateRegistrationToken(mainRef, cp.cpId,
							cp.cpMail, customerName, mobile, contractRef, null);
					String inviteLink = tokenResult.get("REGISTRATION_LINK");
					APLog.reportLog("VMTEST===Invite Link==" + inviteLink);

					String mailBody = bodyTmpl.replace("${name}", cp.cpName != null ? cp.cpName : "").replace("${link}",
							inviteLink);

					// ✅ DB insert — only for YES
					try {
						insertNotifyEmail(mailId, applyBu, applyBy, sendFrom, cp.cpMail, subject, mailBody, trxDs);
						APLog.reportLog(
								"VMTEST===TRX_NOTIFY_EMAIL inserted | mailId==" + mailId + " | to==" + cp.cpMail);
					} catch (Exception dbEx) {
						APLog.reportLog(
								"VMTEST===ERROR TRX_NOTIFY_EMAIL | to==" + cp.cpMail + " : " + dbEx.getMessage());
					}

					// ✅ DB insert ref trx — only for YES
					try {
						insertNotifyEmailRefTrx(mailId, unitCode, mainRef, eventTimes, trxRef, trxDs);
						APLog.reportLog("VMTEST===TRX_NOTIFY_EMAIL_REF_TRX inserted | mailId==" + mailId);
					} catch (Exception dbEx) {
						APLog.reportLog("VMTEST===ERROR TRX_NOTIFY_EMAIL_REF_TRX | mailId==" + mailId + " : "
								+ dbEx.getMessage());
					}

					// ✅ Send mail — only for YES
					try {
						if (smtpCfg != null && mailCfg != null) {
							sendCpMail(cp.cpMail, mailBody, subject, smtpCfg, sendFrom);
							APLog.reportLog("VMTEST===Mail SENT to==" + cp.cpMail + " | cpSelfEnrol=YES");
						} else {
							APLog.reportLog(
									"VMTEST===SKIPPING mail — mail-config.json" + " not loaded for: " + cp.cpMail);
						}
					} catch (Exception mailEx) {
						APLog.reportLog("VMTEST===ERROR sending mail | to==" + cp.cpMail + " : " + mailEx.getMessage());
					}

				} else {
					// ✅ cpSelfEnrol=NO — skip everything
					APLog.reportLog("VMTEST===cpSelfEnrol=NO — skipping token + mail" + " | cpId==" + cp.cpId
							+ " | cpMail==" + cp.cpMail);
				}
			}

			// ✅ Send ALL CP entries to EE regardless of cpSelfEnrol
			if (!cpEntries.isEmpty()) {
				try {
					List<Map<String, String>> cpMaps = new ArrayList<>();
					for (CpEntry cp : cpEntries) {
						Map<String, String> m = new HashMap<>();
						m.put("cpId", cp.cpId);
						m.put("cpName", cp.cpName);
						m.put("cpMail", cp.cpMail);
						m.put("cntcDetl", cp.cntcDetl);
						m.put("faContractRef", contractRef);
						m.put("cpSelfEnrol", cp.cpSelfEnrol);
						m.put("custFlag", cp.custFlag);
						m.put("counterAgmNo", cp.counterAgmNo);
						m.put("counterCeFlg", cp.counterCeFlg);
						m.put("counterAcc", cp.counterAcc);
						m.put("counterAddMl", cp.counterAddMl);
						m.put("counterCnty", cp.counterCnty);
						m.put("counterContEm", cp.counterContEm);
						m.put("counterCt", cp.counterCt);
						m.put("counterProv", cp.counterProv);
						m.put("counterRegNo", cp.counterRegNo);
						m.put("counterStr", cp.counterStr);
						m.put("serviceReq", cp.serviceReq);
						m.put("counterContNm", cp.counterContNm);
						m.put("lmtAmt", cp.lmtAmt);
						m.put("lmtCcy", cp.lmtCcy);
						m.put("lmtValDt", cp.lmtValDt);
						m.put("lmtDueDt", cp.lmtDueDt);
						cpMaps.add(m);
					}
					String cpTrxRef = "TRX_REF_CP_" + System.currentTimeMillis();
					SendDataToEE sender = new SendDataToEE();
					String eeResponse = sender.pushCpDataToEE(mainRef, cpTrxRef, cpMaps);
					APLog.reportLog("VMTEST===CP data sent to EE | response==" + eeResponse);
				} catch (Exception eeEx) {
					APLog.reportLog("VMTEST===ERROR sending CP data to EE: " + eeEx.getMessage());
				}
			} else {
				APLog.reportLog("VMTEST===No CP entries to send to EE");
			}

		} else {
			APLog.reportLog("VMTEST===realOriData is null");
		}

		APLog.reportLog("VMTEST===releaseData END");
		return result;
	}

	@Override
	public Result releaseDeleteMaster(Request arg0, Component arg1, Result arg2) throws Exception {
		return null;
	}

	private SendDataToEE cpSender = new SendDataToEE();

	private List<String> extractCpMails(String doTempData) {
		List<String> mails = new ArrayList<String>();
		if (doTempData == null || doTempData.trim().isEmpty()) {
			return mails;
		}
		try {
			DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
			DocumentBuilder builder = factory.newDocumentBuilder();
			Document doc = builder.parse(new InputSource(new StringReader(doTempData)));
			NodeList nodeList = doc.getElementsByTagName("CP_MAIL");
			for (int i = 0; i < nodeList.getLength(); i++) {
				String mail = nodeList.item(i).getTextContent();
				if (mail != null && !mail.trim().isEmpty()) {
					mails.add(mail.trim());
				}
			}
		} catch (Exception e) {
			APLog.reportLog("VMTEST===Error parsing DO_TEMP_DATA: " + e.getMessage());
		}
		return mails;
	}

	private void insertNotifyEmail(String mailId, String applyBu, String applyBy, String sendFrom, String sendTo,
			String subject, String content, String trxDs) throws Exception {

		// Use SYSDATE for D_INIT_DATE — correct DB date, no type mismatch
		String sql = "INSERT INTO CETRX.TRX_NOTIFY_EMAIL "
				+ "(C_MAIL_ID, C_BK_GROUP_ID, C_CNTY_CODE, C_MODULE_TYPE, C_MAIL_STATUS, "
				+ " C_MSEND_NAME, C_MTMPL_NAME, C_MTEMPL_DESC, D_INIT_DATE, "
				+ " C_APPLY_BU, C_APPLY_BY, C_SUBJECT, C_SEND_FROM, C_SEND_TO, " + " C_CC, C_CONTENT, C_MAIL_SENDTYPE) "
				+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, SYSDATE, ?, ?, ?, ?, ?, ?, ?, ?)";

		APLog.reportLog("VMTEST===TRX_NOTIFY_EMAIL INSERT | mailId==" + mailId + " | to==" + sendTo);

		try (Connection con = DSManager.getConnection(trxDs); PreparedStatement ps = con.prepareStatement(sql)) {

			ps.setString(1, mailId);
			ps.setString(2, BK_GROUP_ID);
			ps.setString(3, CNTY_CODE);
			ps.setString(4, MODULE_TYPE);
			ps.setString(5, MAIL_STATUS); // "S" — skip MailHelper reprocessing
			ps.setString(6, MSEND_NAME);
			ps.setString(7, MTMPL_NAME);
			ps.setString(8, MTEMPL_DESC);
			// position 9 = SYSDATE (DB function, no bind param)
			ps.setString(9, applyBu);
			ps.setString(10, applyBy);
			ps.setString(11, subject);
			ps.setString(12, sendFrom);
			ps.setString(13, sendTo);
			ps.setString(14, ""); // C_CC
			ps.setString(15, content); // C_CONTENT (CLOB — driver handles it)
			ps.setString(16, MAIL_SENDTYPE);

			int rows = ps.executeUpdate();
			APLog.reportLog("VMTEST===TRX_NOTIFY_EMAIL rows inserted==" + rows);
		}
	}

	private void insertNotifyEmailRefTrx(String mailId, String unitCode, String mainRef, String eventTimes,
			String trxRef, String trxDs) throws Exception {

		String sql = "INSERT INTO CETRX.TRX_NOTIFY_EMAIL_REF_TRX "
				+ "(C_MAIL_ID, C_BK_GROUP_ID, C_CNTY_CODE, C_MODULE, "
				+ " C_UNIT_CODE, C_MAIN_REF, I_EVENT_TIMES, C_TRX_REF) " + "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

		APLog.reportLog("VMTEST===TRX_NOTIFY_EMAIL_REF_TRX INSERT | mailId==" + mailId);

		try (Connection con = DSManager.getConnection(trxDs); PreparedStatement ps = con.prepareStatement(sql)) {

			ps.setString(1, mailId);
			ps.setString(2, BK_GROUP_ID);
			ps.setString(3, CNTY_CODE);
			ps.setString(4, MODULE);
			ps.setString(5, unitCode);
			ps.setString(6, mainRef);
			// I_EVENT_TIMES — insert as int if not null, else 0
			try {
				ps.setInt(7, Integer.parseInt(eventTimes));
			} catch (Exception e) {
				ps.setInt(7, 0);
			}
			ps.setString(8, trxRef);

			int rows = ps.executeUpdate();
			APLog.reportLog("VMTEST===TRX_NOTIFY_EMAIL_REF_TRX rows inserted==" + rows);
		}
	}

	private void sendCpMail(String email, String body, String subject, JsonNode smtpCfg, String fromAddress)
			throws Exception {

		String smtpHost = smtpCfg.get("host").asText();
		String smtpPort = smtpCfg.get("port").asText();
		String smtpAuth = smtpCfg.get("auth").asText();
		String smtpStartTls = smtpCfg.get("starttls").asText();
		String smtpUser = smtpCfg.get("user").asText();
		String smtpPass = smtpCfg.get("pass").asText();

		Properties props = new Properties();
		props.put("mail.smtp.host", smtpHost);
		props.put("mail.smtp.port", smtpPort);
		props.put("mail.smtp.auth", smtpAuth);
		props.put("mail.smtp.starttls.enable", smtpStartTls);
		props.put("mail.smtp.socketFactory.port", "587");
		props.put("mail.smtp.ssl.trust", smtpHost);

		Session session = Session.getInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(smtpUser, smtpPass);
			}
		});

		Message message = new MimeMessage(session);
		message.setFrom(new InternetAddress(fromAddress));
		message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
		message.setSubject(subject);
		message.setText(body);

		APLog.reportLog("[MAIL] Sending to: " + email);
		Transport.send(message);
		APLog.reportLog("[MAIL] Transport complete for: " + email);
	}

	/**
	 * Parses DO_TEMP_DATA XML and returns CP_ID + CP_NAME + CP_MAIL for each CP_ADD
	 * block found.
	 */
	private List<CpEntry> extractCpEntries(String doTempData) {
		List<CpEntry> list = new ArrayList<CpEntry>();
		if (doTempData == null || doTempData.trim().isEmpty())
			return list;
		try {
			DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
			DocumentBuilder builder = factory.newDocumentBuilder();
			Document doc = builder.parse(new InputSource(new StringReader(doTempData)));

			NodeList cpNodes = doc.getElementsByTagName("CP_ADD");
			for (int i = 0; i < cpNodes.getLength(); i++) {
				Element cpEl = (Element) cpNodes.item(i);

				String cpId = getChildText(cpEl, "CP_ID");
				String cpName = getChildText(cpEl, "CP_NAME");
				String cpMail = getChildText(cpEl, "CP_MAIL");
				String cntcDetl = getChildText(cpEl, "CNTC_DETL");
				String cpSelfEnrol = getChildText(cpEl, "CP_SELF_ENROL");
				String custFlag = getChildText(cpEl, "CUST_FLAG");
				String counterAgmNo = getChildText(cpEl, "COUNTER_AGM_NO");
				String counterCeFlg = getChildText(cpEl, "COUNTER_CE_FLG");
				String counterAcc = getChildText(cpEl, "COUNTER_ACC");
				String counterAddMl = getChildText(cpEl, "COUNTER_ADD_ML");
				String counterCnty = getChildText(cpEl, "COUNTER_CNTY");
				String counterContEm = getChildText(cpEl, "COUNTER_CONT_EM");
				String counterCt = getChildText(cpEl, "COUNTER_CT");
				String counterProv = getChildText(cpEl, "COUNTER_PROV");
				String counterRegNo = getChildText(cpEl, "COUNTER_REG_NO");
				String counterStr = getChildText(cpEl, "COUNTER_STR");
				String serviceReq = getChildText(cpEl, "SERVICE_REQ");
				String counterContNm = getChildText(cpEl, "COUNTER_CONT_NM");
				String lmtAmt = getChildText(cpEl, "LMT_AMT");
				String lmtCcy = getChildText(cpEl, "LMT_CCY");
				String lmtValDt = getChildText(cpEl, "LMT_VAL_DT");
				String lmtDueDt = getChildText(cpEl, "LMT_DUE_DT");

				if (cpMail != null && !cpMail.trim().isEmpty()) {
					list.add(new CpEntry(cpId, cpName, cpMail.trim(), cntcDetl, cpSelfEnrol, custFlag, counterAgmNo,
							counterCeFlg, counterAcc, counterAddMl, counterCnty, counterContEm, counterCt, counterProv,
							counterRegNo, counterStr, serviceReq, counterContNm, lmtAmt, lmtCcy, lmtValDt, lmtDueDt));
					APLog.reportLog("VMTEST===Extracted CP_ID==" + cpId + " | CP_NAME==" + cpName + " | CP_MAIL=="
							+ cpMail + " | CNTC_DETL==" + cntcDetl);
				}
			}
		} catch (Exception e) {
			APLog.reportLog("VMTEST===Error in extractCpEntries: " + e.getMessage());
		}
		return list;
	}

	/** helper: get text content of first matching child element. */
	private String getChildText(Element parent, String tag) {
		NodeList nl = parent.getElementsByTagName(tag);
		if (nl != null && nl.getLength() > 0) {
			String val = nl.item(0).getTextContent();
			return (val != null) ? val.trim() : "";
		}
		return "";
	}

	/** Lightweight holder for one counterparty. */
	private static class CpEntry {
		String cpId;
		String cpName;
		String cpMail;
		String cntcDetl;
		String cpSelfEnrol;
		String custFlag;
		String counterAgmNo;
		String counterCeFlg;
		String counterAcc;
		String counterAddMl;
		String counterCnty;
		String counterContEm;
		String counterCt;
		String counterProv;
		String counterRegNo;
		String counterStr;
		String serviceReq;
		String counterContNm;
		String lmtAmt;
		String lmtCcy;
		String lmtValDt;
		String lmtDueDt;

		CpEntry(String cpId, String cpName, String cpMail, String cntcDetl, String cpSelfEnrol, String custFlag,
				String counterAgmNo, String counterCeFlg, String counterAcc, String counterAddMl, String counterCnty,
				String counterContEm, String counterCt, String counterProv, String counterRegNo, String counterStr,
				String serviceReq, String counterContNm, String lmtAmt, String lmtCcy, String lmtValDt,
				String lmtDueDt) {
			this.cpId = cpId;
			this.cpName = cpName;
			this.cpMail = cpMail;
			this.cntcDetl = cntcDetl;
			this.cpSelfEnrol = cpSelfEnrol;
			this.custFlag = custFlag;
			this.counterAgmNo = counterAgmNo;
			this.counterCeFlg = counterCeFlg;
			this.counterAcc = counterAcc;
			this.counterAddMl = counterAddMl;
			this.counterCnty = counterCnty;
			this.counterContEm = counterContEm;
			this.counterCt = counterCt;
			this.counterProv = counterProv;
			this.counterRegNo = counterRegNo;
			this.counterStr = counterStr;
			this.serviceReq = serviceReq;
			this.counterContNm = counterContNm;
			this.lmtAmt = lmtAmt;
			this.lmtCcy = lmtCcy;
			this.lmtValDt = lmtValDt;
			this.lmtDueDt = lmtDueDt;
		}
	}
}