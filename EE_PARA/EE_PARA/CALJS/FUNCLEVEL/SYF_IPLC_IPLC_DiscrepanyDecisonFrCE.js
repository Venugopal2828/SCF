var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IPLC_Cal_CHGS_DEDUCTED_TXT = function() {
    try {

        document.MAINFORM.CHGS_DEDUCTED_TXT.value = "";
        if (document.MAINFORM.CHGS_DEDUCTED_CODE.value != "" && document.MAINFORM.CHGS_DEDUCTED.value != "" && SYS_BeFloat(document.MAINFORM.CHGS_DEDUCTED.value) != 0) {
            document.MAINFORM.CHGS_DEDUCTED_TXT.value = "/" + document.MAINFORM.CHGS_DEDUCTED_CODE.value + "/" + document.MAINFORM.PRES_CCY.value + SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.CHGS_DEDUCTED.value) + "\n";
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_Send_MT752 = function() {
    try {

        if (document.MAINFORM.DOC_PRES_BY.value == "Advising Bank" && document.MAINFORM.ADV_PRES_BY.value != 'MT734') {
            SYT_ChangeFldClass_New("X752_FUR_IDEN_23", "M");
            SYT_ChangeFldClass_New("ADV_DIS_DT", "M");
        } else {
            SYT_ChangeFldClass_New("X752_FUR_IDEN_23", "O");
            SYT_ChangeFldClass_New("ADV_DIS_DT", "O");
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_TEMP_TAG33a = function() {
    try {

        if (document.MAINFORM.X752_FUR_IDEN_23.value == "REMITTED" || document.MAINFORM.X752_FUR_IDEN_23.value == "DEBIT") {
            document.MAINFORM.TEMP_TAG33a.value = "A";
        } else {
            document.MAINFORM.TEMP_TAG33a.value = "B";
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_TEMP_TAG77B = function() {
    try {

        var DOC_DISP_FLG = document.MAINFORM.DOC_DISP_FLG.value;
        var DISP_DOC = document.MAINFORM.DISP_DOC.value;
        document.MAINFORM.TEMP_TAG77B.value = DOC_DISP_FLG + '\n' + DISP_DOC;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_IPLC_Cal_TEMP_TAG77B();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_IPLC_INIT();
        SYM_IPLC_INIT_FOR_DT();
        document.MAINFORM.SEND_TO_RCV_INFO.value = ""; // BY Jesse  for Defect #4586 2014/3/4
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_ACPT_DETL = function() {
    try {

        /*var APPL_RESP_DISC = document.MAINFORM.APPL_RESP_DISC.value;
if(APPL_RESP_DISC == 'Discrepancies Accepted Provided'){
   SYT_ChangeFldClass(document.MAINFORM.COND_ACPT_DETL,'M');
}else{
   SYT_ChangeFldClass(document.MAINFORM.COND_ACPT_DETL,'P');
}*/
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_ADV_PRES = function() {
    try {

        /* Add by Jane on 20081124 for Discrepancies Response*/
        /*var ADV_PRES_BY = document.MAINFORM.ADV_PRES_BY.value;
switch(ADV_PRES_BY){
   case "MT734":
      SYT_ChangeFldClass(document.MAINFORM.DOC_DISP_FLG,'M');
      SYT_ChangeFldClass(document.MAINFORM.DISP_DOC,'O');
      SYT_ChangeFldClass(document.MAINFORM.DISC_DET,'M');
      SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79,'O');
      SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL,'O');
      SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO,'O');
      SYT_ChangeFldClass(document.MAINFORM.CHGS_CLAIMED_TXT,'O');	
   break;
   case "MT999":
      SYT_ChangeFldClass(document.MAINFORM.DOC_DISP_FLG,'O');
      SYT_ChangeFldClass(document.MAINFORM.DISP_DOC,'O');
      SYT_ChangeFldClass(document.MAINFORM.DISC_DET,'O');
      SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79,'M');
      SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL,'O');
      SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO,'P');
      SYT_ChangeFldClass(document.MAINFORM.CHGS_CLAIMED_TXT,'P');
   break;
   case "Mail":
      SYT_ChangeFldClass(document.MAINFORM.DOC_DISP_FLG,'O');
      SYT_ChangeFldClass(document.MAINFORM.DISP_DOC,'O');
      SYT_ChangeFldClass(document.MAINFORM.DISC_DET,'O');
      SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79,'O');
      SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL,'M');
      SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO,'P');
      SYT_ChangeFldClass(document.MAINFORM.CHGS_CLAIMED_TXT,'P');
   break;
   default:
      SYT_ChangeFldClass(document.MAINFORM.DOC_DISP_FLG,'O');
      SYT_ChangeFldClass(document.MAINFORM.DISP_DOC,'O');
      SYT_ChangeFldClass(document.MAINFORM.DISC_DET,'P');
      SYT_ChangeFldClass(document.MAINFORM.NARR_TAG_79,'P');
      SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL,'P');
      SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO,'P');
      SYT_ChangeFldClass(document.MAINFORM.CHGS_CLAIMED_TXT,'P');
	
}*/
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MT798_FLAG = function() {
    try {

        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('Z').style.display = '';
            SYT_EnableDivClass('Z_div');
            var time = SYS_TIME;
            document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
            document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
        } else {
            EEHtml.getElementById('Z').style.display = 'none';
            SYT_DisableDiv('Z_div');

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //SYT_ChangeFldClass(document.MAINFORM.APPL_RESP_DISC, 'M');

        SYF_IPLC_MPO_ACPT_DETL();
        SYM_IPLC_NEGO_SHOW_NOTES();
        SYM_IPLC_MPO_PRES_BK_ADD_BTN();
        SYF_IPLC_MPO_ADV_PRES();
        SYT_ChangeFldClass(document.MAINFORM.PRES_AMT, 'P');
        SYT_DisableDivClass('H_div');
        SYF_IPLC_MT798_FLAG();


        //ADD BY MARK
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_LANG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_FAX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_AC_OFF_CODE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_AC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DOC_PRES_BY, "P");
        EEHtml.getElementById('display1').style.display = 'none';
        EEHtml.getElementById('display2').style.display = 'none';
        EEHtml.getElementById('display3').style.display = 'none';
        EEHtml.getElementById('display4').style.display = 'none';
        EEHtml.getElementById('display5').style.display = 'none';
        EEHtml.getElementById('display6').style.display = 'none';
        EEHtml.getElementById('display7').style.display = 'none';
        EEHtml.getElementById('display8').style.display = 'none';

        SYF_IPLC_Cal_Send_MT752();
        
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_PRES_BY_onchange = function(event) {
    try {
        SYF_IPLC_Cal_Send_MT752();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPLY_FLG_onchange = function(event) {
    try {
        SYF_IPLC_MT798_FLAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        if (document.MAINFORM.CHGS_DEDUCTED.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CHGS_DEDUCTED.value = 0;
        }
        SYF_IPLC_Cal_CHGS_DEDUCTED_TXT();

        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHGS_DEDUCTED_CODE_onchange = function(event) {
    try {
        SYF_IPLC_Cal_CHGS_DEDUCTED_TXT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DISP_DOC_onchange = function(event) {
    try {
        SYF_IPLC_Cal_TEMP_TAG77B();
        EEHtml.fireEvent(document.MAINFORM.TEMP_TAG77B, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_DISP_FLG_onchange = function(event) {
    try {
        SYF_IPLC_Cal_TEMP_TAG77B();
        EEHtml.fireEvent(document.MAINFORM.TEMP_TAG77B, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_PRES_BY_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_INFO_BY_DOCPB();
        SYF_IPLC_Cal_Send_MT752();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_AMT_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BAL();
        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.PRES_BAL, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.PRES_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_MPO_PRES_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
        SYM_IPLC_SQL_PRES_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_CCY_onchange = function(event) {
    try {
        SYF_IPLC_Cal_CHGS_DEDUCTED_TXT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TOTAL_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.TOTAL_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.TOTAL_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_X752_FUR_IDEN_23_onchange = function(event) {
    try {
        SYF_IPLC_Cal_TEMP_TAG33a();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DiscrepanyDecisonFrCE.js", e);
    }
}