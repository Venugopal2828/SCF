package com.fs.servlet;

import com.cs.core.dao.DSManager;
import com.cs.core.utility.CommDAOHelper;
import com.cs.eximap.utility.APLog;
import com.cs.eximap.utility.CSSQLStatement;
import com.fs.service.TransactionConfirmationService;
import java.util.HashMap;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.xerces.dom.DocumentImpl;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import java.sql.Types;

public class CounterParty {
	public void processCounterPaty(String cmainRef, String emailAdd) throws ServletException {
		processCounterPaty(cmainRef, emailAdd, cmainRef);
	}

	public void processCounterPaty(String cmainRef, String emailAdd, String aggrNo) throws ServletException {
		APLog.reportLog("CounterParty=================== ENTERED");
		try {
			String mainRefNO = cmainRef;
			String expirationHours = "3";
			Integer expirationInHours = Integer.valueOf(expirationHours);
			APLog.reportLog("  C_MAIN_REF  = " + mainRefNO);
			String preCreditTrxStatusByCMainRef = getPreCreditTrxStatusByCMainRef(mainRefNO);
			APLog.reportLog("preCreditTrxStatusByCMainRef ___ " + preCreditTrxStatusByCMainRef);
			if (isTransactionConfirmed(preCreditTrxStatusByCMainRef)) {
				APLog.reportLog("Transaction is confirmed - Processing transaction confirmation flow");
				TransactionConfirmationService confirmationService = new TransactionConfirmationService();
				HashMap<String, Object> confirmationResult = confirmationService
						.processTransactionConfirmation(mainRefNO, expirationInHours);
				APLog.reportLog("Transaction confirmation processing completed ");
				System.out.println(
						"Transaction confirmation processing completedconfirmationService " + confirmationResult);
				APLog.reportLog("Processing Status: " + confirmationResult.get("PROCESSING_STATUS"));
				List<HashMap<String, String>> invitationResults = (List<HashMap<String, String>>) confirmationResult
						.get("INVITATION_RESULTS");
				APLog.reportLog("invitationResults: " + invitationResults);
				System.out.println("invitationResultssize: " + invitationResults.size());
				if (invitationResults != null && !invitationResults.isEmpty()) {
					for (HashMap<String, String> invitation : invitationResults) {
						System.out.println("invitationResults: " + invitationResults);
						System.out.println("invitation: " + invitation);
						String counterpartyEmail = invitation.get("COUNTERPARTY_EMAIL");
						String registrationLink = invitation.get("REGISTRATION_LINK");
						if (counterpartyEmail == null || counterpartyEmail.trim().isEmpty()) {
							counterpartyEmail = emailAdd;
							APLog.reportLog("Using fallback emailAdd: " + counterpartyEmail);
						}
						if (counterpartyEmail != null && !counterpartyEmail.trim().isEmpty() && registrationLink != null
								&& !registrationLink.trim().isEmpty()) {
							APLog.reportLog("Sending mail to: " + counterpartyEmail);
							CounterpartyInviteMailServlet counterpartyInviteMailServlet = new CounterpartyInviteMailServlet();
							counterpartyInviteMailServlet.sendInvitationEmail(mainRefNO, counterpartyEmail,
									registrationLink);
							continue;
						}
						APLog.reportLog("Mail NOT sent - Email or link missing");
					}
				} else {
					APLog.reportLog("No invitation results from confirmation service sending mail directly");
					if (emailAdd == null || emailAdd.trim().isEmpty()) {
						APLog.reportLog("emailAdd empty fetching from DB");
						CounterpartyInviteMailServlet helper = new CounterpartyInviteMailServlet();
						HashMap<String, String> data = helper.fetchCounterpartyDetails(mainRefNO);
						if (data != null)
							emailAdd = data.get("FA_COUNTER_CONT_EM");
						APLog.reportLog("DB email found: " + emailAdd);
					}
					if (emailAdd != null && !emailAdd.trim().isEmpty()) {
						String registrationLink = CounterpartyInviteMailServlet.generateRegistrationLink(mainRefNO,
								emailAdd, aggrNo);
						APLog.reportLog("Sending fallback mail to: " + emailAdd);
						CounterpartyInviteMailServlet counterpartyInviteMailServlet = new CounterpartyInviteMailServlet();
						counterpartyInviteMailServlet.sendInvitationEmail(mainRefNO, emailAdd, registrationLink);
					} else {
						APLog.reportLog("Fallback mail NOT sent emailAdd is empty");
					}
				}
			} else {
				APLog.reportLog("Transaction not confirmed - Using original invitation flow");
				CounterpartyInviteMailServlet counterpartyInviteMailServlet = new CounterpartyInviteMailServlet();
				List<String> inviteLinks = counterpartyInviteMailServlet.doPost(mainRefNO, aggrNo);
				APLog.reportLog("Generated invite links: " + inviteLinks);
			}
		} catch (Exception e) {
			APLog.reportLog("ERROR in CounterParty.process: " + e.getMessage());
			e.printStackTrace();
		}
	}

