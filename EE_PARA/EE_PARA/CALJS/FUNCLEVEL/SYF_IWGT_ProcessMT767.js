var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_CLERK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.CURRNT_STATUS.value = 'RegInwardAmend';
        document.MAINFORM.NXT_STATUS.value = 'Amendment';
        document.MAINFORM.CLS_FLG.value = 'NO';
        SYT_ChangeFldClass(document.MAINFORM.AMD_NON_STD_WORDNG, 'P');
        document.MAINFORM.NEW_EXPIRY_RVW_DT.value = document.MAINFORM.EXPIRY_DT.value;

        document.MAINFORM.NEW_GTEE_AMT.value = document.MAINFORM.GTEE_AMT.value;
        document.MAINFORM.TEMP_NEW_GTEE_BAL.value = document.MAINFORM.GTEE_BAL.value;
        document.MAINFORM.APPL_CUST_BK.value = 'Bank';
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYT_ShowBlankRow('APPL_BRCH_blankrow', 2);
        SYT_ShowBlankRow('APPL_REF_blankRow', 2);
        SYT_ShowBlankRow('SEND_TO_blankrow', 2);
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYM_IWGT_MPO_APLB_RULE_NARR();
        SYM_IWGT_MPO_DEC_AMT_onclick();
        SYM_IWGT_MPO_INC_AMT_onclick();
        lbi_IWGT_BENE_GTEE_IntFieldClass();
        IWGT_APPL_BRCH_GTEE();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.AMD_REF.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_CAL_NEW_GTEE_AMT = function() {
    try {
        //added by zoe 20090323
        NEW_GTEE_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value) + SYS_BeFloat(document.MAINFORM.INC_AMT.value) - SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        document.MAINFORM.NEW_GTEE_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, NEW_GTEE_AMT);
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_CAL_TEMP_NEW_GTEE_BAL = function() {
    try {
        document.MAINFORM.TEMP_NEW_GTEE_BAL.value = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value) + SYS_BeFloat(document.MAINFORM.INC_AMT.value) - SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        document.MAINFORM.TEMP_NEW_GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.TEMP_NEW_GTEE_BAL.value);
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S('AdviceForBankCust');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_onchange = function() {
    try {
        if (document.MAINFORM.ADV_BK_ID.value == '') {
            document.MAINFORM.ADV_BK_NM.value = '';
            document.MAINFORM.ADV_BK_ADD1.value = '';
            document.MAINFORM.ADV_BK_ADD2.value = '';
            document.MAINFORM.ADV_BK_ADD3.value = '';
            document.MAINFORM.ADV_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_BK_TLX.value = '';
            document.MAINFORM.ADV_BK_NOTES.value = '';
            document.MAINFORM.ADV_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_BK_SW_TAG.value = '';
            document.MAINFORM.ADV_BK_CORR_MED.value = 'None';
        } else {
            SYS_GetCUBK('ADV_BK_ID', 'ADV_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ID_onchange = function() {
    try {
        if (document.MAINFORM.ADV_THU_BK_ID.value == '') {
            document.MAINFORM.ADV_THU_BK_NM.value = '';
            document.MAINFORM.ADV_THU_BK_ADD1.value = '';
            document.MAINFORM.ADV_THU_BK_ADD2.value = '';
            document.MAINFORM.ADV_THU_BK_ADD3.value = '';
            document.MAINFORM.ADV_THU_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_TLX.value = '';
            document.MAINFORM.ADV_THU_BK_NOTES.value = '';
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = '';
            document.MAINFORM.ADV_THU_BK_CORR_MED.value = 'None';
        } else {
            SYS_GetCUBK('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AMD_DT_onchange = function() {
    try {
        SYM_IWGT_Check_NEW_EXPIRY_RVW_DT_AMD_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CORR_MED1_onchange = function() {
    try {
        SYM_IWGT_MPO_APPL_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CUST_BK_onchange = function() {
    try {
        SYM_IWGT_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_Appl_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
        SYM_IWGT_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CONST_REQ_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_CONST_REQ();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CORR_MED_onchange = function() {
    try {
        SYM_IWGT_MPO_BENE_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CUST_BK_onchange = function() {
    try {
        SYM_IWGT_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_onchange = function() {
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
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYM_IWGT_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ID_onchange = function() {
    try {
        SYM_IWGT_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_SW_ADD_onchange = function() {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 11 || document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.CONF_BK_SW_ADD.value = document.MAINFORM.CONF_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DEC_AMT_onchange = function() {
    try {
        if (document.MAINFORM.DEC_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DEC_AMT.value = 0;
        }



        SYM_IWGT_MPO_DEC_AMT_onclick();
        SYF_IWGT_CAL_NEW_GTEE_AMT();
        SYF_IWGT_CAL_TEMP_NEW_GTEE_BAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIVERY_TO_onchange = function() {
    try {
        if (document.MAINFORM.DELIVERY_TO.value != '') {
            document.MAINFORM.DELIVERY_TO_CODE.value = '/' + document.MAINFORM.DELIVERY_TO.value + '/';
            if (document.MAINFORM.DELIVERY_TO.value == 'OTHR') {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'O');
            }
        } else {
            document.MAINFORM.DELIVERY_TO_CODE.value = '';
            document.MAINFORM.DELIVERY_TO_NM_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIVERY_TO_CODE_onchange = function() {
    try {
        if (document.MAINFORM.DELIVERY_TO_AMD_CODE.value != '') {
            document.MAINFORM.DELIVERY_TO_CODE.value = '/' + document.MAINFORM.DELIVERY_TO_AMD_CODE.value + '/';
            if (document.MAINFORM.DELIVERY_TO_AMD_CODE.value == 'OTHR') {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'O');
            }
        } else {
            document.MAINFORM.DELIVERY_TO_CODE.value = '';
            document.MAINFORM.DELIVERY_TO_NM_ADD_AMD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_EXPIRY_DT_onchange = function() {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INC_AMT_onchange = function() {
    try {
        if (document.MAINFORM.INC_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.INC_AMT.value = 0;
        }


        SYM_IWGT_MPO_INC_AMT_onclick();
        SYF_IWGT_CAL_NEW_GTEE_AMT();
        SYF_IWGT_CAL_TEMP_NEW_GTEE_BAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INWARD_RCV_DT_onchange = function() {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_NEW_Bene_All();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_NEW_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_NEW_BENE_SW_TAG();
        SYM_IWGT_Cal_NEW_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_EXPIRY_RVW_DT_onchange = function() {
    try {
        SYM_IWGT_Check_NEW_EXPIRY_RVW_DT_AMD_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_CORR_MED_onchange = function() {
    try {
        SYM_IWGT_MPO_RCV_FM_BK_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_RCV_FM_BK_CORR_MED();
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "InwardAdviseGtee" || SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {

            SYM_IWGT_Cal_RCV_FM_BK_CORR_MED();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_Instructing_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_ADD();
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_onchange = function() {
    try {
        SYM_IWGT_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_CORR_MED_onchange = function() {
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
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_Send_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_BK_SW_ADD();
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THRU_BK_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_APPL_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_APPL();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_MAIL_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_MAIL_BTN_onclick = function() {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_SQL_CONF_BANK();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_NEW_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_RCV_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_MAIL_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_RCV_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_MAIL_ADD1_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function() {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_ProcessMT767.js", e);
    }
}