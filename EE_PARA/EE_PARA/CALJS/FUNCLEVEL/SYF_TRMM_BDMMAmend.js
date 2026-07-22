var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYF_TRMM_Map_MT320();
        SYM_TRMM_Cal_SEND_MT202_VDT();
        SYM_TRMM_Cal_SEND_MT320_VD();
        SYF_TRMM_Cal_BACK_CONF_STATUS();
        SYF_TRMM_Cal_CURRENT_STATUS();
        SYM_TRMM_Cal_CLS_FLG();
        document.MAINFORM.INSTR_TP.value = "";
        SYF_TRMM_Cal_TTL_NS_AMT();
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYM_TRMM_Chk_OurNostroInfo()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYF_TRMM_Cal_SETL_ACTION();
        document.MAINFORM.PROFIT_BR.value = SYS_BUSI_UNIT;
       // SYM_TRMM_Cal_eLOANinfo();
        SYF_TRMM_Map_ORG_MT320_TAG20();
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE === "EC" || SYS_FUNCTION_TYPE === "PM") {
            SYM_TRMM_Get_CounterpartySSIData();
            SYM_TRMM_Cal_OUR_NOS_ID();
            SYM_TRMM_Get_CounterpartyMasterData();
            SYM_TRMM_Cal_OVER_AC_FLG();
            SYF_TRMM_HideDiv_MT202();
            SYT_chkSwiftAckNakStatusByOrgTag20(document.MAINFORM.ORG_MT320_TAG20.value, true);
            var arrOptionV;
            arrOptionV = ['ModifySSI', 'ReturnDoc'];
            SYS_FilterOptions('SETL_ACTION', arrOptionV);
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_BACK_CONF_STATUS = function() {
    try {
        var DEAL_ACTION = document.MAINFORM.DEAL_ACTION.value;
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
        var BACK_CONF_STATUS = document.MAINFORM.BACK_CONF_STATUS.value;

        if (DEAL_ACTION === "New") {
            BACK_CONF_STATUS = "NewConf";
        } else if (DEAL_ACTION === "Amend") {
            BACK_CONF_STATUS = "AmendConf";
        } else if (DEAL_ACTION === "Cancel") {
            BACK_CONF_STATUS = "CancelConf";
        }
        if (SETL_ACTION === "ReturnDoc") {
            BACK_CONF_STATUS = "";
        }
        document.MAINFORM.BACK_CONF_STATUS.value = BACK_CONF_STATUS;
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*SYF_TRMM_Cal_BACK_CONF_STATUS", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_CURRENT_STATUS = function() {
    try {
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
        var SEND_MT320_VDT = document.MAINFORM.SEND_MT320_VDT.value;
        var CURRENT_STATUS = document.MAINFORM.CURRENT_STATUS.value;
        var SEND_MT320_FLG = document.MAINFORM.SEND_MT320_FLG.value;
        if (SETL_ACTION !== "ReturnDoc") {
            if (SEND_MT320_VDT !== "") {
                CURRENT_STATUS = "BackNeedSwRel";
            } else {
                CURRENT_STATUS = "BackFinish";
            }
        } else {
            CURRENT_STATUS = "BackFinish";
        }
        document.MAINFORM.CURRENT_STATUS.value = CURRENT_STATUS;
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*SYF_TRMM_Cal_CURRENT_STATUS", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_OUR_NS_ID = function() {
    try {
   /*     var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var sWhereSql = "NS_CCY = '" + TRX_CCY + "'";
        SYS_InqCUBK_Sql("OUR_NS_ID", sWhereSql);
        SYS_InqCUBK_byCondition*/
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*SYF_TRMM_Cal_OUR_NS_ID", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_SETL_ACTION = function() {
    try {
        var INSTR_TP = document.MAINFORM.INSTR_TP.value;
        document.MAINFORM.SETL_ACTION.value = INSTR_TP;
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*SYF_TRMM_Cal_SETL_ACTION", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_TTL_NS_AMT = function() {
    try {
        var SETL_ACTION = document.MAINFORM.SETL_ACTION.value;
        if ("PM||EC".indexOf(SYS_FUNCTION_TYPE) > -1 && SETL_ACTION === "ReturnDoc") {
            document.MAINFORM.TTL_NS_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*SYF_TRMM_Cal_TTL_NS_AMT", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_overAccount = function() {
    try {
       /* var OVER_AC_FLG = document.MAINFORM.OVER_AC_FLG.value;
        var OUR_NS_ID = document.MAINFORM.OUR_NS_ID.value;
        if (OVER_AC_FLG === "No") {
            SYT_DisObj("OUR_NS_ID_BTN");
            if (SYS_FUNCTION_TYPE === "PM" || SYS_FUNCTION_TYPE === "EC") {
                SYT_ChangeFldClass(document.MAINFORM.OUR_NS_ID, "M");
            } else {
                SYT_ChangeFldClass(document.MAINFORM.OUR_NS_ID, "P");
            }
        } else {
            SYT_hideObj("OUR_NS_ID_BTN");
            SYT_ChangeFldClass(document.MAINFORM.OUR_NS_ID, "P");
        }*/
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*SYF_TRMM_Chk_overAccount", e);
    }
}

csFuncLevelProto.SYF_TRMM_Get_OUR_NOS_SW_ADD = function() {
    try {
        SYS_GetCUBK_S("OUR_NS_ID", document.MAINFORM.OUR_NS_ID.name, true);
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*SYF_TRMM_Get_OUR_NOS_SW_ADD", e);
    }
}

csFuncLevelProto.SYF_TRMM_HideDiv_MT202 = function() {
    try {
        var SEND_SW_FLG = document.MAINFORM.SEND_SW_FLG.value;

        if (SEND_SW_FLG !== "MT202") {
            SYT_hideObj("B");
        } else {
            SYT_DisObj("B");
            SYT_DisableDivClass("B_div");
            SYM_TRMM_Map_MT202value();
            SYT_ChangeFldClass(document.MAINFORM.WHT_SEND_MT202_FLG, "P");
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*SYF_TRMM_HideDiv_MT202", e);
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
        SYM_TRMM_Cal_MT320_34Emark();
        SYM_TRMM_Cal_MT320_57_SWTAG();
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*SYF_TRMM_Map_MT320", e);
    }
}

csFuncLevelProto.SYF_TRMM_Map_ORG_MT320_TAG20 = function() {
    try {
        var MT320_TAG20 = document.MAINFORM.MT320_TAG20.value;
        document.MAINFORM.ORG_MT320_TAG20.value = MT320_TAG20;
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMAmend.js*SYF_TRMM_Map_ORG_MT320_TAG20", e);
    }
}