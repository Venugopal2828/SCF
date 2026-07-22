var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_ASSGN_ADD_BTN_onclick = function(event) {
    try {
        Cal_CPYT_ASSGN_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_ASSGN_COR_MED_onchange = function(event) {
    try {
        Cal_CPYT_ASSGN_MAIL_ADD();
        Cal_CPYT_ASSGN_FAX_NO();
        Cal_CPYT_ASSGN_EMAIL_ADD();
        Cal_CPYT_ASSGN_TELEX();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_ASSGN_ID_onchange = function(event) {
    try {
        Cal_CPYT_ASSGN_ID();
        MPO_CPYT_ASSGN_BTN();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_ASSGN_ID_BTN_onclick = function(event) {
    try {
        Cal_CPYT_ASSGN();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_ASSGN_ORDER_NO_onchange = function(event) {
    try {
        Cal_CPYT_ASSGN_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_ASSGN_OREDER_POST_onchange = function(event) {
    try {
        Cal_CPYT_ASSGN_OREDER_POST();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_ASSGN_POST_BTN_onclick = function(event) {
    try {
        Cal_CPYT_ASSGN_MAIL_POST();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_CR_AC_onchange = function(event) {
    try {
        SYS_GetCUBK('CPYT_CR_AC_IF', 'CPYT_CR_AC');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_CR_AC_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('CPYT_CR_AC_IF', 'C_CUST_ID= \'<--CPYT_ASSGN_ID-->\' AND  C_CURRENCY=\'<--CPYT_CR_CCY-->\'');
        SYS_InqCUBK_byCondition('CPYT_CR_AC_IF', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_CR_AMT_CRCCY_onchange = function(event) {
    try {
        Cal_CPYT_N_PAY_AMT();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_CR_CCY_onchange = function(event) {
    try {
        Cal_CPYT_BUY_RATE();
        Cal_CPYT_PAY_CCY();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_CR_VAL_DATE_onchange = function(event) {
    try {
        Chk_ValueDates('CPYT_CR_VAL_DATE');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_DR_AC_onchange = function(event) {
    try {
        SYS_GetCUBK('CPYT_DR_AC_IF', 'CPYT_DR_AC');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_DR_AC_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('CPYT_DR_AC_IF', 'C_CUST_ID= \'<--CPYT_DR_ID-->\' AND  C_CURRENCY=\'<--CPYT_DR_CCY-->\'');
        SYS_InqCUBK_byCondition('CPYT_DR_AC_IF', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_DR_ADD_BTN_onclick = function(event) {
    try {
        Cal_CPYT_DR_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_DR_BUY_RATE_onchange = function(event) {
    try {
        Cal_principleAmount();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_DR_CCY_onchange = function(event) {
    try {
        Cal_CPYT_BUY_RATE();
        EEHtml.fireEvent(document.MAINFORM.CPYT_CR_AMT_CRCCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_DR_COR_MED_onchange = function(event) {
    try {
        Cal_CPYT_DR_MAIL_ADD();
        Cal_CPYT_DR_FAX_NO();
        Cal_CPYT_DR_EMAIL_ADD();
        Cal_CPYT_DR_TELEX();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_DR_ID_onchange = function(event) {
    try {
        Cal_CPYT_DR_ID();
        MPO_CPYT_DR_BTN();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_DR_ID_BTN_onclick = function(event) {
    try {
        Cal_CPYT_DR();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_DR_ORDER_NO_onchange = function(event) {
    try {
        Cal_CPYT_DR_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_DR_ORDER_POST_onchange = function(event) {
    try {
        Cal_CPYT_DR_ORDER_POST();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_DR_POST_BTN_onclick = function(event) {
    try {
        Cal_CPYT_DR_MAIL_POST();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CPYT_DR_VAL_DATE_onchange = function(event) {
    try {
        Chk_ValueDates('CPYT_DR_VAL_DATE');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CR_CALC_AMT_onchange = function(event) {
    try {
        document.MAINFORM.CR_CALC_AMT.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value), findDecFromCCY(document.MAINFORM.CPYT_CR_CCY.value));
        Cal_principleAmount();
        Cal_CPYT_N_PAY_AMT();
        EEHtml.fireEvent(document.MAINFORM.CPYT_CR_AMT_CRCCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DB_CALC_AMT_onchange = function(event) {
    try {
        document.MAINFORM.DB_CALC_AMT.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value), findDecFromCCY(document.MAINFORM.CPYT_DR_CCY.value));
        Cal_principleAmount();
        Cal_CPYT_DR_AMT_DRCCY();
        Cal_CPYT_N_PAY_AMT();
        EEHtml.fireEvent(document.MAINFORM.CPYT_CR_AMT_CRCCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_InternalTransfer.js", e);
    }
}