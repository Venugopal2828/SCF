var sB1 = DV.getFieldValue("LOGIN_BIC");
var ADV_PRES_BY = DV.getFieldValue("ADV_PRES_BY");
var DOC_PRES_BY = DV.getFieldValue("DOC_PRES_BY");
if (ADV_PRES_BY == 'MT734') {
    var sB2_734 = DV.getFieldValue("PRES_BK_SW_ADD");
    var sResult_734 = DV.checkRMA(sB1, sB2_734, "734");
    if (sResult_734 == 'TRUE') {
        DV.appendSWIFT("IPLC_MT734_RegisterDiscrepancies");
    } else {
        var arr_para = new Array(sB1, sB2_734, "734");
        DV.throwException("1847", arr_para);
    }
} else if (ADV_PRES_BY == 'MT999') {
    DV.appendSWIFT("IPLC_MT999_RegisterDiscrepancies");
} else if (ADV_PRES_BY == 'MT732') {
    DV.appendSWIFT("IPLC_MT732_AdviceofDischarge");
}

if (ADV_PRES_BY != 'MT734' && DOC_PRES_BY == 'Advising Bank') {
    DV.appendSWIFT("IPLC_OUT_MT752");
}

var MT798_FLG = DV.getFieldValue("APPLY_FLG");
var SUB_MESS_TYPE = DV.getFieldValue("SUB_MESS_TYPE");
if (MT798_FLG == 'YES') {
    if (SUB_MESS_TYPE == '731') {
        DV.appendSWIFT("IPLC_OUT_MT732_MT731");
    } else if (SUB_MESS_TYPE == '733') {
        DV.appendSWIFT("IPLC_OUT_MT734_MT733");
    }
}