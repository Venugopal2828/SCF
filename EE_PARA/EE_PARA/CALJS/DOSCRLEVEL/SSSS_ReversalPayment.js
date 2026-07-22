"path:SCRN/DO/ReversalPayment.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_ReversalPayment.js", e);
    }
}

csDOScreenProto.Check_CR_AMT = function() {
    try {
        var CHK_AMT; // Utility Auto Fix Comments
        var _dodetail; // Utility Auto Fix Comments
        var cr_amt; // Utility Auto Fix Comments
        var sum_Participts; // Utility Auto Fix Comments
        var tot; // Utility Auto Fix Comments
        cr_amt = document.MAINFORM.CR_AMT.value;
        alert("ORG_DB_AMT" + document.MAINFORM.ORG_DB_AMT.value);
        alert("DB_AMT" + cr_amt);

        _dodetail = SYS_getDoByXpath('ReversalPaymentHeader.ReversalPayment'); // Utility Auto Fix Comments
        sum_Participts = SYS_BeFloat(_dodetail.getFieldSumValue("CR_AMT")); // Utility Auto Fix Comments
        tot = SYS_BeFloat(sum_Participts) + SYS_BeFloat(cr_amt);
        alert(sum_Participts);
        alert("tot is : " + tot); // Utility Auto Fix Comments

        CHK_AMT = SYS_BeFloat(document.MAINFORM.ORG_DB_AMT.value) - (SYS_BeFloat(sum_Participts) + SYS_BeFloat(cr_amt)); // Utility Auto Fix Comments


        if (SYS_BeFloat(CHK_AMT) < 0) {

            alert("pLEASE CHECK THE VALUE ENTERED:DEBIT AMOUNT AND CREDIT AMOUNT ARE NOT MATCHING"); // Utility Auto Fix Comments

        }
    } catch (e) {
        DisExcpt("SSSS_ReversalPayment.js", e);
    }
}

csDOScreenProto.Check_DB_AMT = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_ReversalPayment.js", e);
    }
}

csDOScreenProto.Check_Pymt_Type = function() {
    try {
        var c_main_ref; // Utility Auto Fix Comments
        var pymt_type; // Utility Auto Fix Comments
        c_main_ref = SYS_getValueFromMain('C_MAIN_REF');
        pymt_type = c_main_ref.substr(0, 2);

        if (pymt_type == "OT") {
            SYT_ChangeFldClass(document.MAINFORM.CR_AMT, "O");
            SYT_ChangeFldClass(document.MAINFORM.CR_CCY, "O");
            SYT_ChangeFldClass(document.MAINFORM.DB_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DB_CCY, "P");
            document.MAINFORM.DB_CCY.value = "";
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CR_AMT, "P");
            SYT_ChangeFldClass(document.MAINFORM.CR_CCY, "P");
            SYT_ChangeFldClass(document.MAINFORM.DB_AMT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DB_CCY, "O");
            document.MAINFORM.CR_CCY.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_ReversalPayment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_ReversalPayment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_ReversalPayment.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var arr; // Utility Auto Fix Comments
        var iframe; // Utility Auto Fix Comments
        var xpath; // Utility Auto Fix Comments
        document.MAINFORM.X103_ORDCU_ID_50A.value = SYS_getValueFromMain('X103_ORDCU_ID_50A');
        document.MAINFORM.X103_BENECU_ID_59A.value = SYS_getValueFromMain('X103_BENECU_ID_59A');

        xpath = "ReversalPaymentHeader";
        arr = SYS_getDObyXpath(xpath);
        iframe = arr.getselectedFrame(); // Utility Auto Fix Comments
        document.MAINFORM.X103_VALUE_DT_32A.value = iframe.document.MAINFORM.X103_VALUE_DT_32A.value;
        document.MAINFORM.ORG_CR_AMT.value = iframe.document.MAINFORM.CR_AMT.value;
        document.MAINFORM.ORG_DB_AMT.value = iframe.document.MAINFORM.DB_AMT.value;
    } catch (e) {
        DisExcpt("SSSS_ReversalPayment.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        Check_Pymt_Type();
        document.MAINFORM.C_MAIN_REF.value = SYS_getValueFromMain('C_MAIN_REF');

    } catch (e) {
        DisExcpt("SSSS_ReversalPayment.js", e);
    }
}

csDOScreenProto.CPYT_CR_BK_AC_BTN_onclick = function(event) {
    try {
        c_main_ref = SYS_getValueFromMain('C_MAIN_REF');
        pymt_type = c_main_ref.substr(0, 2); // Utility Auto Fix Comments

        if (pymt_type == "OT") {

            //SYS_InqCUBK_Sql('REVE_ACCNO', 'C_CUST_ID=\'<--X103_ORDCU_ID_50A-->\'');
            SYS_InqCUBK_byCondition('REVE_ACCNO', '1');

        } else {


            //SYS_InqCUBK_Sql('REVE_ACCNO', 'C_CUST_ID=\'<--X103_BENECU_ID_59A-->\'');
            SYS_InqCUBK_byCondition('REVE_ACCNO', '2');

        }
    } catch (e) {
        DisExcpt("SSSS_ReversalPayment.js", e);
    }
}

csDOScreenProto.CR_AMT_onchange = function(event) {
    try {
        Check_CR_AMT();
    } catch (e) {
        DisExcpt("SSSS_ReversalPayment.js", e);
    }
}