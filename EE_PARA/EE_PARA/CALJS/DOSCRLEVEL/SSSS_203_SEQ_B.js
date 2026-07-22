"path:SCRN/DO/203_SEQ_B.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Cal_56a = function() {
    try {
        if (document.MAINFORM.X203_56_PARTY_ID.value != '') {
            SYS_GetCUBK('X203_56_PARTY_ID', 'X203_56_PARTY_ID');
        } else {
            document.MAINFORM.X203_56A_IDENTIFIER.value = '';
            document.MAINFORM.X203_56D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_56D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_56D_PARTY_ADD3.value = '';
            document.MAINFORM.X203_56D_PARTY_NAME.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.Cal_56a_ADD = function() {
    try {
        SYS_InqCUBK('X203_56_PARTY_ID', 'X203_56_PARTY_ID');
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.Cal_57a = function() {
    try {
        if (document.MAINFORM.X203_57_PARTY_ID.value != '') {
            SYS_GetCUBK('X203_57_PARTY_ID', 'X203_57_PARTY_ID');
        } else {
            document.MAINFORM.X203_57A_IDENTIFIER.value = '';
            document.MAINFORM.X203_57D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_57D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_57D_PARTY_ADD3.value = '';
            document.MAINFORM.X203_57D_PARTY_NAME.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.Cal_57a_ADD = function() {
    try {
        SYS_InqCUBK('X203_57_PARTY_ID', 'X203_57_PARTY_ID');
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.Cal_58a = function() {
    try {
        if (document.MAINFORM.X203_58_PARTY_ID.value != '') {
            SYS_GetCUBK('X203_58_PARTY_ID', 'X203_58_PARTY_ID');
        } else {
            document.MAINFORM.X203_58A_IDENTIFIER.value = '';
            document.MAINFORM.X203_58D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_58D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_58D_PARTY_ADD3.value = '';
            document.MAINFORM.X203_58D_PARTY_NAME.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.Cal_58a_ADD = function() {
    try {
        SYS_InqCUBK('X203_58_PARTY_ID', 'X203_58_PARTY_ID');
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        setTimeout("SYT_Sum_of_Amount_19('X203_SEQ_B','X203_32B_AMT')", 500);
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.X203_32B_AMT.value = SYT_AmtFormat(document.MAINFORM.X203_32B_CCY.value, document.MAINFORM.X203_32B_AMT.value);
        var C_MAIN_REF = SYS_getValueFromMain('C_MAIN_REF');
        document.MAINFORM.X203_20_REF.value = C_MAIN_REF.substr(2, C_MAIN_REF.length - 2) + SYT_Cal_ORDER_NO('X203_SEQ_B');
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_ID_56_BTN_onclick = function(event) {
    try {
        Cal_56a_ADD();
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_ID_57_BTN_onclick = function(event) {
    try {
        Cal_57a_ADD();
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.X202_58_BTN_onclick = function(event) {
    try {
        Cal_58a_ADD();
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.X203_21_REF_onchange = function(event) {
    try {
        SYS_GetCUBK('X203_21_REF', 'X203_21_REF', SYT_Cal_DO_XXXX_SEQ_B_21_REF('X203_SEQ_B', document.MAINFORM.X203_21_REF));
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.X203_21_REF_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('X203_21_REF', 'C_TRX_STATUS = \'M\' AND ( CPYT_PAY_COV_MSG = \'MT202\' OR CPYT_PAY_COV_MSG = \'MT202COV\' )');
        SYS_InqCUBK_byCondition('X203_21_REF', '1');
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.X203_32B_AMT_onchange = function(event) {
    try {
        var X203_32B_AMT;
        X203_32B_AMT = SYS_BeFloat(document.MAINFORM.X203_32B_AMT.value);
        if (X203_32B_AMT < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.X203_32B_AMT.value = 0;
        }
        document.MAINFORM.X203_32B_AMT.value = SYT_AmtFormat(document.MAINFORM.X203_32B_CCY.value, document.MAINFORM.X203_32B_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.X203_32B_CCY_onchange = function(event) {
    try {
        document.MAINFORM.X203_32B_AMT.value = SYT_AmtFormat(document.MAINFORM.X203_32B_CCY.value, document.MAINFORM.X203_32B_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.X203_56A_IDENTIFIER_onchange = function(event) {
    try {
        if (document.MAINFORM.X203_56A_IDENTIFIER.value == '') {
            document.MAINFORM.X203_56_PARTY_ID.value = '';
            document.MAINFORM.X203_56D_PARTY_NAME.value = '';
            document.MAINFORM.X203_56D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_56D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_56D_PARTY_ADD3.value = '';
            document.MAINFORM.X203_56A_IDENTIFIER.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_X203_56A_IDENTIFIER_onchange_10', '1', '', '', true);
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.X203_57A_IDENTIFIER_onchange = function(event) {
    try {
        if (document.MAINFORM.X203_57A_IDENTIFIER.value == '') {
            document.MAINFORM.X203_57_PARTY_ID.value = '';
            document.MAINFORM.X203_57D_PARTY_NAME.value = '';
            document.MAINFORM.X203_57D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_57D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_57D_PARTY_ADD3.value = '';
            document.MAINFORM.X203_57A_IDENTIFIER.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_X203_57A_IDENTIFIER_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}

csDOScreenProto.X203_58A_IDENTIFIER_onchange = function(event) {
    try {
        if (document.MAINFORM.X203_58A_IDENTIFIER.value == '') {
            document.MAINFORM.X203_58_PARTY_ID.value = '';
            document.MAINFORM.X203_58D_PARTY_NAME.value = '';
            document.MAINFORM.X203_58D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_58D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_58D_PARTY_ADD3.value = '';
            document.MAINFORM.X203_58A_IDENTIFIER.value = '';
        }
        SYS_GetTableDataByRule('PYMT_set_X203_58A_IDENTIFIER_onchange', '1', '', '', true);
    } catch (e) {
        DisExcpt("SSSS_203_SEQ_B.js", e);
    }
}