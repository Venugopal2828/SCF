var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IPLC_APPL_CHG_back = function() {
    try {

        SYS_GetCUBK('APPL_ID', document.MAINFORM.APPL_ID.name, 'SYF_IPLC_Charges()');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_APPL_ID_back = function() {
    try {

        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYM_IPLC_APPL_MAIL_ADD();
        SYF_IPLC_APPL_CHG_back();
        SYM_IPLC_CAL_APPL_ADD_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_ADV_SW_for_AVAL_BY = function() {
    try {

        //Add by jane at 20090306 for bug 1341
        if (document.MAINFORM.ADV_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVLBL_BK_ID_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_OPT, 'O');
        }else{
        	  SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_ID, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_SW_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVLBL_BK_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AVAL_WT_BK_OPT, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_AVAL_BY = function() {
    try {

        if (document.MAINFORM.AVAL_BY.value == 'BY PAYMENT') {
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
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "M");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "M");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.DRW_ID_BTN);
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            SYM_IPLC_Pay_By_Acceptance();
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDIVID_DRAW_FLG, 'P');
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION') {
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
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {
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
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
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
            SYT_ChangeFldClass(document.MAINFORM.INDIVID_DRAW_FLG, 'M');
            SYS_DeleteDoRecord("PaymentTerms");
            document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_DRWE_ID = function() {
    try {

        if ((document.MAINFORM.DRAFTS_AT.value == '' && document.MAINFORM.DRWE_ID.value != '') || (document.MAINFORM.DRAFTS_AT.value != '' && document.MAINFORM.DRWE_ID.value == '')) {
            SYS_CheckError(document.MAINFORM.DRWE_ID, 'Fields 42C and 42a together may be present,but only one is not allowed!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_LATEST_SHIP_DT = function() {
    try {

        var nDays1; // Utility Auto Fix Comments
        var nDays2; // Utility Auto Fix Comments
        var nDays3; // Utility Auto Fix Comments
        var nDays4; // Utility Auto Fix Comments
        var nDays5; // Utility Auto Fix Comments
        var nDays6; // Utility Auto Fix Comments
        nDays1 = SYS_GetSubDays(document.MAINFORM.MAST_START_DT.name, document.MAINFORM.ISSUE_DT.name);
        nDays2 = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.EXPIRY_DT.name);
        nDays3 = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.LTST_SHIP_DT.name);
        nDays4 = SYS_GetSubDays(document.MAINFORM.LTST_SHIP_DT.name, document.MAINFORM.EXPIRY_DT.name);
        nDays5 = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.MAST_EXPIRY_DT.name);
        nDays6 = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.MAST_EXPIRY_DT.name);
        if (nDays1 < 0) {
            alert('LC Issue date should be later than Master LC Issue date!');
        }
        if (nDays2 < 0) {
            SYS_CheckError(document.MAINFORM.EXPIRY_DT, 'Expiry date should be later than LC Issue date!');
            document.MAINFORM.EXPIRY_DT.value = '';
        }
        if (nDays3 < 0) {
            alert('The Latest shipment date should be later than Issue Date!');
        }
        if (nDays4 < 0) {
            SYS_CheckError(document.MAINFORM.LTST_SHIP_DT, 'The Latest shipment date should  be earlier than LC Expiry date!');
            document.MAINFORM.LTST_SHIP_DT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SHIP_PRD, 'O');
        }
        if (nDays5 < 0) {
            alert('LC Expiry Date should  be earlier than Master LC Expiry Date!');
        }
        if (nDays6 < 0) {
            SYS_CheckError(document.MAINFORM.ISSUE_DT, 'The LC Issue Date should be earlier than Master LC Expiry Date');
            document.MAINFORM.ISSUE_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_PRES_DAYS = function() {
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
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_SHIP_PRD = function() {
    try {

        if (document.MAINFORM.LTST_SHIP_DT.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.SHIP_PRD, 'P');
            document.MAINFORM.SHIP_PRD.value = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SHIP_PRD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_PRES_PRD_DAYS = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        nDays = SYS_GetSubDays(document.MAINFORM.LTST_SHIP_DT.name, document.MAINFORM.EXPIRY_DT.name);

        document.MAINFORM.PRES_DAYS.value = nDays;

        SYF_IPLC_Cal_PRES_PRD_TXT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_PRES_PRD_TXT = function() {
    try {

        var PRES_DAYS; // Utility Auto Fix Comments
        var PRES_TYPE; // Utility Auto Fix Comments
        PRES_DAYS = SYS_BeInt(document.MAINFORM.PRES_DAYS.value);
        PRES_TYPE = document.MAINFORM.PRES_TYPE.value;
        if (PRES_TYPE != '') {
            document.MAINFORM.PRES_PRD_TXT.value = PRES_DAYS + '/' + PRES_TYPE;
        } else {
            document.MAINFORM.PRES_PRD_TXT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_TEMP_EXPIRY_PLC_NARR = function() {
    try {

        var temp_expiry_plc; // Utility Auto Fix Comments
        if (document.MAINFORM.EXPIRY_PLC.value != 'Other') {
            temp_expiry_plc = document.MAINFORM.EXPIRY_PLC.value;
        } else {
            temp_expiry_plc = document.MAINFORM.EXPIRY_PLC_NARR.value;
        }

        document.MAINFORM.TEMP_EXPIRY_PLC_NARR.value = temp_expiry_plc;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_Temp_Tolerance = function() {
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
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_APLB_RULE = function() {
    try {

        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'P');
            document.MAINFORM.APLB_RULE_NARR.style.visibility = 'visible';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'P');
            document.MAINFORM.APLB_RULE_NARR.style.visibility = 'hidden';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_EXPIRY_PLC = function() {
    try {

        if (document.MAINFORM.EXPIRY_PLC.value == "Other") {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC_NARR, 'P');
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'visible';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC_NARR, 'P');
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'hidden';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_TNSHIP = function() {
    try {

        if (document.MAINFORM.TNSHIP.value == 'OTHER') {
            document.MAINFORM.TNSHIP_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.TNSHIP_NARR.style.visibility = 'hidden';
            document.MAINFORM.TNSHIP_NARR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Charges = function() {
    try {

        SYM_IPLC_Chg_Transfer_Comm();
        //SYM_IPLC_Chg_SWIFT_CHG();
        SYM_IPLC_Chg_Postageand();
        //SYM_IPLC_Chg_SpecialCourier();
        SYM_IPLC_Chg_SpecialHandlingFee();
        SYM_IPLC_Chg_Calculation_Other();
        SYF_IPLC_SWIFT_CHARGE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
        SYF_IPLC_Cal_Temp_Tolerance();
        SYF_IPLC_Cal_TEMP_EXPIRY_PLC_NARR();
        SYM_IPLC_CAL_APLB_RULE_SWF();
        SYT_LIAB_VOUCHER();
        SYT_Cal_C_TRANS_CODE();
        //SYF_IPLC_TRAN_BAL_NEW();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('IPLC', 'SYM_IPLC_setRef');
        //Get record from export lc
        SYM_IPLC_Get_NARR_From_EPLC();
        document.MAINFORM.MAST_C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.MAST_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
        document.MAINFORM.MAST_LC_AMT.value = document.MAINFORM.LC_AMT.value;
        document.MAINFORM.LC_AMT.value = '0.00';
        document.MAINFORM.LC_BAL_TEMP.value = document.MAINFORM.LC_BAL.value;
        document.MAINFORM.MAST_LC_CCY.value = document.MAINFORM.LC_CCY.value;
        document.MAINFORM.MAST_LC_NO.value = document.MAINFORM.LC_NO.value;
        document.MAINFORM.MAST_START_DT.value = document.MAINFORM.ISSUE_DT.value;

        document.MAINFORM.LCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        //document.MAINFORM.ISSUE_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FORM_OF_LC.value = 'IRREVOCABLE';
        SYM_IPLC_BENE_To_APPL();
        document.MAINFORM.ADV_BK_REF.value = 'NONREF';
        document.MAINFORM.CONF_INSTR.value = 'WITHOUT';
        document.MAINFORM.ADV_THU_BK_REF.value = 'NONREF';
        document.MAINFORM.REIM_BK_AUTH_REQ.value = 'No';
        document.MAINFORM.APPL_BK_CORR_MED.value = 'None';
        document.MAINFORM.APPL_BK_REF.value = 'NONREF';
        document.MAINFORM.ISSUE_BK_CORR_MED.value = 'None';
        document.MAINFORM.SEND_TO_RCV_INFO.value = '';
        document.MAINFORM.INSTR_TO_PAY_BK.value = '';
        document.MAINFORM.CLS_FLG.value = 'No';
        document.MAINFORM.CURRNT_STATUS.value = 'IPLC_ISS_LC';
        document.MAINFORM.FUNCTION_ACTION.value = 'IssueTransferLC';
        document.MAINFORM.NXT_STATUS.value = 'AmdLC';
        SYF_IPLC_Cal_PRES_PRD_DAYS();
        document.MAINFORM.SYND_FLG.value = 'NO';
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.ADV_BK_REF.value;
        document.MAINFORM.ASSET_ACNO.value = '';
        document.MAINFORM.LIAB_ACNO.value = '';
        // for documents
        //document.MAINFORM.TRANS_DOCS_APPL.value = 'NOTIFY APPLICANT';
        //document.MAINFORM.INS_DOCS_TYPE.value = 'CERTIFICATE OR POLICY';
        //document.MAINFORM.INS_DOCS_COV.value = 'All RISKS AND WAR RISKS';
        SYM_IPLC_ShowTransportDocument_CB();
        SYM_IPLC_ShowInsuranceDocument_CB();
        //SYM_IPLC_DocumentPresentation();
        SYF_IPLC_CHK_CONF_BAL();
        SYF_IPLC_CAL_FORM_OF_LC_40B();
        SYM_IPLC_INIT_FOR_DT();

        //SYM_IPLC_CHK_AVAL_WT_BK_OPT();
        //SYM_IPLC_TRAN_LC_FIELDS();


        SYT_ChangeFldClass(document.MAINFORM.GOODS_DESC, 'O');
        document.MAINFORM.LC_TYPE.value = 'Transfer LC'; // add by Jesse #3341 2014/3/13
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_LoadDoComplete = function() {
    try {

        var xDO; // Utility Auto Fix Comments
        xDO = SYS_getDoByXpath("PaymentTermsHeader");
        if (xDO) {
            SYM_IPLC_addPaymentRecord();
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        document.MAINFORM.TRACER_DATE.style.visibility = 'hidden';
        document.MAINFORM.BROKER_NM.style.visibility = 'hidden';
        document.MAINFORM.BROKER_ADD.style.visibility = 'hidden';
        SYF_IPLC_CAL_LC_BAL();
        SYF_IPLC_MPO_PERCTOL();
        onChangeDiary();
        // for documents tab
        SYM_IPLC_ShowAnalysisCertificate_CB();
        SYM_IPLC_ShowBeneficiaryCertificate_CB();
        SYM_IPLC_ShowCertificateofOrigin_CB();
        SYM_IPLC_ShowCertificateofQuality_CB();
        SYM_IPLC_ShowComm_Inv_CB();
        SYM_IPLC_ShowExportLicence_CB();
        SYM_IPLC_ShowInsuranceDocument_CB();
        SYM_IPLC_ShowPackingList_CB();
        SYM_IPLC_ShowTransportDocument_CB_notInit();
        SYM_IPLC_ShowWeightCertificate_CB();
        SYM_IPLC_showMixPayment();
        SYM_IPLC_Change_INCOTERMS_INSTR(); // Utility Auto Fix Comments
        SYF_IPLC_Change_APLB_RULE();
        SYF_IPLC_Change_EXPIRY_PLC();
        SYF_IPLC_Change_TNSHIP();
        SYF_IPLC_change_PARTIAL_SHIP();
        SYM_IPLC_ADV_BK_MAIL_ADD();
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.AVAL_WT_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REIM_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CONF_BK_NOTES.name);
        SYM_IPLC_CAL_ADV_BK_ID_back();
        SYM_IPLC_CAL_APPL_BK_ID_back();
        SYM_IPLC_CAL_APPL_ID_NOCHG_back();
        SYM_IPLC_CAL_AVAL_WT_BK_ID_back();
        SYM_IPLC_CAL_BENE_ID_NOCHG_back();
        SYM_IPLC_CAL_DRWE_ID_back();
        SYM_IPLC_CAL_REIM_BK_ID_back();
        SYM_IPLC_CHG_mapLocal_Foreign_Cust();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYF_IPLC_Charges();
            CHG_setAllChargeAt(1);
        }
        SYM_IPLC_Chg_Init_FOR_Charge();
        SYT_ChangeFldClass(document.MAINFORM.LTST_SHIP_DT, 'O');
        SYT_ChangeFldClass(document.MAINFORM.SHIP_PRD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.GOODS_DESC, 'O');
        SYS_GetTableDataByRule_S('SYF_IPLC_IPLC_IssueTransferLCOneStep_PostconditionOnInit_0', '1', 'Y');
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_change_PARTIAL_SHIP = function() {
    try {

        if (document.MAINFORM.PARTIAL_SHIP.value == 'OTHER') {
            document.MAINFORM.PARTIAL_SHIP_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.PARTIAL_SHIP_NARR.style.visibility = 'hidden';
            document.MAINFORM.PARTIAL_SHIP_NARR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_getDOdata_AdviceForBankCust = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            SYS_GetDataForDO_S("AdviceForBankCust", 'N', false);
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_MAIN_REF = function() {
    try {

        var MainRef; // Utility Auto Fix Comments
        var ref; // Utility Auto Fix Comments
        MainRef = document.MAINFORM.C_MAIN_REF.value;
        ref = MainRef.substr(0, 10);
        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_APPL_ID_FROM_BENE = function() {
    try {

        document.MAINFORM.APPL_ID.value = document.MAINFORM.BENE_ID.value;
        document.MAINFORM.APPL_NM.value = document.MAINFORM.BENE_NM.value;
        document.MAINFORM.APPL_ADD1.value = document.MAINFORM.BENE_ADD1.value;
        document.MAINFORM.APPL_ADD2.value = document.MAINFORM.BENE_ADD2.value;
        document.MAINFORM.APPL_ADD3.value = document.MAINFORM.BENE_ADD3.value;
        document.MAINFORM.APPL_CORR_MED.value = document.MAINFORM.BENE_CORR_MED.value;
        document.MAINFORM.APPL_EMAIL.value = document.MAINFORM.BENE_EMAIL.value;
        document.MAINFORM.APPL_FAX.value = document.MAINFORM.BENE_FAX.value;
        document.MAINFORM.APPL_LANG.value = document.MAINFORM.BENE_LANG.value;
        document.MAINFORM.APPL_MAIL_ADD.value = document.MAINFORM.BENE_MAIL_ADD.value;
        document.MAINFORM.APPL_NOTES.value = document.MAINFORM.BENE_NOTES.value;
        document.MAINFORM.APPL_REF.value = document.MAINFORM.BENE_REF.value;
        document.MAINFORM.APPL_TLX.value = document.MAINFORM.BENE_TLX.value;
        document.MAINFORM.AC_OFFICER_CODE.value = document.MAINFORM.BENE_AC_OFF_CODE.value;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_FORM_OF_LC_40B = function() {
    try {

        if (document.MAINFORM.OUR_ENG.value == 'CONFIRMATION' || document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION") {
            document.MAINFORM.FORM_OF_LC_40B.value = 'ADDING OUR CONFIRMATION';
        } else {
            document.MAINFORM.FORM_OF_LC_40B.value = 'WITHOUT OUR CONFIRMATION';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_LC_BAL = function() {
    try {

        var LC_AMT; // Utility Auto Fix Comments
        var LC_BAL_TEMP; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        var lc_bal; // Utility Auto Fix Comments
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
        lc_bal = LC_AMT + (LC_AMT * POS_TOL / 100);
        LC_BAL_TEMP = SYS_BeFloat(document.MAINFORM.LC_BAL_TEMP.value);
        document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, lc_bal);
        if (lc_bal > LC_BAL_TEMP) {
            SYS_CheckError(document.MAINFORM.LC_BAL, "The LC Balance can not exceed the available Transfer Balance of the Master LC");
        }
        EEHtml.fireEvent(document.MAINFORM.LC_BAL, "onchange"); //sunny20100204
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CHK_CONF_BAL = function() {
    try {

        if (document.MAINFORM.CONF_BAL.value > 0) {
            document.MAINFORM.CONF_ADDED.value = 'Yes';
        } else {
            document.MAINFORM.CONF_ADDED.value = 'No';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_SWIFT_CHARGE = function() {
    try {

        if (document.MAINFORM.ADV_BK_CORR_MED.value == 'SWIFT') {

            SYM_IPLC_Chg_SWIFT_CHG();
        } else {
            SYT_RESET_COMM('IPLC_SWIFT_CHG');
        }
        if (document.MAINFORM.ADV_BK_CORR_MED.value == 'Mail') {

            SYM_IPLC_Chg_SpecialCourier();
        } else {

            SYT_RESET_COMM('IPLC_COURIER_CHG');

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.LC_AMT.value) + SYS_BeFloat(document.MAINFORM.EPLC_TRANS_LC_AMT.value) > SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value)) {
            alert("system do not allow the user to transfer a total that is in excess of the original Export LC");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYM_IPLC_CAL_AMEND_PAYMENT_AMT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_TRAN_BAL_NEW = function() {
    try {

        var TRAN_BAL;
        var LC_AMT;
        TRAN_BAL = SYS_BeFloat(document.MAINFORM.TRAN_BAL.value);
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        document.MAINFORM.TRAN_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, TRAN_BAL - LC_AMT);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADDIT_CONDITION_CLAUSE_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('ADDIT_CONDITION');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_ADV_BK_MAIL_ADD();
        SYF_IPLC_SWIFT_CHARGE();
        SYF_IPLC_CHK_ADV_SW_for_AVAL_BY();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYF_IPLC_CHK_ADV_SW_for_AVAL_BY();
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
        SYM_IPLC_SQL_ADV_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_THU_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
        SYM_IPLC_SQL_ADV_THU_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AMT_SPEC_onchange = function(event) {
    try {
        SYF_IPLC_MPO_PERCTOL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APLB_RULE_onchange = function(event) {
    try {
        SYF_IPLC_Change_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL; // Utility Auto Fix Comments
        SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_APPL_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_APPL_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_APPL_BK_SW_TAG();
        SYM_IPLC_SQL_APPL_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_APPL_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_onchange = function(event) {
    try {
        SYF_IPLC_CAL_APPL_ID_inFUNC();
        EEHtml.fireEvent(document.MAINFORM.APPL_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_APPL_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL; // Utility Auto Fix Comments
        SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_BY_onchange = function(event) {
    try {
        SYF_IPLC_CHK_AVAL_BY();
        SYM_IPLC_CHK_AVAL_WT_BK_OPT();
        //modified for PUI
        SYM_IPLC_showMixPayment();
        SYM_IPLC_addPaymentRecord();
        //SYM_IPLC_PaymentAvailableByChange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_AVAL_WT_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_AVAL_WT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_OPT();
        EEHtml.fireEvent(document.MAINFORM.AVAL_WT_BK_SW_ADD, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_AVAL_WT_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_AVAL_WT_BK_SW_TAG();
        SYM_IPLC_SQL_AVAL_WT_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVLBL_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_AVAL_WT_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_AC_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ID();
        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BEN_CERT_CB_onclick = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
        SYM_IPLC_ShowBeneficiaryCertificate();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BEN_CERT_COPY_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BEN_CERT_TEXT_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BROKER_ADD_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BROKER_NM_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERT_ANALY_CB_onclick = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
        SYM_IPLC_ShowAnalysisCertificate();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERT_ANALY_COPY_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERT_EXPORT_CB_onclick = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
        SYM_IPLC_ShowExportLicence();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERT_EXPORT_COPY_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERT_EXPORT_TYPE_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERT_ORIG_CB_onclick = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
        SYM_IPLC_ShowCertificateofOrigin();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERT_ORIG_COPY_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERT_ORIG_TYPE_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERT_QTY_CB_onclick = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
        SYM_IPLC_ShowCertificateofQuality();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERT_QTY_COPY_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERT_WEIG_CB_onclick = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
        SYM_IPLC_ShowWeightCertificate();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CERT_WEIG_COPY_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHARGES_CLAUSE_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('CHARGES');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_COMM_INV_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_COMM_INV_CB_onclick = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
        SYM_IPLC_ShowComm_Inv();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_CONF_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_CONF_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_CONF_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CONF_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CAL_CONF_BK_ID_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_REQ_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('DOC_REQ');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRAFTS_AT_onchange = function(event) {
    try {
        SYF_IPLC_CHK_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_DRWE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_DRWE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_DRWE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_DRWE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ID_onchange = function(event) {
    try {
        SYF_IPLC_CHK_AVAL_BY();
        SYM_IPLC_CAL_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_DRWE_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_DRWE_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRWE_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_DRWE_SW_TAG();
        SYM_IPLC_SQL_DRWE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DRW_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_DRWE_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_IPLC_CHK_LATEST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_PLC_onchange = function(event) {
    try {
        SYF_IPLC_Change_EXPIRY_PLC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_GOODS_DESC_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('GOODS_DESC');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INCOTERMS_onchange = function(event) {
    try {
        SYM_IPLC_CHK_TRANS_DOCS_FREI();
        SYM_IPLC_CHK_INCOTERMS_FREI();
        SYM_IPLC_CHK_INCOTERMS_INSU();
        SYM_IPLC_CAL_INCOTERMS_INST();
        SYM_IPLC_Change_INCOTERMS_INSTR();
        SYM_IPLC_Cal_GOODS_DESC_ADD_INCO();
        document.MAINFORM.TEMP_DEST_PORT.value = document.MAINFORM.INCOTERM_INST.value;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INSTR_TO_PAY_BK_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('INSTR_TO_PAY_BK');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INS_DOCS_CB_onclick = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
        SYM_IPLC_ShowInsuranceDocument();
        if (document.MAINFORM.INS_DOCS_CB.checked == true) {
            EEHtml.getElementById("insurance document").style.display = "block";
        } else {
            EEHtml.getElementById("insurance document").style.display = "none";
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INS_DOCS_COV_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INS_DOCS_PERC_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INS_DOCS_TYPE_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ISSUE_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ISSUE_BK_MAIL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ISSUE_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ISSUE_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ISSUE_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ISSUE_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ISSUE_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ISSUE_BK_SW_TAG();
        SYM_IPLC_SQL_ISSUE_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_DT_onchange = function(event) {
    try {
        SYF_IPLC_CHK_LATEST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LC_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.LC_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.LC_AMT.value = 0;
        }


        if (SYS_BeFloat(document.MAINFORM.LC_AMT.value) > SYS_BeFloat(document.MAINFORM.TRAN_BAL.value)) {
            alert("The transfer LC amount should not greater than Transfer Banlance.");
            document.MAINFORM.LC_AMT.value = 0;
        }

        SYF_IPLC_CAL_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LC_CCY_onchange = function(event) {
    try {
        document.MAINFORM.ASSET_ACNO.value = '';
        document.MAINFORM.LIAB_ACNO.value = '';
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LTST_SHIP_DT_onchange = function(event) {
    try {
        SYF_IPLC_CHK_SHIP_PRD();
        SYF_IPLC_Cal_PRES_PRD_DAYS();
        SYF_IPLC_CHK_LATEST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_CB_onclick = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
        SYM_IPLC_ShowPackingList();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PACK_LIST_COPY_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PARTIAL_SHIP_onchange = function(event) {
    try {
        SYF_IPLC_change_PARTIAL_SHIP();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_POS_TOL_onchange = function(event) {
    try {
        SYF_IPLC_MPO_PERCTOL();
        SYF_IPLC_CAL_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_DAYS_onchange = function(event) {
    try {
        SYF_IPLC_CHK_PRES_DAYS();
        SYF_IPLC_Cal_PRES_PRD_TXT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_PRES_TYPE_onchange = function(event) {
    try {
        SYF_IPLC_Cal_PRES_PRD_TXT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_AUTH_REQ_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_AUTH_REQ();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_REIM_BK_MAIL_ADD();
        SYM_IPLC_CHK_REIM_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_REIM_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_REIM_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_REIM_BK_SW_TAG();
        SYM_IPLC_SQL_REIM_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_TO_RCV_INFO_CLAUSE_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('SEND_TO_RCV_INFO');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_SHIP_PRD_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TENOR_DAYS_onchange = function(event) {
    try {
        //modified for PUI
        /**
if('BY MIXED PYMT' != document.MAINFORM.AVAL_BY.value){
SYM_IPLC_addPaymentRecord();}
**/
        SYM_IPLC_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TENOR_TYPE_onchange = function(event) {
    try {
        //modified for PUI
        /**
if('BY MIXED PYMT' != document.MAINFORM.AVAL_BY.value){
SYM_IPLC_addPaymentRecord();}
**/
        SYM_IPLC_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TNSHIP_onchange = function(event) {
    try {
        SYF_IPLC_Change_TNSHIP();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TRACER_DATE_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TRANS_DOCS_APPL_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
        SYM_IPLC_Chk_TRANS_DOC_APL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TRANS_DOCS_CB_onclick = function(event) {
    try {
        SYM_IPLC_ShowTransportDocument_notInit();
        SYM_IPLC_ShowTransportDocument();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TRANS_DOCS_CONS_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TRANS_DOCS_FREI_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
        SYM_IPLC_CHK_INCOTERMS_FREI();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TRANS_DOCS_ORIG_onchange = function(event) {
    try {
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TRANS_DOCS_TYPE_onchange = function(event) {
    try {
        SYM_IPLC_CHK_TRANS_DOCS_TYPE();
        SYM_IPLC_DocumentPresentation();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_IssueTransferLCOneStep.js", e);
    }
}