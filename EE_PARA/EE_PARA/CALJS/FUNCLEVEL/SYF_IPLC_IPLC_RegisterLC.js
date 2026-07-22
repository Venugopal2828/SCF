var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYF_IPLC_CAL_Tolerance();
        SYF_IPLC_CAL_EXPIRY_PLACE();
        SYT_CHG_VOUCHER();
        document.MAINFORM.LC_NO.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.CLS_FLG.value = 'No';
        document.MAINFORM.CURRNT_STATUS.value = 'IPLC_REG_LC';
        document.MAINFORM.NXT_STATUS.value = 'IPLC_ISS_LC';
        document.MAINFORM.ORIGINAL_LC_BAL.value = document.MAINFORM.LC_BAL.value;
        SYT_Cal_C_TRANS_CODE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.TEMP_TEAM_NAME.value = SYS_USER_TEAM_NAME;
        SYS_GetRefNo('IPLC', 'SYM_IPLC_setRef');
        document.MAINFORM.LC_NO.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.ISSUE_BK_SW_ADD.value = SYS_LOGIN_BIC;
        document.MAINFORM.ADV_BK_REF.value = 'NONREF';
        document.MAINFORM.ADV_THU_BK_REF.value = 'NONREF';
        SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'M');
        SYM_IPLC_INIT_FOR_DT();
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        SYF_IPLC_MPO_ADV_BK_SW_ADD();
        EEHtml.getElementById('H').style.display = 'none';
        SYT_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*InitValues", e);
    }
}

csFuncLevelProto.OnLoadTemplate = function() {
    try {
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        SYF_IPLC_CHK_EXPIRY_DT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*OnLoadTemplate", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.CHG_VALUE_DATE, 'M');
        SYF_IPLC_MPO_showHideAPLB_RULE_NARR();
        SYF_IPLC_MPO_showHideEXPIRY_PLC_NARR();
        SYF_IPLC_MPO_PERCTOL();
        if (document.MAINFORM.SEND_MT705_FLG.value == "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, "M");
            EEHtml.getElementById('H').style.display = 'block';
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_NM_MT705, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, "O");
            EEHtml.getElementById('H').style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_NM_MT705, 'O');
        }
        SYM_IPLC_CAL_APPL_ADD_back();
        SYM_IPLC_APPL_MAIL_ADD();
        onChangeDiary();
        SYF_IPLC_Change_SameAsApplicant();
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYM_IPLC_CAL_ADV_BK_ID_back();
        SYM_IPLC_CAL_ADV_THU_BK_ID_back();
        SYM_IPLC_BENE_MAIL_ADD();
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'EC') {
            SYF_IPLC_MPO_GRP_ID();
        }
        SYM_IPLC_CHG_mapLocal_Foreign_Cust();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYM_IPLC_Chg_SWIFT_CHG();
            SYM_IPLC_Chg_Calculation_Other();
            SYF_IPLC_Cond_PRE_ADV_CHG();
        }
        if (SYS_FUNCTION_TYPE == "PM") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        } else {
            SYF_IPLC_MPO_TENOR();
        }
        SYM_IPLC_Chg_Init_FOR_Charge();
        SYM_IPLC_CAL_FORACOF_ID_NOCHG_back();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_IPLC_APPL_CHG_back = function() {
    try {
        SYS_GetCUBK('APPL_ID', document.MAINFORM.APPL_ID.name, 'SYF_IPLC_Charges()');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_APPL_CHG_back", e);
    }
}

csFuncLevelProto.SYF_IPLC_APPL_ID_back = function() {
    try {
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYM_IPLC_APPL_MAIL_ADD();
        SYF_IPLC_APPL_CHG_back();
        SYM_IPLC_CAL_APPL_ADD_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_APPL_ID_back", e);
    }
}

