"path:SCRN/DO/R2TSU_OthrCertDataSet.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_OthrCertDataSet.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_OthrCertDataSet.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_OthrCertDataSet.js", e);
    }
}

csDOScreenProto.ISSRIdentification = function() {
    try {
        var temp2 = document.MAINFORM.TSU_ISSR_ID.value;
        var temp1 = document.MAINFORM.TSU_ISSR_ID_TP.value;
        if (temp2 != '' || temp1 != '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_ISSR_ID_TP, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_ISSR_ID, 'M', 'N');
        } else if (temp2 == '' && temp1 == '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_ISSR_ID_TP, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_ISSR_ID, 'O', 'N');
            document.MAINFORM.TSU_ISSR_ID.value = '';
            document.MAINFORM.TSU_ISSR_ID_TP.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_OthrCertDataSet.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        SYT_setFldValue("TSU_SUBMITR_BIC", SYS_LOGIN_BIC);
        document.MAINFORM.TSU_DS_VRSN.value = '1';
        getOTCERTRef();
        SYT_ChangeFldClass(document.MAINFORM.TSU_ISSR_ID_TP, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_ISSR_ID, 'O', 'N');
    } catch (e) {
        DisExcpt("SSSS_R2TSU_OthrCertDataSet.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        ISSRIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_OthrCertDataSet.js", e);
    }
}

csDOScreenProto.getOTCERTRef = function() {
    try {
        var TSU_DATA_ID = "";
        var ref = parent.SYS_getValueFromMain('C_MAIN_REF');
        var Length = ref.length;
        Length = Length - 10;
        var DataIdSuf = ref.substr(10, Length);
        TSU_DATA_ID = SYS_LOGIN_BIC + "OTCERT" + DataIdSuf;
        document.MAINFORM.TSU_DS_ID.value = TSU_DATA_ID;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_OthrCertDataSet.js", e);
    }
}

csDOScreenProto.TSU_ISSR_ID_onchange = function(event) {
    try {
        ISSRIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_OthrCertDataSet.js", e);
    }
}

csDOScreenProto.TSU_ISSR_ID_TP_onchange = function(event) {
    try {
        ISSRIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_OthrCertDataSet.js", e);
    }
}