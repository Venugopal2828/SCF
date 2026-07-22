var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_GTEE_MPO_SEND_TO_RCV_INFO_INIT();
        SYF_GTEE_MPO_SW_FORM_AMD_INIT();
        SYF_GTEE_MPO_COUNTR_GTEE_AMD();
        //SYT_ShowBlankRow('BENE_blankRow',1);
        SYT_ShowBlankRow('INDE', 1);

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);

        SYM_GTEE_MPO_BENE_CORR_MED();
        SYM_GTEE_MPO_SEND_TO_CORR_MED();
        SYM_GTEE_MPO_APPL_SW_TAG();
        SYM_GTEE_MPO_BENE_SW_TAG();
        SYM_GTEE_MPO_INDEMN_SW_TAG();
        SYM_GTEE_MPO_SEND_TO_SW_TAG();
        SYF_GTEE_MPO_ACPT_REJ();
        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM", "GTEE_CCY");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYM_GTEE_Chg_Calculate_Amd_Comm();
            //edit by amy for chg policy in 20120613
            //SYF_GTEE_Calculate_GTEE_COMM_BY_CHG_POLICY();
            SYM_GTEE_Chg_Calculate_POST();
            SYM_GTEE_Chg_Calculate_SWIFT();
            SYM_GTEE_Chg_Calculate_Other();
            SYM_GTEE_Chg_Calculate_COURIER_CHG();
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
            CHG_setAllCollCcy(document.MAINFORM.GTEE_CCY.value);
            CHG_setAllChargeAt('1');
            SYT_Set_TRXCCY2CHG();
        }
        SYF_GTEE_ChangeFldClass();
        SYT_Cal_C_TRANS_CODE();
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_BENE_SW_TAG();
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_SEND_TO_SW_TAG();

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.SEND_TO_REF.value;
        lbi_LG_IssueParty_Amd_InitFldClass();
        SYM_GTEE_MPO_APPL_CORR_MED1();
        SYM_GTEE_Cal_ADD_BUTTON();
        SYM_GTEE_MPO_INDEMN_CORR_MED();
        SYT_DisableDivClass('C_div');
        SYT_DisableDivClass('I_div');
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_check_DEC_AMT = function() {
    try {

        var DEC_AMT; // Utility Auto Fix Comments
        var GTEE_AMT; // Utility Auto Fix Comments
        var GTEE_BAL; // Utility Auto Fix Comments
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        GTEE_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        GTEE_BAL = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value);
        if (DEC_AMT > GTEE_AMT || DEC_AMT > GTEE_BAL) {
            SYS_CheckError(document.MAINFORM.DEC_AMT, "Decrease Amount should between Guarantee Amount and Guarantee Balance!");
            document.MAINFORM.DEC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CORR_MED1_onchange = function(event) {
    try {
        SYM_IWGT_MPO_APPL_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Appl_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_BTN_onclick = function(event) {
    try {

    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_NM_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
        SYM_IWGT_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD1_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD2_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_BENE_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Bene_All();
        SYM_IWGT_Cal_ADD_BUTTON();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim") {
            var obj = EEHtml.getElementById('CHG_FLD_LOCAL_CHG_TOTAL_CUST_PAY_AMT');
            if (obj) {
                SYM_IWGT_Chg_Screen_local();
                SYM_IWGT_Chg_Calculate_POST();
                SYM_IWGT_Chg_Calculate_SWIFT();
            }
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYM_IWGT_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_RCV_FM_BK_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_RCV_FM_BK_CORR_MED();
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "InwardAdviseGtee" || SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {

            SYM_IWGT_Cal_RCV_FM_BK_CORR_MED();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Instructing_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_NM_onchange = function(event) {
    try {
        if (SYM_GTEE_CHK_NEG(document.MAINFORM.NEW_GTEE_AMT.value)) {
            alert("New Guarantee amount should not accept negative values");
            document.MAINFORM.NEW_GTEE_AMT.value = '';
        }
        document.MAINFORM.NEW_BASE_BAL.value = document.MAINFORM.NEW_GTEE_AMT.value;
        SYM_GTEE_Cal_INC_AMT_DEC_AMT();
        SYM_GTEE_Chg_Calculate_Amd_Comm();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_ADD();
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_CORR_MED_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Send_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT767.js", e);
    }
}