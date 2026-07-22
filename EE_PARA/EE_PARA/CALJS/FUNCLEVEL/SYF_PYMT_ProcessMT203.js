var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_PYMT_Cal_54a_ADD = function() {
    try {

        SYS_InqCUBK('X203_54_PARTY_ID', 'X203_54_PARTY_ID');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_52a_ADD = function() {
    try {

        SYS_InqCUBK('X203_52_PARTY_ID', 'X203_52_PARTY_ID');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_53a_ADD = function() {
    try {

        SYS_InqCUBK('X203_53_PARTY_ID', 'X203_53_PARTY_ID');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_52a = function() {
    try {

        if (document.MAINFORM.X203_52_PARTY_ID.value != '') {
            SYS_GetCUBK('X203_52_PARTY_ID', 'X203_52_PARTY_ID');
        } else {
            document.MAINFORM.X203_52A_IDENTIFIER.value = '';
            document.MAINFORM.X203_52D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_52D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_52D_PARTY_ADD3.value = '';
            document.MAINFORM.X203_52D_PARTY_NAME.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_53a = function() {
    try {

        if (document.MAINFORM.X203_53_PARTY_ID.value != '') {
            SYS_GetCUBK('X203_53_PARTY_ID', 'X203_53_PARTY_ID');
        } else {
            document.MAINFORM.X203_53A_IDENTIFIER.value = '';
            document.MAINFORM.X203_53D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_53D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_53D_PARTY_ADD3.value = '';
            document.MAINFORM.X203_53D_PARTY_NAME.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_54a = function() {
    try {

        if (document.MAINFORM.X203_54_PARTY_ID.value != '') {
            SYS_GetCUBK('X203_54_PARTY_ID', 'X203_54_PARTY_ID');
        } else {
            document.MAINFORM.X203_54A_IDENTIFIER.value = '';
            document.MAINFORM.X203_54D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_54D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_54D_PARTY_ADD3.value = '';
            document.MAINFORM.X203_54D_PARTY_NAME.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.X203_19_AMT.value = SYT_AmtFormat(document.MAINFORM.X203_19_CCY.value, document.MAINFORM.X203_19_AMT.value);
        document.MAINFORM.NXT_STATUS.value = 'OTT_RELEASE';
        document.MAINFORM.CANCEL_FLG.value = 'No';
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SetRefNo = function(ref) {
    try {

        SYT_Format_Ref(ref);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('PYMT1', 'SYF_PYMT_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
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
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        SYM_PYMT_X103_ADV_BKID_B2_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYM_PYMT_set_X103_ADV_BKSW_B2_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('X103_ADV_BKID_B2', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_52_BTN_onclick = function(event) {
    try {
        SYF_PYMT_Cal_52a_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_53_BTN_onclick = function(event) {
    try {
        SYF_PYMT_Cal_53a_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_54_BTN_onclick = function(event) {
    try {
        SYF_PYMT_Cal_54a_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X203_19_AMT_onchange = function(event) {
    try {
        var X203_19_AMT;
        X203_19_AMT = SYS_BeFloat(document.MAINFORM.X203_19_AMT.value);
        if (X203_19_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.X203_19_AMT.value = 0;
        }
        document.MAINFORM.X203_19_AMT.value = SYT_AmtFormat(document.MAINFORM.X203_19_CCY.value, document.MAINFORM.X203_19_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X203_19_CCY_onchange = function(event) {
    try {
        document.MAINFORM.X203_19_AMT.value = SYT_AmtFormat(document.MAINFORM.X203_19_CCY.value, document.MAINFORM.X203_19_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X203_30_VALUE_DATE_onchange = function(event) {
    try {
        sValDt = document.MAINFORM.X203_30_VALUE_DATE.value;
        sSysDt = SYS_BUSI_DATE;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);
            if (dValDt > dSysDt) {
                alert("The Value Date cannot be in the Future!");
                document.MAINFORM.X203_30_VALUE_DATE.value = "";
                getDivByField(document.MAINFORM.X203_30_VALUE_DATE);
                window.focus();
                document.MAINFORM.X203_30_VALUE_DATE.focus();
            }
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X203_52A_IDENTIFIER_onchange = function(event) {
    try {
        if (document.MAINFORM.X203_52A_IDENTIFIER.value == '') {
            document.MAINFORM.X203_52_PARTY_ID.value = '';
            document.MAINFORM.X203_52D_PARTY_NAME.value = '';
            document.MAINFORM.X203_52A_IDENTIFIER.value = '';
            document.MAINFORM.X203_52D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_52D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_52D_PARTY_ADD3.value = '';
            document.MAINFORM.X203_52_PARTY_IDENTIFIER.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_FLD_PYMT_X203_52A_IDENTIFIER_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X203_53A_IDENTIFIER_onchange = function(event) {
    try {
        if (document.MAINFORM.X203_53A_IDENTIFIER.value == '') {
            document.MAINFORM.X203_53_PARTY_ID.value = '';
            document.MAINFORM.X203_53D_PARTY_NAME.value = '';
            document.MAINFORM.X203_53A_IDENTIFIER.value = '';
            document.MAINFORM.X203_53D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_53D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_53D_PARTY_ADD3.value = '';
            document.MAINFORM.X203_53_PARTY_IDENTIFIER.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_FLD_PYMT_X203_53A_IDENTIFIER_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X203_54A_IDENTIFIER_onchange = function(event) {
    try {
        if (document.MAINFORM.X203_54A_IDENTIFIER.value == '') {
            document.MAINFORM.X203_54_PARTY_ID.value = '';
            document.MAINFORM.X203_54D_PARTY_NAME.value = '';
            document.MAINFORM.X203_54A_IDENTIFIER.value = '';
            document.MAINFORM.X203_54D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_54D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_54D_PARTY_ADD3.value = '';
            document.MAINFORM.X203_54_PARTY_IDENTIFIER.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_FLD_PYMT_X203_54A_IDENTIFIER_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT203.js", e);
    }
}