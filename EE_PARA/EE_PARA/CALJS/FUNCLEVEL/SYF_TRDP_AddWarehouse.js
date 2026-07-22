var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
    SYF_TRDP_AGR_SIGNED();
        return true;
    } catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.SYF_TRDP_setRef = function(ref) {
    try {

        var mainRef; // Utility Auto Fix Comments
        mainRef = ref;
        document.MAINFORM.C_MAIN_REF.value = mainRef;
        document.MAINFORM.PARTY_ID.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_TRDP_AddWarehouse.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('WARE', 'SYF_TRDP_setRef');
    } catch (e) {
        DisExcpt("SYF_TRDP_AddWarehouse.js", e);
    }
}

csFuncLevelProto.SYF_TRDP_Get_INSPEC_ID = function() {
    try {

        if (document.MAINFORM.INSPEC_ID.value != '') {
            SYS_GetCUBK('INSPEC_INS_ID', 'INSPEC_ID');
        }
    } catch (e) {
        DisExcpt("SYF_TRDP_AddWarehouse.js", e);
    }
}

csFuncLevelProto.SYF_TRDP_AGR_SIGNED = function() {
    try {
        var sign = document.MAINFORM.AGR_SIGNED.value;
        if (sign == "1") {
            var strErrMsg = "Please input Agreement Value Date, Agreement Due Date and Agreement Type.";
            if (document.MAINFORM.ARG_DUE_DT.value == "") {
                SYS_CheckError(document.MAINFORM.ARG_DUE_DT, strErrMsg);
                return false;
            }
            if (document.MAINFORM.ARG_VAL_DT.value == "") {
                SYS_CheckError(document.MAINFORM.ARG_DUE_DT, strErrMsg);
                return false;
            }
            if (document.MAINFORM.ARG_TYPE.value == "") {
                SYS_CheckError(document.MAINFORM.ARG_TYPE, strErrMsg);
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*SYF_TRDP_AGR_SIGNED", e);
    }
}

csFuncLevelProto.SYF_TRDP_GetDO = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S("GetPartyRegion_WareHouse", "N", false, '', "PartyRegion");
            SYS_GetDataForDO_S("GetCollateralVariety_WareHouse", "N", false, '', "CollateralVariety");
        }
    } catch (e) {
        DisExcpt("SYF_TRDP_AddWarehouse.js", e);
    }
}

csFuncLevelProto.SYF_TRDP_Set_Variety_PARTY_ID = function() {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("CollateralVariety");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'PARTY_ID', document.MAINFORM.C_MAIN_REF.value);
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_TRDP_AddWarehouse.js", e);
    }
}

csFuncLevelProto.SYF_TRDP_Set_Region_PARTY_ID = function() {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("PartyRegion");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'PARTY_ID', document.MAINFORM.C_MAIN_REF.value);
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_TRDP_AddWarehouse.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_TRDP_Set_Region_PARTY_ID();
        SYF_TRDP_Set_Variety_PARTY_ID();
    } catch (e) {
        DisExcpt("SYF_TRDP_AddWarehouse.js", e);
    }
}

csFuncLevelProto.FLD_TRDP_INSPEC_ID_onchange = function(event) {
    try {
        SYF_TRDP_Get_INSPEC_ID();
        SYF_TRDP_GetDO();
    } catch (e) {
        DisExcpt("SYF_TRDP_AddWarehouse.js", e);
    }
}

csFuncLevelProto.FLD_TRDP_INSPEC_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INSPEC_INS_ID', 'INSPEC_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_TRDP_AddWarehouse.js", e);
    }
}