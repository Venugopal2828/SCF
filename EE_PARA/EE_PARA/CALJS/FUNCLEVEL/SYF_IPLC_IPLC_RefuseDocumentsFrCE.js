var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IPLC_CHG_INIT_RUN = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYM_IPLC_Chg_SpecialHandlingFee();
            SYM_IPLC_Chg_Postageand();
            SYM_IPLC_Chg_SpecialCourier();
            SYM_IPLC_Chg_SWIFT_CHG();
            SYM_IPLC_Chg_Calculation_Other();
            CHG_setAllChargeAt(1);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_CABLE = function() {
    try {

        var MESG_TYPE = document.MAINFORM.MESG_TYPE.value;
        /*
if(MESG_TYPE == 'MT799' || MESG_TYPE == 'MT734' || MESG_TYPE == 'MT999'){
 
}else{
 
}
*/
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_TEMP_TAG77B = function() {
    try {

        var DOC_DISP_FLG = document.MAINFORM.DOC_DISP_FLG.value;
        var DISP_DOC = document.MAINFORM.DISP_DOC.value;
        document.MAINFORM.TEMP_TAG77B.value = DOC_DISP_FLG + '\n' + DISP_DOC;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_IPLC_CONFIRM_CALL();
        SYF_IPLC_Cal_TEMP_TAG77B();
        SYT_Cal_C_TRANS_CODE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_IPLC_INIT();
        SYM_IPLC_INIT_FOR_DT();
        document.MAINFORM.DOC_PRES.value = "";
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_SWIFT_MSG = function() {
    try {

        var MESG_TYPE = document.MAINFORM.MESG_TYPE.value;
        switch (MESG_TYPE) {
            case "MT734":
                SYT_ChangeFldClass(document.MAINFORM.DISC_DET, 'M');
                SYT_ChangeFldClass(document.MAINFORM.DOC_DISP_FLG, 'M');
                SYT_ChangeFldClass(document.MAINFORM.DISP_DOC, 'O');
                SYT_ChangeFldClass(document.MAINFORM.ADV_DIS_DT, 'M');
                SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79, 'O');
                break;
            case "MT799":
                SYT_ChangeFldClass(document.MAINFORM.DISC_DET, 'O');
                SYT_ChangeFldClass(document.MAINFORM.DOC_DISP_FLG, 'O');
                SYT_ChangeFldClass(document.MAINFORM.DISP_DOC, 'O');
                SYT_ChangeFldClass(document.MAINFORM.ADV_DIS_DT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79, 'M');
                break;
            case "MT999":
                SYT_ChangeFldClass(document.MAINFORM.DISC_DET, 'O');
                SYT_ChangeFldClass(document.MAINFORM.DOC_DISP_FLG, 'O');
                SYT_ChangeFldClass(document.MAINFORM.DISP_DOC, 'O');
                SYT_ChangeFldClass(document.MAINFORM.ADV_DIS_DT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79, 'M');
                break;
            default:
                SYT_ChangeFldClass(document.MAINFORM.DISC_DET, 'O');
                SYT_ChangeFldClass(document.MAINFORM.DOC_DISP_FLG, 'O');
                SYT_ChangeFldClass(document.MAINFORM.DISP_DOC, 'O');
                SYT_ChangeFldClass(document.MAINFORM.ADV_DIS_DT, 'O');
                SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79.value, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //add by tracery on 11-21 for charge

        SYM_IPLC_CHG_mapLocal_Foreign_Cust();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        SYF_IPLC_CHG_INIT_RUN();

        /*invoke CHG_setAllCollCcy(),SYT_Set_TRXCCY2CHG(),CHG_TRX_DATE(),SYT_Cal_CHG_FLD_LOCAL_CUST_CCY()*/
        SYM_IPLC_Chg_Init_FOR_Charge();
        //end


        SYM_IPLC_MPO_PRES_BK_ADD_BTN();

        SYM_IPLC_NEGO_SHOW_NOTES();
        SYF_IPLC_MPO_SWIFT_MSG();
        SYM_IPLC_MPO_PRESENTER_CLASS();
        SYM_IPLC_Cal_PRES_BK_SW_TAG();

        SYT_DisableDivClass('H_div');

        EEHtml.getElementById('display1').style.display = 'none';
        EEHtml.getElementById('display2').style.display = 'none';
        EEHtml.getElementById('display3').style.display = 'none';
        EEHtml.getElementById('display4').style.display = 'none';
        EEHtml.getElementById('display5').style.display = 'none';
        EEHtml.getElementById('display6').style.display = 'none';
        EEHtml.getElementById('display7').style.display = 'none';
        EEHtml.getElementById('display8').style.display = 'none';

        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DISP_DOC_onchange = function(event) {
    try {
        SYF_IPLC_Cal_TEMP_TAG77B();
        EEHtml.fireEvent(document.MAINFORM.TEMP_TAG77B, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_DISP_FLG_onchange = function(event) {
    try {
        SYF_IPLC_Cal_TEMP_TAG77B();
        EEHtml.fireEvent(document.MAINFORM.TEMP_TAG77B, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_MESG_TYPE_onchange = function(event) {
    try {
        SYF_IPLC_Cal_CABLE();
        SYF_IPLC_MPO_SWIFT_MSG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RefuseDocumentsFrCE.js", e);
    }
}