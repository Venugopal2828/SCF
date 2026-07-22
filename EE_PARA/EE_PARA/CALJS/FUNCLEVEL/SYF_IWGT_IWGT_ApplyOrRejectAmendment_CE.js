var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IWGT_Cal_ACPT_REJ = function() {
    try {


        var oldBal = document.MAINFORM.GTEE_BAL.value;
        var oldAmt = document.MAINFORM.GTEE_AMT.value;
        var incAmt = document.MAINFORM.INC_AMT.value;
        var decAmt = document.MAINFORM.DEC_AMT.value;
        var Bal = 0;
        var Newamt = 0;

        if (document.MAINFORM.ACPT_REJ.value == 'Accept') {
            Bal = SYS_BeFloat(oldBal) + SYS_BeFloat(incAmt) - SYS_BeFloat(decAmt);
            Newamt = SYS_BeFloat(oldAmt) + SYS_BeFloat(incAmt) - SYS_BeFloat(decAmt);
            document.MAINFORM.TEMP_NEW_GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, Bal);
            document.MAINFORM.NEW_GTEE_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, Newamt);
        } else {
            Bal = SYS_BeFloat(oldBal);
            Newamt = SYS_BeFloat(oldAmt);
            document.MAINFORM.TEMP_NEW_GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, Bal);
            document.MAINFORM.NEW_GTEE_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, Newamt);
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CLERK_ID();

        if (document.MAINFORM.NEW_EXPIRY_PLC.value != "") {
            document.MAINFORM.TEMP_EXPIRY_PLC_NEW.value = document.MAINFORM.NEW_EXPIRY_PLC.value;
        } else {
            document.MAINFORM.TEMP_EXPIRY_PLC_NEW.value = document.MAINFORM.EXPIRY_PLC.value;
        }


        SYT_LIAB_VOUCHER();
        Cal_MSG_TYPE();
        SYF_Temp_Fields_AMD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TEMP_PART_AMT.value = document.MAINFORM.GTEE_BAL.value;
        document.MAINFORM.TEMP_LC_AMT.value = document.MAINFORM.GTEE_AMT.value;
        document.MAINFORM.TEMP_NEW_GTEE_BAL.value = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value) + SYS_BeFloat(document.MAINFORM.INC_AMT.value) - SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        document.MAINFORM.TEMP_NEW_GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.TEMP_NEW_GTEE_BAL.value);
        //for liab voucher by tracery
        document.MAINFORM.TEMP_ASSET_ACNO.value = document.MAINFORM.ASSET_ACNO.value;
        document.MAINFORM.TEMP_LIAB_ACNO.value = document.MAINFORM.LIAB_ACNO.value;
        document.MAINFORM.APPL_CUST_BK.value = 'Bank';
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_ACPT_REJ = function() {
    try {

        //Changes field type of Gtee Details fields if ACPT_REJ field is 'Accept'

        if (document.MAINFORM.ACPT_REJ.value == 'Accept') {
            SYT_ChangeFldClass(document.MAINFORM.NON_STD_WORDNG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NON_STD_WORDNG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        onChangeDiary();
        SYT_ShowBlankRow('APPL_BRCH_blankrow', 2);

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
        SYM_IWGT_MPO_APLB_RULE_NARR();
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYF_IWGT_Cal_ACPT_REJ();
        SYT_DisableDivClass('B_div');
        SYT_DisableDivClass('L_div');
        SYT_DisableDivClass('G_div');
                if (document.MAINFORM.PURP_OF_MESS_AMD.value == 'ISCA' || document.MAINFORM.PURP_OF_MESS_AMD.value == 'ICCA') {
            EEHtml.getElementById('S').style.display = '';
            SYT_EnableDivClass('S_div');
        } else {
            EEHtml.getElementById('S').style.display = 'none';
            SYT_DisableDivClass('S_div');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S('AdviceForBankCust');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ACPT_REJ_onchange = function(event) {
    try {
        SYF_IWGT_Cal_ACPT_REJ();
        SYF_IWGT_MPO_ACPT_REJ();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.SYF_Temp_Fields_AMD = function() {
    try {

        if (document.MAINFORM.NEW_BENE_ID.value != '') {
            document.MAINFORM.TEMP_BENE_ID.value = document.MAINFORM.NEW_BENE_ID.value;
        } else {
            document.MAINFORM.TEMP_BENE_ID.value = document.MAINFORM.BENE_ID.value;
        }
        if (document.MAINFORM.NEW_BENE_NM.value != '') {
            document.MAINFORM.TEMP_BENE_NM.value = document.MAINFORM.NEW_BENE_NM.value;
        } else {
            document.MAINFORM.TEMP_BENE_NM.value = document.MAINFORM.BENE_NM.value;
        }
        
        if (document.MAINFORM.NEW_BENE_ADD1.value != '') {
            document.MAINFORM.TEMP_BENE_ADD1.value = document.MAINFORM.NEW_BENE_ADD1.value;
        } else {
            document.MAINFORM.TEMP_BENE_ADD1.value = document.MAINFORM.BENE_ADD1.value;
        }
        if (document.MAINFORM.NEW_BENE_ADD2.value != '') {
            document.MAINFORM.TEMP_BENE_ADD2.value = document.MAINFORM.NEW_BENE_ADD2.value;
        } else {
            document.MAINFORM.TEMP_BENE_ADD2.value = document.MAINFORM.BENE_ADD2.value;
        }
        if (document.MAINFORM.NEW_BENE_ADD3.value != '') {
            document.MAINFORM.TEMP_BENE_ADD3.value = document.MAINFORM.NEW_BENE_ADD3.value;
        } else {
            document.MAINFORM.TEMP_BENE_ADD3.value = document.MAINFORM.BENE_ADD3.value;
        }
        if (document.MAINFORM.NEW_EXPIRY_COND.value != '') {
            document.MAINFORM.TEMP_EXPIRY_PLC_NA.value = document.MAINFORM.NEW_EXPIRY_COND.value;
        } else {
            document.MAINFORM.TEMP_EXPIRY_PLC_NA.value = document.MAINFORM.EXPIRY_COND.value;
        }
        
       if (document.MAINFORM.NEW_EXPIRY_TYPE.value != '') {
            document.MAINFORM.TEMP_TENOR_TYPE.value = document.MAINFORM.NEW_EXPIRY_TYPE.value;
        } else {
            document.MAINFORM.TEMP_TENOR_TYPE.value = document.MAINFORM.EXPIRY_TYPE.value;
        }

       if (document.MAINFORM.NEW_EXPIRY_DT.value != '') {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
        } else {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
        }


}catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js*SYF_Temp_Fields_AMD", e);
    }
}



csFuncLevelProto.FLD_IWGT_APPL_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CORR_MED1_onchange = function(event) {
    try {
        SYM_IWGT_MPO_APPL_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Appl_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
        SYM_IWGT_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_BENE_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
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
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYM_IWGT_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_COUNTR_GTEE_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Counter_Guarantee_Information();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_EXPIRY_DT_onchange = function(event) {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_AMT_onchange = function(event) {
    try {
        SYM_IWGT_Cal_GTEE_LCY_AMT();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_CCY_onchange = function(event) {
    try {
        SYM_IWGT_Cal_GTEE_LCY_AMT();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INWARD_RCV_DT_onchange = function(event) {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
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
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Instructing_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_ADD();
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
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
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Send_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ApplyOrRejectAmendment_CE.js", e);
    }
}