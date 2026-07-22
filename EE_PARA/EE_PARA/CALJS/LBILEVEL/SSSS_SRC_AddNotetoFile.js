"path:SCRN/Library/COMMON/AddNotetoFile.lbi";

var csLbiCompProto = {};

csLbiCompProto.CAL_ADD_Button_Back = function() {
    try {
        // Add by jane at 20081029
        if (document.MAINFORM.CORR_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.CORR_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CORR_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_AddNotetoFile.js", e);
    }
}

csLbiCompProto.CAL_CORR_ID_BTN = function() {
    try {
        //Add by jane at 20081029
        if (document.MAINFORM.CORR_CUST_BANK.value == 'Bank') {
            Cal_CORR_BANK();
        } else if (document.MAINFORM.CORR_CUST_BANK.value == 'Customer') {
            Cal_CORR_CUST();
        } else {
            SYS_CheckError(document.MAINFORM.CORR_CUST_BANK, 'Please specify if Bank or Customer first.');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_AddNotetoFile.js", e);
    }
}

csLbiCompProto.CAL_CORR_MULT_ADD_BTN = function() {
    try {
        //Add by jane at 20081029
        SYS_InqCUBK('CORR_MULT_ADD', 'CORR_ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_AddNotetoFile.js", e);
    }
}

csLbiCompProto.CAL_Clear_CORR_ID = function() {
    try {
        // Add by jane at 20081029
        if (document.MAINFORM.CORR_CUST_BANK.value == 'Customer') {
            document.MAINFORM.CORR_ID.value = '';
            document.MAINFORM.CORR_ADD1.value = '';
            document.MAINFORM.CORR_ADD2.value = '';
            document.MAINFORM.CORR_ADD3.value = '';
            document.MAINFORM.CORR_NM.value = '';
            document.MAINFORM.CORR_NOTES.value = '';
            document.MAINFORM.CORR_SW_ADD.value = '';
            document.MAINFORM.CORR_SW_TAG.value = '';
        }
        if (document.MAINFORM.CORR_CUST_BANK.value == 'Bank') {
            document.MAINFORM.CORR_ID.value = '';
            document.MAINFORM.CORR_NM.value = '';
            document.MAINFORM.CORR_ADD1.value = '';
            document.MAINFORM.CORR_ADD2.value = '';
            document.MAINFORM.CORR_ADD3.value = '';
            document.MAINFORM.CORR_NOTES.value = '';
            document.MAINFORM.CORR_SW_ADD.value = '';
            document.MAINFORM.CORR_SW_TAG.value = '';

        }
        if (document.MAINFORM.CORR_CUST_BANK.value == '') {
            document.MAINFORM.CORR_ID.value = '';
            document.MAINFORM.CORR_NM.value = '';
            document.MAINFORM.CORR_ADD1.value = '';
            document.MAINFORM.CORR_ADD2.value = '';
            document.MAINFORM.CORR_ADD3.value = '';
            document.MAINFORM.CORR_NOTES.value = '';
            document.MAINFORM.CORR_SW_ADD.value = '';
            document.MAINFORM.CORR_SW_TAG.value = '';
        }
        Cal_CORR_back();
    } catch (e) {
        DisExcpt("SSSS_SRC_AddNotetoFile.js", e);
    }
}

csLbiCompProto.Cal_CORR_BANK = function() {
    try {

        var retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('CORR_ID_BANK', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_AddNotetoFile.js", e);
    }
}

csLbiCompProto.Cal_CORR_CUST = function() {
    try {

        var retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('CORR_ID_CUST', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_AddNotetoFile.js", e);
    }
}

csLbiCompProto.Cal_CORR_ID = function() {
    try {
        //Edit by jane at 20081029
        if (document.MAINFORM.CORR_ID.value == '') {
            document.MAINFORM.CORR_NM.value = '';
            document.MAINFORM.CORR_ADD1.value = '';
            document.MAINFORM.CORR_ADD2.value = '';
            document.MAINFORM.CORR_ADD3.value = '';
            document.MAINFORM.CORR_SW_ADD.value = '';
            document.MAINFORM.CORR_SW_TAG.value = '';
            document.MAINFORM.CORR_NOTES.value = '';
            Cal_CORR_back();
        } else {
            if (document.MAINFORM.CORR_CUST_BANK.value == 'Bank') {
                SYS_GetCUBK('CORR_ID_BANK', document.MAINFORM.CORR_ID.name, 'Cal_CORR_back');
            } else if (document.MAINFORM.CORR_CUST_BANK.value == 'Customer') {
                SYS_GetCUBK('CORR_ID_CUST', document.MAINFORM.CORR_ID.name, 'Cal_CORR_back');
            }

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_AddNotetoFile.js", e);
    }
}

csLbiCompProto.Cal_CORR_ID_ORDERNO = function() {
    try {
        //Add by jane at 20081029
        //var CORR_ORDERNO = document.MAINFORM.CORR_ADD_ORDER_NO.value;
        //var CORR_ID = document.MAINFORM.CORR_ID.value;
        //var sSQLWhere = "ORDER_NO = " + CORR_ORDERNO + " AND C_MAIN_REF = '" + CORR_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "CORR_NM;CORR_ADD1;ACORR_ADD2;CORR_ADD3";
        SYS_GetTableDataByRule_S('SSSS_SRC_AddNotetoFile_Cal_CORR_ID_ORDERNO_0', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_AddNotetoFile.js", e);
    }
}

csLbiCompProto.Cal_CORR_SW_ADD = function() {
    try {
        if (document.MAINFORM.CORR_SW_ADD.value.length == 11) {
            //var sSQLWhere = "SW_ADD = '" + document.MAINFORM.CORR_SW_ADD.value + "'";
            //var sTableName = "BANK_MASTER";
            //var sFieldList = "C_MAIN_REF";
            //var sMappingList = "CORR_ID";
            SYS_GetTableDataByRule_S('SSSS_SRC_AddNotetoFile_Cal_CORR_SW_ADD_1', '1');
            SYS_GetCUBK('CORR_ID_BANK', 'CORR_ID', 'Cal_CORR_back');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_AddNotetoFile.js", e);
    }
}

csLbiCompProto.Cal_CORR_SW_TAG = function() {
    try {
        if (document.MAINFORM.CORR_SW_ADD.value == "") {
            document.MAINFORM.CORR_SW_TAG.value = "D";
        } else {
            document.MAINFORM.CORR_SW_TAG.value = "A";
        }
        if (document.MAINFORM.CORR_CUST_BANK.value == 'Customer' || document.MAINFORM.CORR_CUST_BANK.value == '' || (document.MAINFORM.CORR_CUST_BANK.value == 'Bank' && document.MAINFORM.CORR_NM.value == '' && document.MAINFORM.CORR_ADD1.value == '' && document.MAINFORM.CORR_ADD2.value == '' && document.MAINFORM.CORR_ADD3.value == '')) {
            document.MAINFORM.CORR_SW_TAG.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_AddNotetoFile.js", e);
    }
}

csLbiCompProto.Cal_CORR_back = function() {
    try {
        CAL_ADD_Button_Back();
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SSSS_SRC_AddNotetoFile.js", e);
    }
}

csLbiCompProto.PostconditionOnInit = function() {
    try {
        SYT_Init_Notes(document.MAINFORM.CORR_NOTES.name);
        Cal_CORR_back();
        onChangeDiary();

    } catch (e) {
        DisExcpt("SSSS_SRC_AddNotetoFile.js", e);
    }
}

csLbiCompProto.SQL_CORR_SW_ADD = function() {
    try {
        // Add by jane at 20081029
        if (document.MAINFORM.CORR_SW_ADD.value.length == 11 || document.MAINFORM.CORR_SW_ADD.value.length == 8) {
            if (document.MAINFORM.CORR_SW_ADD.value.length == 8) {
                document.MAINFORM.CORR_SW_ADD.value = document.MAINFORM.CORR_SW_ADD.value + 'XXX';
            }
            //var sSQLWhere = "SW_ADD = '" + document.MAINFORM.CORR_SW_ADD.value + "'";
            //var sTableName = "BANK_MASTER";
            //var sFieldList = "C_MAIN_REF";
            //var sMappingList = "CORR_ID";
            SYS_GetTableDataByRule_S('SSSS_SRC_AddNotetoFile_SQL_CORR_SW_ADD_2', '1');
            SYS_GetCUBK('CORR_ID_BANK', 'CORR_ID', 'Cal_CORR_back');
            document.MAINFORM.CORR_CUST_BANK.value = 'Bank';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_AddNotetoFile.js", e);
    }
}