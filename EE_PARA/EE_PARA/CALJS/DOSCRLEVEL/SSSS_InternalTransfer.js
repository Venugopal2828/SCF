"path:SCRN/InternalTransfer.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Cal_CPYT_ASSGN = function() {
    try {
        var retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_Sql('CPYT_ASSGN_CUST', sql);
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_ASSGN_ADD = function() {
    try {
        SYS_InqCUBK('CPYT_ASSGN_ADD', 'CPYT_ASSGN_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_ASSGN_EMAIL_ADD = function() {
    try {
        if (document.MAINFORM.CPYT_ASSGN_COR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_EMAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_EMAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_ASSGN_FAX_NO = function() {
    try {
        if (document.MAINFORM.CPYT_ASSGN_COR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_FAX_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_FAX_NO, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_ASSGN_ID = function() {
    try {
        if (document.MAINFORM.CPYT_ASSGN_ID.value == '') {
            document.MAINFORM.CPYT_ASSGN_NM.value = '';
            document.MAINFORM.CPYT_ASSGN_ADD1.value = '';
            document.MAINFORM.CPYT_ASSGN_ADD2.value = '';
            document.MAINFORM.CPYT_ASSGN_ADD3.value = '';
            document.MAINFORM.CPYT_ASSGN_MAIL_ADD.value = '';
            document.MAINFORM.CPYT_ASSGN_COR_MED.value = 'None';
            document.MAINFORM.CPYT_ASSGN_LANG.value = '';
            document.MAINFORM.CPYT_ASSGN_FAX_NO.value = '';
            document.MAINFORM.CPYT_ASSGN_EMAIL_ADD.value = '';
            document.MAINFORM.CPYT_ASSGN_TELEX.value = '';
        } else {
            SYS_GetCUBK('CPYT_ASSGN_CUST', document.MAINFORM.CPYT_ASSGN_ID.name);
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_ASSGN_MAIL_ADD = function() {
    try {
        if (document.MAINFORM.CPYT_ASSGN_COR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_MAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_ASSGN_MAIL_POST = function() {
    try {
        SYS_InqCUBK('CPYT_ASSGN_POST', 'CPYT_ASSGN_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_ASSGN_ORDER_NO = function() {
    try {
        //var CPYT_ASSGN_ORDER_NO = document.MAINFORM.CPYT_ASSGN_ORDER_NO.value;
        //var CPYT_ASSGN_ID = document.MAINFORM.CPYT_ASSGN_ID.value;
        //var sSQLWhere = "ORDER_NO = " + CPYT_ASSGN_ORDER_NO + " AND C_MAIN_REF = '" + CPYT_ASSGN_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "CPYT_ASSGN_NM;CPYT_ASSGN_ADD1;CPYT_ASSGN_ADD2;CPYT_ASSGN_ADD3";

        SYS_GetTableDataByRule_S('SSSS_InternalTransfer_Cal_CPYT_ASSGN_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_ASSGN_OREDER_POST = function() {
    try {
        //var CPYT_ASSGN_OREDER_POST = document.MAINFORM.CPYT_ASSGN_OREDER_POST.value;
        //var CPYT_ASSGN_ID = document.MAINFORM.CPYT_ASSGN_ID.value;
        //var sSQLWhere = "ORDER_NO = " + CPYT_ASSGN_OREDER_POST + " AND C_MAIN_REF = '" + CPYT_ASSGN_ID + "'";
        //var sTableName = "POST_ADD_DO";
        //var sFieldList = "POSTAL_FMT_ADD";
        //var sMappingList = "CPYT_DR_MAIL_ADD";
        SYS_GetTableDataByRule_S('SSSS_InternalTransfer_Cal_CPYT_ASSGN_OREDER_POST_1', '1');
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_ASSGN_TELEX = function() {
    try {
        if (document.MAINFORM.CPYT_ASSGN_COR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_TELEX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_TELEX, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_BUY_RATE = function() {
    try {
        var FromCCy = document.MAINFORM.CPYT_CR_CCY.value;
        var ToCCy = document.MAINFORM.CPYT_DR_CCY.value;
        if (FromCCy != "" && ToCCy != "") {
            SYS_GetExchangeRate(FromCCy, ToCCy, "BOOK_KEEPING_RATE", "CPYT_BUY_RATE", "Cal_principleAmount");
        } else {
            Cal_principleAmount();
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_DR = function() {
    try {
        var sql = "1=1";

        if (document.MAINFORM.CPYT_DR_NAME.value != '') {
            sql = sql + " AND PARTY_NM like '%<--CPYT_DR_NAME-->%'";
        }
        if (document.MAINFORM.CPYT_DR_ADD1.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 like '%<--CPYT_DR_ADD1-->%'";
        }
        if (document.MAINFORM.CPYT_DR_ADD2.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 like '%<--CPYT_DR_ADD2-->%'";
        }
        if (document.MAINFORM.CPYT_DR_ADD3.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 like '%<--CPYT_DR_ADD3-->%'";
        }

        if (sql == "1=1") {
            var retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK('CPYT_DR_CUST');
            }
        } else {
            SYS_InqCUBK_Sql('CPYT_DR_CUST', sql);
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_DR_ADD = function() {
    try {
        SYS_InqCUBK('CPYT_DR_ADD', 'CPYT_DR_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_DR_AMT_DRCCY = function() {
    try {
        document.MAINFORM.CPYT_DR_AMT_DRCCY.value = document.MAINFORM.DB_CALC_AMT.value;
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_DR_EMAIL_ADD = function() {
    try {
        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_EMAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_EMAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_DR_FAX_NO = function() {
    try {
        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_FAX_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_FAX_NO, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_DR_ID = function() {
    try {
        if (document.MAINFORM.CPYT_DR_ID.value == '') {
            document.MAINFORM.CPYT_DR_NAME.value = '';
            document.MAINFORM.CPYT_DR_ADD1.value = '';
            document.MAINFORM.CPYT_DR_ADD2.value = '';
            document.MAINFORM.CPYT_DR_ADD3.value = '';
            document.MAINFORM.CPYT_DR_MAIL_ADD.value = '';
            document.MAINFORM.CPYT_DR_COR_MED.value = 'None';
            document.MAINFORM.CPYT_DR_LANG.value = '';
            document.MAINFORM.CPYT_DR_FAX_NO.value = '';
            document.MAINFORM.CPYT_DR_EMAIL_ADD.value = '';
            document.MAINFORM.CPYT_DR_TELEX.value = '';
        } else {
            SYS_GetCUBK('CPYT_DR_CUST', document.MAINFORM.CPYT_DR_ID.name, 'Cal_CPYT_DR_ID_back');
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_DR_ID_back = function() {
    try {
        Chg.Screen.setLocalCust(document.MAINFORM.CPYT_DR_ID.value, document.MAINFORM.CPYT_DR_NAME.value);
        Cal_Chg_Calculation();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_DR_MAIL_ADD = function() {
    try {
        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_MAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_DR_MAIL_POST = function() {
    try {
        SYS_InqCUBK('CPYT_DR_POST', 'CPYT_DR_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_DR_ORDER_NO = function() {
    try {
        //var CPYT_DR_ORDER_NO = document.MAINFORM.CPYT_DR_ORDER_NO.value;
        //var CPYT_DR_ID = document.MAINFORM.CPYT_DR_ID.value;
        //var sSQLWhere = "ORDER_NO = " + CPYT_DR_ORDER_NO + " AND C_MAIN_REF = '" + CPYT_DR_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "CPYT_DR_NAME;CPYT_DR_ADD1;CPYT_DR_ADD2;CPYT_DR_ADD3";

        SYS_GetTableDataByRule_S('SSSS_InternalTransfer_Cal_CPYT_DR_ORDER_NO_2', '1');
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_DR_ORDER_POST = function() {
    try {
        //var CPYT_DR_ORDER_POST = document.MAINFORM.CPYT_DR_ORDER_POST.value;
        //var CPYT_DR_ID = document.MAINFORM.CPYT_DR_ID.value;
        //var sSQLWhere = "ORDER_NO = " + CPYT_DR_ORDER_POST + " AND C_MAIN_REF = '" + CPYT_DR_ID + "'";
        //var sTableName = "POST_ADD_DO";
        //var sFieldList = "POSTAL_FMT_ADD";
        //var sMappingList = "CPYT_DR_MAIL_ADD";
        SYS_GetTableDataByRule_S('SSSS_InternalTransfer_Cal_CPYT_DR_ORDER_POST_3', '1');
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_DR_TELEX = function() {
    try {
        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_TELEX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_TELEX, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_N_PAY_AMT = function() {
    try {
        document.MAINFORM.CPYT_N_PAY_AMT.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_CRCCY.value), findDecFromCCY(document.MAINFORM.CPYT_CR_CCY.value));
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_CPYT_PAY_CCY = function() {
    try {
        document.MAINFORM.CPYT_PAY_CCY.value = document.MAINFORM.CPYT_CR_CCY.value;
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_Chg_Calculation = function() {
    try {
        Chg.calculate(['Other']);
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Cal_principleAmount = function() {
    try {
        var RateOut2In = SYS_BeFloat(document.MAINFORM.CPYT_DR_BUY_RATE.value);
        if (SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) > 0) {
            document.MAINFORM.CPYT_CR_AMT_CRCCY.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value), findDecFromCCY(document.MAINFORM.CPYT_CR_CCY.value));
            document.MAINFORM.DB_CALC_AMT.value = DecimalFormat(0, findDecFromCCY(document.MAINFORM.CPYT_DR_CCY.value));
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value) * RateOut2In, findDecFromCCY(document.MAINFORM.CPYT_DR_CCY.value));
        } else if (SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) > 0) {
            document.MAINFORM.CPYT_CR_AMT_CRCCY.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value), findDecFromCCY(document.MAINFORM.CPYT_DR_CCY.value));
            document.MAINFORM.CR_CALC_AMT.value = DecimalFormat(0, findDecFromCCY(document.MAINFORM.CPYT_CR_CCY.value));
            if (RateOut2In == 0 || RateOut2In == null) {
                document.MAINFORM.CPYT_CR_AMT_CRCCY.value = DecimalFormat(0, findDecFromCCY(document.MAINFORM.CPYT_CR_CCY.value));
            } else {
                document.MAINFORM.CPYT_CR_AMT_CRCCY.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value) / RateOut2In, findDecFromCCY(document.MAINFORM.CPYT_CR_CCY.value));
            }
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.Chk_ValueDates = function(sValueDateType) {
    try {
        if (document.MAINFORM.elements[sValueDateType].value != SYS_DATE && !SYS_Day1MustbeLaterThanDay2('CPYT_CR_VAL_DATE', 'CPYT_DR_VAL_DATE')) {
            document.MAINFORM.elements[sValueDateType].value = SYS_DATE;
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.CPYT_CR_VAL_DATE.value = SYS_BUSI_DATE;
        document.MAINFORM.CPYT_DR_VAL_DATE.value = SYS_BUSI_DATE;
        document.MAINFORM.CPYT_DR_BUY_RATE.value = 1;
        document.MAINFORM.CR_CALC_AMT.value = DecimalFormat(document.MAINFORM.CR_CALC_AMT.value, findDecFromCCY(document.MAINFORM.CPYT_CR_CCY.value));
        document.MAINFORM.DB_CALC_AMT.value = DecimalFormat(document.MAINFORM.DB_CALC_AMT.value, findDecFromCCY(document.MAINFORM.CPYT_DR_CCY.value));
        document.MAINFORM.CPYT_CR_AMT_CRCCY.value = DecimalFormat(document.MAINFORM.CPYT_CR_AMT_CRCCY.value, findDecFromCCY(document.MAINFORM.CPYT_CR_CCY.value));
        document.MAINFORM.CPYT_DR_AMT_DRCCY.value = DecimalFormat(document.MAINFORM.CPYT_DR_AMT_DRCCY.value, findDecFromCCY(document.MAINFORM.CPYT_DR_CCY.value));
        document.MAINFORM.CPYT_N_PAY_AMT.value = DecimalFormat(document.MAINFORM.CPYT_N_PAY_AMT.value, findDecFromCCY(document.MAINFORM.CPYT_PAY_CCY.value));
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        Cal_Chg_Calculation();

    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        SYS_GetRefNo('PYMT', setRefNo);
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.setRefNo = function(sRef) {
    try {
        if (SYS_MODULE_NAME == 'PYMT') {
            document.MAINFORM.C_MAIN_REF.value = sRef;
        } else {
            document.MAINFORM.PYMT_C_MAIN_REF.value = sRef;
        }
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_ASSGN_ADD_BTN_onclick = function(event) {
    try {
        Cal_CPYT_ASSGN_ADD();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_ASSGN_COR_MED_onchange = function(event) {
    try {
        Cal_CPYT_ASSGN_MAIL_ADD();
        Cal_CPYT_ASSGN_FAX_NO();
        Cal_CPYT_ASSGN_EMAIL_ADD();
        Cal_CPYT_ASSGN_TELEX();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_ASSGN_ID_onchange = function(event) {
    try {
        Cal_CPYT_ASSGN_ID();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_ASSGN_ID_BTN_onclick = function(event) {
    try {
        Cal_CPYT_ASSGN();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_ASSGN_ORDER_NO_onchange = function(event) {
    try {
        Cal_CPYT_ASSGN_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_ASSGN_OREDER_POST_onchange = function(event) {
    try {
        Cal_CPYT_ASSGN_OREDER_POST();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_ASSGN_POST_BTN_onclick = function(event) {
    try {
        Cal_CPYT_ASSGN_MAIL_POST();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_CR_AMT_CRCCY_onchange = function(event) {
    try {
        Cal_CPYT_N_PAY_AMT();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_CR_CCY_onchange = function(event) {
    try {
        Cal_CPYT_BUY_RATE();
        Cal_CPYT_PAY_CCY();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_CR_VAL_DATE_onchange = function(event) {
    try {
        Chk_ValueDates('CPYT_CR_VAL_DATE');
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_DR_ADD_BTN_onclick = function(event) {
    try {
        Cal_CPYT_DR_ADD();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_DR_BUY_RATE_onchange = function(event) {
    try {
        Cal_principleAmount();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_DR_CCY_onchange = function(event) {
    try {
        Cal_CPYT_BUY_RATE();
        EEHtml.fireEvent(document.MAINFORM.CPYT_CR_AMT_CRCCY, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_DR_COR_MED_onchange = function(event) {
    try {
        Cal_CPYT_DR_MAIL_ADD();
        Cal_CPYT_DR_FAX_NO();
        Cal_CPYT_DR_EMAIL_ADD();
        Cal_CPYT_DR_TELEX();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_DR_ID_onchange = function(event) {
    try {
        Cal_CPYT_DR_ID();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_DR_ID_BTN_onclick = function(event) {
    try {
        Cal_CPYT_DR();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_DR_ORDER_NO_onchange = function(event) {
    try {
        Cal_CPYT_DR_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_DR_ORDER_POST_onchange = function(event) {
    try {
        Cal_CPYT_DR_ORDER_POST();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_DR_POST_BTN_onclick = function(event) {
    try {
        Cal_CPYT_DR_MAIL_POST();
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CPYT_DR_VAL_DATE_onchange = function(event) {
    try {
        Chk_ValueDates('CPYT_DR_VAL_DATE');
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.CR_CALC_AMT_onchange = function(event) {
    try {
        document.MAINFORM.CR_CALC_AMT.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.CR_CALC_AMT.value), findDecFromCCY(document.MAINFORM.CPYT_CR_CCY.value));
        Cal_principleAmount();
        Cal_CPYT_N_PAY_AMT();
        EEHtml.fireEvent(document.MAINFORM.CPYT_CR_AMT_CRCCY, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}

csDOScreenProto.DB_CALC_AMT_onchange = function(event) {
    try {
        document.MAINFORM.DB_CALC_AMT.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.DB_CALC_AMT.value), findDecFromCCY(document.MAINFORM.CPYT_DR_CCY.value));
        Cal_principleAmount();
        Cal_CPYT_DR_AMT_DRCCY();
        Cal_CPYT_N_PAY_AMT();
        EEHtml.fireEvent(document.MAINFORM.CPYT_CR_AMT_CRCCY, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_InternalTransfer.js", e);
    }
}