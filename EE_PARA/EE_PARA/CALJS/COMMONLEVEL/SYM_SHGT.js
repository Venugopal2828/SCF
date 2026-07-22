function SYM_SHGT_SetRefNo(ref) {
    try {

        var nLc_no = ref.substr(0, 6);
        var nSeq = ref.substr(6, 10);
        var sys_dt = SYS_BUSI_DATE;
        var yr = sys_dt.toString().substr(2, 2);
        document.MAINFORM.C_MAIN_REF.value = nLc_no + nSeq;
        document.MAINFORM.SG_NO.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.SG_NO.value;
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_APPL_ID_back() {
    try {

        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_APPL_NM() {
    try {

        if (document.MAINFORM.APPL_ID.value == '') {
            document.MAINFORM.APPL_NM.value = '';
            document.MAINFORM.APPL_ADD1.value = '';
            document.MAINFORM.APPL_ADD2.value = '';
            document.MAINFORM.APPL_ADD3.value = '';
            document.MAINFORM.APPL_EMAIL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL, "O");
            document.MAINFORM.APPL_FAX.value = '';
            document.MAINFORM.APPL_MAIL_ADD.value = '';
            document.MAINFORM.APPL_CORR_MED.value = 'None';
            document.MAINFORM.APPL_TLX.value = '';
            document.MAINFORM.APPL_REF.value = '';
            document.MAINFORM.APPL_NOTES.value = '';
            document.MAINFORM.APPL_LANG.value = 'English';
            document.MAINFORM.APPL_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
            SYM_SHGT_APPL_ID_C2();
        } else {
            SYS_GetCUBK('APPL_ID', document.MAINFORM.APPL_ID.name, 'SYM_SHGT_APPL_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_APPL_ID_C2() {
    try {

        if (document.MAINFORM.APPL_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_ADD_BTN, "P");
            SYT_ChangeFldClass(document.MAINFORM.APPL_POST_ADD_BTN, "P");
        }
        if (document.MAINFORM.APPL_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_ADD_BTN, "O");
            SYT_ChangeFldClass(document.MAINFORM.APPL_POST_ADD_BTN, "O");

        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_APPL_ID_B() {
    try {

        if (SYS_ORG_FUNCTION_SHORT_NAME == 'SG_IC_OneStep') {
            SYM_SHGT_Chg_SG_COMM_IC();

        }
        SYM_SHGT_APPL_CORR_MED();
        SYM_SHGT_Cal_APPL_ID_back();
        SYM_SHGT_APPL_ID_C2();
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_APPL_CORR_MED() {
    try {

        if (document.MAINFORM.APPL_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, "O");
        }
        if (document.MAINFORM.APPL_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL, "O");
        }
        if (document.MAINFORM.APPL_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_TLX, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_TLX, "O");
        }
        if (document.MAINFORM.APPL_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX, "O");
        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_APPL_ADD() {
    try {

        SYS_InqCUBK_byCondition('APPL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_APPL_ORDER_NO() {
    try {

        //var APPL_ORDER_NO = document.MAINFORM.APPL_ORDER_NO.value;
        //var APPL_ID = document.MAINFORM.APPL_ID.value;
        //var sSQLWhere = "ORDER_NO = " + APPL_ORDER_NO + " AND C_MAIN_REF = '" + APPL_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "APPL_NM;APPL_ADD1;APPL_ADD2;APPL_ADD3";
        SYS_GetTableDataByRule_S('SYM_SHGT_SYM_SHGT_Cal_APPL_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_APPL_POST_ADD() {
    try {

        SYS_InqCUBK_byCondition('APPL_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_APPL_ORDER_POST2() {
    try {

        //var APPL_ORDER_POST = document.MAINFORM.APPL_ORDER_POST.value;
        //var APPL_ID = document.MAINFORM.APPL_ID.value;
        //var sSQLWhere = "ORDER_NO = " + APPL_ORDER_POST + " AND C_MAIN_REF = '" + APPL_ID + "'";
        //var sTableName = "POST_ADD_DO";
        //var sFieldList = "POSTAL_FMT_ADD";
        //var sMappingList = "APPL_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_SHGT_SYM_SHGT_Cal_APPL_ORDER_POST2_1', '1');
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Sql_APPL_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments
        var retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('APPL_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_SHIPCO_ID_back() {
    try {

        SYT_Show_Notes(document.MAINFORM.SHIPCO_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_SHIPCO_NM() {
    try {

        if (document.MAINFORM.SHIPCO_ID.value == '') {
            document.MAINFORM.SHIPCO_ADD1.value = '';
            document.MAINFORM.SHIPCO_ADD2.value = '';
            document.MAINFORM.SHIPCO_ADD3.value = '';
            document.MAINFORM.SHIPCO_COR_MED.value = '';
            document.MAINFORM.SHIPCO_EMAIL.value = '';
            document.MAINFORM.SHIPCO_FAX.value = '';
            document.MAINFORM.SHIPCO_MAIL_ADD.value = '';
            document.MAINFORM.SHIPCO_NM.value = '';
            document.MAINFORM.SHIPCO_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.SHIPCO_NOTES.name);
            SYM_SHGT_SHIPCO_ID_C2();
        } else {
            SYS_GetCUBK('SHIPCO_ID', document.MAINFORM.SHIPCO_ID.name, 'SYM_SHGT_SHIPCO_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_SHIPCO_ID_C2() {
    try {

        if (document.MAINFORM.SHIPCO_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_ADD_BTN, "P");
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_POST_ADD_BTN, "P");
        }
        if (document.MAINFORM.SHIPCO_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_ADD_BTN, "O");
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_POST_ADD_BTN, "O");

        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_SHIPCO_ID_B() {
    try {

        SYM_SHGT_SHIPCO_CORR_MED();
        SYM_SHGT_Cal_SHIPCO_ID_back();
        SYM_SHGT_SHIPCO_ID_C2();
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_SHIPCO_CORR_MED() {
    try {

        if (document.MAINFORM.SHIPCO_COR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_MAIL_ADD, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_MAIL_ADD, "O");
        }
        if (document.MAINFORM.SHIPCO_COR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_EMAIL, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_EMAIL, "O");
        }
        if (document.MAINFORM.SHIPCO_COR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_FAX, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SHIPCO_FAX, "O");
        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_SHIPCO_ADD() {
    try {

        SYS_InqCUBK_byCondition('SHIPCO_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_SHIPCO_ORDER_NO() {
    try {

        //var SHIPCO_ORDER_NO = document.MAINFORM.SHIPCO_ORDER_NO.value;
        //var SHIPCO_ID = document.MAINFORM.SHIPCO_ID.value;
        //var sSQLWhere = "ORDER_NO = " + SHIPCO_ORDER_NO + " AND C_MAIN_REF = '" + SHIPCO_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "SHIPCO_NM;SHIPCO_ADD1;SHIPCO_ADD2;SHIPCO_ADD3";
        SYS_GetTableDataByRule_S('SYM_SHGT_SYM_SHGT_Cal_SHIPCO_ORDER_NO_2', '1');
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_SHIPCO_POST_ADD() {
    try {

        SYS_InqCUBK_byCondition('SHIPCO_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_SHIPCO_ORDER_POST2() {
    try {

        //var SHIPCO_ORDER_POST = document.MAINFORM.SHIPCO_ORDER_POST.value;
        //var SHIPCO_ID = document.MAINFORM.SHIPCO_ID.value;
        //var sSQLWhere = "ORDER_NO = " + SHIPCO_ORDER_POST + " AND C_MAIN_REF = '" + SHIPCO_ID + "'";
        //var sTableName = "POST_ADD_DO";
        //var sFieldList = "POSTAL_FMT_ADD";
        //var sMappingList = "SHIPCO_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_SHGT_SYM_SHGT_Cal_SHIPCO_ORDER_POST2_3', '1');
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Sql_SHIPCO_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments
        var retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('SHIPCO_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Chg_SG_COMM() {
    try {

        var arr = ['SHGT_SG_COMM'];
        var amt = EEHtml.getElementById('SG_AMT').value;
        var ccy = EEHtml.getElementById('LC_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_CHG_mapLocal_Foreign_Cust() {
    try {

        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM");
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Functions_For_Chg() {
    try {

        if ("PM||MM||KP".indexOf(SYS_FUNCTION_TYPE) > -1) {
            CHG_setAllCollCcy(SYS_LOCAL_CCY); //add by sunny for charge voucher
            SYT_Set_TRXCCY2CHG(); //add by sunny for charge voucher
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE; //for #1189
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_DRWE_ID_back() {
    try {

        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_DRWE_NM() {
    try {

        if (document.MAINFORM.DRWE_ID.value == '') {
            document.MAINFORM.DRWE_ADD1.value = '';
            document.MAINFORM.DRWE_ADD2.value = '';
            document.MAINFORM.DRWE_ADD3.value = '';
            document.MAINFORM.DRWE_CORR_MED.value = '';
            document.MAINFORM.DRWE_EMAIL.value = '';
            document.MAINFORM.DRWE_FAX.value = '';
            document.MAINFORM.DRWE_LANG.value = 'English';
            document.MAINFORM.DRWE_MAIL_ADD.value = '';
            document.MAINFORM.DRWE_NM.value = '';
            document.MAINFORM.DRWE_REF.value = '';
            document.MAINFORM.DRWE_TELEX.value = '';
            document.MAINFORM.DRWE_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
            SYM_SHGT_DRWE_ID_C2();
        } else {
            SYS_GetCUBK('DRWE_ID', document.MAINFORM.DRWE_ID.name, 'SYM_SHGT_DRWE_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_DRWE_ID_C2() {
    try {

        if (document.MAINFORM.DRWE_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_POST_ADD_BTN, "P");
        }
        if (document.MAINFORM.DRWE_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_POST_ADD_BTN, "O");

        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_DRWE_ID_B() {
    try {

        if (SYS_ORG_FUNCTION_SHORT_NAME == 'SG_IC_OneStep') {
            SYM_SHGT_Chg_SG_COMM_IC();

        }
        SYM_SHGT_DRWE_CORR_MED();
        SYM_SHGT_Cal_DRWE_ID_back();
        SYM_SHGT_DRWE_ID_C2();
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_DRWE_CORR_MED() {
    try {

        if (document.MAINFORM.DRWE_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_MAIL_ADD, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_MAIL_ADD, "O");
        }
        if (document.MAINFORM.DRWE_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_EMAIL, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_EMAIL, "O");
        }
        if (document.MAINFORM.DRWE_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_TELEX, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_TELEX, "O");
        }
        if (document.MAINFORM.DRWE_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_FAX, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_FAX, "O");
        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_DRWR_ADD() {
    try {

        document.MAINFORM.DRWE_ORDER_NO.value = '';
        SYS_InqCUBK('DRWE_ADD', 'DRWE_ID');
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Cal_DRWE_POST_ADD() {
    try {

        document.MAINFORM.DRWE_ORDER_POST.value = '';
        SYS_InqCUBK('DRWE_POST_ADD', 'DRWE_ID');
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Sql_DRWE_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments
        var retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('DRWE_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_CHG_mapLocal_Foreign_Cust_IC() {
    try {

        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM");
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_Chg_SG_COMM_IC() {
    try {

        var arr = ['SHGT_SG_COMM'];
        var amt = EEHtml.getElementById('SG_AMT').value;
        var ccy = EEHtml.getElementById('SG_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_CHK_EMAIL(chkemail) {
    try {

        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(chkemail) == false) {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}

function SYM_SHGT_chk_faxNo(faxNo) {
    try {

        var s = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?_";
        for (var i = 0; i < faxNo.length; i++) {
            if (s.indexOf(faxNo.charAt(i)) != -1) {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYM_SHGT.js", e);
    }
}