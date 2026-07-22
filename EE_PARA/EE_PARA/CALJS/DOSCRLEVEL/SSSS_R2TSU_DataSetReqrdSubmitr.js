"path:SCRN/DO/R2TSU_DataSetReqrdSubmitr.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DataSetReqrdSubmitr.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DataSetReqrdSubmitr.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DataSetReqrdSubmitr.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        //var sFieldList = "C_MAIN_REF;NARR_NM";
        //var sMappingList = "TSU_DS_SUBMIT_ID;TSU_DS_SUBMIT_NM";
        var sSucJsFuncName = "";
        var sFailJsFuncName = "";
        var notshowError = true;

        SYS_GetTableDataByRule('SSSS_R2TSU_DataSetReqrdSubmitr_OnSelected_0', '1', sSucJsFuncName, '', notshowError);
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DataSetReqrdSubmitr.js", e);
    }
}

csDOScreenProto.TSU_DS_SUBMIT_ID = function() {
    try {
        SYS_GetCUBK('TSU_DS_SUBMIT_ID', 'TSU_DS_SUBMIT_ID');
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DataSetReqrdSubmitr.js", e);
    }
}

csDOScreenProto.TSU_DS_SUBMIT_ID_onchange = function(event) {
    try {
        TSU_DS_SUBMIT_ID();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_DataSetReqrdSubmitr.js", e);
    }
}