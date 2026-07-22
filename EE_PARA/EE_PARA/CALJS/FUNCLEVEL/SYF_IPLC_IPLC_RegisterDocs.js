var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYM_IPLC_INIT();
        SYM_IPLC_INIT_FOR_DT();
        SYM_IPLC_NEGO_INIT_VALUES();
        //SYF_IPLC_INIT_VALUES();
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        //SYT_Cal_LOCAL_AMT('LC_CCY', 'LC_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
        document.MAINFORM.DOC_STAT.value = '';
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYM_IPLC_NEGO_SHOW_NOTES();
        SYM_IPLC_MPO_PRES_CORR_MED();
        SYM_IPLC_MPO_PRES_BK_ADD_BTN();
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
        SYM_IPLC_DOC_STAT_SG();
        SYT_DisableDivClass('C_div');
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_ChangeFldClass(document.MAINFORM.DRAFT, "O");
        SYT_ChangeFldClass(document.MAINFORM.INVOICE, "O");
        SYT_ChangeFldClass(document.MAINFORM.BL_AWB, "O");
        SYT_ChangeFldClass(document.MAINFORM.CERTIFICATE, "O");
        SYT_ChangeFldClass(document.MAINFORM.INSP_CERT, "O");
        SYT_ChangeFldClass(document.MAINFORM.PACK_LIST, "O");
        SYT_ChangeFldClass(document.MAINFORM.INSURANCE, "O");
        SYT_ChangeFldClass(document.MAINFORM.VESSEL_CERT, "O");
        SYT_ChangeFldClass(document.MAINFORM.FREIGHT_INV, "O");
        SYT_ChangeFldClass(document.MAINFORM.BENEF_CERT, "O");
        SYT_ChangeFldClass(document.MAINFORM.OTHERS, "O");
        SYT_ChangeFldClass(document.MAINFORM.DRAFT_1, "O");
        SYT_ChangeFldClass(document.MAINFORM.INVOICE_1, "O");
        SYT_ChangeFldClass(document.MAINFORM.BL_AWB_1, "O");
        SYT_ChangeFldClass(document.MAINFORM.CERTIFICATE_1, "O");
        SYT_ChangeFldClass(document.MAINFORM.INSP_CERT_1, "O");
        SYT_ChangeFldClass(document.MAINFORM.PACK_LIST_1, "O");
        SYT_ChangeFldClass(document.MAINFORM.INSURANCE_1, "O");
        SYT_ChangeFldClass(document.MAINFORM.VESSEL_CERT_1, "O");
        SYT_ChangeFldClass(document.MAINFORM.FREIGHT_INV_1, "O");
        SYT_ChangeFldClass(document.MAINFORM.BENEF_CERT_1, "O");
        SYT_ChangeFldClass(document.MAINFORM.OTHERS_1, "O");
        SYT_ChangeFldClass(document.MAINFORM.DRAFT_2, "O");
        SYT_ChangeFldClass(document.MAINFORM.INVOICE_2, "O");
        SYT_ChangeFldClass(document.MAINFORM.BL_AWB_2, "O");
        SYT_ChangeFldClass(document.MAINFORM.CERTIFICATE_2, "O");
        SYT_ChangeFldClass(document.MAINFORM.INSP_CERT_2, "O");
        SYT_ChangeFldClass(document.MAINFORM.PACK_LIST_2, "O");
        SYT_ChangeFldClass(document.MAINFORM.INSURANCE_2, "O");
        SYT_ChangeFldClass(document.MAINFORM.VESSEL_CERT_2, "O");
        SYT_ChangeFldClass(document.MAINFORM.FREIGHT_INV_2, "O");
        SYT_ChangeFldClass(document.MAINFORM.BENEF_CERT_2, "O");
        SYT_ChangeFldClass(document.MAINFORM.OTHERS_2, "O");
        SYT_ChangeFldClass(document.MAINFORM.DOC_PRES, "M");
        EEHtml.fireEvent(document.MAINFORM.DOC_PRES_BY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_IPLC_INIT_VALUES = function() {
    try {
        document.MAINFORM.PRES_AMT.value = 0;
        document.MAINFORM.CHGS_DEDUCTED.value = 0;
        document.MAINFORM.TOTAL_AMT.value = 0;
        document.MAINFORM.PRES_BK_REF.value = '';
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*SYF_IPLC_INIT_VALUES", e);
    }
}

csFuncLevelProto.SYF_IPLC_Pres_Bal = function() {
    try {
        document.MAINFORM.ORIGINAL_LC_BAL.value = document.MAINFORM.LC_BAL.value;
        var TTL_PRES_BAL = SYS_BeFloat(document.MAINFORM.TTL_PRES_BAL.value);
        var ORIGINAL_LC_BAL = SYS_BeFloat(document.MAINFORM.ORIGINAL_LC_BAL.value);
        var PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        TEMP_LC_BAL = TTL_PRES_BAL + PRES_AMT;
        if (TEMP_LC_BAL > ORIGINAL_LC_BAL) {
            alert("Total Presentation amount Exceeds LC Balance!");
            document.MAINFORM.PRES_AMT.value = 0;
            //EEHtml.fireEvent(document.MAINFORM.PRES_AMT, "onchange");
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*SYF_IPLC_Pres_Bal", e);
    }
}

csFuncLevelProto.SYF_IPLC_presenterchange = function() {
    try {
        SYT_ChangeFldClass_New('PRES_BK_ID', 'M');
        if (document.MAINFORM.DOC_PRES_BY.value == 'Beneficiary') {
            SYT_ChangeFldClass_New('PRES_BK_ID', 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*SYF_IPLC_presenterchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADDIT_PRES_BK_AMTS_onchange = function(event) {
    try {
        if (document.MAINFORM.ADDIT_PRES_BK_AMTS.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.ADDIT_PRES_BK_AMTS.value = 0;
        }


        SYM_IPLC_Cal_TOTAL_AMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_ADDIT_PRES_BK_AMTS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_ADV_THU_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_ADV_THU_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_ADV_THU_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_ID();
        EEHtml.fireEvent(document.MAINFORM.ADV_THU_BK_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_ADV_THU_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_ADV_THU_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_ID_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_ADV_THU_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_ID_NOCHG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_APPL_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_BENEF_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_BENEF_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_BENEF_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_BENE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_BL_AWB_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_BL_AWB_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_BL_AWB_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_CERTIFICATE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_CERTIFICATE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_CERTIFICATE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        if (document.MAINFORM.CHGS_DEDUCTED.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.CHGS_DEDUCTED.value = 0;
        }


        SYM_IPLC_Cal_TOTAL_AMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_CHGS_DEDUCTED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_PRES_BY_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_INFO_BY_DOCPB();
        SYF_IPLC_presenterchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_DOC_PRES_BY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_DRAFT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_DRAFT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_DRAFT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_FREIGHT_INV_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_FREIGHT_INV_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_FREIGHT_INV_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_INSP_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_INSP_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSP_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_INSP_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_INSURANCE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_INSURANCE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_INSURANCE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_INVOICE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_INVOICE_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_INVOICE_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_OTHERS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_OTHERS_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_OTHERS_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PACK_LIST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PACK_LIST_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PACK_LIST_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.PRES_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.PRES_AMT.value = 0;
        }
        SYM_IPLC_Cal_PRES_BAL();
        SYM_IPLC_CAL_LC_BAL_NEGO();
        SYF_IPLC_Pres_Bal();
        SYM_IPLC_Cal_TOTAL_AMT();
        EEHtml.fireEvent(document.MAINFORM.TOTAL_AMT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.PRES_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        if (document.MAINFORM.PRES_BK_CHGS.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.PRES_BK_CHGS.value = 0;
        }


        SYM_IPLC_Cal_TOTAL_AMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_BK_CHGS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_MPO_PRES_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
        SYM_IPLC_SQL_PRES_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_DT_onchange = function(event) {
    try {
        var nDays1 = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.PRES_DT.name);

        if (nDays1 > 0) {
            SYS_CheckError(document.MAINFORM.PRES_DT, 'Presentation Date should be later than LC Transaction date!');
            document.MAINFORM.EXPIRY_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_TOTAL_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.TOTAL_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.TOTAL_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_TOTAL_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_VESSEL_CERT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_VESSEL_CERT_1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_VESSEL_CERT_2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_THU_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MULTI_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        if (document.MAINFORM.DOC_PRES_BY.value == 'Beneficiary' || document.MAINFORM.DOC_PRES_BY.value == '') {
            SYS_InqCUBK('PRES_CUST_ID');
        } else {
            SYT_BankLookUp(event.currentTarget);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_Cal_PRES_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_PRES_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_button2_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_button3_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_button4_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_button5_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_button6_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterDocs.js*FLD_IPLC_view_1_onclick", e);
    }
}