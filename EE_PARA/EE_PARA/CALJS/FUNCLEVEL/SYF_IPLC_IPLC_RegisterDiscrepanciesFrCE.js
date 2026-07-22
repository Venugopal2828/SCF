var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IPLC_CHG_INIT_RUN = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYM_IPLC_CHG_PARTIES();
            SYM_IPLC_Chg_Calculation_Other();
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_TEMP_TAG77B = function() {
    try {

        var DISP_DOC; // Utility Auto Fix Comments
        var DOC_DISP_FLG; // Utility Auto Fix Comments
        DOC_DISP_FLG = document.MAINFORM.DOC_DISP_FLG.value;
        DISP_DOC = document.MAINFORM.DISP_DOC.value;
        document.MAINFORM.TEMP_TAG77B.value = DOC_DISP_FLG + '\n' + DISP_DOC;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Charge = function() {
    try {

        SYM_IPLC_Chg_DISCREP_COLL();
        SYM_IPLC_Chg_SpecialHandlingFee();
        SYM_IPLC_Chg_Postageand();
        SYM_IPLC_Chg_SpecialCourier();
        SYM_IPLC_Chg_SWIFT_CHG();
        SYM_IPLC_Chg_Calculation_Other(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_IPLC_CONFIRM_CALL();
        SYF_IPLC_Cal_TEMP_TAG77B();

        SYT_Cal_C_TRANS_CODE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_IPLC_INIT();
        SYM_IPLC_CalM_TEMP_N90_21();
        SYM_IPLC_INIT_FOR_DT();
        document.MAINFORM.SEND_TO_RCV_INFO.value = "";
        SYT_Cal_LOCAL_AMT('LC_CCY', 'LC_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_ADV_PRES = function() {
    try {

        /* Add by Jack on 20080908 for Advice Discrepancies */

        document.MAINFORM.DOC_DISP_FLG.value = "";
        document.MAINFORM.DISP_DOC.value = "";
        //document.MAINFORM.DISC_DET.value = "";
        document.MAINFORM.NARR_TAG_79.value = "";
        document.MAINFORM.NARR_MAIL.value = "";
        document.MAINFORM.CHGS_CLAIMED_TXT.value = "";
        document.MAINFORM.SEND_TO_RCV_INFO.value = "";
        /*switch(ADV_PRES_BY){
   case "MT734":
      SYT_ChangeFldClass(document.MAINFORM.DOC_DISP_FLG,'M');
      SYT_ChangeFldClass(document.MAINFORM.DISP_DOC,'O');
      SYT_ChangeFldClass(document.MAINFORM.DISC_DET,'M');
      SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79,'P');
      SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL,'P');
SYT_ChangeFldClass(document.MAINFORM.CHGS_CLAIMED_TXT,"O"); 
SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO,"O");
   break;
   case "MT999":
      SYT_ChangeFldClass(document.MAINFORM.DOC_DISP_FLG,'P');
      SYT_ChangeFldClass(document.MAINFORM.DISP_DOC,'P');
      SYT_ChangeFldClass(document.MAINFORM.DISC_DET,'O');
      SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79,'M');
      SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL,'P');
SYT_ChangeFldClass(document.MAINFORM.CHGS_CLAIMED_TXT,'P');
SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO,'P');
   break;
   case "Mail":
SYT_ChangeFldClass(document.MAINFORM.CHGS_CLAIMED_TXT,'P');
SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO,'P');
      SYT_ChangeFldClass(document.MAINFORM.DOC_DISP_FLG,'P');
      SYT_ChangeFldClass(document.MAINFORM.DISP_DOC,'P');
      SYT_ChangeFldClass(document.MAINFORM.DISC_DET,'O');
      SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79,'P');
      SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL,'M');

   break;
   default:
      SYT_ChangeFldClass(document.MAINFORM.DOC_DISP_FLG,'P');
      SYT_ChangeFldClass(document.MAINFORM.DISP_DOC,'B');
      SYT_ChangeFldClass(document.MAINFORM.DISC_DET,'B');
      SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79,'B');
      SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL,'B');
SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO,'B');
SYT_ChangeFldClass(document.MAINFORM.CHGS_CLAIMED_TXT,'B');
}*/
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MT798_FLAG = function() {
    try {

        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('N').style.display = '';
            SYT_EnableDivClass('N_div');
        } else {
            EEHtml.getElementById('N').style.display = 'none';
            SYT_DisableDiv('N_div');

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //SYM_IPLC_CHG_mapLocal_Foreign_Cust();//Modified by Jack on 20120905 for SMBC Workshop
        SYM_IPLC_CHG_map_Cust_SMBC();

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_IPLC_Charge();
            CHG_setAllChargeAt(1);
        }
        /*invoke CHG_setAllCollCcy(),SYT_Set_TRXCCY2CHG(),CHG_TRX_DATE(),SYT_Cal_CHG_FLD_LOCAL_CUST_CCY()*/
        SYM_IPLC_Chg_Init_FOR_Charge();


        SYF_IPLC_MPO_ADV_PRES();

        SYT_ChangeFldClass(document.MAINFORM.PRES_AMT, 'M');
        SYM_IPLC_MPO_PRES_BK_ADD_BTN();
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
        //notes
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        //Add by Jack on 20120905 for SMBC workshop
        SYT_Init_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        //Add by Jack on 20120905 for SMBC workshop
        SYT_Show_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYM_IPLC_DOC_STAT_SG();
        SYT_DisableDivClass('H_div');
        SYF_IPLC_MT798_FLAG();

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_AC_WT_BK_SW_TAG = function() {
    try {

        if (document.MAINFORM.AC_WT_BK_SW_ADD_MT734.value != '') {
            document.MAINFORM.AC_WT_BK_SW_TAG_734.value = 'A';
        }
        if ((document.MAINFORM.AC_WT_BK_NM_MT734.value != '' || document.MAINFORM.AC_WT_BK_ADD1_MT734.value != '' || document.MAINFORM.AC_WT_BK_ADD2_MT734.value != '' || document.MAINFORM.AC_WT_BK_ADD3_MT734.value != '') && document.MAINFORM.AC_WT_BK_SW_ADD_MT734.value == '') {
            document.MAINFORM.AC_WT_BK_SW_TAG_734.value = 'D';
        }
        if (document.MAINFORM.AC_WT_BK_NM_MT734.value == '' && document.MAINFORM.AC_WT_BK_ADD1_MT734.value == '' && document.MAINFORM.AC_WT_BK_ADD2_MT734.value == '' && document.MAINFORM.AC_WT_BK_ADD3_MT734.value == '' && document.MAINFORM.AC_WT_BK_SW_ADD_MT734.value == '') {
            document.MAINFORM.AC_WT_BK_SW_TAG_734.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ADD1_MT734_onchange = function(event) {
    try {
        SYF_IPLC_CHK_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ADD2_MT734_onchange = function(event) {
    try {
        SYF_IPLC_CHK_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ADD3_MT734_onchange = function(event) {
    try {
        SYF_IPLC_CHK_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_AC_WT_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ID_BTN_MT734_onclick = function(event) {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,event.currentTarget look up will take some time.", "Inqure CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('AC_WT_BK_ID_MT734', '1');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ID_MT734_onchange = function(event) {
    try {
        SYS_GetCUBK_S('AC_WT_BK_ID_MT734', document.MAINFORM.AC_WT_BK_ID_MT734.name);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_NM_MT734_onchange = function(event) {
    try {
        SYF_IPLC_CHK_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_SW_ADD_MT734_onchange = function(event) {
    try {
        SYF_IPLC_CHK_AC_WT_BK_SW_TAG();
        if (document.MAINFORM.AC_WT_BK_SW_ADD_MT734.value.length == 8) {
            document.MAINFORM.AC_WT_BK_SW_ADD_MT734.value = document.MAINFORM.AC_WT_BK_SW_ADD_MT734.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADDIT_PRES_BK_AMTS_onchange = function(event) {
    try {
        if (document.MAINFORM.ADDIT_PRES_BK_AMTS.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.ADDIT_PRES_BK_AMTS.value = 0;
        }

        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPLY_FLG_onchange = function(event) {
    try {
        SYF_IPLC_MT798_FLAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        if (document.MAINFORM.CHGS_DEDUCTED.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CHGS_DEDUCTED.value = 0;
        }
        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DISP_DOC_onchange = function(event) {
    try {
        SYF_IPLC_Cal_TEMP_TAG77B();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_DISP_FLG_onchange = function(event) {
    try {
        SYF_IPLC_Cal_TEMP_TAG77B();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_PRES_BY_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_INFO_BY_DOCPB();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LC_AMT_onchange = function(event) {
    try {
        SYF_IPLC_Charge();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.PRES_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.PRES_AMT.value = 0;
        }

        SYM_IPLC_Cal_PRES_BAL();
        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.PRES_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        if (document.MAINFORM.PRES_BK_CHGS.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.PRES_BK_CHGS.value = 0;
        }

        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_MPO_PRES_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        if (document.MAINFORM.DOC_PRES_BY.value == 'Beneficiary') {
            SYS_InqCUBK('PRES_CUST_ID');
        } else {
            SYT_BankLookUp(event.currentTarget);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_REF_onchange = function(event) {
    try {
        SYM_IPLC_CalM_TEMP_N90_21();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
        SYM_IPLC_SQL_PRES_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TOTAL_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.TOTAL_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.TOTAL_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDiscrepanciesFrCE.js", e);
    }
}