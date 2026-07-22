var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_COMMIT_AMT = function() {
    try {

        /*
if(document.MAINFORM.COMMIT_DAYS.value>'0')
{
getCommitmentFEE('Commitment Fee','CommitmentChg',document.MAINFORM.COMMIT_AMT.value,document.MAINFORM.COMMIT_FEE_RT.value,document.MAINFORM.COMMIT_DAYS.value,document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.COMMIT_CCY.value,'Y',document.MAINFORM.VENT_TEMP_NO1_S.value+';'+document.MAINFORM.PRODUCT_CODE.value);
}
else
{
getCommitmentFEE('Commitment Fee','CommitmentChg',document.MAINFORM.COMMIT_AMT.value,document.MAINFORM.COMMIT_FEE_RT.value,document.MAINFORM.COMMIT_DAYS.value,document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.COMMIT_CCY.value,'N',document.MAINFORM.VENT_TEMP_NO1_S.value+';'+document.MAINFORM.PRODUCT_CODE.value);
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_DAYS = function() {
    try {

        if (document.MAINFORM.COMMIT_START_DT.value != '' && document.MAINFORM.COMMIT_DUE_DT.value != '') {
            document.MAINFORM.COMMIT_DAYS.value = SYS_GetSubDays(document.MAINFORM.COMMIT_START_DT.name, document.MAINFORM.COMMIT_DUE_DT.name);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_FEE_RT = function() {
    try {

        if (document.MAINFORM.COMMIT_FEE_RT.value != '') {
            document.MAINFORM.COMMIT_FEE_RT.value = SYT_CCY_AMT('USD', document.MAINFORM.COMMIT_FEE_RT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_REMARK = function() {
    try {

        SYS_InsertClause(document.MAINFORM.COMMIT_REMARK.name);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMIT_START_DT = function() {
    try {

        if (document.MAINFORM.COMMIT_DAYS.value <= '0') {
            SYS_CheckError(document.MAINFORM.COMMIT_START_DT, 'Commitment start date must before the end date!'); // Utility Auto Fix Comments
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMODITY = function() {
    try {

        var A; // Utility Auto Fix Comments
        var B; // Utility Auto Fix Comments
        var C; // Utility Auto Fix Comments
        var sTRX_NO; // Utility Auto Fix Comments
        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);



        if (sTRX_NO == 'EPLC' || document.MAINFORM.GET_DATA_FLG.value == 'EPLC') {
            A = '';
            /*A=SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",
     'COMMODITY;LC_CCY;LC_BAL;LC_AMT;ISSUE_BK_NM;ISSUE_BK_NM_ADD;CONF_BK_NM;AVAL_BY;TENOR_DAYS',
     'COMMODITY;LC_CCY;LC_BAL;DEBT_INSMT_AMT;ISSUE_BK_NM;ISSUE_BK_ADD;CONF_BK_NM;LC_TYPE;TENOR_DAYS');*/
            if (A == 'Y') {
                document.MAINFORM.TEMP_CHAR3.value = 'EPLC';
            }
        } else {
            if (sTRX_NO == 'EXCO' || document.MAINFORM.GET_DATA_FLG.value == 'EXCO') {
                B = '';
                /* B=SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",
          'COMMODITY;LC_CCY;C_MAIN_REF;LC_AMT;NEGO_AMT;ISSUE_BK_NM;ISSUE_BK_NM_ADD;CONF_BK_NM;AVAL_BY;TENOR_DAYS;MATURITY',
          'COMMODITY;LC_CCY;TEMP_CHAR4;DEBT_INSMT_AMT;BP_AMT;ISSUE_BK_NM;ISSUE_BK_ADD;CONF_BK_NM;LC_TYPE;TENOR_DAYS;MATURITY');*/
                if (B == 'Y') {
                    /* SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TEMP_CHAR4.value+"'",'LC_BAL','LC_BAL');*/
                    document.MAINFORM.TEMP_CHAR3.value = 'EXCO';
                }
            } else {
                if (sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'OC') {
                    C = '';
                    /*C=SYS_Get22TableData_Boc('EXCL_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'COMMODITY;DRAFT_AMT;MATURITY;TENOR_DAYS','COMMODITY;DEBT_INSMT_AMT;MATURITY;TENOR_DAYS');*/
                    if (B == 'Y') {
                        document.MAINFORM.TEMP_CHAR3.value = 'OC';
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.COMMIT_BAL.value = document.MAINFORM.COMMIT_AMT.value;
        document.MAINFORM.COMMIT_NO.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.FINC_DEVAL_MODE.value = '0';
        document.MAINFORM.COMMIT_CPS_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.PRODUCT_CODE.value;
        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        //document.MAINFORM.FIVE_LEVEL_FLAG.value='00';
        //getLedgCode(document.MAINFORM.COMMIT_NO.value);
        //ConfirmBusinessCall_COMM();
        //SYT_Check_AMT();
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_cherk()) {
            return false;
        }
        /* if (!SYF_FFIT_COMMIT_START_DT()) {
            return false;
        }*/
        if (!SYT_WHZH_TRX_CODE_CHECK()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_DEBT_INSMT_AMT = function() {
    try {

        if (document.MAINFORM.COMMIT_CCY.value != '') {
            document.MAINFORM.DEBT_INSMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.DEBT_INSMT_AMT.value);
            document.MAINFORM.OTHER_CHG.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.OTHER_CHG.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FORM = function() {
    try {

        var A; // Utility Auto Fix Comments
        /*
          A=getFeeField('CommitmentChg','NOW');
         
         if(A[8]=='TRANSACTION')
         {      
         	document.MAINFORM.TEMP_CHAR2.value=A[3];
         	document.MAINFORM.TEMP_AMT.value=A[4];
                  document.MAINFORM.TEMP_AMT.value=SYT_CCY_AMT(document.MAINFORM.CUST_CHG_CCY.value,document.MAINFORM.TEMP_AMT.value); 
                  document.MAINFORM.DLY_COMMIT_FEE.value='0';
                  document.MAINFORM.BAL_FFT.value=A[4];
                  document.MAINFORM.DISTRICT_CODE.value=A[3];
         	document.MAINFORM.TEMP_CHAR1.value='Commitment fee received in advance'+document.MAINFORM.TEMP_CHAR2.value+document.MAINFORM.TEMP_AMT.value+'(Refund collection according to the actual commitment period after maturity)';
         	
         }
        else 
        {	
        	
                  if(A[8]=='TERM')
                 {         
                 	           document.MAINFORM.TEMP_CHAR2.value=A[1];
         	           document.MAINFORM.TEMP_AMT.value=A[2];
                             document.MAINFORM.TEMP_AMT.value=SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.TEMP_AMT.value);
                             document.MAINFORM.DLY_COMMIT_FEE.value='0';
                             document.MAINFORM.BAL_FFT.value='0';
                             document.MAINFORM.DISTRICT_CODE.value=document.MAINFORM.COMMIT_CCY.value;
         	           document.MAINFORM.TEMP_CHAR1.value='';
         	           if(document.MAINFORM.TIME_FEE_FLG.value=='1')
         	           {
                             document.MAINFORM.TEMP_CHAR1.value='Please defray the commitment fee at the beginning of monthly.';
                             }
                             if(document.MAINFORM.TIME_FEE_FLG.value=='2')
         	           {
                             document.MAINFORM.TEMP_CHAR1.value='Please defray the commitment fee at the beginning of quarterly.';
                             }
                 }
                else
                  {       if(A[8]=='DEFERRED')
                           {
                  	document.MAINFORM.TEMP_CHAR2.value=A[1];
         	         document.MAINFORM.TEMP_AMT.value=A[2]; 
                           document.MAINFORM.TEMP_AMT.value=SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.TEMP_AMT.value);
                           document.MAINFORM.DLY_COMMIT_FEE.value=A[2]; 
                           document.MAINFORM.BAL_FFT.value='0'; 
                           document.MAINFORM.DISTRICT_CODE.value=document.MAINFORM.COMMIT_CCY.value;     	       
        	                  document.MAINFORM.TEMP_CHAR1.value='Deducted commitment fees from the buyout funds which my bank pay to your company.';
                           }
                           else
                           {
                           document.MAINFORM.TEMP_AMT.value='0';
                           document.MAINFORM.DLY_COMMIT_FEE.value='0';
                        	document.MAINFORM.TEMP_CHAR1.value='';
                           document.MAINFORM.BAL_FFT.value='0';
                           document.MAINFORM.DISTRICT_CODE.value=document.MAINFORM.COMMIT_CCY.value;
                           }
                 }	
         
        }

*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GTS_BR_NM_C = function() {
    try {

        if (document.MAINFORM.GTS_BR_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Commitment1_SYF_FFIT_GTS_BR_NM_C_0', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'FFTCommitment1';
        document.MAINFORM.COMMIT_AMT.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.COMMIT_AMT.value);
        document.MAINFORM.COMMIT_BAL.value = document.MAINFORM.COMMIT_AMT.value;
        document.MAINFORM.OTHER_CHG.value = SYT_CCY_AMT(document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.OTHER_CHG.value);
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';

        //InitChg('CommitmentChg','CommitmentOtherChg'); 
        //InitValues_COMM('TRANSACTION','Our Customer');
        //TRX_CCY_COMM(document.MAINFORM.COMMIT_CCY.value);
        //SYT_CommPageConfirm();
        //CommCustId(document.MAINFORM.C_MAIN_REF.value,'CHN',document.MAINFORM.EXPT_ID.value);

        SYF_FFIT_COMMODITY();
        SYF_FFIT_LC_CCY_AMT_Relation();
        SYF_FFIT_DEBT_INSMT_AMT();
        document.MAINFORM.TEMP_50CHAR1.value = '100';
        //SYF_FFIT_GTS_BR_NM_C();
        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_LC_CCY_AMT_Relation = function() {
    try {

        if (document.MAINFORM.LC_CCY.value != '' || document.MAINFORM.LC_BAL.value != '' || document.MAINFORM.BP_AMT.value) {
            document.MAINFORM.LC_BAL.value = SYT_CCY_AMT(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_BAL.value);
            document.MAINFORM.BP_AMT.value = SYT_CCY_AMT(document.MAINFORM.LC_CCY.value, document.MAINFORM.BP_AMT.value);
        }
        if (SYS_BeFloat(document.MAINFORM.LC_BAL.value) < SYS_BeFloat(document.MAINFORM.BP_AMT.value)) {
            alert("The BP AMT should not be greater than LC balance ");
            document.MAINFORM.BP_AMT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_OTHER_CHG = function() {
    try {

        /*
if(SYS_BeFloat(document.MAINFORM.OTHER_CHG.value)>0)
{
getOtherFEE('CommitmentOtherChg','CommitmentOtherChg',document.MAINFORM.OTHER_CHG.value,document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.COMMIT_CCY.value,'Y',CABLEAC+';'+document.MAINFORM.PRODUCT_CODE.value);
}
else
{
getOtherFEE('CommitmentOtherChg','CommitmentOtherChg',document.MAINFORM.OTHER_CHG.value,document.MAINFORM.COMMIT_CCY.value,document.MAINFORM.COMMIT_CCY.value,'N',CABLEAC+';'+document.MAINFORM.PRODUCT_CODE.value);
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
            document.MAINFORM.TEMP_BP_MATURITY1.value = SYS_BUSI_DATE;
            //document.MAINFORM.COMMIT_START_DT.value = SYS_BUSI_DATE;
            SYF_FFIT_COMMIT_DAYS();
            SYT_GetCustAcNo(document.MAINFORM.EXPT_ID.value);
            //ChgAcNoInitValue();
            SYT_ExchRate_FIX_PENDING();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
        }

        Chg.Screen.mapLocalCust("EXPT_ID", "EXPT_NM");
        //Chg.Screen.mapForeignCust("EXPT_ID", "EXPT_NM", "CHG_FLD_LOCAL_CUST_CCY");//clark for 66465
        Chg.Screen.mapForeignCust("EXPT_ID", "EXPT_NM");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            arr = ['COMMITMENT_CHG', 'COMMITMENT_CHG_OTHER'];
            amt = document.MAINFORM.COMMIT_AMT.value;
            ccy = document.MAINFORM.COMMIT_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
        }
        CHG_DefCharge_chargeAtOnchange();
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
        /*
if(SYS_FUNCTION_TYPE=='PM' || SYS_FUNCTION_TYPE=='EC' )
{
//InitFieldEvent_COMM();
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_cherk = function() {
    try {

        var A; // Utility Auto Fix Comments
        /*
A=getFeeField('CommitmentChg','NOW');
if((A[8]=='TERM')&&(document.MAINFORM.TIME_FEE_FLG.value==''))
{
          SYS_CheckError(document.MAINFORM.TIME_FEE_FLG)
          return false;
}
else if((A[8]!='TERM')&&(document.MAINFORM.TIME_FEE_FLG.value!=''))
{
          SYS_CheckError(document.MAINFORM.TIME_FEE_FLG,)  
          return false;
}
*/
        //else         
        //{
        return true;
        //}
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BP_AMT_onchange = function(event) {
    try {
        SYF_FFIT_LC_CCY_AMT_Relation();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_VALUE_DATE_onchange = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_AMT_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_CCY_onchange = function(event) {
    try {
        TRX_CCY_COMM(document.MAINFORM.COMMIT_CCY.value);
        SYF_FFIT_OTHER_CHG();
        SYF_FFIT_COMMIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_DAYS_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_FEE_RT_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_FEE_RT();
        SYF_FFIT_COMMIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_START_DT_onchange = function(event) {
    try {
        SYF_FFIT_COMMIT_START_DT();
        SYF_FFIT_COMMIT_DAYS();
        SYF_FFIT_COMMIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_DEBT_INSMT_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.DEBT_INSMT_AMT.value < 0) {
            alert("The Debt Instrument AMT should not be negative");
            document.MAINFORM.DEBT_INSMT_AMT.value = '';
        }
        SYF_FFIT_DEBT_INSMT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_DEBT_INSMT_TYPE_onchange = function(event) {
    try {
        //VENT_TEMP_NO1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LC_BAL_onchange = function(event) {
    try {
        SYF_FFIT_LC_CCY_AMT_Relation();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LC_CCY_onchange = function(event) {
    try {
        SYF_FFIT_LC_CCY_AMT_Relation();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_OTHER_CHG_onchange = function(event) {
    try {
        SYF_FFIT_DEBT_INSMT_AMT();
        SYF_FFIT_OTHER_CHG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TIME_FEE_FLG_onchange = function(event) {
    try {
        SYF_FFIT_FORM();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Commitment1.js", e);
    }
}