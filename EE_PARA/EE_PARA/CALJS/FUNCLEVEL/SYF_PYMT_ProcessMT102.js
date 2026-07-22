var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_PYMT_SetRefNo = function(ref) {
    try {

        SYT_Format_Ref(ref);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_50 = function() {
    try {

        SYS_GetCUBK('X102_50F_PARTY_ID', 'X102_50F_PARTY_ID');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_50_ADD = function() {
    try {

        SYS_InqCUBK('X102_50F_PARTY_ID', 'X102_50F_PARTY_ID');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_PYMT_SW_FORM();
        SYT_ChangeFldClass(document.MAINFORM.X102_20_REF, 'P');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.NXT_STATUS.value = 'OTT_RELEASE';
        document.MAINFORM.CANCEL_FLG.value = 'No';
        document.MAINFORM.X102_32A_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_32A_CCY.value, document.MAINFORM.X102_32A_AMT.value);
        document.MAINFORM.X102_71G_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_71G_CCY.value, document.MAINFORM.X102_71G_AMT.value);
        document.MAINFORM.X102_19_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_19_CCY.value, document.MAINFORM.X102_19_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SW_FORM = function() {
    try {

        if (document.MAINFORM.SW_FORM.value == 'MT102+') {
            document.MAINFORM.X102_TAG_119.value = 'STP';
            SYT_ChangeFldClass(document.MAINFORM.X102_51A_SEND_INS, 'B');
            SYT_ChangeFldClass(document.MAINFORM.X102_51A_IDENTIFIER, 'B');
            SYT_ChangeFldClass(document.MAINFORM.X102_52B_LOCATION, 'B');
            SYT_ChangeFldClass(document.MAINFORM.X102_52B_PARTY_IDENTIFIER, 'B');
            SYT_ChangeFldClass(document.MAINFORM.X102_52C_PARTY_IDENTIFIER, 'B');
            SYT_ChangeFldClass(document.MAINFORM.X102_52_TAG, 'P');
        } else {
            document.MAINFORM.X102_TAG_119.value = '';
            SYT_ChangeFldClass(document.MAINFORM.X102_51A_SEND_INS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_51A_IDENTIFIER, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_52B_LOCATION, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_52B_PARTY_IDENTIFIER, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_52C_PARTY_IDENTIFIER, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X102_52_TAG, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('PYMT1', 'SYF_PYMT_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        if (document.MAINFORM.MX_OR_MT_FLAG.value == "MX") {
            document.MAINFORM.C_MAIN_REF_20Z.value = document.MAINFORM.C_MAIN_REF.value;
        } else { //Added---
            document.MAINFORM.C_MAIN_REF_20Z.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_PART_50A_ADD_BTN_onclick = function(event) {
    try {
        SYF_PYMT_Cal_50_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_SW_FORM_onchange = function(event) {
    try {
        SYF_PYMT_SW_FORM();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X102_19_AMT_onchange = function(event) {
    try {
        var X102_19_AMT;
        X102_19_AMT = SYS_BeFloat(document.MAINFORM.X102_19_AMT.value);
        if (X102_19_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.X102_19_AMT.value = 0;
        }
        document.MAINFORM.X102_19_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_19_CCY.value, document.MAINFORM.X102_19_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X102_19_CCY_onchange = function(event) {
    try {
        document.MAINFORM.X102_19_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_19_CCY.value, document.MAINFORM.X102_19_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X102_32A_AMT_onchange = function(event) {
    try {
        var X102_32A_AMT;
        X102_32A_AMT = SYS_BeFloat(document.MAINFORM.X102_32A_AMT.value);
        if (X102_32A_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.X102_32A_AMT.value = 0;
        }
        document.MAINFORM.X102_32A_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_32A_CCY.value, document.MAINFORM.X102_32A_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X102_32A_CCY_onchange = function(event) {
    try {
        document.MAINFORM.X102_32A_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_32A_CCY.value, document.MAINFORM.X102_32A_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X102_32A_DATE_onchange = function(event) {
    try {
        var dSysDt; // Utility Auto Fix Comments
        var dValDt; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var sValDt; // Utility Auto Fix Comments
        sValDt = document.MAINFORM.X102_32A_DATE.value;
        sSysDt = SYS_BUSI_DATE;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);
            if (dValDt < dSysDt) {
                alert("The Value Date cannot be in the Past"); // Utility Auto Fix Comments
                document.MAINFORM.X102_32A_DATE.value = "";
                getDivByField(document.MAINFORM.X102_32A_DATE);
                window.focus();
                document.MAINFORM.X102_32A_DATE.focus();
            }
            if (document.MAINFORM.X102_32A_DATE.value != "") {
                SYS_CheckHoliday('SYS_BANK_COUNTRY', document.MAINFORM.X102_32A_DATE.name, '', '', SYS_BUSI_UNIT, 'SYM_PYMT_Succ_LocalHoliday()', 'SYM_PYMT_Fail_LocalHoliday()');
                if (document.MAINFORM.X102_32A_DATE.value == "") {
                    return false;
                }
            }
        } else {
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X102_50F_PARTY_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.X102_50F_PARTY_ID.value.trim() != '') {
            SYF_PYMT_Cal_50();
        } else {
            document.MAINFORM.X102_50A_IDENTIFIER.value = '';
            document.MAINFORM.X102_50F_PARTY_NAME.value = '';
            document.MAINFORM.X102_50F_PARTY_ADD1.value = '';
            document.MAINFORM.X102_50F_PARTY_ADD2.value = '';
            document.MAINFORM.X102_50F_PARTY_ADD3.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X102_71G_AMT_onchange = function(event) {
    try {
        var X102_71G_AMT;
        X102_71G_AMT = SYS_BeFloat(document.MAINFORM.X102_71G_AMT.value);
        if (X102_71G_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.X102_71G_AMT.value = 0;
        }
        document.MAINFORM.X102_71G_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_71G_CCY.value, document.MAINFORM.X102_71G_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X102_71G_CCY_onchange = function(event) {
    try {
        document.MAINFORM.X102_71G_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_71G_CCY.value, document.MAINFORM.X102_71G_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        SYM_PYMT_X103_ADV_BKID_B2_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYM_PYMT_set_X103_ADV_BKSW_B2_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('X103_ADV_BKID_B2', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT102.js", e);
    }
}