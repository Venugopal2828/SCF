var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_CMDT_CategoryCode_back = function() {
    try {

        document.MAINFORM.COMDT_ID.value = document.MAINFORM.COMDT_CAT_CD.value + "-" + document.MAINFORM.TEMP_AC_NO1.value;
    } catch (e) {
        DisExcpt("SYF_CMDT_CreateCommodityInformation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.COMDT_ID.value;
    } catch (e) {
        DisExcpt("SYF_CMDT_CreateCommodityInformation.js", e);
    }
}

csFuncLevelProto.SYF_CMDT_CategoryCode = function() {
    try {

        //sqlcondition = "COMDT_CAT_DESC= '" + document.MAINFORM.COMDT_CAT_DESC.value + "'";
        SYS_GetTableDataByRule('SYF_CMDT_CreateCommodityInformation_SYF_CMDT_CategoryCode_0', '1', 'SYF_CMDT_CategoryCode_back', '', 'Y');
    } catch (e) {
        DisExcpt("SYF_CMDT_CreateCommodityInformation.js", e);
    }
}

csFuncLevelProto.SYF_CMDT_Set_COMDT_ID = function(ref) {
    try {

        var UnitCode = SYS_BUSI_UNIT;
        UnitCode = UnitCode.substr(0, 4);
        var dt = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = dt.substr(2, 2);
        document.MAINFORM.TEMP_AC_NO1.value = UnitCode + year + ref;
    } catch (e) {
        DisExcpt("SYF_CMDT_CreateCommodityInformation.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo("COMDT_ID", "SYF_CMDT_Set_COMDT_ID");
    } catch (e) {
        DisExcpt("SYF_CMDT_CreateCommodityInformation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CMDT_CreateCommodityInformation.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_CMDT_CreateCommodityInformation.js", e);
    }
}