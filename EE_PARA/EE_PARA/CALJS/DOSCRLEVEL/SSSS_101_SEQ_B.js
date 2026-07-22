"path:SCRN/DO/101_SEQ_B.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Cal_50 = function() {
    try {
        SYS_GetCUBK('X102_50F_PARTY_ID', 'X102_50F_PARTY_ID', '');
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}

csDOScreenProto.Cal_50_ADD = function() {
    try {
        SYS_InqCUBK('X102_50F_PARTY_ID', 'X102_50F_PARTY_ID');
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}

csDOScreenProto.CallBack_21_REF = function() {
    try {
        SYT_Cal_DO_XXXX_SEQ_B_21_REF("X101_SEQ_B", document.MAINFORM.X102_21_REF);
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}

csDOScreenProto.CallBack_21_REF_Fail = function() {
    try {
        document.MAINFORM.X102_50F_PARTY_ID.value = '';
        document.MAINFORM.X102_50F_PARTY_NAME.value = '';
        document.MAINFORM.X102_50F_PARTY_ADD1.value = '';
        document.MAINFORM.X102_50F_PARTY_ADD2.value = '';
        document.MAINFORM.X102_50F_PARTY_ADD3.value = '';
        document.MAINFORM.X102_50A_IDENTIFIER.value = '';
        document.MAINFORM.X102_50A_ACCOUNT.value = '';
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}

csDOScreenProto.PART_50A_ADD_BTN_onclick = function(event) {
    try {
        Cal_50_ADD();
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_21_REF_onchange = function(event) {
    try {
        if (document.MAINFORM.X102_21_REF.value != '') {
            SYS_GetCUBK('X101_21_REF', 'X102_21_REF', 'CallBack_21_REF()', 'CallBack_21_REF_Fail()', '');
        } else {
            CallBack_21_REF_Fail();
        }
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_21_REF_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('X101_21_REF', 'C_TRX_STATUS = \'M\' AND (CPYT_PAY_ADV_MSG = \'MT103\' OR CPYT_PAY_ADV_MSG = \'MT103+\') ');
        SYS_InqCUBK_byCondition('X101_21_REF', '1');
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_32B_AMT_onchange = function(event) {
    try {
        var X102_32B_AMT = document.MAINFORM.X102_32B_AMT.value;
        if (X102_32B_AMT < 0) {
            alert("Transaction Amount cannot be negative value!");
            document.MAINFORM.X102_32B_AMT.value = 0;
        } else {
            document.MAINFORM.X102_32B_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_32B_CCY.value, X102_32B_AMT);
        }
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_33B_AMT_onchange = function(event) {
    try {
        var X102_33B_AMT = document.MAINFORM.X102_33B_AMT.value;
        if (SYS_BeFloat(document.MAINFORM.X102_33B_AMT.value) < 0) {
            alert("Currency/Instructed Amount[33B] cannot be negative value!");
            document.MAINFORM.X102_33B_AMT.value = 0;
        } else {
            document.MAINFORM.X102_33B_AMT.value = SYT_AmtFormat(document.MAINFORM.X102_33B_CCY.value, X102_33B_AMT);
        }
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}

csDOScreenProto.X102_50F_PARTY_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.X102_50F_PARTY_ID.value.trim() != '') {
            Cal_50();
        } else {
            document.MAINFORM.X102_50A_IDENTIFIER.value = '';
            document.MAINFORM.X102_50F_PARTY_NAME.value = '';
            document.MAINFORM.X102_50F_PARTY_ADD1.value = '';
            document.MAINFORM.X102_50F_PARTY_ADD2.value = '';
            document.MAINFORM.X102_50F_PARTY_ADD3.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_56A_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X101_INTERMEDIARY_56', 'X203_56_PARTY_ID');
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}

csDOScreenProto.X103_57A_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X101_ACC_57', 'X203_57_PARTY_ID');
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}

csDOScreenProto.X203_56_PARTY_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.X203_56_PARTY_ID.value != '') {
            SYS_GetCUBK('X101_INTERMEDIARY_56', 'X203_56_PARTY_ID');
        } else {
            document.MAINFORM.X203_56D_PARTY_NAME.value = '';
            document.MAINFORM.X203_56D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_56D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_56D_PARTY_ADD3.value = '';
            document.MAINFORM.X203_56A_IDENTIFIER.value = '';
            document.MAINFORM.X203_56_PARTY_IDENTIFIER.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}

csDOScreenProto.X203_57_PARTY_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.X203_57_PARTY_ID.value != '') {
            SYS_GetCUBK('X101_ACC_57', 'X203_57_PARTY_ID');
        } else {
            document.MAINFORM.X203_57D_PARTY_NAME.value = '';
            document.MAINFORM.X203_57D_PARTY_ADD1.value = '';
            document.MAINFORM.X203_57D_PARTY_ADD2.value = '';
            document.MAINFORM.X203_57D_PARTY_ADD3.value = '';
            document.MAINFORM.X102_57A_IDENTIFIER.value = '';
            document.MAINFORM.X102_57A_ACC_WITH_IDENTIFIER.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B.js", e);
    }
}