var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT_1ST();
        SYF_EPLC_CAL_LC_BAL();
        document.MAINFORM.PRE_ADV_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.AVAL_WT_BK_NM.value = 'ANY BANK';
        document.MAINFORM.ISSUE_BK_CHG_CCY.value = document.MAINFORM.LC_CCY.value;

        //for MT730 Tag 30
        document.MAINFORM.TEMP_MT730_TAG30.value = document.MAINFORM.TRX_DT.value;
        document.MAINFORM.BASE_CCY.value = SYS_LOCAL_CCY;
        SYM_EPLC_BASE_LCY_BAL();
        SYM_EPLC_BASE_LCY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_LC_BAL = function() {
    try {

        SYM_EPLC_CAL_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();
        SYM_EPLC_M_TOL_TAG39();
        SYM_EPLC_M_TAG41D_MAP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_LTST_SHIP_DT = function() {
    try {

        SYM_EPLC_M_CHK_LTST_SHIP_DT(document.MAINFORM.LTST_SHIP_DT, document.MAINFORM.EXPIRY_DT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_POS_NEG_TOL = function() {
    try {

        SYM_EPLC_M_CLASS_BY_39B(document.MAINFORM.AMT_SPEC.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_PRE_ADV_COMM = function() {
    try {

        SYT_CAL_COMM('EPLC_PRE-ADV_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_MAIL_CHG = function() {
    try {

        SYT_CAL_POST();
        return;
        /*
if (document.MAINFORM.ADV_LC_BY.value == 'Mail to Beneficiary'||document.MAINFORM.ADV_LC_BY.value=="Mail to beneficiary's Bank"){
	SYT_CAL_POST();
}else{
	SYT_RESET_POST();
}
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CABLE = function() {
    try {

        SYT_CAL_CABLE();
        return;
        /*
var ACKNLDG = 0;
var ADV_BY = 0;
if(document.MAINFORM.ACK_MTHD.value == "MT730"){
		
		ACKNLDG = 1;		
	}else {
		ACKNLDG =0;
}
if(document.MAINFORM.ADV_LC_BY.value == "SWIFT to Beneficiary's Bank"){
		
		ADV_BY = 1;	
}else{
		ADV_BY = 0;
				}
				
	plusTimes = ACKNLDG + ADV_BY;

if( plusTimes == 0 ){
	SYT_RESET_CABLE();
}else {
	SYT_CAL_CABLE(plusTimes);
}
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_INT_RUN = function() {
    try {

        SYF_EPLC_CAL_PRE_ADV_COMM();
        SYF_EPLC_CAL_CABLE();
        SYF_EPLC_CAL_MAIL_CHG();
        SYT_CAL_COURIER();
        SYT_CAL_COMM('EPLC_OTHER_CHG', document.MAINFORM.LC_CCY.value);
        //set charge paid at as DEFERRED
        if (SYS_FUNCTION_TYPE == "PM") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYT_CHG_INIT('SYF_EPLC_CHG_INT_RUN');

        SYM_EPLC_M_CLASS_TRM_TO_BK();
        SYF_EPLC_MPO_NARR_TAG79_MT799();
        SYM_EPLC_M_CLASS_BY_BENE_CORR_MED();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.BENE_LANG, 'O');
        CHG_DefCharge_chargeAtOnchange();
        FLD_EPLC_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_GET_REF_21 = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_NARR_TAG79_MT799 = function() {
    try {

        if (document.MAINFORM.ACK_MTHD.value == "MT799" || document.MAINFORM.ACK_MTHD.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.NARR_TAG79_MT799, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CLAUSE_BUTTON, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NARR_TAG79_MT799, 'B');
            SYT_ChangeFldClass(document.MAINFORM.CLAUSE_BUTTON, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_PREADV_EXP_DT = function() {
    try {

        SYM_EPLC_CAL_EXPIRY_PRE_ADV_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_AFTER_BENE_ID = function() {
    try {

        SYF_EPLC_CHG_INT_RUN();
        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_SHIP_PRD = function() {
    try {

        SYM_EPLC_M_CHK_SHP_PRD(document.MAINFORM.LTST_SHIP_DT, document.MAINFORM.SHIP_PRD);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_AVAL_BY = function() {
    try {

        SYM_EPLC_M_CLASS_AVAL_BY(document.MAINFORM.OUR_ROLE.value, document.MAINFORM.ADV_LC_BY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_ISS_EXP_DT = function() {
    try {

        SYM_EPLC_M_CHK_EXPIRY_DT(document.MAINFORM.ISSUE_DT, document.MAINFORM.EXPIRY_DT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_TRAN_BAL = function() {
    try {

        var TRAN_BAL;
        var LC_AMT;
        TRAN_BAL = SYS_BeFloat(document.MAINFORM.TRAN_BAL.value);
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);

        if (document.MAINFORM.FORM_OF_LC.value == 'IRREVOCABLE TRANSFERABLE' || document.MAINFORM.FORM_OF_LC.value == 'REVOCABLE TRANSFERABLE') {
            document.MAINFORM.TRAN_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, LC_AMT);
        } else {
            document.MAINFORM.TRAN_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.OnLoadTemplate = function() {
    try {

        CHG_allTrxChargeAt_onchange();
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_EXP_ISS_DT = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        var oISSUE_DT = document.MAINFORM.ISSUE_DT.value.length;
        var oEXPIRY_DT = document.MAINFORM.EXPIRY_DT.value.length;
        if (oISSUE_DT > 0 && oEXPIRY_DT > 0) {
            nDays = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.EXPIRY_DT.name);
            if (nDays <= 0) {
                SYS_CheckError(document.MAINFORM.EXPIRY_DT, "Expiry Date should be later than Issue Date!");
                document.MAINFORM.EXPIRY_DT.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_EXP_PRE_ADV_DT = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        nDays = SYS_GetSubDays(document.MAINFORM.PRE_ADV_DT.name, document.MAINFORM.EXPIRY_DT.name);
        if (nDays < 0) {
            SYS_CheckError(document.MAINFORM.PRE_ADV_DT, "Expiry Date should be later than Pre Advise Date!");
            document.MAINFORM.EXPIRY_DT.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ACK_MTHD_onchange = function(event) {
    try {
        SYF_EPLC_MPO_NARR_TAG79_MT799();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_LC_BY_onchange = function(event) {
    try {
        SYF_EPLC_MPO_AVAL_BY();
        SYM_EPLC_M_CLASS_TRM_TO_BK();
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('ADV_THU_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
        SYS_InqCUBK_byCondition('APPL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('APPL_ID', 'APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('AVAL_WT_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
        SYS_InqCUBK_byCondition('BENE_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_BENE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_EMAIL_onchange = function(event) {
    try {
        var chkemail = document.MAINFORM.BENE_EMAIL.value;
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(chkemail) == false) {
            alert("enter valid email address");
            document.MAINFORM.BENE_EMAIL.value = "";
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID', 'SYF_EPLC_AFTER_BENE_ID()');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        //SYT_CustLookUp(event.currentTarget);
        SYS_InqCUBK('BENE_ID', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_NM_onchange = function(event) {
    try {
        SYF_EPLC_AFTER_BENE_ID();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CLAUSE_BUTTON_onclick = function(event) {
    try {
        return SYS_InsertClause('NARR_TAG79_MT799');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_EXPIRY_DT_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_TRX_DT_EXP_DT();
        SYF_EPLC_CHK_EXP_PRE_ADV_DT();
        SYF_EPLC_CHK_EXP_ISS_DT();
        SYF_EPLC_CHK_LTST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FORM_OF_LC_onchange = function(event) {
    try {
        SYF_EPLC_TRAN_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('ISSUE_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_CHG_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.ISSUE_BK_CHG.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_DT_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_TRX_DT_ISSUE_DT();
        SYF_EPLC_CHK_ISS_EXP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LC_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.LC_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.LC_AMT.value = 0;
        }
        SYF_EPLC_TRAN_BAL();
        SYF_EPLC_CAL_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.LC_BAL, 'onchange');
        SYM_EPLC_BASE_LCY_BAL();
        SYM_EPLC_BASE_LCY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LC_CCY_onchange = function(event) {
    try {
        document.MAINFORM.ISSUE_BK_CHG_CCY.value = document.MAINFORM.LC_CCY.value;
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        SYM_EPLC_BASE_LCY_BAL();
        SYM_EPLC_BASE_LCY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LC_NO_onchange = function(event) {
    try {
        SYF_EPLC_GET_REF_21();
        EEHtml.fireEvent(document.MAINFORM.TEMP_N90_REF_21, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LTST_SHIP_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_LTST_SHIP_DT();
        SYF_EPLC_CHK_SHIP_PRD();
        SYM_EPLC_M_CHK_TRX_DT_LTST_SHIP_DT();
        SYM_EPLC_CHK_LTST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ROLE_onchange = function(event) {
    try {
        SYF_EPLC_MPO_AVAL_BY();
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
        EEHtml.fireEvent(document.MAINFORM.ADV_LC_BY, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_POS_TOL_onchange = function(event) {
    try {
        SYF_EPLC_CAL_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.LC_BAL, 'onchange');
        SYM_EPLC_BASE_LCY_BAL();
        SYM_EPLC_BASE_LCY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRE_ADV_DT_onchange = function(event) {
    try {
        //SYF_EPLC_CHK_PREADV_EXP_DT();
        SYM_EPLC_M_CHK_PRE_ADV_DT();
        SYM_EPLC_CAL_EXPIRY_PRE_ADV_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SHIP_PRD_onchange = function(event) {
    try {
        SYF_EPLC_CHK_SHIP_PRD();
        SYM_EPLC_CHK_SHIP_PRD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('TRM_TO_BK_ADD', 'TRM_TO_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('TRM_TO_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('TRM_TO_BK_ID', 'TRM_TO_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('TRM_TO_BK_POST_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRX_DT_onchange = function(event) {
    try {
        var nDays;
        nDays = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.EXPIRY_DT.name);
        if (nDays < 0) {
            SYS_CheckError(document.MAINFORM.EXPIRY_DT, "Transaction date should not be later than expiry date!");
            document.MAINFORM.EXPIRY_DT.value = '';
            document.MAINFORM.TRX_DT.value = '';
        }
        var nDay1;
        nDay1 = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.PRE_ADV_DT.name);
        if (nDay1 < 0) {
            SYS_CheckError(document.MAINFORM.TRX_DT, "Transaction date should not be later than Pre advice date!");
            document.MAINFORM.TRX_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterPreAdvice.js", e);
    }
}