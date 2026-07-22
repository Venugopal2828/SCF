var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        EEHtml.getElementById('S').style.display = 'none';
        document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
        SYT_DisableDivClass('S_div');
        document.MAINFORM.AMD_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.AMEND_DETAILS_TEMP.value = document.MAINFORM.AMD_DETAILS.value;
        document.MAINFORM.RELA_REF_NO.value = document.MAINFORM.C_MAIN_REF.value;

        document.MAINFORM.TEMP_GTEE_AMT.value = document.MAINFORM.GTEE_AMT.value;
        document.MAINFORM.TEMP_GTEE_BAL.value = document.MAINFORM.GTEE_BAL.value;
        document.MAINFORM.NEW_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
        SYM_GTEE_Cal_TEMP_LIAB_ACNO();
        SYM_GTEE_getSEND_TO_REF();
        SYF_GTEE_NO_OF_AMD();
        SYF_GTEE_AMD_REF();


        SYM_GTEE_APLB_RULE();
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_BENE_SW_TAG();
        SYF_GTEE_Cal_ACPT_REJ();
        SYF_GTEE_Cal_SW_FORM();
        SYF_GTEE_check_DEC_AMT();

        document.MAINFORM.AMD_DETAILS.value = "";
        document.MAINFORM.NEW_GTEE_AMT.value = document.MAINFORM.GTEE_AMT.value;
        //add by amy in 20110527
        document.MAINFORM.NEW_BASE_BAL.value = document.MAINFORM.BASE_BAL.value;
        document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, 0);
        document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, 0);
        //add by amy in 20120611
        document.MAINFORM.TEMP_COMM_START_DT.value = document.MAINFORM.COMM_START_DT.value;
        document.MAINFORM.TEMP_COMM_END_DT.value = document.MAINFORM.COMM_END_DT.value;
        document.MAINFORM.TEMP_COMM_DT.value = document.MAINFORM.COMM_DT.value;
        document.MAINFORM.TEMP_NXT_COMM_DT.value = document.MAINFORM.NXT_COMM_DT.value;
        document.MAINFORM.TEMP_TOTAL_ISS_COMM.value = document.MAINFORM.TOTAL_ISS_COMM.value;
        document.MAINFORM.TEMP_CURRENT_COMM.value = document.MAINFORM.CURRENT_COMM.value;
        document.MAINFORM.TEMP_COMM_BAL.value = document.MAINFORM.COMM_BAL.value;
        document.MAINFORM.TEMP_PERIOD.value = document.MAINFORM.PERIOD.value;
        document.MAINFORM.TEMP_NO_OF_PERIODS.value = document.MAINFORM.NO_OF_PERIODS.value;
        document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = "1";
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.name, "P");
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_GETAC_BTN.name, "P");
        document.MAINFORM.APPLY_FLG.value = 'NO';
        document.MAINFORM.FILE_23X_CODE.value = '';
        document.MAINFORM.FILE_23X_NARR.value = '';
        if (document.MAINFORM.PURP_OF_MESS.value == 'ISSU') {
        document.MAINFORM.PURP_OF_MESS_AMD.value = 'ISUA';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_NO_OF_AMD = function() {
    try {

        var no; // Utility Auto Fix Comments
        no = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);
        document.MAINFORM.NO_OF_AMD.value = no + 1;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_AMD_REF = function() {
    try {

        if (document.MAINFORM.NO_OF_AMD.value != '') {
            if (document.MAINFORM.NO_OF_AMD.value < 10) {
                document.MAINFORM.AMD_REF.value = document.MAINFORM.C_MAIN_REF.value + '/0' + document.MAINFORM.NO_OF_AMD.value;
            } else {
                document.MAINFORM.AMD_REF.value = document.MAINFORM.C_MAIN_REF.value + '/' + document.MAINFORM.NO_OF_AMD.value;
            }
        } else {
            document.MAINFORM.AMD_REF.value = document.MAINFORM.C_MAIN_REF.value;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_GTEE_MPO_SEND_TO_RCV_INFO_INIT();
        SYF_GTEE_MPO_SW_FORM_AMD_INIT();
        SYF_GTEE_MPO_COUNTR_GTEE_AMD();
        SYT_ShowBlankRow('INDE', 1);

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.SEND_TO_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);

        SYM_GTEE_MPO_BENE_CORR_MED();
        SYM_GTEE_MPO_SEND_TO_CORR_MED();
        SYM_GTEE_MPO_APPL_SW_TAG();
        SYM_GTEE_MPO_BENE_SW_TAG();
        SYM_GTEE_MPO_INDEMN_SW_TAG();
        SYM_GTEE_MPO_SEND_TO_SW_TAG();
        SYF_GTEE_MPO_ACPT_REJ();
        Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM", "GTEE_CCY");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYM_GTEE_Chg_Calculate_Amd_Comm();
            //edit by amy for chg policy in 20120613
            //SYF_GTEE_Calculate_GTEE_COMM_BY_CHG_POLICY();
            SYM_GTEE_Chg_Calculate_POST();
            SYM_GTEE_Chg_Calculate_SWIFT();
            SYM_GTEE_Chg_Calculate_Other();
            SYM_GTEE_Chg_Calculate_COURIER_CHG();
            SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
            CHG_setAllCollCcy(document.MAINFORM.GTEE_CCY.value);
            CHG_setAllChargeAt('1');
            SYT_Set_TRXCCY2CHG();
        }
        SYF_GTEE_ChangeFldClass();
        SYT_Cal_C_TRANS_CODE();
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_BENE_SW_TAG();
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_SEND_TO_SW_TAG();

        if (document.MAINFORM.PURP_OF_MESS_AMD.value == 'ACNA' || document.MAINFORM.PURP_OF_MESS_AMD.value == 'ADVA') {
        SYT_ChangeFldClass_New('OTH_ADV_BK_REF', 'O');
        }else{
        SYT_ChangeFldClass_New('OTH_ADV_BK_REF', 'B');	
        }

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.SEND_TO_REF.value;
        lbi_LG_IssueParty_Amd_InitFldClass();
        SYM_GTEE_MPO_APPL_CORR_MED1();
        SYM_GTEE_Cal_ADD_BUTTON();
        SYM_GTEE_MPO_INDEMN_CORR_MED();
        SYT_DisableDivClass('C_div');
        SYT_DisableDivClass('I_div');
        SYF_GTEE_MT798_FLG();
        SYF_GTEE_NEW_BENE_INFO();
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_GETAC_BTN.name, "P");
        CHG_DefCharge_chargeAtOnchange();
        FLD_GTEE_NEW_EXPIRY_TYPE_onchange();
        document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = "1";
        FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange();
        SYT_ChangeFldClass_New(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.name, "P");
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CASH_CVR_AMT = function() {
    try {

        var nCASH_CVR_PER; // Utility Auto Fix Comments
        var nNW_GTEE_AMT; // Utility Auto Fix Comments
        var nRATE_CASH_LCY; // Utility Auto Fix Comments
        nNW_GTEE_AMT = SYS_BeFloat(document.MAINFORM.NEW_GTEE_AMT.value);
        nRATE_CASH_LCY = SYS_BeFloat(document.MAINFORM.RT_CASH_COV_LCY.value);
        nCASH_CVR_PER = SYS_BeFloat(document.MAINFORM.CASH_COV_PCT.value) / 100;
        document.MAINFORM.CASH_COV_AMT.value = nNW_GTEE_AMT / nRATE_CASH_LCY * nCASH_CVR_PER;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_NEW_GTEE_AMT_LCY = function() {
    try {

        var NW_GTEE_AMT; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        rate = SYS_BeFloat(document.MAINFORM.RT_TRXCCY_LCY.value);
        NW_GTEE_AMT = SYS_BeFloat(document.MAINFORM.NEW_GTEE_AMT.value);
        amt = NW_GTEE_AMT * rate;
        document.MAINFORM.NEW_GTEE_AMT_LCY.value = SYT_AmtFormat(SYS_LOCAL_CCY, amt);
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CLERK_ID();
        SYT_CHG_VOUCHER();
        SYM_GTEE_getSEND_TO_REF();
        SYT_LIAB_VOUCHER();
        SYM_GTEE_CAL_Temp_fields_AMD();
        document.MAINFORM.AMD_DETAILS.value = document.MAINFORM.AMD_DETAILS.value.toUpperCase();

        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

function SYM_GTEE_CAL_Temp_fields_AMD() {
    try {
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
        if (document.MAINFORM.NEW_EXPIRY_DT.value != '') {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
        } else {
            document.MAINFORM.TEMP_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
        }
        if (document.MAINFORM.NEW_EXPIRY_TYPE.value != '') {
            document.MAINFORM.TEMP_TENOR_TYPE.value = document.MAINFORM.NEW_EXPIRY_TYPE.value;
        } else {
            document.MAINFORM.TEMP_TENOR_TYPE.value = document.MAINFORM.EXPIRY_TYPE.value;
        }
        if (document.MAINFORM.NEW_EXPIRY_COND.value != '') {
            document.MAINFORM.TEMP_EXPIRY_PLC_NA.value = document.MAINFORM.NEW_EXPIRY_COND.value;
        } else {
            document.MAINFORM.TEMP_EXPIRY_PLC_NA.value = document.MAINFORM.EXPIRY_COND.value;
        }
        if (document.MAINFORM.NEW_GTEE_AMT.value != 0) {
            document.MAINFORM.TEMP_GTEE_AMT.value = document.MAINFORM.NEW_GTEE_AMT.value;
            document.MAINFORM.TEMP_GTEE_BAL.value = document.MAINFORM.NEW_GTEE_AMT.value;
        } else {
            document.MAINFORM.TEMP_GTEE_AMT.value = document.MAINFORM.GTEE_AMT.value;
            document.MAINFORM.TEMP_GTEE_BAL.value = document.MAINFORM.GTEE_AMT.value;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYF_GTEE_AmendOutwardOneStep", e);
    }
}


csFuncLevelProto.SYF_GTEE_AMD_DETAILS = function() {
    try {

        var AMD_DETAILS; // Utility Auto Fix Comments
        var AMD_NON_STD_WORDNG; // Utility Auto Fix Comments
        var AMED_DTL_TEMP; // Utility Auto Fix Comments
        var AMEND_DETAILS_TEMP; // Utility Auto Fix Comments
        var GTEE_WORDING_TEMP; // Utility Auto Fix Comments
        var NON_STD_WORDNG; // Utility Auto Fix Comments
        AMD_DETAILS = document.MAINFORM.AMD_DETAILS.value;
        NON_STD_WORDNG = document.MAINFORM.NON_STD_WORDNG.value;
        AMD_NON_STD_WORDNG = document.MAINFORM.AMD_NON_STD_WORDNG.value.toUpperCase();
        AMD_DETAILS = document.MAINFORM.AMD_DETAILS.value; // Utility Auto Fix Comments
        AMED_DTL_TEMP = document.MAINFORM.AMD_DTL_TEMP.value.toUpperCase();
        GTEE_WORDING_TEMP = document.MAINFORM.GTEE_WORDING_TEMP.value;
        AMEND_DETAILS_TEMP = document.MAINFORM.AMEND_DETAILS_TEMP.value;

        if (AMD_DETAILS != "" && AMD_DETAILS != null) {
            if (AMD_NON_STD_WORDNG != "") {
                if (GTEE_WORDING_TEMP != "") {
                    NON_STD_WORDNG = GTEE_WORDING_TEMP + "\n" + "ADDITIONAL AMENDMENT INFORMATION:" + "\n" + AMD_NON_STD_WORDNG;
                } else {
                    NON_STD_WORDNG = "ADDITIONAL AMENDMENT INFORMATION:" + "\n" + AMD_NON_STD_WORDNG;
                }
                if (AMD_DETAILS != "") {
                    AMD_DETAILS = AMEND_DETAILS_TEMP + "\n" + "OTHER AMENDMENT DETAILS:" + "\n" + AMED_DTL_TEMP + "\n" + "WORDING CHANGES ARE AS FOLLOWING:" + "\n" + AMD_NON_STD_WORDNG;
                } else {
                    AMD_DETAILS = AMEND_DETAILS_TEMP + "\n" + "WORDING CHANGES ARE AS FOLLOWING:" + "\n" + AMD_NON_STD_WORDNG;
                }

            } else {
                NON_STD_WORDNG = GTEE_WORDING_TEMP;
                if (AMED_DTL_TEMP != "") {
                    AMD_DETAILS = AMEND_DETAILS_TEMP + "\n" + "OTHER AMENDMENT DETAILS:" + "\n" + AMED_DTL_TEMP;
                } else {
                    AMD_DETAILS = AMEND_DETAILS_TEMP;
                }
            }
        } else {
            if (AMD_NON_STD_WORDNG != "") {
                NON_STD_WORDNG = GTEE_WORDING_TEMP + "\n" + "ADDITIONAL AMENDMENT INFORMATION:" + "\n" + AMD_NON_STD_WORDNG;
                if (AMED_DTL_TEMP != "") {
                    AMD_DETAILS = "OTHER AMENDMENT DETAILS:" + "\n" + AMED_DTL_TEMP + "\n" + "WORDING CHANGES ARE AS FOLLOWING:" + "\n" + AMD_NON_STD_WORDNG;
                } else {
                    AMD_DETAILS = "WORDING CHANGES ARE AS FOLLOWING:" + "\n" + AMD_NON_STD_WORDNG;
                }

            } else {
                NON_STD_WORDNG = GTEE_WORDING_TEMP;
                if (AMED_DTL_TEMP != "") {
                    AMD_DETAILS = "OTHER AMENDMENT DETAILS:" + "\n" + AMED_DTL_TEMP;
                } else {
                    AMD_DETAILS = "";
                }
            }
        }
        document.MAINFORM.AMD_DETAILS.value = AMD_DETAILS;
        document.MAINFORM.NON_STD_WORDNG.value = NON_STD_WORDNG;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_check_DEC_AMT = function() {
    try {

        var DEC_AMT; // Utility Auto Fix Comments
        var GTEE_AMT; // Utility Auto Fix Comments
        var GTEE_BAL; // Utility Auto Fix Comments
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        GTEE_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        GTEE_BAL = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value);
        if (DEC_AMT > GTEE_AMT || DEC_AMT > GTEE_BAL) {
            SYS_CheckError(document.MAINFORM.DEC_AMT, "Decrease Amount should between Guarantee Amount and Guarantee Balance!");
            document.MAINFORM.DEC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_DEC_AMT_ZERO = function() {
    try {

        document.MAINFORM.DEC_AMT.value = 0;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_INC_AMT_ZERO = function() {
    try {

        document.MAINFORM.INC_AMT.value = 0;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_Calculate_Bene = function() {
    try {

        if (document.MAINFORM.BENE_ID_BTN.value == "CUST") {
            SYS_GetCUBK('BENE_ID_CUST', document.MAINFORM.BENE_ID.name, 'SYF_GTEE_Cal_Calculate_Charge');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_Calculate_Charge = function() {
    try {

        SYM_GTEE_Chg_Screen();
        SYM_GTEE_Chg_Calculate_Amd_Comm();
        SYM_GTEE_Chg_Calculate_POST();
        SYM_GTEE_Chg_Calculate_SWIFT();
        SYM_GTEE_Chg_Calculate_Other();
        SYM_GTEE_Chg_Calculate_COURIER_CHG();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_Calculate_Appl = function() {
    try {

        if (document.MAINFORM.APPL_ID_BTN.value == "CUST") {
            SYS_GetCUBK('APPL_ID_CUST', document.MAINFORM.APPL_ID.name, 'SYF_GTEE_Cal_Calculate_Charge');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_MPO_SEND_TO_RCV_INFO_INIT = function() {
    try {

        if (document.MAINFORM.SW_FORM.value == 'MT767') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_MPO_SW_FORM_AMD_INIT = function() {
    try {

        if (document.MAINFORM.SW_FORM.value == 'MT760' || document.MAINFORM.SW_FORM.value == 'MT767') {
            // SYT_ChangeFldClass(document.MAINFORM.AMD_DETAILS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'P');
        } else if (document.MAINFORM.SW_FORM.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.AMD_DETAILS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'M');
            SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AMD_DETAILS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_MPO_COUNTR_GTEE_AMD = function() {
    try {

        if (document.MAINFORM.COUNTR_GTEE.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_REF, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_EXP, 'M'); // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_REQ, 'M');
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_HELD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_REF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_EXP, 'P');
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_REQ, 'P');
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_HELD, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_ACPT_REJ = function() {
    try {

        if (document.MAINFORM.BENE_CONST_REQ.value == 'YES') {
            document.MAINFORM.ACPT_REJ.value = 'Hold';
            EEHtml.fireEvent(document.MAINFORM.ACPT_REJ, 'onchange');
            SYT_ChangeFldClass(document.MAINFORM.ACPT_REJ, 'P');
        } else {
            EEHtml.fireEvent(document.MAINFORM.ACPT_REJ, 'onchange');
            SYT_ChangeFldClass(document.MAINFORM.ACPT_REJ, 'M');
            document.MAINFORM.ACPT_REJ.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_MPO_ACPT_REJ = function() {
    try {

        if (document.MAINFORM.BENE_CONST_REQ.value == 'YES') {
            SYT_ChangeFldClass(document.MAINFORM.ACPT_REJ, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ACPT_REJ, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_SW_FORM = function() {
    try {

        if (document.MAINFORM.SEND_TO_CORR_MED.value == 'SWIFT' && document.MAINFORM.SEND_TO_SW_TAG.value == 'A') {

            document.MAINFORM.SW_FORM.value = 'MT767';
        }
        /*
if(document.MAINFORM.SEND_TO_CORR_MED.value=='SWIFT' && document.MAINFORM.SEND_TO_SW_TAG.value =='D'){
	document.MAINFORM.SW_FORM.value ='MT999';
}
*/
        if (document.MAINFORM.SEND_TO_CORR_MED.value == 'Email') {
            document.MAINFORM.SW_FORM.value = 'Email';
        }
        if (document.MAINFORM.SEND_TO_CORR_MED.value == 'Fax') {
            document.MAINFORM.SW_FORM.value = 'Fax';
        }
        if (document.MAINFORM.SEND_TO_CORR_MED.value == 'Mail') {
            document.MAINFORM.SW_FORM.value = 'Mail';
        }

        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'EC') {
            SYF_GTEE_MPO_SW_FORM_AMD_INIT();
            SYF_GTEE_MPO_SEND_TO_RCV_INFO_INIT();
        } else {
            SYM_GTEE_MPO_SW_FORM_AMD();
            SYM_GTEE_MPO_SEND_TO_RCV_INFO();
        }

        SYM_GTEE_MPO_SIGNATURE();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_NEW_BASE_LCY_BAL = function() {
    try {

        SYS_GetExchangeRate(document.MAINFORM.GTEE_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.BASE_RT.name, SYF_GTEE_NEW_BASE_LCY);
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_NEW_BASE_LCY = function() {
    try {

        var Rt; // Utility Auto Fix Comments
        var amtTrxccy; // Utility Auto Fix Comments
        amtTrxccy = SYS_BeFloat(document.MAINFORM.NEW_GTEE_AMT.value);
        Rt = SYS_BeFloat(document.MAINFORM.BASE_RT.value);
        document.MAINFORM.NEW_BASE_BAL.value = SYT_AmtFormat(document.MAINFORM.BASE_CCY.value, amtTrxccy * Rt);
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Calculate_GTEE_COMM_BY_CHG_POLICY = function() {
    try {

        var ACPT_REJ; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        var expiry_dt; // Utility Auto Fix Comments
        var gtee_amt; // Utility Auto Fix Comments
        var new_expiry_dt; // Utility Auto Fix Comments
        var new_gtee_amt; // Utility Auto Fix Comments
        gtee_amt = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        new_gtee_amt = SYS_BeFloat(document.MAINFORM.NEW_GTEE_AMT.value);
        expiry_dt = getDate(SYS_DATE_FORMAT, document.MAINFORM.EXPIRY_DT.value);
        new_expiry_dt = getDate(SYS_DATE_FORMAT, document.MAINFORM.NEW_EXPIRY_DT.value);
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        ACPT_REJ = document.MAINFORM.ACPT_REJ.value;

        if ((ACPT_REJ == 'Apply' && gtee_amt >= new_gtee_amt && expiry_dt >= new_expiry_dt) || (ACPT_REJ != 'Apply')) {
            document.MAINFORM.COMM_START_DT.value = document.MAINFORM.TEMP_COMM_START_DT.value;
            document.MAINFORM.COMM_END_DT.value = document.MAINFORM.TEMP_COMM_END_DT.value;
            document.MAINFORM.COMM_DT.value = document.MAINFORM.TEMP_COMM_DT.value;
            document.MAINFORM.NXT_COMM_DT.value = document.MAINFORM.TEMP_NXT_COMM_DT.value;
            document.MAINFORM.TOTAL_ISS_COMM.value = document.MAINFORM.TEMP_TOTAL_ISS_COMM.value;
            document.MAINFORM.CURRENT_COMM.value = document.MAINFORM.TEMP_CURRENT_COMM.value;
            document.MAINFORM.COMM_BAL.value = document.MAINFORM.TEMP_COMM_BAL.value;
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.TOTAL_ISS_COMM.value);
            document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
            document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
            document.MAINFORM.PERIOD.value = document.MAINFORM.TEMP_PERIOD.value;
            document.MAINFORM.NO_OF_PERIODS.value = document.MAINFORM.TEMP_NO_OF_PERIODS.value;
            ISS_COMM.hide();
            ISS_COMM_WEEK.hide();
            ISS_COMM_MONTH.hide();
            ISS_COMM_QUARTER.hide();
            ISS_COMM_HALF_YEAR.hide();
            ISS_COMM_YEAR.hide();
            ISS_COMM.display();
            SYM_GTEE_Chg_Calculate_Amd_Comm();
        } else {
            switch (document.MAINFORM.CHG_POLICY.value) {
                case '':
                    ISS_COMM.setChargeAt(1);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM.display();
                    document.MAINFORM.TOTAL_ISS_COMM.value = 0;
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    document.MAINFORM.COMM_BAL.value = 0;
                    document.MAINFORM.PERIOD.value = 0;
                    document.MAINFORM.NO_OF_PERIODS.value = 0;
                    SYM_GTEE_Chg_Calculate_Amd_Comm();
                    break;
                case 'All in Advance':
                    ISS_COMM.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM.display();
                    document.MAINFORM.PERIOD.value = 0;
                    document.MAINFORM.NO_OF_PERIODS.value = 0;
                    SYM_GTEE_Chg_Calculate_Amd_Comm();
                    document.MAINFORM.TOTAL_ISS_COMM.value = ISS_COMM.getActiveAmt();
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM.getPayAmt();
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.TOTAL_ISS_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
                case 'Part in Advance':
                    ISS_COMM.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM.display();
                    //document.MAINFORM.NXT_COMM_DT.value ='';
                    //document.MAINFORM.COMM_DT.value = SYS_BUSI_DATE;
                    document.MAINFORM.PERIOD.value = 0;
                    document.MAINFORM.NO_OF_PERIODS.value = 0;
                    SYM_GTEE_Chg_Calculate_Amd_Comm();
                    document.MAINFORM.TOTAL_ISS_COMM.value = SYS_BeFloat(ISS_COMM.getActiveAmt()) + SYS_BeFloat(document.MAINFORM.TEMP_COMM_BAL.value);
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", "0");
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.TOTAL_ISS_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
                case 'Weekly':
                    ISS_COMM_WEEK.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM_WEEK.display();
                    document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                    document.MAINFORM.COMM_END_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
                    document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                    document.MAINFORM.NO_OF_PERIODS.value = 1;
                    SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_WEEK();
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_WEEK.getPayAmt();
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
                case 'Monthly':
                    ISS_COMM_MONTH.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM_MONTH.display();
                    document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                    document.MAINFORM.COMM_END_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
                    document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                    document.MAINFORM.NO_OF_PERIODS.value = 1;
                    SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_MONTH();
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_MONTH.getPayAmt();
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
                case 'Quarterly':
                    ISS_COMM_QUARTER.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM_QUARTER.display();
                    document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                    document.MAINFORM.COMM_END_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
                    document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                    document.MAINFORM.NO_OF_PERIODS.value = 1;
                    SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_QUARTER();
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getPayAmt();
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
                case 'Half yearly':
                    ISS_COMM_HALF_YEAR.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM_HALF_YEAR.display();
                    document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                    document.MAINFORM.COMM_END_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
                    document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                    document.MAINFORM.NO_OF_PERIODS.value = 1;
                    SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR();
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getPayAmt();
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
                case 'Yearly':
                    ISS_COMM_YEAR.setChargeAt(0);
                    ISS_COMM.hide();
                    ISS_COMM_WEEK.hide();
                    ISS_COMM_MONTH.hide();
                    ISS_COMM_QUARTER.hide();
                    ISS_COMM_HALF_YEAR.hide();
                    ISS_COMM_YEAR.hide();
                    ISS_COMM_YEAR.display();
                    document.MAINFORM.COMM_START_DT.value = SYS_BUSI_DATE;
                    document.MAINFORM.COMM_END_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
                    document.MAINFORM.COMM_DT.value = document.MAINFORM.COMM_START_DT.value;
                    document.MAINFORM.NO_OF_PERIODS.value = 1;
                    SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                    document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getPayAmt();
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                    break;
            }
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Part_In_Advance_Comm_Onchange = function() {
    try {

        var CURRENT_COMM; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var TOTAL_ISS_COMM; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        if (document.MAINFORM.CHG_POLICY.value == 'Part in Advance') {
            if (document.MAINFORM.CURRENT_COMM.value != 0) {
                CURRENT_COMM = SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                TOTAL_ISS_COMM = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value);
                if (CURRENT_COMM > TOTAL_ISS_COMM) {
                    alert("Current Commission should less than or equal to Total Issuance Commission");
                    document.MAINFORM.CURRENT_COMM.value = 0;
                    Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", "0");
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                } else {
                    Chg.Screen.setChargeValue("GTEE_ISS_COMM", "USD", document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                    document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                }
            }
        }
        ISS_COMM.protectChargeFor();
        ISS_COMM.protectChargeAt();
        ISS_COMM._protectActiveAmt(); // Utility Auto Fix Comments
        ISS_COMM._protectCollectAmt(); // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_COMM_END_DT = function() {
    try {

        document.MAINFORM.COMM_END_DT.value = document.MAINFORM.NEW_EXPIRY_DT.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_FOR_AMEND_DT = function() {
    try {

        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        switch (document.MAINFORM.CHG_POLICY.value) {
            case 'Part in Advance':
                SYM_GTEE_Chg_Calculate_Amd_Comm();
                document.MAINFORM.TOTAL_ISS_COMM.value = SYS_BeFloat(ISS_COMM.getActiveAmt()) + SYS_BeFloat(document.MAINFORM.TEMP_COMM_BAL.value);
                document.MAINFORM.CURRENT_COMM.value = 0;
                SYT_ChangeFldClass_New('CURRENT_COMM', 'M');
                break;
            case 'Weekly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_WEEK();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_WEEK.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Monthly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_MONTH();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_MONTH.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Quarterly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_QUARTER();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_QUARTER.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Half yearly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_HALF_YEAR.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
            case 'Yearly':
                SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_YEAR();
                document.MAINFORM.CURRENT_COMM.value = ISS_COMM_YEAR.getPayAmt();
                document.MAINFORM.COMM_BAL.value = SYS_BeFloat(document.MAINFORM.TOTAL_ISS_COMM.value) - SYS_BeFloat(document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
                document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
                break;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CHK_COMM_DT = function() {
    try {

        var COMM_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_DT.value);
        if (COMM_DT < COMM_START_DT) {
            alert("Commission Date must be later than or equal to Commission Commence Date!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_GTEE_CHK_COMM_END_DT()) {
            return false;
        }
        if (!SYF_GTEE_CHK_COMM_DT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CHK_COMM_END_DT = function() {
    try {

        var COMM_END_DT; // Utility Auto Fix Comments
        var COMM_START_DT; // Utility Auto Fix Comments
        COMM_START_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_START_DT.value);
        COMM_END_DT = getDate(SYS_DATE_FORMAT, document.MAINFORM.COMM_END_DT.value);
        if (COMM_END_DT < COMM_START_DT) {
            alert("Commission End Date must be later than Commission Commence Date!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_ChangeFldClass = function() {
    try {

        var ACPT_REJ; // Utility Auto Fix Comments
        var ISS_COMM; // Utility Auto Fix Comments
        var ISS_COMM_HALF_YEAR; // Utility Auto Fix Comments
        var ISS_COMM_MONTH; // Utility Auto Fix Comments
        var ISS_COMM_QUARTER; // Utility Auto Fix Comments
        var ISS_COMM_WEEK; // Utility Auto Fix Comments
        var ISS_COMM_YEAR; // Utility Auto Fix Comments
        var expiry_dt; // Utility Auto Fix Comments
        var gtee_amt; // Utility Auto Fix Comments
        var new_expiry_dt; // Utility Auto Fix Comments
        var new_gtee_amt; // Utility Auto Fix Comments
        gtee_amt = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        new_gtee_amt = SYS_BeFloat(document.MAINFORM.NEW_GTEE_AMT.value);
        expiry_dt = getDate(SYS_DATE_FORMAT, document.MAINFORM.EXPIRY_DT.value);
        new_expiry_dt = getDate(SYS_DATE_FORMAT, document.MAINFORM.NEW_EXPIRY_DT.value);
        ISS_COMM = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        ISS_COMM_WEEK = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_WEEK');
        ISS_COMM_MONTH = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_MONTH');
        ISS_COMM_QUARTER = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_QUARTER');
        ISS_COMM_HALF_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_HALF_YEAR');
        ISS_COMM_YEAR = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM_YEAR');
        ACPT_REJ = document.MAINFORM.ACPT_REJ.value;

        if ((ACPT_REJ == 'Apply' && gtee_amt >= new_gtee_amt && expiry_dt >= new_expiry_dt) || (ACPT_REJ != 'Apply')) {
            SYT_ChangeFldClass_New('COMM_START_DT', 'P');
            SYT_ChangeFldClass_New('COMM_END_DT', 'P');
            SYT_ChangeFldClass_New('COMM_DT', 'P');
            SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
            SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
            SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'O');
            SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'O');
        } else {
            switch (document.MAINFORM.CHG_POLICY.value) {
                case '':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_DT', 'B');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'B');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'B');
                    break;
                case 'All in Advance':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_DT', 'B');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'B');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM.protectChargeFor();
                    ISS_COMM.protectChargeAt();
                    ISS_COMM._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Part in Advance':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'B');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'M');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'O');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM.protectChargeFor();
                    ISS_COMM.protectChargeAt();
                    ISS_COMM._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Weekly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM_WEEK.protectChargeFor();
                    ISS_COMM_WEEK.protectChargeAt();
                    ISS_COMM_WEEK._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM_WEEK._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Monthly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM_MONTH.protectChargeFor();
                    ISS_COMM_MONTH.protectChargeAt();
                    ISS_COMM_MONTH._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM_MONTH._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Quarterly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM_QUARTER.protectChargeFor();
                    ISS_COMM_QUARTER.protectChargeAt();
                    ISS_COMM_QUARTER._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM_QUARTER._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Half yearly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM_HALF_YEAR.protectChargeFor();
                    ISS_COMM_HALF_YEAR.protectChargeAt();
                    ISS_COMM_HALF_YEAR._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM_HALF_YEAR._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
                case 'Yearly':
                    SYT_ChangeFldClass_New('COMM_START_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_END_DT', 'M');
                    SYT_ChangeFldClass_New('COMM_DT', 'M');
                    SYT_ChangeFldClass_New('NXT_COMM_DT', 'P');
                    SYT_ChangeFldClass_New('CURRENT_COMM', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_AT', 'P');
                    SYT_ChangeFldClass_New('CHG_FLD_ALL_CHARGE_FOR', 'P');
                    ISS_COMM_YEAR.protectChargeFor();
                    ISS_COMM_YEAR.protectChargeAt();
                    ISS_COMM_YEAR._protectActiveAmt(); // Utility Auto Fix Comments
                    ISS_COMM_YEAR._protectCollectAmt(); // Utility Auto Fix Comments
                    break;
            }
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_MT798_FLG = function() {
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
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Change_798_tag = function() {
    try {

        if (document.MAINFORM.SUB_MESS_TYPE.value == '743') {
            SYT_ChangeFldClass_New('X798_ADV_BK_REF_21P', 'M');
            SYT_ChangeFldClass_New('X798_29D_BENE_CONTACT', 'O');
            SYT_ChangeFldClass_New('X798_INSTRU_78B', 'O');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_CODE', 'O');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_PARTY', 'O');
            SYT_ChangeFldClass_New('X798_29P_PRO_BANK_IND', 'O');
            SYT_ChangeFldClass_New('X798_29U_LEAD_BANK_IND', 'O');
            SYT_ChangeFldClass_New('X798_VALI_TYPE_23B', 'P');
            SYT_ChangeFldClass_New('X798_31S_DOC_DATE', 'P');
            SYT_ChangeFldClass_New('X798_49H_SPE_AGAR', 'P');
            SYT_ChangeFldClass_New('X798_CRE_DATE', 'P');
            SYT_ChangeFldClass_New('X798_CRE_TIME', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_ID', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_SW_TAG', 'O');
            SYT_ChangeFldClass_New('ADV_BK_ID', 'O');
            SYT_ChangeFldClass_New('ADV_BK_SW_TAG', 'O');
            //SYT_ChangeFldClass_New('X203_PARTY_IDENTIFIER', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_SW_ADD', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_NM', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD1', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD2', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD3', 'O');
            SYT_ChangeFldClass_New('ADV_BK_REF', 'O');
            SYT_ChangeFldClass_New('ADV_BK_SW_ADD', 'O');
            SYT_ChangeFldClass_New('ADV_BK_NM', 'O');
            SYT_ChangeFldClass_New('ADV_BK_ADD1', 'O');
            SYT_ChangeFldClass_New('ADV_BK_ADD2', 'O');
            SYT_ChangeFldClass_New('ADV_BK_ADD3', 'O');
        } else {
            SYT_ChangeFldClass_New('X798_ADV_BK_REF_21P', 'P');
            SYT_ChangeFldClass_New('X798_29D_BENE_CONTACT', 'P');
            SYT_ChangeFldClass_New('X798_INSTRU_78B', 'P');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_CODE', 'P');
            SYT_ChangeFldClass_New('X798_29S_CUST_IDEN_PARTY', 'P');
            SYT_ChangeFldClass_New('X798_29U_LEAD_BANK_IND', 'P');
            SYT_ChangeFldClass_New('X798_VALI_TYPE_23B', 'O');
            SYT_ChangeFldClass_New('X798_31S_DOC_DATE', 'O');
            SYT_ChangeFldClass_New('X798_49H_SPE_AGAR', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_ID', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_SW_TAG', 'P');
            SYT_ChangeFldClass_New('ADV_BK_ID', 'P');
            SYT_ChangeFldClass_New('ADV_BK_SW_TAG', 'P');
            //SYT_ChangeFldClass_New('X203_PARTY_IDENTIFIER', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_SW_ADD', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_NM', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD1', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD2', 'P');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD3', 'P');
            SYT_ChangeFldClass_New('ADV_BK_REF', 'P');
            SYT_ChangeFldClass_New('ADV_BK_SW_ADD', 'P');
            SYT_ChangeFldClass_New('ADV_BK_NM', 'P');
            SYT_ChangeFldClass_New('ADV_BK_ADD1', 'P');
            SYT_ChangeFldClass_New('ADV_BK_ADD2', 'P');
            SYT_ChangeFldClass_New('ADV_BK_ADD3', 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Change_52_tag = function() {
    try {

        if (document.MAINFORM.ISSUE_BK_SW_TAG.value == 'A') {
            //SYT_ChangeFldClass_New('X203_52_PARTY_IDENTIFIER', 'M');
            SYT_ChangeFldClass_New('ISSUE_BK_SW_ADD', 'M');
            SYT_ChangeFldClass_New('ISSUE_BK_NM', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD1', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD2', 'O');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD3', 'O');
        } else {
            SYT_ChangeFldClass_New('ISSUE_BK_NM', 'M');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD1', 'M');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD2', 'M');
            SYT_ChangeFldClass_New('ISSUE_BK_ADD3', 'M');
            SYT_ChangeFldClass_New('ISSUE_BK_SW_ADD', 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Change_58_tag = function() {
    try {

        if (document.MAINFORM.ADV_BK_SW_TAG.value == 'A') {
            SYT_ChangeFldClass_New('ADV_BK_REF', 'M');
            SYT_ChangeFldClass_New('ADV_BK_SW_ADD', 'M');
            SYT_ChangeFldClass_New('ADV_BK_NM', 'O');
            SYT_ChangeFldClass_New('ADV_BK_ADD1', 'O');
            SYT_ChangeFldClass_New('ADV_BK_ADD2', 'O');
            SYT_ChangeFldClass_New('ADV_BK_ADD3', 'O');
        } else {
            SYT_ChangeFldClass_New('ADV_BK_NM', 'M');
            SYT_ChangeFldClass_New('ADV_BK_ADD1', 'M');
            SYT_ChangeFldClass_New('ADV_BK_ADD2', 'M');
            SYT_ChangeFldClass_New('ADV_BK_ADD3', 'M');
            SYT_ChangeFldClass_New('ADV_BK_SW_ADD', 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_COUNTER_GTEE_FLG = function() {
    try {

        if (document.MAINFORM.PURP_OF_MESS_AMD.value == 'ISCA' || document.MAINFORM.PURP_OF_MESS_AMD.value == 'ICCA') {
            EEHtml.getElementById('S').style.display = '';
            SYT_EnableDivClass('S_div');
            document.MAINFORM.DELIV_OF_AMD_UNDER.value = '';
            SYT_ChangeFldClass_New('DELIV_OF_AMD_UNDER', 'P');
            document.MAINFORM.DELIV_OF_AMD_UNDER_NAR.value = '';
            SYT_ChangeFldClass_New('DELIV_OF_AMD_UNDER_NAR', 'P');
            document.MAINFORM.DELIVERY_TO.value = '';
            SYT_ChangeFldClass_New('DELIVERY_TO', 'P');
            document.MAINFORM.DELIVERY_TO_AMD_CODE.value = '';
            SYT_ChangeFldClass_New('DELIVERY_TO_AMD_CODE', 'P');
            document.MAINFORM.DELIVERY_TO_NM_ADD_AMD.value = '';
            SYT_ChangeFldClass_New('DELIVERY_TO_NM_ADD_AMD', 'P');
        } else {
            EEHtml.getElementById('S').style.display = 'none';
            document.MAINFORM.AUTO_EXTEN_NOTIF_PRD_LOCAL.value = '';
            SYT_DisableDivClass('S_div');
            SYT_ChangeFldClass_New('DELIV_OF_AMD_UNDER', 'O');
            SYT_ChangeFldClass_New('DELIV_OF_AMD_UNDER_NAR', 'O');
            SYT_ChangeFldClass_New('DELIVERY_TO', 'O');
            SYT_ChangeFldClass_New('DELIVERY_TO_AMD_CODE', 'O');
            SYT_ChangeFldClass_New('DELIVERY_TO_NM_ADD_AMD', 'O');
        }
        if (document.MAINFORM.PURP_OF_MESS_AMD.value == 'ACNA' || document.MAINFORM.PURP_OF_MESS_AMD.value == 'ADVA') {
        SYT_ChangeFldClass_New('OTH_ADV_BK_REF', 'O');
        }else{
        SYT_ChangeFldClass_New('OTH_ADV_BK_REF', 'B');	
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_NEW_BENE_INFO = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ID, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ID_BTN, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_NM, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ADD1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ADD2, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ADD3, 'O');
        SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_AMD_CODE, 'O');
        SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'O');
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_check_DEC_AMT_LOCAL = function() {
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
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_DEC_AMT_ZERO_LOCAL = function() {
    try {

        document.MAINFORM.DEC_AMT_LOCAL.value = 0;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_INC_AMT_ZERO_LOCAL = function() {
    try {

        document.MAINFORM.INC_AMT_LOCAL.value = 0;
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ACPT_REJ_onchange = function(event) {
    try {
        SYM_GTEE_Cal_ACPT_REJ();
        //By jane for cannot update GTEE_AMT before release
        //SYM_GTEE_Cal_TEMP_NEW_GTEE_AMT();
        SYM_GTEE_Cal_INC_AMT_DEC_AMT();
        SYM_GTEE_Chg_Calculate_Amd_Comm();
        //SYF_GTEE_Calculate_GTEE_COMM_BY_CHG_POLICY();
        //SYF_GTEE_ChangeFldClass();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_GTEE_ADV_BK_ID_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ID_onchange = function(event) {
    try {
        SYM_GTEE_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Sql_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_ADV_SWIFT_TAG();
        SYM_GTEE_Get_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ADV_BK_SW_TAG_onchange = function(event) {
    try {
        SYF_GTEE_Change_58_tag();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AMD_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.AMD_DT.name, document.MAINFORM.ISSUE_DT.name);
        var nDays1 = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.AMD_DT.name);
        if (nDays > 0) {
            alert("Amendment date should not accept before Registration date");
            document.MAINFORM.AMD_DT.value = '';
            return false;
        } else if (nDays1 > 0) {
            alert("Amendment date should not accept after Expiry date");
            document.MAINFORM.AMD_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APLB_RULE_onchange = function(event) {
    try {
        SYM_GTEE_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLBANK_onclick = function(event) {
    try {
        SYM_GTEE_APPL_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLY_FLG_onchange = function(event) {
    try {
        SYF_GTEE_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL; // Utility Auto Fix Comments
        SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CORR_MED1_onchange = function(event) {
    try {
        SYM_GTEE_MPO_APPL_CORR_MED1();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_ID_onchange = function(event) {
    try {
        SYM_GTEE_Cal_ADD_BUTTON();
        if (document.MAINFORM.APPL_ID.value == "") {
            SYM_GTEE_Cal_Clear_Appl_ID();
        } else {
            SYM_GTEE_APPL_ID_BTN();
            SYF_GTEE_Cal_Calculate_Appl();
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_APPL_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL; // Utility Auto Fix Comments
        SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AUTO_RENEW_onchange = function(event) {
    try {
        SYM_GTEE_Cal_FXD_EXPIRY();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENEFICIARYBANK_onclick = function(event) {
    try {
        SYM_GTEE_BENE_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CONST_REQ_onchange = function(event) {
    try {
        SYF_GTEE_Cal_ACPT_REJ();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_BENE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_ID_onchange = function(event) {
    try {
        SYM_GTEE_Cal_ADD_BUTTON();
        if (document.MAINFORM.BENE_ID.value == "") {
            SYM_GTEE_Cal_Clear_Bene_ID();
        } else {
            SYM_GTEE_BENE_ID_BTN();
            SYF_GTEE_Cal_Calculate_Bene();
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_SW_TAG();
        SYM_GTEE_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_BAL_onchange = function(event) {
    try {
        document.MAINFORM.COMM_BAL.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.COMM_BAL.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_DT_onchange = function(event) {
    try {
        SYF_GTEE_CHK_COMM_DT();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_END_DT_onchange = function(event) {
    try {
        SYF_GTEE_CHK_COMM_END_DT();
        SYF_GTEE_FOR_AMEND_DT();
        SYF_GTEE_ChangeFldClass();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COMM_START_DT_onchange = function(event) {
    try {
        SYF_GTEE_CHK_COMM_END_DT();
        SYF_GTEE_CHK_COMM_DT();
        SYF_GTEE_FOR_AMEND_DT();
        SYF_GTEE_ChangeFldClass();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_COUNTR_GTEE_onchange = function(event) {
    try {
        SYF_GTEE_MPO_COUNTR_GTEE_AMD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CURRENT_COMM_onchange = function(event) {
    try {
        SYF_GTEE_Part_In_Advance_Comm_Onchange();
        document.MAINFORM.CURRENT_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.CURRENT_COMM.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ClauseButton3_onclick = function(event) {
    try {
        return SYS_InsertClause('NARR_MAIL');
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DEC_AMT_onchange = function(event) {
    try {
        SYF_GTEE_check_DEC_AMT();
        SYF_GTEE_INC_AMT_ZERO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DEC_AMT_LOCAL_onchange = function(event) {
    try {
        SYF_GTEE_check_DEC_AMT_LOCAL();
        SYF_GTEE_INC_AMT_ZERO_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIVERY_TO_AMD_CODE_onchange = function(event) {
    try {
        var DELIV_TO_AMD = document.MAINFORM.DELIVERY_TO_AMD_CODE.value;
        if (DELIV_TO_AMD == 'OTHR') {

            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD, 'P');
            document.MAINFORM.DELIVERY_TO_NM_ADD_AMD.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIVERY_TO_AMD_CODE_L_onchange = function(event) {
    try {
        var DELIV_TO_AMD = document.MAINFORM.DELIVERY_TO_AMD_CODE_L.value;
        if (DELIV_TO_AMD == 'OTHR') {

            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD_L, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DELIVERY_TO_NM_ADD_AMD_L, 'P');
            document.MAINFORM.DELIVERY_TO_NM_ADD_AMD_L.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIV_OF_AMD_UNDER_onchange = function(event) {
    try {
        var DELIV_OF_AMD_UNDER = document.MAINFORM.DELIV_OF_AMD_UNDER.value;
        if (DELIV_OF_AMD_UNDER == 'COUR' || DELIV_OF_AMD_UNDER == 'OTHR') {

            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_AMD_UNDER_NAR, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_AMD_UNDER_NAR, 'P');
            document.MAINFORM.DELIV_OF_AMD_UNDER_NAR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIV_OF_AMD_UNDER_LOCAL_onchange = function(event) {
    try {
        var DELIV_OF_AMD_UNDER = document.MAINFORM.DELIV_OF_AMD_UNDER_LOCAL.value;
        if (DELIV_OF_AMD_UNDER == 'COUR' || DELIV_OF_AMD_UNDER == 'OTHR') {

            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_AMD_UNDER_NAR_LOCAL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_AMD_UNDER_NAR_LOCAL, 'P');
            document.MAINFORM.DELIV_OF_AMD_UNDER_NAR_LOCAL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DOCS_PRESENTED_BY_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Indemn();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_FILE_23X_CODE_onchange = function(event) {
    try {
        if (document.MAINFORM.FILE_23X_CODE.value != '') {
            document.MAINFORM.TEMP_FILE_23X_CODE.value = '/' + document.MAINFORM.FILE_23X_CODE.value + '/';
        } else {
            document.MAINFORM.TEMP_FILE_23X_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_GTEE_AMT_onchange = function(event) {
    try {
        SYF_GTEE_check_DEC_AMT();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_GTEE_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INC_AMT_onchange = function(event) {
    try {
        SYF_GTEE_DEC_AMT_ZERO();
        SYM_GTEE_Chg_Calculate_Amd_Comm();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INC_AMT_LOCAL_onchange = function(event) {
    try {
        SYF_GTEE_DEC_AMT_ZERO_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMNBANK_onclick = function(event) {
    try {
        SYM_GTEE_INDEMNIFY_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_BANK_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_BANK_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_onchange = function(event) {
    try {
        SYM_GTEE_INDEMN_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_INDEMN_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_BK_SW_TAG_onchange = function(event) {
    try {
        SYF_GTEE_Change_52_tag();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ISSUE_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.REG_DT.name);
        var nDays1 = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.ISSUE_DT.name);
        if (nDays > 0) {
            alert("Issue date should not accept before Registration date");
            document.MAINFORM.ISSUE_DT.value = '';
            return false;
        } else if (nDays1 > 0) {
            alert("Issue date should not accept after Expiry date");
            document.MAINFORM.ISSUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_MATURITY_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.MATURITY_DT.name, document.MAINFORM.AMD_DT.name);
        if (nDays > 0) {
            alert("Maturity date should not accept before Amendment date");
            document.MAINFORM.MATURITY_DT.value = '';
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_NEW_BENE_ID_onchange = function(event) {
    try {
        SYM_GTEE_CAL_NEW_BENE_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_NEW_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_GTEE_SQL_NEW_BENE();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_NEW_BENE_ID_BTN_LOCAL_onclick = function(event) {
    try {
        SYM_GTEE_SQL_NEW_BENE_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_NEW_BENE_ID_LOCAL_onchange = function(event) {
    try {
        SYM_GTEE_CAL_NEW_BENE_ID_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_NEW_EXPIRY_DT_onchange = function(event) {
    try {
        var nDays = SYS_GetSubDays(document.MAINFORM.NEW_EXPIRY_DT.name, document.MAINFORM.AMD_DT.name);
        if (nDays > 0) {
            alert("Expiry date should not accept before Amendment date");
            document.MAINFORM.NEW_EXPIRY_DT.value = '';
            return false;
        } else {
            SYM_GTEE_Cal_MATURITY_DT();
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_NEW_EXPIRY_TYPE_onchange = function(event) {
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
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_NEW_EXPIRY_TYPE_LOCAL_onchange = function(event) {
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
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_NEW_GTEE_AMT_onchange = function(event) {
    try {
        var value = document.MAINFORM.NEW_GTEE_AMT.value;
        if (SYM_GTEE_CHK_NEG(value)) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.NEW_GTEE_AMT.value = 0;
            document.MAINFORM.GTEE_BAL.value = 0;
        }
        SYM_GTEE_Cal_INC_AMT_DEC_AMT();
        SYF_GTEE_check_DEC_AMT();
        SYF_GTEE_NEW_BASE_LCY();
        SYF_GTEE_NEW_BASE_LCY_BAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_NEW_GTEE_AMT_LOCAL_onchange = function(event) {
    try {
        var value = document.MAINFORM.NEW_GTEE_AMT_LOCAL.value;
        if (SYM_GTEE_CHK_NEG(value)) {
            alert("New Guarantee amount should not accept negative values");
            document.MAINFORM.NEW_GTEE_AMT_LOCAL.value = 0;
        }
        SYM_GTEE_Cal_INC_AMT_DEC_AMT_LOCAL();
        SYF_GTEE_check_DEC_AMT_LOCAL();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_PURP_OF_MESS_AMD_onchange = function(event) {
    try {
        SYF_GTEE_COUNTER_GTEE_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_CORR_MED_onchange = function(event) {
    try {
        SYM_GTEE_MPO_SEND_TO_CORR_MED();
        SYF_GTEE_Cal_SW_FORM();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_GTEE_SND_TO_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_MAIL_ADD_ORDERNO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_BANK_POST_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_SEND_BK_SW_ADD();
        SYF_GTEE_Cal_SW_FORM();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_SW_TAG_onchange = function(event) {
    try {
        SYF_GTEE_Cal_SW_FORM();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SUB_MESS_TYPE_onchange = function(event) {
    try {
        //SYF_GTEE_Change_798_tag();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_FORM_OF_UNDERTAKING_LOCAL_onchange = function() {
    try {
        var FORM = document.MAINFORM.FORM_OF_UNDERTAKING_LOCAL.value;
        if (FORM == 'DGAR') {
            document.MAINFORM.AVAL_WT_BK_ID_LOCAL.value = '';
            document.MAINFORM.AVAL_WT_BK_NM_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_LOCAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM_LOCAL, 'P');
        }else{
        	SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID_LOCAL, 'O');
          SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_NM_LOCAL, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DELIV_OF_ORIG_CODE_LOCAL_onchange = function() {
    try {
        var code = document.MAINFORM.DELIV_OF_ORIG_CODE_LOCAL.value;
        if (code == 'OTHR'|| code == 'COUR') {
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDER_LOCAL, 'M');
        } else {
            document.MAINFORM.DELIV_OF_ORIG_UNDER_LOCAL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DELIV_OF_ORIG_UNDER_LOCAL, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_RegisterOutward.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SW_FORM_onchange = function(event) {
    try {
        SYM_GTEE_MPO_SW_FORM_AMD();
        SYM_GTEE_MPO_SEND_TO_RCV_INFO();
        SYM_GTEE_MPO_SIGNATURE();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TOTAL_ISS_COMM_onchange = function(event) {
    try {
        document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.COMM_CCY.value, document.MAINFORM.TOTAL_ISS_COMM.value);
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_AmendOutwardOneStep.js", e);
    }
}