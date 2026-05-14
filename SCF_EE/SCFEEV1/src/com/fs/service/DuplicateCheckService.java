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
 * Service to check if counterparty is already a customer in the system.
 */
public class DuplicateCheckService {

	private static final String TABLE_FADA_MASTER = "EXIMTRX.FADA_MASTER";
	private static final String TABLE_FADA_PRE_CREDIT = "EXIMTRX.FADA_PRE_CREDIT";
	private String bankGroup = "CSBANK";
	private String countryCode = "US";

	/**
	 * Checks if counterparty is already registered as a customer.
	 */
	public HashMap<String, String> checkDuplicateCounterparty(
	        String buyerName,
	        String buyerEmail,
	        String buyerId) throws Exception {

	    HashMap<String, String> result = new HashMap<>();
	    result.put("IS_DUPLICATE", "N");
	    result.put("EXISTING_CUST_ID", null);
	    result.put("EXISTING_CUST_NAME", null);

	    String ds = DSManager.getTrxDS(bankGroup, countryCode);

	    CSSQLStatement stmt =
	            new CSSQLStatement(CSSQLStatement.I_SQL_TYPE_SELECT, TABLE_FADA_MASTER, ds);

	    stmt.addField("C_CUST_ID", null, null);
	    stmt.addField("FA_ANCHOR_NM", null, null);
	    stmt.addField("EMAIL_ADD", null, null);

	    StringBuilder whereClause = new StringBuilder();
	    java.util.List<Object> valuesList = new java.util.ArrayList<>();
	    java.util.List<Integer> typesList = new java.util.ArrayList<>();

	    boolean hasCondition = false;

	    // Buyer Name
	    if (buyerName != null && !buyerName.trim().isEmpty()) {
	        whereClause.append("FA_ANCHOR_NM = ?");
	        valuesList.add(buyerName.trim());
	        typesList.add(Types.VARCHAR);
	        hasCondition = true;
	    }

	    // Buyer Email
	    if (buyerEmail != null && !buyerEmail.trim().isEmpty()) {
	        if (hasCondition) {
	            whereClause.append(" OR ");
	        }
	        whereClause.append("EMAIL_ADD = ?");
	        valuesList.add(buyerEmail.trim());
	        typesList.add(Types.VARCHAR);
	        hasCondition = true;
	    }

	    // Buyer ID
	    if (buyerId != null && !buyerId.trim().isEmpty()) {
	        if (hasCondition) {
	            whereClause.append(" OR ");
	        }
	        whereClause.append("C_CUST_ID = ?");
	        valuesList.add(buyerId.trim());
	        typesList.add(Types.VARCHAR);
	        hasCondition = true;
	    }

	    // No criteria → no duplicate
	    if (!hasCondition) {
	        return result;
	    }

	    // Status filter (DO NOT use brackets here)
	    whereClause.append(" AND C_TRX_STATUS IN ('P','A')");

	    // IMPORTANT: pass clause WITHOUT "WHERE" and WITHOUT "()"
	    stmt.setClause(
	            whereClause.toString(),
	            valuesList.toArray(new Object[0]),
	            typesList.toArray(new Integer[0])
	    );

	    DocumentImpl resultDoc =
	            (DocumentImpl) CommDAOHelper.getInstance()
	                    .commExecuteQuery(stmt.genSqlString(), ds);

	    if (resultDoc != null) {
	        NodeList recordList =
	                resultDoc.getDocumentElement().getElementsByTagName("record");

	        if (recordList != null && recordList.getLength() > 0) {
	            Node recordNode = recordList.item(0);
	            result.put("IS_DUPLICATE", "Y");
	            result.put("EXISTING_CUST_ID",
	                    XMLManager.getChildNodeValue(recordNode, "C_CUST_ID", true));
	            result.put("EXISTING_CUST_NAME",
	                    XMLManager.getChildNodeValue(recordNode, "FA_ANCHOR_NM", true));
	        }
	    }

	    return result;
	}


	/**
	 * Checks if counterparty from transaction is already a customer.
	 */
	public HashMap<String, String> checkDuplicateByTransactionRef(String cMainRef) throws Exception {
		String ds = DSManager.getTrxDS(bankGroup, countryCode);
		CSSQLStatement stmt = new CSSQLStatement(CSSQLStatement.I_SQL_TYPE_SELECT, TABLE_FADA_PRE_CREDIT, ds);
		stmt.addField("FA_BUYER_NM", null, null);
		stmt.addField("FA_BUYER_CONT_MAIL", null, null);
		stmt.addField("FA_BUYER_ID", null, null);
		stmt.setClause("WHERE C_MAIN_REF = ?", new Object[] { cMainRef }, new Integer[] { Types.VARCHAR });
		DocumentImpl resultDoc = (DocumentImpl) CommDAOHelper.getInstance().commExecuteQuery(stmt.genSqlString(), ds);
		if (resultDoc == null) {
			HashMap<String, String> result = new HashMap<>();
			result.put("IS_DUPLICATE", "N");
			return result;
		}
		NodeList recordList = resultDoc.getDocumentElement().getElementsByTagName("record");
		if (recordList == null || recordList.getLength() == 0) {
			HashMap<String, String> result = new HashMap<>();
			result.put("IS_DUPLICATE", "N");
			return result;
		}
		Node recordNode = recordList.item(0);
		return checkDuplicateCounterparty(XMLManager.getChildNodeValue(recordNode, "FA_BUYER_NM", true),
				XMLManager.getChildNodeValue(recordNode, "FA_BUYER_CONT_MAIL", true),
				XMLManager.getChildNodeValue(recordNode, "FA_BUYER_ID", true));
	}
}

