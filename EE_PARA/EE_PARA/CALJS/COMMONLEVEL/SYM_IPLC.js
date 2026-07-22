function SYM_IPLC_ADV_BK_MAIL_ADD() {
    try {
        if (document.MAINFORM.ADV_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, "M");
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_TLX, 'O');
        }
        if (document.MAINFORM.ADV_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_TLX, 'O');
        }
        if (document.MAINFORM.ADV_BK_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O'); // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_TLX, 'M'); // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'O'); // Utility Auto Fix Comments
        }
        if (document.MAINFORM.ADV_BK_CORR_MED.value == 'None' || document.MAINFORM.ADV_BK_CORR_MED.value == 'Telex') {

            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CORR_MED, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ADV_BK_MAIL_ADD", e);
    }
}

function SYM_IPLC_ADV_THU_BK_MAIL_ADD() {
    try {
        if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, "M");
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, "O");
        }
        if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, "M");
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, "O");
        }
        if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == 'None') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, "O");
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ADV_THU_BK_MAIL_ADD", e);
    }
}

function SYM_IPLC_APPL_BK_MAIL_ADD() {
    try {
        if (document.MAINFORM.APPL_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_BK_MAIL_ADD, "M");

        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_BK_MAIL_ADD, "O");
        }
        if (document.MAINFORM.APPL_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_BK_SW_ADD, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_BK_SW_ADD, "O");
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_APPL_BK_MAIL_ADD", e);
    }
}

function SYM_IPLC_APPL_MAIL_ADD() {
    try {
        var arr_Fld; // Utility Auto Fix Comments
        var arr_FldClass_DEFAULT; // Utility Auto Fix Comments
        var arr_FldClass_EMAIL; // Utility Auto Fix Comments
        var arr_FldClass_FAX; // Utility Auto Fix Comments
        var arr_FldClass_MAIL; // Utility Auto Fix Comments
        var arr_FldClass_TELEX; // Utility Auto Fix Comments
        arr_Fld = new Array(document.MAINFORM.APPL_FAX, document.MAINFORM.APPL_EMAIL, document.MAINFORM.APPL_TLX, document.MAINFORM.APPL_MAIL_ADD);
        arr_FldClass_FAX = new Array("M", "O", "O", "O");
        arr_FldClass_EMAIL = new Array("O", "M", "O", "O");
        arr_FldClass_TELEX = new Array("O", "O", "M", "O");
        arr_FldClass_MAIL = new Array("O", "O", "O", "M");
        arr_FldClass_DEFAULT = new Array("O", "O", "O", "O");

        switch (document.MAINFORM.APPL_CORR_MED.value) {
            case "Fax":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_FAX);
                break;
            case "Mail":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_MAIL);
                break;
            case "Email":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_EMAIL);
                break;
            case "Telex":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_TELEX);
                break;
            default:
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_DEFAULT);
                return;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_APPL_MAIL_ADD", e);
    }
}

function SYM_IPLC_Alert_SYN_FLG() {
    try {
        if (document.MAINFORM.SYND_FLG.value == 'Yes') {
            alert('Please note this transaction has been syndicated.');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Alert_SYN_FLG", e);
    }
}

function SYM_IPLC_BENE_MAIL_ADD() {
    try {
        var arr_FldClass_DEFAULT; // Utility Auto Fix Comments
        var arr_FldClass_EMAIL; // Utility Auto Fix Comments
        var arr_FldClass_FAX; // Utility Auto Fix Comments
        var arr_FldClass_MAIL; // Utility Auto Fix Comments
        var arr_FldClass_TELEX; // Utility Auto Fix Comments
        arr_Fld = new Array(document.MAINFORM.BENE_FAX, document.MAINFORM.BENE_EMAIL, document.MAINFORM.BENE_TLX, document.MAINFORM.BENE_MAIL_ADD);
        arr_FldClass_FAX = new Array("M", "O", "O", "O");
        arr_FldClass_EMAIL = new Array("O", "M", "O", "O");
        arr_FldClass_TELEX = new Array("O", "O", "M", "O");
        arr_FldClass_MAIL = new Array("O", "O", "O", "M");
        arr_FldClass_DEFAULT = new Array("O", "O", "O", "O");

        switch (document.MAINFORM.BENE_CORR_MED.value) {
            case "Fax":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_FAX);
                break;
            case "Mail":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_MAIL);
                break;
            case "Email":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_EMAIL);
                break;
            case "Telex":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_TELEX);
                break;
            default:
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_DEFAULT);
                return;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_BENE_MAIL_ADD", e);
    }
}

function SYM_IPLC_BENE_To_APPL() {
    try {
        document.MAINFORM.APPL_ID.value = document.MAINFORM.BENE_ID.value;
        document.MAINFORM.APPL_NM.value = document.MAINFORM.BENE_NM.value;
        document.MAINFORM.APPL_ADD1.value = document.MAINFORM.BENE_ADD1.value;
        document.MAINFORM.APPL_ADD2.value = document.MAINFORM.BENE_ADD2.valuee;
        document.MAINFORM.APPL_ADD3.value = document.MAINFORM.BENE_ADD3.value;
        document.MAINFORM.APPL_CORR_MED.value = document.MAINFORM.BENE_CORR_MED.value;
        document.MAINFORM.APPL_EMAIL.value = document.MAINFORM.BENE_EMAIL.value;
        document.MAINFORM.APPL_FAX.value = document.MAINFORM.BENE_FAX.value;
        document.MAINFORM.APPL_LANG.value = document.MAINFORM.BENE_LANG.value;
        document.MAINFORM.APPL_MAIL_ADD.value = document.MAINFORM.BENE_MAIL_ADD.value;
        document.MAINFORM.APPL_NOTES.value = document.MAINFORM.BENE_NOTES.value;
        document.MAINFORM.APPL_REF.value = document.MAINFORM.BENE_REF.value;
        document.MAINFORM.APPL_TLX.value = document.MAINFORM.BENE_TLX.value;
        document.MAINFORM.AC_OFFICER_CODE.value = document.MAINFORM.BENE_AC_OFF_CODE.value;


        document.MAINFORM.BENE_ID.value = ''; // Utility Auto Fix Comments
        document.MAINFORM.BENE_NM.value = ''; // Utility Auto Fix Comments
        document.MAINFORM.BENE_ADD1.value = ''; // Utility Auto Fix Comments
        document.MAINFORM.BENE_ADD2.value = ''; // Utility Auto Fix Comments
        document.MAINFORM.BENE_ADD3.value = ''; // Utility Auto Fix Comments
        document.MAINFORM.BENE_CORR_MED.value = 'None';
        document.MAINFORM.BENE_EMAIL.value = ''; // Utility Auto Fix Comments
        document.MAINFORM.BENE_FAX.value = ''; // Utility Auto Fix Comments
        document.MAINFORM.BENE_LANG.value = 'English';
        document.MAINFORM.BENE_MAIL_ADD.value = ''; // Utility Auto Fix Comments
        document.MAINFORM.BENE_NOTES.value = ''; // Utility Auto Fix Comments
        document.MAINFORM.BENE_REF.value = ''; // Utility Auto Fix Comments
        document.MAINFORM.BENE_TLX.value = ''; // Utility Auto Fix Comments
        document.MAINFORM.BENE_AC_OFF_CODE.value = ''; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_BENE_To_APPL", e);
    }
}

