package com.fs.service;

import java.sql.SQLException;
import java.sql.Timestamp;
import java.sql.Types;

import org.json.JSONObject;

import com.cs.core.dao.DSManager;
import com.cs.core.err.WSException;
import com.cs.core.utility.CSEEDAOHelper;
import com.cs.eximap.utility.APLog;
import com.cs.eximap.utility.CSSQLStatement;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import com.cs.base.xml.XMLManager;

public class FadaCounterService {

    private static final String TABLE        = "EXIMTRX.FADA_COUNTER";
    private static final String BANK_GROUP   = "CSBANK";
    private static final String COUNTRY_CODE = "US";

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
        addField(insert, "C_MAIN_REF",  faContractRef, Types.VARCHAR);
        addField(insert, "C_TRX_REF",   cTrxRef,       Types.VARCHAR);
        addField(insert, "C_UNIT_CODE", payload.optString("cUnitCode", "CSBANK"), Types.VARCHAR);
        addField(insert, "C_DO_NAME",   "SCF_CounterParty", Types.VARCHAR);
        addField(insert, "CUST_TYPE",   "T1",          Types.VARCHAR);

        /* ================= ANCHOR DETAILS ================= */
        addField(insert, "FA_ANCHOR_ID", payload.optString("cpId",   ""), Types.VARCHAR);
        addField(insert, "FA_ANCHOR_NM", payload.optString("cpName", ""), Types.VARCHAR);

        /* ================= COUNTER PARTY DETAILS ================= */
        addField(insert, "FA_COUNTER_ID",     payload.optString("cpId",   ""), Types.VARCHAR);
        addField(insert, "FA_COUNTER_NM",     payload.optString("cpName", ""), Types.VARCHAR);
        addField(insert, "FA_COUNTER_REG_NO", payload.optString("cpId",   ""), Types.VARCHAR);

        /* ================= CONTACT DETAILS ================= */
        addField(insert, "FA_COUNTER_CONT_EM",  payload.optString("cpMail",   ""), Types.VARCHAR);
        addField(insert, "FA_COUNTER_CONT_NM",  payload.optString("cpName",   ""), Types.VARCHAR);
        addField(insert, "FA_COUNTER_CONT_TEL", payload.optString("cntcDetl", ""), Types.VARCHAR);

        /* ================= FLAGS ================= */
        addField(insert, "FA_COUNTER_ROLE",   "BUYER", Types.VARCHAR);
        addField(insert, "FA_COUNTER_TYPE",   "T1",    Types.VARCHAR);
        addField(insert, "FA_COUNTER_CE_FLG", "Yes",   Types.VARCHAR);
        addField(insert, "FA_COUNTER_CNTY",   COUNTRY_CODE, Types.VARCHAR);
        addField(insert, "FA_CUST_FLAG",      "1",     Types.VARCHAR);

        /* ================= SEQUENCE ================= */
        addField(insert, "I_SEQ_NUM",  1,     Types.INTEGER);
        addField(insert, "FA_LMT_CCY", "USD", Types.VARCHAR);

        APLog.reportLog("[FADA_COUNTER] Executing DB insert...");

        /* ================= UPDATE CLAUSE ================= */
        if (type == 2) {
            insert.setClause(
                " C_MAIN_REF = ? ",
                new Object[]  { faContractRef },
                new Integer[] { Types.VARCHAR }
            );
        }

        APLog.reportLog("VMTest===[FADA_COUNTER] SQL=== " + insert.genSqlString());
        CSEEDAOHelper.commExecuteUpdate(insert);

        APLog.reportLog("[FADA_COUNTER] INSERT SUCCESS | C_MAIN_REF=" + faContractRef
                + " | CPYT_C_RELA_REF=" + cpytRela
                + " | cpId=" + payload.optString("cpId", ""));
        APLog.reportLog("[FADA_COUNTER PAYLOAD]\n" + payload.toString(2));

    } catch (SQLException sqle) {
        APLog.reportLog("[FADA_COUNTER] DB ERROR");
        APLog.reportLog("ErrorCode=" + sqle.getErrorCode());
        APLog.reportLog("SQLState="  + sqle.getSQLState());
        APLog.reportLog("Message="   + sqle.getMessage());
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
            genSql.addField("C_MAIN_REF",   null, null);
            genSql.addField("FA_ANCHOR_ID", null, null);
            genSql.setClause(
                " C_MAIN_REF = ? AND FA_ANCHOR_ID = ? ",
                new Object[]  { faContractRef, cpId },
                new Integer[] { Types.VARCHAR, Types.VARCHAR }
            );
            APLog.reportLog("VMTest===[FADA_COUNTER] isExist SQL=== " + genSql.genSqlString());

            Document resDom = CSEEDAOHelper.commExecuteQuery(genSql);
            APLog.reportLog("VMTest===[FADA_COUNTER] isExist resDom=== "
                    + XMLManager.convertToString(resDom));

            Element  root       = resDom.getDocumentElement();
            NodeList rsNodeList = root.getElementsByTagName("ResultSet");
            NodeList recordList = ((Element) rsNodeList.item(0)).getElementsByTagName("record");
            return recordList.getLength() > 0;

        } catch (Exception e) {
            APLog.reportLog("APPLICATION ERROR in isExist FADA_COUNTER");
            APLog.reportLog("Message=" + e.getMessage());
            throw e;
        }
    }

    private void addField(CSSQLStatement stmt, String col, Object val, int type)
            throws WSException {
        stmt.addField(col, val, type);
    }
}