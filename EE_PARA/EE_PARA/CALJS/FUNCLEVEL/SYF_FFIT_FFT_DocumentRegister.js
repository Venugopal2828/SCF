var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_AMT_TO_ZERO = function() {
    try {

        document.MAINFORM.FINC_TSP_8114_AMT.value = 0;
        document.MAINFORM.RFD_TSP_8114_AMT.value = 0;
        document.MAINFORM.ST_TSP_8114_AMT.value = 0;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FUND_CHK_FLG = function() {
    try {

        if (document.MAINFORM.FUND_CHK_FLG.value == 0) {
            SYT_ChangeFldClass(document.MAINFORM.FINC_TSP_8114_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ST_TSP_8114_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.RFD_TSP_8114_AMT, 'P', 'N');
        } else if (document.MAINFORM.FUND_CHK_FLG.value == 1) {
            SYT_ChangeFldClass(document.MAINFORM.FINC_TSP_8114_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ST_TSP_8114_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.RFD_TSP_8114_AMT, 'P', 'N');
        } else if (document.MAINFORM.FUND_CHK_FLG.value == 2) {
            SYT_ChangeFldClass(document.MAINFORM.FINC_TSP_8114_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ST_TSP_8114_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.RFD_TSP_8114_AMT, 'P', 'N');
        } else if (document.MAINFORM.FUND_CHK_FLG.value == 3) {
            SYT_ChangeFldClass(document.MAINFORM.FINC_TSP_8114_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ST_TSP_8114_AMT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.RFD_TSP_8114_AMT, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'DocumentRegister';
        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
        document.MAINFORM.FUND_CHK_FLG.value = '0';
        SYF_FFIT_SYT_CCY_AMT();
        document.MAINFORM.TEMP_CHAR1.value = "1";
        //SYF_FFIT_AUTH_POINT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RELE_CREA_BY();
        SYF_FFIT_REMARK_FAVOR();
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        }
        SYF_FFIT_FUND_CHK_FLG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_REMARK_FAVOR = function() {
    try {

      if (document.MAINFORM.FAV_RT_FLG.value == 'YES') { 
            SYT_ChangeFldClass(document.MAINFORM.NEW_REMARK, 'M', 'Y');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_REMARK, 'O', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SYT_CCY_AMT = function() {
    try {

        document.MAINFORM.FINC_8114_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_8114_AMT.value);
        document.MAINFORM.FINC_8114_BAL.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_8114_BAL.value);
        document.MAINFORM.ST_8114_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.ST_8114_AMT.value);
        document.MAINFORM.ST_8114_BAL.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.ST_8114_BAL.value);
        document.MAINFORM.RFD_8114_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.RFD_8114_AMT.value);
        document.MAINFORM.RFD_8114_BAL.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.RFD_8114_BAL.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SYT_CCY_TSP_AMT = function() {
    try {

        document.MAINFORM.FINC_TSP_8114_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_TSP_8114_AMT.value);
        document.MAINFORM.ST_TSP_8114_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.ST_TSP_8114_AMT.value);
        document.MAINFORM.RFD_TSP_8114_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.RFD_TSP_8114_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FAV_RT_FLG_onchange = function(event) {
    try {
        SYF_FFIT_REMARK_FAVOR();
        //SYF_FFIT_AUTH_POINT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_TSP_8114_AMT_onchange = function(event) {
    try {
        SYF_FFIT_SYT_CCY_TSP_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FUND_CHK_FLG_onchange = function(event) {
    try {
        SYF_FFIT_FUND_CHK_FLG();
        SYF_FFIT_AMT_TO_ZERO();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_NEW_REMARK_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_RFD_TSP_8114_AMT_onchange = function(event) {
    try {
        SYF_FFIT_SYT_CCY_TSP_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SELL_BK_ID_onchange = function(event) {
    try {
        SYM_FFIT_Cal_SELL_BK_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SELL_BK_SW_onchange = function(event) {
    try {
        SYM_FFIT_Cal_SELL_BK_SW_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ST_8114_AMT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ST_TSP_8114_AMT_onchange = function(event) {
    try {
        SYF_FFIT_SYT_CCY_TSP_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_DocumentRegister.js", e);
    }
}