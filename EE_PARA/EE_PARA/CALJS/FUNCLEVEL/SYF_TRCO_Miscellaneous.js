var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetRefNo('TRCO_REF', 'SYF_TRCO_Cal_SetRefNo');
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        document.MAINFORM.COMM_DATA_TP.value = "Miscellaneous";
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        SYF_TRCO_Cal_VouSwfDoButton();
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYF_TRCO_Set_EMailAddressIsShowOrHide();
        if (SYS_FUNCTION_TYPE === "EC") {
            SYT_ChangeFldClass(document.MAINFORM.TRX_REF_NO, "P");
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_TRCO_Cal_EVAL_DT = function() {
    try {
        var EVAL_FLG = document.MAINFORM.EVAL_FLG.value;
        if (EVAL_FLG === "Yes") {
            document.MAINFORM.EVAL_DT.value = SYS_BUSI_DATE;
        } else {
            document.MAINFORM.EVAL_DT.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*SYF_TRCO_Cal_EVAL_DT", e);
    }
}

csFuncLevelProto.SYF_TRCO_Cal_EVAL_DT_FldClass = function() {
    try {
        var EVAL_FLG = document.MAINFORM.EVAL_FLG.value;
        if (EVAL_FLG === "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.EVAL_DT, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EVAL_DT, "P");
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*SYF_TRCO_Cal_EVAL_DT_FldClass", e);
    }
}

csFuncLevelProto.SYF_TRCO_Cal_EvalRefNo = function(ref) {
    try {
        var EVAL_DT = document.MAINFORM.EVAL_DT.value;
        var aEvalDt = null;
        if (EVAL_DT.indexOf("-") > -1) {
            aEvalDt = EVAL_DT.split("-");
        } else {
            aEvalDt = EVAL_DT.split("/");
        }
        var sYY = "";
        if (aEvalDt.length > 0) {
            sYY = aEvalDt[0].substr(2, 2);
            document.MAINFORM.TRX_REF_NO.value = sYY + aEvalDt[1] + "REV" + ref;
        }
        SYF_TRCO_Cal_VouSwfDoButton();
        SYM_TRCO_Cal_VoucherSynchronizationByEval();
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*SYF_TRCO_Cal_EvalRefNo", e);
    }
}

csFuncLevelProto.SYF_TRCO_Cal_SetRefNo = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        CountryCode = SYS_BANK_COUNTRY;
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = 'MIS';
        document.MAINFORM.C_MAIN_REF.value = sub + CountryCode + year + ref;
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*SYF_TRCO_Cal_SetRefNo", e);
    }
}

csFuncLevelProto.SYF_TRCO_Cal_TRX_REF_NO = function() {
    try {
        var EVAL_FLG = document.MAINFORM.EVAL_FLG.value;
        if (EVAL_FLG === "Yes") {
            SYS_GetRefNo("EvalRefNo", "SYF_TRCO_Cal_EvalRefNo");
        } else {
            document.MAINFORM.TRX_REF_NO.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*SYF_TRCO_Cal_TRX_REF_NO", e);
    }
}

csFuncLevelProto.SYF_TRCO_Cal_TRX_REF_NO_FldClass = function() {
    try {
        var EVAL_FLG = document.MAINFORM.EVAL_FLG.value;
        if (EVAL_FLG === "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.TRX_REF_NO, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TRX_REF_NO, "M");
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*SYF_TRCO_Cal_TRX_REF_NO_FldClass", e);
    }
}

csFuncLevelProto.SYF_TRCO_Cal_VouSwfDoButton = function() {
    try {
        var BUSI_UNIT = document.MAINFORM.BUSI_UNIT.value;
        var TRX_REF_NO = document.MAINFORM.TRX_REF_NO.value;
        if ((BUSI_UNIT === "" || BUSI_UNIT === null) || (TRX_REF_NO === "" || TRX_REF_NO === null)) {
            SYS_disableButton("MISCLS_VOU_DO", "addbutton");
            SYS_disableButton("MISCLS_SW_DO", "addbutton");
        } else {
            if (SYS_FUNCTION_TYPE !== "IQ" && SYS_FUNCTION_TYPE !== "RE") {
                SYS_enableButton("MISCLS_VOU_DO", "addbutton");
                SYS_enableButton("MISCLS_SW_DO", "addbutton");
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*SYF_TRCO_Cal_VouSwfDoButton", e);
    }
}

csFuncLevelProto.SYF_TRCO_Inq_CnptInfoByShortNm = function() {
    try {
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        if (!SYT_chkUserInputStringIsAllSpace(CNPT_SHORT_NM)) {
            SYS_InqCUBK("GetCnptInfoByShortNm", "CNPT_SHORT_NM");
        } else {
            SYS_InqCUBK("GetCnptInfoByShortNm");
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*SYF_TRCO_Inq_CnptInfoByShortNm", e);
    }
}

csFuncLevelProto.SYF_TRCO_Set_EMailAddressIsShowOrHide = function() {
    try {
        var SEND_MAIL = document.MAINFORM.SEND_MAIL.value;
        if (SEND_MAIL === "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL_ADD, "M");
            SYT_DisObj("EMailRow");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL_ADD, "O");
            document.MAINFORM.EMAIL_ADD.value = '';
            SYT_hideObj("EMailRow");
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*SYF_TRCO_Set_EMailAddressIsShowOrHide", e);
    }
}

csFuncLevelProto.FLD_TRCO_BUSI_UNIT_onchange = function(event) {
    try {
        SYM_TRCO_Cal_VoucherSynchronizationByBU();
        SYF_TRCO_Cal_VouSwfDoButton();
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*FLD_TRCO_BUSI_UNIT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCO_EVAL_FLG_onchange = function(event) {
    try {
        SYF_TRCO_Cal_EVAL_DT();
        SYF_TRCO_Cal_TRX_REF_NO();
        SYF_TRCO_Cal_EVAL_DT_FldClass();
        SYF_TRCO_Cal_TRX_REF_NO_FldClass();
        SYF_TRCO_Cal_VouSwfDoButton();
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*FLD_TRCO_EVAL_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCO_SEND_MAIL_onchange = function(event) {
    try {
        SYF_TRCO_Set_EMailAddressIsShowOrHide();
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*FLD_TRCO_SEND_MAIL_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCO_TRX_REF_NO_onchange = function(event) {
    try {
        SYF_TRCO_Cal_VouSwfDoButton();
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*FLD_TRCO_TRX_REF_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCO_CNPT_SHORT_NM_BTN_onclick = function(event) {
    try {
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        if (!SYT_chkUserInputStringIsAllSpace(CNPT_SHORT_NM)) {
            SYS_GetCUBK_S("GetCnptInfoByShortNm", "CNPT_SHORT_NM", true);
                } else {
            SYS_InqCUBK("GetCnptInfoByShortNm");
        }
    } catch (e) {
        DisExcpt("SYF_TRCO_Miscellaneous.js*FLD_TRCO_CNPT_SHORT_NM_BTN_onclick", e);
    }
}