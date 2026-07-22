var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'MM') {
            SYS_GetDataForDO_S('getdata_tsu015A');
            parent.getDOdataFromSes('N');
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InquireDeltaReport.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InquireDeltaReport.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2InquireDeltaReport.js", e);
    }
}