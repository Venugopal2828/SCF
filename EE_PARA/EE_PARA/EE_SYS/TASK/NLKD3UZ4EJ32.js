DV.setTrxFunction("AutoDDPayment_ME");
DV.setAutoProcess(true);
DV.writeLog("============AutoDD====start============");
var FA_SBR_REF = DV.getFieldValue("FA_SBR_REF");
DV.writeLog("---------------FA_SBR_REF=" + FA_SBR_REF);
DV.updateField("FA_SBR_REF", FA_SBR_REF);
var pre = DV.getFieldValue("FA_BUSI_TYPE");
var UnitCode = DV.getFieldValue("C_UNIT_CODE");
var date = DV.getSysBusiDate();
var year = date.substr(0, 4);
var sub = 'PMT';
var ref = DV.SYS_getRefNo("FAEF_PMT_GUR");
var pmtref = pre + UnitCode + year.substr(2, 4) + ref + sub;
DV.updateField("FA_LOAN_ID", pmtref);
DV.writeLog("---------------pmtref=" + pmtref);
DV.updateField("C_MAIN_REF", pmtref);
var ccy= DV.getFieldValue("FA_LMT_CCY");
DV.updateField("FA_DOC_CCY", ccy);
DV.updateField("FA_SEL_AC_CCY", ccy);
var rateid = DV.getFieldValue("TSU_PO_ID");
DV.writeLog("---------------rateid=" + rateid);
var loandays;
var duedt;
var ttl;
var invloan=0;
var pmtsum=0;
var loanint=0;


var fld_list1 = DV.addFieldList(null, "I_BASE_DAY");
var sql_condition1 = DV.addSQLCondition(null, "C_CURRENCY", ccy);  
var result1 = DV.executeQuery("EXIMSYS.STD_CURRENCY", fld_list1, sql_condition1);
var basedays= DV.getDBFieldValue(result1, "I_BASE_DAY");
DV.writeLog("---------------basedays=" + basedays);

DV.writeLog("---------------DO start----");
var doRecords = DV.getRecords("InvFinance");
for (var i = 0; i < doRecords.length; i++) {
    var doRec = doRecords[i];
    //duedt = DV.getDOValue(doRec, "FA_DOC_DUE_DT");
    var docref = DV.getDOValue(doRec, "FA_DOC_REF");
    var fld_list2 = DV.addFieldList(null, "FA_DOC_DUE_DT");
var sql_condition2 = DV.addSQLCondition(null, "FA_DOC_REF", docref);  
var result2 = DV.executeQuery("INVC_MASTER", fld_list2, sql_condition2);
duedt=DV.getDBFieldValue(result2, "FA_DOC_DUE_DT");
DV.writeLog("---------------duedt=" + duedt);
DV.writeLog("---------------date=" + date);
    var aDate,bDate,cDate, oDate1, oDate2;
    aDate = duedt.substr(0, 4);; 
    bDate = duedt.substr(5, 7);
    bDate = bDate.substr(0, 2);
    bDate = DV.toInteger(bDate)-1;
    cDate = duedt.substr(8, 10);    
    oDate1 = new Date(aDate, bDate, cDate);
    DV.writeLog("---------------oDate1=" + oDate1);
    aDate = date.substr(0, 4);
    bDate = date.substr(5, 7);
    bDate = bDate.substr(0, 2);
    bDate = DV.toInteger(bDate)-1;
    cDate = date.substr(8, 10);
    oDate2 = new Date(aDate, bDate, cDate);
    loandays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24);
    DV.writeLog("---------------oDate2=" + oDate2);
DV.writeLog("---------------loandays=" + loandays);
var fld_list = DV.addFieldList(null, "FA_DD_RATE");
var sql_condition = DV.addSQLCondition(null, "C_MAIN_REF", rateid);
var sql_condition = DV.addSQLCondition(sql_condition, "FA_DD_D_FROM", 15, "<=", "AND");
var sql_condition = DV.addSQLCondition(sql_condition, "FA_DD_D_TO", 15, ">=", "AND");
var result = DV.executeQuery("FADA_DD_RATE", fld_list, sql_condition);
var rate = DV.getDBFieldValue(result, "FA_DD_RATE");
DV.writeLog("---------------rate=" + rate);
DV.setDOValue(doRec, "FA_LOAN_INT_RT", rate);
DV.setDOValue(doRec, "FA_LOAN_DAYS", loandays);
DV.setDOValue(doRec, "FA_DOC_STATUS", 'Settled');
DV.setDOValue(doRec, "IA_I_BASE_DAYS", basedays);
var loadamt= DV.getDOValue(doRec,"FA_INV_LOAN_AMT");
DV.writeLog("---------------loadamt=" + loadamt); 
var intamt=DV.toFloat(loadamt) *rate;
intamt=intamt/100/basedays;
intamt=intamt*loandays;
intamt=DV.toFloat(intamt);
DV.writeLog("---------------intamt=" + intamt);

DV.setDOValue(doRec,"FA_LOAN_INT_AMT", intamt);  
    pmtsum=DV.toFloat(pmtsum)+DV.toFloat(loadamt);
    ttl=DV.toFloat(ttl)+DV.toFloat(intamt);
    DV.writeLog("---------------pmtsum=" + pmtsum); 
    DV.writeLog("---------------ttl=" + ttl); 
}
DV.writeLog("---------------DO end----");
DV.updateField("FA_TTL_LOAN_AMT", ttl);
DV.updateField("FA_PMT_AMT_SUM", pmtsum);
var chgtp=DV.getFieldValue("FA_DD_CHG_TP");
var chgfix=DV.getFieldValue("FA_DD_CHG_FIX");
var chgsha=DV.getFieldValue("FA_DD_CHG_SHA");
if (chgtp=='F'){
DV.updateField("FA_LOAN_INT_SM_AMT",chgfix);
}else{
DV.updateField("FA_LOAN_INT_SM_AMT",DV.toFloat(ttl)*chgsha/100);
}
var intsmamt = DV.getFieldValue("FA_LOAN_INT_SM_AMT");
DV.writeLog("---------------intsmamt=" + intsmamt); 
var paidby=DV.getFieldValue("CHG_PAID_BY");
if (paidby=='BY OUR CUST'){
var selamt=DV.toFloat(pmtsum)-DV.toFloat(ttl);
var clearamt= DV.toFloat(pmtsum)-DV.toFloat(ttl)+DV.toFloat(intsmamt);
}else{
var selamt= DV.toFloat(pmtsum)-DV.toFloat(ttl)-DV.toFloat(intsmamt);
var clearamt= DV.toFloat(pmtsum)-DV.toFloat(ttl);
}
DV.writeLog("---------------selamt=" + selamt); 
DV.writeLog("---------------clearamt=" + clearamt); 
DV.updateField("FA_SEL_AC_AMT",selamt);
DV.updateField("FA_TTL_AMT_CLEARED",clearamt);


DV.writeLog("============AutoDD====END============");