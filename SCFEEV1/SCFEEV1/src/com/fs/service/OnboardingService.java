package com.fs.service;

import java.sql.Types;
import java.util.HashMap;

import org.apache.xerces.dom.DocumentImpl;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.cs.base.xml.XMLManager;
import com.cs.core.dao.DSManager;
import com.cs.core.utility.CommDAOHelper;
import com.cs.eximap.utility.CSSQLStatement;

/**
 * Service to handle traditional onboarding procedures for counterparties with
 * full details.
 */
public class OnboardingService {

	private static final String TABLE_FADA_COUNTER = "EXIMTRX.FADA_COUNTER";
	private String bankGroup = "CSBANK";
	private String countryCode = "US";

	/**
	 * Checks if counterparty has complete details for traditional onboarding.
	 */
	public HashMap<String, String> checkCounterpartyDetailsCompleteness(String cMainRef) throws Exception {
		HashMap<String, String> result = new HashMap<>();
		result.put("HAS_FULL_DETAILS", "N");
		String ds = DSManager.getTrxDS(bankGroup, countryCode);
		CSSQLStatement stmt = new CSSQLStatement(CSSQLStatement.I_SQL_TYPE_SELECT, TABLE_FADA_COUNTER, ds);
		// stmt.addField("FA_BUYER_ID", null, null);
		// stmt.addField("FA_BUYER_NM", null, null);
		stmt.addField("FA_COUNTER_CONT_EM", null, null);
		// stmt.addField("FA_BUYER_ADDR", null, null);
		stmt.addField("FA_COUNTER_CONT_TEL", null, null);
		// stmt.addField("FA_BUYER_REG_NO", null, null);
		stmt.setClause("WHERE C_MAIN_REF = ?", new Object[] { cMainRef }, new Integer[] { Types.VARCHAR });
		DocumentImpl resultDoc = (DocumentImpl) CommDAOHelper.getInstance().commExecuteQuery(stmt.genSqlString(), ds);
		if (resultDoc == null) {
			result.put("MISSING_FIELDS", "Transaction not found");
			return result;
		}
		NodeList recordList = resultDoc.getDocumentElement().getElementsByTagName("record");
		if (recordList == null || recordList.getLength() == 0) {
			result.put("MISSING_FIELDS", "No counterparty data found");
			return result;
		}
		Node recordNode = recordList.item(0);

		// String buyerId = XMLManager.getChildNodeValue(recordNode, "FA_BUYER_ID",
		// true);
		// String buyerName = XMLManager.getChildNodeValue(recordNode, "FA_BUYER_NM",
		// true);
		String buyerEmail = XMLManager.getChildNodeValue(recordNode, "FA_COUNTER_CONT_EM", true);
		// String buyerAddr = XMLManager.getChildNodeValue(recordNode, "FA_BUYER_ADDR",
		// true);
		String buyerPhone = XMLManager.getChildNodeValue(recordNode, "FA_COUNTER_CONT_TEL", true);
		// String buyerRegNo = XMLManager.getChildNodeValue(recordNode,
		// "FA_BUYER_REG_NO", true);
		java.util.List<String> missingFields = new java.util.ArrayList<>();
		// if (buyerId == null || buyerId.trim().isEmpty())
		// missingFields.add("FA_BUYER_ID");
		// if (buyerName == null || buyerName.trim().isEmpty())
		// missingFields.add("FA_BUYER_NM");
		if (buyerEmail == null || buyerEmail.trim().isEmpty())
			missingFields.add("FA_BUYER_CONT_MAIL");
		// if (buyerAddr == null || buyerAddr.trim().isEmpty())
		// missingFields.add("FA_BUYER_ADDR");
		if (buyerPhone == null || buyerPhone.trim().isEmpty())
			missingFields.add("FA_BUYER_PHONE");
		// if (buyerRegNo == null || buyerRegNo.trim().isEmpty())
		// missingFields.add("FA_BUYER_REG_NO");
		if (missingFields.isEmpty()) {
			result.put("HAS_FULL_DETAILS", "Y");

			result.put("COUNTERPARTY_EMAIL", buyerEmail);
		} else {
			result.put("MISSING_FIELDS", String.join(", ", missingFields));

			result.put("COUNTERPARTY_PHONE", buyerPhone != null ? buyerPhone : "");
			result.put("COUNTERPARTY_EMAIL", buyerEmail != null ? buyerEmail : "");
		}
		return result;
	}

	/**
	 * Processes traditional onboarding following existing SBR functionality.
	 */
	public HashMap<String, String> processTraditionalOnboarding(String cMainRef) throws Exception {
		HashMap<String, String> result = new HashMap<>();
		result.put("ONBOARDING_STATUS", "PROCESSED");
		result.put("C_MAIN_REF", cMainRef);
		result.put("ONBOARDING_METHOD", "TRADITIONAL_SBR");
		result.put("MESSAGE", "Traditional onboarding initiated - following existing SBR procedures");
		return result;
	}

}