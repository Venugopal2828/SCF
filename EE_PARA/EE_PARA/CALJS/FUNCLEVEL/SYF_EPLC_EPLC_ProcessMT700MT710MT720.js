var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT();
        SYF_EPLC_CAL_LC_BAL();
        SYF_EPLC_OUR_ENG();
        SYF_EPLC_CAL_CONF_BAL();
        // for MESG_TYPE
        if (document.MAINFORM.MESG_TYPE.value == 'MT700') {
            document.MAINFORM.SENDER_REF.value = document.MAINFORM.LC_NO.value;
        }

        document.MAINFORM.ISSUE_BK_CHG_CCY.value = document.MAINFORM.LC_CCY.value;
        SYM_EPLC_ADV_DEFAULT_VALUE();

        //for ISSUE_BK details
        SYT_GetBKInfoByBIC(document.MAINFORM.ISSUE_BK_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.APPL_BK_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.DRWE_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.REIM_BK_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.ADV_THU_BK_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.AVAL_WT_BK_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.ISSUE_BK_52_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.TRM_TO_BK_SW_ADD);

        document.MAINFORM.ADV_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.REV_LC.value = 'NO';
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_LC_BAL = function() {
    try {

        SYM_EPLC_CAL_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_PARTIES = function() {
    try {

        var arr_Fld; // Utility Auto Fix Comments
        var arr_FldClass; // Utility Auto Fix Comments
        arr_Fld = new Array(document.MAINFORM.APPL_ADD2, document.MAINFORM.BENE_ADD2, document.MAINFORM.BENE_CORR_MED, document.MAINFORM.ISSUE_BK_NM, document.MAINFORM.ISSUE_BK_ADD2, document.MAINFORM.ISSUE_BK_SW_ADD);
        arr_FldClass = new Array("O", "O", "O", "M", "O", "M");
        SYT_ChangeFldStringClass(arr_Fld, arr_FldClass);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYF_EPLC_MPO_PARTIES();
        SYM_EPLC_M_CLASS_TRM_TO_BK();
        SYF_EPLC_MPO_CONTACT_FLAG();
        SYF_EPLC_MPO_DRWE_NM();
        SYF_EPLC_MPO_PARTIAL_SHIP();
        SYF_EPLC_MPO_TNSHIP();
        SYF_EPLC_MPO_40E();
        SYF_EPLC_MPO_TENOR_TYPE_NARR();
        SYF_EPLC_MPO_NEG_POL();
        SYM_EPLC_M_CLASS_BY_BENE_CORR_MED();
        SYF_EPLC_SNEDER_REF();
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        //SYM_EPLC_CHK_AVAL_BY_INIT();

        SYM_EPLC_M_MPO_CONF_BAL();
        SYM_EPLC_Hidden_Mixpay_Separator();
        SYM_EPLC_MPO_REVOLVE_LC_INFO();

          if (document.MAINFORM.CONF_INSTR.value == "CONFIRM") {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M'); //Add on 20111129 for SWIFT 2018 Requirement enhancement;
        } else if (document.MAINFORM.CONF_INSTR.value == 'WITHOUT') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M'); //Add on 20111129 for SWIFT 2018 Requirement enhancement;
        }
        MPO_LIMITS_SECTION();
        MPO_RISK_TAB_BY_FUNCTION();
        SYM_EPLC_M_CLASS_BY_MESG_TYPE(document.MAINFORM.MESG_TYPE.value);
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
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
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CONTRACT_FLAG = function() {
    try {

        if (document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION") {

            document.MAINFORM.CONTRACT_FLAG.value = "NO";
        } else {
            document.MAINFORM.CONTRACT_FLAG.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_REV_LC = function() {
    try {

        SYM_EPLC_M_CHK_REV_LC(document.MAINFORM.REV_LC, document.MAINFORM.OUR_ENG);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_DRWE_NM = function() {
    try {

        SYM_EPLC_M_CLASS_42C42a(document.MAINFORM.DRAFTS_AT.value, document.MAINFORM.DRWE_NM.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_LTST_SHP_DT = function() {
    try {

        return SYM_EPLC_M_CHK_LTST_SHIP_DT(document.MAINFORM.LTST_SHIP_DT, document.MAINFORM.EXPIRY_DT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_PARTIAL_SHIP = function() {
    try {

        SYM_EPLC_M_CLASS_BY_43P(document.MAINFORM.PARTIAL_SHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_TNSHIP = function() {
    try {

        SYM_EPLC_M_CLASS_BY_43T(document.MAINFORM.TNSHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_40E = function() {
    try {

        SYM_EPLC_M_CLASS_BY_40E(document.MAINFORM.APLB_RULE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_TENOR_TYPE_NARR = function() {
    try {

        SYM_EPLC_M_CLASS_BY_TENOR_TYPE(document.MAINFORM.TENOR_TYPE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return SYF_EPLC_CHK_LTST_SHP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_Get_REF_20 = function() {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        node = SYS_getDoByXpath("AdviceForBankCust");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'BANK_N90_REF_20', document.MAINFORM.C_MAIN_REF.value);
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_42C42a = function() {
    try {

        SYM_EPLC_M_CLASS_42C42a(document.MAINFORM.DRAFTS_AT.value, document.MAINFORM.DRWE_NM.value);
        SYM_EPLC_CALL_FOR_DRAFTS_AT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_SHIP_PRD = function() {
    try {

        SYM_EPLC_M_CHK_SHP_PRD(document.MAINFORM.LTST_SHIP_DT, document.MAINFORM.SHIP_PRD);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_SNEDER_REF = function() {
    try {

        SYM_EPLC_ADV_SENDER_REF(document.MAINFORM.MESG_TYPE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_OUR_ENG = function() {
    try {

        SYM_EPLC_OUR_ENG_BY_CONF_INSTR(document.MAINFORM.CONF_INSTR.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_DRWE_SW_TAG = function() {
    try {

        var arr_BIC; // Utility Auto Fix Comments
        arr_BIC = new Array(document.MAINFORM.DRWE_SW_ADD);
        SYM_EPLC_M_SW_TAG(arr_BIC);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_AFTER_BENE_ID = function() {
    try {

        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_CONTACT_FLAG = function() {
    try {

        if (document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION") {
            SYT_ChangeFldClass(document.MAINFORM.CONTRACT_FLAG, "M");
        } else {

            SYT_ChangeFldClass(document.MAINFORM.CONTRACT_FLAG, "B");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_loadDoDataComplete = function() {
    try {

        SYM_EPLC_addPaymentRecord();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_NEG_POL = function() {
    try {

        SYM_EPLC_M_CLASS_BY_39B(document.MAINFORM.AMT_SPEC.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_LC_BY_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_TRM_TO_BK();
        //SYM_EPLC_M_CLASS_BY_ADV_LC_BY(document.MAINFORM.ADV_LC_BY.value);
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
        if (SYS_ORG_FUNCTION_NAME == 'PROCESS_700701720') {
            SYF_EPLC_FORM_OF_LC_MT710();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AMT_SPEC_onchange = function(event) {
    try {
        SYF_EPLC_MPO_NEG_POL();
        SYM_EPLC_CAL_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APLB_RULE_onchange = function(event) {
    try {
        SYF_EPLC_MPO_40E();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_BK_ADD', 'APPL_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('APPL_BK_ID', 'APPL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_EPLC_M_STP_BANK_LOOKUP(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('APPL_ID', 'APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_BY_onchange = function(event) {
    try {
        SYM_EPLC_CHK_AVAL_BY();
        SYM_EPLC_Hidden_Mixpay_Separator();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_ADD1_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_ADD2_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_ADD3_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_BENE_CORR_MED();
        SYM_EPLC_Set_BENE_CORR_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_EMAIL_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_EMAIL_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_FAX_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_FAX_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_LANG_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_LANG_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_MAIL_ADD_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_POSTADD_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_REF_NO_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_REF_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_INSTR_onchange = function(event) {
    try {
        SYF_EPLC_OUR_ENG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFTS_AT_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_42C42a();
        SYF_EPLC_MPO_DRWE_NM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', 'DRWE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('DRWE_ID', 'DRWE_ID', 'CLASS_42C42a');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_NM_onchange = function(event) {
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
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_LTST_SHP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_52_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_52_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_52_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_52_ADD', 'ISSUE_BK_52_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_52_ID', 'ISSUE_BK_52_ID'); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ID_BTN_onclick = function(event) {
    try {
        SYM_EPLC_M_STP_BANK_LOOKUP(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_52_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LC_BAL_onchange = function(event) {
    try {
        SYF_EPLC_CAL_CONF_BAL();
        EEHtml.fireEvent(document.MAINFORM.CONF_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LC_CCY_onchange = function(event) {
    try {
        document.MAINFORM.ISSUE_BK_CHG_CCY.value = document.MAINFORM.LC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LTST_SHIP_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_LTST_SHP_DT();
        SYF_EPLC_CHK_SHIP_PRD();
        SYM_EPLC_M_CHK_TRX_DT_LTST_SHIP_DT();
        SYM_EPLC_CHK_LTST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_MESG_TYPE_onchange = function(event) {
    try {
        SYF_EPLC_SNEDER_REF();
        EEHtml.fireEvent(document.MAINFORM.SENDER_REF, 'onchange');
        SYM_EPLC_M_CLASS_BY_MESG_TYPE(document.MAINFORM.MESG_TYPE.value);
        SYM_EPLC_MT710_FIRST_ADVICE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ENG_onchange = function(event) {
    try {
        SYF_EPLC_MPO_CONTACT_FLAG();
        SYF_EPLC_CAL_CONF_BAL();
        SYF_EPLC_CHK_REV_LC();
        SYF_EPLC_CONTRACT_FLAG();
        EEHtml.fireEvent(document.MAINFORM.CONF_BAL, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CONTRACT_FLAG, 'onchange'); // Utility Auto Fix Comments
        SYM_EPLC_M_MPO_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ROLE_onchange = function(event) {
    try {
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
        EEHtml.fireEvent(document.MAINFORM.ADV_LC_BY, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PARTIAL_SHIP_onchange = function(event) {
    try {
        SYF_EPLC_MPO_PARTIAL_SHIP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_POS_TOL_onchange = function(event) {
    try {
        SYM_EPLC_CAL_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('REIM_BK_ID', 'REIM_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_POST_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REV_LC_onchange = function(event) {
    try {
        SYM_EPLC_MPO_REVOLVE_LC_INFO();
        SYF_EPLC_CHK_REV_LC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SHIP_PRD_onchange = function(event) {
    try {
        SYF_EPLC_CHK_SHIP_PRD();
        SYM_EPLC_CHK_SHIP_PRD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_DAYS_onchange = function(event) {
    try {
        SYM_EPLC_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_TYPE_onchange = function(event) {
    try {
        SYF_EPLC_MPO_TENOR_TYPE_NARR();
        SYM_EPLC_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TNSHIP_onchange = function(event) {
    try {
        SYF_EPLC_MPO_TNSHIP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('TRM_TO_BK_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('TRM_TO_BK_ID', 'TRM_TO_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('TRM_TO_BK_POST_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT700MT710MT720.js", e);
    }
}