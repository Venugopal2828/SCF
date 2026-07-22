"path:SCRN/DO/TRNB_NostroBankContact.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.InitValues = function() {
    try {
        SYS_GetSubPageRefNo_S('TRNB_CONTACT_REF', setDOref, "", "DOREF", "DOREF");
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain("C_MAIN_REF");
        document.MAINFORM.NS_BK_ID.value = SYS_getValueFromMain("NS_BK_ID");
        document.MAINFORM.NS_BK_SWADD.value = SYS_getValueFromMain("NS_BK_SWADD");
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroBankContact.js*InitValues", e);
    }
}

csDOScreenProto.setDOref = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        UnitCode = SYS_BUSI_UNIT;
        //UnitCode=UnitCode.substr(0,4);
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        document.MAINFORM.DO_INDEX_NO.value = "BC" + UnitCode + year + month + ref;
    } catch (e) {
        DisExcpt("SSSS_TRNB_NostroBankContact.js*setDOref", e);
    }
}