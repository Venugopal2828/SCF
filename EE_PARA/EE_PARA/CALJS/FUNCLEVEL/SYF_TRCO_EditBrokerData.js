var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.SYF_TRCO_Chk_DuplicateRecordByBrokerName = function() {
    try {
        SYS_GetTableDataByRule('Chk_DuplicateRecordByBrokerName', '1', 'SYF_TRCO_Chk_DuplicateRecordByBrokerNmSuccess', "", "Y");
    } catch (e) {
        DisExcpt("SYF_TRCO_EditBrokerData.js*SYF_TRCO_Chk_DuplicateRecordByBrokerName", e);
    }
}

csFuncLevelProto.SYF_TRCO_Chk_DuplicateRecordByBrokerNmSuccess = function() {
    try {
        var BROKER_NM = document.MAINFORM.BROKER_NM.value;
        alert("The Broker Name:" + BROKER_NM + " is exist!");
        document.MAINFORM.BROKER_NM.value = "";
    } catch (e) {
        DisExcpt("SYF_TRCO_EditBrokerData.js*SYF_TRCO_Chk_DuplicateRecordByBrokerNmSuccess", e);
    }
}

csFuncLevelProto.FLD_TRCO_BROKER_NM_onchange = function(event) {
    try {
        SYF_TRCO_Chk_DuplicateRecordByBrokerName();
    } catch (e) {
        DisExcpt("SYF_TRCO_EditBrokerData.js*FLD_TRCO_BROKER_NM_onchange", e);
    }
}