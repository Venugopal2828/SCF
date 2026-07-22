var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.CURRENT_STATUS.value = "BackFinish";
        document.MAINFORM.SEND_MT202_VDT.value = SYS_BUSI_DATE;
        SYF_TRMM_Map_MT202();
        SYM_TRMM_Cal_SEND_SW_FLG_ByConfirm();
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMM202Urgent.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        /*if (!SYM_TRMM_Chk_OurNostroInfo()) {
            return false;
        }*/
        return true;
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMM202Urgent.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.SEND_MT202_FLG.value = "Yes";
        document.MAINFORM.SETL_ACTION.value = "UgntMT202";
        document.MAINFORM.MT320_MATCH_STATUS.value = 20;
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMM202Urgent.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE === "EC" || SYS_FUNCTION_TYPE === "PM") {
            //SYT_setBackButtonSetting();
            SYM_TRMM_Get_CounterpartySSIData();
            SYM_TRMM_Cal_OUR_NOS_ID();
            SYM_TRMM_Get_CounterpartyMasterData();
            SYM_TRMM_Cal_OVER_AC_FLG();
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMM202Urgent.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        //SYM_TRMM_Gen_SelectFldOtpOfMMDealType();
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMM202Urgent.js*PreconditionOnInit", e);
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
        DisExcpt("SYF_TRMM_BDMMM202Urgent.js*SYF_TRMM_Cal_BACK_CONF_STATUS", e);
    }
}

csFuncLevelProto.SYF_TRMM_Cal_OUR_NS_ID = function() {
    try {
        var TRX_CCY = document.MAINFORM.TRX_CCY.value;
        var sWhereSql = "NS_CCY = '" + TRX_CCY + "'";
        SYS_InqCUBK_Sql("OUR_NS_ID", sWhereSql);
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMM202Urgent.js*SYF_TRMM_Cal_OUR_NS_ID", e);
    }
}

csFuncLevelProto.SYF_TRMM_Chk_OverAccount = function() {
    try {
        var OVER_AC_FLG = document.MAINFORM.OVER_AC_FLG.value;
        var NOSTRO_BK_ID = document.MAINFORM.NOSTRO_BK_ID;
        if (OVER_AC_FLG === "No") {
            SYT_showObj("OUR_NS_ID_BTN");
            if (SYS_FUNCTION_TYPE === "PM" || SYS_FUNCTION_TYPE === "EC") {
                SYT_changeFldClass(NOSTRO_BK_ID, "M");
            } else {
                SYT_changeFldClass(NOSTRO_BK_ID, "P");
            }
        } else {
            SYT_hideObj("OUR_NS_ID_BTN");
            SYT_changeFldClass(NOSTRO_BK_ID, "P");
        }
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMM202Urgent.js*SYF_TRMM_Chk_OverAccount", e);
    }
}

csFuncLevelProto.SYF_TRMM_Get_OUR_NOS_SW_ADD = function() {
    try {
        SYS_GetCUBK_S("OUR_NS_ID", document.MAINFORM.NOSTRO_BK_ID.name, true);
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMM202Urgent.js*SYF_TRMM_Get_OUR_NOS_SW_ADD", e);
    }
}

csFuncLevelProto.SYF_TRMM_Map_MT202 = function() {
    try {
        SYM_TRMM_Map_MT202value();
    } catch (e) {
        DisExcpt("SYF_TRMM_BDMMM202Urgent.js*SYF_TRMM_Map_MT202", e);
    }
}