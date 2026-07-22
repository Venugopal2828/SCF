"path:SCRN/DO/AccSpecInfo.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_AccSpecInfo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (document.MAINFORM.STDBANK_IND_CHK.checked == true) {
            document.MAINFORM.STDBANK_IND.value = "on";
        } else {
            document.MAINFORM.STDBANK_IND.value = "off";
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_AccSpecInfo.js", e);
    }
}

csDOScreenProto.LoadDODataOnInit = function() {
    try {
        var state; // Utility Auto Fix Comments
        var x; // Utility Auto Fix Comments
        x = parent.currentDo.getCurrentRecord();
        state = SYS_getRecState(x);

        if (state != 'E') {
            SYS_GetDataForDO_S('AccSpecInfoSSI', 'N', false);
        }
    } catch (e) {
        DisExcpt("SSSS_AccSpecInfo.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var state; // Utility Auto Fix Comments
        var x; // Utility Auto Fix Comments
        x = parent.currentDo.getCurrentRecord();
        state = SYS_getRecState(x);

        if (state == 'E' || state == 'N' || state == 'A') {
            SYT_Disable_Fld(document.MAINFORM.ACC_LOOKUP_BTN);
        } else {
            SYT_EnableField(document.MAINFORM.ACC_LOOKUP_BTN);
        }

        if (document.MAINFORM.STDBANK_IND.value == "on") {
            document.MAINFORM.STDBANK_IND_CHK.checked = true;
        } else {
            document.MAINFORM.STDBANK_IND_CHK.checked = false;
        }

    } catch (e) {
        DisExcpt("SSSS_AccSpecInfo.js", e);
    }
}

csDOScreenProto.PostconditionOnUnload = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_AccSpecInfo.js", e);
    }
}

csDOScreenProto.ACC_LOOKUP_BTN_onclick = function(event) {
    try {
        /*sSQLWhere = " C_CUST_ID = '" + parent.document.MAINFORM.C_MAIN_REF.value + "' AND C_DBT_CRDT IN ('B','C')";
    SYS_InqCUBK_Sql('GetCustomerAccounts', sSQLWhere);*/
        //NOT FIND THE RULE
    } catch (e) {
        DisExcpt("SSSS_AccSpecInfo.js", e);
    }
}

csDOScreenProto.C_MAIN_REF_onchange = function(event) {
    try {
        asi = SYS_getDoByXpath('AccSpecInfo');
        records = SYS_getRecords(asi);

        for (i = 0; i < records.length; i++) { // Utility Auto Fix Comments
            sNo = SYS_getValFromRec(records[i], "ACCT_NO");
            if (document.MAINFORM.ACCT_NO.value == sNo) {
                alert('Account number has already been managed');
                document.MAINFORM.ACCT_NO.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_AccSpecInfo.js", e);
    }
}