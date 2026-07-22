var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYT_CHG_VOUCHER();
        document.MAINFORM.CURRNT_STATUS.value = 'IPLC_ISS_LC_AMD';
        if (document.MAINFORM.DETRMNTL_FLG.value == 'No') {
            document.MAINFORM.NXT_STATUS.value = 'AmdLC';
            SYM_IPLC_CAL_AMEND_PAYMENT_AMT();
        } else {
            document.MAINFORM.NXT_STATUS.value = '';
        }
        SYF_IPLC_CAL_Temp_Tolerance();
        SYM_IPLC_CAL_Temp_fields_AMD();
        SYF_IPLC_Cal_TEMP_EXPIRY_PLC_NARR();
        SYM_IPLC_CAL_Temp_Amount_AMD();
        SYF_IPLC_Cal_temp_amd_no_b();
        SYM_IPLC_CAL_Temp_AMT_AMD_SWIFT();
        SYT_Cal_C_TRANS_CODE();
        SYT_LIAB_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return Cal_eloan_fields_IPLC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.AMD_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.APPL_BK_CORR_MED.value = "None";
        document.MAINFORM.CLS_FLG.value = 'No';
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.ADV_BK_REF.value;
        SYM_IPLC_INIT_FOR_DT();
        SYF_IPLC_Cal_NO_OF_AMD_B();
        SYM_IPLC_CAL_TEMP_LIAB_ACNO();
        SYT_Init_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYT_Cal_LOCAL_AMT('LC_CCY', 'LC_BAL', 'LOCAL_CCY', 'LOCAL_AMT', 'LOCAL_RATE');
        document.MAINFORM.TEMP_CURRNT_STATUS.value = document.MAINFORM.CURRNT_STATUS.value;
        document.MAINFORM.DETRMNTL_FLG.value = "No";
       // SYT_ChangeFldClass(document.MAINFORM.AC_OFFICER_CODE, "O");
        SYF_IPLC_NO_OF_DRAW();
        SYF_IPLC_CHK_INC_DEC_AMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        SYM_IPLC_CAL_AMEND_PAYMENT_AMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.NEW_BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REIM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.REIM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.NEW_REIM_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.NEW_REIM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.NEW_AVAL_WT_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.NEW_DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.NEW_ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.NEW_CONF_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        FLD_IPLC_SAME_AS_APPL_FLG_onchange();
        SYM_IPLC_Cal_NEW_BENE_ID_back();
        SYM_IPLC_CAL_ADV_BK_ID_back();
       // SYM_IPLC_CAL_ADV_THU_BK_ID_back();
        //SYM_IPLC_CAL_APPL_BK_ID_back();
        SYM_IPLC_CAL_BENE_ID_NOCHG_back();
        SYM_IPLC_CAL_APPL_ID_NOCHG_back();
        SYM_IPLC_CAL_REIM_BK_ID_back();
        SYM_IPLC_CAL_DRWE_ID_back();
        SYM_IPLC_CAL_AVAL_WT_BK_ID_back();
        SYM_IPLC_CHK_Bank_Reference();
        //SYF_IPLC_Change_NEW_APLB_RULE();
        SYM_IPLC_CHK_REIM_BK_AUTH_REQ();
        SYF_IPLC_Change_EXPIRY_PLC();
        SYF_IPLC_Change_NEW_EXPIRY_PLC();
        SYF_IPLC_Change_NEW_PARTIAL_SHIP();
        SYF_IPLC_Change_NEW_TNSHIP();
        SYF_IPLC_Change_PARTIAL_SHIP();
        SYF_IPLC_Change_TNSHIP();
        SYM_IPLC_CHG_mapLocal_Foreign_Cust();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        SYF_IPLC_CHARGE();
        SYM_IPLC_Chg_Init_FOR_Charge();
        SYF_IPLC_Chk_AVAL_BY();
        SYF_IPLC_MT798_FLAG();
        SYT_ChangeFldClass(document.MAINFORM.NO_OF_AMD_B, 'P');
        //The fields for the "old/existing" Beneficiary must be protected
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_AC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_LANG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_AC_OFF_CODE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.APPL_ADD_BTN, 'P');
        document.MAINFORM.NEW_BENE_ID.value = document.MAINFORM.BENE_ID.value;
        document.MAINFORM.NEW_BENE_NM.value = document.MAINFORM.BENE_NM.value;
        document.MAINFORM.NEW_BENE_ADD1.value = document.MAINFORM.BENE_ADD1.value;
        document.MAINFORM.NEW_BENE_ADD2.value = document.MAINFORM.BENE_ADD2.value;
        document.MAINFORM.NEW_BENE_ADD3.value = document.MAINFORM.BENE_ADD3.value;
        document.MAINFORM.NEW_BENE_MAIL_ADD.value = document.MAINFORM.BENE_MAIL_ADD.value;
        document.MAINFORM.NEW_BENE_REF.value = document.MAINFORM.BENE_REF.value;
        document.MAINFORM.NEW_BENE_ACNO.value = document.MAINFORM.BENE_AC_NO.value;
        document.MAINFORM.NEW_BENE_LANG.value = document.MAINFORM.BENE_LANG.value;
        document.MAINFORM.NEW_BENE_CORR_MED.value = document.MAINFORM.BENE_CORR_MED.value;
        document.MAINFORM.NEW_BENE_EMAIL.value = document.MAINFORM.BENE_EMAIL.value;
        document.MAINFORM.NEW_BENE_FAX.value = document.MAINFORM.BENE_FAX.value;
        document.MAINFORM.NEW_BENE_AC_OFF_CODE.value = document.MAINFORM.BENE_AC_OFF_CODE.value;
        SYM_IPLC_showMixPayment();
        SYM_IPLC_showMixPayment_New();
        if (SYS_BeFloat(document.MAINFORM.DEC_AMT.value)< 0 )  {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DEC_AMT.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.DEC_AMT.value) > 0) {
            document.MAINFORM.DETRMNTL_FLG.value = "Yes";
        } else {
            document.MAINFORM.DETRMNTL_FLG.value = "No";
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_IPLC_APPL_ID_CHG = function() {
    try {
        SYS_GetCUBK('APPL_ID', document.MAINFORM.APPL_ID.name, 'SYF_IPLC_CHARGE()');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_APPL_ID_CHG", e);
    }
}

csFuncLevelProto.SYF_IPLC_APPL_ID_back = function() {
    try {
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYM_IPLC_APPL_MAIL_ADD();
        SYF_IPLC_APPL_ID_CHG();
        SYM_IPLC_CAL_APPL_ADD_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_APPL_ID_back", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_APPL_ID_inFUNC = function() {
    try {
        if (document.MAINFORM.APPL_ID.value == '') {
            document.MAINFORM.APPL_NM.value = '';
            document.MAINFORM.APPL_ADD1.value = '';
            document.MAINFORM.APPL_ADD2.value = '';
            document.MAINFORM.APPL_ADD3.value = '';
            document.MAINFORM.APPL_EMAIL.value = '';
            document.MAINFORM.APPL_FAX.value = '';
            document.MAINFORM.APPL_MAIL_ADD.value = '';
            document.MAINFORM.APPL_CORR_MED.value = 'None';
            document.MAINFORM.APPL_TLX.value = '';
            document.MAINFORM.APPL_REF.value = '';
            document.MAINFORM.APPL_NOTES.value = '';
            document.MAINFORM.APPL_LANG.value = 'English';
            document.MAINFORM.AC_OFFICER_CODE.value = '';
            SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
            SYM_IPLC_CAL_APPL_ADD_back();
        } else {
            SYS_GetCUBK('APPL_ID', 'APPL_ID', 'SYF_IPLC_APPL_ID_back');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_CAL_APPL_ID_inFUNC", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_FORACOF_ID_inFUNC = function() {
    try {
        if (document.MAINFORM.FORACOF_ID.value == '') {
            document.MAINFORM.FORACOF_NM.value = '';
            document.MAINFORM.FORACOF_ADD1.value = '';
            document.MAINFORM.FORACOF_ADD2.value = '';
            document.MAINFORM.FORACOF_ADD3.value = '';
            document.MAINFORM.FORACOF_EMAIL.value = '';
            document.MAINFORM.FORACOF_FAX.value = '';
            document.MAINFORM.FORACOF_MAIL_ADD.value = '';
            document.MAINFORM.FORACOF_CORR_MED.value = 'None';
            document.MAINFORM.FORACOF_TLX.value = '';
            document.MAINFORM.FORACOF_REF.value = '';
            document.MAINFORM.FORACOF_NOTES.value = '';
            document.MAINFORM.FORACOF_LANG.value = 'English';
            document.MAINFORM.FORACOF_AC_OFF_CODE.value = '';
            SYM_IPLC_CAL_FORACOF_ADD_back();
        } else {
            SYS_GetCUBK('FORACOF_ID', 'FORACOF_ID', 'SYF_IPLC_FORACOF_ID_back');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_CAL_FORACOF_ID_inFUNC", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_NEW_LC_BAL = function() {
    try {
        var DEC_AMT;
        var INC_AMT;
        var LC_AMT;
        var LC_BAL;
        var NEW_LC_AMT;
        var NEW_LC_BAL;
        var POS_TOL;
        LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        POS_TOL = SYS_BeInt(document.MAINFORM.NEW_POS_TOL.value);
        NEW_LC_AMT = LC_AMT + INC_AMT - DEC_AMT;
        NEW_LC_BAL = NEW_LC_AMT * (1 + POS_TOL / 100);
        document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_AMT);
        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_BAL);
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, "onchange");
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_CAL_NEW_LC_BAL", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_NO_OF_AMD = function(ref) {
    try {
        var NO_OF_AMD;
        NO_OF_AMD = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);
        if (NO_OF_AMD == "" || NO_OF_AMD == 0) {
            document.MAINFORM.NO_OF_AMD.value = 1;
        } else {
            document.MAINFORM.NO_OF_AMD.value = NO_OF_AMD + 1;
        }
        SYF_IPLC_SetAmdRef(document.MAINFORM.NO_OF_AMD.value);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_CAL_NO_OF_AMD", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_Temp_Tolerance = function() {
    try {
        var NEG_TOL;
        var POS_TOL;
        var TOL;
        var nNEG_TOL;
        var nPOS_TOL;
        POS_TOL = document.MAINFORM.NEW_POS_TOL.value;
        NEG_TOL = document.MAINFORM.NEW_NEG_TOL.value;
        if ((POS_TOL != '' || POS_TOL != 0) || (NEG_TOL != '' || NEG_TOL != 0)) {
            if (POS_TOL < 10) {
                nPOS_TOL = '0' + POS_TOL;
            } else {
                nPOS_TOL = POS_TOL;
            }
            if (NEG_TOL < 10) {
                nNEG_TOL = '0' + NEG_TOL;
            } else {
                nNEG_TOL = NEG_TOL;
            }
            TOL = nPOS_TOL + '/' + nNEG_TOL;
        }
        if ((POS_TOL == '' || POS_TOL == 0) && (NEG_TOL == '' || NEG_TOL == 0)) {
            TOL = '';
        }
        document.MAINFORM.TEMP_TAG_39A.value = TOL;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_CAL_Temp_Tolerance", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_Tolerance = function() {
    try {
        if (document.MAINFORM.NEW_AMT_SPEC.value == 'NOT EXCEEDING') {
            document.MAINFORM.NEW_NEG_TOL.value = 0;
            document.MAINFORM.NEW_POS_TOL.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.NEW_POS_TOL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_NEG_TOL, 'P');
            SYF_IPLC_CAL_NEW_LC_BAL();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_NEG_TOL, 'O');
            SYF_IPLC_CAL_NEW_LC_BAL();
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_CAL_Tolerance", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHARGE = function() {
    try {
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYM_IPLC_Chg_AMEND_COMM();
            SYM_IPLC_Chg_SpecialHandlingFee();
            SYM_IPLC_Chg_Postageand();
            SYM_IPLC_Chg_SpecialCourier();
            SYM_IPLC_Chg_SWIFT_CHG();
            SYM_IPLC_Chg_Calculation_Other();
            CHG_setAllChargeAt(1);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_CHARGE", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_INC_DEC_AMT = function() {
    try {
        var DEC_AMT;
        var INC_AMT;
        var LC_AMT;
        var sTempMsg;
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        sTempMsg = 'Decrease Amount can not be more than Original LC Amount!'; // Utility Auto Fix Comments
        if (INC_AMT > 0) {
            document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEC_AMT, 'O');
        }

        if (DEC_AMT > 0) {
            document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INC_AMT, 'O');
        }

        if (DEC_AMT > LC_AMT) {
            alert(sTempMsg);
            document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);

        }
        SYF_IPLC_CAL_NEW_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_CHK_INC_DEC_AMT", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_NEW_DATES = function() {
    try {
        var nDays1;
        var nDays2;
        var nDays3;
        if (document.MAINFORM.NEW_EXPIRY_DT.value != '' && document.MAINFORM.NEW_LTST_SHIP_DT.value != '') {
            nDays1 = SYS_GetSubDays(document.MAINFORM.NEW_LTST_SHIP_DT.name, document.MAINFORM.NEW_EXPIRY_DT.name);
            if (nDays1 < 0) {
                SYS_CheckError(document.MAINFORM.NEW_LTST_SHIP_DT, 'The New Expiry Date must be later than the Latest Shipment Date.');
                document.MAINFORM.NEW_LTST_SHIP_DT.value = '';
                SYT_ChangeFldClass(document.MAINFORM.NEW_SHIP_PRD, 'P');
            }
        }
        if (document.MAINFORM.NEW_EXPIRY_DT.value != '' && document.MAINFORM.NEW_LTST_SHIP_DT.value == '' && document.MAINFORM.LTST_SHIP_DT.value != '') {
            nDays2 = SYS_GetSubDays(document.MAINFORM.LTST_SHIP_DT.name, document.MAINFORM.NEW_EXPIRY_DT.name);
            if (nDays2 < 0) {
                SYS_CheckError(document.MAINFORM.NEW_EXPIRY_DT, "The New Expiry Date must be later than the Latest shipment Date.");
                document.MAINFORM.NEW_EXPIRY_DT.value = '';
            }
        }
        if (document.MAINFORM.NEW_EXPIRY_DT.value == '' && document.MAINFORM.NEW_LTST_SHIP_DT != '') {
            nDays3 = SYS_GetSubDays(document.MAINFORM.NEW_LTST_SHIP_DT.name, document.MAINFORM.EXPIRY_DT.name);
            if (nDays3 < 0) {
                SYS_CheckError(document.MAINFORM.NEW_LTST_SHIP_DT, "The Expiry Date must be later than the New Latest shipment Date.");
                document.MAINFORM.NEW_LTST_SHIP_DT.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_CHK_NEW_DATES", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_NEW_PRES_DAYS = function() {
    try {
        var AMD_PRES_DAYS;
        var days;
        AMD_PRES_DAYS = document.MAINFORM.AMD_PRES_DAYS.value;
        days = SYS_GetSubDays(document.MAINFORM.NEW_LTST_SHIP_DT.name, document.MAINFORM.NEW_EXPIRY_DT.name);
        if (document.MAINFORM.NEW_LTST_SHIP_DT.value != '') {
            if (AMD_PRES_DAYS != days) {
                SYS_CheckError(document.MAINFORM.AMD_PRES_DAYS, 'The presentation days is not equal to the difference between L/C expiry and latest date of shipment');
            }
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_CHK_NEW_PRES_DAYS", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_NEW_SHIP_PRD = function() {
    try {
        if (document.MAINFORM.NEW_LTST_SHIP_DT.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_SHIP_PRD, 'P');
            document.MAINFORM.NEW_SHIP_PRD.value = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_SHIP_PRD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_CHK_NEW_SHIP_PRD", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_AMD_PRES_PRD_TXT = function() {
    try {
        var AMD_PRES_DAYS;
        var AMD_PRES_TYPE;
        AMD_PRES_DAYS = SYS_BeInt(document.MAINFORM.AMD_PRES_DAYS.value);
        AMD_PRES_TYPE = document.MAINFORM.AMD_PRES_TYPE.value;
        if (AMD_PRES_TYPE != '') {
            document.MAINFORM.AMD_PRES_PRD_TXT.value = AMD_PRES_DAYS + '/' + AMD_PRES_TYPE;
        } else {
            document.MAINFORM.AMD_PRES_PRD_TXT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Cal_AMD_PRES_PRD_TXT", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_DetrimentalAMT = function() {
    try {
        var new_lc_amt;
        var new_lc_bal;
        new_lc_amt = SYS_BeFloat(document.MAINFORM.NEW_LC_AMT.value);
        new_lc_bal = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value);
        if (document.MAINFORM.DETRMNTL_FLG.value == 'Yes') {
            document.MAINFORM.NEW_LC_AMT_DETR.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, new_lc_amt);
            document.MAINFORM.NEW_LC_BAL_DETR.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, new_lc_bal);
        } else {
            document.MAINFORM.NEW_LC_AMT_DETR.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
            document.MAINFORM.NEW_LC_BAL_DETR.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Cal_DetrimentalAMT", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_IPLC_OPEN_COMM_DEF = function() {
    try {
        var DEC_AMT_value; // Utility Auto Fix Comments
        var INC_AMT_value; // Utility Auto Fix Comments
        var NEW_EXPIRY_DT_value; // Utility Auto Fix Comments
        var Obj_IPLC_OPEN_COMM_DEF; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        Obj_IPLC_OPEN_COMM_DEF = Chg.Screen.getDefChargeByCommCode('IPLC_OPEN_COMM');
        INC_AMT_value = document.MAINFORM.INC_AMT.value;
        DEC_AMT_value = document.MAINFORM.DEC_AMT.value;
        NEW_EXPIRY_DT_value = document.MAINFORM.NEW_EXPIRY_DT.value;
        if (Obj_IPLC_OPEN_COMM_DEF && ((INC_AMT_value != "" && INC_AMT_value != 0) || (DEC_AMT_value != "" && DEC_AMT_value != 0) || NEW_EXPIRY_DT_value != "")) {

            aResult = Chg.callCalcService(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_BAL.value, "IPLC_OPEN_COMM", "L", document.MAINFORM.APPL_ID.value, document.MAINFORM.CHG_FLD_COLLECT_CCY.value, "Booking Rate", document.MAINFORM.ISSUE_DT.value, document.MAINFORM.AMD_DT.value);
            if (aResult[0] != "") {
                alert("Has error:" + aResult[0]);
            } else {
                ruleCCY = aResult[1];
                ruleAmt = aResult[2];
                ruleInfo = aResult[3];
                Obj_IPLC_OPEN_COMM_DEF[0].setActiveAmt(ruleAmt);
                Obj_IPLC_OPEN_COMM_DEF[0].setActiveCcy(ruleCCY);
                Obj_IPLC_OPEN_COMM_DEF[0].chargeForOnchange();
                Obj_IPLC_OPEN_COMM_DEF[0].protectBalAmt();
                Obj_IPLC_OPEN_COMM_DEF[0]._protectActiveAmt(); // Utility Auto Fix Comments
                Obj_IPLC_OPEN_COMM_DEF[0]._protectBalCcy(); // Utility Auto Fix Comments
                Obj_IPLC_OPEN_COMM_DEF[0]._protectCollectAmt(); // Utility Auto Fix Comments
                Obj_IPLC_OPEN_COMM_DEF[0]._protectDiscAmt(); // Utility Auto Fix Comments
                Obj_IPLC_OPEN_COMM_DEF[0]._protectDiscRate(); // Utility Auto Fix Comments
            }
            if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
                arr = ['IPLC_OPEN_COMM'];
                amt = EEHtml.getElementById('NEW_LC_BAL').value;
                ccy = EEHtml.getElementById('LC_CCY').value;
                eDate = document.MAINFORM.EXPIRY_DT.value;
                if (NEW_EXPIRY_DT_value != "") {
                    eDate = NEW_EXPIRY_DT_value;
                }
                Chg.calculate(arr, ccy, amt, document.MAINFORM.AMD_DT.value, eDate);
            }
        } else {
            Chg.reset(['IPLC_OPEN_COMM']);
            // add new condition Obj_IPLC_OPEN_COMM_DEF &&
            if (Obj_IPLC_OPEN_COMM_DEF && (INC_AMT_value == "" || INC_AMT_value == 0) && (DEC_AMT_value == "" || DEC_AMT_value == 0) && NEW_EXPIRY_DT_value == "") {
                Obj_IPLC_OPEN_COMM_DEF[0]._refresh();
                Obj_IPLC_OPEN_COMM_DEF[0].setBalAmt(Obj_IPLC_OPEN_COMM_DEF[0].getActiveAmt());
                Obj_IPLC_OPEN_COMM_DEF[0].setBalCcy(Obj_IPLC_OPEN_COMM_DEF[0].getActiveCcy());
                Obj_IPLC_OPEN_COMM_DEF[0].chargeForOnchange();
                Obj_IPLC_OPEN_COMM_DEF[0].chargeAtOnchange();
                Obj_IPLC_OPEN_COMM_DEF[0].protectBalAmt();
                Obj_IPLC_OPEN_COMM_DEF[0]._protectActiveAmt();
                Obj_IPLC_OPEN_COMM_DEF[0]._protectBalCcy();
                Obj_IPLC_OPEN_COMM_DEF[0]._protectCollectAmt();
                Obj_IPLC_OPEN_COMM_DEF[0]._protectDiscAmt();
                Obj_IPLC_OPEN_COMM_DEF[0]._protectDiscRate();
            }
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Cal_IPLC_OPEN_COMM_DEF", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_NO_OF_AMD_B = function() {
    try {
        document.MAINFORM.NO_OF_AMD_B.value = SYS_BeFloat(document.MAINFORM.NO_OF_AMD.value);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Cal_NO_OF_AMD_B", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_SameAsApplicant_2 = function() {
    try {
        if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'Yes') {
            document.MAINFORM.FORACOF_ID.value = document.MAINFORM.APPL_ID.value;
            document.MAINFORM.FORACOF_NM.value = document.MAINFORM.APPL_NM.value;
            document.MAINFORM.FORACOF_ADD1.value = document.MAINFORM.APPL_ADD1.value;
            document.MAINFORM.FORACOF_ADD2.value = document.MAINFORM.APPL_ADD2.value;
            document.MAINFORM.FORACOF_ADD3.value = document.MAINFORM.APPL_ADD3.value;
            document.MAINFORM.FORACOF_MAIL_ADD.value = document.MAINFORM.APPL_MAIL_ADD.value;
            document.MAINFORM.FORACOF_REF.value = document.MAINFORM.APPL_REF.value;
            document.MAINFORM.FORACOF_LANG.value = document.MAINFORM.APPL_LANG.value;
            document.MAINFORM.FORACOF_CORR_MED.value = document.MAINFORM.APPL_CORR_MED.value;
            document.MAINFORM.FORACOF_EMAIL.value = document.MAINFORM.APPL_EMAIL.value;
            document.MAINFORM.FORACOF_FAX.value = document.MAINFORM.APPL_FAX.value;
            document.MAINFORM.FORACOF_AC_OFF_CODE.value = document.MAINFORM.AC_OFFICER_CODE.value;
        } else {
            document.MAINFORM.FORACOF_ID.value = '';
            document.MAINFORM.FORACOF_NM.value = '';
            document.MAINFORM.FORACOF_ADD1.value = '';
            document.MAINFORM.FORACOF_ADD2.value = '';
            document.MAINFORM.FORACOF_ADD3.value = '';
            document.MAINFORM.FORACOF_MAIL_ADD.value = '';
            document.MAINFORM.FORACOF_REF.value = '';
            document.MAINFORM.FORACOF_LANG.value = '';
            document.MAINFORM.FORACOF_CORR_MED.value = '';
            document.MAINFORM.FORACOF_EMAIL.value = '';
            document.MAINFORM.FORACOF_FAX.value = '';
            document.MAINFORM.FORACOF_AC_OFF_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Cal_SameAsApplicant_2", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_TEMP_EXPIRY_PLC_NARR = function() {
    try {
        var temp_expiry_plc;
        if (document.MAINFORM.NEW_EXPIRY_PLC.value != 'Other') {
            temp_expiry_plc = document.MAINFORM.NEW_EXPIRY_PLC.value;
        } else {
            temp_expiry_plc = document.MAINFORM.NEW_EXPIRY_PLC_NA.value;
        }
        document.MAINFORM.TEMP_EXPIRY_PLC_NARR.value = temp_expiry_plc;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Cal_TEMP_EXPIRY_PLC_NARR", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_clear_Amd_contents = function() {
    try {
        document.MAINFORM.NEW_BENE_ID.value = '';
        document.MAINFORM.NEW_DEST_PLACE.value = '';
        document.MAINFORM.NEW_DEST_PORT.value = '';
        document.MAINFORM.NEW_EXPIRY_PLC.value = '';
        document.MAINFORM.NEW_INCOTERMS.value = '';
        document.MAINFORM.NEW_LOAD_PLACE.value = '';
        document.MAINFORM.NEW_LOAD_PORT.value = '';
        document.MAINFORM.NEW_LTST_SHIP_DT.value = '';
        document.MAINFORM.NEW_PARTIAL_SHIP.value = '';
        document.MAINFORM.NEW_SHIP_PRD.value = '';
        document.MAINFORM.NEW_TNSHIP.value = '';
        document.MAINFORM.NEW_ADDIT_COV_AMT.value = '';
        document.MAINFORM.NEW_AMT_SPEC.value = '';
        document.MAINFORM.AMD_ADDIT_CONDITION.value = '';
        document.MAINFORM.AMD_DESC_OF_GOODS.value = '';
        document.MAINFORM.AMD_DOC_REQ.value = '';
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Cal_clear_Amd_contents", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_temp_amd_no_b = function() {
    try {
        if (document.MAINFORM.NO_OF_AMD_B.value != '' && document.MAINFORM.NO_OF_AMD_B.value <= 9) {
            document.MAINFORM.TEMP_AMD_NO.value = '0' + document.MAINFORM.NO_OF_AMD_B.value;
        } else {
            document.MAINFORM.TEMP_AMD_NO.value = document.MAINFORM.NO_OF_AMD_B.value;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Cal_temp_amd_no_b", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_EXPIRY_PLC = function() {
    try {
        if (document.MAINFORM.EXPIRY_PLC.value == 'Other') {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = "visible"; // Utility Auto Fix Comments
        } else {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = "hidden"; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Change_EXPIRY_PLC", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_NEW_APLB_RULE = function() {
    try {
        if (document.MAINFORM.NEW_APLB_RULE.value == 'OTHR') {
            document.MAINFORM.NEW_APLB_RULE_NARR.style.visibility = "visible";
            SYT_ChangeFldClass(document.MAINFORM.NEW_APLB_RULE_NARR, "M");
        } else {
            document.MAINFORM.NEW_APLB_RULE_NARR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_APLB_RULE_NARR, "O");
            document.MAINFORM.NEW_APLB_RULE_NARR.style.visibility = "hidden";
            document.MAINFORM.TEMP_APLB_RULE_40E.value = document.MAINFORM.NEW_APLB_RULE.value;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Change_NEW_APLB_RULE", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_NEW_EXPIRY_PLC = function() {
    try {
        if (document.MAINFORM.NEW_EXPIRY_PLC.value == 'Other') {
            document.MAINFORM.NEW_EXPIRY_PLC_NA.style.visibility = "visible";
        } else {
            document.MAINFORM.NEW_EXPIRY_PLC_NA.style.visibility = "hidden";
            document.MAINFORM.NEW_EXPIRY_PLC_NA.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Change_NEW_EXPIRY_PLC", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_NEW_PARTIAL_SHIP = function() {
    try {
        if (document.MAINFORM.NEW_PARTIAL_SHIP.value == 'OTHER') {
            document.MAINFORM.NEW_PARTIAL_SHIP_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.NEW_PARTIAL_SHIP_NARR.style.visibility = 'hidden';
            document.MAINFORM.NEW_PARTIAL_SHIP_NARR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Change_NEW_PARTIAL_SHIP", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_NEW_TNSHIP = function() {
    try {
        if (document.MAINFORM.NEW_TNSHIP.value == 'OTHER') {
            document.MAINFORM.NEW_TNSHIP_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.NEW_TNSHIP_NARR.style.visibility = 'hidden';
            document.MAINFORM.NEW_TNSHIP_NARR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Change_NEW_TNSHIP", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_PARTIAL_SHIP = function() {
    try {
        if (document.MAINFORM.PARTIAL_SHIP.value == 'OTHER') {
            document.MAINFORM.PARTIAL_SHIP_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.PARTIAL_SHIP_NARR.style.visibility = 'hidden';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Change_PARTIAL_SHIP", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_SameAsApplicant = function() {
    try {
        //Add by Jack on 20120904 for SMBC Worjshop
        if (document.MAINFORM.SAME_AS_APPL_FLG.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD1, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD2, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD3, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_MAIL_ADD, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_REF, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_LANG, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_CORR_MED, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_EMAIL, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_FAX, "P");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_AC_OFF_CODE, "P");
            SYT_DisableField(document.MAINFORM.FORACOF_ID_BTN);
            SYT_DisableField(document.MAINFORM.FORACOF_ADD_BTN);
            SYT_DisableField(document.MAINFORM.FORACOF_POST_ADD_BTN);
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ID, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_NM, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD3, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_REF, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_LANG, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_CORR_MED, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_EMAIL, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_FAX, "O");
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_AC_OFF_CODE, "O");
            SYT_EnableFields(document.MAINFORM.FORACOF_ID_BTN);
            SYT_EnableFields(document.MAINFORM.FORACOF_ADD_BTN);
            SYT_EnableFields(document.MAINFORM.FORACOF_POST_ADD_BTN);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Change_SameAsApplicant", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_TNSHIP = function() {
    try {
        if (document.MAINFORM.TNSHIP.value == 'OTHER') {
            document.MAINFORM.TNSHIP_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.TNSHIP_NARR.style.visibility = 'hidden';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Change_TNSHIP", e);
    }
}

csFuncLevelProto.SYF_IPLC_Chk_AVAL_BY = function() {
    try {
        if (document.MAINFORM.AVAL_BY.value == 'BY PAYMENT') {
            EEHtml.getElementById('K').style.display = 'none';
            SYT_DisableDivClass('K_div');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "M");
            SYT_EnableFields(document.MAINFORM.DRW_ID_BTN);
            document.MAINFORM.MIX_PMT_DETL.value = '';
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.DRAFTS_AT.value = 'Payment at Sight';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDIVID_DRAW_FLG, 'P');
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.TENOR_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, "P");
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE') {
            EEHtml.getElementById('K').style.display = 'none';
            SYT_DisableDivClass('K_div');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "M");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "M");
            SYM_IPLC_Pay_By_Acceptance();
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRW_ID_BTN);
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDIVID_DRAW_FLG, 'P');
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, "M");
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION') {
            EEHtml.getElementById('K').style.display = 'none';
            SYT_DisableDivClass('K_div');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.DRW_ID_BTN);
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            document.MAINFORM.DRAFTS_AT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDIVID_DRAW_FLG, 'P');
            document.MAINFORM.TENOR_TEMP.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, "M");
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {
            EEHtml.getElementById('K').style.display = 'none';
            SYT_DisableDivClass('K_div');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "M");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "P");
            SYT_DisableField(document.MAINFORM.DRW_ID_BTN);
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'P');
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            document.MAINFORM.DRWE_ID.value = '';
            SYM_IPLC_Pay_By_Acceptance();
            SYM_IPLC_CAL_CLEAR_DRWE_ID();
            SYT_ChangeFldClass(document.MAINFORM.INDIVID_DRAW_FLG, 'P');
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DEF_PMT_DET.value;
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, "M");
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            EEHtml.getElementById('K').style.display = '';
            SYT_EnableDivClass('K_div');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "M");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "P");
            SYT_DisableField(document.MAINFORM.DRW_ID_BTN);
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'P');
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.DRWE_ID.value = '';
            SYM_IPLC_CAL_CLEAR_DRWE_ID();
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.TENOR_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, "P");
            SYS_DeleteDoRecord("PaymentTerms");
            document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = '';
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.MIX_PMT_DETL.value;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Chk_AVAL_BY", e);
    }
}

csFuncLevelProto.SYF_IPLC_Chk_NEW_AVAL_BY = function() {
    try {
        if (document.MAINFORM.NEW_AVAL_BY.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_SW_ADD, 'O');
            SYT_EnableFields(document.MAINFORM.NEW_DRWE_ID_BTN);
            document.MAINFORM.NEW_DRWE_ID.value = '';
            SYM_IPLC_CAL_CLEAR_NEW_DRWE_ID();
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "O");
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_TENOR_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "O");
        }
        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "M");
            SYT_EnableFields(document.MAINFORM.NEW_DRWE_ID_BTN);
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_DRAFTS_AT.value = 'Payment at Sight';
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_SW_ADD, 'O');
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_TENOR_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "P");
        }

        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY ACCEPTANCE') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "M");
            SYM_IPLC_NEW_Pay_By_Acceptance();
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.NEW_DRWE_ID_BTN);
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "M");
        }

        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY NEGOTIATION') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.NEW_DRWE_ID_BTN);
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_SW_ADD, 'O');
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_TENOR_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "M");
        }

        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY DEF PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "P");
            SYT_DisableField(document.MAINFORM.NEW_DRWE_ID_BTN);
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_SW_ADD, 'P');
            SYM_IPLC_NEW_Pay_By_Acceptance();
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            document.MAINFORM.NEW_DRWE_ID.value = '';
            SYM_IPLC_CAL_CLEAR_NEW_DRWE_ID();
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "M");
        }

        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY MIXED PYMT') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "P");
            SYT_DisableField(document.MAINFORM.NEW_DRWE_ID_BTN);
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_SW_ADD, 'P');
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_DRWE_ID.value = '';
            SYM_IPLC_CAL_CLEAR_NEW_DRWE_ID();
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_TENOR_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "P");
            SYS_DeleteDoRecord("PaymentTerms");
            document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Chk_NEW_AVAL_BY", e);
    }
}

