package com.fs.service;
 
import java.sql.SQLException;
import java.sql.Timestamp;
import java.sql.Types;
 
import org.json.JSONObject;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
 
import com.cs.base.xml.XMLManager;
import com.cs.core.dao.DSManager;
import com.cs.core.err.WSException;
import com.cs.core.utility.CSEEDAOHelper;
import com.cs.eximap.utility.APLog;
import com.cs.eximap.utility.CSSQLStatement;
 
public class FadaPreCreditService {
 
	private static final String TABLE = "EXIMTRX.STAT_CE_CP";
 
	private static final String BANK_GROUP = "CSBANK";
	private static final String COUNTRY_CODE = "US";
 
	public void insert(JSONObject payload, int type) throws Exception {
 
		CSSQLStatement insert = null;
 
		try {
			APLog.reportLog("[USER-LOG] Preparing JSON-based insert");
 
			String cMainRef = payload.optString("cMainRef", "").trim();
			if (cMainRef.isEmpty()) {
				throw new IllegalArgumentException("cMainRef is mandatory");
			}
 
			String cTrxRef = payload.optString("cTrxRef", cMainRef);
 
			String ds = DSManager.getTrxDS(BANK_GROUP, COUNTRY_CODE);
			insert = new CSSQLStatement(type, TABLE, ds);
 
			/* ================= CORE FIELDS ================= */
			addField(insert, "C_MAIN_REF", cMainRef, Types.VARCHAR);
			addField(insert, "C_TRX_REF", cTrxRef, Types.VARCHAR);
			addField(insert, "C_UNIT_CODE", payload.optString("cUnitCode", BANK_GROUP), Types.VARCHAR);
			addField(insert, "C_MODULE", payload.optString("cModule", "SCF"), Types.VARCHAR);
			addField(insert, "C_EVENT_NAME", payload.optString("cEventName", "N"), Types.VARCHAR);
			// addField(insert, "C_EVENT_STATUS", payload.optString("cEventStatus", "N"),
			// Types.VARCHAR);
 
			/* ================= BUYER / CUSTOMER ================= */
			// addField(insert, "FA_BUYER_NM", payload.optString("customerName", ""),
			// Types.VARCHAR);
 
			// addField(insert, "FA_BUYER_ID", payload.optString("faBuyerId", ""),
			// Types.VARCHAR);
 
			// addField(insert, "FA_BUYER_CITY", payload.optString("faBuyerCity", ""),
			// Types.VARCHAR);
 
			/* ================= CONTACT DETAILS ================= */
			/*
			 * addField(insert, "FST_CNTC_NM", payload.optString("faBuyerContNm", ""),
			 * Types.VARCHAR);
			 */
 
			addField(insert, "EMAIL_ADD", payload.optString("faBuyerContMail", ""), Types.VARCHAR);
 
			addField(insert, "FA_CUST_NM_ADD_ML", payload.optString("faBuyerContMail", ""), Types.VARCHAR);
 
			addField(insert, "TEL_NO", payload.optString("faBuyerContTel", ""), Types.VARCHAR);
 
			addField(insert, "FST_CNTC_NM", payload.optString("custContPrsn1", ""), Types.VARCHAR);
			addField(insert, "FST_CNTC_TEL_NO", payload.optString("custMob1", ""), Types.VARCHAR);
			addField(insert, "FST_CNTC_EMAIL", payload.optString("custEmail1", ""), Types.VARCHAR);
 
			addField(insert, "FA_CONTACT_NM2", payload.optString("custContPrsn2", ""), Types.VARCHAR);
			addField(insert, "FA_CONTACT_TEL2", payload.optString("custMob2", ""), Types.VARCHAR);
			addField(insert, "FA_CONTACT_EMAIL2", payload.optString("custEmail2", ""), Types.VARCHAR);
 
			addField(insert, "FA_CUST_NM2", payload.optString("faBuyerNm", ""), Types.VARCHAR);
 
			addField(insert, "FA_CUST_TYPE", "BUYER", Types.VARCHAR);
			addField(insert, "FA_CUST_FLAG", "2", Types.VARCHAR);
 
			/* ================= BUSINESS DETAILS ================= */
			// addField(insert, "FA_BUSI_TYPE", payload.optString("faBusiType", ""),
			// Types.VARCHAR);
 
			// addField(insert, "FA_BUSI_STATUS", payload.optString("faBusiStatus", ""),
			// Types.VARCHAR);
 
			// addField(insert, "C_CUST_ID", payload.optString("cifId", ""), Types.VARCHAR);
 
			/* ================= BANK / ACCOUNT ================= */
			addField(insert, "PARTY_NM", payload.optString("faBuyerNm", ""), Types.VARCHAR);
 
			addField(insert, "FA_CUST_BK_NM", payload.optString("faSelNm", ""), Types.VARCHAR);
 
			addField(insert, "CUST_CITY", payload.optString("faBuyerCity", ""), Types.VARCHAR);
 
			addField(insert, "FA_CUST_BK_BRCH_NM", payload.optString("faSelCity", ""), Types.VARCHAR);
 
			addField(insert, "EE_CUSTOMER", "YES", Types.VARCHAR);
			addField(insert, "C_LOCKED_FLAG", "F", Types.VARCHAR);
			addField(insert, "C_TRX_STATUS", "M", Types.VARCHAR);

			addField(insert, "FA_CUST_ACC_NO", payload.optString("accountNo", ""), Types.VARCHAR);

			String aggrNo = payload.optString("aggrNo", "").trim();
			if (aggrNo.isEmpty()) {
				aggrNo = payload.optString("faContractRef", "").trim();
			}
			addField(insert, "AGGR_NO", aggrNo, Types.VARCHAR);
			addField(insert, "FA_CONTRACT_REF", aggrNo, Types.VARCHAR);

			// addField(insert, "FA_BUYER_IFSC", payload.optString("ifscCode", ""),
			// Types.VARCHAR);

			// addField(insert, "FA_BUYER_CONT_NM", payload.optString("faBuyerContNm", ""),
			// Types.VARCHAR);

			// addField(insert, "C_CUST_ID", payload.optString("cCustId", ""),
			// Types.VARCHAR);

			// addField(insert, "FA_CUST_REG_NO", payload.optString("facustregno", ""),
			// Types.VARCHAR);

			/* ================= CURRENCY ================= */
			// addField(insert, "FA_LMT_CCY", payload.optString("faLmtCcy", "INR"),
			// Types.VARCHAR);

			/* ================= SYSTEM ================= */
			Timestamp now = new Timestamp(System.currentTimeMillis());
			addField(insert, "D_SYS_OP_DATE", now, Types.TIMESTAMP);

			APLog.reportLog("[USER-LOG] Executing DB insert...");
			if(type == 2) {
				addField(insert, "REJECTION_FLAG", "YES", Types.VARCHAR);
				insert.setClause(" C_MAIN_REF = ? ", new Object[] {cMainRef},new Integer[] {Types.VARCHAR});
			}
			APLog.reportLog("VMTest===[USER-LOG]insert SQl=== "+insert.genSqlString());
			CSEEDAOHelper.commExecuteUpdate(insert);
 
			APLog.reportLog("[USER-LOG] DB INSERT SUCCESS for MAIN_REF=" + cMainRef);
			APLog.reportLog("[COUNTERPARTY STAT_CE_CP PAYLOAD]\n" + payload.toString(2));
 
		} catch (SQLException sqle) {
 
			APLog.reportLog("DB ERROR inserting STAT_CE_CP");
			APLog.reportLog("ErrorCode=" + sqle.getErrorCode());
			APLog.reportLog("SQLState=" + sqle.getSQLState());
			APLog.reportLog("Message=" + sqle.getMessage());
 
			throw sqle;
 
		} catch (Exception e) {
 
			APLog.reportLog("APPLICATION ERROR inserting STAT_CE_CP");
			APLog.reportLog("Message=" + e.getMessage());
			throw e;
		}
	}
 
