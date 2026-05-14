package com.fs.servlet;

import java.sql.Types;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.xerces.dom.DocumentImpl;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.cs.base.xml.XMLManager;
import com.cs.core.dao.DSManager;
import com.cs.core.utility.CommDAOHelper;
import com.cs.eximap.utility.APLog;
import com.cs.eximap.utility.CSSQLStatement;
import com.fs.service.TransactionConfirmationService;

public class CounterParty {
	public void processCounterPaty(String cmainRef, String emailAdd) throws ServletException {
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
				java.util.HashMap<String, Object> confirmationResult = confirmationService
						.processTransactionConfirmation(mainRefNO, expirationInHours);

				APLog.reportLog("Transaction confirmation processing completed ");
				System.out.println(
						"Transaction confirmation processing completedconfirmationService " + confirmationResult);

				APLog.reportLog("Processing Status: " + confirmationResult.get("PROCESSING_STATUS"));

				@SuppressWarnings("unchecked")
				java.util.List<java.util.HashMap<String, String>> invitationResults = (java.util.List<java.util.HashMap<String, String>>) confirmationResult
						.get("INVITATION_RESULTS");
				APLog.reportLog("invitationResults: " + invitationResults);
				System.out.println("invitationResultssize: " + invitationResults.size());

				if (invitationResults != null && !invitationResults.isEmpty()) {

					for (java.util.HashMap<String, String> invitation : invitationResults) {
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

						} else {
							APLog.reportLog("Mail NOT sent - Email or link missing");
						}
					}
				} else {
					APLog.reportLog("No invitation results from confirmation service – sending mail directly");
					if (emailAdd == null || emailAdd.trim().isEmpty()) {
						APLog.reportLog("emailAdd empty → fetching from DB");

						CounterpartyInviteMailServlet helper = new CounterpartyInviteMailServlet();
						java.util.HashMap<String, String> data = helper.fetchCounterpartyDetails(mainRefNO);

						if (data != null) {
							emailAdd = data.get("FA_COUNTER_CONT_EM");
						}

						APLog.reportLog("DB email found: " + emailAdd);
					}

					if (emailAdd != null && !emailAdd.trim().isEmpty()) {

						String registrationLink = CounterpartyInviteMailServlet.generateRegistrationLink(mainRefNO,
								emailAdd);

						APLog.reportLog("Sending fallback mail to: " + emailAdd);

						CounterpartyInviteMailServlet counterpartyInviteMailServlet = new CounterpartyInviteMailServlet();

						counterpartyInviteMailServlet.sendInvitationEmail(mainRefNO, emailAdd, registrationLink);

					} else {
						APLog.reportLog("Fallback mail NOT sent – emailAdd is empty");
					}
				}

			} else {
				// Transaction not confirmed yet, use original flow
				APLog.reportLog("Transaction not confirmed - Using original invitation flow");
				CounterpartyInviteMailServlet counterpartyInviteMailServlet = new CounterpartyInviteMailServlet();
				java.util.List<String> inviteLinks = counterpartyInviteMailServlet.doPost(mainRefNO);
				APLog.reportLog("Generated invite links: " + inviteLinks);
			}
		} catch (Exception e) {
			APLog.reportLog("ERROR in CounterParty.process: " + e.getMessage());
			e.printStackTrace();
		}
	}

	/**
	 * Checks if transaction status indicates confirmation. Confirmed statuses: 'C'
	 * (Confirmed), 'P' (Processed), 'A' (Approved)
	 */
	private boolean isTransactionConfirmed(String trxStatus) {
		if (trxStatus == null) {
			return false;
		}
		String status = trxStatus.toUpperCase().trim();
		return "C".equals(status) || "P".equals(status) || "A".equals(status) || "CONFIRMED".equals(status);
	}

	public String getPreCreditTrxStatusByCMainRef(String cMainRef) throws Exception {

		APLog.reportLog("=== getPreCreditTrxStatusByCMainRef START ===");
		APLog.reportLog("Input C_MAIN_REF = " + cMainRef);

		String trxStatus = null;
		String ds = DSManager.getTrxDS("CSBANK", "US");

		CSSQLStatement stmt = new CSSQLStatement(CSSQLStatement.I_SQL_TYPE_SELECT, "EXIMTRX.FADA_COUNTER", ds);
		stmt.addField("C_MAIN_REF", null, null);

		String whereClause = "WHERE C_MAIN_REF = ?";
		Object[] values = { cMainRef };
		Integer[] types = { Types.VARCHAR };

		stmt.setClause(whereClause, values, types);

		APLog.reportLog("Generated SQL =============================== " + stmt.genSqlString());

		try {
			DocumentImpl resultDoc = (DocumentImpl) CommDAOHelper.getInstance().commExecuteQuery(stmt.genSqlString(),
					ds);

			Element rootElement = resultDoc.getDocumentElement();
			NodeList recordList = rootElement.getElementsByTagName("record");

			if (recordList != null && recordList.getLength() > 0) {
				// ✅ No C_TRX_STATUS → just treat as confirmed
				trxStatus = "CONFIRMED";

				APLog.reportLog("Record exists for C_MAIN_REF [" + cMainRef + "] – treating as CONFIRMED");
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
			if (counterpartyId == null || counterpartyId.trim().isEmpty()) {
				counterpartyId = cMainRef;
			}
			service.handleRejection(cMainRef, counterpartyId, email, rejectReason);

			resp.getWriter().write("Rejected Successfully");
			return;
		}
	}

	public void sendInvitationWithReject(String cMainRef, String email, String rejectFlag, String rejectReason) {

		try {
			APLog.reportLog("=== REJECT FLOW START ===");

			CounterpartyInviteMailServlet mail = new CounterpartyInviteMailServlet();

			if (email == null || email.trim().isEmpty()) {

			    APLog.reportLog("Email empty → fetching from FADA");

			    java.util.HashMap<String, String> data = mail.fetchCounterpartyDetails(cMainRef);

			    if (data != null) {
			        email = data.get("FA_COUNTER_CONT_EM");
			    }

			  
			    if (email == null || email.trim().isEmpty()) {

			        APLog.reportLog("Email not found in FADA → checking STAT_CE_CP");

			        email = fetchEmailFromStatCECP(cMainRef);
			    }

			    APLog.reportLog("Final Email: " + email);
			}
			APLog.reportLog("Reject reason: " + rejectReason);

			updateRejectReason(cMainRef, rejectReason);
			
			mail.sendInvitationEmailForReject(cMainRef); 

			APLog.reportLog("=== REJECT EMAIL SENT SUCCESS ===");

		} catch (Exception e) {
			APLog.reportLog("ERROR in reject flow: " + e.getMessage());
			e.printStackTrace();
		}
	}

	private String fetchEmailFromStatCECP(String cMainRef) {

	    try {
	        CounterpartyInviteMailServlet helper = new CounterpartyInviteMailServlet();

	        java.util.List<HashMap<String, String>> list = helper.fetchStatCECPDetails(cMainRef);

	        if (list != null && !list.isEmpty()) {
	            return list.get(0).get("EMAIL_ADD");
	        }

	    } catch (Exception e) {
	        e.printStackTrace();
	    }

	    return null;
	}

	private void updateRejectReason(String cMainRef, String rejectReason) {

	    try {
	        String ds = DSManager.getTrxDS("CSBANK", "US");

	        CSSQLStatement stmt = new CSSQLStatement(
	                CSSQLStatement.I_SQL_TYPE_UPDATE,
	                "EXIMTRX.STAT_CE_CP",
	                ds
	        );

	        stmt.addField("REJECT_REASON", rejectReason, Types.VARCHAR);

	        String whereClause = "WHERE C_MAIN_REF = ?";
	        Object[] values = { cMainRef };
	        Integer[] types = { Types.VARCHAR };

	        stmt.setClause(whereClause, values, types);

	        CommDAOHelper.getInstance().commExecuteUpdate(stmt.genSqlString(), ds);

	        APLog.reportLog("[STAT_CE_CP] REJECT_REASON UPDATED");

	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	}
}
