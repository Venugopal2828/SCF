function SYM_TRCP_Cal_AccountSynchronization() {
    try {
        var CNPT_AC_CD = document.MAINFORM.CNPT_AC_CD.value;
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        var CUST_ID = document.MAINFORM.CUST_ID.value;
        var sTargetDoNm = "CustomerAccountNo";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        var aCnptContRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nCnptContRecCount = oDoAllRecs.length;
        if (nCnptContRecCount > 0) {
            var j;
            for (j = 0; j < nCnptContRecCount; j++) {
                var oCnptContDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oCnptContDoRec, "CNPT_ID", CNPT_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SHORT_NM", CNPT_SHORT_NM);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CUST_ID", CUST_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_AC_CD", CNPT_AC_CD);
                aCnptContRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aCnptContRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Cal_AccountSynchronization", e);
    }
}

function SYM_TRCP_Cal_BrokerChgWaySynchronization() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        var CNPT_SWADD = document.MAINFORM.CNPT_SWADD.value;
        var sTargetDoNm = "BrokerChargeWay";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + "not exist!");
            return;
        }
        var aCnptBrkChgRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nCnptBrkChgRecCount = oDoAllRecs.length;
        if (nCnptBrkChgRecCount > 0) {
            var j;
            for (j = 0; j < nCnptBrkChgRecCount; j++) {
                var oCnptBrkChgDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oCnptBrkChgDoRec, "CNPT_ID", CNPT_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SHORT_NM", CNPT_SHORT_NM);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SWADD", CNPT_SWADD);
                aCnptBrkChgRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aCnptBrkChgRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Cal_BrokerChgWaySynchronization", e);
    }
}

function SYM_TRCP_Cal_CNPT_GP_SHORT_NM_ToUpperCase() {
    try {
        var CNPT_GP_SHORT_NM = document.MAINFORM.CNPT_GP_SHORT_NM.value;
        document.MAINFORM.CNPT_GP_SHORT_NM.value = SYT_setFldValToUpperCase(CNPT_GP_SHORT_NM);
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Cal_CNPT_GP_SHORT_NM_ToUpperCase", e);
    }
}

function SYM_TRCP_Cal_CNPT_ID_ToUpperCase() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        document.MAINFORM.CNPT_ID.value = SYT_setFldValToUpperCase(CNPT_ID);
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Cal_CNPT_ID_ToUpperCase", e);
    }
}

function SYM_TRCP_Cal_CNPT_SHORT_NM_ToUpperCase() {
    try {
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        document.MAINFORM.CNPT_SHORT_NM.value = SYT_setFldValToUpperCase(CNPT_SHORT_NM);
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Cal_CNPT_SHORT_NM_ToUpperCase", e);
    }
}

function SYM_TRCP_Cal_CNPT_SWADD_ToUpperCase() {
    try {
        var CNPT_SWADD = document.MAINFORM.CNPT_SWADD.value;
        document.MAINFORM.CNPT_SWADD.value = SYT_setFldValToUpperCase(CNPT_SWADD);
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Cal_CNPT_SWADD_ToUpperCase", e);
    }
}

function SYM_TRCP_Cal_ContactSynchronization() {
    try {
        var CNPT_AC_CD = document.MAINFORM.CNPT_AC_CD.value;
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        var CNPT_SWADD = document.MAINFORM.CNPT_SWADD.value;
        var CUST_ID = document.MAINFORM.CUST_ID.value;
        var sTargetDoNm = "CounterpartyContact";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + "not exist!");
            return;
        }
        var aCnptContRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nCnptContRecCount = oDoAllRecs.length;
        if (nCnptContRecCount > 0) {
            var j;
            for (j = 0; j < nCnptContRecCount; j++) {
                var oCnptContDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oCnptContDoRec, "CNPT_ID", CNPT_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SHORT_NM", CNPT_SHORT_NM);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SWADD", CNPT_SWADD);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CUST_ID", CUST_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_AC_CD", CNPT_AC_CD);
                aCnptContRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aCnptContRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Cal_ContactSynchronization", e);
    }
}

function SYM_TRCP_Cal_CreditLimitSynchronization() {
    try {
        var CNPT_AC_CD = document.MAINFORM.CNPT_AC_CD.value;
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        var CNPT_SWADD = document.MAINFORM.CNPT_SWADD.value;
        var CUST_ID = document.MAINFORM.CUST_ID.value;
        var sTargetDoNm = "CnptCustCreditLimit";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        var aCnptCrLtRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nCnptCrLtRecCount = oDoAllRecs.length;
        if (nCnptCrLtRecCount > 0) {
            var j;
            for (j = 0; j < nCnptCrLtRecCount; j++) {
                var oCnptCrLtDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oCnptCrLtDoRec, "CNPT_ID", CNPT_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SHORT_NM", CNPT_SHORT_NM);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SWADD", CNPT_SWADD);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CUST_ID", CUST_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_AC_CD", CNPT_AC_CD);
                aCnptCrLtRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aCnptCrLtRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Cal_CreditLimitSynchronization", e);
    }
}

