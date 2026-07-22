var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.CURRENT_STATUS.value = "Confirm";
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBrokerData.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYS_GetRefNo('TRCO_REF', 'SYF_TRCO_Cal_SetRefNo');
        document.MAINFORM.COMM_DATA_TP.value = "Broker";
        document.MAINFORM.TRX_DT.value = SYS_DATE;
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBrokerData.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_TRCO_Cal_BROKER_ID_ToUpperCase = function() {
    try {
        var BROKER_ID = document.MAINFORM.BROKER_ID.value;
        document.MAINFORM.BROKER_ID.value = SYT_setFldValToUpperCase(BROKER_ID);
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBrokerData.js*SYF_TRCO_Cal_BROKER_ID_ToUpperCase", e);
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
        DisExcpt("SYF_TRCO_AddBrokerData.js*SYF_TRCO_Cal_SetRefNo", e);
    }
}

csFuncLevelProto.SYF_TRCO_Chk_DuplicateRecordByBrokerID = function() {
    try {
    
        SYS_GetTableDataByRule('Chk_DuplicateRecordByBrokerID', '1', 'SYF_TRCO_Chk_DuplicateRecordByBrokerIDSuccess', "", "Y");
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBrokerData.js*SYF_TRCO_Chk_DuplicateRecordByBrokerID", e);
    }
}

csFuncLevelProto.SYF_TRCO_Chk_DuplicateRecordByBrokerIDSuccess = function() {
    try {
        var BROKER_ID = document.MAINFORM.BROKER_ID.value;
        alert("The Broker ID:" + BROKER_ID + " already exists!");
        document.MAINFORM.BROKER_ID.value = "";
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBrokerData.js*SYF_TRCO_Chk_DuplicateRecordByBrokerIDSuccess", e);
    }
}

csFuncLevelProto.SYF_TRCO_Chk_DuplicateRecordByBrokerName = function() {
    try {
        SYS_GetTableDataByRule('Chk_DuplicateRecordByBrokerName', '1', 'SYF_TRCO_Chk_DuplicateRecordByBrokerNmSuccess', "", "Y");
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBrokerData.js*SYF_TRCO_Chk_DuplicateRecordByBrokerName", e);
    }
}

csFuncLevelProto.SYF_TRCO_Chk_DuplicateRecordByBrokerNmSuccess = function() {
    try {
        var BROKER_NM = document.MAINFORM.BROKER_NM.value;
        alert("The Broker Name:" + BROKER_NM + " already exists!");
        document.MAINFORM.BROKER_NM.value = "";
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBrokerData.js*SYF_TRCO_Chk_DuplicateRecordByBrokerNmSuccess", e);
    }
}

csFuncLevelProto.FLD_TRCO_BROKER_ID_onchange = function(event) {
    try {
        SYF_TRCO_Cal_BROKER_ID_ToUpperCase();
        SYF_TRCO_Chk_DuplicateRecordByBrokerID();
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBrokerData.js*FLD_TRCO_BROKER_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRCO_BROKER_NM_onchange = function(event) {
    try {
        SYF_TRCO_Chk_DuplicateRecordByBrokerName();
    } catch (e) {
        DisExcpt("SYF_TRCO_AddBrokerData.js*FLD_TRCO_BROKER_NM_onchange", e);
    }
}