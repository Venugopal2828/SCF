var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});


csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.SEND_TO_CNTY_NM.value = document.MAINFORM.GOODS_CATE_NM.value; //20230309 Add for catalog filter condition;
    } catch (e) {
        DisExcpt("SYF_DATA_EditGoodsCategory.js", e);
    }
}