function SYM_TRCP_Cal_FldValByKeyFld(sKeyFldNm, sSetFldNm) {
    try {
        var oKeyFld = document.getElementById(sKeyFldNm);
        var oSetFld = document.getElementById(sSetFldNm);
        var sKeyFldVal = oKeyFld.value;
        if (sKeyFldNm === "KYC_FLG") {
            if (sKeyFldVal === "" || sKeyFldVal === null) {
                document.getElementById(sSetFldNm).value = "";
            }
        } else {
            if (sKeyFldVal === "No") {
                if (sKeyFldNm === "PROFESL_FLG") {
                    document.getElementById(sSetFldNm).value = "0";
                } else {
                    document.getElementById(sSetFldNm).value = "";
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Cal_FldValByKeyFld", e);
    }
}

function SYM_TRCP_Cal_NonNettingSynchronization() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        var CNPT_SWADD = document.MAINFORM.CNPT_SWADD.value;
        var sTargetDoNm = "CounterpartyNonNettingCCY";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + "not exist!");
            return;
        }
        var aCnptNonNetRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nCnptNonNetRecCount = oDoAllRecs.length;
        if (nCnptNonNetRecCount > 0) {
            var j;
            for (j = 0; j < nCnptNonNetRecCount; j++) {
                var oCnptNonNetDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oCnptNonNetDoRec, "CNPT_ID", CNPT_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SHORT_NM", CNPT_SHORT_NM);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SWADD", CNPT_SWADD);
                aCnptNonNetRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aCnptNonNetRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Cal_NonNettingSynchronization", e);
    }
}

function SYM_TRCP_Cal_SSISynchronization() {
    try {
        var CNPT_AC_CD = document.MAINFORM.CNPT_AC_CD.value;
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        var CNPT_SWADD = document.MAINFORM.CNPT_SWADD.value;
        var sTargetDoNm = "CounterpartySSI";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + "not exist!");
            return;
        }
        var aCnptSSIRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nCnptSSIRecCount = oDoAllRecs.length;
        if (nCnptSSIRecCount > 0) {
            var j;
            for (j = 0; j < nCnptSSIRecCount; j++) {
                var oCnptSSIDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oCnptSSIDoRec, "CNPT_ID", CNPT_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SHORT_NM", CNPT_SHORT_NM);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SWADD", CNPT_SWADD);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_AC_CD", CNPT_AC_CD);
                aCnptSSIRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aCnptSSIRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Cal_SSISynchronization", e);
    }
}

