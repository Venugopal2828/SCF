package com.cs.eximap.busiintf;

import java.nio.charset.StandardCharsets;

import org.apache.commons.io.FileUtils;
import org.apache.xerces.dom.DocumentImpl;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;

import com.cs.base.xml.XMLManager;
import com.cs.base.utility.ASPathConst;
import com.cs.core.utility.SessionContext;
import com.cs.core.utility.SessionUtil;
import com.cs.eximap.utility.APLog;
import com.fs.servlet.CounterpartyInviteMailServlet;

public class TrxGenerateNotification implements GAPIBusiIntf {

	private String sMainRef;
	private String sEmailTO;
	private String sEmSubject;
	private String bodyCtnt;
	private String custName = "";
	private String custPhNo = "";

	@Override
	public DocumentImpl authData(DocumentImpl arg0) throws Exception {
		return null;
	}

	@Override
	public DocumentImpl ecData(DocumentImpl arg0) throws Exception {
		return null;
	}

	@Override
	public DocumentImpl inqData(DocumentImpl arg0) throws Exception {
		return null;
	}

	@Override
	public DocumentImpl releaseData(DocumentImpl gapiDoc) throws Exception {
		try {
			return trxData(gapiDoc);
		} catch (Exception e) {
			APLog.reportLog("[TRX_NOTIFY] Error in releaseData: " + e.getMessage());
			e.printStackTrace();
			return constructResponseDom();
		}
	}

	@Override
	public DocumentImpl trxData(DocumentImpl gapiDoc) throws Exception {
		APLog.reportLog("[TRX_NOTIFY] START - trxData");

		try {
			// Extract header information
			Node headerNd = XMLManager.findChildNode(gapiDoc.getDocumentElement(), "header");
			if (headerNd == null) {
				APLog.reportLog("[TRX_NOTIFY] Header node not found");
				return constructResponseDom();
			}

			this.sMainRef = XMLManager.getChildNodeValue(headerNd, "main-ref", false);
			String module = XMLManager.getChildNodeValue(headerNd, "module", false);
			String functionName = XMLManager.getChildNodeValue(headerNd, "function-name", false);

			APLog.reportLog(
					"[TRX_NOTIFY] MainRef: " + this.sMainRef + " | Module: " + module + " | Function: " + functionName);

			// Extract message content
			Node msgNode = XMLManager.findChildNode(gapiDoc.getDocumentElement(), "out-msg-content");
			if (msgNode != null) {
				this.sEmailTO = XMLManager.getChildNodeValue(msgNode, "EMAIL_ADD", false);
				this.custName = XMLManager.getChildNodeValue(msgNode, "CUST_NAME", false);
				this.sEmSubject = XMLManager.getChildNodeValue(msgNode, "EMAIL_SUB", false);
				this.custPhNo = XMLManager.getChildNodeValue(msgNode, "APPL_PHONE_NO", false);
				this.sMainRef = XMLManager.getChildNodeValue(msgNode, "FA_CNTR_REF", false);
				
				
			}

			// Fallback: Check transaction DOM if available
			if (this.sEmailTO == null || this.sEmailTO.isEmpty()) {
				SessionContext sessionContext = SessionUtil.getOldSessionContext(null);
				if (sessionContext != null) {
					Document trxDom = sessionContext.getTrxDom();
					if (trxDom != null) {
						Element eleRoot = trxDom.getDocumentElement();
						this.sEmailTO = XMLManager.getNodeValue(eleRoot, "//EMAIL_ADD", false);
						this.custName = XMLManager.getNodeValue(eleRoot, "//CUST_NAME", false);
					}
				}
			}

			// Validate email before proceeding
			if (this.sEmailTO == null || this.sEmailTO.trim().isEmpty()) {
				APLog.reportLog("[TRX_NOTIFY] No email found for MainRef: " + this.sMainRef);
				return constructResponseDom();
			}

			APLog.reportLog("[TRX_NOTIFY] Email TO: " + this.sEmailTO);
			APLog.reportLog("[TRX_NOTIFY] Customer Name: " + this.custName);

			// Load email template
			loadEmailTemplate(functionName);

			// Set default subject if not provided
			if (this.sEmSubject == null || this.sEmSubject.isEmpty()) {
				this.sEmSubject = "Transaction Notification: " + this.sMainRef;
			}

			// Send email using existing CounterpartyInviteMailServlet
			APLog.reportLog("[TRX_NOTIFY] Sending email...");
			sendTransactionEmail();

			APLog.reportLog("[TRX_NOTIFY] Email sent successfully");

		} catch (Exception e) {
			APLog.reportLog("[TRX_NOTIFY] ERROR in trxData: " + e.getMessage());
			e.printStackTrace();
			throw e;
		}

		return constructResponseDom();
	}

