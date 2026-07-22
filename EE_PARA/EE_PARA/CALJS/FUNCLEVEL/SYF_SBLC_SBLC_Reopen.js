var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_SBLC_CAL_ADV_COMM = function() {
    try {

        SYT_CAL_COMM('SBLC_ADV_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Reopen.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        document.MAINFORM.CLS_FLG.value = 'NO';
        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Reopen.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        disableToolbarButton("_SaveTmpl");
        disableToolbarButton("_LoadTmpl");
        SYF_SBLC_To_Decimal();
        SYT_CHG_INIT('SYF_SBLC_CHG_INT_RUN');
        SYM_SBLC_LC_CCY();
        SYM_SBLC_LC_CCY_BAL();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        // SET FOR CHARGES
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'M');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Reopen.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CAL_ISSUE_COMM = function() {
    try {

        SYT_CAL_COMM('SBLC_ISS_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Reopen.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'Reopen';
        document.MAINFORM.NXT_STATUS.value = 'Active';
        var LC_Bal = document.MAINFORM.LC_BAL.value;
        var EXCH_RATE = document.MAINFORM.EXCH_RATE.value;
        var LC_BAL_LOC = LC_Bal * EXCH_RATE;
        document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, LC_Bal);
        document.MAINFORM.EXCH_RATE.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, EXCH_RATE);
        document.MAINFORM.BASE_BAL.value = SYT_AmtFormat(SYS_LOCAL_CCY, LC_BAL_LOC);
        document.MAINFORM.CLS_FLG.value = 'NO';
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Reopen.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CHG_INT_RUN = function() {
    try {

        /*
if(SYS_FUNCTION_TYPE !='RE' && SYS_FUNCTION_TYPE !='IQ' && SYS_FUNCTION_TYPE !='EC'){

	//SYF_SBLC_CAL_ADV_COMM();
	//SYF_SBLC_CAL_ISSUE_COMM();
//	SYT_CAL_CABLE();
//	SYT_CAL_POST();
	//SYT_CAL_COURIER();
	//SYM_SBLC_CAL_OTHER_CHARGE();
//	SYM_SBLC_CAL_COMMUN_CHG();
}
*/
        SYM_SBLC_chg_Init_FOR_Charge();
        SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_CCY, 'P');
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Reopen.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_To_Decimal = function() {
    try {

        //var amt = document.MAINFORM.LC_BAL.value;
        //var base_bal=document.MAINFORM.BASE_BAL.value;
        document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_BAL.value);
        document.MAINFORM.BASE_BAL.value = SYT_AmtFormat(SYS_LOCAL_CCY, document.MAINFORM.BASE_BAL.value);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Reopen.js", e);
    }
}

csFuncLevelProto.SYF_SBLC_CalculationofExcahngerate = function() {
    try {

        var lc_bal = document.MAINFORM.LC_BAL.value;
        var EXCH_RATE = document.MAINFORM.EXCH_RATE.value;
        var LC_BAL_LOC = lc_bal * EXCH_RATE;
        document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, lc_bal);
        document.MAINFORM.EXCH_RATE.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, EXCH_RATE);
        document.MAINFORM.BASE_BAL.value = SYT_AmtFormat(SYS_LOCAL_CCY, LC_BAL_LOC);
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Reopen.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Reopen.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Reopen.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_LC_BAL_onchange = function(event) {
    try {
        SYF_SBLC_CalculationofExcahngerate();
        SYF_SBLC_To_Decimal();
        SYM_SBLC_LC_CCY();
        SYM_SBLC_LC_CCY_BAL();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Reopen.js", e);
    }
}

csFuncLevelProto.FLD_SBLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SBLC_SBLC_Reopen.js", e);
    }
}