function SYM_SBLC_ADVISING_ORDER_NUMBER() {
    try {

        var ADVISNG_ORDER_NO; // Utility Auto Fix Comments
        var ADV_BK_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ADVISNG_ORDER_NO = document.MAINFORM.ADV_BK_ORDER_NO.value;
        //ADV_BK_ID = document.MAINFORM.ADV_BK_ID.value;
        //sSQLWhere = "ORDER_NO =" + ADVISNG_ORDER_NO + "AND C_MAIN_REF='" + ADV_BK_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "ADV_BK_NM;ADV_BK_ADD1;ADV_BK_ADD2;ADV_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_SBLC_SYM_SBLC_ADVISING_ORDER_NUMBER_0', '1');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_AMEND_EXCH_RT() {
    try {

        SYS_GetExchangeRate(document.MAINFORM.LC_CCY.value, 'USD', 'Booking Rate', document.MAINFORM.EXCH_RATE.name, SYM_SBLC_AMEND_LC_CCY);
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_AMEND_LC_CCY() {
    try {

        var amt; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var upd_bal; // Utility Auto Fix Comments
        amt = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value);
        rate = SYS_BeFloat(document.MAINFORM.EXCH_RATE.value);
        upd_bal = amt * rate;
        document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(SYS_LOCAL_CCY, upd_bal);
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_APPL_ORDER_NO() {
    try {

        var APPL_ID; // Utility Auto Fix Comments
        var APPL_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //APPL_ORDER_NO = document.MAINFORM.APPL_ORDER_NO.value;
        //APPL_ID = document.MAINFORM.APPL_ID.value;
        //sSQLWhere = "ORDER_NO =" + APPL_ORDER_NO + "AND C_MAIN_REF='" + APPL_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "APPL_NM;APPL_ADD1;APPL_ADD2;APPL_ADD3";
        SYS_GetTableDataByRule_S('SYM_SBLC_SYM_SBLC_APPL_ORDER_NO_1', '1');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_APPL_RULE_FOR_OTHER() {
    try {

        var str; // Utility Auto Fix Comments
        str = "";

        str += "<select name='APLB_RULE' id='APLB_RULE' title='Applicable Rule' tabindex='5' class='CHAR_M' onchange='SYM_SBLC_Hidden_Appl_Rule();'>";
        str += "<option value='' ></option>";
        str += "<option value='EUCP LATEST VERSION' >EUCP LATEST VERSION</option>";
        str += "<option value='EUCPURR LATEST VERSION'>EUCPURR LATEST VERSION</option>";
        //str += "<option value='ISP LATEST VERSION' selected='selected' >ISP LATEST VERSION</option>";//Jax 2020/5/25
        str += "<option value='OTHR'>OTHR</option>";
        str += "<option value='UCP LATEST VERSION'>UCP LATEST VERSION</option>";
        str += "<option value='UCPURR LATEST VERSION'>UCPURR LATEST VERSION</option>";
        str += "</select>";

        EEHtml.getElementById('APPL_RULE_DIV').innerHTML = str;
        //EEHtml.getElementById('D').style.display="";
        //EEHtml.getElementById('E').style.display="";
        EEHtml.getElementById('F').style.display = 'none';
        EEHtml.getElementById('G').style.display = 'none';
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_AutoRenew_Check() {
    try {

        if (document.MAINFORM.AUTO_RENEW.value == 'YES') {
            document.MAINFORM.RENEWAL_STATUS.value = 'RENEW';
            SYT_ChangeFldClass(document.MAINFORM.RENEWAL_STATUS, 'P');
        } else {
            document.MAINFORM.FREQUENCY.value = '';
            document.MAINFORM.RENEWAL_DAYS.value = '';
            document.MAINFORM.RENEWAL_STATUS.value = '';
            document.MAINFORM.NOTIFY_DATE.value = '';
            document.MAINFORM.NOTIFY_DAYS.value = '';
            document.MAINFORM.NRENEW_ADV_DATE.value = '';
            document.MAINFORM.NRENEW_ADV_PERIOD.value = '';
            document.MAINFORM.FINAL_EXPIRY_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_AVAILABLE_ORDER_NUMBER() {
    try {

        var AVAILBALE_ID; // Utility Auto Fix Comments
        var AVAILBLE_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //AVAILBLE_ORDER_NO = document.MAINFORM.AVAL_WT_BK_ORDER_NO.value;
        //AVAILBALE_ID = document.MAINFORM.AVAL_WT_BK_ID.value;
        //sSQLWhere = "ORDER_NO =" + AVAILBLE_ORDER_NO + "AND C_MAIN_REF='" + AVAILBALE_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "AVAL_WT_BK_NM;AVAL_WT_BK_ADD1;AVAL_WT_BK_ADD2;AVAL_WT_BK_ADD3";
        SYS_GetTableDataByRule_S('SYM_SBLC_SYM_SBLC_AVAILABLE_ORDER_NUMBER_2', '1');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_BENE_ID_Clear_field() {
    try {

        if (document.MAINFORM.BENE_ID.value == '') {
            document.MAINFORM.BENE_NM.value = '';
            document.MAINFORM.BENE_ADD1.value = '';
            document.MAINFORM.BENE_ADD2.value = '';
            document.MAINFORM.BENE_ADD3.value = '';
            document.MAINFORM.BENE_NOTES.value = '';
            SYM_SBLC_Hidd_BENE_NM();
        } else {
            SYS_GetCUBK('BENE_ID', 'BENE_ID', 'SYM_SBLC_Hidd_BENE_NM');
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_BENE_ORDER_NUMBER() {
    try {

        var BENE_ID; // Utility Auto Fix Comments
        var BENE_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //BENE_ORDER_NO = document.MAINFORM.BENE_ORDER_NO.value;
        //BENE_ID = document.MAINFORM.BENE_ID.value;
        //sSQLWhere = "ORDER_NO =" + BENE_ORDER_NO + "AND C_MAIN_REF='" + BENE_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "BENE_NM;BENE_ADD1;BENE_ADD2;BENE_ADD3";
        SYS_GetTableDataByRule_S('SYM_SBLC_SYM_SBLC_BENE_ORDER_NUMBER_3', '1');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_CALL_APPL_ADD_BACK() {
    try {

        if (document.MAINFORM.APPL_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Cal_Add_Button() {
    try {

        if (document.MAINFORM.APPL_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.APPL_BTN, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_BTN, 'O');
        }
        if (document.MAINFORM.BENE_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.BENE_BTN, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BENE_BTN, 'O');
        }
        if (document.MAINFORM.FOR_ACCT_NR.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.FOR_ACCT_NR_BTN, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FOR_ACCT_NR, 'O');
        }
        if (document.MAINFORM.ADV_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ID_BTN, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ID_BTN, 'O');
        }
        if (document.MAINFORM.AVAL_WT_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN, 'O');
        }
        if (document.MAINFORM.DRWE_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_CAL_ADV_COMM() {
    try {

        SYT_CAL_COMM('SBLC_ADV_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_CAL_AMD_CHG() {
    try {

        SYT_CAL_COMM('SBLC_AMD_CHG', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_CAL_COMMUN_CHG() {
    try {

        SYT_CAL_COMM('SBLC_COMMUN_CHG', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_CAL_ISS_COMM() {
    try {

        SYT_CAL_COMM('GTEE_ISS_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_CAL_OTHER_CHARGE() {
    try {

        SYT_CAL_COMM('SBLC_OTHER_CHG', document.MAINFORM.LC_CCY.value);
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_CAL_POST_COMM() {
    try {

        SYT_CAL_COMM('SBLC_POST_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_CAL_TEMP_AMPOUNT_AMD() {
    try {

        var BASE_BAL; // Utility Auto Fix Comments
        var BASE_BAL_FINAL; // Utility Auto Fix Comments
        var BASE_BAL_NEW; // Utility Auto Fix Comments
        var DEC_AMT; // Utility Auto Fix Comments
        var EXCH_RT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var LC_BAL; // Utility Auto Fix Comments
        var LC_BAL_FINAL; // Utility Auto Fix Comments
        var NEW_LC_BAL; // Utility Auto Fix Comments
        var NEW_LIAB_BAL; // Utility Auto Fix Comments
        var UPD_BAL; // Utility Auto Fix Comments
        var UPD_BAL_BY; // Utility Auto Fix Comments
        var UPD_BASE_BAL; // Utility Auto Fix Comments
        var NEW_POS_TOL;
        NEW_POS_TOLE = document.MAINFORM.NEW_POS_TOL.value;
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        EXCH_RT = SYS_BeFloat(document.MAINFORM.EXCH_RATE.value);
        LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        BASE_BAL = EXCH_RT * LC_BAL;
        NEW_LC_BAL = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value);
        NEW_LIAB_BAL = SYS_BeFloat(document.MAINFORM.NEW_LIAB_BAL.value);
        LC_BAL_FINAL = LC_BAL + NEW_LC_BAL;
        //BASE_BAL = EXCH_RT * LC_BAL_FINAL;
        BASE_BAL_FINAL = BASE_BAL + NEW_LIAB_BAL;
        BASE_BAL_FINAL = SYT_AmtFormat(SYS_LOCAL_CCY, BASE_BAL_FINAL);
        LC_BAL_FINAL = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, LC_BAL_FINAL);

        if (INC_AMT == 0 && DEC_AMT == 0 && document.MAINFORM.POS_TOL.value == 0 && document.MAINFORM.NEG_TOL.value == 0) {
            document.MAINFORM.TEMP_LC_AMT.value = document.MAINFORM.LC_AMT.value;
            document.MAINFORM.TEMP_LC_BAL.value = LC_BAL_FINAL;
            document.MAINFORM.TEMP_BASE_BAL.value = BASE_BAL_FINAL;

        } else if (INC_AMT != 0 && NEW_POS_TOLE != 0) {
            document.MAINFORM.TEMP_LC_AMT.value = document.MAINFORM.NEW_LC_AMT.value;
            document.MAINFORM.TEMP_LC_BAL.value = LC_BAL_FINAL;
            document.MAINFORM.TEMP_BASE_BAL.value = BASE_BAL_FINAL;
        } else if (NEW_POS_TOLE != 0) {
            document.MAINFORM.TEMP_LC_AMT.value = document.MAINFORM.LC_AMT.value;
            document.MAINFORM.TEMP_LC_BAL.value = LC_BAL_FINAL;
            document.MAINFORM.TEMP_BASE_BAL.value = BASE_BAL_FINAL;
        } else if (INC_AMT > 0) {
            LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value); // Utility Auto Fix Comments
            NEW_LC_BAL = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value); // Utility Auto Fix Comments
            UPD_BAL = Math.abs(LC_BAL + NEW_LC_BAL);

            BASE_BAL_NEW = SYS_BeFloat(BASE_BAL);
            NEW_LIAB_BAL = SYS_BeFloat(document.MAINFORM.NEW_LIAB_BAL.value); // Utility Auto Fix Comments
            UPD_BASE_BAL = Math.abs(BASE_BAL_NEW + NEW_LIAB_BAL);
            //	document.MAINFORM.NEW_LC_AMT.value = document.MAINFORM.LC_AMT.value;
            document.MAINFORM.TEMP_LC_AMT.value = document.MAINFORM.NEW_LC_AMT.value;
            document.MAINFORM.TEMP_LC_BAL.value = UPD_BAL;
            document.MAINFORM.TEMP_BASE_BAL.value = UPD_BASE_BAL;
        } else if (DEC_AMT > 0) {
            LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value); // Utility Auto Fix Comments
            NEW_LC_BAL = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value); // Utility Auto Fix Comments
            UPD_BAL = Math.abs(LC_BAL - NEW_LC_BAL); // Utility Auto Fix Comments

            BASE_BAL_NEW = SYS_BeFloat(BASE_BAL); // Utility Auto Fix Comments
            NEW_LIAB_BAL = SYS_BeFloat(document.MAINFORM.NEW_LIAB_BAL.value); // Utility Auto Fix Comments
            UPD_BASE_BAL = Math.abs(BASE_BAL_NEW - NEW_LIAB_BAL); // Utility Auto Fix Comments

            //UPD_BAL_BY = UPD_BAL;
            document.MAINFORM.TEMP_LC_AMT.value = document.MAINFORM.NEW_LC_AMT.value;
            document.MAINFORM.TEMP_LC_BAL.value = UPD_BAL;
            document.MAINFORM.TEMP_BASE_BAL.value = UPD_BASE_BAL;
        } else if (INC_AMT == 0 && DEC_AMT == 0) {
            document.MAINFORM.LC_AMT.value = document.MAINFORM.NEW_LC_AMT.value;
            document.MAINFORM.TEMP_LC_AMT.value = document.MAINFORM.LC_AMT.value;
            document.MAINFORM.TEMP_LC_BAL.value = document.MAINFORM.LC_BAL.value;
            document.MAINFORM.TEMP_BASE_BAL.value = BASE_BAL;
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_CAL_TEMP_FIELDS_AMD() {
    try {

        var ltst_Shp_dt; // Utility Auto Fix Comments
        var shpmt_per; // Utility Auto Fix Comments
        if (document.MAINFORM.NEW_AMT_SPEC.value != '') {
            document.MAINFORM.TEMP_AMT_SPEC.value = document.MAINFORM.NEW_AMT_SPEC.value;
        } else {
            if (document.MAINFORM.AMT_SPEC.value == "" || document.MAINFORM.AMT_SPEC.value == null) {
                document.MAINFORM.TEMP_AMT_SPEC.value = document.MAINFORM.AMT_SPEC.value;
            } else {
                document.MAINFORM.TEMP_AMT_SPEC.value = document.MAINFORM.AMT_SPEC.value;
            }
        }
        if (document.MAINFORM.NEW_BENE_ADD1.value != '') {
            document.MAINFORM.TEMP_BENE_ADD1.value = document.MAINFORM.NEW_BENE_ADD1.value;
        } else {
            if (document.MAINFORM.BENE_ADD1.value == "" || document.MAINFORM.BENE_ADD1.value == null) {
                document.MAINFORM.TEMP_BENE_ADD1.value = document.MAINFORM.BENE_ADD1.value;
            } else {
                document.MAINFORM.TEMP_BENE_ADD1.value = document.MAINFORM.BENE_ADD1.value;
            }
        }
        if (document.MAINFORM.NEW_BENE_ADD2.value != '') {
            document.MAINFORM.TEMP_BENE_ADD2.value = document.MAINFORM.NEW_BENE_ADD2.value;
        } else {
            if (document.MAINFORM.BENE_ADD2.value == "" || document.MAINFORM.BENE_ADD2.value == null) {
                document.MAINFORM.TEMP_BENE_ADD2.value = document.MAINFORM.BENE_ADD2.value;
            } else {
                document.MAINFORM.TEMP_BENE_ADD2.value = document.MAINFORM.BENE_ADD2.value;
            }
        }
        if (document.MAINFORM.NEW_BENE_ADD3.value != '') {

            document.MAINFORM.TEMP_BENE_ADD3.value = document.MAINFORM.NEW_BENE_ADD3.value;
        } else {
            if (document.MAINFORM.BENE_ADD3.value == "" || document.MAINFORM.BENE_ADD3.value == null) {
                document.MAINFORM.TEMP_BENE_ADD3.value = document.MAINFORM.BENE_ADD3.value;
            } else {
                document.MAINFORM.TEMP_BENE_ADD3.value = document.MAINFORM.BENE_ADD3.value;
            }
        }
        if (document.MAINFORM.NEW_BENE_ID.value != '') {
            document.MAINFORM.TEMP_BENE_ID.value = document.MAINFORM.NEW_BENE_ID.value;
        } else {
            if (document.MAINFORM.BENE_ID.value == "" || document.MAINFORM.BENE_ID.value == null) {
                document.MAINFORM.TEMP_BENE_ID.value = document.MAINFORM.BENE_ID.value;
            } else {
                document.MAINFORM.TEMP_BENE_ID.value = document.MAINFORM.BENE_ID.value;

            }
        }
        if (document.MAINFORM.NEW_BENE_NM.value != '') {
            document.MAINFORM.TEMP_BENE_NM.value = document.MAINFORM.NEW_BENE_NM.value;
        } else {
            if (document.MAINFORM.BENE_NM.value == "" || document.MAINFORM.BENE_NM.value == null) {
                document.MAINFORM.TEMP_BENE_NM.value = document.MAINFORM.BENE_NM.value;
            } else {
                document.MAINFORM.TEMP_BENE_NM.value = document.MAINFORM.BENE_NM.value;
            }

        }
        if (document.MAINFORM.NEW_BENE_NOTES.value != '') {
            document.MAINFORM.TEMP_BENE_NOTES.value = document.MAINFORM.NEW_BENE_NOTES.value;
        } else {
            if (document.MAINFORM.BENE_NOTES.value == "" || document.MAINFORM.BENE_NOTES.value == null) {
                document.MAINFORM.TEMP_BENE_NOTES.value = document.MAINFORM.BENE_NOTES.value;
            } else {
                document.MAINFORM.TEMP_BENE_NOTES.value = document.MAINFORM.BENE_NOTES.value;
            }
        }

        if (document.MAINFORM.NEW_NEG_TOL.value != '') {
            document.MAINFORM.TEMP_NEG_TOL.value = document.MAINFORM.NEW_NEG_TOL.value;
        } else {
            if (document.MAINFORM.NEG_TOL.value == "" || document.MAINFORM.NEG_TOL.value == null) {
                document.MAINFORM.TEMP_NEG_TOL.value = document.MAINFORM.NEG_TOL.value;
            } else {
                document.MAINFORM.TEMP_NEG_TOL.value = document.MAINFORM.NEG_TOL.value;
            }
        }

        if (document.MAINFORM.NEW_EXPIRY_DT.value != '') {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
        } else {
            if (document.MAINFORM.EXPIRY_DT.value == "" || document.MAINFORM.EXPIRY_DT.value == null) {
                document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
            } else {
                document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
            }
        }
        //MT707 tab

        ltst_Shp_dt = EEHtml.getElementById('NEW_LTST_SHIP_DT1');
        shpmt_per = EEHtml.getElementById('NEW_SHIP_PRD1');

        if (ltst_Shp_dt != '') {
            document.MAINFORM.TEMP_LTST_SHIP_DT.value = document.MAINFORM.NEW_LTST_SHIP_DT.value;
        } else {
            if (document.MAINFORM.LTST_SHIP_DT.value == "" || document.MAINFORM.LTST_SHIP_DT.value == null) {
                document.MAINFORM.TEMP_LTST_SHIP_DT.value = document.MAINFORM.LTST_SHIP_DT.value;
            } else {
                document.MAINFORM.TEMP_LTST_SHIP_DT.value = document.MAINFORM.LTST_SHIP_DT.value;
            }
        }


        if (shpmt_per != '') {

            document.MAINFORM.TEMP_SHIP_PRD.value = document.MAINFORM.NEW_SHIP_PRD.value;
        } else {
            if (document.MAINFORM.SHIP_PRD.value == "" || document.MAINFORM.SHIP_PRD.value == null) {
                document.MAINFORM.TEMP_SHIP_PRD.value = document.MAINFORM.SHIP_PRD.value;
            } else {
                document.MAINFORM.TEMP_SHIP_PRD.value = document.MAINFORM.SHIP_PRD.value;
            }
        }

        if (document.MAINFORM.NEW_OLD_LOAD_PORT.value != '') {
            document.MAINFORM.TEMP_LOAD_PORT.value = document.MAINFORM.NEW_OLD_LOAD_PORT.value;
        } else {

            if (document.MAINFORM.OLD_DEST_PORT.value == null || document.MAINFORM.OLD_DEST_PORT.value == "") {
                document.MAINFORM.TEMP_LOAD_PORT.value = document.MAINFORM.OLD_LOAD_PORT.value;
            } else {
                document.MAINFORM.TEMP_LOAD_PORT.value = document.MAINFORM.OLD_LOAD_PORT.value;
            }
        }
        if (document.MAINFORM.NEW_DEST_PORT.value != '') {
            document.MAINFORM.TEMP_DEST_PORT.value = document.MAINFORM.NEW_DEST_PORT.value;
        } else {
            if (document.MAINFORM.DEST_PORT.value == "" || document.MAINFORM.DEST_PORT.value == null) {
                document.MAINFORM.TEMP_DEST_PORT.value = document.MAINFORM.DEST_PORT.value;
            } else {
                document.MAINFORM.TEMP_DEST_PORT.value = document.MAINFORM.DEST_PORT.value;
            }
        }

        if (document.MAINFORM.NEW_OLD_DEST_PORT.value != '') {
            document.MAINFORM.TEMP_DEST_PLACE.value = document.MAINFORM.NEW_OLD_DEST_PORT.value;
        } else {
            if (document.MAINFORM.OLD_DEST_PORT.value == "" || document.MAINFORM.OLD_DEST_PORT.value == null) {
                document.MAINFORM.TEMP_DEST_PLACE.value = document.MAINFORM.OLD_DEST_PORT.value;
            } else {
                document.MAINFORM.TEMP_DEST_PLACE.value = document.MAINFORM.OLD_DEST_PORT.value;
            }
        }

        if (document.MAINFORM.NEW_POS_TOL.value != '') {
            document.MAINFORM.TEMP_POS_TOL.value = document.MAINFORM.NEW_POS_TOL.value;
        } else {
            if (document.MAINFORM.POS_TOL.value == "" || document.MAINFORM.POS_TOL.value == null) {
                document.MAINFORM.TEMP_POS_TOL.value = document.MAINFORM.POS_TOL.value;
            } else {
                document.MAINFORM.TEMP_POS_TOL.value = document.MAINFORM.POS_TOL.value;
            }
        }

        if (document.MAINFORM.NEW_ADDIT_COV_AMT.value != '') {
            document.MAINFORM.TEMP_ADDIT_COV_AMT.value = document.MAINFORM.NEW_ADDIT_COV_AMT.value;
        } else {
            if (document.MAINFORM.ADD_AMT_COVRD.value == "" || document.MAINFORM.ADD_AMT_COVRD.value == null) {
                document.MAINFORM.TEMP_ADDIT_COV_AMT.value = document.MAINFORM.ADD_AMT_COVRD.value;
            } else {
                document.MAINFORM.TEMP_ADDIT_COV_AMT.value = document.MAINFORM.ADD_AMT_COVRD.value;
            }
        }

        if (document.MAINFORM.NEW_CHARGES.value != '') {
            document.MAINFORM.TEMP_CHARGES.value = document.MAINFORM.NEW_CHARGES.value;
        } else {
            if (document.MAINFORM.CHARGES.value == "" || document.MAINFORM.CHARGES.value == null) {
                document.MAINFORM.TEMP_CHARGES.value = document.MAINFORM.CHARGES.value;
            } else {
                document.MAINFORM.TEMP_CHARGES.value = document.MAINFORM.CHARGES.value;
            }
        }

        if (document.MAINFORM.NEW_PRES_PRD_TXT.value != '') {
            document.MAINFORM.TEMP_PRES_PRD_TXT.value = document.MAINFORM.NEW_PRES_PRD_TXT.value;
        } else {
            if (document.MAINFORM.PRES_PRD_TXT.value == "" || document.MAINFORM.PRES_PRD_TXT.value == null) {
                document.MAINFORM.TEMP_PRES_PRD_TXT.value = document.MAINFORM.PRES_PRD_TXT.value;
            } else {
                document.MAINFORM.TEMP_PRES_PRD_TXT.value = document.MAINFORM.PRES_PRD_TXT.value;
            }
        }

        if (document.MAINFORM.NEW_ORIGIN.value != '') {
            document.MAINFORM.TEMP_LOAD_PLACE.value = document.MAINFORM.NEW_ORIGIN.value;
        } else {
            if (document.MAINFORM.ORIGIN.value == "" || document.MAINFORM.ORIGIN.value == null) {
                document.MAINFORM.TEMP_LOAD_PLACE.value = document.MAINFORM.ORIGIN.value;
            } else {
                document.MAINFORM.TEMP_LOAD_PLACE.value = document.MAINFORM.ORIGIN.value;
            }
        }

        // FOR AUTO-RENE TAB

        if (document.MAINFORM.NEW_FREQUENCY.value != '') {
            document.MAINFORM.TEMP_FREQUENCY.value = document.MAINFORM.NEW_FREQUENCY.value;
        } else {

            if (document.MAINFORM.FREQUENCY.value == "" || document.MAINFORM.FREQUENCY.value == null) {
                document.MAINFORM.TEMP_FREQUENCY.value = document.MAINFORM.FREQUENCY.value;
            } else {
                document.MAINFORM.TEMP_FREQUENCY.value = document.MAINFORM.FREQUENCY.value;
            }
        }
        if (document.MAINFORM.NEW_FINAL_EXPIRY_DT.value != '') {
            document.MAINFORM.TEMP_FINAL_EXPIRY_DT.value = document.MAINFORM.NEW_FINAL_EXPIRY_DT.value;
        } else {
            if (document.MAINFORM.FINAL_EXPIRY_DT.value == "" || document.MAINFORM.FINAL_EXPIRY_DT.value == null) {
                document.MAINFORM.TEMP_FINAL_EXPIRY_DT.value = document.MAINFORM.FINAL_EXPIRY_DT.value;
            } else {
                document.MAINFORM.TEMP_FINAL_EXPIRY_DT.value = document.MAINFORM.FINAL_EXPIRY_DT.value;
            }
        }
        if (document.MAINFORM.NEW_RENEWAL_DAYS.value != '') {
            document.MAINFORM.TEMP_RENEWAL_DAYS.value = document.MAINFORM.NEW_RENEWAL_DAYS.value;
        } else {
            if (document.MAINFORM.RENEWAL_DAYS.value == "" || document.MAINFORM.RENEWAL_DAYS.value == null) {
                document.MAINFORM.TEMP_RENEWAL_DAYS.value = document.MAINFORM.RENEWAL_DAYS.value;
            } else {
                document.MAINFORM.TEMP_RENEWAL_DAYS.value = document.MAINFORM.RENEWAL_DAYS.value;
            }

        }
        if (document.MAINFORM.NEW_NOTIFY_DAYS.value != '') {
            document.MAINFORM.TEMP_NOTIFY_DAYS.value = document.MAINFORM.NEW_NOTIFY_DAYS.value;
        } else {
            if (document.MAINFORM.NOTIFY_DAYS.value == "" || document.MAINFORM.NOTIFY_DAYS.value == null) {
                document.MAINFORM.TEMP_NOTIFY_DAYS.value = document.MAINFORM.NOTIFY_DAYS.value;
            } else {
                document.MAINFORM.TEMP_NOTIFY_DAYS.value = document.MAINFORM.NOTIFY_DAYS.value;
            }

        }

        if (document.MAINFORM.NEW_NOTIFY_DATE.value != '') {
            document.MAINFORM.TEMP_NOTIFY_DATE.value = document.MAINFORM.NEW_NOTIFY_DATE.value;
        } else {

            if (document.MAINFORM.NOTIFY_DATE.value == "" || document.MAINFORM.NOTIFY_DATE.value == null) {
                document.MAINFORM.TEMP_NOTIFY_DATE.value = document.MAINFORM.NOTIFY_DATE.value;
            } else {
                document.MAINFORM.TEMP_NOTIFY_DATE.value = document.MAINFORM.NOTIFY_DATE.value;
            }
        }
        if (document.MAINFORM.NEW_NRENEW_ADV_PERIOD.value != '') {
            document.MAINFORM.TEMP_NRENEW_ADV_PERIOD.value = document.MAINFORM.NEW_NRENEW_ADV_PERIOD.value;

        } else {
            if (document.MAINFORM.NRENEW_ADV_PERIOD.value == "" || document.MAINFORM.NRENEW_ADV_PERIOD.value == null) {
                document.MAINFORM.TEMP_NRENEW_ADV_PERIOD.value = document.MAINFORM.NRENEW_ADV_PERIOD.value;
            } else {
                document.MAINFORM.TEMP_NRENEW_ADV_PERIOD.value = document.MAINFORM.NRENEW_ADV_PERIOD.value;
            }

        }

        if (document.MAINFORM.NEW_NRENEW_ADV_DATE.value != '') {
            document.MAINFORM.TEMP_NRENEW_ADV_DATE.value = document.MAINFORM.NEW_NRENEW_ADV_DATE.value;
        } else {

            if (document.MAINFORM.NRENEW_ADV_DATE.value == "" || document.MAINFORM.NRENEW_ADV_DATE.value == null) {
                document.MAINFORM.TEMP_NRENEW_ADV_DATE.value = document.MAINFORM.NRENEW_ADV_DATE.value;
            } else {
                document.MAINFORM.TEMP_NRENEW_ADV_DATE.value = document.MAINFORM.NRENEW_ADV_DATE.value;
            }
        }

        if (document.MAINFORM.NEW_RENEWAL_STATUS.value != '') {
            document.MAINFORM.TEMP_RENEWAL_STATUS.value = document.MAINFORM.NEW_RENEWAL_STATUS.value;
        } else {
            if (document.MAINFORM.RENEWAL_STATUS.value == "" || document.MAINFORM.RENEWAL_STATUS.value == null) {
                document.MAINFORM.TEMP_RENEWAL_STATUS.value = document.MAINFORM.RENEWAL_STATUS.value;
            } else {
                document.MAINFORM.TEMP_RENEWAL_STATUS.value = document.MAINFORM.RENEWAL_STATUS.value;
            }
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Calculate_Advising() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['SBLC_ADV_CHG'];
        amt = EEHtml.getElementById("LC_AMT").value;
        ccy = EEHtml.getElementById("LC_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Calculate_Courier() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['SBLC_COURIER_CHG'];
        amt = EEHtml.getElementById("LC_AMT").value;
        ccy = EEHtml.getElementById("LC_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Calculate_ISSUE_Comms() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['SBLC_ISS_CHG'];
        amt = EEHtml.getElementById("LC_AMT").value;
        ccy = EEHtml.getElementById("LC_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Calculate_Other() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['SBLC_OTHER_CHG'];
        amt = EEHtml.getElementById("LC_AMT").value;
        ccy = EEHtml.getElementById("LC_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Calculate_Post() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['SBLC_POST_CHG'];
        amt = EEHtml.getElementById("LC_AMT").value;
        ccy = EEHtml.getElementById("LC_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Change_Tab() {
    try {

        if (document.MAINFORM.SEPARATE_CHG_FLG.value == 'NO') {
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, 'P');
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_ALL_CHARGE_AT, 'P');
        } else {
            if (document.MAINFORM.SEPARATE_CHG_FLG.value == 'YES') {
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, 'M');
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, 'M');
            }
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_chg_Init_FOR_Charge() {
    try {

        if ("PM||MM||KP".indexOf(SYS_FUNCTION_TYPE) > -1) {
            CHG_setAllCollCcy('USD');
            SYT_Set_TRXCCY2CHG();
            document.MAINFORM.CHG_VALUE_DATE.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Screen_Calculation_Foreign() {
    try {

        var obj; // Utility Auto Fix Comments
        obj = EEHtml.getElementById('CHG_FLD_LOCAL_CHG_TOTAL_CUST_PAY_AMT');
        if (obj) {
            Chg.Screen.mapForeignCust("APPL_ID", "APPL_NM", "LC_CCY", "C_MAIN_REF");
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Screen_Calculation_local() {
    try {

        var obj; // Utility Auto Fix Comments
        obj = EEHtml.getElementById('CHG_FLD_LOCAL_CHG_TOTAL_CUST_PAY_AMT');

        if (obj) {
            Chg.Screen.mapLocalCust("document.MAINFORM.BENE_ID", "document.MAINFORM.BENE_NM");
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_DRAWE_ORDER_NUMBER() {
    try {

        var DRAWE_ID; // Utility Auto Fix Comments
        var DRAWE_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //DRAWE_ORDER_NO = document.MAINFORM.DRWE_ORDER_NO.value;
        //DRAWE_ID = document.MAINFORM.DRWE_ID.value;
        //sSQLWhere = "ORDER_NO =" + DRAWE_ORDER_NO + "AND C_MAIN_REF='" + DRAWE_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "DRWE_NM;DRWE_ADD1;DRWE_ADD2;DRWE_ADD3";
        SYS_GetTableDataByRule_S('SYM_SBLC_SYM_SBLC_DRAWE_ORDER_NUMBER_4', '1');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Format_onChange() {
    try {

        var sql1; // Utility Auto Fix Comments
        var sql2; // Utility Auto Fix Comments
        var str; // Utility Auto Fix Comments
        if (document.MAINFORM.MESG_TYPE.value == 'MT700') {
            SYT_ChangeFldClass(document.MAINFORM.MT700_STNDBY_TEXT1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MT760_STNDBY_TEXT1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.STNDBY_TEXT1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
            document.MAINFORM.FURTHER_IDENTITY.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_TAG, 'P');

            str = "";
            str += "<select name='APLB_RULE' id='APLB_RULE' title='Applicable Rule' tabindex='5' class='CHAR_M' onchange='SYM_SBLC_SHOW_HIDDEN_APPLB_RULE();'>";
            str += "<option value='' ></option>";
            str += "<option value='EUCP LATEST VERSION' >EUCP LATEST VERSION</option>";
            str += "<option value='EUCPURR LATEST VERSION'>EUCPURR LATEST VERSION</option>";
            //str += "<option value='ISP LATEST VERSION'>ISP LATEST VERSION</option>";//Jax 2020/5/25
            str += "<option value='OTHR'>OTHR</option>";
            str += "<option value='UCP LATEST VERSION'>UCP LATEST VERSION</option>";
            str += "<option value='UCPURR LATEST VERSION'>UCPURR LATEST VERSION</option>";
            str += "</select>";
            EEHtml.getElementById('APPL_RULE_DIV').innerHTML = str;
            EEHtml.getElementById('D').style.display = "";
            EEHtml.getElementById('E').style.display = "";
            EEHtml.getElementById('F').style.display = 'none';
            EEHtml.getElementById('G').style.display = 'none';

            //sql1 = "C_MAIN_REF = " + "'" + document.MAINFORM.C_MAIN_REF.value + "'";
            SYS_GetTableDataByRule_S('SYM_SBLC_SYM_SBLC_Format_onChange_5', '1', true);

            if (document.MAINFORM.OTHER_RULES.value != '') {
                document.MAINFORM.APLB_RULE.value = "OTHR";
            } else {
                SYT_ChangeFldClass(document.MAINFORM.OTHER_RULES, 'H');
                document.MAINFORM.OTHER_RULES.value = '';
            }
        } else if (document.MAINFORM.MESG_TYPE.value == 'MT760') {
            SYT_ChangeFldClass(document.MAINFORM.MT700_STNDBY_TEXT1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MT760_STNDBY_TEXT1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.STNDBY_TEXT1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'M');
            // document.MAINFORM.FURTHER_IDENTITY.value = 'ISSUE';
            SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');

            str = ''; // Utility Auto Fix Comments
            str += "<select name='APLB_RULE' id='APLB_RULE' title='Applicable Rule' tabindex='5' class='CHAR_M' onchange='SYM_SBLC_SHOW_HIDDEN_APPLB_RULE();'>";
            str += "<option value=''></option>";
            str += "<option value='ISPR'>ISPR</option>";
            str += "<option value='NONE'>NONE</option>";
            str += "<option value='OTHR'>OTHR</option>";
            str += "<option value='URDG'>URDG</option>";
            str += "</select>";
            EEHtml.getElementById('APPL_RULE_DIV').innerHTML = str;
            EEHtml.getElementById('F').style.display = "";
            EEHtml.getElementById('D').style.display = 'none';
            EEHtml.getElementById('E').style.display = 'none';
            EEHtml.getElementById('G').style.display = 'none';

            //sql2 = "C_MAIN_REF = " + "'" + document.MAINFORM.C_MAIN_REF.value + "'";
            SYS_GetTableDataByRule_S('SYM_SBLC_SYM_SBLC_Format_onChange_6', '1', true);

            if (document.MAINFORM.OTHER_RULES.value != '') {
                document.MAINFORM.APLB_RULE.value = 'OTHR';
            } else {
                SYT_ChangeFldClass(document.MAINFORM.OTHER_RULES, 'H');
                document.MAINFORM.OTHER_RULES.value = '';
            }
        } else if (document.MAINFORM.MESG_TYPE.value == 'MAIL') {
            SYT_ChangeFldClass(document.MAINFORM.MT700_STNDBY_TEXT1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MT760_STNDBY_TEXT1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.STNDBY_TEXT1, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FURTHER_IDENTITY, 'P');
            document.MAINFORM.FURTHER_IDENTITY.value = '';
            SYT_ChangeFldClass(document.MAINFORM.OTHER_RULES, 'H');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
            document.MAINFORM.APLB_RULE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
            EEHtml.getElementById('G').style.display = "";
            EEHtml.getElementById('D').style.display = 'none';
            EEHtml.getElementById('E').style.display = 'none';
            EEHtml.getElementById('F').style.display = 'none';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.OTHER_RULES, 'H');
            document.MAINFORM.OTHER_RULES.value = '';
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE, 'P');
            document.MAINFORM.APLB_RULE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_TAG, 'P');

            EEHtml.getElementById('G').style.display = 'none';
            EEHtml.getElementById('D').style.display = 'none';
            EEHtml.getElementById('E').style.display = 'none';
            EEHtml.getElementById('F').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_FOR_ACCOUNT_ORDER_NUMBER() {
    try {

        var FOR_ACCT_ORDER_NO; // Utility Auto Fix Comments
        var For_ACCT_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //FOR_ACCT_ORDER_NO =EEHtml.getElementById('FOR_ACCT_ORDER_NO').value;
        //For_ACCT_ID =EEHtml.getElementById('FOR_ACCT_NR').value;
        //sSQLWhere = "ORDER_NO =" + FOR_ACCT_ORDER_NO + "AND C_MAIN_REF='" + For_ACCT_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "FOR_ACCT_NAME;FOR_ACCT_ADD1;FOR_ACCT_ADD2;FOR_ACCT_ADD3";
        SYS_GetTableDataByRule_S('SYM_SBLC_SYM_SBLC_FOR_ACCOUNT_ORDER_NUMBER_7', '1');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Hidden_Appl_Rule() {
    try {

        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            SYT_ChangeFldClass(document.MAINFORM.OTHER_RULES, 'O');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.OTHER_RULES, 'H');
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Hidd_BENE_NM() {
    try {

        if (document.MAINFORM.BENE_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.BENE_BTN, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BENE_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_LC_CCY_BAL() {
    try {

        SYS_GetExchangeRate(document.MAINFORM.LC_CCY.value, 'USD', 'Booking Rate', document.MAINFORM.EXCH_RATE.name, SYM_SBLC_LC_CCY);
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_LC_CCY() {
    try {

        var amt; // Utility Auto Fix Comments
        var base_bal; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        amt = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        rate = SYS_BeFloat(document.MAINFORM.EXCH_RATE.value);
        base_bal = amt * rate;
        document.MAINFORM.BASE_BAL.value = SYT_AmtFormat(SYS_LOCAL_CCY, base_bal);
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_NEW_BENE_ORDER_NUMBER() {
    try {

        var NEW_BENE_ID; // Utility Auto Fix Comments
        var NEW_BENE_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //NEW_BENE_ORDER_NO = document.MAINFORM.NEW_BENE_ORDER_NO.value;
        //NEW_BENE_ID = document.MAINFORM.NEW_BENE_ID.value;
        //sSQLWhere = "ORDER_NO =" + NEW_BENE_ORDER_NO + "AND C_MAIN_REF='" + NEW_BENE_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "NEW_BENE_NM;NEW_BENE_ADD1;NEW_BENE_ADD2;NEW_BENE_ADD3";
        SYS_GetTableDataByRule_S('SYM_SBLC_SYM_SBLC_NEW_BENE_ORDER_NUMBER_8', '1');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_SBLC_GET_REF_20() {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;


        while (node == null) {
            node = SYS_getDoByXpath("AdviceForBankCust");
        }
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0; i < arrayvalue.length; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'BANK_N90_REF_20', document.MAINFORM.C_MAIN_REF.value);
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_setRef(ref) {
    try {

        var mainRef; // Utility Auto Fix Comments
        var sLC_TYPE; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        sLC_TYPE = document.MAINFORM.LC_TYPE.value;
        year = SYM_SBLC_getFullYear();

        mainRef = '';
        if (sLC_TYPE != '') {
            //mainRef = ref.substr(0, 3) + year + ref.substr(3, 7);
            mainRef = ref.substr(0, 3) + year + ref.substr(4, 8); //Edit by amy in 20141118 for control ref no length
            document.MAINFORM.C_MAIN_REF.value = mainRef;
        } else {
            document.MAINFORM.C_MAIN_REF.value = mainRef;
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Show_Amend_AutoRenew() {
    try {

        var obj4; // Utility Auto Fix Comments
        obj4 = document.MAINFORM.AUTO_RENEW.value;

        if (obj4 == 'YES') {
            EEHtml.getElementById('F').style.display = '';
        } else {
            EEHtml.getElementById('F').style.display = 'none';

        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Show_AutoRenewal_Tab() {
    try {

        var obj; // Utility Auto Fix Comments
        obj = document.MAINFORM.AUTO_RENEW.value;

        if (obj == 'YES') {
            EEHtml.getElementById('H').style.display = '';

            SYT_ChangeFldClass(EEHtml.getElementById('FREQUENCY'), 'M');
        } else {
            EEHtml.getElementById('H').style.display = 'none';
            SYT_ChangeFldClass(EEHtml.getElementById('FREQUENCY'), 'O');
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Show_Beneficiaries_Tab() {
    try {

        var obj1; // Utility Auto Fix Comments
        obj1 = EEHtml.getElementById('MULTI_BENE').value;

        if (obj1 == 'YES') {
            EEHtml.getElementById('C').style.display = '';
        } else {
            EEHtml.getElementById('C').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Show_doc_status() {
    try {

        var obj; // Utility Auto Fix Comments
        obj = EEHtml.getElementById('DOC_STATUS').value;

        if (obj == "SETTLE" || obj == "FINAL") {
            EEHtml.getElementById('D').style.display = '';
        } else {
            EEHtml.getElementById('D').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Show_Format_Amend_Mail() {
    try {

        var obj3; // Utility Auto Fix Comments
        obj3 = document.MAINFORM.MESG_TYPE.value;

        if (obj3 == "MAIL") {
            EEHtml.getElementById('E').style.display = '';

        } else {

            EEHtml.getElementById('E').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Show_Format_MAIL() {
    try {

        var obj5; // Utility Auto Fix Comments
        obj5 = document.MAINFORM.MESG_TYPE.value;

        if (obj5 == "MAIL") {
            EEHtml.getElementById('G').style.display = '';
        } else {
            EEHtml.getElementById('G').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Show_Format_MT700() {
    try {

        var obj2; // Utility Auto Fix Comments
        obj2 = document.MAINFORM.MESG_TYPE.value;

        if (obj2 == "MT700") {
            EEHtml.getElementById('D').style.display = '';
            EEHtml.getElementById('E').style.display = '';
            SYM_SBLC_APPL_RULE_FOR_OTHER();
        } else {
            EEHtml.getElementById('D').style.display = 'none';
            EEHtml.getElementById('E').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Show_Format_MT707() {
    try {

        var obj1; // Utility Auto Fix Comments
        obj1 = document.MAINFORM.MESG_TYPE.value;

        if (obj1 == "MT707") {
            EEHtml.getElementById('C').style.display = '';

        } else {
            EEHtml.getElementById('C').style.display = 'none';

        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Show_Format_MT760() {
    try {

        var obj4; // Utility Auto Fix Comments
        obj4 = document.MAINFORM.MESG_TYPE.value;

        if (obj4 == "MT760") {
            EEHtml.getElementById('F').style.display = '';
        } else {
            EEHtml.getElementById('F').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Show_Format_MT767() {
    try {

        var obj2; // Utility Auto Fix Comments
        obj2 = document.MAINFORM.MESG_TYPE.value;

        if (obj2 == 'MT767') {
            EEHtml.getElementById('D').style.display = '';
        } else {
            EEHtml.getElementById('D').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_SHOW_HIDDEN_APPLB_RULE() {
    try {

        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            SYT_ChangeFldClass(document.MAINFORM.OTHER_RULES, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.OTHER_RULES, 'H');
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Show_Schedule_Tab() {
    try {

        var obj3; // Utility Auto Fix Comments
        obj3 = EEHtml.getElementById('SCHEDULED').value;

        if (obj3 == 'YES') {
            EEHtml.getElementById('I').style.display = '';
        } else {
            EEHtml.getElementById('I').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_SQL_APPL_ADD_CUST() {
    try {

        SYS_InqCUBK_byCondition('APPL_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_SQL_BENE_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up take some time", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('BENE_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_SQL_FOR_ACCT_NR() {
    try {

        var retvalue; // Utility Auto Fix Comments

        retvalue = window.confirm("Are you sure you wish to continue,this look up take some time", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('FOR_ACCT_NR', '1');
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_SQL_New_Bene_ID() {
    try {

        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up take some time", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('NEW_BENE_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_SYM_SBLC_Chg_Calculate_SWIFT() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['SBLC_SWIFT_CHG'];
        amt = EEHtml.getElementById("LC_AMT").value;
        ccy = EEHtml.getElementById("LC_CCY").value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Cal_NXT_COMM_DT() {
    try {

        var CHG_POLICY; // Utility Auto Fix Comments
        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var Fist_D; // Utility Auto Fix Comments
        var Fist_M; // Utility Auto Fix Comments
        var Fist_Y; // Utility Auto Fix Comments
        var Last_D; // Utility Auto Fix Comments
        var Last_M; // Utility Auto Fix Comments
        var Last_Y; // Utility Auto Fix Comments
        var START_DT; // Utility Auto Fix Comments
        var _yyy; // Utility Auto Fix Comments
        var day; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var new_dt_month; // Utility Auto Fix Comments
        var new_dt_year; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        unit_code = SYS_ORI_UNIT_CODE;
        START_DT = document.MAINFORM.COMM_DT.value;
        CHG_POLICY = document.MAINFORM.CHG_POLICY.value;
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);

        if (SYS_DATE_FORMAT == "" || SYS_DATE_FORMAT == null || SYS_DATE_FORMAT == "undefined") {
            return;
        }
        Fist_Y = SYS_DATE_FORMAT.toLowerCase().indexOf('y');
        Last_Y = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('y');
        Fist_M = SYS_DATE_FORMAT.toLowerCase().indexOf('m');
        Last_M = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('m');
        Fist_D = SYS_DATE_FORMAT.toLowerCase().indexOf('d');
        Last_D = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('d');

        _yyy = SYS_DATE_FORMAT.substr(Last_M + 1, 1).toString(); // Utility Auto Fix Comments

        year = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_Y, Last_Y - Fist_Y + 1));

        month = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_M, Last_M - Fist_M + 1));

        day = document.MAINFORM.COMM_START_DT.value.substr(Fist_D, Last_D - Fist_D + 1);
        new_dt_year = year;
        new_dt_month = month;
        if (START_DT == '') {
            return;
        }
        if (SYS_ORG_FUNCTION_NAME == 'SBLCIssue') {
            if (CHG_POLICY == 'Weekly') {
                if (COMM_DT == COMM_START_DT) {
                    SYS_CalEndWorkingDate_S(unit_code, START_DT, '7', document.MAINFORM.NXT_COMM_DT.name, 'A', 'N', 'N');
                } else {
                    document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_DT.value;
                }
            }
            if (CHG_POLICY == 'Monthly') {
                if (COMM_DT == COMM_START_DT) {
                    //SYS_CalEndWorkingDate_S(unit_code, START_DT, '30',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                    new_dt_month = month + 1;
                    if (new_dt_month > 12) {
                        new_dt_month = new_dt_month - 12;
                        new_dt_year = year + 1;
                    }


                    if (Fist_Y < Fist_M) {
                        if (Fist_M < Fist_D) {
                            document.MAINFORM.NXT_COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
                        }
                    } else {
                        if (Fist_M < Fist_D) {
                            document.MAINFORM.NXT_COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                        } else {
                            document.MAINFORM.NXT_COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                        }
                    }
                } else {
                    document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_DT.value;
                }
            }
            if (CHG_POLICY == 'Quarterly') {
                if (COMM_DT == COMM_START_DT) {
                    //SYS_CalEndWorkingDate_S(unit_code, START_DT, '90',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                    new_dt_month = month + 3;
                    if (new_dt_month > 12) {
                        new_dt_month = new_dt_month - 12;
                        new_dt_year = year + 1;
                    }
                    if (Fist_Y < Fist_M) {
                        if (Fist_M < Fist_D) {
                            document.MAINFORM.NXT_COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
                        }
                    } else {
                        if (Fist_M < Fist_D) {
                            document.MAINFORM.NXT_COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                        } else {
                            document.MAINFORM.NXT_COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                        }
                    }
                } else {
                    document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_DT.value;
                }
            }
            if (CHG_POLICY == 'Half yearly') {
                if (COMM_DT == COMM_START_DT) {
                    //SYS_CalEndWorkingDate_S(unit_code, START_DT, '180',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                    new_dt_month = month + 6;
                    if (new_dt_month > 12) {
                        new_dt_month = new_dt_month - 12;
                        new_dt_year = year + 1;
                    }

                    if (new_dt_month < 10) {
                        new_dt_month = '0' + new_dt_month.toString();
                    }

                    if (Fist_Y < Fist_M) {
                        if (Fist_M < Fist_D) {
                            document.MAINFORM.NXT_COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
                        }
                    } else {
                        if (Fist_M < Fist_D) {
                            document.MAINFORM.NXT_COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                        } else {
                            document.MAINFORM.NXT_COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                        }
                    }
                } else {
                    document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_DT.value;
                }
            }
            if (CHG_POLICY == 'Yearly') {
                if (COMM_DT == COMM_START_DT) {
                    //SYS_CalEndWorkingDate_S(unit_code, START_DT, '365',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                    new_dt_year = year + 1;
                    if (Fist_Y < Fist_M) {
                        if (Fist_M < Fist_D) {
                            document.MAINFORM.NXT_COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
                        }
                    } else {
                        if (Fist_M < Fist_D) {
                            document.MAINFORM.NXT_COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                        } else {
                            document.MAINFORM.NXT_COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
                        }
                    }
                } else {
                    document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.COMM_DT.value;
                }
            }
        } else if (SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm') {
            if (CHG_POLICY == 'Weekly') {
                SYS_CalEndWorkingDate_S(unit_code, START_DT, '7', document.MAINFORM.NXT_COMM_DT.name, 'A', 'N', 'N');
            }
            if (CHG_POLICY == 'Monthly') {
                //SYS_CalEndWorkingDate_S(unit_code, START_DT, '30',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                SYM_SBLC_NXT_COMM_DT();
            }
            if (CHG_POLICY == 'Quarterly') {
                //SYS_CalEndWorkingDate_S(unit_code, START_DT, '90',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                SYM_SBLC_NXT_COMM_DT();
            }
            if (CHG_POLICY == 'Half yearly') {
                //SYS_CalEndWorkingDate_S(unit_code, START_DT, '180',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                SYM_SBLC_NXT_COMM_DT();
            }
            if (CHG_POLICY == 'Yearly') {
                //SYS_CalEndWorkingDate_S(unit_code, START_DT, '365',document.MAINFORM.NXT_COMM_DT.name,'A','N','N');
                SYM_SBLC_NXT_COMM_DT();
            }
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY() {
    try {

        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        unit_code = SYS_ORI_UNIT_CODE;

        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                ISS_COMM.setChargeAt(1);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                document.MAINFORM.TOTAL_ISS_COMM.value = 0;
                document.MAINFORM.CURRENT_COMM.value = 0;
                document.MAINFORM.COMM_BAL.value = 0;
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYT_CAL_COMM('GTEE_ISS_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
                break;
            case 'All in Advance':
                ISS_COMM.setChargeAt(0);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYT_CAL_COMM('GTEE_ISS_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
                SYM_SBLC_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Part in Advance':
                ISS_COMM.setChargeAt(0);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                document.MAINFORM.NXT_COMM_DT.value = '';
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYT_CAL_COMM('GTEE_ISS_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
                SYM_SBLC_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = 0;
                Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", "0");
                break;
            case 'Weekly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_WEEK.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '7', document.MAINFORM.COMM_DT.name, 'A', 'N', 'N');
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_WEEK();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_WEEK.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Monthly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_MONTH.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Cal_COMM_DT();
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_MONTH();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_MONTH.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Quarterly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_QUARTER.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Cal_COMM_DT();
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_QUARTER();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Half yearly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_HALF_YEAR.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Cal_COMM_DT();
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Yearly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_YEAR.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Cal_COMM_DT();
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_ChangeFldClass() {
    try {

        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('SBLC_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                SYT_ChangeFldClass_New('COMM_DT', 'B');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'B');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'B');
                SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'O');
                SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'O');
                break;
            case 'All in Advance':
                SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                SYT_ChangeFldClass_New('COMM_DT', 'B');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'B');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM.protectChargeFor();
                //ISS_COMM.protectChargeAt();
                //ISS_COMM._protectActiveAmt();
                //ISS_COMM._protectCollectAmt();			
                break;
            case 'Part in Advance':
                SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                SYT_ChangeFldClass_New('COMM_DT', 'M');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'M');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'M');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM.protectChargeFor();
                //ISS_COMM.protectChargeAt();
                //ISS_COMM._protectActiveAmt();
                //ISS_COMM._protectCollectAmt();			
                break;
            case 'Weekly':
                SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                SYT_ChangeFldClass_New('COMM_DT', 'M');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM_WEEK.protectChargeFor();
                //ISS_COMM_WEEK.protectChargeAt();
                //ISS_COMM_WEEK._protectActiveAmt();
                //ISS_COMM_WEEK._protectCollectAmt();			
                break;
            case 'Monthly':
                SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                SYT_ChangeFldClass_New('COMM_DT', 'M');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM_MONTH.protectChargeFor();
                //ISS_COMM_MONTH.protectChargeAt();
                //ISS_COMM_MONTH._protectActiveAmt();
                //ISS_COMM_MONTH._protectCollectAmt();			
                break;
            case 'Quarterly':
                SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                SYT_ChangeFldClass_New('COMM_DT', 'M');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM_QUARTER.protectChargeFor();
                //ISS_COMM_QUARTER.protectChargeAt();
                //ISS_COMM_QUARTER._protectActiveAmt();
                //ISS_COMM_QUARTER._protectCollectAmt();			
                break;
            case 'Half yearly':
                SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                SYT_ChangeFldClass_New('COMM_DT', 'M');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM_HALF_YEAR.protectChargeFor();
                //ISS_COMM_HALF_YEAR.protectChargeAt();
                //ISS_COMM_HALF_YEAR._protectActiveAmt();
                //ISS_COMM_HALF_YEAR._protectCollectAmt();			
                break;
            case 'Yearly':
                SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                SYT_ChangeFldClass_New('COMM_DT', 'M');
                SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT','P');
                //SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR','P');
                //ISS_COMM_YEAR.protectChargeFor();
                //ISS_COMM_YEAR.protectChargeAt();
                //ISS_COMM_YEAR._protectActiveAmt();
                //ISS_COMM_YEAR._protectCollectAmt();			
                break;
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Set_ChargeAt() {
    try {

        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);

        switch (document.MAINFORM.CHG_POLICY.value) {
            case 'Weekly':
                if (COMM_DT > COMM_START_DT) {
                    ISS_COMM_MONTH.setChargeAt(1);
                } else {
                    ISS_COMM_MONTH.setChargeAt(0);
                }
                break;

            case 'Quarterly':
                if (COMM_DT > COMM_START_DT) {
                    ISS_COMM_QUARTER.setChargeAt(1);
                } else {
                    ISS_COMM_QUARTER.setChargeAt(0);
                }
                break;

            case 'Half yearly':
                if (COMM_DT > COMM_START_DT) {
                    ISS_COMM_HALF_YEAR.setChargeAt(1);
                } else {
                    ISS_COMM_HALF_YEAR.setChargeAt(0);
                }
                break;

            case 'Yearly':
                if (COMM_DT > COMM_START_DT) {
                    ISS_COMM_YEAR.setChargeAt(1);
                } else {
                    ISS_COMM_YEAR.setChargeAt(0);
                }
                break;
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Calculate_GTEE_ISS_COMM_BY_CHG_POLICY2() {
    try {

        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        unit_code = SYS_ORI_UNIT_CODE;

        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                ISS_COMM.setChargeAt(1);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                document.MAINFORM.TOTAL_ISS_COMM.value = 0;
                document.MAINFORM.CURRENT_COMM.value = 0;
                document.MAINFORM.COMM_BAL.value = 0;
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYT_CAL_COMM('GTEE_ISS_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
                break;
            case 'All in Advance':
                ISS_COMM.setChargeAt(0);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYT_CAL_COMM('GTEE_ISS_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
                SYM_SBLC_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);

                break;
            case 'Part in Advance':
                ISS_COMM.setChargeAt(0);
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM.display();
                document.MAINFORM.NXT_COMM_DT.value = '';
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYT_CAL_COMM('GTEE_ISS_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
                SYM_SBLC_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = 0;
                Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", "0");
                break;
            case 'Weekly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_WEEK.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_WEEK();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_WEEK.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Monthly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_MONTH.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_MONTH();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_MONTH.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Quarterly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_QUARTER.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_QUARTER();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Half yearly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_HALF_YEAR.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                //document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                //SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '180',document.MAINFORM.COMM_DT.name,'A','N','N');
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Yearly':
                ISS_COMM.hide();
                ISS_COMM_WEEK.hide();
                ISS_COMM_MONTH.hide();
                ISS_COMM_QUARTER.hide();
                ISS_COMM_HALF_YEAR.hide();
                ISS_COMM_YEAR.hide();
                ISS_COMM_YEAR.display();
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                if (COMM_DT == COMM_START_DT) {
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getActiveAmt();
                } else {
                    document.MAINFORM.CURRENT_COMM.value = 0;
                }
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_CHK_COMM_END_DT() {
    try {

        var COMM_END_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_END_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_END_DT.value);
        if (COMM_END_DT < COMM_START_DT) {
            alert("Commission End Date must be later than Commission Commence Date!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_CHK_COMM_DT() {
    try {

        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
        if (COMM_DT < COMM_START_DT) {
            alert("Commission Date must be later than or equal to Commission Commence Date!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_FOR_AMEND_DT() {
    try {

        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        switch (document.MAINFORM.CHG_POLICY.value) {
            case 'Weekly':
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_WEEK();
                SYM_SBLC_SET_NO_OF_PERIODS();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_WEEK.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_WEEK.protectChargeAt();
                break;
            case 'Monthly':
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_MONTH();
                SYM_SBLC_SET_NO_OF_PERIODS();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_MONTH.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_MONTH.protectChargeAt();
                break;
            case 'Quarterly':
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_QUARTER();
                SYM_SBLC_SET_NO_OF_PERIODS();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_QUARTER.protectChargeAt();
                break;
            case 'Half yearly':
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                SYM_SBLC_SET_NO_OF_PERIODS();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_HALF_YEAR.protectChargeAt();
                break;
            case 'Yearly':
                SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                SYM_SBLC_SET_NO_OF_PERIODS();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                ISS_COMM_YEAR.protectChargeAt();
                break;
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Part_In_Advance_Comm_Onchange() {
    try {

        var CURRENT_COMM; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var TOTAL_ISS_COMM; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        if (document.MAINFORM.CHG_POLICY.value == 'Part in Advance') {
            if (document.MAINFORM.CURRENT_COMM.value != 0) {
                CURRENT_COMM = SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                TOTAL_ISS_COMM = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value);
                if (CURRENT_COMM > TOTAL_ISS_COMM) {
                    alert("Current Commission should less than or equal to Total Issuance Commission");
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", "0");
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                } else {
                    Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                }
            }
        }
        ISS_COMM.protectChargeFor();
        ISS_COMM.protectChargeAt();
        ISS_COMM._protectActiveAmt(); // Utility Auto Fix Comments
        ISS_COMM._protectCollectAmt(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Cal_TOTAL_ISS_COMM() {
    try {

        var ISS_COMM; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        document.MAINFORM.COMM_CCY.value = ISS_COMM.getActiveCcy();
        SYT_ChangeFldClass_New('COMM_CCY', 'P');
        document.MAINFORM.TOTAL_ISS_COMM.value = ISS_COMM.getActiveAmt();
        document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.TOTAL_ISS_COMM.value);
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_MONTH() {
    try {

        var MONTH; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM_MONTH'];
        if (SYS_ORG_FUNCTION_NAME == 'SBLCIssue') {
            amt = document.MAINFORM.LC_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'SBLCAmendment') {
            amt = document.MAINFORM.NEW_LC_AMT.value;
        }
        ccy = document.MAINFORM.LC_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');
        document.MAINFORM.PERIOD.value = MONTH;
        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, '', '', '', '', '');
        aResult = Chg.callCalcService(ccy, amt, 'GTEE_ISS_COMM_MONTH', chargeFor, custID, 'USD', 'Booking Rate', '', '', '', '', '', MONTH, '');
        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_YEAR() {
    try {

        var YEAR; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM_YEAR'];
        if (SYS_ORG_FUNCTION_NAME == 'SBLCIssue') {
            amt = document.MAINFORM.LC_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'SBLCAmendment') {
            amt = document.MAINFORM.NEW_LC_AMT.value;
        }
        ccy = document.MAINFORM.LC_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        YEAR = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'Y');
        document.MAINFORM.PERIOD.value = YEAR;
        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, '', '', '', '', '');
        aResult = Chg.callCalcService(ccy, amt, 'GTEE_ISS_COMM_YEAR', chargeFor, custID, 'USD', 'Booking Rate', '', '', '', '', '', YEAR, '');
        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_SET_NO_OF_PERIODS() {
    try {

        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var NO_OF_PERIODS; // Utility Auto Fix Comments
        NO_OF_PERIODS = SYS_BeInt(document.MAINFORM.NO_OF_PERIODS.value);
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
        if (COMM_DT > COMM_START_DT) {
            document.MAINFORM.NO_OF_PERIODS.value = 0;
        } else if (COMM_DT == COMM_START_DT) {
            document.MAINFORM.NO_OF_PERIODS.value = 1;
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_WEEK() {
    try {

        var DAY; // Utility Auto Fix Comments
        var WEEK; // Utility Auto Fix Comments
        var WEEK_1; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM_WEEK'];
        if (SYS_ORG_FUNCTION_NAME == 'RegisterOutward' || SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm') {
            amt = document.MAINFORM.LC_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'OutwardApplyRejectAmendment') {
            amt = document.MAINFORM.NEW_LC_AMT.value;
        }
        ccy = document.MAINFORM.LC_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        DAY = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'D');
        WEEK = Math.round(DAY / 7);
        WEEK_1 = DAY % 3;

        if (WEEK_1 > 0) {
            WEEK += 1;
        }
        document.MAINFORM.PERIOD.value = WEEK;

        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, '', '', '', '', '');
        aResult = Chg.callCalcService(ccy, amt, 'GTEE_ISS_COMM_WEEK', chargeFor, custID, 'USD', 'Booking Rate', '', '', '', '', '', WEEK, '');
        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Cal_COMM_DT() {
    try {

        var Fist_D; // Utility Auto Fix Comments
        var Fist_M; // Utility Auto Fix Comments
        var Fist_Y; // Utility Auto Fix Comments
        var Last_D; // Utility Auto Fix Comments
        var Last_M; // Utility Auto Fix Comments
        var Last_Y; // Utility Auto Fix Comments
        var _yyy; // Utility Auto Fix Comments
        var day; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var new_dt_month; // Utility Auto Fix Comments
        var new_dt_year; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        if (SYS_DATE_FORMAT == "" || SYS_DATE_FORMAT == null || SYS_DATE_FORMAT == "undefined") {
            return;
        }
        Fist_Y = SYS_DATE_FORMAT.toLowerCase().indexOf('y');
        Last_Y = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('y');
        Fist_M = SYS_DATE_FORMAT.toLowerCase().indexOf('m');
        Last_M = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('m');
        Fist_D = SYS_DATE_FORMAT.toLowerCase().indexOf('d');
        Last_D = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('d');

        _yyy = SYS_DATE_FORMAT.substr(Last_M + 1, 1).toString(); // Utility Auto Fix Comments

        if (document.MAINFORM.COMM_START_DT.value == '') {
            return;
        }
        year = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_Y, Last_Y - Fist_Y + 1));

        month = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_M, Last_M - Fist_M + 1));

        day = document.MAINFORM.COMM_START_DT.value.substr(Fist_D, Last_D - Fist_D + 1);
        new_dt_year = year;
        new_dt_month = month;
        if (document.MAINFORM.CHG_POLICY.value == 'Monthly') {
            new_dt_month = month + 1;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Quarterly') {
            new_dt_month = month + 3;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Half yearly') {
            new_dt_month = month + 6;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Yearly') {
            new_dt_year = year + 1;
        }

        if (new_dt_month < 10) {
            new_dt_month = '0' + new_dt_month.toString();
        }

        if (Fist_Y < Fist_M) {
            if (Fist_M < Fist_D) {
                document.MAINFORM.COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
            }
        } else {
            if (Fist_M < Fist_D) {
                document.MAINFORM.COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            } else {
                document.MAINFORM.COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_QUARTER() {
    try {

        var MONTH; // Utility Auto Fix Comments
        var QUARTER; // Utility Auto Fix Comments
        var QUARTER_1; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM_QUARTER'];
        if (SYS_ORG_FUNCTION_NAME == 'SBLCIssue') {
            amt = document.MAINFORM.LC_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'SBLCAmendment') {
            amt = document.MAINFORM.NEW_LC_AMT.value;
        }
        ccy = document.MAINFORM.LC_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');

        QUARTER = Math.round(MONTH / 3);
        QUARTER_1 = MONTH % 3;

        if (QUARTER_1 > 0) {
            QUARTER += 1;
        }

        document.MAINFORM.PERIOD.value = QUARTER;
        if (sDate == '' || eDate == '') {
            return;
        }

        Chg.calculate(arr, ccy, amt, '', '', '');

        aResult = Chg.callCalcService(ccy, amt, 'GTEE_ISS_COMM_QUARTER', chargeFor, custID, 'USD', 'Booking Rate', '', '', '', '', '', QUARTER, '');

        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR() {
    try {

        var HALF_YEAR; // Utility Auto Fix Comments
        var HALF_YEAR_1; // Utility Auto Fix Comments
        var MONTH; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM_HALF_YEAR'];
        if (SYS_ORG_FUNCTION_NAME == 'SBLCIssue') {
            amt = document.MAINFORM.LC_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'SBLCAmendment') {
            amt = document.MAINFORM.NEW_LC_AMT.value;
        }
        ccy = document.MAINFORM.LC_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');

        HALF_YEAR = Math.round(MONTH / 6);
        HALF_YEAR_1 = MONTH % 6;

        if (HALF_YEAR_1 > 0) {
            HALF_YEAR += 1;
        }

        document.MAINFORM.PERIOD.value = HALF_YEAR;
        if (sDate == '' || eDate == '') {
            return;
        }

        Chg.calculate(arr, ccy, amt, '', '', '');

        aResult = Chg.callCalcService(ccy, amt, 'GTEE_ISS_COMM_HALF_YEAR', chargeFor, custID, 'USD', 'Booking Rate', '', '', '', '', '', HALF_YEAR, '');

        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Calculate_Amd_Comm() {
    try {

        var DETRMNTL_FLG; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM'];
        DETRMNTL_FLG = document.MAINFORM.DETRMNTL_FLG.value;
        if (DETRMNTL_FLG == 'NO') {
            amt = document.MAINFORM.INC_AMT.value;
        } else {
            amt = 0;
        }
        ccy = document.MAINFORM.LC_CCY.value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Calculate_SBLC_ISS_COMM_NEW() {
    try {

        var DAY; // Utility Auto Fix Comments
        var Days; // Utility Auto Fix Comments
        var HALF_YEAR; // Utility Auto Fix Comments
        var HALF_YEAR_1; // Utility Auto Fix Comments
        var MONTH; // Utility Auto Fix Comments
        var QUARTER; // Utility Auto Fix Comments
        var QUARTER_1; // Utility Auto Fix Comments
        var TTLAMT; // Utility Auto Fix Comments
        var WEEK; // Utility Auto Fix Comments
        var WEEK_1; // Utility Auto Fix Comments
        var YEAR; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chgObj; // Utility Auto Fix Comments
        var chgamt; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var pertermamt; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        var terms; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM'];
        if (SYS_ORG_FUNCTION_NAME == 'SBLCIssue') {
            amt = document.MAINFORM.LC_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'SBLCAmendment') {
            amt = document.MAINFORM.NEW_LC_AMT.value;
        }
        ccy = document.MAINFORM.LC_CCY.value;
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;

        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, sDate, eDate, '', '', '');

        Days = SYS_GetSubDays(document.MAINFORM.COMM_START_DT.name, document.MAINFORM.COMM_END_DT.name);
        MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');
        chgObj = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        if (chgObj != '' && chgObj != null && chgObj != 'null' && chgObj != 'undefined') {
            chgamt = chgObj.getActiveAmt();
        }
        TTLAMT = chgamt;

        document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, TTLAMT);
        terms = document.MAINFORM.CHG_POLICY.value;
        pertermamt = 0;
        if (terms == 'Weekly') {
            DAY = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'D');
            WEEK = Math.floor(DAY / 7);
            WEEK_1 = DAY % 3;

            if (WEEK_1 > 0) {
                WEEK += 1;
            }
            document.MAINFORM.PERIOD.value = WEEK;
            pertermamt = chgamt / WEEK;
        }
        if (terms == 'Monthly') {
            document.MAINFORM.PERIOD.value = MONTH;
            pertermamt = chgamt / MONTH;
        }
        if (terms == 'Quarterly') {
            QUARTER = Math.floor(MONTH / 3);
            QUARTER_1 = MONTH % 3;

            if (QUARTER_1 > 0) {
                QUARTER += 1;
            }
            document.MAINFORM.PERIOD.value = QUARTER;
            pertermamt = chgamt / QUARTER;
        }
        if (terms == 'Half yearly') {
            HALF_YEAR = Math.floor(MONTH / 6);
            HALF_YEAR_1 = MONTH % 6;

            if (HALF_YEAR_1 > 0) {
                HALF_YEAR += 1;
            }

            document.MAINFORM.PERIOD.value = HALF_YEAR;
            pertermamt = chgamt / HALF_YEAR;
        }
        if (terms == 'Yearly') {
            YEAR = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'Y');
            document.MAINFORM.PERIOD.value = YEAR;
            pertermamt = chgamt / YEAR;
        }
        pertermamt = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, pertermamt);
        document.MAINFORM.CURRENT_COMM.value = pertermamt;
        document.MAINFORM.CURRENT_COMM_TEMP.value = pertermamt;

        if (chgObj != '' && chgObj != null && chgObj != 'null' && chgObj != 'undefined') {
            chgObj.setActiveAmt(pertermamt);
            if (chgObj.getChargeAt() == '1') {
                chgObj.setBalAmt(pertermamt);
                chgObj.setPayAmt(0.00);
            } else if (chgObj.getChargeAt() == '0') {
                chgObj.setPayAmt(pertermamt);
                chgObj.setBalAmt(0.00);
            } else {
                chgObj.setPayAmt(0.00);
                chgObj.setBalAmt(0.00);
            }
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_NXT_COMM_DT() {
    try {

        var Fist_D; // Utility Auto Fix Comments
        var Fist_M; // Utility Auto Fix Comments
        var Fist_Y; // Utility Auto Fix Comments
        var Last_D; // Utility Auto Fix Comments
        var Last_M; // Utility Auto Fix Comments
        var Last_Y; // Utility Auto Fix Comments
        var _yyy; // Utility Auto Fix Comments
        var day; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var new_dt_month; // Utility Auto Fix Comments
        var new_dt_year; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        if (SYS_DATE_FORMAT == "" || SYS_DATE_FORMAT == null || SYS_DATE_FORMAT == "undefined") {
            return;
        }
        Fist_Y = SYS_DATE_FORMAT.toLowerCase().indexOf('y');
        Last_Y = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('y');
        Fist_M = SYS_DATE_FORMAT.toLowerCase().indexOf('m');
        Last_M = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('m');
        Fist_D = SYS_DATE_FORMAT.toLowerCase().indexOf('d');
        Last_D = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('d');

        _yyy = SYS_DATE_FORMAT.substr(Last_M + 1, 1).toString(); // Utility Auto Fix Comments

        if (document.MAINFORM.COMM_DT.value == '') {
            return;
        }
        year = parseFloat(document.MAINFORM.COMM_DT.value.substr(Fist_Y, Last_Y - Fist_Y + 1));

        month = parseFloat(document.MAINFORM.COMM_DT.value.substr(Fist_M, Last_M - Fist_M + 1));

        day = document.MAINFORM.COMM_DT.value.substr(Fist_D, Last_D - Fist_D + 1);
        new_dt_year = year;
        new_dt_month = month;
        if (document.MAINFORM.CHG_POLICY.value == 'Monthly') {
            new_dt_month = month + 1;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Quarterly') {
            new_dt_month = month + 3;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Half yearly') {
            new_dt_month = month + 6;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Yearly') {
            new_dt_year = year + 1;
        }

        if (new_dt_month < 10) {
            new_dt_month = '0' + new_dt_month.toString();
        }

        if (Fist_Y < Fist_M) {
            if (Fist_M < Fist_D) {
                document.MAINFORM.NXT_COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
            }
        } else {
            if (Fist_M < Fist_D) {
                document.MAINFORM.NXT_COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            } else {
                document.MAINFORM.NXT_COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Chg_Calculate_SBLC_ISS_COMM() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM'];
        amt = document.MAINFORM.LC_AMT.value;
        ccy = document.MAINFORM.LC_CCY.value;
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;

        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, sDate, eDate, '', '', '');
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_Calculate_ISS_COMM_NEW() {
    try {

        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var unit_code; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        unit_code = SYS_ORI_UNIT_CODE;
        document.MAINFORM.COMM_START_DT.value = document.MAINFORM.ISSUE_DT.value;
        document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;

        switch (document.MAINFORM.CHG_POLICY.value) {
            case '':
                ISS_COMM.setChargeAt(1);
                document.MAINFORM.TOTAL_ISS_COMM.value = 0;
                document.MAINFORM.CURRENT_COMM.value = 0;
                document.MAINFORM.COMM_BAL.value = 0;
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_SBLC_Chg_Calculate_SBLC_ISS_COMM();
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '1';
                break;
            case 'All in Advance':
                ISS_COMM.setChargeAt(0);
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_SBLC_Chg_Calculate_SBLC_ISS_COMM();
                SYM_SBLC_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                break;
            case 'Part in Advance':
                ISS_COMM.setChargeAt(0);
                document.MAINFORM.NXT_COMM_DT.value = '';
                document.MAINFORM.PERIOD.value = 0;
                document.MAINFORM.NO_OF_PERIODS.value = 0;
                SYM_SBLC_Chg_Calculate_SBLC_ISS_COMM();
                SYM_SBLC_Cal_TOTAL_ISS_COMM();
                document.MAINFORM.CURRENT_COMM.value = 0;
                Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", "0");
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                break;
            case 'Weekly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_START_DT.value, '7', document.MAINFORM.COMM_DT.name, 'A', 'N', 'N');
                SYM_SBLC_Calculate_SBLC_ISS_COMM_NEW();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                CHG_allTrxChargeAt_onchange();
                break;
            case 'Monthly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Cal_COMM_DT();
                SYM_SBLC_Calculate_SBLC_ISS_COMM_NEW();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                CHG_allTrxChargeAt_onchange();
                break;
            case 'Quarterly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Cal_COMM_DT();
                SYM_SBLC_Calculate_SBLC_ISS_COMM_NEW();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                CHG_allTrxChargeAt_onchange();
                break;
            case 'Half yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Cal_COMM_DT();
                SYM_SBLC_Calculate_SBLC_ISS_COMM_NEW();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                CHG_allTrxChargeAt_onchange();
                break;
            case 'Yearly':
                document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                document.MAINFORM.COMM_END_DT.value = document.MAINFORM.EXPIRY_DT.value;
                SYM_SBLC_Cal_COMM_DT();
                SYM_SBLC_Calculate_SBLC_ISS_COMM_NEW();
                SYM_SBLC_SET_NO_OF_PERIODS();
                COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
                COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getActiveAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                CHG_allTrxChargeAt_onchange();
                break;
        }
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}

function SYM_SBLC_getFullYear() {
    try {

        var arrCurrBusiDT; // Utility Auto Fix Comments
        var currentBusiDT; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        //SYS_BUSI_DATE Format "dd-mm-yyyy".

        currentBusiDT = SYS_BUSI_DATE;
        arrCurrBusiDT = currentBusiDT.split("-");

        year = arrCurrBusiDT[2];

        return year;
    } catch (e) {
        DisExcpt("SYM_SBLC.js", e);
    }
}