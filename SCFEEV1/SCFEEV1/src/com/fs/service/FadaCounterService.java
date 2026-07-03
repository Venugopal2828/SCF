package com.fs.service;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.SQLException;
import java.sql.Types;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.IntStream;

import org.json.JSONObject;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

import com.cs.base.utility.uuid.UUIDGenerator;
import com.cs.base.xml.XMLManager;
import com.cs.core.dao.DSManager;
import com.cs.core.err.WSException;
import com.cs.core.utility.CSEEDAOHelper;
import com.cs.core.utility.SchemaUtil;
import com.cs.eximap.utility.APLog;
import com.cs.eximap.utility.CSSQLStatement;
import com.cs.scf.db.SqlObj;
import com.cs.scf.util.Const;
import com.cs.scf.util.DateUtil;
import com.cs.scf.util.DsUtil;

public class FadaCounterService {

	private static final String TABLE = "EXIMTRX.FADA_COUNTER";
	private static final String TBL_TRX_FILE_HEAD = "TRX_FILE_HEAD";
	private static final String BANK_GROUP = "CSBANK";
	private static final String COUNTRY_CODE = "US";

	// -----------------------------------------------------------------------
	// TRX_FILE_HEAD INSERT (SBR creation entry point called from SecureApi)
	// -----------------------------------------------------------------------

	/**
	 * Inserts a row into TRX_FILE_HEAD for every CP-data payload that arrives from
	 * the CE /cpData endpoint.
	 *
	 * The method mirrors the pattern used in SBRServiceImpl.buildInsertResultDom():
	 * 1. Generate a UUID for C_FILE_INDEX. 2. Build the column-type map
	 * (DsUtil.getTableFieldType + extras). 3. Build the data-value map from the CE
	 * JSON payload. 4. Use DsUtil.createInsert → SqlObj → CSSQLStatement to
	 * execute.
	 *
	 * @param payload the full JSON object received at /cpData (must contain at
	 *                minimum "cMainRef")
	 */
	/**
	 * Full SBR-style TRX_FILE_HEAD insert for cpSelfEnrol=No records.
	 *
	 * Flow (mirrors SBRServiceImpl exactly): 1. Load FADA_MASTER using
	 * faContractRef → Customer section of XML 2. Read scf_onboarding.xml template
	 * 3. Overlay Customer from FADA_MASTER data 4. Overlay Counterparty from CE
	 * doRecord JSON fields 5. Convert populated Document → XML string (cMsg) 6.
	 * INSERT TRX_FILE_HEAD with cMsg in both B_FILE_CONTENT and C_MSG
	 *
	 * @param record individual doRecord from CE /cpData (cpSelfEnrol=No only)
	 */
	/**
	 * @param record   individual doRecord from CE /cpData (cpSelfEnrol=No only)
	 * @param cMainRef top-level SCF agreement ref from CE e.g. SCFUS2606881 stored
	 *                 in C_FILE_NAME — same as gapiUtil.getgMainRef() in SBR
	 */
	public void insertTrxFileHead(JSONObject record, String cMainRef) throws Exception {
		APLog.reportLog("[TRX_FILE_HEAD] insertTrxFileHead START | cMainRef=" + cMainRef);

		String faContractRef = record.optString("faContractRef", "").trim();
		if (faContractRef.isEmpty()) {
			throw new IllegalArgumentException("faContractRef is mandatory for TRX_FILE_HEAD insert");
		}

		String ds = DSManager.getTrxDS(BANK_GROUP, COUNTRY_CODE);
		String trxSchema = DSManager.getTrxSchema(BANK_GROUP, COUNTRY_CODE); // EXIMTRX — for FADA_MASTER
		String sysSchema = DSManager.getSystemSchema(BANK_GROUP, COUNTRY_CODE); // EXIMSYS — for TRX_FILE_HEAD
		String hTable = SchemaUtil.getTableNameWithSchema(sysSchema, TBL_TRX_FILE_HEAD);

		APLog.reportLog("[TRX_FILE_HEAD] ds=" + ds + " | trxSchema=" + trxSchema + " | sysSchema=" + sysSchema);

		// ── Step 1: Load FADA_MASTER (same query as SBRServiceImpl) ─────────
		// FADA_MASTER lives in EXIMTRX schema — must use trxSchema, NOT sysSchema
		Map<String, String> fadaData = loadFadaMasterForCp(faContractRef, ds, trxSchema);
		if (fadaData == null || fadaData.isEmpty()) {
			APLog.reportLog("[TRX_FILE_HEAD] FADA_MASTER not found for faContractRef=" + faContractRef
					+ " — skipping TRX_FILE_HEAD insert");
			return;
		}

		// ── Step 2: Build XML C_MSG from scf_onboarding.xml template ────────
		String cMsg = buildCMsgXml(fadaData, record);
		APLog.reportLog("[TRX_FILE_HEAD] built C_MSG=" + cMsg);

		// ── Step 3: Generate UUID for C_FILE_INDEX ───────────────────────────
		String fileIndex = UUIDGenerator.getInstance().generateUUID();
		APLog.reportLog("[TRX_FILE_HEAD] fileIndex=" + fileIndex);

		// ── Step 4: Build column-type map (same as SBRServiceImpl) ──────────
		Map<String, Integer> headLayMap = new HashMap<String, Integer>();
		headLayMap.putAll(DsUtil.getTableFieldType(0, TBL_TRX_FILE_HEAD));
		headLayMap.put("C_MSG", Integer.valueOf(Types.VARCHAR));
		headLayMap.put("C_ERR_MSG", Integer.valueOf(Types.VARCHAR));

		// ── Step 5: Build data-value map with the populated XML ──────────────
		// cMainRef (e.g. SCFUS2606881) goes into C_FILE_NAME — same as SBR's
		// getgMainRef()
		Map<String, Object> headData = buildFileHeadDataFromCp(record, fileIndex, cMsg, cMainRef);

		// ── Step 6: Execute INSERT (same pattern as SBRServiceImpl) ─────────
		SqlObj headSo = DsUtil.createInsert(headLayMap, headData, hTable, false);
		CSSQLStatement headSQL = new CSSQLStatement(CSSQLStatement.I_SQL_TYPE_INSERT, hTable, ds);
		headSQL.addSql(headSo.getSql(), headSo.getArgs(),
				IntStream.of(headSo.getArgTypes()).boxed().toArray(Integer[]::new));

		APLog.reportLog("[TRX_FILE_HEAD] SQL=" + headSo.getSql());
		CSEEDAOHelper.commExecuteUpdate(headSQL);

		APLog.reportLog("[TRX_FILE_HEAD] INSERT SUCCESS" + " | C_FILE_INDEX=" + fileIndex + " | C_FILE_NAME=" + cMainRef // SCFUS2606881
				+ " | faContractRef=" + faContractRef);
	}

