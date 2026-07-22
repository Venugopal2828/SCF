var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('IMCO', 'SYM_IMCO_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_IMCO_SEND_MAIL.js", e);
    }
}