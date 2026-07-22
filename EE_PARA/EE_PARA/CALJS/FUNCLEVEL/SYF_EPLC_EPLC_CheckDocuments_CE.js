var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_EPLC_CALL_PRES_BENE = function() {
    try {

        SYM_EPLC_M_CALL_PRES_BENE(document.MAINFORM.DOC_PRES_BY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_AVLB_LC_BAL = function() {
    try {

        var AVLB_LC_BAL; // Utility Auto Fix Comments
        var LC_BAL; // Utility Auto Fix Comments
        var PENDING_PRES_BAL; // Utility Auto Fix Comments
        //added by zoe 20090112
        LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL_TEMP.value);
        PENDING_PRES_BAL = SYS_BeFloat(document.MAINFORM.PENDING_PRES_BAL.value);
        AVLB_LC_BAL = LC_BAL - PENDING_PRES_BAL;
        if (AVLB_LC_BAL < 0) {
            alert('Please note that the Presentation Amount exceeds the LC Balance.');
            AVLB_LC_BAL = 0;
            document.MAINFORM.AVLB_LC_BAL.value = 0;
        } else {

            document.MAINFORM.AVLB_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, AVLB_LC_BAL);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CHK_REST = function() {
    try {

        if (document.MAINFORM.DOC_STAT.value == 'Compliant' || document.MAINFORM.DOC_STAT.value == 'Goods Released Already') {
            document.MAINFORM.CHK_REST.value = 'CLEAN';
        } else if (document.MAINFORM.DOC_STAT.value == 'Discrepancy Found') {
            document.MAINFORM.CHK_REST.value = 'DISCREPANT';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_PENDING_PRES_BAL = function() {
    try {

        var OLD_PENDING_PRES_AMT; // Utility Auto Fix Comments
        var PENDING_PRES_BAL; // Utility Auto Fix Comments
        var PRES_AMT_LC_CCY; // Utility Auto Fix Comments
        //added by zoe 20090112
        OLD_PENDING_PRES_AMT = SYS_BeFloat(document.MAINFORM.TEMP_PENDING_PRES_BAL.value);
        PRES_AMT_LC_CCY = SYS_BeFloat(document.MAINFORM.PRES_AMT_LC_CCY.value);
        PENDING_PRES_BAL = OLD_PENDING_PRES_AMT + PRES_AMT_LC_CCY;
        document.MAINFORM.PENDING_PRES_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, PENDING_PRES_BAL);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_SEND_MT750_FLG = function() {
    try {

        if (document.MAINFORM.SEND_MT750_FLG.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_SW_ADD_MT750, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_SW_ADD_MT750, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TTL_PRES_AMT = function() {
    try {

        var OLD_TTL_PRES_AMT; // Utility Auto Fix Comments
        var PRES_AMT_LC_CCY; // Utility Auto Fix Comments
        var TTL_PRES_AMT; // Utility Auto Fix Comments
        //added by zoe 20090112
        OLD_TTL_PRES_AMT = SYS_BeFloat(document.MAINFORM.TEMP_TTL_PRES_AMT.value);
        PRES_AMT_LC_CCY = SYS_BeFloat(document.MAINFORM.PRES_AMT_LC_CCY.value);
        TTL_PRES_AMT = OLD_TTL_PRES_AMT + PRES_AMT_LC_CCY;
        document.MAINFORM.TTL_PRES_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, TTL_PRES_AMT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_AMD = function() {
    try {

        //added by zoe 20090114 to check whether there are unprocessed Amd
        document.MAINFORM.TEMP_DENTRMETL_FLG.value = '';

        SYS_GetTableDataByRule_S('SYF_EPLC_EPLC_CheckDocuments_SYF_EPLC_CHK_AMD_0', '1', 'Y'); //add by Canny 2013-09-12
        if (document.MAINFORM.TEMP_DENTRMETL_FLG.value == '') {
            return true;
        }
        SYS_GetTableDataByRule_S('SYF_EPLC_EPLC_CheckDocuments_SYF_EPLC_CHK_AMD_1', '1', 'Y'); //add by Canny 2013-09-12
        if (document.MAINFORM.TEMP_DENTRMETL_FLG.value == "") {
            alert("Warning:There are outstanding amendments not been advised. Please process these amendments before proceeding!");
            parent.toolbar.SYS_MakeButtonShow("_cancel");
            return false;
        }

        document.MAINFORM.TEMP_BENE_CONS_FLG.value = '';

        SYS_GetTableDataByRule_S('SYF_EPLC_EPLC_CheckDocuments_SYF_EPLC_CHK_AMD_2', '1', 'Y'); //add by Canny 2013-09-12
        if (document.MAINFORM.TEMP_BENE_CONS_FLG.value == '') {
            return true;
        }
        SYS_GetTableDataByRule_S('SYF_EPLC_EPLC_CheckDocuments_SYF_EPLC_CHK_AMD_3', '1', 'Y'); //add by Canny 2013-09-12

        if (document.MAINFORM.TEMP_BENE_CONS_FLG.value == '') {
            alert("Warning:There is a detrimental amendment outstanding. Please process Beneficiary Response before proceeding!");
            parent.toolbar.SYS_MakeButtonShow("_cancel");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_PRTL_SHIP = function() {
    try {

        SYM_EPLC_M_CLASS_BY_43P(document.MAINFORM.PARTIAL_SHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_TNSHIP = function() {
    try {

        SYM_EPLC_M_CLASS_BY_43T(document.MAINFORM.TNSHIP.value); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_DOC_PRES_BY = function() {
    try {

        SYM_EPLC_M_CLASS_BY_DOCPRES(document.MAINFORM.DOC_PRES_BY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_Cal_CPYT_N_PAY_AMT = function() {
    try {

        var PRES_AMT; // Utility Auto Fix Comments
        /*
return;

PRES_AMT=document.MAINFORM.PRES_AMT.value;
	obj=document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY;
	obj.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value,PRES_AMT);
	obj.fireEvent("onchange");
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();
        SYF_EPLC_CAL_TTL_PRES_AMT();
        document.MAINFORM.CE_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_Get_RCV_BK_ID_MT750_INFO = function() {
    try {

        if (document.MAINFORM.SEND_MT750_FLG.value == 'Yes') {
            document.MAINFORM.RCV_BK_ID_MT750.value = document.MAINFORM.ISSUE_BK_ID.value;
            document.MAINFORM.RCV_BK_NM_MT750.value = document.MAINFORM.ISSUE_BK_NM.value;
            document.MAINFORM.RCV_BK_ADD1_MT750.value = document.MAINFORM.ISSUE_BK_ADD1.value;
            document.MAINFORM.RCV_BK_ADD2_MT750.value = document.MAINFORM.ISSUE_BK_ADD2.value;
            document.MAINFORM.RCV_BK_ADD3_MT750.value = document.MAINFORM.ISSUE_BK_ADD3.value;
            document.MAINFORM.RCV_BK_SW_TAG_MT750.value = document.MAINFORM.ISSUE_BK_SW_TAG.value;
            document.MAINFORM.RCV_BK_SW_ADD_MT750.value = document.MAINFORM.ISSUE_BK_SW_ADD.value;
        } else {
            document.MAINFORM.RCV_BK_ID_MT750.value = '';
            document.MAINFORM.RCV_BK_NM_MT750.value = '';
            document.MAINFORM.RCV_BK_ADD1_MT750.value = '';
            document.MAINFORM.RCV_BK_ADD2_MT750.value = '';
            document.MAINFORM.RCV_BK_ADD3_MT750.value = '';
            document.MAINFORM.RCV_BK_SW_TAG_MT750.value = '';
            document.MAINFORM.RCV_BK_SW_ADD_MT750.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        //SYF_EPLC_CHK_AMD();

        SYM_EPLC_INIT();
        SYM_EPLC_INIT_CCY();
        SYF_EPLC_CALL_PRES_BENE();
        document.MAINFORM.LC_BAL_TEMP.value = document.MAINFORM.LC_BAL.value;
        document.MAINFORM.TEMP_TTL_PRES_AMT.value = document.MAINFORM.TTL_PRES_AMT.value;
        //document.MAINFORM.TEMP_PENDING_PRES_BAL.value = document.MAINFORM.PENDING_PRES_BAL.value;

        //SYF_EPLC_CAL_PENDING_PRES_BAL();
        //SYF_EPLC_CAL_AVLB_LC_BAL();
        //document.MAINFORM.PRES_DISC_RESP.value='Rectified All Discrepancies';
        //document.MAINFORM.DISC_RESP_ISSU_BK.value='Accepted';
        SYF_EPLC_SEND_MT750();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYS_DisableDoButton("PaymentSchedule", "ADD,EDIT,DEL", true);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_DISC_DET = function() {
    try {

        var cDOC_STAT; // Utility Auto Fix Comments
        cDOC_STAT = document.MAINFORM.DOC_STAT.value; // Utility Auto Fix Comments
        if (cDOC_STAT == 'Discrepancy Found') {
            SYT_ChangeFldClass(document.MAINFORM.DISC_DET, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DISC_DET, 'O');
            document.MAINFORM.DISC_DET.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MT798_FLG = function() {
    try {

        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('O').style.display = '';
            SYT_EnableDivClass('O_div');
            var time = SYS_TIME;
            document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
            document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
        } else {
            EEHtml.getElementById('O').style.display = 'none';
            SYT_DisableDiv('O_div');

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYF_EPLC_CLASS_BY_PRTL_SHIP();
        SYF_EPLC_CLASS_BY_TNSHIP();
        SYF_EPLC_CLASS_DOC_PRES_BY();
        SYF_EPLC_Get_RCV_BK_ID_MT750_INFO();
        SYF_EPLC_CAL_SEND_MT750_FLG();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.DRAWING_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYT_DisableDivClass('C_div');
        SYT_DisableDivClass('E_div');
        //SYT_DisableDivClass('J_div');
        if (document.MAINFORM.TENOR_TYPE.value == "OTHER") {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE_NARR, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE_NARR, "H");
        }


        SYM_EPLC_showMixPaymentSchedule();
        SYF_EPLC_MPO_DISC_DET();
        SYM_EPLC_Hidden_Mixpay_Separator();
        SYM_EPLC_CHK_PRES_BK_CORR_MED();

        SYF_EPLC_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_SEND_MT750 = function() {
    try {

        if (document.MAINFORM.DOC_STAT.value == 'Discrepancy Found') {
            document.MAINFORM.SEND_MT750_FLG.value = 'Yes';
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_SW_ADD_MT750, 'M');
        } else {
            document.MAINFORM.SEND_MT750_FLG.value = 'No';
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_SW_ADD_MT750, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_loadDoDataComplete = function() {
    try {

        if ("PM||MM||KP".indexOf(SYS_FUNCTION_TYPE) > -1) {
            CPYT_N_PAY_AMT();
        }
        SYS_DisableDoButton("PaymentSchedule", "ADD,EDIT,DEL", false);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD1_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD2_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD3_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD_BTN_MT750_onclick = function(event) {
    try {
        SYS_InqCUBK('AC_WT_BK_MT750_ADD', 'AC_WT_BK_ID_MT750', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_BTN_MT750_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_MT750_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AC_WT_BK_ID_MT750', 'AC_WT_BK_ID_MT750');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_NM_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ORDER_NO_MT750_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_SW_ADD_MT750_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADDIT_PRES_BK_AMTS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADDIT_PRES_BK_CCY_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHGS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHG_CCY_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPLY_FLG_onchange = function(event) {
    try {
        SYF_EPLC_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_BK_ADD', 'APPL_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('APPL_BK_ID', 'APPL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DISC_DET_onchange = function(event) {
    try {
        document.MAINFORM.DISC_DET_MT750.value = document.MAINFORM.DISC_DET.value;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DOC_PRES_BY_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_DOC_PRES_BY();
        SYM_EPLC_CLEAR_PRES_INFO();
        SYF_EPLC_CALL_PRES_BENE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DOC_STAT_onchange = function(event) {
    try {
        SYF_EPLC_MPO_DISC_DET();
        SYF_EPLC_SEND_MT750();
        EEHtml.fireEvent(document.MAINFORM.SEND_MT750_FLG, 'onchange');
        SYF_EPLC_CAL_CHK_REST();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_onchange = function(event) {
    try {
        SYS_GetCUBK('DRWE_ID', 'DRWE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_52_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_52_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_52_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_52_ADD', 'ISSUE_BK_52_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_52_ID', 'ISSUE_BK_52_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_52_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PARTIAL_SHIP_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_BY_PRTL_SHIP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PENDING_PRES_BAL_onchange = function(event) {
    try {
        SYF_EPLC_CAL_AVLB_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.AVLB_LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_AMT_onchange = function(event) {
    try {
        SYM_EPLC_CAL_PRES_AMT_LCCCY();
        EEHtml.fireEvent(document.MAINFORM.PRES_AMT_LC_CCY, 'onchange');
        SYM_EPLC_CAL_TTL_CLAIM_AMT();

        SYF_EPLC_Cal_CPYT_N_PAY_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_AMT_LC_CCY_onchange = function(event) {
    try {
        SYF_EPLC_CAL_PENDING_PRES_BAL();
        SYF_EPLC_CAL_TTL_PRES_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_PRES_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.PENDING_PRES_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        var nfieldname; // Utility Auto Fix Comments
        nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYS_InqCUBK('BENE_NEGO_ID_ADD', 'PRES_BK_ID', 'ID');
            } else {
                SYS_InqCUBK('PRES_BK_ADD', 'PRES_BK_ID', 'ID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_EMAIL_onchange = function(event) {
    try {
        var chkemail = document.MAINFORM.PRES_BK_EMAIL.value;
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(chkemail) == false) {
            alert("enter valid email address");
            document.MAINFORM.PRES_BK_EMAIL.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_onchange = function(event) {
    try {
        var nfieldname; // Utility Auto Fix Comments
        nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYT_GetCUBK_All('BENE_NEGO_ID', document.MAINFORM.PRES_BK_ID.name);
                lbi_CLASS_DOC_PRES_BY();
            } else {
                SYT_GetCUBK_All('PRES_BK_ID', document.MAINFORM.PRES_BK_ID.name);
            }
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'RegisterDocsnot') {

            SYM_EPLC_PRES_BK_TO_BENE();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        var nfieldname; // Utility Auto Fix Comments
        nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYM_EPLC_SQL_PRESENTER_CUST();
            } else {
                SYT_BankLookUp(event.currentTarget);
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        var nfieldname; // Utility Auto Fix Comments
        nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYS_InqCUBK('BENE_NEGO_POST_ADD', 'PRES_BK_ID', 'ID');
            } else {
                SYS_InqCUBK('PRES_BK_POST_ADD', 'PRES_BK_ID', 'ID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_REF_onchange = function(event) {
    try {
        //SYM_EPLC_CHK_PRES_REF();//Comment by jane at 2010-2-5 for not restricting to input ref
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_CCY_onchange = function(event) {
    try {
        document.MAINFORM.ADDIT_PRES_BK_CCY.value = document.MAINFORM.PRES_CCY.value;
        document.MAINFORM.ADV_BK_CHG_CCY.value = document.MAINFORM.PRES_CCY.value;

        SYM_EPLC_CAL_PRES_AMT_LCCCY();
        EEHtml.fireEvent(document.MAINFORM.PRES_AMT_LC_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ADD1_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ADD2_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ADD3_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ADD_BTN_MT750_onclick = function(event) {
    try {
        SYS_InqCUBK('RCV_BK_MT750_ADD', 'RCV_BK_ID_MT750', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ID_BTN_MT750_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ID_MT750_onchange = function(event) {
    try {
        SYT_GetCUBK_All('RCV_BK_ID_MT750', 'RCV_BK_ID_MT750');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_NM_MT750_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_BK_SW_ADD_MT750));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ORDER_NO_MT750_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_SW_ADD_MT750_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('REIM_BK_ID', 'REIM_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_POST_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_MT750_FLG_onchange = function(event) {
    try {
        SYF_EPLC_Get_RCV_BK_ID_MT750_INFO();
        SYF_EPLC_CAL_SEND_MT750_FLG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TNSHIP_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_BY_TNSHIP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_CheckDocuments_CE.js", e);
    }
}