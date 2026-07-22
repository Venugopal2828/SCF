var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT();
        document.MAINFORM.TEMP_MT730_TAG30.value = document.MAINFORM.TRX_DT.value;
        document.MAINFORM.LC_BAL_TEMP.value = document.MAINFORM.AVLB_LC_BAL.value;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.WEB_REF.value = document.MAINFORM.LC_NO.value;
        var FldName; // Utility Auto Fix Comments
        var FldName_Real; // Utility Auto Fix Comments
        var FldName_TEMP; // Utility Auto Fix Comments
        var Prefix; // Utility Auto Fix Comments
        var frm; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var iFrm; // Utility Auto Fix Comments
        var sFldClassName; // Utility Auto Fix Comments
        var sFldValue; // Utility Auto Fix Comments
        SYM_EPLC_CONFIRM_CALL();
        document.MAINFORM.TEMP_ASSET_ACNO.value = document.MAINFORM.ASSET_ACNO.value;
        document.MAINFORM.TEMP_LIAB_ACNO.value = document.MAINFORM.LIAB_ACNO.value;
        SYT_LIAB_VOUCHER();
        if (document.MAINFORM.BENE_CONS_FLG.value == 'ACCEPTED') {
            //update all NEW_XXX to Master File
            frm = document.MAINFORM;
            for (i = 0; i < frm.elements.length; i++) {

                FldName = frm.elements[i].name;
                iFrm = FldName.indexOf("__DESC__");
               if (FldName == null || FldName == undefined || FldName == "" || FldName.length < 5 || FldName.indexOf('__DESC__') > 0) {
                    continue;
                }
                Prefix = FldName.substr(0, 4);
                if (Prefix == "NEW_") {
                    sFldValue = frm.elements[i].value;
                    sFldClassName = frm.elements[i].className;
                    FldName_Real = FldName.substr(4, FldName.length - 4);
                    FldName_TEMP = 'TEMP_' + FldName_Real;
                    if (FldName_Real.indexOf("_BTN") > -1 || FldName_Real.indexOf("_ORDER_") > -1) {
                        continue;
                    }
                    
                    if (sFldValue == "" || sFldValue == 0) {
                        continue;
                    }
                    if (frm.elements[FldName_Real].value != sFldValue) {
                        try {
                            frm.elements[FldName_TEMP].value = sFldValue;
                        } catch (e1) {}
                    }

                    frm.elements[FldName_Real].value = sFldValue;

                }
            }
        } else {
            //update all NEW_XXXX to EPLC_MASTER except AMT, Balances
            frm = document.MAINFORM;
            for (i = 0; i < frm.elements.length; i++) {
                FldName = frm.elements[i].name;
                if (FldName == null || FldName == undefined || FldName == "" || FldName.length < 5 || FldName.indexOf('__DESC__') > 0) {
                    continue;
                }
                Prefix = FldName.substr(0, 4);
                if (Prefix == "OLD_") {
                    sFldValue = frm.elements[i].value;
                    sFldClassName = frm.elements[i].className;
                    FldName_Real = FldName.substr(4, FldName.length - 4);
                    FldName_TEMP = 'TEMP_' + FldName_Real;
                    if (FldName_Real.indexOf("_BTN") > -1 || FldName_Real.indexOf("_ORDER_") > -1) {
                        continue;
                    }
                    if (frm.elements[FldName_Real].value != sFldValue) {
                        try {
                            frm.elements[FldName_TEMP].value = sFldValue;
                        } catch (e1) {}
                    }
                    //if(sFldClassName.indexOf("INT_")>-1) continue;
                    //if(sFldClassName.indexOf("AMT_")>-1) continue;

                    frm.elements[FldName_Real].value = sFldValue;

                }

            }
        }


        SYM_EPLC_CAL_AMEND_PAYMENT_AMT();
        //Add by amy for SMBC in 20120912
        SYM_EPLC_SET_NEW_CONF_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_BENE_CONS_FLG = function() {
    try {

        if (document.MAINFORM.BENE_CONS_FLG.value == "REJECTED") {
            alert("To restore the LC to the conditions existing before the rejection, overtype the amendments and re-enter the previous values");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYT_CHG_INIT('SYF_EPLC_CHG_INT_TO_RUN');
        //set charge paid at as DEFERRED
        if (SYS_FUNCTION_TYPE == "PM") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }

        SYM_EPLC_Alert_SYN_FLG();
        SYF_EPLC_CLASS_42C42a();
        SYF_EPLC_CLASS_BY_43P();
        SYF_EPLC_CLASS_BY_43T();
        SYF_EPLC_CLASS_BY_ADV_LC_BY();
        SYF_EPLC_CLASS_BY_NEW_39B();
        SYF_EPLC_CLASS_BY_TENOR_TYPE();
        SYF_EPLC_CLASS_ISSUE_BK_CHG_CCY();

        //SYF_EPLC_NEW_CONF_BAL();
        //SYM_EPLC_MPO_LIAB_ACNO();
        SYT_DisableDivClass('C_div');
        SYT_DisableDivClass('E_div');
        SYT_DisableDivClass('G_div');
        SYT_DisableDivClass('H_div');
        SYM_EPLC_Hidden_Mixpay_Separator();
        SYT_ChangeFldClass(document.MAINFORM.NEW_INSTR_TO_PAY_BK, 'P');
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_INT_TO_RUN = function() {
    try {

        if (SYS_FUNCTION_TYPE != 'RE' || SYS_FUNCTION_TYPE == 'IQ') {
            SYM_EPLC_M_EPLC_OTHER_CHG();
            SYM_EPLC_CAL_PAID_CFM_COMM();
            SYM_EPLC_INIT_UNPAID_CONF_COMM();
            SYM_EPLC_CAL_NEW_CFM_COMM();
            SYM_EPLC_CAL_INT_DEC_COMM();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_32B33B = function() {
    try {

        //added by zoe 20090109
        return SYM_EPLC_M_CHK_32B33B(document.MAINFORM.DEC_AMT, document.MAINFORM.INC_AMT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_LTST_SHIP_DT = function() {
    try {

        var oEXPIRY_DT; // Utility Auto Fix Comments
        //added by zoe 20090112
        oEXPIRY_DT = (document.MAINFORM.NEW_EXPIRY_DT.value != "") ? document.MAINFORM.NEW_EXPIRY_DT : document.MAINFORM.EXPIRY_DT;
        return SYM_EPLC_M_CHK_LTST_SHIP_DT(document.MAINFORM.LTST_SHIP_DT, oEXPIRY_DT);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHK_SHIP_PRD = function() {
    try {

        //added by zoe 20090112
        SYM_EPLC_M_CHK_SHP_PRD(document.MAINFORM.LTST_SHIP_DT, document.MAINFORM.SHIP_PRD);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_42C42a = function() {
    try {

        //added by zoe 20090112
        SYM_EPLC_M_CLASS_42C42a(document.MAINFORM.DRAFTS_AT.value, document.MAINFORM.DRWE_NM.value);
        SYM_EPLC_CALL_FOR_DRAFTS_AT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_43P = function() {
    try {

        //added by zoe 20090112
        SYM_EPLC_M_CLASS_BY_43P_NEW(document.MAINFORM.PARTIAL_SHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_43T = function() {
    try {

        //added by zoe 20090109
        SYM_EPLC_M_CLASS_BY_43T_NEW(document.MAINFORM.TNSHIP.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_ADV_LC_BY = function() {
    try {

        //added by zoe 20090109
        SYM_EPLC_M_CLASS_BY_ADV_LC_BY(document.MAINFORM.ADV_LC_BY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_NEW_39B = function() {
    try {

        SYM_EPLC_M_CLASS_BY_39B(document.MAINFORM.NEW_AMT_SPEC.value);
        EEHtml.fireEvent(document.MAINFORM.NEW_POS_TOL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_OUR_ENG = function() {
    try {

        SYM_EPLC_M_CLASS_BY_OUR_ENG(document.MAINFORM.OUR_ENG.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_TENOR_TYPE = function() {
    try {

        SYM_EPLC_M_CLASS_BY_TENOR_TYPE(document.MAINFORM.TENOR_TYPE.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_ISSUE_BK_CHG_CCY = function() {
    try {

        SYM_EPLC_M_CLASS_ISSUE_BK_CHG_CCY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_CONF_BAL = function() {
    try {

        SYM_EPLC_M_NEW_CONF_BAL(document.MAINFORM.NEW_LC_BAL.value, document.MAINFORM.OUR_ENG.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_LC_AMT = function() {
    try {

        SYM_EPLC_M_NEW_LC_AMT(document.MAINFORM.OLD_LC_AMT.value, document.MAINFORM.INC_AMT.value, document.MAINFORM.DEC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_LC_BAL = function() {
    try {

        var BAL_GAP; // Utility Auto Fix Comments
        var DEC_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var NEW_LC_BAL; // Utility Auto Fix Comments
        var NEW_LC_BAL_NO_DRAW; // Utility Auto Fix Comments
        var NEW_POS_TOL; // Utility Auto Fix Comments
        var OLD_LC_AMT; // Utility Auto Fix Comments
        var OLD_LC_BAL; // Utility Auto Fix Comments
        var OLD_LC_BAL_NO_DRAW; // Utility Auto Fix Comments
        var OLD_POS_TOL; // Utility Auto Fix Comments
        //eddit by zoe 20090115
        OLD_LC_AMT = Math.max(0, SYS_BeFloat(document.MAINFORM.OLD_LC_AMT.value));
        OLD_POS_TOL = SYS_BeFloat(document.MAINFORM.OLD_POS_TOL.value) / 100;
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        NEW_POS_TOL = SYS_BeFloat(document.MAINFORM.NEW_POS_TOL.value) / 100;

        //call OLD_LC_BAL_NO_DRAW and NEW_LC_BAL_NO_DRAW without considering drawing
        OLD_LC_BAL_NO_DRAW = OLD_LC_AMT * (1 + OLD_POS_TOL);
        NEW_LC_BAL_NO_DRAW = (OLD_LC_AMT + INC_AMT - DEC_AMT) * (1 + NEW_POS_TOL);
        BAL_GAP = NEW_LC_BAL_NO_DRAW - OLD_LC_BAL_NO_DRAW;

        //cal NEW_LC_BAL with LC_BAL in Master Table (Drawing considered)
        OLD_LC_BAL = Math.max(0, SYS_BeFloat(document.MAINFORM.OLD_LC_BAL.value));
        NEW_LC_BAL = Math.max(0, OLD_LC_BAL + BAL_GAP);
        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_BAL);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CONF_BAL_DECREAT = function() {
    try {

        var nCONF_PCT; // Utility Auto Fix Comments
        var nNEW_CONF_BAL; // Utility Auto Fix Comments
        var nNEW_LC_BAL; // Utility Auto Fix Comments
        var nNEW_LIAB_BAL; // Utility Auto Fix Comments
        var nNO_PRD; // Utility Auto Fix Comments
        var nOLD_LC_BAL; // Utility Auto Fix Comments
        nCONF_PCT = SYS_BeFloat(document.MAINFORM.CONF_PCT.value);
        nNEW_LC_BAL = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value);
        nOLD_LC_BAL = SYS_BeFloat(document.MAINFORM.OLD_LC_BAL.value);
        nNO_PRD = SYS_BeInt(document.MAINFORM.NO_PRD.value) + 1;
        if (document.MAINFORM.BENE_CONS_FLG.value == 'ACCEPTED') {
            if (document.MAINFORM.OUR_ENG.value == "CONFIRMATION" || document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION") {
                if (document.MAINFORM.CONF_PCT.value <= 0) {
                    document.MAINFORM.CONF_PCT.value = 100;
                }
                if (document.MAINFORM.CONF_ADDED.value == 'YES') {
                    if (document.MAINFORM.REV_LC.value == 'YES') {
                        if (document.MAINFORM.CUMULATIVE.value == 'Cumulative' || document.MAINFORM.EVERGREEN.value == 'YES') {
                            nNEW_CONF_BAL = SYS_BeFloat((nNEW_LC_BAL * nCONF_PCT) / 100 * nNO_PRD);
                            document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                            document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                        }
                        if (document.MAINFORM.CUMULATIVE.value == 'Non Cumulative' && document.MAINFORM.EVERGREEN.value == 'NO') {
                            nNEW_CONF_BAL = SYS_BeFloat((nNEW_LC_BAL * nCONF_PCT) / 100);
                            nNEW_LIAB_BAL = SYS_BeFloat((nNEW_LC_BAL * nCONF_PCT) / 100 * nNO_PRD);
                            document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                            document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_LIAB_BAL);
                        }
                    } else {
                        nNEW_CONF_BAL = SYS_BeFloat((nNEW_LC_BAL * nCONF_PCT) / 100);
                        document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                        document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                    }
                }
            }
        } else {
            if (document.MAINFORM.OUR_ENG.value == "CONFIRMATION" || document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION") {
                if (document.MAINFORM.CONF_PCT.value <= 0) {
                    document.MAINFORM.CONF_PCT.value = 100;
                }
                if (document.MAINFORM.CONF_ADDED.value == 'YES') {
                    if (document.MAINFORM.REV_LC.value == 'YES') {
                        if (document.MAINFORM.CUMULATIVE.value == 'Cumulative' || document.MAINFORM.EVERGREEN.value == 'YES') {
                            nNEW_CONF_BAL = SYS_BeFloat((nOLD_LC_BAL * nCONF_PCT) / 100 * nNO_PRD);
                            document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                            document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                        }
                        if (document.MAINFORM.CUMULATIVE.value == 'Non Cumulative' && document.MAINFORM.EVERGREEN.value == 'NO') {
                            nNEW_CONF_BAL = SYS_BeFloat((nOLD_LC_BAL * nCONF_PCT) / 100);
                            nNEW_LIAB_BAL = SYS_BeFloat((nOLD_LC_BAL * nCONF_PCT) / 100 * nNO_PRD);
                            document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                            document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_LIAB_BAL);
                        }
                    } else {
                        nNEW_CONF_BAL = SYS_BeFloat((nOLD_LC_BAL * nCONF_PCT) / 100);
                        document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                        document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return (Cal_eloan_fields());
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYS_DisableDoButton("PaymentTerms", "ADD,EDIT,DEL", true);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_LC_BY_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_BY_ADV_LC_BY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('LIAB_ACNO', 'C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\'');
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('APPL_ID', 'APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('ASSET_ACNO', 'C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\'');
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_CONS_FLG_onchange = function(event) {
    try {
        SYF_EPLC_CHK_BENE_CONS_FLG();
        SYF_EPLC_CONF_BAL_DECREAT();
        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_PCT_onchange = function(event) {
    try {
        SYM_EPLC_CAL_CONF_BAL_BY_PERCENT_AMD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DEC_AMT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_32B33B();
        SYF_EPLC_NEW_LC_AMT();
        SYF_EPLC_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFTS_AT_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_42C42a();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', 'DRWE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('DRWE_ID', 'DRWE_ID', 'CLASS_42C42a');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
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
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_INC_AMT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_32B33B();
        SYF_EPLC_NEW_LC_AMT();
        SYF_EPLC_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_LTST_SHIP_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_LTST_SHIP_DT();
        SYF_EPLC_CHK_SHIP_PRD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_AMT_SPEC_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_BY_NEW_39B();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_AMD_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('NEW_BENE_ADD', 'NEW_BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('NEW_BENE_ID', 'NEW_BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('NEW_BENE_POST_ADD', 'NEW_BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_CONF_BAL_onchange = function(event) {
    try {
        SYM_EPLC_CAL_NEW_CFM_COMM();
        SYM_EPLC_CAL_INT_DEC_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_EPLC_CHK_LTST_SHIP_DT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_LC_AMT_onchange = function(event) {
    try {
        SYF_EPLC_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_LC_BAL_onchange = function(event) {
    try {
        SYF_EPLC_NEW_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_POS_TOL_onchange = function(event) {
    try {
        SYF_EPLC_NEW_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OLD_BENE_ID_onchange = function(event) {
    try {
        SYS_GetCUBK('OLD_BENE_ID', 'OLD_BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ENG_onchange = function(event) {
    try {
        SYF_EPLC_NEW_CONF_BAL();
        SYM_EPLC_MPO_LIAB_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PARTIAL_SHIP_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_BY_43P();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('REIM_BK_ID', 'REIM_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_POST_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SHIP_PRD_onchange = function(event) {
    try {
        SYF_EPLC_CHK_SHIP_PRD();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_DAYS_onchange = function(event) {
    try {
        SYM_EPLC_CALL_FOR_DRAFTS_AT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_TYPE_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_BY_TENOR_TYPE();
        SYM_EPLC_CALL_FOR_DRAFTS_AT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TNSHIP_onchange = function(event) {
    try {
        SYF_EPLC_CLASS_BY_43T();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('TRM_TO_BK_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('TRM_TO_BK_ID', 'TRM_TO_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('TRM_TO_BK_POST_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_BeneAcceptsRejectsAmend.js", e);
    }
}