var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_IPLC_INIT();
        document.MAINFORM.TEMP_LC_BAL.value = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        document.MAINFORM.PRES_CCY.value = document.MAINFORM.LC_CCY.value;
        document.MAINFORM.DOC_STAT.value ='';
        document.MAINFORM.DISC_DET.value ='';
        SYM_IPLC_INIT_FOR_DT();
        SYT_Cal_LOCAL_AMT('LC_CCY', 'LC_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
        SYS_GetCUBK('GET_LC_AMT_FM_MASTER', 'C_MAIN_REF');
        //SYM_IPLC_Cal_PRES_INFO_BY_DOCPB();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_IPLC_MPO_PRES_CORR_MED();
        SYM_IPLC_NEGO_SHOW_NOTES_SMBC();
        SYM_IPLC_MPO_PRES_BK_ADD_BTN();
        SYT_ChangeFldClass(document.MAINFORM.PRES_AMT, 'P');
        SYF_IPLC_MPO_DISC_DET();
        SYT_ChangeFldClass_New('DOC_PRES_BY', 'O');
        if (document.MAINFORM.DOC_PRES_BY.value == 'Beneficiary') {
            SYT_ChangeFldClass_New('PRES_BK_ID', 'O');
        } else {
            SYT_ChangeFldClass_New('PRES_BK_ID', 'M');
        }
        SYT_DisableDivClass('C_div');
        //EEHtml.fireEvent(document.MAINFORM.DOC_PRES_BY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_loadDoDataComplete = function() {
    try {

        //modified for PUI
        if ("PM||MM||KP".indexOf(SYS_FUNCTION_TYPE) > -1) {
            CPYT_N_PAY_AMT();
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_CPYT_N_PAY_AMT = function() {
    try {

        //modified for PUI
        return;
        /*
//add by zoe 20081124
var PRES_AMT=document.MAINFORM.PRES_AMT.value;
obj=SYS_getScreenObjByxpath('PaymentScheduleHeader','CPYT_N_PAY_TTL_AMT_TXCCY');
obj.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value,PRES_AMT);

if('Yes' != document.MAINFORM.INDIVID_DRAW_FLG.value){
var targetDo=SYS_getDoByXpath("PaymentScheduleHeader.PaymentSchedule");
var records=SYS_getRecords(targetDo);
var len=records.length;
var record;
var recordId;
var CPYT_C_PAY_PER=0;
var resultValue;
var datarecords=[];
for (var i=0;i<len;i++){
	 record=records[i]; 
	 recordId=SYS_getRecID(record);
	 CPYT_C_PAY_PER=SYS_BeFloat(record["CPYT_C_PAY_PER"]);
	 resultValue=(SYS_BeFloat(PRES_AMT)*CPYT_C_PAY_PER) / 100;
	 record = SYS_setValToRec(record,"CPYT_N_PAY_AMT", resultValue);
	 datarecords[i]=record;
}
SYS_reLoadGrid(targetDo,datarecords);}
*/
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_Cal_C_TRANS_CODE();

        SYF_IPLC_CAL_PRES_BAL();

        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_PRES_BAL = function() {
    try {

        document.MAINFORM.PRES_BAL.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, SYS_BeFloat(document.MAINFORM.PRES_AMT.value));
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_DISC_DET = function() {
    try {

        if (document.MAINFORM.DOC_STAT.value == "Discrepancy Found") {
            SYT_ChangeFldClass(document.MAINFORM.DISC_DET, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DISC_DET, 'O');
        }

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_THU_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_THU_BK_ID.value == '') {
            document.MAINFORM.ADV_THU_BK_NM.value = '';
            document.MAINFORM.ADV_THU_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_TLX.value = '';
            document.MAINFORM.ADV_THU_BK_ADD1.value = '';
            document.MAINFORM.ADV_THU_BK_ADD2.value = '';
            document.MAINFORM.ADV_THU_BK_ADD3.value = '';
            document.MAINFORM.ADV_THU_BK_NOTES.value = '';
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = '';
        } else {
            SYS_GetCUBK('ADV_THRU_BK_ID', 'ADV_THU_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_ID_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_PRES_BY_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_INFO_BY_DOCPB();

        if (document.MAINFORM.DOC_PRES_BY.value == 'Beneficiary') {
            SYT_ChangeFldClass_New('PRES_BK_ID', 'O');
        } else {
            SYT_ChangeFldClass_New('PRES_BK_ID', 'M');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_STAT_onchange = function(event) {
    try {
        SYF_IPLC_MPO_DISC_DET();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.PRES_AMT.value) < 0) {
            alert("Presentation Amount should not be negative");
            document.MAINFORM.PRES_AMT.value = 0;
        }
        SYF_IPLC_Cal_CPYT_N_PAY_AMT();
        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_MPO_PRES_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
        SYM_IPLC_SQL_PRES_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TOTAL_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.TOTAL_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.TOTAL_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_DocumentCheck.js", e);
    }
}