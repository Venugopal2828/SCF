var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_ACPT_AMT = function() {
    try {

        if (document.MAINFORM.ACPT_CCY.value == document.MAINFORM.FINC_CCY.value) {
            if ((SYS_BeFloat(document.MAINFORM.FINC_AMT.value) - SYS_BeFloat(document.MAINFORM.ACPT_AMT.value)) > '0') {
                SYS_CheckError(document.MAINFORM.FINC_AMT, 'Financing amount greater than the commitment amount!');
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_BK_CNTY_check = function() {
    try {

        if ((document.MAINFORM.ACPT_BK_CNTY.value != '') && (document.MAINFORM.HO_ACPT_BK_CNTY.value != '') && (document.MAINFORM.FFT_MARGIN_LOWEST.value == '0')) {
            alert('There is no price authorities of this bank');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_BK_ID = function() {
    try {

        var sTRX_NO; // Utility Auto Fix Comments
        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO == 'BP' || sTRX_NO == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'AD') {
            if ((document.MAINFORM.CONF_BK_ID.value != '') || (document.MAINFORM.CONF_BK_NM.value != '')) {
                document.MAINFORM.ACPT_BK_ID.value = document.MAINFORM.CONF_BK_ID.value;
                document.MAINFORM.ACPT_BK_NM.value = document.MAINFORM.CONF_BK_NM.value;
                sMarginLowestHN = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_ACPT_BK_ID_0', '1');
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_ACPT_BK_ID_1', '1');
            } else {
                if ((document.MAINFORM.ISSUE_BK_ID.value != '') || (document.MAINFORM.ISSUE_BK_NM.value != '')) {
                    document.MAINFORM.ACPT_BK_ID.value = document.MAINFORM.ISSUE_BK_ID.value;
                    document.MAINFORM.ACPT_BK_NM.value = document.MAINFORM.ISSUE_BK_NM.value;
                    document.MAINFORM.ACPT_BK_ADD.value = document.MAINFORM.ISSUE_BK_ADD.value;
                    sMarginLowestHN = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_ACPT_BK_ID_2', '1');
                    SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_ACPT_BK_ID_3', '1');
                } else {
                    document.MAINFORM.ACPT_BK_ID.value = '';
                    EEHtml.fireEvent(document.MAINFORM.ACPT_BK_ID, 'onchange');
                }
            }
        } else {
            if ((sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'OC') && (document.MAINFORM.ACPT_BK_ID.value != '')) {
                sMarginLowestHN = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_ACPT_BK_ID_4', '1');
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_ACPT_BK_ID_5', '1');
            } else {
                document.MAINFORM.ACPT_BK_ID.value = '';
                EEHtml.fireEvent(document.MAINFORM.ACPT_BK_ID, 'onchange');
            }
        }
        if (sMarginLowestHN == 'Y') {
            document.MAINFORM.FFT_MARGIN_LOWEST.value = document.MAINFORM.FFT_MARGIN_LOWEST.value / 100;
            document.MAINFORM.FFT_MARGIN_LOWEST.value = SYT_CCY_AMT('USD', document.MAINFORM.FFT_MARGIN_LOWEST.value);
            SYT_ChangeFldClass(document.MAINFORM.HO_ACPT_BK_ID, 'P', 'N');
            document.MAINFORM.Submit22.disabled = true;
            document.MAINFORM.HO_ACPT_BK_ID.value = '';
            document.MAINFORM.HO_ACPT_BK_CNTY.value = '';
            document.MAINFORM.HO_ACPT_CNTY_TYPE.value = '';
        }
        if (sMarginLowestHN == 'N') {
            //alert('ACPT BK ID IS NOT IN HN')
            SYT_ChangeFldClass(document.MAINFORM.HO_ACPT_BK_ID, 'M', 'N');
            document.MAINFORM.Submit22.disabled = false;
            EEHtml.fireEvent(document.MAINFORM.ACPT_BK_CNTY, 'onchange');
            //SYF_FFIT_FFT_MARGIN_LOWEST();
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_BK_SW = function() {
    try {

        if (document.MAINFORM.ACPT_BK_SW.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_ACPT_BK_SW_6', '1');
        } else {
            document.MAINFORM.ACPT_BK_ID.value = '';
        }

        EEHtml.fireEvent(document.MAINFORM.ACPT_BK_ID, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_CCY = function() {
    try {

        if ((document.MAINFORM.ACPT_CCY.value != '') || (document.MAINFORM.ACPT_AMT.value != '')) {
            document.MAINFORM.ACPT_AMT.value = SYT_CCY_AMT(document.MAINFORM.ACPT_CCY.value, document.MAINFORM.ACPT_AMT.value);
        }
        document.MAINFORM.FINC_AMT.value = SYS_BeFloat(document.MAINFORM.ACPT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_CCY_1 = function() {
    try {

        if ((document.MAINFORM.ACPT_CCY.value != '') && (document.MAINFORM.FINC_CCY.value != '') && (document.MAINFORM.ACPT_CCY.value != document.MAINFORM.FINC_CCY.value)) {
            // alert('Commitment currency is different from the financing currency!');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_CNTY_TYPE = function() {
    try {

        if ((document.MAINFORM.ACPT_BK_CNTY.value != '') && (sMarginLowestHN == 'N')) {

            sMarginLowestHW2 = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_ACPT_CNTY_TYPE_7', '1');
            if (sMarginLowestHW2 == 'N') {
                alert('There is no country risk rating maintain of this bank!');
                document.MAINFORM.ACPT_CNTY_TYPE.value = '';
            }
        } else {
            if ((document.MAINFORM.ACPT_BK_ID.value != '') && (sMarginLowestHN == 'N')) {
                alert('There is no ACPT BK CNTY CODE!');

                document.MAINFORM.ACPT_CNTY_TYPE.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
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
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_AUTH_MARGIN = function() {
    try {

        if ((SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value) > 0) && (SYS_BeFloat(document.MAINFORM.MARGIN_RT.value) > 0)) {
            if (SYS_BeFloat(document.MAINFORM.MARGIN_RT.value) < SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value)) {
                document.MAINFORM.AUTH_MARGIN.value = '1';
                //SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'M','N');
            } else {
                document.MAINFORM.AUTH_MARGIN.value = '0';
                //document.MAINFORM.TEMP_CHAR5.value='';
                //SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'P','N');
            }
        } else if (SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value) == '0') {
            document.MAINFORM.AUTH_MARGIN.value = '1';
            //SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'M','N');
        } else {
            document.MAINFORM.AUTH_MARGIN.value = '0';
            //document.MAINFORM.TEMP_CHAR5.value='';
            //SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'P','N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_AUTH_POINT1 = function() {
    try {

      if (document.MAINFORM.FAV_RT_FLG.value == 'YES') { 
            document.MAINFORM.AUTH_POINT1.value = '1';
        } else {
            document.MAINFORM.AUTH_POINT1.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_BA = function() {
    try {

        var sTRX_NO; // Utility Auto Fix Comments
        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO == 'AD' || sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'OC') {
            document.MAINFORM.BA_ADOC_NO.value = document.MAINFORM.TRX_NO.value;
            document.MAINFORM.BA_TRX_NO.value = '';
        } else if (sTRX_NO == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'BP') {
            /* SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'C_MAIN_REF','BA_ADOC_NO'); */

            document.MAINFORM.BA_TRX_NO.value = document.MAINFORM.TRX_NO.value;
        } else {
            document.MAINFORM.BA_ADOC_NO.value = '';
            document.MAINFORM.BA_TRX_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_BP_ACPT_DT = function() {
    try {

        var sTRX_NO; // Utility Auto Fix Comments
        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO == 'EPLC' || document.MAINFORM.GET_DATA_FLG.value == 'BP') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_BP_ACPT_DT_8', '1');
        } else {
            document.MAINFORM.BP_ACPT_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_BR_ID = function() {
    try {

        if (document.MAINFORM.EXPT_ID.value != '') {

            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_BR_ID_9', '1');

        } else {
            document.MAINFORM.EXPT_ID.value = '';
            document.MAINFORM.EXPT_NM.value = '';
            document.MAINFORM.EXPT_NM_C.value = '';
            document.MAINFORM.VIP_LEVEL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CHANGEFIELD = function() {
    try {

        if ((document.MAINFORM.ACPT_BK_ID.value != '') && (document.MAINFORM.HO_ACPT_BK_ID.value == '')) {
            SYT_ChangeFldClass(document.MAINFORM.HO_ACPT_BK_ID, 'P', 'N');
            document.MAINFORM.Submit22.disabled = true;
        }
        if (document.MAINFORM.DEBT_INSMT_TYPE.value == '4') {
            SYT_ChangeFldClass(document.MAINFORM.DEBT_INSMT_REMARK, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DEBT_INSMT_REMARK, 'O', 'N');
        }

        /*
if(document.MAINFORM.TEMP_CHAR5.value!='')
{
SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'M','N');
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CheckMaturity = function() {
    try {

        var nDAYS; // Utility Auto Fix Comments
        nDAYS = SYS_GetSubDays(document.MAINFORM.FINC_DT.name, document.MAINFORM.MATURITY.name);
        if (nDAYS < 0) {
            SYS_CheckError(document.MAINFORM.MATURITY, 'Maturity earlier than the finance date');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.BA_ADOC_NO.value = document.MAINFORM.TRX_NO.value;
        document.MAINFORM.AUTH_MARGIN.value = '0';
        document.MAINFORM.AUTH_POINT1.value = '1';
        if (document.MAINFORM.FFT_MARGIN_LOWEST.value == '') {
            document.MAINFORM.FFT_MARGIN_LOWEST.value = 0;
        }

        SYF_FFIT_BA();
        SYT_BLACK_INS_TYP_REPLACE(document.MAINFORM.BLACK_TRX_TYPE, document.MAINFORM.BLACK_INSTYP);
        SYF_FFIT_inqFinDNA();
        SYF_FFIT_AUTH_BLACK();
        SYT_Check_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        /*
if(!SYF_FFIT_TEMP_CHAR5())
{
return false;
}
if(!SYF_FFIT_TEMP_CHAR1())
{
return false;
}*/

        if (!SYF_FFIT_ACPT_AMT()) {
            return false;
        }
        if (!SYF_FFIT_CheckMaturity()) {
            return false;
        }

        /*if(!SYF_FFIT_VENT_TEMP_NO1())
{
return false;
}*/

        if (!SYF_FFIT_GRACE_DAYS()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
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
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_EXPT_ID = function() {
    try {

        var sTRX_NO; // Utility Auto Fix Comments
        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'BP') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_EXPT_ID_10', '1');
            document.MAINFORM.FINC_CCY.value = document.MAINFORM.TEMP_CHAR1.value;
            document.MAINFORM.ACPT_CCY.value = document.MAINFORM.TEMP_CHAR1.value;
            document.MAINFORM.DEBT_INSMT_NO.value = document.MAINFORM.LC_NO.value;
            EEHtml.fireEvent(document.MAINFORM.ISSUE_BK_ID, 'onchange'); //12
        } else {
            if (sTRX_NO == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'AD') {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_EXPT_ID_11', '1');
                document.MAINFORM.FINC_CCY.value = document.MAINFORM.TEMP_CHAR1.value;
                document.MAINFORM.ACPT_CCY.value = document.MAINFORM.TEMP_CHAR1.value;
                document.MAINFORM.DEBT_INSMT_NO.value = document.MAINFORM.LC_NO.value;
                EEHtml.fireEvent(document.MAINFORM.ISSUE_BK_ID, 'onchange'); //12
                document.MAINFORM.MATURITY.value = '';
            } else {
                if (sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'OC') {
                    SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_EXPT_ID_12', '1');
                    document.MAINFORM.FINC_CCY.value = document.MAINFORM.TEMP_CHAR1.value;
                    document.MAINFORM.ACPT_CCY.value = document.MAINFORM.TEMP_CHAR1.value;
                    document.MAINFORM.DEBT_INSMT_NO.value = document.MAINFORM.INV_NO.value;
                    SYF_FFIT_ACPT_BK_ID();
                } else {
                    /*    document.MAINFORM.EXPT_ID.value = '';
                    EEHtml.fireEvent(document.MAINFORM.EXPT_ID, 'onchange');
                    document.MAINFORM.ACPT_BK_ID.value = '';
                    document.MAINFORM.IMPT_NM.value = '';
                    document.MAINFORM.TEMP_CHAR1.value = '';
                    document.MAINFORM.FINC_CCY.value = '';
                    document.MAINFORM.ACPT_CCY.value = '';
                    document.MAINFORM.ACPT_AMT.value = '0';
                    EEHtml.fireEvent(document.MAINFORM.ACPT_BK_ID, 'onchange');
                    document.MAINFORM.DEBT_INSMT_NO.value = '';
                    document.MAINFORM.VIP_LEVEL.value = '';
                    document.MAINFORM.TENOR_DAYS.value = '0';
                    document.MAINFORM.MATURITY.value = '';*/
                }

            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
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
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FFT_ALERT = function() {
    try {

        var sTRX_NO; // Utility Auto Fix Comments
        if (document.MAINFORM.VENT_TEMP_NO1.value != '') {
            alert('This deal has been done forfaiting!');
        }

        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO == 'BP' || sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'OC') {
            if (document.MAINFORM.TEMP_DATE2.value != '') {
                alert('This BP/OC has been done settlement in the export module!');
            }
            if (document.MAINFORM.TEMP_DATE3.value != '') {
                alert('This BP/OC has been done settlement in the forfaiting module!');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FFT_MARGIN_LOWEST = function() {
    try {

        var sA; // Utility Auto Fix Comments
        var sB; // Utility Auto Fix Comments
        var sC; // Utility Auto Fix Comments
        var sD; // Utility Auto Fix Comments
        if (sMarginLowestHN == 'N') {
            document.MAINFORM.FFT_MARGIN_LOWEST.value = '0';
        }
        if ((sMarginLowestHN == 'N') && (document.MAINFORM.ACPT_CNTY_TYPE.value != '') && (document.MAINFORM.HO_ACPT_CNTY_TYPE.value != '')) {
            if (document.MAINFORM.ACPT_CNTY_TYPE.value == document.MAINFORM.HO_ACPT_CNTY_TYPE.value) {
                sD = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_FFT_MARGIN_LOWEST_13', '1');
                if (sD == 'N') {
                    sB = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_FFT_MARGIN_LOWEST_14', '1');
                    if (sB == 'N') {
                        alert('There is no price maintain of this headoffice');
                    } else {
                        alert('Please update price maintenance!'); // Utility Auto Fix Comments
                    }
                }
            }
            if (SYS_BeFloat(document.MAINFORM.ACPT_CNTY_TYPE.value) < SYS_BeFloat(document.MAINFORM.HO_ACPT_CNTY_TYPE.value)) //< 
            {
                sC = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_FFT_MARGIN_LOWEST_15', '1');
                if (sC == 'N') {
                    sB = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_FFT_MARGIN_LOWEST_16', '1'); // Utility Auto Fix Comments
                    if (sB == 'N') {
                        alert('There is no price maintain of this headoffice');
                    } else {
                        alert('Please update price maintenance!'); // Utility Auto Fix Comments
                    }
                }
                if (sC == 'Y') {
                    document.MAINFORM.FFT_MARGIN_LOWEST.value = document.MAINFORM.FFT_MARGIN_LOWEST.value - BP1;
                    if (document.MAINFORM.FFT_MARGIN_LOWEST.value < BP2) {
                        document.MAINFORM.FFT_MARGIN_LOWEST.value = BP2;
                    }
                }
            }
            if (SYS_BeFloat(document.MAINFORM.ACPT_CNTY_TYPE.value) > SYS_BeFloat(document.MAINFORM.HO_ACPT_CNTY_TYPE.value)) //>
            {
                sA = document.MAINFORM.FFT_MARGIN_LOWEST.value = SYS_GetTableDataSpcial_Boc('DATA_FFTM_HW', " CNTY_CODE='" + document.MAINFORM.ACPT_BK_CNTY.value + "'", 'FFIT_BP', 'MIN');
                if (sA == '') {
                    SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_FFT_MARGIN_LOWEST_17', '1');
                    alert('There is no price authorized');
                }
            }
            document.MAINFORM.FFT_MARGIN_LOWEST.value = SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value) / 100;
            document.MAINFORM.FFT_MARGIN_LOWEST.value = SYT_CCY_AMT('USD', document.MAINFORM.FFT_MARGIN_LOWEST.value);
        }

        if (document.MAINFORM.FFT_MARGIN_LOWEST.value == '') {
            document.MAINFORM.FFT_MARGIN_LOWEST.value = '0';
        }
        SYF_FFIT_MARGIN_check();
        SYF_FFIT_AUTH_MARGIN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_CCY = function() {
    try {

        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.FINC_AMT.value != '') {
            document.MAINFORM.FINC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GRACE_DAYS = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.GRACE_DAYS.value) < '0') {
            SYS_CheckError(document.MAINFORM.GRACE_DAYS, 'Grace period cannot less than zero!');
            return false;
        } else if (SYS_BeFloat(document.MAINFORM.GRACE_DAYS.value) > '999') {
            SYS_CheckError(document.MAINFORM.GRACE_DAYS, 'Grace period should not more than 999!');
            document.MAINFORM.GRACE_DAYS.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GTS_PRVN_ID = function() {
    try {

        if (document.MAINFORM.GTS_BR_ID.value != '') {
            //SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_GTS_PRVN_ID_18', '1');
        } else {
            document.MAINFORM.GTS_BR_NM.value = '';
            document.MAINFORM.GTS_PRVN_ID.value = '';
            document.MAINFORM.GTS_DISTRICT_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_HO_ACPT_BK_NM = function() {
    try {

        if (document.MAINFORM.HO_ACPT_BK_ID.value != '') {
            //sMarginLowestHM1 = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_HO_ACPT_BK_NM_19', '1');
            if (sMarginLowestHM1 == 'N') {
                document.MAINFORM.HO_ACPT_BK_NM.value = '';

                document.MAINFORM.HO_ACPT_BK_ADD.value = '';
                document.MAINFORM.HO_ACPT_BK_CNTY.value = '';
                document.MAINFORM.HO_ACPT_CNTY_TYPE.value = '';
                sMarginLowestHM1 = 'Y';
            }
        } else {
            alert('HO ACPT BK ID IS NULL');
        }
        EEHtml.fireEvent(document.MAINFORM.HO_ACPT_BK_CNTY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_HO_ACPT_CNTY_TYPE = function() {
    try {

        if (document.MAINFORM.HO_ACPT_BK_CNTY.value != '') {
            sA = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_HO_ACPT_CNTY_TYPE_20', '1');
            if (sA == 'N') {
                alert('There is no country risk rating maintain of this headoffice!'); // Utility Auto Fix Comments
                document.MAINFORM.HO_ACPT_CNTY_TYPE.value = '';
                if (sMarginLowestHN == 'N') {
                    document.MAINFORM.FFT_MARGIN_LOWEST.value = '0';
                }
            }
        } else {
            alert('HO ACPT BK CNTY is null!');
            document.MAINFORM.HO_ACPT_CNTY_TYPE.value = '';
            if (sMarginLowestHN == 'N') {
                document.MAINFORM.FFT_MARGIN_LOWEST.value = '0';
            }
        }
        SYF_FFIT_AUTH_MARGIN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('FFIT_FT', 'SYF_FFIT_SetRefNo');
        document.MAINFORM.EVENT_TYPE.value = 'FFTUNFRegister1';
        document.MAINFORM.FINC_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'USD';
        document.MAINFORM.GTS_BR_ID.value = SYT_Get_GtsBrId('1', '', '');
        document.MAINFORM.ACPT_CCY.value = "USD";
        document.MAINFORM.FINC_CCY.value = "USD";
        document.MAINFORM.ACPT_AMT.value = SYT_AmtFormat(document.MAINFORM.ACPT_CCY.value, document.MAINFORM.ACPT_AMT.value);
        document.MAINFORM.FINC_AMT.value = SYT_AmtFormat(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
        SYF_FFIT_GTS_PRVN_ID();
        SYF_FFIT_AUTH_POINT1();
        SYF_FFIT_FINC_CCY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MARGIN_RT = function() {
    try {

        if (document.MAINFORM.MARGIN_RT.value != '') {
            document.MAINFORM.MARGIN_RT.value = SYT_CCY_AMT('USD', document.MAINFORM.MARGIN_RT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MARGIN_check = function() {
    try {

        if ((SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value) > 0) && (SYS_BeFloat(document.MAINFORM.MARGIN_RT.value) > 0)) {
            if (SYS_BeFloat(document.MAINFORM.MARGIN_RT.value) < SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value)) {
                alert('Price over the authorization');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MATURITY = function() {
    try {

        var sTRX_NO; // Utility Auto Fix Comments
        document.MAINFORM.VENT_TEMP_NO1.value = '';
        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'BP') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_MATURITY_21', '1');
        }
        if (sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'OC') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_MATURITY_22', '1');
        }

        if (document.MAINFORM.VENT_TEMP_NO1.value != '') {
            alert('This deal has been done forfaiting!');
        }

        if (sTRX_NO == 'BP' || sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'OC') {
            if (document.MAINFORM.TEMP_DATE2.value != '') {
                alert('This BP/OC has been done settlement in the export module!');
            } else if (document.MAINFORM.TEMP_DATE2.value == '') {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinancRegister1_SYF_FFIT_MATURITY_23', '1');
                if (document.MAINFORM.TEMP_DATE3.value != '') {
                    alert('This BP/OC has been done settlement in the forfaiting module!');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
            SYF_FFIT_FFT_ALERT();
            document.MAINFORM.FFT_MARGIN_LOWEST.value = SYT_CCY_AMT('USD', document.MAINFORM.FFT_MARGIN_LOWEST.value);
            SYF_FFIT_MARGIN_RT();
            SYF_FFIT_FAV_REMARK();
            SYF_FFIT_CHANGEFIELD();
            SYF_FFIT_TEMP_CHAR1();
            SYF_FFIT_ACPT_CCY_1();
        }
        if (SYS_FUNCTION_TYPE == 'RE') {
            SYF_FFIT_FFT_ALERT();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            document.MAINFORM.FFT_MARGIN_LOWEST.value = SYT_CCY_AMT('USD', document.MAINFORM.FFT_MARGIN_LOWEST.value);
            SYF_FFIT_MARGIN_RT();
            SYF_FFIT_FAV_REMARK();
            SYF_FFIT_CHANGEFIELD();
        }
        SYT_relAuthBlack();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        //if(SYS_FUNCTION_TYPE=='PM' || SYS_FUNCTION_TYPE=='EC' )
        //{
        SYT_loadExchRate();
        //}
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SetRefNo = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR1 = function() {
    try {

        if ((document.MAINFORM.TEMP_CHAR1.value != '') && (document.MAINFORM.ACPT_CCY.value != document.MAINFORM.TEMP_CHAR1.value)) {
            alert('Commitment currency should be same with the last transaction currency. Please check the Acceptance CCY');
        }

        /*if((document.MAINFORM.TEMP_CHAR1.value!='')&&(document.MAINFORM.FINC_CCY.value!=document.MAINFORM.TEMP_CHAR1.value))
{
SYS_CheckError(document.MAINFORM.FINC_CCY,'Financing currency should be same with the last transaction currency. Please check the Financing CCY');
return false;
}
else
{
    return true;
}*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_DATE1 = function() {
    try {

        var graceDay; // Utility Auto Fix Comments
        graceDay = document.MAINFORM.GRACE_DAYS.value;
        if (graceDay == '') {
            graceDay = 0;
            document.MAINFORM.GRACE_DAYS.value = 0;
        }
        if (document.MAINFORM.MATURITY.value != '') {
            if ((document.MAINFORM.GRACE_FLG.value == '2') && (graceDay >= '0')) {
                SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, document.MAINFORM.MATURITY.value, graceDay, 'FINC_DUE_DT', 'A', 'Y', 'Y');
            } else if ((document.MAINFORM.GRACE_FLG.value == '1') && (graceDay >= '0')) {
                SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, document.MAINFORM.MATURITY.value, graceDay, 'FINC_DUE_DT', 'A', 'N', 'Y');
            }
        } else {
            document.MAINFORM.FINC_DUE_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_TEMP_NO1 = function() {
    try {

        if (document.MAINFORM.VENT_TEMP_NO1.value != '') {
            SYS_CheckError(document.MAINFORM.TRX_NO, 'This deal has been done forfaiting!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_inqFinDNA = function() {
    try {

        var SHeader; // Utility Auto Fix Comments
        var arrayEntry; // Utility Auto Fix Comments
        var bk_sw_obj; // Utility Auto Fix Comments
        var cust_nm_obj; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        /*
SHeader=new Array(6);
SHeader[0]='2';
SHeader[1]=document.MAINFORM.C_MAIN_REF.value;
SHeader[2]=document.MAINFORM.BLACK_INSTYP.value;
SHeader[3]=document.MAINFORM.CLERK_ID.value;
SHeader[4]=document.MAINFORM.GTS_BR_ID.value;
SHeader[5]='2';

arrayEntry=new Array();
i=-1;
bk_sw_obj, bk_nm_obj, bk_add_obj;
cust_nm_obj, cust_add_obj;

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
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.ACPT_AMT.value = 0;
        }
        SYF_FFIT_ACPT_CCY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_BK_CNTY_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_CNTY_TYPE();
        SYF_FFIT_FFT_MARGIN_LOWEST();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_BK_ID_onchange = function(event) {
    try {
        //();
        SYM_FFIT_Cal_ACPT_BK_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_BK_SW_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_SW();
        SYM_FFIT_Cal_ACPT_BK_SW_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_CCY_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_CHAR1();
        SYF_FFIT_ACPT_CCY_1();
        SYF_FFIT_ACPT_CCY();
        document.MAINFORM.FINC_CCY.value = document.MAINFORM.ACPT_CCY.value; //clark add for 66461
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_CNTY_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_FFT_MARGIN_LOWEST();
        EEHtml.fireEvent(document.MAINFORM.FFT_MARGIN_LOWEST, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_DEBT_INSMT_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_DEBT_INSMT_REMARK();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_EXPT_ID_onchange = function(event) {
    try {
        SYF_FFIT_BR_ID();
        EEHtml.fireEvent(document.MAINFORM.GTS_BR_ID, 'onchange');
        SYM_FFIT_Cal_EXPT_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FAV_RT_FLG_onchange = function(event) {
    try {
        SYF_FFIT_FAV_REMARK();
        SYF_FFIT_AUTH_POINT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FFT_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.FFT_BK_ID.value == '') {
            document.MAINFORM.FFT_BK_NM_ADD.value = '';
        } else {
            SYS_GetCUBK('FFT_BK_ID', 'FFT_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FFT_MARGIN_LOWEST_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_CNTY_check();
        SYF_FFIT_AUTH_MARGIN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.FINC_AMT.value)) {
            document.MAINFORM.FINC_AMT.value = 0;
        }
        SYF_FFIT_FINC_CCY();
        if (SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) == SYS_BeFloat(document.MAINFORM.FINC_AMT.value)) {
            alert("If finance amt is equal to Acceptance amt, can't be transfer");
        } else if (SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) < SYS_BeFloat(document.MAINFORM.FINC_AMT.value)) {
            alert("If finance amt should not be greater than Acceptance amt");
            document.MAINFORM.FINC_AMT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_CCY_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_CCY_1();
        SYF_FFIT_FINC_CCY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_DT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GET_DATA_FLG_onchange = function(event) {
    try {
        SYF_FFIT_MATURITY();
        SYF_FFIT_BP_ACPT_DT();
        SYF_FFIT_EXPT_ID();
        SYF_FFIT_ACPT_CCY();
        EEHtml.fireEvent(document.MAINFORM.EXPT_ID, 'onchange');
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRACE_DAYS_onchange = function(event) {
    try {
        SYF_FFIT_GRACE_DAYS();
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRACE_FLG_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GTS_BR_ID_onchange = function(event) {
    try {
        SYF_FFIT_GTS_PRVN_ID();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_HO_ACPT_BK_CNTY_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_CNTY_TYPE();
        EEHtml.fireEvent(document.MAINFORM.HO_ACPT_CNTY_TYPE, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_HO_ACPT_BK_ID_onchange = function(event) {
    try {
        SYF_FFIT_HO_ACPT_BK_NM();
        SYM_FFIT_Cal_HO_ACPT_BK_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_HO_ACPT_CNTY_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_FFT_MARGIN_LOWEST();
        EEHtml.fireEvent(document.MAINFORM.FFT_MARGIN_LOWEST, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MARGIN_RT_onchange = function(event) {
    try {
        SYF_FFIT_MARGIN_RT();
        SYF_FFIT_MARGIN_check();
        SYF_FFIT_AUTH_MARGIN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MATURITY_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_DATE2_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_DATE3_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
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
        SYF_FFIT_MATURITY();
        SYF_FFIT_BP_ACPT_DT();
        SYF_FFIT_EXPT_ID();
        SYF_FFIT_ACPT_CCY();
        EEHtml.fireEvent(document.MAINFORM.EXPT_ID, 'onchange');
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinancRegister1.js", e);
    }
}