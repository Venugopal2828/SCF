var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
    SYF_TRDP_AGR_SIGNED();
        return true;
    } catch (e) {
        DisExcpt("SYF_TRDP_AddInspectInstitution.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.SYF_TRDP_Get_INSPEC_ID = function() {
    try {

        if (document.MAINFORM.INSPEC_ID.value != '') {
            SYS_GetCUBK('INSPEC_INS_ID', 'INSPEC_ID');
        }
    } catch (e) {
        DisExcpt("SYF_TRDP_EditWarehouse.js", e);
    }
}

csFuncLevelProto.SYF_TRDP_GetDO = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S("GetPartyRegion", "N", false, '', "PartyRegion");
            SYS_GetDataForDO_S("GetCollateralVariety", "N", false, '', "CollateralVariety");
        }
    } catch (e) {
        DisExcpt("SYF_TRDP_EditWarehouse.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYF_TRDP_GetDO();
    } catch (e) {
        DisExcpt("SYF_TRDP_EditWarehouse.js", e);
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

csFuncLevelProto.FLD_TRDP_INSPEC_ID_onchange = function(event) {
    try {
        SYF_TRDP_Get_INSPEC_ID();
        //SYF_TRDP_GetDO();
        SYS_GetDataForDO_S("GetPartyRegion_WareHouse", "N", false, '', "PartyRegion");
        SYS_GetDataForDO_S("GetCollateralVariety_WareHouse", "N", false, '', "CollateralVariety");
    } catch (e) {
        DisExcpt("SYF_TRDP_EditWarehouse.js", e);
    }
}

csFuncLevelProto.FLD_TRDP_INSPEC_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INSPEC_INS_ID', 'INSPEC_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_TRDP_EditWarehouse.js", e);
    }
}