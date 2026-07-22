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
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_CCY_1 = function() {
    try {

        if ((document.MAINFORM.ACPT_CCY.value != '') && (document.MAINFORM.FINC_CCY.value != '') && (document.MAINFORM.ACPT_CCY.value != document.MAINFORM.FINC_CCY.value)) {
            // alert('Commitment currency is different from the financing currency!');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACPT_CCY_AMT = function() {
    try {

        if ((document.MAINFORM.ACPT_CCY.value != '') || (document.MAINFORM.ACPT_AMT.value != '')) {
            document.MAINFORM.ACPT_AMT.value = SYT_CCY_AMT(document.MAINFORM.ACPT_CCY.value, document.MAINFORM.ACPT_AMT.value);
        }
        document.MAINFORM.FINC_AMT.value = SYS_BeFloat(document.MAINFORM.ACPT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
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
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
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
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_BP_ACPT_DT = function() {
    try {

        var sTRX_NO; // Utility Auto Fix Comments
        sTRX_NO = document.MAINFORM.TRX_NO.value.substring(0, 2);
        /* if(sTRX_NO == 'BP'||document.MAINFORM.GET_DATA_FLG.value=='BP'){
SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'AUTH_ACPT_DT','BP_ACPT_DT');
}*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_BUSI_SOURCE_FLG = function() {
    try {

        document.MAINFORM.BUSI_SOURCE_FLG.value = '2';
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.AUTH_POINT1.value = '1';
        SYF_FFIT_BA();
        SYT_BLACK_INS_TYP_REPLACE(document.MAINFORM.BLACK_TRX_TYPE, document.MAINFORM.BLACK_INSTYP);
        SYF_FFIT_inqFinDNA();
        SYF_FFIT_AUTH_BLACK();
        SYT_Check_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_ACPT_AMT()) {
            return false;
        }
        if (!SYF_FFIT_MATURITY()) {
            return false;
        }
        if (!SYF_FFIT_GRACE_DAYS()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
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
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
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
            } else if (document.MAINFORM.TEMP_DATE2.value == '') {
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_FinanceRegiTRF_SYF_FFIT_FFT_ALERT_0', '1');
                if (document.MAINFORM.TEMP_DATE3.value != '') {
                    alert('This BP/OC has been done settlement in the forfaiting module!');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FINCCCY_AMT_Relation = function() {
    try {

        if (document.MAINFORM.FINC_CCY.value != '') {
            document.MAINFORM.FINC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
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
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'FFTFRegister1';
        document.MAINFORM.FINC_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        document.MAINFORM.MULTI_DUE_DT_FLG.value = '2';
        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
        SYF_FFIT_VENT_TEMP_NO1();
        SYF_FFIT_ACPT_CCY_AMT();
        SYF_FFIT_TEMP_DATE1();
        SYF_FFIT_BP_ACPT_DT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MATURITY = function() {
    try {

        var sDAYS; // Utility Auto Fix Comments
        if ((document.MAINFORM.MATURITY.value != '') && (document.MAINFORM.FINC_DT.value != '')) {
            sDAYS = SYS_GetSubDays(document.MAINFORM.FINC_DT.name, document.MAINFORM.MATURITY.name); // Utility Auto Fix Comments
            if (sDAYS < '0') {
                SYS_CheckError(document.MAINFORM.MATURITY, 'Maturity earlier than the finance date!');
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MULTI_DUE_DT_FLG = function() {
    try {

        if (document.MAINFORM.MULTI_DUE_DT_FLG.value != '') {
            document.MAINFORM.MULTI_DUE_DT_FLG.value = '1';
        } else {
            document.MAINFORM.MULTI_DUE_DT_FLG.value = '2';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
            SYF_FFIT_FFT_ALERT();
            SYF_FFIT_TEMP_CHAR1();
            SYF_FFIT_ACPT_CCY_1();
            SYF_FFIT_FAV_RT_FLG();
        }
        if (SYS_FUNCTION_TYPE == 'RE') {
            SYF_FFIT_FFT_ALERT();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYF_FFIT_FAV_RT_FLG();
        }
        SYT_relAuthBlack();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR1 = function() {
    try {

        if ((document.MAINFORM.TEMP_CHAR1.value != '') && (document.MAINFORM.ACPT_CCY.value != document.MAINFORM.TEMP_CHAR1.value)) {
            alert('Commitment currency should be same with the last transaction currency. Please check the Acceptance CCY');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
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
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_TEMP_NO1 = function() {
    try {

        var sTRX_NO; // Utility Auto Fix Comments
        document.MAINFORM.VENT_TEMP_NO1.value = '';
        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        /* if(sTRX_NO=='AD'||document.MAINFORM.GET_DATA_FLG.value=='AD')
{
SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'LC_CCY;LC_BAL','TEMP_CHAR1;ACPT_AMT');
}
else if(sTRX_NO =='BP'||document.MAINFORM.GET_DATA_FLG.value=='BP')
{
SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'LC_CCY;NEGO_AMT;AUTH_ACPT_DT;FFT_REF;SETTLE_DT1','TEMP_CHAR1;ACPT_AMT;BP_ACPT_DT;VENT_TEMP_NO1;TEMP_DATE2');
}
else if(sTRX_NO=='OC'||document.MAINFORM.GET_DATA_FLG.value=='OC')
{
SYS_Get22TableData_Boc('EXCL_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'COLL_CCY;COLL_AMT;FFT_REF;SETTLE_DT1','TEMP_CHAR1;ACPT_AMT;VENT_TEMP_NO1;TEMP_DATE2');
}
else
{
document.MAINFORM.TEMP_CHAR1.value='';
document.MAINFORM.ACPT_AMT.value='0';
document.MAINFORM.VENT_TEMP_NO1.value='';
document.MAINFORM.BP_ACPT_DT.value='';
document.MAINFORM.TEMP_DATE2.value='';
}
document.MAINFORM.ACPT_CCY.value=document.MAINFORM.TEMP_CHAR1.value;
document.MAINFORM.FINC_CCY.value=document.MAINFORM.TEMP_CHAR1.value; */
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_TEMP_NO1_1 = function() {
    try {

        if (document.MAINFORM.VENT_TEMP_NO1.value != '') {
            SYS_CheckError(document.MAINFORM.TRX_NO, 'This deal has been done forfaiting!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
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
SHeader[0]=new String('2');
SHeader[1]=new String(document.MAINFORM.C_MAIN_REF.value);
SHeader[2]=new String(document.MAINFORM.BLACK_INSTYP.value);
SHeader[3]=new String(document.MAINFORM.CLERK_ID.value);
SHeader[4]=new String(document.MAINFORM.GTS_BR_ID.value);
SHeader[5]=new String('2');

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
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_AMT_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.ACPT_AMT.value)) {
            document.MAINFORM.ACPT_AMT.value = 0;
        }
        SYF_FFIT_ACPT_CCY_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_CCY_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_CHAR1();
        SYF_FFIT_ACPT_CCY_1();
        SYF_FFIT_ACPT_CCY_AMT();
        document.MAINFORM.FINC_CCY.value = document.MAINFORM.ACPT_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FAV_RT_FLG_onchange = function(event) {
    try {
        SYF_FFIT_FAV_RT_FLG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.FINC_AMT.value) > SYS_BeFloat(document.MAINFORM.ACPT_AMT.value)) {
            alert("Finance amount should not be greater than Acceptance amount");
            document.MAINFORM.FINC_AMT.value = '';
        }
        if (SYS_BeFloat(document.MAINFORM.FINC_AMT.value) < 0) {
            alert("Finance amount should not be negative amount");
            document.MAINFORM.FINC_AMT.value = '';
        }
        SYF_FFIT_FINCCCY_AMT_Relation();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_CCY_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_CCY_1();
        SYF_FFIT_FINCCCY_AMT_Relation();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_DT_onchange = function(event) {
    try {
        SYF_FFIT_MATURITY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GET_DATA_FLG_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRACE_DAYS_onchange = function(event) {
    try {
        SYF_FFIT_GRACE_DAYS();
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GRACE_FLG_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MATURITY_onchange = function(event) {
    try {
        SYF_FFIT_MATURITY();
        SYF_FFIT_TEMP_DATE1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MULTI_DUE_DT_FLG_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRX_NO_onchange = function(event) {
    try {
        SYF_FFIT_BP_ACPT_DT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_FinanceRegiTRF.js", e);
    }
}