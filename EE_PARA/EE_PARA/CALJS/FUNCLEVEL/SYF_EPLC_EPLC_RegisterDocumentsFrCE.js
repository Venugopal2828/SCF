var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_EPLC_CALL_PRSNTER_BENE = function() {
    try {

        if (document.MAINFORM.DOC_PRES_BY.value == "Beneficiary") {
            document.MAINFORM.PRES_BK_ID.value = document.MAINFORM.BENE_ID.value;
            document.MAINFORM.PRES_BK_NM.value = document.MAINFORM.BENE_NM.value;
            document.MAINFORM.PRES_BK_ADD1.value = document.MAINFORM.BENE_ADD1.value;
            document.MAINFORM.PRES_BK_ADD2.value = document.MAINFORM.BENE_ADD2.value;
            document.MAINFORM.PRES_BK_ADD3.value = document.MAINFORM.BENE_ADD3.value;
            document.MAINFORM.PRES_BK_MAIL_ADD.value = document.MAINFORM.BENE_MAIL_ADD.value;
            document.MAINFORM.PRES_BK_LANG.value = document.MAINFORM.BENE_LANG.value;
            document.MAINFORM.PRES_BK_CORR_MED.value = document.MAINFORM.BENE_CORR_MED.value;
            document.MAINFORM.PRES_BK_EMAIL.value = document.MAINFORM.BENE_EMAIL.value;
            document.MAINFORM.PRES_BK_FAX.value = document.MAINFORM.BENE_FAX.value;
            document.MAINFORM.PRES_BK_TLX.value = document.MAINFORM.BENE_TLX.value;
            document.MAINFORM.PRES_BK_AC_OFF_CODE.value = document.MAINFORM.BENE_AC_OFF_CODE.value;
            document.MAINFORM.PRES_BK_AC_NO.value = document.MAINFORM.BENE_ACNO.value;
            document.MAINFORM.PRES_BK_REF.value = document.MAINFORM.BENE_REF_NO.value;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_DOC_PRES_BY = function() {
    try {

        SYM_EPLC_M_CLASS_BY_DOCPRES(document.MAINFORM.DOC_PRES_BY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();
        SYM_EPLC_M_CAL_TTL_PRES_AMT();
        SYM_EPLC_M_CAL_PENDING_PRES_BAL();
        SYM_EPLC_M_CAL_AVLB_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT();
        SYM_EPLC_DRAWING_REF();
        SYM_EPLC_INIT_CCY();
        SYF_EPLC_CALL_PRSNTER_BENE();
        document.MAINFORM.TEMP_CHAR1.value = document.MAINFORM.PRES_BK_REF.value;
        document.MAINFORM.PRES_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.ADV_BK_CHGS.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.OUR_CHGS_APPL.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.PRES_BK_CHGS.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.ADDIT_PRES_BK_AMTS.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.REIM_BK_CHG.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.CHGS_DEDUCTED.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.TTL_CLM_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.TTL_CLM_AMT.value);
        document.MAINFORM.DOC_PRES.value = '';

        document.MAINFORM.LC_BAL_TEMP.value = document.MAINFORM.LC_BAL.value;
        document.MAINFORM.TEMP_TTL_PRES_AMT.value = document.MAINFORM.TTL_PRES_AMT.value;
        document.MAINFORM.TEMP_PENDING_PRES_BAL.value = document.MAINFORM.PENDING_PRES_BAL.value;

        SYM_EPLC_M_CAL_PENDING_PRES_BAL();
        SYM_EPLC_M_CAL_AVLB_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();

        // SYF_EPLC_CLASS_DOC_PRES_BY();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.DRAWING_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYT_DisableDivClass('B_div');
        SYM_EPLC_M_DOCUMENTS_BY_FUNCTION();
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
        FLD_EPLC_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADDIT_PRES_BK_AMTS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADDIT_PRES_BK_CCY_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHGS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHG_CCY_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DOC_PRES_BY_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_DOC_PRES_BY();
        SYM_EPLC_CLEAR_PRES_INFO();
        SYF_EPLC_CALL_PRSNTER_BENE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PENDING_PRES_BAL_onchange = function(event) {
    try {
        SYM_EPLC_M_CAL_AVLB_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.AVLB_LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.PRES_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.PRES_AMT.value = 0;
        }
        SYM_EPLC_Cal_LC_Balance();
        SYM_EPLC_CAL_PRES_AMT_LCCCY();
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
        EEHtml.fireEvent(document.MAINFORM.PRES_AMT_LC_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_AMT_LC_CCY_onchange = function(event) {
    try {
        SYM_EPLC_M_CAL_PENDING_PRES_BAL();
        SYM_EPLC_M_CAL_TTL_PRES_AMT();
        EEHtml.fireEvent(document.MAINFORM.TTL_PRES_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.PENDING_PRES_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('PRES_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        SYM_EPLC_CAL_TTL_CLAIM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
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
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('PRES_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_POST_ADD', 'PRES_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_REF_onchange = function(event) {
    try {
        //SYM_EPLC_CHK_PRES_REF();  //Comment by jane at 2010-2-5 for not restricting to input ref
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_CCY_onchange = function(event) {
    try {
        document.MAINFORM.ADDIT_PRES_BK_CCY.value = document.MAINFORM.PRES_CCY.value;
        document.MAINFORM.ADV_BK_CHG_CCY.value = document.MAINFORM.PRES_CCY.value;
        document.MAINFORM.ADV_BK_CHGS.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.OUR_CHGS_APPL.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.PRES_BK_CHGS.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.ADDIT_PRES_BK_AMTS.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.REIM_BK_CHG.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.CHGS_DEDUCTED.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, 0);
        document.MAINFORM.TTL_CLM_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.TTL_CLM_AMT.value);

        SYM_EPLC_CAL_PRES_AMT_LCCCY();
        EEHtml.fireEvent(document.MAINFORM.PRES_AMT_LC_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterDocumentsFrCE.js", e);
    }
}