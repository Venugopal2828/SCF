DV.writeLog("-----MM Value Date Voucher Start-----" + DV.getFieldValue("DEAL_NO"));
DV.setTrxFunction("MMValueDateSettlement");
var sSysDt = DV.getSysDate();
DV.updateField("SEND_VOU_VDT",sSysDt);
var CNPT_SWADD = DV.getFieldValue("CNPT_SWADD");
var DEAL_TP = DV.getFieldValue("DEAL_TP");
var sCustIdDR = "";
var sCustIdCR = "";
if(DEAL_TP == "IP"){
    sCustIdDR = "";
    sCustIdCR = DV.getFieldValue("NOSTRO_BK_ID");
}
if(DEAL_TP == "IT"){
    sCustIdDR = DV.getFieldValue("NOSTRO_BK_ID");
    sCustIdCR = "";
}
DV.updateField("VCH_CUSTID_DR",sCustIdDR);
DV.updateField("VCH_CUSTID_CR",sCustIdCR);

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

DV.updateField("SETL_ACTION","BatchVdateVch");
DV.writeLog("-----MM Value Date Voucher End-----");