"path:SCRN/Library/Party/REIM_ClaimingBank_1.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_CLM_BK = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        CLM_BK_SW_ADD = EEHtml.getElementById("CLM_BK_SW_ADD").value;
        CLM_BK_NM = EEHtml.getElementById("CLM_BK_NM").value;
        CLM_BK_ADD1 = EEHtml.getElementById("CLM_BK_ADD1").value;
        CLM_BK_ADD2 = EEHtml.getElementById("CLM_BK_ADD2").value;
        CLM_BK_ADD3 = EEHtml.getElementById("CLM_BK_ADD3").value;
        var _string = CLM_BK_SW_ADD + CLM_BK_NM + CLM_BK_ADD1 + CLM_BK_ADD2 + CLM_BK_ADD3;
        if (_string.trim() == "") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('CLM_BK_ID', '2');
            }
        } else {
            SYS_InqCUBK_byCondition('CLM_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_ClaimingBank_1.js", e);
    }
}

csLbiCompProto.Cal_CLM_BK_ADD = function() {
    try {
        SYS_InqCUBK('CLM_BK_ADD', 'CLM_BK_ID');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_ClaimingBank_1.js", e);
    }
}

csLbiCompProto.Cal_CLM_BK_ID_Back = function() {
    try {
        SYT_Show_Notes(document.MAINFORM.CLM_BK_NOTES.name);
        Get_CLM_BK_CNTY();
        Cal_CLM_BK_SW_TAG();
        Get_CLM_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_ClaimingBank_1.js", e);
    }
}

csLbiCompProto.Cal_CLM_BK_POST_ADD = function() {
    try {
        //var CLM_BK_ORDER_NO = document.MAINFORM.CLM_BK_ORDER_NO.value;
        //var CLM_BK_ID = document.MAINFORM.CLM_BK_ID.value;
        //var sSQLWhere = "ORDER_NO = " + CLM_BK_ORDER_NO + " AND C_MAIN_REF = '" + CLM_BK_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "CLM_BK_NM;CLM_BK_ADD1;CLM_BK_ADD2;CLM_BK_ADD3";
        SYS_GetTableDataByRule_S('REIM_SRC_REIM_ClaimingBank_1_Cal_CLM_BK_POST_ADD_0', '1');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_ClaimingBank_1.js", e);
    }
}

csLbiCompProto.Cal_CLM_BK_SW_ADD = function() {
    try {
        if (document.MAINFORM.CLM_BK_SW_ADD.value.length == 11 || document.MAINFORM.CLM_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.CLM_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.CLM_BK_SW_ADD.value = document.MAINFORM.CLM_BK_SW_ADD.value + "XXX";
            }

            //var sSQLWhere = "SW_ADD = '" + document.MAINFORM.CLM_BK_SW_ADD.value + "'";
            //var sTableName = "BANK_MASTER";
            //var sFieldList = "C_MAIN_REF";
            //var sMappingList = "CLM_BK_ID";
            SYS_GetTableDataByRule_S('REIM_SRC_REIM_ClaimingBank_1_Cal_CLM_BK_SW_ADD_1', '1', true);
            Cal_CLM_BK_SW_TAG();
            Get_CLM_BK_MULT_ADD();
            if (document.MAINFORM.CLM_BK_ID.value != '') {
                SYS_GetCUBK('CLM_BK_ID', 'CLM_BK_ID', Cal_CLM_BK_ID_Back);
            }

        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_ClaimingBank_1.js", e);
    }
}

csLbiCompProto.Cal_CLM_BK_SW_TAG = function() {
    try {
        if (document.MAINFORM.CLM_BK_SW_ADD.value == '') {
            document.MAINFORM.CLM_BK_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.CLM_BK_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_ClaimingBank_1.js", e);
    }
}

csLbiCompProto.Get_CLM_BK_CNTY = function() {
    try {
        document.MAINFORM.CLM_BK_CNTY.value = document.MAINFORM.CLM_BK_SW_ADD.value.substring(4, 6);
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_ClaimingBank_1.js", e);
    }
}

csLbiCompProto.Get_CLM_BK_ID = function() {
    try {
        if (document.MAINFORM.CLM_BK_ID.value == '') {
            document.MAINFORM.CLM_BK_NM.value = '';
            document.MAINFORM.CLM_BK_ADD1.value = '';
            document.MAINFORM.CLM_BK_ADD2.value = '';
            document.MAINFORM.CLM_BK_ADD3.value = '';
            document.MAINFORM.CLM_BK_SW_ADD.value = '';
            document.MAINFORM.CLM_BK_SW_TAG.value = 'D';
            document.MAINFORM.CLM_BK_CNTY.value = '';
            document.MAINFORM.CLM_BK_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.CLM_BK_NOTES.name);
            Get_CLM_BK_MULT_ADD();
        } else {
            SYS_GetCUBK('CLM_BK_ID', document.MAINFORM.CLM_BK_ID.name, Cal_CLM_BK_ID_Back);
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_ClaimingBank_1.js", e);
    }
}

csLbiCompProto.Get_CLM_BK_MULT_ADD = function() {
    try {
        if (document.MAINFORM.CLM_BK_ID.value != '') {
            if (document.MAINFORM.CLM_BK_ID.className == 'CHAR_P') {
                SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD_BTN, 'H');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD_BTN, 'O');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CLM_BK_ADD_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_ClaimingBank_1.js", e);
    }
}