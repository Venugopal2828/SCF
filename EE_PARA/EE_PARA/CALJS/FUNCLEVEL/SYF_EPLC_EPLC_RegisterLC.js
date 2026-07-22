var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT_1ST();

        //define value

        SYF_EPLC_OUR_ENG();
        document.MAINFORM.AVAL_WT_BK_NM.value = 'ANY BANK';
        document.MAINFORM.ISSUE_BK_CHG_CCY.value = document.MAINFORM.LC_CCY.value;
        SYM_EPLC_ADV_DEFAULT_VALUE();
        document.MAINFORM.FORM_OF_LC.value = "IRREVOCABLE";
        document.MAINFORM.APLB_RULE.value = "UCP LATEST VERSION";
        document.MAINFORM.BASE_CCY.value = SYS_LOCAL_CCY;
        SYM_EPLC_BASE_LCY_BAL();
        SYM_EPLC_BASE_LCY();
        document.MAINFORM.ADV_DT.value = SYS_BUSI_DATE;

    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        //for class
        SYF_EPLC_CLASS_BY_39B();
        SYF_EPLC_CLASS_BY_40E();
        SYF_EPLC_CLASS_BY_43P();
        SYF_EPLC_CLASS_BY_43T();
        SYF_EPLC_CLASS_BY_ADV_LC_BY();
        SYF_EPLC_CLASS_BY_MESG_TYPE();
        SYM_EPLC_CHK_AVAL_BY_INIT();
        SYF_EPLC_CLASS_42C42a();
        //SYF_EPLC_CLASS_BY_TENOR_TYPE();
        SYF_EPLC_SENDER_REF();
        SYM_EPLC_M_CLASS_BY_BENE_CORR_MED();

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;

        SYM_EPLC_Hidden_Mixpay_Separator();
        SYM_EPLC_MPO_REVOLVE_LC_INFO();
        FLD_EPLC_DIARY_NARRATIVE_onchange();
        //SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M');
          if (document.MAINFORM.CONF_INSTR.value == "CONFIRM") {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M'); //Add on 20111129 for SWIFT 2018 Requirement enhancement;
        } else if (document.MAINFORM.CONF_INSTR.value == 'WITHOUT') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M'); //Add on 20111129 for SWIFT 2018 Requirement enhancement;
        }
        CLASS_42C42a();
        SYM_EPLC_CHK_AVAL_BY();
        SYF_EPLC_CLASS_BY_TENOR_TYPE();
        FLD_EPLC_TENOR_TYPE_onchange();
        FLD_EPLC_AVAL_BY_onchange(); //added
        SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'M'); 
        SYT_ChangeFldClass(document.MAINFORM.PAY_AT, 'M'); 
        SYT_ChangeFldClass(document.MAINFORM.ACPT_BY, 'M'); 
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_40E = function() {
    try {

        SYM_EPLC_M_CLASS_BY_40E(document.MAINFORM.APLB_RULE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_43P = function() {
    try {

        SYM_EPLC_M_CLASS_BY_43P(document.MAINFORM.PARTIAL_SHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_EXPIRY_DT = function() {
    try {

        return SYM_EPLC_M_CHK_EXPIRY_DT(document.MAINFORM.ISSUE_DT, document.MAINFORM.EXPIRY_DT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_LC_BAL = function() {
    try {

        document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, SYS_BeFloat(document.MAINFORM.LC_AMT.value) * (1 + SYS_BeInt(document.MAINFORM.POS_TOL.value) / 100));
        EEHtml.fireEvent(document.MAINFORM.LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_39B = function() {
    try {

        SYM_EPLC_M_CLASS_BY_39B(document.MAINFORM.AMT_SPEC.value);
        EEHtml.fireEvent(document.MAINFORM.POS_TOL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_42C42a = function() {
    try {

        SYM_EPLC_M_CLASS_42C42a(document.MAINFORM.DRAFTS_AT.value, document.MAINFORM.DRWE_NM.value);
        SYM_EPLC_CALL_FOR_DRAFTS_AT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_43T = function() {
    try {

        SYM_EPLC_M_CLASS_BY_43T(document.MAINFORM.TNSHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_LTST_SHIP_DT = function() {
    try {

        var ndays;
        ndays = SYS_GetSubDays(document.MAINFORM.LTST_SHIP_DT.name, document.MAINFORM.TRX_DT.name);
        if (ndays > 0) {
            alert("The latest shipment date must be later than transaction date");
            document.MAINFORM.LTST_SHIP_DT.value = "";
        }
        return SYM_EPLC_M_CHK_LTST_SHIP_DT(document.MAINFORM.LTST_SHIP_DT, document.MAINFORM.EXPIRY_DT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_MESG_TYPE = function() {
    try {

        SYM_EPLC_M_CLASS_BY_MESG_TYPE(document.MAINFORM.MESG_TYPE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_REV_LC = function() {
    try {

        SYM_EPLC_M_CHK_REV_LC(document.MAINFORM.REV_LC, document.MAINFORM.OUR_ENG);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_ADV_LC_BY = function() {
    try {

        SYM_EPLC_M_CLASS_BY_ADV_LC_BY(document.MAINFORM.ADV_LC_BY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

/*csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var v = document.MAINFORM.AVAL_BY.value;
        if (v == "BY MIXED PYMT") {
            var arr = SYS_GetObjByDoName("PaymentTerms");
            if (arr.length == 0) {
                alert("Please add one more Payment Terms");
                return false;
            }
        }

        return (SYF_EPLC_CHK_EXPIRY_DT() && SYF_EPLC_CHK_LTST_SHIP_DT());
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}*/

csFuncLevelProto.SYF_EPLC_CLASS_BY_TENOR_TYPE = function() {
    try {

        SYM_EPLC_M_CLASS_BY_TENOR_TYPE(document.MAINFORM.TENOR_TYPE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_Cal_CPYT_N_PAY_TTL_AMT_TXCCY = function() {
    try {

        //modified for PUI
        return;
        /*
Objamt=SYS_getScreenObjByxpath('PaymentTermsHeader','CPYT_N_PAY_TTL_AMT_TXCCY');
Objccy=SYS_getScreenObjByxpath('PaymentTermsHeader','C_TRX_CCY');
Objamt.value= SYT_AmtFormat(document.MAINFORM.LC_CCY.value,document.MAINFORM.LC_AMT.value);
Objccy.value=document.MAINFORM.LC_CCY.value;
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_AFTER_BENE_ID = function() {
    try {

        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_SHIP_PRD = function() {
    try {

        SYM_EPLC_M_CHK_SHP_PRD(document.MAINFORM.LTST_SHIP_DT, document.MAINFORM.SHIP_PRD);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_SENDER_REF = function() {
    try {

        SYM_EPLC_ADV_SENDER_REF(document.MAINFORM.MESG_TYPE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_OUR_ENG = function() {
    try {

        SYM_EPLC_OUR_ENG_BY_CONF_INSTR(document.MAINFORM.CONF_INSTR.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_DRWE_NM_SW_TAG = function() {
    try {

        var arr_BIC = new Array(document.MAINFORM.DRWE_SW_ADD);
        SYM_EPLC_M_SW_TAG(arr_BIC);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYM_EPLC_CAL_AMEND_PAYMENT_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_TRAN_BAL = function() {
    try {

        var TRAN_BAL;
        var LC_AMT;
        TRAN_BAL = SYS_BeFloat(document.MAINFORM.TRAN_BAL.value);
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);

        if (document.MAINFORM.FORM_OF_LC.value == 'IRREVOCABLE TRANSFERABLE') {
            document.MAINFORM.TRAN_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, LC_AMT);
        } else {
            document.MAINFORM.TRAN_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.OnLoadTemplate = function() {
    try {

        SYM_EPLC_CAL_AMEND_PAYMENT_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_LC_BY_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_TRM_TO_BK();
        SYF_EPLC_CLASS_BY_ADV_LC_BY();
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
        SYM_EPLC_M_CLASS_BY_MESG_TYPE(document.MAINFORM.MESG_TYPE.value);
        SYM_EPLC_M_CLASS_BY_ADV_LC_BY(document.MAINFORM.ADV_LC_BY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('ADV_THU_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
        if (SYS_ORG_FUNCTION_NAME == 'PROCESS_700701720') {
            SYF_EPLC_FORM_OF_LC_MT710();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('ADV_THU_BK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AMT_SPEC_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_BY_39B();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APLB_RULE_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_BY_40E();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
        SYS_InqCUBK_byCondition('APPL_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_BK_ADD', 'APPL_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('APPL_BK_ID', 'APPL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('APPL_ID', 'APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_BY_onchange = function(event) {
    try {
        SYM_EPLC_CHK_AVAL_BY();
        SYM_EPLC_Hidden_Mixpay_Separator();
        //EEHtml.fireEvent(document.MAINFORM.DRAFTS_AT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('AVAL_WT_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('AVAL_WT_BK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_ADD1_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_ADD2_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_ADD3_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
        SYS_InqCUBK_byCondition('BENE_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_BENE_CORR_MED();
        SYM_EPLC_Set_BENE_CORR_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_EMAIL_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_EMAIL_TO_CUST_DO();
        if ((SYM_EPLC_CHK_EMAIL(document.MAINFORM.BENE_EMAIL.value)) == true && document.MAINFORM.BENE_EMAIL.value != '') {
            alert("invalid email address");
            document.MAINFORM.BENE_EMAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_FAX_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_FAX_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID', 'SYF_EPLC_AFTER_BENE_ID()');
        SYM_EPLC_Set_BENE_ID_TO_CUST_DO();
        SYM_EPLC_CAL_FIREEVENT_BY_BENE_ID();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_LANG_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_LANG_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_MAIL_ADD_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_POSTADD_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_NM_onchange = function(event) {
    try {
        SYF_EPLC_AFTER_BENE_ID();
        SYM_EPLC_Set_BENE_NM_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
        SYS_InqCUBK_byCondition('BENE_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_REF_NO_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_REF_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('CONF_BK_ID', 'CONF_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('CONF_BK_ID', 'CONF_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_INSTR_onchange = function(event) {
    try {
        SYF_EPLC_OUR_ENG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFTS_AT_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_42C42a();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', 'DRWE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('DRWE_ID', 'DRWE_ID', 'CLASS_42C42a');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_TAG));
        var nSYS_ORG_FUNCTION_SHORT_NAME = SYS_ORG_FUNCTION_SHORT_NAME;
        switch (nSYS_ORG_FUNCTION_SHORT_NAME) {
            case "AdvLC":
            case "AdvLCOneStep":
            case "AmdOneStep":
            case "Proc700After705":
            case "ProcMT700X":
            case "ProcMT707":
            case "RegAmd":
            case "RegisterDocsnot":
            case "RegLC":
            case "RegLCAfter705":
                CLASS_42C42a();
                break;
            default:
                return;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_EXPIRY_DT();
        SYF_EPLC_CHK_LTST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_FORM_OF_LC_onchange = function(event) {
    try {
        SYF_EPLC_TRAN_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('ISSUE_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_CHG_onchange = function(event) {
    try {
        var ISSUE_BK_CHG = document.MAINFORM.ISSUE_BK_CHG.value;
        if (SYS_BeFloat(ISSUE_BK_CHG) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.ISSUE_BK_CHG.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('ISSUE_BK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_EXPIRY_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LC_AMT_onchange = function(event) {
    try {
        SYM_EPLC_LC_AMT_CHECK();
        SYF_EPLC_LC_BAL();
        SYM_EPLC_BASE_LCY_BAL();
        SYM_EPLC_BASE_LCY();
        SYF_EPLC_TRAN_BAL();
        SYM_EPLC_CAL_AMEND_PAYMENT_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LC_BAL_onchange = function(event) {
    try {
        //do not remove event.currentTarget onchange method
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LC_CCY_onchange = function(event) {
    try {
        document.MAINFORM.ISSUE_BK_CHG_CCY.value = document.MAINFORM.LC_CCY.value;
        SYM_EPLC_BASE_LCY_BAL();
        SYM_EPLC_BASE_LCY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LTST_SHIP_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_LTST_SHIP_DT();
        SYF_EPLC_CHK_SHIP_PRD();
        SYM_EPLC_CHK_LTST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_MESG_TYPE_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_BY_MESG_TYPE();
        SYF_EPLC_SENDER_REF();
        SYM_EPLC_MT710_FIRST_ADVICE();
        if (document.MAINFORM.MESG_TYPE.value == 'MT710' || document.MAINFORM.MESG_TYPE.value == 'MT720') {
            SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_40B, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_40B, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('NON_BANK_ISSUER_ID', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NON_BANK_ISSUER_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('NON_BANK_ISSUER_ID', 'NON_BANK_ISSUER_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NON_BANK_ISSUER_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ENG_onchange = function(event) {
    try {
        SYF_EPLC_CHK_REV_LC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ROLE_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.ADV_LC_BY, "onchange");
        SYM_EPLC_M_CLASS_BY_MESG_TYPE(document.MAINFORM.MESG_TYPE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PARTIAL_SHIP_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_BY_43P();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_POS_TOL_onchange = function(event) {
    try {
        SYF_EPLC_LC_BAL();
        SYM_EPLC_BASE_LCY_BAL();
        SYM_EPLC_BASE_LCY();
        SYM_EPLC_CAL_AMEND_PAYMENT_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('REIM_BK_ADD', 'REIM_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('REIM_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('REIM_BK_ID', 'REIM_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('REIM_BK_POST_ADD', 'REIM_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('REIM_BK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REV_LC_onchange = function(event) {
    try {
        SYF_EPLC_CHK_REV_LC();
        SYM_EPLC_MPO_REVOLVE_LC_INFO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SHIP_PRD_onchange = function(event) {
    try {
        SYF_EPLC_CHK_SHIP_PRD();
        SYM_EPLC_CHK_SHIP_PRD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_DAYS_onchange = function(event) {
    try {
        SYM_EPLC_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_TYPE_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_BY_TENOR_TYPE();
        SYM_EPLC_Pay_By_Acceptance();
        EEHtml.fireEvent(document.MAINFORM.DRAFTS_AT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TNSHIP_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_BY_43T();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('TRM_TO_BK_ADD', 'TRM_TO_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('TRM_TO_BK_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('TRM_TO_BK_ID', 'TRM_TO_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK('TRM_TO_BK_POST_ADD', 'TRM_TO_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('TRM_TO_BK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}