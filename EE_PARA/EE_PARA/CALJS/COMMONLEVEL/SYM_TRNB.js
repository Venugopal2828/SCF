function SYM_TRNB_Cal_ContactSynchronization() {
    try {
        var NS_BK_ID = document.MAINFORM.NS_BK_ID.value;
        var NS_BK_SWADD = document.MAINFORM.NS_BK_SWADD.value;
        var sTargetDoNm = "Nostro_Bank_Account";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + "not exist!");
            return;
        }
        var aNsContRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nNsContRecCount = oDoAllRecs.length;
        if (nNsContRecCount > 0) {
            var j;
            for (j = 0; j < nNsContRecCount; j++) {
                var oNsContDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oNsContDoRec, "NS_BK_ID", NS_BK_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "NS_BK_SWADD", NS_BK_SWADD);
                aNsContRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aNsContRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRNB.js*SYM_TRNB_Cal_ContactSynchronization", e);
    }
}

function SYM_TRNB_Cal_NS_BK_HO_SWADD_ToUpperCase() {
    try {
        var NS_BK_HO_SWADD = document.MAINFORM.NS_BK_HO_SWADD.value;
        document.MAINFORM.NS_BK_HO_SWADD.value = SYM_TRNB_setFldValToUpperCase(NS_BK_HO_SWADD);
    } catch (e) {
        DisExcpt("SYM_TRNB.js*SYM_TRNB_Cal_NS_BK_HO_SWADD_ToUpperCase", e);
    }
}

function SYM_TRNB_Cal_NS_BK_ID_ToUpperCase() {
    try {
        var NS_BK_ID = document.MAINFORM.NS_BK_ID.value;
        document.MAINFORM.NS_BK_ID.value = SYM_TRNB_setFldValToUpperCase(NS_BK_ID);
    } catch (e) {
        DisExcpt("SYM_TRNB.js*SYM_TRNB_Cal_NS_BK_ID_ToUpperCase", e);
    }
}

function SYM_TRNB_Cal_NS_BK_SWADD_ToUpperCase() {
    try {
        var NS_BK_SWADD = document.MAINFORM.NS_BK_SWADD.value;
        document.MAINFORM.NS_BK_SWADD.value = SYM_TRNB_setFldValToUpperCase(NS_BK_SWADD);
    } catch (e) {
        DisExcpt("SYM_TRNB.js*SYM_TRNB_Cal_NS_BK_SWADD_ToUpperCase", e);
    }
}

function SYM_TRNB_Cal_NostroAcNoSynchronization() {
    try {
        var NS_BK_ID = document.MAINFORM.NS_BK_ID.value;
        var NS_BK_SWADD = document.MAINFORM.NS_BK_SWADD.value;
        var sTargetDoNm = "Nostro_Account_No";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + "not exist!");
            return;
        }
        var aNsAcNoRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nNsAcNoRecCount = oDoAllRecs.length;
        if (nNsAcNoRecCount > 0) {
            var j;
            for (j = 0; j < nNsAcNoRecCount; j++) {
                var oNsAcNoDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oNsAcNoDoRec, "NS_BK_ID", NS_BK_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "NS_BK_SWADD", NS_BK_SWADD);
                aNsAcNoRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aNsAcNoRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRNB.js*SYM_TRNB_Cal_NostroAcNoSynchronization", e);
    }
}

function SYM_TRNB_setFldValToUpperCase(sFldVal) {
    try {
        var rtnVal = sFldVal;

        if (sFldVal !== "" && sFldVal !== null) {
            if (typeof(sFldVal) === "string") {
                rtnVal = sFldVal.toUpperCase();
            } else {
                alert("[SYT_setFldValToUpperCase] method: The value type is not string, Please System OP to check it frist!");
            }
        }

        return rtnVal;
    } catch (e) {
        DisExcpt("SYM_TRNB.js*SYM_TRNB_setFldValToUpperCase", e);
    }
}