	public void insertMasterTable(JSONObject payload,int type) throws Exception {
 
		CSSQLStatement insert = null;
 
		try {
			APLog.reportLog("[USER-LOG] Preparing JSON-based insert");
 
			String cMainRef = payload.optString("cMainRef", "").trim();
			if (cMainRef.isEmpty()) {
				throw new IllegalArgumentException("cMainRef is mandatory");
			}
 
			String cTrxRef = payload.optString("cTrxRef", cMainRef);
 
			String ds = DSManager.getTrxDS(BANK_GROUP, COUNTRY_CODE);
			insert = new CSSQLStatement(type, "EXIMTRX.STAT_MASTER", ds);
 
			/* ================= CORE FIELDS ================= */
			addField(insert, "C_MAIN_REF", cMainRef, Types.VARCHAR);
			addField(insert, "C_TRX_REF", cTrxRef, Types.VARCHAR);
			addField(insert, "C_UNIT_CODE", payload.optString("cUnitCode", BANK_GROUP), Types.VARCHAR);
			addField(insert, "C_MODULE", payload.optString("cModule", "SCF"), Types.VARCHAR);
			addField(insert, "C_EVENT_NAME", payload.optString("cEventName", "N"), Types.VARCHAR);
			addField(insert, "C_UNIT_CODE", "CSBANK", Types.VARCHAR);
			// addField(insert, "C_EVENT_STATUS", payload.optString("cEventStatus", "N"),
			// Types.VARCHAR);
 
			/* ================= BUYER / CUSTOMER ================= */
			// addField(insert, "FA_BUYER_NM", payload.optString("customerName", ""),
			// Types.VARCHAR);
 
			// addField(insert, "FA_BUYER_ID", payload.optString("faBuyerId", ""),
			// Types.VARCHAR);
 
			// addField(insert, "FA_BUYER_CITY", payload.optString("faBuyerCity", ""),
			// Types.VARCHAR);
 
			/* ================= CONTACT DETAILS ================= */
			/*
			 * addField(insert, "FST_CNTC_NM", payload.optString("faBuyerContNm", ""),
			 * Types.VARCHAR);
			 */
 
			addField(insert, "EMAIL_ADD", payload.optString("faBuyerContMail", ""), Types.VARCHAR);
 
			addField(insert, "FA_CUST_NM_ADD_ML", payload.optString("faBuyerContMail", ""), Types.VARCHAR);
 
			addField(insert, "TEL_NO", payload.optString("faBuyerContTel", ""), Types.VARCHAR);
 
			addField(insert, "FST_CNTC_NM", payload.optString("custContPrsn1", ""), Types.VARCHAR);
			addField(insert, "FST_CNTC_TEL_NO", payload.optString("custMob1", ""), Types.VARCHAR);
			addField(insert, "FST_CNTC_EMAIL", payload.optString("custEmail1", ""), Types.VARCHAR);
 
			addField(insert, "FA_CONTACT_NM2", payload.optString("custContPrsn2", ""), Types.VARCHAR);
			addField(insert, "FA_CONTACT_TEL2", payload.optString("custMob2", ""), Types.VARCHAR);
			addField(insert, "FA_CONTACT_EMAIL2", payload.optString("custEmail2", ""), Types.VARCHAR);
 
			addField(insert, "FA_CUST_NM2", payload.optString("faBuyerNm", ""), Types.VARCHAR);
 
			addField(insert, "FA_CUST_TYPE", "BUYER", Types.VARCHAR);
			addField(insert, "FA_CUST_FLAG", "2", Types.VARCHAR);
 
			/* ================= BUSINESS DETAILS ================= */
			// addField(insert, "FA_BUSI_TYPE", payload.optString("faBusiType", ""),
			// Types.VARCHAR);
 
			// addField(insert, "FA_BUSI_STATUS", payload.optString("faBusiStatus", ""),
			// Types.VARCHAR);
 
			// addField(insert, "C_CUST_ID", payload.optString("cifId", ""), Types.VARCHAR);
 
			/* ================= BANK / ACCOUNT ================= */
			addField(insert, "PARTY_NM", payload.optString("faBuyerNm", ""), Types.VARCHAR);
 
			addField(insert, "FA_CUST_BK_NM", payload.optString("faSelNm", ""), Types.VARCHAR);
 
			addField(insert, "CUST_CITY", payload.optString("faBuyerCity", ""), Types.VARCHAR);
 
			addField(insert, "FA_CUST_BK_BRCH_NM", payload.optString("faSelCity", ""), Types.VARCHAR);
 
			addField(insert, "EE_CUSTOMER", "YES", Types.VARCHAR);
			addField(insert, "C_LOCKED_FLAG", "F", Types.VARCHAR);
			addField(insert, "C_TRX_STATUS", "M", Types.VARCHAR);
			addField(insert, "recorder_type", "Customer", Types.VARCHAR);
 
			addField(insert, "FA_CUST_ACC_NO", payload.optString("accountNo", ""), Types.VARCHAR);
 
			// addField(insert, "FA_BUYER_IFSC", payload.optString("ifscCode", ""),
			// Types.VARCHAR);
 
			// addField(insert, "FA_BUYER_CONT_NM", payload.optString("faBuyerContNm", ""),
			// Types.VARCHAR);
 
			// addField(insert, "C_CUST_ID", payload.optString("cCustId", ""),
			// Types.VARCHAR);
 
			// addField(insert, "FA_CUST_REG_NO", payload.optString("facustregno", ""),
			// Types.VARCHAR);
 
			/* ================= CURRENCY ================= */
			// addField(insert, "FA_LMT_CCY", payload.optString("faLmtCcy", "INR"),
			// Types.VARCHAR);
 
			/* ================= SYSTEM ================= */
			Timestamp now = new Timestamp(System.currentTimeMillis());
			addField(insert, "D_SYS_OP_DATE", now, Types.TIMESTAMP);
 
			APLog.reportLog("[USER-LOG] Executing DB insert...");
			if(type == 2) {
				addField(insert, "REJECTION_FLAG", "YES", Types.VARCHAR);
				insert.setClause(" C_MAIN_REF = ? ", new Object[] {cMainRef},new Integer[] {Types.VARCHAR});
			}
			APLog.reportLog("VMTest===[USER-LOG]insertMasterTable SQl=== "+insert.genSqlString());
			CSEEDAOHelper.commExecuteUpdate(insert);
 
			APLog.reportLog("[USER-LOG] DB INSERT SUCCESS for MAIN_REF=" + cMainRef);
			APLog.reportLog("[COUNTERPARTY STAT_CE_CP PAYLOAD]\n" + payload.toString(2));
 
		} catch (SQLException sqle) {
 
			APLog.reportLog("DB ERROR inserting STAT_CE_CP");
			APLog.reportLog("ErrorCode=" + sqle.getErrorCode());
			APLog.reportLog("SQLState=" + sqle.getSQLState());
			APLog.reportLog("Message=" + sqle.getMessage());
 
			throw sqle;
 
		} catch (Exception e) {
 
			APLog.reportLog("APPLICATION ERROR inserting STAT_CE_CP");
			APLog.reportLog("Message=" + e.getMessage());
			throw e;
		}
	}
 
