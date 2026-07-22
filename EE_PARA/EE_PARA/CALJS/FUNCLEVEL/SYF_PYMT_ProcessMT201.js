var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.NXT_STATUS.value = 'OTT_RELEASE';
        document.MAINFORM.CANCEL_FLG.value = 'No';
        document.MAINFORM.X203_19_AMT.value = SYT_AmtFormat(document.MAINFORM.X203_19_CCY.value, document.MAINFORM.X203_19_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SetRefNo = function(ref) {
    try {

        SYT_Format_Ref(ref);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('PYMT1', 'SYF_PYMT_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_PYMT_convertDecimal();
        EEHtml.attachEventListener(EEHtml.getElementById('A'), 'onclick', function() {
            SYT_Sum_of_Amount_19('X201_SEQ_B', 'X203_32B_AMT'); // Utility Auto Fix Comments
        });
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var num;
        num = SYS_getcurrRecordCount("X201_SEQ_B");
        if (num < 2) {
            alert("SEQ_B must have 2 records at least.");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_convertDecimal = function() {
    try {

        document.MAINFORM.X203_19_AMT.value = parseFloat(document.MAINFORM.X203_19_AMT.value).toFixed(2);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        SYM_PYMT_X103_ADV_BKID_B2_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYM_PYMT_set_X103_ADV_BKSW_B2_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X203_19_AMT_onchange = function(event) {
    try {
        SYF_PYMT_convertDecimal();
        var X203_19_AMT; //06/80/2019-----Added
        X203_19_AMT = SYS_BeFloat(document.MAINFORM.X203_19_AMT.value);
        if (X203_19_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.X203_19_AMT.value = 0;
        }
        //document.MAINFORM.X203_19_AMT.value = SYT_AmtFormat(document.MAINFORM.X203_19_CCY.value, document.MAINFORM.X203_19_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X203_19_CCY_onchange = function(event) {
    try {
        document.MAINFORM.X203_19_AMT.value = SYT_AmtFormat(document.MAINFORM.X203_19_CCY.value, document.MAINFORM.X203_19_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X203_30_VALUE_DATE_onchange = function(event) {
    try {
        var dSysDt; // Utility Auto Fix Comments
        var dValDt; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var sValDt; // Utility Auto Fix Comments
        sValDt = document.MAINFORM.X203_30_VALUE_DATE.value;
        sSysDt = SYS_BUSI_DATE;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);
            if (dValDt < dSysDt) {
                alert("The Value Date cannot be in the Past"); // Utility Auto Fix Comments
                document.MAINFORM.X203_30_VALUE_DATE.value = "";
                getDivByField(document.MAINFORM.X203_30_VALUE_DATE);
                window.focus();
                document.MAINFORM.X203_30_VALUE_DATE.focus();
            }
            if (document.MAINFORM.X203_30_VALUE_DATE.value != "") {
                SYS_CheckHoliday('SYS_BANK_COUNTRY', document.MAINFORM.X203_30_VALUE_DATE.name, '', '', SYS_BUSI_UNIT, 'SYM_PYMT_Succ_LocalHoliday()', 'SYM_PYMT_Fail_LocalHoliday()');
                if (document.MAINFORM.X203_30_VALUE_DATE.value == "") {
                    return false;
                }
            }
        } else {
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT201.js", e);
    }
}