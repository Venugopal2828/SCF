var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

var sNO_OF_AMDCUBK = "";

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_EPLC_CONFIRM_CALL();

        Cal_SYND_ACTION_REF();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return (SYF_EPLC_CHK_32B33B() && SYF_EPLC_CHK_LTST_SHIP_DT() && Cal_eloan_fields());
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        var FldName; // Utility Auto Fix Comments
        var FldName_Real; // Utility Auto Fix Comments
        var Prefix; // Utility Auto Fix Comments
        var frm; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        SYF_EPLC_CHK_DETREMENTAL();
        SYM_EPLC_INIT();

        //define value
        document.MAINFORM.DETRMNTL_FLG.value = 'NO';
        document.MAINFORM.AMD_DT.value = SYS_BUSI_DATE;
        if (document.MAINFORM.TRM_TO_BK_REF.value == "") {
            document.MAINFORM.TRM_TO_BK_REF.value = "NONREF";
        }

        SYF_EPLC_GetBKInfoByBIC();

        //for display old value for OLD_XXXXX && NEW_XXXX 
        frm = document.MAINFORM;
        for (i = 0; i < frm.elements.length; i++) { // Utility Auto Fix Comments
            FldName = frm.elements[i].name;
            Prefix = FldName.substr(0, 4);
            FldName_Real = FldName.substr(4, FldName.length - 4);
            if (FldName.indexOf("_BTN") > -1 || FldName.indexOf("_ORDER_") > -1) {
                continue;
            }
            if (Prefix == "OLD_") {
                frm.elements[i].value = frm.elements[FldName_Real].value;
            }
            /*	if(Prefix == "NEW_"){
    		frm.elements[i].value =frm.elements[FldName_Real].value;
    	}*/
        }

        //init run
        SYF_EPLC_NEW_LC_AMT();
        SYF_EPLC_NEW_LC_BAL();
        SYF_EPLC_NEW_CONF_BAL();
        SYF_EPLC_MPO_TenorInformation();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        SYM_EPLC_CAL_AMEND_PAYMENT_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        InitRun();
        //for class
        SYF_EPLC_CLASS_42C42a();
        SYF_EPLC_CLASS_BY_43P_NEW();
        SYF_EPLC_CLASS_BY_43T_NEW();
        SYF_EPLC_CLASS_BY_ADV_LC_BY();
        SYF_EPLC_CLASS_BY_NEW_39B();
        SYF_EPLC_CLASS_BY_OUR_ENG();
        SYF_EPLC_CLASS_BY_TENOR_TYPE();
        SYF_EPLC_CLASS_ISSUE_BK_CHG_CCY();
        SYM_EPLC_CHK_AVAL_BY_INIT();
        SYM_EPLC_OUR_ENG_BY_CONF_INSTR_AMD();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;

        SYM_EPLC_Hidden_Mixpay_Separator();

        //for chg
        SYT_CHG_INIT("SYF_EPLC_CHG_INIT_RUN");
        document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
        CHG_setAllChargeAt(1);

        //add by amy for SMBC demo in 20120917
        SYF_EPLC_ChangeFieldsClass();

        Change_R_COLLAT_REQ();
        Reset_R_COLLAT_REQ();
        Change_R_COLLAT_TP();
        EEHtml.fireEvent(document.MAINFORM.R_COLLAT_TP, 'onchange');

        SHOW_HIDE_SYND_ACT_NOTES_TEMP();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CABLE = function() {
    try {
        var nTimes; // Utility Auto Fix Comments
        var nTimes_MT707; // Utility Auto Fix Comments
        var nTimes_MT730; // Utility Auto Fix Comments
        SYT_CAL_CABLE();
        return;
        /*
    nTimes_MT707 =(document.MAINFORM.ADV_LC_BY.value == "SWIFT to Beneficiary's Bank")?1:0;
    nTimes_MT730 =(document.MAINFORM.SENT_MT730_FLG.value == "YES")?1:0;
    nTimes = nTimes_MT707 + nTimes_MT730;

    //if nTimes is zero, the system will run Chg.reset() then return
    SYT_CAL_CABLE(nTimes);
    */
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_COMM = function() {
    try {
        //for ADV_AMND_COMM
        SYT_CAL_COMM("EPLC_AMEND_COMM", document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
        return;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_COURIER = function() {
    try {
        SYT_CAL_COURIER();
        return;
        /*
    if(document.MAINFORM.ADV_LC_BY.value.indexOf("Mail") >-1){
    	SYT_CAL_COURIER();
    }else{
    	SYT_RESET_COURIER();
    }
    */
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_INIT_RUN = function() {
    try {
        SYF_EPLC_CAL_COMM();
        SYF_EPLC_CAL_CABLE();
        SYF_EPLC_CAL_COURIER();
        SYT_CAL_POST();
        SYM_EPLC_CAL_PAID_CFM_COMM();
        SYM_EPLC_INIT_UNPAID_CONF_COMM();
        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();
        SYT_CAL_COMM('EPLC_OTHER_CHG', document.MAINFORM.LC_CCY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_32B33B = function() {
    try {
        return SYM_EPLC_M_CHK_32B33B(document.MAINFORM.INC_AMT, document.MAINFORM.DEC_AMT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_DETREMENTAL = function() {
    try {
        var sNO_OF_AMD; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sNO_OF_AMDCUBK = SYT_FillZero(sNO_OF_AMD);
        if (document.MAINFORM.DETRMNTL_FLG.value == "YES") {
            sNO_OF_AMD = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value) - 1;
            //sql = "AMD_REF = " + "'" + document.MAINFORM.C_MAIN_REF.value + "-" + sNO_OF_AMDCUBK + "'";
            document.MAINFORM.AMD_REF.value = document.MAINFORM.C_MAIN_REF.value + "-" + sNO_OF_AMDCUBK;
            SYS_GetTableDataByRule_S('SYF_EPLC_EPLC_ProcessMT707_SYF_EPLC_CHK_DETREMENTAL_0', '1', true);

            if (document.MAINFORM.TEMP_CHAR1.value == "" || document.MAINFORM.TEMP_CHAR1 == null) {
                alert("Warning:There is a detrimental amendment outstanding. Please process Beneficiary Response before proceeding!");
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_LTST_SHIP_DT = function() {
    try {
        var oEXPIRY_DT; // Utility Auto Fix Comments
        oEXPIRY_DT = (document.MAINFORM.EXPIRY_DT.value != "") ? document.MAINFORM.NEW_EXPIRY_DT : document.MAINFORM.EXPIRY_DT;

        return SYM_EPLC_M_CHK_LTST_SHIP_DT(document.MAINFORM.NEW_LTST_SHIP_DT, oEXPIRY_DT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_SHIP_PRD = function() {
    try {
        SYM_EPLC_M_CHK_SHP_PRD(document.MAINFORM.NEW_LTST_SHIP_DT, document.MAINFORM.NEW_SHIP_PRD);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_42C42a = function() {
    try {
        //SYM_EPLC_M_CLASS_42C42a(document.MAINFORM.DRAFTS_AT.value, document.MAINFORM.DRWE_NM.value);
        // SYM_EPLC_CALL_FOR_DRAFTS_AT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_43P_NEW = function() {
    try {
        SYM_EPLC_M_CLASS_BY_43P_NEW(document.MAINFORM.NEW_PARTIAL_SHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_43T_NEW = function() {
    try {
        SYM_EPLC_M_CLASS_BY_43T_NEW(document.MAINFORM.NEW_TNSHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_ADV_LC_BY = function() {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_LC_BY(document.MAINFORM.ADV_LC_BY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_NEW_39B = function() {
    try {
        SYM_EPLC_M_CLASS_BY_NEW_39B(document.MAINFORM.NEW_AMT_SPEC.value);
        EEHtml.fireEvent(document.MAINFORM.NEW_POS_TOL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_OUR_ENG = function() {
    try {
        SYM_EPLC_M_CLASS_BY_OUR_ENG(document.MAINFORM.OUR_ENG.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_TENOR_TYPE = function() {
    try {
        SYM_EPLC_M_CLASS_BY_TENOR_TYPE(document.MAINFORM.TENOR_TYPE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_ISSUE_BK_CHG_CCY = function() {
    try {
        SYM_EPLC_M_CLASS_ISSUE_BK_CHG_CCY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_ChangeFieldsClass = function() {
    try {
        // for 32B
        if (document.MAINFORM.INC_AMT.value != 0) {
            SYT_ChangeFldClass_New('INC_AMT', 'P');
        } else {
            SYT_ChangeFldClass_New('INC_AMT', 'O');
        }
        //for 33B
        if (document.MAINFORM.DEC_AMT.value != 0) {
            SYT_ChangeFldClass_New('DEC_AMT', 'P');
        } else {
            SYT_ChangeFldClass_New('DEC_AMT', 'O');
        }
        //for 34B
        if (document.MAINFORM.NEW_LC_AMT.value != 0) {
            SYT_ChangeFldClass_New('NEW_LC_AMT', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_LC_AMT', 'O');
        }
        //for 39A
        if (document.MAINFORM.NEW_POS_TOL.value != '') {
            SYT_ChangeFldClass_New('NEW_POS_TOL', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_POS_TOL', 'O');
        }
        if (document.MAINFORM.NEW_NEG_TOL.value != '') {
            SYT_ChangeFldClass_New('NEW_NEG_TOL', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_NEG_TOL', 'O');
        }
        //for 39B
        if (document.MAINFORM.NEW_AMT_SPEC.value != '') {
            SYT_ChangeFldClass_New('NEW_AMT_SPEC', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_AMT_SPEC', 'O');
        }
        //for 31E
        if (document.MAINFORM.NEW_EXPIRY_DT.value != '') {
            SYT_ChangeFldClass_New('NEW_EXPIRY_DT', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_EXPIRY_DT', 'O');
        }
        //for 39C
        if (document.MAINFORM.ADD_AMT_COVRD.value != '') {
            SYT_ChangeFldClass_New('ADD_AMT_COVRD', 'P');
        } else {
            SYT_ChangeFldClass_New('ADD_AMT_COVRD', 'O');
        }
        //for 52a
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value != '') {
            SYT_ChangeFldClass_New('ISSUE_BK_ID', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_NM', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_ID_BTN', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD_BTN', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD1', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD2', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD3', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_MAIL_ADD', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_POST_ADD_BTN', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_SW_TAG', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_SW_ADD', 'P');
        } else {
            SYT_ChangeFldClass_New('ISSUE_BK_ID', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_NM', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_ID_BTN', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD_BTN', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD1', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD2', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD3', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_POST_ADD_BTN', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_SW_TAG', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_SW_ADD', 'O');
        }
        //for 41A
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value != '') {
            SYT_ChangeFldClass_New('AVAL_WT_BK_ID', 'P');
            SYT_ChangeFldClass_New('AVAL_WT_BK_ID_BTN', 'P');
            SYT_ChangeFldClass_New('AVAL_WT_BK_NM', 'P');
            SYT_ChangeFldClass_New('AVAL_WT_BK_ADD_BTN', 'P');
            SYT_ChangeFldClass_New('AVAL_WT_BK_ADD1', 'P');
            SYT_ChangeFldClass_New('AVAL_WT_BK_ADD2', 'P');
            SYT_ChangeFldClass_New('AVAL_WT_BK_ADD3', 'P');
            SYT_ChangeFldClass_New('AVAL_WT_BK_MAIL_ADD', 'P');
            SYT_ChangeFldClass_New('AVAL_WT_BK_POST_ADD_BTN', 'P');
            SYT_ChangeFldClass_New('AVAL_WT_BK_SW_TAG', 'P');
            SYT_ChangeFldClass_New('AVAL_WT_BK_SW_ADD', 'P');
        } else {
            SYT_ChangeFldClass_New('AVAL_WT_BK_ID', 'O');
            SYT_ChangeFldClass_New('AVAL_WT_BK_ID_BTN', 'O');
            SYT_ChangeFldClass_New('AVAL_WT_BK_NM', 'O');
            SYT_ChangeFldClass_New('AVAL_WT_BK_ADD_BTN', 'O');
            SYT_ChangeFldClass_New('AVAL_WT_BK_ADD1', 'O');
            SYT_ChangeFldClass_New('AVAL_WT_BK_ADD2', 'O');
            SYT_ChangeFldClass_New('AVAL_WT_BK_ADD3', 'O');
            SYT_ChangeFldClass_New('AVAL_WT_BK_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('AVAL_WT_BK_POST_ADD_BTN', 'O');
            SYT_ChangeFldClass_New('AVAL_WT_BK_SW_TAG', 'O');
            SYT_ChangeFldClass_New('AVAL_WT_BK_SW_ADD', 'O');
        }
        //for 57
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value != '') {
            SYT_ChangeFldClass_New('ADV_THU_BK_ID', 'P');
            SYT_ChangeFldClass_New('ADV_THU_BK_ID_BTN', 'P');
            SYT_ChangeFldClass_New('ADV_THU_BK_NM', 'P');
            SYT_ChangeFldClass_New('ADV_THU_BK_ADD_BTN', 'P');
            SYT_ChangeFldClass_New('ADV_THU_BK_ADD1', 'P');
            SYT_ChangeFldClass_New('ADV_THU_BK_ADD2', 'P');
            SYT_ChangeFldClass_New('ADV_THU_BK_ADD3', 'P');
            SYT_ChangeFldClass_New('ADV_THU_BK_PARTY_ID', 'P');
            SYT_ChangeFldClass_New('ADV_THU_BK_MAIL_ADD', 'P');
            SYT_ChangeFldClass_New('ADV_THU_BK_POST_ADD_BTN', 'P');
            SYT_ChangeFldClass_New('ADV_THU_BK_SW_TAG', 'P');
            SYT_ChangeFldClass_New('ADV_THU_BK_SW_ADD', 'P');
            SYT_ChangeFldClass_New('ADV_THU_BK_CORR_MED', 'P');
        } else {
            SYT_ChangeFldClass_New('ADV_THU_BK_ID', 'O');
            SYT_ChangeFldClass_New('ADV_THU_BK_ID_BTN', 'O');
            SYT_ChangeFldClass_New('ADV_THU_BK_NM', 'O');
            SYT_ChangeFldClass_New('ADV_THU_BK_ADD_BTN', 'O');
            SYT_ChangeFldClass_New('ADV_THU_BK_ADD1', 'O');
            SYT_ChangeFldClass_New('ADV_THU_BK_ADD2', 'O');
            SYT_ChangeFldClass_New('ADV_THU_BK_ADD3', 'O');
            SYT_ChangeFldClass_New('ADV_THU_BK_PARTY_ID', 'O');
            SYT_ChangeFldClass_New('ADV_THU_BK_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('ADV_THU_BK_POST_ADD_BTN', 'O');
            SYT_ChangeFldClass_New('ADV_THU_BK_SW_TAG', 'O');
            SYT_ChangeFldClass_New('ADV_THU_BK_SW_ADD', 'O');
            SYT_ChangeFldClass_New('ADV_THU_BK_CORR_MED', 'O');
        }
        //for 53
        if (document.MAINFORM.REIM_BK_SW_ADD.value != '') {
            SYT_ChangeFldClass_New('REIM_BK_ID', 'P');
            SYT_ChangeFldClass_New('REIM_BK_ID_BTN', 'P');
            SYT_ChangeFldClass_New('REIM_BK_NM', 'P');
            SYT_ChangeFldClass_New('REIM_BK_ADD_BTN', 'P');
            SYT_ChangeFldClass_New('REIM_BK_ADD1', 'P');
            SYT_ChangeFldClass_New('REIM_BK_ADD2', 'P');
            SYT_ChangeFldClass_New('REIM_BK_ADD3', 'P');
            SYT_ChangeFldClass_New('REIM_BK_PARTY_ID', 'P');
            SYT_ChangeFldClass_New('REIM_BK_MAIL_ADD', 'P');
            SYT_ChangeFldClass_New('REIM_BK_POST_ADD_BTN', 'P');
            SYT_ChangeFldClass_New('REIM_BK_SW_TAG', 'P');
            SYT_ChangeFldClass_New('REIM_BK_SW_ADD', 'P');
        } else {
            SYT_ChangeFldClass_New('REIM_BK_ID', 'O');
            SYT_ChangeFldClass_New('REIM_BK_ID_BTN', 'O');
            SYT_ChangeFldClass_New('REIM_BK_NM', 'O');
            SYT_ChangeFldClass_New('REIM_BK_ADD_BTN', 'O');
            SYT_ChangeFldClass_New('REIM_BK_ADD1', 'O');
            SYT_ChangeFldClass_New('REIM_BK_ADD2', 'O');
            SYT_ChangeFldClass_New('REIM_BK_ADD3', 'O');
            SYT_ChangeFldClass_New('REIM_BK_PARTY_ID', 'O');
            SYT_ChangeFldClass_New('REIM_BK_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('REIM_BK_POST_ADD_BTN', 'O');
            SYT_ChangeFldClass_New('REIM_BK_SW_TAG', 'O');
            SYT_ChangeFldClass_New('REIM_BK_SW_ADD', 'O');
        }
        //for First Advising Bank
        if (document.MAINFORM.TRM_TO_BK_SW_ADD.value != '') {
            SYT_ChangeFldClass_New('TRM_TO_BK_ID', 'P');
            SYT_ChangeFldClass_New('TRM_TO_BK_ID_BTN', 'P');
            SYT_ChangeFldClass_New('TRM_TO_BK_NM', 'P');
            SYT_ChangeFldClass_New('TRM_TO_BK_ADD_BTN', 'P');
            SYT_ChangeFldClass_New('TRM_TO_BK_ADD1', 'P');
            SYT_ChangeFldClass_New('TRM_TO_BK_ADD2', 'P');
            SYT_ChangeFldClass_New('TRM_TO_BK_ADD3', 'P');
            SYT_ChangeFldClass_New('TRM_TO_BK_MAIL_ADD', 'P');
            SYT_ChangeFldClass_New('TRM_TO_BK_POST_ADD_BTN', 'P');
            SYT_ChangeFldClass_New('TRM_TO_BK_SW_TAG', 'P');
            SYT_ChangeFldClass_New('TRM_TO_BK_SW_ADD', 'P');
            SYT_ChangeFldClass_New('TRM_TO_BK_REF', 'P');
        } else {
            SYT_ChangeFldClass_New('TRM_TO_BK_ID', 'O');
            SYT_ChangeFldClass_New('TRM_TO_BK_ID_BTN', 'O');
            SYT_ChangeFldClass_New('TRM_TO_BK_NM', 'O');
            SYT_ChangeFldClass_New('TRM_TO_BK_ADD_BTN', 'O');
            SYT_ChangeFldClass_New('TRM_TO_BK_ADD1', 'O');
            SYT_ChangeFldClass_New('TRM_TO_BK_ADD2', 'O');
            SYT_ChangeFldClass_New('TRM_TO_BK_ADD3', 'O');
            SYT_ChangeFldClass_New('TRM_TO_BK_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('TRM_TO_BK_POST_ADD_BTN', 'O');
            SYT_ChangeFldClass_New('TRM_TO_BK_SW_TAG', 'O');
            SYT_ChangeFldClass_New('TRM_TO_BK_SW_ADD', 'O');
            SYT_ChangeFldClass_New('TRM_TO_BK_REF', 'O');
        }
        //for 44A
        if (document.MAINFORM.NEW_LOAD_PLACE.value != '') {
            SYT_ChangeFldClass_New('NEW_LOAD_PLACE', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_LOAD_PLACE', 'O');
        }
        //for 44E
        if (document.MAINFORM.NEW_LOAD_PORT.value != '') {
            SYT_ChangeFldClass_New('NEW_LOAD_PORT', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_LOAD_PORT', 'O');
        }
        //for 44F
        if (document.MAINFORM.NEW_DEST_PORT.value != '') {
            SYT_ChangeFldClass_New('NEW_DEST_PORT', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_DEST_PORT', 'O');
        }
        //for 44B
        if (document.MAINFORM.NEW_DEST_PLACE.value != '') {
            SYT_ChangeFldClass_New('NEW_DEST_PLACE', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_DEST_PLACE', 'O');
        }
        //for 44C
        if (document.MAINFORM.NEW_LTST_SHIP_DT.value != '') {
            SYT_ChangeFldClass_New('NEW_LTST_SHIP_DT', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_LTST_SHIP_DT', 'O');
        }
        //for 44D
        if (document.MAINFORM.NEW_SHIP_PRD.value != '') {
            SYT_ChangeFldClass_New('NEW_SHIP_PRD', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_SHIP_PRD', 'O');
        }
        //for 45A
        if (document.MAINFORM.NEW_GOODS_DESC.value != '') {
            SYT_ChangeFldClass_New('NEW_GOODS_DESC', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_GOODS_DESC', 'O');
        }
        //for 46A
        if (document.MAINFORM.NEW_DOC_REQ.value != '') {
            SYT_ChangeFldClass_New('NEW_DOC_REQ', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_DOC_REQ', 'O');
        }
        //for 47A
        if (document.MAINFORM.NEW_ADDIT_CONDITION.value != '') {
            SYT_ChangeFldClass_New('NEW_ADDIT_CONDITION', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_ADDIT_CONDITION', 'O');
        }
        //for 78
        if (document.MAINFORM.NEW_INSTR_TO_PAY_BK.value != '') {
            SYT_ChangeFldClass_New('NEW_INSTR_TO_PAY_BK', 'P');
        } else {
            SYT_ChangeFldClass_New('NEW_INSTR_TO_PAY_BK', 'O');
        }
        //for 72
        if (document.MAINFORM.INCOMING_TAG_72.value != '') {
            SYT_ChangeFldClass_New('INCOMING_TAG_72', 'P');
        } else {
            SYT_ChangeFldClass_New('INCOMING_TAG_72', 'O');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_DETRMNTL_FLG = function() {
    try {
        SYM_EPLC_M_DETRMNTL_FLG(document.MAINFORM.DEC_AMT, document.MAINFORM.OLD_EXPIRY_DT, document.MAINFORM.NEW_EXPIRY_DT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_DRWE_SW_TAG = function() {
    try {
        var arr_BIC; // Utility Auto Fix Comments
        arr_BIC = new Array(document.MAINFORM.DRWE_SW_ADD);
        SYM_EPLC_M_SW_TAG(arr_BIC);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_GetBKInfoByBIC = function() {
    try {
        //for Issuing Bank
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value != '') {
            SYT_GetBKInfoByBIC(document.MAINFORM.ISSUE_BK_SW_ADD);
        }
        //for Available With Bank
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value != '') {
            SYT_GetBKInfoByBIC(document.MAINFORM.AVAL_WT_BK_SW_ADD);
        }
        //for Advise Through Bank
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value != '') {
            SYT_GetBKInfoByBIC(document.MAINFORM.ADV_THU_BK_SW_ADD);
        }
        //for Reimbursing Bank
        if (document.MAINFORM.REIM_BK_SW_ADD.value != '') {
            SYT_GetBKInfoByBIC(document.MAINFORM.REIM_BK_SW_ADD);
        }
        //for First Advising Bank
        if (document.MAINFORM.TRM_TO_BK_SW_ADD.value != '') {
            SYT_GetBKInfoByBIC(document.MAINFORM.TRM_TO_BK_SW_ADD);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_ISSUE_BK_CHG = function() {
    try {
        SYM_EPLC_M_ISSUE_BK_CHG(document.MAINFORM.TEMP_ISSUE_BK_CHG.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_TenorInformation = function() {
    try {
        //Disable tenor;
        SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_PARTY_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, 'P');
        SYT_DisableField(document.MAINFORM.DRWE_ID_BTN);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_M_CHK_AMD_DT_EXP_DT = function() {
    try {
        var nDays; // Utility Auto Fix Comments
        nDays = SYS_GetSubDays(document.MAINFORM.AMD_DT.name, document.MAINFORM.LTST_SHIP_DT.name);
        if (nDays <= 0) {
            SYS_CheckError(document.MAINFORM.LTST_SHIP_DT, "Latest shipment date should be later than today!");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_CONF_BAL = function() {
    try {
        SYM_EPLC_M_NEW_CONF_BAL(document.MAINFORM.NEW_LC_BAL.value, document.MAINFORM.OUR_ENG.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_LC_AMT = function() {
    try {
        SYM_EPLC_M_NEW_LC_AMT(document.MAINFORM.OLD_LC_AMT.value, document.MAINFORM.INC_AMT.value, document.MAINFORM.DEC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_LC_BAL = function() {
    try {
        var BAL_GAP; // Utility Auto Fix Comments
        var DEC_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var NEW_LC_BAL; // Utility Auto Fix Comments
        var NEW_LC_BAL_NO_DRAW; // Utility Auto Fix Comments
        var NEW_POS_TOL; // Utility Auto Fix Comments
        var OLD_LC_AMT; // Utility Auto Fix Comments
        var OLD_LC_BAL; // Utility Auto Fix Comments
        var OLD_LC_BAL_NO_DRAW; // Utility Auto Fix Comments
        var OLD_POS_TOL; // Utility Auto Fix Comments
        //eddit by zoe 20090115
        OLD_LC_AMT = Math.max(0, SYS_BeFloat(document.MAINFORM.OLD_LC_AMT.value));
        OLD_POS_TOL = SYS_BeFloat(document.MAINFORM.OLD_POS_TOL.value) / 100;
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        NEW_POS_TOL = SYS_BeFloat(document.MAINFORM.NEW_POS_TOL.value) / 100;
        if (NEW_POS_TOL == 0 && document.MAINFORM.NEW_AMT_SPEC.value == '') {
                NEW_POS_TOL = SYS_BeFloat(document.MAINFORM.OLD_POS_TOL.value) / 100;
            }
        //call OLD_LC_BAL_NO_DRAW and NEW_LC_BAL_NO_DRAW without considering drawing
        OLD_LC_BAL_NO_DRAW = OLD_LC_AMT * (1 + OLD_POS_TOL);
        NEW_LC_BAL_NO_DRAW = (OLD_LC_AMT + INC_AMT - DEC_AMT) * (1 + NEW_POS_TOL);
        BAL_GAP = NEW_LC_BAL_NO_DRAW - OLD_LC_BAL_NO_DRAW;

        //cal NEW_LC_BAL with LC_BAL in Master Table (Drawing considered)
        OLD_LC_BAL = Math.max(0, SYS_BeFloat(document.MAINFORM.OLD_LC_BAL.value));
        NEW_LC_BAL = Math.max(0, OLD_LC_BAL + BAL_GAP);
        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_BAL);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_OUR_ENG = function() {
    try {
        SYM_EPLC_OUR_ENG_BY_CONF_INSTR(document.MAINFORM.CONF_INSTR.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_LC_BY_onchange = function() {
    try {
        //SYF_EPLC_CLASS_BY_ADV_LC_BY();
        SYM_EPLC_M_CLASS_TRM_TO_BK();
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function() {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function() {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function() {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AMD_DT_onchange = function() {
    try {
        SYM_EPLC_CAL_PAID_CFM_COMM();
        SYM_EPLC_INIT_UNPAID_CONF_COMM();
        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();
        SHOW_HIDE_SYND_ACT_NOTES_TEMP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('APPL_ID', 'APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_BY_onchange = function() {
    try {
        SYM_EPLC_CHK_AVAL_BY();
        SYM_EPLC_Hidden_Mixpay_Separator();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function() {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function() {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function() {
    try {
        SYT_CHG_INIT("SYF_EPLC_CHG_INIT_RUN");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function() {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function() {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function() {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function() {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function() {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_ADDED_onchange = function() {
    try {
        SYF_EPLC_NEW_CONF_BAL();
        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();

        SHOW_HIDE_SYND_ACT_NOTES_TEMP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_BAL_onchange = function() {
    try {
        SYF_EPLC_CAL_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_INSTR_onchange = function() {
    try {
        SYM_EPLC_CONF_INSTR_AMD();
        SYF_EPLC_OUR_ENG();
        EEHtml.fireEvent(document.MAINFORM.R_COLLAT_TP, 'onchange');

        SHOW_HIDE_SYND_ACT_NOTES_TEMP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_PCT_onchange = function() {
    try {
        SYM_EPLC_CAL_CONF_BAL_BY_PERCENT_AMD();
        EEHtml.fireEvent(document.MAINFORM.R_COLLAT_TP, 'onchange');
        EEHtml.fireEvent(t.MAINFORM.R_COLLAT_TP, 'onchange');

        SHOW_HIDE_SYND_ACT_NOTES_TEMP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DEC_AMT_onchange = function() {
    try {
        if (document.MAINFORM.DEC_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DEC_AMT.value = 0;
        }



        SYF_EPLC_CHK_32B33B();
        SYF_EPLC_DETRMNTL_FLG();
        SYF_EPLC_NEW_LC_AMT();
        SYF_EPLC_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');

        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();

        EEHtml.fireEvent(document.MAINFORM.R_COLLAT_TP, 'onchange');

        SHOW_HIDE_SYND_ACT_NOTES_TEMP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFTS_AT_onchange = function() {
    try {
        SYF_EPLC_CLASS_42C42a();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD1_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD2_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD3_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('DRWE_ID', 'DRWE_ID', 'CLASS_42C42a');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_NM_onchange = function() {
    try {
        var nSYS_ORG_FUNCTION_SHORT_NAME; // Utility Auto Fix Comments
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_TAG));
        nSYS_ORG_FUNCTION_SHORT_NAME = SYS_ORG_FUNCTION_SHORT_NAME;
        switch (nSYS_ORG_FUNCTION_SHORT_NAME) {
            case "AdvLC":
            case "AdvLCOneStep":
            case "AmdOneStep":
            case "Proc700After705":
            case "ProcMT700X":
            case "ProcMT707":
            case "RegAmd":
            case "RegisterDocsnot":
            case "RegLC":
            case "RegLCAfter705":
                CLASS_42C42a();
                break;
            default:
                return;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_PARTY_ID_onchange = function() {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_EXPIRY_DT_onchange = function() {
    try {
        SYF_EPLC_CHK_LTST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INC_AMT_onchange = function() {
    try {
        SYF_EPLC_NEW_LC_AMT();
        SYF_EPLC_CHK_32B33B();
        SYF_EPLC_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');

        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();

        SHOW_HIDE_SYND_ACT_NOTES_TEMP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function() {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_AMT_SPEC_onchange = function() {
    try {
        SYF_EPLC_CLASS_BY_NEW_39B();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ACNO_onchange = function() {
    try {
        SYM_EPLC_M_AMD_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('NEW_BENE_ID', 'NEW_BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ORDER_POST_onchange = function() {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_CONF_BAL_onchange = function() {
    try {
        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_EXPIRY_DT_onchange = function() {
    try {
        SYF_EPLC_DETRMNTL_FLG();
        SYF_EPLC_CHK_LTST_SHIP_DT();
        SYM_EPLC_M_CHK_TRX_DT_NEW_EXP_DT();
        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_LC_AMT_onchange = function() {
    try {
        SYF_EPLC_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_LC_BAL_onchange = function() {
    try {
        SYF_EPLC_NEW_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_LTST_SHIP_DT_onchange = function() {
    try {
        SYF_EPLC_M_CHK_AMD_DT_EXP_DT();
        SYF_EPLC_CHK_LTST_SHIP_DT();
        SYF_EPLC_CHK_SHIP_PRD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_PARTIAL_SHIP_onchange = function() {
    try {
        SYF_EPLC_CLASS_BY_43P_NEW();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_POS_TOL_onchange = function() {
    try {
        SYF_EPLC_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');

        EEHtml.fireEvent(document.MAINFORM.R_COLLAT_TP, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_SHIP_PRD_onchange = function() {
    try {
        SYF_EPLC_CHK_SHIP_PRD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_TNSHIP_onchange = function() {
    try {
        SYF_EPLC_CLASS_BY_43T_NEW();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OLD_BENE_ID_onchange = function() {
    try {
        SYS_GetCUBK('OLD_BENE_ID', 'OLD_BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OLD_EXPIRY_DT_onchange = function() {
    try {
        SYF_EPLC_DETRMNTL_FLG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OLD_LC_AMT_onchange = function() {
    try {
        SYF_EPLC_NEW_LC_BAL();
        SYF_EPLC_NEW_LC_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ENG_onchange = function() {
    try {
        SYM_EPLC_CONF_INSTR_AMD();
        SYF_EPLC_NEW_CONF_BAL();
        SYF_EPLC_CLASS_BY_OUR_ENG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD1_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD2_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD3_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('REIM_BK_ID', 'REIM_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_NM_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_POST_onchange = function() {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_PARTY_ID_onchange = function() {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TEMP_ISSUE_BK_CHG_onchange = function() {
    try {
        if (document.MAINFORM.TEMP_ISSUE_BK_CHG.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.TEMP_ISSUE_BK_CHG.value = 0;
        }

        SYF_EPLC_ISSUE_BK_CHG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_DAYS_onchange = function() {
    try {
        SYM_EPLC_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_TYPE_onchange = function() {
    try {
        SYF_EPLC_CLASS_BY_TENOR_TYPE();
        SYM_EPLC_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD1_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD2_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD3_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('TRM_TO_BK_ID', 'TRM_TO_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_NM_onchange = function() {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_NO_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_POST_onchange = function() {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_SW_ADD_onchange = function() {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TTL_PRES_AMT_onchange = function() {
    try {
        SYF_EPLC_NEW_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function() {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function() {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function() {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function() {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function() {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('DRWE_ADD', 'DRWE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_BTN_onclick = function() {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function() {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('NEW_BENE_ADD', 'NEW_BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ID_BTN_onclick = function() {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('NEW_BENE_POST_ADD', 'NEW_BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('REIM_BK_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_BTN_onclick = function() {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('REIM_BK_POST_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('TRM_TO_BK_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_BTN_onclick = function() {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK('TRM_TO_BK_POST_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function() {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT707.js", e);
    }
}