	private boolean isTransactionConfirmed(String trxStatus) {
		if (trxStatus == null)
			return false;
		String status = trxStatus.toUpperCase().trim();
		return !(!"C".equals(status) && !"P".equals(status) && !"A".equals(status) && !"CONFIRMED".equals(status));
	}

	public String getPreCreditTrxStatusByCMainRef(String cMainRef) throws Exception {
		APLog.reportLog("=== getPreCreditTrxStatusByCMainRef START ===");
		APLog.reportLog("Input C_MAIN_REF = " + cMainRef);
		String trxStatus = null;
		String ds = DSManager.getTrxDS("CSBANK", "US");
		CSSQLStatement stmt = new CSSQLStatement(4, "EXIMTRX.FADA_COUNTER", ds);
		stmt.addField("C_MAIN_REF", null, null);
		String whereClause = "WHERE C_MAIN_REF = ?";
		Object[] values = { cMainRef };
		Integer[] types = { Integer.valueOf(12) };
		stmt.setClause(whereClause, values, types);
		APLog.reportLog("Generated SQL =============================== " + stmt.genSqlString());
		try {
			DocumentImpl resultDoc = (DocumentImpl) CommDAOHelper.getInstance().commExecuteQuery(stmt.genSqlString(),
					ds);
			Element rootElement = resultDoc.getDocumentElement();
			NodeList recordList = rootElement.getElementsByTagName("record");
			if (recordList != null && recordList.getLength() > 0) {
				trxStatus = "CONFIRMED";
				APLog.reportLog("Record exists for C_MAIN_REF [" + cMainRef + "] treating as CONFIRMED");
			} else {
				APLog.reportLog("No record found in FADA_COUNTER for C_MAIN_REF = " + cMainRef);
			}
		} catch (Exception e) {
			APLog.reportLog("Exception while fetching record for C_MAIN_REF = " + cMainRef);
			e.printStackTrace();
			throw e;
		}
		APLog.reportLog("=== getPreCreditTrxStatusByCMainRef END ===");
		return trxStatus;
	}

