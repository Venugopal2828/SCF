var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_ACPT_CCY = function() {
    try {

        if ((document.MAINFORM.ACPT_CCY.value != '') || (document.MAINFORM.ACPT_AMT.value != '')) {
            document.MAINFORM.ACPT_AMT.value = SYT_CCY_AMT(document.MAINFORM.ACPT_CCY.value, document.MAINFORM.ACPT_AMT.value);
        }
        document.MAINFORM.FINC_BAL.value = document.MAINFORM.FINC_AMT.value; //clark,for 66323
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACTUAL_COST_RT = function() {
    try {

        if (document.MAINFORM.FFT_TRF_FLG.value == '1') {
            document.MAINFORM.ACTUAL_COST_RT.value = '0';
        } else {
            document.MAINFORM.ACTUAL_COST_RT.value = document.MAINFORM.LIBOR_RT.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ACTUAL_REVENUE_new = function() {
    try {

        var A; // Utility Auto Fix Comments
        var B; // Utility Auto Fix Comments
        if (document.MAINFORM.FFT_TRF_FLG.value != '1') {
            if (document.MAINFORM.COMMIT_START_DT.value == '' || document.MAINFORM.FINC_DT.value == '' || (SYS_BeFloat(document.MAINFORM.TEMP_INT1.value) <= 0)) {
                /*
            A=getFeeField('FincCommitChg','NOW');        
            if(A[8]=='TRANSACTION')
            {      
             document.MAINFORM.TEMP_AMT.value=A[2];       	
            }
            else
            {
             document.MAINFORM.TEMP_AMT.value='0';
            }
            */
                document.MAINFORM.TEMP_AMT.value = '0';
            }

            B = getFeeField('FFITCHG', 'NOW');
            if (B[8] == 'TRANSACTION') {
                if (B[3] == document.MAINFORM.FINC_CCY.value) {
                    document.MAINFORM.TEMP_AMT1.value = B[4];
                } else if (document.MAINFORM.FINC_CCY.value == 'USD') {
                    document.MAINFORM.TEMP_AMT1.value = B[2];
                } else {
                    document.MAINFORM.TEMP_AMT1.value = B[2];
                    document.MAINFORM.TEMP_AMT1.value = SYS_BeFloat(document.MAINFORM.TEMP_AMT1.value) * document.MAINFORM.SELLING_USRT.value / document.MAINFORM.BUYING_RT.value;
                }
            } else {
                document.MAINFORM.TEMP_AMT1.value = '0';
            }
            document.MAINFORM.ACTUAL_REVENUE.value = SYS_BeFloat(document.MAINFORM.PRE_FINC_INT.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT.value) + SYS_BeFloat(document.MAINFORM.TEMP_AMT1.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT3.value);
        } else {
            document.MAINFORM.ACTUAL_REVENUE.value = '0';
        }
        document.MAINFORM.ACTUAL_REVENUE.value = SYT_CCY_AMT('USD', document.MAINFORM.ACTUAL_REVENUE.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_BAL_FFT = function() {
    try {

        var A; // Utility Auto Fix Comments
        var B; // Utility Auto Fix Comments
        A = getFeeField('FincCommitChg', 'NOW');
        if (A[8] == 'TRANSACTION' && SYS_BeFloat(A[4]) > 0) {
            document.MAINFORM.DISTRICT_CODE.value = A[3];
            document.MAINFORM.BAL_FFT.value = A[4];
        } else {
            document.MAINFORM.BAL_FFT.value = document.MAINFORM.TEMP_AMT2.value;
        }
        if (document.MAINFORM.DISTRICT_CODE.value == '') {
            document.MAINFORM.DISTRICT_CODE.value = document.MAINFORM.FINC_CCY.value;
        }
        B = getFeeField('FFITCHG', 'NOW');
        if (B[8] == 'TRANSACTION') {
            document.MAINFORM.TTL_FINANCE_FEE.value = B[2];
        } else {
            document.MAINFORM.TTL_FINANCE_FEE.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COMMITFEE = function() {
    try {

        var sTRX_NO; // Utility Auto Fix Comments
        /*sTRX_NO=SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
if(document.MAINFORM.COMMIT_START_DT.value!='')
{
document.MAINFORM.TEMP_INT1.value=SYS_GetSubDays(document.MAINFORM.COMMIT_START_DT.name,document.MAINFORM.FINC_DT.name);
}
if((SYS_BeFloat(document.MAINFORM.TEMP_INT1.value)>0)&&(SYS_BeFloat(document.MAINFORM.DLY_COMMIT_FEE.value)>0))
{
     getCommitmentFEE('CommitmentCharge(Financing)','FincCommitChg',document.MAINFORM.FINC_AMT.value,document.MAINFORM.COMMIT_FEE_RT.value,document.MAINFORM.TEMP_INT1.value,document.MAINFORM.FINC_CCY.value,document.MAINFORM.FINC_CCY.value,'Y',document.MAINFORM.VENT_TEMP_NO1_S.value+';'+document.MAINFORM.PRODUCT_CODE.value);
}*/
        if (document.MAINFORM.COMMIT_NO.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing_SYF_FFIT_COMMITFEE_0', '1');
            if (document.MAINFORM.TEMP_DATE1.value != '') {
                document.MAINFORM.TEMP_INT1.value = SYS_GetSubDays(document.MAINFORM.TEMP_DATE1.name, document.MAINFORM.FINC_DT.name);
            } else {
                document.MAINFORM.TEMP_INT1.value = SYS_GetSubDays(document.MAINFORM.COMMIT_START_DT.name, document.MAINFORM.FINC_DT.name);
            }
            if ((SYS_BeFloat(document.MAINFORM.TEMP_INT1.value) > 0) && (SYS_BeFloat(document.MAINFORM.DLY_COMMIT_FEE.value) > 0)) {
                getCommitmentFEE('CommitmentCharge(Financing)', 'FincCommitChg', document.MAINFORM.TEMP_AMT10.value, document.MAINFORM.COMMIT_FEE_RT.value, document.MAINFORM.TEMP_INT1.value, document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.COMMIT_CCY.value, 'Y', document.MAINFORM.VENT_TEMP_NO1_S.value + ';' + document.MAINFORM.PRODUCT_CODE.value);
            } else {
                getCommitmentFEE('CommitmentCharge(Financing)', 'FincCommitChg', document.MAINFORM.TEMP_AMT10.value, document.MAINFORM.COMMIT_FEE_RT.value, document.MAINFORM.TEMP_INT1.value, document.MAINFORM.COMMIT_CCY.value, document.MAINFORM.COMMIT_CCY.value, 'N', document.MAINFORM.VENT_TEMP_NO1_S.value + ';' + document.MAINFORM.PRODUCT_CODE.value);
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_Changefield = function() {
    try {

        /* 2010-09-09 Jacob
if(document.MAINFORM.RPT_SETT_FLAG.value=='YES')
{
SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE,'M','N');
}
else
{
SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE,'O','N');
}
*/
        Rpt_ChangeFieldClass();
        if (SYS_BeFloat(document.MAINFORM.NET_CR_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO1, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CheckPreDeductFee = function() {
    try {

        var A; // Utility Auto Fix Comments
        var deductFeeNum; // Utility Auto Fix Comments
        //deductFeeNum = document.MAINFORM.FEE_NUMBER.value-1;
        //A=EEHtml.getElementById('CHG_MTHD_'+deductFeeNum);
        //if(A.value!='TRANSACTION'&&SYS_BeFloat(document.MAINFORM.PRE_OVS_CHG.value)>0){
        //    SYS_CheckError(A,'Precharge must choose Transaction Interest');
        //    return false;
        //}else{
        return true;
        //}
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FINANCE_FLG.value = '1';
        SYF_FFIT_TEMP_AMT4();
        SYF_FFIT_TEMP_AMT6();
        SYF_FFIT_TEMP_CHAR6();
        document.MAINFORM.FINC_CPS_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.COMMIT_CPS_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.TEMP_CHAR1.value = SETTABEY;
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        SettleCustId(document.MAINFORM.C_MAIN_REF.value, document.MAINFORM.COUNTER_CNTY_CODE.value, document.MAINFORM.EXPT_ID.value);
        SETT_ConfirmCall();
        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.FINC_TYPE.value;
        SYF_FFIT_TEMP_CHAR5();
        SYF_FFIT_TTL_COMM_APDE();
        //SYT_BLACK_INS_TYP_REPLACE(document.MAINFORM.BLACK_TRX_TYPE,document.MAINFORM.BLACK_INSTYP);
        SYF_FFIT_inqFinDNA();
        SYF_FFIT_AUTH_BLACK();
        document.MAINFORM.FINC_RISK_LEVEL.value = '00';
        document.MAINFORM.COMM_842_CODE.value = document.MAINFORM.TEMP_CHAR4.value;

        //getLedgCode(document.MAINFORM.C_MAIN_REF.value,'1002');
        //ConfirmBusinessCall_COMM();
        //SYT_Check_AMT();
        SYT_CHG_VOUCHER();
        if (document.MAINFORM.TEMP_FLG1.value == 'YES') {
            document.MAINFORM.FINC_8114_AMT.value = document.MAINFORM.SETT_EQ_AMT1.value;
            document.MAINFORM.FINC_8114_BAL.value = document.MAINFORM.SETT_EQ_AMT1.value;
            document.MAINFORM.CR_8114_FINC_ACNO.value = document.MAINFORM.SETT_CUST_AC_NO1.value;
            document.MAINFORM.CR_8114_FINC_DT.value = SYS_BUSI_DATE;
            // document.MAINFORM.DECLARE_NO_FINC.value=SYT_subDeclare(document.MAINFORM.SETT_VCH_DESC_S1.value);//mark
        } else {
            document.MAINFORM.FINC_8114_AMT.value = 0.00;
            document.MAINFORM.FINC_8114_BAL.value = 0.00;
            document.MAINFORM.CR_8114_FINC_ACNO.value = "";
            document.MAINFORM.CR_8114_FINC_DT.value = "";
            document.MAINFORM.DECLARE_NO_FINC.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_check_status()) {
            return false;
        }
        if (!SYF_FFIT_NET_CR_AMT()) {
            return false;
        }
        /*
if(!RptConfirmCheck())
{
return false;
}
*/
        if (!SYT_WHZH_TRX_CODE_CHECK()) {
            return false;
        }
        if (!SYF_FFIT_check()) {
            return false;
        }
        if (!SYF_FFIT_check1()) {
            return false;
        }
        if (!SYF_FFIT_CheckPreDeductFee()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_DLY_COMMIT_FEE = function() {
    try {

        if (document.MAINFORM.COMMIT_NO.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing_SYF_FFIT_DLY_COMMIT_FEE_1', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FFT_CHG_FLG = function() {
    try {

        /*
if(document.MAINFORM.FFT_CHG_FLG.value=='1')
{
CHG_INOUT_FLAG('IN',document.MAINFORM.FINC_CCY.value);
}
else
{
CHG_INOUT_FLAG('OUT',document.MAINFORM.FINC_CCY.value);
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FREEZE_FLG = function() {
    try {

        if ((SYS_BeFloat(document.MAINFORM.TEMP_AMT9.value) > 0) && (SYS_BeFloat(document.MAINFORM.PURCH_BAL.value) == 0) && document.MAINFORM.TEMP_FLG1.value == 'NO') {
            document.MAINFORM.FREEZE_FLG.value = '2';
        } else {
            document.MAINFORM.FREEZE_FLG.value = '1';
        }

        /*if(SYS_BeFloat(document.MAINFORM.PURCH_BAL.value)>0||SYS_BeFloat(document.MAINFORM.TEMP_AMT9.value)>0)
{
document.MAINFORM.FREEZE_FLG.value='2';
}
else
{
document.MAINFORM.FREEZE_FLG.value='1';
}*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FincInitValue = function() {
    try {

        FincInitValue(document.MAINFORM.EXPT_ID.value, document.MAINFORM.C_MAIN_REF.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_GetComm = function() {
    try {

        GetComm('FFITCHG', '', '', '', document.MAINFORM.FINC_CCY.value, 'Y', document.MAINFORM.MRGN_TEMP_NO3_S.value + ';' + document.MAINFORM.FINC_TYPE.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FINC_BASIC_DAYS.value = 360;
        SYT_ChangeFldClass(document.MAINFORM.FINC_AC_NO, 'O', 'N');
        document.MAINFORM.EVENT_TYPE.value = 'FFTFinancing';
        document.MAINFORM.FINC_PCT.value = '100';
        document.MAINFORM.FINC_EQ_AMT.value = document.MAINFORM.FINC_AMT.value;
        SYF_FFIT_DLY_COMMIT_FEE();
        SYF_FFIT_LC_NO();
        document.MAINFORM.RPT_PAY_FLG.value = 'F';
        document.MAINFORM.RPT_TRX_REF_NO.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.RPT_PAYER_NM.value = document.MAINFORM.IMPT_NM.value;
        document.MAINFORM.TEMP_AMT2.value = document.MAINFORM.BAL_FFT.value;
        SYF_FFIT_TRX_NO_new();

        //Jax added 2020/5/15
        if (document.MAINFORM.TRF_CCY.value != '') {
            document.MAINFORM.FINC_CCY.value = document.MAINFORM.TRF_CCY.value;
            document.MAINFORM.FINC_AMT.value = document.MAINFORM.TRF_AMT.value;
        }

        document.MAINFORM.FINC_TRX_CCY.value = document.MAINFORM.FINC_CCY.value;
        document.MAINFORM.FINC_TRX_AMT.value = document.MAINFORM.FINC_AMT.value;
        document.MAINFORM.FINC_INIT_FLG.value = '2';
        document.MAINFORM.INT_MTHD.value = '1';
        SYF_FFIT_ACPT_CCY();
        SYF_FFIT_MRGN_TEMP_NO1();
        //SYF_FFIT_VENT_TEMP_NO1();  by adam
        SYF_FFIT_FREEZE_FLG();
        if (document.MAINFORM.LIBOR_RT.value == 0) {
            document.MAINFORM.FINC_RT.value = document.MAINFORM.MARGIN_RT.value;
        }
        document.MAINFORM.FINC_BILL_DUE_DT.value = document.MAINFORM.MATURITY.value;
        RptInitCust(document.MAINFORM.EXPT_ID.value);
        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
        document.MAINFORM.RPT_CNTY_CODE.value = 'CHN';
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_LC_NO = function() {
    try {

        var sA; // Utility Auto Fix Comments
        var sB; // Utility Auto Fix Comments
        var sC; // Utility Auto Fix Comments
        var sTRX_NO; // Utility Auto Fix Comments
        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        document.MAINFORM.TEMP_CHAR2.value = '';
        document.MAINFORM.RPT_SETT_MTHD.value = 'O';
        if (sTRX_NO == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'AD') {
            sA = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing_SYF_FFIT_LC_NO_2', '1');
            if (sA == 'Y') {
                document.MAINFORM.TEMP_CHAR2.value = 'AD';
                document.MAINFORM.RPT_SETT_MTHD.value = 'L';
                /* SYS_Get22TableData_Boc('EPLC_NEGO',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'TTL_FINC_BAL','PURCH_BAL'); */
            }
        } else {
            if (sTRX_NO == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'BP') {
                sB = '';
                /* sB=SYS_Get22TableData_Boc('EPLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",
                  'COMMODITY;LC_NO;AVAL_BY;CHECK_NO;LC_CCY',
                  'COMMODITY;LC_NO;LC_TYPE;RPT_VERF_NO;TEMP_CHAR3');*/
                if (sB == 'Y') {
                    document.MAINFORM.TEMP_CHAR2.value = 'BP';
                    document.MAINFORM.RPT_SETT_MTHD.value = 'L';
                }
            } else {
                if (sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'OC') {
                    sC = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing_SYF_FFIT_LC_NO_3', '1');
                    if (sC == 'Y') {
                        document.MAINFORM.TEMP_CHAR2.value = 'OC';
                        document.MAINFORM.RPT_SETT_MTHD.value = 'C';
                    }
                }
            }
        }
        FLD_FFIT_RPT_VERF_NO_onchange(document.MAINFORM.RPT_VERF_NO.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MRGN_TEMP_NO1 = function() {
    try {

        if (document.MAINFORM.MRGN_TEMP_NO1.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing_SYF_FFIT_MRGN_TEMP_NO1_4', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_MULTI_DUE_DT_FLG = function() {
    try {

        if (document.MAINFORM.MULTI_DUE_DT_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.PRE_FINC_INT, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_NEIWAIKOU = function() {
    try {

        /*
if((document.MAINFORM.CUST_CHG_ACNO.value=='')&&(document.MAINFORM.TTL_CUST_CHG_AMT.value!='')&&(document.MAINFORM.FFT_CHG_FLG.value=='1'))
{
//document.MAINFORM.TEMP_AMT5.value=SYS_BeFloat(document.MAINFORM.TTL_CUST_CHG_AMT.value)+SYS_BeFloat(document.MAINFORM.TTL_FOR_CHG_AMT.value);
document.MAINFORM.TEMP_AMT5.value=document.MAINFORM.TTL_CUST_CHG_AMT.value;
document.MAINFORM.NET_DR_AMT1.value=SYS_BeFloat(document.MAINFORM.FINC_NET_AMT.value)-SYS_BeFloat(document.MAINFORM.TEMP_AMT5.value);
document.MAINFORM.NET_DR_AMT1.value=SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value,document.MAINFORM.NET_DR_AMT1.value);
}
else
{
document.MAINFORM.TEMP_AMT5.value=0;
document.MAINFORM.NET_DR_AMT1.value=document.MAINFORM.FINC_NET_AMT.value;
}

if(SYS_BeFloat(document.MAINFORM.PURCH_BAL.value)>0)
{
document.MAINFORM.FINC_CCY_842.value=document.MAINFORM.FINC_CCY.value;
document.MAINFORM.FINC_AMT_842.value=document.MAINFORM.NET_DR_AMT1.value;
SettleCcyAmt('','');
}
else{
document.MAINFORM.FINC_CCY_842.value='';
document.MAINFORM.FINC_AMT_842.value=0;
SettleCcyAmt(document.MAINFORM.FINC_CCY.value,document.MAINFORM.NET_DR_AMT1.value);
}
 

if(document.MAINFORM.FREEZE_FLG.value=='1')
{
SettleCcyAmt(document.MAINFORM.FINC_CCY.value,document.MAINFORM.NET_DR_AMT1.value);
}
else if(document.MAINFORM.FREEZE_FLG.value=='2')
{
SettleCcyAmt('','');
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_NET_CR_AMT = function() {
    try {

        if ((document.MAINFORM.FFT_CHG_FLG.value == '1') && (SYS_BeFloat(document.MAINFORM.NET_CR_AMT.value) < 0)) {
            SYS_CheckError(document.MAINFORM.FFT_CHG_FLG, 'Local amount lacking.Please choose foreign!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_NET_CR_AMT1 = function() {
    try {

        /*document.MAINFORM.NET_CR_AMT1.value=SYS_BeFloat(document.MAINFORM.FINC_AMT.value)-SYS_BeFloat(document.MAINFORM.PRE_FINC_INT.value)-SYS_BeFloat(document.MAINFORM.TTL_FINANCE_FEE.value);
document.MAINFORM.NET_CR_AMT1.value=SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value,document.MAINFORM.NET_CR_AMT1.value);*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PRE_DEDUCTED_CHG = function() {
    try {

        /*if(document.MAINFORM.MARGIN_INT_FLG.value=='1')
{
document.MAINFORM.VENT_CUST_RT3.value=document.MAINFORM.MARGIN_RT.value;
document.MAINFORM.PRE_DEDUCTED_CHG.value=document.MAINFORM.PRE_FINC_MARGIN.value;
document.MAINFORM.MARGIN_RT.value='0';
SYT_ChangeFldClass(document.MAINFORM.MARGIN_RT,'P','Y');

}
else
{ 
      if(document.MAINFORM.MARGIN_INT_FLG.value=='2')
      {
       document.MAINFORM.MARGIN_RT.value=document.MAINFORM.VENT_CUST_RT3.value;
      document.MAINFORM.PRE_DEDUCTED_CHG.value='0';
       SYT_ChangeFldClass(document.MAINFORM.MARGIN_RT,'O','Y');
      }
}
if(SYS_BeFloat(document.MAINFORM.PRE_DEDUCTED_CHG.value)>0)
{
getOtherFEE('NewFFITCharge','MarginFFT',document.MAINFORM.PRE_DEDUCTED_CHG.value,document.MAINFORM.FINC_CCY.value,document.MAINFORM.FINC_CCY.value,'Y');
}
else
{
getOtherFEE('NewFFITCharge','MarginFFT',document.MAINFORM.PRE_DEDUCTED_CHG.value,document.MAINFORM.FINC_CCY.value,document.MAINFORM.FINC_CCY.value,'N');
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
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
            document.MAINFORM.RPT_TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.RPT_DT.value = SYS_BUSI_DATE;
            SYF_FFIT_check_status();
            SYT_RELE_CREA_BY();
            SYF_FFIT_TEMP_CHAR3();
            SYF_FFIT_TIME_FEE_FLG();
            FincFieldEvent();
            SYT_GetCustAcNo(document.MAINFORM.EXPT_ID.value);
            SYT_CommPageInit();
            document.MAINFORM.TRANS_DATE_ID.value = SYT_GetDateID(document.MAINFORM.TRX_DT.value);
            SYF_FFIT_finc_changefield();
            SYF_FFIT_Changefield();
            FLD_FFIT_PRE_FINC_INT_onchange();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
            SYF_FFIT_finc_changefield();
            SYF_FFIT_Changefield();
        }
        SYT_relAuthBlack();
        SETT_TRANS_FLDCLASS_onchange();
        Rpt_ChangeFieldClass1();
        Rpt_ChangeFieldClass_SETT_RPT_ISREF();
        Rpt_ChangeFieldClass_SETT_RPT_IS_REF1();
        Chg.Screen.mapLocalCust("EXPT_ID", "EXPT_NM");
        Chg.Screen.mapForeignCust("EXPT_ID", "EXPT_NM");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            arr = ['FFIT_CHG', 'FINC_COMM_CHG', 'CABLE_CHG', 'POST', 'PRE_DEDUCTED_CHG'];
            amt = document.MAINFORM.FINC_AMT.value;
            ccy = document.MAINFORM.FINC_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
            SYF_FFIT_ACTUAL_REVENUE_new();
            SYF_FFIT_MULTI_DUE_DT_FLG();
            SYF_FFIT_finc_changefield();
        }
        CHG_DefCharge_chargeAtOnchange();
        CHG_allChargeFor_onchange();
        if (document.MAINFORM.FINC_DAYS.value == '0') {
            document.MAINFORM.FINC_DAYS.value = SYS_GetSubDays(document.MAINFORM.FINC_DT.name, document.MAINFORM.FINC_BILL_DUE_DT.name);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PreDeductedCHG = function() {
    try {

        /*document.MAINFORM.PRE_OVS_CHG.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.PRE_OVS_CHG.value);
        if (SYS_BeFloat(document.MAINFORM.PRE_OVS_CHG.value) > 0) {
            getOtherFEE('PreDeductedCHG', 'PreDeductedCHG', document.MAINFORM.PRE_OVS_CHG.value, document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_CCY.value, 'Y', FFTPREFEE + ';' + document.MAINFORM.FINC_TYPE.value);
        } else {
            getOtherFEE('PreDeductedCHG', 'PreDeductedCHG', document.MAINFORM.PRE_OVS_CHG.value, document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_CCY.value, 'N', FFTPREFEE + ';' + document.MAINFORM.FINC_TYPE.value);
        }*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
        /*
if(SYS_FUNCTION_TYPE=='PM' || SYS_FUNCTION_TYPE=='EC' )
{
InitFieldEvent_COMM();
GetFee('FFITCHG',document.MAINFORM.GTS_BR_ID.value,document.MAINFORM.EXPT_ID.value);
GetTrxCcyExchRt(document.MAINFORM.FINC_CCY.value,document.MAINFORM.EXPT_ID.value);
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_RPT_AMT = function() {
    try {

        if ((SYS_BeFloat(document.MAINFORM.FINC_AMT.value) > 0) && (document.MAINFORM.RPT_SETT_FLAG.value != 'NO')) {
            RptCnyCcyAmt(document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_AMT.value);
            document.MAINFORM.RPT_SETT_FLAG.value = 'YES';
            document.MAINFORM.RPT_CNTY_CODE.value = 'CHN';
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE, 'M', 'Y');
        } else {
            //RptCnyCcyAmt('','');
            document.MAINFORM.RPT_CNTY_CODE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE, 'O', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT3 = function() {
    try {

        var discRate; // Utility Auto Fix Comments
        var int1; // Utility Auto Fix Comments
        var int2; // Utility Auto Fix Comments
        var nv; // Utility Auto Fix Comments
        var period; // Utility Auto Fix Comments
        if (document.MAINFORM.INT_MODE.value == '1') {
            document.MAINFORM.TEMP_AMT3.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) * SYS_BeFloat(document.MAINFORM.ACTUAL_COST_RT.value) * SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAY.value) / 100;
        } else if (document.MAINFORM.INT_MODE.value == '2') {
            discRate = SYS_BeFloat(document.MAINFORM.ACTUAL_COST_RT.value) * SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / 360 / 100;
            nv = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) / (1 + discRate);
            document.MAINFORM.TEMP_AMT3.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) - nv;
        } else if (document.MAINFORM.INT_MODE.value == '3') {
            period = Math.floor(SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / 365);
            discRate = SYS_BeFloat(document.MAINFORM.ACTUAL_COST_RT.value) * SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) / SYS_BeFloat(document.MAINFORM.FINC_BASIC_DAY.value) / 100; // Utility Auto Fix Comments
            int1 = Math.pow((1 + SYS_BeFloat(document.MAINFORM.ACTUAL_COST_RT.value) * 365 / 360 / 100), period);
            int2 = (1 + SYS_BeFloat(document.MAINFORM.ACTUAL_COST_RT.value) * (SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) - period * 365) / 100 / 360);
            nv = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) / (int1 * int2); // Utility Auto Fix Comments
            document.MAINFORM.TEMP_AMT3.value = SYS_BeFloat(document.MAINFORM.FINC_AMT.value) - nv;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT4 = function() {
    try {

        if ((document.MAINFORM.DEBT_INSMT_TYPE.value == '5') && (SYS_BeFloat(document.MAINFORM.BAL_CONF.value) > '0') && (document.MAINFORM.TEMP_CHAR3.value == document.MAINFORM.FINC_CCY.value)) {
            if (document.MAINFORM.PARTIAL_SHIP.value == '2') //NOT ALLOWED
            {
                document.MAINFORM.TEMP_AMT4.value = document.MAINFORM.BAL_CONF.value;
            } else if (document.MAINFORM.PARTIAL_SHIP.value == '1') //ALLOWED
            {
                if ((SYS_BeFloat(document.MAINFORM.BAL_CONF.value) - SYS_BeFloat(document.MAINFORM.FINC_AMT.value)) > '0') {
                    document.MAINFORM.TEMP_AMT4.value = document.MAINFORM.FINC_AMT.value;
                } else {
                    document.MAINFORM.TEMP_AMT4.value = document.MAINFORM.BAL_CONF.value;
                }
            } else {
                document.MAINFORM.TEMP_AMT4.value = '0';
            }
        }

        /*if((document.MAINFORM.DEBT_INSMT_TYPE.value=='5')&&(SYS_BeFloat(document.MAINFORM.BAL_CONF.value)>'0'))
{
       if(document.MAINFORM.PARTIAL_SHIP.value=='2')//NOT ALLOWED
       {
             document.MAINFORM.TEMP_AMT4.value=document.MAINFORM.BAL_CONF.value;
       }
       else if(document.MAINFORM.PARTIAL_SHIP.value=='1')//ALLOWED
       {
             if((SYS_BeFloat(document.MAINFORM.BAL_CONF.value)-SYS_BeFloat(document.MAINFORM.FINC_AMT.value))>'0')
             {
                    document.MAINFORM.TEMP_AMT4.value=document.MAINFORM.FINC_AMT.value;
             }
             else
             {
                    document.MAINFORM.TEMP_AMT4.value=document.MAINFORM.BAL_CONF.value;
             }
       }
       else
       {
             document.MAINFORM.TEMP_AMT4.value='0';
       }
}*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT6 = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT10.value) > 0) {
            document.MAINFORM.TEMP_AMT6.value = document.MAINFORM.TEMP_AMT10.value;

            if ((SYS_BeFloat(document.MAINFORM.TEMP_AMT6.value) - SYS_BeFloat(document.MAINFORM.FINC_AMT.value)) > 0) {
                document.MAINFORM.TEMP_AMT6.value = document.MAINFORM.FINC_AMT.value;
            }
            document.MAINFORM.COMMIT_BAL.value = SYS_BeFloat(document.MAINFORM.TEMP_AMT10.value) - SYS_BeFloat(document.MAINFORM.TEMP_AMT6.value);
        }


        if (SYS_BeFloat(document.MAINFORM.COMMIT_BAL.value) < 0) {
            document.MAINFORM.COMMIT_BAL.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT7 = function() {
    try {

        document.MAINFORM.TEMP_AMT7.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT7.value);
        /*        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT7.value) > 0) {
            getOtherFEE('CABLE', 'CABLE', document.MAINFORM.TEMP_AMT7.value, document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_CCY.value, 'Y', CABLEAC + ';' + document.MAINFORM.FINC_TYPE.value);
        } else {
            getOtherFEE('CABLE', 'CABLE', document.MAINFORM.TEMP_AMT7.value, document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_CCY.value, 'N', CABLEAC + ';' + document.MAINFORM.FINC_TYPE.value);
        }*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT8 = function() {
    try {

        /*document.MAINFORM.TEMP_AMT8.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT8.value);
        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT8.value) > 0) {
            getOtherFEE('POST', 'POST', document.MAINFORM.TEMP_AMT8.value, document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_CCY.value, 'Y', CABLEAC + ';' + document.MAINFORM.FINC_TYPE.value);
        } else {
            getOtherFEE('POST', 'POST', document.MAINFORM.TEMP_AMT8.value, document.MAINFORM.FINC_CCY.value, document.MAINFORM.FINC_CCY.value, 'N', CABLEAC + ';' + document.MAINFORM.FINC_TYPE.value);
        }*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR3 = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.BAL_CONF.value) > 0 && document.MAINFORM.TEMP_CHAR3.value != '' && document.MAINFORM.FINC_CCY.value != '' && (document.MAINFORM.TEMP_CHAR3.value != document.MAINFORM.FINC_CCY.value)) {
            alert('Financing currency is different from the last transaction currency.Please write-off confirmation off balance sheet account by hand!');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR4 = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.PRE_OVS_CHG.value) > 0) {
            document.MAINFORM.TEMP_CHAR4.value = document.MAINFORM.C_MAIN_REF.value + 'S0';
            SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL, 'O', 'N');
        } else {
            document.MAINFORM.TEMP_CHAR4.value = '';
            document.MAINFORM.REMARK_COLL.value = '';
            SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR5 = function() {
    try {

        if (document.MAINFORM.TEMP_CHAR2.value == 'AD' || document.MAINFORM.TEMP_CHAR2.value == 'BP') {
            document.MAINFORM.TEMP_CHAR5.value = '603';
        } else {
            document.MAINFORM.TEMP_CHAR5.value = '610';
        }



        if (document.MAINFORM.TENOR_DAYS.value == '') {
            document.MAINFORM.TENOR_DAYS.value = '0';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR6 = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.DRAFT_AMT.value) > 0) {
            document.MAINFORM.TEMP_CHAR6.value = document.MAINFORM.TEMP_CHAR3.value;
        } else {
            document.MAINFORM.TEMP_CHAR6.value = '';
        }

        /*if(SYS_BeFloat(document.MAINFORM.PURCH_BAL.value)>0)
{
document.MAINFORM.TEMP_CHAR7.value=document.MAINFORM.FINC_CCY.value;
}
else
{
document.MAINFORM.TEMP_CHAR7.value='';
}*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_FLG1_Onchange = function() {
    try {

        document.MAINFORM.SETT_NONEXCH_FLG.value = document.MAINFORM.TEMP_FLG1.value; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TIME_FEE_FLG = function() {
    try {

        if (document.MAINFORM.TIME_FEE_FLG.value != '') {
            alert('Commitment Fee regularly received');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TRX_NO_new = function() {
    try {

        var sTRX_NO; // Utility Auto Fix Comments
        /* sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
if(sTRX_NO =='BP'||document.MAINFORM.GET_DATA_FLG.value=='BP')
{
    SYS_Get22 TableData_Boc('EPLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'FINC_TIMES_NEGO;DRAFT_AMT;DRAFT_BAL;INV_NO;C_MAIN_REF;FINC_CCY;TTL_FINC_BAL','PURCH_TIMES;DRAFT_AMT;BAL_DRAFT;INV_NO;MRGN_TEMP_NO1;TEMP_CHAR7;PURCH_BAL');
}
else 
{ 
 if(sTRX_NO =='OC'||document.MAINFORM.GET_DATA_FLG.value=='OC')
     {
     SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing_SYF_FFIT_TRX_NO_new_6', '1');
     }
}
*/
        if (document.MAINFORM.TEMP_CHAR2.value == 'AD' || document.MAINFORM.TEMP_CHAR2.value == 'BP') {
            document.MAINFORM.FINC_TYPE_DESC.value = 'FINCFFITLC';
        } else {
            document.MAINFORM.FINC_TYPE_DESC.value = 'FINCFFITCL';
        }


    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TTL_COMM_APDE = function() {
    try {

        //document.MAINFORM.TTL_COMM_APDE.value
        if (document.MAINFORM.FFT_CHG_FLG.value != '1') {
            //document.MAINFORM.TTL_COMM_APDE.value=SYS_BeFloat(document.MAINFORM.TTL_CUST_CHG_AMT.value)+SYS_BeFloat(document.MAINFORM.SETT_NET_EXCH_COMM.value);
            document.MAINFORM.TTL_COMM_APDE.value = document.MAINFORM.SETT_NET_EXCH_COMM.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_TEMP_NO1 = function() {
    try {

        if (document.MAINFORM.VENT_TEMP_NO1.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing_SYF_FFIT_VENT_TEMP_NO1_7', '1');
        } else {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing_SYF_FFIT_VENT_TEMP_NO1_8', '1');
        }
        if (document.MAINFORM.TEMP_CHAR2.value == 'AD' || document.MAINFORM.TEMP_CHAR2.value == 'BP') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing_SYF_FFIT_VENT_TEMP_NO1_9', '1');
        } else {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing_SYF_FFIT_VENT_TEMP_NO1_10', '1');
        }
        SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Financing_SYF_FFIT_VENT_TEMP_NO1_11', '1');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_check = function() {
    try {

        var A; // Utility Auto Fix Comments
        var chgmothd; // Utility Auto Fix Comments
        var feenumber; // Utility Auto Fix Comments
        var feenumber0; // Utility Auto Fix Comments
        var feenumber1; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        /*
feenumber0=document.MAINFORM.FEE_NUMBER.value;  
feenumber=SYS_BeFloat(feenumber0)-5;
A='0';
        for(i = feenumber; i < feenumber0; i++)
        {       
                feenumber1=i;
                chgmothd=EEHtml.getElementById('CHG_MTHD_'+feenumber1);
                if(chgmothd.value=='DEFERRED')
                {
                   A='1';
                   break;
                }
        }
        if(A=='1')
        {
        	SYS_CheckError(chgmothd,'Financing charge cannot select late received!');
        	return false;
        }
*/
        //else
        //{
        return true;
        //}
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_check1 = function() {
    try {

        //if(SYS_BeFloat(document.MAINFORM.TTL_FOR_CHG_AMT.value)>0)
        //{
        //        	return false;
        //}
        //else
        //{
        return true;
        //}
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_check_status = function() {
    try {

        var FincOverRec; // Utility Auto Fix Comments
        var OverReclen; // Utility Auto Fix Comments
        var Overcondition; // Utility Auto Fix Comments
        var m; // Utility Auto Fix Comments
        var n; // Utility Auto Fix Comments
        n = 0;
        if (document.MAINFORM.COMMIT_NO.value != '') {
            Overcondition = "COMMIT_NO='" + document.MAINFORM.COMMIT_NO.value + "'";
            FincOverRec = '';
            FincOverRec = SYS_GetMultiData_Boc("FFIT_MASTER", Overcondition, "C_MAIN_REF,C_FUNC_SHORT_NAME,C_TRX_STATUS");
            OverReclen = FincOverRec.length;
            m = 0;
            if (OverReclen > 0) {
                for (m = 0; m < OverReclen; m++) {
                    if ((FincOverRec[m][1] == 'Financing1') && (FincOverRec[m][2] == 'P')) {

                        if (SYS_FUNCTION_TYPE == 'PM') {
                            n = 1;
                        } else if (SYS_FUNCTION_TYPE == 'EC') {
                            if (FincOverRec[m][0] != document.MAINFORM.C_MAIN_REF.value) {
                                n = 1;
                            }
                        }
                        m = OverReclen;
                    }
                }
            }
        }
        if (n == 1) {
            SYS_CheckError(document.MAINFORM.C_MAIN_REF, 'Please check this financing transaction!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_finc_changefield = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.FINC_DUE_DT, 'M', 'N');
        if (SYS_BeFloat(document.MAINFORM.FINC_DAYS.value) > '360' || document.MAINFORM.FFT_TRF_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.LIBOR_RT, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.LIBOR_RT, 'P', 'N');
        }
        if (document.MAINFORM.MULTI_DUE_DT_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.PRE_FINC_INT, 'M', 'N');
        }
        if (SYS_BeFloat(document.MAINFORM.PRE_OVS_CHG.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.REMARK_COLL, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
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
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_AMT_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_CCY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACPT_CCY_onchange = function(event) {
    try {
        SYF_FFIT_ACPT_CCY();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACTUAL_COST_RT_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_AMT3();
        EEHtml.fireEvent(document.MAINFORM.TEMP_AMT3, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_ACTUAL_REVENUE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BAL_CONF_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUYING_FAV_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUYING_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_NO_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMON_PRDT_CODE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FFT_CHG_FLG_onchange = function(event) {
    try {
        SYF_FFIT_FFT_CHG_FLG();
        SYF_FFIT_NEIWAIKOU();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_AC_NO_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_AMT_onchange = function(event) {
    try {
        SYF_FFIT_finc_changefield();
        SYF_FFIT_NEIWAIKOU();

        SYF_FFIT_ACTUAL_COST_RT();
        SYF_FFIT_TEMP_AMT3();

        SYF_FFIT_ACTUAL_REVENUE_new();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_DAYS_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_DUE_DT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_TYPE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GET_DATA_FLG_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GTS_BR_ID_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_INT_MTHD_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LIBOR_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MARGIN_INT_FLG_onchange = function(event) {
    try {
        //SYF_FFIT_PRE_DEDUCTED_CHG();

        //SYF_FFIT_NET_CR_AMT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_MRGN_TEMP_NO1_onchange = function(event) {
    try {
        SYF_FFIT_MRGN_TEMP_NO1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_NET_CR_AMT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRE_DEDUCTED_CHG_onchange = function(event) {
    try {
        SYF_FFIT_PRE_DEDUCTED_CHG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRE_FINC_INT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_PRE_OVS_CHG_onchange = function(event) {
    try {
        SYF_FFIT_PreDeductedCHG();
        SYF_FFIT_TEMP_CHAR4();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_RPT_CCY_AC_NO_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_RPT_CNTY_CODE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_RPT_VERF_NO_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SELLING_CUST_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT3_onchange = function(event) {
    try {
        SYF_FFIT_ACTUAL_REVENUE_new();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT7_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_AMT7();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT8_onchange = function(event) {
    try {
        SYF_FFIT_TEMP_AMT8();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_CHAR2_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TIME_FEE_FLG_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TRX_DT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TTL_FINANCE_FEE_onchange = function(event) {
    try {
        //SYF_FFIT_NET_CR_AMT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Financing.js", e);
    }
}