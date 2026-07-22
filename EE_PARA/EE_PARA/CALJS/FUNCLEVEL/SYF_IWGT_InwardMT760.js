var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CORR_MED1_onchange = function(event) {
    try {
        SYM_IWGT_MPO_APPL_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Appl_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
        SYM_IWGT_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_BENE_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
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
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYM_IWGT_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
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
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Instructing_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_ADD();
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_CORR_MED_onchange = function(event) {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" && SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" && SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {
            SYM_IWGT_MPO_AMD_DTL_OUT767();

        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "InwardAdviseGtee") {
            SYM_IWGT_MPO_X760_DETL_77C();
        }
        SYM_IWGT_MPO_SEND_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Send_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_InwardMT760.js", e);
    }
}