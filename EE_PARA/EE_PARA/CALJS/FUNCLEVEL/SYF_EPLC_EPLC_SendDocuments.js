var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT();
        SYF_EPLC_MAP_RCV_DOC_BK();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_MAIL_CHG = function() {
    try {

        var nTimes; // Utility Auto Fix Comments
        var nTimes_1; // Utility Auto Fix Comments
        var nTimes_2; // Utility Auto Fix Comments
        var nTimes_Mail_Adv; // Utility Auto Fix Comments
        var nTimes_Mail_Schedule; // Utility Auto Fix Comments
        SYT_CAL_POST();
        return;
        /*
nTimes_1=0;
nTimes_2=0;
nTimes_Mail_Schedule=0;
nTimes_Mail_Adv = 0;
nTimes=0;

if(document.MAINFORM.MAIL_SCHEDU.value != ""){
	nTimes_Mail_Schedule =1;
}else{
	nTimes_Advice =0;
}
if (document.MAINFORM.MAIL_ADV.value != ""){
nTimes_Mail_Adv = 1;
}else{
nTimes_Mail_Adv = 0;
}
nTimes = nTimes_1 + nTimes_2 + nTimes_Mail_Schedule + nTimes_Mail_Adv;

//if nTimes is zero, the system will run Chg.reset() then return
SYT_CAL_POST(nTimes);
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_INT_TO_RUN = function() {
    try {

        SYF_EPLC_CAL_MAIL_CHG();
        SYF_EPLC_CAL_COURIER_CHG();
        SYF_EPLC_CAL_PAY_COMM();
        SYF_EPLC_CAL_DEF_PAY_COMM();
        SYT_CAL_COMM('EPLC_OTHER_CHG', document.MAINFORM.LC_CCY.value);
        //SYT_CAL_CABLE();
        SYF_EPLC_SWIFT_CHARGE();
        SYT_CAL_COMM("EPLC_DISCREP_COLL");
        SYT_CAL_COMM("EPLC_HANDLING_COMM");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYT_CHG_INIT('SYF_EPLC_CHG_INT_TO_RUN');
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.DRAWING_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYT_DisableDivClass('B_div');
        SYM_EPLC_M_PRES_BK_CLS();
        SYT_DisableDivClass('K_div');
        SYM_EPLC_Hidden_Mixpay_Separator();
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
        Chg.attchEvent('SYF_EPLC_ChgAttatch');
        SYF_EPLC_TTL_CLM_AMT();
        SYM_EPLC_M_CLASS_BY_ADVBK_CHG();
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MAP_RCV_DOC_BK = function() {
    try {

        document.MAINFORM.RCV_DOC_BK_ID.value = document.MAINFORM.ISSUE_BK_ID.value;
        document.MAINFORM.RCV_DOC_BK_NM.value = document.MAINFORM.ISSUE_BK_NM.value;
        document.MAINFORM.RCV_DOC_BK_NOTES.value = document.MAINFORM.ISSUE_BK_NOTES.value;
        document.MAINFORM.RCV_DOC_BK_SW_TAG.value = document.MAINFORM.ISSUE_BK_SW_TAG.value;
        document.MAINFORM.RCV_DOC_BK_MAIL_ADD.value = document.MAINFORM.ISSUE_BK_MAIL_ADD.value;
        document.MAINFORM.RCV_DOC_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_COURIER_CHG = function() {
    try {

        var nTimes; // Utility Auto Fix Comments
        var nTimes_1; // Utility Auto Fix Comments
        var nTimes_2; // Utility Auto Fix Comments
        SYT_CAL_COURIER();
        return;
        /*
nTimes_1=0;
nTimes_2=0;
nTimes=0;

nTimes =nTimes_1 + nTimes_2;
SYT_CAL_COURIER(nTimes);
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_PAY_COMM = function() {
    try {

        SYT_CAL_COMM('EPLC_UTIL_SIGHT_CHG', document.MAINFORM.LC_CCY.value, document.MAINFORM.PRES_AMT_LC_CCY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_DEF_PAY_COMM = function() {
    try {

        SYT_CAL_COMM('EPLC_UTIL_DEF_CHG', document.MAINFORM.LC_CCY.value, document.MAINFORM.PRES_AMT_LC_CCY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_TTL_CLM_AMT = function() {
    try {

        var ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var ADV_BK_CHGS; // Utility Auto Fix Comments
        var CHGS_DEDUCTED; // Utility Auto Fix Comments
        var ISSUE_BK_CHG; // Utility Auto Fix Comments
        var OUR_CHGS_APPL; // Utility Auto Fix Comments
        var PRES_AMT; // Utility Auto Fix Comments
        var PRES_BK_CHGS; // Utility Auto Fix Comments
        var REIM_BK_CHG; // Utility Auto Fix Comments
        var TTL_CLM_AMT; // Utility Auto Fix Comments
        ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        OUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
        ISSUE_BK_CHG = SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value);
        CHGS_DEDUCTED = SYS_BeFloat(document.MAINFORM.CHGS_DEDUCTED.value);
        REIM_BK_CHG = SYS_BeFloat(document.MAINFORM.REIM_BK_CHG.value);
        PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        TTL_CLM_AMT = SYS_BeFloat(document.MAINFORM.TTL_CLM_AMT.value);

        TTL_CLM_AMT = PRES_AMT + ADV_BK_CHGS + ADDIT_PRES_BK_AMTS + PRES_BK_CHGS + OUR_CHGS_APPL; // Utility Auto Fix Comments
        document.MAINFORM.TTL_CLM_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, TTL_CLM_AMT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_loadDoDataComplete = function() {
    try {

        document.MAINFORM.OUR_CHGS_APPL.value = Chg.Screen.getForeignBalTotalAmt(document.MAINFORM.CHG_FLD_ALL_BAL_CCY.value);

        EEHtml.fireEvent(document.MAINFORM.ADV_BK_CHGS, 'onchange');
        SYS_DisableDoButton("PaymentSchedule", "ADD,EDIT,DEL", false);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_SWIFT_CHARGE = function() {
    try {

        if (document.MAINFORM.DOC_STAT.value == 'Discrepancy Found' && document.MAINFORM.SEND_MT750_FLG.value == 'Yes') {
            SYT_CAL_CABLE();
        } else {
            SYT_RESET_COMM('EPLC_SWIFT_CHG');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_ChgAttatch = function() {
    try {

        document.MAINFORM.OUR_CHGS_APPL.value = Chg.Screen.getForeignBalTotalAmt(document.MAINFORM.CHG_FLD_ALL_BAL_CCY.value);
        EEHtml.fireEvent(document.MAINFORM.ADV_BK_CHGS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_DisableDoButton("PaymentSchedule", "ADD,EDIT,DEL", true);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AC_WT_BK_ADD', 'AC_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AC_WT_BK_ID', 'AC_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ID_BTN_onclick = function(event) {
    try {
        //SYT_BankLookUp(event.currentTarget);
        SYS_InqCUBK('AC_WT_BK_ID', 'AC_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AC_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AC_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADDIT_PRES_BK_AMTS_onchange = function(event) {
    try {
        if (document.MAINFORM.ADDIT_PRES_BK_AMTS.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.ADDIT_PRES_BK_AMTS.value = 0;
        }


        SYF_EPLC_TTL_CLM_AMT();
        SYM_EPLC_Add_Charge();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_BK_CHGS_onchange = function(event) {
    try {
        if (document.MAINFORM.ADV_BK_CHGS.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.ADV_BK_CHGS.value = 0;
        }


        SYF_EPLC_TTL_CLM_AMT();
        SYM_EPLC_M_CLASS_BY_ADVBK_CHG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHGS_DEDUCTED_onchange = function(event) {
    try {
        SYF_EPLC_TTL_CLM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_CHG_onchange = function(event) {
    try {
        SYF_EPLC_TTL_CLM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_CHGS_APPL_onchange = function(event) {
    try {
        SYF_EPLC_TTL_CLM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        var nfieldname; // Utility Auto Fix Comments
        nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYS_InqCUBK('BENE_NEGO_ID_ADD', 'PRES_BK_ID', 'ID');
            } else {
                SYS_InqCUBK('PRES_BK_ADD', 'PRES_BK_ID', 'ID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CHGS_onchange = function(event) {
    try {
        if (document.MAINFORM.PRES_BK_CHGS.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.PRES_BK_CHGS.value = 0;
        }


        SYF_EPLC_TTL_CLM_AMT();
        SYM_EPLC_PRE_Charge();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_EMAIL_onchange = function(event) {
    try {
        var chkemail = document.MAINFORM.PRES_BK_EMAIL.value;
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(chkemail) == false) {
            alert("enter valid email address");
            document.MAINFORM.PRES_BK_EMAIL.value = "";
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_onchange = function(event) {
    try {
        var nfieldname; // Utility Auto Fix Comments
        nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYT_GetCUBK_All('BENE_NEGO_ID', document.MAINFORM.PRES_BK_ID.name);
                lbi_CLASS_DOC_PRES_BY();
            } else {
                SYT_GetCUBK_All('PRES_BK_ID', document.MAINFORM.PRES_BK_ID.name);
            }
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'RegisterDocsnot') {

            SYM_EPLC_PRES_BK_TO_BENE();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        var nfieldname; // Utility Auto Fix Comments
        nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYM_EPLC_SQL_PRESENTER_CUST();
            } else {
                SYT_BankLookUp(event.currentTarget);
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_POST_ADD', 'PRES_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_DOC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_DOC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_DOC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('RCV_DOC_BK_ID', 'RCV_DOC_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_ID_BTN_onclick = function(event) {
    try {
        //SYT_BankLookUp(event.currentTarget);
        SYS_InqCUBK('RCV_DOC_BK_ID', 'RCV_DOC_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.RCV_DOC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('RCV_DOC_BK_POST_ADD', 'RCV_DOC_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_RCV_DOC_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_CHG_onchange = function(event) {
    try {
        SYF_EPLC_TTL_CLM_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_SendDocuments.js", e);
    }
}