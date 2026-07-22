"path:SCRN/DO/BPO_Payment_Obligation.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CAL_ASSET_ACNO = function() {
    try {
        var CONF_ADDED; // Utility Auto Fix Comments
        if (SYS_ORG_FUNCTION_NAME == 'AdviceBPO') {
            CONF_ADDED = SYS_getValueFromMain("CONF_ADDED");
            if (CONF_ADDED == "Yes") {
                SYS_GetTableDataByRule_S('SSSS_BPO_Payment_Obligation_CAL_ASSET_ACNO_0', '1', true);
                SYT_ChangeFldClass_New('ASSET_ACNO', 'M');
            } else {
                document.MAINFORM.ASSET_ACNO.value = '';
                SYT_ChangeFldClass_New('ASSET_ACNO', 'P');
            }
        } else if (SYS_ORG_FUNCTION_NAME == 'CheckBPO') {
            SYS_GetTableDataByRule_S('SSSS_BPO_Payment_Obligation_CAL_ASSET_ACNO_1', '1', true);
        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.CAL_BPOOBLGR_AMT_SETL = function() {
    try {
        var TSU_BPOOBLGR_AMT; // Utility Auto Fix Comments
        var TSU_PAY_CONF_AMT; // Utility Auto Fix Comments
        var pec; // Utility Auto Fix Comments
        if (SYS_ORG_FUNCTION_NAME == 'BPOSettlement') {
            TSU_PAY_CONF_AMT = SYS_BeFloat(SYS_getValueFromMain("TSU_PAY_CONF_AMT"));
            pec = SYS_BeFloat(document.MAINFORM.PERCENT.value / 100);
            TSU_BPOOBLGR_AMT = TSU_PAY_CONF_AMT * pec; // Utility Auto Fix Comments
            document.MAINFORM.TSU_BPOOBLGR_AMT.value = SYT_AmtFormat(document.MAINFORM.TSU_CCY.value, TSU_BPOOBLGR_AMT);


        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.CAL_NEW_OBLGR_CONF_BAL = function() {
    try {
        var CONF_ADDED; // Utility Auto Fix Comments
        var CONF_PCT; // Utility Auto Fix Comments
        var TSU_NEW_OBLGR_CONF_BAL; // Utility Auto Fix Comments
        var TSU_PMTOBLGR_AMT; // Utility Auto Fix Comments
        if (SYS_ORG_FUNCTION_NAME == 'AdviceBPOAmend') {
            CONF_ADDED = SYS_getValueFromMain("CONF_ADDED");
            CONF_PCT = SYS_BeFloat(SYS_getValueFromMain("CONF_PCT"));
            TSU_PMTOBLGR_AMT = SYS_BeFloat(document.MAINFORM.TSU_PMTOBLGR_AMT.value);
            if (CONF_ADDED == "Yes") {
                TSU_NEW_OBLGR_CONF_BAL = TSU_PMTOBLGR_AMT * CONF_PCT / 100;
                document.MAINFORM.TSU_NEW_OBLGR_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.TSU_CCY.value, TSU_NEW_OBLGR_CONF_BAL);
            } else {
                document.MAINFORM.TSU_NEW_OBLGR_CONF_BAL.value = 0;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.CAL_OBLGR_CONF_BAL = function() {
    try {
        var CONF_ADDED; // Utility Auto Fix Comments
        var CONF_PCT; // Utility Auto Fix Comments
        var TSU_OBLGR_CONF_BAL; // Utility Auto Fix Comments
        var TSU_PMTOBLGR_AMT; // Utility Auto Fix Comments
        if (SYS_ORG_FUNCTION_NAME == 'AdviceBPO') {
            CONF_ADDED = SYS_getValueFromMain("CONF_ADDED");
            CONF_PCT = SYS_BeFloat(SYS_getValueFromMain("CONF_PCT"));
            TSU_PMTOBLGR_AMT = SYS_BeFloat(document.MAINFORM.TSU_PMTOBLGR_AMT.value);
            if (CONF_ADDED == "Yes") {
                TSU_OBLGR_CONF_BAL = TSU_PMTOBLGR_AMT * CONF_PCT / 100;
                document.MAINFORM.TSU_OBLGR_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.TSU_CCY.value, TSU_OBLGR_CONF_BAL);
            } else {
                document.MAINFORM.TSU_OBLGR_CONF_BAL.value = 0;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.CAL_PERCENT = function() {
    try {
        var pmt_oblgr_amt; // Utility Auto Fix Comments
        var total_net_amt; // Utility Auto Fix Comments
        total_net_amt = SYS_BeFloat(SYS_getValueFromMain('TSU_TTL_NET_AMT'));
        pmt_oblgr_amt = SYS_BeFloat(document.MAINFORM.TSU_PMTOBLGR_AMT.value);
        document.MAINFORM.PERCENT.value = pmt_oblgr_amt / total_net_amt * 100;
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.CAL_TSU_BPOOBLGR_AMT = function() {
    try {
        var TSU_BPOOBLGR_AMT; // Utility Auto Fix Comments
        var TSU_PAY_AMT; // Utility Auto Fix Comments
        var pec; // Utility Auto Fix Comments
        if (SYS_ORG_FUNCTION_NAME == 'BPOAcceptance') {
            TSU_PAY_AMT = SYS_BeFloat(SYS_getValueFromMain("TSU_PAY_AMT"));
            pec = SYS_BeFloat(document.MAINFORM.PERCENT.value / 100);
            TSU_BPOOBLGR_AMT = TSU_PAY_AMT * pec; // Utility Auto Fix Comments
            document.MAINFORM.TSU_BPOOBLGR_AMT.value = SYT_AmtFormat(document.MAINFORM.TSU_CCY.value, TSU_BPOOBLGR_AMT);
            SYT_ChangeFldClass_New('R_ASSET_ACNO', 'M');

        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.CAL_TSU_OBLGRBK = function() {
    try {
        if (document.MAINFORM.TSU_OBLGRBK_ID.value != '') {
            SYS_GetCUBK('TSU_OBLGRBK_ID', document.MAINFORM.TSU_OBLGRBK_ID.name);
        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
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
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.CAL_TSU_RCPTBK = function() {
    try {
        if (document.MAINFORM.TSU_RCPTBK_ID.value != '') {
            SYS_GetCUBK('TSU_RCPTBK_ID', document.MAINFORM.TSU_RCPTBK_ID.name);

        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.CAL_TSU_RCPTBK_SW_TAG = function() {
    try {
        if (document.MAINFORM.TSU_RCPTBK.value != "") {
            document.MAINFORM.TSU_RCPTBK_SW_TAG.value = "A";
        } else {
            if (document.MAINFORM.TSU_RCPTBK_NM.value != "" || document.MAINFORM.TSU_RCPTBK_ADD1.value != "" || document.MAINFORM.TSU_RCPTBK_ADD2.value != "" || document.MAINFORM.TSU_RCPTBK_ADD3.value != "") {
                document.MAINFORM.TSU_RCPTBK_SW_TAG.value = "D";
            } else {
                document.MAINFORM.TSU_RCPTBK_SW_TAG.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        if (SYS_ORG_FUNCTION_NAME == 'CheckBPO') {
            document.MAINFORM.TSU_CCY_OLD.value = document.MAINFORM.TSU_CCY.value;
            document.MAINFORM.TSU_PMTOBLGR_AMT_OLD.value = document.MAINFORM.TSU_PMTOBLGR_AMT.value;
            document.MAINFORM.ASSET_ACNO_OLD.value = document.MAINFORM.ASSET_ACNO.value;
        }
        if (SYS_ORG_FUNCTION_NAME == 'AdviceBPO') {
            document.MAINFORM.TSU_CCY_OLD.value = document.MAINFORM.TSU_CCY.value;
            document.MAINFORM.ASSET_ACNO_OLD.value = document.MAINFORM.ASSET_ACNO.value;
        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.Hidden_Conf = function() {
    try {
        if (SYS_ORG_FUNCTION_NAME == 'CheckBPO' || SYS_ORG_FUNCTION_NAME == 'CheckBPOAMD' || SYS_ORG_FUNCTION_NAME == 'ImportAccept') {
            EEHtml.getElementById("conf").style.display = "none";
        } else if (SYS_ORG_FUNCTION_NAME == 'AdviceBPO' || SYS_ORG_FUNCTION_NAME == 'AdviceBPOAMD' || SYS_ORG_FUNCTION_NAME == 'ExportAccept') {
            EEHtml.getElementById("conf").style.display = "";
        }
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        Hidden_Conf();
        CAL_ASSET_ACNO();
        CAL_PERCENT();
        CAL_TSU_OBLGRBK();
        CAL_TSU_RCPTBK();
        CAL_TSU_OBLGRBK_SW_TAG();
        CAL_TSU_RCPTBK_SW_TAG();
        CAL_TSU_BPOOBLGR_AMT();
        CAL_OBLGR_CONF_BAL();
        CAL_NEW_OBLGR_CONF_BAL();
        //CAL_BPOOBLGR_AMT_SETL();

    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL;
    SQL = "C_CUST_ID=\'" + document.MAINFORM.TSU_OBLGRBK_ID.value + "\'";
    SYS_InqCUBK_Sql("BPO_ASSET_ACNO", SQL);*/
        SYS_InqCUBK_byCondition('BPO_ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}

csDOScreenProto.R_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BPO_R_ASSET_ACNO');
    } catch (e) {
        DisExcpt("SSSS_BPO_Payment_Obligation.js", e);
    }
}