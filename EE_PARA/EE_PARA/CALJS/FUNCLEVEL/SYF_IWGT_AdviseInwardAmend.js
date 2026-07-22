var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_CLERK_ID();
        SYT_CHG_VOUCHER();


        //added by zoe 20090323 for new balance transfer to
        document.MAINFORM.TEMP_NEW_GTEE_BAL.value = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value) + SYS_BeFloat(document.MAINFORM.INC_AMT.value) - SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        document.MAINFORM.TEMP_NEW_GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.TEMP_NEW_GTEE_BAL.value);
        if (document.MAINFORM.NEW_EXPIRY_PLC.value != "") {
            document.MAINFORM.TEMP_EXPIRY_PLC_NEW.value = document.MAINFORM.NEW_EXPIRY_PLC.value;
        } else {

            document.MAINFORM.TEMP_EXPIRY_PLC_NEW.value = document.MAINFORM.EXPIRY_PLC.value;
        }
        if (document.MAINFORM.NEW_EXPIRY_DT.value != "") {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
        } else {

            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
        }
        SYT_LIAB_VOUCHER();
        Cal_MSG_TYPE();
        SYF_Temp_Fields_AMD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.CURRNT_STATUS.value = 'Amendment';
        document.MAINFORM.NXT_STATUS.value = 'Decision';
        document.MAINFORM.CLS_FLG.value = 'NO';
        SYF_IWGT_CAL_BENE_CONST_REQ();
        SYF_IWGT_CAL_TEMP_NEW_GTEE_BAL();
        //SYF_IWGT_Cal_AMD_DETAILS();

        document.MAINFORM.TEMP_ASSET_ACNO.value = document.MAINFORM.ASSET_ACNO.value;
        document.MAINFORM.TEMP_LIAB_ACNO.value = document.MAINFORM.LIAB_ACNO.value;

        SYF_IWGT_MPO_ACNO_Fields();
        document.MAINFORM.APPL_CUST_BK.value = 'Bank';
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYM_IWGT_MPO_APLB_RULE_NARR();
        SYT_ShowBlankRow('APPL_BRCH_blankrow', 2);

        SYF_IWGT_MPO_AMD_DTL_OUT767();
        SYF_IWGT_MPO_SEND_TO_RCV_OUT767();
        IWGT_APPL_BRCH_GTEE();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.RCV_FM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.CONF_BK_NOTES.name);

        //tracery add for 1471

        SYM_IWGT_Chg_Screen_local();
        Chg.Screen.mapForeignCust("APPL_ID", "APPL_NM");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        //tracery add for 1471
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'IQ') {
            CHG_setAllCollCcy(SYS_LOCAL_CCY); //add by tracery for charge voucher - credit ccy
            SYT_Set_TRXCCY2CHG(); //add by tracery for charge voucher - mapping trx ccy to unpaid ccy
            document.MAINFORM.CHG_TRX_DATE.value = SYS_BUSI_DATE; //for #1189
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY(); //add by tracery for charge voucher - debit ccy
            SYM_IWGT_Chg_Calculate_AmendComm();
            SYM_IWGT_Chg_Calculate_POST();
            SYM_IWGT_Chg_Calculate_Other();
            SYM_IWGT_Chg_Calculate_SWIFT();
            SYM_IWGT_Chg_Calculate_courier();
            CHG_setAllChargeAt("1");
        }


        SYM_IWGT_MPO_SEND_TO_CORR_MED();
        SYF_IWGT_MPO_BENE_CONST_REQ();
        SYM_IWGT_MPO_RCV_FM_BK_CORR_MED();
        SYT_ChangeFldClass(document.MAINFORM.RCV_FM_BK_CORR_MED, 'M');
        SYF_IWGT_LIMITE_FIELD();

        CHG_DefCharge_chargeAtOnchange();

        if (document.MAINFORM.PURP_OF_MESS_AMD.value == 'ISCA' || document.MAINFORM.PURP_OF_MESS_AMD.value == 'ICCA') {
            EEHtml.getElementById('S').style.display = '';
            SYT_EnableDivClass('S_div');
        } else {
            EEHtml.getElementById('S').style.display = 'none';
            SYT_DisableDivClass('S_div');
        }
        SYT_DisableDivClass('B_div');
        FLD_IWGT_APPLY_FLG_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.GTEE_REF_NUM.value;
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_CAL_BENE_CONST_REQ = function() {
    try {
        //added by zoe 20090323
        var nDays = SYS_GetSubDays(document.MAINFORM.NEW_EXPIRY_DT.name, document.MAINFORM.EXPIRY_DT.name);

        if (SYS_BeFloat(document.MAINFORM.DEC_AMT.value) > 0 || nDays >= 0) {
            document.MAINFORM.BENE_CONST_REQ.value = "YES";
        } else {
            document.MAINFORM.BENE_CONST_REQ.value = "NO";
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_CAL_NEW_GTEE_AMT = function() {
    try {
        //added by zoe 20090323
        var NEW_GTEE_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value) + SYS_BeFloat(document.MAINFORM.INC_AMT.value) - SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        document.MAINFORM.NEW_GTEE_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, NEW_GTEE_AMT);
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_CAL_TEMP_NEW_GTEE_BAL = function() {
    try {
        document.MAINFORM.TEMP_NEW_GTEE_BAL.value = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value) + SYS_BeFloat(document.MAINFORM.INC_AMT.value) - SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        document.MAINFORM.TEMP_NEW_GTEE_BAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.TEMP_NEW_GTEE_BAL.value);
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_COUNTER_GTEE_FLG = function() {
    try {
        if (document.MAINFORM.PURP_OF_MESS_AMD.value == 'ISCA' || document.MAINFORM.PURP_OF_MESS_AMD.value == 'ICCA') {
            EEHtml.getElementById('S').style.display = '';
            SYT_EnableDivClass('S_div');
        } else {
            EEHtml.getElementById('S').style.display = 'none';
            document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
            SYT_DisableDivClass('S_div');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_AMD_DETAILS = function() {
    try {
        if (document.MAINFORM.AMD_DTL_TEMP.value != '') {
            document.MAINFORM.AMD_DTL_OUTTLX.value = document.MAINFORM.AMD_DTL_TEMP.value;
        }

        if (document.MAINFORM.X767_BKTOBK_INFO72.value != '') {
            document.MAINFORM.SEND_TO_RCV_OUT767.value = document.MAINFORM.X767_BKTOBK_INFO72.value;
        }

        if (document.MAINFORM.AMD_NON_STD_WORDNG.value != '') {
            document.MAINFORM.AMD_DTL_OUT767.value = document.MAINFORM.AMD_NON_STD_WORDNG.value;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_CalculateChg_Amd = function() {
    try {
        if (document.MAINFORM.SEND_TO_CORR_MED.value == 'SWIFT') {
            SYM_IWGT_Chg_Calculate_SWIFT();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_Cal_X768_DATE_30_AMD = function() {
    try {
        //if SEND_MT768_FLG is Yes, X768_DATE_30 = AMEND DATE

        if (document.MAINFORM.SEND_MT768_FLG.value == 'Y') {
            document.MAINFORM.X768_DATE_30.value = document.MAINFORM.AMD_DT.value;
        } else {
            document.MAINFORM.X768_DATE_30.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_LIMITE_FIELD = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.INC_AMT.value) > 0) {

            SYT_ChangeFldClass(document.MAINFORM.GTEE_RV_FLG, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.GTEE_RV_FLG, 'P');

        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_ACNO_Fields = function() {
    try {
        //Add by jane at 2010-2-4
        if (SYS_BeFloat(document.MAINFORM.INC_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.LIAB_ACNO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LIAB_ACNO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_AMD_DTL_OUT767 = function() {
    try {
        if (document.MAINFORM.SEND_TO_CORR_MED.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUT767, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUTTLX, 'P');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUT767, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUTTLX, 'M');

            if (document.MAINFORM.SEND_TO_CORR_MED.value == "None") {
                SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUTTLX, 'P');
                SYT_ChangeFldClass(document.MAINFORM.AMD_DTL_OUT767, 'P');

            }
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_BENE_CONST_REQ = function() {
    try {
        //added by zoe20090323
        var nDays = SYS_GetSubDays(document.MAINFORM.NEW_EXPIRY_DT.name, document.MAINFORM.EXPIRY_DT.name);

        if (SYS_BeFloat(document.MAINFORM.DEC_AMT.value) > 0 || nDays > 0) {
            SYT_ChangeFldClass(document.MAINFORM.BENE_CONST_REQ, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BENE_CONST_REQ, "M");
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_DEC_AMT = function() {
    try {
        //MPO_DEC_AMT

        SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'O');
        SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'O');

        if (document.MAINFORM.INC_AMT.value != 0) {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_DEC_AMT_onblur = function() {
    try {
        //onBlur, if (DEC_AMT == "") {ChangeFieldClass(DEC_AMT,'O');}

        if (document.MAINFORM.DEC_AMT.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_DEC_AMTinit = function() {
    try {
        var incAmt = SYS_BeFloat(document.MAINFORM.INC_AMT.value);

        if (incAmt != 0) {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_INC_AMT = function() {
    try {
        //MPO_INC_AMT

        SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'O');
        SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'O');

        if (document.MAINFORM.DEC_AMT.value != 0) {
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_INC_AMT_onblur = function() {
    try {
        //onBlur, if (INC_AMT == "") {ChangeFieldClass(DEC_AMT,'O');}

        if (document.MAINFORM.INC_AMT.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_INC_AMTinit = function() {
    try {
        var decAmt = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);

        if (decAmt != 0) {
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'P');
        } else {

            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_MPO_SEND_TO_RCV_OUT767 = function() {
    try {
        //If Send to Bank Correspondence medium is SWIFT, this field is optional, otherwise protected.

        if (document.MAINFORM.SEND_TO_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_OUT767, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_OUT767, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_check_DEC_AMT_LOCAL = function() {
    try {
        var DEC_AMT_LOCAL;
        var GTEE_AMT_LOCAL;
        var GTEE_BAL_LOCAL;
        DEC_AMT_LOCAL = SYS_BeFloat(document.MAINFORM.DEC_AMT_LOCAL.value);
        GTEE_AMT_LOCAL = SYS_BeFloat(document.MAINFORM.GTEE_AMT_LOCAL.value);
        GTEE_BAL_LOCAL = SYS_BeFloat(document.MAINFORM.GTEE_BAL_LOCAL.value);
        if (DEC_AMT_LOCAL > GTEE_AMT_LOCAL || DEC_AMT_LOCAL > GTEE_BAL_LOCAL) {
            SYS_CheckError(document.MAINFORM.DEC_AMT_LOCAL, "Decrease Amount should between Guarantee Amount and Guarantee Balance!");
            document.MAINFORM.DEC_AMT_LOCAL.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.SYF_IWGT_getDOdata_AdviceForBankCust = function() {
    try {
        SYS_GetDataForDO_S('AdviceForBankCust');
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_BK_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ID_onchange = function() {
    try {
        if (document.MAINFORM.AC_WT_BK_ID.value != "") {
            SYS_GetCUBK('ACCT_WITH_BK', 'AC_WT_BK_ID', 'SYM_IWGT_Cal_AC_BK_SW_TAG()');
        }
        SYM_IWGT_Clear_AC_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_AC_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD1_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD2_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD3_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_CORR_MED_onchange = function() {
    try {
        SYM_IWGT_ADV_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_onchange = function() {
    try {
        if (document.MAINFORM.ADV_BK_ID.value == '') {
            document.MAINFORM.ADV_BK_NM.value = '';
            document.MAINFORM.ADV_BK_ADD1.value = '';
            document.MAINFORM.ADV_BK_ADD2.value = '';
            document.MAINFORM.ADV_BK_ADD3.value = '';
            document.MAINFORM.ADV_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_BK_TLX.value = '';
            document.MAINFORM.ADV_BK_NOTES.value = '';
            document.MAINFORM.ADV_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_BK_SW_TAG.value = '';
            document.MAINFORM.ADV_BK_CORR_MED.value = 'None';
        } else {
            SYS_GetCUBK('ADV_BK_ID', 'ADV_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_BK_SW_TAG();
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD1_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD2_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD3_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_CORR_MED_onchange = function() {
    try {
        SYM_IWGT_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ID_onchange = function() {
    try {
        if (document.MAINFORM.ADV_THU_BK_ID.value == '') {
            document.MAINFORM.ADV_THU_BK_NM.value = '';
            document.MAINFORM.ADV_THU_BK_ADD1.value = '';
            document.MAINFORM.ADV_THU_BK_ADD2.value = '';
            document.MAINFORM.ADV_THU_BK_ADD3.value = '';
            document.MAINFORM.ADV_THU_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_TLX.value = '';
            document.MAINFORM.ADV_THU_BK_NOTES.value = '';
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = '';
            document.MAINFORM.ADV_THU_BK_CORR_MED.value = 'None';
        } else {
            SYS_GetCUBK('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_CHK_ADV_THU_BK_SW_TAG();
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APLB_RULE_onchange = function() {
    try {
        SYM_IWGT_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPLY_FLG_onchange = function() {
    try {
        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('Z').style.display = '';
            SYT_EnableDivClass('Z_div');
            var time = SYS_TIME;
            document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
            document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
        } else {
            EEHtml.getElementById('Z').style.display = 'none';
            SYT_DisableDiv('Z_div');

        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_BANK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CORR_MED1_onchange = function() {
    try {
        SYM_IWGT_MPO_APPL_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_CUST_BK_onchange = function() {
    try {
        SYM_IWGT_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_Appl_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_MAIL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_APPL_SW_TAG();
        SYM_IWGT_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD1_onchange = function() {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD2_onchange = function() {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD3_onchange = function() {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_SW_ADD_onchange = function() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 11 || document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = document.MAINFORM.AVAL_WT_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_IWGT_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CUST_BK_onchange = function() {
    try {
        SYM_IWGT_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_Bene_All();
        SYM_IWGT_Cal_ADD_BUTTON();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim") {
            var obj = EEHtml.getElementById('CHG_FLD_LOCAL_CHG_TOTAL_CUST_PAY_AMT');
            if (obj) {
                SYM_IWGT_Chg_Screen_local();
                SYM_IWGT_Chg_Calculate_POST();
                SYM_IWGT_Chg_Calculate_SWIFT();
            }
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_MAIL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_BENE_SW_TAG();
        SYM_IWGT_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_AMT_MT768_onchange = function() {
    try {
        if (document.MAINFORM.CHG_AMT_MT768.value < 0) {
            document.MAINFORM.CHG_AMT_MT768.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_BAL_CCY_onchange = function() {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_CHARGE_AT_onchange = function() {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_ALL_CHARGE_FOR_onchange = function() {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_COLLECT_CCY_onchange = function() {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function() {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_GETAC_BTN_onchange = function() {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ADD1_onchange = function() {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ADD2_onchange = function() {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ADD3_onchange = function() {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ID_onchange = function() {
    try {
        SYM_IWGT_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_NM_onchange = function() {
    try {
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_SW_ADD_onchange = function() {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 11 || document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {

            if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.CONF_BK_SW_ADD.value = document.MAINFORM.CONF_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_IWGT_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_COUNTR_GTEE_onchange = function() {
    try {
        SYM_IWGT_Cal_Counter_Guarantee_Information();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DEC_AMT_onchange = function() {
    try {
        SYF_IWGT_MPO_INC_AMT();
        SYF_IWGT_CAL_BENE_CONST_REQ();
        SYF_IWGT_MPO_BENE_CONST_REQ();
        SYF_IWGT_CAL_NEW_GTEE_AMT();
        SYF_IWGT_CAL_TEMP_NEW_GTEE_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_GTEE_AMT, "onchange");
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIVERY_TO_onchange = function() {
    try {
        if (document.MAINFORM.DELIVERY_TO.value != '') {
            document.MAINFORM.DELIVERY_TO_CODE.value = '/' + document.MAINFORM.DELIVERY_TO.value + '/';
            if (document.MAINFORM.DELIVERY_TO.value == 'OTHR') {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'O');
            }
        } else {
            document.MAINFORM.DELIVERY_TO_CODE.value = '';
            document.MAINFORM.DELIVERY_TO_NM_ADD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DELIVERY_TO_AMD_CODE_onchange = function() {
    try {
        if (document.MAINFORM.DELIVERY_TO_AMD_CODE.value != '') {
            document.MAINFORM.DELIVERY_TO_CODE.value = '/' + document.MAINFORM.DELIVERY_TO_AMD_CODE.value + '/';
            if (document.MAINFORM.DELIVERY_TO_AMD_CODE.value == 'OTHR') {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'O');
            }
        } else {
            document.MAINFORM.DELIVERY_TO_CODE.value = '';
            document.MAINFORM.DELIVERY_TO_NM_ADD_AMD.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_EXPIRY_DT_onchange = function() {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_BAL_onchange = function() {
    try {
        SYF_IWGT_Cal_CalculateChg_Amd();
        SYM_IWGT_Chg_Calculate_AmendComm();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_GTEE_CCY_onchange = function() {
    try {
        SYF_IWGT_Cal_CalculateChg_Amd();
        SYM_IWGT_Chg_Calculate_AmendComm();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INC_AMT_onchange = function() {
    try {
        SYF_IWGT_MPO_ACNO_Fields();
        //Add by jane at 2010-2-4
        SYF_IWGT_MPO_DEC_AMT();
        SYF_IWGT_CAL_NEW_GTEE_AMT();
        SYF_IWGT_CAL_TEMP_NEW_GTEE_BAL();
        SYF_IWGT_LIMITE_FIELD();
        EEHtml.fireEvent(document.MAINFORM.NEW_GTEE_AMT, "onchange");
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_INWARD_RCV_DT_onchange = function() {
    try {
        SYM_IWGT_Check_INWARD_RCV_DT();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_NEW_Bene_All();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_LOCAL_onchange = function() {
    try {
        SYM_IWGT_CAL_NEW_BENE_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_NEW_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_NEW_BENE_SW_TAG();
        SYM_IWGT_Cal_NEW_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_EXPIRY_TYPE_onchange = function() {
    try {
        var type = document.MAINFORM.NEW_EXPIRY_TYPE.value;
        if (type == 'FIXD') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT, 'M');
            document.MAINFORM.NEW_EXPIRY_COND.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND, 'P');
        } else if (type == 'COND') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND, 'M');
        } else {
            document.MAINFORM.NEW_EXPIRY_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT, 'P');
            document.MAINFORM.NEW_EXPIRY_COND.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_EXPIRY_TYPE_LOCAL_onchange = function() {
    try {
        var type = document.MAINFORM.NEW_EXPIRY_TYPE_LOCAL.value;
        if (type == 'FIXD') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT_LOCAL, 'M');
            document.MAINFORM.NEW_EXPIRY_COND_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND_LOCAL, 'P');
        } else if (type == 'COND') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT_LOCAL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND_LOCAL, 'M');
        } else {
            document.MAINFORM.NEW_EXPIRY_DT_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_DT_LOCAL, 'P');
            document.MAINFORM.NEW_EXPIRY_COND_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_EXPIRY_COND_LOCAL, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_GTEE_AMT_LOCAL_onchange = function() {
    try {
        var value = document.MAINFORM.NEW_GTEE_AMT_LOCAL.value;
        if (SYM_IWGT_CHK_NEG(value)) {
            alert("New Guarantee amount should not accept negative values");
            document.MAINFORM.NEW_GTEE_AMT_LOCAL.value = 0;
        }
        SYM_IWGT_Cal_INC_AMT_DEC_AMT_LOCAL();
        SYF_IWGT_check_DEC_AMT_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_PURP_OF_MESS_AMD_onchange = function() {
    try {
        SYF_IWGT_COUNTER_GTEE_FLG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_RCV_BANK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_CORR_MED_onchange = function() {
    try {
        SYM_IWGT_MPO_RCV_FM_BK_CORR_MED();
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" || SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_RCV_FM_BK_CORR_MED();
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "InwardAdviseGtee" || SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {

            SYM_IWGT_Cal_RCV_FM_BK_CORR_MED();
        }
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_Instructing_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_MAIL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_RCV_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_RCV_FM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING_BK_SW_ADD();
        SYM_IWGT_Cal_INSTRCTING_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_MT768_FLG_onchange = function() {
    try {
        SYF_IWGT_Cal_X768_DATE_30_AMD();
        SYM_IWGT_MPO_X768_DATE_30();
        SYM_IWGT_Cal_RCV_FM_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_onchange = function() {
    try {
        SYM_IWGT_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD2_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD3_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_CORR_MED_onchange = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == "RegInwardClaim" && SYS_ORG_FUNCTION_SHORT_NAME == "AmendInwardClaim" && SYS_ORG_FUNCTION_SHORT_NAME == "SettleClaim") {
            SYM_IWGT_BENE_MAIL_BTN();
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "AdviseInAmend") {
            SYM_IWGT_MPO_AMD_DTL_OUT767();

        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == "InwardAdviseGtee") {
            SYM_IWGT_MPO_X760_DETL_77C();
        }
        SYM_IWGT_MPO_SEND_TO_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_onchange = function() {
    try {
        SYM_IWGT_Cal_Send_All();
        SYM_IWGT_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_MAIL_ADD_ORDERNO_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_NM_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_SW_ADD_onchange = function() {
    try {
        SYM_IWGT_Cal_SEND_BK_SW_ADD();
        SYM_IWGT_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_AC_WT_BK_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AC_WT_BK_NM_BTN_onclick = function(event) { 
    try { 
        SYM_IWGT_Cal_AC_WT_BK_ADD();
    } catch (e) { 
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js*FLD_IWGT_AC_WT_BK_NM_BTN_onclick", e); 
    } 
} 

csFuncLevelProto.FLD_IWGT_ADV_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_ID_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THRU_BK_ID_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_MULT_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ADV_THU_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_ID_MAIL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_AC_MRGN_BTN_onclick = function() {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
                SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_APPL_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_APPL();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_APPL_MAIL_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_ASSET_ACNO_BTN_onclick = function() {
    try {
        /*
        var SQL="C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY+ "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO',SQL);
        */
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ADD_BTN_onclick = function() {
    try {
        //SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('AVAL_WT_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_AVAL_WT_BK_ID_BTN_onclick = function() {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_CORR_MED_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_BENE_MAIL_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_VALUE_DATE_onclick = function() {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CONF_BK_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_SQL_CONF_BANK();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_CHG_GETAC_BTN_onclick = function(event) { 
    try { 
        CHG_Get_AC(); 
    } catch (e) { 
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js*FLD_IWGT_CHG_GETAC_BTN_onclick", e); 
    } 
} 

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_NEW_BENE();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_NEW_BENE_ID_BTN_LOCAL_onclick = function() {
    try {
        SYM_IWGT_SQL_NEW_BENE_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_RCV_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_INSTRCTING();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_RCV_FM_BK_MAIL_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_RCV_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ADD1_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_ID_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_Send();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_SEND_TO_MAIL_ADD1_BTN_onclick = function() {
    try {
        SYM_IWGT_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}

csFuncLevelProto.FLD_IWGT_view_1_onclick = function() {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js", e);
    }
}


csFuncLevelProto.SYF_Temp_Fields_AMD = function() {
    try {

        if (document.MAINFORM.NEW_BENE_ID.value != '') {
            document.MAINFORM.TEMP_BENE_ID.value = document.MAINFORM.NEW_BENE_ID.value;
        } else {
            document.MAINFORM.TEMP_BENE_ID.value = document.MAINFORM.BENE_ID.value;
        }
        if (document.MAINFORM.NEW_BENE_NM.value != '') {
            document.MAINFORM.TEMP_BENE_NM.value = document.MAINFORM.NEW_BENE_NM.value;
        } else {
            document.MAINFORM.TEMP_BENE_NM.value = document.MAINFORM.BENE_NM.value;
        }
        
        if (document.MAINFORM.NEW_BENE_ADD1.value != '') {
            document.MAINFORM.TEMP_BENE_ADD1.value = document.MAINFORM.NEW_BENE_ADD1.value;
        } else {
            document.MAINFORM.TEMP_BENE_ADD1.value = document.MAINFORM.BENE_ADD1.value;
        }
        if (document.MAINFORM.NEW_BENE_ADD2.value != '') {
            document.MAINFORM.TEMP_BENE_ADD2.value = document.MAINFORM.NEW_BENE_ADD2.value;
        } else {
            document.MAINFORM.TEMP_BENE_ADD2.value = document.MAINFORM.BENE_ADD2.value;
        }
        if (document.MAINFORM.NEW_BENE_ADD3.value != '') {
            document.MAINFORM.TEMP_BENE_ADD3.value = document.MAINFORM.NEW_BENE_ADD3.value;
        } else {
            document.MAINFORM.TEMP_BENE_ADD3.value = document.MAINFORM.BENE_ADD3.value;
        }
        if (document.MAINFORM.NEW_EXPIRY_COND.value != '') {
            document.MAINFORM.TEMP_EXPIRY_PLC_NA.value = document.MAINFORM.NEW_EXPIRY_COND.value;
        } else {
            document.MAINFORM.TEMP_EXPIRY_PLC_NA.value = document.MAINFORM.EXPIRY_COND.value;
        }
        
       if (document.MAINFORM.NEW_EXPIRY_TYPE.value != '') {
            document.MAINFORM.TEMP_TENOR_TYPE.value = document.MAINFORM.NEW_EXPIRY_TYPE.value;
        } else {
            document.MAINFORM.TEMP_TENOR_TYPE.value = document.MAINFORM.EXPIRY_TYPE.value;
        }

       if (document.MAINFORM.NEW_EXPIRY_DT.value != '') {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
        } else {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
        }


}catch (e) {
        DisExcpt("SYF_IWGT_AdviseInwardAmend.js*SYF_Temp_Fields_AMD", e);
    }
}