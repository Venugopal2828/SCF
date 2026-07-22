"path:SCRN/DO/Participant Header.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Calback_SYND_EXPIRTY_DT = function(enddate) {
    try {
        document.MAINFORM.SYND_EXPIRY_DT.value = enddate;
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.Get_RECRS_PRTY_NM = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var RECRS_PRTY_CNTY_CD; // Utility Auto Fix Comments
        var RECRS_PRTY_NM; // Utility Auto Fix Comments
        var RECRS_PRTY_REF; // Utility Auto Fix Comments
        var RECRS_PRTY_SW_ADD; // Utility Auto Fix Comments
        var RECRS_PRTY_SW_TAG; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordState; // Utility Auto Fix Comments
        RECRS_PRTY_NM = document.MAINFORM.RECRS_PRTY_NM.value;
        RECRS_PRTY_CNTY_CD = document.MAINFORM.RECRS_PRTY_CNTY_CD.value;
        RECRS_PRTY_SW_ADD = document.MAINFORM.RECRS_PRTY_SW_ADD.value;
        RECRS_PRTY_SW_TAG = document.MAINFORM.RECRS_PRTY_SW_TAG.value;
        RECRS_PRTY_REF = document.MAINFORM.RECRS_PRTY_REF.value;

        _do = parent.currentDo; // Utility Auto Fix Comments
        record = _do.getCurrentRecord(); // Utility Auto Fix Comments
        recordState = SYS_getRecState(record);

        if ('N' == recordState || 'E' == recordState) {
            if ('GTEE' == SYS_MODULE_NAME) {
                if (SYS_getValueFromMain('APPL_NM') != "") {
                    RECRS_PRTY_NM = SYS_getValueFromMain('APPL_NM');
                    RECRS_PRTY_CNTY_CD = SYS_getValueFromMain('APPL_BR_CD');
                    RECRS_PRTY_SW_ADD = SYS_getValueFromMain('APPL_SW_ADD');
                    RECRS_PRTY_SW_TAG = SYS_getValueFromMain('APPL_SW_TAG');
                    RECRS_PRTY_REF = SYS_getValueFromMain('APPL_REF');
                }
            }
            if ('IWGT' == SYS_MODULE_NAME) {
                RECRS_PRTY_NM = SYS_getValueFromMain('RCV_FM_BK_NM');
                RECRS_PRTY_SW_ADD = SYS_getValueFromMain('RCV_FM_BK_SW_ADD');
                RECRS_PRTY_SW_TAG = SYS_getValueFromMain('RCV_FM_BK_SW_TAG');
            }

            if ('REIM' == SYS_MODULE_NAME) {
                RECRS_PRTY_NM = SYS_getValueFromMain('ISSUE_BK_NM');
                RECRS_PRTY_SW_ADD = SYS_getValueFromMain('ISSUE_BK_SW_ADD');
                RECRS_PRTY_SW_TAG = SYS_getValueFromMain('ISSUE_BK_SW_TAG');
            }

            if ('IPLC' == SYS_MODULE_NAME) {
                RECRS_PRTY_NM = SYS_getValueFromMain('APPL_NM');
                RECRS_PRTY_CNTY_CD = SYS_getValueFromMain('APPL_BR_CD');
                RECRS_PRTY_REF = SYS_getValueFromMain('APPL_REF');
            }

            if ('EPLC' == SYS_MODULE_NAME) {
                RECRS_PRTY_NM = SYS_getValueFromMain('ISSUE_BK_NM');
                RECRS_PRTY_SW_ADD = SYS_getValueFromMain('ISSUE_BK_SW_ADD');
                RECRS_PRTY_SW_TAG = SYS_getValueFromMain('ISSUE_BK_SW_TAG');
            }

        }
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.Get_RECRS_PRTY_NM_NEW = function() {
    try {
        var MODULE; // Utility Auto Fix Comments
        var RECRS_PRTY_CNTY_CD; // Utility Auto Fix Comments
        var RECRS_PRTY_NM; // Utility Auto Fix Comments
        var RECRS_PRTY_REF; // Utility Auto Fix Comments
        var RECRS_PRTY_SW_ADD; // Utility Auto Fix Comments
        var RECRS_PRTY_SW_TAG; // Utility Auto Fix Comments
        RECRS_PRTY_NM = '';
        RECRS_PRTY_CNTY_CD = '';
        RECRS_PRTY_SW_ADD = '';
        RECRS_PRTY_SW_TAG = '';
        RECRS_PRTY_REF = '';
        MODULE = SYS_getValueFromMain('MODULE_SELECT');
        switch (MODULE) {
            case 'GTEE':
                RECRS_PRTY_NM = SYS_getValueFromMain('APPL_NM');
                RECRS_PRTY_CNTY_CD = SYS_getValueFromMain('APPL_BR_CD');
                RECRS_PRTY_SW_ADD = SYS_getValueFromMain('APPL_SW_ADD');
                RECRS_PRTY_SW_TAG = SYS_getValueFromMain('APPL_SW_TAG');
                RECRS_PRTY_REF = SYS_getValueFromMain('APPL_REF');
                break;
            case 'IWGT':
                RECRS_PRTY_NM = SYS_getValueFromMain('RCV_FM_BK_NM');
                RECRS_PRTY_SW_ADD = SYS_getValueFromMain('RCV_FM_BK_SW_ADD');
                RECRS_PRTY_SW_TAG = SYS_getValueFromMain('RCV_FM_BK_SW_TAG');
                break;
            case 'REIM':
                RECRS_PRTY_NM = SYS_getValueFromMain('ISSUE_BK_NM');
                RECRS_PRTY_SW_ADD = SYS_getValueFromMain('ISSUE_BK_SW_ADD');
                RECRS_PRTY_SW_TAG = SYS_getValueFromMain('ISSUE_BK_SW_TAG');
                break;
            case 'IPLC':
                RECRS_PRTY_NM = SYS_getValueFromMain('APPL_NM');
                RECRS_PRTY_CNTY_CD = SYS_getValueFromMain('APPL_BR_CD');
                RECRS_PRTY_REF = SYS_getValueFromMain('APPL_REF');
                break;
            case 'EPLC':
                RECRS_PRTY_NM = SYS_getValueFromMain('ISSUE_BK_NM');
                RECRS_PRTY_SW_ADD = SYS_getValueFromMain('ISSUE_BK_SW_ADD');
                RECRS_PRTY_SW_TAG = SYS_getValueFromMain('ISSUE_BK_SW_TAG');
                break;
            default:
                break;
        }
        document.MAINFORM.RECRS_PRTY_NM.value = RECRS_PRTY_NM;
        document.MAINFORM.RECRS_PRTY_CNTY_CD.value = RECRS_PRTY_CNTY_CD;
        document.MAINFORM.RECRS_PRTY_SW_ADD.value = RECRS_PRTY_SW_ADD;
        document.MAINFORM.RECRS_PRTY_SW_TAG.value = RECRS_PRTY_SW_TAG;
        document.MAINFORM.RECRS_PRTY_REF.value = RECRS_PRTY_REF;
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        Set_SYND_CCY();
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.LoadDODataOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'EC' && SYS_ORG_FUNCTION_SHORT_NAME == 'AmdSyndPart') {
            SYS_GetDataForDO_S('SyndDetail', 'N', false);
        } //Jax for AmdSyndPart
        /* document.MAINFORM.SYND_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_CCY.value, SYS_getFieldSumByXpath('SYND_PART_FAMT', 'ParticipantHeader.ParticipantDetail'));*/
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        if (SYS_ORG_FUNCTION_NAME == "RegSyndByPartpt") {
            if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'RE') {
                var amt = SYS_getValueFromMain('PCPT_AMT');
                document.MAINFORM.SYND_AMT.value = amt;
                document.MAINFORM.SYND_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_CCY.value, document.MAINFORM.SYND_AMT.value);
            }
        }

    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.SYF_EPLC_getDOdata_ParticipantHeader_ParticipantDetail = function() {
    try {
        SYS_GetDataForDO_S("SyndDetail", 'N');
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.SYF_EXCO_getDOdata_ParticipantHeader_ParticipantDetail = function() {
    try {
        SYS_GetDataForDO_S("SyndDetail", "N");
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.SYF_GTEE_getDOdata_ParticipantHeader_ParticipantDetail = function() {
    try {
        SYS_GetDataForDO_S("SyndDetail", 'N');
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.SYF_IPLC_getDOdata_ParticipantHeader_ParticipantDetail = function() {
    try {
        SYS_GetDataForDO_S("SyndDetail", 'N');
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.SYF_IWGT_getDOdata_ParticipantHeader_ParticipantDetail = function() {
    try {
        SYS_GetDataForDO_S("SyndDetail", 'N');
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.SYF_REIM_getDOdata_ParticipantHeader_ParticipantDetail = function() {
    try {
        SYS_GetDataForDO_S("SyndDetail", 'N');
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.SYF_SYND_getDOdata_ParticipantHeader_ParticipantDetail = function() {
    try {
        SYS_GetDataForDO_S("SyndDetail", 'N');
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.Set_SYND_BAL = function() {
    try {
        //document.MAINFORM.SYND_BAL.value=SYS_getValueFromMain('CONF_BAL_LCCCY');
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.Set_SYND_CCY = function() {
    try {
        if (SYS_MODULE_NAME == 'REIM' || SYS_MODULE_NAME == 'IPLC') {
            document.MAINFORM.SYND_CCY.value = SYS_getValueFromMain('LC_CCY');
        }
        if (SYS_MODULE_NAME == 'EXCO') {
            document.MAINFORM.SYND_CCY.value = SYS_getValueFromMain('CFNC_C_CCY');
        }
        if (SYS_MODULE_NAME == 'GTEE' || SYS_MODULE_NAME == 'IWGT') {
            document.MAINFORM.SYND_CCY.value = SYS_getValueFromMain('GTEE_CCY');
        }
        if (SYS_MODULE_NAME == 'SYND') {
            document.MAINFORM.SYND_CCY.value = SYS_getValueFromMain('MAST_LC_CCY');
        }
        if (SYS_MODULE_NAME == 'EPLC') {
            if (SYS_FUNCTION_NAME == 'CreatSyndicationDealfordiscount') {
                document.MAINFORM.SYND_CCY.value = SYS_getValueFromMain('CFNC_C_CCY');
            } else {
                document.MAINFORM.SYND_CCY.value = SYS_getValueFromMain('LC_CCY');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.Set_SYND_EXPIRY_DT = function() {
    try {
        var EXPIRY_DT; // Utility Auto Fix Comments
        var GRACE_DAYS; // Utility Auto Fix Comments
        if ('EXCO' == SYS_MODULE_NAME || SYS_MODULE_NAME == 'CreatSyndicationDealfordiscount') {
            EXPIRY_DT = SYS_getValueFromMain('CFNC_D_DUE_DT');
        } else if ('SYND' == SYS_MODULE_NAME) {
            EXPIRY_DT = SYS_getValueFromMain('MAST_END_DT'); // Utility Auto Fix Comments
        } else {
            EXPIRY_DT = SYS_getValueFromMain('EXPIRY_DT'); // Utility Auto Fix Comments
        }
        GRACE_DAYS = document.MAINFORM.GRACE_DAYS.value;
        if (EXPIRY_DT != '') {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, EXPIRY_DT, GRACE_DAYS, Calback_SYND_EXPIRTY_DT, 'A', 'N', 'Y');
        }
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.Set_SYND_RISK_TYPE = function() {
    try {
        document.MAINFORM.SYND_RISK_TYPE.value = SYS_getValueFromMain('SYND_RISK_TYPE');
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.GRACE_DAYS_onchange = function(event) {
    try {
        Set_SYND_EXPIRY_DT();
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}

csDOScreenProto.SYND_CCY_onchange = function(event) {
    try {
        Set_SYND_CCY();
    } catch (e) {
        DisExcpt("SSSS_Participant Header.js", e);
    }
}