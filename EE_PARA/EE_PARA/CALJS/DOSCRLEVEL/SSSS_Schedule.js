"path:SCRN/DO/Schedule.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_Schedule.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var F_date; // Utility Auto Fix Comments
        var F_date1; // Utility Auto Fix Comments
        var SCH_OrderNo; // Utility Auto Fix Comments
        var S_date; // Utility Auto Fix Comments
        var S_date1; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var datediff; // Utility Auto Fix Comments
        var diffDays; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var iDate; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var prevADate; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        var sOrderNo; // Utility Auto Fix Comments
        var tmpDate; // Utility Auto Fix Comments
        sDate = document.MAINFORM.DT_SCH.value;
        sOrderNo = document.MAINFORM.SCHD_ORDER_NO.value;
        if ('SBLCIssue' == SYS_FUNCTION_NAME) {
            iDate = parent.document.MAINFORM.ISSUE_DT.value;

            F_date = parseDate(iDate);
            S_date = parseDate(sDate);

            diffDays = dayDifference(F_date, S_date);
            if (diffDays <= 0) {
                alert('Action Date must be later than the Issue Date!');
                document.MAINFORM.DT_SCH.value = '';
                return false;
            }
        }
        if ('SBLC_Update' == SYS_FUNCTION_NAME) {
            iDate = parent.document.MAINFORM.ISSUE_DT.value; // Utility Auto Fix Comments
            tmpDate = iDate.substring(5, 7) + "-" + iDate.substring(8, 10) + "-" + iDate.substring(0, 4);
            F_date = parseDate(tmpDate); // Utility Auto Fix Comments
            S_date = parseDate(sDate); // Utility Auto Fix Comments

            diffDays = dayDifference(F_date, S_date); // Utility Auto Fix Comments
            if (diffDays <= 0) {
                alert('Action Date must be later than Issue Date!');
                document.MAINFORM.DT_SCH.value = '';
                return false;
            }

        }
        node = SYS_getDoByXpath("SBLCSchedule");
        arrayvalue = SYS_getRecords(node);

        for (i = 0; i < arrayvalue.length; i++) { // Utility Auto Fix Comments
            prevADate = SYS_getValFromRec(arrayvalue[i], document.MAINFORM.DT_SCH.name);
            SCH_OrderNo = SYS_getValFromRec(arrayvalue[i], document.MAINFORM.SCHD_ORDER_NO.name);
            F_date1 = parseDate(sDate);
            S_date1 = parseDate(prevADate);
            datediff = dayDifference(F_date1, S_date1);
            if (SCH_OrderNo != sOrderNo) {
                if (datediff == 0) {
                    alert('Action date must be different from previously added Action Date!');
                    document.MAINFORM.DT_SCH.value = '';
                    return false;
                }
            }
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_Schedule.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Schedule.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var maxrecord; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath('SBLCSchedule');
        arrayvalue = SYS_getRecords(node);

        maxrecord = SYS_BeInt(SYS_getValFromRec(arrayvalue[0], document.MAINFORM.SCHD_ORDER_NO.name));

        for (i = 0; i < arrayvalue.length; i++) {
            record = SYS_BeInt(SYS_getValFromRec(arrayvalue[i], document.MAINFORM.SCHD_ORDER_NO.name));
            if (record > maxrecord) {
                maxrecord = record;
            }
        }
        document.MAINFORM.SCHD_ORDER_NO.value = maxrecord + 1;
        ccy = parent.document.MAINFORM.LC_CCY.value;
        document.MAINFORM.LC_CCY.value = ccy;
        document.MAINFORM.SCHD_AMT.value = SYT_AmtFormat(ccy, document.MAINFORM.SCHD_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_Schedule.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        if ('SBLC_Update' == SYS_FUNCTION_NAME) {
            SYT_ChangeFldClass(document.MAINFORM.SCHD_STATUS, 'M');
            SYT_RemoveOption('SCHD_STATUS', 'DONE');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SCHD_STATUS, 'P');
        }

    } catch (e) {
        DisExcpt("SSSS_Schedule.js", e);
    }
}

csDOScreenProto.dayDifference = function(firstDate, secondDate) {
    try {
        return (secondDate - firstDate) / (1000 * 60 * 60 * 24);
    } catch (e) {
        DisExcpt("SSSS_Schedule.js", e);
    }
}

csDOScreenProto.parseDate = function(str) {
    try {
        var mdy; // Utility Auto Fix Comments
        mdy = str.split('-');
        return new Date(mdy[2], mdy[0] - 1, mdy[1]);
    } catch (e) {
        DisExcpt("SSSS_Schedule.js", e);
    }
}

csDOScreenProto.SCHD_AMT_onchange = function(event) {
    try {
        var SCHD = SYS_BeFloat(document.MAINFORM.SCHD_AMT.value);
        if (SCHD < 0) {
            alert("amount field value cannot be Negative");
            document.MAINFORM.SCHD_AMT.value = '';
        }
        ccy = parent.document.MAINFORM.LC_CCY.value;
        document.MAINFORM.SCHD_AMT.value = SYT_AmtFormat(ccy, document.MAINFORM.SCHD_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_Schedule.js", e);
    }
}