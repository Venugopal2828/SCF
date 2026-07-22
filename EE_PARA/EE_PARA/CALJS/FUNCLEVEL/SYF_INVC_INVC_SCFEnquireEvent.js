var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {} catch (e) {
        DisExcpt("SYF_INVC_INVC_SCFEnquireEvent.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        if (document.MAINFORM.FA_DOC_STATUS.value != 'Reject') {
            SYS_GetDataForDO_S("GET_CRN", "E", false, '', "InvTRF");
        }


        SYS_disableButton('InvTRF', 'addbutton');
        SYS_disableButton('InvTRF', 'editbutton');
        SYS_disableButton('InvTRF', 'deletebutton');
    } catch (e) {
        DisExcpt("SYF_INVC_INVC_SCFEnquireEvent.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYS_GetTableDataByRule_S('Get_INVC_LOAN', '1', 'Y');
        SYS_GetTableDataByRule_S('GET_INVC_PMT', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_INVC_INVC_SCFEnquireEvent.js*PostconditionOnInit", e);
    }
}