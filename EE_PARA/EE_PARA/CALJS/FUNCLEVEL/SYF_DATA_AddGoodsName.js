var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('CATE', 'SYM_DATA_setRef');
        //document.MAINFORM.SORT_NO.value = SYS_BeInt(document.MAINFORM.SORT_NO.value) + 1;
        SYF_DATA_Get_GOODS_NM();
    } catch (e) {
        DisExcpt("SYF_DATA_AddGoodsName.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.GOODS_CATE_LEVEL.value = "goodsname";
        document.MAINFORM.GOODS_CATE.value = document.MAINFORM.PARENT_ID.value + document.MAINFORM.GOODS_CATE_TEMP.value;
        document.MAINFORM.SORT_NO.value = SYS_BeInt(document.MAINFORM.GOODS_CATE_TEMP.value);
        document.MAINFORM.SEND_TO_CNTY_NM.value = document.MAINFORM.GOODS_CATE_NM.value; //20230309 Add for catalog filter condition;

    } catch (e) {
        DisExcpt("SYF_DATA_AddGoodsName.js", e);
    }
}

csFuncLevelProto.SYF_DATA_Get_GOODS_CATE_IDTEMP = function() {
    try {

        SYS_GetTableDataByRule_S('Get_GOODS_CATE_IDTEMP', '1', true);
    } catch (e) {
        DisExcpt("SYF_DATA_AddGoodsName.js", e);
    }
}

csFuncLevelProto.SYF_DATA_Get_GOODS_SUBCATE_NM = function() {
    try {

        var GOODS_CATE_IDTEMP = document.MAINFORM.GOODS_CATE_IDTEMP.value;
        var sTableName = "EXIMTRX.DATA_GOODS_CATE";
        var sSQLWhere = "GOODS_CATE_LEVEL='" + "goodssubcate" + "'" + " AND " + "PARENT_ID='" + GOODS_CATE_IDTEMP + "' "+"AND "+"C_TRX_STATUS='"+ "M" +"'";
        var sFieldList = "GOODS_CATE_NM";
        var sMappingList = "GOODS_SUB_CATE_NMTEMP"
        SYS_GetMultiValueRefreshOptions_S(sTableName, sSQLWhere, sFieldList, sMappingList, '', '', true);
    } catch (e) {
        DisExcpt("SYF_DATA_AddGoodsName.js", e);
    }
}

csFuncLevelProto.SYF_DATA_Get_GOODS_NM = function() {
    try {

        document.MAINFORM.TEMP_CHAR1.value = "";
        SYS_GetTableDataByRule_S('Get_GOODS_NM_ID', '1', true);
        var TEMP_CHAR1 = document.MAINFORM.TEMP_CHAR1.value.trim().substr(4, 2);
        document.MAINFORM.GOODS_CATE_TEMP.value = SYT_FillZero(SYS_BeInt(TEMP_CHAR1) + 1);
    } catch (e) {
        DisExcpt("SYF_DATA_AddGoodsName.js", e);
    }
}

csFuncLevelProto.SYF_DATA_Get_GOODS_SUBCATE_ID_TEMP = function() {
    try {

        SYS_GetTableDataByRule_S('Get_GOODS_SUBCATE_ID', '1', true);
        document.MAINFORM.PARENT_ID.value = document.MAINFORM.GOODS_SUB_CATE_IDTEMP.value;
    } catch (e) {
        DisExcpt("SYF_DATA_AddGoodsName.js", e);
    }
}

csFuncLevelProto.FLD_DATA_GOODS_CATE_NMTEMP_onchange = function(event) {
    try {
        SYF_DATA_Get_GOODS_CATE_IDTEMP();
        SYF_DATA_Get_GOODS_SUBCATE_NM();
    } catch (e) {
        DisExcpt("SYF_DATA_AddGoodsName.js", e);
    }
}

csFuncLevelProto.FLD_DATA_GOODS_SUB_CATE_NMTEMP_onchange = function(event) {
    try {
        SYF_DATA_Get_GOODS_SUBCATE_ID_TEMP();
        SYF_DATA_Get_GOODS_NM();
    } catch (e) {
        DisExcpt("SYF_DATA_AddGoodsName.js", e);
    }
}