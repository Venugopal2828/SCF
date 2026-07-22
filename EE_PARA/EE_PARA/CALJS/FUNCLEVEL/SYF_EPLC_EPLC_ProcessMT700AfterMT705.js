var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT();
        SYF_EPLC_OUR_ENG();
        //for SENDER_REF
        if (document.MAINFORM.MESG_TYPE.value == 'MT700') {
            document.MAINFORM.SENDER_REF.value = document.MAINFORM.LC_NO.value;
        }

        SYM_EPLC_CAL_LC_BAL();
        SYF_EPLC_CAL_CONF_BAL();
        document.MAINFORM.ISSUE_BK_CHG_CCY.value = document.MAINFORM.LC_CCY.value;
        SYM_EPLC_ADV_DEFAULT_VALUE();

        //for ISSUE_BK details
        SYT_GetBKInfoByBIC(document.MAINFORM.ISSUE_BK_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.APPL_BK_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.DRWE_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.ADV_THU_BK_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.REIM_BK_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.AVAL_WT_BK_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.TRM_TO_BK_SW_ADD);
        document.MAINFORM.ADV_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        return SYM_EPLC_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_REV_LC = function() {
    try {

        SYM_EPLC_M_CHK_REV_LC(document.MAINFORM.REV_LC, document.MAINFORM.OUR_ENG);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_LTST_SHP_DT = function() {
    try {

        return SYM_EPLC_M_CHK_LTST_SHIP_DT(document.MAINFORM.LTST_SHIP_DT, document.MAINFORM.EXPIRY_DT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_DRWE = function() {
    try {

        SYM_EPLC_M_CLASS_42C42a(document.MAINFORM.DRAFTS_AT.value, document.MAINFORM.DRWE_NM.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_CONTACT_FLAG = function() {
    try {

        if (document.MAINFORM.OUR_ENG.value == "ADVICE" || document.MAINFORM.OUR_ENG.value == "CONFIRMATION") {
            SYT_ChangeFldClass(document.MAINFORM.CONTRACT_FLAG, 'B');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CONTRACT_FLAG, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CONF_BAL = function() {
    try {

        if (document.MAINFORM.OUR_ENG.value == "CONFIRMATION" || document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION") {
            document.MAINFORM.CONF_BAL.value = document.MAINFORM.LC_BAL.value;
        } else {
            document.MAINFORM.CONF_BAL.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_PARTIES = function() {
    try {

        var arr_Fld_APPL = new Array(document.MAINFORM.APPL_NM, document.MAINFORM.APPL_ADD1, document.MAINFORM.APPL_ADD2, document.MAINFORM.APPL_ADD3);
        var arr_Fld_ISS = new Array(document.MAINFORM.ISSUE_BK_ID, document.MAINFORM.ISSUE_BK_ID_BTN, document.MAINFORM.ISSUE_BK_NM, document.MAINFORM.ISSUE_BK_SW_ADD, document.MAINFORM.ISSUE_BK_SW_TAG, document.MAINFORM.ISSUE_BK_ADD1, document.MAINFORM.ISSUE_BK_ADD2, document.MAINFORM.ISSUE_BK_ADD3);
        var arr_Fld_REIM = new Array(document.MAINFORM.REIM_BK_ADD1, document.MAINFORM.REIM_BK_ADD2, document.MAINFORM.REIM_BK_ADD3, document.MAINFORM.REIM_BK_ID, document.MAINFORM.REIM_BK_ID_BTN, document.MAINFORM.REIM_BK_NM, document.MAINFORM.REIM_BK_SW_ADD, document.MAINFORM.REIM_BK_SW_TAG);
        var arr_Fld_ADV = new Array(document.MAINFORM.ADV_THU_BK_NM, document.MAINFORM.ADV_THU_BK_ADD1, document.MAINFORM.ADV_THU_BK_ADD2, document.MAINFORM.ADV_THU_BK_ADD3, document.MAINFORM.ADV_THU_BK_SW_ADD, document.MAINFORM.ADV_THU_BK_CORR_MED);
        var arr_FldClass_APPL = new Array("P", "P", "P", "P");
        var arr_FldClass_ISRM = new Array("P", "P", "P", "P", "P", "P", "P", "P");
        var arr_FldClass_ADV = new Array("P", "P", "P", "P", "P", "O");
        SYT_ChangeFldStringClass(arr_Fld_APPL, arr_FldClass_APPL);
        SYT_ChangeFldStringClass(arr_Fld_ISS, arr_FldClass_ISRM);
        SYT_ChangeFldStringClass(arr_Fld_REIM, arr_FldClass_ISRM);
        SYT_ChangeFldStringClass(arr_Fld_ADV, arr_FldClass_ADV);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYF_EPLC_MPO_CONTACT_FLAG();
        SYF_EPLC_MPO_DRWE();
        SYF_EPLC_MPO_PARTIES();
        SYM_EPLC_M_CLASS_TRM_TO_BK();
        SYF_EPLC_MPO_PARTIAL_SHIP();
        SYF_EPLC_MPO_TNSHIP();
        SYF_EPLC_MPO_40E();
        SYF_EPLC_MPO_TENOR_TYPE_NARR();
        SYF_EPLC_SENDER_REF();
        SYM_EPLC_M_CLASS_BY_BENE_CORR_MED();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYM_EPLC_CHK_AVAL_BY_INIT();

        SYM_EPLC_M_MPO_CONF_BAL();
        SYM_EPLC_Hidden_Mixpay_Separator();
        SYM_EPLC_MPO_REVOLVE_LC_INFO();
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_POST_ADD_BTN, 'P');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_PARTIAL_SHIP = function() {
    try {

        SYM_EPLC_M_CLASS_BY_43P(document.MAINFORM.PARTIAL_SHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_TNSHIP = function() {
    try {

        SYM_EPLC_M_CLASS_BY_43T(document.MAINFORM.TNSHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_40E = function() {
    try {

        SYM_EPLC_M_CLASS_BY_40E(document.MAINFORM.APLB_RULE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_TENOR_TYPE_NARR = function() {
    try {

        SYM_EPLC_M_CLASS_BY_TENOR_TYPE(document.MAINFORM.TENOR_TYPE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return SYF_EPLC_CHK_LTST_SHP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_42C42a = function() {
    try {

        SYM_EPLC_M_CLASS_42C42a(document.MAINFORM.DRAFTS_AT.value, document.MAINFORM.DRWE_NM.value);
        SYM_EPLC_CALL_FOR_DRAFTS_AT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_AFTER_BENE_ID = function() {
    try {

        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_SHIP_PRD = function() {
    try {

        SYM_EPLC_M_CHK_SHP_PRD(document.MAINFORM.LTST_SHIP_DT, document.MAINFORM.SHIP_PRD);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_SENDER_REF = function() {
    try {

        SYM_EPLC_ADV_SENDER_REF(document.MAINFORM.MESG_TYPE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_OUR_ENG = function() {
    try {

        SYM_EPLC_OUR_ENG_BY_CONF_INSTR(document.MAINFORM.CONF_INSTR.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_DRWE_SW_TAG = function() {
    try {

        var arr_BIC = new Array(document.MAINFORM.DRWE_SW_ADD);
        SYM_EPLC_M_SW_TAG(arr_BIC);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CONTACT_FLAG = function() {
    try {

        if (document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION") {
            document.MAINFORM.CONTRACT_FLAG.value = "NO";
        } else {
            document.MAINFORM.CONTRACT_FLAG.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_LoadDoComplete = function() {
    try {

        var xDO = SYS_getDoByXpath("PaymentTermsHeader");
        if (xDO) {
            SYM_EPLC_addPaymentRecord();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_LC_BAL = function() {
    try {

        SYM_EPLC_CAL_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_LC_BY_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_TRM_TO_BK();
        //SYM_EPLC_M_CLASS_BY_ADV_LC_BY(document.MAINFORM.ADV_LC_BY.value);
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_EPLC_M_STP_BANK_LOOKUP(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APLB_RULE_onchange = function(event) {
    try {
        SYF_EPLC_MPO_40E();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_BK_ADD', 'APPL_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('APPL_BK_ID', 'APPL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('APPL_ID', 'APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_EPLC_M_STP_CUST_LOOKUP(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_BY_onchange = function(event) {
    try {
        SYM_EPLC_CHK_AVAL_BY();
        SYM_EPLC_Hidden_Mixpay_Separator();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_EPLC_M_STP_BANK_LOOKUP(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_BENE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID', 'AFTER_BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_EPLC_M_STP_CUST_LOOKUP(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_NM_onchange = function(event) {
    try {
        AFTER_BENE_ID();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_INSTR_onchange = function(event) {
    try {
        SYF_EPLC_OUR_ENG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFTS_AT_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_42C42a();
        SYF_EPLC_MPO_DRWE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', 'DRWE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('DRWE_ID', 'DRWE_ID', 'CLASS_42C42a');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYM_EPLC_M_STP_BANK_LOOKUP(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_NM_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_42C42a();
        SYF_EPLC_MPO_DRWE();
        SYF_EPLC_DRWE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_LTST_SHP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LC_BAL_onchange = function(event) {
    try {
        SYF_EPLC_CAL_CONF_BAL();
        EEHtml.fireEvent(document.MAINFORM.CONF_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LC_CCY_onchange = function(event) {
    try {
        document.MAINFORM.ISSUE_BK_CHG_CCY.value = document.MAINFORM.LC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LTST_SHIP_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_LTST_SHP_DT();
        SYF_EPLC_CHK_SHIP_PRD();
        SYM_EPLC_M_CHK_TRX_DT_LTST_SHIP_DT();
        SYM_EPLC_CHK_LTST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_MESG_TYPE_onchange = function(event) {
    try {
        SYF_EPLC_SENDER_REF();
        EEHtml.fireEvent(document.MAINFORM.SENDER_REF, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ENG_onchange = function(event) {
    try {
        SYF_EPLC_CAL_CONF_BAL();
        SYM_EPLC_M_MPO_CONF_BAL();
        SYF_EPLC_CHK_REV_LC();
        SYF_EPLC_CONTACT_FLAG();
        SYF_EPLC_MPO_CONTACT_FLAG();
        EEHtml.fireEvent(document.MAINFORM.CONF_BAL, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CONTRACT_FLAG, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ROLE_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.ADV_LC_BY, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PARTIAL_SHIP_onchange = function(event) {
    try {
        SYF_EPLC_MPO_PARTIAL_SHIP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_POS_TOL_onchange = function(event) {
    try {
        SYF_EPLC_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('REIM_BK_ID', 'REIM_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_EPLC_M_STP_BANK_LOOKUP(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_POST_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REV_LC_onchange = function(event) {
    try {
        SYM_EPLC_MPO_REVOLVE_LC_INFO();
        SYF_EPLC_CHK_REV_LC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SHIP_PRD_onchange = function(event) {
    try {
        SYF_EPLC_CHK_SHIP_PRD();
        SYM_EPLC_CHK_SHIP_PRD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_DAYS_onchange = function(event) {
    try {
        SYM_EPLC_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_TYPE_onchange = function(event) {
    try {
        SYF_EPLC_MPO_TENOR_TYPE_NARR();
        SYM_EPLC_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TNSHIP_onchange = function(event) {
    try {
        SYF_EPLC_MPO_TNSHIP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('TRM_TO_BK_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('TRM_TO_BK_ID', 'TRM_TO_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('TRM_TO_BK_POST_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700AfterMT705.js", e);
    }
}