csFuncLevelProto.SYF_IPLC_FORACOF_ID_back = function() {
    try {
        SYM_IPLC_FORACOF_MAIL_ADD();
        SYM_IPLC_CAL_FORACOF_ADD_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_FORACOF_ID_back", e);
    }
}

csFuncLevelProto.SYF_IPLC_MT798_FLAG = function() {
    try {
        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('N').style.display = '';
            SYT_EnableDivClass('N_div');
        } else {
            EEHtml.getElementById('N').style.display = 'none';
            SYT_DisableDiv('N_div');

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_MT798_FLAG", e);
    }
}

csFuncLevelProto.SYF_IPLC_NARRATIVE = function() {
    try {
        var a; // Utility Auto Fix Comments
        var b; // Utility Auto Fix Comments
        var c; // Utility Auto Fix Comments
        var d; // Utility Auto Fix Comments
        var start; // Utility Auto Fix Comments
        start = '+';
        if (document.MAINFORM.AMD_DOC_REQ.value != '') {
            a = start + "PLEASE AMEND DOCUMENTS REQUIRED AS FOLLOWS: " + document.MAINFORM.AMD_DOC_REQ.value + '\n';
        } else {
            a = '';
        }
        if (document.MAINFORM.AMD_DESC_OF_GOODS.value != '') {
            b = start + "PLEASE AMEND GOODS DESCRIPTION AS FOLLOWS: " + document.MAINFORM.AMD_DESC_OF_GOODS.value + '\n';
        } else {
            b = "";
        }
        if (document.MAINFORM.AMD_ADDIT_CONDITION.value != '') {
            c = start + "PLEASE AMEND ADDITIONAL CONDITIONS AS FOLLOWS: " + '\n' + document.MAINFORM.AMD_ADDIT_CONDITION.value + '\n';
        } else {
            c = "";
        }
        if (document.MAINFORM.TENOR_TEMP.value != '') {
            d = start + "PLEASE AMEND TENOR DETAILS AS FOLLOWS: " + '\n' + document.MAINFORM.TENOR_TEMP.value + '\n';

        } else {
            d = "";
        }
        document.MAINFORM.NARR_TAG_79.value = a + b + c + d;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_NARRATIVE", e);
    }
}

