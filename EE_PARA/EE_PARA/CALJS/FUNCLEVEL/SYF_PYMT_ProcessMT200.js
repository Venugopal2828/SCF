var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
        document.MAINFORM.CANCEL_FLG.value = 'No';
        document.MAINFORM.NXT_STATUS.value = 'Capture_201';
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SetRefNo = function(ref) {
    try {

        SYT_Format_Ref(ref);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('PYMT1', 'SYF_PYMT_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_LIAB_VOUCHER();
        if (document.MAINFORM.MX_OR_MT_FLAG.value == "MX") {
            document.MAINFORM.C_MAIN_REF_20Z.value = document.MAINFORM.C_MAIN_REF.value;
        } else {
            document.MAINFORM.C_MAIN_REF_20Z.value = '';
        }
        document.MAINFORM.NXT_STATUS.value = 'Capture_201';
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_X200_MEDI_BKID_56A_GETCUBK = function() {
    try {

        if (document.MAINFORM.X200_MEDI_BKID_56A.value != '') {
            SYS_GetCUBK('X200_MEDI_BKID_56A', 'X200_MEDI_BKID_56A');
        } else {
            document.MAINFORM.X200_MEDI_BKID_56A.value = '';
            document.MAINFORM.X200_MEDI_BKNM_56A.value = '';
            document.MAINFORM.X200MEDIBKADD1_56A.value = '';
            document.MAINFORM.X200MEDIBKADD2_56A.value = '';
            document.MAINFORM.X200MEDIBKADD3_56A.value = '';
            document.MAINFORM.X200_MEDI_BKSW_56A.value = '';
            document.MAINFORM.X200_MEDIBKACNO56A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_X200_ACC_BKID_57A_GETCUBK = function() {
    try {

        if (document.MAINFORM.X200_ACC_BKID_57A.value != '') {
            SYS_GetCUBK('X200_ACC_BKID_57A', 'X200_ACC_BKID_57A'); // Utility Auto Fix Comments
        } else {
            document.MAINFORM.X200_ACC_BKID_57A.value = '';
            document.MAINFORM.X200_ACC_BKNM_57A.value = '';
            document.MAINFORM.X200_ACCBKADD1_57A.value = '';
            document.MAINFORM.X200_ACCBKADD2_57A.value = '';
            document.MAINFORM.X200_ACCBKADD3_57A.value = '';
            document.MAINFORM.X200_ACC_BKSW_57A.value = '';
            document.MAINFORM.X200_ACC_BKACNO57A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_LC_AMT_onchange = function(event) {
    try {
        document.MAINFORM.LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
        var LC_AMT; //Added 8/3/2019--H
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        if (LC_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.LC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_LC_CCY_onchange = function(event) {
    try {
        document.MAINFORM.LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_VALUE_DT_onchange = function(event) {
    try {
        var dSysDt; // Utility Auto Fix Comments
        var dValDt; // Utility Auto Fix Comments
        var sSysDt; // Utility Auto Fix Comments
        var sValDt; // Utility Auto Fix Comments
        sValDt = document.MAINFORM.VALUE_DT.value;
        sSysDt = SYS_BUSI_DATE;
        if (sValDt != "") {
            dValDt = SYT_GetDateObjectFromStr(sValDt);
            dSysDt = SYT_GetDateObjectFromStr(sSysDt);
            if (dValDt < dSysDt) {
                alert("The Value Date cannot be in the Past"); // Utility Auto Fix Comments
                document.MAINFORM.VALUE_DT.value = "";
                getDivByField(document.MAINFORM.VALUE_DT);
                window.focus();
                document.MAINFORM.VALUE_DT.focus();
            }

        } else {
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        SYM_PYMT_X103_ADV_BKID_B2_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYM_PYMT_set_X103_ADV_BKSW_B2_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_56_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X200_MEDI_BKID_56A', 'X200_MEDI_BKID_56A');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ID_57_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X200_ACC_BKID_57A', 'X200_ACC_BKID_57A');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X200_ACC_BKID_57A_onchange = function(event) {
    try {
        SYF_PYMT_X200_ACC_BKID_57A_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X200_MEDI_BKID_56A_onchange = function(event) {
    try {
        SYF_PYMT_X200_MEDI_BKID_56A_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_button1_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('X200_ASSET_ACNO', 'C_CLEAR_TYPE = \'NOSTRO\' AND C_ACCT_CCY = \'<--LC_CCY-->\' AND C_ACCT_WITH_ID = \'<--X103_ADV_BKID_B2-->\' AND C_CLEAR_VALID =\'T\' ');
        SYS_InqCUBK_byCondition('X200_ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_button2_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('X200_LIAB_ACNO', 'C_CLEAR_TYPE = \'NOSTRO\' AND C_ACCT_CCY = \'<--LC_CCY-->\' AND C_ACCT_WITH_ID = \'<--X200_ACC_BKID_57A-->\' AND C_CLEAR_VALID =\'T\' ');
        SYS_InqCUBK_byCondition('X200_LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT200.js", e);
    }
}