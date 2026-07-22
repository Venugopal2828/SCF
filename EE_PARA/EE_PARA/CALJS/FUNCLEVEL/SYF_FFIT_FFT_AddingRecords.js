var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_ACPT_BK_ID = function() {
    try {

        if (document.MAINFORM.ACPT_BK_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_AddingRecords_SYF_FFIT_ACPT_BK_ID_0', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_BAL_DRAFT = function() {
    try {

        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.BAL_DRAFT.value > 0) {
            document.MAINFORM.BAL_DRAFT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.BAL_DRAFT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FINANCE_FLG.value = '1';
        document.MAINFORM.DISTRICT_CODE.value = document.MAINFORM.FINC_CCY.value;
        document.MAINFORM.BAL_FFT.value = '0';
        document.MAINFORM.TEMP_INT1.value = SYS_GetSubDays(document.MAINFORM.TEMP_DATE1.name, document.MAINFORM.FINC_DUE_DT.name);
        SYF_FFIT_baobiao();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_FINC_DUE_DT()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_DEBT_INSMT_TYPE = function() {
    try {

        var TrxNo = document.MAINFORM.TRX_NO.value;
        var TrxType = TrxNo.substr(0, 2);
        var GetDataFlag = document.MAINFORM.GET_DATA_FLG.value;
        if (TrxType == 'AD' || TrxType == 'BP' || GetDataFlag == 'AD' || GetDataFlag == 'BP') {
            document.MAINFORM.DEBT_INSMT_TYPE.value = 5;
        } else if (TrxType == 'OC' || GetDataFlag == 'OC') {
            document.MAINFORM.DEBT_INSMT_TYPE.value = 2;
        } else {
            document.MAINFORM.DEBT_INSMT_TYPE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_EXPT_ID = function() {
    try {

        if (document.MAINFORM.EXPT_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_AddingRecords_SYF_FFIT_EXPT_ID_1', '1');
        } else {
            document.MAINFORM.EXPT_ID.value = '';
            document.MAINFORM.EXPT_NM.value = '';
            document.MAINFORM.EXPT_NM_C.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_BASIC_DAYS = function() {
    try {

        if (document.MAINFORM.FINC_CCY.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_AddingRecords_SYF_FFIT_FINC_BASIC_DAYS_2', '1');
        } else {
            document.MAINFORM.FINC_BASIC_DAY.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_DAYS = function() {
    try {

        if (document.MAINFORM.FINC_DUE_DT.value != '' && document.MAINFORM.FINC_DT.value != '') {
            document.MAINFORM.FINC_DAYS.value = SYS_GetSubDays(document.MAINFORM.FINC_DT.name, document.MAINFORM.FINC_DUE_DT.name);
        } else {
            document.MAINFORM.FINC_DAYS.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_DECIMAL_NUM = function() {
    try {

        document.MAINFORM.FINC_DECIMAL_NUM.value = findDecFromCCY(document.MAINFORM.FINC_CCY.value, 'AMT');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_DUE_DT = function() {
    try {

        var sdays = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FINC_DUE_DT.name);
        if (document.MAINFORM.FINC_DUE_DT.value != '' && sdays <= 0) {
            SYS_CheckError(document.MAINFORM.FINC_DUE_DT, 'Maturity!');
            document.MAINFORM.FINC_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GET_DATA_FLG = function() {
    try {

        var BP;
        var OC;
        if (document.MAINFORM.GET_DATA_FLG.value == 'BP' && document.MAINFORM.TRX_NO.value != '') {
            /*BP=SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'C_MAIN_REF;BENE_ID;BENE_NM;ISSUE_BK_ID;ISSUE_BK_NM;CONF_BK_ID;CONF_BK_NM;DRAFT_BAL;LC_CCY;INV_NO;LC_NO',
                                                                                     'BA_ADOC_NO;EXPT_ID;EXPT_NM;ISSUE_BK_ID;ISSUE_BK_NM;CONF_BK_ID;CONF_BK_NM;BAL_DRAFT;FINC_CCY;INV_NO;LC_NO');
   */
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
            }
        } else if (document.MAINFORM.GET_DATA_FLG.value == 'OC' && document.MAINFORM.TRX_NO.value != '') {
            /*OC=SYS_Get22TableData_Boc('EXCL_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'DRAWER_ID;DRAWER_NM;COLL_BK_ID;COLL_BK_NM;DRAFT_BAL;COLL_CCY;INV_NO',
                                                                                                 'EXPT_ID;EXPT_NM;ACPT_BK_ID;ACPT_BK_NM;BAL_DRAFT;FINC_CCY;INV_NO');*/
            if (OC == 'Y') {
                document.MAINFORM.BA_ADOC_NO.value = document.MAINFORM.TRX_NO.value;
                document.MAINFORM.BA_TRX_NO.value = '';
                document.MAINFORM.DEBT_INSMT_TYPE.value = '5';
                document.MAINFORM.DEBT_INSMT_NO.value = document.MAINFORM.INV_NO.value;
            }
        }
        if (BP == 'N' && OC == 'N') {
            document.MAINFORM.BA_ADOC_NO.value = '';
            document.MAINFORM.BA_TRX_NO.value = '';
            document.MAINFORM.DEBT_INSMT_TYPE.value = '4';
            document.MAINFORM.FINC_CCY.value = 'USD';
            document.MAINFORM.BAL_DRAFT.value = '0';
            document.MAINFORM.DEBT_INSMT_NO.value = '';
        }
        if (document.MAINFORM.BAL_DRAFT.value == '') {
            document.MAINFORM.BAL_DRAFT.value = '0';
        }
        if (document.MAINFORM.GET_DATA_FLG.value == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'AD') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_AddingRecords_SYF_FFIT_GET_DATA_FLG_3', '1');
        } else {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_AddingRecords_SYF_FFIT_GET_DATA_FLG_4', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GTS_BR_ID = function() {
    try {

        if (document.MAINFORM.GTS_BR_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_AddingRecords_SYF_FFIT_GTS_BR_ID_5', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('FFIT_AD', 'SYF_FFIT_SetRefNo'); //clark Add for 66438
        document.MAINFORM.EVENT_TYPE.value = 'Adding Records';
        document.MAINFORM.FINC_BASIC_DAYS.value = 360;
        document.MAINFORM.GTS_BR_ID.value = SYT_Get_GtsBrId('1', '', '');
        // SYF_FFIT_GTS_BR_ID();
        document.MAINFORM.FINC_TYPE.value = GL_PRDT_CODE_OLD;
        document.MAINFORM.GL_PROD_CODE.value = GL_PRDT_CODE_OLD;
        document.MAINFORM.GL_FINC_TYPE.value = GL_PRDT_CODE_OLD;
        //document.MAINFORM.FINC_RISK_LEVEL.value='00';
        SYF_FFIT_FINC_DECIMAL_NUM();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_LIBOR_RT = function() {
    try {

        document.MAINFORM.MARGIN_RT.value = SYT_CCY_AMT('USD', document.MAINFORM.MARGIN_RT.value);
        document.MAINFORM.FINC_RT.value = SYS_BeFloat(document.MAINFORM.MARGIN_RT.value) + SYS_BeFloat(document.MAINFORM.LIBOR_RT.value);
        document.MAINFORM.FINC_RT.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.FINC_RT.value), 5);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYF_FFIT_FINC_DUE_DT();
            SYT_RELE_CREA_BY();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
        }
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRX_NO = function() {
    try {

        if (document.MAINFORM.TRX_NO.value != '') {
            var BP = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_AddingRecords_SYF_FFIT_TRX_NO_6', '1');

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
                var OC = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_AddingRecords_SYF_FFIT_TRX_NO_7', '1');
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
        if (document.MAINFORM.GET_DATA_FLG.value == 'BP') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_AddingRecords_SYF_FFIT_TRX_NO_8', '1');
            document.MAINFORM.FINC_TYPE_DESC.value = 'FINCFFITLC';
        } else {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_AddingRecords_SYF_FFIT_TRX_NO_9', '1');
            document.MAINFORM.FINC_TYPE_DESC.value = 'FINCFFITCL';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VIP_LEVEL = function() {
    try {

        if (document.MAINFORM.EXPT_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_AddingRecords_SYF_FFIT_VIP_LEVEL_10', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_baobiao = function() {
    try {

        document.MAINFORM.TRANS_DATE_ID.value = SYT_GetDateID(document.MAINFORM.TRX_DT.value);
        if (document.MAINFORM.GET_DATA_FLG.value == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'BP') {
            document.MAINFORM.TEMP_CHAR5.value = '603';
        } else {
            document.MAINFORM.TEMP_CHAR5.value = '610';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_AMT = function() {
    try {

        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.FINC_AMT.value > 0) {
            document.MAINFORM.FINC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_BAL = function() {
    try {

        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.FINC_BAL.value > 0) {
            document.MAINFORM.FINC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_BAL.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PRE_FINC_INT = function() {
    try {

        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.PRE_FINC_INT.value > 0) {
            document.MAINFORM.PRE_FINC_INT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.PRE_FINC_INT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SetRefNo = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = ref; //clark Add for 66438
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FINC_AMT.value) < SYS_BeFloat(document.MAINFORM.TEMP_AMT.value)) {
            alert("The amount should be less than financing amount");
            document.MAINFORM.TEMP_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FLD_FFIT_DUE_DATE_CHECK = function() {
    try {

        if (document.MAINFORM.FINC_DUE_DT.value < document.MAINFORM.MATURITY.value) {
            alert("Finance due date cannot set before than Amortization date!");
            document.MAINFORM.FINC_DUE_DT.value = '';
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_BK_ID_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_ID();
        SYM_FFIT_Cal_ACPT_BK_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BAL_DRAFT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.BAL_DRAFT.value)) {
            document.MAINFORM.BAL_DRAFT.value = 0;
        }
        SYF_FFIT_BAL_DRAFT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CONF_BK_ID_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CONF_BK_NM_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_EXPT_ID_onchange = function(event) {
    try {
        SYF_FFIT_EXPT_ID();
        SYF_FFIT_VIP_LEVEL();
        SYM_FFIT_Cal_EXPT_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.FINC_AMT.value)) {
            document.MAINFORM.FINC_AMT.value = 0;
        }
        SYF_FFIT_FINC_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_BAL_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.FINC_BAL.value)) {
            document.MAINFORM.FINC_BAL.value = 0;
        }
        SYF_FFIT_FINC_BAL();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_CCY_onchange = function(event) {
    try {
        SYF_FFIT_FINC_DECIMAL_NUM();
        SYF_FFIT_BAL_DRAFT();
        SYF_FFIT_FINC_BASIC_DAYS();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_DT_onchange = function(event) {
    try {
        SYF_FFIT_FINC_DAYS();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_DUE_DT_onchange = function(event) {
    try {
        SYF_FFIT_FLD_FFIT_DUE_DATE_CHECK();
        SYF_FFIT_FINC_DUE_DT();
        SYF_FFIT_FINC_DAYS();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_RT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.FINC_RT.value)) {
            document.MAINFORM.FINC_RT.value = 0;
        }
        SYF_FFIT_LIBOR_RT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GET_DATA_FLG_onchange = function(event) {
    try {
        //SYF_BANK_GET_DATA_FLG();
        SYF_FFIT_EXPT_ID();
        SYF_FFIT_BAL_DRAFT();
        SYF_FFIT_FINC_BASIC_DAYS();
        SYF_FFIT_VIP_LEVEL();
        SYF_FFIT_DEBT_INSMT_TYPE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LIBOR_RT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.LIBOR_RT.value)) {
            document.MAINFORM.LIBOR_RT.value = 0;
        }
        SYF_FFIT_LIBOR_RT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MARGIN_RT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.MARGIN_RT.value)) {
            document.MAINFORM.MARGIN_RT.value = 0;
        }
        SYF_FFIT_LIBOR_RT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MATURITY_onchange = function(event) {
    try {
        var sdays = SYS_GetSubDays(document.MAINFORM.MATURITY.name, document.MAINFORM.TEMP_DATE1.name);
        if (document.MAINFORM.TEMP_DATE1.value != '' && sdays > 0) {
            alert("Maturity date cannot set before than Amortization date!");
            document.MAINFORM.MATURITY.value = '';
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRE_FINC_INT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.PRE_FINC_INT.value)) {
            document.MAINFORM.PRE_FINC_INT.value = 0;
        }
        SYF_FFIT_PRE_FINC_INT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRE_OVS_CHG_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.PRE_OVS_CHG.value)) {
            document.MAINFORM.PRE_OVS_CHG.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_AMT.value)) {
            document.MAINFORM.TEMP_AMT.value = 0;
        }
        SYF_FFIT_TEMP_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_DATE1_onchange = function(event) {
    try {
        var sdays = SYS_GetSubDays(document.MAINFORM.TEMP_DATE1.name, document.MAINFORM.FINC_DT.name);
        if (document.MAINFORM.FINC_DT.value != '' && sdays > 0) {
            alert("Amortization date cannot set before than Financing date!");
            document.MAINFORM.TEMP_DATE1.value = '';
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRX_NO_onchange = function(event) {
    try {
        var regex = /^[A-Za-z0-9 ]+$/;
        var isValid = regex.test(document.MAINFORM.TRX_NO.value);
        if (!isValid) {
            alert("Field Contains Special Characters.");
            document.MAINFORM.TRX_NO.value = '';
            return false;
        }
        SYF_FFIT_TRX_NO();
        SYF_FFIT_EXPT_ID();
        SYF_FFIT_BAL_DRAFT();
        SYF_FFIT_FINC_BASIC_DAYS();
        SYF_FFIT_VIP_LEVEL();
        SYF_FFIT_DEBT_INSMT_TYPE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_AddingRecords.js", e);
    }
}