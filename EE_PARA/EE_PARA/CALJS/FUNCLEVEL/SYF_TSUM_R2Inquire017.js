var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'MM') {
            SYS_GetDataForDO_TSU_S('getdata_tsu017R2', null, null, null, null, {
                "TSU_MERGE_DONAMES": ["R2ForwdDataSetReport"]
            });

            parent.getDOdataFromSes('N');
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2Inquire017.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2Inquire017.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2Inquire017.js", e);
    }
}