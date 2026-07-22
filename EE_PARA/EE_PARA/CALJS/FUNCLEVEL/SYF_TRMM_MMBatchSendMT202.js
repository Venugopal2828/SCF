var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.SETL_ACTION.value = "BatchMT202";
       // document.MAINFORM.SEND_MT202_FLG.value = "Yes";
       // document.MAINFORM.SEND_MT202_VDT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_TRMM_MMBatchSendMT202.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE === "EC" || SYS_FUNCTION_TYPE === "PM") {

            SYM_TRMM_Get_CounterpartySSIData();
            SYM_TRMM_Cal_OUR_NOS_ID();
            SYM_TRMM_Cal_OVER_AC_FLG();
            SYM_TRMM_Map_MT202value();
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_MMBatchSendMT202.js*PostconditionOnInit", e);
    }
}