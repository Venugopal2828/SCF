var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {} catch (e) {
        DisExcpt("SYF_FADA_ViewAgreement.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {} catch (e) {
        DisExcpt("SYF_FADA_ViewAgreement.js*LoadDODataOnInit", e);
    }
}

/*csFuncLevelProto.SYF_FADA_LoadDoComplete = function() {
    try {
        SYS_GetDataForDO_S("GetCounterparty", "N", false, '', "DFAgreement");
    } catch (e) {
        DisExcpt("SYF_FADA_ViewAgreement.js*SYF_FADA_LoadDoComplete", e);
    }
}*/