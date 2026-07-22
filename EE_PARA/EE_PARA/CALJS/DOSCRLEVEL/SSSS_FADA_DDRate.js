"path:SCRN/o2m/FADA_DDRate.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CheckDuplicateDays = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var editid; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var From; // Utility Auto Fix Comments
        var To; // Utility Auto Fix Comments
        var FromRec;
        var ToRec;
        var node; // Utility Auto Fix Comments
        var recID; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath('DDRate');
        editid = node.grid.getSelectionModel().editRowId;
        From = SYS_BeFloat(document.MAINFORM.FA_DD_D_FROM.value);
        To = SYS_BeFloat(document.MAINFORM.FA_DD_D_TO.value);
        if (From > To) {
            SYS_CheckError(document.MAINFORM.FA_DD_D_FROM, "[Days From] must be less than [Days TO]!");
            return false;
        }
		arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            recID = SYS_getRecID(record);
			FromRec = SYS_BeFloat(SYS_getValFromRec(record, 'FA_DD_D_FROM'));
            ToRec = SYS_BeFloat(SYS_getValFromRec(record, 'FA_DD_D_TO'));
            //  var type = SYS_getRecState(record);
            //  alert(type+"type");
			if (editid == -1 || editid > recID) {
				if (From <= ToRec) {
		            SYS_CheckError(document.MAINFORM.FA_DD_D_FROM, "[Days From] overlap with the previous Rate record, please check!");
				    return false;
				}
			}
			if (editid == recID) continue;
			if (editid != -1 && editid < recID) {
				if (To >= FromRec) {
		            SYS_CheckError(document.MAINFORM.FA_DD_D_TO, "[Days To] overlap with the following Rate record, please check!");
				    return false;
				}
			}
/*
			var GapFrom = SYS_FloatSub(FromRec, From);
            var GapTo = SYS_FloatSub(From, ToRec);
            if (From > 0 && (SYS_FloatSub(FromRec, From) >= 0 || SYS_FloatSub(From, ToRec) <= 0)) {
                alert("This rule has set!Please change From.");
                document.MAINFORM.FA_DD_D_FROM.value = '0';
                return false;
            }
            if (To > 0 && (SYS_FloatSub(ToRec, To) >= 0 || SYS_FloatSub(To, FromRec) <= 0)) {

                alert("This rule has set!Please change To.");
                document.MAINFORM.FA_DD_D_TO.value = '0';
                return false;
            }
*/
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_DDRate.js*CheckDuplicateDays", e);
    }
}

csDOScreenProto.Check_D_FROM = function() {
    try {
        if (document.MAINFORM.FA_DD_D_FROM.value > 0 && document.MAINFORM.FA_DD_D_TO.value > 0 && SYS_FloatSub(SYS_BeFloat(document.MAINFORM.FA_DD_D_FROM.value), SYS_BeFloat(document.MAINFORM.FA_DD_D_TO.value)) > 0) {
            SYS_CheckError(document.MAINFORM.FA_DD_D_FROM, "FROM days must be less than the TO days!");
            document.MAINFORM.FA_DD_D_FROM.value = '0';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_DDRate.js*Check_D_FROM", e);
    }
}

csDOScreenProto.Check_D_TO = function() {
    try {
        if (document.MAINFORM.FA_DD_D_TO.value > 0 && SYS_FloatSub(SYS_BeFloat(document.MAINFORM.FA_DD_D_FROM.value), SYS_BeFloat(document.MAINFORM.FA_DD_D_TO.value)) > 0) {
            SYS_CheckError(document.MAINFORM.FA_DD_D_TO, "TO days must be greater than the FROM days!");
            document.MAINFORM.FA_DD_D_TO.value = '0';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FADA_DDRate.js*Check_D_TO", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return CheckDuplicateDays();
    } catch (e) {
        DisExcpt("SSSS_FADA_DDRate.js*ConfirmBusinessCheck", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        SYS_GetSubPageRefNo_S('FADA_BUY_REF', Rate_SetRef, "", "DOREF", "DOREF");
    } catch (e) {
        DisExcpt("SSSS_FADA_DDRate.js*InitValues", e);
    }
}

csDOScreenProto.Rate_SetRef = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = SYS_getValueFromMain('FA_BUSI_TYPE');
        UnitCode = SYS_BUSI_UNIT;
        UnitCode = UnitCode.substr(0, 4);
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        document.MAINFORM.FA_DD_RT_ID.value = pre + UnitCode + year + month + ref;
    } catch (e) {
        DisExcpt("SSSS_FADA_DDRate.js*Rate_SetRef", e);
    }
}

csDOScreenProto.FA_DD_D_FROM_onchange = function() {
    try {
        //Check_D_FROM();
        //CheckDuplicateDays();
    } catch (e) {
        DisExcpt("SSSS_FADA_DDRate.js*FA_DD_D_FROM_onchange", e);
    }
}

csDOScreenProto.FA_DD_D_TO_onchange = function() {
    try {
        //Check_D_TO();
        //CheckDuplicateDays();
    } catch (e) {
        DisExcpt("SSSS_FADA_DDRate.js*FA_DD_D_TO_onchange", e);
    }
}