	public void process(HttpServletRequest req, HttpServletResponse resp) throws Exception {
		String action = req.getParameter("action");
		if ("REJECT".equalsIgnoreCase(action)) {
			String cMainRef = req.getParameter("cMainRef");
			String rejectReason = req.getParameter("rejectReason");
			String email = req.getParameter("email");
			String counterpartyId = req.getParameter("counterpartyId");
			TransactionConfirmationService service = new TransactionConfirmationService();
			if (counterpartyId == null || counterpartyId.trim().isEmpty())
				counterpartyId = cMainRef;
			service.handleRejection(cMainRef, counterpartyId, email, rejectReason);
			resp.getWriter().write("Rejected Successfully");
			return;
		}
	}
	// ── Add this new private method to CounterParty.java ─────────────────────────
	// Mirrors the existing REJECT SYNC TO CE block exactly — same pattern, same URL,
	// same error handling style. Fetches AGGR_NO from STAT_CE_CP and pushes to CE.
	private void syncAggrNoToCE(String cMainRef) {
	    try {
	        APLog.reportLog("=== [CE AGGR_NO SYNC] TRIGGERED ===");
	        APLog.reportLog("=== [CE AGGR_NO SYNC] cMainRef=" + cMainRef);

	        String aggrNo = fetchAggrNoFromStatCECP(cMainRef);
	        APLog.reportLog("=== [CE AGGR_NO SYNC] AGGR_NO fetched=" + aggrNo);

	        if (aggrNo == null || aggrNo.trim().isEmpty()) {
	            APLog.reportLog("=== [CE AGGR_NO SYNC] SKIPPED — AGGR_NO empty for cMainRef=" + cMainRef);
	            return;
	        }

	        org.json.JSONObject aggrPayload = new org.json.JSONObject();
	        aggrPayload.put("cMainRef", cMainRef);
	        aggrPayload.put("aggrNo", aggrNo);

	        APLog.reportLog("=== [CE AGGR_NO SYNC] Payload built = " + aggrPayload.toString());

	        // Same CE URL used by reject sync — kept consistent, not duplicated logic
	        java.net.URL url = new java.net.URL("http://dev-scfnew:9081/BL6CEWeb/rest/ee/scfData");

	        APLog.reportLog("=== [CE AGGR_NO SYNC] Hitting CE URL = " + url.toString());

	        java.net.HttpURLConnection conn = (java.net.HttpURLConnection) url.openConnection();
	        conn.setRequestMethod("POST");
	        conn.setRequestProperty("Content-Type", "application/json");
	        conn.setConnectTimeout(10000);
	        conn.setReadTimeout(10000);
	        conn.setDoOutput(true);

	        try (java.io.OutputStream os = conn.getOutputStream()) {
	            os.write(aggrPayload.toString().getBytes("UTF-8"));
	            APLog.reportLog("=== [CE AGGR_NO SYNC] Payload written to stream");
	        }

	        int httpStatus = conn.getResponseCode();
	        APLog.reportLog("=== [CE AGGR_NO SYNC] CE responded with HTTP status = " + httpStatus);

	        java.io.BufferedReader br = (httpStatus >= 200 && httpStatus < 300)
	                ? new java.io.BufferedReader(new java.io.InputStreamReader(conn.getInputStream()))
	                : new java.io.BufferedReader(new java.io.InputStreamReader(conn.getErrorStream()));

	        StringBuilder responseBody = new StringBuilder();
	        String line;
	        while ((line = br.readLine()) != null) {
	            responseBody.append(line);
	        }
	        APLog.reportLog("=== [CE AGGR_NO SYNC] CE response body = " + responseBody.toString());

	    } catch (Exception ex) {
	        APLog.reportLog("=== [CE AGGR_NO SYNC] FAILED — " + ex.getMessage());
	        ex.printStackTrace();
	    }
	    APLog.reportLog("=== [CE AGGR_NO SYNC] END ===");
	}

	// ── Fetches AGGR_NO from STAT_CE_CP for the given cMainRef ────────────────────
	private String fetchAggrNoFromStatCECP(String cMainRef) {
	    try {
	        String ds = DSManager.getTrxDS("CSBANK", "US");
	        CSSQLStatement stmt = new CSSQLStatement(CSSQLStatement.I_SQL_TYPE_SELECT, "EXIMTRX.STAT_CE_CP", ds);
	        stmt.addField("AGGR_NO", null, null);
	        String whereClause = "WHERE C_MAIN_REF = ?";
	        Object[] values = { cMainRef };
	        Integer[] types = { Types.VARCHAR };
	        stmt.setClause(whereClause, values, types);

	        String sql = stmt.genSqlString();
	        APLog.reportLog("[fetchAggrNoFromStatCECP] SQL=" + sql);

	        DocumentImpl resultDoc = (DocumentImpl) CommDAOHelper.getInstance().commExecuteQuery(sql, ds);
	        if (resultDoc == null) return null;

	        Element root = resultDoc.getDocumentElement();
	        NodeList records = root.getElementsByTagName("record");
	        if (records.getLength() == 0) return null;

	        Node record = records.item(0);
	        String aggrNo = com.cs.base.xml.XMLManager.getChildNodeValue(record, "AGGR_NO", true);
	        APLog.reportLog("[fetchAggrNoFromStatCECP] AGGR_NO=" + aggrNo);
	        return aggrNo;

	    } catch (Exception e) {
	        APLog.reportLog("[fetchAggrNoFromStatCECP] ERROR: " + e.getMessage());
	        e.printStackTrace();
	        return null;
	    }
	}

