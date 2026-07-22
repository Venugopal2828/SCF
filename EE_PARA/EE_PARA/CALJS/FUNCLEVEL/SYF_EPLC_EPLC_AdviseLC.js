var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYF_EPLC_CAL_FORM_OF_LC_40B();
        SYM_EPLC_INIT();
        document.MAINFORM.ADV_LC_DT.value = SYS_BUSI_DATE;
        SYM_EPLC_CAL_LC_BAL();
        SYF_EPLC_TRAN_BAL();
        document.MAINFORM.TEMP_MT730_TAG30.value = SYS_BUSI_DATE;
        SYT_Cal_LOCAL_AMT('LC_CCY', 'LC_BAL', 'BASE_CCY', 'BASE_BAL', 'BASE_RT');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();
        SYF_EPLC_MT710_MAPPING();
        SYM_EPLC_M_TOL_TAG39();

        SYM_EPLC_M_TAG41D_MAP();

        document.MAINFORM.AVLB_LC_BAL.value = document.MAINFORM.LC_BAL.value;

        SYT_LIAB_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_ADV_COMM = function() {
    try {

        if (document.MAINFORM.OUR_ENG.value == "ADVICE") {
            SYT_CAL_COMM('EPLC_ADVISE_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
        } else {
            SYT_RESET_COMM('EPLC_ADVISE_COMM');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CFM_COMM = function() {
    try {

        var CONF_COMM; // Utility Auto Fix Comments
        if (SYS_BeFloat(document.MAINFORM.CONF_BAL.value) > 0) {
            SYT_CAL_COMM('EPLC_CONF_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.CONF_BAL.value, document.MAINFORM.ADV_DT.value, document.MAINFORM.EXPIRY_DT.value);
            CONF_COMM = Chg.Screen.getTrxChargeByCommCode('EPLC_CONF_COMM');
            document.MAINFORM.TTL_CONF_COMM.value = CONF_COMM.getActiveAmt();
            document.MAINFORM.TTL_CONF_COMM.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.TTL_CONF_COMM.value);
        } else {
            SYT_RESET_COMM('EPLC_CONF_COMM');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_INT_TO_RUN = function() {
    try {

        SYF_EPLC_CAL_ADV_COMM();
        SYF_EPLC_CAL_CABLE();
        SYF_EPLC_CALL_POSTAGE();
        SYT_CAL_COURIER();
        SYF_EPLC_CAL_CFM_COMM();
        SYT_CAL_COMM('EPLC_OTHER_CHG', document.MAINFORM.LC_CCY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYT_CHG_INIT('SYF_EPLC_CHG_INT_TO_RUN');
        //set charge paid at as DEFERRED
        if (SYS_FUNCTION_TYPE == "PM") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }
        //SYF_EPLC_OUR_ENG();
        SYF_EPLC_MPO_PARTIES();
        SYF_EPLC_CLASS_42C42a();
        SYF_EPLC_MPO_POS_NEG_TOL();
        SYM_EPLC_M_CLASS_TRM_TO_BK();
        SYM_EPLC_MPO_LIAB_ACNO();
        SYF_EPLC_MPO_TNSHIP();
        SYF_EPLC_MPO_PARTIAL_SHIP();
        SYF_EPLC_MPO_40E();

        SYM_EPLC_CHK_AVAL_BY_INIT();
        SYF_EPLC_MPO_TENOR_TYPE_NARR();
        SYM_EPLC_M_CLASS_BY_BENE_CORR_MED();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
          if (document.MAINFORM.CONF_INSTR.value == "CONFIRM") {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M'); //Add on 20111129 for SWIFT 2018 Requirement enhancement;
            SYT_ChangeFldClass(document.MAINFORM.OUR_ENG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M'); 
        } else if (document.MAINFORM.CONF_INSTR.value == 'WITHOUT') {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.OUR_ENG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M'); //Add on 20111129 for SWIFT 2018 Requirement enhancement;
            SYT_ChangeFldClass(document.MAINFORM.OUR_ENG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M');
            
        }
        SYM_EPLC_M_MPO_CONF_BAL();
        SYM_EPLC_Hidden_Mixpay_Separator();
        SYM_EPLC_FORM_OF_LC_MT710();
        SYM_EPLC_MPO_REVOLVE_LC_INFO();
        SYF_EPLC_CAL_CONF_BAL();
        if (SYS_FUNCTION_TYPE != "RE"&&SYS_FUNCTION_TYPE != "IQ") {
        SYF_EPLC_CAL_CFM_COMM();
        }
        SYT_ChangeFldClass(document.MAINFORM.POS_TOL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, 'P');
        SYT_DisableDivClass('B_div');
        SYT_DisableDivClass('C_div');
        //SYM_EPLC_OUR_ENG_BY_CONF_INSTR_AMD(document.MAINFORM.CONF_INSTR.value);
        CHG_DefCharge_chargeAtOnchange();
        FLD_EPLC_DIARY_NARRATIVE_onchange();
        var Message_Type = document.MAINFORM.MESG_TYPE.value;
        if (Message_Type == 'MT700') {
            document.MAINFORM.TEMP_MT730_TAG30.value = document.MAINFORM.ISSUE_DT.value;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_AFTER_BENE_ID = function() {
    try {

        SYF_EPLC_CHG_INT_TO_RUN();
        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_PARTIES = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID, 'O');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_REV_LC = function() {
    try {

        SYM_EPLC_M_CHK_REV_LC(document.MAINFORM.REV_LC, document.MAINFORM.OUR_ENG);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_POS_NEG_TOL = function() {
    try {

        SYM_EPLC_M_CLASS_BY_39B(document.MAINFORM.AMT_SPEC.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_FORM_OF_LC_40B = function() {
    try {

        if (document.MAINFORM.OUR_ENG.value == "CONFIRMATION" || document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION") {
            document.MAINFORM.FORM_OF_LC_MT710.value = "ADDING OUR CONFIRMATION";
        } else {
            document.MAINFORM.FORM_OF_LC_MT710.value = "WITHOUT OUR CONFIRMATION";
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_PARTIAL_SHIP = function() {
    try {

        SYM_EPLC_M_CLASS_BY_43P(document.MAINFORM.PARTIAL_SHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_TNSHIP = function() {
    try {

        SYM_EPLC_M_CLASS_BY_43T(document.MAINFORM.TNSHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_40E = function() {
    try {

        SYM_EPLC_M_CLASS_BY_40E(document.MAINFORM.APLB_RULE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MT710_MAPPING = function() {
    try {

        //for Tag 52 mapping
        document.MAINFORM.TEMP_ISS_BK_ADD1.value = document.MAINFORM.ISSUE_BK_ADD1.value;
        document.MAINFORM.TEMP_ISS_BK_ADD2.value = document.MAINFORM.ISSUE_BK_ADD2.value;
        document.MAINFORM.TEMP_ISS_BK_ADD3.value = document.MAINFORM.ISSUE_BK_ADD3.value;
        document.MAINFORM.TEMP_ISS_BK_ID.value = document.MAINFORM.ISSUE_BK_ID.value;
        document.MAINFORM.TEMP_ISS_BK_NM.value = document.MAINFORM.ISSUE_BK_NM.value;
        document.MAINFORM.TEMP_ISS_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value;
        document.MAINFORM.TEMP_ISS_BK_SW_TAG.value = document.MAINFORM.ISSUE_BK_SW_TAG.value;

        // for Tag 43P and 43T mapping
        if (document.MAINFORM.PARTIAL_SHIP.value == "ALLOWED" || document.MAINFORM.PARTIAL_SHIP.value == "NOT ALLOWED") {
            document.MAINFORM.TEMP_PARTIAL_SHIP.value = document.MAINFORM.PARTIAL_SHIP.value;
        } else {
            document.MAINFORM.TEMP_PARTIAL_SHIP.value = document.MAINFORM.PARTIAL_SHIP_NARR.value;
        }

        if (document.MAINFORM.TNSHIP.value == "ALLOWED" || document.MAINFORM.TNSHIP.value == "NOT ALLOWED") {
            document.MAINFORM.TEMP_TNSHIP.value = document.MAINFORM.TNSHIP.value;
        } else {
            document.MAINFORM.TEMP_TNSHIP.value = document.MAINFORM.TNSHIP_NARR.value;
        }

        // for Tag 40E mapping
        if (document.MAINFORM.APLB_RULE.value == "OTHR") {
            document.MAINFORM.TEMP_APLB_RULE_40E.value = "OTHR" + "/" + document.MAINFORM.APLB_RULE_NARR.value;
        } else {
            document.MAINFORM.TEMP_APLB_RULE_40E.value = document.MAINFORM.APLB_RULE.value;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_TENOR_TYPE_NARR = function() {
    try {

        SYM_EPLC_M_CLASS_BY_TENOR_TYPE(document.MAINFORM.TENOR_TYPE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CALL_POSTAGE = function() {
    try {

        SYT_CAL_POST();
        return;
        /*
if(document.MAINFORM.ADV_LC_BY.value.indexOf("Mail")>-1){
	SYT_CAL_POST();
}else{
	SYT_RESET_POST();
}
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_DRWE_SW_TAG = function() {
    try {

        var arr_BIC; // Utility Auto Fix Comments
        arr_BIC = new Array(document.MAINFORM.DRWE_SW_ADD);
        SYM_EPLC_M_SW_TAG(arr_BIC);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_42C42a = function() {
    try {

        SYM_EPLC_M_CLASS_42C42a(document.MAINFORM.DRAFTS_AT.value, document.MAINFORM.DRWE_NM.value);
        SYM_EPLC_CALL_FOR_DRAFTS_AT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CONF_BAL = function() {
    try {

        var nCONF_BAL;
        var nCONF_PERCENT;
        var nLC_BAL;
        var nLIAB_BAL;
        var nNO_PRD;
        if (document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION" || document.MAINFORM.OUR_ENG.value == "CONFIRMATION") {
            if (document.MAINFORM.CONF_PCT.value <= 0) {
                document.MAINFORM.CONF_PCT.value = 100;
            }
            nCONF_PERCENT = SYS_BeFloat(document.MAINFORM.CONF_PCT.value);
            nLC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
            nNO_PRD = SYS_BeInt(document.MAINFORM.NO_PRD.value) + 1;
            if (document.MAINFORM.REV_LC.value == 'YES') {
                if (document.MAINFORM.CUMULATIVE.value == 'Cumulative' || document.MAINFORM.EVERGREEN.value == 'YES') {
                    nCONF_BAL = SYS_BeFloat((nLC_BAL * nCONF_PERCENT) / 100 * nNO_PRD);
                    document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
                    document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
                }
                if (document.MAINFORM.CUMULATIVE.value == 'Non Cumulative' && document.MAINFORM.EVERGREEN.value == 'NO') {
                    nCONF_BAL = SYS_BeFloat((nLC_BAL * nCONF_PERCENT) / 100);
                    nLIAB_BAL = SYS_BeFloat((nLC_BAL * nCONF_PERCENT) / 100 * nNO_PRD);
                    document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
                    document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nLIAB_BAL);
                }
            } else {
                nCONF_BAL = SYS_BeFloat((nLC_BAL * nCONF_PERCENT) / 100);
                document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
                document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
            }
        } else {
            document.MAINFORM.CONF_PCT.value = 0;
            document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
            document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_OUR_ENG = function() {
    try {

        SYM_EPLC_OUR_ENG_BY_CONF_INSTR(document.MAINFORM.CONF_INSTR.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_LTST_SHIP_DT = function() {
    try {

        SYM_EPLC_M_CHK_LTST_SHIP_DT(document.MAINFORM.LTST_SHIP_DT, document.MAINFORM.EXPIRY_DT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_SHIP_PRD = function() {
    try {

        SYM_EPLC_M_CHK_SHP_PRD(document.MAINFORM.LTST_SHIP_DT, document.MAINFORM.SHIP_PRD);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var arr; // Utility Auto Fix Comments
        var v; // Utility Auto Fix Comments
        v = document.MAINFORM.AVAL_BY.value;
        if (v == "BY MIXED PYMT") {
            arr = SYS_GetObjByDoName("PaymentTerms");
            if (arr.length == 0) {
                alert("Please add one more Payment Terms");
                return false;
            }
        }

        return Cal_eloan_fields();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CABLE = function() {
    try {

        SYT_CAL_CABLE();
        return;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_DT_onchange = function(event) {
    try {
        SYF_EPLC_CAL_CFM_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_LC_BY_onchange = function(event) {
    try {
        //SYF_EPLC_CALL_POSTAGE();
        //CAL_CABLE();
        SYM_EPLC_M_CLASS_TRM_TO_BK();
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
        SYM_EPLC_FORM_OF_LC_MT710();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
        if (SYS_ORG_FUNCTION_NAME == 'PROCESS_700701720') {
            SYF_EPLC_FORM_OF_LC_MT710();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AMT_SPEC_onchange = function(event) {
    try {
        SYF_EPLC_MPO_POS_NEG_TOL();
        SYM_EPLC_CAL_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APLB_RULE_onchange = function(event) {
    try {
        SYF_EPLC_MPO_40E();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('LIAB_ACNO', 'C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\'');
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_BK_ADD', 'APPL_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('APPL_BK_ID', 'APPL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.APPL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('APPL_ID', 'APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('ASSET_ACNO', 'C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\''); // Utility Auto Fix Comments
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_BY_onchange = function(event) {
    try {
        SYM_EPLC_CHK_AVAL_BY();
        SYM_EPLC_Hidden_Mixpay_Separator();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_ADD1_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_ADD2_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_ADD3_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_BENE_CORR_MED();
        SYM_EPLC_Set_BENE_CORR_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_EMAIL_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_EMAIL_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_FAX_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_FAX_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID', 'SYF_EPLC_AFTER_BENE_ID()');
        SYM_EPLC_Set_BENE_ID_TO_CUST_DO();
        SYM_EPLC_CAL_FIREEVENT_BY_BENE_ID();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_LANG_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_LANG_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_MAIL_ADD_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_POSTADD_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_NM_onchange = function(event) {
    try {
        SYF_EPLC_AFTER_BENE_ID();
        SYM_EPLC_Set_BENE_NM_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_REF_NO_onchange = function(event) {
    try {
        SYM_EPLC_Set_BENE_REF_TO_CUST_DO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_BAL_onchange = function(event) {
    try {
        SYF_EPLC_CAL_CFM_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_INSTR_onchange = function(event) {
    try {
        SYF_EPLC_OUR_ENG();
        if (document.MAINFORM.OUR_ENG.value == "ADVICE") {
            document.MAINFORM.ASSET_ACNO.value = '';
            document.MAINFORM.LIAB_ACNO.value = '';
            document.MAINFORM.TTL_CONF_COMM.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_PCT_onchange = function(event) {
    try {
        SYM_EPLC_CAL_CONF_BAL_BY_PERCENT();
        EEHtml.fireEvent(document.MAINFORM.CONF_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CUMULATIVE_onchange = function(event) {
    try {
        SYF_EPLC_CAL_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFTS_AT_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_42C42a();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', 'DRWE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('DRWE_ID', 'DRWE_ID', 'CLASS_42C42a');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_NM_onchange = function(event) {
    try {
        var nSYS_ORG_FUNCTION_SHORT_NAME; // Utility Auto Fix Comments
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_TAG));
        nSYS_ORG_FUNCTION_SHORT_NAME = SYS_ORG_FUNCTION_SHORT_NAME;
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
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_EVERGREEN_onchange = function(event) {
    try {
        SYF_EPLC_CAL_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_LTST_SHIP_DT();
        SYF_EPLC_CAL_CFM_COMM();
        SYM_EPLC_M_CHK_TRX_DT_EXP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_DT_onchange = function(event) {
    try {
        //SYF_EPLC_CAL_CFM_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('CONF_BK_ID', 'CONF_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_RegisterLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LC_CCY_onchange = function(event) {
    try {
        SYF_EPLC_CAL_CFM_COMM();
        SYF_EPLC_CAL_ADV_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LTST_SHIP_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_SHIP_PRD();
        SYF_EPLC_CHK_LTST_SHIP_DT();
        SYM_EPLC_M_CHK_TRX_DT_LTST_SHIP_DT();
        SYM_EPLC_CHK_LTST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NO_PRD_onchange = function(event) {
    try {
        SYF_EPLC_CAL_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ENG_onchange = function(event) {
    try {
        SYF_EPLC_CAL_CONF_BAL();
        EEHtml.fireEvent(document.MAINFORM.CONF_BAL, 'onchange');
        SYF_EPLC_CAL_FORM_OF_LC_40B();
        SYF_EPLC_CHK_REV_LC();
        EEHtml.fireEvent(document.MAINFORM.FORM_OF_LC_MT710, 'onchange');
        SYM_EPLC_M_MPO_CONF_BAL();
        SYF_EPLC_CAL_ADV_COMM();
        SYM_EPLC_MPO_LIAB_ACNO();
        if (document.MAINFORM.OUR_ENG.value == "ADVICE") {
            document.MAINFORM.ASSET_ACNO.value = '';
            document.MAINFORM.LIAB_ACNO.value = '';
            document.MAINFORM.TTL_CONF_COMM.value = '0.00';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ROLE_onchange = function(event) {
    try {
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
        EEHtml.fireEvent(document.MAINFORM.ADV_LC_BY, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PARTIAL_SHIP_onchange = function(event) {
    try {
        SYF_EPLC_MPO_PARTIAL_SHIP();
        SYF_EPLC_MT710_MAPPING();
        EEHtml.fireEvent(document.MAINFORM.TEMP_PARTIAL_SHIP, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_POS_TOL_onchange = function(event) {
    try {
        SYM_EPLC_CAL_LC_BAL();
        SYF_EPLC_CAL_CONF_BAL();
        EEHtml.fireEvent(document.MAINFORM.CONF_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('REIM_BK_ID', 'REIM_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_POST_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REV_LC_onchange = function(event) {
    try {
        SYM_EPLC_MPO_REVOLVE_LC_INFO();
        SYF_EPLC_CHK_REV_LC();
        SYF_EPLC_CAL_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SHIP_PRD_onchange = function(event) {
    try {
        SYF_EPLC_CHK_SHIP_PRD();
        SYM_EPLC_CHK_SHIP_PRD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_DAYS_onchange = function(event) {
    try {
        SYM_EPLC_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_TYPE_onchange = function(event) {
    try {
        SYF_EPLC_MPO_TENOR_TYPE_NARR();
        SYM_EPLC_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TNSHIP_onchange = function(event) {
    try {
        SYF_EPLC_MPO_TNSHIP();
        SYF_EPLC_MT710_MAPPING();
        EEHtml.fireEvent(document.MAINFORM.TEMP_TNSHIP, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
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
        DisExcpt("SYF_EPLC_EPLC_AdviseLCOneStep.js*SYF_EPLC_TRAN_BAL", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('TRM_TO_BK_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('TRM_TO_BK_ID', 'TRM_TO_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('TRM_TO_BK_POST_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseLC.js", e);
    }
}