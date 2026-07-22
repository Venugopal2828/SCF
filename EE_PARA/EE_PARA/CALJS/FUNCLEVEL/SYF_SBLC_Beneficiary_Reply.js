var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_SBLC_Checkin_ReplayDate_Expiry = function() {
    try {

        var ndays; // Utility Auto Fix Comments
        ndays = SYS_GetSubDays(document.MAINFORM.EXPIRY_DT.name, document.MAINFORM.FA_REPL_DT.name);
        if (ndays > 0) {
            alert('Replay Date Must be lesser than Expiry Date');
            document.MAINFORM.FA_REPL_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        SYM_SBLC_CAL_TEMP_AMPOUNT_AMD();
        SYM_SBLC_CAL_TEMP_FIELDS_AMD();
        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        disableToolbarButton("_SaveTmpl");
        disableToolbarButton("_LoadTmpl");
        SYT_CHG_INIT('SYF_SBLC_CHG_INT_RUN');
        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ADD_BTN, 'P');
        //SYM_SBLC_LC_CCY();
        //SYM_SBLC_LC_CCY_BAL();

        // SET FOR CHARGES
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'M');

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;

        SYF_SBLC_Beneficiary_Amount_Format();

        SYM_SBLC_AMEND_EXCH_RT();
        SYM_SBLC_AMEND_LC_CCY();
        SYM_SBLC_Show_Format_MT707();
        SYM_SBLC_Show_Format_MT767();
        SYM_SBLC_Show_Format_Amend_Mail();
        //SYM_SBLC_Show_Amend_AutoRenew();
        EEHtml.getElementById('F').style.display = 'none';
        SYT_ChangeFldClass(document.MAINFORM.NEW_FREQUENCY, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_RENEWAL_STATUS, 'O');

        if (document.MAINFORM.NO_OF_AMD_B.value == '' || document.MAINFORM.NO_OF_AMD_B.value == '0') {
            document.MAINFORM.NO_OF_AMD_B.value = '';
        }
        if (document.MAINFORM.NEW_NEG_TOL.value == '' || document.MAINFORM.NEW_NEG_TOL.value == '0') {
            document.MAINFORM.NEW_NEG_TOL.value = '';
        }
        if (document.MAINFORM.NEW_POS_TOL.value == '' || document.MAINFORM.NEW_POS_TOL.value == '0') {
            document.MAINFORM.NEW_POS_TOL.value = '';
        }
        FLD_SBLC_DIARY_NARRATIVE_onchange();
        //CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Checking_ReplayDate_and_Amendment = function() {
    try {

        var ndays; // Utility Auto Fix Comments
        ndays = SYS_GetSubDays(document.MAINFORM.AMD_DT.name, document.MAINFORM.FA_REPL_DT.name);

        if (ndays < 0) {
            alert('Replay Date Must be grater than Amendment Date');
            document.MAINFORM.FA_REPL_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'Beneficiary'; // Utility Auto Fix Comments
        document.MAINFORM.NXT_STATUS.value = 'Active';

        document.MAINFORM.NO_OF_AMD_B.value = NO_OF_AMD_B;
        document.MAINFORM.NO_OF_AMD.value = NO_OF_AMD;

        /*if (document.MAINFORM.NEW_FREQUENCY.value != '') {
           EEHtml.getElementById('F').style.display = '';
        } else {
           EEHtml.getElementById('F').style.display = 'none';
        }*/

        if (document.MAINFORM.MESG_TYPE.value == 'MT707') {
            EEHtml.getElementById('C').style.display = '';
        } else {
            EEHtml.getElementById('C').style.display = 'none';
        }
        if (document.MAINFORM.MESG_TYPE.value == 'MT767') {
            EEHtml.getElementById('D').style.display = '';
        } else {
            EEHtml.getElementById('D').style.display = 'none';
        }
        if (document.MAINFORM.MESG_TYPE.value == 'MAIL') {
            EEHtml.getElementById('E').style.display = '';
        } else {
            EEHtml.getElementById('E').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_DisableTabs = function() {
    try {

        EEHtml.getElementById('C').style.display = 'none';
        EEHtml.getElementById('D').style.display = 'none';
        EEHtml.getElementById('E').style.display = 'none';
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Checking_NewExpiry_ReplayDate = function() {
    try {

        var ndays; // Utility Auto Fix Comments
        ndays = SYS_GetSubDays(document.MAINFORM.NEW_EXPIRY_DT.name, document.MAINFORM.FA_REPL_DT.name);
        if (ndays > 0) {
            alert('Replay Date must be Lesser than New Expiry Date');
            document.MAINFORM.FA_REPL_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CHG_INT_RUN = function() {
    try {

        /*
if(SYS_FUNCTION_TYPE!='RE' && SYS_FUNCTION_TYPE!='EC' && SYS_FUNCTION_TYPE!='IQ'){
	

//	SYM_SBLC_CAL_POST_COMM();
//	SYM_SBLC_CAL_ADV_COMM();
//	SYM_SBLC_CAL_ISS_COMM();
//	SYM_SBLC_CAL_AMD_CHG();
	//SYM_SBLC_CAL_OTHER_CHARGE();
	//SYM_SBLC_CAL_COMMUN_CHG();
//	SYT_CAL_CABLE();
//	SYT_CAL_COURIER();
//	SYT_CAL_POST();

	}
*/
        SYM_SBLC_chg_Init_FOR_Charge();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'P');
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Checking_ReplayDate_issueDate = function() {
    try {

        var ndays; // Utility Auto Fix Comments
        ndays = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.FA_REPL_DT.name);
        if (ndays < 0) {
            alert('Replay Date Must be greatre than issue Date');
            document.MAINFORM.FA_REPL_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_Beneficiary_Amount_Format = function() {
    try {

        document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.INC_AMT.value);
        document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.DEC_AMT.value);
        document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.NEW_LC_AMT.value);
        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.NEW_LC_BAL.value);
        document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.NEW_LIAB_BAL.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        document.MAINFORM.FA_REPL_DT.value = SYS_BUSI_DATE;
        SYT_DisableDivClass('partiesTab');
        SYT_DisableDivClass('MT707TAB');
        SYT_DisableDivClass('MT767Tab');
        SYT_DisableDivClass('MAILTab');
        SYT_DisableDivClass('Auto-Renewal_Tab');
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.TEMP_LC_BAL.value = document.MAINFORM.NEW_LC_CONF_BAL.value;
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_AMD_DT_onchange = function(event) {
    try {
        SYF_SBLC_Checking_ReplayDate_and_Amendment();
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_SBLC_Checkin_ReplayDate_Expiry();
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_FA_REPL_DT_onchange = function(event) {
    try {
        SYF_SBLC_Checking_ReplayDate_and_Amendment();
        SYF_SBLC_Checking_ReplayDate_issueDate();
        SYF_SBLC_Checking_NewExpiry_ReplayDate();
        SYF_SBLC_Checkin_ReplayDate_Expiry();
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SBLC_Beneficiary_Reply.js", e);
    }
}