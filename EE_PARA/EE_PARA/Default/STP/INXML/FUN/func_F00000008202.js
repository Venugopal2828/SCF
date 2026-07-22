stp.setAutoProcess(true);
/* for AMD_REF && NO_OF_AMD */
var C_MAIN_REF = stp.getXMLNodeValue("BkMainRef");
stp.updateFieldValue("C_MAIN_REF", C_MAIN_REF);
stp.SYS_getCUBK("NO_OF_AMD", "C_MAIN_REF");
var NO_OF_AMD = stp.toInteger(stp.getFieldValue("NO_OF_AMD")) + 1;
if (NO_OF_AMD < 10) {
    NO_OF_AMD = '0' + NO_OF_AMD;
}

var ref = C_MAIN_REF + "-" + NO_OF_AMD;
stp.updateFieldValue("AMD_REF", ref);
stp.updateFieldValue("NO_OF_AMD", NO_OF_AMD);

stp.setGapiRule("CE_EE_IMLC_005_AmdApplctn");
stp.updateFieldValue("CURRNT_STATUS", "ReceiveAmtFromCE");
stp.updateFieldValue("NXT_STATUS", "ReviewLCAmtFrCE");

var AvalBy = stp.getXMLNodeValue("NEW_AVAL_BY");
stp.writeLog("==============AvalBy=============" + AvalBy);
if (AvalBy == "BY MIXED PYMT") {
    var doFields1 = stp.buildArray(); //create new DataObjectFields to hold fields for DO
    var PmtAmt1 = stp.getXMLNodeValue("NEW_PAY_AMT1");
    var PmtPct1 = stp.getXMLNodeValue("NEW_PAY_PER1");
    var PmtTp1 = stp.getXMLNodeValue("NEW_SDA_FLAG1");
    var TenorDays1 = stp.getXMLNodeValue("NEW_TENOR_DAYS1");
    var TenorTp1 = stp.getXMLNodeValue("NEW_TENOR_TYPE1");
    stp.writeLog("==============PmtAmt1=============" + PmtAmt1);
    stp.writeLog("==============PmtPct1=============" + PmtPct1);
    stp.writeLog("==============PmtTp1=============" + PmtTp1);
    stp.writeLog("==============TenorDays1=============" + TenorDays1);
    stp.writeLog("==============TenorTp1=============" + TenorTp1);
    if (PmtAmt1 != "") {
        stp.addField(doFields1, "CPYT_N_PAY_AMT", PmtAmt1);
        stp.addField(doFields1, "CPYT_C_PAY_PER", PmtPct1);
        stp.addField(doFields1, "CPYT_C_SDA_FLAG", PmtTp1);
        stp.addField(doFields1, "CPYT_I_TENOR_DAYS", TenorDays1);
        stp.addField(doFields1, "CPYT_C_TENOR_TYPE", TenorTp1);
        var doPath = "PaymentTermsHeader.PaymentTerms";
        stp.addDORec(doPath, "true", doFields1);
    }

    var doFields2 = stp.buildArray(); //create new DataObjectFields to hold fields for DO
    var PmtAmt2 = stp.getXMLNodeValue("NEW_PAY_AMT2");
    var PmtPct2 = stp.getXMLNodeValue("NEW_PAY_PER2");
    var PmtTp2 = stp.getXMLNodeValue("NEW_SDA_FLAG2");
    var TenorDays2 = stp.getXMLNodeValue("NEW_TENOR_DAYS2");
    var TenorTp2 = stp.getXMLNodeValue("NEW_TENOR_TYPE2");
    stp.writeLog("==============PmtAmt2=============" + PmtAmt2);
    stp.writeLog("==============PmtPct2=============" + PmtPct2);
    stp.writeLog("==============PmtTp2=============" + PmtTp2);
    stp.writeLog("==============TenorDays2=============" + TenorDays2);
    stp.writeLog("==============TenorTp2=============" + TenorTp2);
    if (PmtAmt2 != "") {
        stp.addField(doFields2, "CPYT_N_PAY_AMT", PmtAmt2);
        stp.addField(doFields2, "CPYT_C_PAY_PER", PmtPct2);
        stp.addField(doFields2, "CPYT_C_SDA_FLAG", PmtTp2);
        stp.addField(doFields2, "CPYT_I_TENOR_DAYS", TenorDays2);
        stp.addField(doFields2, "CPYT_C_TENOR_TYPE", TenorTp2);
        var doPath = "PaymentTermsHeader.PaymentTerms";
        stp.addDORec(doPath, "true", doFields2);
    }

    var doFields3 = stp.buildArray(); //create new DataObjectFields to hold fields for DO
    var PmtAmt3 = stp.getXMLNodeValue("NEW_PAY_AMT3");
    var PmtPct3 = stp.getXMLNodeValue("NEW_PAY_PER3");
    var PmtTp3 = stp.getXMLNodeValue("NEW_SDA_FLAG3");
    var TenorDays3 = stp.getXMLNodeValue("NEW_TENOR_DAYS3");
    var TenorTp3 = stp.getXMLNodeValue("NEW_TENOR_TYPE3");
    stp.writeLog("==============PmtAmt3=============" + PmtAmt3);
    stp.writeLog("==============PmtPct3=============" + PmtPct3);
    stp.writeLog("==============PmtTp3=============" + PmtTp3);
    stp.writeLog("==============TenorDays3=============" + TenorDays3);
    stp.writeLog("==============TenorTp3=============" + TenorTp3);
    if (PmtAmt3 > 0) {
        stp.addField(doFields3, "CPYT_N_PAY_AMT", PmtAmt3);
        stp.addField(doFields3, "CPYT_C_PAY_PER", PmtPct3);
        stp.addField(doFields3, "CPYT_C_SDA_FLAG", PmtTp3);
        stp.addField(doFields3, "CPYT_I_TENOR_DAYS", TenorDays3);
        stp.addField(doFields3, "CPYT_C_TENOR_TYPE", TenorTp3);
        var doPath = "PaymentTermsHeader.PaymentTerms";
        stp.addDORec(doPath, "true", doFields3);
    }

    var doFields4 = stp.buildArray(); //create new DataObjectFields to hold fields for DO
    var PmtAmt4 = stp.getXMLNodeValue("NEW_PAY_AMT4");
    var PmtPct4 = stp.getXMLNodeValue("NEW_PAY_PER4");
    var PmtTp4 = stp.getXMLNodeValue("NEW_SDA_FLAG4");
    var TenorDays4 = stp.getXMLNodeValue("NEW_TENOR_DAYS4");
    var TenorTp4 = stp.getXMLNodeValue("NEW_TENOR_TYPE4");
    stp.writeLog("==============PmtAmt4=============" + PmtAmt4);
    stp.writeLog("==============PmtPct4=============" + PmtPct4);
    stp.writeLog("==============PmtTp4=============" + PmtTp4);
    stp.writeLog("==============TenorDays4=============" + TenorDays4);
    stp.writeLog("==============TenorTp4=============" + TenorTp4);
    if (PmtAmt4 > 0) {
        stp.addField(doFields4, "CPYT_N_PAY_AMT", PmtAmt4);
        stp.addField(doFields4, "CPYT_C_PAY_PER", PmtPct4);
        stp.addField(doFields4, "CPYT_C_SDA_FLAG", PmtTp4);
        stp.addField(doFields4, "CPYT_I_TENOR_DAYS", TenorDays4);
        stp.addField(doFields4, "CPYT_C_TENOR_TYPE", TenorTp4);
        var doPath = "PaymentTermsHeader.PaymentTerms";
        stp.addDORec(doPath, "true", doFields4);
    }

    var doFields5 = stp.buildArray(); //create new DataObjectFields to hold fields for DO
    var PmtAmt5 = stp.getXMLNodeValue("NEW_PAY_AMT5");
    var PmtPct5 = stp.getXMLNodeValue("NEW_PAY_PER5");
    var PmtTp5 = stp.getXMLNodeValue("NEW_SDA_FLAG5");
    var TenorDays5 = stp.getXMLNodeValue("NEW_TENOR_DAYS5");
    var TenorTp5 = stp.getXMLNodeValue("NEW_TENOR_TYPE5");
    stp.writeLog("==============PmtAmt5=============" + PmtAmt5);
    stp.writeLog("==============PmtPct5=============" + PmtPct5);
    stp.writeLog("==============PmtTp5=============" + PmtTp5);
    stp.writeLog("==============TenorDays5=============" + TenorDays5);
    stp.writeLog("==============TenorTp5=============" + TenorTp5);
    if (PmtAmt5 > 0) {
        stp.addField(doFields5, "CPYT_N_PAY_AMT", PmtAmt5);
        stp.addField(doFields5, "CPYT_C_PAY_PER", PmtPct5);
        stp.addField(doFields5, "CPYT_C_SDA_FLAG", PmtTp5);
        stp.addField(doFields5, "CPYT_I_TENOR_DAYS", TenorDays5);
        stp.addField(doFields5, "CPYT_C_TENOR_TYPE", TenorTp5);
        var doPath = "PaymentTermsHeader.PaymentTerms";
        stp.addDORec(doPath, "true", doFields5);
    }

    var doFields6 = stp.buildArray(); //create new DataObjectFields to hold fields for DO
    var PmtAmt6 = stp.getXMLNodeValue("NEW_PAY_AMT6");
    var PmtPct6 = stp.getXMLNodeValue("NEW_PAY_PER6");
    var PmtTp6 = stp.getXMLNodeValue("NEW_SDA_FLAG6");
    var TenorDays6 = stp.getXMLNodeValue("NEW_TENOR_DAYS6");
    var TenorTp6 = stp.getXMLNodeValue("NEW_TENOR_TYPE6");
    stp.writeLog("==============PmtAmt6=============" + PmtAmt6);
    stp.writeLog("==============PmtPct6=============" + PmtPct6);
    stp.writeLog("==============PmtTp6=============" + PmtTp6);
    stp.writeLog("==============TenorDays6=============" + TenorDays6);
    stp.writeLog("==============TenorTp6=============" + TenorTp6);
    if (PmtAmt6 > 0) {
        stp.addField(doFields6, "CPYT_N_PAY_AMT", PmtAmt6);
        stp.addField(doFields6, "CPYT_C_PAY_PER", PmtPct6);
        stp.addField(doFields6, "CPYT_C_SDA_FLAG", PmtTp6);
        stp.addField(doFields6, "CPYT_I_TENOR_DAYS", TenorDays6);
        stp.addField(doFields6, "CPYT_C_TENOR_TYPE", TenorTp6);
        var doPath = "PaymentTermsHeader.PaymentTerms";
        stp.addDORec(doPath, "true", doFields6);
    }
}
stp.writeLog("===================END===============");