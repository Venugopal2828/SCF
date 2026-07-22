var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_TSUM_TSU_SUBMIT_REF = function(ref) {
    try {

        var C_MAIN_REF = "";
        var TSU_MESSAGE_ID = "";
        var SUBMIT_BIC = SYS_LOGIN_BIC;
        C_MAIN_REF = SUBMIT_BIC + "PAY" + ref;
        TSU_MESSAGE_ID = C_MAIN_REF + String(SYS_I_EVENT_TIMES);
        SYT_setFldValue("TSU_MESSAGE_ID", TSU_MESSAGE_ID);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_CDTRAC_TPCD = function() {
    try {

        if (document.MAINFORM.TSU_CDTRAC_TPCD.value == "") {
            if (document.MAINFORM.TSU_CDTRAC_TPID.value == "") {
                SYT_ChangeFldClass(document.MAINFORM.TSU_CDTRAC_TPCD, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_CDTRAC_TPID, 'O', 'N');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.TSU_CDTRAC_TPCD, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_CDTRAC_TPID, 'M', 'N');
                document.MAINFORM.TSU_CDTRAC_TPCD.value = "";
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TSU_CDTRAC_TPCD, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CDTRAC_TPID, 'P', 'N');
            document.MAINFORM.TSU_CDTRAC_TPID.value = "";
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_SetRef = function() {
    try {

        SYS_GetRefNo("TSUM", "SYF_TSUM_TSU_SUBMIT_REF");
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_BYRBK_ID = function() {
    try {

        SYS_GetCUBK('TSU_BYRBK_ID', 'TSU_BUYER_BK_ID');
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TsuBene = function() {
    try {

        if (document.MAINFORM.TSU_BENE_BBAN.value == "") {
            if (document.MAINFORM.TSU_BENE_IBAN.value == "") {
                if (document.MAINFORM.TSU_BENE_UPIC.value == "") {
                    if (document.MAINFORM.TSU_BENE_ACC.value == "") {
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'M', 'N');
                    } else {
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'P', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'P', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'P', 'N');
                    }
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'M', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'P', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'P', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'P', 'N');
                }
            } else {
                SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'P', 'N');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_SwitchDsp = function(intType) {
    try {

        switch (intType) {
            case 0:
                document.MAINFORM.TSU_FININST_NM.value = "";
                document.MAINFORM.TSU_STREET_NM.value = "";
                document.MAINFORM.TSU_TOWN_NM.value = "";
                document.MAINFORM.TSU_POST_CD.value = "";
                document.MAINFORM.TSU_CNTY_SUB_DIVI.value = "";
                document.MAINFORM.TSU_FININST_CNTY.value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_BIC, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_NM, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_STREET_NM, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_TOWN_NM, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_POST_CD, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_CNTY_SUB_DIVI, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_CNTY, 'P', 'N');
                break;
            case 1:
                document.MAINFORM.TSU_FININST_BIC.value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_BIC, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_NM, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_STREET_NM, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_TOWN_NM, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_POST_CD, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_CNTY_SUB_DIVI, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_CNTY, 'M', 'N');
                break;
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.SYF_TSUM_TSU_SELLRBK_ID = function() {
    try {

        SYS_GetCUBK('TSU_SELLRBK_ID', 'TSU_SEL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYF_TSUM_SetRef();
        if (EEHtml.getElementById('RadioGroup0').checked == true) {
            SYF_TSUM_SwitchDsp(0);
        }
        var mainref = document.MAINFORM.C_MAIN_REF.value;
        SYT_setFldValue("TSU_SUBMIT_REF", mainref);
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            if (document.MAINFORM.TSU_COMM_REF.value == '') {
                SYS_GetDataForDO_S('Get019To044');
                parent.getDOdataFromSes('A');
            }
            if (document.MAINFORM.TSU_TRX_STATUS.value == 'DataSetSubmission') {
                SYS_GetDataForDO_S('Get014To044');
                parent.getDOdataFromSes('A');
            }
            if (document.MAINFORM.TSU_TRX_STATUS.value == 'ForwardDataSetSubmission') {
                SYS_GetDataForDO_S('Get017To044');
                parent.getDOdataFromSes('A');
            }
        }
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_genTsuSeqNum();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_BENE_ACC_onchange = function(event) {
    try {
        SYF_TSUM_TsuBene();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_BENE_BBAN_onchange = function(event) {
    try {
        SYF_TSUM_TsuBene();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_BENE_IBAN_onchange = function(event) {
    try {
        SYF_TSUM_TsuBene();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_BENE_UPIC_onchange = function(event) {
    try {
        SYF_TSUM_TsuBene();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_BUYER_BK_ID_onchange = function(event) {
    try {
        SYF_TSUM_TSU_BYRBK_ID();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_CDTRAC_TPCD_onchange = function(event) {
    try {
        SYF_TSUM_TSU_CDTRAC_TPCD();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_CDTRAC_TPID_onchange = function(event) {
    try {
        SYF_TSUM_TSU_CDTRAC_TPCD();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_EXPCTD_PMT_DT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}

csFuncLevelProto.FLD_TSUM_TSU_SEL_BK_ID_onchange = function(event) {
    try {
        SYF_TSUM_TSU_SELLRBK_ID();
    } catch (e) {
        DisExcpt("SYF_TSUM_R2IntentToPayNotification.js", e);
    }
}