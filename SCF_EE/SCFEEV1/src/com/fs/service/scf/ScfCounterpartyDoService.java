package com.fs.service.scf;

import java.sql.SQLException;
import java.sql.Types;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import org.apache.xerces.dom.DocumentImpl;
import org.json.JSONArray;
import org.json.JSONObject;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.cs.base.xml.XMLManager;
import com.cs.core.dao.DSManager;
import com.cs.core.err.WSException;
import com.cs.core.utility.CommDAOHelper;
import com.cs.core.utility.CSEEDAOHelper;
import com.cs.eximap.utility.APLog;
import com.cs.eximap.utility.CSSQLStatement;

/**
 * EE persistence for CE-supplied counterparty DO lines: resolves DS / table names from payload, JVM props, or env,
 * then inserts rows under the logical main agreement ref. No REST and no CE client code here.
 */
public final class ScfCounterpartyDoService {

	private static final String TABLE_NAME_PATTERN = "^[A-Za-z][A-Za-z0-9_]*\\.[A-Za-z][A-Za-z0-9_]*$";

	public void insertRowsFromCe(JSONObject payload) throws Exception {
		String arrKey = require(payload, "eeaCounterpartiesJsonKey", "ee.scf.json.counterpartiesKey",
				"EE_SCF_JSON_COUNTERPARTIES_KEY", "JSON field name for counterparty array");
		JSONArray arr = payload.optJSONArray(arrKey);
		if (arr == null || arr.length() == 0) {
			return;
		}

		String cMainRef = requireCMainRef(payload);
		String cBankGroup = require(payload, "cBankGroup", "ee.scf.ds.bankGroup", "EE_SCF_DS_BANK_GROUP",
				"transaction DS bank group");
		String cCountry = require(payload, "cCountryCode", "ee.scf.ds.countryCode", "EE_SCF_DS_COUNTRY_CODE",
				"transaction DS country code");

		String qualifiedTable = requireQualifiedTable(payload);
		String ds = DSManager.getTrxDS(cBankGroup, cCountry);
		String cUnitCode = resolve(payload, "cUnitCode", "ee.scf.cUnitCode", "EE_SCF_C_UNIT_CODE");
		if (cUnitCode.isEmpty()) {
			cUnitCode = cBankGroup;
		}
		String cTrxRef = trim(payload.optString("cTrxRef", cMainRef));
		String faAnchorId = trim(payload.optString("faAnchorId", ""));
		String faBusiType = trim(payload.optString("faBusiType", ""));

		int nextSeq = queryMaxIseqNum(qualifiedTable, cMainRef, ds) + 1;

		for (int i = 0; i < arr.length(); i++) {
			JSONObject cp = arr.optJSONObject(i);
			if (cp == null) {
				continue;
			}
			String cpId = optTrim(cp, "cpId", "CP_ID");
			String cpName = optTrim(cp, "cpName", "CP_NAME");
			String cpMail = optTrim(cp, "cpMail", "CP_MAIL");
			String cntcDetl = optTrim(cp, "cntcDetl", "CNTC_DETL");
			if (cpId.isEmpty() && cpName.isEmpty() && cpMail.isEmpty() && cntcDetl.isEmpty()) {
				continue;
			}
			insertOneRow(payload, qualifiedTable, ds, cMainRef, cUnitCode, cTrxRef, faAnchorId, faBusiType, cpId,
					cpName, cpMail, cntcDetl, nextSeq++);
		}
	}

	private static JSONObject defaultsObject(JSONObject payload) {
		String key = resolve(payload, "eeaCounterpartyDefaultsJsonKey", "ee.scf.json.counterpartyDefaultsKey",
				"EE_SCF_JSON_COUNTERPARTY_DEFAULTS_KEY");
		if (key.isEmpty()) {
			return null;
		}
		return payload.optJSONObject(key);
	}

	private static String requireCMainRef(JSONObject payload) {
		String fieldName = require(payload, "eeaCMainRefJsonKey", "ee.scf.json.cMainRefKey",
				"EE_SCF_JSON_CMAIN_REF_KEY", "name of JSON field holding main agreement ref");
		String v = trim(payload.optString(fieldName, ""));
		if (v.isEmpty()) {
			throw new IllegalArgumentException("Mandatory main ref empty for JSON field: " + fieldName);
		}
		return v;
	}

	private static String requireQualifiedTable(JSONObject payload) {
		String t = require(payload, "eeaFadaCounterTable", "ee.scf.fada.counter.table", "EE_SCF_FADA_COUNTER_TABLE",
				"qualified FADA counterparty table");
		if (!t.matches(TABLE_NAME_PATTERN)) {
			throw new IllegalArgumentException(
					"Table name must match SCHEMA.TABLE pattern; got invalid identifier");
		}
		return t;
	}

	private static String resolve(JSONObject payload, String jsonKey, String sysProp, String envVar) {
		String v = "";
		if (payload != null && jsonKey != null && !jsonKey.isEmpty()) {
			v = trim(payload.optString(jsonKey, ""));
		}
		if (!v.isEmpty()) {
			return v;
		}
		if (sysProp != null && !sysProp.isEmpty()) {
			v = trim(System.getProperty(sysProp));
		}
		if (!v.isEmpty()) {
			return v;
		}
		if (envVar != null && !envVar.isEmpty()) {
			String e = System.getenv(envVar);
			v = trim(e != null ? e : "");
		}
		return v;
	}

