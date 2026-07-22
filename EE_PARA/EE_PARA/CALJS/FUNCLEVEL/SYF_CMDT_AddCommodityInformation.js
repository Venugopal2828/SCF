var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.UPDATE_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.UNIT_PRICE.value = SYT_AmtFormat(document.MAINFORM.CCY.value, document.MAINFORM.UNIT_PRICE.value);
    } catch (e) {
        DisExcpt("SYF_CMDT_AddCommodityInformation.js", e);
    }
}

csFuncLevelProto.SYF_CMDT_setMainRef = function(ref) {
    try {

        var GOODS_CATE;
        var SUB_CATE;
        var GOODS_3RD_ID;
        GOODS_CATE = document.MAINFORM.GOODS_CATE.value;
        //SUB_CATE = document.MAINFORM.SUB_CATE.value;
        SUB_CATE = document.MAINFORM.TEMP_CHAR1.value.trim().substr(2, 2);
        GOODS_3RD_ID = document.MAINFORM.GOODS_3RD_ID.value;
        //GOODS_3RD_ID = document.MAINFORM.TEMP_CHAR2.value.trim().substr(4, 3);

        document.MAINFORM.C_MAIN_REF.value = GOODS_CATE + '-' + SUB_CATE + '-' + GOODS_3RD_ID + '-' + ref;
        document.MAINFORM.GOODS_ID.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_CMDT_AddCommodityInformation.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYF_CMDT_GetMainRef();
    } catch (e) {
        DisExcpt("SYF_CMDT_AddCommodityInformation.js", e);
    }
}

csFuncLevelProto.SYF_CMDT_Get_GOODS_CATE = function() {
    try {

        document.MAINFORM.GOODS_CATE.value = document.MAINFORM.GOODS_CATE_NMTEMP.value;
    } catch (e) {
        DisExcpt("SYF_CMDT_AddCommodityInformation.js", e);
    }
}

csFuncLevelProto.SYF_CMDT_Get_SUB_CATE_NMTEMP = function() {
    try {

        var GOODS_CATE = document.MAINFORM.GOODS_CATE.value;
        var sTableName = "EXIMTRX.DATA_GOODS_CATE";
        var sSQLWhere = "GOODS_CATE_LEVEL='" + "goodssubcate" + "'" + " AND " + "PARENT_ID='" + GOODS_CATE + "'"+"AND "+"C_TRX_STATUS='"+ "M" +"'";
        var sFieldList = "GOODS_CATE_NM";
        var sMappingList = "SUB_CATE_NMTEMP"
        SYS_GetMultiValueRefreshOptions_S(sTableName, sSQLWhere, sFieldList, sMappingList, '', '', true);
    } catch (e) {
        DisExcpt("SYF_CMDT_AddCommodityInformation.js", e);
    }
}

csFuncLevelProto.SYF_CMDT_Get_SUB_CATE = function() {
    try {

        SYS_GetTableDataByRule_S('Get_SUB_CATE', '1', true);
        //document.MAINFORM.SUB_CATE.value = document.MAINFORM.TEMP_CHAR1.value.trim().substr(2, 2);
        document.MAINFORM.SUB_CATE.value = document.MAINFORM.TEMP_CHAR1.value;
    } catch (e) {
        DisExcpt("SYF_CMDT_AddCommodityInformation.js", e);
    }
}

csFuncLevelProto.SYF_CMDT_Get_GOODS_NM = function() {
    try {

        var TEMP_CHAR1 = document.MAINFORM.TEMP_CHAR1.value;
        var sTableName = "EXIMTRX.DATA_GOODS_CATE";
        var sSQLWhere = "GOODS_CATE_LEVEL='" + "goodsname" + "'" + " AND " + "PARENT_ID='" + TEMP_CHAR1 + "'"+"AND "+"C_TRX_STATUS='"+ "M" +"'";
        var sFieldList = "GOODS_CATE_NM";
        var sMappingList = "GOODS_NM"
        SYS_GetMultiValueRefreshOptions_S(sTableName, sSQLWhere, sFieldList, sMappingList, '', '', true);
    } catch (e) {
        DisExcpt("SYF_CMDT_AddCommodityInformation.js", e);
    }
}

csFuncLevelProto.SYF_CMDT_Get_GOODS_3RD_ID = function() {
    try {

        SYS_GetTableDataByRule_S('Get_GOODS_3RD_ID', '1', true);
        document.MAINFORM.GOODS_3RD_ID.value = document.MAINFORM.TEMP_CHAR2.value.trim().substr(4, 3);
        //document.MAINFORM.GOODS_3RD_ID.value = document.MAINFORM.TEMP_CHAR2.value;
    } catch (e) {
        DisExcpt("SYF_CMDT_AddCommodityInformation.js", e);
    }
}

csFuncLevelProto.SYF_CMDT_GetMainRef = function() {
    try {

        SYS_GetRefNo('CMDT', 'SYF_CMDT_setMainRef');
    } catch (e) {
        DisExcpt("SYF_CMDT_AddCommodityInformation.js", e);
    }
}

csFuncLevelProto.FLD_CMDT_GOODS_CATE_NMTEMP_onchange = function(event) {
    try {
        SYF_CMDT_GetMainRef();
        SYF_CMDT_Get_GOODS_CATE();
        SYF_CMDT_Get_SUB_CATE_NMTEMP();
    } catch (e) {
        DisExcpt("SYF_CMDT_AddCommodityInformation.js", e);
    }
}

csFuncLevelProto.FLD_CMDT_GOODS_NM_onchange = function(event) {
    try {
        SYF_CMDT_GetMainRef();
        SYF_CMDT_Get_GOODS_3RD_ID();
    } catch (e) {
        DisExcpt("SYF_CMDT_AddCommodityInformation.js", e);
    }
}

csFuncLevelProto.FLD_CMDT_SUB_CATE_NMTEMP_onchange = function(event) {
    try {
        SYF_CMDT_GetMainRef();
        SYF_CMDT_Get_SUB_CATE();
        SYF_CMDT_Get_GOODS_NM();
    } catch (e) {
        DisExcpt("SYF_CMDT_AddCommodityInformation.js", e);
    }
}

csFuncLevelProto.FLD_CMDT_UNIT_PRICE_onchange = function(event) {
    try {
        document.MAINFORM.UNIT_PRICE.value = SYT_AmtFormat(document.MAINFORM.CCY.value, document.MAINFORM.UNIT_PRICE.value);
    } catch (e) {
        DisExcpt("SYF_CMDT_AddCommodityInformation.js", e);
    }
}