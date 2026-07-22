var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EXCO_INIT();

        document.MAINFORM.DRWNG_AMT_COLL_CCY.value = document.MAINFORM.COLL_TRX_CCY_BAL.value;

        SYF_EXCO_CALL_NEW_OTST_BAL();
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CAL_CR_AMT_DRWR_CCY();
        SYF_EXCO_CALL_NET_AMT_PD_COL_CCY();
        SYM_EXCO_TEMP_CHARGE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EXCO_CONFIRM_CALL();

        document.MAINFORM.COLL_TRX_CCY_BAL.value = document.MAINFORM.NEW_OTST_BAL.value;
        SYM_EXCO_CHARGE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHG_INIT_TO_RUN = function() {
    try {

        SYT_CAL_COMM('HANDLING_CHG', document.MAINFORM.COLL_CCY.value, document.MAINFORM.COLL_TRX_CCY_AMT.value);
        SYT_CAL_COMM('OTHER_CHG', document.MAINFORM.COLL_CCY.value);
        EEHtml.fireEvent(document.MAINFORM.STL_INSTR_FLG, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYT_CHG_INIT('SYF_EXCO_CHG_INIT_TO_RUN', 'SYF_EXCO_CHG_CALLBACK');


        SYT_DisableDivClass('B_div');
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_BK_REF.value;


        SYF_EXCO_HiddenDiscountTab();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_MNS_PLS = function() {
    try {

        if (document.MAINFORM.COLL_BK_CHG_MNS.value != 0 && document.MAINFORM.COLL_BK_CHG_PLS.value != 0) {
            SYS_CheckError(document.MAINFORM.COLL_BK_CHG_PLS, "Collecting Bank Charges Plus and Collecting Bank Charges Minus cannot be present both!"); // Utility Auto Fix Comments
            return false;
        } else {

            return true;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_EXCO_CHK_NET_AMT_RCVD_COLL_CCY()) {
            return false;
        }
        return SYF_EXCO_CHK_MNS_PLS();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_NEW_OTST_BAL = function() {
    try {

        var NEW_OTST_BAL; // Utility Auto Fix Comments
        NEW_OTST_BAL = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_BAL.value) - SYS_BeFloat(document.MAINFORM.DRWNG_AMT_COLL_CCY.value);
        document.MAINFORM.NEW_OTST_BAL.value = Math.max(NEW_OTST_BAL, 0);
        document.MAINFORM.NEW_OTST_BAL.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.NEW_OTST_BAL.value);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS = function() {
    try {

        var Sub_Total; // Utility Auto Fix Comments
        var nCOLL_BK_CHG_MNS; // Utility Auto Fix Comments
        var nCOLL_BK_CHG_PLS; // Utility Auto Fix Comments
        var nDRWNG_AMT_COLL_CCY; // Utility Auto Fix Comments
        var nINT_AMT; // Utility Auto Fix Comments
        var nINT_AMT_ARREARS; // Utility Auto Fix Comments
        var nWAIVE_TTL_DWE_CHG; // Utility Auto Fix Comments
        nDRWNG_AMT_COLL_CCY = SYS_BeFloat(document.MAINFORM.DRWNG_AMT_COLL_CCY.value);
        nINT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT_FRGN.value);
        nCOLL_BK_CHG_PLS = SYS_BeFloat(document.MAINFORM.COLL_BK_CHG_PLS.value);
        nCOLL_BK_CHG_MNS = SYS_BeFloat(document.MAINFORM.COLL_BK_CHG_MNS.value);
        nWAIVE_TTL_DWE_CHG = SYS_BeFloat(document.MAINFORM.WAIVE_TTL_DWE_CHG.value);
        nINT_AMT_ARREARS = SYS_BeFloat(document.MAINFORM.INT_AMT.value);
        Sub_Total = nDRWNG_AMT_COLL_CCY + nINT_AMT + nCOLL_BK_CHG_PLS - nCOLL_BK_CHG_MNS + nWAIVE_TTL_DWE_CHG + nINT_AMT_ARREARS;

        document.MAINFORM.AMT_RCVD_OUR_CHGS.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, Sub_Total);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_NET_AMT_PD_COL_CCY = function() {
    try {

        var CHG_PD_BY_DRWR; // Utility Auto Fix Comments
        var DRWEE_CHG; // Utility Auto Fix Comments
        var NET_AMT_PD_COL_CCY; // Utility Auto Fix Comments
        var PRPAY; // Utility Auto Fix Comments
        var TOTAL_PAID_DRWER; // Utility Auto Fix Comments
        TOTAL_PAID_DRWER = SYS_BeFloat(document.MAINFORM.CR_AMT_DRWR_CCY.value);
        CHG_PD_BY_DRWR = SYS_BeFloat(document.MAINFORM.CHG_PD_BY_DRWR.value);
        DRWEE_CHG = SYS_BeFloat(document.MAINFORM.WAIVE_TTL_DWE_CHG.value);

        NET_AMT_PD_COL_CCY = TOTAL_PAID_DRWER - CHG_PD_BY_DRWR - DRWEE_CHG;
        if(Net_AMT_PD_COL_CCY < 0){
        	Net_AMT_PD_COL_CCY = 0 ;
        }
        PRPAY = TOTAL_PAID_DRWER;
        if (document.MAINFORM.DISCNT_FLG.value == "YES") {
            document.MAINFORM.NET_AMT_PD_COL_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, PRPAY);
        } else {

            document.MAINFORM.NET_AMT_PD_COL_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, NET_AMT_PD_COL_CCY);
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function(xpath) {
    try {

        //Finance
        SYM_EXCO_HiddenFinanceDoFields();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_CR_AMT_DRWR_CCY = function() {
    try {

        var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
        var INT_AMT_INARREAS; // Utility Auto Fix Comments
        var NET_AMT_RCVD; // Utility Auto Fix Comments
        var REPAY; // Utility Auto Fix Comments
        CFNC_N_AMT_LCCCY = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        NET_AMT_RCVD = SYS_BeFloat(document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value);
        INT_AMT_INARREAS = SYS_BeFloat(document.MAINFORM.INT_AMT.value);
        REPAY = CFNC_N_AMT_LCCCY + INT_AMT_INARREAS;
        if (document.MAINFORM.DISCNT_FLG.value == "YES") {
            document.MAINFORM.CR_AMT_DRWR_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, REPAY);
        } else {
            document.MAINFORM.CR_AMT_DRWR_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, NET_AMT_RCVD);
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_WAIVE_TTL_DWE_CHG = function() {
    try {

        document.MAINFORM.WAIVE_TTL_DWE_CHG.value = Chg.Screen.getForeignChgCustPayTotalAmt();
        EEHtml.fireEvent(document.MAINFORM.WAIVE_TTL_DWE_CHG, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_CHG_PD_BY_DRWR = function() {
    try {

        if (document.MAINFORM.STL_INSTR_FLG.value == "Deduct Charges from Proceeds") {
            document.MAINFORM.CHG_PD_BY_DRWR.value = Chg.Screen.getLocalChgCustPayTotalAmt();
        } else {
            document.MAINFORM.CHG_PD_BY_DRWR.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_NET_AMT_RCVD_COLL_CCY = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value) < SYS_BeFloat(document.MAINFORM.CHG_PD_BY_DRWR.value)) {
            alert("The Net Amount Received can not be less than Charges Paid by Drawer");
            document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHG_CALLBACK = function() {
    try {

        SYF_EXCO_CAL_CHG_PD_BY_DRWR();
        EEHtml.fireEvent(document.MAINFORM.CHG_PD_BY_DRWR, "onchange");

        SYF_EXCO_CAL_WAIVE_TTL_DWE_CHG();
        EEHtml.fireEvent(document.MAINFORM.WAIVE_TTL_DWE_CHG, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_BY_STL_INSTR_FLG = function() {
    try {

        if (document.MAINFORM.STL_INSTR_FLG.value == "Deduct Charges from Proceeds") {
            CHG_set_UsedChgACFlag(false);
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, "P");
        } else {
            CHG_set_UsedChgACFlag(true);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, "M");
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_NET_AMT_RCVD_COLL_CCY = function() {
    try {

        document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.AMT_RCVD_OUR_CHGS.value);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_UPDATE_CREDIT_BY_NET_AMT_PD = function() {
    try {

        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = document.MAINFORM.NET_AMT_PD_COL_CCY.value;
        if (document.MAINFORM.CFNC_C_REF.value != "") {
            CAL_AMT_TO_BENE_PRES_CCY();
        } else {
            changeCPYT_CR_TTL_AMT_TTLCCY();
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_HiddenDiscountTab = function() {
    try {

        var discount; // Utility Auto Fix Comments
        discount = EEHtml.getElementById('W');
        if ("YES" != document.MAINFORM.DISCNT_FLG.value) {
            discount.style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_loadDoDataComplete = function() {
    try {

        AddoneRecordtoCredit();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_AMT_RCVD_OUR_CHGS_onchange = function(event) {
    try {
        SYF_EXCO_CAL_NET_AMT_RCVD_COLL_CCY();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_RCVD_COLL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_PD_BY_DRWR_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NET_AMT_PD_COL_CCY();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_COL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_ADD', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_CHG_MNS_onchange = function(event) {
    try {
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CHK_MNS_PLS();
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_CHG_PLS_onchange = function(event) {
    try {
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CHK_MNS_PLS();
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.COLL_BK_CHG_MNS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('COLL_BK_ID', 'COLL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_POST', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_TRX_CCY_BAL_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NEW_OTST_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_OTST_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CR_AMT_DRWR_CCY_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NET_AMT_PD_COL_CCY();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_COL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_NM_onchange = function(event) {
    try {
        //SYM_EXCO_CHG_PARTIES();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_POST_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWNG_AMT_COLL_CCY_onchange = function(event) {
    try {
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CALL_NEW_OTST_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_OTST_BAL, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_ADD', document.MAINFORM.DRWR_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_POST_ADD', 'DRWR_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_ADD', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('INCASE_OF_ND_ID', 'INCASE_OF_ND_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_POST', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_AMT_onchange = function(event) {
    try {
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CAL_CR_AMT_DRWR_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CR_AMT_DRWR_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_AMT_FRGN_onchange = function(event) {
    try {
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NET_AMT_PD_COL_CCY_onchange = function(event) {
    try {
        SYF_EXCO_UPDATE_CREDIT_BY_NET_AMT_PD();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NET_AMT_RCVD_COLL_CCY_onchange = function(event) {
    try {
        SYF_EXCO_CAL_CR_AMT_DRWR_CCY();
        EEHtml.fireEvent(document.MAINFORM.CR_AMT_DRWR_CCY, 'onchange');

        //zoe added 20090102 for intercourse between Payment and Settlement
        SYM_EXCO_Set_NET_AMT_RCVD_COLL_CCY_toPaymentDebit();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_ADD', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_POST', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_STL_INSTR_FLG_onchange = function(event) {
    try {
        SYF_EXCO_BY_STL_INSTR_FLG();
        SYF_EXCO_CAL_CHG_PD_BY_DRWR();
        EEHtml.fireEvent(document.MAINFORM.CHG_PD_BY_DRWR, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_WAIVE_TTL_DWE_CHG_onchange = function(event) {
    try {
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CALL_NET_AMT_PD_COL_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_COL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_ProcessMT400.js", e);
    }
}