	public void insertPostAddDo(JSONObject payload,int type) throws Exception {
 
		CSSQLStatement insert = null;
 
		try {
			APLog.reportLog("[USER-LOG] Preparing POST_ADD_DO insert");
 
			/* ================= MANDATORY FIELD ================= */
			String cMainRef = payload.optString("cMainRef", "").trim();
			if (cMainRef.isEmpty()) {
				throw new IllegalArgumentException("cMainRef is mandatory");
			}
 
			/* ================= OPTIONAL / DATA FIELD ================= */
			String postalFmtAdd = payload.optString("faBuyerCity", "").trim();
 
			String ds = DSManager.getTrxDS(BANK_GROUP, COUNTRY_CODE);
			insert = new CSSQLStatement(type, "EXIMTRX.POST_ADD_DO", ds);
 
			/* ================= TABLE FIELDS ================= */
			addField(insert, "C_MAIN_REF", cMainRef, Types.VARCHAR);
			addField(insert, "POSTAL_FMT_ADD", postalFmtAdd, Types.VARCHAR);
			/* addField(insert, "POSTAL_FMT_ADD", postalFmtAdd, Types.VARCHAR); */
			addField(insert, "C_UNIT_CODE", "CSBANK", Types.VARCHAR);
			addField(insert, "ORDER_NO", 1, Types.INTEGER);
			addField(insert, "C_DO_NAME", "PostAddress", Types.VARCHAR);
 
			addField(insert, "I_SEQ_NUM", 1, Types.INTEGER);
 
			APLog.reportLog("[USER-LOG] Executing POST_ADD_DO DB insert...");
			if(type == 2) {
				insert.setClause(" C_MAIN_REF = ? ", new Object[] {cMainRef},new Integer[] {Types.VARCHAR});
			}
			APLog.reportLog("VMTest===[USER-LOG]insertPostAddDo SQl=== "+insert.genSqlString());
			CSEEDAOHelper.commExecuteUpdate(insert);
 
			APLog.reportLog("[USER-LOG] POST_ADD_DO INSERT SUCCESS for MAIN_REF=" + cMainRef);
 
		} catch (SQLException sqle) {
 
			APLog.reportLog("DB ERROR inserting POST_ADD_DO");
			APLog.reportLog("ErrorCode=" + sqle.getErrorCode());
			APLog.reportLog("SQLState=" + sqle.getSQLState());
			APLog.reportLog("Message=" + sqle.getMessage());
			throw sqle;
 
		} catch (Exception e) {
 
			APLog.reportLog("APPLICATION ERROR inserting POST_ADD_DO");
			APLog.reportLog("Message=" + e.getMessage());
			throw e;
		}
	}
 
