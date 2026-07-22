var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.CURRENT_STATUS.value = "FrontFinish";
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCallSave = function() {
    try {
        document.MAINFORM.CURRENT_STATUS.value = "FrontSave";
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*ConfirmBusinessCallSave", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYM_TRMM_Chk_INT_RT() || (document.MAINFORM.DEAL_ACTION.value === "New" && !SYM_TRMM_Chk_OurNostroInfo())) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        document.MAINFORM.TADE_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        document.MAINFORM.DEAL_ACTION.value = "New";
        document.MAINFORM.OVER_AC_FLG.value = "No";
        document.MAINFORM.CLS_FLG.value = "No";
        document.MAINFORM.BR_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.ACC_BRANCH.value = SYS_BUSI_UNIT;
        document.MAINFORM.BK_BR_CODE.value = SYS_BUSI_UNIT;
        document.MAINFORM.PERIOD.value = 0;
        document.MAINFORM.PERIOD_UNIT.value = "D";
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE === "PM" || SYS_FUNCTION_TYPE === "EC") {
            SYM_TRMM_Cal_BUSI_UNIT();
            SYM_TRMM_Cal_TRADER_ID();
            SYF_TRMM_Get_TADR_NM();
           // SYM_TRMM_Cal_FOLDER();
            SYM_TRMM_Cal_DEAL_NO();
            SYF_TRMM_Chk_DealNoDuplicate();
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        SYM_TRMM_Cal_BROKER_ID();
        SYM_TRMM_Cal_TRADER_IDcontents();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_ChkDealNoDuplFali = function() {
    try {
        document.MAINFORM.TEMP_ITEM1.value = "99";
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*SYF_TRMM_Cal_ChkDealNoDuplFali", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_ChkDealNoDuplSucc = function() {
    try {
        SYM_TRMM_Cal_DEAL_NO_Dup();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*SYF_TRMM_Cal_ChkDealNoDuplSucc", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_DEAL_ACTION = function() {
    try {
        var DEAL_ACTION = document.MAINFORM.DEAL_ACTION.value;
        if (DEAL_ACTION === "DeleteTicket") {
            //SYT_setFrontButtonSettingByDeleteTicket();
            //SYT_setFrontButtonSettingByDeleteTicketEC();
            SYT_DisableDivClass("A_div", "DEAL_ACTION");
            SYT_EnableField(document.MAINFORM.DEAL_ACTION, "M");
        }
        if (DEAL_ACTION === "New") {
            // SYT_setFrontButtonSetting();
            //  SYT_setFrontButtonSettingByFixRefuse();
            SYM_TRMM_Cal_BUSI_UNIT();
            SYT_ChangeFldClass(document.MAINFORM.TRX_CCY, "M");
            SYT_ChangeFldClass(document.MAINFORM.TRX_AMT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TADR_ID, "M");
            //SYT_ChangeFldClass(document.MAINFORM.FOLDER, "M");
            SYT_ChangeFldClass(document.MAINFORM.CNPT_ID, "M");
            SYT_ChangeFldClass(document.MAINFORM.CNPT_ID_BTN, "O");
            SYT_ChangeFldClass(document.MAINFORM.BROKER_ID, "M");
           // SYT_ChangeFldClass(document.MAINFORM.POSIT_TP, "M");
            SYT_ChangeFldClass(document.MAINFORM.FACTOR, "M");
            SYT_ChangeFldClass(document.MAINFORM.VAL_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.PERIOD, "O");
            SYT_ChangeFldClass(document.MAINFORM.PERIOD_UNIT, "O");
            SYT_ChangeFldClass(document.MAINFORM.MATU_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.INT_RT, "M");
            SYF_TRMM_Chk_DealTypeClass();
            SYT_ChangeFldClass(document.MAINFORM.TADE_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.OVER_AC_FLG, "M");
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*SYF_TRMM_Chk_DEAL_ACTION", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_DealNoDuplicate = function() {
    try {
        if (SYS_FUNCTION_TYPE === "PM") {
            var DEAL_NO = document.MAINFORM.DEAL_NO.value;
            var nChk = 0;
            while (nChk < 99) {
                document.MAINFORM.DEAL_NO.value = "@";
                SYS_GetTableDataByRule_S('Get_Deal_No', '1', 'Y');
                if (document.MAINFORM.DEAL_NO.value === "@") {
                    SYF_TRMM_Cal_ChkDealNoDuplFali();
                    document.MAINFORM.DEAL_NO.value = DEAL_NO;
                } else {
                    SYF_TRMM_Cal_ChkDealNoDuplSucc();
                    DEAL_NO = document.MAINFORM.DEAL_NO.value;
                    // sSQLWhere = "DEAL_NO = '" + DEAL_NO.replace(/^[\s]*/gi, "") + "'";
                }
                nChk = SYS_BeFloat(document.MAINFORM.TEMP_ITEM1.value);
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*SYF_TRMM_Chk_DealNoDuplicate", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_DealTypeClass = function() {
    try {
        if (SYS_FUNCTION_TYPE !== "PM") {
            SYT_ChangeFldClass(document.MAINFORM.DEAL_TP, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEAL_TP, "M");
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*SYF_TRMM_Chk_DealTypeClass", e);
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
            document.MAINFORM.VAL_DT.value = TADE_DT;
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*SYF_TRMM_Chk_VAL_DT", e);
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
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*SYF_TRMM_Get_BROKER_NM", e);
    }
}

csFuncLevelProto.SYF_TRMM_Get_TADR_NM = function() {
    try {
        var TADR_ID = document.MAINFORM.TADR_ID.value;
        if (TADR_ID !== "" && TADR_ID !== null) {
            SYS_GetCUBK("TRADER", document.MAINFORM.TADR_ID.name, "", "", true);
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*SYF_TRMM_Get_TADR_NM", e);
    }
}

csFuncLevelProto.SYF_TRMM_Mpo_AmendCancelReason = function() {
    try {
        var DEAL_ACTION = document.MAINFORM.DEAL_ACTION.value;
        var CURRENT_STATUS = document.MAINFORM.CURRENT_STATUS.value;
        var CANCEL_RESN = document.MAINFORM.CANCEL_RESN.value;
        if (DEAL_ACTION !== "DeleteTicket") {
            if (SYS_FUNCTION_TYPE !== "PM" && SYS_FUNCTION_TYPE !== "MM" && CURRENT_STATUS === "FrontFinish") {
                if (SYS_FUNCTION_TYPE === "EC") {
                    SYT_ChangeFldClass(document.MAINFORM.CANCEL_RESN, "M");
                } else {
                    if (CANCEL_RESN !== "" && CANCEL_RESN !== null) {
                        SYT_ChangeFldClass(document.MAINFORM.CANCEL_RESN, "M");
                    } else {
                        SYT_ChangeFldClass(document.MAINFORM.CANCEL_RESN, "P");
                    }
                }
            } else {
                document.MAINFORM.CANCEL_RESN.value = "";
                SYT_ChangeFldClass(document.MAINFORM.CANCEL_RESN, "P");
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CANCEL_RESN, "M");
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*SYF_TRMM_Mpo_AmendCancelReason", e);
    }
}

csFuncLevelProto.FLD_TRMM_BROKER_ID_onchange = function(event) {
    try {
        SYF_TRMM_Get_BROKER_NM();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_BROKER_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_BUSI_TP_onchange = function(event) {
    try {
        SYM_TRMM_Chk_BUSI_UNIT();
        SYM_TRMM_Chk_DEAL_NO();
        SYF_TRMM_Chk_DealNoDuplicate();
   //     SYM_TRMM_Cal_FOLDER();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_BUSI_TP_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_CNPT_ID_onchange = function(event) {
    try {
        SYM_TRMM_Cal_StrToUpperCase(document.MAINFORM.CNPT_ID);
        SYM_TRMM_Get_CNPT_ID();
        SYM_TRMM_Cal_MT320_COMM_REF();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_CNPT_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_DEAL_ACTION_onchange = function(event) {
    try {
        SYF_TRMM_Chk_DEAL_ACTION();
        SYF_TRMM_Mpo_AmendCancelReason();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_DEAL_ACTION_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_DEAL_TP_onchange = function(event) {
    try {
        document.MAINFORM.TEMP_ITEM1.value = "";
        SYM_TRMM_Cal_DEAL_NO();
        SYF_TRMM_Chk_DealNoDuplicate();
//        SYM_TRMM_Cal_FOLDER();
        //SYM_TRMM_Cal_KONDOR_FOLDER();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_DEAL_TP_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_FACTOR_onchange = function(event) {
    try {
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_FACTOR_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_INT_RT_onchange = function(event) {
    try {
        SYM_TRMM_Chk_INT_RT();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
        SYM_TRMM_Cal_MT320_COMM_REF();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_INT_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_MATU_DT_onchange = function(event) {
    try {
        SYM_TRMM_Chk_MATU_DT();
        SYM_TRMM_Chk_HolidayByMatuDate();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_MATU_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_OVER_AC_FLG_onchange = function(event) {
    try {
        SYM_TRMM_Cal_OVER_AC_FLG();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_OVER_AC_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_PERIOD_onchange = function(event) {
    try {
        SYM_TRMM_Cal_MATU_DT();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
        SYM_TRMM_Chk_HolidayByMatuDate();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_PERIOD_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_PERIOD_UNIT_onchange = function(event) {
    try {
        SYM_TRMM_Cal_MATU_DT();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
        SYM_TRMM_Chk_HolidayByMatuDate();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_PERIOD_UNIT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_POSIT_TP_onchange = function(event) {
    try {
        SYM_TRMM_Cal_FOLDER();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_POSIT_TP_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_TADE_DT_onchange = function(event) {
    try {
        SYM_TRMM_Cal_TADE_DT();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_TADE_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_TADR_ID_onchange = function(event) {
    try {
        SYF_TRMM_Get_TADR_NM();
//        SYM_TRMM_Cal_FOLDER();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_TADR_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_TRX_AMT_onchange = function(event) {
    try {
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_TRX_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_TRX_CCY_onchange = function(event) {
    try {
        SYM_TRMM_Cal_BUSI_UNIT();
        SYM_TRMM_Chk_DEAL_NO();
        SYM_TRMM_Get_FACTOR();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
        SYM_TRMM_Cal_CNPT_NOS_SWADD();
        SYM_TRMM_Cal_OUR_NOS_ID();
        SYM_TRMM_Chk_BUSI_UNIT();
//        SYM_TRMM_Cal_FOLDER();
        SYF_TRMM_Chk_DealNoDuplicate();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_TRX_CCY_onchange", e);
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
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_VAL_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_CNPT_ID_BTN_onclick = function(event) {
    try {
        SYM_TRMM_Inq_CNPT_ID();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMTradeRegister.js*FLD_TRMM_CNPT_ID_BTN_onclick", e);
    }
}