	// -----------------------------------------------------------------------
	// FADA_MASTER query (same columns as SBRServiceImpl.loadFadaMasterData)
	// -----------------------------------------------------------------------

	/**
	 * Query FADA_MASTER by faContractRef (= C_MAIN_REF) to get Customer fields.
	 * Identical column set to SBRServiceImpl.loadFadaMasterData().
	 */
	private Map<String, String> loadFadaMasterForCp(String faContractRef, String ds, String trxSchema)
			throws Exception {

		// FADA_MASTER is in the TRX schema (EXIMTRX), same as FADA_COUNTER
		String fadaTable = SchemaUtil.getTableNameWithSchema(trxSchema, "FADA_MASTER");
		APLog.reportLog("[TRX_FILE_HEAD] querying FADA_MASTER=" + fadaTable + " for faContractRef=" + faContractRef);

		CSSQLStatement stmt = new CSSQLStatement(CSSQLStatement.I_SQL_TYPE_SELECT, fadaTable, ds);
		stmt.addField("FA_ANCHOR_ID", null, Types.VARCHAR);
		stmt.addField("FA_ANCHOR_NM", null, Types.VARCHAR);
		stmt.addField("FA_ANCHOR_CCY", null, Types.VARCHAR);
		stmt.addField("FA_AGM_VAL_DT", null, Types.VARCHAR);
		stmt.addField("FA_AGM_DUE_DT", null, Types.VARCHAR);
		stmt.addField("FA_LMT_AMT", null, Types.VARCHAR);
		stmt.addField("FA_LMT_DUE_DT", null, Types.VARCHAR);
		stmt.addField("FA_CNTR_DOC_NO", null, Types.VARCHAR);
		stmt.addField("FA_CUST_REG_NO", null, Types.VARCHAR);
		stmt.addField("FA_BUSI_TYPE", null, Types.VARCHAR);
		stmt.setClause(" C_MAIN_REF = ? AND C_BK_GROUP_ID = ? ", new Object[] { faContractRef, BANK_GROUP },
				new Integer[] { Types.VARCHAR, Types.VARCHAR });

		Document resultDoc = CSEEDAOHelper.commExecuteQuery(stmt);
		NodeList ndList = resultDoc.getDocumentElement().getElementsByTagName("record");

		Map<String, String> map = new HashMap<String, String>();
		if (ndList.getLength() > 0) {
			org.w3c.dom.Node nd = ndList.item(0);
			for (String col : new String[] { "FA_ANCHOR_ID", "FA_ANCHOR_NM", "FA_ANCHOR_CCY", "FA_AGM_VAL_DT",
					"FA_AGM_DUE_DT", "FA_LMT_AMT", "FA_LMT_DUE_DT", "FA_CNTR_DOC_NO", "FA_CUST_REG_NO",
					"FA_BUSI_TYPE" }) {
				map.put(col, XMLManager.getChildNodeValue(nd, col, true));
			}
		}
		APLog.reportLog("[TRX_FILE_HEAD] loadFadaMasterForCp for faContractRef=" + faContractRef + ": " + map);
		return map;
	}