	public void sendInvitationWithReject(String cMainRef, String email, String rejectFlag, String rejectReason) {
		try {
			APLog.reportLog("=== REJECT FLOW START ===");
			CounterpartyInviteMailServlet mail = new CounterpartyInviteMailServlet();
			if (email == null || email.trim().isEmpty()) {
				APLog.reportLog("Email empty fetching from FADA");
				HashMap<String, String> data = mail.fetchCounterpartyDetails(cMainRef);
				if (data != null)
					email = data.get("FA_COUNTER_CONT_EM");
				if (email == null || email.trim().isEmpty()) {
					APLog.reportLog("Email not found in FADA checking STAT_CE_CP");
					email = fetchEmailFromStatCECP(cMainRef);
				}
				APLog.reportLog("Final Email: " + email);
			}
			APLog.reportLog("Reject reason: " + rejectReason);
			updateRejectReason(cMainRef, rejectReason);

			// ========== REJECT SYNC TO CE START ==========
			APLog.reportLog("=== [CE REJECT SYNC] TRIGGERED ===");
			APLog.reportLog("=== [CE REJECT SYNC] cMainRef=" + cMainRef);
			APLog.reportLog("=== [CE REJECT SYNC] rejectReason=" + rejectReason);
			try {
				org.json.JSONObject rejectPayload = new org.json.JSONObject();
				rejectPayload.put("cMainRef", cMainRef);
				rejectPayload.put("rejectReason", rejectReason != null ? rejectReason : "");

				APLog.reportLog("=== [CE REJECT SYNC] Payload built = " + rejectPayload.toString());

				java.net.URL url = new java.net.URL("http://dev-scfnew:9081/BL6CEWeb/rest/ee/scfData");

				APLog.reportLog("=== [CE REJECT SYNC] Hitting CE URL = " + url.toString());

				java.net.HttpURLConnection conn = (java.net.HttpURLConnection) url.openConnection();
				conn.setRequestMethod("POST");
				conn.setRequestProperty("Content-Type", "application/json");
				conn.setConnectTimeout(10000);
				conn.setReadTimeout(10000);
				conn.setDoOutput(true);

				try (java.io.OutputStream os = conn.getOutputStream()) {
					os.write(rejectPayload.toString().getBytes("UTF-8"));
					APLog.reportLog("=== [CE REJECT SYNC] Payload written to stream");
				}

				int httpStatus = conn.getResponseCode();
				APLog.reportLog("=== [CE REJECT SYNC] CE responded with HTTP status = " + httpStatus);

				java.io.BufferedReader br = (httpStatus >= 200 && httpStatus < 300)
						? new java.io.BufferedReader(new java.io.InputStreamReader(conn.getInputStream()))
						: new java.io.BufferedReader(new java.io.InputStreamReader(conn.getErrorStream()));

				StringBuilder responseBody = new StringBuilder();
				String line;
				while ((line = br.readLine()) != null) {
					responseBody.append(line);
				}
				APLog.reportLog("=== [CE REJECT SYNC] CE response body = " + responseBody.toString());

			} catch (Exception ex) {
				APLog.reportLog("=== [CE REJECT SYNC] FAILED — " + ex.getMessage());
				ex.printStackTrace();
			}
			APLog.reportLog("=== [CE REJECT SYNC] END ===");
			// ========== REJECT SYNC TO CE END ==========
			syncAggrNoToCE(cMainRef);

			if (rejectReason != null && !rejectReason.trim().isEmpty() && email != null && !email.trim().isEmpty()) {
				String name = "";
				List<HashMap<String, String>> statList = mail.fetchStatCECPDetails(cMainRef);
				if (statList != null && !statList.isEmpty() && ((HashMap<?, ?>) statList.get(0)).get("NAME") != null)
					name = (String) ((HashMap<?, ?>) statList.get(0)).get("NAME");
				mail.sendInvitationEmailForReject(cMainRef, email, name, rejectReason);
			} else {
				mail.sendInvitationEmailForReject(cMainRef);
			}
			APLog.reportLog("=== REJECT EMAIL SENT SUCCESS ===");
		} catch (Exception e) {
			APLog.reportLog("ERROR in reject flow: " + e.getMessage());
			e.printStackTrace();
		}
	}

	private String fetchEmailFromStatCECP(String cMainRef) {
		try {
			CounterpartyInviteMailServlet helper = new CounterpartyInviteMailServlet();
			List<HashMap<String, String>> list = helper.fetchStatCECPDetails(cMainRef);
			if (list != null && !list.isEmpty())
				return (String) ((HashMap<?, ?>) list.get(0)).get("EMAIL_ADD");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	private void updateRejectReason(String cMainRef, String rejectReason) {
		try {
			String ds = DSManager.getTrxDS("CSBANK", "US");
			CSSQLStatement stmt = new CSSQLStatement(2, "EXIMTRX.STAT_CE_CP", ds);
			stmt.addField("REJ_REASON", rejectReason, 12);
			String whereClause = "WHERE C_MAIN_REF = ?";
			Object[] values = { cMainRef };
			Integer[] types = { Integer.valueOf(12) };
			stmt.setClause(whereClause, values, types);
			CommDAOHelper.getInstance().commExecuteUpdate(stmt.genSqlString(), ds);
			APLog.reportLog("[STAT_CE_CP] REJ_REASON UPDATED");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
