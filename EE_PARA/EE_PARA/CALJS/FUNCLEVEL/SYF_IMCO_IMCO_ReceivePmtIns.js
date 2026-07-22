var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_BENEF_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_BL_AWB_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_BL_AWB_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_BL_AWB_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CERTIFICATE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRAFT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRAFT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRAFT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INSP_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INSP_CERT_2_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INSURANCE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INSURANCE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INSURANCE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INVOICE_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INVOICE_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INVOICE_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_OTHERS_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_OTHERS_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_OTHERS_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PACK_LIST_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_IPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IMCO_IMCO_ReceivePmtIns.js", e);
    }
}