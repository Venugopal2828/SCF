var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_BAL_FFT = function() {
    try {

        /*
var A=getFeeField('CloseCommitmentChg','NOW');
if(A[8]=='TRANSACTION')
{      
document.MAINFORM.BAL_FFT.value=A[4];  
document.MAINFORM.DISTRICT_CODE.value=A[3];      	
}
else
{
document.MAINFORM.BAL_FFT.value='0'; 
document.MAINFORM.DISTRICT_CODE.value=document.MAINFORM.COMMIT_CCY.value;
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CLOSE_COMMIT_DT = function() {
    try {

        document.MAINFORM.CLOSE_COMMIT_DT.value = document.MAINFORM.TRX_DT.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_AMT = function() {
    try {

        /*
if((document.MAINFORM.COMMIT_TERM_FLAG.value=='1'||document.MAINFORM.COMMIT_TERM_FLAG.value=='2')&&(SYS_BeFloat(document.MAINFORM.TEMP_INT1.value)>0))
{
getCommitmentFEE('CommitmentFee(Close Commitment)','CloseCommitmentChg',document.MAINFORM.TEMP_AMT.value,document.MAINFORM.COMMIT_FEE_RT.value,document.MAINFORM.TEMP_INT1.value,document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.COMMIT_CCY.value,'Y',document.MAINFORM.VENT_TEMP_NO1_S.value+';'+document.MAINFORM.PRODUCT_CODE.value);
}
else
{
getCommitmentFEE('CommitmentFee(Close Commitment)','CloseCommitmentChg',document.MAINFORM.TEMP_AMT.value,document.MAINFORM.COMMIT_FEE_RT.value,document.MAINFORM.TEMP_INT1.value,document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.COMMIT_CCY.value,'N',document.MAINFORM.VENT_TEMP_NO1_S.value+';'+document.MAINFORM.PRODUCT_CODE.value);
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_DAYS = function() {
    try {

        /*if((document.MAINFORM.COMMIT_TERM_FLAG.value=='1')&&(document.MAINFORM.COMMIT_START_DT.value!=''))
{
document.MAINFORM.COMMIT_DAYS.value=SYS_GetSubDays(document.MAINFORM.COMMIT_START_DT.name,document.MAINFORM.TRX_DT.name);
}
else{
       if((document.MAINFORM.COMMIT_TERM_FLAG.value=='2')&&(document.MAINFORM.COMMIT_START_DT.value!='')&&(document.MAINFORM.COMMIT_DUE_DT.value!=''))
       {
       document.MAINFORM.COMMIT_DAYS.value=SYS_GetSubDays(document.MAINFORM.COMMIT_START_DT.name,document.MAINFORM.COMMIT_DUE_DT.name);
       }
}*/
        if (document.MAINFORM.COMMIT_TERM_FLAG.value == '1') {
            if (document.MAINFORM.NEW_VALUE_DT.value != '') {
                document.MAINFORM.TEMP_INT1.value = SYS_GetSubDays(document.MAINFORM.NEW_VALUE_DT.name, document.MAINFORM.TRX_DT.name);
            } else if (document.MAINFORM.COMMIT_START_DT.value != '') {
                document.MAINFORM.TEMP_INT1.value = SYS_GetSubDays(document.MAINFORM.COMMIT_START_DT.name, document.MAINFORM.TRX_DT.name);
            }
        } else if (document.MAINFORM.COMMIT_TERM_FLAG.value == '2') {
            if (document.MAINFORM.NEW_VALUE_DT.value != '') {
                document.MAINFORM.TEMP_INT1.value = SYS_GetSubDays(document.MAINFORM.NEW_VALUE_DT.name, document.MAINFORM.COMMIT_DUE_DT.name);
            } else if (document.MAINFORM.COMMIT_START_DT.value != '') {
                document.MAINFORM.TEMP_INT1.value = SYS_GetSubDays(document.MAINFORM.COMMIT_START_DT.name, document.MAINFORM.COMMIT_DUE_DT.name);
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.COMMIT_BAL.value = '0';
        SYF_FFIT_CLOSE_COMMIT_DT();
        document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.PRODUCT_CODE.value;
        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        SYF_FFIT_BAL_FFT();
        //getLedgCode(document.MAINFORM.COMMIT_NO.value);
        //ConfirmBusinessCall_COMM();
        //SYT_Check_AMT();
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYT_WHZH_TRX_CODE_CHECK()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'CloseCommit1';
        document.MAINFORM.TEMP_AMT.value = document.MAINFORM.COMMIT_BAL.value;
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';

        //InitChg('CloseCommitmentChg','OtherChgsMatured');
        //InitValues_COMM();
        //InitFieldEvent_COMM();
        //TRX_CCY_COMM(document.MAINFORM.COMMIT_CCY.value);
        //SYT_CommPageConfirm();
        //CommCustId(document.MAINFORM.C_MAIN_REF.value,'CHN',document.MAINFORM.EXPT_ID.value);

        SYF_FFIT_VENT_TEMP_NO1();
        document.MAINFORM.COMMIT_AMT.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.COMMIT_AMT.value);
        document.MAINFORM.COMMIT_BAL.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.COMMIT_BAL.value);
        document.MAINFORM.OTHER_CHG.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.OTHER_CHG.value);
        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_OTHER_CHG = function() {
    try {

        document.MAINFORM.OTHER_CHG.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.OTHER_CHG.value);
        /*
if(SYS_BeFloat(document.MAINFORM.OTHER_CHG.value)>0)
{
//getOtherFEE('PostCable(close)','OtherChgsMatured',document.MAINFORM.OTHER_CHG.value,document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.COMMIT_CCY.value,'Y',CABLEAC+';'+document.MAINFORM.PRODUCT_CODE.value);
}
else
{
//getOtherFEE('PostCable(close)','OtherChgsMatured',document.MAINFORM.OTHER_CHG.value,document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.COMMIT_CCY.value,'N',CABLEAC+';'+document.MAINFORM.PRODUCT_CODE.value);
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYF_FFIT_CLOSE_COMMIT_DT();
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
            SYT_GetCustAcNo(document.MAINFORM.EXPT_ID.value);
            //ChgAcNoInitValue();
            SYF_FFIT_COMMIT_DAYS();
            //SYF_FFIT_COMMIT_AMT();
            SYT_ExchRate_FIX_PENDING();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
        }

        Chg.Screen.mapLocalCust("EXPT_ID", "EXPT_NM");
        Chg.Screen.mapForeignCust("EXPT_ID", "EXPT_NM");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {

            var arr = ['CLOSE_COMMIT_CHG', 'OTHER_CHG_MATURED'];
            var ccy = document.MAINFORM.COMMIT_CCY.value;
            var amt = document.MAINFORM.COMMIT_BAL.value;
            Chg.calculate(arr, ccy, amt, '');
        }
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        //if(SYS_FUNCTION_TYPE=='PM' || SYS_FUNCTION_TYPE=='EC' )
        //{
        SYT_loadExchRate();
        //}
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_TEMP_NO1 = function() {
    try {

        /*var sTRX_NO=SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
if(sTRX_NO=='BP'||document.MAINFORM.GET_DATA_FLG.value=='BP')
{
var sA=SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'LC_NO','TEMP_AC_NO1');    
}
else if(sTRX_NO=='OC'||document.MAINFORM.GET_DATA_FLG.value=='OC')
{
var sB=SYS_Get22TableData_Boc('EXCL_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'INV_NO','TEMP_AC_NO1');
}
else if(sTRX_NO=='AD'||document.MAINFORM.GET_DATA_FLG.value=='AD')
{
var sC=SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'LC_NO','TEMP_AC_NO1');
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_DAYS_onchange = function(event) {
    try {
        //SYF_FFIT_COMMIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_TERM_FLAG_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_DAYS();
        EEHtml.fireEvent(document.MAINFORM.COMMIT_DAYS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_OTHER_CHG_onchange = function(event) {
    try {
        SYF_FFIT_OTHER_CHG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRX_NO_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_CloseCommit1.js", e);
    }
}