	// -----------------------------------------------------------------------
	// Template XML building (mirrors SBRServiceImpl.buildCMsgFromTemplate)
	// -----------------------------------------------------------------------

	/**
	 * Read scf_onboarding.xml, overlay Customer from FADA_MASTER data and
	 * Counterparty from the CE doRecord JSON, return as XML string.
	 *
	 * Customer mapping (FADA_MASTER → XML): BusiType ← FA_BUSI_TYPE CustomerNr ←
	 * FA_ANCHOR_ID ContractDocNo ← FA_CNTR_DOC_NO UnitCode ← "CSBANK"
	 * CustomerCompanyRegNr ← FA_CUST_REG_NO ValidDate ← FA_AGM_VAL_DT CustomerName
	 * ← FA_ANCHOR_NM DueDate ← FA_AGM_DUE_DT ContractCcy ← FA_ANCHOR_CCY
	 *
	 * Counterparty mapping (CE doRecord JSON → XML): CounterpartyCompanyRegNr ←
	 * counterRegNo CounterpartyName ← cpName CounterpartyAcct ← counterAcc Street ←
	 * counterStr City ← counterCt Country ← counterCnty ContactName ← counterContNm
	 * MailAddr ← counterAddMl ApplLimit ← lmtAmt DueDate ← lmtDueDt OurCustInd ←
	 * custFlag FrontEndUser ← cpId Email ← cpMail Currency ← lmtCcy
	 */
	private String buildCMsgXml(Map<String, String> fadaData, JSONObject record) throws Exception {

		String templatePath = Const.SCF_PATH + "scf_onboarding.xml";
		String templateXml = new String(Files.readAllBytes(Paths.get(templatePath)), "UTF-8");
		Document cMsgDoc = XMLManager.xmlStrToDom(templateXml);

		// Stamp MsgDate with today
		NodeList msgDateList = cMsgDoc.getElementsByTagName("MsgDate");
		if (msgDateList.getLength() > 0) {
			org.w3c.dom.Node md = msgDateList.item(0);
			while (md.hasChildNodes())
				md.removeChild(md.getFirstChild());
			md.appendChild(cMsgDoc.createTextNode(LocalDate.now().toString()));
		}

		// ── Overlay Customer from FADA_MASTER ────────────────────────────────
		NodeList custList = cMsgDoc.getElementsByTagName("Customer");
		if (custList.getLength() > 0) {
			org.w3c.dom.Node cust = custList.item(0);
			replaceNodeText(cMsgDoc, cust, "BusiType", fadaData.get("FA_BUSI_TYPE"));
			replaceNodeText(cMsgDoc, cust, "CustomerNr", fadaData.get("FA_ANCHOR_ID"));
			replaceNodeText(cMsgDoc, cust, "ContractDocNo", fadaData.get("FA_CNTR_DOC_NO"));
			replaceNodeText(cMsgDoc, cust, "UnitCode", BANK_GROUP);
			replaceNodeText(cMsgDoc, cust, "CustomerCompanyRegNr", fadaData.get("FA_CUST_REG_NO"));
			replaceNodeText(cMsgDoc, cust, "ValidDate", fadaData.get("FA_AGM_VAL_DT"));
			replaceNodeText(cMsgDoc, cust, "CustomerName", fadaData.get("FA_ANCHOR_NM"));
			replaceNodeText(cMsgDoc, cust, "DueDate", fadaData.get("FA_AGM_DUE_DT"));
			replaceNodeText(cMsgDoc, cust, "ContractCcy", fadaData.get("FA_ANCHOR_CCY"));
			APLog.reportLog("[TRX_FILE_HEAD] Customer overlay done for CustomerNr=" + fadaData.get("FA_ANCHOR_ID"));
		}

		// ── Overlay Counterparty from CE doRecord JSON ────────────────────────
		NodeList cpList = cMsgDoc.getElementsByTagName("Counterparty");
		if (cpList.getLength() > 0) {
			org.w3c.dom.Node cp = cpList.item(0);
			setChildNodeText(cMsgDoc, cp, "CounterpartyCompanyRegNr", record.optString("counterRegNo", ""));
			setChildNodeText(cMsgDoc, cp, "CounterpartyName", record.optString("cpName", ""));
			setChildNodeText(cMsgDoc, cp, "CounterpartyAcct", record.optString("counterAcc", ""));
			setChildNodeText(cMsgDoc, cp, "Street", record.optString("counterStr", ""));
			setChildNodeText(cMsgDoc, cp, "City", record.optString("counterCt", ""));
			setChildNodeText(cMsgDoc, cp, "Country", record.optString("counterCnty", ""));
			setChildNodeText(cMsgDoc, cp, "ContactName", record.optString("counterContNm", ""));
			setChildNodeText(cMsgDoc, cp, "MailAddr", record.optString("counterAddMl", ""));
			setChildNodeText(cMsgDoc, cp, "ApplLimit", record.optString("lmtAmt", ""));
			setChildNodeText(cMsgDoc, cp, "DueDate", record.optString("lmtDueDt", ""));
			setChildNodeText(cMsgDoc, cp, "OurCustInd", record.optString("custFlag", ""));
			setChildNodeText(cMsgDoc, cp, "FrontEndUser", record.optString("cpId", ""));
			setChildNodeText(cMsgDoc, cp, "Email", record.optString("cpMail", ""));
			setChildNodeText(cMsgDoc, cp, "Currency", record.optString("lmtCcy", ""));
			APLog.reportLog("[TRX_FILE_HEAD] Counterparty overlay done for cpId=" + record.optString("cpId", ""));
		}

		return XMLManager.convertToString(cMsgDoc);
	}