csFuncLevelProto.SYF_IPLC_NEW_58 = function() {
    try {
        var NEW_CONF_INSTR = document.MAINFORM.NEW_CONF_INSTR.value;
        if (NEW_CONF_INSTR == 'CONFIRM' || NEW_CONF_INSTR == 'MAY ADD') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_CONF_BK_ID, 'M');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_CONF_BK_ID, 'O');
            document.MAINFORM.NEW_CONF_BK_ID.value = '';
            document.MAINFORM.NEW_CONF_BK_NM.value = '';
            document.MAINFORM.NEW_CONF_BK_ADD1.value = '';
            document.MAINFORM.NEW_CONF_BK_ADD2.value = '';
            document.MAINFORM.NEW_CONF_BK_ADD3.value = '';
            document.MAINFORM.NEW_CONF_BK_SW_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_NEW_58", e);
    }
}

csFuncLevelProto.SYF_IPLC_NEW_AVAL_BY_class = function() {
    try {
        var NO_OF_DRAW;
        NO_OF_DRAW = document.MAINFORM.NO_OF_DRAW.value;
        if (NO_OF_DRAW >= 1) {
            SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_BY, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_BY, "O");
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_NEW_AVAL_BY_class", e);
    }
}

csFuncLevelProto.SYF_IPLC_NO_OF_DRAW = function() {
    try {
        SYS_GetCUBK('NO_OF_DRAW', document.MAINFORM.C_MAIN_REF.name, 'SYF_IPLC_NEW_AVAL_BY_class()');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_NO_OF_DRAW", e);
    }
}

