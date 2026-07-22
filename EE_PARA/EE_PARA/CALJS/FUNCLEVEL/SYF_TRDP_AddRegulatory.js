var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TRDP_AGR_SIGNED = function() {
    try {

        var sign = document.MAINFORM.AGR_SIGNED.value;
        if (sign == "Y") {
            var strErrMsg = "Please input Agreement Value Date and Agreement Due Date.";
            if (document.MAINFORM.AGR_DUE_DT.value == "") {
                SYS_CheckError(document.MAINFORM.AGR_DUE_DT, strErrMsg);
                return false;
            }
            if (document.MAINFORM.AGR_VAL_DT.value == "") {
                SYS_CheckError(document.MAINFORM.AGR_VAL_DT, strErrMsg);
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}

csFuncLevelProto.SYF_TRDP_AGR_VAL_DT = function() {
    try {

        var subdays = SYS_GetSubDays(document.MAINFORM.AGR_VAL_DT.name, document.MAINFORM.AGR_DUE_DT.name);
        if (subdays < 0) {
            SYS_CheckError(document.MAINFORM.AGR_VAL_DT, "Agreement Due Date should be greater than Agreement Value Date. Please check.!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_TRDP_HB_FLAG()) {
            return false;
        }
        if (!SYF_TRDP_AGR_SIGNED()) {
            return false;
        }
        if (!SYF_TRDP_AGR_VAL_DT()) {
            return false;
        }


        return true;
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}

csFuncLevelProto.SYF_TRDP_CHECK_NAME = function() {
    try {

        //var sSQLWhere = "NAME='" + document.MAINFORM.NAME.value + "'";

        ////var sFieldList = "NAME";

        SYS_GetTableDataByRule('SYF_TRDP_AddRegulatory_SYF_TRDP_CHECK_NAME_0', '1', 'SYF_TRDP_Check_CN', '', 'Y');
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}

csFuncLevelProto.SYF_TRDP_Check_CN = function() {
    try {

        if (document.MAINFORM.NAME.value != null && document.MAINFORM.NAME.value != "") {
            SYS_CheckError(document.MAINFORM.NAME, "A regulatory with the same Name has already been registered!");
            document.MAINFORM.NAME.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        submitItemTranf("COPR_AREA");
        submitItemTranf("GOODS_TP");
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        document.MAINFORM.HB_FLAG.onchange = SYF_TRDP_HB_FLAG_onchange;
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        initItemTo("COPR_AREA");
        initItemTo("GOODS_TP");
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}

csFuncLevelProto.SYF_TRDP_C_MAIN_REF = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = "INSP" + ref;
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TRDP_getrefno();
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}

csFuncLevelProto.SYF_TRDP_getrefno = function() {
    try {

        SYS_GetRefNo("REGU", "SYF_TRDP_C_MAIN_REF()");
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}

csFuncLevelProto.SYF_TRDP_HB_FLAG = function() {
    try {

        var grade = document.MAINFORM.HB_FLAG.value;
        if (grade == 2 && document.MAINFORM.HEAD_OFC_OD.value == "") {
            var strErrMsg = "Please define Head Office Code and Name";
            SYS_CheckError(document.MAINFORM.HEAD_OFC_OD, strErrMsg);
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}

csFuncLevelProto.FLD_TRDP_HB_FLAG_onchange = function(event) {
    try {
        var grade = document.MAINFORM.HB_FLAG.value;
        if (grade == 1) {
            document.MAINFORM.B_HEAD_OFC_OD.disabled = true;
            document.MAINFORM.HEAD_OFC_OD.value = "";
            document.MAINFORM.HEAD_OFC_NM.value = "";
        } else if (grade == 2) {
            document.MAINFORM.B_HEAD_OFC_OD.disabled = false;
        }
    } catch (e) {
        DisExcpt("SYF_TRDP_AddRegulatory.js", e);
    }
}