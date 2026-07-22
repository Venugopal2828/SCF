"path:SCRN/Library/Party/REIM_NegotiatingBank_1.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_PRES_BK = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        PRES_BK_SW_ADD = EEHtml.getElementById("PRES_BK_SW_ADD").value;
        PRES_BK_NM = EEHtml.getElementById("PRES_BK_NM").value;
        PRES_BK_ADD1 = EEHtml.getElementById("PRES_BK_ADD1").value;
        PRES_BK_ADD2 = EEHtml.getElementById("PRES_BK_ADD2").value;
        PRES_BK_ADD3 = EEHtml.getElementById("PRES_BK_ADD3").value;
        var _string = PRES_BK_SW_ADD + PRES_BK_NM + PRES_BK_ADD1 + PRES_BK_ADD2 + PRES_BK_ADD3;
        if (_string.trim() == "") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('PRES_BK_ID', '2');
            }
        } else {
            SYS_InqCUBK_byCondition('PRES_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_NegotiatingBank_1.js", e);
    }
}

csLbiCompProto.Cal_PRES_BK_ADD = function() {
    try {
        SYS_InqCUBK('PRES_BK_ADD', 'PRES_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_NegotiatingBank_1.js", e);
    }
}

csLbiCompProto.Cal_PRES_BK_ID = function() {
    try {
        if (document.MAINFORM.PRES_BK_ID.value == '') {
            document.MAINFORM.PRES_BK_NM.value = '';
            document.MAINFORM.PRES_BK_ADD1.value = '';
            document.MAINFORM.PRES_BK_ADD2.value = '';
            document.MAINFORM.PRES_BK_ADD3.value = '';
            document.MAINFORM.PRES_BK_SW_ADD.value = '';
            document.MAINFORM.PRES_BK_SW_TAG.value = 'D';
            document.MAINFORM.PRES_BK_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
            Cal_PRES_BK_MULI_ADD();
        } else {
            SYS_GetCUBK('PRES_BK_ID', document.MAINFORM.PRES_BK_ID.name, Cal_PRES_BK_ID_back);
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_NegotiatingBank_1.js", e);
    }
}

csLbiCompProto.Cal_PRES_BK_ID_back = function() {
    try {
        Cal_PRES_BK_SW_TAG();
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        Cal_PRES_BK_MULI_ADD();
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_NegotiatingBank_1.js", e);
    }
}

csLbiCompProto.Cal_PRES_BK_MULI_ADD = function() {
    try {
        if (document.MAINFORM.PRES_BK_ID.value != '') {
            if (document.MAINFORM.PRES_BK_ID.className == 'CHAR_P') {
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, 'H');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, 'O');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_NegotiatingBank_1.js", e);
    }
}

csLbiCompProto.Cal_PRES_BK_ORDER_NO = function() {
    try {
        //var PRES_BK_ORDER_NO = document.MAINFORM.PRES_BK_ORDER_NO.value;
        //var PRES_BK_ID = document.MAINFORM.PRES_BK_ID.value;
        //var sSQLWhere = "ORDER_NO = " + PRES_BK_ORDER_NO + " AND C_MAIN_REF = '" + PRES_BK_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "PRES_BK_NM;PRES_BK_ADD1;PRES_BK_ADD2;PRES_BK_ADD3";
        SYS_GetTableDataByRule_S('REIM_SRC_REIM_NegotiatingBank_1_Cal_PRES_BK_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_NegotiatingBank_1.js", e);
    }
}

csLbiCompProto.Cal_PRES_BK_SW_ADD = function() {
    try {
        if (document.MAINFORM.PRES_BK_SW_ADD.value.length == 11 || document.MAINFORM.PRES_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.PRES_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.PRES_BK_SW_ADD.value = document.MAINFORM.PRES_BK_SW_ADD.value + 'XXX';
            }

            //var sSQLWhere = "SW_ADD = '" + document.MAINFORM.PRES_BK_SW_ADD.value + "'";
            //var sTableName = "BANK_MASTER";
            //var sFieldList = "C_MAIN_REF";
            //var sMappingList = "PRES_BK_ID";
            SYS_GetTableDataByRule_S('REIM_SRC_REIM_NegotiatingBank_1_Cal_PRES_BK_SW_ADD_1', '1', true);
            Cal_PRES_BK_SW_TAG();
            Cal_PRES_BK_MULI_ADD();
            if (document.MAINFORM.PRES_BK_ID.value != '') {
                SYS_GetCUBK('PRES_BK_ID', 'PRES_BK_ID', Cal_PRES_BK_ID_back);
            }

        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_NegotiatingBank_1.js", e);
    }
}

csLbiCompProto.Cal_PRES_BK_SW_TAG = function() {
    try {
        var PRES_BK_SW_ADD = document.MAINFORM.PRES_BK_SW_ADD.value;

        if (PRES_BK_SW_ADD == "") {
            document.MAINFORM.PRES_BK_SW_TAG.value = "D";
        } else {
            document.MAINFORM.PRES_BK_SW_TAG.value = "A";
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_NegotiatingBank_1.js", e);
    }
}