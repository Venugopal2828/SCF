DV.writeLog("Begin ProcessMT740");
DV.setTrxFunction("AutoProcessMT740");

DV.updateField("ISSUE_DT", DV.SYS_BUSI_DATE);

DV.SYS_getCUBK("FOR_BATCH_PR740_GET_ISSUE_BK_ID", "ISSUE_BK_SW_ADD");
DV.SYS_getCUBK("ISSUE_BK_ID", "ISSUE_BK_ID");


DV.init("Booking Rate", "Booking Rate", "Booking Rate", "Booking Rate");
DV.mapLocalCust("ISSUE_BK_ID", "ISSUE_BK_NM", "EUR", "123445");
DV.writeLog("1");


//var comList = "ISS_COMM,CONF_COMM,SWIFT_CHG,POST_CHG,OTHER_CHG";
var comList = ['ISS_COMM', 'CONF_COMM', 'SWIFT_CHG', 'POST_CHG', 'OTHER_CHG'];
DV.writeLog("1_1");
DV.addTrxCharge(comList);
DV.writeLog("1_2");
DV.setAllLocalPayCcy("EUR");
DV.writeLog("1_3");
DV.setAllCollCcy("GBP");
DV.writeLog("1_4");
DV.setAllUnpaidCcy("GBP");

DV.writeLog("1_5");
DV.setDefChargeScope(DV.SCOPE_MAINREF);
DV.capureDefChargesByScope();
DV.writeLog("2");
DV.setAllPayAt(DV.CHG_AT_DEFERRED);
DV.setAllPayBy(DV.CHG_FOR_LOCAL);
DV.writeLog("3");


var parameter = ['EUR', DV.getFieldValue("REIM_INST_AMT"), DV.getFieldValue("ISSUE_DT"), DV.getFieldValue("EXPIRY_DT"), 'US', 'CN', '360', 'null', null];

var result = DV.calculate(comList, parameter);


DV.confirmCharge();
DV.writeLog("4");
var locaTotalCollAmt = DV.getLocalTotalCollectAmt();
var locaTotalCollVAT = DV.getLocalTotalCollectVAT();
var locaTotalCollChg = DV.getLocalTotalCollectCharge();
DV.writeLog("5");

DV.updateField("CONF_INSTR", "Not Confirmed");
DV.updateField("CASH_COV_HELD", "No");

DV.writeLog("6");



DV.writeLog("7");

DV.SYS_getCUBK("FOR_BATH_PR740_GET_AVAL_WT_BK_ID", "AVAL_WT_BK_SW_ADD");
DV.SYS_getCUBK("AVAL_WT_BK_ID", "AVAL_WT_BK_ID");

DV.updateField("ISSUE_BK_SW_TAG", "A");
DV.updateField("AVAL_WT_BK_SW_TAG", "A");

DV.writeLog("8");

DV.updateField("X730_ADV_BKID_B2", DV.getFieldValue("ISSUE_BK_ID"));
DV.updateField("X730_ADV_BKNM_B2", DV.getFieldValue("ISSUE_BK_NM"));
DV.updateField("X730_ADV_BKADD1_B2", DV.getFieldValue("ISSUE_BK_ADD1"));
DV.updateField("X730_ADV_BKADD2_B2", DV.getFieldValue("ISSUE_BK_ADD2"));
DV.updateField("X730_ADV_BKADD3_B2", DV.getFieldValue("ISSUE_BK_ADD3"));
DV.updateField("X730_ADV_BKSW_B2", DV.getFieldValue("ISSUE_BK_SW_ADD"));
DV.updateField("X730_DOC_CRE_NO_20", DV.getFieldValue("C_MAIN_REF"));
DV.updateField("X730_RCVER_NO_21", DV.getFieldValue("LC_NO"));

DV.updateField("CHG_FLD_LOCAL_CUST_CCY", "EUR");
DV.updateField("CHG_FLD_ALL_CHARGE_AT", "1");
DV.updateField("CHG_LOCAL_CUST_PAY_RATE", "1.250000");


DV.writeLog("9");

DV.SYS_getCUBK("FOR_BATCH_PR740_GET_DRWE_ID", "DRWE_SW_ADD");
DV.SYS_getCUBK("DRWE_ID", "DRWE_ID");

DV.writeLog("10");

DV.SYS_getCUBK("BENE_GET_ID", "BENE_ACNO");
DV.SYS_getCUBK("BENE_ID", "BENE_ID");

DV.writeLog("11");

var REIM_INST_BAL = DV.toFloat(DV.getFieldValue("REIM_INST_BAL"));
var REIM_INST_AMT = DV.toFloat(DV.getFieldValue("REIM_INST_AMT"));
var POS_TOL = DV.toFloat(DV.getFieldValue("POS_TOL"));
DV.writeLog("12");
if (POS_TOL != 0 && DV.toFloat(DV.getFieldValue("AMT_SPEC")) != 'NOT EXCEEDING') {
    REIM_INST_BAL = REIM_INST_AMT * (1 + POS_TOL / 100);
    DV.writeLog("13");
} else {
    DV.writeLog("14");
    REIM_INST_BAL = REIM_INST_AMT;
}
DV.writeLog("15");
DV.updateField("REIM_INST_BAL", REIM_INST_BAL);
DV.writeLog("16");

DV.updateField("CLOSE_DT", DV.getFieldValue("EXPIRY_DT"));

DV.writeLog("17");
DV.writeLog("End ProcessMT740");