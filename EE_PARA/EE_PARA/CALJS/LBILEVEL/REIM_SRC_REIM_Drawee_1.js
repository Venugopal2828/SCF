"path:SCRN/Library/Party/REIM_Drawee_1.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_DRWE = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        DRWE_NM = EEHtml.getElementById("DRWE_NM").value;
        DRWE_ADD1 = EEHtml.getElementById("DRWE_ADD1").value;
        DRWE_ADD2 = EEHtml.getElementById("DRWE_ADD2").value;
        DRWE_ADD3 = EEHtml.getElementById("DRWE_ADD3").value;
        var _string = DRWE_NM + DRWE_ADD1 + DRWE_ADD2 + DRWE_ADD3;
        if (_string.trim() == "") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('DRWE_ID', '2');
            }
        } else {
            SYS_InqCUBK_byCondition('DRWE_ID', '1');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Drawee_1.js", e);
    }
}

csLbiCompProto.Cal_DRWE_ADD = function() {
    try {
        SYS_InqCUBK('DRWE_ADD', 'DRWE_ID', 'ID');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Drawee_1.js", e);
    }
}

csLbiCompProto.Cal_DRWE_ID = function() {
    try {
        if (document.MAINFORM.DRWE_ID.value == '') {
            document.MAINFORM.DRWE_NM.value = '';
            document.MAINFORM.DRWE_ADD1.value = '';
            document.MAINFORM.DRWE_ADD2.value = '';
            document.MAINFORM.DRWE_ADD3.value = '';
            document.MAINFORM.DRWE_NOTES.value = '';
            document.MAINFORM.DRWE_SW_TAG.value = 'D';
            document.MAINFORM.DRWE_SW_ADD.value = '';
            SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
            Cal_DRWE_MULI_ADD();
        } else {
            SYS_GetCUBK('DRWE_ID', document.MAINFORM.DRWE_ID.name, Cal_DRWE_ID_back);
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Drawee_1.js", e);
    }
}

csLbiCompProto.Cal_DRWE_ID_back = function() {
    try {
        Cal_DRWE_SW_TAG();
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        Cal_DRWE_MULI_ADD();
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Drawee_1.js", e);
    }
}

csLbiCompProto.Cal_DRWE_MULI_ADD = function() {
    try {
        if (document.MAINFORM.DRWE_ID.value != '') {
            if (document.MAINFORM.DRWE_ID.className == 'CHAR_P') {
                SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'H');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'O');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Drawee_1.js", e);
    }
}

csLbiCompProto.Cal_DRWE_ORDER_NO = function() {
    try {
        //var DRWE_ORDER_NO = document.MAINFORM.DRWE_ORDER_NO.value;
        //var DRWE_ID = document.MAINFORM.DRWE_ID.value;
        //var sSQLWhere = "ORDER_NO = " + DRWE_ORDER_NO + " AND C_MAIN_REF = '" + DRWE_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "DRWE_NM;DRWE_ADD1;DRWE_ADD2;DRWE_ADD3";
        SYS_GetTableDataByRule_S('REIM_SRC_REIM_Drawee_1_Cal_DRWE_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Drawee_1.js", e);
    }
}

csLbiCompProto.Cal_DRWE_SW_ADD = function() {
    try {
        if (document.MAINFORM.DRWE_SW_ADD.value.length == 11 || document.MAINFORM.DRWE_SW_ADD.value.length == 8) {
            if (document.MAINFORM.DRWE_SW_ADD.value.length == 8) {
                document.MAINFORM.DRWE_SW_ADD.value = document.MAINFORM.DRWE_SW_ADD.value + 'XXX';
            }
            //var sSQLWhere = "SW_ADD = '" + document.MAINFORM.DRWE_SW_ADD.value + "'";
            //var sTableName = "BANK_MASTER";
            //var sFieldList = "C_MAIN_REF";
            //var sMappingList = "DRWE_ID";
            SYS_GetTableDataByRule_S('REIM_SRC_REIM_Drawee_1_Cal_DRWE_SW_ADD_1', '1', true);
            Cal_DRWE_SW_TAG();
            Cal_DRWE_MULI_ADD();
            if (document.MAINFORM.DRWE_ID.value != '') {
                SYS_GetCUBK('DRWE_ID', 'DRWE_ID', Cal_DRWE_ID_back);
            }
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Drawee_1.js", e);
    }
}

csLbiCompProto.Cal_DRWE_SW_TAG = function() {
    try {
        var PRES_BK_SW_ADD = document.MAINFORM.DRWE_SW_ADD.value;

        if (PRES_BK_SW_ADD == "") {
            document.MAINFORM.DRWE_SW_TAG.value = "D";
        } else {
            document.MAINFORM.DRWE_SW_TAG.value = "A";
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Drawee_1.js", e);
    }
}