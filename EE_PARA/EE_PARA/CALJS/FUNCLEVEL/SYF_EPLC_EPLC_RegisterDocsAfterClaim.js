var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.DRAWING_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYT_DisableDivClass('B_div');
        SYM_EPLC_M_DOCUMENTS_BY_FUNCTION();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.DRAWING_REF.value = document.MAINFORM.C_MAIN_REF.value;
        SYM_EPLC_INIT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.AC_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.AC_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.AC_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AC_WT_BK_ADD', 'AC_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AC_WT_BK_ID', 'AC_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AC_WT_BK_ID', 'AC_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.AC_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADDIT_PRES_BK_AMTS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_AMT_onchange = function(event) {
    try {
        document.MAINFORM.LC_BAL.value = document.MAINFORM.LC_BAL_TEMP.value;

        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        var nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYS_InqCUBK('BENE_NEGO_ID_ADD', 'PRES_BK_ID', 'ID');
            } else {
                SYS_InqCUBK('PRES_BK_ADD', 'PRES_BK_ID', 'ID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_onchange = function(event) {
    try {
        var nfieldname = document.getElementsByName('DOC_PRES_BY');
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
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        var nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYM_EPLC_SQL_PRESENTER_CUST();
            } else {
                SYT_BankLookUp(event.currentTarget);
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        var nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYS_InqCUBK('BENE_NEGO_POST_ADD', 'PRES_BK_ID', 'ID');
            } else {
                SYS_InqCUBK('PRES_BK_POST_ADD', 'PRES_BK_ID', 'ID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.RCV_DOC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.RCV_DOC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.RCV_DOC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('RCV_DOC_BK_ID', 'RCV_DOC_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('RCV_DOC_BK_ID', 'RCV_DOC_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(MAINFORM.RCV_DOC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('RCV_DOC_BK_POST_ADD', 'RCV_DOC_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocsAfterClaim.js", e);
    }
}