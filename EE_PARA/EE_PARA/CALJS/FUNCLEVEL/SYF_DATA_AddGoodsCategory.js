var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('CATE', 'SYM_DATA_setRef');
        //document.MAINFORM.SORT_NO.value = SYS_BeInt(document.MAINFORM.SORT_NO.value) + 1;
        SYS_GetTableDataByRule_S('Get_GOODS_CATE', '1', true);
        document.MAINFORM.GOODS_CATE.value = SYT_FillZero(SYS_BeInt(document.MAINFORM.TEMP_CHAR1.value) + 1);
        document.MAINFORM.SORT_NO.value = SYS_BeInt(document.MAINFORM.GOODS_CATE.value);
    } catch (e) {
        DisExcpt("SYF_DATA_AddGoodsCategory.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.GOODS_CATE_LEVEL.value = "goodscate";
        document.MAINFORM.SEND_TO_CNTY_NM.value = document.MAINFORM.GOODS_CATE_NM.value; //20230309 Add for catalog filter condition;
    } catch (e) {
        DisExcpt("SYF_DATA_AddGoodsCategory.js", e);
    }
}