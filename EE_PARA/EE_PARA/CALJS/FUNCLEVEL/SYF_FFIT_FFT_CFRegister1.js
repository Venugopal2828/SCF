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
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_CCY = function() {
    try {

        var sTRX_NO; // Utility Auto Fix Comments
        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'BP') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CFRegister1_SYF_FFIT_ACPT_CCY_0', '1');
        } else {
            if (sTRX_NO == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'AD') {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CFRegister1_SYF_FFIT_ACPT_CCY_1', '1');
                document.MAINFORM.TEMP_DATE2.value = '';
            } else {
                if (sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'OC') {
                    SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CFRegister1_SYF_FFIT_ACPT_CCY_2', '1');
                } else {
                    /* document.MAINFORM.ACPT_CCY.value = '';
                    document.MAINFORM.ACPT_AMT.value = '0';
                    document.MAINFORM.TEMP_DATE2.value = '';*/
                }

            }
        }

        if (sTRX_NO == 'BP' || sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'OC') {
            if (document.MAINFORM.TEMP_DATE2.value != '') {
                alert('This BP/OC has been done settlement in the export module!');
            } else if (document.MAINFORM.TEMP_DATE2.value == '') {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CFRegister1_SYF_FFIT_ACPT_CCY_3', '1');
                if (document.MAINFORM.TEMP_DATE3.value != '') {
                    alert('This BP/OC has been done settlement in the forfaiting module!');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_CCY_1 = function() {
    try {

        if (document.MAINFORM.ACPT_CCY.value != document.MAINFORM.FINC_CCY.value) {
            //alert('Commitment currency is different from the financing currency!');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_CCY_AMT = function() {
    try {

        if ((document.MAINFORM.ACPT_CCY.value != '') || (document.MAINFORM.ACPT_AMT.value != '')) {
            document.MAINFORM.ACPT_AMT.value = SYT_CCY_AMT(document.MAINFORM.ACPT_CCY.value, document.MAINFORM.ACPT_AMT.value);
        }
        document.MAINFORM.FINC_AMT.value = SYS_BeFloat(document.MAINFORM.ACPT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
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
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
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
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
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
            /*SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'C_MAIN_REF','BA_ADOC_NO');*/

            document.MAINFORM.BA_TRX_NO.value = document.MAINFORM.TRX_NO.value;
        } else {
            document.MAINFORM.BA_ADOC_NO.value = '';
            document.MAINFORM.BA_TRX_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CLOSE_COMMIT_DT = function() {
    try {

        if (document.MAINFORM.CLOSE_COMMIT_DT.value != '') {
            alert('Commitment has been closed!');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_BAL = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.COMMIT_BAL.value) <= '0') {
            SYS_CheckError(document.MAINFORM.COMMIT_NO, 'Insufficient commitment balance!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_DUE_DT = function() {
    try {

        var sDAYS; // Utility Auto Fix Comments
        sDAYS = SYS_GetSubDays(document.MAINFORM.COMMIT_DUE_DT.name, document.MAINFORM.TRX_DT.name);
        if (sDAYS > 0) {
            alert('Commitment has been overdue!');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_NO = function() {
    try {

        var sCOMMITNO = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CFRegister1_SYF_FFIT_COMMIT_NO_4', '1');
        document.MAINFORM.FINC_CCY.value = document.MAINFORM.COMMIT_CCY.value;
        if (sCOMMITNO == 'N') {
            alert('Without this commitment information');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_NO2_check = function() {
    try {

        var sCOMMITNO = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CFRegister1_SYF_FFIT_COMMIT_NO_4', '1'); //clark,for 66319
        if (sCOMMITNO == 'N') {
            SYS_CheckError(document.MAINFORM.COMMIT_NO, 'Without this commitment information!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CheckMaturity = function() {
    try {

        var nDAYS; // Utility Auto Fix Comments
        nDAYS = SYS_GetSubDays(document.MAINFORM.FINC_DT.name, document.MAINFORM.MATURITY.name);
        if (nDAYS < 0) {
            SYS_CheckError(document.MAINFORM.MATURITY, 'Maturity earlier than the finance date!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.BA_ADOC_NO.value = document.MAINFORM.TRX_NO.value;
        document.MAINFORM.AUTH_POINT1.value = '1';
        SYF_FFIT_BA();
        SYT_BLACK_INS_TYP_REPLACE(document.MAINFORM.BLACK_TRX_TYPE, document.MAINFORM.BLACK_INSTYP);
        SYF_FFIT_inqFinDNA();
        SYF_FFIT_AUTH_BLACK();
        SYT_Check_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_GRACE_DAYS()) {
            return false;
        }
        if (!SYF_FFIT_TRX_DT_check()) {
            return false;
        }
        if (!SYF_FFIT_COMMIT_NO2_check()) {
            return false;
        }
        if (!SYF_FFIT_CheckMaturity()) {
            return false;
        }
        /*if(!SYF_FFIT_VENT_TEMP_NO1())
{
return false;
}*/
        if (!SYF_FFIT_COMMIT_BAL()) {
            return false;
        }
        if (!SYF_FFIT_ACPT_AMT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
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
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
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
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_AMT = function() {
    try {

        if (document.MAINFORM.FINC_CCY.value != '' || document.MAINFORM.FINC_AMT.value != '') {
            document.MAINFORM.FINC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GRACE_DAYS = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.GRACE_DAYS.value) < '0') {
            SYS_CheckError(document.MAINFORM.GRACE_DAYS, 'Grace period cannot less than zero!');
            return false;
        } else if (SYS_BeFloat(document.MAINFORM.GRACE_DAYS.value) > '999') { //clark,for 66495
            SYS_CheckError(document.MAINFORM.GRACE_DAYS, 'Grace period should not more than 999!');
            document.MAINFORM.GRACE_DAYS.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYS_GetRefNo('FFIT_FT', 'SYF_FFIT_SetRefNo');
        document.MAINFORM.EVENT_TYPE.value = 'CFRegi1';
        document.MAINFORM.FINC_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        document.MAINFORM.TRX_NO.value = '';
        document.MAINFORM.FINC_CCY.value = document.MAINFORM.COMMIT_CCY.value;
        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
        document.MAINFORM.COMMIT_BAL.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.COMMIT_BAL.value);
        SYF_FFIT_TEMP_CHAR3();
        //SYF_FFIT_COMMIT_NO();
        //SYF_FFIT_MARGIN_RT();
        SYF_FFIT_AUTH_POINT1();
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MARGIN_RT = function() {
    try {

        var field_array; // Utility Auto Fix Comments
        var field_string; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CFRegister1_SYF_FFIT_MARGIN_RT_5', '1');

        field_string = 'MARGIN_RT,COMMIT_FEE_RT,CLOSE_COMMIT_DT,COMMIT_START_DT,COMMIT_DAYS,GOODS_NM,DRAFTS_FLG,TIME_FEE_FLG,MATURITY,IMPT_NM,GTS_BR_ID,GTS_PRVN_ID,GTS_DISTRICT_CODE,LC_NO,VIP_LEVEL,TENOR_DAYS,FFT_TRF_FLG';
        field_array = field_string.split(',');
        for (i = 0; i < field_array.length; i++) { // Utility Auto Fix Comments
            if (MAINFORM.elements[field_array[i]].value == 'null') {
                MAINFORM.elements[field_array[i]].value = '';
            }
        }

        document.MAINFORM.MARGIN_RT.value = SYT_CCY_AMT('USD', document.MAINFORM.MARGIN_RT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MATURITY = function() {
    try {

        var sTRX_NO; // Utility Auto Fix Comments
        document.MAINFORM.VENT_TEMP_NO1.value = '';
        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'BP') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CFRegister1_SYF_FFIT_MATURITY_6', '1');
        }
        if (sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'OC') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CFRegister1_SYF_FFIT_MATURITY_7', '1');
        }

        if (document.MAINFORM.VENT_TEMP_NO1.value != '') {
            alert('This deal has been done forfaiting!');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
            SYF_FFIT_TRX_NO();
            SYF_FFIT_FFT_ALERT();
            SYF_FFIT_COMMIT_BAL();
            SYF_FFIT_CLOSE_COMMIT_DT();
            SYF_FFIT_COMMIT_DUE_DT();
            SYF_FFIT_FAV_REMARK();
        }
        if (SYS_FUNCTION_TYPE == 'RE') {
            SYF_FFIT_TRX_NO();
            SYF_FFIT_FFT_ALERT();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYF_FFIT_FAV_REMARK();
        }
        SYT_relAuthBlack();

        document.MAINFORM.MATURITY.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SetRefNo = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR3 = function() {
    try {

        if (document.MAINFORM.GET_DATA_FLG.value != '') {
            document.MAINFORM.TEMP_CHAR3.value = document.MAINFORM.GET_DATA_FLG.value;
        }
        document.MAINFORM.GET_DATA_FLG.value = '0';
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
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
                SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, document.MAINFORM.MATURITY.value, graceDay, 'TEMP_DATE1', 'A', 'Y', 'Y');
            } else if ((document.MAINFORM.GRACE_FLG.value == '1') && (graceDay >= '0')) {
                SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, document.MAINFORM.MATURITY.value, graceDay, 'TEMP_DATE1', 'A', 'N', 'Y');
            }
        } else {
            document.MAINFORM.TEMP_DATE1.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRX_DT_check = function() {
    try {

        var nDAYS; // Utility Auto Fix Comments
        nDAYS = SYS_GetSubDays(document.MAINFORM.COMMIT_DUE_DT.name, document.MAINFORM.TRX_DT.name);
        if (nDAYS > 0 || document.MAINFORM.CLOSE_COMMIT_DT.value != '') {
            SYS_CheckError(document.MAINFORM.COMMIT_NO, 'Commitment has been closed or over due');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRX_NO = function() {
    try {

        var sA; // Utility Auto Fix Comments
        var sAD; // Utility Auto Fix Comments
        var sTRXNO; // Utility Auto Fix Comments
        sTRXNO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        sAD = SYM_FFIT_TRX_NO(document.MAINFORM.TEMP_CHAR1.value);
        if ((sTRXNO == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'BP') && (sAD == 'AD' || document.MAINFORM.TEMP_CHAR3.value == 'AD')) {
            /*sA=SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TEMP_CHAR1.value+"'",'C_MAIN_REF','TEMP_CHAR2');*/
            if (sA == 'Y') {
                /* SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'C_MAIN_REF','TEMP_CHAR2');*/
                if (document.MAINFORM.TEMP_CHAR2.value != document.MAINFORM.TEMP_CHAR1.value) {
                    alert('This reference number is invalid!');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
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
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
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
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.ACPT_AMT.value = 0;
        }
        SYF_FFIT_ACPT_CCY_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_CCY_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_CCY_1();
        SYF_FFIT_ACPT_CCY_AMT();
        document.MAINFORM.FINC_CCY.value = document.MAINFORM.ACPT_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CLOSE_COMMIT_DT_onchange = function(event) {
    try {
        SYF_FFIT_CLOSE_COMMIT_DT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_BAL_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_DUE_DT_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_NO_onchange = function(event) {
    try {
        SYF_FFIT_MARGIN_RT();
        SYF_FFIT_COMMIT_NO();
        EEHtml.fireEvent(document.MAINFORM.FINC_CCY, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.COMMIT_DUE_DT, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.CLOSE_COMMIT_DT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FAV_RT_FLG_onchange = function(event) {
    try {
        SYF_FFIT_FAV_REMARK();
        SYF_FFIT_AUTH_POINT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.FINC_AMT.value)) {
            document.MAINFORM.FINC_AMT.value = 0;
        }
        SYF_FFIT_FINC_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_CCY_onchange = function(event) {
    try {
        SYF_FFIT_FINC_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_DT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GET_DATA_FLG_onchange = function(event) {
    try {
        SYF_FFIT_TRX_NO();
        SYF_FFIT_MATURITY();
        SYF_FFIT_ACPT_CCY();
        SYF_FFIT_ACPT_CCY_AMT();
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRACE_DAYS_onchange = function(event) {
    try {
        SYF_FFIT_GRACE_DAYS();
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRACE_FLG_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MARGIN_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MATURITY_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
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
        SYF_FFIT_MATURITY();
        SYF_FFIT_ACPT_CCY();
        SYF_FFIT_ACPT_CCY_AMT();
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CFRegister1.js", e);
    }
}