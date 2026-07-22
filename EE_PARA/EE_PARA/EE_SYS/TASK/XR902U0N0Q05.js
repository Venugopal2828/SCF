DV.writeLog("-----MM Maturity Date Voucher Start-----" + DV.getFieldValue("DEAL_NO"));
DV.setTrxFunction("MMMaturityDateSettlement");
var sSysDt = DV.getSysDate();
var CNPT_SWADD = DV.getFieldValue("CNPT_SWADD");
var DEAL_TP = DV.getFieldValue("DEAL_TP");
var INT_AMT = DV.toDouble(DV.getFieldValue("INT_AMT"));
var INT_AMT_P = Math.abs(INT_AMT);
DV.updateField("INT_AMT_P", String(INT_AMT_P));

/*GET Depo A/C No*/
var sBank = DV.getPartValue(CNPT_SWADD, 1, 4);
var sChkCN = DV.getPartValue(CNPT_SWADD, 5, 2);
var sBusLabel = DEAL_TP + sBank;
if (sBank != "ESUN") {
    if (sBank != "CBCT") {
        sBusLabel = DEAL_TP + "NOST";
    }
} else {
    if (sChkCN == "CN") {
        sBusLabel = sBusLabel + sChkCN;
    }
}
DV.writeLog("-----Depo A/C No Lable-----" + sBusLabel);

/*sFldValRs = "";
sSqlCond = "";
sFldList = "";
result = "";




sSqlCond = DV.addSQLCondition(null, "FLD_NM", "MMDepoACNo");
sSqlCond = DV.addSQLCondition(sSqlCond, "ITEM_LABEL", sBusLabel);
sFldList = DV.addFieldList(null, "FLD_VAL");
result = DV.getTableMultiDataToArray("COMM_FLD_OPTN_DO", sFldList, sSqlCond, "ORDER BY FLD_NM");
if (result.length > 0) {
    for (j = 0; j < result.length; j++) {
        sFldValRs = DV.getDOValue(result[j], "FLD_VAL");
    }
}*/

if(sBusLabel=='IPNOST'){
  sFldValRs='794';
}
if(sBusLabel=='ITNOST'){
  sFldValRs='836';
}

DV.updateField("AT", sFldValRs);
DV.writeLog("-----Depo A/C CP Code-----" + sFldValRs);

/*Get IA Int A/C No*/
var UPFT_IA_DR_ACNO = DV.getFieldValue("UPFT_IA_DR_ACNO");
var UPFT_IA_CR_ACNO = DV.getFieldValue("UPFT_IA_CR_ACNO");
var sChkGetAcno = false;
var TRX_AMT = DV.toFloat(DV.getFieldValue("TRX_AMT"));
var TTL_AMT = DV.toFloat(DV.getFieldValue("TOTAL_AMT"));
DV.writeLog("-----Master::IA Int A/C No-----Dr--" + UPFT_IA_DR_ACNO + "--Cr--" + UPFT_IA_CR_ACNO);
if (UPFT_IA_DR_ACNO == null || UPFT_IA_DR_ACNO == "") {
    sChkGetAcno = true;
}

if (sChkGetAcno) {
    if ((DEAL_TP == "IP" && TTL_AMT >= TRX_AMT) || (DEAL_TP == "IT" && TTL_AMT < TRX_AMT)) {
        sBusLabel = sBusLabel + "DR";
    }
    if ((DEAL_TP == "IT" && TTL_AMT >= TRX_AMT) || (DEAL_TP == "IP" && TTL_AMT < TRX_AMT)) {
        sBusLabel = sBusLabel + "CR";
    }
    DV.writeLog("-----IA Int A/C No Lable-----" + sBusLabel);

   /* sFldValRs = "";
    sSqlCond = "";
    sFldList = "";
    result = "";

    sSqlCond = DV.addSQLCondition(null, "FLD_NM", "MMIAACNO");
    sSqlCond = DV.addSQLCondition(sSqlCond, "ITEM_LABEL", sBusLabel);
    sFldList = DV.addFieldList(null, "FLD_VAL");
    result = DV.getTableMultiDataToArray("COMM_FLD_OPTN_DO", sFldList, sSqlCond, "ORDER BY FLD_NM");
    if (result.length > 0) {
        for (j = 0; j < result.length; j++) {
            sFldValRs = DV.getDOValue(result[j], "FLD_VAL");
            if (TTL_AMT < TRX_AMT) {
                sFldValRs = sFldValRs.substr(4, 3);
            } else {
                sFldValRs = sFldValRs.substr(0, 3);
            }
        }
    }*/
    DV.writeLog("-----IA Int A/C CP Code-----" + sFldValRs);

    sSqlCond = "";
    sFldList = "";
    result = "";

    sSqlCond = DV.addSQLCondition(null, "C_HOGL_AC_NUM", sFldValRs);
    sFldList = DV.addFieldList(null, "C_AC_NUMBER");
    result = DV.getTableMultiDataToArray("EXIMSYS.STD_AC_NUMBER", sFldList, sSqlCond, "ORDER BY C_AC_NUMBER");
    if (result.length > 0) {
        sFldValRs = "";
        for (j = 0; j < result.length; j++) {
            sFldValRs = DV.getDOValue(result[j], "C_AC_NUMBER");
        }
    }
    if ((DEAL_TP == "IP" && TTL_AMT >= TRX_AMT) || (DEAL_TP == "IT" && TTL_AMT < TRX_AMT)) {
       // DV.updateField("UPFT_IA_DR_ACNO", sFldValRs);
       DV.updateField("UPFT_IA_DR_ACNO", 'D0001');
        DV.writeLog("-----IA Int A/C No---Dr--" + sFldValRs);
    }
    if ((DEAL_TP == "IT" && TTL_AMT >= TRX_AMT) || (DEAL_TP == "IP" && TTL_AMT < TRX_AMT)) {
        //DV.updateField("UPFT_IA_CR_ACNO", sFldValRs);
        DV.updateField("UPFT_IA_CR_ACNO", 'D0002');
        DV.writeLog("-----IA Int A/C No---Cr--" + sFldValRs);
    }
}

DV.updateField("SEND_VOU_VDT",sSysDt);
DV.updateField("CLS_FLG","Yes");
DV.updateField("SETL_ACTION","BatchMdateVch");
DV.writeLog("-----MM Maturity Date Voucher End-----");