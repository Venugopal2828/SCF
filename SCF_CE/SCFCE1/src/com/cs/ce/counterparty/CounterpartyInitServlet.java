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
import org.json.JSONObject;
import org.json.JSONArray;
import com.fs.service.SendDataToEE;

public class CounterpartyInitServlet extends HttpServlet {
	private static SendDataToEE sender = new SendDataToEE();

	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		String paraVal = req.getParameter("_PARA_VAL");
		System.out.println("value sample is ... " + paraVal);

		String body = req.getReader().lines().reduce("", (a, b) -> a + b);
		System.out.println("BODY = " + body);
		String attachmentsJson = null;
		try {
			if (body != null && !body.isEmpty()) {
				JSONObject json = new JSONObject(body);

				if (json.has("attachment")) {
					attachmentsJson = json.getJSONArray("attachment").toString();
				}
			}
		} catch (Exception e) {
			System.out.println("Error parsing JSON body");
		}
		if (attachmentsJson == null) {
			attachmentsJson = "[]";
		}
		System.out.println("ATTACHMENTS JSON = " + attachmentsJson);
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
		System.out.println("EXIST_CUST        = " + existCus);
		System.out.println("CIF_ID            = " + cifId);
		System.out.println("CUST_NM           = " + custNm);
		System.out.println("CUST_CONT_PRSN    = " + custContPrsn);
		System.out.println("CUST_EMAIL        = " + custEmail);
		System.out.println("CUST_MOB          = " + custMob);
		System.out.println("CUST_ADDR         = " + custAddr);
		System.out.println("BUS_REG_NO        = " + busRegNo);
		System.out.println("VAT_NO            = " + vatNo);
		System.out.println("IND_TYPE          = " + indType);
		System.out.println("BANK_NM           = " + bankNm);
		System.out.println("ACC_NO            = " + accNo);
		System.out.println("ACC_HLDR_NM       = " + accHldrNm);
		System.out.println("IFSC_CODE         = " + ifscCode);
		System.out.println("BRANCH_ADDR       = " + branchAddr);
		System.out.println("PAY_MTHD          = " + payMthd);
		System.out.println("CCY               = " + ccy);
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