function SYM_IPLC_CAL_AC_WT_BK_ADD() {
    try {
        SYS_InqCUBK_byCondition('AC_WT_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_AC_WT_BK_ADD", e);
    }
}

function SYM_IPLC_CAL_AC_WT_BK_ADD_back() {
    try {
        if (document.MAINFORM.AC_WT_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_AC_WT_BK_ADD_back", e);
    }
}

function SYM_IPLC_CAL_AC_WT_BK_ID() {
    try {
        if (document.MAINFORM.AC_WT_BK_ID.value == '') {
            document.MAINFORM.AC_WT_BK_NM.value = '';
            document.MAINFORM.AC_WT_BK_AC_NO.value = '';
            document.MAINFORM.AC_WT_BK_ADD1.value = '';
            document.MAINFORM.AC_WT_BK_ADD2.value = '';
            document.MAINFORM.AC_WT_BK_ADD3.value = '';
            document.MAINFORM.AC_WT_BK_CORR_MED.value = 'None';
            document.MAINFORM.AC_WT_BK_SW_ADD.value = '';
            document.MAINFORM.AC_WT_BK_SW_TAG.value = '';
            document.MAINFORM.AC_BK_NOTES.value = '';
            SYM_IPLC_CAL_AC_WT_BK_ID_back();
        } else {
            SYS_GetCUBK('AC_WT_BK_ID', document.MAINFORM.AC_WT_BK_ID.name, 'SYM_IPLC_CAL_AC_WT_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_AC_WT_BK_ID", e);
    }
}

function SYM_IPLC_CAL_AC_WT_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.AC_BK_NOTES.name);
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG();
        SYM_IPLC_CAL_AC_WT_BK_ADD_back();
        if (document.MAINFORM.AC_WT_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.AC_WT_BK_SW_ADD.value = document.MAINFORM.AC_WT_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_AC_WT_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_AC_WT_BK_ORDER_NO() {
    try {
        var AC_WT_BK_ID; // Utility Auto Fix Comments
        var AC_WT_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //AC_WT_BK_ORDER_NO = document.MAINFORM.AC_BK_ORDER_NO.value;
        //AC_WT_BK_ID = document.MAINFORM.AC_WT_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + AC_WT_BK_ORDER_NO + " AND C_MAIN_REF = '" + AC_WT_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "AC_WT_BK_NM;AC_WT_BK_ADD1;AC_WT_BK_ADD2;AC_WT_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_AC_WT_BK_ORDER_NO_9', '1');
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_AC_WT_BK_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_ADV_BK_ADD_back() {
    try {
        if (document.MAINFORM.ADV_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_BK_ADD_back", e);
    }
}

function SYM_IPLC_CAL_ADV_BK_ID() {
    try {
        if (document.MAINFORM.ADV_BK_ID.value == '') {
            document.MAINFORM.ADV_BK_NM.value = '';
            document.MAINFORM.ADV_BK_ADD1.value = '';
            document.MAINFORM.ADV_BK_ADD2.value = '';
            document.MAINFORM.ADV_BK_ADD3.value = '';
            document.MAINFORM.ADV_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_BK_TLX.value = '';
            document.MAINFORM.ADV_BK_NOTES.value = '';
            document.MAINFORM.ADV_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_BK_CORR_MED.value = 'None';
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
            SYM_IPLC_CAL_ADV_BK_ID_back();
        } else {
            SYS_GetCUBK('ADV_BK_ID', 'ADV_BK_ID', 'SYM_IPLC_CAL_ADV_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_BK_ID", e);
    }
}

function SYM_IPLC_CAL_ADV_BK_ID_MAIL_ADD() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_BK_ID_MAIL_ADD", e);
    }
}

function SYM_IPLC_CAL_ADV_BK_ID_MAIL_ORDER_NO() {
    try {
        var ADV_BK_ID; // Utility Auto Fix Comments
        var ADV_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ADV_BK_ORDER_NO = document.MAINFORM.ADV_BK_ORDER_POST.value;
        //ADV_BK_ID = document.MAINFORM.ADV_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + ADV_BK_ORDER_NO + " AND C_MAIN_REF = '" + ADV_BK_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "ADV_BK_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_ADV_BK_ID_MAIL_ORDER_NO_14', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_BK_ID_MAIL_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_ADV_BK_ID_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_BK_ID_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_ADV_BK_ID_MULT_ORDER_NO() {
    try {
        var ADV_BK_ID; // Utility Auto Fix Comments
        var ADV_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ADV_BK_ORDER_NO = document.MAINFORM.ADV_BK_ORDER_NO.value;
        //ADV_BK_ID = document.MAINFORM.ADV_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + ADV_BK_ORDER_NO + " AND C_MAIN_REF = '" + ADV_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "ADV_BK_NM;ADV_BK_ADD1;ADV_BK_ADD2;ADV_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_ADV_BK_ID_MULT_ORDER_NO_15', '1');
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_BK_ID_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_ADV_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYM_IPLC_ADV_BK_MAIL_ADD();
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
        SYM_IPLC_CAL_ADV_BK_ADD_back();
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_ADV_THU_BK_ADD_back() {
    try {
        if (document.MAINFORM.ADV_THU_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_THU_BK_ADD_back", e);
    }
}

function SYM_IPLC_CAL_ADV_THU_BK_ID() {
    try {
        if (document.MAINFORM.ADV_THU_BK_ID.value == '') {
            document.MAINFORM.ADV_THU_BK_NM.value = '';
            document.MAINFORM.ADV_THU_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_TLX.value = '';
            document.MAINFORM.ADV_THU_BK_ADD1.value = '';
            document.MAINFORM.ADV_THU_BK_ADD2.value = '';
            document.MAINFORM.ADV_THU_BK_ADD3.value = '';
            document.MAINFORM.ADV_THU_BK_NOTES.value = '';
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_CORR_MED.value = 'None';
            SYM_IPLC_CAL_ADV_THU_BK_ID_back();
        } else {
            SYS_GetCUBK('ADV_THRU_BK_ID', 'ADV_THU_BK_ID', 'SYM_IPLC_CAL_ADV_THU_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_THU_BK_ID", e);
    }
}

function SYM_IPLC_CAL_ADV_THU_BK_ID_back() {
    try {
        SYM_IPLC_ADV_THU_BK_MAIL_ADD();
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
        SYM_IPLC_CAL_ADV_THU_BK_ADD_back();
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_THU_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_ADV_THU_BK_MAIL_ADD() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_THU_BK_MAIL_ADD", e);
    }
}

function SYM_IPLC_CAL_ADV_THU_BK_MAIL_ORDER_NO() {
    try {
        var ADV_THU_ORDER_NO; // Utility Auto Fix Comments
        var DV_THU_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ADV_THU_ORDER_NO = document.MAINFORM.ADV_THU_BK_ORDER_POST.value;
        //DV_THU_ID = document.MAINFORM.ADV_THU_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + ADV_THU_ORDER_NO + " AND C_MAIN_REF = '" + DV_THU_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "ADV_THU_BK_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_ADV_THU_BK_MAIL_ORDER_NO_16', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_THU_BK_MAIL_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_ADV_THU_BK_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_THU_BK_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_ADV_THU_BK_MULT_ORDER_NO() {
    try {
        var ADV_THU_ID; // Utility Auto Fix Comments
        var ADV_THU_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ADV_THU_ORDER_NO = document.MAINFORM.ADV_THU_BK_ORDER_NO.value;
        //ADV_THU_ID = document.MAINFORM.ADV_THU_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + ADV_THU_ORDER_NO + " AND C_MAIN_REF = '" + ADV_THU_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "ADV_THU_BK_NM;ADV_THU_BK_ADD1;ADV_THU_BK_ADD2;ADV_THU_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_ADV_THU_BK_MULT_ORDER_NO_17', '1');
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ADV_THU_BK_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_AMEND_PAYMENT_AMT() {
    try {
        var Amount;
        var NEW_LC_AMT;
        var LC_AMT;
        var TRX_AMT;
        var ccy;
        var i;
        var len;
        var percent;
        var targetDo;
        NEW_LC_AMT = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value);
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        ccy = document.MAINFORM.LC_CCY.value;
        if (NEW_LC_AMT == 0) {
            TRX_AMT = LC_AMT;
        } else {
            TRX_AMT = NEW_LC_AMT;
        }
        document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value = SYT_AmtFormat(ccy, TRX_AMT);
        targetDo = null;
        targetDo = SYS_GetObjByDoName("PaymentTerms");
        if (targetDo == null) {
            return;
        } else {
            len = targetDo.length;
            for (i = 0; i < len; i++) {
                percent = SYS_BeFloat(targetDo[i].getDoValueByName("CPYT_C_PAY_PER"));
                Amount = SYT_AmtFormat(ccy, TRX_AMT * percent * 0.01);
                SYS_UpdateFldValueByDo(targetDo[i], "CPYT_N_PAY_AMT", Amount);
            }
            SYS_RefreshDoGrid(targetDo);
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_AMEND_PAYMENT_AMT", e);
    }
}

function SYM_IPLC_CAL_APLB_RULE_SWF() {
    try {
        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            document.MAINFORM.TEMP_APLB_RULE.value = document.MAINFORM.APLB_RULE.value + '/' + document.MAINFORM.APLB_RULE_NARR.value;
        } else {
            document.MAINFORM.TEMP_APLB_RULE.value = document.MAINFORM.APLB_RULE.value;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APLB_RULE_SWF", e);
    }
}

function SYM_IPLC_CAL_APPL_ADD_back() {
    try {
        if (document.MAINFORM.APPL_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_ADD_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.APPL_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_ADD_back", e);
    }
}

function SYM_IPLC_CAL_APPL_BK_ADD_back() {
    try {
        if (document.MAINFORM.APPL_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_BK_ADD_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_BK_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.APPL_BK_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_BK_ADD_back", e);
    }
}

function SYM_IPLC_CAL_APPL_BK_ID() {
    try {
        if (document.MAINFORM.APPL_BK_ID.value == '') {
            document.MAINFORM.APPL_BK_NM.value = '';
            document.MAINFORM.APPL_BK_ADD1.value = '';
            document.MAINFORM.APPL_BK_ADD2.value = '';
            document.MAINFORM.APPL_BK_ADD3.value = '';
            document.MAINFORM.APPL_BK_MAIL_ADD.value = '';
            document.MAINFORM.APPL_BK_CORR_MED.value = 'None';
            document.MAINFORM.APPL_BK_TLX.value = '';
            document.MAINFORM.APPL_BK_NOTES.value = '';
            document.MAINFORM.APPL_BK_SW_ADD.value = '';
            SYM_IPLC_CAL_APPL_BK_ID_back();
        } else {
            SYS_GetCUBK('APPL_BK_ID', 'APPL_BK_ID', 'SYM_IPLC_CAL_APPL_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_BK_ID", e);
    }
}

function SYM_IPLC_CAL_APPL_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.APPL_BK_NOTES.name);
        SYM_IPLC_APPL_BK_MAIL_ADD();
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
        SYM_IPLC_CAL_APPL_BK_ADD_back();
        if (document.MAINFORM.APPL_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.APPL_BK_SW_ADD.value = document.MAINFORM.APPL_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_APPL_BK_MAIL_ADD() {
    try {
        SYS_InqCUBK_byCondition('APPL_BK_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_BK_MAIL_ADD", e);
    }
}

function SYM_IPLC_CAL_APPL_BK_MAIL_ORDER_NO() {
    try {
        var APPL_BK_ID; // Utility Auto Fix Comments
        var APPL_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //APPL_ORDER_NO = document.MAINFORM.APPL_BK_ORDER_POST.value;
        //APPL_BK_ID = document.MAINFORM.APPL_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + APPL_ORDER_NO + " AND C_MAIN_REF = '" + APPL_BK_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "APPL_BK_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_APPL_BK_MAIL_ORDER_NO_26', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_BK_MAIL_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_APPL_BK_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('APPL_BK_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_BK_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_APPL_BK_MULT_ORDER_NO() {
    try {
        var APPL_BK_ID; // Utility Auto Fix Comments
        var APPL_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //APPL_ORDER_NO = document.MAINFORM.APPL_BK_ORDER_NO.value;
        //APPL_BK_ID = document.MAINFORM.APPL_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + APPL_ORDER_NO + " AND C_MAIN_REF = '" + APPL_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "APPL_BK_NM;APPL_BK_ADD1;APPL_BK_ADD2;APPL_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_APPL_BK_MULT_ORDER_NO_28', '1');
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_BK_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_APPL_CUST_MAIL_ADD() {
    try {
        SYS_InqCUBK_byCondition('APPL_CUST_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_CUST_MAIL_ADD", e);
    }
}

function SYM_IPLC_CAL_APPL_CUST_MAIL_ORDER_NO() {
    try {
        var APPL_ID; // Utility Auto Fix Comments
        var APPL_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //APPL_ORDER_NO = document.MAINFORM.APPL_ORDER_POST.value;
        //APPL_ID = document.MAINFORM.APPL_ID.value;
        //sSQLWhere = "ORDER_NO = " + APPL_ORDER_NO + " AND C_MAIN_REF = '" + APPL_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "APPL_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_APPL_CUST_MAIL_ORDER_NO_10', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_CUST_MAIL_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_APPL_CUST_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('APPL_CUST_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_CUST_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_APPL_CUST_MULT_ORDER_NO() {
    try {
        var APPL_ID; // Utility Auto Fix Comments
        var APPL_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //APPL_ORDER_NO = document.MAINFORM.APPL_ORDER_NO.value;
        //APPL_ID = document.MAINFORM.APPL_ID.value;
        //sSQLWhere = "ORDER_NO = " + APPL_ORDER_NO + " AND C_MAIN_REF = '" + APPL_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "APPL_NM;APPL_ADD1;APPL_ADD2;APPL_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_APPL_CUST_MULT_ORDER_NO_11', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_CUST_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_APPL_ID_NOCHG() {
    try {
        if (document.MAINFORM.APPL_ID.value == '') {
            document.MAINFORM.APPL_NM.value = '';
            document.MAINFORM.APPL_ADD1.value = '';
            document.MAINFORM.APPL_ADD2.value = '';
            document.MAINFORM.APPL_ADD3.value = '';
            document.MAINFORM.APPL_EMAIL.value = '';
            document.MAINFORM.APPL_FAX.value = '';
            document.MAINFORM.APPL_MAIL_ADD.value = '';
            document.MAINFORM.APPL_CORR_MED.value = 'None';
            document.MAINFORM.APPL_TLX.value = '';
            document.MAINFORM.APPL_REF.value = '';
            document.MAINFORM.APPL_NOTES.value = '';
            document.MAINFORM.APPL_LANG.value = 'English';
            document.MAINFORM.AC_OFFICER_CODE.value = '';
            SYM_IPLC_CAL_APPL_ID_NOCHG_back();
        } else {
            SYS_GetCUBK('APPL_ID', 'APPL_ID', 'SYM_IPLC_CAL_APPL_ID_NOCHG_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_ID_NOCHG", e);
    }
}

function SYM_IPLC_CAL_APPL_ID_NOCHG_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYM_IPLC_APPL_MAIL_ADD();
        SYM_IPLC_CAL_APPL_ADD_back();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_APPL_ID_NOCHG_back", e);
    }
}

function SYM_IPLC_CAL_AVAL_WT_BK_ADD_back() {
    try {
        //if (document.MAINFORM.AVAL_WT_BK_ID.value != '') {
        //                                    SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN, 'O');
        //                                } else {
        //                                    SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN, 'P');
        //                                }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_AVAL_WT_BK_ADD_back", e);
    }
}

function SYM_IPLC_CAL_AVAL_WT_BK_ID() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_ID.value == '') {
            document.MAINFORM.AVAL_WT_BK_ADD1.value = '';
            document.MAINFORM.AVAL_WT_BK_ADD2.value = '';
            document.MAINFORM.AVAL_WT_BK_ADD3.value = '';
            document.MAINFORM.AVAL_WT_BK_NM.value = '';
            document.MAINFORM.AVAL_WT_BK_NOTES.value = '';
            document.MAINFORM.AVAL_WT_BK_SW_ADD.value = '';
            SYM_IPLC_CAL_AVAL_WT_BK_ID_back();
        } else {
            SYS_GetCUBK('AVLBL_BK_ID', 'AVAL_WT_BK_ID', 'SYM_IPLC_CAL_AVAL_WT_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_AVAL_WT_BK_ID", e);
    }
}

function SYM_IPLC_CAL_AVAL_WT_BK_ID_back() {
    try {
        //SYT_Show_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
        SYM_IPLC_CAL_AVAL_WT_BK_ADD_back();
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.AVAL_WT_BK_SW_ADD.value = document.MAINFORM.AVAL_WT_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_AVAL_WT_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_AVAL_WT_BK_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('AVAL_BK_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_AVAL_WT_BK_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_AVAL_WT_BK_MULT_ORDER_NO() {
    try {
        var AVAL_BK_ID; // Utility Auto Fix Comments
        var AVAL_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //AVAL_ORDER_NO = document.MAINFORM.AVAL_WT_BK_ORDER_NO.value;
        //AVAL_BK_ID = document.MAINFORM.AVAL_WT_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + AVAL_ORDER_NO + " AND C_MAIN_REF = '" + AVAL_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "AVAL_WT_BK_NM;AVAL_WT_BK_ADD1;AVAL_WT_BK_ADD2;AVAL_WT_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_AVAL_WT_BK_MULT_ORDER_NO_20', '1');
        SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_AVAL_WT_BK_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_BENE_ACNO_Back() {
    try {
        var BENE_ACNO; // Utility Auto Fix Comments
        BENE_ACNO = document.MAINFORM.BENE_AC_NO.value;
        if (BENE_ACNO != "" && BENE_ACNO.substr(0, 1) != "/") {
            document.MAINFORM.BENE_AC_NO.value = "/" + document.MAINFORM.BENE_AC_NO.value;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_BENE_ACNO_Back", e);
    }
}

function SYM_IPLC_CAL_BENE_ADD_back() {
    try {
        if (document.MAINFORM.BENE_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.BENE_ADD_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BENE_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BENE_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_BENE_ADD_back", e);
    }
}

function SYM_IPLC_CAL_BENE_CHG_back() {
    try {
        if (document.MAINFORM.BENE_ID.value != '') {
            SYS_GetCUBK('BENE_ID', document.MAINFORM.BENE_ID.name);
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_BENE_CHG_back", e);
    }
}

function SYM_IPLC_CAL_BENE_ID() {
    try {
        if (document.MAINFORM.BENE_ID.value == '') {
            document.MAINFORM.BENE_NM.value = '';
            document.MAINFORM.BENE_MAIL_ADD.value = '';
            document.MAINFORM.BENE_TLX.value = '';
            document.MAINFORM.BENE_FAX.value = '';
            document.MAINFORM.BENE_EMAIL.value = '';
            document.MAINFORM.BENE_ADD1.value = '';
            document.MAINFORM.BENE_ADD2.value = '';
            document.MAINFORM.BENE_ADD3.value = '';
            document.MAINFORM.BENE_AC_NO.value = '';
            document.MAINFORM.BENE_AC_OFF_CODE.value = '';
            document.MAINFORM.BENE_NOTES.value = '';
            document.MAINFORM.BENE_CORR_MED.value = 'None';
            document.MAINFORM.BENE_LANG.value = 'English';
            SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
            SYM_IPLC_CAL_BENE_ADD_back();
            SYT_ChangeFldClass(document.MAINFORM.BENE_CORR_MED, 'M');
        } else {
            SYS_GetCUBK('BENE_ID', 'BENE_ID', 'SYM_IPLC_CAL_BENE_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_BENE_ID", e);
    }
}

function SYM_IPLC_CAL_BENE_ID_NOCHG() {
    try {
        if (document.MAINFORM.BENE_ID.value == '') {
            document.MAINFORM.BENE_NM.value = '';
            document.MAINFORM.BENE_MAIL_ADD.value = '';
            document.MAINFORM.BENE_TLX.value = '';
            document.MAINFORM.BENE_FAX.value = '';
            document.MAINFORM.BENE_EMAIL.value = '';
            document.MAINFORM.BENE_ADD1.value = '';
            document.MAINFORM.BENE_ADD2.value = '';
            document.MAINFORM.BENE_ADD3.value = '';
            document.MAINFORM.BENE_AC_NO.value = '';
            document.MAINFORM.BENE_AC_OFF_CODE.value = '';
            document.MAINFORM.BENE_NOTES.value = '';
            document.MAINFORM.BENE_CORR_MED.value = 'None';
            document.MAINFORM.BENE_LANG.value = 'English';
            SYM_IPLC_CAL_BENE_ID_NOCHG_back();
        } else {
            SYS_GetCUBK('BENE_ID', 'BENE_ID', 'SYM_IPLC_CAL_BENE_ID_NOCHG_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_BENE_ID_NOCHG", e);
    }
}

function SYM_IPLC_CAL_BENE_ID_NOCHG_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYM_IPLC_BENE_MAIL_ADD();
        SYM_IPLC_CAL_BENE_ADD_back();
        SYM_IPLC_CAL_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_BENE_ID_NOCHG_back", e);
    }
}

function SYM_IPLC_CAL_BENE_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        //bug 814 modified at 20090202 by jane
        if (document.MAINFORM.BENE_CORR_MED.value == '') {
            document.MAINFORM.BENE_CORR_MED.value = 'None';
        }
        SYM_IPLC_BENE_MAIL_ADD();
        SYM_IPLC_CAL_BENE_CHG_back();
        SYM_IPLC_CAL_BENE_ADD_back();
        SYM_IPLC_CAL_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_BENE_ID_back", e);
    }
}

function SYM_IPLC_CAL_BENE_MAIL_ADD() {
    try {
        SYS_InqCUBK_byCondition('BENE_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_BENE_MAIL_ADD", e);
    }
}

function SYM_IPLC_CAL_BENE_MAIL_ORDER_NO() {
    try {
        var BENE_ID; // Utility Auto Fix Comments
        var BENE_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //BENE_ORDER_NO = document.MAINFORM.BENE_ORDER_POST.value;
        //BENE_ID = document.MAINFORM.BENE_ID.value;
        //sSQLWhere = "ORDER_NO = " + BENE_ORDER_NO + " AND C_MAIN_REF = '" + BENE_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "BENE_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_BENE_MAIL_ORDER_NO_12', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_BENE_MAIL_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_BENE_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('BENE_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_BENE_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_BENE_MULT_ORDER_NO() {
    try {
        var BENE_ID; // Utility Auto Fix Comments
        var BENE_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //BENE_ORDER_NO = document.MAINFORM.BENE_ORDER_NO.value;
        //BENE_ID = document.MAINFORM.BENE_ID.value;
        //sSQLWhere = "ORDER_NO = " + BENE_ORDER_NO + " AND C_MAIN_REF = '" + BENE_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "BENE_NM;BENE_ADD1;BENE_ADD2;BENE_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_BENE_MULT_ORDER_NO_13', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_BENE_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_CHG_CASH_IND_back() {
    try {
        //
        //                        if(document.MAINFORM.SEPARATE_CHG_FLG.value == 'Yes'){
        //                        SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND,'O');
        //                        }else{
        //                        SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND,'P');
        //                        }
        //                        
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_CHG_CASH_IND_back", e);
    }
}

function SYM_IPLC_CAL_CLEAR_DRWE_ID() {
    try {
        if (document.MAINFORM.DRWE_ID.value == '') {
            document.MAINFORM.DRWE_NM.value = '';
            document.MAINFORM.DRWE_ADD1.value = '';
            document.MAINFORM.DRWE_ADD2.value = '';
            document.MAINFORM.DRWE_ADD3.value = '';
            document.MAINFORM.DRWE_NOTES.value = '';
            document.MAINFORM.DRWE_SW_ADD.value = '';
            SYM_IPLC_CAL_DRWE_ADD_back(); // Utility Auto Fix Comments
            SYM_IPLC_CHK_DRWE_SW_TAG();
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_CLEAR_DRWE_ID", e);
    }
}

function SYM_IPLC_CAL_CLEAR_NEW_DRWE_ID() {
    try {
        if (document.MAINFORM.NEW_DRWE_ID.value == '') {
            document.MAINFORM.NEW_DRWE_NM.value = '';
            document.MAINFORM.NEW_DRWE_ADD1.value = '';
            document.MAINFORM.NEW_DRWE_ADD2.value = '';
            document.MAINFORM.NEW_DRWE_ADD3.value = '';
            document.MAINFORM.NEW_DRWE_NOTES.value = '';
            document.MAINFORM.NEW_DRWE_SW_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_CLEAR_NEW_DRWE_ID", e);
    }
}

function SYM_IPLC_CAL_CONF_BK_ID() {
    try {
        if (document.MAINFORM.CONF_BK_ID.value == '') {
            document.MAINFORM.CONF_BK_NM.value = '';
            document.MAINFORM.CONF_BK_ADD1.value = '';
            document.MAINFORM.CONF_BK_ADD2.value = '';
            document.MAINFORM.CONF_BK_ADD3.value = '';
            document.MAINFORM.CONF_BK_MAIL_ADD.value = '';
            document.MAINFORM.CONF_BK_CORR_MED.value = '';
            document.MAINFORM.CONF_BK_SW_ADD.value = '';
            document.MAINFORM.CONF_BK_NOTES.value = '';
            SYM_IPLC_CAL_CONF_BK_ID_back();
        } else {
            SYS_GetCUBK('CONF_BK_ID', 'CONF_BK_ID', 'SYM_IPLC_CAL_CONF_BK_ID_back()');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_CONF_BK_ID", e);
    }
}

function SYM_IPLC_CAL_CONF_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYM_IPLC_CHK_CONF_BK_SW_TAG();
        if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.CONF_BK_SW_ADD.value = document.MAINFORM.CONF_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_CONF_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_DRWE_ADD_back() {
    try {
        if (document.MAINFORM.DRWE_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'O');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'P');

        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_DRWE_ADD_back", e);
    }
}

function SYM_IPLC_CAL_DRWE_ID() {
    try {
        if (document.MAINFORM.DRWE_ID.value == '') {
            document.MAINFORM.DRWE_NM.value = '';
            document.MAINFORM.DRWE_ADD1.value = '';
            document.MAINFORM.DRWE_ADD2.value = '';
            document.MAINFORM.DRWE_ADD3.value = '';
            document.MAINFORM.DRWE_NOTES.value = '';
            document.MAINFORM.DRWE_SW_ADD.value = '';
            SYM_IPLC_CAL_DRWE_ID_back();
        } else {
            SYS_GetCUBK('DRW_ID', 'DRWE_ID', 'SYM_IPLC_CAL_DRWE_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_DRWE_ID", e);
    }
}

function SYM_IPLC_CAL_DRWE_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYM_IPLC_CHK_DRWE_SW_TAG();
        SYM_IPLC_CAL_DRWE_ADD_back();
        if (document.MAINFORM.DRWE_SW_ADD.value.length == 8) {
            document.MAINFORM.DRWE_SW_ADD.value = document.MAINFORM.DRWE_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_DRWE_ID_back", e);
    }
}

function SYM_IPLC_CAL_DRWE_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('DRWE_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_DRWE_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_DRWE_MULT_ORDER_NO() {
    try {
        var DRWE_ID; // Utility Auto Fix Comments
        var DRWE_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //DRWE_ORDER_NO = document.MAINFORM.DRWE_ORDER_NO.value;
        //DRWE_ID = document.MAINFORM.DRWE_ID.value;
        //sSQLWhere = "ORDER_NO = " + DRWE_ORDER_NO + " AND C_MAIN_REF = '" + DRWE_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "DRWE_NM;DRWE_ADD1;DRWE_ADD2;DRWE_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_DRWE_MULT_ORDER_NO_21', '1');
        SYM_IPLC_CHK_DRWE_SW_TAG();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_DRWE_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_FORACOF_ADD_back() {
    try {
        if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'No' && document.MAINFORM.FORACOF_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_FORACOF_ADD_back", e);
    }
}

function SYM_IPLC_CAL_FORACOF_CUST_MAIL_ADD() {
    try {
        SYS_InqCUBK_byCondition('FORACOF_CUST_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_FORACOF_CUST_MAIL_ADD", e);
    }
}

function SYM_IPLC_CAL_FORACOF_CUST_MAIL_ORDER_NO() {
    try {
        var FORACOF_ID; // Utility Auto Fix Comments
        var FORACOF_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //Add by Jack on 20120905 for SMBC workshop
        //FORACOF_ORDER_NO = document.MAINFORM.FORACOF_ORDER_POST.value;
        //FORACOF_ID = document.MAINFORM.FORACOF_ID.value;
        //sSQLWhere = "ORDER_NO = " + FORACOF_ORDER_NO + " AND C_MAIN_REF = '" + FORACOF_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "FORACOF_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_FORACOF_CUST_MAIL_ORDER_NO_38', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_FORACOF_CUST_MAIL_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_FORACOF_CUST_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('FORACOF_CUST_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_FORACOF_CUST_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_FORACOF_CUST_MULT_ORDER_NO() {
    try {
        var FORACOF_ID; // Utility Auto Fix Comments
        var FORACOF_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //Add by Jack on 20120905 for SMBC workshop
        //FORACOF_ORDER_NO = document.MAINFORM.FORACOF_ORDER_NO.value;
        //FORACOF_ID = document.MAINFORM.FORACOF_ID.value;
        //sSQLWhere = "ORDER_NO = " + FORACOF_ORDER_NO + " AND C_MAIN_REF = '" + FORACOF_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "FORACOF_NM;FORACOF_ADD1;FORACOF_ADD2;FORACOF_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_FORACOF_CUST_MULT_ORDER_NO_37', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_FORACOF_CUST_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_FORACOF_ID_NOCHG() {
    try {
        if (document.MAINFORM.FORACOF_ID.value == '') {
            document.MAINFORM.FORACOF_NM.value = '';
            document.MAINFORM.FORACOF_ADD1.value = '';
            document.MAINFORM.FORACOF_ADD2.value = '';
            document.MAINFORM.FORACOF_ADD3.value = '';
            document.MAINFORM.FORACOF_EMAIL.value = '';
            document.MAINFORM.FORACOF_FAX.value = '';
            document.MAINFORM.FORACOF_MAIL_ADD.value = '';
            document.MAINFORM.FORACOF_CORR_MED.value = 'None';
            document.MAINFORM.FORACOF_TLX.value = '';
            document.MAINFORM.FORACOF_REF.value = '';
            document.MAINFORM.FORACOF_NOTES.value = '';
            document.MAINFORM.FORACOF_LANG.value = 'English';
            document.MAINFORM.FORACOF_AC_OFF_CODE.value = '';
            SYM_IPLC_CAL_FORACOF_ID_NOCHG_back();
        } else {
            SYS_GetCUBK('FORACOF_ID', 'FORACOF_ID', 'SYM_IPLC_CAL_FORACOF_ID_NOCHG_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_FORACOF_ID_NOCHG", e);
    }
}

function SYM_IPLC_CAL_FORACOF_ID_NOCHG_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYM_IPLC_FORACOF_MAIL_ADD();
        SYM_IPLC_CAL_FORACOF_ADD_back();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_FORACOF_ID_NOCHG_back", e);
    }
}

function SYM_IPLC_CAL_INCOTERMS_INST() {
    try {
        var INCOTERMS; // Utility Auto Fix Comments
        INCOTERMS = document.MAINFORM.INCOTERMS.value;

        switch (INCOTERMS) {
            case "EXW":
                document.MAINFORM.INCOTERM_INST.value = INCOTERMS + ' ' + 'Place of Taking in Charge/Dispatch/Place of Receipt';
                break;
            case "FCA":
                document.MAINFORM.INCOTERM_INST.value = INCOTERMS + ' ' + 'Place of Taking in Charge/Dispatch/Place of Receipt';
                break;
            case "FAS":
                document.MAINFORM.INCOTERM_INST.value = INCOTERMS + ' ' + 'Port of Loading/Airport of Departure';
                break;
            case "FOB":
                document.MAINFORM.INCOTERM_INST.value = INCOTERMS + ' ' + 'Port of Loading/Airport of Departure';
                break;
            case "CFR":
                document.MAINFORM.INCOTERM_INST.value = INCOTERMS + ' ' + 'Port of Discharge/Airport of Destination';
                break;
            case "CIF":
                document.MAINFORM.INCOTERM_INST.value = INCOTERMS + ' ' + 'Port of Discharge/Airport of Destination';
                break;
            case "CPT":
                document.MAINFORM.INCOTERM_INST.value = INCOTERMS + ' ' + 'Place of Final Destination/For Transportation To/Place of Delivery';
                break;
            case "CIP":
                document.MAINFORM.INCOTERM_INST.value = INCOTERMS + ' ' + "Place of Final Destination/For Transportation To/Place of Delivery";
                break;
            case "DAT":
                document.MAINFORM.INCOTERM_INST.value = INCOTERMS + ' ' + "Place of Final Destination/For Transportation To/Place of Delivery";
                break;
            case "DAP":
                document.MAINFORM.INCOTERM_INST.value = INCOTERMS + ' ' + "Place of Final Destination/For Transportation To/Place of Delivery";
                break;
            case "DDP":
                document.MAINFORM.INCOTERM_INST.value = INCOTERMS + ' ' + "Place of Final Destination/For Transportation To/Place of Delivery";
                break;
            default:
                document.MAINFORM.INCOTERM_INST.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_INCOTERMS_INST", e);
    }
}

function SYM_IPLC_CAL_INT_CHF() {
    try {
        var ccy; // Utility Auto Fix Comments
        var int; // Utility Auto Fix Comments
        var lib; // Utility Auto Fix Comments
        var lib_chf; // Utility Auto Fix Comments
        var mag; // Utility Auto Fix Comments
        var mag_chf; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        if (document.MAINFORM.DISCNT_FLG.value == "YES") {
            ccy = document.MAINFORM.CFNC_C_CCY.value;
            document.MAINFORM.CFNC_DISCOUNT_CCY.value = ccy;
            lib = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_AMT.value);
            mag = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_AMT.value);
            int = SYS_BeFloat(document.MAINFORM.CFNC_N_PRE_INT.value);

            //SYS_GetExchangeRate_S(ccy,SYS_LOCAL_CCY,'Booking Rate','CFNC_BOOKING_RATE');
            //rate = SYS_BeFloat(document.MAINFORM.CFNC_BOOKING_RATE.value);
            lib_chf = lib;
            mag_chf = mag;
            document.MAINFORM.CFNC_LIB_CHF_AMT.value = SYT_AmtFormat(ccy, lib_chf);
            document.MAINFORM.CFNC_MARG_CHF_AMT.value = SYT_AmtFormat(ccy, mag_chf);
            int_chf = SYS_BeFloat(document.MAINFORM.CFNC_LIB_CHF_AMT.value) + SYS_BeFloat(document.MAINFORM.CFNC_MARG_CHF_AMT.value);
            if (ccy != SYS_LOCAL_CCY) {
                document.MAINFORM.CFNC_TTL_CHF_AMT.value = SYT_AmtFormat(ccy, int_chf);
                document.MAINFORM.CFNC_TTL_FX_AMT.value = document.MAINFORM.CFNC_N_PRE_INT.value;
            } else {
                document.MAINFORM.CFNC_TTL_CHF_AMT.value = 0;
                document.MAINFORM.CFNC_TTL_FX_AMT.value = 0;
            }

            if (ccy == SYS_LOCAL_CCY) {
                document.MAINFORM.CFNC_DISCOUNT_NO.value = "INT.LOCAL.CCY";
            } else {
                document.MAINFORM.CFNC_DISCOUNT_NO.value = "INT.F.CURR.";
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_INT_CHF", e);
    }
}

function SYM_IPLC_CAL_ISSUE_BK_ADD_back() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'O');
            // SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'P');
            // SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ISSUE_BK_ADD_back", e);
    }
}

function SYM_IPLC_CAL_ISSUE_BK_ID() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID.value == '') {
            document.MAINFORM.ISSUE_BK_NM.value = '';
            document.MAINFORM.ISSUE_BK_ADD1.value = '';
            document.MAINFORM.ISSUE_BK_ADD2.value = '';
            document.MAINFORM.ISSUE_BK_ADD3.value = '';
            //document.MAINFORM.ISSUE_BK_MAIL_ADD.value = '';
            document.MAINFORM.ISSUE_BK_NOTES.value = '';
            document.MAINFORM.ISSUE_BK_SW_ADD.value = '';
            // document.MAINFORM.ISSUE_BK_CORR_MED.value = 'None';
            SYM_IPLC_CAL_ISSUE_BK_ID_back();
        } else {
            SYS_GetCUBK('ISSUE_BK_ID', 'ISSUE_BK_ID', 'SYM_IPLC_CAL_ISSUE_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ISSUE_BK_ID", e);
    }
}

function SYM_IPLC_CAL_ISSUE_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        // SYM_IPLC_CHK_ISSUE_BK_MAIL();
        SYM_IPLC_CHK_ISSUE_BK_SW_TAG();
        SYM_IPLC_CAL_ISSUE_BK_ADD_back();
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ISSUE_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ISSUE_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_ISSUE_BK_MAIL_ADD() {
    try {
        SYS_InqCUBK_byCondition('ISSUE_BK_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ISSUE_BK_MAIL_ADD", e);
    }
}

function SYM_IPLC_CAL_ISSUE_BK_MAIL_ORDER_NO() {
    try {
        var ISSUE_BK_ID; // Utility Auto Fix Comments
        var ISSUE_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ISSUE_BK_ORDER_NO = document.MAINFORM.ISSUE_BK_ORDER_POST.value;
        //ISSUE_BK_ID = document.MAINFORM.ISSUE_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + ISSUE_BK_ORDER_NO + " AND C_MAIN_REF = '" + ISSUE_BK_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "ISSUE_BK_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_ISSUE_BK_MAIL_ORDER_NO_27', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ISSUE_BK_MAIL_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_ISSUE_BK_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('ISSUE_BK_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ISSUE_BK_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_ISSUE_BK_MULT_ORDER_NO() {
    try {
        var ISSUE_BK_ID; // Utility Auto Fix Comments
        var ISSUE_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ISSUE_BK_ORDER_NO = document.MAINFORM.APPL_BK_ORDER_NO.value;
        //ISSUE_BK_ID = document.MAINFORM.APPL_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + ISSUE_BK_ORDER_NO + " AND C_MAIN_REF = '" + ISSUE_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "ISSUE_BK_NM;ISSUE_BK_ADD1;ISSUE_BK_ADD2;ISSUE_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_ISSUE_BK_MULT_ORDER_NO_29', '1');
        SYM_IPLC_CHK_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ISSUE_BK_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_LC_BAL_NEGO() {
    try {
        if (SYS_BeFloat(document.MAINFORM.PRES_AMT.value) > SYS_BeFloat(document.MAINFORM.LC_BAL.value)) {
            alert("The LC Balance is exceeded");
            document.MAINFORM.PRES_AMT.value = 0;
            EEHtml.fireEvent(document.MAINFORM.PRES_AMT, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_LC_BAL_NEGO", e);
    }
}

function SYM_IPLC_CAL_LC_NO_DEFAULT_VALUE() {
    try {
        document.MAINFORM.LC_NO.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_LC_NO_DEFAULT_VALUE", e);
    }
}

function SYM_IPLC_CAL_MATURITY_DT() {
    try {
        var nDays; // Utility Auto Fix Comments
        //Add by Jack on 20120907 for SMBC Workshop
        nDays = SYS_BeInt(document.MAINFORM.TENOR_DAYS.value);

        if (nDays != "" && document.MAINFORM.TENOR_START_DT.value != "") {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.TENOR_START_DT.value, nDays, "SYM_IPLC_MATURITY_DT_RESULT", "A", "N", "N");
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_MATURITY_DT", e);
    }
}

function SYM_IPLC_CAL_NEW_ADV_THU_BK_ID() {
    try {
        if (document.MAINFORM.NEW_ADV_THU_BK_ID.value == '') {
            document.MAINFORM.NEW_ADV_THU_BK_NM.value = '';
            document.MAINFORM.NEW_ADV_THU_BK_ADD1.value = '';
            document.MAINFORM.NEW_ADV_THU_BK_ADD2.value = '';
            document.MAINFORM.NEW_ADV_THU_BK_ADD3.value = '';
            document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value = '';
            document.MAINFORM.NEW_ADV_THU_BK_NOTES.value = '';
            SYM_IPLC_CAL_NEW_ADV_THU_BK_ID_back();
        } else {
            SYS_GetCUBK('NEW_ADV_THU_BK_ID', 'NEW_ADV_THU_BK_ID', 'SYM_IPLC_CAL_NEW_ADV_THU_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_ADV_THU_BK_ID", e);
    }
}

function SYM_IPLC_CAL_NEW_ADV_THU_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.NEW_ADV_THU_BK_NOTES.name);
        SYM_IPLC_CHK_NEW_ADV_THU_BK_SW_TAG();
        if (document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value = document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_ADV_THU_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_NEW_ADV_THU_BK_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('NEW_ADV_THU_BK_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_ADV_THU_BK_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_NEW_AVAL_WT_BK_ADD_back() {
    try {
        if (document.MAINFORM.NEW_AVAL_WT_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_AVAL_WT_BK_ADD_back", e);
    }
}

function SYM_IPLC_CAL_NEW_AVAL_WT_BK_ID() {
    try {
        if (document.MAINFORM.NEW_AVAL_WT_BK_ID.value == '') {
            document.MAINFORM.NEW_AVAL_WT_BK_ADD1.value = '';
            document.MAINFORM.NEW_AVAL_WT_BK_ADD2.value = '';
            document.MAINFORM.NEW_AVAL_WT_BK_ADD3.value = '';
            document.MAINFORM.NEW_AVAL_WT_BK_NM.value = '';
            document.MAINFORM.NEW_AVAL_WT_BK_NOTES.value = '';
            document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value = '';
            SYM_IPLC_CAL_NEW_AVAL_WT_BK_ID_back();
        } else {
            SYS_GetCUBK('NEW_AVLBL_BK_ID', 'NEW_AVAL_WT_BK_ID', 'SYM_IPLC_CAL_NEW_AVAL_WT_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_AVAL_WT_BK_ID", e);
    }
}

function SYM_IPLC_CAL_NEW_AVAL_WT_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.NEW_AVAL_WT_BK_NOTES.name);
        SYM_IPLC_CHK_NEW_AVAL_WT_BK_SW_TAG();
        SYM_IPLC_CAL_NEW_AVAL_WT_BK_ADD_back();
        if (document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value = document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_AVAL_WT_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_NEW_AVAL_WT_BK_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('NEW_AVAL_BK_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_AVAL_WT_BK_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_NEW_AVAL_WT_BK_MULT_ORDER_NO() {
    try {
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_NEW_AVAL_WT_BK_MULT_ORDER_NO_42', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_AVAL_WT_BK_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_NEW_BENE_ACNO_Back() {
    try {
        var NEW_BENE_ACNO; // Utility Auto Fix Comments
        NEW_BENE_ACNO = document.MAINFORM.NEW_BENE_ACNO.value;
        if (NEW_BENE_ACNO != "" && NEW_BENE_ACNO.substr(0, 1) != "/") {
            document.MAINFORM.NEW_BENE_ACNO.value = "/" + document.MAINFORM.NEW_BENE_ACNO.value;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_BENE_ACNO_Back", e);
    }
}

function SYM_IPLC_CAL_NEW_BENE_ADD_back() {
    try {
        if (document.MAINFORM.NEW_BENE_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ADD_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_BENE_ADD_back", e);
    }
}

function SYM_IPLC_CAL_NEW_BENE_MAIL_ADD() {
    try {
        SYS_InqCUBK_byCondition('NEW_BENE_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_BENE_MAIL_ADD", e);
    }
}

function SYM_IPLC_CAL_NEW_BENE_MAIL_ORDER_NO() {
    try {
        var BENE_ID; // Utility Auto Fix Comments
        var BENE_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //BENE_ORDER_NO = document.MAINFORM.NEW_BENE_ORDER_POST.value;
        //BENE_ID = document.MAINFORM.NEW_BENE_ID.value;
        //sSQLWhere = "ORDER_NO = " + BENE_ORDER_NO + " AND C_MAIN_REF = '" + BENE_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "NEW_BENE_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_NEW_BENE_MAIL_ORDER_NO_22', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_BENE_MAIL_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_NEW_BENE_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('NEW_BENE_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_BENE_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_NEW_BENE_MULT_ORDER_NO() {
    try {
        var BENE_ID; // Utility Auto Fix Comments
        var BENE_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //BENE_ORDER_NO = document.MAINFORM.NEW_BENE_ORDER_NO.value;
        //BENE_ID = document.MAINFORM.NEW_BENE_ID.value;
        //sSQLWhere = "ORDER_NO = " + BENE_ORDER_NO + " AND C_MAIN_REF = '" + BENE_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "NEW_BENE_NM;NEW_BENE_ADD1;NEW_BENE_ADD2;NEW_BENE_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_NEW_BENE_MULT_ORDER_NO_23', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_BENE_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_NEW_CONF_BK_ID() {
    try {
        if (document.MAINFORM.NEW_CONF_BK_ID.value == '') {
            document.MAINFORM.NEW_CONF_BK_NM.value = '';
            document.MAINFORM.NEW_CONF_BK_ADD1.value = '';
            document.MAINFORM.NEW_CONF_BK_ADD2.value = '';
            document.MAINFORM.NEW_CONF_BK_ADD3.value = '';
            document.MAINFORM.NEW_CONF_BK_SW_ADD.value = '';
            document.MAINFORM.NEW_CONF_BK_NOTES.value = '';
            SYM_IPLC_CAL_NEW_CONF_BK_ID_back();
        } else {
            SYS_GetCUBK('NEW_CONF_BK_ID', 'NEW_CONF_BK_ID', 'SYM_IPLC_CAL_NEW_CONF_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_CONF_BK_ID", e);
    }
}

function SYM_IPLC_CAL_NEW_CONF_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.NEW_CONF_BK_NOTES.name);
        SYM_IPLC_CHK_NEW_CONF_BK_SW_TAG();
        if (document.MAINFORM.NEW_CONF_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.NEW_CONF_BK_SW_ADD.value = document.MAINFORM.NEW_CONF_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_CONF_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_NEW_DRWE_ADD_back() {
    try {
        if (document.MAINFORM.NEW_DRWE_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_DRWE_ADD_back", e);
    }
}

function SYM_IPLC_CAL_NEW_DRWE_ID() {
    try {
        if (document.MAINFORM.NEW_DRWE_ID.value == '') {
            document.MAINFORM.NEW_DRWE_NM.value = '';
            document.MAINFORM.NEW_DRWE_ADD1.value = '';
            document.MAINFORM.NEW_DRWE_ADD2.value = '';
            document.MAINFORM.NEW_DRWE_ADD3.value = '';
            document.MAINFORM.NEW_DRWE_NOTES.value = '';
            document.MAINFORM.NEW_DRWE_SW_ADD.value = '';
            SYM_IPLC_CAL_NEW_DRWE_ID_back();
        } else {
            SYS_GetCUBK('NEW_DRW_ID', 'NEW_DRWE_ID', 'SYM_IPLC_CAL_NEW_DRWE_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_DRWE_ID", e);
    }
}

function SYM_IPLC_CAL_NEW_DRWE_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.NEW_DRWE_NOTES.name);
        SYM_IPLC_CHK_NEW_DRWE_SW_TAG();
        SYM_IPLC_CAL_NEW_DRWE_ADD_back();
        if (document.MAINFORM.NEW_DRWE_SW_ADD.value.length == 8) {
            document.MAINFORM.NEW_DRWE_SW_ADD.value = document.MAINFORM.NEW_DRWE_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_DRWE_ID_back", e);
    }
}

function SYM_IPLC_CAL_NEW_DRWE_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('NEW_DRWE_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_DRWE_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_NEW_DRWE_MULT_ORDER_NO() {
    try {
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_NEW_DRWE_MULT_ORDER_NO_41', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_DRWE_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_NEW_REIM_BK_ADD_back() {
    try {
        if (document.MAINFORM.NEW_REIM_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_ADD_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_REIM_BK_ADD_back", e);
    }
}

function SYM_IPLC_CAL_NEW_REIM_BK_ID() {
    try {
        if (document.MAINFORM.NEW_REIM_BK_ID.value == '') {
            document.MAINFORM.NEW_REIM_BK_NM.value = '';
            document.MAINFORM.NEW_REIM_BK_ADD1.value = '';
            document.MAINFORM.NEW_REIM_BK_ADD2.value = '';
            document.MAINFORM.NEW_REIM_BK_ADD3.value = '';
            document.MAINFORM.NEW_REIM_BK_TLX.value = '';
            document.MAINFORM.NEW_REIM_BK_SW_ADD.value = '';
            document.MAINFORM.NEW_REIM_BK_NOTES.value = '';
            document.MAINFORM.NEW_REIM_BK_CORR_MED.value = 'None';
            document.MAINFORM.NEW_REIM_BK_MAIL_ADD.value = '';
            SYM_IPLC_CAL_NEW_REIM_BK_ID_back();
        } else {
            SYS_GetCUBK('NEW_REIM_BK_ID', 'NEW_REIM_BK_ID', 'SYM_IPLC_CAL_NEW_REIM_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_REIM_BK_ID", e);
    }
}

function SYM_IPLC_CAL_NEW_REIM_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.NEW_REIM_BK_NOTES.name);
        SYM_IPLC_NEW_REIM_BK_MAIL_ADD();
        SYM_IPLC_CHK_NEW_REIM_BK_SW_TAG();
        SYM_IPLC_CAL_NEW_REIM_BK_ADD_back();
        if (document.MAINFORM.NEW_REIM_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.NEW_REIM_BK_SW_ADD.value = document.MAINFORM.NEW_REIM_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_REIM_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_NEW_REIM_BK_MAIL_ADD() {
    try {
        SYS_InqCUBK_byCondition('NEW_REIM_BK_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_REIM_BK_MAIL_ADD", e);
    }
}

function SYM_IPLC_CAL_NEW_REIM_BK_MAIL_ORDER_NO() {
    try {
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_NEW_REIM_BK_MAIL_ORDER_NO_39', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_REIM_BK_MAIL_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_NEW_REIM_BK_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('NEW_REIM_BK_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_REIM_BK_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_NEW_REIM_BK_MULT_ORDER_NO() {
    try {
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_NEW_REIM_BK_MULT_ORDER_NO_40', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_NEW_REIM_BK_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_ORDER_CUST_ADD_back() {
    try {
        if (document.MAINFORM.ORDER_CUST_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ORDER_CUST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ORDER_CUST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ORDER_CUST_ADD_back", e);
    }
}

function SYM_IPLC_CAL_ORDER_CUST_ID() {
    try {
        if (document.MAINFORM.ORDER_CUST_ID.value == '') {
            document.MAINFORM.ORDER_CUST_NM.value = '';
            document.MAINFORM.ORDER_CUST_ADD1.value = '';
            document.MAINFORM.ORDER_CUST_ADD2.value = '';
            document.MAINFORM.ORDER_CUST_ADD3.value = '';
            document.MAINFORM.ORDER_CUST_NOTES.value = '';
            SYM_IPLC_CAL_ORDER_CUST_ID_back();
        } else {
            SYS_GetCUBK('ORDER_CUST_ID', 'ORDER_CUST_ID', 'SYM_IPLC_CAL_ORDER_CUST_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ORDER_CUST_ID", e);
    }
}

function SYM_IPLC_CAL_ORDER_CUST_ID_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('ORDER_CUST_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ORDER_CUST_ID_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_ORDER_CUST_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.ORDER_CUST_NOTES.name);
        SYM_IPLC_CAL_ORDER_CUST_ADD_back();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ORDER_CUST_ID_back", e);
    }
}

function SYM_IPLC_CAL_ORDER_CUST_MULT_ORDER_NO() {
    try {
        var ORDER_CUST_ID; // Utility Auto Fix Comments
        var ORDER_CUST_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ORDER_CUST_ORDER_NO = document.MAINFORM.ORDER_CUST_ORDER_NO.value;
        //ORDER_CUST_ID = document.MAINFORM.ORDER_CUST_ID.value;
        //sSQLWhere = "ORDER_NO = " + ORDER_CUST_ORDER_NO + " AND C_MAIN_REF = '" + ORDER_CUST_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "ORDER_CUST_NM;ORDER_CUST_ADD1;ORDER_CUST_ADD2;ORDER_CUST_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_ORDER_CUST_MULT_ORDER_NO_32', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_ORDER_CUST_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_RCV_BK_ADD_Back() {
    try {
        if (document.MAINFORM.RCV_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_ADD_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_POST_ADD_BTN, 'O'); // Utility Auto Fix Comments
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_RCV_BK_ADD_Back", e);
    }
}

function SYM_IPLC_CAL_RCV_BK_ID() {
    try {
        if (document.MAINFORM.RCV_BK_ID.value == '') {
            document.MAINFORM.RCV_BK_NM.value = '';
            document.MAINFORM.RCV_BK_MAIL_ADD.value = '';
            document.MAINFORM.RCV_BK_FAX.value = '';
            document.MAINFORM.RCV_BK_NOTES.value = '';
            document.MAINFORM.RCV_BK_LANG.value = '';
            document.MAINFORM.RCV_BK_CORR_MED.value = 'None';
            SYM_IPLC_CAL_RCV_BK_ID_back();
        } else {
            SYS_GetCUBK('RCV_BK_ID', 'RCV_BK_ID', 'SYM_IPLC_CAL_RCV_BK_ID_back()');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_RCV_BK_ID", e);
    }
}

function SYM_IPLC_CAL_RCV_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.RCV_BK_NOTES.name);
        SYM_IPLC_CAL_RCV_BK_ADD_Back();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_RCV_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_RCV_BK_MAIL_ADD() {
    try {
        SYS_InqCUBK_byCondition('RCV_BK_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_RCV_BK_MAIL_ADD", e);
    }
}

function SYM_IPLC_CAL_RCV_BK_MAIL_ORDER_NO() {
    try {
        var RCV_BK_ID; // Utility Auto Fix Comments
        var RCV_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //RCV_ORDER_NO = document.MAINFORM.RCV_BK_ORDER_POST.value;
        //RCV_BK_ID = document.MAINFORM.RCV_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + RCV_ORDER_NO + " AND C_MAIN_REF = '" + RCV_BK_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "RCV_BK_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_RCV_BK_MAIL_ORDER_NO_33', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_RCV_BK_MAIL_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_RCV_BK_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('RCV_BK_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_RCV_BK_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_RCV_BK_MULT_ORDER_NO() {
    try {
        var RCV_BK_ID; // Utility Auto Fix Comments
        var RCV_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //RCV_ORDER_NO = document.MAINFORM.RCV_BK_ORDER_NO.value;
        //RCV_BK_ID = document.MAINFORM.RCV_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + RCV_ORDER_NO + " AND C_MAIN_REF = '" + RCV_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM";
        //sMappingList = "RCV_BK_NM";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_RCV_BK_MULT_ORDER_NO_34', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_RCV_BK_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_RCV_CORR_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.RCV_CORR_BK_NOTES.name);
        SYM_IPLC_Cal_RCV_CORR_SW_TAG();

        if (document.MAINFORM.RCV_CORR_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_CORR_BK_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_CORR_BK_ADD_BTN, 'P');
        }

        if (document.MAINFORM.RCV_CORR_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.RCV_CORR_BK_SW_ADD.value = document.MAINFORM.RCV_CORR_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_RCV_CORR_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_RCV_CORR_BK_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('RCV_CORR_BK_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_RCV_CORR_BK_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_RCV_CORR_BK_MULT_ORDER_NO() {
    try {
        var RCV_CORR_BK_ID; // Utility Auto Fix Comments
        var RCV_CORR_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //RCV_CORR_BK_ORDER_NO = document.MAINFORM.RCV_CORR_BK_ORDER_NO.value;
        //RCV_CORR_BK_ID = document.MAINFORM.RCV_CORR_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + RCV_CORR_BK_ORDER_NO + " AND C_MAIN_REF = '" + RCV_CORR_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "RCV_CORR_BK_NM;RCV_CORR_BK_ADD1;RCV_CORR_BK_ADD2;RCV_CORR_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_RCV_CORR_BK_MULT_ORDER_NO_31', '1');
        SYM_IPLC_Cal_RCV_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_RCV_CORR_BK_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_RECV_CORR_BK_ID() {
    try {
        if (document.MAINFORM.RCV_CORR_BK_ID.value == '') {
            document.MAINFORM.RCV_CORR_BK_NM.value = '';
            document.MAINFORM.RCV_CORR_BK_ADD1.value = '';
            document.MAINFORM.RCV_CORR_BK_ADD2.value = '';
            document.MAINFORM.RCV_CORR_BK_ADD3.value = '';
            document.MAINFORM.RCV_CORR_BK_SW_ADD.value = '';
            document.MAINFORM.RCV_CORR_BK_NOTES.value = '';
            SYM_IPLC_Cal_RCV_CORR_SW_TAG();
        } else {
            SYS_GetCUBK('RCV_CORR_ID', 'RCV_CORR_BK_ID', 'SYM_IPLC_CAL_RCV_CORR_BK_ID_back()'); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_RECV_CORR_BK_ID", e);
    }
}

function SYM_IPLC_CAL_REIM_BK_ADD_back() {
    try {
        if (document.MAINFORM.REIM_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ADD_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_POST_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_REIM_BK_ADD_back", e);
    }
}

function SYM_IPLC_CAL_REIM_BK_ID() {
    try {
        if (document.MAINFORM.REIM_BK_ID.value == '') {
            document.MAINFORM.REIM_BK_NM.value = '';
            document.MAINFORM.REIM_BK_ADD1.value = '';
            document.MAINFORM.REIM_BK_ADD2.value = '';
            document.MAINFORM.REIM_BK_ADD3.value = '';
            document.MAINFORM.REIM_BK_TLX.value = '';
            document.MAINFORM.REIM_BK_NOTES.value = '';
            document.MAINFORM.REIM_BK_SW_ADD.value = '';
            document.MAINFORM.REIM_BK_CORR_MED.value = 'None';
            document.MAINFORM.REIM_BK_MAIL_ADD.value = '';
            SYM_IPLC_CAL_REIM_BK_ID_back();
        } else {
            SYS_GetCUBK('REIM_BK_ID', 'REIM_BK_ID', 'SYM_IPLC_CAL_REIM_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_REIM_BK_ID", e);
    }
}

function SYM_IPLC_CAL_REIM_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.REIM_BK_NOTES.name);
        SYM_IPLC_REIM_BK_MAIL_ADD();
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
        SYM_IPLC_CAL_REIM_BK_ADD_back();
        if (document.MAINFORM.REIM_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.REIM_BK_SW_ADD.value = document.MAINFORM.REIM_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_REIM_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_REIM_BK_MAIL_ADD() {
    try {
        SYS_InqCUBK_byCondition('REIM_BK_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_REIM_BK_MAIL_ADD", e);
    }
}

function SYM_IPLC_CAL_REIM_BK_MAIL_ORDER_NO() {
    try {
        var REIM_BK_ID; // Utility Auto Fix Comments
        var REIM_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //REIM_ORDER_NO = document.MAINFORM.REIM_BK_ORDER_POST.value;
        //REIM_BK_ID = document.MAINFORM.REIM_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + REIM_ORDER_NO + " AND C_MAIN_REF = '" + REIM_BK_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "REIM_BK_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_REIM_BK_MAIL_ORDER_NO_24', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_REIM_BK_MAIL_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_REIM_BK_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('REIM_BK_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_REIM_BK_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_REIM_BK_MULT_ORDER_NO() {
    try {
        var REIM_ID; // Utility Auto Fix Comments
        var REIM_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //REIM_ORDER_NO = document.MAINFORM.REIM_BK_ORDER_NO.value;
        //REIM_ID = document.MAINFORM.REIM_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + REIM_ORDER_NO + " AND C_MAIN_REF = '" + REIM_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "REIM_BK_NM;REIM_BK_ADD1;REIM_BK_ADD2;REIM_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_REIM_BK_MULT_ORDER_NO_25', '1');
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_REIM_BK_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_SEND_CORR_BK_ID() {
    try {
        if (document.MAINFORM.SEND_CORR_BK_ID.value == '') {
            document.MAINFORM.SEND_CORR_BK_NM.value = '';
            document.MAINFORM.SEND_CORR_BK_ADD1.value = '';
            document.MAINFORM.SEND_CORR_BK_ADD2.value = '';
            document.MAINFORM.SEND_CORR_BK_ADD3.value = '';
            document.MAINFORM.SEND_CORR_BK_NOTES.value = '';
            document.MAINFORM.SEND_CORR_BK_SW_ADD.value = '';
            SYM_IPLC_CAL_SEND_CORR_BK_ID_back();
        } else {
            SYS_GetCUBK('SEND_CORR_ID', 'SEND_CORR_BK_ID', 'SYM_IPLC_CAL_SEND_CORR_BK_ID_back()');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_SEND_CORR_BK_ID", e);
    }
}

function SYM_IPLC_CAL_SEND_CORR_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.SEND_CORR_BK_NOTES.name);
        SYM_IPLC_Cal_SEND_CORR_SW_TAG();
        if (document.MAINFORM.SEND_CORR_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_CORR_BK_ADD_BTN, 'P');
        }

        if (document.MAINFORM.SEND_CORR_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.SEND_CORR_BK_SW_ADD.value = document.MAINFORM.SEND_CORR_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_SEND_CORR_BK_ID_back", e);
    }
}

function SYM_IPLC_CAL_SEND_CORR_BK_MULT_ADD() {
    try {
        SYS_InqCUBK_byCondition('SEND_CORR_BK_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_SEND_CORR_BK_MULT_ADD", e);
    }
}

function SYM_IPLC_CAL_SEND_CORR_BK_MULT_ORDER_NO() {
    try {
        var SEND_CORR_BK_ID; // Utility Auto Fix Comments
        var SEND_CORR_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //SEND_CORR_BK_ORDER_NO = document.MAINFORM.SEND_CORR_BK_ORDER_NO.value;
        //SEND_CORR_BK_ID = document.MAINFORM.SEND_CORR_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + SEND_CORR_BK_ORDER_NO + " AND C_MAIN_REF = '" + SEND_CORR_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "SEND_CORR_BK_NM;SEND_CORR_BK_ADD1;SEND_CORR_BK_ADD2;SEND_CORR_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_CAL_SEND_CORR_BK_MULT_ORDER_NO_30', '1');
        SYM_IPLC_Cal_SEND_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_SEND_CORR_BK_MULT_ORDER_NO", e);
    }
}

function SYM_IPLC_CAL_TEMP_FORM_OF_LC() {
    try {
        var Form_of_LC;
        Form_of_LC = document.MAINFORM.FORM_OF_LC.value;
        switch (Form_of_LC) {
            case 'IRREVOCABLE':
                document.MAINFORM.TEMP_FORM_OF_LC.value = 'Irrevocable';
                break;
            case 'IRREVOCABLE STANDBY':
                document.MAINFORM.TEMP_FORM_OF_LC.value = 'Irrevocable Standby';
                break;
            case 'IRREVOCABLE TRANSFERABLE':
                document.MAINFORM.TEMP_FORM_OF_LC.value = "Irrevocable Transferable";
                break;
            case 'IRREVOC TRANS STANDBY':
                document.MAINFORM.TEMP_FORM_OF_LC.value = "Irrevocable Transferable Standby";
                break;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_TEMP_FORM_OF_LC", e);
    }
}

function SYM_IPLC_CAL_TEMP_LIAB_ACNO() {
    try {
        //Add by jane at 20090325 for liability account 
        document.MAINFORM.TEMP_ASSET_ACNO.value = document.MAINFORM.ASSET_ACNO.value;
        document.MAINFORM.TEMP_LIAB_ACNO.value = document.MAINFORM.LIAB_ACNO.value;
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_TEMP_LIAB_ACNO", e);
    }
}

function SYM_IPLC_CAL_Temp_AMT_AMD_SWIFT() {
    try {
        if (document.MAINFORM.INC_AMT.value != 0 || document.MAINFORM.DEC_AMT.value != 0) {
            document.MAINFORM.TEMP_NEW_LC_AMT.value = document.MAINFORM.NEW_LC_AMT.value;
        } else {
            document.MAINFORM.TEMP_NEW_LC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_Temp_AMT_AMD_SWIFT", e);
    }
}

function SYM_IPLC_CAL_Temp_Amount_AMD() {
    try {
        if (document.MAINFORM.INC_AMT.value == 0 && document.MAINFORM.DEC_AMT.value == 0 && document.MAINFORM.NEW_POS_TOL.value == 0 && document.MAINFORM.NEW_NEG_TOL.value == 0) {
            document.MAINFORM.TEMP_LC_AMT.value = document.MAINFORM.LC_AMT.value;
            document.MAINFORM.TEMP_LC_BAL.value = document.MAINFORM.LC_BAL.value;
        } else {
            document.MAINFORM.TEMP_LC_AMT.value = document.MAINFORM.NEW_LC_AMT.value;
            document.MAINFORM.TEMP_LC_BAL.value = document.MAINFORM.NEW_LC_BAL.value;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_Temp_Amount_AMD", e);
    }
}

function SYM_IPLC_CAL_Temp_fields_AMD() {
    try {
        if (document.MAINFORM.NEW_ADDIT_COV_AMT.value != '') {
            document.MAINFORM.TEMP_ADDIT_COV_AMT.value = document.MAINFORM.NEW_ADDIT_COV_AMT.value;
        } else {
            document.MAINFORM.TEMP_ADDIT_COV_AMT.value = document.MAINFORM.ADD_AMT_COVRD.value;
        }

        if (document.MAINFORM.NEW_AMT_SPEC.value != '') {
            document.MAINFORM.TEMP_AMT_SPEC.value = document.MAINFORM.NEW_AMT_SPEC.value;
        } else {
            document.MAINFORM.TEMP_AMT_SPEC.value = document.MAINFORM.AMT_SPEC.value;
        }

        if (document.MAINFORM.NEW_BENE_ACNO.value != '') {
            document.MAINFORM.TEMP_BENE_ACNO.value = document.MAINFORM.NEW_BENE_ACNO.value;
        } else {
            document.MAINFORM.TEMP_BENE_ACNO.value = document.MAINFORM.BENE_AC_NO.value;
        }

        if (document.MAINFORM.NEW_BENE_AC_OFF_CD.value != '') {
            document.MAINFORM.TEMP_BENE_AC_OFCD.value = document.MAINFORM.NEW_BENE_AC_OFF_CD.value;
        } else {
            document.MAINFORM.TEMP_BENE_AC_OFCD.value = document.MAINFORM.BENE_AC_OFF_CODE.value;
        }
        if (document.MAINFORM.NEW_BENE_ADD1.value != '') {
            document.MAINFORM.TEMP_BENE_ADD1.value = document.MAINFORM.NEW_BENE_ADD1.value;
        } else {
            document.MAINFORM.TEMP_BENE_ADD1.value = document.MAINFORM.BENE_ADD1.value;
        }
        if (document.MAINFORM.NEW_BENE_ADD2.value != '') {
            document.MAINFORM.TEMP_BENE_ADD2.value = document.MAINFORM.NEW_BENE_ADD2.value;
        } else {
            document.MAINFORM.TEMP_BENE_ADD2.value = document.MAINFORM.BENE_ADD2.value;
        }
        if (document.MAINFORM.NEW_BENE_ADD3.value != '') {
            document.MAINFORM.TEMP_BENE_ADD3.value = document.MAINFORM.NEW_BENE_ADD3.value;
        } else {
            document.MAINFORM.TEMP_BENE_ADD3.value = document.MAINFORM.BENE_ADD3.value;
        }
        if (document.MAINFORM.NEW_BENE_CORR_MED.value != '') {
            document.MAINFORM.TEMP_BENE_CORR_MED.value = document.MAINFORM.NEW_BENE_CORR_MED.value;
        } else {
            document.MAINFORM.TEMP_BENE_CORR_MED.value = document.MAINFORM.BENE_CORR_MED.value;
        }
        if (document.MAINFORM.NEW_BENE_EMAIL.value != '') {
            document.MAINFORM.TEMP_BENE_EMAIL.value = document.MAINFORM.NEW_BENE_EMAIL.value;
        } else {
            document.MAINFORM.TEMP_BENE_EMAIL.value = document.MAINFORM.BENE_EMAIL.value;
        }
        if (document.MAINFORM.NEW_BENE_FAX.value != '') {
            document.MAINFORM.TEMP_BENE_FAX.value = document.MAINFORM.NEW_BENE_FAX.value;
        } else {
            document.MAINFORM.TEMP_BENE_FAX.value = document.MAINFORM.BENE_FAX.value;
        }
        if (document.MAINFORM.NEW_BENE_ID.value != '') {
            document.MAINFORM.TEMP_BENE_ID.value = document.MAINFORM.NEW_BENE_ID.value;
        } else {
            document.MAINFORM.TEMP_BENE_ID.value = document.MAINFORM.BENE_ID.value;
        }

        if (document.MAINFORM.NEW_BENE_LANG.value != '') {
            document.MAINFORM.TEMP_BENE_LANG.value = document.MAINFORM.NEW_BENE_LANG.value;
        } else {
            document.MAINFORM.TEMP_BENE_LANG.value = document.MAINFORM.BENE_LANG.value;
        }
        if (document.MAINFORM.NEW_BENE_MAIL_ADD.value != '') {
            document.MAINFORM.TEMP_BENE_MAIL_ADD.value = document.MAINFORM.NEW_BENE_MAIL_ADD.value;
        } else {
            document.MAINFORM.TEMP_BENE_MAIL_ADD.value = document.MAINFORM.BENE_MAIL_ADD.value;
        }
        if (document.MAINFORM.NEW_BENE_NM.value != '') {
            document.MAINFORM.TEMP_BENE_NM.value = document.MAINFORM.NEW_BENE_NM.value;
        } else {
            document.MAINFORM.TEMP_BENE_NM.value = document.MAINFORM.BENE_NM.value;
        }
        if (document.MAINFORM.NEW_BENE_NOTES.value != '') {
            document.MAINFORM.TEMP_BENE_NOTES.value = document.MAINFORM.NEW_BENE_NOTES.value;
        } else {
            document.MAINFORM.TEMP_BENE_NOTES.value = document.MAINFORM.BENE_NOTES.value;
        }
        if (document.MAINFORM.NEW_BENE_REF.value != '') {
            document.MAINFORM.TEMP_BENE_REF.value = document.MAINFORM.NEW_BENE_REF.value;
        } else {
            document.MAINFORM.TEMP_BENE_REF.value = document.MAINFORM.BENE_REF.value;
        }
        if (document.MAINFORM.NEW_BENE_TLX.value != '') {
            document.MAINFORM.TEMP_BENE_TLX.value = document.MAINFORM.NEW_BENE_TLX.value;
        } else {
            document.MAINFORM.TEMP_BENE_TLX.value = document.MAINFORM.BENE_TLX.value;
        }
        if (document.MAINFORM.NEW_BENE_AC_OFF_CD.value != '') {
            document.MAINFORM.TEMP_BENE_AC_OFCD.value = document.MAINFORM.NEW_BENE_AC_OFF_CD.value;
        } else {
            document.MAINFORM.TEMP_BENE_AC_OFCD.value = document.MAINFORM.BENE_AC_OFF_CODE.value;
        }
        if (document.MAINFORM.NEW_BENE_AC_OFF_CD.value != '') {
            document.MAINFORM.TEMP_BENE_REF.value = document.MAINFORM.NEW_BENE_REF.value;
        } else {
            document.MAINFORM.TEMP_BENE_REF.value = document.MAINFORM.BENE_REF.value;
        }
        if (document.MAINFORM.NEW_DEST_PLACE.value != '') {
            document.MAINFORM.TEMP_DEST_PLACE.value = document.MAINFORM.NEW_DEST_PLACE.value;
        } else {
            document.MAINFORM.TEMP_DEST_PLACE.value = document.MAINFORM.DEST_PLACE.value;
        }
        if (document.MAINFORM.NEW_DEST_PORT.value != '') {
            document.MAINFORM.TEMP_DEST_PORT.value = document.MAINFORM.NEW_DEST_PORT.value;
        } else {
            document.MAINFORM.TEMP_DEST_PORT.value = document.MAINFORM.DEST_PORT.value;
        }
        if (document.MAINFORM.NEW_EXPIRY_DT.value != '') {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
        } else {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
        }
        if (document.MAINFORM.NEW_EXPIRY_PLC.value != '') {
            document.MAINFORM.TEMP_EXPIRY_PLC_NEW.value = document.MAINFORM.NEW_EXPIRY_PLC.value;
        } else {
            document.MAINFORM.TEMP_EXPIRY_PLC_NEW.value = document.MAINFORM.EXPIRY_PLC.value;
        }
        if (document.MAINFORM.NEW_EXPIRY_PLC_NA.value != '') {
            document.MAINFORM.TEMP_EXPIRY_PLC_NARR.value = document.MAINFORM.NEW_EXPIRY_PLC_NA.value;
        } else {
            document.MAINFORM.TEMP_EXPIRY_PLC_NARR.value = document.MAINFORM.EXPIRY_PLC_NARR.value;
        }
        if (document.MAINFORM.NEW_INCOTERMS.value != '') {
            document.MAINFORM.TEMP_INCOTERMS.value = document.MAINFORM.NEW_INCOTERMS.value;
        } else {
            document.MAINFORM.TEMP_INCOTERMS.value = document.MAINFORM.INCOTERMS.value;
        }
        if (document.MAINFORM.NEW_LOAD_PLACE.value != '') {
            document.MAINFORM.TEMP_LOAD_PLACE.value = document.MAINFORM.NEW_LOAD_PLACE.value;
        } else {
            document.MAINFORM.TEMP_LOAD_PLACE.value = document.MAINFORM.LOAD_PLACE.value;
        }
        if (document.MAINFORM.NEW_LOAD_PORT.value != '') {
            document.MAINFORM.TEMP_LOAD_PORT.value = document.MAINFORM.NEW_LOAD_PORT.value;
        } else {
            document.MAINFORM.TEMP_LOAD_PORT.value = document.MAINFORM.LOAD_PORT.value;
        }
        if (document.MAINFORM.NEW_LTST_SHIP_DT.value != '') {
            document.MAINFORM.TEMP_LTST_SHIP_DT.value = document.MAINFORM.NEW_LTST_SHIP_DT.value;
        } else {
            document.MAINFORM.TEMP_LTST_SHIP_DT.value = document.MAINFORM.LTST_SHIP_DT.value;
        }
        if (document.MAINFORM.NEW_NEG_TOL.value != '' && document.MAINFORM.NEW_NEG_TOL.value != 0) {
            document.MAINFORM.TEMP_NEG_TOL.value = document.MAINFORM.NEW_NEG_TOL.value;
        } else {
            document.MAINFORM.TEMP_NEG_TOL.value = document.MAINFORM.NEG_TOL.value;
        }
        if (document.MAINFORM.NEW_PARTIAL_SHIP.value != '') {
            document.MAINFORM.TEMP_PARTIAL_SHIP.value = document.MAINFORM.NEW_PARTIAL_SHIP.value;
        } else {
            document.MAINFORM.TEMP_PARTIAL_SHIP.value = document.MAINFORM.PARTIAL_SHIP.value;
        }
        if (document.MAINFORM.NEW_PARTIAL_SHIP_NARR.value != '') {
            document.MAINFORM.TEMP_PART_SHIP_NA.value = document.MAINFORM.NEW_PARTIAL_SHIP_NARR.value;
        } else {
            document.MAINFORM.TEMP_PART_SHIP_NA.value = document.MAINFORM.PARTIAL_SHIP_NARR.value;
        }
        if (document.MAINFORM.NEW_POS_TOL.value != '' && document.MAINFORM.NEW_POS_TOL.value != 0) {
            document.MAINFORM.TEMP_POS_TOL.value = document.MAINFORM.NEW_POS_TOL.value;
        } else {
            document.MAINFORM.TEMP_POS_TOL.value = document.MAINFORM.POS_TOL.value;
        }
        if (document.MAINFORM.NEW_SHIP_PRD.value != '') {
            document.MAINFORM.TEMP_SHIP_PRD.value = document.MAINFORM.NEW_SHIP_PRD.value;
        } else {
            document.MAINFORM.TEMP_SHIP_PRD.value = document.MAINFORM.SHIP_PRD.value;
        }
        if (document.MAINFORM.NEW_TNSHIP.value != '') {
            document.MAINFORM.TEMP_TNSHIP.value = document.MAINFORM.NEW_TNSHIP.value;
        } else {
            document.MAINFORM.TEMP_TNSHIP.value = document.MAINFORM.TNSHIP.value;
        }
        if (document.MAINFORM.NEW_TNSHIP_NARR.value != '') {
            document.MAINFORM.TEMP_TNSHIP_NARR.value = document.MAINFORM.NEW_TNSHIP_NARR.value; // Utility Auto Fix Comments
        } else {
            document.MAINFORM.TEMP_TNSHIP_NARR.value = document.MAINFORM.TNSHIP_NARR.value;
        }
        if (document.MAINFORM.AMD_ADDIT_CONDITION.value != '') {
            document.MAINFORM.TEMP_ADDIT_CONDITION.value = document.MAINFORM.AMD_ADDIT_CONDITION.value;
        } else {
            document.MAINFORM.TEMP_ADDIT_CONDITION.value = document.MAINFORM.ADDIT_CONDITION.value;
        }
        if (document.MAINFORM.AMD_DESC_OF_GOODS.value != '') {
            document.MAINFORM.TEMP_DESC_OF_GOODS.value = document.MAINFORM.AMD_DESC_OF_GOODS.value;
        } else {
            document.MAINFORM.TEMP_DESC_OF_GOODS.value = document.MAINFORM.GOODS_DESC.value;
        }
        if (document.MAINFORM.AMD_DOC_REQ.value != '') {
            document.MAINFORM.TEMP_DOC_REQ_TRANSFER.value = document.MAINFORM.AMD_DOC_REQ.value;
        } else {
            document.MAINFORM.TEMP_DOC_REQ_TRANSFER.value = document.MAINFORM.DOC_REQ.value;
        }
        if (document.MAINFORM.NEW_FORM_OF_LC.value != '') {
            document.MAINFORM.TEMP_FORM_OF_LC.value = document.MAINFORM.NEW_FORM_OF_LC.value;
        } else {
            document.MAINFORM.TEMP_FORM_OF_LC.value = document.MAINFORM.FORM_OF_LC.value;
        }
        if (document.MAINFORM.NEW_APLB_RULE.value != '') {
            document.MAINFORM.TEMP_APLB_RULE_TRANSFOR.value = document.MAINFORM.NEW_APLB_RULE.value;
        } else {
            document.MAINFORM.TEMP_APLB_RULE_TRANSFOR.value = document.MAINFORM.APLB_RULE.value;
        }
        if (document.MAINFORM.NEW_APLB_RULE_NARR.value != '') {
            document.MAINFORM.TEMP_APLB_RULE_NARR_TRANSFOR.value = document.MAINFORM.NEW_APLB_RULE_NARR.value;
        } else {
            document.MAINFORM.TEMP_APLB_RULE_NARR_TRANSFOR.value = document.MAINFORM.APLB_RULE_NARR.value;
        }
        if (document.MAINFORM.NEW_AVAL_WT_BK_ADD1.value != '') {
            document.MAINFORM.TEMP_AVAL_WT_BK_ADD1.value = document.MAINFORM.NEW_AVAL_WT_BK_ADD1.value;
        } else {
            document.MAINFORM.TEMP_AVAL_WT_BK_ADD1.value = document.MAINFORM.AVAL_WT_BK_ADD1.value;
        }
        if (document.MAINFORM.NEW_AVAL_WT_BK_ADD2.value != '') {
            document.MAINFORM.TEMP_AVAL_WT_BK_ADD2.value = document.MAINFORM.NEW_AVAL_WT_BK_ADD2.value;
        } else {
            document.MAINFORM.TEMP_AVAL_WT_BK_ADD2.value = document.MAINFORM.AVAL_WT_BK_ADD2.value;
        }
        if (document.MAINFORM.NEW_AVAL_WT_BK_ADD3.value != '') {
            document.MAINFORM.TEMP_AVAL_WT_BK_ADD3.value = document.MAINFORM.NEW_AVAL_WT_BK_ADD3.value;
        } else {
            document.MAINFORM.TEMP_AVAL_WT_BK_ADD3.value = document.MAINFORM.AVAL_WT_BK_ADD3.value;
        }
        if (document.MAINFORM.NEW_AVAL_WT_BK_ID.value != '') {
            document.MAINFORM.TEMP_AVAL_WT_BK_ID.value = document.MAINFORM.NEW_AVAL_WT_BK_ID.value;
        } else {
            document.MAINFORM.TEMP_AVAL_WT_BK_ID.value = document.MAINFORM.AVAL_WT_BK_ID.value;
        }
        if (document.MAINFORM.NEW_AVAL_WT_BK_NM.value != '') {
            document.MAINFORM.TEMP_AVAL_WT_BK_NM.value = document.MAINFORM.NEW_AVAL_WT_BK_NM.value;
        } else {
            document.MAINFORM.TEMP_AVAL_WT_BK_NM.value = document.MAINFORM.AVAL_WT_BK_NM.value;
        }
        if (document.MAINFORM.NEW_AVAL_WT_BK_OPT.value != '') {
            document.MAINFORM.TEMP_AVAL_WT_BK_OPT.value = document.MAINFORM.NEW_AVAL_WT_BK_OPT.value;
        } else {
            document.MAINFORM.TEMP_AVAL_WT_BK_OPT.value = document.MAINFORM.AVAL_WT_BK_OPT.value;
        }
        if (document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value != '') {
            document.MAINFORM.TEMP_AVAL_WT_BK_SW_ADD.value = document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value;
        } else {
            document.MAINFORM.TEMP_AVAL_WT_BK_SW_ADD.value = document.MAINFORM.AVAL_WT_BK_SW_ADD.value;
        }
        if (document.MAINFORM.NEW_AVAL_WT_BK_SW_TAG.value != '') {
            document.MAINFORM.TEMP_AVAL_WT_BK_SW_TAG.value = document.MAINFORM.NEW_AVAL_WT_BK_SW_TAG.value;
        } else {
            document.MAINFORM.TEMP_AVAL_WT_BK_SW_TAG.value = document.MAINFORM.AVAL_WT_BK_SW_TAG.value;
        }
        if (document.MAINFORM.NEW_DRAFTS_AT.value != '') {
            document.MAINFORM.TEMP_DRAFTS_AT.value = document.MAINFORM.NEW_DRAFTS_AT.value;
        } else {
            document.MAINFORM.TEMP_DRAFTS_AT.value = document.MAINFORM.DRAFTS_AT.value;
            if(document.MAINFORM.NEW_AVAL_BY.value != document.MAINFORM.AVAL_BY.value){
            document.MAINFORM.TEMP_DRAFTS_AT.value = '';	
            }
        }
        if (document.MAINFORM.NEW_DRWE_ADD1.value != '') {
            document.MAINFORM.TEMP_DRWE_ADD1.value = document.MAINFORM.NEW_DRWE_ADD1.value;
        } else {
            document.MAINFORM.TEMP_DRWE_ADD1.value = document.MAINFORM.DRWE_ADD1.value;
        }
        if (document.MAINFORM.NEW_DRWE_ADD2.value != '') {
            document.MAINFORM.TEMP_DRWE_ADD2.value = document.MAINFORM.NEW_DRWE_ADD2.value;
        } else {
            document.MAINFORM.TEMP_DRWE_ADD2.value = document.MAINFORM.DRWE_ADD2.value;
        }
        if (document.MAINFORM.NEW_DRWE_ADD3.value != '') {
            document.MAINFORM.TEMP_DRWE_ADD3.value = document.MAINFORM.NEW_DRWE_ADD3.value;
        } else {
            document.MAINFORM.TEMP_DRWE_ADD3.value = document.MAINFORM.DRWE_ADD3.value;
        }
        if (document.MAINFORM.NEW_DRWE_ID.value != '') {
            document.MAINFORM.TEMP_DRWE_ID.value = document.MAINFORM.NEW_DRWE_ID.value;
        } else {
            document.MAINFORM.TEMP_DRWE_ID.value = document.MAINFORM.DRWE_ID.value;
        }
        if (document.MAINFORM.NEW_DRWE_NM.value != '') {
            document.MAINFORM.TEMP_DRWE_NM.value = document.MAINFORM.NEW_DRWE_NM.value;
        } else {
            document.MAINFORM.TEMP_DRWE_NM.value = document.MAINFORM.DRWE_NM.value;
        }
        if (document.MAINFORM.NEW_DRWE_SW_ADD.value != '') {
            document.MAINFORM.TEMP_DRWE_SW_ADD.value = document.MAINFORM.NEW_DRWE_SW_ADD.value;
        } else {
            document.MAINFORM.TEMP_DRWE_SW_ADD.value = document.MAINFORM.DRWE_SW_ADD.value;
        }
        if (document.MAINFORM.NEW_DRWE_SW_TAG.value != '') {
            document.MAINFORM.TEMP_DRWE_SW_TAG.value = document.MAINFORM.NEW_DRWE_SW_TAG.value;
        } else {
            document.MAINFORM.TEMP_DRWE_SW_TAG.value = document.MAINFORM.DRWE_SW_TAG.value;
        }
        if (document.MAINFORM.NEW_MIX_PMT_DETL.value != '') {
            document.MAINFORM.TEMP_MIX_PMT_DETL.value = document.MAINFORM.NEW_MIX_PMT_DETL.value;
        } else {
            document.MAINFORM.TEMP_MIX_PMT_DETL.value = document.MAINFORM.MIX_PMT_DETL.value;
            if(document.MAINFORM.NEW_AVAL_BY.value != document.MAINFORM.AVAL_BY.value){
            document.MAINFORM.TEMP_MIX_PMT_DETL.value = '';	
            }
        }
        if (document.MAINFORM.NEW_DEF_PMT_DET.value != '') {
            document.MAINFORM.TEMP_DEF_PMT_DET.value = document.MAINFORM.NEW_DEF_PMT_DET.value;
        } else {
            document.MAINFORM.TEMP_DEF_PMT_DET.value = document.MAINFORM.DEF_PMT_DET.value;
            if(document.MAINFORM.NEW_AVAL_BY.value != document.MAINFORM.AVAL_BY.value){
            document.MAINFORM.TEMP_DEF_PMT_DET.value = '';	
            }
        }
        if (document.MAINFORM.AMD_PAY_COND_TO_BENE.value != '') {
            document.MAINFORM.TEMP_PAY_COND_TO_BENE.value = document.MAINFORM.AMD_PAY_COND_TO_BENE.value;
        } else {
            document.MAINFORM.TEMP_PAY_COND_TO_BENE.value = document.MAINFORM.PAY_COND_TO_BENE.value;
        }
        if (document.MAINFORM.AMD_PAY_COND_TO_REV_BK.value != '') {
            document.MAINFORM.TEMP_PAY_COND_TO_REV_BK.value = document.MAINFORM.AMD_PAY_COND_TO_REV_BK.value;
        } else {
            document.MAINFORM.TEMP_PAY_COND_TO_REV_BK.value = document.MAINFORM.PAY_COND_TO_REV_BK.value;
        }
        if (document.MAINFORM.AMD_CHARGES.value != '') {
            document.MAINFORM.TEMP_CHARGES.value = document.MAINFORM.AMD_CHARGES.value;
        } else {
            document.MAINFORM.TEMP_CHARGES.value = document.MAINFORM.CHARGES.value;
        }
        if (document.MAINFORM.AMD_PRES_DAYS.value != 0) {
            document.MAINFORM.TEMP_PRES_DAYS.value = document.MAINFORM.AMD_PRES_DAYS.value;
        } else {
            document.MAINFORM.TEMP_PRES_DAYS.value = document.MAINFORM.PRES_DAYS.value;
        }
        if (document.MAINFORM.AMD_PRES_TYPE.value != '') {
            document.MAINFORM.TEMP_PRES_TYPE.value = document.MAINFORM.AMD_PRES_TYPE.value;
        } else {
            document.MAINFORM.TEMP_PRES_TYPE.value = document.MAINFORM.PRES_TYPE.value;
        }
        if (document.MAINFORM.AMD_PRES_PRD_TXT.value != '') {
            document.MAINFORM.TEMP_PRES_PRD_TXT.value = document.MAINFORM.AMD_PRES_PRD_TXT.value;
        } else {
            document.MAINFORM.TEMP_PRES_PRD_TXT.value = document.MAINFORM.PRES_PRD_TXT.value;
        }
        if (document.MAINFORM.NEW_CONF_INSTR.value != '') {
            document.MAINFORM.TEMP_CONF_INSTR.value = document.MAINFORM.NEW_CONF_INSTR.value;
        } else {
            document.MAINFORM.TEMP_CONF_INSTR.value = document.MAINFORM.CONF_INSTR.value;
        }
        if (document.MAINFORM.NEW_CONF_BK_ADD1.value != '') {
            document.MAINFORM.TEMP_CONF_BK_ADD1.value = document.MAINFORM.NEW_CONF_BK_ADD1.value;
        } else {
            document.MAINFORM.TEMP_CONF_BK_ADD1.value = document.MAINFORM.CONF_BK_ADD1.value;
        }
        if (document.MAINFORM.NEW_CONF_BK_ADD2.value != '') {
            document.MAINFORM.TEMP_CONF_BK_ADD2.value = document.MAINFORM.NEW_CONF_BK_ADD2.value;
        } else {
            document.MAINFORM.TEMP_CONF_BK_ADD2.value = document.MAINFORM.CONF_BK_ADD2.value;
        }
        if (document.MAINFORM.NEW_CONF_BK_ADD3.value != '') {
            document.MAINFORM.TEMP_CONF_BK_ADD3.value = document.MAINFORM.NEW_CONF_BK_ADD3.value;
        } else {
            document.MAINFORM.TEMP_CONF_BK_ADD3.value = document.MAINFORM.CONF_BK_ADD3.value;
        }
        if (document.MAINFORM.NEW_CONF_BK_ID.value != '') {
            document.MAINFORM.TEMP_CONF_BK_ID.value = document.MAINFORM.NEW_CONF_BK_ID.value;
        } else {
            document.MAINFORM.TEMP_CONF_BK_ID.value = document.MAINFORM.CONF_BK_ID.value;
        }
        if (document.MAINFORM.NEW_CONF_BK_NM.value != '') {
            document.MAINFORM.TEMP_CONF_BK_NM.value = document.MAINFORM.NEW_CONF_BK_NM.value;
        } else {
            document.MAINFORM.TEMP_CONF_BK_NM.value = document.MAINFORM.CONF_BK_NM.value;
        }
        if (document.MAINFORM.NEW_CONF_BK_SW_ADD.value != '') {
            document.MAINFORM.TEMP_CONF_BK_SW_ADD.value = document.MAINFORM.NEW_CONF_BK_SW_ADD.value;
        } else {
            document.MAINFORM.TEMP_CONF_BK_SW_ADD.value = document.MAINFORM.CONF_BK_SW_ADD.value;
        }
        if (document.MAINFORM.NEW_CONF_BK_SW_TAG.value != '') {
            document.MAINFORM.TEMP_CONF_BK_SW_TAG.value = document.MAINFORM.NEW_CONF_BK_SW_TAG.value;
        } else {
            document.MAINFORM.TEMP_CONF_BK_SW_TAG.value = document.MAINFORM.CONF_BK_SW_TAG.value;
        }
        if (document.MAINFORM.NEW_REIM_BK_AC_NO.value != '') {
            document.MAINFORM.TEMP_REIM_BK_AC_NO.value = document.MAINFORM.NEW_REIM_BK_AC_NO.value;
        } else {
            document.MAINFORM.TEMP_REIM_BK_AC_NO.value = document.MAINFORM.REIM_BK_AC_NO.value;
        }
        if (document.MAINFORM.NEW_REIM_BK_ADD1.value != '') {
            document.MAINFORM.TEMP_REIM_BK_ADD1.value = document.MAINFORM.NEW_REIM_BK_ADD1.value;
        } else {
            document.MAINFORM.TEMP_REIM_BK_ADD1.value = document.MAINFORM.REIM_BK_ADD1.value;
        }
        if (document.MAINFORM.NEW_REIM_BK_ADD2.value != '') {
            document.MAINFORM.TEMP_REIM_BK_ADD2.value = document.MAINFORM.NEW_REIM_BK_ADD2.value;
        } else {
            document.MAINFORM.TEMP_REIM_BK_ADD2.value = document.MAINFORM.REIM_BK_ADD2.value;
        }
        if (document.MAINFORM.NEW_REIM_BK_ADD3.value != '') {
            document.MAINFORM.TEMP_REIM_BK_ADD3.value = document.MAINFORM.NEW_REIM_BK_ADD3.value;
        } else {
            document.MAINFORM.TEMP_REIM_BK_ADD3.value = document.MAINFORM.REIM_BK_ADD3.value;
        }
        if (document.MAINFORM.NEW_REIM_BK_CHG_DESC.value != '') {
            document.MAINFORM.TEMP_REIM_BK_CHG_DESC.value = document.MAINFORM.NEW_REIM_BK_CHG_DESC.value;
        } else {
            document.MAINFORM.TEMP_REIM_BK_CHG_DESC.value = document.MAINFORM.REIM_BK_CHG_DESC.value;
        }
        if (document.MAINFORM.NEW_REIM_BK_CORR_MED.value != '') {
            document.MAINFORM.TEMP_REIM_BK_CORR_MED.value = document.MAINFORM.NEW_REIM_BK_CORR_MED.value;
        } else {
            document.MAINFORM.TEMP_REIM_BK_CORR_MED.value = document.MAINFORM.REIM_BK_CORR_MED.value;
        }
        if (document.MAINFORM.NEW_REIM_BK_ID.value != '') {
            document.MAINFORM.TEMP_REIM_BK_ID.value = document.MAINFORM.NEW_REIM_BK_ID.value;
        } else {
            document.MAINFORM.TEMP_REIM_BK_ID.value = document.MAINFORM.REIM_BK_ID.value;
        }
        if (document.MAINFORM.NEW_REIM_BK_MAIL_ADD.value != '') {
            document.MAINFORM.TEMP_REIM_BK_MAIL_ADD.value = document.MAINFORM.NEW_REIM_BK_MAIL_ADD.value;
        } else {
            document.MAINFORM.TEMP_REIM_BK_MAIL_ADD.value = document.MAINFORM.REIM_BK_MAIL_ADD.value;
        }
        if (document.MAINFORM.NEW_REIM_BK_NM.value != '') {
            document.MAINFORM.TEMP_REIM_BK_NM.value = document.MAINFORM.NEW_REIM_BK_NM.value;
        } else {
            document.MAINFORM.TEMP_REIM_BK_NM.value = document.MAINFORM.REIM_BK_NM.value;
        }
        if (document.MAINFORM.NEW_REIM_BK_OTH_CHG_NARR.value != '') {
            document.MAINFORM.TEMP_REIM_BK_OTH_CHG_NARR.value = document.MAINFORM.NEW_REIM_BK_OTH_CHG_NARR.value;
        } else {
            document.MAINFORM.TEMP_REIM_BK_OTH_CHG_NARR.value = document.MAINFORM.REIM_BK_OTH_CHG_NARR.value;
        }
        if (document.MAINFORM.NEW_REIM_BK_REF.value != '') {
            document.MAINFORM.TEMP_REIM_BK_REF.value = document.MAINFORM.NEW_REIM_BK_REF.value;
        } else {
            document.MAINFORM.TEMP_REIM_BK_REF.value = document.MAINFORM.REIM_BK_REF.value;
        }
        if (document.MAINFORM.NEW_REIM_BK_SW_ADD.value != '') {
            document.MAINFORM.TEMP_REIM_BK_SW_ADD.value = document.MAINFORM.NEW_REIM_BK_SW_ADD.value;
        } else {
            document.MAINFORM.TEMP_REIM_BK_SW_ADD.value = document.MAINFORM.REIM_BK_SW_ADD.value;
        }
        if (document.MAINFORM.NEW_REIM_BK_SW_TAG.value != '') {
            document.MAINFORM.TEMP_REIM_BK_SW_TAG.value = document.MAINFORM.NEW_REIM_BK_SW_TAG.value;
        } else {
            document.MAINFORM.TEMP_REIM_BK_SW_TAG.value = document.MAINFORM.REIM_BK_SW_TAG.value;
        }
        if (document.MAINFORM.NEW_REIM_NARR_TAG_77.value != '') {
            document.MAINFORM.TEMP_REIM_NARR_TAG_77.value = document.MAINFORM.NEW_REIM_NARR_TAG_77.value;
        } else {
            document.MAINFORM.TEMP_REIM_NARR_TAG_77.value = document.MAINFORM.REIM_NARR_TAG_77.value;
        }
        if (document.MAINFORM.NEW_APLB_RULE_40F.value != '') {
            document.MAINFORM.TEMP_APLB_RULE_40F.value = document.MAINFORM.NEW_APLB_RULE_40F.value;
        } else {
            document.MAINFORM.TEMP_APLB_RULE_40F.value = document.MAINFORM.APLB_RULE_40F.value;
        }
        if (document.MAINFORM.NEW_BK_TO_BK_INFO.value != '') {
            document.MAINFORM.TEMP_BK_TO_BK_INFO.value = document.MAINFORM.NEW_BK_TO_BK_INFO.value;
        } else {
            document.MAINFORM.TEMP_BK_TO_BK_INFO.value = document.MAINFORM.BK_TO_BK_INFO.value;
        }
        if (document.MAINFORM.AMD_INSTR_TO_PAY_BK.value != '') {
            document.MAINFORM.TEMP_INSTR_TO_PAY_BK.value = document.MAINFORM.AMD_INSTR_TO_PAY_BK.value;
        } else {
            document.MAINFORM.TEMP_INSTR_TO_PAY_BK.value = document.MAINFORM.INSTR_TO_PAY_BK.value;
        }
        if (document.MAINFORM.NEW_ADV_THU_BK_ADD1.value != '') {
            document.MAINFORM.TEMP_ADV_THU_BK_ADD1.value = document.MAINFORM.NEW_ADV_THU_BK_ADD1.value;
        } else {
            document.MAINFORM.TEMP_ADV_THU_BK_ADD1.value = document.MAINFORM.ADV_THU_BK_ADD1.value;
        }
        if (document.MAINFORM.NEW_ADV_THU_BK_ADD2.value != '') {
            document.MAINFORM.TEMP_ADV_THU_BK_ADD2.value = document.MAINFORM.NEW_ADV_THU_BK_ADD2.value;
        } else {
            document.MAINFORM.TEMP_ADV_THU_BK_ADD2.value = document.MAINFORM.ADV_THU_BK_ADD2.value;
        }
        if (document.MAINFORM.NEW_ADV_THU_BK_ADD3.value != '') {
            document.MAINFORM.TEMP_ADV_THU_BK_ADD3.value = document.MAINFORM.NEW_ADV_THU_BK_ADD3.value;
        } else {
            document.MAINFORM.TEMP_ADV_THU_BK_ADD3.value = document.MAINFORM.ADV_THU_BK_ADD3.value;
        }
        if (document.MAINFORM.NEW_ADV_THU_BK_ID.value != '') {
            document.MAINFORM.TEMP_ADV_THU_BK_ID.value = document.MAINFORM.NEW_ADV_THU_BK_ID.value;
        } else {
            document.MAINFORM.TEMP_ADV_THU_BK_ID.value = document.MAINFORM.ADV_THU_BK_ID.value;
        }
        if (document.MAINFORM.NEW_ADV_THU_BK_NM.value != '') {
            document.MAINFORM.TEMP_ADV_THU_BK_NM.value = document.MAINFORM.NEW_ADV_THU_BK_NM.value;
        } else {
            document.MAINFORM.TEMP_ADV_THU_BK_NM.value = document.MAINFORM.ADV_THU_BK_NM.value;
        }
        if (document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value != '') {
            document.MAINFORM.TEMP_ADV_THU_BK_SW_ADD.value = document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value;
        } else {
            document.MAINFORM.TEMP_ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value;
        }
        if (document.MAINFORM.NEW_ADV_THU_BK_SW_TAG.value != '') {
            document.MAINFORM.TEMP_ADV_THU_BK_SW_TAG.value = document.MAINFORM.NEW_ADV_THU_BK_SW_TAG.value;
        } else {
            document.MAINFORM.TEMP_ADV_THU_BK_SW_TAG.value = document.MAINFORM.ADV_THU_BK_SW_TAG.value;
        }
        if (document.MAINFORM.AMD_SEND_TO_RCV_INFO.value != '') {
            document.MAINFORM.TEMP_SEND_TO_RCV_INFO_MT707.value = document.MAINFORM.AMD_SEND_TO_RCV_INFO.value;
        } else {
            document.MAINFORM.TEMP_SEND_TO_RCV_INFO_MT707.value = document.MAINFORM.SEND_TO_RCV_INFO.value;
        }
        if (document.MAINFORM.NEW_AVAL_BY.value != '') {
            document.MAINFORM.TEMP_AVAL_BY.value = document.MAINFORM.NEW_AVAL_BY.value;
        } else {
            document.MAINFORM.TEMP_AVAL_BY.value = document.MAINFORM.AVAL_BY.value;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CAL_Temp_fields_AMD", e);
    }
}

function SYM_IPLC_CHG_PARTIES() {
    try {
        //Add by jane 20081111
        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM");
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHG_PARTIES", e);
    }
}

function SYM_IPLC_CHG_mapLocal_Foreign_Cust() {
    try {
        //Add by jane 20081111

        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        if (SYS_ORG_FUNCTION_SHORT_NAME == "IPLC_PAY_ACCEPT" || SYS_ORG_FUNCTION_SHORT_NAME == "IPLC_PAY_AT_MATU" || SYS_ORG_FUNCTION_SHORT_NAME == "IPLC_PAY_ACP_DIS") {
            document.MAINFORM.TEMP_BENE_ID.value = 'BENEFORCHG';
            Chg.Screen.mapForeignCust("TEMP_BENE_ID", "BENE_NM", "PRES_CCY", "C_MAIN_REF");
        } else {
            Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM");
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHG_mapLocal_Foreign_Cust", e);
    }
}

function SYM_IPLC_CHG_map_Cust_SMBC() {
    try {
        //Add by jack 20120905
        if (document.MAINFORM.FORACOF_NM.value != '') {
            Chg.Screen.mapLocalCust("FORACOF_ID", "FORACOF_NM");
        } else {
            Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM"); //add by amy in 20140217
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "IPLC_PAY_ACCEPT" || SYS_ORG_FUNCTION_SHORT_NAME == "IPLC_PAY_AT_MATU" || SYS_ORG_FUNCTION_SHORT_NAME == "IPLC_PAY_ACP_DIS") {
            document.MAINFORM.TEMP_BENE_ID.value = 'BENEFORCHG';
            Chg.Screen.mapForeignCust("TEMP_BENE_ID", "BENE_NM", "PRES_CCY", "C_MAIN_REF");
        } else {
            Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM");
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHG_map_Cust_SMBC", e);
    }
}

function SYM_IPLC_CHK_AC_WT_BK_SW_TAG() {
    try {
        if (document.MAINFORM.AC_WT_BK_SW_ADD.value != '') {
            document.MAINFORM.AC_WT_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.AC_WT_BK_NM.value != '' || document.MAINFORM.AC_WT_BK_ADD1.value != '' || document.MAINFORM.AC_WT_BK_ADD2.value != '' || document.MAINFORM.AC_WT_BK_ADD3.value != '') && document.MAINFORM.AC_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AC_WT_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.AC_WT_BK_NM.value == '' && document.MAINFORM.AC_WT_BK_ADD1.value == '' && document.MAINFORM.AC_WT_BK_ADD2.value == '' && document.MAINFORM.AC_WT_BK_ADD3.value == '' && document.MAINFORM.AC_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AC_WT_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_AC_WT_BK_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_AC_WT_BK_SW_TAG_705() {
    try {
        if (document.MAINFORM.AC_WT_BK_SW_ADD_MT705.value != '') {
            document.MAINFORM.AC_WT_BK_SW_TAG_705.value = 'A';
        }
        if ((document.MAINFORM.AC_WT_BK_NM_MT705.value != '' || document.MAINFORM.AC_WT_BK_ADD1_MT705.value != '' || document.MAINFORM.AC_WT_BK_ADD2_MT705.value != '' || document.MAINFORM.AC_WT_BK_ADD3_MT705.value != '') && document.MAINFORM.AC_WT_BK_SW_ADD_MT705.value == '') {
            document.MAINFORM.AC_WT_BK_SW_TAG_705.value = 'D';
        }
        if (document.MAINFORM.AC_WT_BK_NM_MT705.value == '' && document.MAINFORM.AC_WT_BK_ADD1_MT705.value == '' && document.MAINFORM.AC_WT_BK_ADD2_MT705.value == '' && document.MAINFORM.AC_WT_BK_ADD3_MT705.value == '' && document.MAINFORM.AC_WT_BK_SW_ADD_MT705.value == '') {
            document.MAINFORM.AC_WT_BK_SW_TAG_705.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_AC_WT_BK_SW_TAG_705", e);
    }
}

function SYM_IPLC_CHK_ADV_BK_SW_TAG() {
    try {
        if (document.MAINFORM.ADV_BK_SW_ADD.value != '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.ADV_BK_NM.value != '' || document.MAINFORM.ADV_BK_ADD1.value != '' || document.MAINFORM.ADV_BK_ADD2.value != '' || document.MAINFORM.ADV_BK_ADD3.value != '') && document.MAINFORM.ADV_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ADV_BK_NM.value == '' && document.MAINFORM.ADV_BK_ADD1.value == '' && document.MAINFORM.ADV_BK_ADD2.value == '' && document.MAINFORM.ADV_BK_ADD3.value == '' && document.MAINFORM.ADV_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_ADV_BK_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_ADV_THU_SW_TAG() {
    try {
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value != '') {
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.ADV_THU_BK_NM.value != '' || document.MAINFORM.ADV_THU_BK_ADD1.value != '' || document.MAINFORM.ADV_THU_BK_ADD2.value != '' || document.MAINFORM.ADV_THU_BK_ADD3.value != '') && document.MAINFORM.ADV_THU_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ADV_THU_BK_NM.value == '' && document.MAINFORM.ADV_THU_BK_ADD1.value == '' && document.MAINFORM.ADV_THU_BK_ADD2.value == '' && document.MAINFORM.ADV_THU_BK_ADD3.value == '' && document.MAINFORM.ADV_THU_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = '';
        }
        if (document.MAINFORM.ADV_THU_BK_ADD1.value != '' && document.MAINFORM.ADV_THU_BK_ADD2.value == '' && document.MAINFORM.ADV_THU_BK_ADD3.value == '') {
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = 'B';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_ADV_THU_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_APPL_BK_SW_TAG() {
    try {
        if (document.MAINFORM.APPL_BK_SW_ADD.value != '') {
            document.MAINFORM.APPL_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.APPL_BK_NM.value != '' || document.MAINFORM.APPL_BK_ADD1.value != '' || document.MAINFORM.APPL_BK_ADD2.value != '' || document.MAINFORM.APPL_BK_ADD3.value != '') && document.MAINFORM.APPL_BK_SW_ADD.value == '') {
            document.MAINFORM.APPL_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.APPL_BK_NM.value == '' && document.MAINFORM.APPL_BK_ADD1.value == '' && document.MAINFORM.APPL_BK_ADD2.value == '' && document.MAINFORM.APPL_BK_ADD3.value == '' && document.MAINFORM.APPL_BK_SW_ADD.value == '') {
            document.MAINFORM.APPL_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_APPL_BK_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_AVAL_WT_BK_OPT() {
    try {
        var AVAL_WT_BK_OPT; // Utility Auto Fix Comments
        AVAL_WT_BK_OPT = document.MAINFORM.AVAL_WT_BK_OPT.value;

        switch (AVAL_WT_BK_OPT) {
            case 'Any Bank':
                SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'M');
                document.MAINFORM.AVAL_WT_BK_NM.value = 'Any Bank';
                document.MAINFORM.AVAL_WT_BK_ID.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD1.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD2.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD3.value = '';
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = '';
                document.MAINFORM.AVAL_WT_BK_NOTES.value = '';
                break;

            case 'Advising Bank':
                SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'O');
                document.MAINFORM.AVAL_WT_BK_ID.value = document.MAINFORM.ADV_BK_ID.value;
                document.MAINFORM.AVAL_WT_BK_NM.value = document.MAINFORM.ADV_BK_NM.value;
                document.MAINFORM.AVAL_WT_BK_ADD1.value = document.MAINFORM.ADV_BK_ADD1.value;
                document.MAINFORM.AVAL_WT_BK_ADD2.value = document.MAINFORM.ADV_BK_ADD2.value;
                document.MAINFORM.AVAL_WT_BK_ADD3.value = document.MAINFORM.ADV_BK_ADD3.value;
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value;
                document.MAINFORM.AVAL_WT_BK_NOTES.value = document.MAINFORM.ADV_BK_NOTES.value;
                break;
            case 'Advise Thru Bank':
                SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'O');
                document.MAINFORM.AVAL_WT_BK_ID.value = document.MAINFORM.ADV_THU_BK_ID.value;
                document.MAINFORM.AVAL_WT_BK_NM.value = document.MAINFORM.ADV_THU_BK_NM.value;
                document.MAINFORM.AVAL_WT_BK_ADD1.value = document.MAINFORM.ADV_THU_BK_ADD1.value;
                document.MAINFORM.AVAL_WT_BK_ADD2.value = document.MAINFORM.ADV_THU_BK_ADD2.value;
                document.MAINFORM.AVAL_WT_BK_ADD3.value = document.MAINFORM.ADV_THU_BK_ADD3.value;
                document.MAINFORM.AVAL_WT_BK_NOTES.value = document.MAINFORM.ADV_THU_BK_NOTES.value;
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value;
                break;
            case 'Opening Bank':
                SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'O');
                document.MAINFORM.AVAL_WT_BK_ID.value = '';
                document.MAINFORM.AVAL_WT_BK_NM.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD1.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD2.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD3.value = '';
                document.MAINFORM.AVAL_WT_BK_NOTES.value = '';
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = 'CSBANKZZ80A';
                SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
                SYM_IPLC_SQL_AVAL_WT_BK_SW_ADD();
                break;
            case 'Confirming Bank':
                SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'O');
                document.MAINFORM.AVAL_WT_BK_ID.value = '';
                document.MAINFORM.AVAL_WT_BK_NM.value = 'Confirming Bank';
                document.MAINFORM.AVAL_WT_BK_ADD1.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD2.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD3.value = '';
                document.MAINFORM.AVAL_WT_BK_NOTES.value = '';
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = '';
                break; // Utility Auto Fix Comments
            default:
                SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'O');
                document.MAINFORM.AVAL_WT_BK_ID.value = '';
                document.MAINFORM.AVAL_WT_BK_NM.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD1.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD2.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD3.value = '';
                document.MAINFORM.AVAL_WT_BK_NOTES.value = '';
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = '';

        }
        //modified at 20090203 by jane bug 916
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_AVAL_WT_BK_OPT", e);
    }
}

function SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value != '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.AVAL_WT_BK_NM.value != '' || document.MAINFORM.AVAL_WT_BK_ADD1.value != '' || document.MAINFORM.AVAL_WT_BK_ADD2.value != '' || document.MAINFORM.AVAL_WT_BK_ADD3.value != '') && document.MAINFORM.AVAL_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.AVAL_WT_BK_NM.value == '' && document.MAINFORM.AVAL_WT_BK_ADD1.value == '' && document.MAINFORM.AVAL_WT_BK_ADD2.value == '' && document.MAINFORM.AVAL_WT_BK_ADD3.value == '' && document.MAINFORM.AVAL_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_Bank_Reference() {
    try {
        if (document.MAINFORM.ADV_BK_REF.value == '') {
            document.MAINFORM.ADV_BK_REF.value = 'NONREF';
        }

        if (document.MAINFORM.ADV_THU_BK_REF.value == '') {
            document.MAINFORM.ADV_THU_BK_REF.value = 'NONREF';
        }

        if (document.MAINFORM.APPL_BK_REF.value == '') {
            document.MAINFORM.APPL_BK_REF.value = 'NONREF';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_Bank_Reference", e);
    }
}

function SYM_IPLC_CHK_CONF_BK_SW_TAG() {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value != '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.CONF_BK_NM.value != '' || document.MAINFORM.CONF_BK_ADD1.value != '' || document.MAINFORM.CONF_BK_ADD2.value != '' || document.MAINFORM.CONF_BK_ADD3.value != '') && document.MAINFORM.CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.CONF_BK_NM.value == '' && document.MAINFORM.CONF_BK_ADD1.value == '' && document.MAINFORM.CONF_BK_ADD2.value == '' && document.MAINFORM.CONF_BK_ADD3.value == '' && document.MAINFORM.CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_CONF_BK_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_DRWE_SW_TAG() {
    try {
        if (document.MAINFORM.DRWE_SW_ADD.value != '') {
            document.MAINFORM.DRWE_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.DRWE_NM.value != '' || document.MAINFORM.DRWE_ADD1.value != '' || document.MAINFORM.DRWE_ADD2.value != '' || document.MAINFORM.DRWE_ADD3.value != '') && document.MAINFORM.DRWE_SW_ADD.value == '') {
            document.MAINFORM.DRWE_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.DRWE_NM.value == '' && document.MAINFORM.DRWE_ADD1.value == '' && document.MAINFORM.DRWE_ADD2.value == '' && document.MAINFORM.DRWE_ADD3.value == '' && document.MAINFORM.DRWE_SW_ADD.value == '') {
            document.MAINFORM.DRWE_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_DRWE_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_INCOTERMS_FREI() {
    try {
        if (document.MAINFORM.INCOTERMS.value == 'FOB' && document.MAINFORM.TRANS_DOCS_FREI.value == 'MARKED FREIGHT PREPAID') {
            SYS_CheckError(document.MAINFORM.TRANS_DOCS_FREI, 'Please beware that FOB Incoterms are not compatible with Transport Document MARKED FREIGHT PREPAID!');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_INCOTERMS_FREI", e);
    }
}

function SYM_IPLC_CHK_INCOTERMS_INSU() {
    try {
        if ((document.MAINFORM.INCOTERMS.value == 'CIF' || document.MAINFORM.INCOTERMS.value == 'CIP') && document.MAINFORM.INS_DOCS_CB.checked == false) {
            alert("Insurance Document is required if INCOTERMS is CIF or CIP"); // Utility Auto Fix Comments
            document.MAINFORM.INS_DOCS_CB.checked = true; // Utility Auto Fix Comments
            SYM_IPLC_ShowInsuranceDocument();
            SYM_IPLC_DocumentPresentation();
        }

        //if (document.MAINFORM.INCOTERMS.value == 'FOB'){
        //        alert("Please beware that FOB INCOTEMRS are not compatible with Transport Document:'Marked Freight Prepaid'")
        //        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_INCOTERMS_INSU", e);
    }
}

function SYM_IPLC_CHK_ISSUE_BK_MAIL() {
    try {
        if (document.MAINFORM.ISSUE_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_MAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_MAIL_ADD, 'O');
        }
        if (document.MAINFORM.ISSUE_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_ISSUE_BK_MAIL", e);
    }
}

function SYM_IPLC_CHK_ISSUE_BK_SW_TAG() {
    try {
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value != '') {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.ISSUE_BK_NM.value != '' || document.MAINFORM.ISSUE_BK_ADD1.value != '' || document.MAINFORM.ISSUE_BK_ADD2.value != '' || document.MAINFORM.ISSUE_BK_ADD3.value != '') && document.MAINFORM.ISSUE_BK_SW_ADD.value == '') {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ISSUE_BK_NM.value == '' && document.MAINFORM.ISSUE_BK_SW_ADD.value == '' && document.MAINFORM.ISSUE_BK_ADD1.value == '' && document.MAINFORM.ISSUE_BK_ADD2.value == '' && document.MAINFORM.ISSUE_BK_ADD3.value == '') {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_ISSUE_BK_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_MT740_sent() {
    try {
        var NEW_REIM_BK_AUTH_REQ = document.MAINFORM.NEW_REIM_BK_AUTH_REQ.value;
        var NEW_REIM_BK_CORR_MED = document.MAINFORM.NEW_REIM_BK_CORR_MED.value;
        var SENT_FLG = document.MAINFORM.SENT_FLG.value;
        var DETRMNTL_FLG = document.MAINFORM.DETRMNTL_FLG.value;
        if (SENT_FLG == 'YES') {
            if (NEW_REIM_BK_AUTH_REQ != 'Yes' || NEW_REIM_BK_CORR_MED != 'SWIFT' || DETRMNTL_FLG != 'No') {
                var retvalue = window.confirm("MT740 will not be generated is because New Reimbursement Authority Required is not Yes / New Correspondence Medium is not SWIFT / Detrimental Flag is not No.");
                if (retvalue) {
                    return true;
                } else {
                    return false;
                }
            }
            if (NEW_REIM_BK_AUTH_REQ == 'Yes' && NEW_REIM_BK_CORR_MED == 'SWIFT' && DETRMNTL_FLG == 'No') {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_MT740_sent", e);
    }
}

function SYM_IPLC_CHK_NEW_ADV_THU_BK_SW_TAG() {
    try {
        if (document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value != '') {
            document.MAINFORM.NEW_ADV_THU_BK_SW_TAG.value = 'A';
        }

        if ((document.MAINFORM.NEW_ADV_THU_BK_NM.value != '' || document.MAINFORM.NEW_ADV_THU_BK_ADD1.value != '' || document.MAINFORM.NEW_ADV_THU_BK_ADD2.value != '' || document.MAINFORM.NEW_ADV_THU_BK_ADD3.value != '') && document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value == '') {
            document.MAINFORM.NEW_ADV_THU_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.NEW_ADV_THU_BK_NM.value == '' && document.MAINFORM.NEW_ADV_THU_BK_ADD1.value == '' && document.MAINFORM.NEW_ADV_THU_BK_ADD2.value == '' && document.MAINFORM.NEW_ADV_THU_BK_ADD3.value == '' && document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value == '') {
            document.MAINFORM.NEW_ADV_THU_BK_SW_TAG.value = '';
        }
        if (document.MAINFORM.NEW_ADV_THU_BK_ADD1.value != '' && document.MAINFORM.NEW_ADV_THU_BK_ADD2.value == '' && document.MAINFORM.NEW_ADV_THU_BK_ADD3.value == '') {
            document.MAINFORM.NEW_ADV_THU_BK_SW_TAG.value = 'B';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_NEW_ADV_THU_BK_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_NEW_AVAL_BY() {
    try {
    if(((document.MAINFORM.NEW_AVAL_WT_BK_OPT.value!=''||document.MAINFORM.NEW_AVAL_WT_BK_NM.value!=''||document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value!='')&&document.MAINFORM.NEW_AVAL_BY.value=='')||((document.MAINFORM.NEW_AVAL_WT_BK_OPT.value==''&&document.MAINFORM.NEW_AVAL_WT_BK_NM.value==''&&document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value=='')&&document.MAINFORM.NEW_AVAL_BY.value!='')){ 
	       alert('Amend Avalalbe By and Amend Available With Bank must be both present or both empty!');
        	return false;
        }else{
        	return true;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_NEW_AVAL_BY", e);
    }
}

function SYM_IPLC_CHK_NEW_AVAL_WT_BK_OPT() {
    try {
        var NEW_AVAL_WT_BK_OPT;
        NEW_AVAL_WT_BK_OPT = document.MAINFORM.NEW_AVAL_WT_BK_OPT.value;

        switch (NEW_AVAL_WT_BK_OPT) {
            case 'Any Bank':
                SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_NM, 'M');
                document.MAINFORM.NEW_AVAL_WT_BK_NM.value = 'Any Bank';
                document.MAINFORM.NEW_AVAL_WT_BK_ID.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_ADD1.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_ADD2.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_ADD3.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value = '';
                break;

            case 'Advising Bank':
                SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_NM, 'O');
                document.MAINFORM.NEW_AVAL_WT_BK_ID.value = document.MAINFORM.ADV_BK_ID.value;
                document.MAINFORM.NEW_AVAL_WT_BK_NM.value = document.MAINFORM.ADV_BK_NM.value;
                document.MAINFORM.NEW_AVAL_WT_BK_ADD1.value = document.MAINFORM.ADV_BK_ADD1.value;
                document.MAINFORM.NEW_AVAL_WT_BK_ADD2.value = document.MAINFORM.ADV_BK_ADD2.value;
                document.MAINFORM.NEW_AVAL_WT_BK_ADD3.value = document.MAINFORM.ADV_BK_ADD3.value;
                document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value;
                break;

            case 'Advise Thru Bank':
                SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_NM, 'O');
                document.MAINFORM.NEW_AVAL_WT_BK_ID.value = document.MAINFORM.ADV_THU_BK_ID.value;
                document.MAINFORM.NEW_AVAL_WT_BK_NM.value = document.MAINFORM.ADV_THU_BK_NM.value;
                document.MAINFORM.NEW_AVAL_WT_BK_ADD1.value = document.MAINFORM.ADV_THU_BK_ADD1.value;
                document.MAINFORM.NEW_AVAL_WT_BK_ADD2.value = document.MAINFORM.ADV_THU_BK_ADD2.value;
                document.MAINFORM.NEW_AVAL_WT_BK_ADD3.value = document.MAINFORM.ADV_THU_BK_ADD3.value;
                document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value;
                break;

            case 'Opening Bank':
                SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_NM, 'O');
                document.MAINFORM.NEW_AVAL_WT_BK_ID.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_NM.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_ADD1.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_ADD2.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_ADD3.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value = 'PTSABMAAXXX';
                SYM_IPLC_CHK_NEW_AVAL_WT_BK_SW_TAG();
                SYM_IPLC_SQL_NEW_AVAL_WT_BK_SW_ADD();
                break;

            case 'Confirming Bank':
                SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_NM, 'O');
                document.MAINFORM.NEW_AVAL_WT_BK_ID.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_NM.value = 'Confirming Bank';
                document.MAINFORM.NEW_AVAL_WT_BK_ADD1.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_ADD2.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_ADD3.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value = '';
                break;

            default:
                SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_NM, 'O');
                document.MAINFORM.NEW_AVAL_WT_BK_ID.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_NM.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_ADD1.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_ADD2.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_ADD3.value = '';
                document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_NEW_AVAL_WT_BK_OPT", e);
    }
}

function SYM_IPLC_CHK_NEW_AVAL_WT_BK_SW_TAG() {
    try {
        if (document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value != '') {
            document.MAINFORM.NEW_AVAL_WT_BK_SW_TAG.value = 'A';
            SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD, "M");
        }
        if ((document.MAINFORM.NEW_AVAL_WT_BK_NM.value != '' || document.MAINFORM.NEW_AVAL_WT_BK_ADD1.value != '' || document.MAINFORM.NEW_AVAL_WT_BK_ADD2.value != '' || document.MAINFORM.NEW_AVAL_WT_BK_ADD3.value != '') && document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.NEW_AVAL_WT_BK_SW_TAG.value = 'D';
            SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD, "O");
        }
        if (document.MAINFORM.NEW_AVAL_WT_BK_NM.value == '' && document.MAINFORM.NEW_AVAL_WT_BK_ADD1.value == '' && document.MAINFORM.NEW_AVAL_WT_BK_ADD2.value == '' && document.MAINFORM.NEW_AVAL_WT_BK_ADD3.value == '' && document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.NEW_AVAL_WT_BK_SW_TAG.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD, "O");
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_NEW_AVAL_WT_BK_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_NEW_CONF_BK_SW_TAG() {
    try {
        if (document.MAINFORM.NEW_CONF_BK_SW_ADD.value != '') {
            document.MAINFORM.NEW_CONF_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.NEW_CONF_BK_NM.value != '' || document.MAINFORM.NEW_CONF_BK_ADD1.value != '' || document.MAINFORM.NEW_CONF_BK_ADD2.value != '' || document.MAINFORM.NEW_CONF_BK_ADD3.value != '') && document.MAINFORM.NEW_CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.NEW_CONF_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.NEW_CONF_BK_NM.value == '' && document.MAINFORM.NEW_CONF_BK_ADD1.value == '' && document.MAINFORM.NEW_CONF_BK_ADD2.value == '' && document.MAINFORM.NEW_CONF_BK_ADD3.value == '' && document.MAINFORM.NEW_CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.NEW_CONF_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_NEW_CONF_BK_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_NEW_DRWE_SW_TAG() {
    try {
        if (document.MAINFORM.NEW_DRWE_SW_ADD.value != '') {
            document.MAINFORM.NEW_DRWE_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.NEW_DRWE_NM.value != '' || document.MAINFORM.NEW_DRWE_ADD1.value != '' || document.MAINFORM.NEW_DRWE_ADD2.value != '' || document.MAINFORM.NEW_DRWE_ADD3.value != '') && document.MAINFORM.NEW_DRWE_SW_ADD.value == '') {
            document.MAINFORM.NEW_DRWE_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.NEW_DRWE_NM.value == '' && document.MAINFORM.NEW_DRWE_ADD1.value == '' && document.MAINFORM.NEW_DRWE_ADD2.value == '' && document.MAINFORM.NEW_DRWE_ADD3.value == '' && document.MAINFORM.NEW_DRWE_SW_ADD.value == '') {
            document.MAINFORM.NEW_DRWE_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_NEW_DRWE_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_NEW_EXPIRY() {
    try {
        if((document.MAINFORM.NEW_EXPIRY_DT.value==''&&document.MAINFORM.NEW_EXPIRY_PLC.value!='')||(document.MAINFORM.NEW_EXPIRY_DT.value!=''&&document.MAINFORM.NEW_EXPIRY_PLC.value=='')){
        	alert('New Expiry Date and New Expiry Place must be both present or both empty!');
        	return false;
        }else{
        	return true;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_NEW_EXPIRY", e);
    }
}

function SYM_IPLC_CHK_NEW_LCAMTBAL() {
    try {
        if (document.MAINFORM.INC_AMT.value == 0 && document.MAINFORM.DEC_AMT.value == 0 && (document.MAINFORM.NEW_NEG_TOL.value == 0 || document.MAINFORM.NEW_NEG_TOL.value == '') && (document.MAINFORM.NEW_POS_TOL.value == 0 || document.MAINFORM.NEW_POS_TOL.value == '')) {
            document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.NEW_LC_AMT.value);
            document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.NEW_LC_BAL.value);
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_NEW_LCAMTBAL", e);
    }
}

function SYM_IPLC_CHK_NEW_REIM_BK_AUTH_REQ() {
    try {
        if (document.MAINFORM.NEW_REIM_BK_AUTH_REQ.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.NEW_APLB_RULE_40F, 'M');
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_CHG_DESC, 'M');
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_AUTH_REQ, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_CHG_DESC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_REF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_OTH_CHG_NARR, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BK_TO_BK_INFO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_NARR_TAG_77, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_MAIL_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_CORR_MED, 'P');
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_40F, 'P');
            SYM_IPLC_CHK_NEW_REIM_BK_CORR_MED();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_CORR_MED, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_APLB_RULE_40F, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_CHG_DESC, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_AUTH_REQ, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_CHG_DESC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_REF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_OTH_CHG_NARR, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BK_TO_BK_INFO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_NARR_TAG_77, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_MAIL_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_CORR_MED, 'P');
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_40F, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_NEW_REIM_BK_AUTH_REQ", e);
    }
}

function SYM_IPLC_CHK_NEW_REIM_BK_CORR_MED() {
    try {
        if (document.MAINFORM.NEW_REIM_BK_AUTH_REQ.value == 'Yes' && document.MAINFORM.NEW_REIM_BK_CORR_MED.value == 'None') {
            document.MAINFORM.NEW_REIM_BK_CORR_MED.value = "SWIFT"; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_NEW_REIM_BK_CORR_MED", e);
    }
}

function SYM_IPLC_CHK_NEW_REIM_BK_SW_TAG() {
    try {
        if (document.MAINFORM.NEW_REIM_BK_SW_ADD.value != '') {
            document.MAINFORM.NEW_REIM_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.NEW_REIM_BK_NM.value != '' || document.MAINFORM.NEW_REIM_BK_ADD1.value != '' || document.MAINFORM.NEW_REIM_BK_ADD2.value != '' || document.MAINFORM.NEW_REIM_BK_ADD3.value != '') && document.MAINFORM.NEW_REIM_BK_SW_ADD.value == '') {
            document.MAINFORM.NEW_REIM_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.NEW_REIM_BK_NM.value == '' && document.MAINFORM.NEW_REIM_BK_ADD1.value == '' && document.MAINFORM.NEW_REIM_BK_ADD2.value == '' && document.MAINFORM.NEW_REIM_BK_ADD3.value == '' && document.MAINFORM.NEW_REIM_BK_SW_ADD.value == '') {
            document.MAINFORM.NEW_REIM_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_NEW_REIM_BK_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_REIM_BK_AUTH_REQ() {
    try {
        if (document.MAINFORM.REIM_BK_AUTH_REQ.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_CORR_MED, 'M');
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_40F, 'M');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_CHG_DESC, 'M');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_SW_ADD, 'M');
            SYM_IPLC_CHK_REIM_BK_CORR_MED();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_CORR_MED, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_40F, 'O');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_CHG_DESC, 'O');
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_SW_ADD, 'O');
        }
        SYM_IPLC_REIM_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_REIM_BK_AUTH_REQ", e);
    }
}

function SYM_IPLC_CHK_REIM_BK_CORR_MED() {
    try {
        if (document.MAINFORM.REIM_BK_AUTH_REQ.value == 'Yes' && document.MAINFORM.REIM_BK_CORR_MED.value == 'None') {
            //SYS_CheckError(document.MAINFORM.REIM_BK_CORR_MED,"The value cannot be set to None because Reimbursement Authority Required is Yes");
            document.MAINFORM.REIM_BK_CORR_MED.value = "SWIFT"; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_REIM_BK_CORR_MED", e);
    }
}

function SYM_IPLC_CHK_REIM_BK_SW_TAG() {
    try {
        if (document.MAINFORM.REIM_BK_SW_ADD.value != '') {
            document.MAINFORM.REIM_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.REIM_BK_NM.value != '' || document.MAINFORM.REIM_BK_ADD1.value != '' || document.MAINFORM.REIM_BK_ADD2.value != '' || document.MAINFORM.REIM_BK_ADD3.value != '') && document.MAINFORM.REIM_BK_SW_ADD.value == '') {
            document.MAINFORM.REIM_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.REIM_BK_NM.value == '' && document.MAINFORM.REIM_BK_ADD1.value == '' && document.MAINFORM.REIM_BK_ADD2.value == '' && document.MAINFORM.REIM_BK_ADD3.value == '' && document.MAINFORM.REIM_BK_SW_ADD.value == '') {
            document.MAINFORM.REIM_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_REIM_BK_SW_TAG", e);
    }
}

function SYM_IPLC_CHK_TRANS_DOCS_FREI() {
    try {
        var INCO; // Utility Auto Fix Comments
        INCO = document.MAINFORM.INCOTERMS.value;
        if (INCO == 'EXW' || INCO == 'FAS' || INCO == 'FOB') {
            document.MAINFORM.TRANS_DOCS_FREI.value = 'MARKED FREIGHT COLLECT';
        } else {
            document.MAINFORM.TRANS_DOCS_FREI.value = 'MARKED FREIGHT PREPAID';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_TRANS_DOCS_FREI", e);
    }
}

function SYM_IPLC_CHK_TRANS_DOCS_TYPE() {
    try {
        if (document.MAINFORM.TRANS_DOCS_TYPE.value == 'AIR TRANSPORT DOCUMENT' && document.MAINFORM.TRANS_DOCS_CB.checked == true) {
            document.MAINFORM.TRACER_DATE.style.visibility = "visible";
        } else {
            document.MAINFORM.TRACER_DATE.style.visibility = "hidden";
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CHK_TRANS_DOCS_TYPE", e);
    }
}

function SYM_IPLC_CONFIRM_CALL() {
    try {
        // Add by Jack on 20080903 for Voucher Genereate 
        if (typeof Chg == "object") {
            SYT_CHG_VOUCHER();
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CONFIRM_CALL", e);
    }
}

function SYM_IPLC_CalM_TEMP_N90_21() {
    try {
        // Add by Jack on 20080905 
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.PRES_BK_REF.value;
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_CalM_TEMP_N90_21", e);
    }
}

function SYM_IPLC_Cal_DRAWING_REF(ref) {
    try {
        var NO_OF_DRAW; // Utility Auto Fix Comments
        // Add by Jack on 20080905 
        NO_OF_DRAW = SYS_BeInt(document.MAINFORM.NO_OF_DRAW.value);

        if (NO_OF_DRAW < 10) {
            ref = '/0' + NO_OF_DRAW;
        } else {
            ref = '/' + NO_OF_DRAW;
        }

        document.MAINFORM.DRAWING_REF.value = document.MAINFORM.C_MAIN_REF.value + ref;
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_DRAWING_REF", e);
    }
}

function SYM_IPLC_Cal_GOODS_DESC_ADD_INCO() {
    try {
        var GOODS; // Utility Auto Fix Comments
        var NEW_INCOTERMS; // Utility Auto Fix Comments
        var OLD_INCOTERMS; // Utility Auto Fix Comments
        OLD_INCOTERMS = document.MAINFORM.TEMP_DEST_PORT.value;
        NEW_INCOTERMS = document.MAINFORM.INCOTERM_INST.value;
        GOODS = document.MAINFORM.GOODS_DESC.value;

        if (OLD_INCOTERMS.length > 0 && GOODS.indexOf(OLD_INCOTERMS) > -1) {
            document.MAINFORM.GOODS_DESC.value = GOODS.replace(OLD_INCOTERMS, NEW_INCOTERMS);
        } else {
            document.MAINFORM.GOODS_DESC.value = GOODS + "\r\n" + NEW_INCOTERMS;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_GOODS_DESC_ADD_INCO", e);
    }
}

function SYM_IPLC_Cal_LC_BAL() {
    try {
        var LC_BAL; // Utility Auto Fix Comments
        var NEW_LC_BAL; // Utility Auto Fix Comments
        var PRES_AMT; // Utility Auto Fix Comments
        var TEMP_LC_BAL; // Utility Auto Fix Comments
        // Add by Jack on 20080905 
        TEMP_LC_BAL = SYS_BeFloat(document.MAINFORM.TEMP_LC_BAL.value);
        PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        LC_BAL = TEMP_LC_BAL - PRES_AMT;
        NEW_LC_BAL = Math.max(LC_BAL, 0);

        document.MAINFORM.LC_BAL.value = NEW_LC_BAL;
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_LC_BAL", e);
    }
}

function SYM_IPLC_Cal_NEW_BENE_ID() {
    try {
        if (document.MAINFORM.NEW_BENE_ID.value == '') {
            document.MAINFORM.NEW_BENE_NM.value = '';
            document.MAINFORM.NEW_BENE_ADD1.value = '';
            document.MAINFORM.NEW_BENE_ADD2.value = '';
            document.MAINFORM.NEW_BENE_ADD3.value = '';
            document.MAINFORM.NEW_BENE_CORR_MED.value = 'None';
            document.MAINFORM.NEW_BENE_EMAIL.value = '';
            document.MAINFORM.NEW_BENE_ACNO.value = '';
            document.MAINFORM.NEW_BENE_AC_OFF_CD.value = '';
            document.MAINFORM.NEW_BENE_FAX.value = '';
            document.MAINFORM.NEW_BENE_LANG.value = 'English';
            document.MAINFORM.NEW_BENE_REF.value = '';
            document.MAINFORM.NEW_BENE_TLX.value = '';
            document.MAINFORM.NEW_BENE_MAIL_ADD.value = '';
            document.MAINFORM.NEW_BENE_NOTES.value = '';
            SYM_IPLC_Cal_NEW_BENE_ID_back();
        } else {
            SYS_GetCUBK('NEW_BENE_ID', document.MAINFORM.NEW_BENE_ID.name, SYM_IPLC_Cal_NEW_BENE_ID_back);
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_NEW_BENE_ID", e);
    }
}

function SYM_IPLC_Cal_NEW_BENE_ID_back() {
    try {
        SYM_IPLC_NEW_BENE_MAIL_ADD();
        SYT_Init_Notes(document.MAINFORM.NEW_BENE_NOTES.name);
        SYM_IPLC_CAL_NEW_BENE_ADD_back();
        SYM_IPLC_CAL_NEW_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_NEW_BENE_ID_back", e);
    }
}

function SYM_IPLC_Cal_NO_OF_DRAW() {
    try {
        var NO_OF_DRAW; // Utility Auto Fix Comments
        NO_OF_DRAW = SYS_BeInt(document.MAINFORM.NO_OF_DRAW.value);

        if (NO_OF_DRAW == "" || NO_OF_DRAW == 0) {
            document.MAINFORM.NO_OF_DRAW.value = 1;
        } else {
            document.MAINFORM.NO_OF_DRAW.value = NO_OF_DRAW + 1;
        }
        SYM_IPLC_Cal_DRAWING_REF(document.MAINFORM.NO_OF_DRAW.value);
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_NO_OF_DRAW", e);
    }
}

function SYM_IPLC_Cal_PRES_BAL() {
    try {
        var PRES_AMT; // Utility Auto Fix Comments
        // Add by Jack on 20080905 
        PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        document.MAINFORM.PRES_BAL.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, PRES_AMT);
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_PRES_BAL", e);
    }
}

function SYM_IPLC_Cal_PRES_BK_ID() {
    try {
        // Add by Jack on 20080905 
        if (document.MAINFORM.PRES_BK_ID.value == '') {
            document.MAINFORM.PRES_BK_NM.value = '';
            document.MAINFORM.PRES_BK_ADD1.value = '';
            document.MAINFORM.PRES_BK_ADD2.value = '';
            document.MAINFORM.PRES_BK_ADD3.value = '';
            document.MAINFORM.PRES_BK_MAIL_ADD.value = '';
            document.MAINFORM.PRES_BK_LANG.value = 'English';
            document.MAINFORM.PRES_BK_CORR_MED.value = 'None';
            document.MAINFORM.PRES_BK_EMAIL.value = '';
            document.MAINFORM.PRES_BK_FAX.value = '';
            document.MAINFORM.PRES_BK_TLX.value = '';
            document.MAINFORM.PRES_BK_SW_TAG.value = '';
            document.MAINFORM.PRES_BK_SW_ADD.value = '';
            document.MAINFORM.PRES_BK_AC_NO.value = '';
            document.MAINFORM.PRES_BK_AC_OFF_CODE.value = '';
            document.MAINFORM.PRES_BK_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_POST_ADD_BTN, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_POST_ADD_BTN, 'O');
            if (document.MAINFORM.PRES_BK_ID_BTN.value == 'BANK') {
                SYS_GetCUBK('PRES_BK_ID', document.MAINFORM.PRES_BK_ID.name, 'SYM_IPLC_Cal_PRES_BK_ID_back'); // Utility Auto Fix Comments
            } else if (document.MAINFORM.PRES_BK_ID_BTN.value == 'CUST') {
                SYS_GetCUBK('PRES_CUST_ID', document.MAINFORM.PRES_BK_ID.name, 'SYM_IPLC_Cal_PRES_BK_ID_back'); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_PRES_BK_ID", e);
    }
}

function SYM_IPLC_Cal_PRES_BK_ID_back() {
    try {
        // Add by Jack on 20080905 
        //SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYM_IPLC_MPO_PRES_CORR_MED();
        SYM_IPLC_MPO_PRES_BK_ADD_BTN();
        if (document.MAINFORM.PRES_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.PRES_BK_SW_ADD.value = document.MAINFORM.PRES_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_PRES_BK_ID_back", e);
    }
}

function SYM_IPLC_Cal_PRES_BK_SW_TAG() {
    try {
        // Add by jane at 20090206 for swift tag
        if (document.MAINFORM.PRES_BK_SW_ADD.value != '') {
            document.MAINFORM.PRES_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.PRES_BK_NM.value != '' || document.MAINFORM.PRES_BK_ADD1.value != '' || document.MAINFORM.PRES_BK_ADD2.value != '' || document.MAINFORM.PRES_BK_ADD3.value != '') && document.MAINFORM.PRES_BK_SW_ADD.value == '') {
            document.MAINFORM.PRES_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.PRES_BK_NM.value == '' && document.MAINFORM.PRES_BK_ADD1.value == '' && document.MAINFORM.PRES_BK_ADD2.value == '' && document.MAINFORM.PRES_BK_ADD3.value == '' && document.MAINFORM.PRES_BK_SW_ADD.value == '') {
            document.MAINFORM.PRES_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_PRES_BK_SW_TAG", e);
    }
}

function SYM_IPLC_Cal_PRES_INFO_BY_DOCPB() {
    try {
        var DOC_PRES_BY; // Utility Auto Fix Comments
        // Add by Jack on 20080905
        DOC_PRES_BY = document.MAINFORM.DOC_PRES_BY.value;
        if (DOC_PRES_BY == 'Beneficiary' || DOC_PRES_BY == '') {
            document.MAINFORM.PRES_BK_ID_BTN.value = 'CUST'; //edit by jane on 20081001
            document.MAINFORM.PRES_BK_ID.value = document.MAINFORM.BENE_ID.value;
            document.MAINFORM.PRES_BK_NM.value = document.MAINFORM.BENE_NM.value;
            document.MAINFORM.PRES_BK_ADD1.value = document.MAINFORM.BENE_ADD1.value;
            document.MAINFORM.PRES_BK_ADD2.value = document.MAINFORM.BENE_ADD2.value;
            document.MAINFORM.PRES_BK_ADD3.value = document.MAINFORM.BENE_ADD3.value;
            document.MAINFORM.PRES_BK_LANG.value = document.MAINFORM.BENE_LANG.value;
            document.MAINFORM.PRES_BK_MAIL_ADD.value = document.MAINFORM.BENE_MAIL_ADD.value;
            document.MAINFORM.PRES_BK_CORR_MED.value = document.MAINFORM.BENE_CORR_MED.value;
            document.MAINFORM.PRES_BK_EMAIL.value = document.MAINFORM.BENE_EMAIL.value;
            document.MAINFORM.PRES_BK_FAX.value = document.MAINFORM.BENE_FAX.value;
            document.MAINFORM.PRES_BK_TLX.value = document.MAINFORM.BENE_TLX.value;
            document.MAINFORM.PRES_BK_AC_OFF_CODE.value = document.MAINFORM.BENE_AC_OFF_CODE.value;
            document.MAINFORM.PRES_BK_NOTES.value = document.MAINFORM.BENE_NOTES.value;
            document.MAINFORM.PRES_BK_AC_NO.value = document.MAINFORM.BENE_AC_NO.value;
            document.MAINFORM.PRES_BK_SW_ADD.value = '';
            document.MAINFORM.PRES_BK_SW_TAG.value = 'D';
        } else if (DOC_PRES_BY == 'Advising Bank') {
            document.MAINFORM.PRES_BK_ID_BTN.value = 'BANK';
            document.MAINFORM.PRES_BK_ID.value = document.MAINFORM.ADV_BK_ID.value;
            document.MAINFORM.PRES_BK_NM.value = document.MAINFORM.ADV_BK_NM.value;
            document.MAINFORM.PRES_BK_ADD1.value = document.MAINFORM.ADV_BK_ADD1.value;
            document.MAINFORM.PRES_BK_ADD2.value = document.MAINFORM.ADV_BK_ADD2.value;
            document.MAINFORM.PRES_BK_ADD3.value = document.MAINFORM.ADV_BK_ADD3.value;
            document.MAINFORM.PRES_BK_MAIL_ADD.value = document.MAINFORM.ADV_BK_MAIL_ADD.value;
            document.MAINFORM.PRES_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value;
            document.MAINFORM.PRES_BK_SW_TAG.value = document.MAINFORM.ADV_BK_SW_TAG.value;
            document.MAINFORM.PRES_BK_CORR_MED.value = document.MAINFORM.ADV_BK_CORR_MED.value;
            document.MAINFORM.PRES_BK_TLX.value = document.MAINFORM.ADV_BK_TLX.value;
            document.MAINFORM.PRES_BK_NOTES.value = document.MAINFORM.ADV_BK_NOTES.value;
            document.MAINFORM.PRES_BK_AC_NO.value = '';
            document.MAINFORM.PRES_BK_FAX.value = '';
            document.MAINFORM.PRES_BK_EMAIL.value = '';
            document.MAINFORM.PRES_BK_AC_NO.value = '';
            document.MAINFORM.PRES_BK_AC_OFF_CODE.value = '';
        } else if (DOC_PRES_BY == 'Advise Through Bank') {
            document.MAINFORM.PRES_BK_ID_BTN.value = 'BANK';
            document.MAINFORM.PRES_BK_ID.value = document.MAINFORM.ADV_THU_BK_ID.value;
            document.MAINFORM.PRES_BK_NM.value = document.MAINFORM.ADV_THU_BK_NM.value;
            document.MAINFORM.PRES_BK_ADD1.value = document.MAINFORM.ADV_THU_BK_ADD1.value;
            document.MAINFORM.PRES_BK_ADD2.value = document.MAINFORM.ADV_THU_BK_ADD2.value;
            document.MAINFORM.PRES_BK_ADD3.value = document.MAINFORM.ADV_THU_BK_ADD3.value;
            document.MAINFORM.PRES_BK_MAIL_ADD.value = document.MAINFORM.ADV_THU_BK_MAIL_ADD.value;
            document.MAINFORM.PRES_BK_SW_TAG.value = document.MAINFORM.ADV_THU_BK_SW_TAG.value;
            document.MAINFORM.PRES_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value;
            document.MAINFORM.PRES_BK_CORR_MED.value = document.MAINFORM.ADV_THU_BK_CORR_MED.value;
            document.MAINFORM.PRES_BK_TLX.value = document.MAINFORM.ADV_THU_BK_TLX.value;
            document.MAINFORM.PRES_BK_NOTES.value = document.MAINFORM.ADV_THU_BK_NOTES.value;
            document.MAINFORM.PRES_BK_AC_NO.value = '';
            document.MAINFORM.PRES_BK_AC_OFF_CODE.value = '';
            document.MAINFORM.PRES_BK_FAX.value = '';
            document.MAINFORM.PRES_BK_EMAIL.value = '';
        }
        SYM_IPLC_Cal_PRES_BK_ID_back();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_PRES_INFO_BY_DOCPB", e);
    }
}

function SYM_IPLC_Cal_PRES_MAIL_ADD() {
    try {
        SYS_InqCUBK_byCondition('PRES_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_PRES_MAIL_ADD", e);
    }
}

function SYM_IPLC_Cal_PRES_MAIL_ORDER_NO() {
    try {
        var PRES_BK_ID; // Utility Auto Fix Comments
        var PRES_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        // Add by Jack on 20080918 
        //PRES_BK_ORDER_NO = document.MAINFORM.PRES_BK_ORDER_POST.value;
        //PRES_BK_ID = document.MAINFORM.PRES_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + PRES_BK_ORDER_NO + " AND C_MAIN_REF = '" + PRES_BK_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "PRES_BK_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_Cal_PRES_MAIL_ORDER_NO_18', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_PRES_MAIL_ORDER_NO", e);
    }
}

function SYM_IPLC_Cal_PRES_MULTI_ADD() {
    try {
        SYS_InqCUBK_byCondition('PRES_MULTI_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_PRES_MULTI_ADD", e);
    }
}

function SYM_IPLC_Cal_PRES_MULTI_ORDER_NO() {
    try {
        var PRES_BK_ID; // Utility Auto Fix Comments
        var PRES_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        // Add by Jack on 20080918 
        //PRES_BK_ORDER_NO = document.MAINFORM.PRES_BK_ORDER_NO.value;
        //PRES_BK_ID = document.MAINFORM.PRES_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + PRES_BK_ORDER_NO + " AND C_MAIN_REF = '" + PRES_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "PRES_BK_NM;PRES_BK_ADD1;PRES_BK_ADD2;PRES_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_Cal_PRES_MULTI_ORDER_NO_19', '1');
        SYM_IPLC_Cal_PRES_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_PRES_MULTI_ORDER_NO", e);
    }
}

function SYM_IPLC_Cal_RCV_CORR_SW_TAG() {
    try {
        //Add by jane at 20090206 for checking swift tag
        if (document.MAINFORM.RCV_CORR_BK_SW_ADD.value != '') {
            document.MAINFORM.RCV_CORR_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.RCV_CORR_BK_NM.value != '' || document.MAINFORM.RCV_CORR_BK_ADD1.value != '' || document.MAINFORM.RCV_CORR_BK_ADD2.value != '' || document.MAINFORM.RCV_CORR_BK_ADD3.value != '') && document.MAINFORM.RCV_CORR_BK_SW_ADD.value == '') {
            document.MAINFORM.RCV_CORR_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.RCV_CORR_BK_NM.value == '' && document.MAINFORM.RCV_CORR_BK_ADD2.value == '' && document.MAINFORM.RCV_CORR_BK_ADD3.value == '' && document.MAINFORM.RCV_CORR_BK_ADD1.value == '' && document.MAINFORM.RCV_CORR_BK_SW_ADD.value == '') {
            document.MAINFORM.RCV_CORR_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_RCV_CORR_SW_TAG", e);
    }
}

function SYM_IPLC_Cal_SEND_CORR_SW_TAG() {
    try {
        //Add by jane at 20090206 for checking swift tag

        if (document.MAINFORM.SEND_CORR_BK_SW_ADD.value != '') {
            document.MAINFORM.SEND_CORR_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.SEND_CORR_BK_NM.value != '' || document.MAINFORM.SEND_CORR_BK_ADD1.value != '' || document.MAINFORM.SEND_CORR_BK_ADD2.value != '' || document.MAINFORM.SEND_CORR_BK_ADD3.value != '') && document.MAINFORM.SEND_CORR_BK_SW_ADD.value == '') {
            document.MAINFORM.SEND_CORR_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.SEND_CORR_BK_NM.value == '' && document.MAINFORM.SEND_CORR_BK_ADD1.value == '' && document.MAINFORM.SEND_CORR_BK_ADD2.value == '' & document.MAINFORM.SEND_CORR_BK_ADD3.value == '' && document.MAINFORM.SEND_CORR_BK_SW_ADD.value == '') {
            document.MAINFORM.SEND_CORR_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_SEND_CORR_SW_TAG", e);
    }
}

function SYM_IPLC_Cal_SW_TAG(arr_BIC) {
    try {
        var i; // Utility Auto Fix Comments
        var sBKID; // Utility Auto Fix Comments
        var sBKName; // Utility Auto Fix Comments
        var sTagName; // Utility Auto Fix Comments
        for (i = 0; i < arr_BIC.length; i++) { // Utility Auto Fix Comments
            sBKID = arr_BIC[i].name.replace("_SW_ADD", "_ID");
            sBKName = arr_BIC[i].name.replace("_ADD", "_NM");
            sTagName = arr_BIC[i].name.replace("_ADD", "_TAG");

            if (MAINFORM.elements[sBKID].value != "") {
                if (arr_BIC[i].value.length > 0) {
                    MAINFORM.elements[sTagName].value = "A";
                } else {
                    if (sBKName.value.length > 0) {
                        MAINFORM.elements[sTagName].value = "D";
                    } else {
                        MAINFORM.elements[sTagName].value = "";
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_SW_TAG", e);
    }
}

function SYM_IPLC_Cal_TOTAL_AMT() {
    try {
        var ADDIT_AMT; // Utility Auto Fix Comments
        var CHG_DEDUCTED; // Utility Auto Fix Comments
        var PRES_AMT; // Utility Auto Fix Comments
        var PRES_BK_CHGS; // Utility Auto Fix Comments
        var TOTAL_AMT; // Utility Auto Fix Comments
        // Add by Jack on 20080905 
        PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        ADDIT_AMT = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        CHG_DEDUCTED = SYS_BeFloat(document.MAINFORM.CHGS_DEDUCTED.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        TOTAL_AMT = PRES_AMT + ADDIT_AMT - CHG_DEDUCTED + PRES_BK_CHGS;
        document.MAINFORM.TOTAL_AMT.value = TOTAL_AMT;
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Cal_TOTAL_AMT", e);
    }
}

function SYM_IPLC_Change_INCOTERMS_INSTR() {
    try {
        if (document.MAINFORM.INCOTERMS.value != '') {
            document.MAINFORM.INCOTERM_INST.style.visibility = 'visible';
        } else {
            document.MAINFORM.INCOTERM_INST.style.visibility = 'hidden';
            document.MAINFORM.INCOTERM_INST.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Change_INCOTERMS_INSTR", e);
    }
}

function SYM_IPLC_Chg_AMEND_COMM() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            arr = ['IPLC_AMEND_COMM'];
            amt = EEHtml.getElementById('LC_BAL').value;
            ccy = EEHtml.getElementById('LC_CCY').value;
            Chg.calculate(arr, ccy, amt);
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_AMEND_COMM", e);
    }
}

function SYM_IPLC_Chg_CANCEL_CHG() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IPLC_CANCEL_CHG'];
        amt = EEHtml.getElementById('LC_BAL').value;
        ccy = EEHtml.getElementById('LC_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_CANCEL_CHG", e);
    }
}

function SYM_IPLC_Chg_Calculation_Other() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IPLC_OTHER_CHG'];
        amt = EEHtml.getElementById('LC_BAL').value;
        ccy = EEHtml.getElementById('LC_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_Calculation_Other", e);
    }
}

function SYM_IPLC_Chg_DISCREP_COLL() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IPLC_DISCREP_COLL'];
        amt = EEHtml.getElementById('LC_BAL').value;
        ccy = EEHtml.getElementById('LC_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_DISCREP_COLL", e);
    }
}

function SYM_IPLC_Chg_Init_FOR_Charge() {
    try {
        // Add By jane for Charge 
        if ("PM||MM||KP".indexOf(SYS_FUNCTION_TYPE) > -1) {
            CHG_setAllCollCcy(SYS_LOCAL_CCY); //add by sunny for charge voucher
            SYT_Set_TRXCCY2CHG(); //add by sunny for charge voucher
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE; //for #1189
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_Init_FOR_Charge", e);
    }
}

function SYM_IPLC_Chg_OpeningComm() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (document.MAINFORM.ISSUE_DT.value != '' && document.MAINFORM.EXPIRY_DT.value != '') {
            arr = ['IPLC_OPEN_COMM'];
            amt = EEHtml.getElementById('LC_BAL').value;
            ccy = EEHtml.getElementById('LC_CCY').value;
            Chg.calculate(arr, ccy, amt, document.MAINFORM.ISSUE_DT.value, document.MAINFORM.EXPIRY_DT.value);

        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_OpeningComm", e);
    }
}

function SYM_IPLC_Chg_PRE_ADV() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            arr = ['IPLC_PRE-ADV_COMM'];
            amt = EEHtml.getElementById('LC_BAL').value;
            ccy = EEHtml.getElementById('LC_CCY').value;
            Chg.calculate(arr, ccy, amt);
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_PRE_ADV", e);
    }
}

function SYM_IPLC_Chg_Postageand() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IPLC_POST_CHG'];
        amt = EEHtml.getElementById('LC_BAL').value;
        ccy = EEHtml.getElementById('LC_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_Postageand", e);
    }
}

function SYM_IPLC_Chg_REL_GOODS_CHG() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IPLC_REL_GOODS_CHG'];
        amt = EEHtml.getElementById('LC_BAL').value;
        ccy = EEHtml.getElementById('LC_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_REL_GOODS_CHG", e);
    }
}

function SYM_IPLC_Chg_SWIFT_CHG() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            arr = ['IPLC_SWIFT_CHG'];
            amt = EEHtml.getElementById('LC_BAL').value;
            ccy = EEHtml.getElementById('LC_CCY').value;
            Chg.calculate(arr, ccy, amt);
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_SWIFT_CHG", e);
    }
}

function SYM_IPLC_Chg_SpecialCourier() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IPLC_COURIER_CHG'];
        amt = EEHtml.getElementById('LC_BAL').value;
        ccy = EEHtml.getElementById('LC_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_SpecialCourier", e);
    }
}

function SYM_IPLC_Chg_SpecialHandlingFee() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IPLC_HANDLING_COMM'];
        amt = EEHtml.getElementById('LC_BAL').value;
        ccy = EEHtml.getElementById('LC_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_SpecialHandlingFee", e);
    }
}

function SYM_IPLC_Chg_Transfer_Comm() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && document.MAINFORM.ISSUE_DT.value != '' && document.MAINFORM.EXPIRY_DT.value != '') {
            arr = ['IPLC_TRANSFER_COMM'];
            if (SYT_FUNC_SHORT_NAME() == 'NoteAddCharges') {
                amt = 0;
            } else {
                amt = EEHtml.getElementById('LC_BAL').value;
            }
            ccy = EEHtml.getElementById('LC_CCY').value;
            Chg.calculate(arr, ccy, amt, document.MAINFORM.ISSUE_DT.value, document.MAINFORM.EXPIRY_DT.value);

        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_Transfer_Comm", e);
    }
}

function SYM_IPLC_Chg_UTIL_DEF_CHG() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IPLC_UTIL_DEF_CHG'];
        amt = EEHtml.getElementById('LC_BAL').value;
        ccy = EEHtml.getElementById('LC_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_UTIL_DEF_CHG", e);
    }
}

function SYM_IPLC_Chg_UTIL_SIGHT_CHG() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (document.MAINFORM.ISSUE_DT.value != '' && document.MAINFORM.EXPIRY_DT.value != '') {
            arr = ['IPLC_UTIL_SIGHT_CHG'];
            amt = EEHtml.getElementById('LC_BAL').value;
            ccy = EEHtml.getElementById('LC_CCY').value;
            Chg.calculate(arr, ccy, amt, document.MAINFORM.ISSUE_DT.value, document.MAINFORM.EXPIRY_DT.value);
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chg_UTIL_SIGHT_CHG", e);
    }
}

function SYM_IPLC_Chk_CONF_INSTR() {
    try {
        if (document.MAINFORM.CONF_INSTR.value == "CONFIRM") {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M');
        } else if (document.MAINFORM.CONF_INSTR.value == 'WITHOUT') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chk_CONF_INSTR", e);
    }
}

function SYM_IPLC_Chk_TRANS_DOC_APL() {
    try {
        if (document.MAINFORM.TRANS_DOCS_APPL.value == 'NOTIFY APPLICANT AND BROKER') {
            document.MAINFORM.BROKER_NM.style.visibility = "visible"; // Utility Auto Fix Comments
            document.MAINFORM.BROKER_ADD.style.visibility = "visible"; // Utility Auto Fix Comments
        } else {
            document.MAINFORM.BROKER_NM.style.visibility = "hidden"; // Utility Auto Fix Comments
            document.MAINFORM.BROKER_ADD.style.visibility = "hidden"; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Chk_TRANS_DOC_APL", e);
    }
}

function SYM_IPLC_DOC_STAT_SG() {
    try {
        //if(document.MAINFORM.DOC_STAT.value=='Under Shipping Guarantee')
        //                        {
        //
        //                        SYT_ChangeFldClass(document.MAINFORM.SG_BIN,'O');
        //                        SYT_ChangeFldClass(document.MAINFORM.SG_NO,'M');
        //                        }
        //                        else
        //                        {
        //
        //                        SYT_ChangeFldClass(document.MAINFORM.SG_BIN,'P');
        //                        SYT_ChangeFldClass(document.MAINFORM.SG_NO,'P');
        //                        document.MAINFORM.SG_NO.value='';
        //                        document.MAINFORM.SG_AMT.value='';
        //                        document.MAINFORM.SG_CCY.value='';
        //                        }
        //                        
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_DOC_STAT_SG", e);
    }
}

function SYM_IPLC_Disable_DOC() {
    try {
        SYT_DisableDivClass('F_div');
        document.MAINFORM.COMM_INV_CB.disabled = "disabled";
        document.MAINFORM.TRANS_DOCS_CB.disabled = "disabled";
        document.MAINFORM.PACK_LIST_CB.disabled = "disabled";
        document.MAINFORM.INS_DOCS_CB.disabled = "disabled";
        document.MAINFORM.CERT_ORIG_CB.disabled = "disabled";
        document.MAINFORM.BEN_CERT_CB.disabled = "disabled";
        document.MAINFORM.CERT_QTY_CB.disabled = "disabled";
        document.MAINFORM.CERT_ANALY_CB.disabled = "disabled";
        document.MAINFORM.CERT_WEIG_CB.disabled = "disabled";
        document.MAINFORM.CERT_EXPORT_CB.disabled = "disabled";
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Disable_DOC", e);
    }
}

function SYM_IPLC_DocumentPresentation() {
    try {
        var APPL; // Utility Auto Fix Comments
        var BEN_TEXT; // Utility Auto Fix Comments
        var BRKADD; // Utility Auto Fix Comments
        var BRKNM; // Utility Auto Fix Comments
        var CONS; // Utility Auto Fix Comments
        var COrig; // Utility Auto Fix Comments
        var CType; // Utility Auto Fix Comments
        var FREI; // Utility Auto Fix Comments
        var ORIG; // Utility Auto Fix Comments
        var TRCDT; // Utility Auto Fix Comments
        var a; // Utility Auto Fix Comments
        var b; // Utility Auto Fix Comments
        var c; // Utility Auto Fix Comments
        var d; // Utility Auto Fix Comments
        var e1; // Utility Auto Fix Comments
        var f; // Utility Auto Fix Comments
        var g; // Utility Auto Fix Comments
        var h; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var sTYPE; // Utility Auto Fix Comments
        var start; // Utility Auto Fix Comments
        start = "+ ";
        if (document.MAINFORM.COMM_INV_CB.checked) {
            a = start + "SIGNED COMMERCIAL INVOICE " + document.MAINFORM.COMM_INV.value + '\n';
        } else {
            a = '';
        }

        sTYPE = document.MAINFORM.TRANS_DOCS_TYPE.value;
        ORIG = document.MAINFORM.TRANS_DOCS_ORIG.value;
        CONS = document.MAINFORM.TRANS_DOCS_CONS.value;
        FREI = document.MAINFORM.TRANS_DOCS_FREI.value;
        APPL = document.MAINFORM.TRANS_DOCS_APPL.value;
        TRCDT = document.MAINFORM.TRACER_DATE.value;
        BRKNM = document.MAINFORM.BROKER_NM.value;
        BRKADD = document.MAINFORM.BROKER_ADD.value;

        if (document.MAINFORM.TRANS_DOCS_CB.checked) {
            b = start + "TRANSPORT DOCUMENTS " + ORIG + " " + sTYPE + " " + TRCDT + " " + CONS + " " + FREI + " " + APPL + " " + BRKNM.toUpperCase() + " " + BRKADD.toUpperCase() + '\n';
        } else {
            b = '';
        }

        if (document.MAINFORM.PACK_LIST_CB.checked) {
            c = start + "PACKING LIST " + document.MAINFORM.PACK_LIST_COPY.value + '\n';
        } else {
            c = '';
        }

        if (document.MAINFORM.INS_DOCS_CB.checked) {
            d = start + "INSURANCE " + document.MAINFORM.INS_DOCS_TYPE.value + " " + document.MAINFORM.INS_DOCS_PERC.value + " PERCENT OF THE INVOICE VALUE OF THE GOODS COVERING " + document.MAINFORM.INS_DOCS_COV.value + '\n';
        } else {
            d = '';
        }

        CType = document.MAINFORM.CERT_ORIG_TYPE.value;
        COrig = document.MAINFORM.CERT_ORIG_COPY.value;

        if (document.MAINFORM.CERT_ORIG_CB.checked) {
            e1 = start + CType + " " + COrig + '\n';
        } else {
            e1 = '';
        }
        BEN_TEXT = document.MAINFORM.BEN_CERT_TEXT.value;

        if (document.MAINFORM.BEN_CERT_CB.checked) {
            f = start + "BENEFICIARY CERTIFICATE " + document.MAINFORM.BEN_CERT_COPY.value + " " + BEN_TEXT.toUpperCase() + '\n';
        } else {
            f = '';
        }
        if (document.MAINFORM.CERT_QTY_CB.checked) {
            g = start + "QUALITY CERTIFICATE " + document.MAINFORM.CERT_QTY_COPY.value + '\n';
        } else {
            g = '';
        }
        if (document.MAINFORM.CERT_ANALY_CB.checked) {
            h = start + "ANALYSIS CERTIFICATE " + document.MAINFORM.CERT_ANALY_COPY.value + '\n';
        } else {
            h = '';
        }
        if (document.MAINFORM.CERT_WEIG_CB.checked) {
            i = start + "WEIGHT CERTIFICATE " + document.MAINFORM.CERT_WEIG_COPY.value + '\n';
        } else {
            i = '';
        }
        if (document.MAINFORM.CERT_EXPORT_CB.checked) {
            j = start + "EXPORT " + document.MAINFORM.CERT_EXPORT_TYPE.value + " " + document.MAINFORM.CERT_EXPORT_COPY.value + '\n';
        } else {
            j = '';
        }
        document.MAINFORM.DOC_REQ.value = a + b + c + d + e1 + f + g + h + i + j;
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_DocumentPresentation", e);
    }
}

function SYM_IPLC_FORACOF_MAIL_ADD() {
    try {
        var arr_Fld; // Utility Auto Fix Comments
        var arr_FldClass_DEFAULT; // Utility Auto Fix Comments
        var arr_FldClass_EMAIL; // Utility Auto Fix Comments
        var arr_FldClass_FAX; // Utility Auto Fix Comments
        var arr_FldClass_MAIL; // Utility Auto Fix Comments
        var arr_FldClass_TELEX; // Utility Auto Fix Comments
        arr_Fld = new Array(document.MAINFORM.FORACOF_FAX, document.MAINFORM.FORACOF_EMAIL, document.MAINFORM.FORACOF_TLX, document.MAINFORM.FORACOF_MAIL_ADD);
        arr_FldClass_FAX = new Array("M", "O", "O", "O");
        arr_FldClass_EMAIL = new Array("O", "M", "O", "O");
        arr_FldClass_TELEX = new Array("O", "O", "M", "O");
        arr_FldClass_MAIL = new Array("O", "O", "O", "M");
        arr_FldClass_DEFAULT = new Array("O", "O", "O", "O");

        if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'No') {
            switch (document.MAINFORM.FORACOF_CORR_MED.value) {
                case "Fax":
                    SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_FAX);
                    break;
                case "Mail":
                    SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_MAIL);
                    break;
                case "Email":
                    SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_EMAIL);
                    break;
                case "Telex":
                    SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_TELEX);
                    break;
                default:
                    SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_DEFAULT);
                    return;
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_FORACOF_MAIL_ADD", e);
    }
}

function SYM_IPLC_ForChangePaymentCCY() {
    try {
        var ccyobj; // Utility Auto Fix Comments
        //modified for PUI
        // return;

        ccyobj = SYS_getScreenObjByxpath('PaymentTermsHeader', 'C_TRX_CCY');
        ccyobj.value = document.MAINFORM.LC_CCY.value;
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ForChangePaymentCCY", e);
    }
}

function SYM_IPLC_Get_NARR_From_EPLC() {
    try {
        if (document.MAINFORM.EXPIRY_PLC_NARR.value == 'Beneficiary Country' || document.MAINFORM.EXPIRY_PLC_NARR.value == 'At Our Counters' || document.MAINFORM.EXPIRY_PLC_NARR.value == 'Advising Bank Country') {
            document.MAINFORM.EXPIRY_PLC.value = document.MAINFORM.EXPIRY_PLC_NARR.value;

        } else {
            document.MAINFORM.EXPIRY_PLC.value = 'Other';

        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Get_NARR_From_EPLC", e);
    }
}

function SYM_IPLC_INIT() {
    try {
        var sMark; // Utility Auto Fix Comments
        var sResult; // Utility Auto Fix Comments
        // Add by Jack on 20080905
        //for clerk id
        if (document.MAINFORM.CLERK_ID != null) {
            SYT_CLERK_ID();
        }

        //for current status
        sMark = SYS_FUNCTION_NAME;

        sResult = sMark;
        document.MAINFORM.CURRNT_STATUS.value = sResult;

        //for trx date
        if (document.MAINFORM.TRX_DT != null) {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_INIT", e);
    }
}

function SYM_IPLC_INIT_FOR_DT() {
    try {
        //added by Jane 20090213 for bug 1114
        if (document.MAINFORM.TEMP_DOC_DT != null) {
            document.MAINFORM.TEMP_DOC_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_INIT_FOR_DT", e);
    }
}

function SYM_IPLC_LC_AmountOnchange() {
    try {
        var Func; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        //modified for PUI
        // return;

        if ('BY MIXED PYMT' == document.MAINFORM.AVAL_BY.value) {
            xDO = SYS_getDoByXpath("PaymentTermsHeader");
            if (xDO) {
                Func = xDO.getselectedFrame().window["LC_AMTchange"];
                Func();
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_LC_AmountOnchange", e);
    }
}

function SYM_IPLC_MATURITY_DT_RESULT(MAT_DT) {
    try {
        //Add by Jack on 20120907 for SMBC Workshop
        document.MAINFORM.MATURITY_DT.value = MAT_DT;
        EEHtml.fireEvent(document.MAINFORM.MATURITY_DT, "onchange");
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_MATURITY_DT_RESULT", e);
    }
}

function SYM_IPLC_MPO_ADV_ADVTHU_BK() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD3, 'P');
        //SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_TLX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.CONF_INSTR, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THRU_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_TLX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_BK_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_POST_ADD_BTN, 'P');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_MPO_ADV_ADVTHU_BK", e);
    }
}

function SYM_IPLC_MPO_APPL_BENE() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_LANG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_FAX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_TLX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.AC_OFFICER_CODE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_AC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_LANG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_TEL_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_TLX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_AC_OFF_CODE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD_BTN, 'P');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_MPO_APPL_BENE", e);
    }
}

function SYM_IPLC_MPO_PRESENTER_CLASS() {
    try {
        document.MAINFORM.PRES_BK_ID_BTN.disabled = true;
        document.MAINFORM.PRES_BK_ADD_BTN.disabled = true;
        document.MAINFORM.PRES_BK_POST_ADD_BTN.disabled = true;
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ID, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_NM, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD1, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD2, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD3, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_LANG, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_TLX, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_EMAIL, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_FAX, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_AC_OFF_CODE, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_AC_NO, "P");
        SYT_ChangeFldClass(document.MAINFORM.DOC_PRES_BY, "P");
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_MPO_PRESENTER_CLASS", e);
    }
}

function SYM_IPLC_MPO_PRES_BK_ADD_BTN() {
    try {
        var PRES_BK_ID; // Utility Auto Fix Comments
        // Add by Jack on 20081016 
        PRES_BK_ID = document.MAINFORM.PRES_BK_ID.value;
        if (PRES_BK_ID == '') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_POST_ADD_BTN, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_POST_ADD_BTN, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_MPO_PRES_BK_ADD_BTN", e);
    }
}

function SYM_IPLC_MPO_PRES_CORR_MED() {
    try {
        var PRES_BK_CORR_MED; // Utility Auto Fix Comments
        PRES_BK_CORR_MED = document.MAINFORM.PRES_BK_CORR_MED.value;
        switch (PRES_BK_CORR_MED) {
            case "SWIFT":
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'M');
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_TLX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_FAX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_EMAIL, 'O');
                break;
            case "Telex":
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'O'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_TLX, 'M'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'O'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_FAX, 'O'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_EMAIL, 'O'); // Utility Auto Fix Comments
                break;
            case "Mail":
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'O'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_TLX, 'O'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'M'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_FAX, 'O'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_EMAIL, 'O'); // Utility Auto Fix Comments
                break;
            case "Fax":
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'O'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_TLX, 'O'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'O'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_FAX, 'M'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_EMAIL, 'O'); // Utility Auto Fix Comments
                break;
            case "Email":
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'O'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_TLX, 'O'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'O'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_FAX, 'O'); // Utility Auto Fix Comments
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_EMAIL, 'M'); // Utility Auto Fix Comments
                break;
            default:
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_TLX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'O');
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_FAX, 'O');
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_EMAIL, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_MPO_PRES_CORR_MED", e);
    }
}

function SYM_IPLC_MPO_REIM_APPL_BK() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_AUTH_REQ, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_TLX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_AC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_CHG_DESC, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_40F, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_AC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_TLX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_BK_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.REIM_BK_POST_ADD_BTN, 'P');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_MPO_REIM_APPL_BK", e);
    }
}

function SYM_IPLC_NEGO_INIT_VALUES() {
    try {
        // Add by Jack on 20080906 
        document.MAINFORM.TEMP_LC_BAL.value = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        document.MAINFORM.PRES_CCY.value = document.MAINFORM.LC_CCY.value;
        document.MAINFORM.PRES_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.PRES_BK_ID_BTN.value = 'BANK';
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_NEGO_INIT_VALUES", e);
    }
}

function SYM_IPLC_NEGO_SHOW_NOTES() {
    try {
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_NEGO_SHOW_NOTES", e);
    }
}

function SYM_IPLC_NEGO_SHOW_NOTES_SMBC() {
    try {
        //Add by Jack on 20120904 for SMBC workshop
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.FORACOF_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_NEGO_SHOW_NOTES_SMBC", e);
    }
}

function SYM_IPLC_NEW_BENE_MAIL_ADD() {
    try {
        if (document.MAINFORM.NEW_BENE_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_MAIL_ADD, "M");

        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_MAIL_ADD, "O");
        }
        if (document.MAINFORM.NEW_BENE_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_EMAIL, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_EMAIL, "O");
        }
        if (document.MAINFORM.NEW_BENE_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_FAX, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_FAX, "O");
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_NEW_BENE_MAIL_ADD", e);
    }
}

function SYM_IPLC_NEW_CAL_CONF_BK_ID() {
    try {
        if (document.MAINFORM.NEW_CONF_BK_ID.value == '') {
            document.MAINFORM.NEW_CONF_BK_NM.value = '';
            document.MAINFORM.NEW_CONF_BK_ADD1.value = '';
            document.MAINFORM.NEW_CONF_BK_ADD2.value = '';
            document.MAINFORM.NEW_CONF_BK_ADD3.value = '';
            document.MAINFORM.NEW_CONF_BK_SW_ADD.value = '';
            document.MAINFORM.NEW_CONF_BK_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.NEW_CONF_BK_NOTES.name);
            SYM_IPLC_NEW_CAL_CONF_BK_ID_back();
        } else {
            SYS_GetCUBK('NEW_CONF_BK_ID', 'NEW_CONF_BK_ID', 'SYM_IPLC_NEW_CAL_CONF_BK_ID_back()');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_NEW_CAL_CONF_BK_ID", e);
    }
}

function SYM_IPLC_NEW_CAL_CONF_BK_ID_back() {
    try {
        SYT_Show_Notes(document.MAINFORM.NEW_CONF_BK_NOTES.name);
        SYM_IPLC_NEW_CHK_CONF_BK_SW_TAG();
        if (document.MAINFORM.NEW_CONF_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.NEW_CONF_BK_SW_ADD.value = document.MAINFORM.NEW_CONF_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_NEW_CAL_CONF_BK_ID_back", e);
    }
}

function SYM_IPLC_NEW_CHK_CONF_BK_SW_TAG() {
    try {
        if (document.MAINFORM.NEW_CONF_BK_SW_ADD.value != '') {
            document.MAINFORM.NEW_CONF_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.NEW_CONF_BK_NM.value != '' || document.MAINFORM.NEW_CONF_BK_ADD1.value != '' || document.MAINFORM.NEW_CONF_BK_ADD2.value != '' || document.MAINFORM.NEW_CONF_BK_ADD3.value != '') && document.MAINFORM.NEW_CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.NEW_CONF_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.NEW_CONF_BK_NM.value == '' && document.MAINFORM.NEW_CONF_BK_ADD1.value == '' && document.MAINFORM.NEW_CONF_BK_ADD2.value == '' && document.MAINFORM.NEW_CONF_BK_ADD3.value == '' && document.MAINFORM.NEW_CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.NEW_CONF_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_NEW_CHK_CONF_BK_SW_TAG", e);
    }
}

function SYM_IPLC_NEW_Pay_By_Acceptance() {
    try {
        if (document.MAINFORM.NEW_TENOR_TYPE.value != 'OTHR' && document.MAINFORM.NEW_TENOR_TYPE.value != '' && document.MAINFORM.NEW_AVAL_BY.value == 'BY ACCEPTANCE') {
            document.MAINFORM.NEW_DRAFTS_AT.value = document.MAINFORM.NEW_TENOR_DAYS.value + ' ' + document.MAINFORM.NEW_TENOR_TYPE.value;
        }
        if (document.MAINFORM.NEW_TENOR_TYPE.value != 'OTHR' && document.MAINFORM.NEW_TENOR_TYPE.value != '' && document.MAINFORM.NEW_AVAL_BY.value == 'BY DEF PAYMENT'|| document.MAINFORM.NEW_AVAL_BY.value == 'BY NEGOTIATION') {
            document.MAINFORM.NEW_DEF_PMT_DET.value = document.MAINFORM.NEW_TENOR_DAYS.value + ' ' + document.MAINFORM.NEW_TENOR_TYPE.value;
        }
        if (document.MAINFORM.NEW_TENOR_TYPE.value == 'OTHER') {
            if (document.MAINFORM.NEW_AVAL_BY.value == 'BY ACCEPTANCE') {
                document.MAINFORM.NEW_DRAFTS_AT.value = 'OTHER';
            } else if (document.MAINFORM.NEW_AVAL_BY.value == 'BY DEF PAYMENT') {
                document.MAINFORM.NEW_DEF_PMT_DET.value = 'OTHER';
            }
        }
        if (document.MAINFORM.NEW_TENOR_TYPE.value == '') {
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_NEW_Pay_By_Acceptance", e);
    }
}

function SYM_IPLC_NEW_REIM_BK_MAIL_ADD() {
    try {
        if (document.MAINFORM.NEW_REIM_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_MAIL_ADD, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_SW_ADD, "O");
        }
        if (document.MAINFORM.NEW_REIM_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_SW_ADD, "M");
        }

        if (document.MAINFORM.NEW_REIM_BK_CORR_MED.value == 'None') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_REIM_BK_SW_ADD, "O");
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_NEW_REIM_BK_MAIL_ADD", e);
    }
}

function SYM_IPLC_NEW_SQL_APPL_CUST() {
    try {
        var retvalue;
        var sql;
        APPL_NM = EEHtml.getElementById("NEW_APPL_NM").value;
        APPL_ADD1 = EEHtml.getElementById("NEW_APPL_ADD1").value;
        APPL_ADD2 = EEHtml.getElementById("NEW_APPL_ADD2").value;
        APPL_ADD3 = EEHtml.getElementById("NEW_APPL_ADD3").value;
        var _string = APPL_NM + APPL_ADD1 + APPL_ADD2 + APPL_ADD3;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NEW_APPL_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_NEW_SQL_APPL_CUST", e);
    }
}

function SYM_IPLC_Pay_By_Acceptance() {
    try {
        if (document.MAINFORM.TENOR_TYPE.value != 'OTHER' && document.MAINFORM.TENOR_TYPE.value != '' && document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE') {
            document.MAINFORM.DRAFTS_AT.value = document.MAINFORM.TENOR_DAYS.value + ' ' + document.MAINFORM.TENOR_TYPE.value;
        }
        if (document.MAINFORM.TENOR_TYPE.value != 'OTHER' && document.MAINFORM.TENOR_TYPE.value != '' && (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT' || document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION')) {
            document.MAINFORM.DEF_PMT_DET.value = document.MAINFORM.TENOR_DAYS.value + ' ' + document.MAINFORM.TENOR_TYPE.value;
        }
        if (document.MAINFORM.TENOR_TYPE.value == 'OTHER') {
            if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE') {
                document.MAINFORM.DRAFTS_AT.value = 'OTHER';
            } else if (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {
                document.MAINFORM.DEF_PMT_DET.value = 'OTHER';
            }
        }
        if (document.MAINFORM.TENOR_TYPE.value == '') {
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.DEF_PMT_DET.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Pay_By_Acceptance", e);
    }
}

function SYM_IPLC_PaymentAvailableByChange() {
    try {
        var obj1; // Utility Auto Fix Comments
        var obj2; // Utility Auto Fix Comments
        //modified for PUI
        // return;

        obj1 = SYS_getScreenObjByxpath('PaymentTermsHeader', 'CPYT_C_MIX_PAY_DETAIL');
        obj2 = SYS_getScreenObjByxpath('PaymentTermsHeader', 'CPYT_INDIVID_DRAW_FLG');
        if (document.MAINFORM.AVAL_BY.value == "BY MIXED PYMT") {
            SYT_ChangeFldClass(obj1, 'O');
            SYT_ChangeFldClass(obj2, 'M');
        } else {
            SYT_ChangeFldClass(obj1, 'P');
            SYT_ChangeFldClass(obj2, 'P');
        }
        obj2.value = SYS_getValueFromMain('INDIVID_DRAW_FLG');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_PaymentAvailableByChange", e);
    }
}

function SYM_IPLC_REIM_BK_MAIL_ADD() {
    try {
        if (document.MAINFORM.REIM_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_MAIL_ADD, "M");
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_SW_ADD, "O");
        }
        if (document.MAINFORM.REIM_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_SW_ADD, "M");
        }

        if (document.MAINFORM.REIM_BK_CORR_MED.value == 'None') {
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.REIM_BK_SW_ADD, "O");
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_REIM_BK_MAIL_ADD", e);
    }
}

function SYM_IPLC_SG_Condition() {
    try {
        //var LCNO; // Utility Auto Fix Comments
        //                                var condition; // Utility Auto Fix Comments
        //                                LCNO = document.MAINFORM.C_MAIN_REF.value;
        //                                condition = " LC_NO = '" + LCNO + "'";
        //                                SYS_InqCUBK_Sql('SG_NO', condition);
        SYS_InqCUBK_byCondition('SG_NO', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SG_Condition", e);
    }
}

function SYM_IPLC_SG_Get_Back() {
    try {
        document.MAINFORM.SG_AMT.value = SYT_AmtFormat(document.MAINFORM.SG_CCY.value, document.MAINFORM.SG_AMT.value);
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SG_Get_Back", e);
    }
}

function SYM_IPLC_SQL_AC_WT_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        AC_WT_BK_SW_ADD = EEHtml.getElementById("AC_WT_BK_SW_ADD").value;
        AC_WT_BK_NM = EEHtml.getElementById("AC_WT_BK_NM").value;
        AC_WT_BK_ADD1 = EEHtml.getElementById("AC_WT_BK_ADD1").value;
        AC_WT_BK_ADD2 = EEHtml.getElementById("AC_WT_BK_ADD2").value;
        AC_WT_BK_ADD3 = EEHtml.getElementById("AC_WT_BK_ADD3").value;
        var _string = AC_WT_BK_SW_ADD + AC_WT_BK_NM + AC_WT_BK_ADD1 + AC_WT_BK_ADD2 + AC_WT_BK_ADD3;

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('AC_WT_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_AC_WT_BANK", e);
    }
}

function SYM_IPLC_SQL_AC_WT_BK_SW_ADD() {
    try {
        var AC_WT_BK_SW_ADD; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //AC_WT_BK_SW_ADD = document.MAINFORM.AC_WT_BK_SW_ADD.value;
        if (document.MAINFORM.AC_WT_BK_SW_ADD.value.length == 11 || document.MAINFORM.AC_WT_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.AC_WT_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.AC_WT_BK_SW_ADD.value = document.MAINFORM.AC_WT_BK_SW_ADD.value + 'XXX';
            }
            //else {
            //                //AC_WT_BK_SW_ADD = AC_WT_BK_SW_ADD.substring(0, 8);
            //            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.AC_WT_BK_SW_ADD.value + "' OR SW_ADD= '" + AC_WT_BK_SW_ADD + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "AC_WT_BK_ID";
            SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_SQL_AC_WT_BK_SW_ADD_8', '1', true);
            if (document.MAINFORM.AC_WT_BK_ID.value != '') {
                SYS_GetCUBK('AC_WT_BK_ID', 'AC_WT_BK_ID', 'SYM_IPLC_CAL_AC_WT_BK_ID_back');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_AC_WT_BK_SW_ADD", e);
    }
}

function SYM_IPLC_SQL_ADV_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";

        //if (document.MAINFORM.ADV_BK_SW_ADD.value != '') {
        //            sql = sql + " AND SW_ADD LIKE '%<--ADV_BK_SW_ADD-->%'";
        //        }
        //        if (document.MAINFORM.ADV_BK_NM.value != '') {
        //            sql = sql + " AND SWF_FMT_NM LIKE '%<--ADV_BK_NM-->%'";
        //        }
        //        if (document.MAINFORM.ADV_BK_ADD1.value != '') {
        //            sql = sql + " AND SWIFT_FMT_ADD1 LIKE '%<--ADV_BK_ADD1-->%'";
        //        }
        //        if (document.MAINFORM.ADV_BK_ADD2.value != '') {
        //            sql = sql + " AND SWIFT_FMT_ADD2 LIKE '%<--ADV_BK_ADD2-->%'";
        //        }
        //        if (document.MAINFORM.ADV_BK_ADD3.value != '') {
        //            sql = sql + " AND SWIFT_FMT_ADD3 LIKE '%<--ADV_BK_ADD3-->%'";
        //        }
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ADV_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_ADV_BANK", e);
    }
}

function SYM_IPLC_SQL_ADV_BK_SW_ADD() {
    try {
        var ADV_BK_SW_ADD; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ADV_BK_SW_ADD = document.MAINFORM.ADV_BK_SW_ADD.value;
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 11 || document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + 'XXX';
            }
            //else {
            //                //ADV_BK_SW_ADD = ADV_BK_SW_ADD.substring(0, 8);
            //            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.ADV_BK_SW_ADD.value + "' OR SW_ADD= '" + ADV_BK_SW_ADD + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "ADV_BK_ID";
            SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_SQL_ADV_BK_SW_ADD_6', '1', true);
            if (document.MAINFORM.ADV_BK_ID.value != '') {
                SYS_GetCUBK('ADV_BK_ID', 'ADV_BK_ID', 'SYM_IPLC_CAL_ADV_BK_ID_back');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_ADV_BK_SW_ADD", e);
    }
}

function SYM_IPLC_SQL_ADV_THU_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        ADV_THU_BK_SW_ADD = EEHtml.getElementById("ADV_THU_BK_SW_ADD").value;
        ADV_THU_BK_NM = EEHtml.getElementById("ADV_THU_BK_NM").value;
        ADV_THU_BK_ADD1 = EEHtml.getElementById("ADV_THU_BK_ADD1").value;
        ADV_THU_BK_ADD2 = EEHtml.getElementById("ADV_THU_BK_ADD2").value;
        ADV_THU_BK_ADD3 = EEHtml.getElementById("ADV_THU_BK_ADD3").value;
        var _string = ADV_THU_BK_SW_ADD + ADV_THU_BK_NM + ADV_THU_BK_ADD1 + ADV_THU_BK_ADD2 + ADV_THU_BK_ADD3;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ADV_THRU_BK_ID', '1');
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_ADV_THU_BANK", e);
    }
}

function SYM_IPLC_SQL_ADV_THU_BK_SW_ADD() {
    try {
        var ADV_THU_BK_SW_ADD; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ADV_THU_BK_SW_ADD = document.MAINFORM.ADV_THU_BK_SW_ADD.value;
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 11 || document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + 'XXX';
            }
            //else {
            //                //ADV_THU_BK_SW_ADD = ADV_THU_BK_SW_ADD.substring(0, 8);
            //            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.ADV_THU_BK_SW_ADD.value + "' OR SW_ADD= '" + ADV_THU_BK_SW_ADD + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "ADV_THU_BK_ID";
            SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_SQL_ADV_THU_BK_SW_ADD_5', '1', true);
            if (document.MAINFORM.ADV_THU_BK_ID.value != '') {
                SYS_GetCUBK('ADV_THRU_BK_ID', 'ADV_THU_BK_ID', 'SYM_IPLC_CAL_ADV_THU_BK_ID_back');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_ADV_THU_BK_SW_ADD", e);
    }
}

function SYM_IPLC_SQL_APPL_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        APPL_BK_SW_ADD = EEHtml.getElementById("APPL_BK_SW_ADD").value;
        APPL_BK_NM = EEHtml.getElementById("APPL_BK_NM").value;
        APPL_BK_ADD1 = EEHtml.getElementById("APPL_BK_ADD1").value;
        APPL_BK_ADD2 = EEHtml.getElementById("APPL_BK_ADD2").value;
        APPL_BK_ADD3 = EEHtml.getElementById("APPL_BK_ADD3").value;
        var _string = APPL_BK_SW_ADD + APPL_BK_NM + APPL_BK_ADD1 + APPL_BK_ADD2 + APPL_BK_ADD3;

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('APPL_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_APPL_BANK", e);
    }
}

function SYM_IPLC_SQL_APPL_BK_SW_ADD() {
    try {
        var APPL_BK_SW_ADD; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //APPL_BK_SW_ADD = document.MAINFORM.APPL_BK_SW_ADD.value;
        if (document.MAINFORM.APPL_BK_SW_ADD.value.length == 11 || document.MAINFORM.APPL_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.APPL_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.APPL_BK_SW_ADD.value = document.MAINFORM.APPL_BK_SW_ADD.value + 'XXX';
            }
            //else {
            //                //APPL_BK_SW_ADD = APPL_BK_SW_ADD.substring(0, 8);
            //            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.APPL_BK_SW_ADD.value + "' OR SW_ADD= '" + APPL_BK_SW_ADD + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "APPL_BK_ID";
            SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_SQL_APPL_BK_SW_ADD_4', '1', true);
            if (document.MAINFORM.APPL_BK_ID.value != '') {
                SYS_GetCUBK('APPL_BK_ID', 'APPL_BK_ID', 'SYM_IPLC_CAL_APPL_BK_ID_back');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_APPL_BK_SW_ADD", e);
    }
}

function SYM_IPLC_SQL_APPL_CUST() {
    try {
        SYS_InqCUBK_byCondition('APPL_ID', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_APPL_CUST", e);
    }
}

function SYM_IPLC_SQL_AVAL_WT_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        AVAL_WT_BK_SW_ADD = EEHtml.getElementById("AVAL_WT_BK_SW_ADD").value;
        AVAL_WT_BK_NM = EEHtml.getElementById("AVAL_WT_BK_NM").value;
        AVAL_WT_BK_ADD1 = EEHtml.getElementById("AVAL_WT_BK_ADD1").value;
        AVAL_WT_BK_ADD2 = EEHtml.getElementById("AVAL_WT_BK_ADD2").value;
        AVAL_WT_BK_ADD3 = EEHtml.getElementById("AVAL_WT_BK_ADD3").value;
        var _string = AVAL_WT_BK_SW_ADD + AVAL_WT_BK_NM + AVAL_WT_BK_ADD1 + AVAL_WT_BK_ADD2 + AVAL_WT_BK_ADD3;

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('AVLBL_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_AVAL_WT_BANK", e);
    }
}

function SYM_IPLC_SQL_AVAL_WT_BK_SW_ADD() {
    try {
        var AVAL_BK_SW_ADD; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //AVAL_BK_SW_ADD = document.MAINFORM.AVAL_WT_BK_SW_ADD.value;
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 11 || document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = document.MAINFORM.AVAL_WT_BK_SW_ADD.value + 'XXX';
            }
            //else {
            //                //AVAL_BK_SW_ADD = AVAL_BK_SW_ADD.substring(0, 8);
            //            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.AVAL_WT_BK_SW_ADD.value + "' OR SW_ADD= '" + AVAL_BK_SW_ADD + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "AVAL_WT_BK_ID";
            SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_SQL_AVAL_WT_BK_SW_ADD_3', '1', true);
            if (document.MAINFORM.AVAL_WT_BK_ID.value != '') {
                SYS_GetCUBK('AVLBL_BK_ID', 'AVAL_WT_BK_ID', 'SYM_IPLC_CAL_AVAL_WT_BK_ID_back');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_AVAL_WT_BK_SW_ADD", e);
    }
}

function SYM_IPLC_SQL_BENE_CUST() {
    try {
        SYS_InqCUBK_byCondition('BENE_ID', '1');
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_BENE_CUST", e);
    }
}

function SYM_IPLC_SQL_CONF_BANK() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {
            SYS_InqCUBK('CONF_BK_ID', 'CONF_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_CONF_BANK", e);
    }
}

function SYM_IPLC_SQL_DRWE_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        DRWE_SW_ADD = EEHtml.getElementById("DRWE_SW_ADD").value;
        DRWE_NM = EEHtml.getElementById("DRWE_NM").value;
        DRWE_ADD1 = EEHtml.getElementById("DRWE_ADD1").value;
        DRWE_ADD2 = EEHtml.getElementById("DRWE_ADD2").value;
        DRWE_ADD3 = EEHtml.getElementById("DRWE_ADD3").value;
        var _string = DRWE_SW_ADD + DRWE_NM + DRWE_ADD1 + DRWE_ADD2 + DRWE_ADD3;

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('DRW_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_DRWE_BANK", e);
    }
}

function SYM_IPLC_SQL_DRWE_BK_SW_ADD() {
    try {
        var DRWE_SW_ADD; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //DRWE_SW_ADD = document.MAINFORM.DRWE_SW_ADD.value;
        if (document.MAINFORM.DRWE_SW_ADD.value.length == 11 || document.MAINFORM.DRWE_SW_ADD.value.length == 8) {
            if (document.MAINFORM.DRWE_SW_ADD.value.length == 8) {
                document.MAINFORM.DRWE_SW_ADD.value = document.MAINFORM.DRWE_SW_ADD.value + 'XXX';
            }
            //else {
            //                //DRWE_SW_ADD = DRWE_SW_ADD.substring(0, 8);
            //            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.DRWE_SW_ADD.value + "' OR SW_ADD= '" + DRWE_SW_ADD + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "DRWE_ID";
            SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_SQL_DRWE_BK_SW_ADD_2', '1', true);
            if (document.MAINFORM.DRWE_ID.value != '') {
                SYS_GetCUBK('DRW_ID', 'DRWE_ID', 'SYM_IPLC_CAL_DRWE_ID_back');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_DRWE_BK_SW_ADD", e);
    }
}

function SYM_IPLC_SQL_FORACOF_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        FORACOF_NM = EEHtml.getElementById("FORACOF_NM").value;
        FORACOF_ADD1 = EEHtml.getElementById("FORACOF_ADD1").value;
        FORACOF_ADD2 = EEHtml.getElementById("FORACOF_ADD2").value;
        FORACOF_ADD3 = EEHtml.getElementById("FORACOF_ADD3").value;
        var _string = FORACOF_NM + FORACOF_ADD1 + FORACOF_ADD2 + FORACOF_ADD3;

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('FORACOF_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_FORACOF_CUST", e);
    }
}

function SYM_IPLC_SQL_ISSUE_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        ISSUE_BK_SW_ADD = EEHtml.getElementById("ISSUE_BK_SW_ADD").value;
        ISSUE_BK_NM = EEHtml.getElementById("ISSUE_BK_NM").value;
        ISSUE_BK_ADD1 = EEHtml.getElementById("ISSUE_BK_ADD1").value;
        ISSUE_BK_ADD2 = EEHtml.getElementById("ISSUE_BK_ADD2").value;
        ISSUE_BK_ADD3 = EEHtml.getElementById("ISSUE_BK_ADD3").value;
        var _string = ISSUE_BK_SW_ADD + ISSUE_BK_NM + ISSUE_BK_ADD1 + ISSUE_BK_ADD2 + ISSUE_BK_ADD3;

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ISSUE_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_ISSUE_BANK", e);
    }
}

function SYM_IPLC_SQL_ISSUE_BK_SW_ADD() {
    try {
        var ISSUE_BK_SW_ADD; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ISSUE_BK_SW_ADD = document.MAINFORM.ISSUE_BK_SW_ADD.value;
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 11 || document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.ISSUE_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value + 'XXX';
            }
            //else {
            //                //ISSUE_BK_SW_ADD = ISSUE_BK_SW_ADD.substring(0, 8);
            //            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.ISSUE_BK_SW_ADD.value + "' OR SW_ADD= '" + ISSUE_BK_SW_ADD + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "ISSUE_BK_ID";
            SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_SQL_ISSUE_BK_SW_ADD_1', '1', true);
            if (document.MAINFORM.ISSUE_BK_ID.value != '') {
                SYS_GetCUBK('ISSUE_BK_ID', 'ISSUE_BK_ID', 'SYM_IPLC_CAL_ISSUE_BK_ID_back');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_ISSUE_BK_SW_ADD", e);
    }
}

function SYM_IPLC_SQL_NEW_ADV_THU_BK() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NEW_ADV_THU_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_NEW_ADV_THU_BK", e);
    }
}

function SYM_IPLC_SQL_NEW_AVAL_WT_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NEW_AVLBL_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_NEW_AVAL_WT_BANK", e);
    }
}

function SYM_IPLC_SQL_NEW_AVAL_WT_BK_SW_ADD() {
    try {
        if (document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value.length == 11 || document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value = document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD.value + 'XXX';
            }
            SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_SQL_NEW_AVAL_WT_BK_SW_ADD_43', '1', true);
            if (document.MAINFORM.NEW_AVAL_WT_BK_ID.value != '') {
                SYS_GetCUBK('NEW_AVLBL_BK_ID', 'NEW_AVAL_WT_BK_ID', 'SYM_IPLC_CAL_NEW_AVAL_WT_BK_ID_back');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_NEW_AVAL_WT_BK_SW_ADD", e);
    }
}

function SYM_IPLC_SQL_NEW_BENE_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        NEW_BENE_NM = EEHtml.getElementById("NEW_BENE_NM").value;
        NEW_BENE_ADD1 = EEHtml.getElementById("NEW_BENE_ADD1").value;
        NEW_BENE_ADD2 = EEHtml.getElementById("NEW_BENE_ADD2").value;
        NEW_BENE_ADD3 = EEHtml.getElementById("NEW_BENE_ADD3").value;
        var _string = NEW_BENE_NM + NEW_BENE_ADD1 + NEW_BENE_ADD2 + NEW_BENE_ADD3;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NEW_BENE_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_NEW_BENE_CUST", e);
    }
}

function SYM_IPLC_SQL_NEW_CONF_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NEW_CONF_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_NEW_CONF_BANK", e);
    }
}

function SYM_IPLC_SQL_NEW_DRWE_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NEW_DRW_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_NEW_DRWE_BANK", e);
    }
}

function SYM_IPLC_SQL_NEW_REIM_BANK() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NEW_REIM_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_NEW_REIM_BANK", e);
    }
}

function SYM_IPLC_SQL_ORDER_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        ORDER_CUST_NM = EEHtml.getElementById("ORDER_CUST_NM").value;
        ORDER_CUST_ADD1 = EEHtml.getElementById("ORDER_CUST_ADD1").value;
        ORDER_CUST_ADD2 = EEHtml.getElementById("ORDER_CUST_ADD2").value;
        ORDER_CUST_ADD3 = EEHtml.getElementById("ORDER_CUST_ADD3").value;
        var _string = ORDER_CUST_NM + ORDER_CUST_ADD1 + ORDER_CUST_ADD2 + ORDER_CUST_ADD3;

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ORDER_CUST_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_ORDER_CUST", e);
    }
}

function SYM_IPLC_SQL_PRES_BK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        // Add by Jack on 20080917 
        sql = "1=1";
        document.MAINFORM.PRES_BK_ID_BTN.value = 'BANK';

        //if (document.MAINFORM.PRES_BK_SW_ADD.value != '') {
        //            sql = sql + " AND SW_ADD LIKE '%<--PRES_BK_SW_ADD-->%'";
        //        }
        //        if (document.MAINFORM.PRES_BK_NM.value != '') {
        //            sql = sql + " AND SWF_FMT_NM LIKE '%<--PRES_BK_NM-->%'";
        //        }
        //        if (document.MAINFORM.PRES_BK_ADD1.value != '') {
        //            sql = sql + " AND SWIFT_FMT_ADD1 LIKE '%<--PRES_BK_ADD1-->%'";
        //        }
        //        if (document.MAINFORM.PRES_BK_ADD2.value != '') {
        //            sql = sql + " AND SWIFT_FMT_ADD2 LIKE '%<--PRES_BK_ADD2-->%'";
        //        }
        //        if (document.MAINFORM.PRES_BK_ADD3.value != '') {
        //            sql = sql + " AND SWIFT_FMT_ADD3 LIKE '%<--PRES_BK_ADD3-->%'";
        //        }
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('PRES_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_PRES_BK", e);
    }
}

function SYM_IPLC_SQL_PRES_BK_SW_ADD() {
    try {
        var PRES_BK_SW_ADD; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        // Add by Jack on 20080917 

        //PRES_BK_SW_ADD = document.MAINFORM.PRES_BK_SW_ADD.value;
        if (document.MAINFORM.PRES_BK_SW_ADD.value.length == 11 || document.MAINFORM.PRES_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.PRES_BK_ID_BTN.value = 'BANK';
            if (document.MAINFORM.PRES_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.PRES_BK_SW_ADD.value = document.MAINFORM.PRES_BK_SW_ADD.value + 'XXX';
            }
            //else {
            //                //PRES_BK_SW_ADD = PRES_BK_SW_ADD.substring(0, 8);
            //            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.PRES_BK_SW_ADD.value + "' OR SW_ADD= '" + PRES_BK_SW_ADD + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "PRES_BK_ID";
            SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_SQL_PRES_BK_SW_ADD_7', '1', true);
            if (document.MAINFORM.PRES_BK_ID.value != '') {
                SYS_GetCUBK('PRES_BK_ID', 'PRES_BK_ID', 'SYM_IPLC_Cal_PRES_BK_ID_back');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_PRES_BK_SW_ADD", e);
    }
}

function SYM_IPLC_SQL_PRES_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        document.MAINFORM.PRES_CUST_ID_BTN.value = 'CUST';
        PRES_BK_NM = EEHtml.getElementById("PRES_BK_NM").value;
        PRES_BK_ADD1 = EEHtml.getElementById("PRES_BK_ADD1").value;
        PRES_BK_ADD2 = EEHtml.getElementById("PRES_BK_ADD2").value;
        PRES_BK_ADD3 = EEHtml.getElementById("PRES_BK_ADD3").value;
        var _string = PRES_BK_NM + PRES_BK_ADD1 + PRES_BK_ADD2 + PRES_BK_ADD3;

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('PRES_CUST_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_PRES_CUST", e);
    }
}

function SYM_IPLC_SQL_RCV_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        RCV_BK_NM = EEHtml.getElementById("RCV_BK_NM").value;
        var _string = RCV_BK_NM;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('RCV_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_RCV_BANK", e);
    }
}

function SYM_IPLC_SQL_RCV_CORR_BK_SW_ADD() {
    try {
        var RCV_CORR_BK_SW_ADD; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //RCV_CORR_BK_SW_ADD = document.MAINFORM.RCV_CORR_BK_SW_ADD.value;
        if (document.MAINFORM.RCV_CORR_BK_SW_ADD.value.length == 11 || document.MAINFORM.RCV_CORR_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.RCV_CORR_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.RCV_CORR_BK_SW_ADD.value = document.MAINFORM.RCV_CORR_BK_SW_ADD.value + 'XXX';
            }
            //else {
            //                //RCV_CORR_BK_SW_ADD = RCV_CORR_BK_SW_ADD.substring(0, 8);
            //            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.RCV_CORR_BK_SW_ADD.value + "' OR SW_ADD= '" + RCV_CORR_BK_SW_ADD + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "RCV_CORR_BK_ID";
            SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_SQL_RCV_CORR_BK_SW_ADD_36', '1', true);
            if (document.MAINFORM.RCV_CORR_BK_ID.value != '') {
                SYS_GetCUBK('RCV_CORR_ID', 'RCV_CORR_BK_ID', 'SYM_IPLC_CAL_RCV_CORR_BK_ID_back()');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_RCV_CORR_BK_SW_ADD", e);
    }
}

function SYM_IPLC_SQL_REIM_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        REIM_BK_SW_ADD = EEHtml.getElementById("REIM_BK_SW_ADD").value;
        REIM_BK_NM = EEHtml.getElementById("REIM_BK_NM").value;
        REIM_BK_ADD1 = EEHtml.getElementById("REIM_BK_ADD1").value;
        REIM_BK_ADD2 = EEHtml.getElementById("REIM_BK_ADD2").value;
        REIM_BK_ADD3 = EEHtml.getElementById("REIM_BK_ADD3").value;
        var _string = REIM_BK_SW_ADD + REIM_BK_NM + REIM_BK_ADD1 + REIM_BK_ADD2 + REIM_BK_ADD3;

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('REIM_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_REIM_BANK", e);
    }
}

function SYM_IPLC_SQL_REIM_BK_SW_ADD() {
    try {
        var REIM_BK_SW_ADD; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //REIM_BK_SW_ADD = document.MAINFORM.REIM_BK_SW_ADD.value;
        if (document.MAINFORM.REIM_BK_SW_ADD.value.length == 11 || document.MAINFORM.REIM_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.REIM_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.REIM_BK_SW_ADD.value = document.MAINFORM.REIM_BK_SW_ADD.value + 'XXX';
            }
            //
            //            else {
            //                //REIM_BK_SW_ADD = REIM_BK_SW_ADD.substring(0, 8);
            //            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.REIM_BK_SW_ADD.value + "' OR SW_ADD= '" + REIM_BK_SW_ADD + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "REIM_BK_ID";
            SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_SQL_REIM_BK_SW_ADD_0', '1', true);
            if (document.MAINFORM.REIM_BK_ID.value != '') {
                SYS_GetCUBK('REIM_BK_ID', 'REIM_BK_ID', 'SYM_IPLC_CAL_REIM_BK_ID_back');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_REIM_BK_SW_ADD", e);
    }
}

function SYM_IPLC_SQL_SEND_CORR_BK_SW_ADD() {
    try {
        var SEND_CORR_BK_SW_ADD; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //SEND_CORR_BK_SW_ADD = document.MAINFORM.SEND_CORR_BK_SW_ADD.value;
        if (document.MAINFORM.SEND_CORR_BK_SW_ADD.value.length == 11 || document.MAINFORM.SEND_CORR_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.SEND_CORR_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.SEND_CORR_BK_SW_ADD.value = document.MAINFORM.SEND_CORR_BK_SW_ADD.value + 'XXX';
            }
            //else {
            //                //SEND_CORR_BK_SW_ADD = SEND_CORR_BK_SW_ADD.substring(0, 8);
            //            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.SEND_CORR_BK_SW_ADD.value + "' OR SW_ADD= '" + SEND_CORR_BK_SW_ADD + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "SEND_CORR_BK_ID";
            SYS_GetTableDataByRule_S('SYM_IPLC_SYM_IPLC_SQL_SEND_CORR_BK_SW_ADD_35', '1', true);
            if (document.MAINFORM.SEND_CORR_BK_ID.value != '') {
                SYS_GetCUBK('SEND_CORR_ID', 'SEND_CORR_BK_ID', 'SYM_IPLC_CAL_SEND_CORR_BK_ID_back()');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SQL_SEND_CORR_BK_SW_ADD", e);
    }
}

function SYM_IPLC_SetIndividualFlagfromPayment() {
    try {
        var obj1; // Utility Auto Fix Comments
        var obj2; // Utility Auto Fix Comments
        obj1 = SYS_getScreenObjByxpath('PaymentTermsHeader', 'CPYT_C_MIX_PAY_DETAIL');
        obj2 = SYS_getScreenObjByxpath('PaymentTermsHeader', 'CPYT_INDIVID_DRAW_FLG');
        if ("BY MIXED PYMT" == document.MAINFORM.AVAL_BY.value) {
            SYT_ChangeFldClass(obj1, 'O');
            SYT_ChangeFldClass(obj2, 'M');
        } else {
            SYT_ChangeFldClass(obj1, 'P');
            SYT_ChangeFldClass(obj2, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_SetIndividualFlagfromPayment", e);
    }
}

function SYM_IPLC_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit() {
    try {
        var PaymentInstrDeal; // Utility Auto Fix Comments
        var arrCredit; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var credit; // Utility Auto Fix Comments
        var creditheader; // Utility Auto Fix Comments
        var disflg; // Utility Auto Fix Comments
        var flg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var percent; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var realamount; // Utility Auto Fix Comments
        var totalamount; // Utility Auto Fix Comments
        var trxamount; // Utility Auto Fix Comments
        ccy = document.MAINFORM.LC_CCY.value;
        disflg = document.MAINFORM.DISCNT_FLG.value;
        PaymentInstrDeal = SYS_GetObjByDoName("PaymentInstrDeal");
        if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount") {
            len = PaymentInstrDeal.length;
            if (len == 0) { // Utility Auto Fix Comments
                return; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            else {
                for (i = 0; i < len; i++) {
                    flg = SYS_GetFldValueByDo(PaymentInstrDeal[i], "CPYT_C_SDA_FLAG");
                    if (flg == "Sight" || disflg == "YES") {
                        creditheader = null;
                        creditheader = PaymentInstrDeal[i].getDoByName("PaymentCreditHeader");
                        if (creditheader == null) {
                            return;
                        } else {
                            SYS_UpdateFldValueByDo(creditheader[0], "CPYT_CR_TTL_AMT_TTLCCY", SYT_AmtFormat(ccy, document.MAINFORM.TTL_CR_AMT.value));
                            totalamount = SYS_BeFloat(document.MAINFORM.TTL_CR_AMT.value);
                            arrCredit = PaymentInstrDeal[i].getDoByName("PaymentCredit");
                            len = arrCredit.length;
                            for (i = 0; i < len; i++) {

                                credit = arrCredit[i];
                                percent = SYS_BeFloat(credit.getDoValueByName('CPYT_CR_PER'));
                                rate = SYS_BeFloat(credit.getDoValueByName('CPYT_CR_BUY_RATE'));
                                trxamount = totalamount * percent * rate / 100;
                                realamount = totalamount * percent / 100;
                                SYS_UpdateFldValueByDo(credit, 'CPYT_CR_AMT_CRCCY', SYT_AmtFormat(ccy, trxamount));
                                SYS_UpdateFldValueByDo(credit, 'CPYT_CR_AMT_TXCCY', SYT_AmtFormat(ccy, realamount));
                            }
                            SYS_RefreshDoGrid(arrCredit);
                        }
                    }
                }
            }
        }else if (SYS_ORG_FUNCTION_NAME == "IPLC_PaymentAtMaturity" && disflg == "YES") {
            //document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(ccy, document.MAINFORM.AMT_TO_BENE_PRES_CCY.value);
            var ttl_credit= SYS_BeFloat(document.MAINFORM.TTL_CR_AMT.value);// for non mix
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(ccy, ttl_credit);
            EEHtml.fireEvent(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY, "onchange");
        } else {
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(ccy, document.MAINFORM.TTL_CR_AMT.value);
            EEHtml.fireEvent(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY, "onchange");
        }
        //SYM_IPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit();
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit", e);
    }
}

function SYM_IPLC_Set_TTL_CR_AMT_toPayment() {
    try {
        var CPYT_PAY_ADV_MSG; // Utility Auto Fix Comments
        var CPYT_PAY_COV_MSG; // Utility Auto Fix Comments
        var PaymentInstrDeal; // Utility Auto Fix Comments
        var arrCredit; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var credit; // Utility Auto Fix Comments
        var creditheader; // Utility Auto Fix Comments
        var flg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var percent; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var realamount; // Utility Auto Fix Comments
        var totalamount; // Utility Auto Fix Comments
        var trxamount; // Utility Auto Fix Comments
        //Modify by Dane 2009-03-09 begin;
        ccy = document.MAINFORM.LC_CCY.value;
        PaymentInstrDeal = SYS_GetObjByDoName("PaymentInstrDeal");
        if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAccept" || SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount") {
            len = PaymentInstrDeal.length;
            if (len == 0) { // Utility Auto Fix Comments
                return; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            else {
                for (i = 0; i < len; i++) {
                    flg = SYS_GetFldValueByDo(PaymentInstrDeal[i], "CPYT_C_SDA_FLAG");
                    if (flg == "Sight") {
                        creditheader = null;
                        creditheader = PaymentInstrDeal[i].getDoByName("PaymentCreditHeader");
                        if (creditheader == null) {
                            return;
                        } else {
                            SYS_UpdateFldValueByDo(creditheader[0], "CPYT_CR_TTL_AMT_TTLCCY", SYT_AmtFormat(ccy, document.MAINFORM.TTL_CR_AMT.value));
                            totalamount = SYS_BeFloat(document.MAINFORM.TTL_CR_AMT.value);
                            arrCredit = PaymentInstrDeal[i].getDoByName("PaymentCredit");
                            len = arrCredit.length;
                            for (i = 0; i < len; i++) {

                                credit = arrCredit[i];
                                CPYT_PAY_ADV_MSG = credit.getDoValueByName('CPYT_PAY_ADV_MSG');
                                CPYT_PAY_COV_MSG = credit.getDoValueByName('CPYT_PAY_COV_MSG');
                                percent = SYS_BeFloat(credit.getDoValueByName('CPYT_CR_PER'));
                                rate = SYS_BeFloat(credit.getDoValueByName('CPYT_CR_BUY_RATE'));
                                trxamount = totalamount * percent * rate / 100;
                                realamount = totalamount * percent / 100;
                                SYS_UpdateFldValueByDo(credit, 'CPYT_CR_AMT_CRCCY', SYT_AmtFormat(ccy, trxamount));
                                SYS_UpdateFldValueByDo(credit, 'CPYT_CR_AMT_TXCCY', SYT_AmtFormat(ccy, realamount));
                                if (CPYT_PAY_ADV_MSG == "MT103") {
                                    SYS_UpdateFldValueByDo(credit, 'X103_SETT_AMT_32A', SYT_AmtFormat(ccy, trxamount));
                                    SYS_UpdateFldValueByDo(credit, 'X103_INSTR_AMT_33B', SYT_AmtFormat(ccy, trxamount));
                                }
                                if (CPYT_PAY_ADV_MSG == "MT756") {
                                    SYS_UpdateFldValueByDo(credit, 'X400_NET_AMT_33A', SYT_AmtFormat(ccy, trxamount));
                                    SYS_UpdateFldValueByDo(credit, 'X400_COLL_AMT_32A', SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, document.MAINFORM.PRES_AMT.value));
                                }
                                if (CPYT_PAY_COV_MSG == "MT202" || CPYT_PAY_COV_MSG == "MT202COV") {
                                    SYS_UpdateFldValueByDo(credit, 'X202_AMT_32A', SYT_AmtFormat(ccy, trxamount));
                                }
                            }
                            SYS_RefreshDoGrid(arrCredit);
                        }
                    }
                }
            }
        } else {
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(ccy, document.MAINFORM.TTL_CR_AMT.value);
            EEHtml.fireEvent(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY, "onchange");
        }
        //end
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Set_TTL_CR_AMT_toPayment", e);
    }
}

function SYM_IPLC_Set_TTL_DR_AMT_toPayment() {
    try {
        var PaymentInstrDeal; // Utility Auto Fix Comments
        var arrDebit; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        var debitheader; // Utility Auto Fix Comments
        var flg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var percent; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var realamount; // Utility Auto Fix Comments
        var totalamount; // Utility Auto Fix Comments
        var trxamount; // Utility Auto Fix Comments
        //Modify by Dane 2009-03-09 begin;
        ccy = document.MAINFORM.LC_CCY.value;
        PaymentInstrDeal = SYS_GetObjByDoName("PaymentInstrDeal");
        if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAccept" || SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount") {
            len = PaymentInstrDeal.length;
            if (len == 0) { // Utility Auto Fix Comments
                return; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            else {
                for (i = 0; i < len; i++) {
                    flg = SYS_GetFldValueByDo(PaymentInstrDeal[i], "CPYT_C_SDA_FLAG");
                    if (flg == "Sight") {
                        debitheader = null;
                        debitheader = PaymentInstrDeal[i].getDoByName("PaymentDebitHeader");
                        if (debitheader == null) {
                            return;
                        } else {
                            SYS_UpdateFldValueByDo(debitheader[0], "CPYT_DR_TTL_AMT_TTLCCY", SYT_AmtFormat(ccy, document.MAINFORM.TTL_DR_AMT.value));
                            totalamount = SYS_BeFloat(document.MAINFORM.TTL_DR_AMT.value);
                            arrDebit = PaymentInstrDeal[i].getDoByName("PaymentDebit");
                            len = arrDebit.length;
                            for (i = 0; i < len; i++) {
                                debit = arrDebit[i];
                                percent = SYS_BeFloat(debit.getDoValueByName('CPYT_DR_PER'));
                                rate = SYS_BeFloat(debit.getDoValueByName('CPYT_DR_BUY_RATE'));
                                trxamount = totalamount * percent * rate / 100;
                                realamount = totalamount * percent / 100;
                                SYS_UpdateFldValueByDo(debit, 'CPYT_DR_AMT_DRCCY', SYT_AmtFormat(ccy, trxamount));
                                SYS_UpdateFldValueByDo(debit, 'CPYT_DR_AMT_TXCCY', SYT_AmtFormat(ccy, realamount));
                            }
                            SYS_RefreshDoGrid(arrDebit);
                        }
                    }
                }
            }
        } else {
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYS_BeFloat(document.MAINFORM.TTL_DR_AMT.value);
            EEHtml.fireEvent(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY, "onchange");
        }
        //end
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Set_TTL_DR_AMT_toPayment", e);
    }
}

function SYM_IPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit() {
    try {
        var DISCNT_FLG; // Utility Auto Fix Comments
        var PaymentInstrDeal; // Utility Auto Fix Comments
        var arrDebit; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        var debitheader; // Utility Auto Fix Comments
        var flg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var percent; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var realamount; // Utility Auto Fix Comments
        var totalamount; // Utility Auto Fix Comments
        var trxamount; // Utility Auto Fix Comments
        //Add by Jack on 20120908 for SMBC Workshop
        ccy = document.MAINFORM.LC_CCY.value;
        PaymentInstrDeal = SYS_GetObjByDoName("PaymentInstrDeal");
        DISCNT_FLG = document.MAINFORM.DISCNT_FLG.value;
        if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount" || SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptFrCE") {
            len = PaymentInstrDeal.length;
            if (len == 0) { // Utility Auto Fix Comments
                return; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            else {
                for (i = 0; i < len; i++) {
                    flg = SYS_GetFldValueByDo(PaymentInstrDeal[i], "CPYT_C_SDA_FLAG");
                    if (flg == "Sight" || DISCNT_FLG == 'YES') {
                        debitheader = null;
                        debitheader = PaymentInstrDeal[i].getDoByName("PaymentDebitHeader");
                        if (debitheader == null) {
                            return;
                        } else {
                            SYS_UpdateFldValueByDo(debitheader[0], "CPYT_DR_TTL_AMT_TTLCCY", SYT_AmtFormat(ccy, document.MAINFORM.TTL_DR_AMT.value));
                            totalamount = SYS_BeFloat(document.MAINFORM.TTL_DR_AMT.value);
                            arrDebit = PaymentInstrDeal[i].getDoByName("PaymentDebit");
                            len = arrDebit.length;
                            for (i = 0; i < len; i++) {
                                debit = arrDebit[i];
                                percent = SYS_BeFloat(debit.getDoValueByName('CPYT_DR_PER'));
                                rate = SYS_BeFloat(debit.getDoValueByName('CPYT_DR_BUY_RATE'));
                                trxamount = totalamount * percent * rate / 100;
                                realamount = totalamount * percent / 100;
                                SYS_UpdateFldValueByDo(debit, 'CPYT_DR_AMT_DRCCY', SYT_AmtFormat(ccy, trxamount));
                                SYS_UpdateFldValueByDo(debit, 'CPYT_DR_AMT_TXCCY', SYT_AmtFormat(ccy, realamount));
                            }
                            SYS_RefreshDoGrid(arrDebit);
                        }
                    }
                }
            }
        } else {
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_DR.value);
            EEHtml.fireEvent(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY, "onchange");
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit", e);
    }
}

function SYM_IPLC_ShowAnalysisCertificate() {
    try {
        if (document.MAINFORM.CERT_ANALY_CB.checked) {
            document.MAINFORM.CERT_ANALY_COPY.style.visibility = "visible";
        } else {
            document.MAINFORM.CERT_ANALY_COPY.style.visibility = "hidden";
            document.MAINFORM.CERT_ANALY_COPY.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowAnalysisCertificate", e);
    }
}

function SYM_IPLC_ShowAnalysisCertificate_CB() {
    try {
        if (document.MAINFORM.CERT_ANALY_COPY.value != '') {
            document.MAINFORM.CERT_ANALY_CB.checked = true;
            SYM_IPLC_ShowAnalysisCertificate();
        } else {
            document.MAINFORM.CERT_ANALY_CB.checked = false;
            SYM_IPLC_ShowAnalysisCertificate();
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowAnalysisCertificate_CB", e);
    }
}

function SYM_IPLC_ShowBeneficiaryCertificate() {
    try {
        if (document.MAINFORM.BEN_CERT_CB.checked) {
            document.MAINFORM.BEN_CERT_COPY.style.visibility = "visible";
            document.MAINFORM.BEN_CERT_TEXT.style.visibility = "visible";
        } else {
            document.MAINFORM.BEN_CERT_COPY.style.visibility = "hidden";
            document.MAINFORM.BEN_CERT_TEXT.style.visibility = "hidden";
            document.MAINFORM.BEN_CERT_COPY.value = '';
            document.MAINFORM.BEN_CERT_TEXT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowBeneficiaryCertificate", e);
    }
}

function SYM_IPLC_ShowBeneficiaryCertificate_CB() {
    try {
        if (document.MAINFORM.BEN_CERT_COPY.value != '') {
            document.MAINFORM.BEN_CERT_CB.checked = true;
            SYM_IPLC_ShowBeneficiaryCertificate();
        } else {
            document.MAINFORM.BEN_CERT_CB.checked = false;
            SYM_IPLC_ShowBeneficiaryCertificate();
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowBeneficiaryCertificate_CB", e);
    }
}

function SYM_IPLC_ShowCertificateofOrigin() {
    try {
        if (document.MAINFORM.CERT_ORIG_CB.checked) {
            document.MAINFORM.CERT_ORIG_COPY.style.visibility = "visible";
            document.MAINFORM.CERT_ORIG_TYPE.style.visibility = "visible";
        } else {
            document.MAINFORM.CERT_ORIG_COPY.style.visibility = "hidden";
            document.MAINFORM.CERT_ORIG_TYPE.style.visibility = "hidden";
            document.MAINFORM.CERT_ORIG_TYPE.value = '';
            document.MAINFORM.CERT_ORIG_COPY.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowCertificateofOrigin", e);
    }
}

function SYM_IPLC_ShowCertificateofOrigin_CB() {
    try {
        if (document.MAINFORM.CERT_ORIG_COPY.value != '' || document.MAINFORM.CERT_ORIG_TYPE.value != '') {
            document.MAINFORM.CERT_ORIG_CB.checked = true;
            SYM_IPLC_ShowCertificateofOrigin();
        } else {
            document.MAINFORM.CERT_ORIG_CB.checked = false;
            SYM_IPLC_ShowCertificateofOrigin();
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowCertificateofOrigin_CB", e);
    }
}

function SYM_IPLC_ShowCertificateofQuality() {
    try {
        if (document.MAINFORM.CERT_QTY_CB.checked) {
            document.MAINFORM.CERT_QTY_COPY.style.visibility = "visible";
        } else {
            document.MAINFORM.CERT_QTY_COPY.style.visibility = "hidden";
            document.MAINFORM.CERT_QTY_COPY.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowCertificateofQuality", e);
    }
}

function SYM_IPLC_ShowCertificateofQuality_CB() {
    try {
        if (document.MAINFORM.CERT_QTY_COPY.value != '') {
            document.MAINFORM.CERT_QTY_CB.checked = true;
            SYM_IPLC_ShowCertificateofQuality();
        } else {
            document.MAINFORM.CERT_QTY_CB.checked = false;
            SYM_IPLC_ShowCertificateofQuality();

        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowCertificateofQuality_CB", e);
    }
}

function SYM_IPLC_ShowComm_Inv() {
    try {
        if (document.MAINFORM.COMM_INV_CB.checked) {
            document.MAINFORM.COMM_INV.style.visibility = "visible";
        } else {
            document.MAINFORM.COMM_INV.style.visibility = "hidden";
            document.MAINFORM.COMM_INV.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowComm_Inv", e);
    }
}

function SYM_IPLC_ShowComm_Inv_CB() {
    try {
        if (document.MAINFORM.COMM_INV.value != '') {
            document.MAINFORM.COMM_INV_CB.checked = true;
            SYM_IPLC_ShowComm_Inv();
        } else {
            document.MAINFORM.COMM_INV_CB.checked = false;
            SYM_IPLC_ShowComm_Inv();
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowComm_Inv_CB", e);
    }
}

function SYM_IPLC_ShowExportLicence() {
    try {
        if (document.MAINFORM.CERT_EXPORT_CB.checked) {
            document.MAINFORM.CERT_EXPORT_COPY.style.visibility = "visible";
            document.MAINFORM.CERT_EXPORT_TYPE.style.visibility = "visible";
        } else {
            document.MAINFORM.CERT_EXPORT_COPY.style.visibility = "hidden";
            document.MAINFORM.CERT_EXPORT_TYPE.style.visibility = "hidden";
            document.MAINFORM.CERT_EXPORT_COPY.value = '';
            document.MAINFORM.CERT_EXPORT_TYPE.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowExportLicence", e);
    }
}

function SYM_IPLC_ShowExportLicence_CB() {
    try {
        if (document.MAINFORM.CERT_EXPORT_COPY.value != '' || document.MAINFORM.CERT_EXPORT_TYPE.value != '') {
            document.MAINFORM.CERT_EXPORT_CB.checked = true;
            SYM_IPLC_ShowExportLicence();
        } else {
            document.MAINFORM.CERT_EXPORT_CB.checked = false;
            SYM_IPLC_ShowExportLicence();
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowExportLicence_CB", e);
    }
}

function SYM_IPLC_ShowInsuranceDocument() {
    try {
        if (document.MAINFORM.INS_DOCS_CB.checked) {
            document.MAINFORM.INS_DOCS_TYPE.style.visibility = "visible";
            document.MAINFORM.INS_DOCS_COV.style.visibility = "visible";
        } else {
            document.MAINFORM.INS_DOCS_TYPE.style.visibility = "hidden";
            document.MAINFORM.INS_DOCS_COV.style.visibility = "hidden";
            document.MAINFORM.INS_DOCS_TYPE.value = '';
            document.MAINFORM.INS_DOCS_PERC.value = '';
            document.MAINFORM.INS_DOCS_COV.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowInsuranceDocument", e);
    }
}

function SYM_IPLC_ShowInsuranceDocument_CB() {
    try {
        if (document.MAINFORM.INS_DOCS_TYPE.value != '' || document.MAINFORM.INS_DOCS_COV.value != '') {
            document.MAINFORM.INS_DOCS_CB.checked = true;
            EEHtml.getElementById("insurance document").style.display = "block";
            SYM_IPLC_ShowInsuranceDocument();
        } else {
            document.MAINFORM.INS_DOCS_CB.checked = false;
            EEHtml.getElementById("insurance document").style.display = "none";
            SYM_IPLC_ShowInsuranceDocument();
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowInsuranceDocument_CB", e);
    }
}

function SYM_IPLC_ShowPackingList() {
    try {
        if (document.MAINFORM.PACK_LIST_CB.checked) {
            document.MAINFORM.PACK_LIST_COPY.style.visibility = "visible";
        } else {
            document.MAINFORM.PACK_LIST_COPY.style.visibility = "hidden";
            document.MAINFORM.PACK_LIST_COPY.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowPackingList", e);
    }
}

function SYM_IPLC_ShowPackingList_CB() {
    try {
        if (document.MAINFORM.PACK_LIST_COPY.value != '') {
            document.MAINFORM.PACK_LIST_CB.checked = true;
            SYM_IPLC_ShowPackingList();
        } else {
            document.MAINFORM.PACK_LIST_CB.checked = false;
            SYM_IPLC_ShowPackingList();
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowPackingList_CB", e);
    }
}

function SYM_IPLC_ShowTransportDocument() {
    try {
        if (document.MAINFORM.TRANS_DOCS_CB.checked) {
            document.MAINFORM.TRANS_DOCS_CONS.style.visibility = "visible";
            document.MAINFORM.TRANS_DOCS_FREI.style.visibility = "visible";
            document.MAINFORM.TRANS_DOCS_ORIG.style.visibility = "visible";
            document.MAINFORM.TRANS_DOCS_TYPE.style.visibility = "visible";
            document.MAINFORM.TRANS_DOCS_APPL.style.visibility = "visible";
            SYM_IPLC_CHK_TRANS_DOCS_FREI();
        } else {
            document.MAINFORM.TRANS_DOCS_APPL.style.visibility = "hidden";
            document.MAINFORM.TRANS_DOCS_CONS.style.visibility = "hidden";
            document.MAINFORM.TRANS_DOCS_FREI.style.visibility = "hidden";
            document.MAINFORM.TRANS_DOCS_ORIG.style.visibility = "hidden";
            document.MAINFORM.TRANS_DOCS_TYPE.style.visibility = "hidden";
            document.MAINFORM.TRACER_DATE.style.visibility = "hidden";
            document.MAINFORM.BROKER_NM.style.visibility = "hidden";
            document.MAINFORM.BROKER_ADD.style.visibility = "hidden";
            document.MAINFORM.TRANS_DOCS_APPL.value = '';
            document.MAINFORM.TRANS_DOCS_CONS.value = '';
            document.MAINFORM.TRANS_DOCS_FREI.value = '';
            document.MAINFORM.TRANS_DOCS_ORIG.value = '';
            document.MAINFORM.TRANS_DOCS_TYPE.value = '';
            document.MAINFORM.TRACER_DATE.value = '';
            document.MAINFORM.BROKER_NM.value = '';
            document.MAINFORM.BROKER_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowTransportDocument", e);
    }
}

function SYM_IPLC_ShowTransportDocument_CB() {
    try {
        var APPL; // Utility Auto Fix Comments
        var CONS; // Utility Auto Fix Comments
        var FREI; // Utility Auto Fix Comments
        var ORIG; // Utility Auto Fix Comments
        var sTYPE; // Utility Auto Fix Comments
        APPL = document.MAINFORM.TRANS_DOCS_APPL.value;
        CONS = document.MAINFORM.TRANS_DOCS_CONS.value;
        FREI = document.MAINFORM.TRANS_DOCS_FREI.value;
        ORIG = document.MAINFORM.TRANS_DOCS_ORIG.value;
        sTYPE = document.MAINFORM.TRANS_DOCS_TYPE.value;
        if (APPL != '' || CONS != '' || FREI != '' || ORIG != '' || sTYPE != '') {
            document.MAINFORM.TRANS_DOCS_CB.checked = true;
            SYM_IPLC_ShowTransportDocument();
        } else {
            document.MAINFORM.TRANS_DOCS_CB.checked = false;
            SYM_IPLC_ShowTransportDocument();
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowTransportDocument_CB", e);
    }
}

function SYM_IPLC_ShowTransportDocument_CB_notInit() {
    try {
        var APPL; // Utility Auto Fix Comments
        var CONS; // Utility Auto Fix Comments
        var FREI; // Utility Auto Fix Comments
        var ORIG; // Utility Auto Fix Comments
        var sTYPE; // Utility Auto Fix Comments
        APPL = document.MAINFORM.TRANS_DOCS_APPL.value;
        CONS = document.MAINFORM.TRANS_DOCS_CONS.value;
        FREI = document.MAINFORM.TRANS_DOCS_FREI.value;
        ORIG = document.MAINFORM.TRANS_DOCS_ORIG.value;
        sTYPE = document.MAINFORM.TRANS_DOCS_TYPE.value;
        if (APPL != '' || CONS != '' || FREI != '' || ORIG != '' || sTYPE != '') {
            document.MAINFORM.TRANS_DOCS_CB.checked = true;
            SYM_IPLC_ShowTransportDocument_notInit();
        } else {
            document.MAINFORM.TRANS_DOCS_CB.checked = false;
            SYM_IPLC_ShowTransportDocument_notInit();
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowTransportDocument_CB_notInit", e);
    }
}

function SYM_IPLC_ShowTransportDocument_notInit() {
    try {
        if (document.MAINFORM.TRANS_DOCS_CB.checked) {
            document.MAINFORM.TRANS_DOCS_CONS.style.visibility = "visible";
            document.MAINFORM.TRANS_DOCS_FREI.style.visibility = "visible";
            document.MAINFORM.TRANS_DOCS_ORIG.style.visibility = "visible";
            document.MAINFORM.TRANS_DOCS_TYPE.style.visibility = "visible";
            document.MAINFORM.TRANS_DOCS_APPL.style.visibility = "visible";
        } else {
            document.MAINFORM.TRANS_DOCS_APPL.style.visibility = "hidden";
            document.MAINFORM.TRANS_DOCS_CONS.style.visibility = "hidden";
            document.MAINFORM.TRANS_DOCS_FREI.style.visibility = "hidden";
            document.MAINFORM.TRANS_DOCS_ORIG.style.visibility = "hidden";
            document.MAINFORM.TRANS_DOCS_TYPE.style.visibility = "hidden";
            document.MAINFORM.TRACER_DATE.style.visibility = "hidden";
            document.MAINFORM.BROKER_NM.style.visibility = "hidden";
            document.MAINFORM.BROKER_ADD.style.visibility = "hidden";
            document.MAINFORM.TRANS_DOCS_APPL.value = '';
            document.MAINFORM.TRANS_DOCS_CONS.value = '';
            document.MAINFORM.TRANS_DOCS_FREI.value = '';
            document.MAINFORM.TRANS_DOCS_ORIG.value = '';
            document.MAINFORM.TRANS_DOCS_TYPE.value = '';
            document.MAINFORM.TRACER_DATE.value = '';
            document.MAINFORM.BROKER_NM.value = '';
            document.MAINFORM.BROKER_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowTransportDocument_notInit", e);
    }
}

function SYM_IPLC_ShowWeightCertificate() {
    try {
        if (document.MAINFORM.CERT_WEIG_CB.checked) {
            document.MAINFORM.CERT_WEIG_COPY.style.visibility = "visible";
        } else {
            document.MAINFORM.CERT_WEIG_COPY.style.visibility = "hidden";
            document.MAINFORM.CERT_WEIG_COPY.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowWeightCertificate", e);
    }
}

function SYM_IPLC_ShowWeightCertificate_CB() {
    try {
        if (document.MAINFORM.CERT_WEIG_COPY.value != '') {
            document.MAINFORM.CERT_WEIG_CB.checked = true;
            SYM_IPLC_ShowWeightCertificate();
        } else {
            document.MAINFORM.CERT_WEIG_CB.checked = false;
            SYM_IPLC_ShowWeightCertificate();
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_ShowWeightCertificate_CB", e);
    }
}

function SYM_IPLC_TRAN_LC_FIELDS() {
    try {
        if (document.MAINFORM.AVAL_BY.value != 'BY MIXED PYMT') {
            SYT_ChangeFldClass_New('AVAL_BY', "P");
        } else {
            SYT_ChangeFldClass_New('AVAL_BY', "O");

        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_TRAN_LC_FIELDS", e);
    }
}

function SYM_IPLC_addPaymentRecord() {
    try {
        var Func; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        //modified for PUI
        //return;

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'FP') {
            xDO = SYS_getDoByXpath("PaymentTermsHeader");
            if (xDO) {
                Func = xDO.getselectedFrame().window["addOneRecordToPaymentDO"];
                Func();
            }
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_addPaymentRecord", e);
    }
}

function SYM_IPLC_change_APLB_RULE_NARR() {
    try {
        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            document.MAINFORM.APLB_RULE_NARR.style.visibility = 'visible';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'H');

        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_change_APLB_RULE_NARR", e);
    }
}

function SYM_IPLC_change_EXPIRY_PLC_NARR() {
    try {
        if (document.MAINFORM.EXPIRY_PLC.value == "Other") {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'hidden';
            document.MAINFORM.EXPIRY_PLC_NARR.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_change_EXPIRY_PLC_NARR", e);
    }
}

function SYM_IPLC_getRows(sLine, cols) {
    try {
        var arr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var isFlag; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var preCh; // Utility Auto Fix Comments
        var retRow; // Utility Auto Fix Comments
        var sRow; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        arr = new Array();
        isFlag = false;
        len = sLine.length;
        preCh = "";
        temp = "";
        isFlag = (sLine.charAt(0) == " " ? true : false);
        for (i = 0; i < len; i++) {
            ch = sLine.charAt(i);
            if (preCh == " " && ch != " ") {
                if (isFlag) {
                    isFlag = false;
                    temp += ch;
                } else {
                    arr[arr.length] = temp;
                    temp = ch;
                }
            } else {
                temp += ch;
            }
            preCh = ch;
        }
        arr[arr.length] = temp;
        len = arr.length;
        retRow = 0;
        sRow = "";
        for (i = 0; i < arr.length; i++) {
            str = arr[i];
            if (sRow.length + str.length > cols) {
                sRow = str;
                if (i != 0) {
                    retRow++;
                }
                //(i!=0?retRow++:false);
                while (true) {
                    if (sRow.length >= cols) {
                        sRow = sRow.substring(cols, sRow.length);
                        retRow++;
                    } else { // Utility Auto Fix Comments
                        break; // Utility Auto Fix Comments
                    } // Utility Auto Fix Comments
                }
            } else {
                sRow += str;
            }
        }
        //(sRow.length>0?retRow++:false);
        if (sRow.length > 0) {
            retRow++;
        }
        return retRow;
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_getRows", e);
    }
}

function SYM_IPLC_setDocumentsData() {
    try {
        var DUP; // Utility Auto Fix Comments
        var DocumentNames; // Utility Auto Fix Comments
        var ORIG; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        i = 0;

        DocumentNames = new Array(11);
        ORIG = new Array(11);
        DUP = new Array(11);

        ORIG[1] = document.MAINFORM.DRAFT_1.value;
        ORIG[2] = document.MAINFORM.INVOICE_1.value;
        ORIG[3] = document.MAINFORM.BL_AWB_1.value;
        ORIG[4] = document.MAINFORM.CERTIFICATE_1.value;
        ORIG[5] = document.MAINFORM.INSP_CERT_1.value;
        ORIG[6] = document.MAINFORM.PACK_LIST_1.value;
        ORIG[7] = document.MAINFORM.INSURANCE_1.value;
        ORIG[8] = document.MAINFORM.VESSEL_CERT_1.value;
        ORIG[9] = document.MAINFORM.FREIGHT_INV_1.value;
        ORIG[10] = document.MAINFORM.BENEF_CERT_1.value;
        ORIG[11] = document.MAINFORM.OTHERS_1.value;

        DUP[1] = document.MAINFORM.DRAFT_2.value;
        DUP[2] = document.MAINFORM.INVOICE_2.value;
        DUP[3] = document.MAINFORM.BL_AWB_2.value;
        DUP[4] = document.MAINFORM.CERTIFICATE_2.value;
        DUP[5] = document.MAINFORM.INSP_CERT_2.value;
        DUP[6] = document.MAINFORM.PACK_LIST_2.value;
        DUP[7] = document.MAINFORM.INSURANCE_2.value;
        DUP[8] = document.MAINFORM.VESSEL_CERT_2.value;
        DUP[9] = document.MAINFORM.FREIGHT_INV_2.value;
        DUP[10] = document.MAINFORM.BENEF_CERT_2.value;
        DUP[11] = document.MAINFORM.OTHERS_2.value;

        DocumentNames[1] = "  " + document.MAINFORM.DRAFT.value + SYT_AddMoreSpace(35 - document.MAINFORM.DRAFT.value.length);
        DocumentNames[2] = "  " + document.MAINFORM.INVOICE.value + SYT_AddMoreSpace(35 - document.MAINFORM.INVOICE.value.length);
        DocumentNames[3] = "  " + document.MAINFORM.BL_AWB.value + SYT_AddMoreSpace(35 - document.MAINFORM.BL_AWB.value.length);
        DocumentNames[4] = "  " + document.MAINFORM.CERTIFICATE.value + SYT_AddMoreSpace(35 - document.MAINFORM.CERTIFICATE.value.length);
        DocumentNames[5] = "  " + document.MAINFORM.INSP_CERT.value + SYT_AddMoreSpace(35 - document.MAINFORM.INSP_CERT.value.length);
        DocumentNames[6] = "  " + document.MAINFORM.PACK_LIST.value + SYT_AddMoreSpace(35 - document.MAINFORM.PACK_LIST.value.length);
        DocumentNames[7] = "  " + document.MAINFORM.INSURANCE.value + SYT_AddMoreSpace(35 - document.MAINFORM.INSURANCE.value.length);
        DocumentNames[8] = "  " + document.MAINFORM.VESSEL_CERT.value + SYT_AddMoreSpace(35 - document.MAINFORM.VESSEL_CERT.value.length);
        DocumentNames[9] = "  " + document.MAINFORM.FREIGHT_INV.value + SYT_AddMoreSpace(35 - document.MAINFORM.FREIGHT_INV.value.length);
        DocumentNames[10] = "  " + document.MAINFORM.BENEF_CERT.value + SYT_AddMoreSpace(35 - document.MAINFORM.BENEF_CERT.value.length);
        DocumentNames[11] = "  " + document.MAINFORM.OTHERS.value + SYT_AddMoreSpace(35 - document.MAINFORM.OTHERS.value.length);


        document.MAINFORM.DOC_PRES.value = "-----------------------------------------------------------" + '\n' + " Documents Present                Original          Copies" + "\n" + "-----------------------------------------------------------";

        for (i = 1; i <= 11; i++) {
            if (ORIG[i] != 0 || DUP[i] != 0) { // Utility Auto Fix Comments
                document.MAINFORM.DOC_PRES.value = document.MAINFORM.DOC_PRES.value + "\n" + DocumentNames[i] + ORIG[i] + SYT_AddMoreSpace(15 + 3 - ORIG[i].length) + DUP[i]; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
        }

        document.MAINFORM.DOC_PRES.value = document.MAINFORM.DOC_PRES.value + "\n" + "-----------------------------------------------------------";
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_setDocumentsData", e);
    }
}

function SYM_IPLC_setRef(ref) {
    try {
        var mainRef; // Utility Auto Fix Comments
        mainRef = ref;
        document.MAINFORM.C_MAIN_REF.value = mainRef;
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_setRef", e);
    }
}

function SYM_IPLC_showMixPayment() {
    try {
        var obj; // Utility Auto Fix Comments
        //modified for PUI
        //return;

        obj = EEHtml.getElementById("AVAL_BY");
        if ('BY MIXED PYMT' == obj.value) {
            EEHtml.getElementById('K').style.display = '';
            initFlag = true;
        } else {
            EEHtml.getElementById('K').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_showMixPayment", e);
    }
}

function SYM_IPLC_showMixPaymentSchedule() {
    try {
        var obj; // Utility Auto Fix Comments
        //modified for PUI
        // return;

        obj = EEHtml.getElementById("AVAL_BY");
        if ('BY MIXED PYMT' == obj.value) {
            EEHtml.getElementById('K').style.display = 'block';
            initFlag = true;
            // DoFrame.showDO("PaymentScheduleHeader","K_div");no need this method 
        } else {
            EEHtml.getElementById('K').style.display = 'none';
            DoFrame.hideDO("PaymentScheduleHeader", "K_div");
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_showMixPaymentSchedule", e);
    }
}

function SYM_IPLC_showMixPayment_New() {
    try {
        var obj;
        obj = EEHtml.getElementById("NEW_AVAL_BY");
        if (obj.value == 'BY MIXED PYMT') {
            EEHtml.getElementById('K').style.display = '';
            initFlag = true;
        } else {
            EEHtml.getElementById('K').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_IPLC.js*SYM_IPLC_showMixPayment_New", e);
    }
}