var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.CURRENT_STATUS.value = 'FrontFinish';
        SYM_TRMM_Cal_CLS_FLG();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        document.MAINFORM.DEAL_ACTION.value = "";
        SYF_TRMM_Chk_ExtendCase();
        document.MAINFORM.ORG_TRX_CCY.value = document.MAINFORM.TRX_CCY.value;
        document.MAINFORM.OLD_CCY.value = document.MAINFORM.TRX_CCY.value;
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "N";
        //  SYM_TRMM_Cal_eLOANinfo();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE === "PM" || SYS_FUNCTION_TYPE === "EC") {
            SYM_TRMM_Cal_TRADER_ID();
            SYF_TRMM_Get_TADR_NM();
            //SYM_TRMM_Cal_FOLDER();
            SYF_TRMM_Cal_DEAL_ACTION();
            SYM_TRMM_Cal_OUR_NOS_ID();
            //SYM_MMDL_Get_FACTOR();
            SYM_TRMM_Cal_OVER_AC_FLG();
            SYF_TRMM_DeleteTicketProcess();
            SYF_TRMM_Chk_RevertProcess();
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_CcyClassOnChangedByFDAmend = function() {
    try {
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        if (TRX_CCY === SYS_LOCAL_CCY) {
            SYT_ChangeFldClass(document.MAINFORM.TRX_CCY, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TRX_CCY, "M");
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*SYF_TRMM_Cal_CcyClassOnChangedByFDAmend", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_DEAL_ACTION = function() {
    try {
        var oDEAL_ACTION = document.MAINFORM.DEAL_ACTION;
        var SEND_MT320_FLG = document.MAINFORM.SEND_MT320_FLG.value;
        var OLD_DEAL_NO = document.MAINFORM.OLD_DEAL_NO.value;
        OLD_DEAL_NO = OLD_DEAL_NO.trim();
        var arrOption = [
            [],
            []
        ];
        var sOptionValu;
        var i;
        var Items = 3;
        if (SEND_MT320_FLG === "Yes") {
            document.MAINFORM.MODULE.value = SYS_MODULE_NAME;
            document.MAINFORM.MT_TP.value = "320";
            if (SYT_chkSwiftAckNakStatusByOrgTag20(document.MAINFORM.MT320_TAG20.value, false) === "A") {
                if (OLD_DEAL_NO !== null && OLD_DEAL_NO !== "") {
                    Items = 2;
                    arrOption[0][0] = ["Cancel", "Revert"];
                    arrOption[1][0] = ["Cancel", "Revert"];
                } else {
                    arrOption[0][0] = ["Amend", "Cancel", "Revert"];
                    arrOption[1][0] = ["Amend", "Cancel", "Revert"];
                }
            } else {
                if (OLD_DEAL_NO !== null && OLD_DEAL_NO !== "") {
                    Items = 2;
                    arrOption[0][0] = ["Delete Ticket", "Revert"];
                    arrOption[1][0] = ["DeleteTicket", "Revert"];
                } else {
                    arrOption[0][0] = ["New", "Delete Ticket", "Revert"];
                    arrOption[1][0] = ["New", "DeleteTicket", "Revert"];
                }
            }
        } else {
            if (OLD_DEAL_NO !== null && OLD_DEAL_NO !== "") {
                Items = 2;
                arrOption[0][0] = ["Delete Ticket", "Revert"];
                arrOption[1][0] = ["DeleteTicket", "Revert"];
            } else {
                arrOption[0][0] = ["New", "Delete Ticket", "Revert"];
                arrOption[1][0] = ["New", "DeleteTicket", "Revert"];
            }
        }
        oDEAL_ACTION.options.length = 0;
        var aItemLabRs = arrOption[0][0].toString().split(",");
        var aFldValRs = arrOption[1][0].toString().split(",");
        for (i = 0; i < Items; i++) {
            var oItem = new Option(aItemLabRs[i], aFldValRs[i]);
            oDEAL_ACTION.options.add(oItem);
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*SYF_TRMM_Cal_DEAL_ACTION", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_CcyValueOnChangedByFDAmend = function() {
    try {
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var ORG_TRX_CCY = document.MAINFORM.ORG_TRX_CCY.value;
        var bRtnFlag = true;

        if (TRX_CCY === SYS_LOCAL_CCY) {
            alert("Error: The Currency can't be " + SYS_LOCAL_CCY + "!");
            document.MAINFORM.TRX_CCY.value = ORG_TRX_CCY;
            bRtnFlag = false;
        }

        return bRtnFlag;
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*SYF_TRMM_Chk_CcyValueOnChangedByFDAmend", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_ExtendCase = function() {
    try {
        var OLD_DEAL_NO = document.MAINFORM.OLD_DEAL_NO.value;
        if (OLD_DEAL_NO.length > 0) {
            SYT_DisObj("OLD_DEALCCY_LABL");
            SYT_DisObj("OLD_CCY");
            SYT_DisObj("OLD_AMT");
        } else {
            SYT_hideObj("OLD_DEALCCY_LABL");
            SYT_hideObj("OLD_CCY");
            SYT_hideObj("OLD_AMT");
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*SYF_TRMM_Chk_ExtendCase", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_RevertProcess = function() {
    try {
        var DEAL_ACTION = document.MAINFORM.DEAL_ACTION.value;
        var IS_FLD_CHGED_FLG = document.MAINFORM.IS_FLD_CHGED_FLG.value;
        if (IS_FLD_CHGED_FLG === "Y") {
            if (DEAL_ACTION === "Revert" || DEAL_ACTION === "Cancel") {
                alert("You first select the Amend, may change the value of the field, if you sure you want to perform the Revert, please leave the transaction to re-enter transactions and directly select the Revert, thank you!");
                SYT_disableAllFields("A_div");
                SYS_highTrxButton("_cancel");
                SYT_ChangeFldClass(document.MAINFORM.DEAL_ACTION, "M");
                SYT_ChangeFldClass(document.MAINFORM.CANCEL_RESN, "M");
                if (DEAL_ACTION === "Cancel") {
                    SYS_highTrxButton("_confirm", "_predoc");
                }
                
            } else if (DEAL_ACTION !== "DeleteTicket") {
               // SYT_ChangeFldClass(document.MAINFORM.POSIT_TP, "M");
                SYT_ChangeFldClass(document.MAINFORM.BROKER_ID, "M");
                //SYT_ChangeFldClass(document.MAINFORM.FOLDER, "M");
                SYT_ChangeFldClass(document.MAINFORM.TRX_CCY, "M");
                SYT_ChangeFldClass(document.MAINFORM.TRX_AMT, "M");
                SYT_ChangeFldClass(document.MAINFORM.VAL_DT, "M");
                SYT_ChangeFldClass(document.MAINFORM.MATURITY_DT, "M");
                SYT_ChangeFldClass(document.MAINFORM.INT_RT, "M");
                SYT_ChangeFldClass(document.MAINFORM.DEAL_ACTION, "M");
                SYT_ChangeFldClass(document.MAINFORM.TADR_ID, "M");
                SYT_ChangeFldClass(document.MAINFORM.OVER_AC_FLG, "M");
                SYT_ChangeFldClass(document.MAINFORM.FACTOR, "O");
                SYT_ChangeFldClass(document.MAINFORM.PRD_NO, "O");
                SYT_ChangeFldClass(document.MAINFORM.PRD_TP, "O");
            }
        } else {
            if (DEAL_ACTION === "Revert" || DEAL_ACTION === "Cancel") {
                SYT_disableAllFields("A_div");
                SYT_ChangeFldClass(document.MAINFORM.DEAL_ACTION, "M");
                SYT_ChangeFldClass(document.MAINFORM.CANCEL_RESN, "M");
                SYS_highTrxButton("_confirm", "_rejreason");
                if (DEAL_ACTION === "Cancel") {
                	 SYS_highTrxButton("_confirm", "_predoc", "_rejreason");
                }
            } else if (DEAL_ACTION !== "DeleteTicket") {
               // SYT_ChangeFldClass(document.MAINFORM.POSIT_TP, "M");
                SYT_ChangeFldClass(document.MAINFORM.BROKER_ID, "M");
               // SYT_ChangeFldClass(document.MAINFORM.FOLDER, "M");
                SYT_ChangeFldClass(document.MAINFORM.TRX_CCY, "M");
                SYT_ChangeFldClass(document.MAINFORM.TRX_AMT, "M");
                SYT_ChangeFldClass(document.MAINFORM.VAL_DT, "M");
                SYT_ChangeFldClass(document.MAINFORM.MATURITY_DT, "M");
                SYT_ChangeFldClass(document.MAINFORM.INT_RT, "M");
                SYT_ChangeFldClass(document.MAINFORM.DEAL_ACTION, "M");
                SYT_ChangeFldClass(document.MAINFORM.TADR_ID, "M");
                SYT_ChangeFldClass(document.MAINFORM.OVER_AC_FLG, "M");
                SYT_ChangeFldClass(document.MAINFORM.FACTOR, "O");
                SYT_ChangeFldClass(document.MAINFORM.PRD_NO, "O");
                SYT_ChangeFldClass(document.MAINFORM.PRD_TP, "O");
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*SYF_TRMM_Chk_RevertProcess", e);
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
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*SYF_TRMM_Chk_VAL_DT", e);
    }
}

csFuncLevelProto.SYF_TRMM_DeleteTicketProcess = function() {
    try {
        var DEAL_ACTION = document.MAINFORM.DEAL_ACTION.value;
        if (DEAL_ACTION === "DeleteTicket") {
            SYT_DisableDivClass("A_div");
            SYT_ChangeFldClass(document.MAINFORM.DEAL_ACTION, "M");
            SYT_ChangeFldClass(document.MAINFORM.CANCEL_RESN, "M");
            SYS_highTrxButton("_confirm", "_rejreason");
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*SYF_TRMM_DeleteTicketProcess", e);
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
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*SYF_TRMM_Get_BROKER_NM", e);
    }
}

csFuncLevelProto.SYF_TRMM_Get_TADR_NM = function() {
    try {
        var TADR_ID = document.MAINFORM.TADR_ID.value;
        if (TADR_ID !== "" && TADR_ID !== null) {
            SYS_GetCUBK("TRADER", document.MAINFORM.TADR_ID.name, "", "", true);
        } else {
            document.MAINFORM.TADR_NM.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*SYF_TRMM_Get_TADR_NM", e);
    }
}

csFuncLevelProto.FLD_TRMM_BROKER_ID_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
        SYF_TRMM_Get_BROKER_NM();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_BROKER_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_BUSI_UNIT_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
        SYM_TRMM_Chk_BUSI_UNIT();
        SYM_TRMM_Chk_DEAL_NO();
        //SYM_TRMM_Cal_FOLDER();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_BUSI_UNIT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_CNPT_ID_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
        SYM_TRMM_Cal_StrToUpperCase(document.MAINFORM.CNPT_ID);
        SYM_TRMM_Get_CNPT_ID();
        SYM_TRMM_Cal_MT320_COMM_REF();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_CNPT_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_DEAL_ACTION_onchange = function(event) {
    try {
        SYF_TRMM_DeleteTicketProcess();
        SYF_TRMM_Chk_RevertProcess();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_DEAL_ACTION_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_DEAL_TP_onchange = function(event) {
    try {
        SYM_TRMM_Cal_DEAL_NO();
       // SYM_TRMM_Cal_FOLDER();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_DEAL_TP_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_FACTOR_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_FACTOR_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_INT_RT_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
        SYM_TRMM_Chk_INT_RT();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
        SYM_TRMM_Cal_MT320_COMM_REF();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_INT_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_MATURITY_DT_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
        SYM_TRMM_Cal_MATU_DT();
        SYM_TRMM_Chk_HolidayByMatuDate();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_MATURITY_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_OVER_AC_FLG_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
        SYM_TRMM_Cal_OVER_AC_FLG();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_OVER_AC_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_PERIOD_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
        SYM_TRMM_Cal_MATU_DT();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
        SYM_TRMM_Chk_HolidayByMatuDate();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_PERIOD_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_PERIOD_UNIT_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
        SYM_TRMM_Cal_MATU_DT();
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
        SYM_TRMM_Chk_HolidayByMatuDate();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_PERIOD_UNIT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_POSIT_TP_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
       // SYM_TRMM_Cal_FOLDER();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_POSIT_TP_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_TADE_DT_onchange = function(event) {
    try {
        SYM_TRMM_Cal_TADE_DT();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_TADE_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_TADR_ID_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
        SYF_TRMM_Get_TADR_NM();
       // SYM_TRMM_Cal_FOLDER();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_TADR_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_TRX_AMT_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_TRX_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_TRX_CCY_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
        SYM_TRMM_Cal_INT_AMT();
        SYM_TRMM_Cal_TTL_AMT();
        SYM_TRMM_Cal_CNPT_NOS_SWADD();
        SYM_TRMM_Cal_OUR_NOS_ID();
        SYM_TRMM_Chk_BUSI_UNIT();
       // SYM_TRMM_Cal_FOLDER();
        SYM_TRMM_Get_FACTOR();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_TRX_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_TRMM_VAL_DT_onchange = function(event) {
    try {
        document.MAINFORM.IS_FLD_CHGED_FLG.value = "Y";
        SYM_TRMM_Chk_HolidayByValueDate();
        SYM_TRMM_Chk_VAL_DT();
        SYM_TRMM_Cal_MATU_DT();
        SYM_TRMM_Chk_HolidayByMatuDate();
        SYM_TRMM_Cal_CNPT_NOS_SWADD();
    } catch (e) {
        DisExcpt("SYF_TRMM_FDMMDealAmend.js*FLD_TRMM_VAL_DT_onchange", e);
    }
}