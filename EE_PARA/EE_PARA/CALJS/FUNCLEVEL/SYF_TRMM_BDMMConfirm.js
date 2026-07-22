var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYF_TRMM_Cal_CURRENT_STATUS();
        SYF_TRMM_Map_MT202();
        SYF_TRMM_Map_MT320();
        SYM_TRMM_Cal_SEND_MT202_VDT();
        SYM_TRMM_Cal_SEND_MT320_VD();
        SYM_TRMM_Cal_CLS_FLG();
       // SYM_TRMM_Cal_SEND_VOU_VDT();
        SYM_TRMM_Cal_VoucherCustomerID();
        SYF_TRMM_Cal_TTL_NS_AMT();
        SYF_TRMM_Chk_eLOANTakedown();
        SYM_TRMM_Cal_SEND_SW_FLG_ByConfirm();
        SYM_TRMM_Cal_INT_AMT_P();
       // SYF_TRMM_Cal_GetACNo();
        //DEBIT/CREDIT AC;
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYM_TRMM_Chk_OurNostroInfo() || !SYM_TRMM_Chk_MT202_SEND_VDT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.SETL_ACTION.value = "NewConf";
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        SYF_TRMM_Get_OldInfo();
        SYF_TRMM_Chk_WHT_SEND_MT202_FLG();
        SYF_TRMM_Chk_SEND_MT202_FLG();
        SYF_TRMM_Chk_SEND_MT320_FLG();
        SYM_TRMM_Cal_eLOANinfo();
        SYF_TRMM_Map_ORG_MT320_TAG20();
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE === "PM" || SYS_FUNCTION_TYPE === "EC") {
            SYM_TRMM_Get_CounterpartySSIData();
            SYM_TRMM_Cal_OUR_NOS_ID();
            SYF_TRMM_Cal_SETL_ACTION();
            SYM_TRMM_Get_CounterpartyMasterData();
            SYF_TRMM_Cal_TRX_AMT_BAL();
            SYM_TRMM_Cal_OVER_AC_FLG();
            SYF_TRMM_Chk_MT320ACKNCK();
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_BACK_CONF_STATUS = function() {
    try {
        if (document.MAINFORM.DEAL_ACTION.value === "New") {
            document.MAINFORM.BACK_CONF_STATUS.value = "NewConf";
        } else if (document.MAINFORM.DEAL_ACTION.value === "Amend") {
            document.MAINFORM.BACK_CONF_STATUS.value = "AmendConf";
        } else if (document.MAINFORM.DEAL_ACTION.value === "Cancel") {
            document.MAINFORM.BACK_CONF_STATUS.value = "CancelConf";
        }
        if (document.MAINFORM.SETL_ACTION.value === "RetrunDoc" && document.MAINFORM.SEND_MT320_VDT.value !== "" && document.MAINFORM.SEND_MT320_FLG.value === "No") {
            document.MAINFORM.BACK_CONF_STATUS.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Cal_BACK_CONF_STATUS", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_CURRENT_STATUS = function() {
    try {
        var sCurrStatus = "";
        var SEND_MT320_VDT = document.MAINFORM.SEND_MT320_VDT.value;
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
       /* if (SETL_ACTION !== "ReturnDoc") {
         if (SEND_MT320_VDT !== "" && SEND_MT320_VDT !== null) {
             sCurrStatus = "BackNeedSwRel";
         } else {
                sCurrStatus = "BackFinish";
           }
        } else {
            sCurrStatus = "BackFinish";
        }*/
        sCurrStatus = "BackFinish";
        document.MAINFORM.CURRENT_STATUS.value = sCurrStatus;
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Cal_CURRENT_STATUS", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_EXTD_AMT = function() {
    try {
        var OLD_DEAL_NO = document.MAINFORM.OLD_DEAL_NO.value;
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var nExtendAmt = 0;
        if (OLD_DEAL_NO.length > 0) {
            nExtendAmt = document.MAINFORM.TRX_AMT.value;
        }
        document.MAINFORM.EXTD_AMT.value = SYT_setAmountFormat(TRX_CCY, nExtendAmt);
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Cal_EXTD_AMT", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_GetACNo = function() {
    try {
        var DEAL_TP = document.MAINFORM.DEAL_TP.value;
        var CNPT_SWADD = document.MAINFORM.CNPT_SWADD.value.substr(0, 8);
        var sChkCN = document.MAINFORM.CNPT_SWADD.value.substr(4, 2);
        var sBusLabel = DEAL_TP + CNPT_SWADD;
        if (CNPT_SWADD !== "PTSABMAA") {
            if (CNPT_SWADD !== "CBCT") {
                sBusLabel = DEAL_TP + "NOST";
            }
        } else {
            if (sChkCN === "CN") {
                sBusLabel = sBusLabel + sChkCN;
            }
        }
        document.MAINFORM.AT.value = sBusLabel;
        
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Cal_GetACNo", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_SETL_ACTION = function() {
    try {
        var oSETL_ACTION = document.MAINFORM.SETL_ACTION;
        var DEAL_ACTION = document.MAINFORM.DEAL_ACTION.value;
        var SEND_MT320_FLG = document.MAINFORM.SEND_MT320_FLG.value;
        var arrOption = [
            [],
            []
        ];
        var sOptionValu;
        var i;
        if (DEAL_ACTION === "New" || DEAL_ACTION === "Extend") {
            arrOption[0][0] = ["New Confirm", "Return Document"];
            arrOption[1][0] = ["NewConf", "ReturnDoc"];
        } else if (DEAL_ACTION === "Amend") {
            arrOption[0][0] = ["Amend Confirm", "Return Document"];
            arrOption[1][0] = ["AmendConf", "ReturnDoc"];
        } else if (DEAL_ACTION === "Cancel") {
            arrOption[0][0] = ["Cancel Confirm", "Return Document"];
            arrOption[1][0] = ["CancelConf", "ReturnDoc"];
        } else if (DEAL_ACTION === "Revert") {
            if (SEND_MT320_FLG === "Yes") {
                document.MAINFORM.MODULE.value = SYS_MODULE_NAME;
                document.MAINFORM.MT_TP.value = "320";
                if (SYT_chkSwiftAckNakStatusByOrgTag20(document.MAINFORM.ORG_MT320_TAG20.value, false) === "A") {
                    arrOption[0][0] = ["Revert Confirm", "Return Document"];
                    arrOption[1][0] = ["RevertConf", "ReturnDoc"];
                } else {
                    arrOption[0][0] = ["New Confirm", "Return Document"];
                    arrOption[1][0] = ["NewConf", "ReturnDoc"];
                }
            } else {
                arrOption[0][0] = ["New Confirm", "Return Document"];
                arrOption[1][0] = ["NewConf", "ReturnDoc"];
            }
        }
        oSETL_ACTION.options.length = 0;
        var aItemLabRs = arrOption[0][0].toString().split(",");
        var aFldValRs = arrOption[1][0].toString().split(",");
        for (i = 0; i < 2; i++) {
            var oItem = new Option(aItemLabRs[i], aFldValRs[i]);
            oSETL_ACTION.options.add(oItem);
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Cal_SETL_ACTION", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_TRX_AMT_BAL = function() {
    try {
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
        var OLD_DEAL_NO = document.MAINFORM.OLD_DEAL_NO.value;
        if ("PM||EC".indexOf(SYS_FUNCTION_TYPE) > -1 && SETL_ACTION !== "ReturnDoc" && OLD_DEAL_NO.length > 0) {
            var TRX_CCY = document.MAINFORM.TRX_CCY.value;
            var OLD_AMT = SYS_BeFloat(document.MAINFORM.OLD_AMT.value);
            var TRX_AMT = SYS_BeFloat(document.MAINFORM.TRX_AMT.value);
            var nTrxAmtBal = 0;
            nTrxAmtBal = OLD_AMT - TRX_AMT;
            document.MAINFORM.TRX_AMT_BAL.value = SYT_AmtFormat(TRX_CCY, nTrxAmtBal);
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Cal_TRX_AMT_BAL", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_TTL_NS_AMT = function() {
    try {
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
        document.MAINFORM.TTL_NS_AMT.value = 0;
        if ("PM||EC".indexOf(SYS_FUNCTION_TYPE) > -1 && SETL_ACTION !== "ReturnDoc") {
            var TTL_AMT = SYS_BeFloat(document.MAINFORM.TOTAL_AMT.value);
            var TRX_CCY = document.MAINFORM.TRX_CCY.value;
            document.MAINFORM.TTL_NS_AMT.value = SYT_AmtFormat(TRX_CCY, TTL_AMT);
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Cal_TTL_NS_AMT", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_MT320ACKNCK = function() {
    try {
        var ORG_MT320_TAG20 = document.MAINFORM.ORG_MT320_TAG20.value;
        if (ORG_MT320_TAG20.length > 0) {
            SYT_chkSwiftAckNakStatusByOrgTag20(ORG_MT320_TAG20, true);
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Chk_MT320ACKNCK", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_SEND_MT202_FLG = function() {
    try {
        var SEND_MT202_FLG = document.MAINFORM.SEND_MT202_FLG.value;
        var sChkExtend = document.MAINFORM.OLD_DEAL_NO.value;
        var sDealType = document.MAINFORM.DEAL_TP.value;
        var nOldAmt = SYS_BeFloat(document.MAINFORM.OLD_AMT.value);
        var nOldInt = SYS_BeFloat(document.MAINFORM.OLD_INT_AMT.value);
        var nOldTtl = SYS_FloatAdd(nOldAmt, nOldInt);
        var newTrxAmt = SYS_BeFloat(document.MAINFORM.TRX_AMT.value);
        if (sDealType === "IP" && sChkExtend.length > 0 && newTrxAmt <= nOldTtl) {
            document.MAINFORM.SEND_MT202_FLG.value = "";
        } else if (SEND_MT202_FLG.length === 0) {
            document.MAINFORM.SEND_MT202_FLG.value = "No";
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Chk_SEND_MT202_FLG", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_SEND_MT320_FLG = function() {
    try {
        var SEND_MT320_FLG = document.MAINFORM.SEND_MT320_FLG.value;
        if (SEND_MT320_FLG.length === 0) {
            document.MAINFORM.SEND_MT320_FLG.value = "No";
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Chk_SEND_MT320_FLG", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_WHT_SEND_MT202_FLG = function() {
    try {
        var chkExtend = document.MAINFORM.OLD_DEAL_NO.value;
        var sDealType = document.MAINFORM.DEAL_TP.value;
        var nOldAmt = SYS_BeFloat(document.MAINFORM.OLD_AMT.value);
        var nOldInt = SYS_BeFloat(document.MAINFORM.OLD_INT_AMT.value);
        var nOldTtl = SYS_FloatAdd(nOldAmt, nOldInt);
        var newTrxAmt = SYS_BeFloat(document.MAINFORM.TRX_AMT.value);
        if (sDealType === "IP" && chkExtend.length > 0 && newTrxAmt <= nOldTtl) {
            document.MAINFORM.WHT_SEND_MT202_FLG.value = "No";
            SYT_ChangeFldClass(document.MAINFORM.WHT_SEND_MT202_FLG, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.WHT_SEND_MT202_FLG, "M");
        }
        if (sDealType === "IT" && chkExtend.length > 0 && nOldTtl <= newTrxAmt) {
            document.MAINFORM.TEMP_FLG1.value = "No";
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Chk_WHT_SEND_MT202_FLG", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_eLOANTakedown = function() {
    try {
        ChkeLOANTakedown = "";
        var nChkRate = SYS_BeFloat(document.MAINFORM.INT_RT.value);
        var dSendVoucherDate = document.MAINFORM.SEND_VOU_VDT.value;
        var sEloanTP = document.MAINFORM.ELOAN_TP.value;
        SYS_GetCUBK_S("ChkeLOANTakedown", "DEAL_NO", true);
        if (ChkeLOANTakedown.length === 0) {
            if ("NewConf||ModifySSI||AmendConf||RevertConf".indexOf(document.MAINFORM.SETL_ACTION.value) > -1) {
                if (nChkRate === 0) {
                    document.MAINFORM.ELOAN_TP.value = "";
                } else {
                    if (dSendVoucherDate !== "") {
                        document.MAINFORM.ELOAN_TP.value = "Takedown";
                    } else {
                        document.MAINFORM.ELOAN_TP.value = "VdBthTakedown";
                    }
                }
            } else {
                document.MAINFORM.ELOAN_TP.value = sEloanTP;
            }
        } else {
            document.MAINFORM.ELOAN_TP.value = "Posting";
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Chk_eLOANTakedown", e);
    }
}

csFuncLevelProto.SYF_TRMM_Get_OUR_NOS_SW_ADD = function() {
    try {} catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Get_OUR_NOS_SW_ADD", e);
    }
}

csFuncLevelProto.SYF_TRMM_Get_OldInfo = function() {
    try {
        var OLD_DEAL_NO = document.MAINFORM.OLD_DEAL_NO.value;
        SYS_MULTI_DATA = "";
        if (OLD_DEAL_NO.length > 0) {
            var sWhereSql = "DEAL_NO = '" + OLD_DEAL_NO + "'";
            SYS_GetTableMultiDataToArray_S("TRMM_MASTER", sWhereSql, "WHT_SEND_MT202_FLG", true);
            if (SYS_MULTI_DATA.length > 0) {
                var aWhtMt202 = SYS_MULTI_DATA[0][1].toString().split(",");
                document.MAINFORM.TEMP_FLG1.value = aWhtMt202[0];
            }
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Get_OldInfo", e);
    }
}

csFuncLevelProto.SYF_TRMM_Map_MT202 = function() {
    try {
        var VAL_DT = document.MAINFORM.VAL_DT.value;
        var TADE_DT = document.MAINFORM.TADE_DT.value;
        var WHT_SEND_MT202_FLG = document.MAINFORM.WHT_SEND_MT202_FLG.value;
        var nDays = SYT_getSubDaysByDateVal(VAL_DT, TADE_DT);
        if (nDays === 0 && WHT_SEND_MT202_FLG === "Yes") {
            SYM_TRMM_Map_MT202value();
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Map_MT202", e);
    }
}

csFuncLevelProto.SYF_TRMM_Map_MT320 = function() {
    try {
        SYM_TRMM_Cal_MT320_COMM_REF();
        SYM_TRMM_Cal_MT320_OPETN_TP();
        SYM_TRMM_Cal_MT320_EVENT_TP();
        SYM_TRMM_Cal_MT320_82A();
        SYM_TRMM_Cal_MT320_17R();
        SYM_TRMM_Cal_MT320_20();
        SYM_TRMM_Cal_MT320_21();
        SYM_TRMM_Cal_MT320_32B();
        SYM_TRMM_Cal_MT320_32Hinfo();
        SYM_TRMM_Cal_MT320_57_SWTAG();
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Map_MT320", e);
    }
}

csFuncLevelProto.SYF_TRMM_Map_ORG_MT320_TAG20 = function() {
    try {
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
        if (SETL_ACTION !== "ReturnDoc") {
            document.MAINFORM.ORG_MT320_TAG20.value = document.MAINFORM.MT320_TAG20.value;
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMConfirm.js*SYF_TRMM_Map_ORG_MT320_TAG20", e);
    }
}