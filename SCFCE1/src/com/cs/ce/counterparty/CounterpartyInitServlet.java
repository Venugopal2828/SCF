package com.cs.ce.counterparty;

import java.io.IOException;

import java.util.HashMap;

import java.util.Map;

import javax.servlet.ServletException;

import javax.servlet.http.HttpServlet;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpServletResponse;

import com.cs.ce.core.helper.WSDBHelper;

import com.cs.core.dao.DSManager;

import com.cs.core.dao.exec.SQLGenTool;

import com.cs.core.dao.exec.SQLGenToolHelper;
import com.cs.core.dao.exec.SQLStatement;
import com.cs.eximap.utility.APLog;

import org.json.JSONObject;
import org.json.JSONArray;
import com.fs.service.SendDataToEE;

public class CounterpartyInitServlet extends HttpServlet {
	private static SendDataToEE sender = new SendDataToEE();

	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		String paraVal = req.getParameter("_PARA_VAL");
		APLog.reportLog("value sample is ... " + paraVal);
		String attachmentsJson = req.getParameter("attachments");
		if (attachmentsJson == null || attachmentsJson.trim().isEmpty())
			attachmentsJson = "[]";
		APLog.reportLog("ATTACHMENTS JSON = " + attachmentsJson);
		Map<String, String> paraMap = parseParaVal(paraVal);
		String existCus = paraMap.get("EXIST_CUST");
		String cifId = paraMap.get("CIF_ID");
		String custNm = paraMap.get("CUST_NM");
		String custContPrsn = paraMap.get("CUST_CONT_PRSN");
		String custEmail = paraMap.get("CUST_EMAIL");
		String custMob = paraMap.get("CUST_MOB");
		String custAddr = paraMap.get("CUST_ADDR");
		String custContPrsn1 = paraMap.get("CUST_CONT_PRSN1");
		String custEmail1 = paraMap.get("CUST_EMAIL1");
		String custMob1 = paraMap.get("CUST_MOB1");
		String custContPrsn2 = paraMap.get("CUST_CONT_PRSN2");
		String custEmail2 = paraMap.get("CUST_EMAIL2");
		String custMob2 = paraMap.get("CUST_MOB2");
		String busRegNo = paraMap.get("BUS_REG_NO");
		String vatNo = paraMap.get("VAT_NO");
		String indType = paraMap.get("IND_TYPE");
		String bankNm = paraMap.get("BANK_NM");
		String accNo = paraMap.get("ACC_NO");
		String accHldrNm = paraMap.get("ACC_HLDR_NM");
		String ifscCode = paraMap.get("IFSC_CODE");
		String branchAddr = paraMap.get("BRANCH_ADDR");
		String payMthd = paraMap.get("PAY_MTHD");
		String ccy = paraMap.get("CCY");
		String rejectReason = paraMap.get("Reject_Reason");
		String aggrNo = paraMap.get("AGGR_NO");
		if (aggrNo == null || aggrNo.trim().isEmpty())
			aggrNo = paraMap.get("FA_CONTRACT_REF");
		if (aggrNo == null || aggrNo.trim().isEmpty())
			aggrNo = req.getParameter("AGGR_NO");
		if (aggrNo == null || aggrNo.trim().isEmpty())
			aggrNo = req.getParameter("FA_CONTRACT_REF");
		if ((aggrNo == null || aggrNo.trim().isEmpty()) && req.getSession(false) != null) {
			Object sessionAggr = req.getSession().getAttribute("aggrNo");
			if (sessionAggr != null)
				aggrNo = sessionAggr.toString();
		}
		if (aggrNo != null)
			aggrNo = aggrNo.trim();
		APLog.reportLog("EXIST_CUST        = " + existCus);
		APLog.reportLog("CIF_ID            = " + cifId);
		APLog.reportLog("CUST_NM           = " + custNm);
		APLog.reportLog("CUST_CONT_PRSN    = " + custContPrsn);
		APLog.reportLog("CUST_EMAIL        = " + custEmail);
		APLog.reportLog("CUST_MOB          = " + custMob);
		APLog.reportLog("CUST_ADDR         = " + custAddr);
		APLog.reportLog("BUS_REG_NO        = " + busRegNo);
		APLog.reportLog("VAT_NO            = " + vatNo);
		APLog.reportLog("IND_TYPE          = " + indType);
		APLog.reportLog("BANK_NM           = " + bankNm);
		APLog.reportLog("ACC_NO            = " + accNo);
		APLog.reportLog("ACC_HLDR_NM       = " + accHldrNm);
		APLog.reportLog("IFSC_CODE         = " + ifscCode);
		APLog.reportLog("BRANCH_ADDR       = " + branchAddr);
		APLog.reportLog("PAY_MTHD          = " + payMthd);
		APLog.reportLog("CCY               = " + ccy);
		APLog.reportLog("Reject_Reason     = " + rejectReason);
		APLog.reportLog("AGGR_NO           = " + aggrNo);
		Map<String, String> cpMap = new HashMap<>();
		cpMap.put("existCus", existCus);
		cpMap.put("cifId", cifId);
		cpMap.put("custNm", custNm);
		cpMap.put("custContPrsn", custContPrsn);
		cpMap.put("custEmail", custEmail);
		cpMap.put("custMob", custMob);
		cpMap.put("custAddr", custAddr);
		cpMap.put("custContPrsn1", custContPrsn1);
		cpMap.put("custEmail1", custEmail1);
		cpMap.put("custMob1", custMob1);

