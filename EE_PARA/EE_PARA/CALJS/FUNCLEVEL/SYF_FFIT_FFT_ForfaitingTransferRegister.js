var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_ACPTCCY_AMT_Relation = function() {
    try {

        if (document.MAINFORM.ACPT_CCY.value != '' || document.MAINFORM.ACPT_AMT.value != '') {
            document.MAINFORM.ACPT_AMT.value = SYT_CCY_AMT(document.MAINFORM.ACPT_CCY.value, document.MAINFORM.ACPT_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_AMT_Onchange = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) > 0) {
            document.MAINFORM.TRF_AMT.value = document.MAINFORM.ACPT_AMT.value;
        } else {
            document.MAINFORM.TRF_AMT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
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
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
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
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_Cal_TRF_AMT_TRFPCTOnchange = function() {
    try {

        if ((SYS_BeFloat(document.MAINFORM.TRF_PCT.value) > 0) && (SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) > 0)) {
            document.MAINFORM.TRF_AMT.value = SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) * SYS_BeFloat(document.MAINFORM.TRF_PCT.value) / 100;
        } else {
            document.MAINFORM.TRF_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
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
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_BLACK_INS_TYP_REPLACE(document.MAINFORM.BLACK_TRX_TYPE, document.MAINFORM.BLACK_INSTYP);
        SYF_FFIT_inqFinDNA();
        SYF_FFIT_AUTH_BLACK();
        SYT_Check_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_FINC_BAL()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINC_BAL = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FINC_BAL.value) <= '0') {
            SYS_CheckError(document.MAINFORM.C_MAIN_REF, 'Financing balance is zero. Cannot be transfer!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'FFTTRFRegister';
        document.MAINFORM.BUSI_SOURCE_FLG.value = '2';
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        SYF_FFIT_TRX_NO();
        SYF_FFIT_ACPTCCY_AMT_Relation();
        SYF_FFIT_ACPT_CCY_Onchange();
        SYF_FFIT_ACPT_AMT_Onchange();

        SYF_FFIT_Cal_TRF_PCT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
            SYF_FFIT_FINC_BAL();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
        }
        SYT_relAuthBlack();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        //if(SYS_FUNCTION_TYPE=='PM' || SYS_FUNCTION_TYPE=='EC' )
        //{
        SYT_loadExchRate();
        //}
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SetRefNo = function(ref) {
    try {

        //document.MAINFORM.C_MAIN_REF.value=ref;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation = function() {
    try {

        if (document.MAINFORM.TEMP_BP_CCY1.value != '' || document.MAINFORM.TEMP_BP_AMT1.value != '') {
            document.MAINFORM.TEMP_BP_AMT1.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY1.value, document.MAINFORM.TEMP_BP_AMT1.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation2 = function() {
    try {

        if (document.MAINFORM.TEMP_BP_CCY2.value != '' || document.MAINFORM.TEMP_BP_AMT2.value != '') {
            document.MAINFORM.TEMP_BP_AMT2.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY2.value, document.MAINFORM.TEMP_BP_AMT2.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation3 = function() {
    try {

        if (document.MAINFORM.TEMP_BP_CCY3.value != '' || document.MAINFORM.TEMP_BP_AMT3.value != '') {
            document.MAINFORM.TEMP_BP_AMT3.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY3.value, document.MAINFORM.TEMP_BP_AMT3.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation4 = function() {
    try {

        if (document.MAINFORM.TEMP_BP_CCY4.value != '' || document.MAINFORM.TEMP_BP_AMT4.value != '') {
            document.MAINFORM.TEMP_BP_AMT4.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY4.value, document.MAINFORM.TEMP_BP_AMT4.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation5 = function() {
    try {

        if (document.MAINFORM.TEMP_BP_CCY5.value != '' || document.MAINFORM.TEMP_BP_AMT5.value != '') {
            document.MAINFORM.TEMP_BP_AMT5.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY5.value, document.MAINFORM.TEMP_BP_AMT5.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation6 = function() {
    try {

        if (document.MAINFORM.TEMP_BP_CCY6.value != '' || document.MAINFORM.TEMP_BP_AMT6.value != '') {
            document.MAINFORM.TEMP_BP_AMT6.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY6.value, document.MAINFORM.TEMP_BP_AMT6.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation7 = function() {
    try {

        if (document.MAINFORM.TEMP_BP_CCY7.value != '' || document.MAINFORM.TEMP_BP_AMT7.value != '') {
            document.MAINFORM.TEMP_BP_AMT7.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY7.value, document.MAINFORM.TEMP_BP_AMT7.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation8 = function() {
    try {

        if (document.MAINFORM.TEMP_BP_CCY8.value != '' || document.MAINFORM.TEMP_BP_AMT8.value != '') {
            document.MAINFORM.TEMP_BP_AMT8.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY8.value, document.MAINFORM.TEMP_BP_AMT8.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMPCCYAMTRelation9 = function() {
    try {

        if (document.MAINFORM.TEMP_BP_CCY9.value != '' || document.MAINFORM.TEMP_BP_AMT9.value != '') {
            document.MAINFORM.TEMP_BP_AMT9.value = SYT_CCY_AMT(document.MAINFORM.TEMP_BP_CCY9.value, document.MAINFORM.TEMP_BP_AMT9.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRF_CCY_AMT_Relation = function() {
    try {

        if (document.MAINFORM.TRF_CCY.value != '' || document.MAINFORM.TRF_AMT.value != 0) {
            document.MAINFORM.TRF_AMT.value = SYT_CCY_AMT(document.MAINFORM.TRF_CCY.value, document.MAINFORM.TRF_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRX_NO = function() {
    try {

        /* var sTRX_NO=document.MAINFORM.TRX_NO.value.substring(0,2);
if(sTRX_NO=='BP'||document.MAINFORM.GET_DATA_FLG.value=='BP')
{
	SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'AVAL_BY;TENOR_DAYS','LC_TYPE;TENOR_DAYS');
}else if(sTRX_NO=='AD'||document.MAINFORM.GET_DATA_FLG.value=='AD')
{
	SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'AVAL_BY','LC_TYPE');
	
}*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
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
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.ACPT_AMT.value = 0;
        }
        SYF_FFIT_ACPTCCY_AMT_Relation();
        SYF_FFIT_ACPT_AMT_Onchange();
        SYF_FFIT_Cal_TRF_PCT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_CCY_onchange = function(event) {
    try {
        SYF_FFIT_ACPTCCY_AMT_Relation();
        SYF_FFIT_ACPT_CCY_Onchange();
        SYF_FFIT_TRF_CCY_AMT_Relation();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CLERK_ID_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_C_MAIN_REF_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GET_DATA_FLG_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT1_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT1.value)) {
            document.MAINFORM.TEMP_BP_AMT1.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT2_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT2.value)) {
            document.MAINFORM.TEMP_BP_AMT2.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation2();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT3_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT3.value)) {
            document.MAINFORM.TEMP_BP_AMT3.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation3();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT4_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT4.value)) {
            document.MAINFORM.TEMP_BP_AMT4.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation4();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT5_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT5.value)) {
            document.MAINFORM.TEMP_BP_AMT5.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation5();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT6_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT6.value)) {
            document.MAINFORM.TEMP_BP_AMT6.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation6();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT7_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT7.value)) {
            document.MAINFORM.TEMP_BP_AMT7.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation7();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT8_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT8.value)) {
            document.MAINFORM.TEMP_BP_AMT8.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation8();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_AMT9_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_BP_AMT9.value)) {
            document.MAINFORM.TEMP_BP_AMT9.value = 0;
        }
        SYF_FFIT_TEMPCCYAMTRelation9();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY1_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY2_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation2();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY3_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation3();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY4_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation4();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY5_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation5();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY6_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation6();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY7_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation7();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY8_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation8();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_BP_CCY9_onchange = function(event) {
    try {
        SYF_FFIT_TEMPCCYAMTRelation9();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRF_AMT_onchange = function(event) {
    try {
        SYF_FFIT_Cal_TRF_PCT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRF_PCT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) > 0) {
            document.MAINFORM.TRF_AMT.value = SYS_BeFloat(document.MAINFORM.TRF_PCT.value) * SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) / 100;
        }
        if (SYS_BeFloat(document.MAINFORM.TRF_PCT.value) > 100) {
            alert('Transfer percentage can not be greater than 100!');
            document.MAINFORM.TRF_AMT.value = '';
            document.MAINFORM.TRF_PCT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferRegister.js", e);
    }
}