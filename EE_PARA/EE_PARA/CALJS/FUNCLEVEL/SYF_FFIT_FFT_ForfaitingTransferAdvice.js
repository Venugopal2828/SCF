var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_ACPTCCY_AMT_Relation = function() {
    try {

        if (document.MAINFORM.ACPT_CCY.value != '' || SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) != '') {
            document.MAINFORM.ACPT_AMT.value = SYT_CCY_AMT(document.MAINFORM.ACPT_CCY.value, document.MAINFORM.ACPT_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_AMT_Onchange = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.ACPT_AMT.value) != 0) {
            document.MAINFORM.TRF_AMT.value = document.MAINFORM.ACPT_AMT.value;
        } else {
            document.MAINFORM.TRF_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
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
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
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
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_BuyAmt = function() {
    try {

        var add;
        if (document.MAINFORM.TRF_CCY.value != '') {
            document.MAINFORM.BUY_AMT1.value = SYT_CCY_AMT(document.MAINFORM.TRF_CCY.value, document.MAINFORM.BUY_AMT1.value);
            document.MAINFORM.BUY_AMT2.value = SYT_CCY_AMT(document.MAINFORM.TRF_CCY.value, document.MAINFORM.BUY_AMT2.value);
            document.MAINFORM.BUY_AMT3.value = SYT_CCY_AMT(document.MAINFORM.TRF_CCY.value, document.MAINFORM.BUY_AMT3.value);
            add = SYS_BeFloat(document.MAINFORM.BUY_AMT1.value) + SYS_BeFloat(document.MAINFORM.BUY_AMT2.value) + SYS_BeFloat(document.MAINFORM.BUY_AMT3.value);
            if (SYS_BeFloat(document.MAINFORM.TRF_AMT.value) < add) {
                alert("The sum of Buy amt should not be greater than transfer amt");
                document.MAINFORM.BUY_AMT1.value = '';
                document.MAINFORM.BUY_AMT2.value = '';
                document.MAINFORM.BUY_AMT3.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CHECK = function() {
    try {

        if ((document.MAINFORM.BUY_BK_NM1.value != '') && (SYS_BeFloat(document.MAINFORM.BUY_AMT1.value) == '0')) {
            SYS_CheckError(document.MAINFORM.BUY_AMT1, 'Please input the transfer balance of transfer bank 1!');
            return false;
        } else if ((document.MAINFORM.BUY_BK_NM2.value != '') && (SYS_BeFloat(document.MAINFORM.BUY_AMT2.value) == '0')) {
            SYS_CheckError(document.MAINFORM.BUY_AMT2, 'Please input the transfer balance of transfer bank 2!');
            return false;
        } else if ((document.MAINFORM.BUY_BK_NM3.value != '') && (SYS_BeFloat(document.MAINFORM.BUY_AMT3.value) == '0')) {
            SYS_CheckError(document.MAINFORM.BUY_AMT3, 'Please input the transfer balance of transfer bank 3!');
            return false;
        } else if ((document.MAINFORM.BUY_BK_NM2.value == '') && (SYS_BeFloat(document.MAINFORM.BUY_AMT2.value) != '0')) {
            SYS_CheckError(document.MAINFORM.BUY_BK_NM2, 'Please input the transfer bank2 ID!');
            return false;
        } else if ((document.MAINFORM.BUY_BK_NM3.value == '') && (SYS_BeFloat(document.MAINFORM.BUY_AMT3.value) != '0')) {
            SYS_CheckError(document.MAINFORM.BUY_BK_NM3, 'Please input the transfer bank3 ID!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_FFIT_TEMP_CHAR2();
        document.MAINFORM.FFT_TRF_FLG.value = '1';
        SYT_BLACK_INS_TYP_REPLACE(document.MAINFORM.BLACK_TRX_TYPE, document.MAINFORM.BLACK_INSTYP);
        SYF_FFIT_inqFinDNA();
        SYF_FFIT_AUTH_BLACK();
        SYT_Check_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_CHECK()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GTS_BR_NM_C = function() {
    try {

        if (document.MAINFORM.GTS_BR_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_ForfaitingTransferAdvice_SYF_FFIT_GTS_BR_NM_C_0', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'TransferAdvice';
        document.MAINFORM.TRF_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        SYF_FFIT_TRF_CCY_AMTRelation();
        SYF_FFIT_ACPTCCY_AMT_Relation();
        SYF_FFIT_BuyAmt();
        // SYF_FFIT_GTS_BR_NM_C();

        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
        }
        SYT_relAuthBlack();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_SetRefNo = function(ref) {
    try {


    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR2 = function() {
    try {

        /* var sTRX_NO=SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
if(sTRX_NO=='BP'||document.MAINFORM.GET_DATA_FLG.value=='BP')
{
var sA=SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'LC_NO','TEMP_AC_NO1');
     if(sA=='Y')
     {
      document.MAINFORM.TEMP_CHAR2.value='BP';
     }      
}
else if(sTRX_NO=='OC'||document.MAINFORM.GET_DATA_FLG.value=='OC')
{
var sB=SYS_Get22TableData_Boc('EXCL_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'INV_NO','TEMP_AC_NO1');
     if(sB=='Y')
     {
      document.MAINFORM.TEMP_CHAR2.value='OC';
     } 
}
else if(sTRX_NO=='AD'||document.MAINFORM.GET_DATA_FLG.value=='AD')
{
var sC=SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'LC_NO','TEMP_AC_NO1');
      if(sC=='Y') 
      {
       document.MAINFORM.TEMP_CHAR2.value='AD';
      } 
}
else
{
document.MAINFORM.TEMP_CHAR2.value='';
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRF_CCY_AMTRelation = function() {
    try {

        if (document.MAINFORM.TRF_CCY.value != '' || document.MAINFORM.TRF_AMT.value != '') {
            document.MAINFORM.TRF_AMT.value = SYT_CCY_AMT(document.MAINFORM.TRF_CCY.value, document.MAINFORM.TRF_AMT.value);
        }
        if (document.MAINFORM.TRF_AMT.value > document.MAINFORM.ACPT_AMT.value) {
            alert("The TRF amount should not be greater than Acceptance amount");
            document.MAINFORM.TRF_AMT.value = document.MAINFORM.ACPT_AMT.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
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
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_AMT_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_AMT_Onchange();
        SYF_FFIT_ACPTCCY_AMT_Relation();
        EEHtml.fireEvent(document.MAINFORM.TRF_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_CCY_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.TRF_CCY, 'onchange');
        SYF_FFIT_ACPTCCY_AMT_Relation();
        SYF_FFIT_ACPT_CCY_Onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUY_AMT1_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.BUY_AMT1.value)) {
            document.MAINFORM.BUY_AMT1.value = 0;
        }
        SYF_FFIT_BuyAmt();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUY_AMT2_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.BUY_AMT2.value)) {
            document.MAINFORM.BUY_AMT2.value = 0;
        }
        SYF_FFIT_BuyAmt();
        EEHtml.fireEvent(document.MAINFORM.BUY_AMT1, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUY_AMT3_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.BUY_AMT3.value)) {
            document.MAINFORM.BUY_AMT3.value = 0;
        }
        SYF_FFIT_BuyAmt();
        EEHtml.fireEvent(document.MAINFORM.BUY_AMT1, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRF_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TRF_AMT.value)) {
            document.MAINFORM.TRF_AMT.value = 0;
        }
        SYF_FFIT_TRF_CCY_AMTRelation();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRF_CCY_onchange = function(event) {
    try {
        SYF_FFIT_BuyAmt();
        EEHtml.fireEvent(document.MAINFORM.BUY_AMT1, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_ForfaitingTransferAdvice.js", e);
    }
}