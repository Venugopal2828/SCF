DV.writeLog("-----MM MT202 Batch Start-----");     
//Import Common SSS JS
var sRunJsType = "B";
importPackage(Packages.com.cs.base.utility);
importPackage(Packages.org.apache.tools.ant.util);
var inputDir = ASPathConst.getUserDirPath();
var sJsDir = inputDir + "/Default/ServerSideJS";
var sJsNm = sJsDir + "/SSSS_BatchCommonMethod_TRX.js";
eval(String(FileUtils.readFully(new java.io.FileReader(sJsNm))));
//----------------------------------------

var bBatchRunFlg = true;
var CNPT_SWADD = DV.getFieldValue("CNPT_SWADD");
DV.writeLog("-----CounterParty-----" + CNPT_SWADD);

var TAGB2 = DV.getFieldValue("NOSTRO_BK_SW_ADD");
DV.writeLog("-----B2-----"+TAGB2);
DV.updateField("X202_ADV_BKSW_B2",TAGB2);

var TAG20 = DV.getFieldValue("DEAL_NO");
DV.writeLog("-----20-----"+TAG20);
DV.updateField("X202_TRX_REF_NO_20",TAG20);

DV.writeLog("-----21-----"+".");
DV.updateField("X202_RELATEDNO_21","1234567");

var DEAL_TYPE = DV.getFieldValue("DEAL_TP");
var TAG32CCY = DV.getFieldValue("TRX_CCY");
var TAG32AMT, TAG32VDT;
if(DEAL_TYPE == "IT"){
    TAG32VDT = DV.getFieldValue("MATURITY_DT");
    TAG32AMT = DV.getFieldValue("TTL_NS_AMT");
}else{
    TAG32VDT = DV.getFieldValue("VAL_DT");
    TAG32AMT = DV.getFieldValue("TRX_AMT");
    if (DV.getFieldValue("OLD_DEAL_NO") != "") {
        var nTrxAmt = DV.toDouble(DV.getFieldValue("TRX_AMT"));
        var nOldAmt = DV.toDouble(DV.getFieldValue("OLD_AMT"));
        var nOldInt = DV.toDouble(DV.getFieldValue("OLD_INT_AMT"));
        var nRollDiff = DV.SYS_FloatAdd(nOldAmt, nOldInt);
        nRollDiff = DV.SYS_FloatSub(nTrxAmt, nRollDiff);
        TAG32AMT = String(nRollDiff);
    }
}
DV.updateField("X202_VALUE_DT_32A",TAG32VDT);
DV.updateField("X202_CCY_32A",TAG32CCY);
DV.updateField("X202_AMT_32A",TAG32AMT);
DV.writeLog("-----32VDT-----"+TAG32VDT+"-----32CCY-----"+TAG32CCY+"-----32AMT-----"+TAG32AMT);

var CNPT_ID = DV.getFieldValue("CNPT_ID");
sSqlCond = DV.addSQLCondition(null,"NS_CCY",TAG32CCY);
sSqlCond = DV.addSQLCondition(sSqlCond,"CNPT_ID",CNPT_ID);
sSqlCond = DV.addSQLCondition(sSqlCond,"PROD_CD","TRMM");
sFldList = DV.addFieldList(null,"EFFCV_DT");
result = DV.getTableMultiDataToArray("TRCP_SSI_DO",sFldList,sSqlCond,"order by EFFCV_DT DESC");
nSsiSizePd = result.length;
if(nSsiSizePd > 0){
    nChkDays = 0;
    sChkFlgPd = false;
    for(x = 0; x < nSsiSizePd; x++){
        var EFFCV_DT = DV.getDOValue(result[x],"EFFCV_DT");
        DV.writeLog("*****EFFCV_DT of TRMM Product = "+EFFCV_DT);
        if(TAG32VDT >= EFFCV_DT){
            sChkFlgPd = true;
            break;
        }
    }
}else{
    sChkFlgPd = false;
}
DV.writeLog("*****result Cnpt SSI DO By TRMM Product = "+result);

sSqlCond = "";
sFldList = "";
result = "";
sSqlCond = DV.addSQLCondition(null,"NS_CCY",TAG32CCY);
sSqlCond = DV.addSQLCondition(sSqlCond,"CNPT_ID",CNPT_ID);
sSqlCond = DV.addSQLCondition(sSqlCond,"PROD_CD","All");
sFldList = DV.addFieldList(null,"EFFCV_DT");
result = DV.getTableMultiDataToArray("TRCP_SSI_DO",sFldList,sSqlCond,"order by EFFCV_DT DESC");
nSsiSizeAllPd = result.length;
if(nSsiSizeAllPd > 0){
    nChkDays = 0;
    sChkFlgAllPd = false;
    for(x = 0; x < nSsiSizeAllPd; x++){
        var EFFCV_DT = DV.getDOValue(result[x],"EFFCV_DT");
        DV.writeLog("*****EFFCV_DT of All Product = "+EFFCV_DT);
        if(TAG32VDT >= EFFCV_DT){
            sChkFlgAllPd = true;
            break;
        }
    }
}else{
    sChkFlgAllPd = false;
}
DV.writeLog("*****result Cnpt SSI DO By All Product = "+result);

