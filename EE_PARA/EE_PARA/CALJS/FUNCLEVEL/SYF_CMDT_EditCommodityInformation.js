var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.UPDATE_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_CMDT_EditCommodityInformation.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        document.MAINFORM.GOODS_CATE_NMTEMP.value = document.MAINFORM.GOODS_CATE.value;
        //document.MAINFORM.SUB_CATE_NMTEMP.value = document.MAINFORM.GOODS_CATE.value+document.MAINFORM.SUB_CATE.value;
        document.MAINFORM.SUB_CATE_NMTEMP.value = document.MAINFORM.SUB_CATE.value;
    } catch (e) {
        DisExcpt("SYF_CMDT_EditCommodityInformation.js", e);
    }
}