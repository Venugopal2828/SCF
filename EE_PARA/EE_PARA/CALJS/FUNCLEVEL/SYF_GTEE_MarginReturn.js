var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_GTEE_Cal_MRGN_AC_AMT = function() {
    try {

        document.MAINFORM.MRGN_AC_AMT.value = SYT_AmtFormat(document.MAINFORM.MRGN_AC_CCY.value, document.MAINFORM.MRGN_AMT.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_MRGN_AC_CCY = function() {
    try {

        document.MAINFORM.MRGN_AC_CCY.value = document.MAINFORM.GTEE_CCY.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_MRGN_AMT = function() {
    try {

        document.MAINFORM.MRGN_AMT.value = SYT_AmtFormat(document.MAINFORM.MRGN_CCY.value, SYS_BeFloat(document.MAINFORM.GTEE_AMT.value) * SYS_BeFloat(document.MAINFORM.MRGN_PCT.value) / 100);
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_MRGN_BAL = function() {
    try {

        if (document.MAINFORM.MRGN_RETURN.value > document.MAINFORM.MRGN_AMT.value) {
            alert("Please input value less than Margin Amount");
            document.MAINFORM.MRGN_RETURN.value = 0;
        }

        document.MAINFORM.MRGN_BAL.value = SYT_AmtFormat(document.MAINFORM.MRGN_CCY.value, SYS_BeFloat(document.MAINFORM.MRGN_AMT.value) - SYS_BeFloat(document.MAINFORM.MRGN_RETURN.value));
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_MRGN_CCY = function() {
    try {

        document.MAINFORM.MRGN_CCY.value = document.MAINFORM.GTEE_CCY.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Chk_MRGN_PCT = function() {
    try {

        var nMRGN_PCT = SYS_BeFloat(document.MAINFORM.MRGN_PCT.value);
        if (nMRGN_PCT > 100 || nMRGN_PCT < 0) {
            document.MAINFORM.MRGN_PCT.value = 0;
            alert("Please input value between 0~100!");
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.MRGN_RETURN.value = document.MAINFORM.MRGN_AMT.value;
        SYF_GTEE_Cal_MRGN_BAL();
        SYF_GTEE_Cal_MRGN_CCY();
        SYF_GTEE_Cal_MRGN_AC_CCY();
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_GTEE_AMT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_GTEE_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_MRGN_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_MRGN_PCT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_MRGN_RETURN_onchange = function(event) {
    try {
        SYF_GTEE_Cal_MRGN_BAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_MarginReturn.js", e);
    }
}