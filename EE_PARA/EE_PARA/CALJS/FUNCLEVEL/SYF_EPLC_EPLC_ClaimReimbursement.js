var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        var Field_List; // Utility Auto Fix Comments
        var Mapping_List; // Utility Auto Fix Comments
        SYM_EPLC_INIT();
        document.MAINFORM.MESG_TYPE.value = 'MT742';
        document.MAINFORM.CLM_REIM_DT.value = SYS_BUSI_DATE;

        //start add by Canny 2013-09-12
        //Field_List = "CPYT_D_MAT_DATE";
        //Mapping_List = "TEMP_DT_ORGNL_MSG";
        SYS_GetTableDataByRule_S('SYF_EPLC_EPLC_ClaimReimbursement_InitValues_0', '1', 'Y');
        //end add by Canny 2013-09-12

        if (document.MAINFORM.TEMP_DT_ORGNL_MSG.value != '') {
            document.MAINFORM.VALUE_DT.value = document.MAINFORM.TEMP_DT_ORGNL_MSG.value;
        } else {
            document.MAINFORM.VALUE_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_ISSU_BK_52 = function() {
    try {

        var cISSUE_BK_ADD1; // Utility Auto Fix Comments
        var cISSUE_BK_ADD2; // Utility Auto Fix Comments
        var cISSUE_BK_ADD3; // Utility Auto Fix Comments
        var cISSUE_BK_ID; // Utility Auto Fix Comments
        var cISSUE_BK_NM; // Utility Auto Fix Comments
        var cISSUE_BK_SW_ADD; // Utility Auto Fix Comments
        cISSUE_BK_ID = document.MAINFORM.ISSUE_BK_ID.value;
        cISSUE_BK_NM = document.MAINFORM.ISSUE_BK_NM.value;
        cISSUE_BK_ADD1 = document.MAINFORM.ISSUE_BK_ADD1.value;
        cISSUE_BK_ADD2 = document.MAINFORM.ISSUE_BK_ADD2.value;
        cISSUE_BK_ADD3 = document.MAINFORM.ISSUE_BK_ADD3.value;
        cISSUE_BK_SW_ADD = document.MAINFORM.ISSUE_BK_SW_ADD.value;

        document.MAINFORM.ISSUE_BK_52_ID.value = cISSUE_BK_ID;
        document.MAINFORM.ISSUE_BK_52_NM.value = cISSUE_BK_NM;
        document.MAINFORM.ISSUE_BK_52_ADD1.value = cISSUE_BK_ADD1;
        document.MAINFORM.ISSUE_BK_52_ADD2.value = cISSUE_BK_ADD2;
        document.MAINFORM.ISSUE_BK_52_ADD3.value = cISSUE_BK_ADD3;
        document.MAINFORM.ISSUE_BK_52_SW_ADD.value = cISSUE_BK_SW_ADD;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYM_EPLC_M_PRES_BK_CLS();
        SYF_EPLC_CAL_ISSU_BK_52();
        SYT_DisableDivClass('B_div');
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.DRAWING_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYT_CHG_INIT('SYF_EPLC_CHG_INT_TO_RUN', 'SYF_EPLC_CAL_Get_Deffered_CHG');
        //SYF_EPLC_CAL_TTL_CLM_AMT();
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
        SYF_EPLC_CAL_Class_REIM_BK();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_INT_TO_RUN = function() {
    try {

        SYM_EPLC_M_EPLC_COURIER_CHG();
        SYM_EPLC_M_EPLC_OTHER_CHG();
        SYM_EPLC_M_EPLC_POST_CHG();
        SYM_EPLC_M_EPLC_SWIFT_CHG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TTL_CLM_AMT = function() {
    try {

        var nTTL_CLM_AMT; // Utility Auto Fix Comments
        nTTL_CLM_AMT = SYS_BeFloat(SYS_BeFloat(document.MAINFORM.PRES_AMT_LC_CCY.value) + SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value));

        document.MAINFORM.TTL_CLM_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, nTTL_CLM_AMT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_Get_Deffered_CHG = function() {
    try {

        //document.MAINFORM.PRES_BK_CHGS.value =Chg.Screen.getForeignBalChgTotalAmt();
        //document.MAINFORM.PRES_BK_CHGS.fireEvent("onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_EPLC_CAL_Get_Deffered_CHG();
        SYM_EPLC_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_Class_REIM_BK = function() {
    try {

        if (document.MAINFORM.MESG_TYPE.value == 'MT742' || document.MAINFORM.MESG_TYPE.value == 'MT799' || document.MAINFORM.MESG_TYPE.value == 'Mail') {
            SYT_ChangeFldClass_New('REIM_BK_NM', 'M');
        } else {
            SYT_ChangeFldClass_New('REIM_BK_NM', 'O');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD1_MT742_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT742));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD2_MT742_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT742));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD3_MT742_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT742));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD_BTN_MT742_onclick = function(event) {
    try {
        SYS_InqCUBK('AC_WT_BK_ADD_MT742', 'AC_WT_BK_ID_MT742', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_BTN_MT742_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_MT742_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AC_WT_BK_ID_MT742', 'AC_WT_BK_ID_MT742');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_NM_MT742_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD_MT742));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ORDER_NO_MT742_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_SW_ADD_MT742_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.BENE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.BENE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.BENE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_BK_ADD', 'BENE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_BK_ID', 'BENE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.BENE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        SYM_EPLC_TTL_CLM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISS_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_52_ID_onchange = function(event) {
    try {
        SYS_GetCUBK('ISS_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_CHG_onchange = function(event) {
    try {
        SYM_EPLC_TTL_CLM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_MESG_TYPE_onchange = function(event) {
    try {
        SYF_EPLC_CAL_Class_REIM_BK();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_AMT_LC_CCY_onchange = function(event) {
    try {
        SYF_EPLC_CAL_TTL_CLM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
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
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        SYF_EPLC_CAL_TTL_CLM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
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
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
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
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
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
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_CHG_onchange = function(event) {
    try {
        SYM_EPLC_TTL_CLM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('REIM_BK_ID', 'REIM_BK_ID'); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        //Chk_TEMP_N90_DT_32();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ClaimReimbursement.js", e);
    }
}