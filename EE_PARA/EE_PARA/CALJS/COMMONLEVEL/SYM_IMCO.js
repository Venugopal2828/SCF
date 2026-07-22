function SYM_IMCO_SetRefNo(ref) {
    try {

        var nLc_no; // Utility Auto Fix Comments
        var nSeq; // Utility Auto Fix Comments
        var sys_dt; // Utility Auto Fix Comments
        var yr; // Utility Auto Fix Comments
        var nLc_no = ref.substr(0, 6);
        var nSeq = ref.substr(6, 10);
        var sys_dt = SYS_BUSI_DATE;
        var yr = sys_dt.toString().substr(2, 2);
        document.MAINFORM.C_MAIN_REF.value = nLc_no + nSeq;
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_NO.value;
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Chg_Calculate_COLL_Comm() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IMCO_COLL_COMM'];
        amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Postage_charge() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IMCO_POST_CHG_NA'];
        amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Chg_Calculate_IMCOSWIFT() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IMCO_SWIFT_CHG'];
        amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_SWIFT_CHARGE() {
    try {

        if (document.MAINFORM.MESG_TYPE.value == 'MT499' || document.MAINFORM.MESG_TYPE.value == 'MT999') {
            SYM_IMCO_Chg_Calculate_IMCOSWIFT();
        } else {
            SYT_RESET_COMM('IMCO_SWIFT_CHG');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_DEF_PMT_COM_CHG() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IMCO_DEF_PAY_COMM'];
        amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_COURIER_FEE_CHG() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IMCO_COURIER_CHG'];
        amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Rel_Goods_CHG() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IMCO_REL_GOODS_CHG'];
        amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_COLL_AMD_COMM_CHG() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IMCO_AMEND_COMM'];
        amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_DRWE_CORR_MED() {
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
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_DRWE_ID() {
    try {

        SYS_GetCUBK('DRW_ID', document.MAINFORM.DRWE_ID.name, 'SYM_IMCO_DRWE_CORR_MED()');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_DRWR_CORR_MED() {
    try {

        if (document.MAINFORM.DRWR_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.DRWR_MAIL_ADD, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWR_MAIL_ADD, "O");
        }
        if (document.MAINFORM.DRWR_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.DRWR_EMAIL, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWR_EMAIL, "O");
        }
        if (document.MAINFORM.DRWR_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.DRWR_TELEX, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWR_TELEX, "O");
        }
        if (document.MAINFORM.DRWR_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.DRWR_FAX, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWR_FAX, "O");
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_DRWR_ID() {
    try {

        SYS_GetCUBK('DRWR_ID', document.MAINFORM.DRWR_ID.name, 'SYM_IMCO_DRWR_CORR_MED()');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_PRES_BK_ID() {
    try {

        if (document.MAINFORM.PRES_BK_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "M");
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_DRWE_ID_back() {
    try {

        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_DRWE_NM() {
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
            SYM_IMCO_DRWE_ID_B2();
        } else {
            SYS_GetCUBK('DRW_ID', document.MAINFORM.DRWE_ID.name, 'SYM_IMCO_DRWE_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_DRWR_ID_back() {
    try {

        SYT_Show_Notes(document.MAINFORM.DRWR_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_DRWR_NM() {
    try {

        if (document.MAINFORM.DRWR_ID.value == '') {
            document.MAINFORM.DRWR_LANG.value = 'English';
            document.MAINFORM.DRWR_MAIL_ADD.value = '';
            document.MAINFORM.DRWR_NM.value = '';
            document.MAINFORM.DRWR_TELEX.value = '';
            document.MAINFORM.DRWR_ADD1.value = '';
            document.MAINFORM.DRWR_ADD2.value = '';
            document.MAINFORM.DRWR_ADD3.value = '';
            document.MAINFORM.DRWR_CORR_MED.value = '';
            document.MAINFORM.DRWR_EMAIL.value = '';
            document.MAINFORM.DRWR_FAX.value = '';
            document.MAINFORM.DRWR_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.DRWR_NOTES.name);
            SYM_IMCO_DRWR_ID_B2();

        } else {
            SYS_GetCUBK('DRWR_ID', document.MAINFORM.DRWR_ID.name, 'SYM_IMCO_DRWR_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_REMIT_BK_ID_back() {
    try {

        SYT_Show_Notes(document.MAINFORM.REMIT_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_REMIT_BK_NM() {
    try {

        if (document.MAINFORM.REMIT_BK_ID.value == '') {
            document.MAINFORM.REMIT_BK_ADD1.value = '';
            document.MAINFORM.REMIT_BK_ADD2.value = '';
            document.MAINFORM.REMIT_BK_ADD3.value = '';
            document.MAINFORM.REMIT_BK_NM.value = '';
            document.MAINFORM.REMIT_BK_SW_ADD.value = '';
            document.MAINFORM.REMIT_BK_COR_MED.value = '';
            document.MAINFORM.REMIT_BK_SW_TAG.value = '';
            document.MAINFORM.REMIT_LANG.value = 'English';
            document.MAINFORM.REMIT_MAIL_ADD.value = '';
            document.MAINFORM.REMIT_TLX.value = '';
            document.MAINFORM.REMIT_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.REMIT_NOTES.name);
            SYM_IMCO_REMIT_BK_ID_B2();


        } else {
            SYS_GetCUBK('REMIT_BK_ID', document.MAINFORM.REMIT_BK_ID.name, 'SYM_IMCO_REMIT_BK_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_PRES_BK_ID_back() {
    try {

        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_PRES_BK_NM() {
    try {

        if (document.MAINFORM.PRES_BK_ID.value == '') {
            document.MAINFORM.PRES_BK_ADD1.value = '';
            document.MAINFORM.PRES_BK_ADD2.value = '';
            document.MAINFORM.PRES_BK_ADD3.value = '';
            document.MAINFORM.PRES_BK_CORR_MED.value = '';
            document.MAINFORM.PRES_BK_LANG.value = 'English';
            document.MAINFORM.PRES_BK_MAIL_ADD.value = '';
            document.MAINFORM.PRES_BK_NM.value = '';
            document.MAINFORM.PRES_BK_REF.value = '';
            document.MAINFORM.PRES_BK_SW_ADD.value = '';
            document.MAINFORM.PRES_BK_SW_TAG.value = '';
            document.MAINFORM.PRES_BK_TLX.value = '';
            document.MAINFORM.PRES_BK_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
            SYM_IMCO_PRES_BK_ID_B2();

        } else {
            SYS_GetCUBK('PRES_BK_ID', document.MAINFORM.PRES_BK_ID.name, 'SYM_IMCO_PRES_BK_B()');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_NEW_DRWE_ID_back() {
    try {

        SYT_Show_Notes(document.MAINFORM.NEW_DRWE_NOTES.name); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_NEW_DRWE_NM() {
    try {

        if (document.MAINFORM.NEW_DRWE_ID.value == '') {
            document.MAINFORM.NEW_DRWE_ADD1.value = '';
            document.MAINFORM.NEW_DRWE_ADD2.value = '';
            document.MAINFORM.NEW_DRWE_ADD3.value = '';
            document.MAINFORM.NEW_DRWE_CORR_MED.value = '';
            document.MAINFORM.NEW_DRWE_EMAIL.value = '';
            document.MAINFORM.NEW_DRWE_FAX.value = '';
            document.MAINFORM.NEW_DRWE_LANG.value = '';
            document.MAINFORM.NEW_DRWE_MAIL_ADD.value = '';
            document.MAINFORM.NEW_DRWE_NM.value = '';
            document.MAINFORM.NEW_DRWE_REF.value = '';
            document.MAINFORM.NEW_DRWE_TELEX.value = '';
            document.MAINFORM.NEW_DRWE_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.NEW_DRWE_NOTES.name);
        }
        SYS_GetCUBK('NEW_DRWE_ID', document.MAINFORM.NEW_DRWE_ID.name, 'SYM_IMCO_Cal_NEW_DRWE_ID_back()');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_MT410_TAG_32() {
    try {

        /*if (document.MAINFORM.DUE_DT.value != '') {
            document.MAINFORM.MT410_TAG_32K.value = 'A';
        }
        if (document.MAINFORM.DUE_DT.value == '') {
            document.MAINFORM.MT410_TAG_32K.value = 'K';
        }*/
		if (document.MAINFORM.DELVR_DOC_AGST.value == 'D/P' ||  document.MAINFORM.TENOR_EVENT.value == 'XX') {
            document.MAINFORM.MT410_TAG_32K.value = 'B';
        }
        if ((document.MAINFORM.DELVR_DOC_AGST.value == 'D/A' || document.MAINFORM.DELVR_DOC_AGST.value == 'D/A and Aval')&& document.MAINFORM.TENOR_EVENT.value == 'XXX') {
            document.MAINFORM.MT410_TAG_32K.value = 'A';
		}

		if ((document.MAINFORM.DELVR_DOC_AGST.value == 'D/A' || document.MAINFORM.DELVR_DOC_AGST.value == 'D/A and Aval')&& (document.MAINFORM.TENOR_EVENT.value != 'XXX' && document.MAINFORM.TENOR_EVENT.value != 'XX'  )) {

            document.MAINFORM.MT410_TAG_32K.value = 'K';
			}

    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_MT430_TAG_32() {
    try {

       // if (document.MAINFORM.NEW_DUE_DT.value != '') {
			if ((document.MAINFORM.NEW_DELVR_DOC_AGST.value == 'D/A' || document.MAINFORM.NEW_DELVR_DOC_AGST.value == 'D/A and Aval') && document.MAINFORM.NEW_TENOR_EVENT.value == 'XXX') {
            document.MAINFORM.MT430_TAG_33K.value = 'A';
        }
        //if (document.MAINFORM.NEW_DUE_DT.value == '') {
						if ((document.MAINFORM.NEW_DELVR_DOC_AGST.value == 'D/A' || document.MAINFORM.NEW_DELVR_DOC_AGST.value == 'D/A and Aval') && document.MAINFORM.NEW_TENOR_EVENT.value != 'XXX') {
            document.MAINFORM.MT430_TAG_33K.value = 'K';
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_MT400_TAG_32() {
    try {

        if ((document.MAINFORM.DELVR_DOC_AGST.value == 'D/A' || document.MAINFORM.DELVR_DOC_AGST.value == 'D/A and Aval') && document.MAINFORM.TENOR_EVENT.value == 'XXX') {
            document.MAINFORM.MT400_TAG_32K.value = 'A';
        }
        if ((document.MAINFORM.DELVR_DOC_AGST.value == 'D/A' || document.MAINFORM.DELVR_DOC_AGST.value == 'D/A and Aval') && document.MAINFORM.TENOR_EVENT.value != 'XXX') {
            document.MAINFORM.MT400_TAG_32K.value = 'K';
        }
        if (document.MAINFORM.DELVR_DOC_AGST.value == 'D/P') {
            document.MAINFORM.MT400_TAG_32K.value = 'B';
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_MT420_TAG_32() {
    try {

        if (document.MAINFORM.DUE_DT.value != '') {
            document.MAINFORM.MT420_TAG_32K.value = 'A';
        }
        if (document.MAINFORM.DUE_DT.value == '') {
            document.MAINFORM.MT420_TAG_32K.value = 'K';
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_CAL_TENOR_32K() {
    try {

        var cTENOR_EVENT; // Utility Auto Fix Comments
        var nTENOR_DAYS; // Utility Auto Fix Comments
        nTENOR_DAYS = document.MAINFORM.TENOR_DAYS.value.length;
        cTENOR_EVENT = document.MAINFORM.TENOR_EVENT.value.trim().substr(0, 2);
        if (nTENOR_DAYS == 1) {
            document.MAINFORM.TEMP_TENOR_DAYS_32K.value = "00" + document.MAINFORM.TENOR_DAYS.value;
        } else if (nTENOR_DAYS == 2) {
            document.MAINFORM.TEMP_TENOR_DAYS_32K.value = "0" + document.MAINFORM.TENOR_DAYS.value;
        } else {
            document.MAINFORM.TEMP_TENOR_DAYS_32K.value = document.MAINFORM.TENOR_DAYS.value;
        }

        if (document.MAINFORM.DUE_DT.value == "") {
            if (document.MAINFORM.DAY_MON_FLG.value == "D") {
                document.MAINFORM.TEMP_TENOR_32K.value = "D" + document.MAINFORM.TEMP_TENOR_DAYS_32K.value + cTENOR_EVENT;
            }
            if (document.MAINFORM.DAY_MON_FLG.value == "M") {
                document.MAINFORM.TEMP_TENOR_32K.value = "M" + document.MAINFORM.TEMP_TENOR_DAYS_32K.value + cTENOR_EVENT;
            }
        } else {
            document.MAINFORM.TEMP_TENOR_32K.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_DRWE_ORDER_NO() {
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
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Cal_DRWE_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_DRWE_ADD() {
    try {

        SYS_InqCUBK_byCondition('DRWE_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_DRWR_ORDER_NO() {
    try {

        var DRWR_ID; // Utility Auto Fix Comments
        var DRWR_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //DRWR_ORDER_NO = document.MAINFORM.DRWR_ORDER_NO.value;
        //DRWR_ID = document.MAINFORM.DRWR_ID.value;
        //sSQLWhere = "ORDER_NO = " + DRWR_ORDER_NO + " AND C_MAIN_REF = '" + DRWR_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "DRWR_NM;DRWR_ADD1;DRWR_ADD2;DRWR_ADD3";
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Cal_DRWR_ORDER_NO_1', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_DRWR_ADD() {
    try {

        SYS_InqCUBK_byCondition('DRWR_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_REMIT_BK_ORDER_NO() {
    try {

        var REMIT_BK_ID; // Utility Auto Fix Comments
        var REMIT_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //REMIT_BK_ORDER_NO = document.MAINFORM.REMIT_BK_ORDER_NO.value;
        //REMIT_BK_ID = document.MAINFORM.REMIT_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + REMIT_BK_ORDER_NO + " AND C_MAIN_REF = '" + REMIT_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "REMIT_BK_NM;REMIT_BK_ADD1;REMIT_BK_ADD2;REMIT_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Cal_REMIT_BK_ORDER_NO_2', '1');

        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_REMIT_BK_ADD() {
    try {

        SYS_InqCUBK_byCondition('REMIT_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_PRES_BK_ORDER_NO() {
    try {

        var PRES_BK_ID; // Utility Auto Fix Comments
        var PRES_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //PRES_BK_ORDER_NO = document.MAINFORM.PRES_BK_ORDER_NO.value;
        //PRES_BK_ID = document.MAINFORM.PRES_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + PRES_BK_ORDER_NO + " AND C_MAIN_REF = '" + PRES_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "PRES_BK_NM;PRES_BK_ADD1;PRES_BK_ADD2;PRES_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Cal_PRES_BK_ORDER_NO_3', '1');
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_PRES_BK_ADD() {
    try {

        SYS_InqCUBK_byCondition('PRES_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_NEW_DRWE_ORDER_NO() {
    try {

        var NEW_DRWE_ID; // Utility Auto Fix Comments
        var NEW_DRWE_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //NEW_DRWE_ORDER_NO = document.MAINFORM.NEW_DRWE_ORDER_NO.value;
        //NEW_DRWE_ID = document.MAINFORM.NEW_DRWE_ID.value;
        //sSQLWhere = "ORDER_NO = " + NEW_DRWE_ORDER_NO + " AND C_MAIN_REF = '" + NEW_DRWE_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "NEW_DRWE_NM;NEW_DRWE_ADD1;NEW_DRWE_ADD2;NEW_DRWE_ADD3";
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Cal_NEW_DRWE_ORDER_NO_4', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_NEW_DRWE_ADD() {
    try {

        SYS_InqCUBK_byCondition('NEW_DRWE_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Sql_DRWE_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('DRW_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Sql_DRWR_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('DRWR_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Sql_NEW_DRWE_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NEW_DRWE_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Sql_REMIT_BK_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('REMIT_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Sql_PRES_BK_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('PRES_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Get_REMIT_BK_ID() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.REMIT_BK_SW_ADD.value.length == 11 || document.MAINFORM.REMIT_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.REMIT_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.REMIT_BK_SW_ADD.value = document.MAINFORM.REMIT_BK_SW_ADD.value + "XXX"; // Utility Auto Fix Comments
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.REMIT_BK_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "REMIT_BK_ID";
            SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Get_REMIT_BK_ID_5', '1', true);
            if (document.MAINFORM.REMIT_BK_ID.value != '') {
                SYS_GetCUBK('REMIT_BK_ID', 'REMIT_BK_ID', 'SYM_IMCO_REMIT_BK_ID_B');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Get_PRES_BK_ID() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.PRES_BK_SW_ADD.value.length == 11 || document.MAINFORM.PRES_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.PRES_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.PRES_BK_SW_ADD.value = document.MAINFORM.PRES_BK_SW_ADD.value + "XXX";
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.PRES_BK_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "PRES_BK_ID";
            SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Get_PRES_BK_ID_6', '1', true);
            if (document.MAINFORM.PRES_BK_ID.value != '') {
                SYS_GetCUBK('PRES_BK_ID', 'PRES_BK_ID', 'SYM_IMCO_PRES_BK_B');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_DRWE_POST_ADD() {
    try {

        SYS_InqCUBK_byCondition('DRWE_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_DRWE_ORDER_POST2() {
    try {

        var DRWE_ID; // Utility Auto Fix Comments
        var DRWE_ORDER_POST; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //DRWE_ORDER_POST = document.MAINFORM.DRWE_ORDER_POST.value;
        //DRWE_ID = document.MAINFORM.DRWE_ID.value;
        //sSQLWhere = "ORDER_NO = " + DRWE_ORDER_POST + " AND C_MAIN_REF = '" + DRWE_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "DRWE_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Cal_DRWE_ORDER_POST2_7', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_DRWR_POST_ADD() {
    try {

        SYS_InqCUBK_byCondition('DRWR_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_DRWR_ORDER_POST2() {
    try {

        var DRWR_ID; // Utility Auto Fix Comments
        var DRWR_ORDER_POST; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //DRWR_ORDER_POST = document.MAINFORM.DRWR_ORDER_POST.value;
        //DRWR_ID = document.MAINFORM.DRWR_ID.value;
        //sSQLWhere = "ORDER_NO = " + DRWR_ORDER_POST + " AND C_MAIN_REF = '" + DRWR_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "DRWR_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Cal_DRWR_ORDER_POST2_8', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_REMIT_POST_ADD() {
    try {

        SYS_InqCUBK_byCondition('REMIT_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_REMIT_BK_ORDER_POST2() {
    try {

        var REMIT_BK_ID; // Utility Auto Fix Comments
        var REMIT_BK_ORDER_POST; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //REMIT_BK_ORDER_POST = document.MAINFORM.REMIT_BK_ORDER_POST.value;
        //REMIT_BK_ID = document.MAINFORM.REMIT_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + REMIT_BK_ORDER_POST + " AND C_MAIN_REF = '" + REMIT_BK_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "REMIT_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Cal_REMIT_BK_ORDER_POST2_9', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_PRES_BK_POST_ADD() {
    try {

        SYS_InqCUBK_byCondition('PRES_BK_POST_ADD', '1');

    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_PRES_BK_ORDER_POST2() {
    try {

        var PRES_BK_ID; // Utility Auto Fix Comments
        var PRES_BK_ORDER_POST; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //PRES_BK_ORDER_POST = document.MAINFORM.PRES_BK_ORDER_POST.value;
        //PRES_BK_ID = document.MAINFORM.PRES_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + PRES_BK_ORDER_POST + " AND C_MAIN_REF = '" + PRES_BK_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "PRES_BK_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Cal_PRES_BK_ORDER_POST2_10', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_NEW_DRWE_POST_ADD() {
    try {

        SYS_InqCUBK_byCondition('NEW_DRWE_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_NEW_DRWE_ORDER_POST2() {
    try {

        var NEW_DRWE_ID; // Utility Auto Fix Comments
        var NEW_DRWE_ORDER_POST; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //NEW_DRWE_ORDER_POST = document.MAINFORM.NEW_DRWE_ORDER_POST.value;
        //NEW_DRWE_ID = document.MAINFORM.NEW_DRWE_ID.value;
        //sSQLWhere = "ORDER_NO = " + NEW_DRWE_ORDER_POST + " AND C_MAIN_REF = '" + NEW_DRWE_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "NEW_DRWE_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Cal_NEW_DRWE_ORDER_POST2_11', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_PRES_BK_ID_M() {
    try {

        if (document.MAINFORM.PRES_BK_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "M");
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_PRES_BK_B() {
    try {

        SYM_IMCO_PRES_BK_ID_M();
        SYM_IMCO_Cal_PRES_BK_ID_back();
        SYM_IMCO_PRES_BK_ID_B2();
        SYM_IMCO_PRES_BK_CORR_MED();
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_DRWE_ID_B() {
    try {

        SYM_IMCO_DRWE_CORR_MED();
        SYM_IMCO_Cal_DRWE_ID_back();
        SYM_IMCO_DRWE_ID_B2();
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_DRWR_ID_B() {
    try {

        SYM_IMCO_DRWR_CORR_MED();
        SYM_IMCO_Cal_DRWR_ID_back();
        SYM_IMCO_DRWR_ID_B2();
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_DRWE_ID_B2() {
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
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_REMIT_BK_ID_B() {
    try {

        SYM_IMCO_Cal_REMIT_BK_ID_back();
        SYM_IMCO_REMIT_BK_ID_B2();
        SYM_IMCO_REMIT_BK_CORR_MED();
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_DRWR_ID_B2() {
    try {

        if (document.MAINFORM.DRWR_ID.value == '') {

            SYT_ChangeFldClass(document.MAINFORM.DRWR_ADD_BTN, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWR_POST_ADD_BTN, "P");
        }
        if (document.MAINFORM.DRWR_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.DRWR_ADD_BTN, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRWR_POST_ADD_BTN, "O");

        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_REMIT_BK_ID_B2() {
    try {

        if (document.MAINFORM.REMIT_BK_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_ADD_BTN, "P");
            SYT_ChangeFldClass(document.MAINFORM.REMIT_POST_ADD_BTN, "P");
        }
        if (document.MAINFORM.REMIT_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_ADD_BTN, "O");
            SYT_ChangeFldClass(document.MAINFORM.REMIT_POST_ADD_BTN, "O");

        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_PRES_BK_ID_B2() {
    try {

        if (document.MAINFORM.PRES_BK_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, "P");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_POST_ADD_BTN, "P");
        }
        if (document.MAINFORM.PRES_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, "O");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_POST_ADD_BTN, "O");

        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_CHG_mapLocal_Foreign_Cust() {
    try {

        //Add by jane 20081111
        Chg.Screen.mapLocalCust("DRWE_ID", "DRWE_NM");
        Chg.Screen.mapForeignCust("DRWR_ID", "DRWR_NM");
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_PRE_SWIFT_TAG() {
    try {

        if (document.MAINFORM.PRES_BK_SW_ADD.value != '') {
            document.MAINFORM.PRES_BK_SW_TAG.value = 'A';
        }
        if (document.MAINFORM.PRES_BK_SW_ADD.value == '' && (document.MAINFORM.PRES_BK_NM.value != '' || document.MAINFORM.PRES_BK_ADD1.value != '' || document.MAINFORM.PRES_BK_ADD2.value != '' || document.MAINFORM.PRES_BK_ADD3.value != '')) {
            document.MAINFORM.PRES_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.PRES_BK_NM.value == '' && document.MAINFORM.PRES_BK_SW_ADD.value == '' && document.MAINFORM.PRES_BK_ADD1.value == '' && document.MAINFORM.PRES_BK_ADD2.value == '' && document.MAINFORM.PRES_BK_ADD3.value == '') {
            document.MAINFORM.PRES_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_REIM_SWIFT_TAG() {
    try {

        if (document.MAINFORM.REMIT_BK_SW_ADD.value != '') {
            document.MAINFORM.REMIT_BK_SW_TAG.value = 'A';
        }
        if (document.MAINFORM.REMIT_BK_SW_ADD.value == '' && (document.MAINFORM.REMIT_BK_NM.value != '' || document.MAINFORM.REMIT_BK_ADD1.value != '' || document.MAINFORM.REMIT_BK_ADD2.value != '' || document.MAINFORM.REMIT_BK_ADD3.value != '')) {
            document.MAINFORM.REMIT_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.REMIT_BK_NM.value == '' && document.MAINFORM.REMIT_BK_SW_ADD.value == '' && document.MAINFORM.REMIT_BK_ADD1.value == '' && document.MAINFORM.REMIT_BK_ADD2.value == '' && document.MAINFORM.REMIT_BK_ADD3.value == '') {
            document.MAINFORM.REMIT_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Set_NET_AMT_RCVD_COLL_CCY_toPayment() {
    try {

        //modified for PUI
        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value);
        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value);
        EEHtml.fireEvent(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY, "onchange");
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Set_TTL_PAID_DRWR_AMT_toPayment() {
    try {

        //modified for PUI
        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, document.MAINFORM.TTL_PAID_DRWR_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY, "onchange");
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Chg_Calculation_Other() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IMCO_OTHER_CHG'];
        amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_ORDER_CUST_ID_back() {
    try {

        SYT_Show_Notes(document.MAINFORM.ORDER_CUST_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_ORDER_CUST_NM() {
    try {

        if (document.MAINFORM.ORDER_CUST_ID.value == '') {
            document.MAINFORM.ORDER_CUST_NM.value = '';
            document.MAINFORM.ORDER_CUST_ADD1.value = '';
            document.MAINFORM.ORDER_CUST_ADD2.value = '';
            document.MAINFORM.ORDER_CUST_ADD3.value = '';
            document.MAINFORM.AC_OFFICER_CODE.value = '';
            document.MAINFORM.ORDER_CUST_REF.value = '';
            document.MAINFORM.ORDER_CUST_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.ORDER_CUST_NOTES.name);
            SYM_IMCO_ORDER_CUST_ID_B2();

        } else {
            SYS_GetCUBK('ORDER_CUST_ID', document.MAINFORM.ORDER_CUST_ID.name, 'SYM_IMCO_ORDER_CUST_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_ORDER_CUST_ID_B() {
    try {

        SYM_IMCO_Cal_ORDER_CUST_ID_back();
        SYM_IMCO_ORDER_CUST_ID_B2();
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_ORDER_CUST_ID_B2() {
    try {

        if (document.MAINFORM.ORDER_CUST_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ORDER_CUST_ADD_BTN, "P");

        }
        if (document.MAINFORM.ORDER_CUST_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ORDER_CUST_ADD_BTN, "O");


        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_ORDER_CUST_ADD() {
    try {

        SYS_InqCUBK_byCondition('ORDER_CUST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_ORDER_CUST_ORDER_NO() {
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
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Cal_ORDER_CUST_ORDER_NO_12', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Sql_ORDER_CUST_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ORDER_CUST_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_RCV_BK_ID_back() {
    try {

        SYT_Show_Notes(document.MAINFORM.RCV_BK_NOTES.name);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_RCV_BK_NM() {
    try {

        if (document.MAINFORM.RCV_BK_ID.value == '') {
            document.MAINFORM.RCV_BK_NM.value = '';
            document.MAINFORM.RCV_BK_MAIL_ADD.value = '';
            document.MAINFORM.RCV_BK_CORR_MED.value = '';
            document.MAINFORM.RCV_BK_LANG.value = '';
            document.MAINFORM.RCV_BK_FAX.value = '';
            document.MAINFORM.RCV_BK_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.RCV_BK_NOTES.name);
            SYM_IMCO_RCV_BK_ID_B2();
        } else {
            SYS_GetCUBK('RCV_BK_ID', document.MAINFORM.RCV_BK_ID.name, 'SYM_IMCO_RCV_BK_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_RCV_BK_ID_B() {
    try {

        SYM_IMCO_RCV_BK_ID_B2();
        SYM_IMCO_RCV_BK_ID_back();
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_RCV_BK_ID_B2() {
    try {

        if (document.MAINFORM.RCV_BK_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_ADD_BTN, "P");
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_POST_ADD_BTN, "P");
        }
        if (document.MAINFORM.RCV_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_ADD_BTN, "O");
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_POST_ADD_BTN, "O");

        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_RCV_BK_ADD() {
    try {

        SYS_InqCUBK_byCondition('RCV_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_RCV_BK_ORDER_NO() {
    try {

        var RCV_BK_ID; // Utility Auto Fix Comments
        var RCV_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //RCV_BK_ORDER_NO = document.MAINFORM.RCV_BK_ORDER_NO.value;
        //RCV_BK_ID = document.MAINFORM.RCV_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + RCV_BK_ORDER_NO + " AND C_MAIN_REF = '" + RCV_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM";
        //sMappingList = "RCV_BK_NM";
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Cal_RCV_BK_ORDER_NO_13', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_RCV_BK_POST_ADD() {
    try {

        SYS_InqCUBK_byCondition('RCV_BK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_RCV_BK_ORDER_POST2() {
    try {

        var RCV_BK_ID; // Utility Auto Fix Comments
        var RCV_BK_ORDER_POST; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //RCV_BK_ORDER_POST = document.MAINFORM.RCV_BK_ORDER_POST.value;
        //RCV_BK_ID = document.MAINFORM.RCV_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + RCV_BK_ORDER_POST + " AND C_MAIN_REF = '" + RCV_BK_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "RCV_BK_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_Cal_RCV_BK_ORDER_POST2_14', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Sql_RCV_BK_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('RCV_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_CHK_COLL_BK_SW_TAG() {
    try {

        if (document.MAINFORM.COLL_BK_SW_ADD.value != '') {
            document.MAINFORM.COLL_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.COLL_BK_NM.value != '' || document.MAINFORM.COLL_BK_ADD1.value != '' || document.MAINFORM.COLL_BK_ADD2.value != '' || document.MAINFORM.COLL_BK_ADD3.value != '') && document.MAINFORM.COLL_BK_SW_ADD.value == '') {
            document.MAINFORM.COLL_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.COLL_BK_ID.value == '' && document.MAINFORM.COLL_BK_NM.value == '' && document.MAINFORM.COLL_BK_ADD1.value == '' && document.MAINFORM.COLL_BK_ADD2.value == '' && document.MAINFORM.COLL_BK_ADD3.value == '' && document.MAINFORM.COLL_BK_SW_ADD.value == '') {
            document.MAINFORM.COLL_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_CAL_COLL_BK_ID_back() {
    try {

        SYT_Show_Notes(document.MAINFORM.COLL_BK_NOTES.name);
        SYM_IMCO_CHK_COLL_BK_SW_TAG();

        if (document.MAINFORM.COLL_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_ADD_BTN, 'O');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.COLL_BK_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_CAL_COLL_BK_ID() {
    try {

        if (document.MAINFORM.COLL_BK_ID.value == '') {
            document.MAINFORM.COLL_BK_NM.value = '';
            document.MAINFORM.COLL_BK_ADD1.value = '';
            document.MAINFORM.COLL_BK_ADD2.value = '';
            document.MAINFORM.COLL_BK_ADD3.value = '';
            document.MAINFORM.COLL_BK_NOTES.value = '';
            document.MAINFORM.COLL_BK_SW_ADD.value = '';
            SYM_IMCO_CAL_COLL_BK_ID_back();
        } else {
            SYS_GetCUBK('COLL_BK_ID', 'COLL_BK_ID', 'SYM_IMCO_CAL_COLL_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_CAL_COLL_BK_ID_MULT_ADD() {
    try {

        SYS_InqCUBK_byCondition('COLL_BK_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_CAL_COLL_BK_ID_MULT_ORDER_NO() {
    try {

        var COLL_BK_ID; // Utility Auto Fix Comments
        var COLL_BK_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //COLL_BK_ORDER_NO = document.MAINFORM.COLL_BK_ORDER_NO.value;
        //COLL_BK_ID = document.MAINFORM.COLL_BK_ID.value;
        //sSQLWhere = "ORDER_NO = " + COLL_BK_ORDER_NO + " AND C_MAIN_REF = '" + COLL_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "COLL_BK_NM;COLL_BK_ADD1;COLL_BK_ADD2;COLL_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_CAL_COLL_BK_ID_MULT_ORDER_NO_15', '1');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_SQL_COLL_BANK() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('COLL_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_SQL_COLL_BK_SW_ADD() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.COLL_BK_SW_ADD.value.length == 11 || document.MAINFORM.COLL_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.COLL_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.COLL_BK_SW_ADD.value = document.MAINFORM.COLL_BK_SW_ADD.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.COLL_BK_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "COLL_BK_ID";
            SYS_GetTableDataByRule_S('SYM_IMCO_SYM_IMCO_SQL_COLL_BK_SW_ADD_16', '1', true);
            if (document.MAINFORM.COLL_BK_ID.value != '') {
                SYS_GetCUBK('COLL_BK_ID', 'COLL_BK_ID', 'SYM_IMCO_CAL_COLL_BK_ID_back');
            }
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_INIT() {
    try {

        //added by Jane 20090211 for bug 1114
        if (document.MAINFORM.TEMP_DOC_DT != null) {
            document.MAINFORM.TEMP_DOC_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_NXT_TRCR_DT_Back(NXT_TRCR_DT) {
    try {

        // Add by jane for bug 1285

        document.MAINFORM.NXT_TRCR_DT.value = NXT_TRCR_DT;
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_NXT_TRCR_DT() {
    try {

        // Add by jane at 20090224 for bug 1285
        if (document.MAINFORM.INTERVAL_DAYS.value != '') {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, SYS_DATE, document.MAINFORM.INTERVAL_DAYS.value, 'SYM_IMCO_Cal_NXT_TRCR_DT_Back', 'A', 'N', 'Y');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_FREE_PYMT() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IMCO_FREE_PAYT'];
        amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_CONFIRM_CALL() {
    try {

        var Day_Month; // Utility Auto Fix Comments
        var deliver_agst; // Utility Auto Fix Comments
        var tenor_days; // Utility Auto Fix Comments
        var tenor_type; // Utility Auto Fix Comments
        //for mapping tenor field
        if (document.MAINFORM.TENOR_DAYS != null && document.MAINFORM.TENOR_DETAILS != null && document.MAINFORM.TENOR_EVENT != null && document.MAINFORM.DAY_MON_FLG != null && document.MAINFORM.DELVR_DOC_AGST != null) {
            tenor_days = SYS_BeFloat(document.MAINFORM.TENOR_DAYS.value);
            Day_Month = document.MAINFORM.DAY_MON_FLG.value;
            tenor_type = document.MAINFORM.TENOR_EVENT.value;
            deliver_agst = document.MAINFORM.DELVR_DOC_AGST.value;
            if (tenor_days == 0) {
                tenor_days = '';
                Day_Month = '';
            }

            if (Day_Month == "D" && tenor_days == 1) {
                Day_Month = "day";
            }
            if (Day_Month == "D" && tenor_days > 1) {
                Day_Month = "days";
            }
            if (Day_Month == "M" && tenor_days == 1) {
                Day_Month = "month";
            }
            if (Day_Month == "M" && tenor_days > 1) {
                Day_Month = "months";
            }




            if (tenor_type == "BE") {
                tenor_type = "after date of Bill of exchange";
            }
            if (tenor_type == "CC") {
                tenor_type = "after customs clearance of goods";
            }
            if (tenor_type == "FD") {
                tenor_type = "after goods pass food and drug administration";
            }
            if (tenor_type == "FP") {
                tenor_type = "after first presentation";
            }
            if (tenor_type == "GA") {
                tenor_type = "after arrival of goods";
            }
            if (tenor_type == "ID") {
                tenor_type = "after invoice date";
            }
            if (tenor_type == "ST") {
                tenor_type = "after sight";
            }
            if (tenor_type == "TD") {
                tenor_type = "after date of transport document";
            }
            if (tenor_type == "XXX") {
                tenor_type = "Fixed Maturity";
            }
            if (tenor_type == "XX") {
                tenor_type = document.MAINFORM.TENOR_DETAILS.value;
            }
            if (deliver_agst == "D/P") {
                deliver_agst = "Sight";
                document.MAINFORM.TEMP_TENOR_FORM_MAP.value = "Sight";
            } else {
                deliver_agst = '';
                document.MAINFORM.TEMP_TENOR_FORM_MAP.value = tenor_days + " " + Day_Month + " " + tenor_type + " " + deliver_agst;
            }
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Functions_For_Chg() {
    try {

        if ("PM||MM||KP".indexOf(SYS_FUNCTION_TYPE) > -1) {
            CHG_setAllCollCcy(SYS_LOCAL_CCY); //add by sunny for charge voucher
            SYT_Set_TRXCCY2CHG(); //add by sunny for charge voucher
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE; //for #1189
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_CHG_maplocal_foreign_PAY() {
    try {

        Chg.Screen.mapLocalCust("DRWE_ID", "DRWE_NM");
        Chg.Screen.mapForeignCust("TEMP_DRWE_ID", "DRWR_NM", "COLL_CCY", "C_MAIN_REF");
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_SetPaymentVchDesc() {
    try {

        var CrLen; // Utility Auto Fix Comments
        var DrLen; // Utility Auto Fix Comments
        var acType; // Utility Auto Fix Comments
        var arrCredit; // Utility Auto Fix Comments
        var arrDebit; // Utility Auto Fix Comments
        var credit; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var sDesc; // Utility Auto Fix Comments
        arrDebit = SYS_GetObjByDoName("PaymentDebit");
        arrCredit = SYS_GetObjByDoName("PaymentCredit");
        DrLen = arrDebit.length;
        CrLen = arrCredit.length;
        sDesc = "IMCO03NULLNULLNULL";
        for (i = 0; i < DrLen; i++) { // Utility Auto Fix Comments
            debit = arrDebit[i];
            acType = debit.getDoValueByName("CPYT_DR_AC_TYPE");
            SYS_UpdateFldValueByDo(debit, "CPYT_DR_AC_DESC", sDesc + acType.substring(0, 1));
        }
        for (i = 0; i < CrLen; i++) {
            credit = arrCredit[i];
            acType = credit.getDoValueByName("CPYT_CR_AC_TYPE");
            SYS_UpdateFldValueByDo(credit, "CPYT_CR_AC_DESC", sDesc + acType.substring(0, 1));
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_REMIT_BK_CORR_MED() {
    try {

        if (document.MAINFORM.REMIT_BK_COR_MED.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_SW_ADD, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_SW_ADD, "O");
        }
        if (document.MAINFORM.REMIT_BK_COR_MED.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.REMIT_MAIL_ADD, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.REMIT_MAIL_ADD, "O");
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_PRES_BK_CORR_MED() {
    try {

        if (document.MAINFORM.PRES_BK_CORR_MED.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, "O");
        }
        if (document.MAINFORM.PRES_BK_CORR_MED.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, "O");
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_RCV_BK_CORR_MED() {
    try {

        if (document.MAINFORM.RCV_BK_CORR_MED.value == "FAX") {
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_FAX, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_FAX, "O");
        }
        if (document.MAINFORM.RCV_BK_CORR_MED.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_MAIL_ADD, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_MAIL_ADD, "O");
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_CAL_CHG_CASH_IND_back() {
    try {

        if (document.MAINFORM.SEPARATE_CHG_FLG.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_SG_Get_Back() {
    try {

        document.MAINFORM.SG_AMT.value = SYT_AmtFormat(document.MAINFORM.SG_CCY.value, document.MAINFORM.SG_AMT.value);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_DOC_STAT_SG() {
    try {

        if (document.MAINFORM.DOC_STAT.value == 'YES') {

            SYT_ChangeFldClass(document.MAINFORM.SG_BIN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SG_NO, 'M');
        } else {

            SYT_ChangeFldClass(document.MAINFORM.SG_BIN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SG_NO, 'P');
            document.MAINFORM.SG_NO.value = '';
            document.MAINFORM.SG_AMT.value = '';
            document.MAINFORM.SG_CCY.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_PROTECT_PARTY_INFO() {
    try {

        SYT_ChangeFldClass_New('DRWE_ID', 'P');
        SYT_ChangeFldClass_New('DRW_ID_BTN', 'P');
        SYT_ChangeFldClass_New('DRWE_NM', 'P');
        SYT_ChangeFldClass_New('DRWE_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('DRWE_ADD1', 'P');
        SYT_ChangeFldClass_New('DRWE_ADD2', 'P');
        SYT_ChangeFldClass_New('DRWE_ADD3', 'P');
        SYT_ChangeFldClass_New('DRWE_MAIL_ADD', 'P');
        SYT_ChangeFldClass_New('DRWE_POST_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('DRWE_REF', 'P');
        SYT_ChangeFldClass_New('DRWR_ID', 'P');
        SYT_ChangeFldClass_New('DRWR_ID_BTN', 'P');
        SYT_ChangeFldClass_New('DRWR_NM', 'P');
        SYT_ChangeFldClass_New('DRWR_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('DRWR_ADD1', 'P');
        SYT_ChangeFldClass_New('DRWR_ADD2', 'P');
        SYT_ChangeFldClass_New('DRWR_ADD3', 'P');
        SYT_ChangeFldClass_New('DRWR_MAIL_ADD', 'P');
        SYT_ChangeFldClass_New('DRWR_POST_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('REMIT_BK_ID', 'P');
        SYT_ChangeFldClass_New('REMIT_BK_ID_BTN', 'P');
        SYT_ChangeFldClass_New('REMIT_BK_NM', 'P');
        SYT_ChangeFldClass_New('REMIT_BK_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('REMIT_BK_ADD1', 'P');
        SYT_ChangeFldClass_New('REMIT_BK_ADD2', 'P');
        SYT_ChangeFldClass_New('REMIT_BK_ADD3', 'P');
        SYT_ChangeFldClass_New('REMIT_MAIL_ADD', 'P');
        SYT_ChangeFldClass_New('REMIT_POST_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('REMIT_BK_SW_ADD', 'P');
        SYT_ChangeFldClass_New('REMIT_BK_SW_TAG', 'P');
        SYT_ChangeFldClass_New('REMIT_BK_COR_MED', 'P');
        SYT_ChangeFldClass_New('REMIT_LANG', 'P');
        SYT_ChangeFldClass_New('PRES_BK_ID', 'P');
        SYT_ChangeFldClass_New('PRES_BK_ID_BTN', 'P');
        SYT_ChangeFldClass_New('PRES_BK_NM', 'P');
        SYT_ChangeFldClass_New('PRES_BK_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('PRES_BK_ADD1', 'P');
        SYT_ChangeFldClass_New('PRES_BK_ADD2', 'P');
        SYT_ChangeFldClass_New('PRES_BK_ADD3', 'P');
        SYT_ChangeFldClass_New('PRES_BK_MAIL_ADD', 'P');
        SYT_ChangeFldClass_New('PRES_BK_POST_ADD_BTN', 'P');
        SYT_ChangeFldClass_New('PRES_BK_SW_ADD', 'P');
        SYT_ChangeFldClass_New('PRES_BK_SW_TAG', 'P');
        SYT_ChangeFldClass_New('PRES_BK_CORR_MED', 'P');
        SYT_ChangeFldClass_New('PRES_BK_LANG', 'P');
        SYT_ChangeFldClass_New('PRES_BK_REF', 'P');
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_CAL_LOCAL_AMT() {
    try {

        var Rt; // Utility Auto Fix Comments
        var amtTrxccy; // Utility Auto Fix Comments
        amtTrxccy = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_AMT.value);
        Rt = SYS_BeFloat(document.MAINFORM.LOCAL_RATE.value);
        document.MAINFORM.LOCAL_AMT.value = SYT_AmtFormat(document.MAINFORM.LOCAL_CCY.value, amtTrxccy * Rt);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_LOCAL_LCY_BAL() {
    try {

        SYS_GetExchangeRate(document.MAINFORM.COLL_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.LOCAL_RATE.name, SYM_IMCO_CAL_LOCAL_AMT);
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_SET_CLS_FLG() {
    try {

        if (SYS_BeFloat(document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value) == 0) {
            document.MAINFORM.CLS_FLG.value = 'Yes';
            SYT_ChangeFldClass_New('CLS_FLG', 'P');
        } else if (SYS_BeFloat(document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value) > 0) {
            document.MAINFORM.CLS_FLG.value = 'No';
            SYT_ChangeFldClass_New('CLS_FLG', 'M');
        }
    } catch (e) {
        DisExcpt("SYM_IMCO.js", e);
    }
}

function SYM_IMCO_Cal_DOC_PRES() {
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
        DisExcpt("SYM_IMCO.js", e);
    }
}