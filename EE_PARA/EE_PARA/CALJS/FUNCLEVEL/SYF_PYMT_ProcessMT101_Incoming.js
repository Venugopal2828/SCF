var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_DisableDivClass('A_div');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT101_Incoming.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYS_GetDataForDO_S('Get_MT101_DATA');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT101_Incoming.js", e);
    }
}