var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYM_IMCO_MT420_TAG_32();
        SYM_IMCO_CAL_TENOR_32K();
        document.MAINFORM.TRACER_DATE.value = SYS_BUSI_DATE;

        SYT_CHG_VOUCHER();
        SYT_Cal_C_TRANS_CODE();
        SYM_IMCO_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYT_CLERK_ID();
        document.MAINFORM.REMIT_BK_NM2.value = document.MAINFORM.REMIT_BK_NM.value;
        SYM_IMCO_DRWE_CORR_MED();
        SYM_IMCO_DRWR_CORR_MED();
        document.MAINFORM.NO_OF_TRACERS.value = SYS_BeInt(document.MAINFORM.NO_OF_TRACERS.value) + 1;

        SYM_IMCO_INIT();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        var oTAG_79; // Utility Auto Fix Comments
        SYM_IMCO_CHG_mapLocal_Foreign_Cust();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_IMCO_Chg_Tracer();
            CHG_setAllChargeAt(1);
        }
        //for charge
        SYM_IMCO_Functions_For_Chg();


        SYF_IMCO_REMOVE_MESSG_OPTION();
        SYF_IMCO_BANK_CUT_FLG();
        SYF_IMCO_MESSAG_TYPE();
        SYF_IMCO_SEND_TRACER();
        SYF_IMCO_MAX_TRACER_NO();
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REMIT_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.REMIT_NOTES.name);
        SYF_IMCO_Get_TEMP();
        SYM_IMCO_DRWE_ID_B2();
        SYM_IMCO_DRWR_ID_B2();
        SYM_IMCO_PRES_BK_ID_B2();
        SYM_IMCO_REMIT_BK_ID_B2();
        SYM_IMCO_REIM_SWIFT_TAG();
        SYM_IMCO_PRE_SWIFT_TAG();

        SYT_Init_Notes(document.MAINFORM.COLL_BK_NOTES.name);
        SYM_IMCO_CAL_COLL_BK_ID_back();
        oTAG_79 = document.MAINFORM.NARR;
        oTAG_79.rows = (document.MAINFORM.MESG_TYPE.value == "MT499") ? 198 : 35;
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_IMCO_BANK_CUT_FLG = function() {
    try {
        if (document.MAINFORM.RV_FOR_ACCT_CUST_BK.value == 'Bank') {
            document.MAINFORM.DRWE_CORR_MED.value = 'None';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_CORR_MED, "P");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "M");
        }

        if (document.MAINFORM.RV_FOR_ACCT_CUST_BK.value == 'Customer') {
            document.MAINFORM.PRES_BK_CORR_MED.value = 'None'; // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_CORR_MED, "M");



        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*SYF_IMCO_BANK_CUT_FLG", e);
    }
}

csFuncLevelProto.SYF_IMCO_Chg_Tracer = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['IMCO_TRCR_CHG'];
        amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*SYF_IMCO_Chg_Tracer", e);
    }
}

csFuncLevelProto.SYF_IMCO_Field = function() {
    try {
        var oTAG_79; // Utility Auto Fix Comments
        oTAG_79 = document.MAINFORM.NARR;
        oTAG_79.rows = (document.MAINFORM.MESG_TYPE.value == "MT499") ? 198 : 35;
        if (oTAG_79.value.length > 0) {

            SYS_CheckTextAreaLength(oTAG_79);

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*SYF_IMCO_Field", e);
    }
}

csFuncLevelProto.SYF_IMCO_Get_TEMP = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_NO.value;
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*SYF_IMCO_Get_TEMP", e);
    }
}