function SYM_TRCP_Cal_StatmentSynchronization() {
    try {
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        var CUST_ID = document.MAINFORM.CUST_ID.value;
        var sTargetDoNm = "CounterpartyStatment";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        if (oTargetDO === null) {
            alert("The " + sTargetDoNm + "not exist!");
            return;
        }
        var aCnptContRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nCnptContRecCount = oDoAllRecs.length;
        if (nCnptContRecCount > 0) {
            var j;
            for (j = 0; j < nCnptContRecCount; j++) {
                var oCnptContDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oCnptContDoRec, "CNPT_ID", CNPT_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SHORT_NM", CNPT_SHORT_NM);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CUST_ID", CUST_ID);
                aCnptContRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aCnptContRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Cal_StatmentSynchronization", e);
    }
}

function SYM_TRCP_Cal_VostroAcNoSynchronization() {
    try {
        var CNPT_AC_CD = document.MAINFORM.CNPT_AC_CD.value;
        var CNPT_ID = document.MAINFORM.CNPT_ID.value;
        var CNPT_SHORT_NM = document.MAINFORM.CNPT_SHORT_NM.value;
        var CNPT_SWADD = document.MAINFORM.CNPT_SWADD.value;
        var CUST_ID = document.MAINFORM.CUST_ID.value;
        var sTargetDoNm = "VostroAccountNo";
        var oTargetDO = SYS_getDoByXpath(sTargetDoNm);
        var aCnptVostroRecSet = [];
        var oDoAllRecs = SYS_getRecords(oTargetDO);
        var nCnptVostroRecCount = oDoAllRecs.length;
        if (nCnptVostroRecCount > 0) {
            var j;
            for (j = 0; j < nCnptVostroRecCount; j++) {
                var oCnptVostroDoRec = oDoAllRecs[j];
                var oUpdateDoRec = SYS_setValToRec(oCnptVostroDoRec, "CNPT_ID", CNPT_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SHORT_NM", CNPT_SHORT_NM);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_SWADD", CNPT_SWADD);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CUST_ID", CUST_ID);
                oUpdateDoRec = SYS_setValToRec(oUpdateDoRec, "CNPT_AC_CD", CNPT_AC_CD);
                aCnptVostroRecSet[j] = oUpdateDoRec;
            }
            SYS_reLoadGrid(oTargetDO, aCnptVostroRecSet);
        }
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Cal_VostroAcNoSynchronization", e);
    }
}

function SYM_TRCP_Gen_SelectFldOtpOfCnptClassName() {
    try {
        document.MAINFORM.ITEM_FLD_NM.value = "CnptClassName";
        SYT_genSelectFldOtpFmDropBoxValueOnly("CNPT_CLASS_SH_NM");
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Gen_SelectFldOtpOfCnptClassName", e);
    }
}

function SYM_TRCP_Gen_SelectFldOtpOfCnptType() {
    try {
        document.MAINFORM.ITEM_FLD_NM.value = "CnptType";
        SYT_genSelectFldOptionFmCommonModule("CNPT_TP");
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Gen_SelectFldOtpOfCnptType", e);
    }
}

function SYM_TRCP_Gen_SelectFldOtpOfCropBrGp() {
    try {
        document.MAINFORM.ITEM_FLD_NM.value = "CropBrGp";
        //SYT_genSelectFldOptionFmCommonModule("CROP_BR_GP");
        SYS_GetDataBySSS_S("SSSS_CommGetItemFldDataByKeyFldNm_TRX", "ITEM_FLD_NM");
        var aFdValList = SYS_GetMultiFldValueFromArray("FLD_VAL");
        var aItemLabList = SYS_GetMultiFldValueFromArray("ITEM_LABEL");
        var nSize = 0;
        var oSelectList = document.getElementById("CROP_BR_GP");
        nSize = aFdValList.length;
        oSelectList.options.length = 0;
        var i = 0;
        var bSetSpace = false;
        for (i = 0; i < nSize; i++) {
            var oItem = null;
            if (!bSetSpace && i === 0) {
                oItem = new Option("", "");
                i = -1;
                bSetSpace = true;
            } else {
                oItem = new Option(aItemLabList[i], aFdValList[i]);
            }
            oSelectList.options.add(oItem);
        }
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Gen_SelectFldOtpOfCropBrGp", e);
    }
}

function SYM_TRCP_Get_CNPT_CLASS_FL_NM() {
    try {
        SYS_MULTI_DATA = "";
        var nSize = 0;
        var CNPT_CLASS_SH_NM = document.MAINFORM.CNPT_CLASS_SH_NM.value;
        var sWhereSql = "FLD_NM = 'CnptClassName' AND FLD_VAL = '" + CNPT_CLASS_SH_NM + "'";
        var aCnptClassShNm = null;
        SYS_GetTableMultiDataToArray_S("COMM_FLD_OPTN_DO", sWhereSql, "ITEM_LABEL", true);
        if (SYS_MULTI_DATA === "" || SYS_MULTI_DATA === null) {
            document.MAINFORM.CNPT_CLASS_FL_NM.value = "";
            return;
        }
        aCnptClassShNm = SYS_MULTI_DATA[0][1].toString().split(",");
        document.MAINFORM.CNPT_CLASS_FL_NM.value = aCnptClassShNm[0];
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Get_CNPT_CLASS_FL_NM", e);
    }
}

function SYM_TRCP_Set_FldClassByKeyFld(sKeyFldNm, sSetFldNm) {
    try {
        var oKeyFld = document.getElementById(sKeyFldNm);
        var oSetFld = document.getElementById(sSetFldNm);
        var sKeyFldVal = oKeyFld.value;
        if (sKeyFldNm === "KYC_FLG") {
            if (sKeyFldVal !== "" && sKeyFldVal !== null) {
                SYT_ChangeFldClass(oSetFld, "M");
            } else {
                SYT_ChangeFldClass(oSetFld, "O");
            }
        } else {
            if (sKeyFldVal === "Yes") {
                SYT_ChangeFldClass(oSetFld, "M");
            } else {
                SYT_ChangeFldClass(oSetFld, "O");
            }
        }
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_Set_FldClassByKeyFld", e);
    }
}

function SYM_TRCP_genSelectFieldOptionFromBranchCodeData(sFldNm) {
    try {
        SYS_GetDataBySSS_S("SSSS_CommGetBranchDataByAll_TRX", "C_MAIN_REF");
        var aBrIdValList = SYS_GetMultiFldValueFromArray("BR_ID");
        var nLen = aBrIdValList.length;
        if (nLen > 0) {
            var aBranchCdVal = SYT_create2DArray(2, nLen);
            var i;
            for (i = 0; i < nLen; i++) {
                aBranchCdVal[0][i] = aBrIdValList[i];
                aBranchCdVal[1][i] = aBrIdValList[i];
            }
            SYT_genSelectFldOptionFmFreeArray(aBranchCdVal, sFldNm);
        }
    } catch (e) {
        DisExcpt("SYM_TRCP.js*SYM_TRCP_genSelectFieldOptionFromBranchCodeData", e);
    }
}