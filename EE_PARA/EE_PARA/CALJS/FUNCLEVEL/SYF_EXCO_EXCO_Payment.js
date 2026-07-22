var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        var nC_MAIN_REF; // Utility Auto Fix Comments
        var nNO_OF_STL; // Utility Auto Fix Comments
        SYM_EXCO_INIT();
        document.MAINFORM.DRWNG_AMT_COLL_CCY.value = document.MAINFORM.COLL_TRX_CCY_BAL.value;
        document.MAINFORM.TEMP_COLL_BAL_COL_CCY.value = document.MAINFORM.COLL_TRX_CCY_BAL.value;
        nNO_OF_STL = SYS_BeInt(document.MAINFORM.NO_OF_STL.value);
        nNO_OF_STL = nNO_OF_STL + 1;
        document.MAINFORM.NO_OF_STL.value = nNO_OF_STL;
        document.MAINFORM.REG_DT.value = SYS_BUSI_DATE;
        nC_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.PMT_REF.value = nC_MAIN_REF + nNO_OF_STL;

        SYF_EXCO_CALL_NEW_OTST_BAL();
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CAL_NET_AMT_RCVD_COLL_CCY();
        SYF_EXCO_CAL_CR_AMT_DRWR_CCY();
        SYF_EXCO_CALL_NET_AMT_PD_COL_CCY();



        document.MAINFORM.NXT_STATUS.value = '';
        SYM_EXCO_TEMP_CHARGE_DT();

        SYT_Cal_LOCAL_AMT('COLL_CCY', 'COLL_TRX_CCY_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
        SYF_EXCO_BY_STL_INSTR_FLG();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EXCO_CONFIRM_CALL();

        document.MAINFORM.COLL_TRX_CCY_BAL.value = document.MAINFORM.NEW_OTST_BAL.value;

        //dane
        SYF_EXCO_CAL_PAYMENT_AC_DESC();
        SYM_EXCO_CHARGE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYT_DisableDivClass('B_div');

        SYT_CHG_INIT('SYF_EXCO_CHG_INIT_TO_RUN', 'SYF_EXCO_CHG_CALLBACK');
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_BK_REF.value;

        SYM_EXCO_M_DRWR_FIELDS_CLASS();
        SYT_ChangeFldClass(document.MAINFORM.DRWR_ADD_BTN, 'M');
        SYT_ChangeFldClass(document.MAINFORM.DRWR_POST_ADD_BTN, 'M');
        SYM_EXCO_CAL_CHG_CASH_IND_back();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS = function() {
    try {

        var Sub_Total; // Utility Auto Fix Comments
        var nCOLL_BK_CHG_MNS; // Utility Auto Fix Comments
        var nCOLL_BK_CHG_PLS; // Utility Auto Fix Comments
        var nDRWNG_AMT_COLL_CCY; // Utility Auto Fix Comments
        var nINT_AMT; // Utility Auto Fix Comments
        var nWAIVE_TTL_DWE_CHG; // Utility Auto Fix Comments
        nDRWNG_AMT_COLL_CCY = SYS_BeFloat(document.MAINFORM.DRWNG_AMT_COLL_CCY.value);
        nINT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT_FRGN.value);
        nCOLL_BK_CHG_PLS = SYS_BeFloat(document.MAINFORM.COLL_BK_CHG_PLS.value);
        nCOLL_BK_CHG_MNS = SYS_BeFloat(document.MAINFORM.COLL_BK_CHG_MNS.value);
        nWAIVE_TTL_DWE_CHG = SYS_BeFloat(document.MAINFORM.WAIVE_TTL_DWE_CHG.value);
        Sub_Total = nDRWNG_AMT_COLL_CCY + nINT_AMT + nCOLL_BK_CHG_PLS - nCOLL_BK_CHG_MNS + nWAIVE_TTL_DWE_CHG;

        document.MAINFORM.AMT_RCVD_OUR_CHGS.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, Sub_Total);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_NET_AMT_PD_COL_CCY = function() {
    try {

        var CHG_PD_BY_DRWR; // Utility Auto Fix Comments
        var DRWEE_CHG; // Utility Auto Fix Comments
        var Net_AMT_PD_COL_CCY; // Utility Auto Fix Comments
        var TOTAL_PAID_DRWER; // Utility Auto Fix Comments
        TOTAL_PAID_DRWER = SYS_BeFloat(document.MAINFORM.CR_AMT_DRWR_CCY.value);
        CHG_PD_BY_DRWR = SYS_BeFloat(document.MAINFORM.CHG_PD_BY_DRWR.value);
        DRWEE_CHG = SYS_BeFloat(document.MAINFORM.WAIVE_TTL_DWE_CHG.value);
        Net_AMT_PD_COL_CCY = TOTAL_PAID_DRWER - CHG_PD_BY_DRWR;
        if(Net_AMT_PD_COL_CCY < 0){
        	Net_AMT_PD_COL_CCY = 0 ;
        }
        document.MAINFORM.NET_AMT_PD_COL_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, Net_AMT_PD_COL_CCY);

    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_NEW_OTST_BAL = function() {
    try {

        var NEW_OTST_BAL; // Utility Auto Fix Comments
        NEW_OTST_BAL = SYS_BeFloat(document.MAINFORM.TEMP_COLL_BAL_COL_CCY.value) - SYS_BeFloat(document.MAINFORM.DRWNG_AMT_COLL_CCY.value);
        document.MAINFORM.NEW_OTST_BAL.value = Math.max(NEW_OTST_BAL, 0);
        document.MAINFORM.NEW_OTST_BAL.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.NEW_OTST_BAL.value);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHG_INIT_TO_RUN = function() {
    try {

        SYM_EXCO_M_EXCO_OTHER_CHG();
        SYM_EXCO_M_EXCO_SWIFT_CHG();
        SYM_EXCO_M_EXCO_COURIER_CHG();
        SYM_EXCO_M_EXCO_POST_CHG();

        EEHtml.fireEvent(document.MAINFORM.STL_INSTR_FLG, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_MNS_PLS = function() {
    try {

        if (document.MAINFORM.COLL_BK_CHG_PLS.value != 0 && document.MAINFORM.COLL_BK_CHG_MNS.value != 0) {
            SYS_CheckError(document.MAINFORM.COLL_BK_CHG_MNS, 'Collecting Bank Charges Plus and Collecting Bank Charges Minus cannot be present both!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_NET_AMT_RCVD_COLL_CCY = function() {
    try {
        //add for 64725
        if (SYS_BeFloat(document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value) < SYS_BeFloat(document.MAINFORM.CHG_PD_BY_DRWR.value)) {
            alert("The Net Amount Received can not be less than Charges Paid by Drawer");
            document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_CR_AMT_DRWR_CCY = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.CR_AMT_DRWR_CCY.value) < SYS_BeFloat(document.MAINFORM.CHG_PD_BY_DRWR.value)) {
            alert("	Total Paid to Drawer  can not be less than Charges Paid by Drawer");
            document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_EXCO_CHK_NET_AMT_RCVD_COLL_CCY()) {
            return false;
        }
        if (!SYF_EXCO_CHK_CR_AMT_DRWR_CCY()) {
            return false;
        }
        return SYF_EXCO_CHK_MNS_PLS();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYM_EXCO_HiddenFinanceDoFields();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_CR_AMT_DRWR_CCY = function() {
    try {

        var DRWEE_CHG; // Utility Auto Fix Comments
        var NET_AMT_RCVD_COLL_CCY; // Utility Auto Fix Comments
        //document.MAINFORM.CR_AMT_DRWR_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value,document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value);
        DRWEE_CHG = SYS_BeFloat(document.MAINFORM.WAIVE_TTL_DWE_CHG.value);
        NET_AMT_RCVD_COLL_CCY = SYS_BeFloat(document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value);
        document.MAINFORM.CR_AMT_DRWR_CCY.value = NET_AMT_RCVD_COLL_CCY - DRWEE_CHG; // Utility Auto Fix Comments
        document.MAINFORM.CR_AMT_DRWR_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.CR_AMT_DRWR_CCY.value);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_INT_AMT_LOCAL = function() {
    try {

        document.MAINFORM.INT_AMT_LOCAL.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.INT_AMT_FRGN.value);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHG_CALLBACK = function() {
    try {

        SYF_EXCO_CAL_CHG_PD_BY_DRWR();
        EEHtml.fireEvent(document.MAINFORM.CHG_PD_BY_DRWR, "onchange");

        SYF_EXCO_CAL_WAIVE_TTL_DWE_CHG();
        EEHtml.fireEvent(document.MAINFORM.WAIVE_TTL_DWE_CHG, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_WAIVE_TTL_DWE_CHG = function() {
    try {

        document.MAINFORM.WAIVE_TTL_DWE_CHG.value = Chg.Screen.getForeignPayTotalAmt();
        EEHtml.fireEvent(document.MAINFORM.WAIVE_TTL_DWE_CHG, "onchange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_CHG_PD_BY_DRWR = function() {
    try {

        if (document.MAINFORM.STL_INSTR_FLG.value == "Deduct Charges from Proceeds") {
            document.MAINFORM.CHG_PD_BY_DRWR.value = Chg.Screen.getLocalPayTotalAmt();

        } else {
            document.MAINFORM.CHG_PD_BY_DRWR.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
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
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_NET_AMT_RCVD_COLL_CCY = function() {
    try {

        //default subTotal to Net_AMT_RCVD_COLL_CCY
        document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.AMT_RCVD_OUR_CHGS.value);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_PAYMENT_AC_DESC = function() {
    try {

        var CR_TYPE; // Utility Auto Fix Comments
        var Crlen; // Utility Auto Fix Comments
        var DR_TYPE; // Utility Auto Fix Comments
        var Drlen; // Utility Auto Fix Comments
        var _Cr; // Utility Auto Fix Comments
        var _Dr; // Utility Auto Fix Comments
        var cr_desc; // Utility Auto Fix Comments
        var dr_desc; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var ntype; // Utility Auto Fix Comments
        _Dr = SYS_GetObjByDoName("PaymentDebit"); // Utility Auto Fix Comments
        _Cr = SYS_GetObjByDoName("PaymentCredit"); // Utility Auto Fix Comments
        Drlen = _Dr.length; // Utility Auto Fix Comments
        Crlen = _Cr.length; // Utility Auto Fix Comments
        for (i = 0; i < Drlen; i++) { // Utility Auto Fix Comments
            DR_TYPE = _Dr[i].getDoValueByName("CPYT_DR_AC_TYPE"); // Utility Auto Fix Comments
            ntype = DR_TYPE.substring(0, 1);
            dr_desc = "EXCO01NULLNULLNULL" + ntype;
            SYS_UpdateFldValueByDo(_Dr[i], "CPYT_DR_AC_DESC", dr_desc); // Utility Auto Fix Comments
        }
        for (i = 0; i < Crlen; i++) {
            CR_TYPE = _Cr[i].getDoValueByName("CPYT_CR_AC_TYPE"); // Utility Auto Fix Comments
            ntype = CR_TYPE.substring(0, 1);
            cr_desc = "EXCO01NULLNULLNULL" + ntype;
            SYS_UpdateFldValueByDo(_Cr[i], "CPYT_CR_AC_DESC", cr_desc); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_AFTER_DRWR_ID = function() {
    try {

        EEHtml.fireEvent(document.MAINFORM.DRWR_CORR_MED, "onChange");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_AMT_RCVD_OUR_CHGS_onchange = function(event) {
    try {
        SYF_EXCO_CAL_NET_AMT_RCVD_COLL_CCY();
        //document.MAINFORM.NET_AMT_RCVD_COLL_CCY.fireEvent('onchange');
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_RCVD_COLL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CASH_COVER_CHANGE_onchange = function(event) {
    try {
        CASH_COVER_CHANGE_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CASH_COV_AC_NO_BTN_onclick = function(event) {
    try {
        Get_R_CASH_COV_ACNO();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CASH_COV_AMT_onchange = function(event) {
    try {
        document.MAINFORM.CASH_COV_AMT.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, SYS_BeFloat(document.MAINFORM.CASH_COV_AMT.value) - SYS_BeFloat(document.MAINFORM.CASH_COV_DEC_AMT.value));
        document.MAINFORM.CASH_COV_AMT.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, SYS_BeFloat(document.MAINFORM.CASH_COV_AMT.value) + SYS_BeFloat(document.MAINFORM.CASH_COV_INC_AMT.value));
        Cal_CASH_COV_BAL();
        Cal_TEMP_CASH_COV_AMT();
        Cal_TEMP_CASH_COV_PCT2();
        EEHtml.fireEvent(document.MAINFORM.TEMP_CASH_COV_AMT_TXCCY2, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CASH_COV_AMT_TXCCY_onchange = function(event) {
    try {
        Cal_R_RISK_CASH_AMT();
        Cal_TEMP_CASH_COV_PCT();
        Cal_CASH_COV_AMT_TXCCY();
        Cal_CASH_COV_BAL_TXCCY();
        Cal_TEMP_CASH_COV_AMT_TXCCY();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CASH_COV_CCY_onchange = function(event) {
    try {
        Cal_TEMP_RATE_CASH();
        EEHtml.fireEvent(document.MAINFORM.TEMP_RATE_CASH, 'onchange');
        CASH_COV_DEC_AMT_onchange();
        CASH_COV_INC_AMT_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CASH_COV_DEC_AMT_onchange = function(event) {
    try {
        CASH_COV_DEC_AMT_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CASH_COV_DR_ACNO_BTN_onclick = function(event) {
    try {
        Get_R_CASH_COV_DR_ACNO();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CASH_COV_HELD_onchange = function(event) {
    try {
        var retvalue; // Utility Auto Fix Comments
        if (document.MAINFORM.R_COLLAT_REQ.value == 'Y' && document.MAINFORM.R_COLLAT_TP.value != '' && SYS_BeFloat(document.MAINFORM.CASH_COV_AMT.value) > 0 && document.MAINFORM.CASH_COV_HELD.value == 'No') {
            retvalue = window.confirm("You are about to remove all details of Cash Cover. Do you wish to continue?");
            if (retvalue) {
                Cal_CASH_COV_HELD();
            } else {
                document.MAINFORM.CASH_COV_HELD.value = 'Yes';
            }
        }
        Cal_CASH_COV_HELD();
        Show_Hide_FIeld_By_Function();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CASH_COV_INC_AMT_onchange = function(event) {
    try {
        CASH_COV_INC_AMT_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CASH_COV_PCT_onchange = function(event) {
    try {
        document.MAINFORM.TEMP_CASH_COV_PCT.value = document.MAINFORM.CASH_COV_PCT.value;
        Cal_CASH_COV_PCT();
        Cal_CASH_COV_AMT_TXCCY_1();
        Cal_CASH_COV_BAL_TXCCY();
        Cal_CASH_COV_AMT_TXCCY();
        EEHtml.fireEvent(document.MAINFORM.CASH_COV_AMT_TXCCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CASH_COV_TXCCY_onchange = function(event) {
    try {
        Cal_TEMP_RATE_CASH();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_PD_BY_DRWR_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NET_AMT_PD_COL_CCY();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_COL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_ADD', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_CHG_MNS_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.COLL_BK_CHG_MNS.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.COLL_BK_CHG_MNS.value = 0;
        }

        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CHK_MNS_PLS();
        //document.MAINFORM.AMT_RCVD_OUR_CHGS.fireEvent('onchange');
        //document.MAINFORM.COLL_BK_CHG_PLS.fireEvent('onchange');
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.COLL_BK_CHG_PLS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_CHG_PLS_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.COLL_BK_CHG_PLS.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.COLL_BK_CHG_PLS.value = 0;
        }

        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CHK_MNS_PLS();
        //document.MAINFORM.AMT_RCVD_OUR_CHGS.fireEvent('onchange');
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('COLL_BK_ID', 'COLL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_POST', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CR_AMT_DRWR_CCY_onchange = function(event) {
    try {
        SYF_EXCO_CALL_NET_AMT_PD_COL_CCY();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_COL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_NM_onchange = function(event) {
    try {
        //SYM_EXCO_CHG_PARTIES();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_POST_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWNG_AMT_COLL_CCY_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.DRWNG_AMT_COLL_CCY.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DRWNG_AMT_COLL_CCY.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.DRWNG_AMT_COLL_CCY.value) > SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_BAL.value)) {
            alert("The amount field do not more than Collection Balance");
            document.MAINFORM.DRWNG_AMT_COLL_CCY.value = document.MAINFORM.COLL_TRX_CCY_BAL.value;
        }
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CALL_NEW_OTST_BAL();
        SYF_EXCO_CAL_NET_AMT_RCVD_COLL_CCY(); //add at 190221
        EEHtml.fireEvent(document.MAINFORM.NEW_OTST_BAL, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_RCVD_COLL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_ADD', document.MAINFORM.DRWR_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('DRWR_ID', 'DRWR_ID', 'SYF_EXCO_AFTER_DRWR_ID()');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_POST_ADD', 'DRWR_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_ADD', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('INCASE_OF_ND_ID', 'INCASE_OF_ND_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_POST', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INT_AMT_FRGN_onchange = function(event) {
    try {
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CAL_INT_AMT_LOCAL();
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.INT_AMT_LOCAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_LIMIT_LINES_onchange = function(event) {
    try {
        var chosenLimit; // Utility Auto Fix Comments
        var limitFlds; // Utility Auto Fix Comments
        document.MAINFORM.R_LMT_USED_REF.value = "";
        chosenLimit = document.MAINFORM.LIMIT_LINES.value;
        if (chosenLimit != "") {
            limitFlds = chosenLimit.split("+");
            document.MAINFORM.R_LMT_USED_REF.value = limitFlds[1];
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NET_AMT_PD_COL_CCY_onchange = function(event) {
    try {
        //add for 64725
        if (SYS_BeFloat(document.MAINFORM.NET_AMT_PD_COL_CCY.value) < 0) {
            document.MAINFORM.NET_AMT_PD_COL_CCY.value = 0;
        }
        //SYM_EXCO_Set_NET_AMT_PD_COL_CCY_toPaymentCredit();
        SYM_EXCO_Set_NET_AMT_PD_COL_CCY_toPaymentCredit();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_NET_AMT_RCVD_COLL_CCY_onchange = function(event) {
    try {
        if (document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value = 0;
        }

        SYF_EXCO_CAL_CR_AMT_DRWR_CCY();
        EEHtml.fireEvent(document.MAINFORM.CR_AMT_DRWR_CCY, 'onchange');

        //set document.MAINFORM.NET_AMT_RCVD_COLL_CCY to Total Debit
        SYM_EXCO_Set_NET_AMT_RCVD_COLL_CCY_toPaymentDebit();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PMT_DT_onchange = function(event) {
    try {
        if (SYS_GetSubDays(document.MAINFORM.PMT_DT.name, document.MAINFORM.COLL_DT.name) > 0) {
            alert("The payment value date should not less than the registration date.");
            document.MAINFORM.PMT_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_ADD', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_POST', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRODUCT_CD_onchange = function(event) {
    try {
        LimitInterfaceClear();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_RISK_ID_BTN_onclick = function(event) {
    try {
        RISK_PARTY_BUTTON();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        Get_R_ASSET_ACNO();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_COLLAT_REQ_onchange = function(event) {
    try {
        var retvalue; // Utility Auto Fix Comments
        if (document.MAINFORM.R_COLLAT_REQ.value == 'N') {
            retvalue = window.confirm("You are about to remove all details of Collateral held. Do you wish to continue?");
            if (retvalue) {
                Change_R_COLLAT_REQ();
                Reset_R_COLLAT_REQ();
                Change_R_COLLAT_TP();
                Cal_CASH_COV_HELD();
                EEHtml.fireEvent(document.MAINFORM.R_COLLAT_TP, 'onchange');
                EEHtml.fireEvent(document.MAINFORM.CASH_COV_HELD, 'onchange');
            } else {
                document.MAINFORM.R_COLLAT_REQ.value = 'Y';
            }
        }
        Change_R_COLLAT_REQ();
        Reset_R_COLLAT_REQ();
        Change_R_COLLAT_TP();
        Cal_CASH_COV_HELD();
        EEHtml.fireEvent(document.MAINFORM.R_COLLAT_TP, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CASH_COV_HELD, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_COLLAT_TP_onchange = function(event) {
    try {
        Change_R_COLLAT_TP();
        EEHtml.fireEvent(document.MAINFORM.CASH_COV_HELD, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_CUST_BK_onchange = function(event) {
    try {
        Cal_Clear_Risk_Party();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_LIAB_ACNO_onchange = function(event) {
    try {
        LimitInterfaceClear();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_LIAB_ACNO_BTN_onclick = function(event) {
    try {
        Get_R_LIAB_ACNO();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_LIMIT_CHK_BTN2_onclick = function(event) {
    try {
        LimitRetrieval();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_PARTY_CNTY_onchange = function(event) {
    try {
        Cal_R_PARTY_CNTY();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_PARTY_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.R_PARTY_ID.value == "") {
            Cal_Clear_Risk_Party_ID();
            document.MAINFORM.R_PARTY_NM.value = "";
            document.MAINFORM.R_PARTY_ADD1.value = "";
            document.MAINFORM.R_PARTY_ADD2.value = "";
            document.MAINFORM.R_PARTY_ADD3.value = "";
        } else {
            RISK_PARTY_ID_BTN();
        }
        LimitInterfaceClear();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_PARTY_ORDER_NO_onchange = function(event) {
    try {
        Cal_R_PARTY_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_RISK_AMT_onchange = function(event) {
    try {
        Cal_TEMP_RATE_RISK();
        Cal_R_RISK_LMT_AMT();
        Cal_TEMP_CASH_COV_PCT();
        if (SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value) > 0) {
            SYT_ChangeFldClass_New('R_ASSET_ACNO', 'M');
            SYT_ChangeFldClass_New('R_LIAB_ACNO', 'M');
            SYT_ChangeFldClass_New('R_ASSET_ACNO_BTN', 'O');
            SYT_ChangeFldClass_New('R_LIAB_ACNO_BTN', 'O');
        } else {
            SYT_ChangeFldClass_New('R_ASSET_ACNO', 'O');
            SYT_ChangeFldClass_New('R_LIAB_ACNO', 'O');
            SYT_ChangeFldClass_New('R_ASSET_ACNO_BTN', 'O');
            SYT_ChangeFldClass_New('R_LIAB_ACNO_BTN', 'O');
        }
        Show_Hide_FIeld_By_Function();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_RISK_LMT_AMT_onchange = function(event) {
    try {
        LimitInterfaceClear();
        Show_Hide_FIeld_By_Function();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_RISK_LMT_CCY_onchange = function(event) {
    try {
        Cal_R_RISK_AMT_R_RISK_LMT_AMT();


        EEHtml.fireEvent(document.MAINFORM.TEMP_RATE_RISK, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_R_WEIG_PCT_onchange = function(event) {
    try {
        Cal_Transmit_Base_Amount();
        EEHtml.fireEvent(document.MAINFORM.R_RISK_AMT, 'onchange');
        if (SYS_BeFloat(document.MAINFORM.R_RISK_AMT.value) > 0) {
            SYT_ChangeFldClass_New('R_ASSET_ACNO', 'M');
            SYT_ChangeFldClass_New('R_LIAB_ACNO', 'M');
            SYT_ChangeFldClass_New('R_ASSET_ACNO_BTN', 'O');
            SYT_ChangeFldClass_New('R_LIAB_ACNO_BTN', 'O');
        } else {
            SYT_ChangeFldClass_New('R_ASSET_ACNO', 'O');
            SYT_ChangeFldClass_New('R_LIAB_ACNO', 'O');
            SYT_ChangeFldClass_New('R_ASSET_ACNO_BTN', 'O');
            SYT_ChangeFldClass_New('R_LIAB_ACNO_BTN', 'O');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_STL_INSTR_FLG_onchange = function(event) {
    try {
        SYF_EXCO_BY_STL_INSTR_FLG();
        SYF_EXCO_CAL_CHG_PD_BY_DRWR();
        EEHtml.fireEvent(document.MAINFORM.CHG_PD_BY_DRWR, 'onchange');
        SYM_EXCO_CAL_CHG_CASH_IND_back();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_TEMP_CASH_COV_AMT_TXCCY2_onchange = function(event) {
    try {
        switch (SYS_ORG_FUNCTION_NAME) {
            case "RegisterGuarantee":
            case "RegisterOutward":
                Cal_TEMP_CASH_COV_PCT2();
                break;

        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_TEMP_RATE_CASH_onchange = function(event) {
    try {
        Cal_R_RISK_CASH_AMT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_TEMP_RATE_RISK_onchange = function(event) {
    try {
        Cal_R_RISK_LMT_AMT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_WAIVE_TTL_DWE_CHG_onchange = function(event) {
    try {
        SYF_EXCO_CALL_AMT_RCVD_OUR_CHGS();
        SYF_EXCO_CALL_NET_AMT_PD_COL_CCY();
        SYF_EXCO_CAL_CR_AMT_DRWR_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_RCVD_OUR_CHGS, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_COL_CCY, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CR_AMT_DRWR_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Payment.js", e);
    }
}