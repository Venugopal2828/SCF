var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_AUTH_BLACK = function() {
    try {

        if (document.MAINFORM.C_FIN_ALERT_STATUS.value == 'S') {
            document.MAINFORM.AUTH_BLACK.value = 0;
        } else if (document.MAINFORM.C_FIN_ALERT_STATUS.value == 'F') {
            document.MAINFORM.AUTH_BLACK.value = 1;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_BP_ACPT_DT = function() {
    try {

        var sTRX_NO = document.MAINFORM.TRX_NO.value.substring(0, 2);
        /* if(sTRX_NO =='BP'||document.MAINFORM.GET_DATA_FLG.value=='BP'){
SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'AUTH_ACPT_DT','BP_ACPT_DT');
} */
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_BUSI_SOURCE_FLG = function() {
    try {

        document.MAINFORM.BUSI_SOURCE_FLG.value = '2';
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_AMT = function() {
    try {

        if (document.MAINFORM.COMMIT_CCY.value != '') {
            document.MAINFORM.COMMIT_AMT.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.COMMIT_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_DUE_DT = function() {
    try {

        var sA = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.COMMIT_DUE_DT.name);
        if (SYS_BeFloat(sA) < 0) {
            SYS_CheckError(document.MAINFORM.COMMIT_DUE_DT, '？？？？？？？？？？!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_C_MAIN_REF = function() {
    try {

        var sMAIN_REF = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        var sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sMAIN_REF == 'FT' && (document.MAINFORM.FINANCE_FLG.value == '1')) {
            alert('FINANCE_FLG is 1');
        }
        if (sMAIN_REF == 'CT' && (sTRX_NO == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'AD')) {
            var A = '';
            /*  var A=SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'COMMIT_NO','TEMP_CHAR4');*/
            if (A == 'Y') {
                var B = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_CommitRegiTRF_SYF_FFIT_C_MAIN_REF_0', '1');
                if (B == 'Y') {
                    if (SYS_BeFloat(document.MAINFORM.TEMP_AMT.value) > '0') {
                        alert('Amount >0');
                    }
                } else {
                    document.MAINFORM.TEMP_CHAR4.value = '';
                    document.MAINFORM.TEMP_AMT.value = '0';
                }
            } else {
                document.MAINFORM.TEMP_CHAR4.value = '';
                document.MAINFORM.TEMP_AMT.value = '0';
            }
        } else {
            document.MAINFORM.TEMP_CHAR4.value = '';
            document.MAINFORM.TEMP_AMT.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.AUTH_POINT1.value = '1';
        SYT_BLACK_INS_TYP_REPLACE(document.MAINFORM.BLACK_TRX_TYPE, document.MAINFORM.BLACK_INSTYP);
        SYF_FFIT_inqFinDNA();
        SYF_FFIT_AUTH_BLACK();
        SYT_Check_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_COMMIT_DUE_DT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FAV_RT_FLG = function() {
    try {

      if (document.MAINFORM.FAV_RT_FLG.value == 'YES') { 
            SYT_ChangeFldClass(document.MAINFORM.NEW_REMARK, 'M', 'Y');
            document.MAINFORM.AUTH_POINT1.value = '1';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_REMARK, 'O', 'Y');
            document.MAINFORM.AUTH_POINT1.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'CommitRegiTRF';
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
        SYF_FFIT_BP_ACPT_DT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_LC_BAL = function() {
    try {

        var sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        /* if(sTRX_NO=='AD'||document.MAINFORM.GET_DATA_FLG.value=='AD')
{
SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'LC_BAL','LC_BAL');
} */
        if (SYS_BeFloat(document.MAINFORM.COMMIT_AMT.value) > 0) {
            var amt = SYS_BeFloat(document.MAINFORM.COMMIT_AMT.value) - SYS_BeFloat(document.MAINFORM.LC_BAL.value);
            if ((sTRX_NO == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'AD') && (amt > 0)) {
                alert('Amount more than 0');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MARGIN_RT = function() {
    try {

        if (document.MAINFORM.MARGIN_RT.value != '') {
            document.MAINFORM.MARGIN_RT.value = SYT_CCY_AMT('USD', document.MAINFORM.MARGIN_RT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
            SYF_FFIT_LC_BAL();
            SYF_FFIT_C_MAIN_REF();
            SYF_FFIT_FAV_RT_FLG();
        }
        if (SYS_FUNCTION_TYPE == 'RE') {
            SYF_FFIT_C_MAIN_REF();
            SYF_FFIT_LC_BAL();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYF_FFIT_FAV_RT_FLG();
        }
        SYT_relAuthBlack();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_inqFinDNA = function() {
    try {

        /*
var SHeader=new Array(6);
SHeader[0]=new String('2');
SHeader[1]=new String(document.MAINFORM.C_MAIN_REF.value);
SHeader[2]=new String(document.MAINFORM.BLACK_INSTYP.value);
SHeader[3]=new String(document.MAINFORM.CLERK_ID.value);
SHeader[4]=new String(document.MAINFORM.GTS_BR_ID.value);
SHeader[5]=new String('2');

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
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.COMMIT_AMT.value)) {
            document.MAINFORM.COMMIT_AMT.value = 0;
        }
        SYF_FFIT_COMMIT_AMT();
        SYF_FFIT_LC_BAL();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_CCY_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_DUE_DT_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FAV_RT_FLG_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_DUE_DT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MARGIN_RT_onchange = function(event) {
    try {
        SYF_FFIT_MARGIN_RT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CommitRegiTRF.js", e);
    }
}