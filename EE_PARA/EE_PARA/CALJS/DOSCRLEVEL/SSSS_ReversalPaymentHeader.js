"path:SCRN/DO/ReversalPaymentHeader.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_ReversalPaymentHeader.js", e);
    }
}

csDOScreenProto.Check_CR_AMT = function() {
    try {
        var cr_amt; // Utility Auto Fix Comments
        cr_amt = SYS_BeFloat(SYS_getValueFromMain('X103_SETT_AMT_32A'));

        if (Math.abs(document.MAINFORM.CR_AMT.value) > Math.abs(cr_amt)) {

            alert("Credit Amount cannot be greater than Settlement Amount");

            Get_Credit_Values();
        }
    } catch (e) {
        DisExcpt("SSSS_ReversalPaymentHeader.js", e);
    }
}

csDOScreenProto.Check_DB_AMT = function() {
    try {
        var db_amt; // Utility Auto Fix Comments
        db_amt = SYS_BeFloat(SYS_getValueFromMain('X103_SETT_AMT_32A'));

        if (Math.abs(document.MAINFORM.DB_AMT.value) > Math.abs(db_amt)) {
            alert("Debit Amount cannot be greater than Settlement Amount");
            Get_Debit_Values();
        }
    } catch (e) {
        DisExcpt("SSSS_ReversalPaymentHeader.js", e);
    }
}

csDOScreenProto.Check_Pymt_Type = function() {
    try {
        var c_main_ref; // Utility Auto Fix Comments
        var pymt_type; // Utility Auto Fix Comments
        c_main_ref = SYS_getValueFromMain('C_MAIN_REF');
        pymt_type = c_main_ref.substr(0, 2);

        if (pymt_type == "OT") {
            SYT_ChangeFldClass(document.MAINFORM.DB_CCY, "P");
            SYT_ChangeFldClass(document.MAINFORM.DB_AMT, "M");
            SYT_ChangeFldClass(document.MAINFORM.CR_CCY, "P");
            SYT_ChangeFldClass(document.MAINFORM.CR_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DB_CALC_AMT, "O"); // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.CR_CALC_AMT, "P"); // Utility Auto Fix Comments
            Get_Debit_Values();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CR_AMT, "M");
            SYT_ChangeFldClass(document.MAINFORM.CR_CCY, "P");
            SYT_ChangeFldClass(document.MAINFORM.DB_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DB_CCY, "P");
            SYT_ChangeFldClass(document.MAINFORM.CR_CALC_AMT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DB_CALC_AMT, "P");
            Get_Credit_Values();
        }
    } catch (e) {
        DisExcpt("SSSS_ReversalPaymentHeader.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var _dodetail; // Utility Auto Fix Comments
        var cr_amt; // Utility Auto Fix Comments
        var sum_Participts; // Utility Auto Fix Comments
        SYS_setValueToMain('REVE_AMT', document.MAINFORM.DB_AMT.value);

        cr_amt = document.MAINFORM.DB_AMT.value;
        _dodetail = SYS_getDoByXpath('ReversalPaymentHeader.ReversalPayment'); // Utility Auto Fix Comments
        sum_Participts = SYS_BeFloat(_dodetail.getFieldSumValue("CR_AMT")); // Utility Auto Fix Comments

        alert(sum_Participts);

        if (cr_amt != sum_Participts) {

            alert("PLEASE CHECK THE VALUE ENTERED:DEBIT AMOUNT AND CREDIT AMOUNT ARE NOT MATCHING"); // Utility Auto Fix Comments

            return false;

        } else {

            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_ReversalPaymentHeader.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_ReversalPaymentHeader.js", e);
    }
}

csDOScreenProto.Get_Credit_Values = function() {
    try {
        document.MAINFORM.CR_CCY.value = SYS_getValueFromMain('X103_SETT_CCY_32A');
        document.MAINFORM.CR_AMT.value = SYT_AmtFormat(document.MAINFORM.CR_CCY.value, SYS_getValueFromMain('X103_SETT_AMT_32A'));
    } catch (e) {
        DisExcpt("SSSS_ReversalPaymentHeader.js", e);
    }
}

csDOScreenProto.Get_Debit_Values = function() {
    try {
        document.MAINFORM.DB_CCY.value = SYS_getValueFromMain('X103_SETT_CCY_32A');
        document.MAINFORM.DB_AMT.value = SYT_AmtFormat(document.MAINFORM.DB_CCY.value, SYS_getValueFromMain('X103_SETT_AMT_32A'));
    } catch (e) {
        DisExcpt("SSSS_ReversalPaymentHeader.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        Check_Pymt_Type();
        //document.MAINFORM.CPYT_CR_BK_AC.value=SYS_getValueFromMain('CPYT_CR_BK_AC');
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain('C_MAIN_REF');

    } catch (e) {
        DisExcpt("SSSS_ReversalPaymentHeader.js", e);
    }
}

csDOScreenProto.CR_AMT_onchange = function(event) {
    try {
        Check_CR_AMT();
    } catch (e) {
        DisExcpt("SSSS_ReversalPaymentHeader.js", e);
    }
}

csDOScreenProto.DB_AMT_onchange = function(event) {
    try {
        Check_DB_AMT();
    } catch (e) {
        DisExcpt("SSSS_ReversalPaymentHeader.js", e);
    }
}