	/**
	 * Load email template from file system
	 */
	private void loadEmailTemplate(String functionName) throws Exception {
		try {
			String templatePath = ASPathConst.getUserDirPath() + "/EE_SYS/EXPORT/MAILTMPL/"
					+ (functionName != null ? functionName : "default") + ".html";

			APLog.reportLog("[TRX_NOTIFY] Loading template from: " + templatePath);

			this.bodyCtnt = FileUtils.readFileToString(new java.io.File(templatePath), StandardCharsets.UTF_8);

			APLog.reportLog("[TRX_NOTIFY] Template loaded successfully");

		} catch (Exception e) {
			APLog.reportLog("[TRX_NOTIFY] Warning: Could not load template - " + e.getMessage());
			// Use default body if template not found
			this.bodyCtnt = "Transaction notification for reference: " + this.sMainRef;
		}
	}

	/**
	 * Send email using existing CounterpartyInviteMailServlet implementation
	 */
	private void sendTransactionEmail() throws Exception {
		try {
			// Use the existing mail infrastructure
			CounterpartyInviteMailServlet mailServlet = new CounterpartyInviteMailServlet();

			// Prepare email body
			String finalBody = this.bodyCtnt;
			if (finalBody != null) {
				finalBody = finalBody.replace("${name}", this.custName != null ? this.custName : "")
						.replace("${mainRef}", this.sMainRef)
						.replace("${phoneNo}", this.custPhNo != null ? this.custPhNo : "");
			} else {
				finalBody = "Transaction notification for reference: " + this.sMainRef;
			}

			APLog.reportLog("[TRX_NOTIFY] Sending email to: " + this.sEmailTO);
			APLog.reportLog("[TRX_NOTIFY] Subject: " + this.sEmSubject);
			APLog.reportLog("[TRX_NOTIFY] Body preview: " + finalBody.substring(0, Math.min(100, finalBody.length())));

			// Create a temporary mail config for this email
			// Or call the low-level sendMail method directly
			sendMailDirect(this.custName != null ? this.custName : "", this.sEmailTO, finalBody);

			APLog.reportLog("[TRX_NOTIFY] Email sent successfully to " + this.sEmailTO);

		} catch (Exception e) {
			APLog.reportLog("[TRX_NOTIFY] Error sending email: " + e.getMessage());
			throw e;
		}
	}

	/**
	 * Direct email sending using JavaMail (extracted from
	 * CounterpartyInviteMailServlet)
	 */
	private void sendMailDirect(String name, String email, String body) throws Exception {
		try {
			CounterpartyInviteMailServlet mailServlet = new CounterpartyInviteMailServlet();
			// Call the existing sendMail method
			mailServlet.sendMail(name, email, body);
		} catch (Exception e) {
			APLog.reportLog("[TRX_NOTIFY] Error in sendMailDirect: " + e.getMessage());
			throw e;
		}
	}

	/**
	 * Construct response DOM for GAPIBusiIntf
	 */
	public static DocumentImpl constructResponseDom() throws Exception {
		DocumentImpl resultDom = new DocumentImpl();
		Element rtnRoot = resultDom.createElement("root");
		resultDom.appendChild(rtnRoot);

		Element rtnInMsgNode = resultDom.createElement("in-msg-content");
		rtnRoot.appendChild(rtnInMsgNode);

		return resultDom;
	}
}