	// -----------------------------------------------------------------------
	// TRX_FILE_HEAD data map builder
	// -----------------------------------------------------------------------

	/**
	 * Maps CE doRecord fields → TRX_FILE_HEAD columns. cMsg is the fully built XML
	 * from scf_onboarding.xml — stored in both B_FILE_CONTENT and C_MSG exactly as
	 * SBRServiceImpl.genFileHeadData() does.
	 *
	 * C_FILE_INDEX ← generated UUID C_BK_GROUP_ID ← CSBANK C_CNTY_CODE ← null
	 * C_UNIT_CODE ← CSBANK C_MSG_SET ← "Onboarding" C_MSG_TYPE ← null C_FILE_TYPE ←
	 * "xml" C_FILE_NAME ← faContractRef (SCF agreement ref, same as C_MAIN_REF in
	 * SBR) C_FILE_FROM ← "MANUAL" C_FILE_MD5 ← null C_TRX_STATUS ← "P"
	 * C_MAIL_STATUS ← "P" B_FILE_CONTENT ← cMsg (populated XML) C_LOCKED_FLAG ← "F"
	 * C_FAIL_REASON ← null C_CREATED_BU ← CSBANK C_CREATED_BY ← "SCFBATCHOP"
	 * C_RELEASE_BU ← CSBANK C_RELEASE_BY ← "SCFBATCHOP" I_TOTAL_RECORDS ← 1
	 * D_CREA_DATE ← today T_CREA_TIME ← system date-time C_MSG ← cMsg (populated
	 * XML)
	 */
	private Map<String, Object> buildFileHeadDataFromCp(JSONObject record, String fileIndex, String cMsg,
			String cMainRef) {
		String unitCode = BANK_GROUP;

		Map<String, Object> map = new HashMap<String, Object>();
		map.put("C_FILE_INDEX", fileIndex);
		map.put("C_BK_GROUP_ID", BANK_GROUP);
		map.put("C_CNTY_CODE", null);
		map.put("C_UNIT_CODE", unitCode);
		map.put("C_MSG_SET", "Onboarding");
		map.put("C_MSG_TYPE", null);
		map.put("C_FILE_TYPE", "xml");
		map.put("C_FILE_NAME", cMainRef); // SCF agreement ref e.g. SCFUS2606881 from CE
		map.put("C_FILE_FROM", "MANUAL");
		map.put("C_FILE_MD5", null);
		map.put("C_TRX_STATUS", "P");
		map.put("C_MAIL_STATUS", "P");
		map.put("B_FILE_CONTENT", cMsg); // populated XML — same as SBR
		map.put("C_LOCKED_FLAG", "F");
		map.put("C_FAIL_REASON", null);
		map.put("C_CREATED_BU", unitCode);
		map.put("C_CREATED_BY", "SCFBATCHOP");
		map.put("C_RELEASE_BU", unitCode);
		map.put("C_RELEASE_BY", "SCFBATCHOP");
		map.put("I_TOTAL_RECORDS", Integer.valueOf(1));
		map.put("I_SUCC_RECORDS", null);
		map.put("I_FAIL_RECORDS", null);
		map.put("D_CREA_DATE", DateUtil.getDate());
		map.put("T_CREA_TIME", DateUtil.getSysDateTime());
		map.put("D_RELE_DATE", null);
		map.put("T_RELE_TIME", null);
		map.put("C_PARENT_ID", null);
		map.put("C_MSG", cMsg); // populated XML — same as SBR
		return map;
	}