csFuncLevelProto.SYF_IMCO_MAX_TRACER_NO = function() {
    try {
        if (document.MAINFORM.SEND_TRACER.value == 'YES') {
            if (SYS_BeInt(document.MAINFORM.NO_OF_TRACERS.value) > SYS_BeInt(document.MAINFORM.MAX_TRACER_NO.value)) {
                alert("Maximum Number of Tracers exceeded,do you wish to send the Tracer message?");
            }
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*SYF_IMCO_MAX_TRACER_NO", e);
    }
}

csFuncLevelProto.SYF_IMCO_MESSAG_TYPE = function() {
    try {
        if ((document.MAINFORM.MESG_TYPE.value == 'MT499' || document.MAINFORM.MESG_TYPE.value == 'MT999' || document.MAINFORM.MESG_TYPE.value == 'MT420') && document.MAINFORM.PRES_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, "M");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_REF, "M");


        }
        if (document.MAINFORM.MESG_TYPE.value == 'MT499' || document.MAINFORM.MESG_TYPE.value == 'MT999') {
            SYT_ChangeFldClass(document.MAINFORM.BK_TO_BK_INFO, "P");
            document.MAINFORM.BK_TO_BK_INFO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NARR, "M");
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, "P");
            document.MAINFORM.NARR_MAIL.value = '';
            document.MAINFORM.PRES_BK_CORR_MED.value = 'SWIFT';
        }
        if (document.MAINFORM.MESG_TYPE.value == 'MT420') {
            SYT_ChangeFldClass(document.MAINFORM.BK_TO_BK_INFO, "O");
            SYT_ChangeFldClass(document.MAINFORM.NARR, "O");
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, "O");
            document.MAINFORM.PRES_BK_CORR_MED.value = 'SWIFT';
        }
        if (document.MAINFORM.MESG_TYPE.value == 'Mail' || document.MAINFORM.MESG_TYPE.value == 'Telex' || document.MAINFORM.MESG_TYPE.value == 'Email' || document.MAINFORM.MESG_TYPE.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.NARR, "P");
            document.MAINFORM.NARR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, "M");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_REF, "O");
        }
        if (document.MAINFORM.MESG_TYPE.value == 'None') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_REF, "O");
            SYT_ChangeFldClass(document.MAINFORM.BK_TO_BK_INFO, "P");
            document.MAINFORM.BK_TO_BK_INFO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NARR, "P");
            document.MAINFORM.NARR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, "P");
            document.MAINFORM.NARR_MAIL.value = '';
            document.MAINFORM.PRES_BK_CORR_MED.value = 'None';
        }

        if (document.MAINFORM.PRES_BK_CORR_MED.value != 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_REF, "O");

        }
        if (document.MAINFORM.MSG_TYPE.value == 'Mail' && document.MAINFORM.RV_FOR_ACCT_CUST_BK.value == 'Bank') {
            document.MAINFORM.PRES_BK_CORR_MED.value = 'Mail';

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*SYF_IMCO_MESSAG_TYPE", e);
    }
}

csFuncLevelProto.SYF_IMCO_REMOVE_MESSG_OPTION = function() {
    try {
        var COLL_TYPE; // Utility Auto Fix Comments
        COLL_TYPE = document.MAINFORM.COLL_TYPE.value;
        if (COLL_TYPE == 'Documentary Through Bank' || COLL_TYPE == 'Clean Through Bank') {
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, "Email");
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'Fax');
            if (document.MAINFORM.RV_FOR_ACCT_CUST_BK.value == 'Bank') {
                SYT_AddOption(document.MAINFORM.MESG_TYPE.name, "MT420", "MT420");
                SYT_AddOption(document.MAINFORM.MESG_TYPE.name, "MT499", "MT499");
                SYT_AddOption(document.MAINFORM.MESG_TYPE.name, "MT999", "MT999");
            } else if (document.MAINFORM.RV_FOR_ACCT_CUST_BK.value == 'Customer') {
                SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, "MT420");
                SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'MT499');
                SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'MT999');
            }
        } else {
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, "MT420");
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'MT499');
            SYT_RemoveOption(document.MAINFORM.MESG_TYPE.name, 'MT999');

        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*SYF_IMCO_REMOVE_MESSG_OPTION", e);
    }
}

csFuncLevelProto.SYF_IMCO_SEND_TRACER = function() {
    try {
        if (document.MAINFORM.SEND_TRACER.value == 'YES') {
            SYT_ChangeFldClass(document.MAINFORM.TRACER_DATE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INTERVAL_DAYS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.NXT_TRCR_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MAX_TRACER_NO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MESG_TYPE, "M");
            document.MAINFORM.TRACER_DATE.value = SYS_DATE; //FOR BUG 974
            SYM_IMCO_Cal_NXT_TRCR_DT(); //FOR BUG 974
            SYT_ChangeFldClass(document.MAINFORM.RV_FOR_ACCT_CUST_BK, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.MESG_TYPE, "P");
            document.MAINFORM.MESG_TYPE.value = 'None';
            document.MAINFORM.TRACER_DATE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TRACER_DATE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INTERVAL_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NXT_TRCR_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.MAX_TRACER_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RV_FOR_ACCT_CUST_BK, 'B');
        }
        SYF_IMCO_MESSAG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*SYF_IMCO_SEND_TRACER", e);
    }
}

