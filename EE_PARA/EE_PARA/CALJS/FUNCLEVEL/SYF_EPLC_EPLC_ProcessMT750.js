var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_EPLC_MPO_AC_WT_BK = function() {
    try {

        var arr_Flds = new Array(document.MAINFORM.AC_WT_BK_ID, document.MAINFORM.AC_WT_BK_ID_BTN, document.MAINFORM.AC_WT_BK_NM, document.MAINFORM.AC_WT_BK_ADD_BTN, document.MAINFORM.AC_WT_BK_ADD1, document.MAINFORM.AC_WT_BK_ADD2, document.MAINFORM.AC_WT_BK_ADD3, document.MAINFORM.AC_WT_BK_SW_TAG, document.MAINFORM.AC_WT_BK_SW_ADD);
        var arr_FldClass = new Array('P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P');

        SYT_ChangeFldStringClass(arr_Flds, arr_FldClass);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_DOC_PRES_BY = function() {
    try {

        SYM_EPLC_M_CLASS_BY_DOCPRES(document.MAINFORM.DOC_PRES_BY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CALL_PRSNTER_BENE = function() {
    try {

        if (document.MAINFORM.DOC_PRES_BY.value == "Beneficiary") {
            document.MAINFORM.PRES_BK_ID.value = document.MAINFORM.BENE_ID.value;
            document.MAINFORM.PRES_BK_NM.value = document.MAINFORM.BENE_NM.value;
            document.MAINFORM.PRES_BK_ADD1.value = document.MAINFORM.BENE_ADD1.value;
            document.MAINFORM.PRES_BK_ADD2.value = document.MAINFORM.BENE_ADD2.value;
            document.MAINFORM.PRES_BK_ADD3.value = document.MAINFORM.BENE_ADD3.value;
            //document.MAINFORM.PRES_BK_MAIL_ADD.value = document.MAINFORM.BENE_MAIL_ADD.value;
            //document.MAINFORM.PRES_BK_LANG.value = document.MAINFORM.BENE_LANG.value;
            //document.MAINFORM.PRES_BK_CORR_MED.value = document.MAINFORM.BENE_CORR_MED.value;
            //document.MAINFORM.PRES_BK_EMAIL.value = document.MAINFORM.BENE_EMAIL.value;
            //document.MAINFORM.PRES_BK_FAX.value = document.MAINFORM.BENE_FAX.value;
            //document.MAINFORM.PRES_BK_TLX.value = document.MAINFORM.BENE_TLX.value;
            //document.MAINFORM.PRES_BK_AC_OFF_CODE.value = document.MAINFORM.BENE_AC_OFF_CODE.value; 
            //document.MAINFORM.PRES_BK_AC_NO.value = document.MAINFORM.BENE_ACNO.value;

            document.MAINFORM.PRES_BK_REF.value = document.MAINFORM.BENE_REF_NO.value;
            document.MAINFORM.PRES_BENE_REF.value = document.MAINFORM.BENE_REF_NO.value;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_PRES_REF = function() {
    try {

        if (document.MAINFORM.DOC_PRES_BY.value == 'Beneficiary') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ID_BTN, 'P');
            SYT_hideObj("PRES_BK_REF");
            SYT_DisObj("PRES_BENE_REF");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BENE_REF, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ID_BTN, 'M');
            SYT_hideObj("PRES_BENE_REF");
            SYT_DisObj("PRES_BK_REF");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BENE_REF, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.DRAWING_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYT_DisableDivClass('B_div');
        SYF_EPLC_MPO_AC_WT_BK();
        SYF_EPLC_CLASS_DOC_PRES_BY();
        SYM_EPLC_M_MPO_PRES_REF(document.MAINFORM.DOC_PRES_BY.value);
        SYF_EPLC_CALL_PRSNTER_BENE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_PRES_BK_REF = function() {
    try {

        /*added by aac for PayAccept catalog requirement*/
        if (document.MAINFORM.DOC_PRES_BY.value == "Beneficiary's Bank") {
            document.MAINFORM.PRES_BENE_REF.value = document.MAINFORM.PRES_BK_REF.value;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();

        SYM_EPLC_M_CAL_TTL_PRES_AMT();
        SYM_EPLC_M_CAL_PENDING_PRES_BAL();
        SYM_EPLC_M_CAL_AVLB_LC_BAL();
        SYF_EPLC_PRES_BK_REF();
        document.MAINFORM.DOC_STAT.value = 'Discrepancy Found';
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT();
        //SYM_EPLC_DRAWING_REF();
        SYM_EPLC_CAL_PRES_AMT_LCCCY(); //calculate presentation amount in lc ccy
        document.MAINFORM.ADDIT_PRES_BK_CCY.value = document.MAINFORM.PRES_CCY.value;
        document.MAINFORM.ADV_BK_CHG_CCY.value = document.MAINFORM.PRES_CCY.value;
        EEHtml.fireEvent(document.MAINFORM.PRES_AMT_LC_CCY, 'onchange');
        document.MAINFORM.LC_BAL_TEMP.value = document.MAINFORM.LC_BAL.value;
        document.MAINFORM.TEMP_TTL_PRES_AMT.value = document.MAINFORM.TTL_PRES_AMT.value;
        document.MAINFORM.TEMP_PENDING_PRES_BAL.value = document.MAINFORM.PENDING_PRES_BAL.value;
        SYT_ChangeFldClass(document.MAINFORM.DISC_DET, "P");
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
        SYM_EPLC_M_CAL_PENDING_PRES_BAL(); //PENDING_PRES_BAL= TEMP_PENDING_PRES_BAL + PRES_AMT_LC_CCY
        SYM_EPLC_M_CAL_AVLB_LC_BAL(); //AVLB_LC_BAL = LC_BAL_TEMPL - PENDING_PRES_BAL

        //for PRES_BK details
        SYT_GetBKInfoByBIC(document.MAINFORM.PRES_BK_SW_ADD);
        SYT_GetBKInfoByBIC(document.MAINFORM.AC_WT_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADDIT_PRES_BK_AMTS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADDIT_PRES_BK_CCY_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHGS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHG_CCY_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DOC_PRES_BY_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_DOC_PRES_BY();
        SYM_EPLC_CLEAR_PRES_INFO();
        SYM_EPLC_M_MPO_PRES_REF(document.MAINFORM.DOC_PRES_BY.value);
        SYF_EPLC_CALL_PRSNTER_BENE();
        SYF_EPLC_MPO_PRES_REF();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PENDING_PRES_BAL_onchange = function(event) {
    try {
        SYM_EPLC_M_CAL_AVLB_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.AVLB_LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_AMT_onchange = function(event) {
    try {
        SYM_EPLC_CAL_PRES_AMT_LCCCY();
        EEHtml.fireEvent(document.MAINFORM.PRES_AMT_LC_CCY, 'onchange');
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_AMT_LC_CCY_onchange = function(event) {
    try {
        SYM_EPLC_M_CAL_PENDING_PRES_BAL();
        SYM_EPLC_M_CAL_TTL_PRES_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_PRES_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.PENDING_PRES_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_ID', 'PRES_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_REF_onchange = function(event) {
    try {
        SYM_EPLC_CHK_PRES_REF();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_CCY_onchange = function(event) {
    try {
        document.MAINFORM.ADDIT_PRES_BK_CCY.value = document.MAINFORM.PRES_CCY.value;
        document.MAINFORM.ADV_BK_CHG_CCY.value = document.MAINFORM.PRES_CCY.value;

        SYM_EPLC_CAL_PRES_AMT_LCCCY();
        EEHtml.fireEvent(document.MAINFORM.PRES_AMT_LC_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT750.js", e);
    }
}