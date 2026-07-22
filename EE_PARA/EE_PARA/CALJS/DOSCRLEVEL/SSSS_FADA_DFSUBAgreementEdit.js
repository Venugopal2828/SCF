"path:SCRN/o2m/FADA_DFSUBAgreementEdit.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!check_buyer_lmt()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        change_buyerid_class();
        exchangerate();
        get_buyer_lmt();
        document.MAINFORM.FA_LMT_CCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.FA_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_AMT.value);
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain("FA_BUSI_TYPE");
        document.MAINFORM.FA_TEMP_AMT8.value = 1;
        document.MAINFORM.FA_REMI_CCY1.value = 'EUR';
        document.MAINFORM.FA_REMI_AMT1.value = SYT_CCY_AMT(document.MAINFORM.FA_REMI_CCY1.value, document.MAINFORM.FA_REMI_AMT1.value);
        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);

    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.buyer_cont_info = function() {
    try {
        if (document.MAINFORM.FA_BUYER_CNTC_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX.value, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR.value, 'O');
            SYS_GetTableDataByRule_S('SSSS_FADA_DFSUBAgreementEdit_buyer_cont_info_0', '1');
        } else {
            document.MAINFORM.FA_BUYER_CONT_NM.value = '';
            document.MAINFORM.FA_BUYER_CONT_TEL.value = '';
            document.MAINFORM.FA_BUYER_CONT_MAIL.value = '';
            document.MAINFORM.FA_BUYER_CONT_FAX.value = '';
            document.MAINFORM.FA_BUYER_CONT_ADDR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.change_buyerid_class = function() {
    try {
        if (document.MAINFORM.FA_BUYER_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_ID, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_ID, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.change_lmt_class = function() {
    try {
        if (document.MAINFORM.FA_SERVICE_APPRVD.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.check_buyer_lmt = function() {
    try {
        var temp2 = SYS_BeFloat(document.MAINFORM.FA_REMI_AMT1.value) - SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
        if (document.MAINFORM.FA_SERVICE_APPRVD.value == '1' && temp2 < 0) {
            alert('The buyer limits is not enough!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.exchangerate = function() {
    try {
        SYS_GetExchangeRate_S('EUR', SYS_LOCAL_CCY, 'Booking Rate', 'FA_TEMP_RATE');
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.get_buyer_info = function() {
    try {
        SYS_GetCUBK('FA_BUYER_ID1', document.MAINFORM.FA_BUYER_ID.name);
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.get_buyer_lmt = function() {
    try {
        if (document.MAINFORM.FA_BUYER_ID.value != '' || document.MAINFORM.FA_BUYER_ID.value != null) {
            SYS_GetTableDataByRule_S('SSSS_FADA_DFSUBAgreementEdit_get_buyer_lmt_1', '1');
            document.MAINFORM.FA_REMI_AMT1.value = SYT_CCY_AMT(document.MAINFORM.FA_REMI_CCY1.value, document.MAINFORM.FA_REMI_AMT1.value);
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.temp1 = function() {
    try {
        if (document.MAINFORM.FA_SERVICE_APPRVD.value == '1') {
            document.MAINFORM.FA_TEMP1.value = SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value) / SYS_BeFloat(document.MAINFORM.FA_TEMP_RATE.value) * 100;
            document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT('EUR', document.MAINFORM.FA_TEMP1.value);
        }
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.FA_BUYER_CNTC_FLG_onchange = function(event) {
    try {
        buyer_cont_info();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.FA_BUYER_CONT_TEL_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}
csDOScreenProto.FA_BUYER_ID_onchange = function(event) {
    try {
        get_buyer_info();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.FA_LMT_AMT_onchange = function(event) {
    try {
        temp1();
        document.MAINFORM.FA_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}

csDOScreenProto.FA_SERVICE_APPRVD_onchange = function(event) {
    try {
        change_lmt_class();
    } catch (e) {
        DisExcpt("SSSS_FADA_DFSUBAgreementEdit.js", e);
    }
}