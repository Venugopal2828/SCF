var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_IPLC_APPL_CHG_back = function() {
    try {

        SYS_GetCUBK('APPL_ID', document.MAINFORM.APPL_ID.name, 'SYF_IPLC_Charges()');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_APPL_ID_back = function() {
    try {

        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYM_IPLC_APPL_MAIL_ADD();
        SYF_IPLC_APPL_CHG_back();
        SYM_IPLC_CAL_APPL_ADD_back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_BENE_ACCOUNT_NO = function() {
    try {

        var bene_ACNo = document.MAINFORM.BENE_AC_NO.value;
        var bene_first = bene_ACNo.substr(1, 1);
        if (bene_ACNo != '') {
            if (bene_first == '/') {
                document.MAINFORM.BENE_AC_NO.value = bene_ACNo;
            } else {
                document.MAINFORM.BENE_AC_NO.value = '/' + bene_ACNo;
            }
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
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
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_EXPIRY_PLACE = function() {
    try {

        var temp_expiry_plc;
        if (document.MAINFORM.EXPIRY_PLC.value != 'Other') {
            temp_expiry_plc = document.MAINFORM.EXPIRY_PLC.value;
        } else {
            temp_expiry_plc = document.MAINFORM.EXPIRY_PLC_NARR.value;
        }

        document.MAINFORM.TEMP_EXPIRY_PLC_NARR.value = temp_expiry_plc;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_MAIN_REF = function() {
    try {

        var MainRef = document.MAINFORM.C_MAIN_REF.value;
        var ref = MainRef.substr(0, 10);
        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_CAL_Tolerance = function() {
    try {

        var POS_TOL = document.MAINFORM.POS_TOL.value;
        var NEG_TOL = document.MAINFORM.NEG_TOL.value;
        var nPOS_TOL;
        var nNEG_TOL;
        var TOL;
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
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_LC_BAL = function() {
    try {

        var nLC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        var nPOS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
        var nLC_BAL = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nLC_AMT + ((1 / 100) * nPOS_TOL * nLC_AMT));

        document.MAINFORM.LC_BAL.value = nLC_BAL;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Charges = function() {
    try {

        SYM_IPLC_Chg_SWIFT_CHG();
        SYF_IPLC_Cond_PRE_ADV_CHG();
        SYM_IPLC_Chg_Calculation_Other();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cond_PRE_ADV_CHG = function() {
    try {

        if (document.MAINFORM.SEND_MT705_FLG.value == 'Yes') {
            SYM_IPLC_Chg_PRE_ADV();
        } else {
            SYT_RESET_COMM('IPLC_PRE-ADV_COMM');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_IPLC_CAL_Tolerance();
        SYF_IPLC_CAL_EXPIRY_PLACE();
        SYT_CHG_VOUCHER();
        document.MAINFORM.LC_NO.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.CLS_FLG.value = 'No';
        document.MAINFORM.CURRNT_STATUS.value = 'ReceiveLCFromCE';
        document.MAINFORM.NXT_STATUS.value = 'ReviewLCFromCE';


        SYT_Cal_C_TRANS_CODE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.ADV_BK_REF.value = 'NONREF';
        document.MAINFORM.ADV_THU_BK_REF.value = 'NONREF';
        SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'M');
        SYM_IPLC_INIT_FOR_DT();
        SYS_GetRefNo('IPLC', 'SYM_IPLC_setRef()');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_ADV_BK_SW_ADD = function() {
    try {

        if (document.MAINFORM.SEND_MT705_FLG.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'M');
            document.MAINFORM.ADV_BK_CORR_MED.value = 'SWIFT';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_SW_ADD, 'O');
            document.MAINFORM.ADV_BK_CORR_MED.value = 'None';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_GRP_ID = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.GRP_ID, 'P');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_PERCTOL = function() {
    try {

        if (document.MAINFORM.AMT_SPEC.value == "NOT EXCEEDING") {
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, "P");
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, "P");
            document.MAINFORM.NEG_TOL.value = 0;
            document.MAINFORM.POS_TOL.value = 0;
        } else {

            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, "O");
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, "O");
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_showHideAPLB_RULE_NARR = function() {
    try {

        if (document.MAINFORM.APLB_RULE.value == 'OTHR') {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'H');

        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_MPO_showHideEXPIRY_PLC_NARR = function() {
    try {

        if (document.MAINFORM.EXPIRY_PLC.value == "Other") {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'visible';
        } else {
            document.MAINFORM.EXPIRY_PLC_NARR.style.visibility = 'hidden';
            document.MAINFORM.EXPIRY_PLC_NARR.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_IPLC_MPO_showHideAPLB_RULE_NARR();
        SYF_IPLC_MPO_showHideEXPIRY_PLC_NARR();
        SYF_IPLC_MPO_PERCTOL();
        SYM_IPLC_CAL_APPL_ADD_back();
        // init parties' notes
        SYT_Init_Notes(document.MAINFORM.APPL_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.BENE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.ADV_THU_BK_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);
        SYM_IPLC_CAL_ADV_BK_ID_back();
        SYM_IPLC_CAL_ADV_THU_BK_ID_back();
        SYM_IPLC_CAL_BENE_ID_back();
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'EC') {
            SYF_IPLC_MPO_GRP_ID();
        }
        EEHtml.fireEvent(document.MAINFORM.AVAL_BY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('IPLC', 'SYM_IPLC_setRef');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_SetIndividualFlagfromPayment = function() {
    try {

        var obj1 = SYS_getScreenObjByxpath('PaymentTermsHeader', 'CPYT_C_MIX_PAY_DETAIL');
        var obj2 = SYS_getScreenObjByxpath('PaymentTermsHeader', 'CPYT_INDIVID_DRAW_FLG');
        if ("BY MIXED PYMT" == document.MAINFORM.AVAL_BY.value) {
            SYT_ChangeFldClass(obj1, 'O');
            SYT_ChangeFldClass(obj2, 'M');
        } else {
            SYT_ChangeFldClass(obj1, 'P');
            SYT_ChangeFldClass(obj2, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_ADV_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_BK_ID_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_BK_SW_TAG();
        SYM_IPLC_SQL_ADV_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THRU_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_ADV_THU_BANK();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_ADV_THU_BK_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IPLC_CHK_ADV_THU_SW_TAG();
        SYM_IPLC_SQL_ADV_THU_BK_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AMT_SPEC_onchange = function(event) {
    try {
        SYF_IPLC_MPO_PERCTOL();
        EEHtml.fireEvent(document.MAINFORM.POS_TOL, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APLB_RULE_onchange = function(event) {
    try {
        SYF_IPLC_MPO_showHideAPLB_RULE_NARR();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_APPL_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_onchange = function(event) {
    try {
        SYF_IPLC_CAL_APPL_ID_inFUNC();
        EEHtml.fireEvent(document.MAINFORM.APPL_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_APPL_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_APPL_CUST_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AVAL_BY_onchange = function(event) {
    try {
        if (document.MAINFORM.AVAL_BY.value == "BY PAYMENT" || document.MAINFORM.AVAL_BY.value == "BY MIXED PYMT") {
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.TENOR_TYPE.value = "";
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_AC_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ACNO_Back();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_IPLC_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_ID();
        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYM_IPLC_SQL_BENE_CUST();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MULT_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IPLC_CAL_BENE_MAIL_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DOC_REQ_BTN_onclick = function(event) {
    try {
        SYS_InsertClause('DOC_REQ');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_EXPIRY_PLC_onchange = function(event) {
    try {
        SYF_IPLC_MPO_showHideEXPIRY_PLC_NARR();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LC_AMT_onchange = function(event) {
    try {
        SYF_IPLC_Cal_LC_BAL();
        EEHtml.fireEvent(document.MAINFORM.LC_BAL, 'onchange');
        SYF_IPLC_Cond_PRE_ADV_CHG();
        SYM_IPLC_Chg_SWIFT_CHG();
        SYM_IPLC_Chg_Calculation_Other();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_LC_CCY_onchange = function(event) {
    try {
        //();
        EEHtml.fireEvent(document.MAINFORM.LC_BAL, 'onchange');
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        SYF_IPLC_Cond_PRE_ADV_CHG();
        SYM_IPLC_Chg_Calculation_Other();
        SYM_IPLC_Chg_SWIFT_CHG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_POS_TOL_onchange = function(event) {
    try {
        //();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_SEND_MT705_FLG_onchange = function(event) {
    try {
        SYF_IPLC_Cond_PRE_ADV_CHG();
        SYF_IPLC_MPO_ADV_BK_SW_ADD();
        EEHtml.fireEvent(document.MAINFORM.ADV_BK_SW_ADD, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_RecLCFrCE.js", e);
    }
}