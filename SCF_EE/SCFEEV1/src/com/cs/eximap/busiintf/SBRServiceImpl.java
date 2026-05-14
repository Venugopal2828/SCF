package com.cs.eximap.busiintf;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Types;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.IntStream;

import org.apache.xerces.dom.DocumentImpl;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.cs.base.utility.uuid.UUIDGenerator;
import com.cs.base.xml.XMLManager;
import com.cs.core.dao.DSManager;
import com.cs.core.utility.CSEEDAOHelper;
import com.cs.core.utility.SchemaUtil;
import com.cs.eximap.utility.APLog;
import com.cs.eximap.utility.CSSQLStatement;
import com.cs.scf.db.SqlObj;
import com.cs.scf.util.Const;
import com.cs.scf.util.DateUtil;
import com.cs.scf.util.DsUtil;
import com.cs.scf.util.ParseGapiUtil;

public class SBRServiceImpl implements GAPIBusiIntf {

	private static final String TAG_COUNTERPARTY      = "Counterparty";
	private static final String TBL_TRX_FILE_HEAD     = "TRX_FILE_HEAD";
	private static final String TBL_STDS_CCL          = "STDS_CCL";
	private static final String TBL_FADA_MASTER       = "FADA_MASTER";
	private static final String SCF_ONBOARDING_XML    = "scf_onboarding.xml";

