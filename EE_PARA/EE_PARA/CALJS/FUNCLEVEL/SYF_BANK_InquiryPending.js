var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_BANK_GET_DATA_FLG = function() {
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
        DisExcpt("SYF_BANK_InquiryPending.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_BANK_InquiryPending.js", e);
    }
}

csFuncLevelProto.SYF_BANK_GTS_BR_ID = function() {
    try {

        if (document.MAINFORM.GTS_BR_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_AddingRecords_SYF_FFIT_GTS_BR_ID_5', '1');
        }
    } catch (e) {
        DisExcpt("SYF_BANK_InquiryPending.js", e);
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
        DisExcpt("SYF_BANK_InquiryPending.js", e);
    }
}

csFuncLevelProto.SYF_BANK_LIBOR_RT = function() {
    try {

        document.MAINFORM.MARGIN_RT.value = SYT_CCY_AMT('USD', document.MAINFORM.MARGIN_RT.value);
        document.MAINFORM.FINC_RT.value = SYS_BeFloat(document.MAINFORM.MARGIN_RT.value) + SYS_BeFloat(document.MAINFORM.LIBOR_RT.value);
        document.MAINFORM.FINC_RT.value = DecimalFormat(SYS_BeFloat(document.MAINFORM.FINC_RT.value), 5);
    } catch (e) {
        DisExcpt("SYF_BANK_InquiryPending.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            //document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYF_FFIT_FINC_DUE_DT();
            SYT_RELE_CREA_BY();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
        }
        //document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_BANK_InquiryPending.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_BANK_InquiryPending.js", e);
    }
}

csFuncLevelProto.FLD_BANK_CNTY_CODE_onchange = function(event) {
    try {
        SYS_GetCUBK('CNTY_CODE', 'CNTY_CODE');
    } catch (e) {
        DisExcpt("SYF_BANK_InquiryPending.js", e);
    }
}

csFuncLevelProto.FLD_BANK_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('HO_ID');
    } catch (e) {
        DisExcpt("SYF_BANK_InquiryPending.js", e);
    }
}