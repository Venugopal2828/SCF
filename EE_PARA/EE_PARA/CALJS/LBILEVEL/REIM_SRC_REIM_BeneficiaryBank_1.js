"path:SCRN/Library/Party/REIM_BeneficiaryBank_1.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_BENE_BANK = function() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        BENE_BK_SW_ADD = EEHtml.getElementById("BENE_BK_SW_ADD").value;
        BENE_BK_NM = EEHtml.getElementById("BENE_BK_NM").value;
        BENE_BK_ADD1 = EEHtml.getElementById("BENE_BK_ADD1").value;
        BENE_BK_ADD2 = EEHtml.getElementById("BENE_BK_ADD2").value;
        BENE_BK_ADD3 = EEHtml.getElementById("BENE_BK_ADD3").value;
        var _string = BENE_BK_SW_ADD + BENE_BK_NM + BENE_BK_ADD1 + BENE_BK_ADD2 + BENE_BK_ADD3;
        if (_string.trim() == "") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK_byCondition('BENE_BK_ID', '2');
            }
        } else {
            SYS_InqCUBK_byCondition('BENE_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_BeneficiaryBank_1.js", e);
    }
}

csLbiCompProto.Cal_BENE_BK_ADD = function() {
    try {
        SYS_InqCUBK('BENE_BK_ADD', 'BENE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_BeneficiaryBank_1.js", e);
    }
}

csLbiCompProto.Cal_BENE_BK_ID = function() {
    try {
        if (document.MAINFORM.BENE_BK_ID.value == '') {
            document.MAINFORM.BENE_BK_NM.value = '';
            document.MAINFORM.BENE_BK_ADD1.value = '';
            document.MAINFORM.BENE_BK_ADD2.value = '';
            document.MAINFORM.BENE_BK_ADD3.value = '';
            document.MAINFORM.BENE_BK_SW_ADD.value = '';
            document.MAINFORM.BENE_BK_SW_TAG.value = 'D';
            document.MAINFORM.BENE_BK_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.BENE_BK_NOTES.name);
            Cal_BENE_BK_MULT_ADD();
        } else {
            SYS_GetCUBK('BENE_BK_ID', document.MAINFORM.BENE_BK_ID.name, Cal_BENE_BK_ID_Back);
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_BeneficiaryBank_1.js", e);
    }
}

csLbiCompProto.Cal_BENE_BK_ID_Back = function() {
    try {
        Cal_BENE_BK_SW_TAG();
        Cal_BENE_BK_MULT_ADD();
        SYT_Show_Notes(document.MAINFORM.BENE_BK_NOTES.name);
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_BeneficiaryBank_1.js", e);
    }
}

csLbiCompProto.Cal_BENE_BK_MULT_ADD = function() {
    try {
        if (document.MAINFORM.BENE_BK_ID.value != '') {
            if (document.MAINFORM.BENE_BK_ID.className == 'CHAR_P') {
                SYT_ChangeFldClass(document.MAINFORM.BENE_BK_ADD_BTN, 'H');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.BENE_BK_ADD_BTN, 'O');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BENE_BK_ADD_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_BeneficiaryBank_1.js", e);
    }
}

csLbiCompProto.Cal_BENE_BK_POST_ADD = function() {
    try {
        //var BENE_BK_ORDER_NO = document.MAINFORM.BENE_BK_ORDER_NO.value;
        //var BENE_BK_ID = document.MAINFORM.BENE_BK_ID.value;
        //var sSQLWhere = "ORDER_NO = " + BENE_BK_ORDER_NO + " AND C_MAIN_REF = '" + BENE_BK_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "BENE_BK_NM;BENE_BK_ADD1;BENE_BK_ADD2;BENE_BK_ADD3";
        SYS_GetTableDataByRule_S('REIM_SRC_REIM_BeneficiaryBank_1_Cal_BENE_BK_POST_ADD_0', '1');
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_BeneficiaryBank_1.js", e);
    }
}

csLbiCompProto.Cal_BENE_BK_SW_ADD = function() {
    try {
        if (document.MAINFORM.BENE_BK_SW_ADD.value.length == 11 || document.MAINFORM.BENE_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.BENE_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.BENE_BK_SW_ADD.value = document.MAINFORM.BENE_BK_SW_ADD.value + "XXX";
            }

            //var sSQLWhere = "SW_ADD = '" + document.MAINFORM.BENE_BK_SW_ADD.value + "'";
            //var sTableName = "BANK_MASTER";
            //var sFieldList = "C_MAIN_REF";
            //var sMappingList = "BENE_BK_ID";
            SYS_GetTableDataByRule_S('REIM_SRC_REIM_BeneficiaryBank_1_Cal_BENE_BK_SW_ADD_1', '1', true);
            Cal_BENE_BK_SW_TAG();
            Cal_BENE_BK_MULT_ADD();
            if (document.MAINFORM.BENE_BK_ID.value != '') {
                SYS_GetCUBK('BENE_BK_ID', 'BENE_BK_ID', Cal_BENE_BK_ID_Back);
            }
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_BeneficiaryBank_1.js", e);
    }
}

csLbiCompProto.Cal_BENE_BK_SW_TAG = function() {
    try {
        if (document.MAINFORM.BENE_BK_SW_ADD.value == '') {
            document.MAINFORM.BENE_BK_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.BENE_BK_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("REIM_SRC_REIM_BeneficiaryBank_1.js", e);
    }
}