var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_TRMM_Cal_MT320_COMM_REF();
        document.MAINFORM.CURRENT_STATUS.value = "FrontFinish";
        SYM_TRMM_Cal_CLS_FLG();
        //SYM_TRMM_Map_KondorInfo();
        SYF_TRMM_Chk_ExtendAmt();
       // SYM_TRMM_Cal_ELOAN_TP();
        SYM_TRMM_Cal_LCY();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYM_TRMM_Chk_INT_RT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.C_MAIN_REF.value = SYT_genIndexRef();
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        document.MAINFORM.TADE_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.OLD_MATU_DT.value = document.MAINFORM.MATURITY_DT.value;
        SYF_TRMM_Cal_VAL_DT();
        document.MAINFORM.PERIOD.value = 0;
        document.MAINFORM.PERIOD_UNIT.value = "D";
        document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        document.MAINFORM.DEAL_ACTION.value = "Extend";
        document.MAINFORM.MT320_OPETN_TP.value = "NEWT";
        document.MAINFORM.OVER_AC_FLG.value = "No";
        document.MAINFORM.CLS_FLG.value = "No";
        document.MAINFORM.CREA_BR.value = SYS_BUSI_UNIT;
        document.MAINFORM.ACC_BRANCH.value = SYS_BUSI_UNIT;
        document.MAINFORM.BK_BR_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.PROFIT_BR.value = SYS_BUSI_UNIT;
        SYF_TRMM_Map_OldDealInfo();
        SYM_TRMM_Cal_DEAL_NO();
        SYM_TRMM_Cal_MATU_DT();
        //SYM_TRMM_Cal_eLOANinfo();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE === "PM" || SYS_FUNCTION_TYPE === "EC") {
            SYM_TRMM_Cal_OVER_AC_FLG();
            SYM_TRMM_Cal_TRADER_ID();
            SYF_TRMM_Get_TADR_NM();
           // SYM_TRMM_Cal_FOLDER();
            SYM_TRMM_Cal_OUR_NOS_ID();
            SYF_TRMM_Chk_DEAL_ACTION();
            SYF_TRMM_Chk_Extend();
            var arrOptionV;
            arrOptionV = ['Extend', 'DeleteTicket'];
            SYS_FilterOptions('DEAL_ACTION', arrOptionV);
        }
        SYF_TRMM_Chk_DealTypeClass();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_VAL_DT = function() {
    try {
        document.MAINFORM.VAL_DT.value = document.MAINFORM.OLD_MATU_DT.value;
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*SYF_TRMM_Cal_VAL_DT", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_DEAL_ACTION = function() {
    try {
        var DEAL_ACTION = document.MAINFORM.DEAL_ACTION.value;
        if (DEAL_ACTION === "DeleteTicket") {
           SYT_DisableDivClass("A_div");
           SYS_highTrxButton("_confirm");
          SYT_EnableField(document.MAINFORM.DEAL_ACTION, "M");
         document.MAINFORM.DEAL_ACTION.value = "DeleteTicket";
        }
        if (DEAL_ACTION === "Extend") {
            SYS_highTrxButton("_cancel", "_confirm", "_predoc", "_rejreason", "_transaction");
            SYT_ChangeFldClass(document.MAINFORM.TADE_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TRX_AMT, "M");
            SYT_ChangeFldClass(document.MAINFORM.VAL_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.PERIOD, "O");
            SYT_ChangeFldClass(document.MAINFORM.PERIOD_UNIT, "O");
            SYT_ChangeFldClass(document.MAINFORM.MATURITY_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.INT_RT, "M");
            SYT_ChangeFldClass(document.MAINFORM.OVER_AC_FLG, "M");
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*SYF_TRMM_Chk_DEAL_ACTION", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_DealTypeClass = function() {
    try {
        if (SYS_FUNCTION_TYPE !== "PM") {
            SYT_ChangeFldClass(document.MAINFORM.DEAL_TP, "P");
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*SYF_TRMM_Chk_DealTypeClass", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_Extend = function() {
    try {
        if (SYS_FUNCTION_TYPE === "PM") {
            var OLD_DEAL_NO = document.MAINFORM.OLD_DEAL_NO.value;
            var DEAL_ACTION = document.MAINFORM.DEAL_ACTION.value;
            SYS_GetCUBK_S("ChkExtend", "OLD_DEAL_NO;DEAL_ACTION", true);
            var sChkExtendApplySave = document.MAINFORM.TEMP_S.value;
            if (sChkExtendApplySave === "S") {
                alert("Warning: Transaction already be extended. Do not allow apply again !!");
                document.MAINFORM.DEAL_ACTION.value = "DeleteTicket";
                SYF_TRMM_Chk_DEAL_ACTION();
                SYT_ChangeFldClass(document.MAINFORM.DEAL_ACTION, "P");
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*SYF_TRMM_Chk_Extend", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_ExtendAmt = function() {
    try {
        if (SYS_FUNCTION_TYPE === "PM" || SYS_FUNCTION_TYPE === "EC") {
            SYS_GetCUBK_S("ChkExtendAmt", document.MAINFORM.OLD_DEAL_NO.name, true);
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*SYF_TRMM_Chk_ExtendAmt", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_OverExtend = function() {
    try {
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var OLD_AMT = SYS_BeFloat(document.MAINFORM.OLD_AMT.value);
        var TRX_AMT = SYS_BeFloat(document.MAINFORM.TRX_AMT.value);
        var EXTD_AMT = SYS_BeFloat(document.MAINFORM.EXTD_AMT.value);
        var nNewOldAmt, nChkTrxAmt;
        nChkTrxAmt = OLD_AMT - EXTD_AMT - TRX_AMT;
        if (nChkTrxAmt < 0) {
            nNewOldAmt = SYT_AmtFormat(TRX_CCY, OLD_AMT - EXTD_AMT);
            SYS_CheckError(document.MAINFORM.TRX_AMT, "Warning: Extended Amount shall not exceed the Originals: " + nNewOldAmt + " !");
            document.MAINFORM.TRX_AMT.value = SYT_AmtFormat(TRX_CCY, nNewOldAmt);
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*SYF_TRMM_Chk_OverExtend", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_VAL_DT = function() {
    try {
        var VAL_DT = document.MAINFORM.VAL_DT.value;
        var TADE_DT = document.MAINFORM.TADE_DT.value;
        var oVAL_DT = document.MAINFORM.VAL_DT;
        var nDays = SYT_getSubDaysByDateVal(VAL_DT, TADE_DT);
        if (nDays < 0) {
            SYS_CheckError(oVAL_DT, "Warning: Value Date must be later than (or equal) Trade Date !");
            SYF_TRMM_Cal_VAL_DT();
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*SYF_TRMM_Chk_VAL_DT", e);
    }
}

csFuncLevelProto.SYF_TRMM_Get_BROKER_NM = function() {
    try {
        var BROKER_ID = document.MAINFORM.BROKER_ID.value;
        if (BROKER_ID !== "" && BROKER_ID !== null) {
            SYS_GetCUBK("BROKER", document.MAINFORM.BROKER_ID.name, "", "", true);
        } else {
            document.MAINFORM.BROKER_NM.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*SYF_TRMM_Get_BROKER_NM", e);
    }
}

csFuncLevelProto.SYF_TRMM_Get_TADR_NM = function() {
    try {
        var TADR_ID = document.MAINFORM.TADR_ID.value;
        if (TADR_ID !== "" && TADR_ID !== null) {
            SYS_GetCUBK("TRADER", document.MAINFORM.TADR_ID.name, "", "", true);
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*SYF_TRMM_Get_TADR_NM", e);
    }
}

csFuncLevelProto.SYF_TRMM_Map_OldDealInfo = function() {
    try {
        document.MAINFORM.OLD_DEAL_NO.value = document.MAINFORM.DEAL_NO.value;
        document.MAINFORM.OLD_INT_AMT.value = document.MAINFORM.INT_AMT.value;
        document.MAINFORM.OLD_AMT.value = document.MAINFORM.TRX_AMT.value;
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var nOldAmt = SYS_BeFloat(document.MAINFORM.OLD_AMT.value);
        var nExtendAmt = SYS_BeFloat(document.MAINFORM.EXTD_AMT.value);
        var nNowTrxAmt = 0;
        nNowTrxAmt = nOldAmt - nExtendAmt;
        document.MAINFORM.TRX_AMT.value = SYT_AmtFormat(TRX_CCY, nNowTrxAmt);
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*SYF_TRMM_Map_OldDealInfo", e);
    }
}

csFuncLevelProto.FLD_TRMM_BROKER_ID_onchange = function(event) {
    try {
        SYF_TRMM_Get_BROKER_NM();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*FLD_TRMM_BROKER_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_CNPT_ID_onchange = function(event) {
    try {
        SYM_TRMM_Cal_StrToUpperCase(document.MAINFORM.CNPT_ID);
        SYM_TRMM_Get_CNPT_ID();
        SYM_TRMM_Cal_MT320_COMM_REF();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*FLD_TRMM_CNPT_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_CNPT_ID_BTN_onchange = function(event) {
    try {
        SYM_TRMM_Inq_CNPT_ID();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*FLD_TRMM_CNPT_ID_BTN_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_DEAL_ACTION_onchange = function(event) {
    try {
        SYF_TRMM_Chk_DEAL_ACTION();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*FLD_TRMM_DEAL_ACTION_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_INT_RT_onchange = function(event) {
    try {
        SYM_TRMM_Chk_INT_RT();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
        SYM_TRMM_Cal_MT320_COMM_REF();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*FLD_TRMM_INT_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_MATURITY_DT_onchange = function(event) {
    try {
        SYM_TRMM_Chk_MATU_DT();
        SYM_TRMM_Chk_HolidayByMatuDate();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*FLD_TRMM_MATURITY_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_OVER_AC_FLG_onchange = function(event) {
    try {
        SYM_TRMM_Cal_OVER_AC_FLG();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*FLD_TRMM_OVER_AC_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_PERIOD_onchange = function(event) {
    try {
        SYM_TRMM_Cal_MATU_DT();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
        SYM_TRMM_Chk_HolidayByMatuDate();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*FLD_TRMM_PERIOD_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_PERIOD_UNIT_onchange = function(event) {
    try {
        SYM_TRMM_Cal_MATU_DT();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
        SYM_TRMM_Chk_HolidayByMatuDate();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*FLD_TRMM_PERIOD_UNIT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_TADE_DT_onchange = function(event) {
    try {
        SYM_TRMM_Cal_TADE_DT();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*FLD_TRMM_TADE_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_TADR_ID_onchange = function(event) {
    try {
        SYF_TRMM_Get_TADR_NM();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*FLD_TRMM_TADR_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_TRX_AMT_onchange = function(event) {
    try {
        SYF_TRMM_Chk_OverExtend();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*FLD_TRMM_TRX_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_VAL_DT_onchange = function(event) {
    try {
        SYM_TRMM_Chk_HolidayByValueDate();
        SYF_TRMM_Chk_VAL_DT();
        SYM_TRMM_Cal_MATU_DT();
        SYM_TRMM_Chk_HolidayByMatuDate();
        SYM_TRMM_Cal_CNPT_NOS_SWADD();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMExtend.js*FLD_TRMM_VAL_DT_onchange", e);
    }
}