sSqlCond = "";
sFldList = "";
result = "";
sFldList = DV.addFieldList(null,"EFFCV_DT");
sFldList = DV.addFieldList(sFldList,"INTMED_BK_SWADD");
sFldList = DV.addFieldList(sFldList,"INTMEDI_BK_NM");
sFldList = DV.addFieldList(sFldList,"AC_WT_BK_AC_NO");
sFldList = DV.addFieldList(sFldList,"AC_WT_BK_SW_ADD");
sFldList = DV.addFieldList(sFldList,"AC_WT_BK_NM");
sFldList = DV.addFieldList(sFldList,"BENE_BK_AC_NO");
sFldList = DV.addFieldList(sFldList,"BENE_BK_SWADD");
sFldList = DV.addFieldList(sFldList,"BENE_BK_NM");
sFldList = DV.addFieldList(sFldList,"SEND_TO_RCV_INFO");

var nResultLen = 0;
if(!sChkFlgPd && !sChkFlgAllPd){
    bBatchRunFlg = false;
    DV.writeLog("*****Counterparty: "+CNPT_ID+" and Currency:"+TAG32CCY+" SSI is not exist!");
}else if(sChkFlgPd){
    sSqlCond = DV.addSQLCondition(null, "NS_CCY",TAG32CCY);
    sSqlCond = DV.addSQLCondition(sSqlCond, "CNPT_ID",CNPT_ID);
    sSqlCond = DV.addSQLCondition(sSqlCond, "PROD_CD","TRMM");
    result = DV.getTableMultiDataToArray("TRCP_SSI_DO",sFldList,sSqlCond,"order by EFFCV_DT DESC");
    nResultLen = result.length;
    DV.writeLog("*****Counterparty Product Type:TRMM: "+nResultLen);
}else if(sChkFlgAllPd){
    sSqlCond = DV.addSQLCondition(null, "NS_CCY",TAG32CCY);
    sSqlCond = DV.addSQLCondition(sSqlCond, "CNPT_ID",CNPT_ID);
    sSqlCond = DV.addSQLCondition(sSqlCond, "PROD_CD","All");
    result = DV.getTableMultiDataToArray("TRCP_SSI_DO",sFldList,sSqlCond,"order by EFFCV_DT DESC");
    nResultLen = result.length;
    DV.writeLog("*****Counterparty Product Type: All: "+nResultLen);
}
if(TAG32CCY == "CNH"){
    TAG32CCY = "CNY";
    DV.updateField("X202_CCY_32A",TAG32CCY);
    DV.writeLog("-----SWIFT:32CCY-----"+TAG32CCY);
}

