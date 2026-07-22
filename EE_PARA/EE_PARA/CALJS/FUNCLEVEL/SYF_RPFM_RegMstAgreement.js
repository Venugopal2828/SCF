var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('RGFM_REF', 'SYM_RPFM_set_ref');
        SYF_RPFM_Cal_OBLG_SW_TAG();
        //hidden other fields
        SYT_ChangeFldClass(document.MAINFORM.MODULE_SELECT2, 'O');
        EEHtml.getElementById('MODULE_SELECT2').style.display = 'none';
        SYT_ChangeFldClass(document.MAINFORM.TRX_TYPE2, 'O');
        EEHtml.getElementById('TRX_TYPE2').style.display = 'none';
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (document.MAINFORM.MODULE_SELECT.value == 'OTHR') { //changed
            SYT_ChangeFldClass(document.MAINFORM.MODULE_SELECT2, 'M');
            EEHtml.getElementById('MODULE_SELECT2').style.display = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.MODULE_SELECT2, 'O');
            EEHtml.getElementById('MODULE_SELECT2').style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.SOURCE_REF, 'M');
        }
        if (document.MAINFORM.TRX_TYPE.value == 'OTHR') { //changed
            SYT_ChangeFldClass(document.MAINFORM.TRX_TYPE2, 'M');
            EEHtml.getElementById('TRX_TYPE2').style.display = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TRX_TYPE2, 'O');
            EEHtml.getElementById('TRX_TYPE2').style.display = 'none';
        }
        if (document.MAINFORM.SOURCE_REF.value == '' || document.MAINFORM.MODULE_SELECT.value == 'OTHR') {
            SYT_ChangeFldClass(document.MAINFORM.MAST_END_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.MAST_START_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_BAL, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_BAL_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SOURCE_REF, 'P');
            document.MAINFORM.SOURCE_REF.value = '';
        } else {
            if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
                SYF_RPFM_get_MASTER_DETAILS();
            }
            SYT_ChangeFldClass(document.MAINFORM.MAST_END_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MAST_START_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_BAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_BAL_CCY, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_RPFM_Set_MODULE_SELECT();
        document.MAINFORM.CURRNT_STATUS.value = 'RegMstAgreement';
        document.MAINFORM.LC_BAL.value = document.MAINFORM.MAST_RISK_AMT.value;
        document.MAINFORM.ISSUE_FLAG.value = 'Y';
        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_MASTER_DETAILS = function() {
    try {

        var RULE_NM = document.MAINFORM.MODULE_SELECT.value + "_MASTER";
        if (RULE_NM == "EPLC_MASTER") {
            if (document.MAINFORM.TRX_TYPE.value == 'Export Bills Discounting') {
                SYS_InqCUBK_byCondition('EPLC_MASTER_D');

            } else if (document.MAINFORM.TRX_TYPE.value == 'Forfaiting') {
                SYS_InqCUBK_byCondition('EPLC_MASTER_F');
            }else{
            	  SYS_InqCUBK_byCondition('EPLC_MASTER');
            }

        } else if (RULE_NM == "IPLC_MASTER") {
            SYS_InqCUBK_byCondition('IPLC_MASTER');
            //SYS_InqCUBK_Sql(RULE_NM, "LC_BAL > 0 AND (SYND_FLG <> 'YES' OR SYND_FLG IS NULL) AND  APPL_NM IS NOT NULL");
        } else if (RULE_NM == "GTEE_MASTER") {
            SYS_InqCUBK_byCondition('GTEE_MASTER');
            //SYS_InqCUBK_Sql(RULE_NM, "(SYND_FLG <> 'YES' OR SYND_FLG IS NULL) AND  APPL_NM IS NOT NULL");
        } else {
            //SYS_InqCUBK(RULE_NM, 'SOURCE_REF');
            //EEHtml.getElementById('SOURCE_REF_BTN2').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_get_MASTER_DETAILS = function() {
    try {

        var RULE_NM = document.MAINFORM.MODULE_SELECT.value + "_MASTER";
        if (RULE_NM == "EPLC_MASTER") {
            if (document.MAINFORM.TRX_TYPE.value == 'Export Bills Discounting') {
                SYS_GetCUBK('EPLC_MASTER_D', document.MAINFORM.SOURCE_REF.name, SYF_RPFM_Cal_SEND_TO_CUST_ID_Back);
            } else if (document.MAINFORM.TRX_TYPE.value == 'Forfaiting') {
                SYS_GetCUBK('EPLC_MASTER_F', document.MAINFORM.SOURCE_REF.name, SYF_RPFM_Cal_SEND_TO_CUST_ID_Back);
            }else{
            	  SYS_GetCUBK('EPLC_MASTER', document.MAINFORM.SOURCE_REF.name, SYF_RPFM_Cal_SEND_TO_CUST_ID_Back);
            }

        } else if (RULE_NM == "IPLC_MASTER") {
            SYS_GetCUBK('IPLC_MASTER', document.MAINFORM.SOURCE_REF.name, SYF_RPFM_Cal_SEND_TO_CUST_ID_Back);
            //SYS_InqCUBK_Sql(RULE_NM, "LC_BAL > 0 AND (SYND_FLG <> 'YES' OR SYND_FLG IS NULL) AND  APPL_NM IS NOT NULL");
        } else if (RULE_NM == "GTEE_MASTER") {
            SYS_GetCUBK('GTEE_MASTER', document.MAINFORM.SOURCE_REF.name, SYF_RPFM_Cal_SEND_TO_CUST_ID_Back);
            //SYS_InqCUBK_Sql(RULE_NM, "(SYND_FLG <> 'YES' OR SYND_FLG IS NULL) AND  APPL_NM IS NOT NULL");
        } else {
            //SYS_InqCUBK(RULE_NM, 'SOURCE_REF');
            //EEHtml.getElementById('SOURCE_REF_BTN2').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_SOURCE_REF_FLD = function() {
    try {

        document.MAINFORM.MAST_RISK_AMT.value = '';
        if (document.MAINFORM.SOURCE_REF.value == '' || document.MAINFORM.MODULE_SELECT.value == 'OTHR') {
            document.MAINFORM.MAST_END_DT.value = '';
            document.MAINFORM.MAST_START_DT.value = '';
            document.MAINFORM.MAST_LC_CCY.value = '';
            document.MAINFORM.MAST_LC_BAL_CCY.value = '';
            document.MAINFORM.MAST_LC_AMT.value = 0;
            document.MAINFORM.MAST_RISK_AMT.value = 0;
            document.MAINFORM.MAST_LC_BAL.value = 0;

            SYT_ChangeFldClass(document.MAINFORM.MAST_END_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.MAST_START_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_BAL, 'M');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_BAL_CCY, 'M');

        } else {
            SYF_RPFM_get_MASTER_DETAILS();
            SYT_ChangeFldClass(document.MAINFORM.MAST_END_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MAST_START_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_BAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.MAST_LC_BAL_CCY, 'P');

        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Inq_Customer_CUBK = function() {
    try {

        if (document.MAINFORM.SYND_OBLG_TYPE.value == "Bank") {
            SYS_InqCUBK('OBLG_ID_BANK');

        } else {
            SYS_InqCUBK_byCondition('OBLG_ID');

        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_OBLG_SW_TAG = function() {
    try {

        if (document.MAINFORM.OBLG_SWIFT_ADD.value != '') {
            document.MAINFORM.OBLG_SWIFT_TAG.value = 'A';
        } else if (document.MAINFORM.OBLG_NM.value != '' || document.MAINFORM.OBLG_ADD1.value != '' || document.MAINFORM.OBLG_ADD2.value != '' || document.MAINFORM.OBLG_ADD3.value != '') {
            document.MAINFORM.OBLG_SWIFT_TAG.value = 'D';
        } else {
            document.MAINFORM.OBLG_SWIFT_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Check_date = function() {
    try {

        if (document.MAINFORM.MAST_END_DT.value != '') {
            var nDays2 = SYS_GetSubDays(document.MAINFORM.MAST_START_DT.name, document.MAINFORM.MAST_END_DT.name);
            if (nDays2 < 0) {
                SYS_CheckError(document.MAINFORM.MAST_END_DT, 'Expiry Date should be later than the Start Date !');
                document.MAINFORM.MAST_END_DT.value = '';
            }
        }
        if (document.MAINFORM.MAST_START_DT.value == '') {
            document.MAINFORM.MAST_END_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_check_amount = function() {
    try {

        if (document.MAINFORM.MAST_LC_BAL_CCY.value == SYS_LOCAL_CCY) {
            if (document.MAINFORM.MAST_RISK_CCY.value == SYS_LOCAL_CCY) {
                if (SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value) > SYS_BeFloat(document.MAINFORM.MAST_LC_BAL.value)) {
                    alert("The Master Risk Amount cannot be greater than Underlying Balance");
                    document.MAINFORM.MAST_RISK_AMT.value = 0;
                }
            } else {
                if (SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value) > (SYS_BeFloat(document.MAINFORM.MAST_LC_BAL.value) * SYS_BeFloat(document.MAINFORM.RPFM_EXC_RATE2.value))) {
                    alert("The Master Risk Amount cannot be greater than Underlying Balance");
                    document.MAINFORM.MAST_RISK_AMT.value = 0;
                }
            }
        } else {
            if (document.MAINFORM.MAST_RISK_CCY.value == SYS_LOCAL_CCY) {
                if (SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value) > (SYS_BeFloat(document.MAINFORM.MAST_LC_BAL.value) * SYS_BeFloat(document.MAINFORM.RPFM_EXC_RATE.value))) {
                    alert("The Master Risk Amount cannot be greater than Underlying Balance");
                    document.MAINFORM.MAST_RISK_AMT.value = 0;
                }
            } else {
                if ((SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value) * SYS_BeFloat(document.MAINFORM.RPFM_EXC_RATE2.value)) > (SYS_BeFloat(document.MAINFORM.MAST_LC_BAL.value) * SYS_BeFloat(document.MAINFORM.RPFM_EXC_RATE.value))) {
                    alert("The Master Risk Amount cannot be greater than Underlying Balance");
                    document.MAINFORM.MAST_RISK_AMT.value = 0;
                }
            }

        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_SEND_TO_CUST_ID_Back = function() {
    try {

        document.MAINFORM.MAST_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, document.MAINFORM.MAST_LC_BAL.value);
        document.MAINFORM.MAST_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, document.MAINFORM.MAST_LC_AMT.value);
        //document.MAINFORM.MAST_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value));
        document.MAINFORM.MAST_LC_BAL_CCY.value = document.MAINFORM.MAST_LC_CCY.value;
        document.MAINFORM.MAST_RISK_CCY.value = document.MAINFORM.MAST_LC_CCY.value;
        document.MAINFORM.MAST_RISK_AMT.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_CCY.value, document.MAINFORM.MAST_LC_BAL.value);
        SYS_GetExchangeRate(document.MAINFORM.MAST_LC_BAL_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.RPFM_EXC_RATE.name, 'N');
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_EXT_RT = function() {
    try {

        document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.MAST_RISK_CCY.value, SYS_BeFloat(document.MAINFORM.MAST_LC_BAL.value) * SYS_BeFloat(document.MAINFORM.RPFM_EXC_RATE.value));
        SYF_RPFM_Cal_LOCAL_AMT('MAST_RISK_CCY', 'LC_BAL', 'INV_CCY', 'MAST_RISK_AMT', 'RPFM_EXC_RATE2');
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_LOCAL_AMT = function(TransactionCCYName, TransactionAMTName, LocalCCYName, LocalAMTName, RateFieldName) {
    try {

        var v_LOCAL_AMT_Obj; // Utility Auto Fix Comments
        var v_LOCAL_CCY_Obj; // Utility Auto Fix Comments
        var v_RATE_FIELD_Obj; // Utility Auto Fix Comments
        var v_TRX_AMT_Obj; // Utility Auto Fix Comments
        var v_TRX_CCY_Obj; // Utility Auto Fix Comments
        v_TRX_CCY_Obj = EEHtml.getElementById(TransactionCCYName);
        v_TRX_AMT_Obj = EEHtml.getElementById(TransactionAMTName);
        v_LOCAL_CCY_Obj = EEHtml.getElementById(LocalCCYName);
        v_LOCAL_AMT_Obj = EEHtml.getElementById(LocalAMTName);
        v_RATE_FIELD_Obj = EEHtml.getElementById(RateFieldName);
        if (!v_TRX_CCY_Obj) {
            return alert(TransactionCCYName + " doesn't exist!");
        }
        if (!v_TRX_AMT_Obj) {
            return alert(TransactionAMTName + " doesn't exist!");
        }
        if (!v_LOCAL_CCY_Obj) {
            return alert(LocalCCYName + " doesn't exist!");
        }
        if (!v_LOCAL_AMT_Obj) {
            return alert(LocalAMTName + " doesn't exist!");
        }
        if (!v_RATE_FIELD_Obj) {
            return alert(RateFieldName + " doesn't exist!");
        }
        v_LOCAL_CCY_Obj.value = SYS_LOCAL_CCY;
        if (v_TRX_CCY_Obj.value == SYS_LOCAL_CCY) {
            v_LOCAL_AMT_Obj.value = SYT_AmtFormat(SYS_LOCAL_CCY, v_TRX_AMT_Obj.value);
        } else {
            var MD_FLAG;
            SYS_GetExchangeRate_S(v_TRX_CCY_Obj.value, SYS_LOCAL_CCY, 'Booking Rate', v_RATE_FIELD_Obj.name, '', 'MD_FLG'); //added
            MD_FLAG = document.MAINFORM.MD_FLG.value;
            if (MD_FLAG == 'M') {
                v_LOCAL_AMT_Obj.value = SYT_AmtFormat(SYS_LOCAL_CCY, SYS_BeFloat(v_TRX_AMT_Obj.value) * SYS_BeFloat(v_RATE_FIELD_Obj.value));
            } else if (MD_FLAG == 'D') {
                v_LOCAL_AMT_Obj.value = SYT_AmtFormat(SYS_LOCAL_CCY, SYS_BeFloat(v_TRX_AMT_Obj.value) / SYS_BeFloat(v_RATE_FIELD_Obj.value));
            } else {
                v_LOCAL_AMT_Obj.value = SYT_AmtFormat(SYS_LOCAL_CCY, SYS_BeFloat(v_TRX_AMT_Obj.value) * SYS_BeFloat(v_RATE_FIELD_Obj.value));
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Cal_TRX_TYPE_Option = function() {
    try {

        SYT_RemoveOptionAll(document.MAINFORM.TRX_TYPE);
        if (document.MAINFORM.MODULE_SELECT.value == "IPLC") {
            SYT_AddOptions(document.MAINFORM.TRX_TYPE, ["Issuance", "Confirmation", "Negotiation", "UPAS", "Bankers' Acceptance"], ["Issuance", "Confirmation", "Negotiation", "UPAS", "Bankers' Acceptance"]);
        } else if (document.MAINFORM.MODULE_SELECT.value == "GTEE") {
            SYT_AddOptions(document.MAINFORM.TRX_TYPE, ["Bank Guarantee", "Counter Guarantee"], ["Bank Guarantee", "Counter Guarantee"]);

        } else if (document.MAINFORM.MODULE_SELECT.value == "EPLC") {
            SYT_AddOptions(document.MAINFORM.TRX_TYPE, ["Export Bills Discounting", "Forfaiting", "Confirmation"], ["Export Bills Discounting", "Forfaiting", "Confirmation"]);
        } else if (document.MAINFORM.MODULE_SELECT.value == "OTHR") {
            SYT_AddOptions(document.MAINFORM.TRX_TYPE, ["OTHR"], ["OTHR"]);

        }
        EEHtml.fireEvent(document.MAINFORM.TRX_TYPE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_SYND_OBLG_TYPE_FLD = function() {
    try {

        if (document.MAINFORM.SYND_OBLG_TYPE.value == '' || document.MAINFORM.SYND_OBLG_TYPE.value == 'Corporate' || document.MAINFORM.SYND_OBLG_TYPE.value == 'Bank') {
            document.MAINFORM.OBLG_ID.value = '';
            document.MAINFORM.OBLG_NM.value = '';
            document.MAINFORM.OBLG_ADD1.value = '';
            document.MAINFORM.OBLG_ADD2.value = '';
            document.MAINFORM.OBLG_ADD3.value = '';
            document.MAINFORM.OBLG_SWIFT_ADD.value = '';
            document.MAINFORM.BENE_CNTY_CD.value = '';
        } else {
            SYF_RPFM_SYF_RPFM_SYND_OBLG_ID_FLD();
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_SYF_RPFM_SYND_OBLG_ID_FLD = function() {
    try {

        if (document.MAINFORM.OBLG_ID.value == "") {
            document.MAINFORM.OBLG_NM.value = '';
            document.MAINFORM.OBLG_ADD1.value = '';
            document.MAINFORM.OBLG_ADD2.value = '';
            document.MAINFORM.OBLG_ADD3.value = '';
            document.MAINFORM.OBLG_SWIFT_ADD.value = '';
            SYF_RPFM_Cal_OBLG_SW_TAG();
        } else {
            SYF_RPFM_Get_Obligor_CUBK();
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_Get_Obligor_CUBK = function() {
    try {

        if (document.MAINFORM.SYND_OBLG_TYPE.value == "Bank") {
            SYS_GetCUBK('OBLG_ID_BANK', document.MAINFORM.OBLG_ID.name, 'SYM_RPFM_Cal_SYND_OBLG_SW_TAG');

        } else {
            SYS_GetCUBK('OBLG_ID', document.MAINFORM.OBLG_ID.name, 'SYM_RPFM_Cal_SYND_OBLG_SW_TAG');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_FLD_RPFM_MODULE_SELECT2_onchange = function(event) {
    try {

        if (document.MAINFORM.MODULE_SELECT.value != '') {

            SYT_ChangeFldClass(document.MAINFORM.SOURCE_REF, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SOURCE_REF, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.SYF_RPFM_CAL_EXT_RATE = function() {
    try {

        document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.MAST_LC_BAL_CCY.value, SYS_BeFloat(document.MAINFORM.MAST_LC_BAL.value) * SYS_BeFloat(document.MAINFORM.RPFM_EXC_RATE.value));
        SYF_RPFM_Cal_LOCAL_AMT('MAST_LC_BAL_CCY', 'LC_BAL', 'INV_CCY', 'MAST_RISK_AMT', 'RPFM_EXC_RATE2');
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_MAST_END_DT_onchange = function(event) {
    try {
        SYF_RPFM_Check_date();
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'MAST_END_DT');
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_MAST_LC_AMT_onchange = function(event) {
    try {
        var MAST_LC_AMT = SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value);
        if (MAST_LC_AMT < 0) {
            alert("Underlying Amount can't be negative value");
            document.MAINFORM.MAST_LC_AMT.value = 0;
            return;
        }
        if (SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value) < SYS_BeFloat(document.MAINFORM.MAST_LC_BAL.value)) {
            alert("Underlying amount cannot be less than underlying balance");
            document.MAINFORM.MAST_LC_BAL.value = 0;
            document.MAINFORM.MAST_RISK_AMT.value = 0;
            document.MAINFORM.MAST_LC_BAL_CCY.value = document.MAINFORM.MAST_LC_CCY.value;
            document.MAINFORM.MAST_RISK_CCY.value = document.MAINFORM.MAST_LC_CCY.value;
            return;
        }
        if (document.MAINFORM.MAST_LC_CCY.value == document.MAINFORM.MAST_LC_BAL_CCY.value && document.MAINFORM.MAST_LC_CCY.value == document.MAINFORM.MAST_RISK_CCY.value && document.MAINFORM.MAST_LC_BAL_CCY.value == document.MAINFORM.MAST_RISK_CCY.value) {
            if (SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value) < SYS_BeFloat(document.MAINFORM.MAST_LC_BAL.value) || SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value) < SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value)) {
                alert("Underlying amount cannot be less than underlying balance and risk amount");
                document.MAINFORM.MAST_LC_BAL.value = 0;
                document.MAINFORM.MAST_RISK_AMT.value = 0;
                document.MAINFORM.MAST_LC_BAL_CCY.value = document.MAINFORM.MAST_LC_CCY.value;
                document.MAINFORM.MAST_RISK_CCY.value = document.MAINFORM.MAST_LC_CCY.value;
                return;
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_MAST_LC_BAL_onchange = function(event) {
    try {
        var MAST_LC_BAL = SYS_BeFloat(document.MAINFORM.MAST_LC_BAL.value);
        if (MAST_LC_BAL < 0) {
            alert("Underlying Balance can't be negative value");
            document.MAINFORM.MAST_LC_BAL.value = 0;
            return;
        }
        if (SYS_BeFloat(document.MAINFORM.MAST_LC_BAL.value) > SYS_BeFloat(document.MAINFORM.MAST_LC_AMT.value)) {
            alert("Underlying balance cannot be greater than underlying amount");
            document.MAINFORM.MAST_LC_BAL.value = 0;
            document.MAINFORM.MAST_RISK_AMT.value = 0;
            document.MAINFORM.MAST_RISK_CCY.value = document.MAINFORM.MAST_LC_BAL_CCY.value;
            return;
        }
        if (document.MAINFORM.MAST_LC_CCY.value == document.MAINFORM.MAST_LC_BAL_CCY.value && document.MAINFORM.MAST_LC_CCY.value == document.MAINFORM.MAST_RISK_CCY.value && document.MAINFORM.MAST_LC_BAL_CCY.value == document.MAINFORM.MAST_RISK_CCY.value) {
            if (SYS_BeFloat(document.MAINFORM.MAST_LC_BAL.value) < SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value)) {
                alert("Underlying balance cannot be less than risk amount");
                document.MAINFORM.MAST_LC_BAL.value = 0;
                document.MAINFORM.MAST_RISK_AMT.value = 0;
                document.MAINFORM.MAST_RISK_CCY.value = document.MAINFORM.MAST_LC_BAL_CCY.value;
                return;
            }
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_MAST_LC_BAL_CCY_onchange = function(event) {
    try {
        SYS_GetExchangeRate(document.MAINFORM.MAST_LC_BAL_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.RPFM_EXC_RATE.name, 'N');
        SYS_GetExchangeRate(document.MAINFORM.MAST_RISK_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.RPFM_EXC_RATE2.name, 'N');
        document.MAINFORM.MAST_RISK_AMT.value = 0;
        SYF_RPFM_CAL_EXT_RATE();
        if (document.MAINFORM.MAST_LC_BAL_CCY.value == document.MAINFORM.MAST_RISK_CCY.value) {
            document.MAINFORM.MAST_RISK_AMT.value = document.MAINFORM.MAST_LC_BAL.value;
            return;
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_MAST_LC_CCY_onchange = function(event) {
    try {
        SYS_GetExchangeRate(document.MAINFORM.MAST_LC_BAL_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.RPFM_EXC_RATE.name, 'N');
        SYS_GetExchangeRate(document.MAINFORM.MAST_RISK_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.RPFM_EXC_RATE2.name, 'N');
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_MAST_RISK_AMT_onchange = function(event) {
    try {
        SYS_GetExchangeRate(document.MAINFORM.MAST_LC_BAL_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.RPFM_EXC_RATE.name, 'N');
        SYS_GetExchangeRate(document.MAINFORM.MAST_RISK_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.RPFM_EXC_RATE2.name, 'N');
        if (SYS_BeFloat(document.MAINFORM.MAST_RISK_AMT.value) < 0) {
            alert("The Risk amount field should not accept negative values!");
            document.MAINFORM.MAST_RISK_AMT.value = 0;
        }
        SYF_RPFM_check_amount();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_MAST_RISK_CCY_onchange = function(event) {
    try {
        document.MAINFORM.MAST_RISK_AMT.value = 0;
        SYF_RPFM_Cal_EXT_RT();
        if (document.MAINFORM.MAST_LC_BAL_CCY.value == document.MAINFORM.MAST_RISK_CCY.value) {
            document.MAINFORM.MAST_RISK_AMT.value = document.MAINFORM.MAST_LC_BAL.value;
            return;
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_MAST_START_DT_onchange = function(event) {
    try {
        SYF_RPFM_Check_date();
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'MAST_START_DT');
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_MODULE_SELECT_onchange = function(event) {
    try {
        document.MAINFORM.SOURCE_REF.value = '';
        document.MAINFORM.MODULE_SELECT2.value = '';
        document.MAINFORM.MAST_START_DT.value = '';
        document.MAINFORM.MAST_END_DT.value = '';
        document.MAINFORM.MAST_LC_AMT.value = 0;
        document.MAINFORM.MAST_LC_BAL.value = 0;

        if (document.MAINFORM.MODULE_SELECT.value == 'OTHR') {
            SYT_ChangeFldClass(document.MAINFORM.MODULE_SELECT2, 'M');
            //document.MAINFORM.MODULE_SELECT.style.visibility = 'visible';
            EEHtml.getElementById('MODULE_SELECT2').style.display = '';


        } else {
            SYT_ChangeFldClass(document.MAINFORM.MODULE_SELECT2, 'O');
            EEHtml.getElementById('MODULE_SELECT2').style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.SOURCE_REF, 'M');
        }
        SYF_RPFM_SOURCE_REF_FLD();

        SYF_RPFM_Cal_TRX_TYPE_Option();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_MODULE_SELECT2_onchange = function(event) {
    try {
        if (document.MAINFORM.MODULE_SELECT.value != '') {

            SYT_ChangeFldClass(document.MAINFORM.SOURCE_REF, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SOURCE_REF, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_OBLG_ADD1_onchange = function(event) {
    try {
        SYF_RPFM_Cal_OBLG_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_OBLG_ADD2_onchange = function(event) {
    try {
        SYF_RPFM_Cal_OBLG_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_OBLG_ADD3_onchange = function(event) {
    try {
        SYF_RPFM_Cal_OBLG_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_OBLG_ID_onchange = function(event) {
    try {
        SYM_RPFM_OBLG_ID_GetCUBK();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_OBLG_NM_onchange = function(event) {
    try {
        SYF_RPFM_Cal_OBLG_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_OBLG_SWIFT_ADD_onchange = function(event) {
    try {
        SYF_RPFM_Cal_OBLG_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SOURCE_REF_onchange = function(event) {
    try {
        SYF_RPFM_SOURCE_REF_FLD();
        //SYF_RPFM_get_MASTER_DETAILS();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_SYND_OBLG_TYPE_onchange = function(event) {
    try {
        SYF_RPFM_SYND_OBLG_TYPE_FLD();
        SYM_RPFM_Cal_SYND_OBLG_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}

csFuncLevelProto.FLD_RPFM_TRX_TYPE_onchange = function(event) {
    try {
        if (document.MAINFORM.TRX_TYPE.value == 'OTHR') {
            SYT_ChangeFldClass(document.MAINFORM.TRX_TYPE2, 'M');
            //document.MAINFORM.MODULE_SELECT.style.visibility = 'visible';
            EEHtml.getElementById('TRX_TYPE2').style.display = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TRX_TYPE2, 'O');
            EEHtml.getElementById('TRX_TYPE2').style.display = 'none';

        }
        if (document.MAINFORM.MODULE_SELECT.value == 'EPLC') {
            document.MAINFORM.SOURCE_REF.value = '';
        }
        SYM_RPFM_Cal_FACI_TYPE();
    } catch (e) {
        DisExcpt("SYF_RPFM_RegMstAgreement.js", e);
    }
}