	public void insertSwfAddDo(JSONObject payload,int type) throws Exception {
 
		CSSQLStatement insert = null;
 
		try {
			APLog.reportLog("[USER-LOG] Preparing SWF_ADD_DO insert");
 
			/* ================= MANDATORY FIELD ================= */
			String cMainRef = payload.optString("cMainRef", "").trim();
			if (cMainRef.isEmpty()) {
				throw new IllegalArgumentException("cMainRef is mandatory");
			}
 
			/* ================= OPTIONAL FIELDS ================= */
			String swfFmtNm = payload.optString("faBuyerNm", "").trim();
			String swiftFmtAdd1 = payload.optString("faBuyerCity", "").trim();
 
			String ds = DSManager.getTrxDS(BANK_GROUP, COUNTRY_CODE);
			insert = new CSSQLStatement(type, "EXIMTRX.SWF_ADD_DO", ds);
 
			/* ================= TABLE FIELDS ================= */
			addField(insert, "C_MAIN_REF", cMainRef, Types.VARCHAR);
			addField(insert, "SWF_FMT_NM", swfFmtNm, Types.VARCHAR);
			addField(insert, "SWIFT_FMT_ADD1", swiftFmtAdd1, Types.VARCHAR);
			addField(insert, "C_UNIT_CODE", "CSBANK", Types.VARCHAR);
			addField(insert, "ORDER_NO", 1, Types.INTEGER);
			addField(insert, "C_DO_NAME", "SwFMTAddress", Types.VARCHAR);
			addField(insert, "I_SEQ_NUM", 1, Types.INTEGER);
			APLog.reportLog("[USER-LOG] Executing SWF_ADD_DO DB insert...");
			if(type == 2) {
				insert.setClause(" C_MAIN_REF = ? ", new Object[] {cMainRef},new Integer[] {Types.VARCHAR});
			}
			APLog.reportLog("VMTest===[USER-LOG]insertSwfAddDo SQl=== "+insert.genSqlString());
			CSEEDAOHelper.commExecuteUpdate(insert);
 
			APLog.reportLog("[USER-LOG] SWF_ADD_DO INSERT SUCCESS for MAIN_REF=" + cMainRef);
 
		} catch (SQLException sqle) {
 
			APLog.reportLog("DB ERROR inserting SWF_ADD_DO");
			APLog.reportLog("ErrorCode=" + sqle.getErrorCode());
			APLog.reportLog("SQLState=" + sqle.getSQLState());
			APLog.reportLog("Message=" + sqle.getMessage());
			throw sqle;
 
		} catch (Exception e) {
 
			APLog.reportLog("APPLICATION ERROR inserting SWF_ADD_DO");
			APLog.reportLog("Message=" + e.getMessage());
			throw e;
		}
	}
	private void addField(CSSQLStatement stmt, String col, Object val, int type) throws WSException {
		stmt.addField(col, val, type);
	}
	