csFuncLevelProto.SYF_IPLC_SetAmdRef = function() {
    try {
        var NO_OF_AMD;
        NO_OF_AMD = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);
        if (NO_OF_AMD < 10) {
            ref = '-0' + NO_OF_AMD;
        } else {
            ref = '-' + NO_OF_AMD;
        }
        document.MAINFORM.AMD_REF.value = document.MAINFORM.C_MAIN_REF.value + ref;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_SetAmdRef", e);
    }
}

csFuncLevelProto.SYF_IPLC_Tenor_Narrative = function() {
    try {
        if (document.MAINFORM.AVAL_BY.value == 'BY PAYMENT') {
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
        }
        if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE') {
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
        }
        if (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION') {
            document.MAINFORM.TENOR_TEMP.value = '';
        }
        if (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {

            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DEF_PMT_DET.value;
        }
        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.MIX_PMT_DETL.value;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_Tenor_Narrative", e);
    }
}

csFuncLevelProto.SYF_IPLC_getDOdata_AdviceForBankCust = function() {
    try {
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYS_GetDataForDO_S("AdviceForBankCust", 'N', false);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*SYF_IPLC_getDOdata_AdviceForBankCust", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD1_onchange = function() {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD2_onchange = function() {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD3_onchange = function() {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_CORR_MED_onchange = function() {
    try {
        SYM_IPLC_ADV_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_ADV_BK_ID();
        EEHtml.fireEvent(document.MAINFORM.ADV_BK_CORR_MED, 'onchange');
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_NM_onchange = function() {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_NO_onchange = function() {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_POST_onchange = function() {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_SW_ADD_onchange = function() {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
        SYM_IPLC_SQL_ADV_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_BK_SW_ADD_onchange", e);
    }
}

/*csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD1_onchange = function() {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_THU_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD2_onchange = function() {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_THU_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD3_onchange = function() {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_THU_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_CORR_MED_onchange = function() {
    try {
        SYM_IPLC_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_THU_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_ID();
        EEHtml.fireEvent(document.MAINFORM.ADV_THU_BK_CORR_MED, 'onchange');
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_THU_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_NM_onchange = function() {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_THU_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_NO_onchange = function() {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_THU_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_POST_onchange = function() {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_THU_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_SW_ADD_onchange = function() {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
        SYM_IPLC_SQL_ADV_THU_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_THU_BK_SW_ADD_onchange", e);
    }
}
*/
csFuncLevelProto.FLD_IPLC_AMD_DT_onchange = function() {
    try {
        if (SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.AMD_DT.name) < 0) {
            alert("The amendment date should not less than the LC issuance date.");
            document.MAINFORM.AMD_DT.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AMD_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AMD_PRES_DAYS_onchange = function() {
    try {
        SYF_IPLC_CHK_NEW_PRES_DAYS();
        SYF_IPLC_Cal_AMD_PRES_PRD_TXT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AMD_PRES_DAYS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPLY_FLG_onchange = function() {
    try {
        SYF_IPLC_MT798_FLAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPLY_FLG_onchange", e);
    }
}

/*csFuncLevelProto.FLD_IPLC_APPL_BK_ADD1_onchange = function() {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD2_onchange = function() {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD3_onchange = function() {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_CORR_MED_onchange = function() {
    try {
        SYM_IPLC_APPL_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_APPL_BK_ID();
        EEHtml.fireEvent(document.MAINFORM.APPL_BK_CORR_MED, 'onchange');
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_NM_onchange = function() {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ORDER_NO_onchange = function() {
    try {
        SYM_IPLC_CAL_APPL_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ORDER_POST_onchange = function() {
    try {
        SYM_IPLC_CAL_APPL_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_SW_ADD_onchange = function() {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
        SYM_IPLC_SQL_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_BK_SW_ADD_onchange", e);
    }
}*/

csFuncLevelProto.FLD_IPLC_APPL_CORR_MED_onchange = function() {
    try {
        SYM_IPLC_APPL_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_onchange = function() {
    try {
        SYF_IPLC_CAL_APPL_ID_inFUNC();
        EEHtml.fireEvent(document.MAINFORM.APPL_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_NO_onchange = function() {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_POST_onchange = function() {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_BY_onchange = function() {
    try {
        SYF_IPLC_Chk_AVAL_BY();
        SYM_IPLC_CHK_AVAL_WT_BK_OPT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AVAL_BY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ADD1_onchange = function() {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AVAL_WT_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ADD2_onchange = function() {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AVAL_WT_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ADD3_onchange = function() {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AVAL_WT_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_AVAL_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AVAL_WT_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_NM_onchange = function() {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AVAL_WT_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_OPT_onchange = function() {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_OPT();
        EEHtml.fireEvent(document.MAINFORM.AVAL_WT_BK_SW_ADD, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AVAL_WT_BK_OPT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ORDER_NO_onchange = function() {
    try {
        SYM_IPLC_CAL_AVAL_WT_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AVAL_WT_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_SW_ADD_onchange = function() {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
        SYM_IPLC_SQL_AVAL_WT_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AVAL_WT_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_AC_NO_onchange = function() {
    try {
        SYM_IPLC_CAL_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_BENE_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_CORR_MED_onchange = function() {
    try {
        SYM_IPLC_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_BENE_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_BENE_ID();
        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_BENE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_NO_onchange = function() {
    try {
        SYM_IPLC_CAL_BENE_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_BENE_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_POST_onchange = function() {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_BENE_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange = function() {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function() {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function() {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange = function() {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function() {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_CONF_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_SW_ADD_onchange = function() {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_CONF_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DEC_AMT_onchange = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.DEC_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DEC_AMT.value = 0;
        }

        if (SYS_BeFloat(document.MAINFORM.DEC_AMT.value) > 0) {
            document.MAINFORM.DETRMNTL_FLG.value = "Yes";
        } else {
            document.MAINFORM.DETRMNTL_FLG.value = "No";
        }
        SYF_IPLC_CHK_INC_DEC_AMT();
        SYF_IPLC_CAL_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.DETRMNTL_FLG, 'onchange');
        SYF_IPLC_Cal_IPLC_OPEN_COMM_DEF();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DEC_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DEF_PMT_DET_onchange = function() {
    try {
        SYF_IPLC_Tenor_Narrative();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DEF_PMT_DET_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DETRMNTL_FLG_onchange = function() {
    try {
        SYF_IPLC_Cal_DetrimentalAMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DETRMNTL_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFTS_AT_onchange = function() {
    try {
        SYF_IPLC_Tenor_Narrative();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DRAFTS_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ADD1_onchange = function() {
    try {
        SYM_IPLC_CHK_DRWE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DRWE_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ADD2_onchange = function() {
    try {
        SYM_IPLC_CHK_DRWE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DRWE_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ADD3_onchange = function() {
    try {
        SYM_IPLC_CHK_DRWE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DRWE_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DRWE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_NM_onchange = function() {
    try {
        SYM_IPLC_CHK_DRWE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DRWE_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ORDER_NO_onchange = function() {
    try {
        SYM_IPLC_CAL_DRWE_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DRWE_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_SW_ADD_onchange = function() {
    try {
        SYM_IPLC_CHK_DRWE_SW_TAG();
        SYM_IPLC_SQL_DRWE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DRWE_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_PLC_onchange = function() {
    try {
        SYF_IPLC_Change_EXPIRY_PLC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_EXPIRY_PLC_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ID_onchange = function() {
    try {
        SYF_IPLC_CAL_FORACOF_ID_inFUNC();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_FORACOF_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ORDER_NO_onchange = function() {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_FORACOF_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ORDER_POST_onchange = function() {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_FORACOF_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_INC_AMT_onchange = function() {
    try {
        if (document.MAINFORM.INC_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.INC_AMT.value = 0;
        }
        SYF_IPLC_CHK_INC_DEC_AMT();
        SYF_IPLC_CAL_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.DETRMNTL_FLG, 'onchange');
        SYF_IPLC_Cal_IPLC_OPEN_COMM_DEF();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_INC_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_ID_onchange = function() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID.value == '') {
            document.MAINFORM.ISSUE_BK_NM.value = '';
            document.MAINFORM.ISSUE_BK_ADD1.value = '';
            document.MAINFORM.ISSUE_BK_ADD2.value = '';
            document.MAINFORM.ISSUE_BK_ADD3.value = '';
            document.MAINFORM.ISSUE_BK_SW_TAG.value = '';
            document.MAINFORM.ISSUE_BK_SW_ADD.value = '';
            document.MAINFORM.ISSUE_BK_REF.value = '';
        } else {
            SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ISSUE_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_MIX_PMT_DETL_onchange = function() {
    try {
        SYF_IPLC_Tenor_Narrative();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_MIX_PMT_DETL_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_ADV_THU_BK_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_NEW_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_ADV_THU_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_ADV_THU_BK_SW_ADD_onchange = function() {
    try {
        SYM_IPLC_CHK_NEW_ADV_THU_BK_SW_TAG();
        if (document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value = document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_ADV_THU_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_AMT_SPEC_onchange = function() {
    try {
        SYF_IPLC_CAL_Tolerance();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_AMT_SPEC_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_APLB_RULE_onchange = function() {
    try {
        //     SYF_IPLC_Change_NEW_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_APLB_RULE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_APLB_RULE_NARR_onchange = function() {
    try {
        if (document.MAINFORM.NEW_APLB_RULE.value == 'OTHR' && document.MAINFORM.NEW_APLB_RULE_NARR.value != '') {
            document.MAINFORM.TEMP_APLB_RULE_40E.value = document.MAINFORM.NEW_APLB_RULE.value + '/' + document.MAINFORM.NEW_APLB_RULE_NARR.value;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_APLB_RULE_NARR_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_AVAL_BY_onchange = function() {
    try {
        document.MAINFORM.AMD_ADDIT_CONDITION.value = '';
        SYF_IPLC_Chk_NEW_AVAL_BY();
        SYM_IPLC_showMixPayment_New();
        SYM_IPLC_addPaymentRecord();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_AVAL_BY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_AVAL_WT_BK_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_NEW_AVAL_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_AVAL_WT_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_AVAL_WT_BK_OPT_onchange = function() {
    try {
        SYM_IPLC_CHK_NEW_AVAL_WT_BK_OPT();
        EEHtml.fireEvent(document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_AVAL_WT_BK_OPT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_AVAL_WT_BK_SW_ADD_onchange = function() {
    try {
        SYM_IPLC_CHK_NEW_AVAL_WT_BK_SW_TAG();
        SYM_IPLC_SQL_NEW_AVAL_WT_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_AVAL_WT_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ACNO_onchange = function() {
    try {
        SYM_IPLC_CAL_NEW_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_BENE_ACNO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_CORR_MED_onchange = function() {
    try {
        SYM_IPLC_NEW_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_BENE_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ID_onchange = function() {
    try {
        SYM_IPLC_Cal_NEW_BENE_ID();
        EEHtml.fireEvent(document.MAINFORM.NEW_BENE_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_BENE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ORDER_NO_onchange = function() {
    try {
        SYM_IPLC_CAL_NEW_BENE_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_BENE_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ORDER_POST_onchange = function() {
    try {
        SYM_IPLC_CAL_NEW_BENE_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_BENE_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_CONF_BK_SW_ADD_onchange = function() {
    try {
        if (document.MAINFORM.NEW_CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.NEW_CONF_BK_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.NEW_CONF_BK_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_CONF_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_CONF_INSTR_onchange = function() {
    try {
        if (document.MAINFORM.NEW_CONF_INSTR.value == 'CONFIRM' || document.MAINFORM.NEW_CONF_INSTR.value == 'MAY ADD') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_CHG_PAY_BY, "M");
        } else {
            document.MAINFORM.CONF_CHG_PAY_BY.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CONF_CHG_PAY_BY, "P");
        }
        SYF_IPLC_NEW_58();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_CONF_INSTR_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_DRWE_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_NEW_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_DRWE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_DRWE_SW_ADD_onchange = function() {
    try {
        SYM_IPLC_CHK_NEW_DRWE_SW_TAG();
        if (document.MAINFORM.NEW_DRWE_SW_ADD.value.length == 8) {
            document.MAINFORM.NEW_DRWE_SW_ADD.value = document.MAINFORM.NEW_DRWE_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_DRWE_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_EXPIRY_DT_onchange = function() {
    try {
        if (SYS_GetSubDays(document.MAINFORM.NEW_EXPIRY_DT.name, document.MAINFORM.ISSUE_DT.name) > 0) {
            alert("The new expiry date should be always greater than the LC issuance date");
            document.MAINFORM.NEW_EXPIRY_DT.value = "";
        }
        if (SYS_GetSubDays(document.MAINFORM.NEW_EXPIRY_DT.name, document.MAINFORM.EXPIRY_DT.name) > 0) {
            document.MAINFORM.DETRMNTL_FLG.value = "Yes";
        } else {
            document.MAINFORM.DETRMNTL_FLG.value = "No";
        }
        SYF_IPLC_CHK_NEW_DATES();
        SYF_IPLC_Cal_IPLC_OPEN_COMM_DEF();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_EXPIRY_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_EXPIRY_PLC_onchange = function() {
    try {
        SYF_IPLC_Change_NEW_EXPIRY_PLC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_EXPIRY_PLC_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_LC_AMT_onchange = function() {
    try {
        SYF_IPLC_Cal_DetrimentalAMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_LC_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_LC_BAL_onchange = function() {
    try {
        SYF_IPLC_Cal_DetrimentalAMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_LC_BAL_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_LTST_SHIP_DT_onchange = function() {
    try {
        SYF_IPLC_CHK_NEW_DATES();
        SYF_IPLC_CHK_NEW_SHIP_PRD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_LTST_SHIP_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_PARTIAL_SHIP_onchange = function() {
    try {
        SYF_IPLC_Change_NEW_PARTIAL_SHIP();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_PARTIAL_SHIP_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_POS_TOL_onchange = function() {
    try {
        SYF_IPLC_CAL_NEW_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_POS_TOL_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_REIM_BK_CORR_MED_onchange = function() {
    try {
        SYM_IPLC_NEW_REIM_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_REIM_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_REIM_BK_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_NEW_REIM_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_REIM_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_REIM_BK_SW_ADD_onchange = function() {
    try {
        SYM_IPLC_CAL_NEW_REIM_BK_ID_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_REIM_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_TENOR_DAYS_onchange = function() {
    try {
        SYM_IPLC_NEW_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_TENOR_DAYS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_TENOR_TYPE_onchange = function() {
    try {
        SYM_IPLC_NEW_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_TENOR_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_TNSHIP_onchange = function() {
    try {
        SYF_IPLC_Change_NEW_TNSHIP();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_TNSHIP_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_NON_BANK_ISSUER_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('NON_BANK_ISSUER_ID', 'NON_BANK_ISSUER_ID');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NON_BANK_ISSUER_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD1_onchange = function() {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_REIM_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD2_onchange = function() {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_REIM_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD3_onchange = function() {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_REIM_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_AUTH_REQ_onchange = function() {
    try {
        SYM_IPLC_CHK_REIM_BK_AUTH_REQ();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_REIM_BK_AUTH_REQ_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_CORR_MED_onchange = function() {
    try {
        SYM_IPLC_REIM_BK_MAIL_ADD();
        SYM_IPLC_CHK_REIM_BK_AUTH_REQ();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_REIM_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ID_onchange = function() {
    try {
        SYM_IPLC_CAL_REIM_BK_ID();
        EEHtml.fireEvent(document.MAINFORM.REIM_BK_CORR_MED, 'onchange');
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_REIM_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_NM_onchange = function() {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_REIM_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ORDER_NO_onchange = function() {
    try {
        SYM_IPLC_CAL_REIM_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_REIM_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ORDER_POST_onchange = function() {
    try {
        SYM_IPLC_CAL_REIM_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_REIM_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_SW_ADD_onchange = function() {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
        SYM_IPLC_SQL_REIM_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_REIM_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SAME_AS_APPL_FLG_onchange = function() {
    try {
        SYF_IPLC_Change_SameAsApplicant();
        SYF_IPLC_Cal_SameAsApplicant_2();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_SAME_AS_APPL_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_TENOR_DAYS_onchange = function() {
    try {
        SYF_IPLC_Chk_AVAL_BY();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_TENOR_DAYS_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_TENOR_TYPE_onchange = function() {
    try {
        SYF_IPLC_Chk_AVAL_BY();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_TENOR_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_ADV_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_BK_POST_ADD_BTN_onclick", e);
    }
}

/*csFuncLevelProto.FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_ADV_THU_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_THU_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ADV_THU_BK_POST_ADD_BTN_onclick", e);
    }
}
*/
csFuncLevelProto.FLD_IPLC_AMD_ADD_COND_BTN_onclick = function() {
    try {
        SYS_InsertClause('AMD_ADDIT_CONDITION');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AMD_ADD_COND_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_AMD_DOC_REQ_BTN_onclick = function() {
    try {
        SYS_InsertClause('AMD_DOC_REQ');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AMD_DOC_REQ_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_AMD_GOOD_DESC_BTN_onclick = function() {
    try {
        SYS_InsertClause('AMD_DESC_OF_GOODS');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AMD_GOOD_DESC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_APPL_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_BK_ADD_BTN_onclick", e);
    }
}

/*csFuncLevelProto.FLD_IPLC_APPL_BK_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_APPL_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_BK_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_APPL_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_BK_POST_ADD_BTN_onclick", e);
    }
}*/

csFuncLevelProto.FLD_IPLC_APPL_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_APPL_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_APPL_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_AVAL_WT_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AVAL_WT_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVLBL_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_AVAL_WT_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_AVLBL_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_BENE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_BENE_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_BENE_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_BENE_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_GETAC_BTN_onclick = function() {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_VALUE_DATE_onclick = function() {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_CHG_VALUE_DATE_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_CONF_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_CONF_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_DRWE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DRWE_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRW_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_DRWE_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_DRW_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_FORACOF_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_FORACOF_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_FORACOF_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_FORACOF_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_ISSUE_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_ISSUE_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_AVLBL_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_NEW_AVAL_WT_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_AVLBL_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_NEW_BENE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_BENE_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_NEW_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_BENE_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_BENE_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_NEW_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_BENE_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_CONF_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_NEW_CONF_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_CONF_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_DRWE_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_NEW_DRWE_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_DRWE_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_REIM_BK_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_REIM_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_REIM_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_REIM_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_NEW_REIM_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_REIM_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NEW_REIM_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_NEW_REIM_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NEW_REIM_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_NON_BANK_ISSUER_ID_BTN_onclick = function() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,event.currentTarget look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NON_BANK_ISSUER_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_NON_BANK_ISSUER_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_REIM_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_REIM_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ID_BTN_onclick = function() {
    try {
        SYM_IPLC_SQL_REIM_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_REIM_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_POST_ADD_BTN_onclick = function() {
    try {
        SYM_IPLC_CAL_REIM_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_REIM_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_TO_RCV_INFO_CLAUSE_BTN_onclick = function() {
    try {
        SYS_InsertClause('SEND_TO_RCV_INFO');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_SEND_TO_RCV_INFO_CLAUSE_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_button1_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_button2_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_button3_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_button4_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_button5_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_button6_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function() {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueAmendmentFrCE.js*FLD_IPLC_view_1_onclick", e);
    }
}