	// -----------------------------------------------------------------------
	// XML helpers (same logic as SBRServiceImpl)
	// -----------------------------------------------------------------------

	/**
	 * Replaces node text always — clears template placeholder even for null/blank.
	 */
	private void replaceNodeText(org.w3c.dom.Document doc, org.w3c.dom.Node parent, String tagName, String value) {
		org.w3c.dom.Node child = com.cs.base.xml.XMLManager.findChildNode(parent, tagName);
		if (child == null) {
			APLog.reportLog("replaceNodeText: <" + tagName + "> not found");
			return;
		}
		while (child.hasChildNodes())
			child.removeChild(child.getFirstChild());
		String text = (value != null) ? value.trim() : "";
		if (!text.isEmpty())
			child.appendChild(doc.createTextNode(text));
	}

	/**
	 * Sets node text only when value is non-blank — preserves template default
	 * otherwise.
	 */
	private void setChildNodeText(org.w3c.dom.Document doc, org.w3c.dom.Node parent, String tagName, String value) {
		if (value == null || value.trim().isEmpty())
			return;
		org.w3c.dom.Node child = com.cs.base.xml.XMLManager.findChildNode(parent, tagName);
		if (child == null) {
			APLog.reportLog("setChildNodeText: <" + tagName + "> not found");
			return;
		}
		while (child.hasChildNodes())
			child.removeChild(child.getFirstChild());
		child.appendChild(doc.createTextNode(value.trim()));
	}

	// -----------------------------------------------------------------------
	// FADA_COUNTER INSERT / UPDATE (unchanged from original)
	// -----------------------------------------------------------------------

