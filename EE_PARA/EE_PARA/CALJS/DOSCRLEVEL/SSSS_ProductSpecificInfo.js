"path:SCRN/DO/ProductSpecificInfo.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

var prod = '';

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.CheckMandatories = function() {
    try {
        if (document.MAINFORM.ELEC_DLV_METHOD1.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL1, "M");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO1, "O");
        } else if (document.MAINFORM.ELEC_DLV_METHOD1.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL1, "O");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO1, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL1, "O");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO1, "O");
        }

        //2
        if (document.MAINFORM.ELEC_DLV_METHOD2.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL2, "M");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO2, "O");
        } else if (document.MAINFORM.ELEC_DLV_METHOD2.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL2, "O");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO2, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL2, "O");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO2, "O");
        }

        //3
        if (document.MAINFORM.ELEC_DLV_METHOD3.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL3, "M");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO3, "O");
        } else if (document.MAINFORM.ELEC_DLV_METHOD3.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL3, "O");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO3, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL3, "O");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO3, "O");
        }

        //4
        if (document.MAINFORM.ELEC_DLV_METHOD4.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL4, "M");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO4, "O");
        } else if (document.MAINFORM.ELEC_DLV_METHOD4.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL4, "O");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO4, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL4, "O");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO4, "O");
        }

        //5
        if (document.MAINFORM.ELEC_DLV_METHOD5.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL5, "M");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO5, "O");
        } else if (document.MAINFORM.ELEC_DLV_METHOD5.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL5, "O");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO5, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EMAIL5, "O");
            SYT_ChangeFldClass(document.MAINFORM.FAX_NO5, "O");
        }
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.Chk_PROD = function() {
    try {
        var arr; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var nrec; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var xpath; // Utility Auto Fix Comments
        xpath = "ProductSpecificInfo";
        arr = SYS_getDoByXpath(xpath);
        nrec = SYS_getRecords(arr);
        len = nrec.length;
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
            record = nrec[i];
            sItem = SYS_getValFromRec(record, 'PROD');
            if (sItem == document.MAINFORM.PROD.value && document.MAINFORM.PROD.value != prod) {
                alert("Product cannot be repeated");
                document.MAINFORM.PROD.value = "";
                return;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        //For Advices
        //document.MAINFORM.ADVICE_FIELD1.value = document.MAINFORM.C_MAIN_REF.value + document.MAINFORM.C_UNIT_CODE.value;
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.LoadDODataOnInit = function(name) {
    try {
        var state; // Utility Auto Fix Comments
        var x; // Utility Auto Fix Comments
        x = parent.currentDo.getCurrentRecord();
        state = SYS_getRecState(x);

        alert('State: ' + state);
        if (state == 'E' || state == 'N' || state == 'A') {
            SYT_ChangeFldClass(document.MAINFORM.PROD, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PROD, "M");
        }

        if (state != 'E') {
            SYS_GetDataForDO_S('CorrDetails', 'N', false);
        }
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var state; // Utility Auto Fix Comments
        var x; // Utility Auto Fix Comments
        prod = document.MAINFORM.PROD.value;
        Chk_PROD();
        document.MAINFORM.C_CUSTOMER_ID.value = SYS_getValueFromMain('C_MAIN_REF');
        document.MAINFORM.CNTY_CODE.value = SYS_BANK_COUNTRY;

        x = parent.currentDo.getCurrentRecord();
        state = SYS_getRecState(x);

        if (state == 'E' || state == 'N' || state == 'A') {
            SYT_ChangeFldClass(document.MAINFORM.PROD, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PROD, "M");
        }

        CheckMandatories();

        //if(state!='E')
        //{
        //	SYS_GetDataForDO_S('CorrDetails','N',false);
        //}

    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.ELEC_DLV_METHOD1_onchange = function(event) {
    try {
        CheckMandatories();
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.ELEC_DLV_METHOD2_onchange = function(event) {
    try {
        CheckMandatories(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.ELEC_DLV_METHOD3_onchange = function(event) {
    try {
        CheckMandatories(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.ELEC_DLV_METHOD4_onchange = function(event) {
    try {
        CheckMandatories(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.ELEC_DLV_METHOD5_onchange = function(event) {
    try {
        CheckMandatories(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.INDEMNITY_TYPE_onchange = function(event) {
    try {
        if (document.MAINFORM.INDEMNITY_TYPE.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.INDEMNITY_RV_DT, "O");
            SYT_ChangeFldClass(document.MAINFORM.INDEMNITY_XP_DT, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INDEMNITY_RV_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.INDEMNITY_XP_DT, "M");
        }
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}

csDOScreenProto.PROD_onchange = function(event) {
    try {
        Chk_PROD();

        if (document.MAINFORM.PROD.value == 'IT' || document.MAINFORM.PROD.value == 'OT') {
            SYT_ChangeFldClass(document.MAINFORM.HIGH_CARE_CUST, "O");
        } else {
            document.MAINFORM.HIGH_CARE_CUST.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.HIGH_CARE_CUST, "P");
        }
    } catch (e) {
        DisExcpt("SSSS_ProductSpecificInfo.js", e);
    }
}