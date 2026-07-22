var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IPLC_CAL_LC_BAL = function() {
    try {

        var LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        var POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
        var lc_bal = LC_AMT + (LC_AMT * POS_TOL / 100);
        document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, lc_bal);
        EEHtml.fireEvent(document.MAINFORM.LC_BAL, "onchange"); //sunny20100204
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_PERCTOL = function() {
    try {

        if (document.MAINFORM.AMT_SPEC.value == 'NOT EXCEEDING') {
            document.MAINFORM.POS_TOL.value = 0;
            document.MAINFORM.NEG_TOL.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
            SYF_IPLC_CAL_LC_BAL();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'O');
            SYF_IPLC_CAL_LC_BAL();
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_MASTER_EXP_DT = function() {
    try {

        var nDays1 = SYS_GetSubDays(document.MAINFORM.MAST_START_DT.name, document.MAINFORM.MAST_EXPIRY_DT.name);
        var nDays2 = SYS_GetSubDays(document.MAINFORM.MAST_START_DT.name, document.MAINFORM.EXPIRY_DT.name);
        var nDays3 = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.MAST_EXPIRY_DT.name);
        if (nDays1 < 0) {
            SYS_CheckError(document.MAINFORM.MAST_START_DT, 'Issue date should be earlier than Master LC Expiry Date!');
            document.MAINFORM.MAST_START_DT.value = '';
        }
        if (nDays2 < 0) {
            SYS_CheckError(document.MAINFORM.EXPIRY_DT, 'Expiry date should be later than Master LC Issue Date!');
            document.MAINFORM.EXPIRY_DT.value = '';
        }
        if (nDays3 < 0) {
            SYS_CheckError(document.MAINFORM.EXPIRY_DT, 'Expiry date should be earlier than Master LC Expiry Date!');
            document.MAINFORM.EXPIRY_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_APLB_RULE = function() {
    try {

        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'M');
            document.MAINFORM.APLB_RULE_NARR.style.visibility = 'visible';

        } else {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'O');
            document.MAINFORM.APLB_RULE_NARR.style.visibility = 'hidden';
            document.MAINFORM.APLB_RULE_NARR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_EXPIRY_PLC = function() {
    try {

        var EXPIRY_PLC = document.MAINFORM.EXPIRY_PLC.value;
        if (EXPIRY_PLC == "Other") {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC_NARR, 'M');
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'visible';

        } else {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC_NARR, 'O');
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'hidden';
            document.MAINFORM.EXPIRY_PLC_NARR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('IPLC', 'SYM_IPLC_setRef');
        //Get LC Main information from EXLC Module
        SYM_IPLC_Get_NARR_From_EPLC();
        document.MAINFORM.MAST_C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.MAST_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
        document.MAINFORM.MAST_LC_AMT.value = document.MAINFORM.LC_AMT.value;
        document.MAINFORM.MAST_LC_CCY.value = document.MAINFORM.LC_CCY.value;
        document.MAINFORM.MAST_LC_NO.value = document.MAINFORM.LC_NO.value;
        document.MAINFORM.MAST_START_DT.value = document.MAINFORM.ISSUE_DT.value;
        //Current Transaction Init

        document.MAINFORM.CURRNT_STATUS.value = 'IPLC_REG_B2B_LC';
        document.MAINFORM.NXT_STATUS.value = 'IPLC_ISS_B2B_LC';
        document.MAINFORM.LCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        document.MAINFORM.CLS_FLG.value = 'No';
        //document.MAINFORM.APLB_RULE.value = 'UCP Lastest Version';
        //document.MAINFORM.FORM_OF_LC.value = 'IRREVOCABLE';
        document.MAINFORM.AMT_SPEC.value = '';
        SYM_IPLC_BENE_To_APPL();
        SYM_IPLC_INIT_FOR_DT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_IPLC_Change_APLB_RULE();
        SYF_IPLC_Change_EXPIRY_PLC();
        //SYF_IPLC_CAL_MAIN_REF();
        SYF_IPLC_CAL_LC_BAL();
        onChangeDiary();
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYM_IPLC_CAL_APPL_ID_NOCHG_back();
        SYM_IPLC_CAL_BENE_ID_NOCHG_back();
        SYF_IPLC_CHK_MASTER_EXP_DT();
        SYF_IPLC_Change_SameAsApplicant();
        FLD_IPLC_FORACOF_CORR_MED_onchange();
        FLD_IPLC_AMT_SPEC_onchange();
        document.MAINFORM.ISSUE_DT.value = '';
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'EC') {
            SYT_ChangeFldClass(document.MAINFORM.GRP_ID, 'P');
        }
        EEHtml.fireEvent(document.MAINFORM.AVAL_BY, 'onchange');;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_MAIN_REF = function() {
    try {

        var MainRef = document.MAINFORM.C_MAIN_REF.value;
        var ref = MainRef.substr(0, 10);
        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_Tolerance = function() {
    try {

        var POS_TOL = document.MAINFORM.POS_TOL.value;
        var NEG_TOL = document.MAINFORM.NEG_TOL.value;
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
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_IPLC_CAL_EXPIRY_PLACE();
        SYF_IPLC_CAL_Tolerance();
        document.MAINFORM.ISSUE_DT.value = '';

        SYM_IPLC_CAL_LC_NO_DEFAULT_VALUE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return SYF_IPLC_CHK_B2BLC_REF();;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
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
            SYM_IPLC_CAL_APPL_ADD_back();
        } else {
            SYS_GetCUBK('APPL_ID', 'APPL_ID', 'SYF_IPLC_APPL_ID_back');
        }

    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_FORACOF_ID_back = function() {
    try {

        SYM_IPLC_FORACOF_MAIL_ADD();
        SYM_IPLC_CAL_FORACOF_ADD_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_B2BLC_REF = function() {
    try {

        var C_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;
        var MAST_C_MAIN_REF = document.MAINFORM.MAST_C_MAIN_REF.value
        var sSQLWhere = "MAST_C_MAIN_REF = \'" + MAST_C_MAIN_REF + "\'";
        var sDBFieldList = "C_MAIN_REF";
        var sJSPMappingList = "TEMP_MAIN_REF";
        SYS_GetTableData_S("EXIMTRX.IPLC_MASTER", sSQLWhere, sDBFieldList, sJSPMappingList, true);
        if (document.MAINFORM.TEMP_MAIN_REF.value != '') {
            alert("LC Already issued,please choose another Record");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_OFFICER_CODE_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.FORACOF_AC_OFF_CODE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AMT_SPEC_onchange = function(event) {
    try {
        SYF_IPLC_MPO_PERCTOL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APLB_RULE_onchange = function(event) {
    try {
        SYF_IPLC_Change_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD1_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.FORACOF_ADD1, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD2_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.FORACOF_ADD2, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD3_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.FORACOF_ADD3, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_APPL_MAIL_ADD();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_EMAIL_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.FORACOF_EMAIL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_FAX_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.FORACOF_FAX, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_ID_NOCHG();
        EEHtml.fireEvent(document.MAINFORM.APPL_CORR_MED, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.FORACOF_ID, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_APPL_CUST();
        SYF_IPLC_CAL_APPL_ID_inFUNC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_LANG_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.FORACOF_LANG, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_MAIL_ADD_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.FORACOF_MAIL_ADD, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_NM_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.FORACOF_NM, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_REF_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.FORACOF_REF, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_BY_onchange = function(event) {
    try {
        if (document.MAINFORM.AVAL_BY.value == "BY PAYMENT" || document.MAINFORM.AVAL_BY.value == "BY MIXED PYMT") {
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.TENOR_TYPE.value = "";
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_AC_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ID_NOCHG();
        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_C_MAIN_REF_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_IPLC_CHK_MASTER_EXP_DT();
        var nDays1 = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.EXPIRY_DT.name);
        if (nDays1 <= 0) {
            SYS_CheckError(document.MAINFORM.EXPIRY_DT, 'Expiry Date should be later than LC Transaction date!');
            document.MAINFORM.EXPIRY_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_PLC_onchange = function(event) {
    try {
        SYF_IPLC_Change_EXPIRY_PLC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_FORACOF_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ID_onchange = function(event) {
    try {
        SYF_IPLC_CAL_FORACOF_ID_inFUNC();
        EEHtml.fireEvent(document.MAINFORM.FORACOF_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_FORACOF_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_FORACOF_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_FORACOF_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LC_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.LC_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.LC_AMT.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.LC_AMT.value) > SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value)) {
            alert("The LC Amount not to exceed Master LC Amount");
            document.MAINFORM.LC_AMT.value = 0;
        }

        SYF_IPLC_CAL_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LC_CCY_onchange = function(event) {
    try {
        document.MAINFORM.ASSET_ACNO.value = '';
        document.MAINFORM.LIAB_ACNO.value = '';
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_MAST_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_IPLC_CHK_MASTER_EXP_DT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_POS_TOL_onchange = function(event) {
    try {
        SYF_IPLC_MPO_PERCTOL();
        SYF_IPLC_CAL_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_SAME_AS_APPL_FLG_onchange = function(event) {
    try {
        SYF_IPLC_Change_SameAsApplicant();
        SYF_IPLC_Cal_SameAsApplicant();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterB2BLC.js", e);
    }
}