	public void insert(JSONObject payload, int type) throws Exception {

		CSSQLStatement insert = null;

		try {
			APLog.reportLog("[FADA_COUNTER] Preparing JSON-based insert");

			String faContractRef = payload.optString("faContractRef", "").trim();
			if (faContractRef.isEmpty()) {
				throw new IllegalArgumentException("faContractRef is mandatory");
			}

			String cTrxRef = payload.optString("cTrxRef", faContractRef);

			String ds = DSManager.getTrxDS(BANK_GROUP, COUNTRY_CODE);
			insert = new CSSQLStatement(type, TABLE, ds);

			/* ================= MANDATORY NOT NULL ================= */
			String cpytRela = "PF" + BANK_GROUP + System.currentTimeMillis();
			addField(insert, "CPYT_C_RELA_REF", cpytRela, Types.VARCHAR);

			/* ================= CORE FIELDS ================= */
			addField(insert, "C_MAIN_REF", faContractRef, Types.VARCHAR);
			addField(insert, "C_TRX_REF", cTrxRef, Types.VARCHAR);
			addField(insert, "C_UNIT_CODE", payload.optString("cUnitCode", "CSBANK"), Types.VARCHAR);
			addField(insert, "C_DO_NAME", "SCF_CounterParty", Types.VARCHAR);
			addField(insert, "CUST_TYPE", "T1", Types.VARCHAR);

			/* ================= ANCHOR DETAILS ================= */
			addField(insert, "FA_ANCHOR_ID", payload.optString("cpId", ""), Types.VARCHAR);
			addField(insert, "FA_ANCHOR_NM", payload.optString("cpName", ""), Types.VARCHAR);

			/* ================= COUNTER PARTY DETAILS ================= */
			addField(insert, "FA_COUNTER_ID", payload.optString("cpId", ""), Types.VARCHAR);
			addField(insert, "FA_COUNTER_NM", payload.optString("cpName", ""), Types.VARCHAR);
			addField(insert, "FA_COUNTER_REG_NO", payload.optString("counterRegNo", ""), Types.VARCHAR);

			/* ================= CONTACT DETAILS ================= */
			addField(insert, "FA_COUNTER_CONT_EM", payload.optString("cpMail", ""), Types.VARCHAR);
			addField(insert, "FA_COUNTER_CONT_NM", payload.optString("counterContNm", ""), Types.VARCHAR);
			addField(insert, "FA_COUNTER_CONT_TEL", payload.optString("cntcDetl", ""), Types.VARCHAR);

			/* ================= ALL REMAINING DO FIELDS ================= */
			addField(insert, "SELF_ENROL", payload.optString("cpSelfEnrol", ""), Types.VARCHAR);
			addField(insert, "FA_CUST_FLAG", payload.optString("custFlag", ""), Types.VARCHAR);
			addField(insert, "FA_COUNTER_AGM_NO", payload.optString("counterAgmNo", ""), Types.VARCHAR);
			addField(insert, "FA_COUNTER_CE_FLG", payload.optString("counterCeFlg", ""), Types.VARCHAR);
			addField(insert, "FA_COUNTER_ACC", payload.optString("counterAcc", ""), Types.VARCHAR);
			addField(insert, "FA_COUNTER_ADD_ML", payload.optString("counterAddMl", ""), Types.VARCHAR);
			addField(insert, "FA_COUNTER_CNTY", payload.optString("counterCnty", ""), Types.VARCHAR);
			addField(insert, "FA_COUNTER_CT", payload.optString("counterCt", ""), Types.VARCHAR);
			addField(insert, "FA_COUNTER_PROV", payload.optString("counterProv", ""), Types.VARCHAR);
			addField(insert, "FA_COUNTER_STR", payload.optString("counterStr", ""), Types.VARCHAR);
			addField(insert, "FA_SERVICE_REQ", payload.optString("serviceReq", ""), Types.VARCHAR);
			addField(insert, "FA_COUNTER_ROLE", "BUYER", Types.VARCHAR);
			addField(insert, "FA_COUNTER_TYPE", "T1", Types.VARCHAR);

			/* ================= LIMIT FIELDS ================= */
			String lmtAmtStr = payload.optString("lmtAmt", "");
			if (lmtAmtStr != null && !lmtAmtStr.trim().isEmpty()) {
				try {
					addField(insert, "FA_LMT_AMT", Double.parseDouble(lmtAmtStr), Types.DOUBLE);
				} catch (Exception ex) {
					addField(insert, "FA_LMT_AMT", null, Types.DOUBLE);
				}
			} else {
				addField(insert, "FA_LMT_AMT", null, Types.DOUBLE);
			}

			addField(insert, "FA_LMT_CCY", payload.optString("lmtCcy", "USD"), Types.VARCHAR);

			String lmtValDt = payload.optString("lmtValDt", "");
			String lmtDueDt = payload.optString("lmtDueDt", "");

			if (lmtValDt != null && !lmtValDt.trim().isEmpty()) {
				addField(insert, "FA_LMT_VAL_DT", java.sql.Date.valueOf(lmtValDt), Types.DATE);
			} else {
				addField(insert, "FA_LMT_VAL_DT", null, Types.DATE);
			}

			if (lmtDueDt != null && !lmtDueDt.trim().isEmpty()) {
				addField(insert, "FA_LMT_DUE_DT", java.sql.Date.valueOf(lmtDueDt), Types.DATE);
			} else {
				addField(insert, "FA_LMT_DUE_DT", null, Types.DATE);
			}

			/* ================= SEQUENCE ================= */
			addField(insert, "I_SEQ_NUM", 1, Types.INTEGER);

			/* ================= UPDATE CLAUSE ================= */
			if (type == 2) {
				insert.setClause(" C_MAIN_REF = ? ", new Object[] { faContractRef }, new Integer[] { Types.VARCHAR });
			}

			APLog.reportLog("VMTest===[FADA_COUNTER] SQL=== " + insert.genSqlString());
			CSEEDAOHelper.commExecuteUpdate(insert);

			APLog.reportLog("[FADA_COUNTER] INSERT SUCCESS | C_MAIN_REF=" + faContractRef + " | CPYT_C_RELA_REF="
					+ cpytRela + " | cpId=" + payload.optString("cpId", ""));
			APLog.reportLog("[FADA_COUNTER PAYLOAD]\n" + payload.toString(2));

		} catch (SQLException sqle) {
			APLog.reportLog("[FADA_COUNTER] DB ERROR");
			APLog.reportLog("ErrorCode=" + sqle.getErrorCode());
			APLog.reportLog("SQLState=" + sqle.getSQLState());
			APLog.reportLog("Message=" + sqle.getMessage());
			throw sqle;

		} catch (Exception e) {
			APLog.reportLog("[FADA_COUNTER] APPLICATION ERROR");
			APLog.reportLog("Message=" + e.getMessage());
			throw e;
		}
	}