csFuncLevelProto.SYF_IPLC_BENE_ACCOUNT_NO = function() {
    try {
        var bene_ACNo = document.MAINFORM.BENE_AC_NO.value;
        var bene_first = bene_ACNo.substr(1, 1);
        if (bene_ACNo != '') {
            if (bene_first == '/') {
                document.MAINFORM.BENE_AC_NO.value = bene_ACNo;
            } else {
                document.MAINFORM.BENE_AC_NO.value = '/' + bene_ACNo;
            }
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_BENE_ACCOUNT_NO", e);
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
            SYS_GetCUBK('APPL_ID', document.MAINFORM.APPL_ID.name, 'SYF_IPLC_APPL_ID_back');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_CAL_APPL_ID_inFUNC", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_EXPIRY_PLACE = function() {
    try {
        var temp_expiry_plc;
        if (document.MAINFORM.EXPIRY_PLC.value != 'Other') {
            temp_expiry_plc = document.MAINFORM.EXPIRY_PLC.value;
        } else {
            temp_expiry_plc = document.MAINFORM.EXPIRY_PLC_NARR.value;
        }

        document.MAINFORM.TEMP_EXPIRY_PLC_NARR.value = temp_expiry_plc;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_CAL_EXPIRY_PLACE", e);
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
            SYT_Show_Notes(document.MAINFORM.FORACOF_NOTES.name);
            SYM_IPLC_CAL_FORACOF_ADD_back();
        } else {
            SYS_GetCUBK('FORACOF_ID', 'FORACOF_ID', 'SYF_IPLC_FORACOF_ID_back');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_CAL_FORACOF_ID_inFUNC", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_MAIN_REF = function() {
    try {
        var MainRef = document.MAINFORM.C_MAIN_REF.value;
        var ref = MainRef.substr(0, 10);
        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_CAL_MAIN_REF", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_Tolerance = function() {
    try {
        var POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
        var NEG_TOL = SYS_BeFloat(document.MAINFORM.NEG_TOL.value);
        var nPOS_TOL;
        var nNEG_TOL;
        var TOL;
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
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_CAL_Tolerance", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_EXPIRY_DT = function() {
    try {
        var nDays1 = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.EXPIRY_DT.name);
        if (nDays1 <= 0) {
            SYS_CheckError(document.MAINFORM.EXPIRY_DT, 'Expiry Date should be later than LC Transaction date!');
            document.MAINFORM.EXPIRY_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_CHK_EXPIRY_DT", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_SameAsApplicant = function() {
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
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_Cal_SameAsApplicant", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_Cal_SameAsApplicant_2", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_SameAsApplicant = function() {
    try {
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
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ID_BTN, "P"); 
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_ADD_BTN, "P"); 
            SYT_ChangeFldClass(document.MAINFORM.FORACOF_POST_ADD_BTN, "P"); 
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
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_Change_SameAsApplicant", e);
    }
}

csFuncLevelProto.SYF_IPLC_Charges = function() {
    try {
        SYM_IPLC_Chg_SWIFT_CHG();
        SYF_IPLC_Cond_PRE_ADV_CHG();
        SYM_IPLC_Chg_Calculation_Other();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_Charges", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cond_PRE_ADV_CHG = function() {
    try {
        if (document.MAINFORM.SEND_MT705_FLG.value == 'Yes') {
            SYM_IPLC_Chg_PRE_ADV();
        } else {
            SYT_RESET_COMM('IPLC_PRE-ADV_COMM');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_Cond_PRE_ADV_CHG", e);
    }
}

csFuncLevelProto.SYF_IPLC_FORACOF_CHG_back = function() {
    try {
        SYS_GetCUBK('FORACOF_ID', document.MAINFORM.FORACOF_ID.name, 'SYF_IPLC_Charges');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_FORACOF_CHG_back", e);
    }
}

csFuncLevelProto.SYF_IPLC_FORACOF_ID_back = function() {
    try {
        SYT_Show_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYM_IPLC_FORACOF_MAIL_ADD();
        SYF_IPLC_FORACOF_CHG_back();
        SYM_IPLC_CAL_FORACOF_ADD_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_FORACOF_ID_back", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_ADV_BK_SW_ADD = function() {
    try {
        if (document.MAINFORM.SEND_MT705_FLG.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'M');
            document.MAINFORM.ADV_BK_CORR_MED.value = 'SWIFT';
            //SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'M');
            //document.MAINFORM.ADV_THU_BK_CORR_MED.value = 'SWIFT';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
            document.MAINFORM.ADV_BK_CORR_MED.value = 'None';
            //SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, 'O');
            //document.MAINFORM.ADV_THU_BK_CORR_MED.value = 'None';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_MPO_ADV_BK_SW_ADD", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_GRP_ID = function() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.GRP_ID, 'P');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_MPO_GRP_ID", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_PERCTOL = function() {
    try {
        if (document.MAINFORM.AMT_SPEC.value == "NOT EXCEEDING") {
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, "P");
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, "P");
            document.MAINFORM.NEG_TOL.value = 0;
            document.MAINFORM.POS_TOL.value = 0;
        } else {

            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, "O");
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, "O");
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_MPO_PERCTOL", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_TENOR = function() {
    try {
        if (document.MAINFORM.AVAL_BY.value == "BY PAYMENT" || document.MAINFORM.AVAL_BY.value == "BY MIXED PYMT") {
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.TENOR_TYPE.value = "";
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_MPO_TENOR", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_showHideAPLB_RULE_NARR = function() {
    try {
        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'H');

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_MPO_showHideAPLB_RULE_NARR", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_showHideEXPIRY_PLC_NARR = function() {
    try {
        if (document.MAINFORM.EXPIRY_PLC.value == "Other") {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'hidden';
            document.MAINFORM.EXPIRY_PLC_NARR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_MPO_showHideEXPIRY_PLC_NARR", e);
    }
}

csFuncLevelProto.SYF_IPLC_SetIndividualFlagfromPayment = function() {
    try {
        var obj1 = SYS_getScreenObjByxpath('PaymentTermsHeader', 'CPYT_C_MIX_PAY_DETAIL');
        var obj2 = SYS_getScreenObjByxpath('PaymentTermsHeader', 'CPYT_INDIVID_DRAW_FLG');
        if ("BY MIXED PYMT" == document.MAINFORM.AVAL_BY.value) {
            SYT_ChangeFldClass(obj1, 'O');
            SYT_ChangeFldClass(obj2, 'M');
        } else {
            SYT_ChangeFldClass(obj1, 'P');
            SYT_ChangeFldClass(obj2, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*SYF_IPLC_SetIndividualFlagfromPayment", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_OFFICER_CODE_onchange = function(event) {
    try {
        SYF_IPLC_Cal_SameAsApplicant();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_AC_OFF_CODE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_AC_OFFICER_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ADD1_MT705_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG_705();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_AC_WT_BK_ADD1_MT705_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ADD2_MT705_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG_705();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_AC_WT_BK_ADD2_MT705_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ADD3_MT705_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG_705();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_AC_WT_BK_ADD3_MT705_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ID_MT705_onchange = function(event) {
    try {
        if (document.MAINFORM.AC_WT_BK_ID_MT705.value == '') {
            document.MAINFORM.AC_WT_BK_NM_MT705.value = '';
            document.MAINFORM.AC_WT_BK_ADD1_MT705.value = '';
            document.MAINFORM.AC_WT_BK_ADD2_MT705.value = '';
            document.MAINFORM.AC_WT_BK_ADD3_MT705.value = '';
            document.MAINFORM.AC_WT_BK_LOCATION_MT705.value = '';
            document.MAINFORM.AC_WT_BK_SW_ADD_MT705.value = '';
            document.MAINFORM.AC_WT_BK_SW_TAG_705.value = '';
        } else {
            SYS_GetCUBK('AC_WT_BK_ID_MT705', 'AC_WT_BK_ID_MT705', 'SYM_IPLC_CHK_AC_WT_BK_SW_TAG_705');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_AC_WT_BK_ID_MT705_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_NM_MT705_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG_705();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_AC_WT_BK_NM_MT705_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_SW_ADD_MT705_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG_705();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_AC_WT_BK_SW_ADD_MT705_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_SW_TAG_705_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AC_WT_BK_SW_TAG_705();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_AC_WT_BK_SW_TAG_705_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_ADV_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
        SYM_IPLC_SQL_ADV_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_THU_BK_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_THU_BK_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_THU_BK_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_THU_BK_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_THU_BK_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_THU_BK_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_THU_BK_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_THU_BK_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
        SYM_IPLC_SQL_ADV_THU_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_THU_BK_SW_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AMT_SPEC_onchange = function(event) {
    try {
        SYF_IPLC_MPO_PERCTOL();
        EEHtml.fireEvent(document.MAINFORM.POS_TOL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_AMT_SPEC_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APLB_RULE_onchange = function(event) {
    try {
        SYF_IPLC_MPO_showHideAPLB_RULE_NARR();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APLB_RULE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD1_onchange = function(event) {
    try {
        SYF_IPLC_Cal_SameAsApplicant();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_ADD1, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_ADD1_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD2_onchange = function(event) {
    try {
        SYF_IPLC_Cal_SameAsApplicant();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_ADD2, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_ADD2_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD3_onchange = function(event) {
    try {
        SYF_IPLC_Cal_SameAsApplicant();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_ADD3, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_ADD3_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_APPL_MAIL_ADD();
        SYF_IPLC_Cal_SameAsApplicant();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_EMAIL_onchange = function(event) {
    try {
        SYF_IPLC_Cal_SameAsApplicant();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_EMAIL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_EMAIL_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_FAX_onchange = function(event) {
    try {
        SYF_IPLC_Cal_SameAsApplicant();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_FAX, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_FAX_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_onchange = function(event) {
    try {
        SYF_IPLC_CAL_APPL_ID_inFUNC();
        EEHtml.fireEvent(document.MAINFORM.APPL_CORR_MED, 'onchange');
        SYF_IPLC_Cal_SameAsApplicant();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_ID, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_LANG_onchange = function(event) {
    try {
        SYF_IPLC_Cal_SameAsApplicant();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_LANG, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_LANG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_MAIL_ADD_onchange = function(event) {
    try {
        SYF_IPLC_Cal_SameAsApplicant();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_MAIL_ADD, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_MAIL_ADD_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_NM_onchange = function(event) {
    try {
        SYF_IPLC_Cal_SameAsApplicant();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_NM, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_REF_onchange = function(event) {
    try {
        SYF_IPLC_Cal_SameAsApplicant();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_REF, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_REF_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_BY_onchange = function(event) {
    try {
        SYF_IPLC_MPO_TENOR();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_AVAL_BY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_AC_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_BENE_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_BENE_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ID();
        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_BENE_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_BENE_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_BENE_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_C_MAIN_REF_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_C_MAIN_REF_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_IPLC_CHK_EXPIRY_DT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_EXPIRY_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_PLC_onchange = function(event) {
    try {
        SYF_IPLC_MPO_showHideEXPIRY_PLC_NARR();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_EXPIRY_PLC_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_PLC_NARR_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_EXPIRY_PLC_NARR_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_FORACOF_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_FORACOF_CORR_MED_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ID_onchange = function(event) {
    try {
        SYF_IPLC_CAL_FORACOF_ID_inFUNC();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_FORACOF_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_FORACOF_ORDER_NO_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_FORACOF_ORDER_POST_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_LC_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.LC_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.LC_AMT.value = 0;
        }
        SYF_IPLC_Cond_PRE_ADV_CHG();
        SYM_IPLC_Chg_SWIFT_CHG();
        SYM_IPLC_Chg_Calculation_Other();
        SYT_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_LC_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_LC_CCY_onchange = function(event) {
    try {
        document.MAINFORM.ASSET_ACNO.value = '';
        document.MAINFORM.LIAB_ACNO.value = '';
        SYT_LC_BAL();
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        SYF_IPLC_Cond_PRE_ADV_CHG();
        SYM_IPLC_Chg_Calculation_Other();
        SYM_IPLC_Chg_SWIFT_CHG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_LC_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_POS_TOL_onchange = function(event) {
    try {
        SYT_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_POS_TOL_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SAME_AS_APPL_FLG_onchange = function(event) {
    try {
        SYF_IPLC_Cal_SameAsApplicant_2();
        SYF_IPLC_Change_SameAsApplicant();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_SAME_AS_APPL_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_MT705_FLG_onchange = function(event) {
    try {
        SYF_IPLC_Cond_PRE_ADV_CHG();
        SYF_IPLC_MPO_ADV_BK_SW_ADD();
        EEHtml.fireEvent(document.MAINFORM.ADV_BK_SW_ADD, 'onchange');
        if (document.MAINFORM.SEND_MT705_FLG.value == "Yes") {
            EEHtml.getElementById('H').style.display = 'block';
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_NM_MT705, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, "O");
            document.MAINFORM.ADV_BK_CORR_MED.value = 'None';
            EEHtml.getElementById('H').style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_NM_MT705, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_SEND_MT705_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_BK_ID_BTN_MT705_onclick = function(event) {
    try {
        var retvalue = window.confirm("Are you sure you wish to continue,event.currentTarget look up will take some time.", "Inqure CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('AC_WT_BK_ID_MT705', '1');
        }
        //Modify by Hattie on 20170718 for inqure cubk by condition;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_AC_WT_BK_ID_BTN_MT705_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_THU_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_THU_BK_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ADV_THU_BK_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        //var SQL = "C_CUST_ID='liability' AND C_CURRENCY = '" + SYS_LOCAL_CCY + "' AND C_AC_IDENTIFIER='C'";
        //            SYS_InqCUBK_Sql('LIAB_ACNO', SQL);
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_AC_MRGN_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_APPL_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_APPL_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        //var SQL = "C_CUST_ID='liability' AND C_CURRENCY = '" + SYS_LOCAL_CCY + "' AND C_AC_IDENTIFIER<>'C'";
        //            SYS_InqCUBK_Sql('ASSET_ACNO', SQL);
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_ASSET_ACNO_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_BENE_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_BENE_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_BENE_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_CHG_GETAC_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_CHG_VALUE_DATE_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_FORACOF_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_FORACOF_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_FORACOF_ID_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_FORACOF_POST_ADD_BTN_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_button1_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_button2_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_button3_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_button4_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_button5_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_button6_onclick", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterLC.js*FLD_IPLC_view_1_onclick", e);
    }
}