		cpMap.put("custContPrsn2", custContPrsn2);
		cpMap.put("custEmail2", custEmail2);
		cpMap.put("custMob2", custMob2);
		cpMap.put("busRegNo", busRegNo);
		cpMap.put("vatNo", vatNo);
		cpMap.put("indType", indType);
		cpMap.put("bankNm", bankNm);
		cpMap.put("accNo", accNo);
		cpMap.put("accHldrNm", accHldrNm);
		cpMap.put("ifscCode", ifscCode);
		cpMap.put("branchAddr", branchAddr);
		cpMap.put("payMthd", payMthd);
		cpMap.put("ccy", ccy);
		cpMap.put("rejectReason", rejectReason);
		cpMap.put("aggrNo", aggrNo);

		APLog.reportLog("REJECT_REASON = " + rejectReason);
		res.setContentType("application/json");
		res.setCharacterEncoding("UTF-8");
		try {
			/* String cMainRef = "MAIN_REF_" + System.currentTimeMillis(); */
			String cMainRef = paraMap.get("C_MAIN_REF");

			if (cMainRef == null || cMainRef.trim().isEmpty()) {
				throw new Exception("C_MAIN_REF is missing from UI");
			}

			APLog.reportLog("FINAL C_MAIN_REF FROM UI === " + cMainRef);

			JSONObject payload = new JSONObject();
			payload.put("cMainRef", cMainRef);
			payload.put("cTrxRef", cMainRef);
			payload.put("cUnitCode", "CSBANK");
			payload.put("cModule", "SCF");
			payload.put("cEventName", "N");
			payload.put("cEventStatus", "N");
			payload.put("existCus", existCus);
			payload.put("cifId", cifId);
			payload.put("custNm", custNm);
			payload.put("faBuyerNm", custNm);
			payload.put("faBuyerContMail", custEmail);
			payload.put("faBuyerContTel", custMob);
			payload.put("custContPrsn1", custContPrsn1);
			payload.put("custEmail1", custEmail1);
			payload.put("custMob1", custMob1);
			payload.put("custContPrsn2", custContPrsn2);
			payload.put("custEmail2", custEmail2);
			payload.put("custMob2", custMob2);
			payload.put("busRegNo", busRegNo);
			payload.put("vatNo", vatNo);
			payload.put("indType", indType);
			payload.put("faSelNm", bankNm);
			payload.put("accountNo", accNo);
			payload.put("payMthd", payMthd);
			payload.put("ccy", ccy);
			if (aggrNo != null && !aggrNo.isEmpty()) {
				payload.put("aggrNo", aggrNo);
				payload.put("faContractRef", aggrNo);
			}
			// ✅ STEP 1: Create attachments FIRST
			JSONArray attachments = new JSONArray();
			JSONArray uploadedAttachments = new JSONArray(attachmentsJson);
			APLog.reportLog("TOTAL ATTACHMENTS = " + uploadedAttachments.length());
			if (uploadedAttachments != null) {
				attachments = uploadedAttachments;
				APLog.reportLog("USING ORIGINAL ATTACHMENTS FROM UI");
				APLog.reportLog("TOTAL ATTACHMENTS = " + attachments.length());
				for (int j = 0; j < attachments.length(); j++) {
					JSONObject obj = attachments.getJSONObject(j);
					APLog.reportLog("FILE NAME = " + obj.optString("fileName"));
					APLog.reportLog("FILE TYPE = " + obj.optString("fileType"));
					APLog.reportLog("DOC TYPE = " + obj.optString("docType"));
				}
			}
			APLog.reportLog("TOTAL ATTACHMENTS = " + attachments.length());
			APLog.reportLog("FINAL ATTACHMENTS JSON = ");
			APLog.reportLog(attachments.toString(2));
			String bkgrp = "CSBANK", cntycd = "US";
			String trxDs = DSManager.getTrxDS(bkgrp, cntycd);
			boolean exists = recordExists(cMainRef, trxDs);

			if (exists) {
				APLog.reportLog("EXISTING UPDATE");
				updateRecord(cpMap, cMainRef, attachments.toString(), trxDs);
			} else {
				APLog.reportLog("NEW INSERT");
				insertRecord(cpMap, cMainRef, attachments.toString());
			}
			payload.put("attachment", attachments);
			payload.put("attachments", attachments);
			APLog.reportLog("FINAL PAYLOAD ATTACHMENT COUNT = " + attachments.length());
			APLog.reportLog("FINAL PAYLOAD TO EE: " + payload.toString());
			APLog.reportLog("FINAL PAYLOAD TO EE: " + payload.toString());
			APLog.reportLog("TOTAL ATTACHMENTS SENT TO EE = " + attachments.length());
			for (int i = 0; i < attachments.length(); i++) {
				JSONObject obj = attachments.getJSONObject(i);
				APLog.reportLog("DOC TYPE SENT = " + obj.getString("docType"));
			}
			try {
				sender.pushCounterpartyToScf(cMainRef, cMainRef, payload.toString());
				APLog.reportLog("Counterparty data pushed successfully to EE");
			} catch (Exception eeEx) {
				APLog.reportLog("EE PUSH FAILED BUT FORM SUBMISSION CONTINUES");
				eeEx.printStackTrace();
			}
			res.getWriter().write("{\"status\":\"SUCCESS\",\"message\":\"Counterparty created successfully\"}");
		} catch (Exception e) {
			e.printStackTrace();
			res.getWriter().write("{\"status\":\"ERROR\",\"message\":\"" + e.getMessage().replace("\"", "") + "\"}");
		}
	}

	private Map<String, String> parseParaVal(String paraVal) {
		Map<String, String> map = new HashMap<>();
		if (paraVal == null || paraVal.trim().isEmpty())
			return map;
		String[] pairs = paraVal.split(";");
		byte b;
		int i;
		String[] arrayOfString1;
		for (i = (arrayOfString1 = pairs).length, b = 0; b < i;) {
			String pair = arrayOfString1[b];
			if (pair.contains(":")) {
				String[] kv = pair.split(":", 2);
				map.put(kv[0], kv[1]);
			}
			b++;
		}
		return map;
	}

	private void insertRecord(Map<String, String> cpMap, String cMainRef, String attachmentsJson) throws Exception {
		String bkgrp = "CSBANK", cntycd = "US";
		APLog.reportLog("Inside insertRecord | bkgrp=" + bkgrp + ", cntycd=" + cntycd);
		if (bkgrp == null || cntycd == null) {
			APLog.reportLog("Error: bkgrp or cntycd is null in insertRecord");
			throw new Exception("Bank group or country code is null");
		}
		String trxDs = DSManager.getTrxDS(bkgrp, cntycd);
		if (trxDs == null) {
			APLog.reportLog("Error: Unable to retrieve trxDs from DSManager.getTrxDS");
			throw new Exception("Unable to retrieve transaction data source");
		}
		String dbType = DSManager.getDBType(trxDs);
		String mTable = DSManager.getSchemaedTableName(trxDs, "COUNTERPARTY_DATA");
		APLog.reportLog("Datasource      : " + trxDs);
		APLog.reportLog("DB Type         : " + dbType);
		APLog.reportLog("Resolved Table  : " + mTable);
		SQLGenTool genSql = SQLGenToolHelper.getInsertTool(dbType);
		genSql.setTable(mTable);
		genSql.addField("C_MAIN_REF", cMainRef, 12);
		genSql.addField("EXIST_CUST", cpMap.get("existCus"), 1);
		genSql.addField("CIF_ID", cpMap.get("cifId"), 12);
		genSql.addField("CUST_NM", cpMap.get("custNm"), 12);
		genSql.addField("CUST_EMAIL", cpMap.get("custEmail"), 12);
		genSql.addField("CUST_MOB", cpMap.get("custMob"), 12);
		genSql.addField("CUST_ADDR", cpMap.get("custAddr"), 12);
		genSql.addField("CUST_CONT_PRSN1", cpMap.get("custContPrsn1"), 12);
		genSql.addField("CUST_EMAIL1", cpMap.get("custEmail1"), 12);
		genSql.addField("CUST_MOB1", cpMap.get("custMob1"), 12);

		genSql.addField("CUST_CONT_PRSN2", cpMap.get("custContPrsn2"), 12);
		genSql.addField("CUST_EMAIL2", cpMap.get("custEmail2"), 12);
		genSql.addField("CUST_MOB2", cpMap.get("custMob2"), 12);
		genSql.addField("BUS_REG_NO", cpMap.get("busRegNo"), 12);
		genSql.addField("VAT_NO", cpMap.get("vatNo"), 12);
		genSql.addField("IND_TYPE", cpMap.get("indType"), 12);
		genSql.addField("BANK_NM", cpMap.get("bankNm"), 12);
		genSql.addField("ACC_NO", cpMap.get("accNo"), 12);
		genSql.addField("ACC_HLDR_NM", cpMap.get("accHldrNm"), 12);
		genSql.addField("IFSC_CODE", cpMap.get("ifscCode"), 12);
		genSql.addField("BRANCH_ADDR", cpMap.get("branchAddr"), 12);
		genSql.addField("PAY_MTHD", cpMap.get("payMthd"), 12);
		genSql.addField("CCY", cpMap.get("ccy"), 1);
		genSql.addField("REJECT_REASON", cpMap.get("rejectReason"), 12);
		genSql.addField("AGGR_NO", cpMap.get("aggrNo"), 12);
		if (attachmentsJson == null) {
			attachmentsJson = "[]";
		}
		genSql.addField("ATTACHMENTS", attachmentsJson, java.sql.Types.CLOB);
		SQLStatement insSql = genSql.getSqlStatement();
		APLog.reportLog("Generated SQL   : " + insSql);
		int rowsInserted = WSDBHelper.executeUpdate(insSql, trxDs);
		APLog.reportLog("Rows inserted into COUNTERPARTY_DATA : " + rowsInserted);
	}

	private boolean recordExists(String cMainRef, String trxDs) throws Exception {

		String sql = "SELECT COUNT(1) FROM COUNTERPARTY_DATA WHERE C_MAIN_REF = ?";

		try (java.sql.Connection con = DSManager.getConnection(trxDs);
				java.sql.PreparedStatement ps = con.prepareStatement(sql)) {

			ps.setString(1, cMainRef);

			java.sql.ResultSet rs = ps.executeQuery();

			if (rs.next()) {
				return rs.getInt(1) > 0;
			}
		}

		return false;
	}

	private void updateRecord(Map<String, String> cpMap, String cMainRef, String attachmentsJson, String trxDs)
			throws Exception {

		String dbType = DSManager.getDBType(trxDs);
		String mTable = DSManager.getSchemaedTableName(trxDs, "COUNTERPARTY_DATA");

		SQLGenTool genSql = SQLGenToolHelper.getUpdateTool(dbType);

		genSql.setTable(mTable);
		genSql.addField("CUST_NM", cpMap.get("custNm"), 12);
		genSql.addField("EXIST_CUST", cpMap.get("existCus"), 1);
		genSql.addField("CUST_CONT_PRSN1", cpMap.get("custContPrsn1"), 12);
		genSql.addField("CUST_EMAIL1", cpMap.get("custEmail1"), 12);
		genSql.addField("CUST_MOB1", cpMap.get("custMob1"), 12);

		genSql.addField("CUST_CONT_PRSN2", cpMap.get("custContPrsn2"), 12);
		genSql.addField("CUST_EMAIL2", cpMap.get("custEmail2"), 12);
		genSql.addField("CUST_MOB2", cpMap.get("custMob2"), 12);
		genSql.addField("CUST_EMAIL", cpMap.get("custEmail"), 12);
		genSql.addField("CUST_MOB", cpMap.get("custMob"), 12);
		genSql.addField("CUST_ADDR", cpMap.get("custAddr"), 12);
		genSql.addField("BUS_REG_NO", cpMap.get("busRegNo"), 12);
		genSql.addField("VAT_NO", cpMap.get("vatNo"), 12);
		genSql.addField("IND_TYPE", cpMap.get("indType"), 12);
		genSql.addField("BANK_NM", cpMap.get("bankNm"), 12);
		genSql.addField("ACC_NO", cpMap.get("accNo"), 12);
		genSql.addField("ACC_HLDR_NM", cpMap.get("accHldrNm"), 12);
		genSql.addField("IFSC_CODE", cpMap.get("ifscCode"), 12);
		genSql.addField("BRANCH_ADDR", cpMap.get("branchAddr"), 12);
		genSql.addField("PAY_MTHD", cpMap.get("payMthd"), 12);
		genSql.addField("CCY", cpMap.get("ccy"), 1);
		genSql.addField("REJECT_REASON", cpMap.get("rejectReason"), 12);
		genSql.addField("AGGR_NO", cpMap.get("aggrNo"), 12);
		if (attachmentsJson == null)
			attachmentsJson = "[]";
		genSql.addField("ATTACHMENTS", attachmentsJson, java.sql.Types.CLOB);

		genSql.setClause("WHERE C_MAIN_REF = '" + cMainRef + "'");

		SQLStatement updSql = genSql.getSqlStatement();

		int rows = WSDBHelper.executeUpdate(updSql, trxDs);

		APLog.reportLog("UPDATED ROWS = " + rows);
	}

	private void clearRejectReason(String cMainRef, String trxDs) throws Exception {

		String sql = "UPDATE EXIMTRX.STAT_CE_CP " + "SET REJ_REASON = NULL, STATUS = 'PENDING' "
				+ "WHERE C_MAIN_REF = ?";

		try (java.sql.Connection con = DSManager.getConnection(trxDs);
				java.sql.PreparedStatement ps = con.prepareStatement(sql)) {

			ps.setString(1, cMainRef);
			ps.executeUpdate();
		}

		APLog.reportLog("REJECT_REASON CLEARED + STATUS RESET");

	}
}