csFuncLevelProto.SYF_IMCO_TRACER_DAT = function() {
    try {
        var nDays; // Utility Auto Fix Comments
        nDays = document.MAINFORM.INTERVAL_DAYS.value;
        if (document.MAINFORM.INTERVAL_DAYS.value != "") {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, SYS_BUSI_DATE, nDays, 'SYF_IMCO_TRACER_DT_back()', 'A', 'N', 'Y');


        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*SYF_IMCO_TRACER_DAT", e);
    }
}

csFuncLevelProto.SYF_IMCO_TRACER_DT_back = function(matdt) {
    try {
        document.MAINFORM.NXT_TRCR_DT.value = matdt;
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*SYF_IMCO_TRACER_DT_back", e);
    }
}

csFuncLevelProto.SYF_IMCO_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*SYF_IMCO_getDOdata_AdviceForBankCust", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ADD1_onchange = function(event) {
    try {
        SYM_IMCO_CHK_COLL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_COLL_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ADD2_onchange = function(event) {
    try {
        SYM_IMCO_CHK_COLL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_COLL_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ADD3_onchange = function(event) {
    try {
        SYM_IMCO_CHK_COLL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_COLL_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_CAL_COLL_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_COLL_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_NM_onchange = function(event) {
    try {
        SYM_IMCO_CHK_COLL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_COLL_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_CAL_COLL_BK_ID_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_COLL_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_SQL_COLL_BK_SW_ADD();
        SYM_IMCO_CHK_COLL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_COLL_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_NO_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_COLL_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_TYPE_onchange = function(event) {
    try {
        SYF_IMCO_REMOVE_MESSG_OPTION();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_COLL_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_C_MAIN_REF_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRWE_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_NM();
        SYF_IMCO_Chg_Tracer();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRWE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRWE_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRWE_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRWR_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRWR_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRWR_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRWR_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_INTERVAL_DAYS_onchange = function(event) {
    try {
        SYF_IMCO_TRACER_DAT();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_INTERVAL_DAYS_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_MAX_TRACER_NO_onchange = function(event) {
    try {
        SYF_IMCO_MAX_TRACER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_MAX_TRACER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_MESG_TYPE_onchange = function(event) {
    try {
        SYF_IMCO_SEND_TRACER();
        SYF_IMCO_MESSAG_TYPE();
        SYF_IMCO_Field();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_MESG_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_NXT_TRCR_DT_onchange = function(event) {
    try {
        SYS_CheckHoliday('CNTY_CODE', document.MAINFORM.NXT_TRCR_DT.name, '', '');
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_NXT_TRCR_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        //SYF_IMCO_MESSAG_TYPE();
        SYM_IMCO_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_PRES_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_NM();
        SYM_IMCO_PRES_BK_ID_M();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_PRES_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_PRES_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_PRES_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_PRES_BK_ID();
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_PRES_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_COR_MED_onchange = function(event) {
    try {
        SYM_IMCO_REMIT_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_REMIT_BK_COR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_REMIT_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_REMIT_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_REMIT_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_REMIT_BK_ID();
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_REMIT_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_RV_FOR_ACCT_CUST_BK_onchange = function(event) {
    try {
        SYF_IMCO_REMOVE_MESSG_OPTION();
        SYF_IMCO_BANK_CUT_FLG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_RV_FOR_ACCT_CUST_BK_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_SEND_TRACER_onchange = function(event) {
    try {
        SYF_IMCO_MAX_TRACER_NO();
        SYF_IMCO_SEND_TRACER();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_SEND_TRACER_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_TRACER_DATE_onchange = function(event) {
    try {
        SYF_IMCO_TRACER_DAT();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_TRACER_DATE_onchange", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_CHG_VALUE_DATE_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_CAL_COLL_BK_ID_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_COLL_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_SQL_COLL_BANK();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_COLL_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRWE_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRWE_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRWR_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWR_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRWR_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRWR_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRW_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_DRW_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_PRES_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_PRES_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_PRES_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_REMIT_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_REMIT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_REMIT_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_REMIT_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_button1_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_button2_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_button3_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_button4_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_button5_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_button6_onclick", e);
    }
}

csFuncLevelProto.FLD_IMCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IMCO_Tracer.js*FLD_IMCO_view_1_onclick", e);
    }
}