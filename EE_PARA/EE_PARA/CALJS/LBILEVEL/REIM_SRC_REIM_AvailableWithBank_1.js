"path:SCRN/Library/Party/REIM_AvailableWithBank_1.lbi";

var csLbiCompProto = {};

csLbiCompProto.CAL_AVAL_WT_MULI_ADD = function() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_ID.value != '') {
            if (document.MAINFORM.AVAL_WT_BK_ID.className == 'CHAR_P') {
                SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN, 'H');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN, 'O');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AvailableWithBank_1.js", e);
    }
}

csLbiCompProto.Cal_AVAL_BK_ORDER_NO = function() {
    try {
        //var AVAL_WT_BK_ORDER_NO = document.MAINFORM.AVAL_BK_ORDER_NO.value;
        //var AVAL_WT_BK_ID = document.MAINFORM.AVAL_WT_BK_ID.value;
        //var sSQLWhere = "ORDER_NO = " + AVAL_WT_BK_ORDER_NO + " AND C_MAIN_REF = '" + AVAL_WT_BK_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "AVAL_WT_BK_NM;AVAL_WT_BK_ADD1;AVAL_WT_BK_ADD2;AVAL_WT_BK_ADD3";
        SYS_GetTableDataByRule_S('REIM_SRC_REIM_AvailableWithBank_1_Cal_AVAL_BK_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AvailableWithBank_1.js", e);
    }
}

csLbiCompProto.Cal_AVAL_WT_BK = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        AVAL_WT_BK_SW_ADD = EEHtml.getElementById("AVAL_WT_BK_SW_ADD").value;
        AVAL_WT_BK_NM = EEHtml.getElementById("AVAL_WT_BK_NM").value;
        AVAL_WT_BK_ADD1 = EEHtml.getElementById("AVAL_WT_BK_ADD1").value;
        AVAL_WT_BK_ADD2 = EEHtml.getElementById("AVAL_WT_BK_ADD2").value;
        AVAL_WT_BK_ADD3 = EEHtml.getElementById("AVAL_WT_BK_ADD3").value;
        var _string = AVAL_WT_BK_SW_ADD + AVAL_WT_BK_NM + AVAL_WT_BK_ADD1 + AVAL_WT_BK_ADD2 + AVAL_WT_BK_ADD3;
        if (_string.trim() == "") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('AVAL_WT_BK_ID', '2');
            }
        } else {
            SYS_InqCUBK_byCondition('AVAL_WT_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AvailableWithBank_1.js", e);
    }
}

csLbiCompProto.Cal_AVAL_WT_BK_ADD = function() {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AvailableWithBank_1.js", e);
    }
}

csLbiCompProto.Cal_AVAL_WT_BK_ID = function() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_ID.value == '') {
            document.MAINFORM.AVAL_WT_BK_NM.value = '';
            document.MAINFORM.AVAL_WT_BK_ADD1.value = '';
            document.MAINFORM.AVAL_WT_BK_ADD2.value = '';
            document.MAINFORM.AVAL_WT_BK_ADD3.value = '';
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = 'D';
            document.MAINFORM.AVAL_WT_BK_SW_ADD.value = '';
            document.MAINFORM.AVAL_WT_BK_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
            CAL_AVAL_WT_MULI_ADD();
        } else {
            SYS_GetCUBK('AVAL_WT_BK_ID', document.MAINFORM.AVAL_WT_BK_ID.name, Cal_AVAL_WT_BK_ID_back);

        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AvailableWithBank_1.js", e);
    }
}

csLbiCompProto.Cal_AVAL_WT_BK_ID_back = function() {
    try {
        Cal_AVAL_WT_BK_SW_TAG();
        SYT_Show_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        CAL_AVAL_WT_MULI_ADD();
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AvailableWithBank_1.js", e);
    }
}

csLbiCompProto.Cal_AVAL_WT_BK_SW_ADD = function() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 11 || document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = document.MAINFORM.AVAL_WT_BK_SW_ADD.value + "XXX";
            }

            //var sSQLWhere = "SW_ADD = '" + document.MAINFORM.AVAL_WT_BK_SW_ADD.value + "'";
            //var sTableName = "BANK_MASTER";
            //var sFieldList = "C_MAIN_REF";
            //var sMappingList = "AVAL_WT_BK_ID";
            SYS_GetTableDataByRule_S('REIM_SRC_REIM_AvailableWithBank_1_Cal_AVAL_WT_BK_SW_ADD_1', '1', true);
            Cal_AVAL_WT_BK_SW_TAG();
            CAL_AVAL_WT_MULI_ADD();
            if (document.MAINFORM.AVAL_WT_BK_ID.value != '') {
                SYS_GetCUBK('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID', Cal_AVAL_WT_BK_ID_back);
            }
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AvailableWithBank_1.js", e);
    }
}

csLbiCompProto.Cal_AVAL_WT_BK_SW_TAG = function() {
    try {
        var AVAL_WT_BK_SW_ADD = document.MAINFORM.AVAL_WT_BK_SW_ADD.value;

        if (AVAL_WT_BK_SW_ADD == "") {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = "D";
        } else {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = "A";
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_AvailableWithBank_1.js", e);
    }
}