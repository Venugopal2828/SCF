"path:SCRN/Library/Party/REIM_AccountWithBank.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_AC_BK_MULT_ADD = function() {
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
        DisExcpt("REIM_SRC_REIM_AccountWithBank.js", e);
    }
}

csLbiCompProto.Cal_AC_BK_ORDER_NO = function() {
    try {
        var AC_BK_ORDER_NO = document.MAINFORM.AC_BK_ORDER_NO.value;
        var AC_WT_BK_ID = document.MAINFORM.AC_WT_BK_ID.value;
        //var sSQLWhere = "ORDER_NO = " + document.MAINFORM.AC_BK_ORDER_NO + " AND C_MAIN_REF = '" + document.MAINFORM.AC_WT_BK_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "AC_WT_BK_NM;AC_WT_BK_ADD1;AC_WT_BK_ADD2;AC_WT_BK_ADD3";
        SYS_GetTableDataByRule_S('REIM_SRC_REIM_AccountWithBank_Cal_AC_BK_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AccountWithBank.js", e);
    }
}

csLbiCompProto.Cal_AC_BK_SW_ADD = function() {
    try {
        if (document.MAINFORM.AC_BK_SW_ADD.value.length == 11 || document.MAINFORM.AC_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.AC_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.AC_BK_SW_ADD.value = document.MAINFORM.AC_BK_SW_ADD.value + 'XXX';
            }
            //var sSQLWhere = "SW_ADD = '" + document.MAINFORM.AC_BK_SW_ADD.value + "'";
            //var sTableName = "BANK_MASTER";
            //var sFieldList = "C_MAIN_REF";
            //var sMappingList = "AC_WT_BK_ID";
            SYS_GetTableDataByRule_S('REIM_SRC_REIM_AccountWithBank_Cal_AC_BK_SW_ADD_1', '1', true);
            Cal_AC_BK_SW_TAG();
            Cal_AC_BK_SW_TAG();
            Cal_AC_BK_MULT_ADD();
            if (document.MAINFORM.AC_WT_BK_ID.value != '') {
                SYS_GetCUBK('AC_WT_BK_ID', 'AC_WT_BK_ID', Cal_AC_WT_BK_ID_back);
            }

        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AccountWithBank.js", e);
    }
}

csLbiCompProto.Cal_AC_BK_SW_TAG = function() {
    try {
        var AC_BK_SW_ADD = document.MAINFORM.AC_BK_SW_ADD.value;

        if (AC_BK_SW_ADD == "") {
            document.MAINFORM.AC_BK_SW_TAG.value = "D";
        } else {
            document.MAINFORM.AC_BK_SW_TAG.value = "A";
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AccountWithBank.js", e);
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
        DisExcpt("REIM_SRC_REIM_AccountWithBank.js", e);
    }
}

csLbiCompProto.Cal_AC_WT_BK_ADD = function() {
    try {
        SYS_InqCUBK('AC_WT_BK_ADD', 'AC_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AccountWithBank.js", e);
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
            Cal_AC_BK_MULT_ADD();
        } else {
            SYS_GetCUBK('AC_WT_BK_ID', document.MAINFORM.AC_WT_BK_ID.name, Cal_AC_WT_BK_ID_back);
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AccountWithBank.js", e);
    }
}

csLbiCompProto.Cal_AC_WT_BK_ID_back = function() {
    try {
        Cal_AC_BK_SW_TAG();
        SYT_Show_Notes(document.MAINFORM.AC_BK_NOTES.name);
        Cal_AC_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AccountWithBank.js", e);
    }
}