	private static String require(JSONObject payload, String jsonKey, String sysProp, String envVar, String usage) {
		String v = resolve(payload, jsonKey, sysProp, envVar);
		if (v.isEmpty()) {
			throw new IllegalArgumentException("Missing " + usage + ": set payload." + jsonKey + " or -D" + sysProp
					+ " or env " + envVar);
		}
		return v;
	}

	private static String trim(String s) {
		return s != null ? s.trim() : "";
	}

	private static String optTrim(JSONObject o, String k1, String k2) {
		String s = trim(o.optString(k1, ""));
		if (!s.isEmpty()) {
			return s;
		}
		return trim(o.optString(k2, ""));
	}

	private static int queryMaxIseqNum(String qualifiedTable, String cMainRef, String ds) throws Exception {
		String esc = cMainRef.replace("'", "''");
		String sql = "SELECT COALESCE(MAX(I_SEQ_NUM), 0) AS M FROM " + qualifiedTable + " WHERE C_MAIN_REF = '" + esc
				+ "'";
		DocumentImpl resultDoc = (DocumentImpl) CommDAOHelper.getInstance().commExecuteQuery(sql, ds);
		if (resultDoc == null || resultDoc.getDocumentElement() == null) {
			return 0;
		}
		NodeList records = resultDoc.getDocumentElement().getElementsByTagName("record");
		if (records == null || records.getLength() == 0) {
			return 0;
		}
		Node rec = records.item(0);
		String v = XMLManager.getChildNodeValue(rec, "M", true);
		if (v == null || v.trim().isEmpty()) {
			v = XMLManager.getChildNodeValue(rec, "m", true);
		}
		if (v == null || v.trim().isEmpty()) {
			return 0;
		}
		try {
			return Integer.parseInt(v.trim());
		} catch (NumberFormatException e) {
			return 0;
		}
	}

	private void insertOneRow(JSONObject payload, String qualifiedTable, String ds, String cMainRef, String cUnitCode,
			String cTrxRef, String faAnchorId, String faBusiType, String cpId, String cpName, String cpMail,
			String cntcDetl, int iSeqNum) throws Exception {

		String cDoName = require(payload, "cDoName", "ee.scf.counter.cDoName", "EE_SCF_COUNTER_C_DO_NAME",
				"C_DO_NAME for counterparty row");
		String ceFlg = require(payload, "faCounterCeFlg", "ee.scf.counter.ceFlag", "EE_SCF_COUNTER_CE_FLG",
				"FA_COUNTER_CE_FLG for counterparty row");

		CSSQLStatement insert = new CSSQLStatement(CSSQLStatement.I_SQL_TYPE_INSERT, qualifiedTable, ds);
		Set<String> applied = new HashSet<>();

		addCore(insert, applied, "C_MAIN_REF", cMainRef, Types.VARCHAR);
		addCore(insert, applied, "C_UNIT_CODE", cUnitCode, Types.VARCHAR);
		addCore(insert, applied, "C_TRX_REF", cTrxRef, Types.VARCHAR);
		addCore(insert, applied, "FA_ANCHOR_ID", faAnchorId, Types.VARCHAR);
		addCore(insert, applied, "FA_ANCHOR_NM", faAnchorId, Types.VARCHAR);
		addCore(insert, applied, "FA_BUSI_TYPE", faBusiType, Types.VARCHAR);
		addCore(insert, applied, "FA_COUNTER_ID", cpId, Types.VARCHAR);
		addCore(insert, applied, "FA_COUNTER_NM", cpName, Types.VARCHAR);
		addCore(insert, applied, "FA_COUNTER_CONT_EM", cpMail, Types.VARCHAR);
		addCore(insert, applied, "FA_COUNTER_CONT_TEL", cntcDetl, Types.VARCHAR);
		addCore(insert, applied, "I_SEQ_NUM", iSeqNum, Types.INTEGER);
		addCore(insert, applied, "C_DO_NAME", cDoName, Types.VARCHAR);
		addCore(insert, applied, "FA_COUNTER_CE_FLG", ceFlg, Types.VARCHAR);

		JSONObject defaults = defaultsObject(payload);
		if (defaults != null) {
			Iterator<?> it = defaults.keys();
			while (it.hasNext()) {
				String col = String.valueOf(it.next());
				if (applied.contains(col)) {
					continue;
				}
				String val = defaults.optString(col, null);
				if (val == null) {
					continue;
				}
				addField(insert, col, val, Types.VARCHAR);
				applied.add(col);
			}
		}

		try {
			CSEEDAOHelper.commExecuteUpdate(insert);
			APLog.reportLog(
					qualifiedTable + " insert OK C_MAIN_REF=" + cMainRef + " I_SEQ_NUM=" + iSeqNum + " CP_ID=" + cpId);
		} catch (SQLException sqle) {
			APLog.reportLog("DB ERROR inserting counterparty row: " + sqle.getMessage());
			throw sqle;
		}
	}

	private void addCore(CSSQLStatement insert, Set<String> applied, String col, Object val, int type)
			throws WSException {
		addField(insert, col, val, type);
		applied.add(col);
	}

	private void addField(CSSQLStatement stmt, String col, Object val, int type) throws WSException {
		stmt.addField(col, val, type);
	}
}
