var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.LC_AMT.value = document.MAINFORM.OLD_LC_AMT.value;
        SYM_EPLC_INIT();
        if (document.MAINFORM.TRM_TO_BK_REF.value == "") {
            document.MAINFORM.TRM_TO_BK_REF.value = "NONREF";
        }
        document.MAINFORM.BK_TO_BK_MT730.value = "";
        document.MAINFORM.TEMP_NO_OF_AMD.value = SYT_FillZero(document.MAINFORM.NO_OF_AMD.value);
        document.MAINFORM.TEMP_MT730_TAG30.value = document.MAINFORM.TRX_DT.value;
        document.MAINFORM.LC_BAL_TEMP.value = document.MAINFORM.AVLB_LC_BAL.value;
        document.MAINFORM.TEMP_ASSET_ACNO.value = document.MAINFORM.ASSET_ACNO.value;
        document.MAINFORM.TEMP_LIAB_ACNO.value = document.MAINFORM.LIAB_ACNO.value;
        //For MT707
        document.MAINFORM.TEMP_TAG_72.value = document.MAINFORM.INCOMING_TAG_72.value;
        SYF_EPLC_NEW_CONF_BAL();
        SYT_Cal_LOCAL_AMT('LC_CCY', 'LC_BAL', 'BASE_CCY', 'BASE_BAL', 'BASE_RT');
        SYF_EPLC_NO_OF_DRAW();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var DEC_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var LC_CCY; // Utility Auto Fix Comments
        var NEW_LC_AMT; // Utility Auto Fix Comments
        var TAG_39A; // Utility Auto Fix Comments
        var TEMP_NEG; // Utility Auto Fix Comments
        var TEMP_POS; // Utility Auto Fix Comments
        SYM_EPLC_CONFIRM_CALL();
        SYT_LIAB_VOUCHER();
        SYF_EPLC_UPDATE_MASTER_BY_DETRMNTL_FLG();

        //for MT707
        LC_CCY = document.MAINFORM.LC_CCY.value;
        INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        NEW_LC_AMT = SYS_BeFloat(document.MAINFORM.NEW_LC_AMT.value);

        document.MAINFORM.TEMP_TAG32_CCY.value = (INC_AMT > 0) ? LC_CCY : "";
        document.MAINFORM.TEMP_TAG33_CCY.value = (DEC_AMT > 0) ? LC_CCY : "";
        document.MAINFORM.TEMP_TAG34_CCY.value = (INC_AMT > 0 || DEC_AMT > 0) ? LC_CCY : "";
        document.MAINFORM.LC_AMT.value = document.MAINFORM.OLD_LC_AMT.value;
        //TEMP_POS = document.MAINFORM.TEMP_POS_TOL.value;
        //TEMP_NEG = document.MAINFORM.TEMP_NEG_TOL.value;
        TEMP_POS = document.MAINFORM.NEW_POS_TOL.value;
        TEMP_NEG = document.MAINFORM.NEW_NEG_TOL.value;
        TAG_39A = TEMP_POS + "/" + TEMP_NEG;
        if (TAG_39A != "0/0") {
            document.MAINFORM.TEMP_TAG_39A.value = TAG_39A;
        } else {
            document.MAINFORM.TEMP_TAG_39A.value = "";
        }
        SYM_EPLC_TEMP_LC_AMT_707();
        if (SYS_FUNCTION_TYPE != 'RE' && document.MAINFORM.DETRMNTL_FLG.value != 'YES') {
            document.MAINFORM.LC_AMT.value = document.MAINFORM.NEW_LC_AMT.value;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_ADV_LC_BY = function() {
    try {

        SYM_EPLC_M_CLASS_BY_ADV_LC_BY(document.MAINFORM.ADV_LC_BY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_COMM = function() {
    try {

        //for ADV_AMND_COMM
        SYT_CAL_COMM("EPLC_AMEND_COMM", document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
        return;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_COURIER = function() {
    try {

        SYT_CAL_COURIER();
        return;
        /*
if(document.MAINFORM.ADV_LC_BY.value.indexOf("Mail") >-1){
	SYT_CAL_COURIER();
}else{
	SYT_RESET_COURIER();
}
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYF_EPLC_MPO_TenorInformation();
        SYT_CHG_INIT("SYF_EPLC_CHG_INIT_RUN");
        SYM_EPLC_MPO_LIAB_ACNO();
        if (SYS_FUNCTION_TYPE == "PM") {
            CHG_setAllChargeAt(Chg.AT_DEFERRED);
        }
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        // SYT_DisableDivClass('E_div');
        SYF_EPLC_MPO_PARTIES();

        //SYM_EPLC_Alert_SYN_FLG();
        //SYM_EPLC_Hidden_Mixpay_Separator();
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.OUR_ROLE, 'P');
        SYM_EPLC_CONF_INSTR_AMD();
        CHG_DefCharge_chargeAtOnchange();
        SYF_EPLC_NEW_TENOR_TYPE_NARR();
        //FOR 73933
        document.getElementById("NEW_ADV_THU_BK_MAIL_ADD").style.visibility = "hidden";
        document.getElementById("NEW_ADV_THU_BK_CORR_MED").style.visibility = "hidden";
        MA.innerText = "";
        MB.innerText = "";
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CHG_INIT_RUN = function() {
    try {

        SYF_EPLC_CAL_CFM_COMM();
        SYF_EPLC_CAL_COMM();
        SYF_EPLC_CAL_CABLE();
        SYF_EPLC_CAL_COURIER();
        SYT_CAL_POST();
        SYT_CAL_COMM('EPLC_OTHER_CHG', document.MAINFORM.LC_CCY.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CABLE = function() {
    try {

        var nTimes; // Utility Auto Fix Comments
        var nTimes_MT707; // Utility Auto Fix Comments
        var nTimes_MT730; // Utility Auto Fix Comments
        SYT_CAL_CABLE();
        return;
        /*
nTimes_MT707 =(document.MAINFORM.ADV_LC_BY.value == "SWIFT to Beneficiary's Bank")?1:0;
nTimes_MT730 =(document.MAINFORM.SENT_MT730_FLG.value == "YES")?1:0;
nTimes = nTimes_MT707 + nTimes_MT730;

//if nTimes is zero, the system will run Chg.reset() then return
SYT_CAL_CABLE(nTimes);
*/
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_PARTIES = function() {
    try {

        SYT_DisableDivClass("C_div");
        //SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_CORR_MED,"M");
        //SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_FAX,"O");
        //SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_EMAIL,"O");
        //SYT_ChangeFldClass(document.MAINFORM.NEW_BENE_ACNO,"O");
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ID, "O");
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_NM, "M");
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD1, "O");
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD2, "O");
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_ADD3, "O");
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_MAIL_ADD, "O");
        SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_SW_ADD, "O");
        SYT_ChangeFldClass(document.MAINFORM.OUR_ROLE, "M");
        //SYT_ChangeFldClass(document.MAINFORM.ADV_LC_BY,"M");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_UPDATE_MASTER_BY_DETRMNTL_FLG = function() {
    try {

        var FldName; // Utility Auto Fix Comments
        var FldName_Real; // Utility Auto Fix Comments
        var FldName_TEMP; // Utility Auto Fix Comments
        var Prefix; // Utility Auto Fix Comments
        var frm; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var sFldClassName; // Utility Auto Fix Comments
        var sFldValue; // Utility Auto Fix Comments
        //added by zoe 20090112
        if (document.MAINFORM.DETRMNTL_FLG.value == "NO") {
            //update all NEW_XXXX to EPLC_MASTER 
            frm = document.MAINFORM;
            for (i = 0; i < frm.elements.length; i++) { // Utility Auto Fix Comments
                FldName = frm.elements[i].name;
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
            SYM_EPLC_CAL_AMEND_PAYMENT_AMT();
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
                        } catch (e2) {}
                    }
                    //if(sFldClassName.indexOf("INT_")>-1) continue;
                    //if(sFldClassName.indexOf("AMT_")>-1) continue;

                    frm.elements[FldName_Real].value = sFldValue;

                }

            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_OUR_ENG = function() {
    try {

        SYM_EPLC_OUR_ENG_BY_CONF_INSTR_AMD(document.MAINFORM.NEW_CONF_INSTR.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_CONF_BAL = function() {
    try {

        SYM_EPLC_M_NEW_CONF_BAL(document.MAINFORM.NEW_LC_BAL.value, document.MAINFORM.OUR_ENG.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CLASS_BY_OUR_ENG = function() {
    try {

        SYM_EPLC_M_CLASS_BY_OUR_ENG(document.MAINFORM.OUR_ENG.value);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_CFM_COMM = function() {
    try {

        var CONF_BAL; // Utility Auto Fix Comments
        var NEW_CONF_BAL; // Utility Auto Fix Comments
        var OLD_CONF_BAL; // Utility Auto Fix Comments
        var sDate;
        var eDate;
        OLD_CONF_BAL = SYS_BeFloat(document.MAINFORM.OLD_CONF_BAL.value);
        NEW_CONF_BAL = SYS_BeFloat(document.MAINFORM.NEW_CONF_BAL.value);
        CONF_BAL = SYS_BeFloat(NEW_CONF_BAL - OLD_CONF_BAL);
        sDate = document.MAINFORM.ISSUE_DT.value;
        eDate = document.MAINFORM.NEW_EXPIRY_DT.value;
        if (eDate == ''){
        eDate = document.MAINFORM.EXPIRY_DT.value;	
        }
        if (sDate == '' || eDate == '') {
            return;
        }
        if (CONF_BAL > 0) {
            SYT_CAL_COMM('EPLC_CONF_COMM', document.MAINFORM.LC_CCY.value, CONF_BAL, sDate, eDate);
        } else {
            SYT_RESET_COMM('EPLC_CONF_COMM');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return Cal_eloan_fields();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        SYM_EPLC_CAL_AMEND_PAYMENT_AMT();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_MPO_TenorInformation = function() {
    try {

        //Disable tenor;
        SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_PARTY_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_TAG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DRWE_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, 'P');
        SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE_NARR, 'P');
        SYT_DisableField(document.MAINFORM.DRWE_ID_BTN);
        //Enable New tenor;
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_BY, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, 'O');
        //Enable New Drawee ID;

        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_SW_TAG, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_SW_ADD, 'O');
        //Enable New Available With Bank;
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_ID, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_NM, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_ADD1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_ADD2, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_ADD3, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_SW_TAG, 'O');
        SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_WT_BK_SW_ADD, 'O');
        SYT_EnableFields(document.MAINFORM.NEW_AVLBL_BK_ID_BTN);
        if (document.MAINFORM.NEW_DRWE_NM.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_Chk_NEW_AVAL_BY = function() {
    try {

        if (document.MAINFORM.NEW_AVAL_BY.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "O");
            SYT_EnableFields(document.MAINFORM.NEW_DRWE_ID_BTN);
            document.MAINFORM.NEW_DRWE_ID.value = '';
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "O");
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_TENOR_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "O");
        }
        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.NEW_DRWE_ID_BTN);
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_DRAFTS_AT.value = 'Payment at Sight';
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "O");
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_TENOR_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "P");
        }

        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY ACCEPTANCE') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.NEW_DRWE_ID_BTN);
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "M");
        }

        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY NEGOTIATION') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.NEW_DRWE_ID_BTN);
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "O");
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_TENOR_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "O");
        }

        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY DEF PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "P");
            SYT_DisableField(document.MAINFORM.NEW_DRWE_ID_BTN);
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "P");
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            document.MAINFORM.NEW_MIX_PMT_DETL.value = '';
            document.MAINFORM.NEW_DRWE_ID.value = '';
            SYM_EPLC_CAL_CLEAR_NEW_DRWE_ID();
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "O");
        }

        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY MIXED PYMT') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_MIX_PMT_DETL, "M");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "P");
            SYT_DisableField(document.MAINFORM.NEW_DRWE_ID_BTN);
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD1, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD2, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRWE_ADD3, "P");
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
            document.MAINFORM.NEW_DRWE_ID.value = '';
            document.MAINFORM.NEW_TENOR_DAYS.value = 0;
            document.MAINFORM.NEW_TENOR_TYPE.value = '';
            SYM_EPLC_CAL_CLEAR_NEW_DRWE_ID();
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_TYPE, "P");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_TENOR_TYPE_NARR = function() {
    try {

        if (document.MAINFORM.NEW_TENOR_TYPE.value == 'OTHER') {
            EEHtml.getElementById('NEW_TENOR_TYPE_NARR').style.display = "block";
        } else {
            EEHtml.getElementById('NEW_TENOR_TYPE_NARR').style.display = "none";
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NEW_AVAL_BY_class = function() {
    try {

        var NO_OF_DRAW;
        NO_OF_DRAW = document.MAINFORM.NO_OF_DRAW.value;
        if (NO_OF_DRAW >= 1) {
            SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_BY, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_AVAL_BY, "O");
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_NO_OF_DRAW = function() {
    try {

        SYS_GetCUBK('NO_OF_DRAW', document.MAINFORM.C_MAIN_REF.name, 'SYF_EPLC_NEW_AVAL_BY_class()');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_LC_BY_onchange = function(event) {
    try {
        //SYF_EPLC_CAL_CABLE();
        //SYF_EPLC_CAL_COURIER();
        SYF_EPLC_CLASS_BY_ADV_LC_BY();
        SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('LIAB_ACNO', 'C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\'');
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('APPL_ID', 'APPL_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('ASSET_ACNO', 'C_CUST_ID=\'liability\' AND C_CURRENCY =\'USD\'');
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_BY_onchange = function(event) {
    try {
        SYM_EPLC_Tenor_Narrative();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_ADDED_onchange = function(event) {
    try {
        SYF_EPLC_NEW_CONF_BAL();

        //add by amy for recalculation CFM COMM
        SYF_EPLC_CAL_CFM_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_CONF_INSTR_onchange = function(event) {
    try {
        SYF_EPLC_OUR_ENG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_CONF_PCT_onchange = function(event) {
    try {
        SYM_EPLC_CAL_CONF_BAL_BY_PERCENT_AMD();
        //document.MAINFORM.R_WEIG_PCT.value = document.MAINFORM.CONF_PCT.value;
        //EEHtml.fireEvent(document.MAINFORM.R_WEIG_PCT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DEF_PMT_DET_onchange = function(event) {
    try {
        SYM_EPLC_Tenor_Narrative();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DETRMNTL_FLG_onchange = function(event) {
    try {
        var frm = document.MAINFORM;
        if (document.MAINFORM.DETRMNTL_FLG.value === "NO") {
            for (i = 0; i < frm.elements.length; i++) {
                FldName = frm.elements[i].name;
                Prefix = FldName.substr(0, 4);
                FldName_Real = FldName.substr(4, FldName.length - 4);
                if (FldName.indexOf("_BTN") > -1 || FldName.indexOf("_ORDER_") > -1 || FldName.indexOf("OLD_") > -1) {
                    continue;
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRAFTS_AT_onchange = function(event) {
    try {
        SYM_EPLC_Tenor_Narrative();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.DRWE_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', 'DRWE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('DRWE_ID', 'DRWE_ID', 'CLASS_42C42a');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
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
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DRWE_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_MIX_PMT_DETL_onchange = function(event) {
    try {
        SYM_EPLC_Tenor_Narrative();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_ADDIT_CONDITION_onchange = function(event) {
    try {
        SYM_EPLC_NARRATIVE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_AVAL_BY_onchange = function(event) {
    try {
        SYF_EPLC_Chk_NEW_AVAL_BY();
        SYM_EPLC_showMixPayment_New();
        //SYM_EPLC_addPaymentRecord();
        SYM_EPLC_Hidden_Mixpay_Separator_NEW();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_AVLBL_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('NEW_AVAL_WT_BK_ID', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_AMD_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('NEW_BENE_ADD', 'NEW_BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_MPO_NEW_BENE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('NEW_BENE_ID', 'NEW_BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('NEW_BENE_POST_ADD', 'NEW_BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_CONF_BAL_onchange = function(event) {
    try {
        SYF_EPLC_CAL_CFM_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_DOC_REQ_onchange = function(event) {
    try {
        SYM_EPLC_NARRATIVE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('NEW_DRWE_ADD', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_DRWE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('NEW_DRWE_ID', 'NEW_DRWE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('NEW_DRWE_ID', '1');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_DRWE_NM_onchange = function(event) {
    try {
        var new_drwe_nm = document.MAINFORM.NEW_DRWE_NM.value;
        if (new_drwe_nm != '') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_DRAFTS_AT, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_EXPIRY_DT_onchange = function(event) {
    try {
        SYF_EPLC_CAL_CFM_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_GOODS_DESC_onchange = function(event) {
    try {
        SYM_EPLC_NARRATIVE();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_LC_BAL_onchange = function(event) {
    try {
        SYF_EPLC_NEW_CONF_BAL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_TENOR_DAYS_onchange = function(event) {
    try {
        SYM_EPLC_NEW_Pay_By_Acceptance();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_NEW_TENOR_TYPE_onchange = function(event) {
    try {
        SYM_EPLC_NEW_Pay_By_Acceptance();
        SYF_EPLC_NEW_TENOR_TYPE_NARR();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OLD_BENE_ID_onchange = function(event) {
    try {
        SYS_GetCUBK('OLD_BENE_ID', 'OLD_BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ENG_onchange = function(event) {
    try {
        SYF_EPLC_NEW_CONF_BAL();
        SYM_EPLC_MPO_LIAB_ACNO();
        SYF_EPLC_CAL_CFM_COMM();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_OUR_ROLE_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.ADV_LC_BY, "onchange");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('REIM_BK_ID', 'REIM_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('REIM_BK_POST_ADD', 'REIM_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_REIM_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_DAYS_onchange = function(event) {
    try {
        SYM_EPLC_Tenor_Narrative();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TENOR_TYPE_onchange = function(event) {
    try {
        SYM_EPLC_Tenor_Narrative();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.REIM_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('TRM_TO_BK_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('TRM_TO_BK_ID', 'TRM_TO_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.TRM_TO_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('TRM_TO_BK_POST_ADD', 'TRM_TO_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_TRM_TO_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_AdviseAmendment.js", e);
    }
}