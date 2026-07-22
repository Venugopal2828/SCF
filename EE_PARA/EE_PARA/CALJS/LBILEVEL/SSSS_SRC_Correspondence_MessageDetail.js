"path:SCRN/Library/COMMON/Correspondence_MessageDetail.lbi";

var csLbiCompProto = {};

csLbiCompProto.CAL_ADD_Button_Back = function() {
    try {
        if (document.MAINFORM.CORR_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.CORR_ADD_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CORR_POST_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CORR_ADD_BTN, 'H');
            SYT_ChangeFldClass(document.MAINFORM.CORR_POST_BTN, 'H');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.CAL_CORR_ID_BTN = function() {
    try {
        if (document.MAINFORM.CORR_CUST_BANK.value == 'Bank') {
            Cal_CORR_BANK();
        } else if (document.MAINFORM.CORR_CUST_BANK.value == 'Customer') {
            Cal_CORR_CUST();
        } else {
            SYS_CheckError(document.MAINFORM.CORR_CUST_BANK, 'Please specify if Bank or Customer first.');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.CAL_CORR_MULT_ADD_BTN = function() {
    try {
        //SYS_InqCUBK('CORR_MULT_ADD', 'CORR_ID', 'ID');
        SYS_InqCUBK_byCondition('CORR_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.CAL_Clear_CORR_ID = function() {
    try {
        document.MAINFORM.CORR_ID.value = '';
        document.MAINFORM.CORR_ADD1.value = '';
        document.MAINFORM.CORR_ADD2.value = '';
        document.MAINFORM.CORR_ADD3.value = '';
        document.MAINFORM.CORR_NM.value = '';
        document.MAINFORM.CORR_NOTES.value = '';
        document.MAINFORM.CORR_SW_ADD.value = '';
        document.MAINFORM.CORR_SW_TAG.value = 'D';
        document.MAINFORM.CORR_TLX_NO.value = '';
        document.MAINFORM.CORR_EMAIL_ADD.value = '';
        document.MAINFORM.CORR_FAX_NO.value = '';
        document.MAINFORM.CORR_MAIL_ADD.value = '';
        Cal_BankORCust();
        Cal_CORR_back();
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_AC_WT_INST_ADD_BTN2 = function() {
    try {
        SYS_InqCUBK('AC_WT_INST_ADD', 'AC_WT_INST_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_AC_WT_INST_ID = function() {
    try {
        if (document.MAINFORM.AC_WT_INST_ID.value == '') {
            document.MAINFORM.AC_WT_INST_NM.value = '';
            document.MAINFORM.AC_WT_INST_ADD1.value = '';
            document.MAINFORM.AC_WT_INST_ADD2.value = '';
            document.MAINFORM.AC_WT_INST_ADD3.value = '';
            document.MAINFORM.AC_WT_INST_NOTES.value = '';
            document.MAINFORM.AC_WT_INST_SW_ADD.value = '';
            document.MAINFORM.AC_WT_INST_SW_TAG.value = '';

        } else {
            SYS_GetCUBK('AC_WT_INST_ID', document.MAINFORM.AC_WT_INST_ID.name, Cal_AC_WT_INST_SW_TAG);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_AC_WT_INST_ID_BTN = function() {
    try {
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('AC_WT_INST_ID', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_AC_WT_INST_ID_ORDER_NO = function() {
    try {
        var AC_WT_INST_ID; // Utility Auto Fix Comments
        var AC_WT_INST_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //AC_WT_INST_ORDER_NO = document.MAINFORM.AC_WT_INST_ORDER_NO.value;
        //AC_WT_INST_ID = document.MAINFORM.AC_WT_INST_ID.value;
        //sSQLWhere = "ORDER_NO = " + AC_WT_INST_ORDER_NO + " AND C_MAIN_REF = '" + AC_WT_INST_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "AC_WT_INST_NM;AC_WT_INST_ADD1;AC_WT_INST_ADD2;AC_WT_INST_ADD3";
        SYS_GetTableDataByRule_S('SSSS_SRC_Corr_Mess_Cal_AC_WT_INST_ID_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_AC_WT_INST_SW_ADD = function() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.AC_WT_INST_SW_ADD.value.length == 11 || document.MAINFORM.AC_WT_INST_SW_ADD.value.length == 8) {
            if (document.MAINFORM.AC_WT_INST_SW_ADD.value.length == 8) {
                document.MAINFORM.AC_WT_INST_SW_ADD.value = document.MAINFORM.AC_WT_INST_SW_ADD.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.AC_WT_INST_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "AC_WT_INST_ID";
            if (document.MAINFORM.AC_WT_INST_ID.value == '') {
                SYS_GetTableDataByRule_S('SSSS_SRC_Corr_Mess_Cal_AC_WT_INST_SW_ADD_1', '1', true);
            }
            if (document.MAINFORM.AC_WT_INST_ID.value != '') {
                SYS_GetCUBK('AC_WT_INST_ID', 'AC_WT_INST_ID', Cal_AC_WT_INST_SW_TAG);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_AC_WT_INST_SW_TAG = function() {
    try {
        if (document.MAINFORM.AC_WT_INST_SW_ADD.value != '') {
            document.MAINFORM.AC_WT_INST_SW_TAG.value = 'A';
        } else {
            if (document.MAINFORM.AC_WT_INST_ID.value == '' && document.MAINFORM.AC_WT_INST_NM.value == '' && document.MAINFORM.AC_WT_INST_ADD1.value == "" && document.MAINFORM.AC_WT_INST_ADD2.value == '' && document.MAINFORM.AC_WT_INST_ADD3.value == "") {
                document.MAINFORM.AC_WT_INST_SW_TAG.value = '';
            } else {
                document.MAINFORM.AC_WT_INST_SW_TAG.value = 'D';
            }
        }
        if (document.MAINFORM.AC_WT_INST_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_ADD_BTN2, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_ADD_BTN2, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_BankORCust = function() {
    try {
        if (document.MAINFORM.CORR_CUST_BANK.value == 'Customer') {
            document.MAINFORM.CORR_SW_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'O');
            document.MAINFORM.MESG_TYPE.value = 'Email';
            document.MAINFORM.TEMP_MESG_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CORR_EMAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_NARR_79, 'P');


        } else if (document.MAINFORM.CORR_CUST_BANK.value == 'Bank') {
            SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'M');
            document.MAINFORM.MESG_TYPE.value = 'MTn99';
            SYT_ChangeFldClass(document.MAINFORM.CORR_EMAIL_ADD, 'O');
            document.MAINFORM.TEMP_MESG_TYPE.value = 'MT999'; // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_NARR_79, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'O');
            document.MAINFORM.MESG_TYPE.value = 'MTn99';
            SYT_ChangeFldClass(document.MAINFORM.CORR_EMAIL_ADD, 'O');
            document.MAINFORM.TEMP_MESG_TYPE.value = 'MT999';
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_NARR_79, 'M');
        }
        Cal_TEMP_MAIL_TXT();
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CHECK_BOX_798 = function() {
    try {
        if (SYS_FUNCTION_TYPE == "EC" || SYS_FUNCTION_TYPE == "RE") {
            ECtimes += 1;
            if (ECtimes != 1) {
                return;
            }
            if (document.MAINFORM.SUB_MESS_TYPE.value != '') {
                document.MAINFORM.CHECK_BOX_798.checked = true;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CORR_BANK = function() {
    try {
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('CORR_ID_BANK', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CORR_CUST = function() {
    try {
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('CORR_ID_CUST', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CORR_EMAIL_ADD = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.CORR_EMAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CORR_EMAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CORR_FAX_NO = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.CORR_FAX_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CORR_FAX_NO, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CORR_ID = function() {
    try {
        if (document.MAINFORM.CORR_ID.value == '') {
            CAL_Clear_CORR_ID();
        } else {
            if (document.MAINFORM.CORR_CUST_BANK.value == 'Bank') {
                SYS_GetCUBK('CORR_ID_BANK', document.MAINFORM.CORR_ID.name, 'Cal_CORR_back');
            } else if (document.MAINFORM.CORR_CUST_BANK.value == 'Customer') {
                SYS_GetCUBK('CORR_ID_CUST', document.MAINFORM.CORR_ID.name, 'Cal_CORR_back');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CORR_ID_ORDERNO = function() {
    try {
        var CORR_ID; // Utility Auto Fix Comments
        var CORR_ORDERNO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //CORR_ORDERNO = document.MAINFORM.CORR_ADD_ORDER_NO.value;
        //CORR_ID = document.MAINFORM.CORR_ID.value;
        //sSQLWhere = "ORDER_NO = " + CORR_ORDERNO + " AND C_MAIN_REF = '" + CORR_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "CORR_NM;CORR_ADD1;ACORR_ADD2;CORR_ADD3";
        SYS_GetTableDataByRule_S('SSSS_SRC_Corr_Mess_Cal_CORR_ID_ORDERNO_2', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CORR_MAIL_ADD = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.CORR_MAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CORR_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CORR_POST_ADD = function() {
    try {
        SYS_InqCUBK('CORR_POST_ADD', 'CORR_ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CORR_POST_ORDER_NO = function() {
    try {
        var CORR_ID; // Utility Auto Fix Comments
        var CORR_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //CORR_ORDER_NO = document.MAINFORM.CORR_ORDER_NO.value;
        //CORR_ID = document.MAINFORM.CORR_ID.value;
        //sSQLWhere = "ORDER_NO = " + CORR_ORDER_NO + " AND C_MAIN_REF = '" + CORR_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "CORR_MAIL_ADD";
        SYS_GetTableDataByRule_S('SSSS_SRC_Corr_Mess_Cal_CORR_POST_ORDER_NO_3', '1', true);
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CORR_SW_ADD = function() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.CORR_SW_ADD.value.length == 11 || document.MAINFORM.CORR_SW_ADD.value.length == 8) {
            if (document.MAINFORM.CORR_SW_ADD.value.length == 8) {
                document.MAINFORM.CORR_SW_ADD.value = document.MAINFORM.CORR_SW_ADD.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.CORR_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "CORR_ID";
            if (document.MAINFORM.CORR_ID.value == '') {
                SYS_GetTableDataByRule_S('SSSS_SRC_Corr_Mess_Cal_CORR_SW_ADD_4', '1', true);
            }
            if (document.MAINFORM.CORR_ID.value != '') {
                SYS_GetCUBK('CORR_ID_BANK', 'CORR_ID', 'Cal_CORR_back');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CORR_SW_TAG = function() {
    try {
        if (document.MAINFORM.CORR_SW_ADD.value != '') {
            document.MAINFORM.CORR_SW_TAG.value = 'A';
        } else if (document.MAINFORM.CORR_ADD1.value != '' || document.MAINFORM.CORR_ADD2.value != '' || document.MAINFORM.CORR_ADD3.value != '' || document.MAINFORM.CORR_NM.value != '') {
            document.MAINFORM.CORR_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.CORR_SW_TAG.value = '';

        }
        if (document.MAINFORM.CORR_CUST_BANK.value == 'Customer') {
            document.MAINFORM.CORR_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CORR_TLX_NO = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.CORR_TLX_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CORR_TLX_NO, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_CORR_back = function() {
    try {
        CAL_ADD_Button_Back();
        Cal_CORR_SW_TAG();
        Set_CORR_SW_ADD();
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_MESG_TYPE = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        var TEMP_MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;
        TEMP_MESG_TYPE = document.MAINFORM.TEMP_MESG_TYPE.value;

        if (MESG_TYPE == 'MTn30' && TEMP_MESG_TYPE != 'MT730') {
            SYS_CheckError(document.MAINFORM.TEMP_CATEGORY_FLG, TEMP_MESG_TYPE + ' is Invalid!Only MT730 is valid!');
            document.MAINFORM.MESG_TYPE.value = 'MTn99';
            document.MAINFORM.TEMP_CATEGORY_FLG.value = '';
        }

        if (TEMP_MESG_TYPE == 'MT291') {
            SYS_CheckError(document.MAINFORM.TEMP_CATEGORY_FLG, TEMP_MESG_TYPE + ' is Invalid!');
            document.MAINFORM.MESG_TYPE.value = 'MTn99';
            document.MAINFORM.TEMP_CATEGORY_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_MTn91_52_57 = function() {
    try {
        if (document.MAINFORM.MESG_TYPE.value == "MTn91") {
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_AC_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_AC_NO, 'O');
            document.MAINFORM.ORDER_INST_ID_BTN.disabled = false;
            document.MAINFORM.ORDER_INST_ID_BTN.ReadOnly = false;
            document.MAINFORM.AC_WT_INST_ID_BTN.disabled = false;
            document.MAINFORM.AC_WT_INST_ID_BTN.ReadOnly = false;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_INST_AC_NO, 'P');
            document.MAINFORM.AC_WT_INST_ID_BTN.disabled = true;
            document.MAINFORM.AC_WT_INST_ID_BTN.ReadOnly = true;
            document.MAINFORM.ORDER_INST_ID_BTN.disabled = true;
            document.MAINFORM.ORDER_INST_ID_BTN.ReadOnly = true;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_ORDER_INST_ADD_BTN = function() {
    try {
        SYS_InqCUBK('ORDER_INST_ADD', 'ORDER_INST_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_ORDER_INST_ID = function() {
    try {
        if (document.MAINFORM.ORDER_INST_ID.value == '') {
            document.MAINFORM.ORDER_INST_ADD1.value = '';
            document.MAINFORM.ORDER_INST_ADD2.value = '';
            document.MAINFORM.ORDER_INST_ADD3.value = '';
            document.MAINFORM.ORDER_INST_NM.value = '';
            document.MAINFORM.ORDER_INST_NOTES.value = '';
            document.MAINFORM.ORDER_INST_SW_ADD.value = '';
            document.MAINFORM.ORDER_INST_SW_TAG.value = '';

        } else {
            SYS_GetCUBK('ORDER_INST_ID', document.MAINFORM.ORDER_INST_ID.name, Cal_ORDER_INST_SW_TAG);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_ORDER_INST_ID_BTN = function() {
    try {
        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ORDER_INST_ID', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_ORDER_INST_ORDER_NO = function() {
    try {
        var ORDER_INST_ID; // Utility Auto Fix Comments
        var ORDER_INST_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ORDER_INST_ORDER_NO = document.MAINFORM.ORDER_INST_ORDER_NO.value;
        //ORDER_INST_ID = document.MAINFORM.ORDER_INST_ID.value;
        //sSQLWhere = "ORDER_NO = " + ORDER_INST_ORDER_NO + " AND C_MAIN_REF = '" + ORDER_INST_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "ORDER_INST_NM;ORDER_INST_ADD1;ORDER_INST_ADD2;ORDER_INST_ADD3";
        SYS_GetTableDataByRule_S('SSSS_SRC_Corr_Mess_Cal_ORDER_INST_ORDER_NO_5', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_ORDER_INST_SW_ADD = function() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.ORDER_INST_SW_ADD.value.length == 11 || document.MAINFORM.ORDER_INST_SW_ADD.value.length == 8) {
            if (document.MAINFORM.ORDER_INST_SW_ADD.value.length == 8) {
                document.MAINFORM.ORDER_INST_SW_ADD.value = document.MAINFORM.ORDER_INST_SW_ADD.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.ORDER_INST_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "ORDER_INST_ID";
            SYS_GetTableDataByRule_S('SSSS_SRC_Corr_Mess_Cal_ORDER_INST_SW_ADD_6', '1', true);
            if (document.MAINFORM.ORDER_INST_ID.value != '') {
                SYS_GetCUBK('ORDER_INST_ID', 'ORDER_INST_ID', Cal_ORDER_INST_SW_TAG);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_ORDER_INST_SW_TAG = function() {
    try {
        if (document.MAINFORM.ORDER_INST_SW_ADD.value != '') {
            document.MAINFORM.ORDER_INST_SW_TAG.value = 'A';
        } else {
            if (document.MAINFORM.ORDER_INST_NM.value == '' && document.MAINFORM.ORDER_INST_ID.value == "" && document.MAINFORM.ORDER_INST_ADD1.value == "" && document.MAINFORM.ORDER_INST_ADD2.value == "" && document.MAINFORM.ORDER_INST_ADD3.value == "") {
                document.MAINFORM.ORDER_INST_SW_TAG.value = '';
            } else {
                document.MAINFORM.ORDER_INST_SW_TAG.value = 'D';
            }
        }
        if (document.MAINFORM.ORDER_INST_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_ADD_BTN, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ORDER_INST_ADD_BTN, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_ORDER_INST_callback = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_SUB_MESS_TYPE = function() {
    try {
        Cal_CHECK_BOX_798();
        if (document.MAINFORM.CHECK_BOX_798.checked) {
            //SYT_EnableDivClass('Z_div');
            if (document.MAINFORM.TEMP_MESG_TYPE.value == 'MT790') {
                document.MAINFORM.SUB_MESS_TYPE.value = '793';
                SYT_EnableDivClass('Z_div');
            }
            if (document.MAINFORM.TEMP_MESG_TYPE.value == 'MT791') {
                document.MAINFORM.SUB_MESS_TYPE.value = '794';
                SYT_EnableDivClass('Z_div');
            }
            if (document.MAINFORM.TEMP_MESG_TYPE.value == 'MT799') {
                document.MAINFORM.SUB_MESS_TYPE.value = '789';
                Change_789_tag();
            }
        } else {
            SYT_DisableDivClass('Z_div');
            document.MAINFORM.SUB_MESS_TYPE.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_DT_ORGNL_MSG = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'MTn92' || MESG_TYPE == 'MTn30') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DT_ORGNL_MSG, 'M');
        } else if (MESG_TYPE == 'MTn95' || MESG_TYPE == 'MTn96') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DT_ORGNL_MSG, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DT_ORGNL_MSG, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_MAIL_TXT = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'Mail' || MESG_TYPE == 'Telex' || MESG_TYPE == 'Fax' || MESG_TYPE == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_MAIL_TXT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_MAIL_TXT_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_MAIL_TXT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_MAIL_TXT_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_MAIL_TXT_BTN = function() {
    try {
        SYS_InsertClause('TEMP_MAIL_TXT');
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_MESG_TYPE = function() {
    try {

        var MESG_TYPE; // Utility Auto Fix Comments
        var TEMP_CATEGORY_FLG; // Utility Auto Fix Comments
        var TEMP_MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;
        TEMP_CATEGORY_FLG = document.MAINFORM.TEMP_CATEGORY_FLG.value;
        TEMP_MESG_TYPE = '';

        if (MESG_TYPE == 'MTn30') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '30';
        } else if (MESG_TYPE == 'MTn90') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '90';
        } else if (MESG_TYPE == 'MTn91') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '91';
        } else if (MESG_TYPE == 'MTn92') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '92';
        } else if (MESG_TYPE == 'MTn95') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '95';
        } else if (MESG_TYPE == 'MTn96') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '96';
        } else if (MESG_TYPE == 'MTn99') {
            TEMP_MESG_TYPE = 'MT' + TEMP_CATEGORY_FLG + '99';
        }
        document.MAINFORM.TEMP_MESG_TYPE.value = TEMP_MESG_TYPE;
        if (document.MAINFORM.TEMP_MESG_TYPE.value == 'MT791' || document.MAINFORM.TEMP_MESG_TYPE.value == 'MT790' || document.MAINFORM.TEMP_MESG_TYPE.value == 'MT799') {
           // document.all.Z.style.display = 'block';
           //document.all.Z.style.display = '';
           EEHtml.getElementById('Z_div').style.display = "";
        } else {

            EEHtml.getElementById('Z_div').style.display= 'none';
            SYT_DisableDivClass('Z_div');
        }
      Cal_SUB_MESS_TYPE();
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_N90_AC_IDN_25 = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'MTn90') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_AC_IDN_25, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_AC_IDN_25, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_N90_CHG_32 = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'MTn90' || MESG_TYPE == 'MTn91') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_CCY_32, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_CHG_32, 'M');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_CCY_32, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_CHG_32, 'P');
        }

        document.MAINFORM.TEMP_N90_CHG_32.value = SYT_AmtFormat(document.MAINFORM.TEMP_N90_CCY_32.value, document.MAINFORM.TEMP_N90_CHG_32.value);
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_N90_CHG_71 = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'MTn90' || MESG_TYPE == 'MTn91') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_CHG_71, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_CHG_71, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_N90_DT_32 = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'MTn90') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_DC_32, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_DT_32, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_DC_32, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_DT_32, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_N90_SNDINF_72 = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'MTn90' || MESG_TYPE == 'MTn91') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_SNDINF_72, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N90_SNDINF_72, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_N95_NARR_77 = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'MTn95' || MESG_TYPE == 'MTn96') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_NARR_77, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_NARR_77, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_N95_NARR_79 = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'MTn92' || MESG_TYPE == 'MTn95' || MESG_TYPE == 'MTn96') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_NARR_79, 'O');
        } else if (MESG_TYPE == 'MTn99') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_NARR_79, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_NARR_79, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_N95_QA_75 = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'MTn95' || MESG_TYPE == 'MTn96') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_QA_75, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_QA_75, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_ORGNLMSG_TYPE = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'MTn92') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_ORGNLMSG_TYPE, 'M');
        } else if (MESG_TYPE == 'MTn95' || MESG_TYPE == 'MTn96') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_ORGNLMSG_TYPE, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_ORGNLMSG_TYPE, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_REF = function() {
    try {
        if (document.MAINFORM.MESG_TYPE.value.substr(0, 3) == 'MTn' && document.MAINFORM.MESG_TYPE.value != 'MTn99') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_REF, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_REF_FOR_DOC, 'B');
        } else if (document.MAINFORM.MESG_TYPE.value == 'MTn99') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_REF, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_REF_FOR_DOC, 'B');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_REF, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_REF_FOR_DOC, 'O');

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Cal_TEMP_SND_RCV_11 = function() {
    try {
        var MESG_TYPE; // Utility Auto Fix Comments
        MESG_TYPE = document.MAINFORM.MESG_TYPE.value;

        if (MESG_TYPE == 'MTn92') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_SND_RCV_11, 'P');
            document.MAINFORM.TEMP_SND_RCV_11.value = 'S';
        } else if ((MESG_TYPE == 'MTn95' || MESG_TYPE == 'MTn96') && document.MAINFORM.TEMP_DT_ORGNL_MSG.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_SND_RCV_11, 'O');
        } else if ((MESG_TYPE == 'MTn95' || MESG_TYPE == 'MTn96') && document.MAINFORM.TEMP_DT_ORGNL_MSG.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_SND_RCV_11, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_SND_RCV_11, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Change_789_tag = function() {
    try {
        if (document.MAINFORM.SUB_MESS_TYPE.value == '789') {
            SYT_ChangeFldClass_New('TEMP_REF', 'O');
            SYT_ChangeFldClass_New('TEMP_N95_NARR_79', 'P');
            SYT_ChangeFldClass_New('X798_CUST_REF', 'M');
            SYT_ChangeFldClass_New('X798_21R_BANK_REF', 'M');
            SYT_ChangeFldClass_New('X798_CRE_DATE', 'P');
            SYT_ChangeFldClass_New('X798_CRE_TIME', 'P');
            SYT_ChangeFldClass_New('X798_BANK_CONT', 'O');
            SYT_ChangeFldClass_New('X798_72C_B2C_INFO', 'O');
            SYT_ChangeFldClass_New('X798_23X_CODE', 'O');
            SYT_ChangeFldClass_New('X798_23X_NARR', 'O');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_CODE', 'O');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_PARTY', 'O');
            SYT_ChangeFldClass_New('X798_29P_PRO_BANK_IND', 'O');
            SYT_ChangeFldClass_New('X798_29U_LEAD_BANK_IND', 'O');
            SYT_ChangeFldClass_New('X798_PAYMENT_TERMS_22R', 'O');
            SYT_ChangeFldClass_New('X798_PAYMENT_LIABILITY_22S', 'O');
        } else {
            SYT_ChangeFldClass_New('TEMP_REF', 'P');
            SYT_ChangeFldClass_New('TEMP_N95_NARR_79', 'P');
            SYT_ChangeFldClass_New('X798_CUST_REF', 'P');
            SYT_ChangeFldClass_New('X798_21R_BANK_REF', 'P');
            SYT_ChangeFldClass_New('X798_CRE_DATE', 'P');
            SYT_ChangeFldClass_New('X798_CRE_TIME', 'P');
            SYT_ChangeFldClass_New('X798_BANK_CONT', 'P');
            SYT_ChangeFldClass_New('X798_72C_B2C_INFO', 'P');
            SYT_ChangeFldClass_New('X798_23X_CODE', 'P');
            SYT_ChangeFldClass_New('X798_23X_NARR', 'P');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_CODE', 'P');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_PARTY', 'P');
            SYT_ChangeFldClass_New('X798_29P_PRO_BANK_IND', 'P');
            SYT_ChangeFldClass_New('X798_29U_LEAD_BANK_IND', 'P');
            SYT_ChangeFldClass_New('X798_PAYMENT_TERMS_22R', 'P');
            SYT_ChangeFldClass_New('X798_PAYMENT_LIABILITY_22S', 'P');

        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Chk_TEMP_N90_DT_32 = function() {
    try {
        if (document.MAINFORM.TEMP_N90_DT_32.value != "") {
            document.MAINFORM.TEMP_N90_DT_32.value = SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.TEMP_N90_DT_32.value, 0, TEMP_N90_DT_32_back, 'A', 'N', 'Y');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Chk_TEMP_ORGNLMSG_TYPE = function() {
    try {
        if (document.MAINFORM.TEMP_ORGNLMSG_TYPE.value != "") {
            vTEMP_ORGNLMSG_TYPE = SYS_BeInt(document.MAINFORM.TEMP_ORGNLMSG_TYPE.value);
            if (vTEMP_ORGNLMSG_TYPE < 100 || vTEMP_ORGNLMSG_TYPE > 999) {
                SYS_CheckError(document.MAINFORM.TEMP_ORGNLMSG_TYPE, "Original Message Type must be a number in the range 100 - 999.");
                document.MAINFORM.TEMP_ORGNLMSG_TYPE.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.InitValues_lbi = function() {
    try {
        Set_CORR_SW_ADD();
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.PostconditionOnInit_lbi = function() {
    try {
        Cal_CORR_EMAIL_ADD();
        Cal_CORR_FAX_NO();
        Cal_CORR_MAIL_ADD();
        Cal_CORR_TLX_NO();
        Cal_MESG_TYPE();
        Cal_TEMP_DT_ORGNL_MSG();
        Cal_TEMP_MAIL_TXT();
        Cal_TEMP_N90_AC_IDN_25();
        Cal_TEMP_N90_CHG_32();
        Cal_TEMP_N90_CHG_71();
        Cal_TEMP_N90_DT_32();
        Cal_TEMP_N90_SNDINF_72();
        Cal_TEMP_N95_NARR_77();
        Cal_TEMP_N95_NARR_79();
        Cal_TEMP_N95_QA_75();
        Cal_TEMP_ORGNLMSG_TYPE();
        Cal_TEMP_SND_RCV_11();
        Cal_TEMP_MESG_TYPE();
        Cal_CORR_back();
        Cal_TEMP_REF();
        Cal_MTn91_52_57();
        Cal_AC_WT_INST_ID();
        Cal_AC_WT_INST_SW_ADD();
        Cal_AC_WT_INST_SW_TAG();
        Cal_ORDER_INST_ID();
        Cal_ORDER_INST_SW_ADD();
        Cal_ORDER_INST_SW_TAG();

     Cal_SUB_MESS_TYPE();


        if (typeof SYF_EPLC_Main_MPO === 'function') {
            SYF_EPLC_Main_MPO();
        }
        if (SYS_MODULE_NAME == 'RPFM') {
            document.MAINFORM.CHECK_BOX_798.checked = false;
            if (C_FUNC_SHORT_NAME == 'RegParticipant') {
                document.MAINFORM.PCPT_START_DT.value = document.MAINFORM.PART_START_DT.value;
                document.MAINFORM.PCPT_EXPIRY_DT.value = document.MAINFORM.PART_MAT_DT.value;
                document.MAINFORM.PCPT_CCY.value = document.MAINFORM.PART_RISK_CCY.value;
                document.MAINFORM.PCPT_AMT.value = document.MAINFORM.PART_RISK_AMT.value;
            } else if (C_FUNC_SHORT_NAME == 'RegisterGPR') {
                document.MAINFORM.PCPT_START_DT.value = document.MAINFORM.SYND_PART_START_DT.value;
                document.MAINFORM.PCPT_EXPIRY_DT.value = document.MAINFORM.SYND_PART_EXP_DT.value;
                document.MAINFORM.PCPT_CCY.value = document.MAINFORM.SYND_PART_CCY.value;
                document.MAINFORM.PCPT_AMT.value = document.MAINFORM.SYND_PART_AMT.value;
            }
        }
        onChangeDiary();

    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.PreconditionOnInit_lbi = function() {
    try {
        SYT_Init_Notes(document.MAINFORM.CORR_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ORDER_INST_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.AC_WT_INST_NOTES.name);
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.Set_CORR_SW_ADD = function() {
    try {
        if (document.MAINFORM.MESG_TYPE.value.substr(0, 2) == 'MT') {
            SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CORR_SW_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}

csLbiCompProto.TEMP_N90_DT_32_back = function(vTEMP_N90_DT_32) {
    try {
        document.MAINFORM.TEMP_N90_DT_32.value = vTEMP_N90_DT_32;
    } catch (e) {
        DisExcpt("SSSS_SRC_Correspondence_MessageDetail.js", e);
    }
}