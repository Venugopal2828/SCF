"path:SCRN/Library/Party/REIM_IssuingBank_1.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_ISSUE_BK = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        ISSUE_BK_SW_ADD = EEHtml.getElementById("ISSUE_BK_SW_ADD").value;
        ISSUE_BK_NM = EEHtml.getElementById("ISSUE_BK_NM").value;
        ISSUE_BK_ADD1 = EEHtml.getElementById("ISSUE_BK_ADD1").value;
        ISSUE_BK_ADD2 = EEHtml.getElementById("ISSUE_BK_ADD2").value;
        ISSUE_BK_ADD3 = EEHtml.getElementById("ISSUE_BK_ADD3").value;
        var _string = ISSUE_BK_SW_ADD + ISSUE_BK_NM + ISSUE_BK_ADD1 + ISSUE_BK_ADD2 + ISSUE_BK_ADD3;
        if (_string.trim() == "") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('ISSUE_BK_ID', '2');
            }
        } else {
            SYS_InqCUBK_byCondition('ISSUE_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_IssuingBank_1.js", e);
    }
}

csLbiCompProto.Cal_ISSUE_BK_ADD = function() {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_IssuingBank_1.js", e);
    }
}

csLbiCompProto.Cal_ISSUE_BK_ID = function() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID.value == '') {
            document.MAINFORM.ISSUE_BK_NM.value = '';
            document.MAINFORM.ISSUE_BK_ADD1.value = '';
            document.MAINFORM.ISSUE_BK_ADD2.value = '';
            document.MAINFORM.ISSUE_BK_ADD3.value = '';
            document.MAINFORM.ISSUE_BK_SW_ADD.value = '';
            document.MAINFORM.ISSUE_BK_SW_TAG.value = 'D';
            document.MAINFORM.ISSUE_BK_NOTES.value = '';
            document.MAINFORM.ISSUE_BK_CNTY.value = '';
            SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
            Cal_ISSUE_BK_MULT_ADD();
        } else {
            SYS_GetCUBK('ISSUE_BK_ID', document.MAINFORM.ISSUE_BK_ID.name, 'Cal_ISSUE_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_IssuingBank_1.js", e);
    }
}

csLbiCompProto.Cal_ISSUE_BK_ID_back = function() {
    try {
        var arr; // Utility Auto Fix Comments
        SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        Cal_ISSUE_BK_SW_TAG();
        SYM_REIM_Cal_ISSUE_BK_CNTY();

        SYM_REIM_Get_X730_ADV_BKID_B2();

        if (SYS_ORG_FUNCTION_SHORT_NAME == 'ProcessMT740' || SYS_ORG_FUNCTION_SHORT_NAME == 'RegInstruction') {
            arr = ['ISS_COMM', 'CONF_COMM', 'SWIFT_CHG', 'POST_CHG', 'OTHER_CHG'];
            SYM_REIM_Chg_Calculate(arr);
        } else if (SYS_ORG_FUNCTION_SHORT_NAME == 'ProcessMT747' || SYS_ORG_FUNCTION_SHORT_NAME == 'ReimAmend') {
            arr = ['AMEND_COMM', 'ISS_COMM', 'CONF_COMM', 'SWIFT_CHG', 'POST_CHG', 'OTHER_CHG']; // Utility Auto Fix Comments
            SYM_REIM_Chg_Calculate(arr);
        } else if (SYS_ORG_FUNCTION_SHORT_NAME == 'SettleClaim') {
            arr = ['ISS_COMM', 'AMEND_COMM', 'CONF_COMM', 'SWIFT_CHG', 'POST_CHG', 'OTHER_CHG']; // Utility Auto Fix Comments
            SYM_REIM_Chg_Calculate(arr);
        }
        Cal_ISSUE_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_IssuingBank_1.js", e);
    }
}

csLbiCompProto.Cal_ISSUE_BK_MULT_ADD = function() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID.value != '') {
            if (document.MAINFORM.ISSUE_BK_ID.className == 'CHAR_P') {
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'H');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'O');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_IssuingBank_1.js", e);
    }
}

csLbiCompProto.Cal_ISSUE_BK_ORDER_NO = function() {
    try {
        var ISSUE_BK_ID; // Utility Auto Fix Comments
        var ISSUE_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ISSUE_BK_ORDER_NO = document.MAINFORM.ISSUE_BK_ORDER_NO.value;
        //ISSUE_BK_ID = document.MAINFORM.ISSUE_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + ISSUE_BK_ORDER_NO + " AND C_MAIN_REF = '" + ISSUE_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "ISSUE_BK_NM;ISSUE_BK_ADD1;ISSUE_BK_ADD2;ISSUE_BK_ADD3";
        SYS_GetTableDataByRule_S('REIM_SRC_REIM_IssuingBank_1_Cal_ISSUE_BK_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_IssuingBank_1.js", e);
    }
}

csLbiCompProto.Cal_ISSUE_BK_SW_ADD = function() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 11 || document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.ISSUE_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value + "XXX";
            }

            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.ISSUE_BK_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "ISSUE_BK_ID";
            SYS_GetTableDataByRule_S('REIM_SRC_REIM_IssuingBank_1_Cal_ISSUE_BK_SW_ADD_1', '1', true);
            Cal_ISSUE_BK_SW_TAG();
            Cal_ISSUE_BK_MULT_ADD();
            if (document.MAINFORM.ISSUE_BK_ID.value != '') {
                SYS_GetCUBK('ISSUE_BK_ID', 'ISSUE_BK_ID', Cal_ISSUE_BK_ID_back);
            } else {
                SYM_REIM_Cal_Chg_For_Issue();
            }

        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_IssuingBank_1.js", e);
    }
}

csLbiCompProto.Cal_ISSUE_BK_SW_TAG = function() {
    try {
        var ISSUE_BK_SW_ADD; // Utility Auto Fix Comments
        ISSUE_BK_SW_ADD = document.MAINFORM.ISSUE_BK_SW_ADD.value;

        if (ISSUE_BK_SW_ADD == "") {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = "D";
        } else {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = "A";
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_IssuingBank_1.js", e);
    }
}