	public boolean isExist(String cMainRef)throws Exception {
		CSSQLStatement genSql = null;
		try {
			String ds = DSManager.getTrxDS(BANK_GROUP, COUNTRY_CODE);
			genSql = new CSSQLStatement(4, TABLE, ds);
			genSql.addField("C_MAIN_REF", null, null);
			genSql.addField("C_UNIT_CODE", null, null);
			genSql.setClause(" C_MAIN_REF = ? ", new Object[] {cMainRef},new Integer[] {Types.VARCHAR});
			APLog.reportLog("VMTest===[USER-LOG]isExist SQl=== "+genSql.genSqlString());
			Document resDom = CSEEDAOHelper.commExecuteQuery(genSql);
			APLog.reportLog("VMTest===[USER-LOG]resDom=== "+XMLManager.convertToString(resDom));
			Element root = resDom.getDocumentElement();
			NodeList rsNodeList = root.getElementsByTagName("ResultSet");
			NodeList recordList = ((Element) rsNodeList.item(0)).getElementsByTagName("record");
			if (recordList.getLength() > 0) {
				return true;
			}
			return false;
		}catch(Exception e) {
			APLog.reportLog("APPLICATION ERROR in isExist method");
			APLog.reportLog("Message=" + e.getMessage());
			throw e;
		}
		
	}
	
}
 