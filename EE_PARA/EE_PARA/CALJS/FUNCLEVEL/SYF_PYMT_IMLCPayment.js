var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var initFlag = false;

csFuncLevelProto.SYF_PYMT_Cal_Cable = function() {
    try {

        var arr; // Utility Auto Fix Comments
        arr = ['Cable'];
        Chg.calculate(arr);
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Chg_Screen = function() {
    try {

        Chg.Screen.setLocalCust(document.MAINFORM.APPL_ID.value, document.MAINFORM.APPL_NM.value);
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_genNewMainRef = function() {
    try {

        var doData; // Utility Auto Fix Comments
        var fieldValue; // Utility Auto Fix Comments
        var iSeqNum; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        if (!initFlag) {
            doData = SYS_getDoByXpath("PaymentDealer");
            record = SYS_getRecord(doData, 0);
            fieldValue = record["CPYT_I_SEQUENCdE"];
            iSeqNum = "1"; // Utility Auto Fix Comments
            if (fieldValue != null && typeof fieldValue != "undefined" && fieldValue.length > 0) {
                iSeqNum = fieldValue;
            }
            document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.DRAWING_REF.value + '/PAY' + iSeqNum;
            initFlag = true;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_AMT_PRES_BK_LC_CCY = function() {
    try {

        var nADD_AMT_LC_CCY; // Utility Auto Fix Comments
        var nPRES_AMT_PRES_CCY; // Utility Auto Fix Comments
        var nPRES_BK_CHG_LCY; // Utility Auto Fix Comments
        nPRES_AMT_PRES_CCY = SYS_BeFloat(document.MAINFORM.PRES_AMT_PRES_CCY.value);
        nPRES_BK_CHG_LCY = SYS_BeFloat(document.MAINFORM.PRES_BK_CHG_LC_CCY.value);
        nADD_AMT_LC_CCY = SYS_BeFloat(document.MAINFORM.ADDIT_TRX_CCY_AMT.value);

        document.MAINFORM.AMT_PRES_BK_LC_CCY.value = nPRES_AMT_PRES_CCY + nPRES_BK_CHG_LCY + nADD_AMT_LC_CCY;
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_ISS_BK_CHG_LCY = function() {
    try {

        var nISS_BK_CHG_LCCCY; // Utility Auto Fix Comments
        var rTEMP_RATE; // Utility Auto Fix Comments
        nISS_BK_CHG_LCCCY = SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG_TRX_CCY.value);
        rTEMP_RATE = SYS_BeFloat(document.MAINFORM.TEMP_RATE.value);

        document.MAINFORM.ISSUE_BK_CHG_LCY.value = SYS_BeFloat(nISS_BK_CHG_LCCCY / rTEMP_RATE);
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_NET_AMT_PD_LCY = function() {
    try {

        var nNET_AMT_PD_LCCCY; // Utility Auto Fix Comments
        var rTEMP_RATE; // Utility Auto Fix Comments
        nNET_AMT_PD_LCCCY = SYS_BeFloat(document.MAINFORM.NET_AMT_PD_LCCCY.value);
        rTEMP_RATE = SYS_BeFloat(document.MAINFORM.TEMP_RATE.value);

        document.MAINFORM.NET_PD_LCY_AMT.value = nNET_AMT_PD_LCCCY / rTEMP_RATE;
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_TEMP_RATE = function() {
    try {

        var sLC_CCY; // Utility Auto Fix Comments
        sLC_CCY = document.MAINFORM.LC_CCY.value;

        if (sLC_CCY != SYS_LOCAL_CCY) {
            SYS_GetExchangeRate_S(sLC_CCY, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.TEMP_RATE.name);
        } else {
            document.MAINFORM.TEMP_RATE.value = 1;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_Charge = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['Accept'];
        amt = SYS_BeFloat(document.MAINFORM.PRES_AMT_PRES_CCY.value);
        ccy = document.MAINFORM.PRES_CCY.value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        try {
            SYF_PYMT_Cal_TEMP_RATE();
            SYT_CLERK_ID();
            document.MAINFORM.C_ORI_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value;
            document.MAINFORM.CURRNT_STATUS.value = 'Payment';
        } catch (error) {}
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_PYMT_genNewMainRef();
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE') {
            Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
            SYF_PYMT_Chg_Screen();
            SYF_PYMT_Cal_Charge();
            SYF_PYMT_Cal_Cable();
        }

        lbi_part_LC_IMNE_BaseInfo_InitFldClas();
        lbi_LC_Financial_InitFldClas();
        lbi_LC_IMNE_Presentation_InitFldClas();
        lbi_LC_APPL_BRCH_InitFldClas();
        lbi_LC_APPL_SECD_InitFldClas();
        lbi_LC_BENE_InitFldClas();
        lbi_LC_PRES_BK_InitFldClas();
        lbi_LC_agent1_InitFldClas();
        lbi_LC_agent2_InitFldClas();
        lbi_LC_AgentBnk1_InitFldClas();
        lbi_LC_AgentBnk2_InitFldClas();
        lbi_LC_IMNE_NETPay_InitFldClas();
        SYT_ChangeFldClass(document.MAINFORM.Button3, "P");
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_NET_AMT_PD_LCCCY = function() {
    try {

        var nAMT_PRES_BK_LC_CCY; // Utility Auto Fix Comments
        var nISS_BK_CHG_LCCCY; // Utility Auto Fix Comments
        nAMT_PRES_BK_LC_CCY = SYS_BeFloat(document.MAINFORM.AMT_PRES_BK_LC_CCY.value);
        nISS_BK_CHG_LCCCY = SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG_TRX_CCY.value);

        document.MAINFORM.NET_AMT_PD_LCCCY.value = nAMT_PRES_BK_LC_CCY - nISS_BK_CHG_LCCCY;
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_IMLCPayment.js", e);
    }
}