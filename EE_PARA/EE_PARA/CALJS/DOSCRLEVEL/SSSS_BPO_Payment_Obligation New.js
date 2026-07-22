"path:SCRN/DO/BPO_Payment_Obligation New.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CAL_PERCENT = function() {
    try {
        var pmt_oblgr_amt; // Utility Auto Fix Comments
        var total_net_amt; // Utility Auto Fix Comments
        total_net_amt = SYS_BeFloat(SYS_getValueFromMain('TSU_TTL_NET_AMT'));
        pmt_oblgr_amt = SYS_BeFloat(document.MAINFORM.TSU_PMTOBLGR_AMT.value);
        document.MAINFORM.PERCENT.value = Math.round(pmt_oblgr_amt / total_net_amt * 100);
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation New.js", e);
    }
}

csDOScreenProto.CAL_TSU_BPOOBLGR_INVAMT = function() {
    try {
        var TSU_BPOOBLGR_AMT; // Utility Auto Fix Comments
        var TTL_INV_AMT; // Utility Auto Fix Comments
        var pec; // Utility Auto Fix Comments
        if (SYS_ORG_FUNCTION_NAME == 'ProcessInvoiceFromCE') {
            TTL_INV_AMT = SYS_BeFloat(SYS_getValueFromMain("FA_TTL_INV_AMT"));
            pec = SYS_BeFloat(document.MAINFORM.PERCENT.value / 100);
            TSU_BPOOBLGR_AMT = TTL_INV_AMT * pec; // Utility Auto Fix Comments
            document.MAINFORM.TSU_BPOOBLGR_AMT.value = SYT_AmtFormat(document.MAINFORM.TSU_CCY.value, TSU_BPOOBLGR_AMT);
            SYT_ChangeFldClass_New('R_ASSET_ACNO', 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation New.js", e);
    }
}

csDOScreenProto.CAL_TSU_BPOOBLGR_INVPMT = function() {
    try {
        var TSU_BPOOBLGR_AMT; // Utility Auto Fix Comments
        var PMT_AMT_SUM; // Utility Auto Fix Comments
        var pec; // Utility Auto Fix Comments
        if (SYS_ORG_FUNCTION_NAME == 'Settlement') {
            PMT_AMT_SUM = SYS_BeFloat(SYS_getValueFromMain("FA_PMT_AMT_SUM"));
            pec = SYS_BeFloat(document.MAINFORM.PERCENT.value / 100);
            TSU_BPOOBLGR_AMT = PMT_AMT_SUM * pec; // Utility Auto Fix Comments
            document.MAINFORM.TSU_BPOOBLGR_AMT.value = SYT_AmtFormat(document.MAINFORM.TSU_CCY.value, TSU_BPOOBLGR_AMT);
            SYT_ChangeFldClass_New('R_ASSET_ACNO', 'M');

        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation New.js", e);
    }
}

csDOScreenProto.CAL_TSU_OBLGRBK = function() {
    try {
        if (document.MAINFORM.TSU_OBLGRBK_ID.value != '') {
            //SYS_GetCUBK('TSU_OBLGRBK_ID', document.MAINFORM.TSU_OBLGRBK_ID.name);
        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation New.js", e);
    }
}

csDOScreenProto.CAL_TSU_OBLGRBK_SW_TAG = function() {
    try {
        if (document.MAINFORM.TSU_OBLGR_BK.value != "") {
            document.MAINFORM.TSU_OBLGRBK_SW_TAG.value = "A";
        } else {
            if (document.MAINFORM.TSU_OBLGRBK_NM.value != "" || document.MAINFORM.TSU_OBLGRBK_ADD1.value != "" || document.MAINFORM.TSU_OBLGRBK_ADD2.value != "" || document.MAINFORM.TSU_OBLGRBK_ADD3.value != "") {
                document.MAINFORM.TSU_OBLGRBK_SW_TAG.value = "D";
            } else {
                document.MAINFORM.TSU_OBLGRBK_SW_TAG.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation New.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        CAL_TSU_OBLGRBK();
        document.MAINFORM.TSU_CCY.value = SYS_getValueFromMain('TSU_CCY');
        document.MAINFORM.TSU_PMTOBLGR_AMT.value = SYT_AmtFormat(document.MAINFORM.TSU_CCY.value, document.MAINFORM.TSU_PMTOBLGR_AMT.value);
        document.MAINFORM.TSU_PMT_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.TSU_CCY.value, document.MAINFORM.TSU_PMT_CHG_AMT.value);
        CAL_TSU_OBLGRBK_SW_TAG();
        CAL_PERCENT();
        CAL_TSU_BPOOBLGR_INVAMT();
        CAL_TSU_BPOOBLGR_INVPMT();

    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation New.js", e);
    }
}

csDOScreenProto.R_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL;
    SQL = "C_CUST_ID=\'" + document.MAINFORM.TSU_OBLGRBK_ID.value + "\'";
    SYS_InqCUBK_Sql("BPO_R_ASSET_ACNO", SQL);*/
        SYS_InqCUBK_byCondition('BPO_R_ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation New.js", e);
    }
}