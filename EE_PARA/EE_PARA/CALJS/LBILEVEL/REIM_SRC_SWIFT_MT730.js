"path:SCRN/Library/REIM/SWIFT_MT730.lbi";

var csLbiCompProto = {};

csLbiCompProto.CAL_AC_BK_MULT_ADD = function() {
    try {
        if (document.MAINFORM.AC_WT_BK_ID.value != '') {
            if (document.MAINFORM.AC_WT_BK_ID.className == 'CHAR_P') {
                SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD_BTN, 'H');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD_BTN, 'O');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Cal_AC_BK_ORDER_NO = function() {
    try {
        var AC_BK_ORDER_NO; // Utility Auto Fix Comments
        var AC_WT_BK_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //AC_BK_ORDER_NO = document.MAINFORM.AC_BK_ORDER_NO.value;
        //AC_WT_BK_ID = document.MAINFORM.AC_WT_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + AC_BK_ORDER_NO + " AND C_MAIN_REF = '" + AC_WT_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "AC_WT_BK_NM;AC_WT_BK_ADD1;AC_WT_BK_ADD2;AC_WT_BK_ADD3";
        SYS_GetTableDataByRule_S('REIM_SRC_SWIFT_MT730_Cal_AC_BK_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Cal_AC_BK_SW_ADD = function() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.AC_BK_SW_ADD.value.length == 11 || document.MAINFORM.AC_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.AC_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.AC_BK_SW_ADD.value = document.MAINFORM.AC_BK_SW_ADD.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.AC_BK_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "AC_WT_BK_ID";
            SYS_GetTableDataByRule_S('REIM_SRC_SWIFT_MT730_Cal_AC_BK_SW_ADD_1', '1', true);
            Cal_AC_BK_SW_TAG();
            CAL_AC_BK_MULT_ADD();
            if (document.MAINFORM.AC_WT_BK_ID.value != '') {
                SYS_GetCUBK('AC_WT_BK_ID', 'AC_WT_BK_ID', Cal_AC_WT_BK_ID_back);
            }

        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Cal_AC_BK_SW_TAG = function() {
    try {
        var AC_BK_SW_ADD; // Utility Auto Fix Comments
        AC_BK_SW_ADD = document.MAINFORM.AC_BK_SW_ADD.value;

        if (AC_BK_SW_ADD == "") {
            document.MAINFORM.AC_BK_SW_TAG.value = "D";
        } else {
            document.MAINFORM.AC_BK_SW_TAG.value = "A";
        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Cal_AC_WT_BK = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        AC_BK_SW_ADD = EEHtml.getElementById("AC_BK_SW_ADD").value;
        AC_WT_BK_NM = EEHtml.getElementById("AC_WT_BK_NM").value;
        AC_WT_BK_ADD1 = EEHtml.getElementById("AC_WT_BK_ADD1").value;
        AC_WT_BK_ADD2 = EEHtml.getElementById("AC_WT_BK_ADD2").value;
        AC_WT_BK_ADD3 = EEHtml.getElementById("AC_WT_BK_ADD3").value;
        var _string = AC_BK_SW_ADD + AC_WT_BK_NM + AC_WT_BK_ADD1 + AC_WT_BK_ADD2 + AC_WT_BK_ADD3;
        if (_string.trim() == "") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('AC_WT_BK_ID', '2');
            }
        } else {
            SYS_InqCUBK_byCondition('AC_WT_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Cal_AC_WT_BK_ADD = function() {
    try {
        SYS_InqCUBK('AC_WT_BK_ADD', 'AC_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Cal_AC_WT_BK_ID = function() {
    try {
        if (document.MAINFORM.AC_WT_BK_ID.value == "") {
            document.MAINFORM.AC_WT_BK_NM.value = '';
            document.MAINFORM.AC_WT_BK_ADD1.value = '';
            document.MAINFORM.AC_WT_BK_ADD2.value = '';
            document.MAINFORM.AC_WT_BK_ADD3.value = '';
            document.MAINFORM.AC_BK_SW_ADD.value = '';
            document.MAINFORM.AC_BK_SW_TAG.value = 'D';
            document.MAINFORM.AC_BK_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.AC_BK_NOTES.name);
            Get_X730_ACC_BKID_57A();
            CAL_AC_BK_MULT_ADD();
        } else {
            SYS_GetCUBK('AC_WT_BK_ID', document.MAINFORM.AC_WT_BK_ID.name, Cal_AC_WT_BK_ID_back);
        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Cal_AC_WT_BK_ID_back = function() {
    try {
        Cal_AC_BK_SW_TAG();
        SYT_Show_Notes(document.MAINFORM.AC_BK_NOTES.name);
        CAL_AC_BK_MULT_ADD();
        Get_X730_ACC_BKID_57A();
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Cal_ISSUE_NARR_MAIL = function() {
    try {
        if (document.MAINFORM.SEND_TO.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_NARR_MAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_NARR_MAIL, 'P');
            document.MAINFORM.ISSUE_NARR_MAIL.value = '';
        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Cal_ISSUE_NARR_TAG_79 = function() {
    try {
        if (document.MAINFORM.SEND_TO.value == 'MT799' || document.MAINFORM.SEND_TO.value == 'MT999') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_NARR_TAG_79, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_NARR_TAG_79, 'P');
            document.MAINFORM.ISSUE_NARR_TAG_79.value = '';
        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Cal_X730_CHG_AMT_32A = function() {
    try {
        document.MAINFORM.X730_CHG_AMT_32A.value = SYT_AmtFormat(document.MAINFORM.X730_CHG_CCY_32A.value, document.MAINFORM.X730_CHG_AMT_32A.value);
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Cal_X730_VALUE_DT_32A = function() {
    try {
        if (document.MAINFORM.X730_VALUE_DT_32A.value == "") {
            document.MAINFORM.X730_TAG_32A.value = "B";
        } else {
            document.MAINFORM.X730_TAG_32A.value = "D";
        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Get_Ack_79 = function() {
    try {
        var PaymentDebit_DRDate; // Utility Auto Fix Comments
        var PaymentDebit_length; // Utility Auto Fix Comments
        var PaymentDebit_obj; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var vCPYT_DR_VAL_DATE; // Utility Auto Fix Comments
        if ("SettleClaim" == SYS_ORG_FUNCTION_NAME) {
            vCPYT_DR_VAL_DATE = '';
            PaymentDebit_obj = SYS_GetObjByDoName('PaymentDebit');
            PaymentDebit_length = PaymentDebit_obj.length;
            PaymentDebit_DRDate = '';
            for (i = 0; i < PaymentDebit_length; i++) { // Utility Auto Fix Comments
                PaymentDebit_DRDate = SYS_GetFldValueByDo(PaymentDebit_obj[i], 'CPYT_DR_VAL_DATE');
                vCPYT_DR_VAL_DATE += PaymentDebit_DRDate + '\n           ';
                if (i == PaymentDebit_length - 1) {
                    vCPYT_DR_VAL_DATE = vCPYT_DR_VAL_DATE.trim();
                }
            }



            if (document.MAINFORM.SEND_TO.value == 'MT799') {
                document.MAINFORM.ISSUE_NARR_TAG_79.value = 'REIM CLAIM SETTLED: \n' + 'YOUR REF----' + document.MAINFORM.LC_NO.value + '\n' + 'CLM BK BIC----' + document.MAINFORM.CLM_BK_SW_ADD.value + '\n' + 'AMT----' + document.MAINFORM.LC_CCY.value + document.MAINFORM.REIM_INST_AMT.value + '\n' + 'DR DATE----' + vCPYT_DR_VAL_DATE + '\n';
            }
        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Get_X730_ACC_BKID_57A = function() {
    try {
        document.MAINFORM.X730_ACC_BKID_57A.value = document.MAINFORM.AC_WT_BK_ID.value;
        document.MAINFORM.X730_ACC_BKNM_57A.value = document.MAINFORM.AC_WT_BK_NM.value;
        document.MAINFORM.X730_ACCBKADD1_57A.value = document.MAINFORM.AC_WT_BK_ADD1.value;
        document.MAINFORM.X730_ACCBKADD2_57A.value = document.MAINFORM.AC_WT_BK_ADD2.value;
        document.MAINFORM.X730_ACCBKADD3_57A.value = document.MAINFORM.AC_WT_BK_ADD3.value;
        document.MAINFORM.X730_TAG_57A.value = document.MAINFORM.AC_BK_SW_TAG.value;
        document.MAINFORM.X730_ACC_BKSW_57A.value = document.MAINFORM.AC_BK_SW_ADD.value;
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Get_X730_ACC_IDEN_25 = function() {
    try {
        if (document.MAINFORM.SEND_TO.value == 'MT730') {
            SYT_ChangeFldClass(document.MAINFORM.X730_ACC_IDEN_25, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X730_ACC_IDEN_25, 'P');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Get_X730_BEACK_DT_30 = function() {
    try {
        if (document.MAINFORM.SEND_TO.value == "MT730") {
            SYT_ChangeFldClass(document.MAINFORM.X730_BEACK_DT_30, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X730_BEACK_DT_30, 'P');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}

csLbiCompProto.Get_XN99_NARRATIVE_79 = function() {
    try {
        document.MAINFORM.XN99_NARRATIVE_79.value = document.MAINFORM.ISSUE_NARR_TAG_79.value;
    } catch (e) {
        DisExcpt("REIM_SRC_SWIFT_MT730.js", e);
    }
}