var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.GOODS_CATE_NMTEMP.value = document.MAINFORM.PARENT_ID.value.trim().substr(0, 2);
        document.MAINFORM.GOODS_SUB_CATE_NMTEMP.value = document.MAINFORM.PARENT_ID.value;
    } catch (e) {
        DisExcpt("SYF_DATA_EditGoodsName.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.GOODS_CATE_NMTEMP, 'P');
        SYT_ChangeFldClass(document.MAINFORM.GOODS_SUB_CATE_NMTEMP, 'P');

        document.MAINFORM.GOODS_CATE_TEMP.value = document.MAINFORM.GOODS_CATE.value.trim().substr(4, 3);
    } catch (e) {
        DisExcpt("SYF_DATA_EditGoodsName.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.SEND_TO_CNTY_NM.value = document.MAINFORM.GOODS_CATE_NM.value; //20230309 Add for catalog filter condition;
    } catch (e) {
        DisExcpt("SYF_DATA_EditGoodsName.js", e);
    }
}