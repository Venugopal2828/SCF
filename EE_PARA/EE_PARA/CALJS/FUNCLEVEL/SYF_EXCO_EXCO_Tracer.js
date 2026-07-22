var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EXCO_INIT();
        SYF_EXCO_CAL_NO_OF_TRACERS();
        document.MAINFORM.TRACER_AMT.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
        document.MAINFORM.COLL_INSTRU_DT.value = document.MAINFORM.REMT_DT.value;


        //init values of 72,79
        document.MAINFORM.BK_TO_BK_INFO.value = "";
        document.MAINFORM.NARR_MAIL.value = "";
        document.MAINFORM.NARR_TAG_79.value = "";

        SYF_EXCO_CAL_TAG32_AK();
        SYF_EXCO_CAL_TENOR_32K();
        SYM_EXCO_TEMP_CHARGE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EXCO_CONFIRM_CALL();
        SYM_EXCO_CHARGE_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYT_CHG_INIT('SYF_EXCO_CHG_INT_TO_RUN');
        SYF_EXCO_MPO_MESG_TYPE();
        SYT_DisableDivClass("B_div");
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_BK_REF.value;
        SYF_EXCO_MPO_SEND_TRACER(); //FOR BUG 974
        SYF_EXCO_MAX_TRACER_NO();

        var oTAG_79 = document.MAINFORM.NARR_TAG_79;
        oTAG_79.rows = (document.MAINFORM.MESG_TYPE.value == "MT499") ? 198 : 35;
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHG_INT_TO_RUN = function() {
    try {

        SYF_EXCO_CALL_TRACER_FEE();
        if (SYS_FUNCTION_TYPE == "PM" || SYS_FUNCTION_TYPE == "MM") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_NO_OF_TRACERS = function() {
    try {

        var NO_OF_TRACERS = SYS_BeInt(document.MAINFORM.NO_OF_TRACERS.value);
        var Nr = NO_OF_TRACERS + 1;
        document.MAINFORM.NO_OF_TRACERS.value = Nr;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_NXT_TRCR_DT = function() {
    try {

        var intervaldays = SYS_BeFloat(document.MAINFORM.INTERVAL_DAYS.value);
        if (intervaldays > 0 && document.MAINFORM.TRACER_DATE.value != "") {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.TRACER_DATE.value, intervaldays, 'SYF_EXCO_NXT_TRCR_DT', 'A', 'N', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_NXT_TRCR_DT = function(nxttrcdt) {
    try {

        document.MAINFORM.NXT_TRCR_DT.value = nxttrcdt;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MPO_SEND_TRACER = function() {
    try {

        if (document.MAINFORM.SEND_TRACER.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.TRACER_DATE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INTERVAL_DAYS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.NXT_TRCR_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MAX_TRACER_NO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MESG_TYPE, 'M');
            document.MAINFORM.TRACER_DATE.value = SYS_DATE; //FOR BUG 974
            SYM_EXCO_Cal_NXT_TRCR_DT_DT(); //FOR BUG 974
        } else {
            document.MAINFORM.TRACER_DATE.value = '';
            document.MAINFORM.MESG_TYPE.value = 'None';
            SYT_ChangeFldClass(document.MAINFORM.TRACER_DATE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INTERVAL_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NXT_TRCR_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.MAX_TRACER_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MESG_TYPE, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MPO_MESG_TYPE = function() {
    try {

        var COLL_TYPE = document.MAINFORM.COLL_TYPE.value;
        var MESG_TYPE = document.MAINFORM.MESG_TYPE.value;
        var arr_Fld = new Array(document.MAINFORM.BK_TO_BK_INFO, document.MAINFORM.NARR_TAG_79, document.MAINFORM.NARR_MAIL, document.MAINFORM.COLL_BK_SW_ADD, document.MAINFORM.COLL_BK_NM, document.MAINFORM.COLL_BK_ADD1, document.MAINFORM.COLL_BK_ADD2, document.MAINFORM.COLL_BK_ADD3, document.MAINFORM.COLL_BK_MAIL_ADD, document.MAINFORM.DRWE_TEL_NO, document.MAINFORM.MESG_TYPE, document.MAINFORM.COLL_BK_POST_ADD_BTN);
        var arr_FldClass_MT420 = new Array("O", "B", "B", "M", "P", "P", "P", "P", "P", "P", "O", "P");
        var arr_FldClass_MT99 = new Array("B", "M", "B", "M", "O", "O", "O", "O", "P", "P", "O", "P");
        var arr_FldClass_MAIL1 = new Array("B", "B", "M", "P", "P", "P", "P", "P", "M", "P", "O", "O");
        var arr_FldClass_MAIL2 = new Array("B", "B", "M", "B", "P", "P", "P", "P", "M", "P", "O", "O");
        var arr_FldClass_TElEX = new Array("B", "B", "M", "B", "P", "P", "P", "P", "P", "M", "O", "P");
        var arr_FldClass_DEFAULT = new Array("B", "B", "B", "P", "P", "P", "P", "P", "P", "P", "O", "P");
        if (COLL_TYPE == 'Documentary Through Bank' || COLL_TYPE == 'Clean Through Bank') {
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, "Email");
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'Fax');
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'Telex');
            switch (MESG_TYPE) {
                case "MT420":
                    SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_MT420);
                    break;
                case "MT499":
                case "MT999":
                    SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_MT99);
                    break;
                case "Mail":
                    SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_MAIL1);
                    break;
                case "None":
                    SYT_DisableDiv("C_div|document.MAINFORM.MESG_TYPE.name");
                    document.MAINFORM.MESG_TYPE.value = 'None';
                    break;
                default:
                    return;
            }
        } else {
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, "MT420");
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'MT499');
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'MT999');
            switch (MESG_TYPE) {
                case "Mail":
                    SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_MAIL2);
                    break;
                case "Email":
                    SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_MAIL2);
                    SYT_ChangeFldClass(document.MAINFORM.COLL_BK_MAIL_ADD, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.DRWE_EMAIL, 'M');
                    break;
                case "Telex":
                    SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_TElEX);
                    break;
                case "Fax":
                    SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_TElEX);
                    SYT_ChangeFldClass(document.MAINFORM.DRWE_TEL_NO, 'P');
                    SYT_ChangeFldClass(document.MAINFORM.DRWE_FAX, 'M');
                    break;

                case "None":
                    SYT_DisableDiv("C_div|document.MAINFORM.MESG_TYPE.name");
                    document.MAINFORM.MESG_TYPE.value = 'None';
                    break;
                default:
                    return;
            }
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CALL_TRACER_FEE = function() {
    try {

        SYT_CAL_COMM('EXCO_TRCR_CHG', document.MAINFORM.COLL_CCY.value, document.MAINFORM.COLL_TRX_CCY_AMT.value);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CHK_MESG_TYPE = function() {
    try {

        var COLL_TYPE = document.MAINFORM.COLL_TYPE.value;
        var MESG_TYPE = document.MAINFORM.MESG_TYPE.value;
        if ((COLL_TYPE == 'Documentary Direct' || COLL_TYPE == 'Clean Direct') && (MESG_TYPE == 'MT420' || MESG_TYPE == 'MT499' || MESG_TYPE == 'MT999')) {
            SYS_CheckError(document.MAINFORM.MESG_TYPE, "Only Telex, Mail or None can be selected when collection type is Documentary Direct or Clean Direct.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return SYF_EXCO_CHK_MESG_TYPE();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_TENOR_32K = function() {
    try {

        SYM_EXCO_M_TAG32K(document.MAINFORM.TENOR_TYPE, document.MAINFORM.TENOR_DAYS, document.MAINFORM.DAY_MON_FLG);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MAX_TRACER_NO = function() {
    try {

        if (document.MAINFORM.SEND_TRACER.value == 'Yes') {
            if (SYS_BeInt(document.MAINFORM.NO_OF_TRACERS.value) > SYS_BeInt(document.MAINFORM.MAX_TRACER_NO.value)) {
                alert("Maximum Number of Tracers exceeded,do you wish to send the Tracer message?");
            }
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_CAL_TAG32_AK = function() {
    try {

        if (document.MAINFORM.DUE_DT.value != "") {
            document.MAINFORM.TAG32.value = "A";
        } else {
            document.MAINFORM.TAG32.value = "K";
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_ADD', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('COLL_BK_ID', 'COLL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_POST', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_NM_onchange = function(event) {
    try {
        //SYM_EXCO_CHG_PARTIES();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_POST_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_ADD', document.MAINFORM.DRWR_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_POST_ADD', 'DRWR_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_ADD', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('INCASE_OF_ND_ID', 'INCASE_OF_ND_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_POST', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INTERVAL_DAYS_onchange = function(event) {
    try {
        SYM_EXCO_Cal_NXT_TRCR_DT_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_MAX_TRACER_NO_onchange = function(event) {
    try {
        SYF_EXCO_MAX_TRACER_NO();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_MESG_TYPE_onchange = function(event) {
    try {
        SYF_EXCO_CHK_MESG_TYPE();
        SYF_EXCO_MPO_MESG_TYPE();
        SYF_EXCO_MPO_SEND_TRACER();

        var oTAG_79 = document.MAINFORM.NARR_TAG_79;
        oTAG_79.rows = (document.MAINFORM.MESG_TYPE.value == "MT499") ? 198 : 35;
        if (oTAG_79.value.length > 0) {
            SYS_CheckTextAreaLength(oTAG_79);
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_ADD', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_POST', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_SEND_TRACER_onchange = function(event) {
    try {
        SYF_EXCO_MPO_SEND_TRACER();
        SYF_EXCO_MAX_TRACER_NO();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_TRACER_DATE_onchange = function(event) {
    try {
        SYF_EXCO_CAL_NXT_TRCR_DT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_Tracer.js", e);
    }
}