	public SBRServiceImpl() {
	}

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
		APLog.reportLog("domdata=====" + XMLManager.convertToString(gapiDoc));
		ParseGapiUtil gapiUtil = new ParseGapiUtil(gapiDoc);
		return buildOnboardingResult(gapiUtil);
	}

	@Override
	public DocumentImpl trxData(DocumentImpl arg0) throws Exception {
		return null;
	}

	// -----------------------------------------------------------------------
	// Main orchestration
	// -----------------------------------------------------------------------

	private DocumentImpl buildOnboardingResult(ParseGapiUtil gapiUtil) throws Exception {

		Node txnNode = gapiUtil.getgTxnNode();
		if (txnNode == null) {
			APLog.reportLog("buildOnboardingResult: gTxnNode null, skip");
			return null;
		}

		// The SCF reference number is carried in C_MAIN_REF inside the out-msg-content node
		String mainRef = XMLManager.getChildNodeValue(txnNode, "C_MAIN_REF", true);
		gapiUtil.setgMainRef(mainRef);
		if (mainRef == null || mainRef.trim().length() == 0) {
			APLog.reportLog("buildOnboardingResult: C_MAIN_REF empty, skip");
			return null;
		}

		// Load FADA_MASTER row for this SCF reference
		Map<String, String> fadaData = loadFadaMasterData(gapiUtil, mainRef.trim());
		if (fadaData == null || fadaData.isEmpty()) {
			APLog.reportLog("buildOnboardingResult: FADA_MASTER not found for mainRef=" + mainRef);
			return null;
		}

		// Build the SCF75 C_MSG XML from the template
		Document cMsgDoc = buildCMsgFromTemplate(gapiUtil, fadaData, txnNode);
		String cMsg = XMLManager.convertToString(cMsgDoc);
		APLog.reportLog("built C_MSG=====" + cMsg);

		// Build result DOM containing INSERT into TRX_FILE_HEAD and STDS_CCL
		return buildInsertResultDom(gapiUtil, cMsg, fadaData,txnNode);
	}

	// -----------------------------------------------------------------------
	// FADA_MASTER query
	// -----------------------------------------------------------------------

	/**
	 * Query FADA_MASTER for the given SCF main reference and return the columns
	 * needed to populate the Customer section and STDS_CCL.
	 */
	private Map<String, String> loadFadaMasterData(ParseGapiUtil gapiUtil, String mainRef) throws Exception {
		String bkGroup   = gapiUtil.getgStrBkGrpID();
		String cntyCd    = gapiUtil.getgCntyCD();
		String ds        = DSManager.getTrxDS(bkGroup, cntyCd);
		String sysSchema = DSManager.getTrxSchema(bkGroup, cntyCd);
		String fadaTable = SchemaUtil.getTableNameWithSchema(sysSchema, TBL_FADA_MASTER);

		CSSQLStatement stmt = new CSSQLStatement(CSSQLStatement.I_SQL_TYPE_SELECT, fadaTable, ds);
		stmt.addField("FA_ANCHOR_ID",   null, Types.VARCHAR);
		stmt.addField("FA_ANCHOR_NM",   null, Types.VARCHAR);
		stmt.addField("FA_ANCHOR_CCY",  null, Types.VARCHAR);
		stmt.addField("FA_AGM_VAL_DT",  null, Types.VARCHAR);
		stmt.addField("FA_AGM_DUE_DT",  null, Types.VARCHAR);
		stmt.addField("FA_LMT_AMT",     null, Types.VARCHAR);
		stmt.addField("FA_LMT_DUE_DT",  null, Types.VARCHAR);
		stmt.addField("FA_CNTR_DOC_NO", null, Types.VARCHAR);
		stmt.addField("FA_CUST_REG_NO", null, Types.VARCHAR);
		stmt.addField("FA_BUSI_TYPE",   null, Types.VARCHAR);
		stmt.setClause(" C_MAIN_REF = ? AND C_BK_GROUP_ID = ? ",
				new Object[]  { mainRef, bkGroup },
				new Integer[] { Types.VARCHAR, Types.VARCHAR });

		Document resultDoc = CSEEDAOHelper.commExecuteQuery(stmt);
		NodeList ndList = resultDoc.getDocumentElement().getElementsByTagName("record");

		Map<String, String> map = new HashMap<String, String>();
		if (ndList.getLength() > 0) {
			Node nd = ndList.item(0);
			for (String col : new String[] {
					"FA_ANCHOR_ID", "FA_ANCHOR_NM", "FA_ANCHOR_CCY",
					"FA_AGM_VAL_DT", "FA_AGM_DUE_DT", "FA_LMT_AMT", "FA_LMT_DUE_DT",
					"FA_CNTR_DOC_NO", "FA_CUST_REG_NO", "FA_BUSI_TYPE" }) {
				map.put(col, XMLManager.getChildNodeValue(nd, col, true));
			}
		}
		APLog.reportLog("loadFadaMasterData for mainRef=" + mainRef + ": " + map);
		return map;
	}

	// -----------------------------------------------------------------------
	// Template-based C_MSG building
	// -----------------------------------------------------------------------

	/**
	 * Read scf_onboarding.xml from {@code Const.SCF_PATH}, substitute the
	 * Customer placeholders from FADA_MASTER and the Counterparty placeholders
	 * from the GAPI txnNode, then return the populated Document.
	 */
	private Document buildCMsgFromTemplate(ParseGapiUtil gapiUtil,
			Map<String, String> fadaData, Node txnNode) throws Exception {

		String templatePath = Const.SCF_PATH + SCF_ONBOARDING_XML;
		String templateXml  = new String(Files.readAllBytes(Paths.get(templatePath)), "UTF-8");
		Document cMsgDoc    = XMLManager.xmlStrToDom(templateXml);

		// Stamp the message date with today's date
		NodeList msgDateList = cMsgDoc.getElementsByTagName("MsgDate");
		if (msgDateList.getLength() > 0) {
			Node md = msgDateList.item(0);
			while (md.hasChildNodes()) {
				md.removeChild(md.getFirstChild());
			}
			md.appendChild(cMsgDoc.createTextNode(java.time.LocalDate.now().toString()));
		}

		overlayCustomerFromFadaMaster(cMsgDoc, fadaData, gapiUtil);
		overlayCounterpartyFromTxnNode(cMsgDoc, txnNode);

		return cMsgDoc;
	}

	/**
	 * Populate the {@code <Customer>} element in the C_MSG document using
	 * values fetched from FADA_MASTER.
	 *
	 * Mapping (Customer XML element <- FADA_MASTER column):
	 *   BusiType                 <- FA_BUSI_TYPE
	 *   CustomerNr               <- FA_ANCHOR_ID
	 *   ContractDocNo            <- FA_CNTR_DOC_NO
	 *   UnitCode                 <- gapiUtil.getgUnitCode()
	 *   CustomerCompanyRegNr     <- FA_CUST_REG_NO
	 *   ValidDate                <- FA_AGM_VAL_DT
	 *   CustomerName             <- FA_ANCHOR_NM
	 *   DueDate                  <- FA_AGM_DUE_DT
	 *   ContractCcy              <- FA_ANCHOR_CCY
	 */
	private void overlayCustomerFromFadaMaster(Document cMsgDoc,
			Map<String, String> fadaData, ParseGapiUtil gapiUtil) {

		NodeList custList = cMsgDoc.getElementsByTagName("Customer");
		if (custList.getLength() == 0) {
			APLog.reportLog("overlayCustomerFromFadaMaster: no Customer element found in template");
			return;
		}
		Node cust = custList.item(0);

		replaceNodeText(cMsgDoc, cust, "BusiType",             fadaData.get("FA_BUSI_TYPE"));
		replaceNodeText(cMsgDoc, cust, "CustomerNr",           fadaData.get("FA_ANCHOR_ID"));
		replaceNodeText(cMsgDoc, cust, "ContractDocNo",        fadaData.get("FA_CNTR_DOC_NO"));
		replaceNodeText(cMsgDoc, cust, "UnitCode",             gapiUtil.getgUnitCode());
		replaceNodeText(cMsgDoc, cust, "CustomerCompanyRegNr", fadaData.get("FA_CUST_REG_NO"));
		replaceNodeText(cMsgDoc, cust, "ValidDate",            fadaData.get("FA_AGM_VAL_DT"));
		replaceNodeText(cMsgDoc, cust, "CustomerName",         fadaData.get("FA_ANCHOR_NM"));
		replaceNodeText(cMsgDoc, cust, "DueDate",              fadaData.get("FA_AGM_DUE_DT"));
		replaceNodeText(cMsgDoc, cust, "ContractCcy",          fadaData.get("FA_ANCHOR_CCY"));

		APLog.reportLog("overlayCustomerFromFadaMaster: done for CustomerNr=" + fadaData.get("FA_ANCHOR_ID"));
	}

	// -----------------------------------------------------------------------
	// Counterparty overlay (from GAPI txnNode)
	// -----------------------------------------------------------------------

	/**
	 * Overlay fields from the GAPI out-msg-content (txnNode) into the
	 * {@code <Counterparty>} element inside cMsgDoc.
	 *
	 * Mapping (Counterparty XML element <- txnNode field):
	 *   CounterpartyCompanyRegNr  <- FA_CUST_REG_NO
	 *   CounterpartyName          <- PARTY_NM
	 *   CounterpartyAcct          <- FA_CUST_ACC_NO
	 *   Street                    <- CUST_STREET_NM
	 *   City                      <- CUST_CITY
	 *   Country                   <- CNTY_CODE
	 *   ContactName               <- FST_CNTC_NM
	 *   MailAddr                  <- FA_CUST_NM_ADD_ML
	 *   ApplLimit                 <- FA_LMT_AMT
	 *   DueDate                   <- FA_LMT_DUE_DT
	 *   OurCustInd                <- FA_CUST_FLAG
	 *   FrontEndUser              <- CE_CUSTOMER
	 *   Email                     <- EMAIL_ADD
	 *   Currency                  <- FA_LMT_CCY
	 */
	private void overlayCounterpartyFromTxnNode(Document cMsgDoc, Node txnNode) {
		if (cMsgDoc == null || txnNode == null) {
			return;
		}
		NodeList cpList = cMsgDoc.getElementsByTagName(TAG_COUNTERPARTY);
		if (cpList.getLength() == 0) {
			APLog.reportLog("overlayCounterpartyFromTxnNode: no Counterparty found in template");
			return;
		}
		Node cp = cpList.item(0);

		setChildNodeText(cMsgDoc, cp, "CounterpartyCompanyRegNr", XMLManager.getChildNodeValue(txnNode, "FA_CUST_REG_NO",    true));
		setChildNodeText(cMsgDoc, cp, "CounterpartyName",         XMLManager.getChildNodeValue(txnNode, "PARTY_NM",          true));
		setChildNodeText(cMsgDoc, cp, "CounterpartyAcct",         XMLManager.getChildNodeValue(txnNode, "FA_CUST_ACC_NO",    true));
		setChildNodeText(cMsgDoc, cp, "Street",                   XMLManager.getChildNodeValue(txnNode, "CUST_STREET_NM",    true));
		setChildNodeText(cMsgDoc, cp, "City",                     XMLManager.getChildNodeValue(txnNode, "CUST_CITY",         true));
		setChildNodeText(cMsgDoc, cp, "Country",                  XMLManager.getChildNodeValue(txnNode, "CNTY_CODE",         true));
		setChildNodeText(cMsgDoc, cp, "ContactName",              XMLManager.getChildNodeValue(txnNode, "FST_CNTC_NM",       true));
		setChildNodeText(cMsgDoc, cp, "MailAddr",                 XMLManager.getChildNodeValue(txnNode, "FA_CUST_NM_ADD_ML", true));
		setChildNodeText(cMsgDoc, cp, "ApplLimit",                XMLManager.getChildNodeValue(txnNode, "FA_LMT_AMT",        true));
		setChildNodeText(cMsgDoc, cp, "DueDate",                  XMLManager.getChildNodeValue(txnNode, "FA_LMT_DUE_DT",     true));
		setChildNodeText(cMsgDoc, cp, "OurCustInd",               XMLManager.getChildNodeValue(txnNode, "FA_CUST_FLAG",      true));
		setChildNodeText(cMsgDoc, cp, "FrontEndUser",             XMLManager.getChildNodeValue(txnNode, "CE_CUSTOMER",       true));
		setChildNodeText(cMsgDoc, cp, "Email",                    XMLManager.getChildNodeValue(txnNode, "EMAIL_ADD",         true));
		setChildNodeText(cMsgDoc, cp, "Currency",                 XMLManager.getChildNodeValue(txnNode, "FA_LMT_CCY",        true));

		APLog.reportLog("overlayCounterpartyFromTxnNode: overlay done for FA_CUST_REG_NO="
				+ XMLManager.getChildNodeValue(txnNode, "FA_CUST_REG_NO", true));
	}

	// -----------------------------------------------------------------------
	// Result DOM building (TRX_FILE_HEAD + STDS_CCL INSERTs)
	// -----------------------------------------------------------------------

	private DocumentImpl buildInsertResultDom(ParseGapiUtil gapiUtil, String cMsg,
			Map<String, String> fadaData,Node txnNode) throws Exception {

		String bkGroup   = gapiUtil.getgStrBkGrpID();
		String cntyCd    = gapiUtil.getgCntyCD();
		String trxDs     = DSManager.getTrxDS(bkGroup, cntyCd);
		String sysSchema = DSManager.getSystemSchema(bkGroup, cntyCd);
		String hTable    = SchemaUtil.getTableNameWithSchema(sysSchema, TBL_TRX_FILE_HEAD);
		String cclTable  = SchemaUtil.getTableNameWithSchema(sysSchema, TBL_STDS_CCL);

		DocumentImpl resultDom = XMLManager.createDocumentImpl();
		Element dsElmt = resultDom.createElement("C_DS_ID");
		dsElmt.appendChild(resultDom.createTextNode(trxDs));
		resultDom.getDocumentElement().appendChild(dsElmt);
		Node stmtNode = resultDom.createElement("SQLStatement");
		resultDom.getDocumentElement().appendChild(stmtNode);

		// --- INSERT TRX_FILE_HEAD ---
		String fileIndex = UUIDGenerator.getInstance().generateUUID();
		Map<String, Integer> headLayMap = new HashMap<String, Integer>();
		headLayMap.putAll(DsUtil.getTableFieldType(0, TBL_TRX_FILE_HEAD));
		headLayMap.put("C_MSG",     Integer.valueOf(Types.VARCHAR));
		headLayMap.put("C_ERR_MSG", Integer.valueOf(Types.VARCHAR));
		Map<String, Object> headData = genFileHeadData(gapiUtil, fileIndex, cMsg);
		SqlObj headSo = DsUtil.createInsert(headLayMap, headData, hTable, false);
		CSSQLStatement headSQL = new CSSQLStatement(CSSQLStatement.I_SQL_TYPE_INSERT, hTable, trxDs);
		headSQL.addSql(headSo.getSql(), headSo.getArgs(),
				IntStream.of(headSo.getArgTypes()).boxed().toArray(Integer[]::new));
		stmtNode.appendChild(resultDom.importNode(headSQL.genSqlNode(), true));
		APLog.reportLog("headSQL sql=====" + headSo.getSql());

		// --- INSERT EXIMSYS.STDS_CCL ---
		Map<String, Integer> cclLayMap = buildStdsCclTypeMap();
		Map<String, Object>  cclData   = genStdsCclData(gapiUtil, fadaData,txnNode);
		SqlObj cclSo = DsUtil.createInsert(cclLayMap, cclData, cclTable, false);
		CSSQLStatement cclSQL = new CSSQLStatement(CSSQLStatement.I_SQL_TYPE_INSERT, cclTable, trxDs);
		cclSQL.addSql(cclSo.getSql(), cclSo.getArgs(),
				IntStream.of(cclSo.getArgTypes()).boxed().toArray(Integer[]::new));
		stmtNode.appendChild(resultDom.importNode(cclSQL.genSqlNode(), true));
		APLog.reportLog("cclSQL sql=====" + cclSo.getSql());

		APLog.reportLog("buildInsertResultDom result=====" + XMLManager.convertToString(resultDom));
		return resultDom;
	}

	// -----------------------------------------------------------------------
	// Data map builders
	// -----------------------------------------------------------------------

	private Map<String, Object> genFileHeadData(ParseGapiUtil gapiUtil, String fileIndex, String msg) {
		String unitCode = gapiUtil.getgUnitCode();
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("C_FILE_INDEX",    fileIndex);
		map.put("C_BK_GROUP_ID",   gapiUtil.getgStrBkGrpID());
		map.put("C_CNTY_CODE",     null);
		map.put("C_UNIT_CODE",     unitCode);
		map.put("C_MSG_SET",       "Onboarding");
		map.put("C_MSG_TYPE",      null);
		map.put("C_FILE_TYPE",     "xml");
		map.put("C_FILE_NAME",     gapiUtil.getgMainRef());
		map.put("C_FILE_FROM",     "MANUAL");
		map.put("C_FILE_MD5",      null);
		map.put("C_TRX_STATUS",    "P");
		map.put("C_MAIL_STATUS",   "P");
		map.put("B_FILE_CONTENT",  msg);
		map.put("C_LOCKED_FLAG",   "F");
		map.put("C_FAIL_REASON",   null);
		map.put("C_CREATED_BU",    unitCode);
		map.put("C_CREATED_BY",    "SCFBATCHOP");
		map.put("C_RELEASE_BU",    unitCode);
		map.put("C_RELEASE_BY",    "SCFBATCHOP");
		map.put("I_TOTAL_RECORDS", Integer.valueOf(1));
		map.put("I_SUCC_RECORDS",  null);
		map.put("I_FAIL_RECORDS",  null);
		map.put("D_CREA_DATE",     DateUtil.getDate());
		map.put("T_CREA_TIME",     DateUtil.getSysDateTime());
		map.put("D_RELE_DATE",     null);
		map.put("T_RELE_TIME",     null);
		map.put("C_PARENT_ID",     null);
		map.put("C_MSG",           msg);
		return map;
	}

	/**
	 * JDBC type map for STDS_CCL columns that are included in the INSERT.
	 */
	private Map<String, Integer> buildStdsCclTypeMap() {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("C_LOCKED_FLAG", Types.VARCHAR);
		map.put("LM_RELE_BY",    Types.VARCHAR);
		map.put("LM_MAKE_BY",    Types.VARCHAR);
		map.put("LM_SUBLIMIT",   Types.VARCHAR);
		map.put("LM_STR_DAY",    Types.DATE);
		map.put("LM_DUE_DAY",    Types.DATE);
		map.put("LM_CRED_LMT",   Types.NUMERIC);
		map.put("LM_BASE_CCY",   Types.VARCHAR);
		map.put("LM_RCUST_ID",   Types.VARCHAR);
		map.put("LM_CUST_NAME",  Types.VARCHAR);
		map.put("LM_CUST_ID",    Types.VARCHAR);
		map.put("C_UNIT_CODE",   Types.VARCHAR);
		map.put("C_CNTY_CODE",   Types.VARCHAR);
		map.put("C_BK_GROUP_ID", Types.VARCHAR);
		map.put("LM_STATUS",     Types.VARCHAR);
		return map;
	}

	/**
	 * Data values for the STDS_CCL INSERT.
	 *
	 * Column sources:
	 *   LM_RCUST_ID  = C_MAIN_REF from txnNode (the SCF agreement/counterparty number)
	 *   LM_CUST_ID   = FA_ANCHOR_ID  from FADA_MASTER
	 *   LM_CUST_NAME = FA_ANCHOR_NM  from FADA_MASTER
	 *   LM_CRED_LMT  = FA_LMT_AMT   from FADA_MASTER
	 *   LM_BASE_CCY  = FA_ANCHOR_CCY from FADA_MASTER
	 *   LM_STR_DAY   = FA_AGM_VAL_DT from FADA_MASTER
	 *   LM_DUE_DAY   = FA_LMT_DUE_DT from FADA_MASTER
	 *   C_UNIT_CODE / C_CNTY_CODE / C_BK_GROUP_ID from gapiUtil
	 */
	private Map<String, Object> genStdsCclData(ParseGapiUtil gapiUtil, Map<String, String> fadaData, Node txnNode) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("C_LOCKED_FLAG", "F");
		map.put("LM_RELE_BY",    "CSBANKOP");
		map.put("LM_MAKE_BY",    "CSBANKOP");
		map.put("LM_SUBLIMIT",   "Y");
		map.put("LM_STR_DAY",    parseSqlDate(fadaData.get("FA_AGM_VAL_DT")));
		map.put("LM_DUE_DAY",    parseSqlDate(fadaData.get("FA_AGM_DUE_DT")));
		map.put("LM_CRED_LMT",   XMLManager.getChildNodeValue(txnNode, "FA_LMT_AMT", true));
		map.put("LM_BASE_CCY",   fadaData.get("FA_ANCHOR_CCY"));
		map.put("LM_RCUST_ID",   gapiUtil.getgMainRef());
		map.put("LM_CUST_NAME",  fadaData.get("FA_ANCHOR_NM"));
		map.put("LM_CUST_ID",    fadaData.get("FA_ANCHOR_ID"));
		map.put("C_UNIT_CODE",   gapiUtil.getgUnitCode());
		map.put("C_CNTY_CODE",   gapiUtil.getgCntyCD());
		map.put("C_BK_GROUP_ID", gapiUtil.getgStrBkGrpID());
		map.put("LM_STATUS",     "A");
		return map;
	}

	// -----------------------------------------------------------------------
	// XML helpers
	// -----------------------------------------------------------------------

	/**
	 * Find the first direct-child element of {@code parent} with the given
	 * {@code tagName} and set its text content to {@code value}.
	 * Does nothing when {@code value} is null or blank (preserves existing text).
	 */
	private void setChildNodeText(Document doc, Node parent, String tagName, String value) {
		if (value == null || value.trim().isEmpty()) {
			return;
		}
		Node child = XMLManager.findChildNode(parent, tagName);
		if (child == null) {
			APLog.reportLog("setChildNodeText: child <" + tagName + "> not found");
			return;
		}
		while (child.hasChildNodes()) {
			child.removeChild(child.getFirstChild());
		}
		child.appendChild(doc.createTextNode(value.trim()));
	}

	/**
	 * Like {@link #setChildNodeText} but always replaces the node's content,
	 * clearing template placeholder text even when {@code value} is null/blank.
	 */
	private void replaceNodeText(Document doc, Node parent, String tagName, String value) {
		Node child = XMLManager.findChildNode(parent, tagName);
		if (child == null) {
			APLog.reportLog("replaceNodeText: child <" + tagName + "> not found");
			return;
		}
		while (child.hasChildNodes()) {
			child.removeChild(child.getFirstChild());
		}
		String text = (value != null) ? value.trim() : "";
		if (!text.isEmpty()) {
			child.appendChild(doc.createTextNode(text));
		}
	}

	// -----------------------------------------------------------------------
	// Type-conversion helpers
	// -----------------------------------------------------------------------

	/**
	 * Convert a date string (expected format: {@code yyyy-MM-dd} or longer ISO
	 * timestamp) to a {@link java.sql.Date}.  Returns {@code null} on failure.
	 */
	private java.sql.Date parseSqlDate(String dateStr) {
		if (dateStr == null || dateStr.trim().isEmpty()) {
			return null;
		}
		try {
			// Take only the first 10 characters to handle timestamps like "2026-05-12T00:00:00"
			return java.sql.Date.valueOf(dateStr.trim().substring(0, 10));
		} catch (Exception e) {
			APLog.reportLog("parseSqlDate: unable to parse date: " + dateStr);
			return null;
		}
	}
	 
}
