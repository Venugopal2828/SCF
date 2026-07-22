var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.SCHD_STATUS.value = 'DONE';

        SYF_SBLC_Update_Lcbal_Local();
    } catch (e) {
        DisExcpt("SYF_SBLC_Auto_Increase.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Update_Lcbal_Local = function() {
    try {

        var BASE_BAL; // Utility Auto Fix Comments
        var EXCH_RT; // Utility Auto Fix Comments
        var SCHD_AMT; // Utility Auto Fix Comments
        var UPDAT_BAL; // Utility Auto Fix Comments
        SCHD_AMT = document.MAINFORM.SCHD_AMT.value;
        EXCH_RT = SYS_BeFloat(document.MAINFORM.EXCH_RATE.value);
        UPDAT_BAL = SCHD_AMT * EXCH_RT;
        // document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value,SCHD_AMT);
        //document.MAINFORM.BASE_BAL.value	=SYT_AmtFormat(document.MAINFORM.LC_CCY.value,UPDAT_BAL); 
        if (document.MAINFORM.SCHD_ACTION.value == "INCREASE") {
            document.MAINFORM.LC_BAL.value = document.MAINFORM.LC_BAL.value + UPDAT_BAL;
            BASE_BAL = SYT_AmtFormat('USD', UPDAT_BAL);
            document.MAINFORM.BASE_BAL.value = document.MAINFORM.LC_BAL.value + BASE_BAL;
        }
        if (document.MAINFORM.SCHD_ACTION.value == "DECREASE") {
            document.MAINFORM.LC_BAL.value = document.MAINFORM.LC_BAL.value - UPDAT_BAL;
            BASE_BAL = SYT_AmtFormat('USD', UPDAT_BAL); // Utility Auto Fix Comments
            document.MAINFORM.BASE_BAL.value = document.MAINFORM.LC_BAL.value - BASE_BAL;
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_Auto_Increase.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_Auto_Increase.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_Auto_Increase.js", e);
    }
}