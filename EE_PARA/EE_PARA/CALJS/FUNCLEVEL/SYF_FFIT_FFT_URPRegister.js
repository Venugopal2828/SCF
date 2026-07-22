var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_ACPT_BK_CNTY = function() {
    try {

        REHN = 'N';
        REHW = 'N';
        RECN = 'N';
        document.MAINFORM.ACPT_CNTY_TYPE.value = '';
        document.MAINFORM.FFT_MARGIN_LOWEST.value = '0';
        if (document.MAINFORM.ACPT_BK_CNTY.value != '') {
            REHN = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_ACPT_BK_CNTY_0', '1');
            if (REHN == 'N') {
                SYT_ChangeFldClass(document.MAINFORM.HO_ACPT_BK_ID, 'M', 'N');
                document.MAINFORM.Submit4.disabled = false;
                REHW = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_ACPT_BK_CNTY_1', '1');
            }
            if (REHN == 'Y') {
                SYT_ChangeFldClass(document.MAINFORM.HO_ACPT_BK_ID, 'P', 'N');
                document.MAINFORM.Submit4.disabled = true;
                document.MAINFORM.HO_ACPT_BK_ID.value = '';
                document.MAINFORM.HO_ACPT_BK_CNTY.value = '';
                document.MAINFORM.HO_ACPT_CNTY_TYPE.value = '';
            }
            if (REHW == 'Y') {
                RECN = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_ACPT_BK_CNTY_2', '1');
                if (RECN == 'N') {
                    alert('There is no country risk rating maintain');
                }
            }
            if ((REHN == 'N') && (REHW == 'N')) {
                alert('No information in price maintenance');
            }
        }
        if ((REHW == 'Y') && (HOREHW == 'Y') && (RECN == 'Y') && (HORECN == 'Y')) {
            document.MAINFORM.FFT_MARGIN_LOWEST.value = '0';
            if (SYS_BeFloat(document.MAINFORM.ACPT_CNTY_TYPE.value) > SYS_BeFloat(document.MAINFORM.HO_ACPT_CNTY_TYPE.value)) {
                document.MAINFORM.FFT_MARGIN_LOWEST.value = SYS_GetTableDataSpcial_Boc('DATA_FFTM_HW', " CNTY_CODE='" + document.MAINFORM.ACPT_BK_CNTY.value + "'", 'FFIT_BP', 'MIN');
            }
            if (SYS_BeFloat(document.MAINFORM.ACPT_CNTY_TYPE.value) == SYS_BeFloat(document.MAINFORM.HO_ACPT_CNTY_TYPE.value)) {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_ACPT_BK_CNTY_3', '1');
            }
            if (SYS_BeFloat(document.MAINFORM.ACPT_CNTY_TYPE.value) < SYS_BeFloat(document.MAINFORM.HO_ACPT_CNTY_TYPE.value)) {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_ACPT_BK_CNTY_4', '1');
                document.MAINFORM.FFT_MARGIN_LOWEST.value = document.MAINFORM.FFT_MARGIN_LOWEST.value - 10;
                if (document.MAINFORM.FFT_MARGIN_LOWEST.value < 50) {
                    document.MAINFORM.FFT_MARGIN_LOWEST.value = '50';
                }
            }
        }
        document.MAINFORM.FFT_MARGIN_LOWEST.value = SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value) / 100;
        document.MAINFORM.FFT_MARGIN_LOWEST.value = SYT_CCY_AMT('USD', document.MAINFORM.FFT_MARGIN_LOWEST.value);
        SYF_FFIT_AUTH_MARGIN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_BK_ID = function() {
    try {

        if (document.MAINFORM.ACPT_BK_ID.value != '') {
            RECH = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_ACPT_BK_ID_5', '1');
            if (RECH == 'N') {
                alert('BK_ID is wrong!'); // Utility Auto Fix Comments
                document.MAINFORM.ACPT_BK_CNTY.value = '';
                document.MAINFORM.ACPT_BK_NM.value = '';
                document.MAINFORM.ACPT_BK_SW.value = '';
                document.MAINFORM.ACPT_BK_ADD.value = '';
            }
        }

        if (document.MAINFORM.ACPT_BK_ID.value == '') {

            document.MAINFORM.ACPT_BK_CNTY.value = '';
            document.MAINFORM.ACPT_BK_NM.value = '';
            document.MAINFORM.ACPT_BK_SW.value = '';
            document.MAINFORM.ACPT_BK_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_BK_SW = function() {
    try {

        if (document.MAINFORM.ACPT_BK_SW.value != '') {
            RECH = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_ACPT_BK_SW_6', '1');
            if (RECH == 'N') {
                alert('SWIFT number is wrong. Please input again!');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.ACPT_BK_ID, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_CCY = function() {
    try {

        document.MAINFORM.URP_CCY.value = document.MAINFORM.ACPT_CCY.value;
        EEHtml.fireEvent(document.MAINFORM.URP_CCY, 'onchange');
        document.MAINFORM.URP_AMT.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.URP_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_CCY_AMT = function() {
    try {

        if (document.MAINFORM.ACPT_CCY.value != '' || document.MAINFORM.ACPT_AMT.value != '') {
            document.MAINFORM.ACPT_AMT.value = SYT_CCY_AMT(document.MAINFORM.ACPT_CCY.value, document.MAINFORM.ACPT_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_AUTH_MARGIN = function() {
    try {

        if ((SYS_BeFloat(document.MAINFORM.MARGIN_RT.value) > '0') && (SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value) > '0')) {
            if (SYS_BeFloat(document.MAINFORM.MARGIN_RT.value) < SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value)) {
                document.MAINFORM.AUTH_MARGIN.value = '1';
                //SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'M','N');
                //alert('Need price authorized');
            } else {
                document.MAINFORM.AUTH_MARGIN.value = '0';
                //document.MAINFORM.TEMP_CHAR5.value='';
                //SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'P','N');
            }
        } else if (SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value) == '0' && SYS_BeFloat(document.MAINFORM.MARGIN_RT.value) > '0') {
            document.MAINFORM.AUTH_MARGIN.value = '1';
            //SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'M','N');
            //alert('Need price authorized');
        } else {
            document.MAINFORM.AUTH_MARGIN.value = '0';
            //document.MAINFORM.TEMP_CHAR5.value='';
            //SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'P','N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_AUTH_POINT1 = function() {
    try {

      if (document.MAINFORM.FAV_RT_FLG.value == 'YES') { 
            document.MAINFORM.AUTH_POINT1.value = '1';
            alert('Need preferential rate authorized');
        } else {
            document.MAINFORM.AUTH_POINT1.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CHANGEFIELDCLASS = function() {
    try {

        if (document.MAINFORM.DEBT_INSMT_TYPE.value == '4') {
            SYT_ChangeFldClass(document.MAINFORM.DEBT_INSMT_REMARK, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEBT_INSMT_REMARK, 'O', 'N');
        }

        if (document.MAINFORM.DEBT_INSMT_TYPE.value == '5') {
            SYT_ChangeFldClass(document.MAINFORM.LC_TYPE, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LC_TYPE, 'O', 'N');
        }

        if ((document.MAINFORM.ACPT_BK_ID.value != '') && (document.MAINFORM.HO_ACPT_BK_ID.value == '')) {
            SYT_ChangeFldClass(document.MAINFORM.HO_ACPT_BK_ID, 'P', 'N');
            document.MAINFORM.Submit4.disabled = true;
        }
        /*
if(document.MAINFORM.TEMP_CHAR5.value!='')
{
SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'M','N');
}
*/
      if (document.MAINFORM.FAV_RT_FLG.value == 'YES') { 
            SYT_ChangeFldClass(document.MAINFORM.NEW_REMARK, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_REMARK, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.AUTH_MARGIN.value = '1';
        document.MAINFORM.PMT_BAL.value = document.MAINFORM.URP_AMT.value;
        SYT_Check_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        /*
if(!SYF_FFIT_TEMP_CHAR5())
{
return false;
}
*/
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_DEBT_INSMT_REMARK = function() {
    try {

        if (document.MAINFORM.DEBT_INSMT_TYPE.value == '4') {
            document.MAINFORM.DEBT_INSMT_REMARK.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DEBT_INSMT_REMARK, 'M', 'N');
        } else {
            document.MAINFORM.DEBT_INSMT_REMARK.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DEBT_INSMT_REMARK, 'O', 'N');
        }

        if (document.MAINFORM.DEBT_INSMT_TYPE.value == '5') {
            document.MAINFORM.LC_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.LC_TYPE, 'M', 'N');
        } else {
            document.MAINFORM.LC_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.LC_TYPE, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_EXPT_ID = function() {
    try {

        if (document.MAINFORM.EXPT_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_EXPT_ID_7', '1');
        }
        if (document.MAINFORM.EXPT_ID.value == '') {
            document.MAINFORM.EXPT_NM.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FAV_REMARK = function() {
    try {

      if (document.MAINFORM.FAV_RT_FLG.value == 'YES') { 
            SYT_ChangeFldClass(document.MAINFORM.NEW_REMARK, 'M', 'Y');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_REMARK, 'O', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GRANTOR_BK_ID = function() {
    try {

        if (document.MAINFORM.GRANTOR_BK_ID.value != '') {
            RECH = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_GRANTOR_BK_ID_8', '1');
            if (RECH == 'N') {
                alert('BK_ID is wrong!'); // Utility Auto Fix Comments
                document.MAINFORM.GRANTOR_BK_SW.value = '';
                document.MAINFORM.GRANTOR_BK_NM.value = '';
                document.MAINFORM.GRANTOR_BK_ADD.value = '';
            }
        }

        if (document.MAINFORM.GRANTOR_BK_ID.value == '') {
            document.MAINFORM.GRANTOR_BK_SW.value = '';
            document.MAINFORM.GRANTOR_BK_NM.value = '';
            document.MAINFORM.GRANTOR_BK_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GRANTOR_BK_SW = function() {
    try {

        if (document.MAINFORM.GRANTOR_BK_SW.value != '') {
            RECH = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_GRANTOR_BK_SW_9', '1');
            if (RECH == 'N') {
                alert('SWIFT number is wrong. Please input again!');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.GRANTOR_BK_ID, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GTS_PRVN_ID = function() {
    try {

        if (document.MAINFORM.GTS_BR_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_GTS_PRVN_ID_10', '1');
        } else {
            document.MAINFORM.GTS_BR_NM.value = '';
            document.MAINFORM.GTS_PRVN_ID.value = '';
            document.MAINFORM.GTS_DISTRICT_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_HO_ACPT_BK_CNTY = function() {
    try {

        HOREHN = 'N';
        HOREHW = 'N';
        document.MAINFORM.HO_ACPT_CNTY_TYPE.value = '';
        document.MAINFORM.FFT_MARGIN_LOWEST.value = '0';
        if (document.MAINFORM.HO_ACPT_BK_CNTY.value != '') {
            HOREHW = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_HO_ACPT_BK_CNTY_11', '1');
            if (HOREHW == 'Y') {
                HORECN = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_HO_ACPT_BK_CNTY_12', '1');
                if (HORECN == 'N') {
                    alert('There is no country risk rating maintain');
                }
            }
            if (HOREHW == 'N') {
                alert('No information in price maintenance');
            }
            if (REHN != 'Y') {
                document.MAINFORM.FFT_MARGIN_LOWEST.value = '0';
            }
        }

        if ((REHW == 'Y') && (HOREHW == 'Y') && (RECN == 'Y') && (HORECN == 'Y')) {
            document.MAINFORM.FFT_MARGIN_LOWEST.value = '0';
            if (SYS_BeFloat(document.MAINFORM.ACPT_CNTY_TYPE.value) > SYS_BeFloat(document.MAINFORM.HO_ACPT_CNTY_TYPE.value)) {
                document.MAINFORM.FFT_MARGIN_LOWEST.value = SYS_GetTableDataSpcial_Boc('DATA_FFTM_HW', " CNTY_CODE='" + document.MAINFORM.ACPT_BK_CNTY.value + "'", 'FFIT_BP', 'MIN');

            }
            if (SYS_BeFloat(document.MAINFORM.ACPT_CNTY_TYPE.value) == SYS_BeFloat(document.MAINFORM.HO_ACPT_CNTY_TYPE.value)) {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_HO_ACPT_BK_CNTY_13', '1');

            }
            if (SYS_BeFloat(document.MAINFORM.ACPT_CNTY_TYPE.value) < SYS_BeFloat(document.MAINFORM.HO_ACPT_CNTY_TYPE.value)) {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_HO_ACPT_BK_CNTY_14', '1');
                document.MAINFORM.FFT_MARGIN_LOWEST.value = document.MAINFORM.FFT_MARGIN_LOWEST.value - 10;
                if (document.MAINFORM.FFT_MARGIN_LOWEST.value < 50) {
                    document.MAINFORM.FFT_MARGIN_LOWEST.value = '50';
                }
            }
        }
        document.MAINFORM.FFT_MARGIN_LOWEST.value = SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value) / 100;
        document.MAINFORM.FFT_MARGIN_LOWEST.value = SYT_CCY_AMT('USD', document.MAINFORM.FFT_MARGIN_LOWEST.value);
        SYF_FFIT_AUTH_MARGIN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_HO_ACPT_BK_ID = function() {
    try {

        if (document.MAINFORM.HO_ACPT_BK_ID.value != '') {
            RECH = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_URPRegister_SYF_FFIT_HO_ACPT_BK_ID_15', '1');
            if (RECH == 'N') {
                alert('BK_ID is wrong!'); // Utility Auto Fix Comments
                document.MAINFORM.HO_ACPT_BK_NM.value = '';
                document.MAINFORM.HO_ACPT_BK_ADD.value = '';
                document.MAINFORM.HO_ACPT_BK_CNTY.value = '';
            }
        }

        if (document.MAINFORM.HO_ACPT_BK_ID.value == '') {

            document.MAINFORM.HO_ACPT_BK_NM.value = '';
            document.MAINFORM.HO_ACPT_BK_ADD.value = '';
            document.MAINFORM.HO_ACPT_BK_CNTY.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('FFIT_UR', 'SYF_FFIT_SetRefNo');
        document.MAINFORM.EVENT_TYPE.VALUE = 'URPRegister';
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        document.MAINFORM.URP_START_DT.value = SYS_BUSI_DATE;

        document.MAINFORM.FAV_RT_FLG.value = 'NO';
        document.MAINFORM.AUTH_POINT1.value = '0';
        document.MAINFORM.AUTH_MARGIN.value = '1';
        document.MAINFORM.GTS_BR_ID.value = SYT_Get_GtsBrId('1', '', '');
        //SYF_FFIT_GTS_PRVN_ID();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MARGIN_RT = function() {
    try {

        if (document.MAINFORM.MARGIN_RT.value != '') {
            document.MAINFORM.MARGIN_RT.value = SYT_CCY_AMT('USD', document.MAINFORM.MARGIN_RT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
            document.MAINFORM.FFT_MARGIN_LOWEST.value = SYT_CCY_AMT('USD', document.MAINFORM.FFT_MARGIN_LOWEST.value);
            SYF_FFIT_MARGIN_RT();
            SYF_FFIT_CHANGEFIELDCLASS();

        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            document.MAINFORM.FFT_MARGIN_LOWEST.value = SYT_CCY_AMT('USD', document.MAINFORM.FFT_MARGIN_LOWEST.value);
            SYF_FFIT_MARGIN_RT(); // Utility Auto Fix Comments
            SYF_FFIT_CHANGEFIELDCLASS();
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SetRefNo = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_URP_CCY = function() {
    try {


    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_URP_CCY_AMT = function() {
    try {

        if (document.MAINFORM.URP_CCY.value != '' || document.MAINFORM.URP_AMT.value != '') {
            document.MAINFORM.URP_AMT.value = SYT_CCY_AMT(document.MAINFORM.URP_CCY.value, document.MAINFORM.URP_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_URP_PCT = function() {
    try {

        document.MAINFORM.URP_PCT.value = SYT_CCY_AMT('USD', SYS_BeFloat(document.MAINFORM.URP_AMT.value) / SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) / 0.01);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.ACPT_AMT.value = 0;
        }
        SYF_FFIT_ACPT_CCY_AMT();
        SYF_FFIT_URP_PCT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_BK_CNTY_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_CNTY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_BK_ID_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_ID();
        SYF_FFIT_ACPT_BK_CNTY();
        SYM_FFIT_Cal_ACPT_BK_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_BK_SW_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_SW();
        SYM_FFIT_Cal_ACPT_BK_SW_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_CCY_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_CCY();
        SYF_FFIT_ACPT_CCY_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_DEBT_INSMT_REMARK_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_DEBT_INSMT_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_DEBT_INSMT_REMARK();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_EXPT_ID_onchange = function(event) {
    try {
        SYF_FFIT_EXPT_ID();
        SYM_FFIT_Cal_EXPT_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FAV_RT_FLG_onchange = function(event) {
    try {
        SYF_FFIT_AUTH_POINT1();
        SYF_FFIT_FAV_REMARK();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FFT_MARGIN_LOWEST_onchange = function(event) {
    try {
        SYF_FFIT_AUTH_MARGIN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRANTOR_BK_ID_onchange = function(event) {
    try {
        SYF_FFIT_GRANTOR_BK_ID();
        SYM_FFIT_Cal_GRANTOR_BK_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRANTOR_BK_SW_onchange = function(event) {
    try {
        SYF_FFIT_GRANTOR_BK_SW();
        SYM_FFIT_Cal_GRANTOR_BK_SW_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_HO_ACPT_BK_CNTY_onchange = function(event) {
    try {
        SYF_FFIT_HO_ACPT_BK_CNTY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_HO_ACPT_BK_ID_onchange = function(event) {
    try {
        SYF_FFIT_HO_ACPT_BK_ID();
        SYF_FFIT_HO_ACPT_BK_CNTY();
        SYM_FFIT_Cal_HO_ACPT_BK_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_HO_ACPT_CNTY_TYPE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MARGIN_RT_onchange = function(event) {
    try {
        SYF_FFIT_MARGIN_RT();
        SYF_FFIT_AUTH_MARGIN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
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
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_URP_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.URP_AMT.value) > SYS_BeFloat(document.MAINFORM.ACPT_AMT.value)) {
            alert("URP amount should not be more than Acceptance amount");
            document.MAINFORM.URP_AMT.value = '';
        }
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.URP_AMT.value)) {
            document.MAINFORM.URP_AMT.value = 0;
        }
        document.MAINFORM.PMT_BAL.value = SYS_BeFloat(document.MAINFORM.URP_AMT.value);
        SYF_FFIT_URP_CCY_AMT();
        SYF_FFIT_URP_PCT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_URP_CCY_onchange = function(event) {
    try {
        SYF_FFIT_URP_CCY();
        SYF_FFIT_URP_CCY_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_URP_EXPIRY_DT_onchange = function(event) {
    try {
        var Days = SYS_GetSubDays('URP_EXPIRY_DT', 'URP_START_DT');
        if (Days > 0) {
            alert("Expiry Date should not be before than URP start date");
            document.MAINFORM.URP_EXPIRY_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_URP_START_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.URP_START_DT.value < SYS_BUSI_DATE) {
            alert("The URP start date should not be past date");
            document.MAINFORM.URP_START_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_URPRegister.js", e);
    }
}