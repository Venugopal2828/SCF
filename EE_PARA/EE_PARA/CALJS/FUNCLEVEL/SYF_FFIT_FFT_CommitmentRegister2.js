var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var HORECN = 'N';
var HOREHN = 'N';
var HOREHW = 'N';
var RECH = '';
var RECN = 'N';
var REHN = 'N';
var REHW = 'N';

csFuncLevelProto.SYF_FFIT_ACPT_BK_CNTY = function() {
    try {

        REHN = 'N';
        REHW = 'N';
        RECN = 'N';
        //document.MAINFORM.ACPT_CNTY_TYPE.value='';
        document.MAINFORM.FFT_MARGIN_LOWEST.value = '0';
        if (document.MAINFORM.ACPT_BK_CNTY.value != '') {
            //REHN = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_ACPT_BK_CNTY_0', '1');
            if (REHN == 'N') {
                SYT_ChangeFldClass(document.MAINFORM.HO_ACPT_BK_ID, 'M', 'N');
                document.MAINFORM.Submit4.disabled = false;
                //REHW = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_ACPT_BK_CNTY_1', '1');
            }

            if (REHN == 'Y') {
                SYT_ChangeFldClass(document.MAINFORM.HO_ACPT_BK_ID, 'P', 'N');
                document.MAINFORM.Submit4.disabled = true;
                document.MAINFORM.HO_ACPT_BK_ID.value = '';
                document.MAINFORM.HO_ACPT_BK_CNTY.value = '';
                //document.MAINFORM.HO_ACPT_CNTY_TYPE.value='';
            }

            if (REHW == 'Y') {
                //RECN = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_ACPT_BK_CNTY_2', '1');
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
                //document.MAINFORM.FFT_MARGIN_LOWEST.value = SYS_GetTableDataSpcial_Boc('DATA_FFTM_HW', " CNTY_CODE='" + document.MAINFORM.ACPT_BK_CNTY.value + "'", 'FFIT_BP', 'MIN');

            }
            if (SYS_BeFloat(document.MAINFORM.ACPT_CNTY_TYPE.value) == SYS_BeFloat(document.MAINFORM.HO_ACPT_CNTY_TYPE.value)) {
                //SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_ACPT_BK_CNTY_3', '1');

            }
            if (SYS_BeFloat(document.MAINFORM.ACPT_CNTY_TYPE.value) < SYS_BeFloat(document.MAINFORM.HO_ACPT_CNTY_TYPE.value)) {
                //SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_ACPT_BK_CNTY_4', '1');
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
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_BK_ID = function() {
    try {

        if (document.MAINFORM.ACPT_BK_ID.value != '') {
            //RECH = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_ACPT_BK_ID_5', '1', 'ACPT_BK_CNTY,ACPT_BK_SW');
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
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_BK_SW = function() {
    try {

        if (document.MAINFORM.ACPT_BK_SW.value != '') {
            RECH = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_ACPT_BK_SW_6', '1');
            if (RECH == 'N') {
                alert('SWIFT number is wrong. Please input again!');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.ACPT_BK_ID, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_AMT_CCY_RELATION = function() {
    try {

        if (document.MAINFORM.COMMIT_CCY.value != '' || document.MAINFORM.COMMIT_AMT.value != '') {
            document.MAINFORM.COMMIT_AMT.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.COMMIT_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
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
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_AUTH_MARGIN = function() {
    try {

        if ((SYS_BeFloat(document.MAINFORM.MARGIN_RT.value) > 0) && (SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value) > 0)) {
            if (SYS_BeFloat(document.MAINFORM.MARGIN_RT.value) < SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value)) {
                document.MAINFORM.AUTH_MARGIN.value = 'YES';
                //SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'M','N');
                //alert('Need price authorized');
            } else {
                document.MAINFORM.AUTH_MARGIN.value = 'NO';
                //document.MAINFORM.TEMP_CHAR5.value='';
                //SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'P','N');
            }
        } else if (SYS_BeFloat(document.MAINFORM.FFT_MARGIN_LOWEST.value) == 0 && SYS_BeFloat(document.MAINFORM.MARGIN_RT.value) > 0) {
            document.MAINFORM.AUTH_MARGIN.value = 'YES';
            //SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'M','N');
            //alert('Need price authorized');
        } else {
            document.MAINFORM.AUTH_MARGIN.value = 'NO';
            //document.MAINFORM.TEMP_CHAR5.value='';
            //SYT_ChangeFldClass(document.MAINFORM.TEMP_CHAR5,'P','N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CHANGEFIELD = function() {
    try {

        if ((document.MAINFORM.ACPT_BK_ID.value != '') && (document.MAINFORM.HO_ACPT_BK_ID.value == '')) {
            SYT_ChangeFldClass(document.MAINFORM.HO_ACPT_BK_ID, 'P', 'N');
            document.MAINFORM.Submit3.disabled = true;
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
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_DUE_DT = function() {
    try {

        var nDate; // Utility Auto Fix Comments
        nDate = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.COMMIT_DUE_DT.name);

        if (document.MAINFORM.COMMIT_DUE_DT.value != '' && nDate < 0) {
            SYS_CheckError(document.MAINFORM.COMMIT_DUE_DT, 'Maturity cannot earlier than the input date');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        //document.MAINFORM.AUTH_POINT1.value='1';
        document.MAINFORM.AUTH_MARGIN.value = '0';
        SYT_Check_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
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
        if (!SYF_FFIT_COMMIT_DUE_DT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
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
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_EXPT_ID = function() {
    try {

        if (document.MAINFORM.EXPT_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_EXPT_ID_7', '1');
        }
        if (document.MAINFORM.EXPT_ID.value == '') {
            document.MAINFORM.EXPT_NM.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
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
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GTS_PRVN_ID = function() {
    try {

        if (document.MAINFORM.GTS_BR_ID.value != '') {
            //SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_GTS_PRVN_ID_8', '1');
        } else {
            document.MAINFORM.GTS_BR_NM.value = '';
            document.MAINFORM.GTS_PRVN_ID.value = '';
            document.MAINFORM.GTS_DISTRICT_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_HO_ACPT_BK_CNTY = function() {
    try {

        HOREHN = 'N';
        HOREHW = 'N';
        HORECN = 'N';
        document.MAINFORM.HO_ACPT_CNTY_TYPE.value = '';
        document.MAINFORM.FFT_MARGIN_LOWEST.value = '0';
        if (document.MAINFORM.HO_ACPT_BK_CNTY.value != '') {
            HOREHW = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_HO_ACPT_BK_CNTY_9', '1');

            if (HOREHW == 'Y') {
                HORECN = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_HO_ACPT_BK_CNTY_10', '1');
                if (HORECN == 'N') {
                    alert('There is no country risk rating maintain');
                }
            }

            if (HOREHW == 'N') {
                alert('No information');
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
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_HO_ACPT_BK_CNTY_11', '1');

            }
            if (SYS_BeFloat(document.MAINFORM.ACPT_CNTY_TYPE.value) < SYS_BeFloat(document.MAINFORM.HO_ACPT_CNTY_TYPE.value)) {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_HO_ACPT_BK_CNTY_12', '1');
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
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_HO_ACPT_BK_ID = function() {
    try {

        if (document.MAINFORM.HO_ACPT_BK_ID.value != '') {
            RECH = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_HO_ACPT_BK_ID_13', '1');
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
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('FFIT_CP', 'SYF_FFIT_SetRefNo');
        document.MAINFORM.EVENT_TYPE.VALUE = 'CommitRegister2';
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        document.MAINFORM.COMMIT_CCY.value = 'USD';
        document.MAINFORM.FAV_RT_FLG.value = '2';
        //document.MAINFORM.AUTH_POINT1.value='0';
        document.MAINFORM.AUTH_MARGIN.value = '0';
        document.MAINFORM.GTS_BR_ID.value = SYT_Get_GtsBrId('1', '', '');
        SYF_FFIT_GTS_PRVN_ID();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MARGIN_RT = function() {
    try {

        if (document.MAINFORM.MARGIN_RT.value != '') {
            document.MAINFORM.MARGIN_RT.value = SYT_CCY_AMT('USD', document.MAINFORM.MARGIN_RT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYF_FFIT_FAV_REMARK();
            SYF_FFIT_CHANGEFIELD();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYF_FFIT_FAV_REMARK();
        }
        SYT_relAuthBlack();
        SYT_ChangeFldClass_New('FFIT_REMARK', 'O');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SELL_BK_ID = function() {
    try {

        if (document.MAINFORM.SELL_BK_ID.value != '') {
            RECH = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_SELL_BK_ID_14', '1');
            if (RECH == 'N') {
                alert('BK_ID is wrong!'); // Utility Auto Fix Comments
                document.MAINFORM.SELL_BK_NM.value = '';
                document.MAINFORM.SELL_BK_SW.value = ''; // Utility Auto Fix Comments
                document.MAINFORM.SELL_BK_ADD.value = '';
            }
        }

        if (document.MAINFORM.SELL_BK_ID.value == '') {

            document.MAINFORM.SELL_BK_NM.value = '';
            document.MAINFORM.SELL_BK_SW.value = ''; // Utility Auto Fix Comments
            document.MAINFORM.SELL_BK_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SELL_BK_SW = function() {
    try {

        if (document.MAINFORM.SELL_BK_SW.value != '') {
            RECH = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitmentRegister2_SYF_FFIT_SELL_BK_SW_15', '1');
            if (RECH == 'N') {
                alert('SWIFT number is wrong. Please input again!');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.SELL_BK_ID, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SetRefNo = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_inqFinDNA = function() {
    try {

        var SHeader; // Utility Auto Fix Comments
        var arrayEntry; // Utility Auto Fix Comments
        var bk_add_obj; // Utility Auto Fix Comments
        var bk_nm_obj; // Utility Auto Fix Comments
        var bk_sw_obj; // Utility Auto Fix Comments
        var cust_add_obj; // Utility Auto Fix Comments
        var cust_nm_obj; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        SHeader = new Array(6);
        SHeader[0] = '2';
        SHeader[1] = document.MAINFORM.C_MAIN_REF.value;
        SHeader[2] = document.MAINFORM.BLACK_INSTYP.value;
        SHeader[3] = document.MAINFORM.CLERK_ID.value;
        SHeader[4] = document.MAINFORM.GTS_BR_ID.value;
        SHeader[5] = '2';

        arrayEntry = new Array();
        i = -1;






        bk_sw_obj = EEHtml.getElementById('ACPT_BK_SW');
        bk_nm_obj = EEHtml.getElementById('ACPT_BK_NM');
        bk_add_obj = EEHtml.getElementById('ACPT_BK_ADD');
        if ((bk_sw_obj != null && bk_sw_obj.value != '') || (bk_nm_obj != null && bk_nm_obj.value != '') || (bk_add_obj != null && bk_add_obj.value != '')) {
            ++i;
            arrayEntry[i] = new Array();
            arrayEntry[i][0] = document.MAINFORM.BLACK_DATA_TYPE.value;
            arrayEntry[i][1] = '';
            arrayEntry[i][2] = '';
            arrayEntry[i][3] = bk_nm_obj != null ? bk_nm_obj.value : '';
            arrayEntry[i][4] = bk_add_obj != null ? bk_add_obj.value : '';
            arrayEntry[i][5] = '';
            arrayEntry[i][6] = '';
            arrayEntry[i][7] = bk_sw_obj != null ? bk_sw_obj.value : '';
            arrayEntry[i][8] = '';
            arrayEntry[i][9] = '';
            arrayEntry[i][10] = '';
            arrayEntry[i][11] = '';
        }

        cust_nm_obj = EEHtml.getElementById('EXPT_NM');
        if (cust_nm_obj != null && cust_nm_obj.value != '') {
            ++i;
            arrayEntry[i] = new Array();
            arrayEntry[i][0] = document.MAINFORM.BLACK_DATA_TYPE.value;
            arrayEntry[i][1] = '';
            arrayEntry[i][2] = '';
            arrayEntry[i][3] = cust_nm_obj != null ? cust_nm_obj.value : '';
            arrayEntry[i][4] = '';
            arrayEntry[i][5] = '';
            arrayEntry[i][6] = '';
            arrayEntry[i][7] = '';
            arrayEntry[i][8] = '';
            arrayEntry[i][9] = '';
            arrayEntry[i][10] = '';
            arrayEntry[i][11] = '';
        }

        cust_nm_obj = EEHtml.getElementById('IMPT_NM');
        if (cust_nm_obj != null && cust_nm_obj.value != '') {
            ++i;
            arrayEntry[i] = new Array();
            arrayEntry[i][0] = document.MAINFORM.BLACK_DATA_TYPE.value;
            arrayEntry[i][1] = '';
            arrayEntry[i][2] = '';
            arrayEntry[i][3] = cust_nm_obj != null ? cust_nm_obj.value : '';
            arrayEntry[i][4] = '';
            arrayEntry[i][5] = '';
            arrayEntry[i][6] = '';
            arrayEntry[i][7] = '';
            arrayEntry[i][8] = '';
            arrayEntry[i][9] = '';
            arrayEntry[i][10] = '';
            arrayEntry[i][11] = '';
        }

        bk_sw_obj = EEHtml.getElementById('SELL_BK_SW');
        bk_nm_obj = EEHtml.getElementById('SELL_BK_NM');
        bk_add_obj = EEHtml.getElementById('SELL_BK_ADD');
        if ((bk_sw_obj != null && bk_sw_obj.value != '') || (bk_nm_obj != null && bk_nm_obj.value != '') || (bk_add_obj != null && bk_add_obj.value != '')) {
            ++i;
            arrayEntry[i] = new Array();
            arrayEntry[i][0] = document.MAINFORM.BLACK_DATA_TYPE.value;
            arrayEntry[i][1] = '';
            arrayEntry[i][2] = '';
            arrayEntry[i][3] = bk_nm_obj != null ? bk_nm_obj.value : '';
            arrayEntry[i][4] = bk_add_obj != null ? bk_add_obj.value : '';
            arrayEntry[i][5] = '';
            arrayEntry[i][6] = '';
            arrayEntry[i][7] = bk_sw_obj != null ? bk_sw_obj.value : '';
            arrayEntry[i][8] = '';
            arrayEntry[i][9] = '';
            arrayEntry[i][10] = '';
            arrayEntry[i][11] = '';
        }
        inqFinDNA(SHeader, arrayEntry);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_BK_CNTY_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_CNTY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_BK_ID_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_ID();
        SYF_FFIT_ACPT_BK_CNTY();
        SYM_FFIT_Cal_ACPT_BK_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_BK_SW_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_SW();
        SYM_FFIT_Cal_ACPT_BK_SW_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_CNTY_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_CNTY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.COMMIT_AMT.value)) {
            document.MAINFORM.COMMIT_AMT.value = 0;
        }
        SYF_FFIT_AMT_CCY_RELATION();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_CCY_onchange = function(event) {
    try {
        SYF_FFIT_AMT_CCY_RELATION();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_DUE_DT_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_DEBT_INSMT_REMARK_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_DEBT_INSMT_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_DEBT_INSMT_REMARK();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_EXPT_ID_onchange = function(event) {
    try {
        SYF_FFIT_EXPT_ID();
        SYM_FFIT_Cal_EXPT_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FAV_RT_FLG_onchange = function(event) {
    try {
        //SYF_FFIT_AUTH_POINT1();
        SYF_FFIT_FAV_REMARK();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FFT_MARGIN_LOWEST_onchange = function(event) {
    try {
        SYF_FFIT_AUTH_MARGIN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_HO_ACPT_BK_CNTY_onchange = function(event) {
    try {
        SYF_FFIT_HO_ACPT_BK_CNTY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_HO_ACPT_BK_ID_onchange = function(event) {
    try {
        SYF_FFIT_HO_ACPT_BK_ID();
        SYF_FFIT_HO_ACPT_BK_CNTY();
        SYM_FFIT_Cal_HO_ACPT_BK_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_HO_ACPT_CNTY_TYPE_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_BK_CNTY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MARGIN_RT_onchange = function(event) {
    try {
        SYF_FFIT_MARGIN_RT();
        SYF_FFIT_AUTH_MARGIN();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SELL_BK_ID_onchange = function(event) {
    try {
        SYF_FFIT_SELL_BK_ID();
        SYM_FFIT_Cal_SELL_BK_ID_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SELL_BK_SW_onchange = function(event) {
    try {
        SYF_FFIT_SELL_BK_SW();
        SYM_FFIT_Cal_SELL_BK_SW_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
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
        DisExcpt("SYF_FFIT_FFT_CommitmentRegister2.js", e);
    }
}