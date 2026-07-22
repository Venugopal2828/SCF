"path:SCRN/Library/Party/REIM_Beneficiary_1.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_BENE = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        BENE_NM = EEHtml.getElementById("BENE_NM").value;
        BENE_ADD1 = EEHtml.getElementById("BENE_ADD1").value;
        BENE_ADD2 = EEHtml.getElementById("BENE_ADD2").value;
        BENE_ADD3 = EEHtml.getElementById("BENE_ADD3").value;
        var _string = BENE_NM + BENE_ADD1 + BENE_ADD2 + BENE_ADD3;
        if (_string.trim() == "") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('BENE_ID', '2');
            }
        } else {
            SYS_InqCUBK_byCondition('BENE_ID', '1');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Beneficiary_1.js", e);
    }
}

csLbiCompProto.Cal_BENE_ACNO = function() {
    try {
        if (document.MAINFORM.BENE_ACNO.value != "") {
            SYS_GetCUBK('BENE_GET_ID', 'BENE_ACNO');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Beneficiary_1.js", e);
    }
}

csLbiCompProto.Cal_BENE_ADD = function() {
    try {
        //SYS_InqCUBK_Sql('BENE_BK_ADD', 'C_MAIN_REF = \'<--BENE_ID-->\'');
        SYS_InqCUBK_byCondition('BENE_BK_ADD', '1');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Beneficiary_1.js", e);
    }
}

csLbiCompProto.Cal_BENE_ID = function() {
    try {
        if (document.MAINFORM.BENE_ID.value == '') {
            document.MAINFORM.BENE_NM.value = '';
            document.MAINFORM.BENE_ADD1.value = '';
            document.MAINFORM.BENE_ADD2.value = '';
            document.MAINFORM.BENE_ADD3.value = '';
            document.MAINFORM.BENE_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
            Cal_BENE_MULI_ADD();
        } else {
            SYS_GetCUBK('BENE_ID', document.MAINFORM.BENE_ID.name, Cal_BENE_ID_back);
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Beneficiary_1.js", e);
    }
}

csLbiCompProto.Cal_BENE_ID_back = function() {
    try {
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        Cal_BENE_MULI_ADD();
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Beneficiary_1.js", e);
    }
}

csLbiCompProto.Cal_BENE_MULI_ADD = function() {
    try {
        if (document.MAINFORM.BENE_ID.value != '') {
            if (document.MAINFORM.BENE_ID.className == 'CHAR_P') {
                SYT_ChangeFldClass(document.MAINFORM.BENE_BK_ADD_BTN, 'H');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.BENE_BK_ADD_BTN, 'O');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BENE_BK_ADD_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Beneficiary_1.js", e);
    }
}

csLbiCompProto.Cal_BENE_ORDER_NO = function() {
    try {
        //var BENE_ORDER_NO = document.MAINFORM.BENE_ORDER_NO.value;
        //var BENE_ID = document.MAINFORM.BENE_ID.value;
        //var sSQLWhere = "ORDER_NO = " + BENE_ORDER_NO + " AND C_MAIN_REF = '" + BENE_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "BENE_NM;BENE_ADD1;BENE_ADD2;BENE_ADD3";
        SYS_GetTableDataByRule_S('REIM_SRC_REIM_Beneficiary_1_Cal_BENE_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_Beneficiary_1.js", e);
    }
}