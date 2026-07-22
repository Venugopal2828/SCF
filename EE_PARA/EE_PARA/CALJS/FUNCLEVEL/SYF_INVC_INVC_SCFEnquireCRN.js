var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        if (document.MAINFORM.FA_DOC_STATUS != 'Reject') {
            SYS_GetDataForDO_S("GET_LINKINVOICE", "E", false, '', "InvTRF");
        }

        SYS_disableButton('InvTRF', 'addbutton');
        SYS_disableButton('InvTRF', 'editbutton');
        SYS_disableButton('InvTRF', 'deletebutton');
    } catch (e) {
        DisExcpt("SYF_INVC_INVC_SCFEnquireCRN.js*LoadDODataOnInit", e);
    }
}