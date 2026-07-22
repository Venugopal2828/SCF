function SYM_TRCO_Cal_VoucherDescSyncByNOAP() {
    try {
        var TRX_REF_NO = document.MAINFORM.TRX_REF_NO.value;
        var MDL_SHORT_NM = document.MAINFORM.MDL_SHORT_NM.value;
        var sVouDesc = "";
        var sTargetDoNm = "MISCLS_VOU_DO";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + " not exist!");
            return;
        }
        if (MDL_SHORT_NM === "NOAP") {
            sVouDesc = TRX_REF_NO + "|" + MDL_SHORT_NM;
        }
        var aMiscVouRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nMiscVouRecCount = oDoAllRecs.length;
        if (nMiscVouRecCount > 0) {
            var j;
            for (j = 0; j < nMiscVouRecCount; j++) {
                var oMiscVouDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oMiscVouDoRec, "VOU_DESC", sVouDesc);
                aMiscVouRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aMiscVouRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRCO.js*SYM_TRCO_Cal_VoucherDescSyncByNOAP", e);
    }
}

function SYM_TRCO_Cal_VoucherSynchronizationByBU() {
    try {
        var BUSI_UNIT = document.MAINFORM.BUSI_UNIT.value;
        var sTargetDoNm = "MISCLS_VOU_DO";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + " not exist!");
            return;
        }
        var aMiscVouRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nMiscVouRecCount = oDoAllRecs.length;
        if (nMiscVouRecCount > 0) {
            var j;
            for (j = 0; j < nMiscVouRecCount; j++) {
                var oMiscVouDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oMiscVouDoRec, "TRX_CD", BUSI_UNIT);
                aMiscVouRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aMiscVouRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRCO.js*SYM_TRCO_Cal_VoucherSynchronizationByBU", e);
    }
}

function SYM_TRCO_Cal_VoucherSynchronizationByEval() {
    try {
        var TRX_REF_NO = document.MAINFORM.TRX_REF_NO.value;
        var BUSI_UNIT = document.MAINFORM.BUSI_UNIT.value;
        var EVAL_FLG = document.MAINFORM.EVAL_FLG.value;
        var sTargetDoNm = "MISCLS_VOU_DO";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + " not exist!");
            return;
        }
        var aMiscVouRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nMiscVouRecCount = oDoAllRecs.length;
        if (nMiscVouRecCount > 0) {
            var j;
            for (j = 0; j < nMiscVouRecCount; j++) {
                var oMiscVouDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oMiscVouDoRec, "TRX_CD", BUSI_UNIT);
                if (EVAL_FLG === "No") {
                    TRX_REF_NO = "";
                }
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "EVAL_GP_NO", TRX_REF_NO);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "EVAL_FLG", EVAL_FLG);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "VAL_DT", SYS_BUSI_DATE);
                aMiscVouRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aMiscVouRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRCO.js*SYM_TRCO_Cal_VoucherSynchronizationByEval", e);
    }
}

function SYM_TRCO_RefreshOptions(mappingList) {
    try {
        var arrayValue; // Utility Auto Fix Comments
        var ary; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var newOption; // Utility Auto Fix Comments
        var objFld; // Utility Auto Fix Comments
        var optionAry; // Utility Auto Fix Comments
        optionAry = new Array();
        newOption = new Array();
        try {
            for (i = 0; i < SYS_MULTI_DATA.length; i++) { // Utility Auto Fix Comments
                arrayValue = SYS_MULTI_DATA[i][1];
                if (arrayValue == null || arrayValue == "undefined" || arrayValue == "") {
                    continue;
                }
                for (j = 0; j < arrayValue.length; j++) {
                    optionAry.push(arrayValue[j]);
                }
            }
            while (true) {
                ary = optionAry.pop();
                if (!ary) {
                    break;
                }
                if (optionAry.contains(ary)) {
                    optionAry.splice(optionAry.indexOf(ary), 1, ary);
                } else {
                    newOption.push(ary);
                }
            }
            objFld = EEHtml.getElementById(mappingList);
            if (objFld) {
                objFld.options[0] = new Option("", "");
                for (i = 0; i < newOption.length; i++) {
                    fldValue = newOption[i];
                    objFld.options.add(new Option(fldValue, fldValue));
                }
            }
        } catch (e1) {
            alert("[RefreshOptions Error]: " + e1.expression);
        }
    } catch (e) {
        DisExcpt("SYM_TRCO.js*SYM_TRCO_RefreshOptions", e);
    }
}