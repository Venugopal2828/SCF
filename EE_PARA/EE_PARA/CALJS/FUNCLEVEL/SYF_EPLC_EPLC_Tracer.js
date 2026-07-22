var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT();
        SYM_EPLC_INIT_CCY();
        document.MAINFORM.TRACER_DATE.value = SYS_BUSI_DATE;
        document.MAINFORM.NO_OF_TRACERS.value = SYS_BeInt(document.MAINFORM.NO_OF_TRACERS.value) + 1;
        document.MAINFORM.INTERVAL_DAYS.value = 7;

        document.MAINFORM.MESG_TYPE.value = 'None';

        document.MAINFORM.RCV_BK_ADD1_MT734.value = document.MAINFORM.ISSUE_BK_ADD1.value;
        document.MAINFORM.RCV_BK_ADD2_MT734.value = document.MAINFORM.ISSUE_BK_ADD2.value;
        document.MAINFORM.RCV_BK_ADD3_MT734.value = document.MAINFORM.ISSUE_BK_ADD3.value;
        document.MAINFORM.RCV_BK_ID_MT734.value = document.MAINFORM.ISSUE_BK_ID.value;
        document.MAINFORM.RCV_BK_NM_MT734.value = document.MAINFORM.ISSUE_BK_NM.value;
        document.MAINFORM.RCV_BK_SW_ADD_MT734.value = document.MAINFORM.ISSUE_BK_SW_ADD.value;
        document.MAINFORM.RCV_BK_SW_TAG_MT734.value = document.MAINFORM.ISSUE_BK_SW_TAG.value;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        //For Init Charge
        SYT_CHG_INIT('SYF_EPLC_EPLC_TRCR_CHG');
        //set charge paid at as DEFERRED
        if (SYS_FUNCTION_TYPE == "PM") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;


        SYT_DisableDivClass('B_div');

        SYF_EPLC_SEND_TRACER();
        SYF_EPLC_MAX_TRACER_NO();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_EPLC_TRCR_CHG = function() {
    try {

        var arr = ['EPLC_TRCR_CHG'];
        var amt = document.MAINFORM.PRES_AMT.value;
        var ccy = document.MAINFORM.PRES_CCY.value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_Cal_NXT_TRCR_DT = function() {
    try {

        if (document.MAINFORM.INTERVAL_DAYS.value != '') {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, SYS_BUSI_DATE, document.MAINFORM.INTERVAL_DAYS.value, 'SYF_EPLC_Cal_NXT_TRCR_DT_Back', 'A', 'N', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_Cal_NXT_TRCR_DT_Back = function(NXT_TRCR_DT) {
    try {

        document.MAINFORM.NXT_TRACER_DT.value = NXT_TRCR_DT;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_SEND_TRACER = function() {
    try {

        if (document.MAINFORM.SEND_TRACER.value == 'YES') {
            SYT_ChangeFldClass(document.MAINFORM.TRACER_DATE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INTERVAL_DAYS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.NXT_TRACER_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MAX_TRACER_NO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MESG_TYPE, "M");
            document.MAINFORM.TRACER_DATE.value = SYS_BUSI_DATE; //FOR BUG 974
            SYF_EPLC_Cal_NXT_TRCR_DT(); //FOR BUG 974

        } else {
            SYT_ChangeFldClass(document.MAINFORM.MESG_TYPE, "P");
            document.MAINFORM.MESG_TYPE.value = 'None';
            document.MAINFORM.TRACER_DATE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TRACER_DATE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INTERVAL_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NXT_TRACER_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.MAX_TRACER_NO, 'P');

        }
        SYF_EPLC_MESG_TYPE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MAX_TRACER_NO = function() {
    try {

        if (document.MAINFORM.SEND_TRACER.value == 'YES') {
            if (SYS_BeInt(document.MAINFORM.NO_OF_TRACERS.value) > SYS_BeInt(document.MAINFORM.MAX_TRACER_NO.value)) {
                alert("Maximum Number of Tracers exceeded,do you wish to send the Tracer message?");
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MESG_TYPE = function() {
    try {

        if (document.MAINFORM.MESG_TYPE.value == 'None') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_NARR_79, 'O');
            document.MAINFORM.TEMP_N95_NARR_79.value = '';
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_SW_ADD_MT734, 'O');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_N95_NARR_79, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_SW_ADD_MT734, 'M');

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INTERVAL_DAYS_onchange = function(event) {
    try {
        SYF_EPLC_Cal_NXT_TRCR_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_MAX_TRACER_NO_onchange = function(event) {
    try {
        SYF_EPLC_MAX_TRACER_NO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_MESG_TYPE_onchange = function(event) {
    try {
        SYF_EPLC_MESG_TYPE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NO_OF_TRACERS_onchange = function(event) {
    try {
        SYF_EPLC_MAX_TRACER_NO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NXT_TRACER_DT_onchange = function(event) {
    try {
        SYF_EPLC_Cal_NXT_TRCR_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ADD1_MT734_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_BK_SW_ADD_MT734));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ADD2_MT734_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_BK_SW_ADD_MT734));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ADD3_MT734_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_BK_SW_ADD_MT734));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ADD_BTN_MT734_onclick = function(event) {
    try {
        SYS_InqCUBK('RCV_BK_ID_MT734_ADD', 'RCV_BK_ID_MT734', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ID_BTN_MT734_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ID_MT734_onchange = function(event) {
    try {
        SYT_GetCUBK_All('RCV_BK_ID_MT734', 'RCV_BK_ID_MT734');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_NM_MT734_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_BK_SW_ADD_MT734));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_ORDER_NO_MT734_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_BK_SW_ADD_MT734_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_TRACER_onchange = function(event) {
    try {
        SYF_EPLC_MAX_TRACER_NO();
        SYF_EPLC_SEND_TRACER();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRACER_DATE_onchange = function(event) {
    try {
        SYF_EPLC_Cal_NXT_TRCR_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_Tracer.js", e);
    }
}