		res.setContentType("application/json");
		res.setCharacterEncoding("UTF-8");
		try {
			/* String cMainRef = "MAIN_REF_" + System.currentTimeMillis(); */
			String cMainRef = paraMap.get("C_MAIN_REF");

			if (cMainRef == null || cMainRef.trim().isEmpty()) {
				throw new Exception("C_MAIN_REF is missing from UI");
			}

			System.out.println("FINAL C_MAIN_REF FROM UI === " + cMainRef);

			JSONObject payload = new JSONObject();
			payload.put("faBuyerContTel", custMob);

			// ✅ STEP 1: Create attachments FIRST
			JSONArray attachments = new JSONArray();

			// ✅ STEP 2: Get base64 from UI
			String base64 = req.getParameter("KYC_DOC_BASE64");

			System.out.println("BASE64 FROM UI = " + base64);
			System.out.println("BODY = " + body);
			System.out.println("PARA_VAL = " + paraVal);
			System.out.println("KYC_DOC_BASE64 = " + req.getParameter("KYC_DOC_BASE64"));

			// ✅ STEP 3: Build attachment JSON
			if (base64 != null && !base64.isEmpty()) {
				JSONObject file = new JSONObject();
				/*
				 * file.put("fileName", "kyc.pdf"); file.put("fileType", "PDF");
				 * file.put("fileContent", base64);
				 */
				String fileName = req.getParameter("FILE_NAME");
				String fileType = req.getParameter("FILE_TYPE");
				System.out.println("FILE_NAME FROM UI = " + req.getParameter("FILE_NAME"));
				System.out.println("FILE_TYPE FROM UI = " + req.getParameter("FILE_TYPE"));

				if (fileName == null || fileName.isEmpty()) {
					fileName = "file_" + System.currentTimeMillis();
				}

				if (fileType == null || fileType.isEmpty()) {
					fileType = fileName.contains(".") ? fileName.substring(fileName.lastIndexOf(".") + 1) : "pdf";
				}

				file.put("fileName", fileName);
				file.put("fileType", fileType.toUpperCase());
				file.put("fileContent", base64);
				attachments.put(file);
			}

			// ✅ STEP 4: Insert into DB (AFTER attachments ready)
			String bkgrp = "CSBANK", cntycd = "US";
			String trxDs = DSManager.getTrxDS(bkgrp, cntycd);

			boolean exists = recordExists(cMainRef, trxDs);

			if (exists) {

			    System.out.println("👉 EXISTING → UPDATE");

			    updateRecord(cpMap, cMainRef, attachments.toString(), trxDs);

			    clearRejectReason(cMainRef, trxDs);

			} else {

			    System.out.println("👉 NEW → INSERT");

			    insertRecord(cpMap, cMainRef, attachments.toString());
			}
			// ✅ STEP 5: Add to payload
			payload.put("attachment", attachments);

			// debug
			System.out.println("FINAL PAYLOAD TO EE: " + payload.toString());

			// ✅ STEP 6: Send to EE
			String trxRef = "TRX_REF_" + System.currentTimeMillis();

			sender.pushCounterpartyToScf(cMainRef, trxRef, payload.toString());
			System.out.println("Counterparty data pushed to sendDataToEE class for Customername: " + custNm);

			res.getWriter().write("{\"status\":\"SUCCESS\",\"message\":\"Counterparty created\"}");

		} catch (Exception e) {
			e.printStackTrace();
			res.getWriter().write("{\"status\":\"ERROR\",\"message\":\"" + e.getMessage().replace("\"", "") + "\"}");
		}
		return;
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
		System.out.println("Inside insertRecord | bkgrp=" + bkgrp + ", cntycd=" + cntycd);
		if (bkgrp == null || cntycd == null) {
			System.out.println("Error: bkgrp or cntycd is null in insertRecord");
			throw new Exception("Bank group or country code is null");
		}
		String trxDs = DSManager.getTrxDS(bkgrp, cntycd);
		if (trxDs == null) {
			System.out.println("Error: Unable to retrieve trxDs from DSManager.getTrxDS");
			throw new Exception("Unable to retrieve transaction data source");
		}
		String dbType = DSManager.getDBType(trxDs);
		String mTable = DSManager.getSchemaedTableName(trxDs, "COUNTERPARTY_DATA");
		System.out.println("Datasource      : " + trxDs);
		System.out.println("DB Type         : " + dbType);
		System.out.println("Resolved Table  : " + mTable);
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
		if (attachmentsJson == null) {
			attachmentsJson = "[]";
		}
		genSql.addField("ATTACHMENTS", attachmentsJson, java.sql.Types.CLOB);
		SQLStatement insSql = genSql.getSqlStatement();
		System.out.println("Generated SQL   : " + insSql);
		int rowsInserted = WSDBHelper.executeUpdate(insSql, trxDs);
		System.out.println("Rows inserted into COUNTERPARTY_DATA : " + rowsInserted);
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
		if (attachmentsJson == null)
			attachmentsJson = "[]";
		genSql.addField("ATTACHMENTS", attachmentsJson, java.sql.Types.CLOB);

		genSql.setClause("C_MAIN_REF = '" + cMainRef + "'");

		SQLStatement updSql = genSql.getSqlStatement();

		int rows = WSDBHelper.executeUpdate(updSql, trxDs);

		System.out.println("UPDATED ROWS = " + rows);
	}
	private void clearRejectReason(String cMainRef, String trxDs) throws Exception {

	    String sql = "UPDATE EXIMTRX.STAT_CE_CP " +
	                 "SET REJECT_REASON = NULL, STATUS = 'PENDING' " +
	                 "WHERE C_MAIN_REF = ?";

	    try (java.sql.Connection con = DSManager.getConnection(trxDs);
	         java.sql.PreparedStatement ps = con.prepareStatement(sql)) {

	        ps.setString(1, cMainRef);
	        ps.executeUpdate();
	    }

	    System.out.println("REJECT_REASON CLEARED + STATUS RESET");
	
	}
}