var sMT202Tag56a,sMT202Tag56d,sMT202Tag57AcNo,sMT202Tag57a,sMT202Tag57d,sMT202Tag58AcNo,sMT202Tag58a,sMT202Tag58d,sMT202Tag72;
if(nResultLen > 0){
    for(x = 0; x < nResultLen; x++){
        var EFFCV_DT = DV.getDOValue(result[x],"EFFCV_DT");
        DV.writeLog("*****EFFCV_DT of Final = "+EFFCV_DT);
        if(TAG32VDT >= EFFCV_DT){
            var INTMED_BK_SWADD = DV.getDOValue(result[x],"INTMED_BK_SWADD");
            if(INTMED_BK_SWADD == "undefined"){
                sMT202Tag56a = "";
            }else {
                sMT202Tag56a = INTMED_BK_SWADD;
            }
            var INTMED_BK_NM = DV.getDOValue(result[x],"INTMEDI_BK_NM");
            if(INTMED_BK_NM == "undefined"){
                sMT202Tag56d = "";
            }else {
                sMT202Tag56d = INTMED_BK_NM;
            }
            var AC_WT_BK_ACNO = DV.getDOValue(result[x],"AC_WT_BK_AC_NO");
            if(AC_WT_BK_ACNO == "undefined"){
                sMT202Tag57AcNo = "";
            }else {
                sMT202Tag57AcNo = AC_WT_BK_ACNO;
            }
            var AC_WT_BK_SWADD = DV.getDOValue(result[x],"AC_WT_BK_SWADD");
            if(AC_WT_BK_SWADD == "undefined"){
                sMT202Tag57a = "";
            }else {
                sMT202Tag57a = AC_WT_BK_SWADD;
            }
            var AC_WT_BK_NM = DV.getDOValue(result[x],"AC_WT_BK_NM");
            if(AC_WT_BK_NM == "undefined"){
                sMT202Tag57d = "";
            }else {
                sMT202Tag57d = AC_WT_BK_NM;
            }
            var BENE_BK_ACNO = DV.getDOValue(result[x],"BENE_BK_AC_NO");
            if(BENE_BK_ACNO == "undefined"){
                sMT202Tag58AcNo = "";
            }else {
                sMT202Tag58AcNo = BENE_BK_ACNO;
            }
            var BENE_BK_SWADD = DV.getDOValue(result[x],"BENE_BK_SWADD");
            if(BENE_BK_SWADD == "undefined"){
                sMT202Tag58a = "";
            }else {
                sMT202Tag58a = BENE_BK_SWADD;
            }
            var BENE_BK_NM = DV.getDOValue(result[x],"BENE_BK_NM");
            if(BENE_BK_NM == "undefined"){
                sMT202Tag58d = "";
            }else {
                sMT202Tag58d = BENE_BK_NM;
            }
            var SEND_TO_RCV_INFO = DV.getDOValue(result[x],"SEND_TO_RCV_INFO");
            if(SEND_TO_RCV_INFO == "undefined"){
                sMT202Tag72 = "";
            }else {
                sMT202Tag72 = SEND_TO_RCV_INFO;
            }
            break;
        }
    }
    DV.updateField("X202_MEDI_BKSW_56A",sMT202Tag56a);
    DV.updateField("X202_MEDI_BKNM_56A",sMT202Tag56d);
    DV.updateField("INTMED_BK_SWADD",sMT202Tag56a);
    if(sMT202Tag56a != "" && sMT202Tag56a != null){
        DV.updateField("X202_TAG_56A","A");
    }else if(sMT202Tag56d != "" && sMT202Tag56d != null){
        DV.updateField("X202_TAG_56A","D");
    }
    DV.writeLog("-----56SW-----"+sMT202Tag56a+'-----56NM-----'+sMT202Tag56d);

    DV.updateField("X202_ACC_BKACNO57A",sMT202Tag57AcNo);
    DV.updateField("X202_ACC_BKSW_57A",sMT202Tag57a);
    DV.updateField("X202_ACC_BKNM_57A",sMT202Tag57d);
    DV.updateField("AC_WT_BK_AC_NO",sMT202Tag57AcNo);
    DV.updateField("CNPT_NS_SWADD",sMT202Tag57a);

    sMT202Tag57AcNo = DV.getFieldValue("X202_ACC_BKACNO57A");
    sMT202Tag57a = DV.getFieldValue("X202_ACC_BKSW_57A");
    sMT202Tag57d = DV.getFieldValue("X202_ACC_BKNM_57A");
    if(sMT202Tag57a != "" && sMT202Tag57a != null){
        DV.updateField("X202_TAG_57A","A");
    }else if(sMT202Tag57d != "" && sMT202Tag57d != null){
        DV.updateField("X202_TAG_57A","D");
    }
    DV.writeLog("-----57AC-----"+sMT202Tag57AcNo+"-----57SW-----"+sMT202Tag57a+'-----57NM-----'+sMT202Tag57d);

    DV.updateField("X202_BENEBKACNO58A",sMT202Tag58AcNo);
    DV.updateField("X202_BENE_BKSW_58A",sMT202Tag58a);
    DV.updateField("X202_BENE_BKNM_58A",sMT202Tag58d);
    DV.updateField("BENE_BK_AC_NO",sMT202Tag58AcNo);
    DV.updateField("BENE_BK_SWADD",sMT202Tag58a);
    if(sMT202Tag58a != "" && sMT202Tag58a != null){
        DV.updateField("X202_TAG_58A","A");
    }else if(sMT202Tag58d != "" && sMT202Tag58d != null){
        DV.updateField("X202_TAG_58A","D");
    }
    DV.writeLog("-----58AC-----"+sMT202Tag58AcNo+"-----58SW-----"+sMT202Tag58a+'-----58NM-----'+sMT202Tag58d);

    DV.updateField("X202_BKTOBK_INFO72",sMT202Tag72);
    DV.updateField("SEND_TO_RCV_INFO",sMT202Tag72);
    DV.writeLog("-----72INFO-----"+sMT202Tag72);
}
if(bBatchRunFlg == true){
    DV.updateField("UETR_GPI_121", SYB_genUETR());

    DV.updateField("SETL_ACTION","BatchMT202");
    DV.updateField("CURRENT_STATUS","BackFinish");
    DV.updateField("SEND_SW_FLG","MT202");
    DV.updateField("SEND_MT202_VDT",DV.SYS_BUSI_DATE);
    DV.updateField("SEND_MT202_FLG","Yes");
    DV.setTrxFunction("MMBatchSendMT202");
    DV.writeLog("-----Set Trx Function-----");
}
DV.writeLog("-----MM MT202 Batch End-----");