	public boolean isExist(String faContractRef, String cpId) throws Exception {
		CSSQLStatement genSql = null;
		try {
			String ds = DSManager.getTrxDS(BANK_GROUP, COUNTRY_CODE);
			genSql = new CSSQLStatement(4, TABLE, ds);
			genSql.addField("C_MAIN_REF", null, null);
			genSql.addField("FA_ANCHOR_ID", null, null);
			genSql.setClause(" C_MAIN_REF = ? AND FA_ANCHOR_ID = ? ", new Object[] { faContractRef, cpId },
					new Integer[] { Types.VARCHAR, Types.VARCHAR });
			APLog.reportLog("VMTest===[FADA_COUNTER] isExist SQL=== " + genSql.genSqlString());

			Document resDom = CSEEDAOHelper.commExecuteQuery(genSql);
			APLog.reportLog("VMTest===[FADA_COUNTER] isExist resDom=== " + XMLManager.convertToString(resDom));

			Element root = resDom.getDocumentElement();
			NodeList rsNodeList = root.getElementsByTagName("ResultSet");
			NodeList recordList = ((Element) rsNodeList.item(0)).getElementsByTagName("record");
			return recordList.getLength() > 0;

		} catch (Exception e) {
			APLog.reportLog("APPLICATION ERROR in isExist FADA_COUNTER");
			APLog.reportLog("Message=" + e.getMessage());
			throw e;
		}
	}

	private void addField(CSSQLStatement stmt, String col, Object val, int type) throws WSException {
		stmt.addField(col, val, type);
	}
}