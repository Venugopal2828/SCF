var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_ACPTCCY_AMT_Relation = function() {
    try {

        if (document.MAINFORM.ACPT_CCY.value != '' || document.MAINFORM.ACPT_AMT.value != '') {
            document.MAINFORM.ACPT_AMT.value = SYT_CCY_AMT(document.MAINFORM.ACPT_CCY.value, document.MAINFORM.ACPT_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_AMT_Onchange = function() {
    try {

        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.ACPT_AMT.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) > 0) {
            document.MAINFORM.TRF_AMT.value = document.MAINFORM.ACPT_AMT.value;
        } else {
            document.MAINFORM.TRF_AMT.value = '';
        }
        if (document.MAINFORM.TEMP_CHAR2.value == 'BP' || document.MAINFORM.TEMP_CHAR2.value == 'OC') {
            SYT_ChangeFldClass(document.MAINFORM.ACPT_CCY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ACPT_AMT, 'P', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ACPT_CCY, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ACPT_AMT, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_BK_ADD = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FFIT_FFT_UNFFFTTRFRegister_SYF_FFIT_ACPT_BK_ADD_0', '1');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_BK_CNTY = function() {
    try {

        if (document.MAINFORM.ACPT_BK_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_UNFFFTTRFRegister_SYF_FFIT_ACPT_BK_CNTY_1', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_BK_ID = function() {
    try {

        var sTRX_NO = document.MAINFORM.TRX_NO.value.substring(0, 2);
        if (sTRX_NO == 'BP' || sTRX_NO == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'AD') {
            if ((document.MAINFORM.CONF_BK_ID.value != '') || (document.MAINFORM.CONF_BK_NM.value != '')) {
                document.MAINFORM.ACPT_BK_ID.value = document.MAINFORM.CONF_BK_ID.value;
                document.MAINFORM.ACPT_BK_NM.value = document.MAINFORM.CONF_BK_NM.value;
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_UNFFFTTRFRegister_SYF_FFIT_ACPT_BK_ID_2', '1');
            } else if ((document.MAINFORM.ISSUE_BK_ID.value != '') || (document.MAINFORM.ISSUE_BK_NM.value != '')) {
                document.MAINFORM.ACPT_BK_ID.value = document.MAINFORM.ISSUE_BK_ID.value;
                document.MAINFORM.ACPT_BK_NM.value = document.MAINFORM.ISSUE_BK_NM.value;
                document.MAINFORM.ACPT_BK_ADD.value = document.MAINFORM.ISSUE_BK_ADD.value;
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_UNFFFTTRFRegister_SYF_FFIT_ACPT_BK_ID_3', '1');
            } else {
                //document.MAINFORM.ACPT_BK_ID.value = '';
                //document.MAINFORM.ACPT_BK_ADD.value = '';
                document.MAINFORM.ACPT_BK_SW.value = '';
                //document.MAINFORM.ACPT_BK_NM.value = '';
            }
        } else {
            if ((sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'OC') && (document.MAINFORM.ACPT_BK_ID.value != '')) {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_UNFFFTTRFRegister_SYF_FFIT_ACPT_BK_ID_4', '1');
            } else {
                // document.MAINFORM.ACPT_BK_ID.value = '';
                // document.MAINFORM.ACPT_BK_ADD.value = '';
                // document.MAINFORM.ACPT_BK_SW.value = '';
                // document.MAINFORM.ACPT_BK_NM.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_BK_NM = function() {
    try {


    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_BK_SW = function() {
    try {

        if (document.MAINFORM.ACPT_BK_SW.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_UNFFFTTRFRegister_SYF_FFIT_ACPT_BK_SW_5', '1');
        } else {
            document.MAINFORM.ACPT_BK_ID.value = '';
        }

        EEHtml.fireEvent(document.MAINFORM.ACPT_BK_ID, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_CCY_Onchange = function() {
    try {

        if (document.MAINFORM.ACPT_CCY.value != '') {
            document.MAINFORM.ACPT_CCY.value = document.MAINFORM.ACPT_CCY.value.toUpperCase();
            document.MAINFORM.TRF_CCY.value = document.MAINFORM.ACPT_CCY.value;
        } else {
            document.MAINFORM.TRF_CCY.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_AUTH_BLACK = function() {
    try {

        if (document.MAINFORM.C_FIN_ALERT_STATUS.value == 'S') {
            document.MAINFORM.AUTH_BLACK.value = 0;
        } else if (document.MAINFORM.C_FIN_ALERT_STATUS.value == 'F') {
            document.MAINFORM.AUTH_BLACK.value = 1;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_BUSI_SOURCE_FLG = function() {
    try {

        if (document.MAINFORM.BUSI_SOURCE_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.EXPT_ID, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.EXPT_NM, 'O', 'N');
        } else if (document.MAINFORM.BUSI_SOURCE_FLG.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.EXPT_ID, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.EXPT_NM, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_Cal_TRF_AMT_PCTOnchange = function() {
    try {

        if ((SYS_BeFloat(document.MAINFORM.TRF_PCT.value) > 0) && (SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) > 0)) {
            document.MAINFORM.TRF_AMT.value = SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) * SYS_BeFloat(document.MAINFORM.TRF_PCT.value) / 100;
        } else {
            document.MAINFORM.TRF_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_Cal_TRF_PCT = function() {
    try {

        if ((SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) > 0) && (SYS_BeFloat(document.MAINFORM.TRF_AMT.value) > 0)) {
            document.MAINFORM.TRF_PCT.value = SYS_BeFloat(document.MAINFORM.TRF_AMT.value) / SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) * 100;
            document.MAINFORM.TRF_PCT.value = SYT_CCY_AMT('USD', document.MAINFORM.TRF_PCT.value);
        }
        if (SYS_BeFloat(document.MAINFORM.TRF_PCT.value) > 100) {
            alert('Transfer percentage can not be greater than 100!');
            document.MAINFORM.TRF_AMT.value = '';
            document.MAINFORM.TRF_PCT.value = '';
        }
        if (SYS_BeFloat(document.MAINFORM.TRF_AMT.value) < 0) {
            alert('Transfer amount should not be negative');
            document.MAINFORM.TRF_AMT.value = '';
            document.MAINFORM.TRF_PCT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_BLACK_INS_TYP_REPLACE(document.MAINFORM.BLACK_TRX_TYPE, document.MAINFORM.BLACK_INSTYP);
        SYF_FFIT_inqFinDNA();
        SYF_FFIT_AUTH_BLACK();
        SYF_FFIT_ACPT_BK_CNTY();
        SYT_Check_AMT();
        SYF_FFIT_PROD_CODE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_DEBT_INSMT_TYPE = function() {
    try {

        if (document.MAINFORM.DEBT_INSMT_TYPE.value == '4') {
            SYT_ChangeFldClass(document.MAINFORM.DEBT_INSMT_REMARK, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEBT_INSMT_REMARK, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_EXPT_ID_Onchange = function() {
    try {

        /*document.MAINFORM.EXPT_ID.value = '';
        document.MAINFORM.EXPT_NM.value = '';
        document.MAINFORM.EXPT_NM_C.value = '';
        document.MAINFORM.ACPT_CCY.value = '';
        document.MAINFORM.ACPT_AMT.value = '0';
        document.MAINFORM.ACPT_BK_ID.value = '';
        document.MAINFORM.IMPT_NM.value = '';
        document.MAINFORM.MATURITY.value = '';
        document.MAINFORM.TENOR_DAYS.value = '0';
        document.MAINFORM.COMMODITY.value = '';
        document.MAINFORM.LC_CCY.value = '';
        document.MAINFORM.LC_BAL.value = '0';
        document.MAINFORM.LC_NO.value = '';
        document.MAINFORM.ISSUE_BK_NM.value = '';
        document.MAINFORM.ISSUE_BK_ID.value = '';
        document.MAINFORM.ISSUE_BK_ADD.value = '';
        document.MAINFORM.CONF_BK_ID.value = '';
        document.MAINFORM.CONF_BK_NM.value = '';
        document.MAINFORM.LC_TYPE.value = '';
        document.MAINFORM.VIP_LEVEL.value = '';
        document.MAINFORM.DEBT_INSMT_NO.value = '';
        document.MAINFORM.TEMP_CHAR2.value = '';*/
        var sTRX_NO = document.MAINFORM.TRX_NO.value.substring(0, 2);
        if (sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'OC') {
            var sA = '';
            /* var sA=SYS_Get22TableData_Boc('EXCL_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'DRAWER_ID;DRAWER_NM;DRAWER_NM_C;COLL_CCY;COLL_AMT;COLL_BK_ID;DRAWEE_NM_ADD;MATURITY;TENOR_DAYS',
										'EXPT_ID;EXPT_NM;EXPT_NM_C;ACPT_CCY;ACPT_AMT;ACPT_BK_ID;IMPT_NM;MATURITY;TENOR_DAYS');*/
            if (sA == 'Y') {
                document.MAINFORM.TEMP_CHAR2.value = 'OC';
            }
        } else {
            if (sTRX_NO == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'AD') {
                var sB = '';
                /*   var sB=SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'COMMODITY;LC_CCY;LC_BAL;BENE_ID;BENE_NM;BENE_NM_C;LC_NO;ISSUE_BK_NM;ISSUE_BK_ID;ISSUE_BK_NM_ADD;CONF_BK_ID;CONF_BK_NM;AVAL_BY;TENOR_DAYS;LC_CCY;LC_BAL;APPL_NM_ADD',
							     'COMMODITY;LC_CCY;LC_BAL;EXPT_ID;EXPT_NM;EXPT_NM_C;LC_NO;ISSUE_BK_NM;ISSUE_BK_ID;ISSUE_BK_ADD;CONF_BK_ID;CONF_BK_NM;LC_TYPE;TENOR_DAYS;ACPT_CCY;ACPT_AMT;IMPT_NM');*/
                if (sB == 'Y') {
                    document.MAINFORM.TEMP_CHAR2.value = 'AD';
                }
            } else {
                if (sTRX_NO == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'BP') {
                    var sC = '';
                    /* var sC=SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'COMMODITY;LC_CCY;BENE_ID;BENE_NM;BENE_NM_C;LC_NO;MATURITY;ISSUE_BK_ID;ISSUE_BK_NM;ISSUE_BK_NM_ADD;CONF_BK_NM;CONF_BK_ID;TENOR_DAYS;AVAL_BY;APPL_NM_ADD;C_MAIN_REF;LC_CCY;NEGO_AMT',
					                                             	'COMMODITY;LC_CCY;EXPT_ID;EXPT_NM;EXPT_NM_C;LC_NO;MATURITY;ISSUE_BK_ID;ISSUE_BK_NM;ISSUE_BK_ADD;CONF_BK_NM;CONF_BK_ID;TENOR_DAYS;LC_TYPE;IMPT_NM;TEMP_CHAR1;ACPT_CCY;ACPT_AMT');*/
                    if (sC == 'Y') {
                        /* SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TEMP_CHAR1.value+"'",'LC_BAL','LC_BAL');*/
                        document.MAINFORM.TEMP_CHAR2.value = 'BP';
                    }
                    // document.MAINFORM.ACPT_CCY.value=document.MAINFORM.LC_CCY.value;
                }
            }
        }
        /* if(document.MAINFORM.EXPT_ID.value!='')
{
SYS_Get22TableData_Boc('CUST_MASTER',"CUST_ID='"+document.MAINFORM.EXPT_ID.value+"'",'VIP_LEVEL','VIP_LEVEL');
}*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GTS_BR_ID = function() {
    try {

        if (document.MAINFORM.EXPT_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_UNFFFTTRFRegister_SYF_FFIT_GTS_BR_ID_6', '1');
        } else {
            document.MAINFORM.EXPT_NM.value = '';
            document.MAINFORM.EXPT_NM_C.value = '';
        }

        if (document.MAINFORM.GTS_BR_ID.value == '') {
            document.MAINFORM.GTS_BR_NM.value = '';
            document.MAINFORM.GTS_PRVN_ID.value = '';
            document.MAINFORM.GTS_DISTRICT_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('FFIT_FT', 'SYF_FFIT_SetRefNo');
        document.MAINFORM.EVENT_TYPE.value = 'UNTRFRegister';
        document.MAINFORM.BUSI_SOURCE_FLG.value = '2';
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        document.MAINFORM.GTS_BR_ID.value = SYT_Get_GtsBrId('1', '', '');
        SYF_FFIT_GTS_BR_ID();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_LC_CCY = function() {
    try {

        if (document.MAINFORM.LC_CCY.value != '') {
            document.MAINFORM.LC_CCY.value = document.MAINFORM.LC_CCY.value.toUpperCase();
        } else {
            document.MAINFORM.LC_CCY.value = '';
        }
        if (document.MAINFORM.LC_CCY.value != '' || document.MAINFORM.LC_BAL.value != '') {
            document.MAINFORM.LC_BAL.value = SYT_CCY_AMT(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_BAL.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_LC_NO = function() {
    try {

        if (document.MAINFORM.LC_NO.value != '') {
            document.MAINFORM.DEBT_INSMT_NO.value = document.MAINFORM.LC_NO.value;
        } else {
            // document.MAINFORM.DEBT_INSMT_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PROD_CODE = function() {
    try {

        var sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO == 'AD' || sTRX_NO == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'BP') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_UNFFFTTRFRegister_SYF_FFIT_PROD_CODE_7', '1');
        } else {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_UNFFFTTRFRegister_SYF_FFIT_PROD_CODE_8', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYT_RELE_CREA_BY();
            SYF_FFIT_changefield();
            SYF_FFIT_DEBT_INSMT_TYPE();
            SYF_FFIT_BUSI_SOURCE_FLG();
        }
        /*
if(SYS_FUNCTION_TYPE=='EC' )
{
//SYT_ChangeFldClass(document.MAINFORM.BUSI_SOURCE_FLG,'P','N');
//SYT_ChangeFldClass(document.MAINFORM.TRX_TYPE_FLG,'P','N');
}
*/
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYF_FFIT_changefield();
            SYF_FFIT_DEBT_INSMT_TYPE();
            SYF_FFIT_BUSI_SOURCE_FLG();
        }
        SYT_relAuthBlack();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        //if(SYS_FUNCTION_TYPE=='PM' || SYS_FUNCTION_TYPE=='EC' )
        //{
        SYT_loadExchRate();
        //}
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SetRefNo = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation = function() {
    try {

        /*if (document.MAINFORM.TEMP_BP_CCY1.value != '' || document.MAINFORM.TEMP_BP_AMT1.value != '') {
            document.MAINFORM.TEMP_BP_AMT1.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY1.value, document.MAINFORM.TEMP_BP_AMT1.value);
        }*/
        if (document.MAINFORM.TEMP_BP_CCY1.value != '' && document.MAINFORM.TEMP_BP_AMT1.value != '' &&
            SYS_BeFloat(document.MAINFORM.TEMP_BP_AMT1.value) <= SYS_BeFloat(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.TEMP_BP_AMT1.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY1.value, document.MAINFORM.TEMP_BP_AMT1.value);
        } else {
            alert("Amount is more than Accepting/Guaranting CCY&AMT Value!!");
            document.MAINFORM.TEMP_BP_AMT1.value = SYS_BeFloat(0);
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation2 = function() {
    try {

        /*if (document.MAINFORM.TEMP_BP_CCY2.value != '' || document.MAINFORM.TEMP_BP_AMT2.value != '') {
            document.MAINFORM.TEMP_BP_AMT2.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY2.value, document.MAINFORM.TEMP_BP_AMT2.value);
        }*/
        if (document.MAINFORM.TEMP_BP_CCY2.value != '' && document.MAINFORM.TEMP_BP_AMT2.value != '' &&
            SYS_BeFloat(document.MAINFORM.TEMP_BP_AMT2.value) <= SYS_BeFloat(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.TEMP_BP_AMT2.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY2.value, document.MAINFORM.TEMP_BP_AMT2.value);
        } else {
            alert("Amount is more than Accepting/Guaranting CCY&AMT Value!!");
            document.MAINFORM.TEMP_BP_AMT2.value = SYS_BeFloat(0);
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation3 = function() {
    try {

        /*if (document.MAINFORM.TEMP_BP_CCY3.value != '' || document.MAINFORM.TEMP_BP_AMT3.value != '') {
            document.MAINFORM.TEMP_BP_AMT3.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY3.value, document.MAINFORM.TEMP_BP_AMT3.value);
        }*/
        if (document.MAINFORM.TEMP_BP_CCY3.value != '' && document.MAINFORM.TEMP_BP_AMT3.value != '' &&
            SYS_BeFloat(document.MAINFORM.TEMP_BP_AMT3.value) <= SYS_BeFloat(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.TEMP_BP_AMT3.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY3.value, document.MAINFORM.TEMP_BP_AMT3.value);
        } else {
            alert("Amount is more than Accepting/Guaranting CCY&AMT Value!!");
            document.MAINFORM.TEMP_BP_AMT3.value = SYS_BeFloat(0);
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation4 = function() {
    try {

        /*if (document.MAINFORM.TEMP_BP_CCY4.value != '' || document.MAINFORM.TEMP_BP_AMT4.value != '') {
            document.MAINFORM.TEMP_BP_AMT4.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY4.value, document.MAINFORM.TEMP_BP_AMT4.value);
        }*/
        if (document.MAINFORM.TEMP_BP_CCY4.value != '' && document.MAINFORM.TEMP_BP_AMT4.value != '' &&
            SYS_BeFloat(document.MAINFORM.TEMP_BP_AMT4.value) <= SYS_BeFloat(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.TEMP_BP_AMT4.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY4.value, document.MAINFORM.TEMP_BP_AMT4.value);
        } else {
            alert("Amount is more than Accepting/Guaranting CCY&AMT Value!!");
            document.MAINFORM.TEMP_BP_AMT4.value = SYS_BeFloat(0);
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation5 = function() {
    try {

        /*if (document.MAINFORM.TEMP_BP_CCY5.value != '' || document.MAINFORM.TEMP_BP_AMT5.value != '') {
            document.MAINFORM.TEMP_BP_AMT5.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY5.value, document.MAINFORM.TEMP_BP_AMT5.value);
        }*/
        if (document.MAINFORM.TEMP_BP_CCY5.value != '' && document.MAINFORM.TEMP_BP_AMT5.value != '' &&
            SYS_BeFloat(document.MAINFORM.TEMP_BP_AMT5.value) <= SYS_BeFloat(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.TEMP_BP_AMT5.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY5.value, document.MAINFORM.TEMP_BP_AMT5.value);
        } else {
            alert("Amount is more than Accepting/Guaranting CCY&AMT Value!!");
            document.MAINFORM.TEMP_BP_AMT5.value = SYS_BeFloat(0);
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation6 = function() {
    try {

        /*if (document.MAINFORM.TEMP_BP_CCY6.value != '' || document.MAINFORM.TEMP_BP_AMT6.value != '') {
            document.MAINFORM.TEMP_BP_AMT6.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY6.value, document.MAINFORM.TEMP_BP_AMT6.value);
        }*/
        if (document.MAINFORM.TEMP_BP_CCY6.value != '' && document.MAINFORM.TEMP_BP_AMT6.value != '' &&
            SYS_BeFloat(document.MAINFORM.TEMP_BP_AMT6.value) <= SYS_BeFloat(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.TEMP_BP_AMT6.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY6.value, document.MAINFORM.TEMP_BP_AMT6.value);
        } else {
            alert("Amount is more than Accepting/Guaranting CCY&AMT Value!!");
            document.MAINFORM.TEMP_BP_AMT6.value = SYS_BeFloat(0);
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation7 = function() {
    try {

        /*if (document.MAINFORM.TEMP_BP_CCY7.value != '' || document.MAINFORM.TEMP_BP_AMT7.value != '') {
            document.MAINFORM.TEMP_BP_AMT7.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY7.value, document.MAINFORM.TEMP_BP_AMT7.value);
        }*/
        if (document.MAINFORM.TEMP_BP_CCY7.value != '' && document.MAINFORM.TEMP_BP_AMT7.value != '' &&
            SYS_BeFloat(document.MAINFORM.TEMP_BP_AMT7.value) <= SYS_BeFloat(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.TEMP_BP_AMT7.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY7.value, document.MAINFORM.TEMP_BP_AMT7.value);
        } else {
            alert("Amount is more than Accepting/Guaranting CCY&AMT Value!!");
            document.MAINFORM.TEMP_BP_AMT7.value = SYS_BeFloat(0);
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation8 = function() {
    try {

        /*if (document.MAINFORM.TEMP_BP_CCY8.value != '' || document.MAINFORM.TEMP_BP_AMT8.value != '') {
            document.MAINFORM.TEMP_BP_AMT8.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY8.value, document.MAINFORM.TEMP_BP_AMT8.value);
        }*/
        if (document.MAINFORM.TEMP_BP_CCY8.value != '' && document.MAINFORM.TEMP_BP_AMT8.value != '' &&
            SYS_BeFloat(document.MAINFORM.TEMP_BP_AMT8.value) <= SYS_BeFloat(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.TEMP_BP_AMT8.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY8.value, document.MAINFORM.TEMP_BP_AMT8.value);
        } else {
            alert("Amount is more than Accepting/Guaranting CCY&AMT Value!!");
            document.MAINFORM.TEMP_BP_AMT8.value = SYS_BeFloat(0);
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation9 = function() {
    try {

        /*if (document.MAINFORM.TEMP_BP_CCY9.value != '' || document.MAINFORM.TEMP_BP_AMT9.value != '') {
            document.MAINFORM.TEMP_BP_AMT9.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY9.value, document.MAINFORM.TEMP_BP_AMT9.value);
        }*/
        if (document.MAINFORM.TEMP_BP_CCY9.value != '' && document.MAINFORM.TEMP_BP_AMT9.value != '' &&
            SYS_BeFloat(document.MAINFORM.TEMP_BP_AMT9.value) <= SYS_BeFloat(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.TEMP_BP_AMT9.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY9.value, document.MAINFORM.TEMP_BP_AMT9.value);
        } else {
            alert("Amount is more than Accepting/Guaranting CCY&AMT Value!!");
            document.MAINFORM.TEMP_BP_AMT9.value = SYS_BeFloat(0);
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRF_CCY_AMT_RELATION = function() {
    try {

        if (document.MAINFORM.TRF_CCY.value != '' || document.MAINFORM.TRF_AMT.value != 0) {
            document.MAINFORM.TRF_AMT.value = SYT_CCY_AMT(document.MAINFORM.TRF_CCY.value, document.MAINFORM.TRF_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRX_TYPE_FLG = function() {
    try {

        if (document.MAINFORM.BUSI_SOURCE_FLG.value == '2' && document.MAINFORM.TRX_TYPE_FLG.value == '1') {
            SYS_GetRefNo('FFIT_FT', 'SYF_FFIT_SetRefNo');
        } else {
            if (document.MAINFORM.BUSI_SOURCE_FLG.value == '2' && document.MAINFORM.TRX_TYPE_FLG.value == '2') {
                SYS_GetRefNo('FFIT_CT', 'SYF_FFIT_SetRefNo');
            } else {
                if (document.MAINFORM.BUSI_SOURCE_FLG.value == '1' && document.MAINFORM.TRX_TYPE_FLG.value == '1') {
                    SYS_GetRefNo('FFIT_FP', 'SYF_FFIT_SetRefNo');
                } else {
                    if (document.MAINFORM.BUSI_SOURCE_FLG.value == '1' && document.MAINFORM.TRX_TYPE_FLG.value == '2') {
                        SYS_GetRefNo('FFIT_CP', 'SYF_FFIT_SetRefNo');
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_changefield = function() {
    try {

        if (document.MAINFORM.TEMP_CHAR2.value == 'BP' || document.MAINFORM.TEMP_CHAR2.value == 'OC') {
            SYT_ChangeFldClass(document.MAINFORM.ACPT_CCY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ACPT_AMT, 'P', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ACPT_CCY, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.ACPT_AMT, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_inqFinDNA = function() {
    try {

        /*
var SHeader=new Array(6);
SHeader[0]='2';
SHeader[1]=document.MAINFORM.C_MAIN_REF.value;
SHeader[2]=document.MAINFORM.BLACK_INSTYP.value;
SHeader[3]=document.MAINFORM.CLERK_ID.value;
SHeader[4]=document.MAINFORM.GTS_BR_ID.value;
SHeader[5]='2';

var arrayEntry=new Array();
var i=-1;
var bk_sw_obj, bk_nm_obj, bk_add_obj;
var cust_nm_obj, cust_add_obj;

bk_sw_obj=EEHtml.getElementById('ACPT_BK_SW');
bk_nm_obj=EEHtml.getElementById('ACPT_BK_NM');
bk_add_obj=EEHtml.getElementById('ACPT_BK_ADD');
if(bk_sw_obj!=null && bk_sw_obj.value!='' || bk_nm_obj!=null && bk_nm_obj.value!=''|| bk_add_obj!=null && bk_add_obj.value!='')
{
	++i;
	arrayEntry[i]=new Array(); 
	arrayEntry[i][0]=document.MAINFORM.BLACK_DATA_TYPE.value;
	arrayEntry[i][1]='';
	arrayEntry[i][2]='';
	arrayEntry[i][3]=bk_nm_obj!=null? bk_nm_obj.value:''; 
	arrayEntry[i][4]=bk_add_obj!=null? bk_add_obj.value:'';
	arrayEntry[i][5]='';
	arrayEntry[i][6]='';
	arrayEntry[i][7]=bk_sw_obj!=null? bk_sw_obj.value:'';
	arrayEntry[i][8]='';
	arrayEntry[i][9]='';
	arrayEntry[i][10]='';
	arrayEntry[i][11]='';
}

cust_nm_obj=EEHtml.getElementById('EXPT_NM');
if(cust_nm_obj!=null && cust_nm_obj.value!='')
{
	++i;
	arrayEntry[i]=new Array(); 
	arrayEntry[i][0]=document.MAINFORM.BLACK_DATA_TYPE.value;
	arrayEntry[i][1]='';
	arrayEntry[i][2]='';
	arrayEntry[i][3]=cust_nm_obj!=null? cust_nm_obj.value:'';
	arrayEntry[i][4]='';
	arrayEntry[i][5]='';
	arrayEntry[i][6]='';
	arrayEntry[i][7]='';
	arrayEntry[i][8]='';
	arrayEntry[i][9]='';
	arrayEntry[i][10]='';
	arrayEntry[i][11]='';
}

cust_nm_obj=EEHtml.getElementById('IMPT_NM');
if(cust_nm_obj!=null && cust_nm_obj.value!='')
{
	++i;
	arrayEntry[i]=new Array(); 
	arrayEntry[i][0]=document.MAINFORM.BLACK_DATA_TYPE.value;
	arrayEntry[i][1]='';
	arrayEntry[i][2]='';
	arrayEntry[i][3]=cust_nm_obj!=null? cust_nm_obj.value:'';
	arrayEntry[i][4]='';
	arrayEntry[i][5]='';
	arrayEntry[i][6]='';
	arrayEntry[i][7]='';
	arrayEntry[i][8]='';
	arrayEntry[i][9]='';
	arrayEntry[i][10]='';
	arrayEntry[i][11]='';
}
inqFinDNA(SHeader,arrayEntry);
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_AMT_onchange = function(event) {
    try {
        SYF_FFIT_ACPTCCY_AMT_Relation();
        SYF_FFIT_ACPT_AMT_Onchange();
        SYF_FFIT_Cal_TRF_PCT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_BK_ID_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_NM();
        SYM_FFIT_Cal_ACPT_BK_ID_UN_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_BK_SW_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_SW();
        SYM_FFIT_Cal_ACPT_BK_SW_UN_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_CCY_onchange = function(event) {
    try {
        SYF_FFIT_TRF_CCY_AMT_RELATION();
        SYF_FFIT_ACPT_CCY_Onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUSI_SOURCE_FLG_onchange = function(event) {
    try {
        SYF_FFIT_TRX_TYPE_FLG();
        SYF_FFIT_BUSI_SOURCE_FLG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CONF_BK_ID_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.ACPT_BK_ID, 'onchange');

        SYF_FFIT_ACPT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_DEBT_INSMT_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_DEBT_INSMT_TYPE();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_EXPT_ID_onchange = function(event) {
    try {
        SYF_FFIT_GTS_BR_ID();
        SYM_FFIT_Cal_EXPT_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GET_DATA_FLG_onchange = function(event) {
    try {
        SYF_FFIT_EXPT_ID_Onchange();
        SYF_FFIT_ACPT_BK_ID();
        SYF_FFIT_GTS_BR_ID();
        SYF_FFIT_LC_NO();
        SYF_FFIT_ACPTCCY_AMT_Relation();
        SYF_FFIT_ACPT_CCY_Onchange();
        SYF_FFIT_ACPT_AMT_Onchange();
        SYF_FFIT_Cal_TRF_PCT();
        SYF_FFIT_LC_CCY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LC_BAL_onchange = function(event) {
    try {
        SYF_FFIT_LC_CCY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LC_CCY_onchange = function(event) {
    try {
        SYF_FFIT_LC_CCY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LC_NO_onchange = function(event) {
    try {
        SYF_FFIT_LC_NO();
        EEHtml.fireEvent(document.MAINFORM.DEBT_INSMT_NO, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT1_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT1.value)) {
            document.MAINFORM.TEMP_BP_AMT1.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT2_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT2.value)) {
            document.MAINFORM.TEMP_BP_AMT2.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation2();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT3_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT3.value)) {
            document.MAINFORM.TEMP_BP_AMT3.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation3();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT4_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT4.value)) {
            document.MAINFORM.TEMP_BP_AMT4.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation4();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT5_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT5.value)) {
            document.MAINFORM.TEMP_BP_AMT5.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation5();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT6_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT6.value)) {
            document.MAINFORM.TEMP_BP_AMT6.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation6();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT7_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT7.value)) {
            document.MAINFORM.TEMP_BP_AMT7.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation7();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT8_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT8.value)) {
            document.MAINFORM.TEMP_BP_AMT8.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation8();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT9_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT9.value)) {
            document.MAINFORM.TEMP_BP_AMT9.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation9();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY1_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY2_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation2();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY3_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation3();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY4_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation4();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY5_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation5();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY6_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation6();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY7_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation7();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY8_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation8();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY9_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation9();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRF_AMT_onchange = function(event) {
    try {
        SYF_FFIT_Cal_TRF_PCT();
        SYF_FFIT_TRF_CCY_AMT_RELATION();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRF_PCT_onchange = function(event) {
    try {
        SYF_FFIT_Cal_TRF_AMT_PCTOnchange();
        SYF_FFIT_TRF_CCY_AMT_RELATION();
        SYF_FFIT_Cal_TRF_PCT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
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
        SYF_FFIT_EXPT_ID_Onchange();
        SYF_FFIT_ACPT_BK_ID();
        //SYF_FFIT_ACPT_BK_NM();
        SYF_FFIT_GTS_BR_ID();
        SYF_FFIT_LC_NO();
        SYF_FFIT_ACPTCCY_AMT_Relation();
        SYF_FFIT_ACPT_CCY_Onchange();
        SYF_FFIT_ACPT_AMT_Onchange();
        SYF_FFIT_Cal_TRF_PCT();
        SYF_FFIT_LC_CCY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRX_TYPE_FLG_onchange = function(event) {
    try {
        SYF_FFIT_TRX_TYPE_FLG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_UNFFFTTRFRegister.js", e);
    }
}