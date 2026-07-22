var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_GTEE_APPL_CHG_back = function() {
    try {

        //Modified by Jack on 20120905 for SMBC workshop
        //SYS_GetCUBK('APPL_ID', document.MAINFORM.APPL_ID.name,'SYF_GTEE_Charges()');
        SYS_GetCUBK('APPL_ID', document.MAINFORM.APPL_ID.name);
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_APPL_ID_back = function() {
    try {

        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYM_IPLC_APPL_MAIL_ADD();
        SYF_GTEE_APPL_CHG_back();
        SYM_IPLC_CAL_APPL_ADD_back();
        SYF_IPLC_Cal_SameAsApplicant();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CAL_APPL_ID_inFUNC = function() {
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
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CAL_FORACOF_ID_inFUNC = function() {
    try {

        //Add by Jack on 20120905 for SMBC workshop
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
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CAL_MAIN_REF = function() {
    try {

        var MainRef; // Utility Auto Fix Comments
        var ref; // Utility Auto Fix Comments
        MainRef = document.MAINFORM.C_MAIN_REF.value;
        ref = MainRef.substr(0, 10);
        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CAL_Temp_Tolerance = function() {
    try {

        var NEG_TOL; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        var TOL; // Utility Auto Fix Comments
        var nNEG_TOL; // Utility Auto Fix Comments
        var nPOS_TOL; // Utility Auto Fix Comments
        POS_TOL = document.MAINFORM.POS_TOL.value;
        NEG_TOL = document.MAINFORM.NEG_TOL.value;



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
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_CHK_PRES_DAYS = function() {
    try {

        var PRES_DAYS; // Utility Auto Fix Comments
        var days; // Utility Auto Fix Comments
        PRES_DAYS = document.MAINFORM.PRES_DAYS.value;
        days = SYS_GetSubDays(document.MAINFORM.LTST_SHIP_DT.name, document.MAINFORM.EXPIRY_DT.name);
        if (document.MAINFORM.LTST_SHIP_DT.value != '') {
            if (PRES_DAYS != days) {
                SYS_CheckError(document.MAINFORM.PRES_DAYS, 'The presentation days is not equal to the difference between L/C expiry and latest date of shipment');
            }
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_PRES_PRD_TXT = function() {
    try {

        var PRES_DAYS; // Utility Auto Fix Comments
        var PRES_TYPE; // Utility Auto Fix Comments
        PRES_DAYS = SYS_BeInt(document.MAINFORM.PRES_DAYS.value);
        PRES_TYPE = document.MAINFORM.PRES_TYPE.value;
        if (PRES_TYPE != '') {
            document.MAINFORM.PRES_PRD_TXT.value = PRES_DAYS + ' ' + PRES_TYPE;
        } else {
            document.MAINFORM.PRES_PRD_TXT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_SameAsApplicant_2 = function() {
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
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_TEMP_EXPIRY_PLC_NARR = function() {
    try {

        var temp_expiry_plc; // Utility Auto Fix Comments
        if (document.MAINFORM.EXPIRY_PLC.value != 'Other') {
            temp_expiry_plc = document.MAINFORM.EXPIRY_PLC.value;
        } else {
            temp_expiry_plc = document.MAINFORM.EXPIRY_PLC_NARR.value;
        }

        document.MAINFORM.TEMP_EXPIRY_PLC_NARR.value = temp_expiry_plc;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Cal_good_desc = function() {
    try {

        var GOODS; // Utility Auto Fix Comments
        var NEW_INCOTERMS; // Utility Auto Fix Comments
        var OLD_INCOTERMS; // Utility Auto Fix Comments
        OLD_INCOTERMS = document.MAINFORM.TEMP_DEST_PORT.value;
        NEW_INCOTERMS = document.MAINFORM.INCOTERM_INST.value;
        GOODS = document.MAINFORM.GOODS_DESC.value;

        if (OLD_INCOTERMS.length > 0 && GOODS.indexOf(OLD_INCOTERMS) > -1) {
            document.MAINFORM.GOODS_DESC.value = GOODS.replace(OLD_INCOTERMS, NEW_INCOTERMS);
        } else {
            document.MAINFORM.GOODS_DESC.value = GOODS + "\r\n" + NEW_INCOTERMS;
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Change_APLB_RULE = function() {
    try {

        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            document.MAINFORM.APLB_RULE_NARR.style.visibility = "visible";
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, "M");
        } else {
            document.MAINFORM.APLB_RULE_NARR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, "O"); // Utility Auto Fix Comments
            document.MAINFORM.APLB_RULE_NARR.style.visibility = "hidden";
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Change_EXPIRY_PLC = function() {
    try {

        if (document.MAINFORM.EXPIRY_PLC.value == 'Other') {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = "visible";
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC_NARR, "M");
        } else {
            document.MAINFORM.EXPIRY_PLC_NARR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC_NARR, "O"); // Utility Auto Fix Comments
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = "hidden";

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Change_PARTIAL_SHIP = function() {
    try {

        if (document.MAINFORM.PARTIAL_SHIP.value == 'OTHER') {
            document.MAINFORM.PARTIAL_SHIP_NARR.style.visibility = "visible";
        } else {
            document.MAINFORM.PARTIAL_SHIP_NARR.style.visibility = "hidden";
            document.MAINFORM.PARTIAL_SHIP_NARR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Change_SHP_PRD = function() {
    try {

        if (document.MAINFORM.LTST_SHIP_DT.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.SHIP_PRD, "O"); // Utility Auto Fix Comments
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SHIP_PRD, "P"); // Utility Auto Fix Comments
            document.MAINFORM.SHIP_PRD.value = ""; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Change_SameAsApplicant = function() {
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
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Change_TNSHIP = function() {
    try {

        if (document.MAINFORM.TNSHIP.value == 'OTHER') {
            document.MAINFORM.TNSHIP_NARR.style.visibility = "visible";
        } else {
            document.MAINFORM.TNSHIP_NARR.style.visibility = "hidden";
            document.MAINFORM.TNSHIP_NARR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Charges = function() {
    try {

        SYM_IPLC_Chg_OpeningComm();
        SYM_IPLC_Chg_SWIFT_CHG();
        SYM_IPLC_Chg_Postageand();
        SYM_IPLC_Chg_SpecialCourier();
        SYM_IPLC_Chg_SpecialHandlingFee();
        SYM_IPLC_Chg_Calculation_Other();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Chk_AUTH_REG_CORR_MED = function() {
    try {

        if (document.MAINFORM.REIM_BK_AUTH_REQ.value == 'Yes' && document.MAINFORM.REIM_BK_CORR_MED.value == 'None') {
            alert("The value cannot be set to None because Reimbursement Authority Required is Yes"); // Utility Auto Fix Comments
            document.MAINFORM.REIM_BK_CORR_MED.value = "SWIFT"; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Chk_AVAL_BY = function() {
    try {

        if (document.MAINFORM.AVAL_BY.value == 'BY PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.DRW_ID_BTN);
            //Delete by tracery on 11-28
            document.MAINFORM.MIX_PMT_DETL.value = '';
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.DRAFTS_AT.value = 'Payment at Sight';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');

        }

        if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "M");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "M");
            SYM_IPLC_Pay_By_Acceptance();
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.DRW_ID_BTN);
            //Delete by tracery on 11-28
            //document.MAINFORM.INDIVID_DRAW_FLG.value = "No";
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.DRW_ID_BTN);
            //Delete by tracery on 11-28
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            document.MAINFORM.DRAFTS_AT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "M");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "P");
            SYT_DisableField(document.MAINFORM.DRW_ID_BTN);
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
            SYM_IPLC_Pay_By_Acceptance();
            //Delete by tracery on 11-28
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            document.MAINFORM.DRWE_ID.value = '';
            SYM_IPLC_CAL_CLEAR_DRWE_ID();

        }

        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "M");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "P");
            SYT_DisableField(document.MAINFORM.DRW_ID_BTN);
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
            //Delete by tracery on 11-28
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.DRWE_ID.value = '';
            SYM_IPLC_CAL_CLEAR_DRWE_ID();
            SYS_DeleteDoRecord("PaymentTerms");
            document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Chk_LTST_SHIP_DT = function() {
    try {

        var nDays1; // Utility Auto Fix Comments
        var nDays2; // Utility Auto Fix Comments
        var nDays3; // Utility Auto Fix Comments
        nDays1 = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.EXPIRY_DT.name);
        nDays2 = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.LTST_SHIP_DT.name);
        nDays3 = SYS_GetSubDays(document.MAINFORM.LTST_SHIP_DT.name, document.MAINFORM.EXPIRY_DT.name);

        if (nDays1 < 0) {
            SYS_CheckError(document.MAINFORM.EXPIRY_DT, 'Expiry Date should be later than LC Issue date!');
            document.MAINFORM.EXPIRY_DT.value = '';
        }
        if (nDays2 < 0) {
            alert('The Latest shipment date should be later than Issue Date!');
        }
        if (nDays3 < 0) {
            SYS_CheckError(document.MAINFORM.LTST_SHIP_DT, 'The Latest shipment date should not be later than LC Expiry Date!');
            document.MAINFORM.LTST_SHIP_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SHIP_PRD, 'O');

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
        SYF_GTEE_CAL_Temp_Tolerance();
        SYF_GTEE_Cal_TEMP_EXPIRY_PLC_NARR();
        SYM_IPLC_CAL_APLB_RULE_SWF();
        SYF_GTEE_Group_IDonchange();

        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.ADV_BK_REF.value;

        document.MAINFORM.CURRNT_STATUS.value = 'IPLC_ISS_LC';
        document.MAINFORM.NXT_STATUS.value = 'AmdLC';

        SYT_Cal_C_TRANS_CODE();

        // Add by jane for Liability Voucher
        SYT_LIAB_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return Cal_eloan_fields_IPLC();
        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_FORACOF_CHG_back = function() {
    try {

        //Add by Jack on 20120904 for SMBC workshop
        SYS_GetCUBK('FORACOF_ID', document.MAINFORM.FORACOF_ID.name, 'SYF_IPLC_Charges');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_FORACOF_ID_back = function() {
    try {

        //Add by Jack on 20120904 for SMBC workshop
        SYT_Show_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYM_IPLC_FORACOF_MAIL_ADD();
        SYF_GTEE_FORACOF_CHG_back();
        SYM_IPLC_CAL_FORACOF_ADD_back();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Group_IDonchange = function(event) {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        node = SYS_getDoByXpath("AdviceForBankCust");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'BANK_N90_REF_20', document.MAINFORM.C_MAIN_REF.value);
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('IPLC', 'SYM_IPLC_setRef');
        document.MAINFORM.LC_NO.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.ISSUE_BK_SW_ADD.value = SYS_LOGIN_BIC;
        document.MAINFORM.SYND_FLG.value = 'NO';
        document.MAINFORM.EVERGREEN.value = "";
        document.MAINFORM.ADV_BK_REF.value = "NONREF";
        document.MAINFORM.ADV_THU_BK_CORR_MED.value = "None";
        document.MAINFORM.ADV_THU_BK_REF.value = "NONREF";
        document.MAINFORM.CLS_FLG.value = 'No';
        document.MAINFORM.ISSUE_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.TRANS_DOCS_APPL.value = 'NOTIFY APPLICANT';
        document.MAINFORM.INS_DOCS_TYPE.value = 'CERTIFICATE OR POLICY';
        document.MAINFORM.INS_DOCS_COV.value = 'All RISKS AND WAR RISKS';
        SYM_IPLC_ShowInsuranceDocument_CB();
        SYM_IPLC_ShowTransportDocument_CB();
        SYM_IPLC_DocumentPresentation();


        // modified at 20090202 by jane bug 903
        document.MAINFORM.PRES_DAYS.value = 21;
        SYF_GTEE_Cal_PRES_PRD_TXT();

        //modified at 20090203 by jane bug 911
        document.MAINFORM.APLB_RULE_40F.value = 'URR LATEST VERSION';

        SYM_IPLC_INIT_FOR_DT();

        //Add by jane for bug 1327
        SYM_IPLC_CHK_AVAL_WT_BK_OPT();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_LoadDoComplete = function() {
    try {

        var xDO; // Utility Auto Fix Comments
        xDO = SYS_getDoByXpath("PaymentTermsHeader");
        if (xDO) {
            SYM_IPLC_addPaymentRecord();
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_MPO_GRP_ID = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.GRP_ID, 'P');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //SYF_GTEE_CAL_MAIN_REF();
        SYM_IPLC_Change_INCOTERMS_INSTR();
        //Add by Jack on 20120904 for SMBC WorKshop
        SYF_GTEE_Change_SameAsApplicant();
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'EC') {
            SYF_GTEE_MPO_GRP_ID();
        }

        //View Notes
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REIM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        //Add by Jack on 20120904 for SMBC Worjshop
        SYT_Init_Notes(document.MAINFORM.FORACOF_NOTES.name);
        SYM_IPLC_CAL_ADV_BK_ID_back();
        SYM_IPLC_CAL_ADV_THU_BK_ID_back();
        SYM_IPLC_CAL_APPL_BK_ID_back();
        SYM_IPLC_CAL_AVAL_WT_BK_ID_back();
        SYM_IPLC_CAL_APPL_ID_NOCHG_back();
        SYM_IPLC_CAL_BENE_ID_NOCHG_back();
        SYM_IPLC_CAL_DRWE_ID_back();
        SYM_IPLC_CAL_REIM_BK_ID_back();
        //Add by Jack on 20120904 for SMBC Worjshop
        SYM_IPLC_CAL_FORACOF_ID_NOCHG_back();

        //Charges

        //SYM_IPLC_CHG_mapLocal_Foreign_Cust();//Modified by Jack on 20120905 for SMBC Workshop
        SYM_IPLC_CHG_map_Cust_SMBC();

        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_GTEE_Charges();
        }
        if (SYS_FUNCTION_TYPE == "PM") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }

        /*invoke CHG_setAllCollCcy(),SYT_Set_TRXCCY2CHG(),CHG_TRX_DATE(),SYT_Cal_CHG_FLD_LOCAL_CUST_CCY()*/
        SYM_IPLC_Chg_Init_FOR_Charge();

        //Documents
        SYM_IPLC_ShowCertificateofOrigin_CB();
        SYM_IPLC_ShowCertificateofQuality_CB();
        SYM_IPLC_ShowExportLicence_CB();
        SYM_IPLC_ShowInsuranceDocument_CB();
        SYM_IPLC_ShowPackingList_CB();
        SYM_IPLC_ShowTransportDocument_CB_notInit();
        SYM_IPLC_ShowWeightCertificate_CB();
        SYM_IPLC_ShowAnalysisCertificate_CB();
        SYM_IPLC_ShowBeneficiaryCertificate_CB();

        SYF_GTEE_Change_APLB_RULE();
        SYF_GTEE_Change_EXPIRY_PLC();
        SYF_GTEE_Change_PARTIAL_SHIP();
        SYF_GTEE_Change_SHP_PRD();
        SYF_GTEE_Change_TNSHIP();
        SYF_GTEE_Chk_AVAL_BY();
        SYM_IPLC_CHK_TRANS_DOCS_TYPE();
        SYM_IPLC_Chk_TRANS_DOC_APL();

        SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'M');

        SYT_ChangeFldClass_New('ADV_BK_NM', 'M'); // Utility Auto Fix Comments

        if (document.MAINFORM.AVAL_BY.value != 'BY MIXED PYMT') {
            SYT_ChangeFldClass_New('TENOR_TYPE', 'M');
        } else {
            SYT_ChangeFldClass_New('TENOR_TYPE', 'O'); // Utility Auto Fix Comments
        }

        //MPO_Collateral_SECTION();
        //MPO_LIMITS_SECTION();
        //MPO_RISK_TAB_BY_FUNCTION();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_Set_CPYT_N_PAY_TTL_AMT_TXCCY = function() {
    try {

        var obj; // Utility Auto Fix Comments
        //modified for PUI
        return;
        /*
obj = SYS_getScreenObjByxpath('PaymentTermsHeader','CPYT_N_PAY_TTL_AMT_TXCCY');
obj.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value,document.MAINFORM.LC_AMT.value);
*/
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_getDOdata_AdviceForBankCust = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYS_GetDataForDO_S("AdviceForBankCust", 'N', false);
        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLBANK_onclick = function(event) {
    try {
        SYM_GTEE_APPL_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Appl();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPL_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_APPL_SW_TAG();
        SYM_GTEE_Cal_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENEFICIARYBANK_onclick = function(event) {
    try {
        SYM_GTEE_BENE_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_CUST_BK_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Bene();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_MAIL_ADD1_BTN_onclick = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BANK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_BENE_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_BENE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DOCS_PRESENTED_BY_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Indemn();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMNBANK_onclick = function(event) {
    try {
        SYM_GTEE_INDEMNIFY_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_ID_onchange = function(event) {
    try {
        SYM_GTEE_INDEMN_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
        /*
if(SYS_ORG_FUNCTION_NAME == 'RegisterGuarantee'){
JACK 0919 GTEE
SYM_GTEE_Set_Risk_Party_Info();
document.MAINFORM.R_PARTY_ID.fireEvent('onchange');
}
*/
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_MPO_INDEMN_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_INDEMN_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_INDEMN_SW_TAG();
        SYM_GTEE_Cal_INDEMN_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_onchange = function(event) {
    try {
        SYM_GTEE_Cal_Clear_Send();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_ID_onchange = function(event) {
    try {
        SYM_GTEE_SND_TO_ID_BTN();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_NM_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_SEND_TO_SW_ADD_onchange = function(event) {
    try {
        SYM_GTEE_Cal_SEND_TO_SW_TAG();
        SYM_GTEE_Cal_SEND_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_ReceiveMT760CE.js", e);
    }
}