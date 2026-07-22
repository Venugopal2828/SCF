var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.CURRENT_STATUS.value = "Confirm";
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_TRCO_Chk_CurrencyBeNotSame()) {
            return false;
        }
        if (!SYF_TRCO_Chk_DuplicateRecordForConfirm()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetRefNo('TRCO_REF', 'SYF_TRCO_Cal_SetRefNo');

        document.MAINFORM.COMM_DATA_TP.value = "NDF Fixing Rate";
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        document.MAINFORM.VAL_DT.value = SYS_BUSI_DATE;
        // SYF_TRCO_Chk_DuplicateRecordByValueDate();
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_TRCO_Cal_FIX_RT = function() {
    try {
        var FIX_RT = SYS_BeFloat(document.MAINFORM.FIX_RT.value);
        var COMT_CCY = document.MAINFORM.COMT_CCY.value;
        document.MAINFORM.FIX_RT.value = SYT_setRateFormatByCurrency(FIX_RT, COMT_CCY);
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*SYF_TRCO_Cal_FIX_RT", e);
    }
}

csFuncLevelProto.SYF_TRCO_Cal_SetRefNo = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        CountryCode = SYS_BANK_COUNTRY;
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = 'TRCO';
        document.MAINFORM.C_MAIN_REF.value = sub + CountryCode + year + ref;
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*SYF_TRCO_Cal_SetRefNo", e);
    }
}

csFuncLevelProto.SYF_TRCO_Chk_CurrencyBeNotSame = function() {
    try {
        var COMT_CCY = document.MAINFORM.COMT_CCY.value;
        var PRICE_CCY = document.MAINFORM.PRICE_CCY.value;
        var bRtnFlag = true;

        if (COMT_CCY === PRICE_CCY) {
            alert("The Commodity CCY and Price CCY should not be the same!");
            bRtnFlag = false;
        }

        return bRtnFlag;
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*SYF_TRCO_Chk_CurrencyBeNotSame", e);
    }
}

csFuncLevelProto.SYF_TRCO_Chk_DuplicateRecordByValueDate = function() {
    try {
        //var sKeyFldList = document.MAINFORM.COMT_CCY.name + ";" + document.MAINFORM.PRICE_CCY.name + ";" + document.MAINFORM.VAL_DT.name;
        //SYS_GetCUBK("ChkDuplicateByValueDate", sKeyFldList, "SYF_TRCO_Get_DuplicateRecordByValueDateSuccess", "SYF_TRCO_Get_DuplicateRecordByValueDateFail", true);
        SYS_GetTableDataByRule('ChkDuplicateByValueDate', '1', 'SYF_TRCO_Get_DuplicateRecordByValueDateSuccess', 'SYF_TRCO_Get_DuplicateRecordByValueDateFail', true, true);
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*SYF_TRCO_Chk_DuplicateRecordByValueDate", e);
    }
}

csFuncLevelProto.SYF_TRCO_Chk_DuplicateRecordForConfirm = function() {
    try {
        var TEMP_CHK_FLG = document.MAINFORM.TEMP_CHK_FLG.value;
        var COMT_CCY = document.MAINFORM.COMT_CCY.value;
        var PRICE_CCY = document.MAINFORM.PRICE_CCY.value;
        var VAL_DT = document.MAINFORM.VAL_DT.value;
        var bRtnFlag = true;

        if (TEMP_CHK_FLG === "Yes") {
            alert("The Commodity CCY:" + COMT_CCY + " to Price CCY:" + PRICE_CCY + " & Value Date:" + VAL_DT + " Fixing Rate - existing!");
            bRtnFlag = false;
        }

        return bRtnFlag;
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*SYF_TRCO_Chk_DuplicateRecordForConfirm", e);
    }
}

csFuncLevelProto.SYF_TRCO_Get_DuplicateRecordByValueDateFail = function() {
    try {
        document.MAINFORM.TEMP_CHK_FLG.value = "No";
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*SYF_TRCO_Get_DuplicateRecordByValueDateFail", e);
    }
}

csFuncLevelProto.SYF_TRCO_Get_DuplicateRecordByValueDateSuccess = function() {
    try {
        var COMT_CCY = document.MAINFORM.COMT_CCY.value;
        var PRICE_CCY = document.MAINFORM.PRICE_CCY.value;
        var VAL_DT = document.MAINFORM.VAL_DT.value;
        alert("The Commodity CCY:" + COMT_CCY + " to Price CCY:" + PRICE_CCY + " & Value Date:" + VAL_DT + " Fixing Rate - existing!");
        document.MAINFORM.FIX_RT.value = 0;
        document.MAINFORM.TEMP_CHK_FLG.value = "Yes";
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*SYF_TRCO_Get_DuplicateRecordByValueDateSuccess", e);
    }
}

csFuncLevelProto.FLD_TRCO_COMT_CCY_onchange = function(event) {
    try {
        SYF_TRCO_Chk_DuplicateRecordByValueDate();
        SYF_TRCO_Cal_FIX_RT();
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*FLD_TRCO_COMT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCO_FIX_RT_onchange = function(event) {
    try {
        SYF_TRCO_Cal_FIX_RT();
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*FLD_TRCO_FIX_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCO_PRICE_CCY_onchange = function(event) {
    try {
        SYF_TRCO_Chk_DuplicateRecordByValueDate();
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*FLD_TRCO_PRICE_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCO_VAL_DT_onchange = function(event) {
    try {
        SYF_TRCO_Chk_DuplicateRecordByValueDate();
    } catch (e) {
        DisExcpt("SYF_TRCO_AddNDFFixingRate.js*FLD_TRCO_VAL_DT_onchange", e);
    }
}