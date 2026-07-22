var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IPLC_CHK_MASTER_EXP_DT = function() {
    try {

        var nDays1; // Utility Auto Fix Comments
        var nDays2; // Utility Auto Fix Comments
        var nDays3; // Utility Auto Fix Comments
        nDays1 = SYS_GetSubDays(document.MAINFORM.MAST_START_DT.name, document.MAINFORM.MAST_EXPIRY_DT.name);
        nDays2 = SYS_GetSubDays(document.MAINFORM.MAST_START_DT.name, document.MAINFORM.EXPIRY_DT.name);
        nDays3 = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.MAST_EXPIRY_DT.name);

        if (nDays1 < 0) {
            SYS_CheckError(document.MAINFORM.MAST_START_DT, 'Issue date should be earlier than Master LC Expiry Date!');

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
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Change_EXPIRY_PLC = function() {
    try {

        var EXPIRY_PLC; // Utility Auto Fix Comments
        EXPIRY_PLC = document.MAINFORM.EXPIRY_PLC.value;
        if (EXPIRY_PLC == "Other") {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC_NARR, 'M');
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'visible';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.EXPIRY_PLC_NARR, 'O');
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'hidden';
            document.MAINFORM.EXPIRY_PLC_NARR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('IPLC', 'SYM_IPLC_setRef');
        //Get record from export lc
        SYM_IPLC_Get_NARR_From_EPLC();
        document.MAINFORM.MAST_C_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value; // Utility Auto Fix Comments
        document.MAINFORM.MAST_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value; // Utility Auto Fix Comments
        document.MAINFORM.MAST_LC_AMT.value = document.MAINFORM.LC_AMT.value;
        document.MAINFORM.LC_AMT.value = '0.00';
        document.MAINFORM.LC_BAL_TEMP.value = document.MAINFORM.LC_BAL.value;
        document.MAINFORM.MAST_LC_CCY.value = document.MAINFORM.LC_CCY.value;
        document.MAINFORM.MAST_LC_NO.value = document.MAINFORM.LC_NO.value;
        document.MAINFORM.MAST_START_DT.value = document.MAINFORM.ISSUE_DT.value;
        //Set Ref in Current transaction
        document.MAINFORM.CURRNT_STATUS.value = 'IPLC_REG_TRN_LC';
        document.MAINFORM.NXT_STATUS.value = 'IPLC_ISS_TRN_LC';
        document.MAINFORM.LCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.TRX_DT.value = SYS_DATE;
        document.MAINFORM.CLS_FLG.value = 'No';
        document.MAINFORM.FORM_OF_LC.value = 'IRREVOCABLE';

        SYM_IPLC_BENE_To_APPL();

        SYF_IPLC_CHK_CONF_BAL();
        SYF_IPLC_CAL_FORM_OF_LC_40B();

        SYM_IPLC_INIT_FOR_DT();

        document.MAINFORM.LC_TYPE.value = 'Transfer LC'; // add by Jesse #3341 2014/3/13
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
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
        EEHtml.fireEvent(document.MAINFORM.LC_BAL, "onchange"); //sunny
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_IPLC_CAL_LC_BAL();
        SYF_IPLC_MPO_PERCTOL();
        onChangeDiary();
        SYF_IPLC_Change_EXPIRY_PLC();
        SYF_IPLC_Change_APLB_RULE();

        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYM_IPLC_CAL_APPL_ID_NOCHG_back();
        SYM_IPLC_CAL_BENE_ID_NOCHG_back();

        //SYF_IPLC_CAL_MAIN_REF();
        //SYM_IPLC_CAL_LC_NO_DEFAULT_VALUE();
        document.MAINFORM.ISSUE_DT.value = '';
        SYF_IPLC_CHK_MASTER_EXP_DT();
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_ChangeFldClass(document.MAINFORM.GRP_ID, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_Tolerance = function() {
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
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_EXPIRY_PLACE = function() {
    try {

        var temp_expiry_plc; // Utility Auto Fix Comments
        if (document.MAINFORM.EXPIRY_PLC.value != 'Other') {
            temp_expiry_plc = document.MAINFORM.EXPIRY_PLC.value;
        } else {
            temp_expiry_plc = document.MAINFORM.EXPIRY_PLC_NARR.value;
        }

        document.MAINFORM.EXPIRY_PLC_NARR.value = temp_expiry_plc;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        //SYM_IPLC_CAL_LC_NO_DEFAULT_VALUE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AMT_SPEC_onchange = function(event) {
    try {
        SYF_IPLC_MPO_PERCTOL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APLB_RULE_onchange = function(event) {
    try {
        SYF_IPLC_Change_APLB_RULE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_APPL_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_ID_NOCHG();
        EEHtml.fireEvent(document.MAINFORM.APPL_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_APPL_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_AC_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ID_NOCHG();
        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_C_MAIN_REF_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_IPLC_CHK_MASTER_EXP_DT();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_PLC_onchange = function(event) {
    try {
        SYF_IPLC_Change_EXPIRY_PLC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_POS_TOL_onchange = function(event) {
    try {
        SYF_IPLC_MPO_PERCTOL();
        SYF_IPLC_CAL_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RegisterTransferLC.js", e);
    }
}