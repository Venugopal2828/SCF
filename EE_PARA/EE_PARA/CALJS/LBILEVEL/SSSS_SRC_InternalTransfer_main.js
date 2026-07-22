"path:SCRN/Library/COMMON/InternalTransfer_main.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_CPYT_ASSGN = function() {
    try {

        var retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('CPYT_ASSGN_CUST', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_ASSGN_ADD = function() {
    try {
        SYS_InqCUBK('CPYT_ASSGN_ADD', 'CPYT_ASSGN_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_ASSGN_EMAIL_ADD = function() {
    try {
        if (document.MAINFORM.CPYT_ASSGN_COR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_EMAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_EMAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_ASSGN_FAX_NO = function() {
    try {
        if (document.MAINFORM.CPYT_ASSGN_COR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_FAX_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_FAX_NO, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_ASSGN_ID = function() {
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
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_ASSGN_MAIL_ADD = function() {
    try {
        if (document.MAINFORM.CPYT_ASSGN_COR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_MAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_ASSGN_MAIL_POST = function() {
    try {
        SYS_InqCUBK('CPYT_ASSGN_POST', 'CPYT_ASSGN_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_ASSGN_ORDER_NO = function() {
    try {
        //var CPYT_ASSGN_ORDER_NO = document.MAINFORM.CPYT_ASSGN_ORDER_NO.value;
        //var CPYT_ASSGN_ID = document.MAINFORM.CPYT_ASSGN_ID.value;
        //var sSQLWhere = "ORDER_NO = " + CPYT_ASSGN_ORDER_NO + " AND C_MAIN_REF = '" + CPYT_ASSGN_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "CPYT_ASSGN_NM;CPYT_ASSGN_ADD1;CPYT_ASSGN_ADD2;CPYT_ASSGN_ADD3";

        SYS_GetTableDataByRule_S('SSSS_SRC_InternalTransfer_main_Cal_CPYT_ASSGN_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_ASSGN_OREDER_POST = function() {
    try {
        //var CPYT_ASSGN_OREDER_POST = document.MAINFORM.CPYT_ASSGN_OREDER_POST.value;
        //var CPYT_ASSGN_ID = document.MAINFORM.CPYT_ASSGN_ID.value;
        //var sSQLWhere = "ORDER_NO = " + CPYT_ASSGN_OREDER_POST + " AND C_MAIN_REF = '" + CPYT_ASSGN_ID + "'";
        //var sTableName = "POST_ADD_DO";
        //var sFieldList = "POSTAL_FMT_ADD";
        //var sMappingList = "CPYT_DR_MAIL_ADD";
        SYS_GetTableDataByRule_S('SSSS_SRC_InternalTransfer_main_Cal_CPYT_ASSGN_OREDER_POST_1', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_ASSGN_TELEX = function() {
    try {
        if (document.MAINFORM.CPYT_ASSGN_COR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_TELEX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_TELEX, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_BUY_RATE = function() {
    try {
        var FromCCy = document.MAINFORM.CPYT_CR_CCY.value;
        var ToCCy = document.MAINFORM.CPYT_DR_CCY.value;
        if (FromCCy != "" && ToCCy != "") {
            SYS_GetExchangeRate(FromCCy, ToCCy, "BOOK_KEEPING_RATE", "CPYT_BUY_RATE", "Cal_principleAmount");
        } else {
            Cal_principleAmount();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR = function() {
    try {

        var retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {

            SYS_InqCUBK_byCondition('CPYT_DR_CUST', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR_ADD = function() {
    try {
        SYS_InqCUBK('CPYT_DR_ADD', 'CPYT_DR_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR_AMT_DRCCY = function() {
    try {
        document.MAINFORM.CPYT_DR_AMT_DRCCY.value = document.MAINFORM.DB_CALC_AMT.value;
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR_EMAIL_ADD = function() {
    try {
        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Email') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_EMAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_EMAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR_FAX_NO = function() {
    try {
        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_FAX_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_FAX_NO, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR_ID = function() {
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
            SYS_GetCUBK('CPYT_DR_CUST', document.MAINFORM.CPYT_DR_ID.name);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR_MAIL_ADD = function() {
    try {
        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_MAIL_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR_MAIL_POST = function() {
    try {
        SYS_InqCUBK('CPYT_DR_POST', 'CPYT_DR_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR_ORDER_NO = function() {
    try {
        //var CPYT_DR_ORDER_NO = document.MAINFORM.CPYT_DR_ORDER_NO.value;
        //var CPYT_DR_ID = document.MAINFORM.CPYT_DR_ID.value;
        //var sSQLWhere = "ORDER_NO = " + CPYT_DR_ORDER_NO + " AND C_MAIN_REF = '" + CPYT_DR_ID + "'";
        //var sTableName = "SWF_ADD_DO";
        //var sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //var sMappingList = "CPYT_DR_NAME;CPYT_DR_ADD1;CPYT_DR_ADD2;CPYT_DR_ADD3";

        SYS_GetTableDataByRule_S('SSSS_SRC_InternalTransfer_main_Cal_CPYT_DR_ORDER_NO_2', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR_ORDER_POST = function() {
    try {
        //var CPYT_DR_ORDER_POST = document.MAINFORM.CPYT_DR_ORDER_POST.value;
        //var CPYT_DR_ID = document.MAINFORM.CPYT_DR_ID.value;
        //var sSQLWhere = "ORDER_NO = " + CPYT_DR_ORDER_POST + " AND C_MAIN_REF = '" + CPYT_DR_ID + "'";
        //var sTableName = "POST_ADD_DO";
        //var sFieldList = "POSTAL_FMT_ADD";
        //var sMappingList = "CPYT_DR_MAIL_ADD";
        SYS_GetTableDataByRule_S('SSSS_SRC_InternalTransfer_main_Cal_CPYT_DR_ORDER_POST_3', '1');
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_DR_TELEX = function() {
    try {
        if (document.MAINFORM.CPYT_DR_COR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_TELEX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_TELEX, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_N_PAY_AMT = function() {
    try {
        document.MAINFORM.CPYT_N_PAY_AMT.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_CRCCY.value), findDecFromCCY(document.MAINFORM.CPYT_CR_CCY.value));
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_CPYT_PAY_CCY = function() {
    try {
        document.MAINFORM.CPYT_PAY_CCY.value = document.MAINFORM.CPYT_CR_CCY.value;
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Cal_principleAmount = function() {
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
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.Chk_ValueDates = function(sValueDateType) {
    try {
        if (document.MAINFORM.elements[sValueDateType].value != SYS_DATE && !SYS_Day1MustbeLaterThanDay2('CPYT_CR_VAL_DATE', 'CPYT_DR_VAL_DATE')) {
            document.MAINFORM.elements[sValueDateType].value = SYS_DATE;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.InitValues = function() {
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
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.MPO_CPYT_ASSGN_BTN = function() {
    try {
        if (document.MAINFORM.CPYT_ASSGN_ID.value == "") {
            SYT_MPO_SPEED('CPYT_ASSGN_ADD_BTN,CPYT_ASSGN_POST_BTN,CPYT_CR_AC_BTN', 'P');
        } else {
            SYT_MPO_SPEED('CPYT_ASSGN_ADD_BTN,CPYT_ASSGN_POST_BTN,CPYT_CR_AC_BTN', 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.MPO_CPYT_DR_BTN = function() {
    try {
        if (document.MAINFORM.CPYT_DR_ID.value == "") {
            SYT_MPO_SPEED('CPYT_DR_ADD_BTN,CPYT_DR_POST_BTN,CPYT_DR_AC_BTN', 'P');
        } else {

            SYT_MPO_SPEED('CPYT_DR_ADD_BTN,CPYT_DR_POST_BTN,CPYT_DR_AC_BTN', 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.PreconditionOnInit = function() {
    try {
        SYS_GetRefNo('PYMT', setRefNo);
        MPO_CPYT_ASSGN_BTN();
        MPO_CPYT_DR_BTN();
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.calendarclick = function() {
    try {
        calendar(EEHtml.getElementById("DIARY_DT"));
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.onChangeDiary = function() {
    try {
        var DiaryValue = document.MAINFORM.DIARY_NARRATIVE.value.trim();
        if (DiaryValue == "") {
            SYT_ChangeFldClass('DIARY_DT', 'O');
            document.MAINFORM.DIARY_RELATED_REF.value = "";
            document.MAINFORM.DIARY_DT.value = "";
            EEHtml.getElementById("DIARY_DT").detachEvent("onclick", calendarclick);
        } else {
            SYT_ChangeFldClass('DIARY_DT', 'M');
            document.MAINFORM.DIARY_DT.value = SYS_BUSI_DATE;
            EEHtml.attachEventListener(EEHtml.getElementById("DIARY_DT"), "onclick", calendarclick);
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.setRefNo = function(sRef) {
    try {
        if (SYS_MODULE_NAME == 'PYMT') {
            document.MAINFORM.C_MAIN_REF.value = sRef;
        } else {
            document.MAINFORM.PYMT_C_MAIN_REF.value = sRef;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}

csLbiCompProto.viewDiaryHistory = function() {
    try {
        var mainRef = "";
        var unitCode = "";
        mainRef = document.MAINFORM.C_MAIN_REF.value;
        if (mainRef.trim() == "") {
            alert("C_MAIN_REF is empty!");
            return;
        }

        unitCode = SYS_BUSI_UNIT;
        if (unitCode.trim() == "") {
            alert("SYS_BUSI_UNIT is empty!");
            return;
        }

        var condition = "";
        condition = "&C_MAIN_REF=" + mainRef + "&C_UNIT_CODE=" + unitCode + "&C_MODU_NAME=" + SYS_MODULE_NAME + "&C_USER_NAME=" + SYS_USER_ID;

        var wid = screen.width - 200;
        var hei = screen.height - 300;
        var wStyle = "toolbar=0,menubar=0,resizable=1,scrollbars=1,status=1,top=100,left=100,width=" + wid + ",height=" + hei;

        var url = "../screen/CDRY_InqDiary_listview.jsp?" + condition;

        var trxWin = openWin(url, "transacview", wStyle);
        trxWin.focus();
    } catch (e) {
        DisExcpt("SSSS_SRC_InternalTransfer_main.js", e);
    }
}