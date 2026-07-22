var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT();
        document.MAINFORM.BENE_CREDIT_CCY.value = document.MAINFORM.PRES_CCY.value;
        document.MAINFORM.DISCNT_FLG.value = "YES";
        //Clear the value of Advice Text to Presenter 
        document.MAINFORM.MAIL_ADV.value = "";

        document.MAINFORM.STL_INSTR_FLG.value = 'Take Charges Separately';
        document.MAINFORM.VALUE_DT_CR.value = SYS_BUSI_DATE;
        document.MAINFORM.VALUE_DT_DR.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYF_EPLC_CAL_OUR_CHGS_BENE();
        SYM_EPLC_M_PRES_BK_CLS();
        SYT_DisableDivClass('I_div');
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.DRAWING_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;

        SYT_CHG_INIT('SYF_EPLC_CHG_INT_TO_RUN', 'SYF_EPLC_CHG_CALLBACK');
        SYM_EPLC_CAL_CHG_CASH_IND_back();
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
        SYM_EPLC_CHARGES_ACCOUNT();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();

        //Discount
        FinanceDataCheck();

        //dane
        SYF_EPLC_CAL_PAYMENT_AC_DESC();
        SYM_EPLC_CAL_INT_CHF();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_INT_TO_RUN = function() {
    try {

        SYF_EPLC_CAL_COMM();
        SYM_EPLC_M_EPLC_COURIER_CHG();
        SYM_EPLC_M_EPLC_OTHER_CHG();
        SYM_EPLC_M_EPLC_POST_CHG();
        SYM_EPLC_M_EPLC_SWIFT_CHG();
        EEHtml.fireEvent(document.MAINFORM.STL_INSTR_FLG, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_loadDoDataComplete = function() {
    try {

        document.MAINFORM.TTL_STL_AMT_DR.value = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value);
        SYF_EPLC_CAL_STL_AMT();
        SYF_EPLC_CAL_STL_BAL();
        if (SYS_FUNCTION_TYPE != 'IQ') {
            SYF_EPLC_SET_INIT_CFNC_VALUES();
        }
        setDebitValuetoFinance();
        getCPYT_CR_TTL_AMT_TTLCCY();
        getCPYT_DR_TTL_AMT_TTLCCY();
        document.MAINFORM.CFNC_N_PRE_INT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.CFNC_N_PRE_INT.value);
        SYF_EPLC_CAL_NET_PD_BENE();
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        setFinanceAMTtoPaymentCredit();
        SYF_EPLC_CAL_TENOR_INFO_IN_MAIN();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY = function() {
    try {

        var ADV_BK_CHGS_BENE; // Utility Auto Fix Comments
        var AMT_TO_BENE_PRES_CCY; // Utility Auto Fix Comments
        var ASSIGN_DEDUCT_AMT; // Utility Auto Fix Comments
        var INT_AMT; // Utility Auto Fix Comments
        var NET_AMT_PD_BENE; // Utility Auto Fix Comments
        var TNSFR_DOCS_DEDUCT_AMT; // Utility Auto Fix Comments
        NET_AMT_PD_BENE = SYS_BeFloat(document.MAINFORM.NET_AMT_PD_BENE.value);
        ADV_BK_CHGS_BENE = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS_BENE.value);
        TNSFR_DOCS_DEDUCT_AMT = SYS_BeFloat(document.MAINFORM.TNSFR_DOCS_DEDUCT_AMT.value);
        ASSIGN_DEDUCT_AMT = SYS_BeFloat(document.MAINFORM.ASSIGN_DEDUCT_AMT.value);
        INT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT.value);
        AMT_TO_BENE_PRES_CCY = 0;

        AMT_TO_BENE_PRES_CCY = NET_AMT_PD_BENE - ADV_BK_CHGS_BENE - TNSFR_DOCS_DEDUCT_AMT - ASSIGN_DEDUCT_AMT - INT_AMT;
        document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, AMT_TO_BENE_PRES_CCY);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_STL_AMT_EXPECT = function() {
    try {

        document.MAINFORM.STL_AMT_EXPECT.value = SYS_BeFloat(document.MAINFORM.CPYT_N_PAY_AMT.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_OUR_CHGS_BENE = function() {
    try {

        if (document.MAINFORM.STL_INSTR_FLG.value == "Deduct Charges from Proceeds") {
            document.MAINFORM.OUR_CHGS_BENE.value = Chg.Screen.getLocalChgCustPayTotalAmt();
        } else {
            document.MAINFORM.OUR_CHGS_BENE.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_CALLBACK = function() {
    try {

        // For discount, remove settlement tab and Credit amout from disocunt tab
        /*
SYF_EPLC_CAL_OUR_CHGS_BENE();
document.MAINFORM.OUR_CHGS_BENE.fireEvent("onchange");

*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_BY_STL_INSTR_FLG = function() {
    try {

        if (document.MAINFORM.STL_INSTR_FLG.value == "Deduct Charges from Proceeds") {
            CHG_set_UsedChgACFlag(false);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, "P");
        } else {
            CHG_set_UsedChgACFlag(true);
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, "M");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_NET_PD_BENE = function() {
    try {

        var ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var ADV_BK_CHGS; // Utility Auto Fix Comments
        var ADV_BK_CHG_APPL; // Utility Auto Fix Comments
        var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
        var FINANCE_AMT; // Utility Auto Fix Comments
        var NET_AMT_PD_BENE; // Utility Auto Fix Comments
        var OUR_CHGS_APPL; // Utility Auto Fix Comments
        var OUR_CHGS_BENE; // Utility Auto Fix Comments
        var PRES_BK_CHGS; // Utility Auto Fix Comments
        var TTL_STL_AMT_RCV; // Utility Auto Fix Comments
        FINANCE_AMT = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        TTL_STL_AMT_RCV = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value);
        ADV_BK_CHG_APPL = SYS_BeFloat(document.MAINFORM.ADV_BK_CHG_APPL.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        OUR_CHGS_APPL = Chg.Screen.getForeignChgCustPayTotalAmt();
        OUR_CHGS_BENE = SYS_BeFloat(document.MAINFORM.OUR_CHGS_BENE.value);
        CFNC_N_AMT_LCCCY = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value); // Utility Auto Fix Comments
        NET_AMT_PD_BENE = 0;

        NET_AMT_PD_BENE = SYS_BeFloat(CFNC_N_AMT_LCCCY - OUR_CHGS_BENE);
        document.MAINFORM.NET_AMT_PD_BENE.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, NET_AMT_PD_BENE);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TTL_STL_AMT_RCV = function() {
    try {

        document.MAINFORM.TTL_STL_AMT_RCV.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.STL_AMT_EXPECT.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_STL_BAL = function() {
    try {

        document.MAINFORM.STL_BAL.value = 0.00;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_STL_AMT = function() {
    try {

        if (SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "RE") {
            document.MAINFORM.STL_AMT.value = document.MAINFORM.CPYT_N_PAY_AMT.value;
            EEHtml.fireEvent(document.MAINFORM.STL_AMT, "onchange");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_SET_INIT_CFNC_VALUES = function() {
    try {

        if (SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "RE") {
           document.MAINFORM.CFNC_N_TRX_AMT.value = document.MAINFORM.CPYT_N_PAY_AMT.value;
          /*var percentage = SYS_BeFloat(document.MAINFORM.CFNC_N_PCT.value);
            document.MAINFORM.CFNC_N_AMT_LCCCY.value = SYS_BeFloat(document.MAINFORM.CPYT_N_PAY_AMT.value) *percentage/100 ;
            document.MAINFORM.CFNC_C_TRX_CCY.value = document.MAINFORM.PRES_CCY.value;*/
            calculateFinanceAmount();
            document.MAINFORM.CFNC_C_ORIGIN_MODULE.value = SYS_MODULE_NAME;
            document.MAINFORM.CFNC_C_ORIGIN_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value;
            document.MAINFORM.CFNC_C_ORIGIN_TRX_REF.value = document.MAINFORM.DRAWING_REF.value;

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_COMM = function() {
    try {

        Chg.calculate(["EPLC_UTIL_SIGHT_CHG"], document.MAINFORM.PRES_CCY.value, document.MAINFORM.PRES_AMT.value, document.MAINFORM.ISSUE_DT.value, document.MAINFORM.EXPIRY_DT.value);
        Chg.calculate(["EPLC_UTIL_DEF_CHG"], document.MAINFORM.PRES_CCY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_PAYMENT_AC_DESC = function() {
    try {

        var CR_TYPE; // Utility Auto Fix Comments
        var Crlen; // Utility Auto Fix Comments
        var DR_TYPE; // Utility Auto Fix Comments
        var Drlen; // Utility Auto Fix Comments
        var EEAuto_Cr; // Utility Auto Fix Comments
        var EEAuto_Dr; // Utility Auto Fix Comments
        var cr_desc; // Utility Auto Fix Comments
        var dr_desc; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var ntype; // Utility Auto Fix Comments
        EEAuto_Dr = SYS_GetObjByDoName("PaymentDebit"); // Utility Auto Fix Comments
        EEAuto_Cr = SYS_GetObjByDoName("PaymentCredit"); // Utility Auto Fix Comments
        Drlen = EEAuto_Dr.length; // Utility Auto Fix Comments
        Crlen = EEAuto_Cr.length; // Utility Auto Fix Comments
        for (i = 0; i < Drlen; i++) { // Utility Auto Fix Comments
            DR_TYPE = EEAuto_Dr[i].getDoValueByName("CPYT_DR_AC_TYPE"); // Utility Auto Fix Comments
            ntype = DR_TYPE.substring(0, 1);
            dr_desc = "EPLC07NULLNULLNULL" + ntype;
            SYS_UpdateFldValueByDo(EEAuto_Dr[i], "CPYT_DR_AC_DESC", dr_desc); // Utility Auto Fix Comments
        }
        for (i = 0; i < Crlen; i++) {
            CR_TYPE = EEAuto_Cr[i].getDoValueByName("CPYT_CR_AC_TYPE"); // Utility Auto Fix Comments
            ntype = CR_TYPE.substring(0, 1);
            cr_desc = "EPLC07NULLNULLNULL" + ntype;
            SYS_UpdateFldValueByDo(EEAuto_Cr[i], "CPYT_CR_AC_DESC", cr_desc); // Utility Auto Fix Comments
        }
        document.MAINFORM.CFNC_AC_DESC.value = "EPLC07NULLNULLNULLI"; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TENOR_INFO_IN_MAIN = function() {
    try {

        var targetDo; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        targetDo = SYS_GetObjByDoName("PaymentDealer");
        vDo = targetDo[0];
        document.MAINFORM.TENOR_START_DT.value = vDo.getDoValueByName('CPYT_D_TENOR_START_DATE');
        document.MAINFORM.TENOR_DAYS.value = vDo.getDoValueByName('CPYT_I_TENOR_DAYS');
        document.MAINFORM.MATURITY_DT.value = vDo.getDoValueByName('CPYT_D_MAT_DATE');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return Cal_eloan_fields(); //modify by miya for gapi
        //return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHGS_BENE_onchange = function(event) {
    try {
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AMT_TO_BENE_PRES_CCY_onchange = function(event) {
    try {
        //zoe added 20090102 for intercourse between Payment and Settlement
        SYM_EPLC_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ASSIGN_DEDUCT_AMT_onchange = function(event) {
    try {
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENEF_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BL_AWB_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CERTIFICATE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FREIGHT_INV_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSP_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INSURANCE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INT_AMT_onchange = function(event) {
    try {
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INVOICE_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NET_AMT_PD_BENE_onchange = function(event) {
    try {
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OTHERS_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_CHGS_BENE_onchange = function(event) {
    try {
        SYF_EPLC_CAL_NET_PD_BENE();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PACK_LIST_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
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
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
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
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
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
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
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
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_STL_AMT_EXPECT_onchange = function(event) {
    try {
        SYF_EPLC_CAL_TTL_STL_AMT_RCV();
        EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_STL_INSTR_FLG_onchange = function(event) {
    try {
        SYF_EPLC_BY_STL_INSTR_FLG();
        SYF_EPLC_CAL_OUR_CHGS_BENE();
        EEHtml.fireEvent(document.MAINFORM.OUR_CHGS_BENE, 'onchange');
        SYM_EPLC_CAL_CHG_CASH_IND_back();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TNSFR_DOCS_DEDUCT_AMT_onchange = function(event) {
    try {
        SYF_EPLC_CAL_AMT_TO_BENE_PRES_CCY();
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, 'onchange');
        SYM_EPLC_M_CLASS_TNSFR_DOCS_DEDUCT_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TTL_STL_AMT_RCV_onchange = function(event) {
    try {
        document.MAINFORM.TTL_STL_AMT_DR.value = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value);
        SYF_EPLC_CAL_NET_PD_BENE();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_PD_BENE, 'onchange');

        //zoe added 20090102 for intercourse between Payment and Settlement
        // comments for Payment Debit Amount from discount tab ,not from settlement tab
        //SYM_EPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_1_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_VESSEL_CERT_2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Discount.js", e);
    }
}