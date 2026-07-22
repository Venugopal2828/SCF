var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_ACPT_BK_ID = function() {
    try {

        if (document.MAINFORM.ACPT_BK_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_EditRecords_SYF_FFIT_ACPT_BK_ID_0', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_BAL_DRAFT = function() {
    try {

        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.BAL_DRAFT.value > 0) {
            document.MAINFORM.BAL_DRAFT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.BAL_DRAFT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FINANCE_FLG.value = '1';
        SYT_Check_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_FINC_DUE_DT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_EXPT_ID = function() {
    try {

        /*if (document.MAINFORM.EXPT_ID.value!='')
{
      SYS_Get22TableData_Boc('CUST_MASTER',"CUST_ID='"+document.MAINFORM.EXPT_ID.value+"'",'CUST_NM;CUST_NM_C','EXPT_NM;EXPT_NM_C');
}*/
        if (document.MAINFORM.EXPT_ID.value == '') {
            document.MAINFORM.EXPT_ID.value = '';
            document.MAINFORM.EXPT_NM.value = '';
            document.MAINFORM.EXPT_NM_C.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_DUE_DT = function() {
    try {

        var sdays = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FINC_DUE_DT.name);
        if (document.MAINFORM.FINC_DUE_DT.value != '' && sdays <= 0) {
            SYS_CheckError(document.MAINFORM.FINC_DUE_DT, 'Maturity');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GET_DATA_FLG = function() {
    try {

        if (document.MAINFORM.TRX_NO.value != '' && document.MAINFORM.GET_DATA_FLG.value == 'BP') {
            var BP = '';
            /*var BP=SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'C_MAIN_REF;BENE_ID;BENE_NM;ISSUE_BK_ID;ISSUE_BK_NM;CONF_BK_ID;CONF_BK_NM;DRAFT_BAL;INV_NO;LC_NO',
                                                                                     'BA_ADOC_NO;EXPT_ID;EXPT_NM;ISSUE_BK_ID;ISSUE_BK_NM;CONF_BK_ID;CONF_BK_NM;BAL_DRAFT;INV_NO;LC_NO');*/
            if (BP == 'Y') {
                if (document.MAINFORM.CONF_BK_ID.value != '') {
                    document.MAINFORM.ACPT_BK_ID.value = document.MAINFORM.CONF_BK_ID.value;
                    document.MAINFORM.ACPT_BK_NM.value = document.MAINFORM.CONF_BK_NM.value;
                } else if (document.MAINFORM.ISSUE_BK_ID.value != '') {
                    document.MAINFORM.ACPT_BK_ID.value = document.MAINFORM.ISSUE_BK_ID.value;
                    document.MAINFORM.ACPT_BK_NM.value = document.MAINFORM.ISSUE_BK_NM.value;
                }
                document.MAINFORM.BA_TRX_NO.value = document.MAINFORM.TRX_NO.value;
                document.MAINFORM.DEBT_INSMT_NO.value = document.MAINFORM.LC_NO.value;
                document.MAINFORM.DEBT_INSMT_TYPE.value = '5';
                document.MAINFORM.GET_DATA_FLG.value = 'BP';
            }
        } else if (document.MAINFORM.TRX_NO.value != '' && document.MAINFORM.GET_DATA_FLG.value == 'OC') {
            var OC = '';
            /* var OC=SYS_Get22TableData_Boc('EXCL_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'DRAWER_ID;DRAWER_NM;COLL_BK_ID;COLL_BK_NM;DRAFT_BAL;INV_NO',
                                                                                                 'EXPT_ID;EXPT_NM;ACPT_BK_ID;ACPT_BK_NM;BAL_DRAFT;INV_NO');*/
            if (OC == 'Y') {
                document.MAINFORM.BA_ADOC_NO.value = document.MAINFORM.TRX_NO.value;
                document.MAINFORM.BA_TRX_NO.value = '';
                document.MAINFORM.DEBT_INSMT_TYPE.value = '5';
                document.MAINFORM.DEBT_INSMT_NO.value = document.MAINFORM.INV_NO.value;
                document.MAINFORM.GET_DATA_FLG.value = 'OC';
            }
        }
        if (document.MAINFORM.BAL_DRAFT.value == '') {
            document.MAINFORM.BAL_DRAFT.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.EVENT_TYPE.value = 'EditRecords';
        document.MAINFORM.Submit.disabled = true;
        document.MAINFORM.GL_FINC_TYPE.value = GL_PRDT_CODE_OLD;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            SYT_RELE_CREA_BY();
            SYF_FFIT_FINC_DUE_DT();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRX_NO = function() {
    try {

        if (document.MAINFORM.TRX_NO.value != '') {
            var BP = '';
            /* var BP=SYS_Get22TableData_Boc('EPLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'C_MAIN_REF;BENE_ID;BENE_NM;ISSUE_BK_ID;ISSUE_BK_NM;CONF_BK_ID;CONF_BK_NM;DRAFT_BAL;INV_NO;LC_NO','BA_ADOC_NO;EXPT_ID;EXPT_NM;ISSUE_BK_ID;ISSUE_BK_NM;CONF_BK_ID;CONF_BK_NM;BAL_DRAFT;INV_NO;LC_NO');*/
            if (BP == 'Y') {
                if (document.MAINFORM.CONF_BK_ID.value != '') {
                    document.MAINFORM.ACPT_BK_ID.value = document.MAINFORM.CONF_BK_ID.value;
                    document.MAINFORM.ACPT_BK_NM.value = document.MAINFORM.CONF_BK_NM.value;
                } else if (document.MAINFORM.ISSUE_BK_ID.value != '') {
                    document.MAINFORM.ACPT_BK_ID.value = document.MAINFORM.ISSUE_BK_ID.value;
                    document.MAINFORM.ACPT_BK_NM.value = document.MAINFORM.ISSUE_BK_NM.value;
                }
                document.MAINFORM.BA_TRX_NO.value = document.MAINFORM.TRX_NO.value;
                document.MAINFORM.DEBT_INSMT_NO.value = document.MAINFORM.LC_NO.value;
                document.MAINFORM.DEBT_INSMT_TYPE.value = '5';
                document.MAINFORM.GET_DATA_FLG.value = 'BP';
            }
            if (BP == 'N') {
                var OC = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_EditRecords_SYF_FFIT_TRX_NO_1', '1');
                if (OC == 'Y') {
                    document.MAINFORM.BA_ADOC_NO.value = document.MAINFORM.TRX_NO.value;
                    document.MAINFORM.BA_TRX_NO.value = '';
                    document.MAINFORM.DEBT_INSMT_TYPE.value = '5';
                    document.MAINFORM.DEBT_INSMT_NO.value = document.MAINFORM.INV_NO.value;
                    document.MAINFORM.GET_DATA_FLG.value = 'OC';
                }
                if (OC == 'N') {
                    document.MAINFORM.BA_ADOC_NO.value = '';
                    document.MAINFORM.BA_TRX_NO.value = '';
                    document.MAINFORM.DEBT_INSMT_TYPE.value = '4';
                    document.MAINFORM.FINC_CCY.value = 'USD';
                    document.MAINFORM.BAL_DRAFT.value = '0';
                    document.MAINFORM.DEBT_INSMT_NO.value = '';
                    document.MAINFORM.GET_DATA_FLG.value = '0';
                }
            }
        }
        if (document.MAINFORM.BAL_DRAFT.value == '') {
            document.MAINFORM.BAL_DRAFT.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VIP_LEVEL = function() {
    try {

        /*if(document.MAINFORM.EXPT_ID.value!='')
{
SYS_Get22TableData_Boc('CUST_MASTER',"CUST_ID='"+document.MAINFORM.EXPT_ID.value+"'",'VIP_LEVEL','VIP_LEVEL');
}*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_BK_ID_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BAL_DRAFT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.BAL_DRAFT.value)) {
            document.MAINFORM.BAL_DRAFT.value = 0;
        }
        SYF_FFIT_BAL_DRAFT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_EXPT_ID_onchange = function(event) {
    try {
        SYF_FFIT_EXPT_ID();
        SYF_FFIT_VIP_LEVEL();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_CCY_onchange = function(event) {
    try {
        SYF_FFIT_BAL_DRAFT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_DUE_DT_onchange = function(event) {
    try {
        SYF_FFIT_FINC_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GET_DATA_FLG_onchange = function(event) {
    try {
        SYF_FFIT_GET_DATA_FLG();
        SYF_FFIT_EXPT_ID();
        SYF_FFIT_BAL_DRAFT();
        SYF_FFIT_VIP_LEVEL();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRE_OVS_CHG_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.PRE_OVS_CHG.value)) {
            document.MAINFORM.PRE_OVS_CHG.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRX_NO_onchange = function(event) {
    try {
        SYF_DATA_TRX_NO();
        SYF_FFIT_EXPT_ID();
        SYF_FFIT_BAL_DRAFT();
        SYF_FFIT_VIP_LEVEL();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_EditRecords.js", e);
    }
}