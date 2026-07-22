"path:SCRN/DO/AccSpecInfoSSI.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_AccSpecInfoSSI.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (document.MAINFORM.ALL_CCY_CHK.checked == true) {
            document.MAINFORM.ALL_CCY.value = "on";
        } else {
            document.MAINFORM.ALL_CCY.value = "off";
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_AccSpecInfoSSI.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_AccSpecInfoSSI.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.ACCT_NO.value = document.parentWindow.parent.MAINFORM.ACCT_NO.value;

        if (document.MAINFORM.ALL_CCY.value == "on") {
            document.MAINFORM.ALL_CCY_CHK.checked = true;
            SYT_ChangeFldClass(document.MAINFORM.SSI_CCY, "P");
        } else {
            document.MAINFORM.ALL_CCY_CHK.checked = false;
            SYT_ChangeFldClass(document.MAINFORM.SSI_CCY, "O");
        }

    } catch (e) {
        DisExcpt("SSSS_AccSpecInfoSSI.js", e);
    }
}

csDOScreenProto.BOP_CAT_BTN_onclick = function(event) {
    try {
        //var sSQLWhere = "C_MAIN_REF = '" + SYS_BANK_COUNTRY + "002IT'";
        //var sfieldList = "FIELD_1_X";
        SYS_GetTableDataByRule_S('SSSS_AccSpecInfoSSI_BOP_CAT_BTN_onclick_0', '1', true);

        //alert(parent.parent.document.MAINFORM.document.MAINFORM.CUST_TYPE.value);
        //parent.document.MAINFORM.BOP_NRES_NRES_I.value: I E or X
        //This is customer type
        //var customerType = '';

        /* var sSQLWhere = "CR_VALUE='IT' AND PURCHASE_SALE_IND = '" + document.MAINFORM.BOP_IND.value + "' AND PURPOSE_CODE <> 'TR' ";
    SYS_InqCUBK_Sql('BOP_CATEGORY', sSQLWhere);*/
        //NOT FIND THE RULE

        //Change non res indicator to mandatory if user has selected a cross border reporting category
        if (document.MAINFORM.BOP_CAT.value.length > 0) {
            SYT_ChangeFldClass(document.MAINFORM.NON_RES_PARTY_IND, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NON_RES_PARTY_IND, "O");
        }
    } catch (e) {
        DisExcpt("SSSS_AccSpecInfoSSI.js", e);
    }
}

csDOScreenProto.BOP_CAT_C_onchange = function(event) {
    try {
        document.MAINFORM.BOP_CAT.value = document.MAINFORM.BOP_CAT_C.value;
    } catch (e) {
        DisExcpt("SSSS_AccSpecInfoSSI.js", e);
    }
}