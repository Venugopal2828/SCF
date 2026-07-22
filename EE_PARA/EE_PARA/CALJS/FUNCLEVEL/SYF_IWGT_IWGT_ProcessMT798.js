var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IWGT_AC_BK_SW_TAG = function() {
    try {

        if (document.MAINFORM.AC_BK_SW_ADD.value == '') {
            document.MAINFORM.AC_BK_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.AC_BK_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_CAL_SEND_TO_RECEIVER = function() {
    try {

        //Add by jane at 20090322
        CURRNT_STATUS = document.MAINFORM.CURRNT_STATUS.value;
        if (CURRNT_STATUS == 'RegisterInwardGuarantee') {
            document.MAINFORM.TEMP_TAG_72.value = document.MAINFORM.X760_BKTOBK_INFO72.value;
            document.MAINFORM.X760_BKTOBK_INFO72.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_APLB_RULE = function() {
    try {

        if (document.MAINFORM.APLB_RULE.value == "OTHR") {
            document.all.Applicable.style.visibility = 'visible';
            document.all.APLB_RULE_NARR.style.display = 'block';
        } else {
            document.all.Applicable.style.visibility = 'hidden';
            document.all.APLB_RULE_NARR.style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_Charge_Calculate = function() {
    try {

        if (document.MAINFORM.MTHD_OF_ISS.value == 'Issue') {
            SYM_IWGT_Chg_Calculate_IssComm();
        }
        if (document.MAINFORM.MTHD_OF_ISS.value == 'Advise') {
            SYM_IWGT_Chg_Calculate_AdviceComm();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_Incoming_Field = function() {
    try {

        if (document.MAINFORM.CURRNT_STATUS.value == "RegisterInwardGuarantee") {
            document.MAINFORM.TEMP_DOC_REQ.value = document.MAINFORM.GTEE_DETAILS_79.value;
        }
        if (document.MAINFORM.CURRNT_STATUS.value == "ProcessMT760") {
            document.MAINFORM.X760_DETL_77C.value = document.MAINFORM.NON_STD_WORDNG.value;
        }
        document.MAINFORM.TEMP_TAG_72.value = document.MAINFORM.X760_BKTOBK_INFO72.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_X768_DATE_30 = function() {
    try {

        //if SEND_MT768_FLG is Yes, X768_DATE_30 = INWARD_RCV_DT

        if (document.MAINFORM.SEND_MT768_FLG.value == 'Y') {
            document.MAINFORM.X768_DATE_30.value = document.MAINFORM.INWARD_RCV_DT.value;
        } else {
            document.MAINFORM.X768_DATE_30.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CLERK_ID();
        SYT_CHG_VOUCHER();
        SYT_LIAB_VOUCHER();
        document.MAINFORM.CURRNT_STATUS.value = "IssueInwardGtee";
        document.MAINFORM.NXT_STATUS.value = "Issued";
        document.MAINFORM.ORIGIN_GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_BAL.value);
        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYM_IWGT_Check_EXPIRY_DT()) {
            return false;
        }
        if (!SYM_IWGT_Check_APPL_BENE()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_FURTHER = function() {
    try {

        if (document.MAINFORM.MTHD_OF_ISS.value == 'Advise') {
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO, 'P');
            document.MAINFORM.ASSET_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.LIAB_ACNO, 'P');
            document.MAINFORM.LIAB_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.APPL_AC_MRGN_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_Incoming_Fields = function() {
    try {

        if (document.MAINFORM.CURRNT_STATUS.value == "RegisterInwardGuarantee") {
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'M');
        }
        if (document.MAINFORM.CURRNT_STATUS.value == "ProcessMT760") {
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X760_DETL_77C_CLAUSE_BT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DOC_REQ_CLAUSE_BT, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_IWGT_Cal_APLB_RULE();
        SYM_IWGT_MPO_X760_DETL_77C();

        SYT_ShowBlankRow('APPL_BRCH_blankrow', 2);

        SYM_IWGT_Chg_Screen_local();
        Chg.Screen.mapForeignCust("APPL_ID", "APPL_NM", "GTEE_CCY");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {

            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
            CHG_setAllCollCcy(SYS_LOCAL_CCY); //add by tracery for charge voucher - credit ccy
            SYT_Set_TRXCCY2CHG(); //add by tracery for charge voucher - mapping trx ccy to unpaid ccy
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE; //for #1189

            if (document.MAINFORM.MTHD_OF_ISS.value == 'Advise') {
                SYM_IWGT_Chg_Calculate_AdviceComm();
            }
            if (document.MAINFORM.MTHD_OF_ISS.value == 'Issue') {
                SYM_IWGT_Chg_Calculate_IssComm();
            }
            SYM_IWGT_Chg_Calculate_Other();
            SYM_IWGT_Chg_Calculate_POST();
            SYM_IWGT_Chg_Calculate_SWIFT();
            SYM_IWGT_Chg_Calculate_courier();
            CHG_setAllChargeAt("1");
        }

        IWGT_APPL_BRCH_GTEE();
        lbi_IWGT_BENE_GTEE_IntFieldClass();
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYM_IWGT_Cal_ADD_BUTTON();
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYM_IWGT_Cal_APPL_SW_TAG();
        SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
        SYM_IWGT_MPO_APPL_CORR_MED();
        SYM_IWGT_MPO_BENE_CORR_MED();
        SYM_IWGT_MPO_RCV_FM_BK_CORR_MED();
        SYM_IWGT_MPO_SEND_TO_CORR_MED();
        SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_CORR_MED, 'M');
        SYM_IWGT_MPO_RCV_FM_BK_NM();
        SYF_IWGT_MPO_Incoming_Fields();

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S('AdviceForBankCust');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.AC_WT_BK_ID.value != "") {
            SYS_GetCUBK('ACCT_WITH_BK', 'AC_WT_BK_ID', 'SYM_IWGT_Cal_AC_BK_SW_TAG');
        }
        SYM_IWGT_Clear_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_AC_WT_BK_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APLB_RULE_onchange = function(event) {
    try {
        SYM_IWGT_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CORR_MED1_onchange = function(event) {
    try {
        SYM_IWGT_MPO_APPL_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Appl_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_MAIL_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
        SYM_IWGT_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_BENE_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
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
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_MAIL_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYM_IWGT_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_AMT_MT768_onchange = function(event) {
    try {
        if (document.MAINFORM.CHG_AMT_MT768.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CHG_AMT_MT768.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_COUNTR_GTEE_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Counter_Guarantee_Information();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_EXPIRY_DT_onchange = function(event) {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_FURTHER_IDENTITY_onchange = function(event) {
    try {
        SYM_IWGT_MPO_RCV_FM_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_BAL_onchange = function(event) {
    try {
        SYF_IWGT_Cal_Charge_Calculate();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_CCY_onchange = function(event) {
    try {
        SYF_IWGT_Cal_Charge_Calculate();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INWARD_RCV_DT_onchange = function(event) {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_MTHD_OF_ISS_onchange = function(event) {
    try {
        SYF_IWGT_Cal_Charge_Calculate();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_RCV_BANK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_RCV_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
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
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Instructing_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_RCV_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_MAIL_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_RCV_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_ADD();
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_MT768_FLG_onchange = function(event) {
    try {
        SYF_IWGT_Cal_X768_DATE_30();
        SYM_IWGT_MPO_X768_DATE_30();
        SYM_IWGT_Cal_RCV_FM_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD2_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD3_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
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
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_IWGT_Cal_Send_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_IWGT_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_TEMP_DOC_REQ_CLAUSE_BT_onclick = function(event) {
    try {
        return SYS_InsertClause("TEMP_DOC_REQ");
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_X760_DETL_77C_CLAUSE_BT_onclick = function(event) {
    try {
        return SYS_InsertClause('X760_DETL_77C');
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_IWGT_ProcessMT798.js", e);
    }
}