var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FFIT_CCYANDAMT = function() {
    try {

        document.MAINFORM.COMMIT_CHG.value = SYT_CCY_AMT(document.MAINFORM.VENT_CCY.value, document.MAINFORM.COMMIT_CHG.value);
        document.MAINFORM.URP_CHG.value = SYT_CCY_AMT(document.MAINFORM.VENT_CCY.value, document.MAINFORM.URP_CHG.value);
        document.MAINFORM.P_DEDUCTED_CHG.value = SYT_CCY_AMT(document.MAINFORM.VENT_CCY.value, document.MAINFORM.P_DEDUCTED_CHG.value);
        document.MAINFORM.POST_CABLE_CHG.value = SYT_CCY_AMT(document.MAINFORM.VENT_CCY.value, document.MAINFORM.POST_CABLE_CHG.value);
        document.MAINFORM.OTHER_CHGS.value = SYT_CCY_AMT(document.MAINFORM.VENT_CCY.value, document.MAINFORM.OTHER_CHGS.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CommitCharge = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.COMMIT_CHG.value) > 0) {
            getOtherFEE('Commitment Chg', 'CommitCharge', document.MAINFORM.COMMIT_CHG.value, document.MAINFORM.VENT_CCY.value, document.MAINFORM.VENT_CCY.value, 'Y', document.MAINFORM.VENT_TEMP_NO1.value + ';' + document.MAINFORM.PRODUCT_CODE.value);
        } else {
            getOtherFEE('Commitment Chg', 'CommitCharge', document.MAINFORM.COMMIT_CHG.value, document.MAINFORM.VENT_CCY.value, document.MAINFORM.VENT_CCY.value, 'N', document.MAINFORM.VENT_TEMP_NO1.value + ';' + document.MAINFORM.PRODUCT_CODE.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        if (document.MAINFORM.FINC_TYPE.value != '') {
            document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.FINC_TYPE.value;
        } else if (document.MAINFORM.PRODUCT_CODE.value != '') {
            document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.PRODUCT_CODE.value;
        }
        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
        //getLedgCode(document.MAINFORM.C_MAIN_REF.value,'1002');
        //ConfirmBusinessCall_COMM();
        //SYT_Check_AMT();
        SYT_CHG_VOUCHER();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FFIT_commit_amt_check()) {
            return false;
        }
        if (!SYF_FFIT_pre_charge_check()) {
            return false;
        }
        if (!SYF_FFIT_URP_CHG_check()) {
            return false;
        }
        if (!SYT_WHZH_TRX_CODE_CHECK()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.EVENT_TYPE.value = 'FFFTCablelnChg';
        document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        // SYF_FFIT_VENT_CUST_AC_NO1();
        SYF_FFIT_trx_ccy();
        SYF_FFIT_CCYANDAMT();

        //InitChg('CommitCharge','PreCharge','URPCharge','PostCable','Other');
        //InitValues_COMM('TRANSACTION','Our Customer');
        //TRX_CCY_COMM(document.MAINFORM.VENT_CCY.value);
        //SYT_CommPageConfirm();
        //CommCustId(document.MAINFORM.C_MAIN_REF.value,'CHN',document.MAINFORM.EXPT_ID.value);

        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_Other = function() {
    try {

        /*
if(document.MAINFORM.FINC_TYPE.value!='')
{
       if(SYS_BeFloat(document.MAINFORM.OTHER_CHGS.value)>0)
       {
        //getOtherFEE('Other Commitment Chg','Other',document.MAINFORM.OTHER_CHGS.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'Y',document.MAINFORM.VENT_CUST_AC_NO1_S.value+';'+document.MAINFORM.FINC_TYPE.value);
       }
       else
       {
        //getOtherFEE('Other Commitment Chg','Other',document.MAINFORM.OTHER_CHGS.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'N',document.MAINFORM.VENT_CUST_AC_NO1_S.value+';'+document.MAINFORM.FINC_TYPE.value);
        }
}
else
{ 
        if(SYS_BeFloat(document.MAINFORM.OTHER_CHGS.value)>0)
        {
        //getOtherFEE('Other Commitment Chg','Other',document.MAINFORM.OTHER_CHGS.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'Y',document.MAINFORM.VENT_CUST_AC_NO1_S.value+';'+document.MAINFORM.PRODUCT_CODE.value);
        }
        else
        {
        //getOtherFEE('Other Commitment Chg','Other',document.MAINFORM.OTHER_CHGS.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'N',document.MAINFORM.VENT_CUST_AC_NO1_S.value+';'+document.MAINFORM.PRODUCT_CODE.value);
        }
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PostCable = function() {
    try {

        /*
if(document.MAINFORM.FINC_TYPE.value!='')
{
     if(SYS_BeFloat(document.MAINFORM.POST_CABLE_CHG.value)>0)
     {
     //getOtherFEE('PostCable','PostCable',document.MAINFORM.POST_CABLE_CHG.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'Y',CABLEAC+';'+document.MAINFORM.FINC_TYPE.value);
     }
     else
     {
     //getOtherFEE('PostCable','PostCable',document.MAINFORM.POST_CABLE_CHG.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'N',CABLEAC+';'+document.MAINFORM.FINC_TYPE.value);
     }
}
else
{
     if(SYS_BeFloat(document.MAINFORM.POST_CABLE_CHG.value)>0)
     {
     //getOtherFEE('PostCable','PostCable',document.MAINFORM.POST_CABLE_CHG.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'Y',CABLEAC+';'+document.MAINFORM.PRODUCT_CODE.value);
     }
     else
     {
     //getOtherFEE('PostCable','PostCable',document.MAINFORM.POST_CABLE_CHG.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'N',CABLEAC+';'+document.MAINFORM.PRODUCT_CODE.value);
     }
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
            SYT_GetCustAcNo(document.MAINFORM.EXPT_ID.value);
            //ChgAcNoInitValue();
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

            var arr = ['COMMITMENT_CHG', 'PRE_CHG', 'URP_CHG', 'POST_CABLE_CHG', 'FFIT_OTHER_CHG'];
            var ccy = document.MAINFORM.COMMIT_CCY.value;
            var amt = document.MAINFORM.COMMIT_BAL.value;
            Chg.calculate(arr, ccy, amt, '');
        }
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_PreCharge = function() {
    try {

        /*
if(SYS_BeFloat(document.MAINFORM.P_DEDUCTED_CHG.value)>0)
{
//getOtherFEE('PreCharge','PreCharge',document.MAINFORM.P_DEDUCTED_CHG.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'Y',FFTPREFEE+';'+document.MAINFORM.FINC_TYPE.value);
}
else
{
//getOtherFEE('PreCharge','PreCharge',document.MAINFORM.P_DEDUCTED_CHG.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'N',FFTPREFEE+';'+document.MAINFORM.FINC_TYPE.value);
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.PreInitValues = function() {
    try {

        SYT_loadExchRate();
        /*
if(SYS_FUNCTION_TYPE=='PM' || SYS_FUNCTION_TYPE=='EC' )
{
//SYT_loadExchRate();
//InitFieldEvent_COMM();
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_URP_CHG = function() {
    try {

        /*
if(SYS_BeFloat(document.MAINFORM.URP_CHG.value)>0)
{
//getOtherFEE('URPCharge','URPCharge',document.MAINFORM.URP_CHG.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'Y',document.MAINFORM.VENT_CUST_AC_NO1_S.value+';'+document.MAINFORM.FINC_TYPE.value);
}
else
{
//getOtherFEE('URPCharge','URPCharge',document.MAINFORM.URP_CHG.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'N',document.MAINFORM.VENT_CUST_AC_NO1_S.value+';'+document.MAINFORM.FINC_TYPE.value);
}
*/
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_URP_CHG_check = function() {
    try {

        var sMAINREF = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        if (sMAINREF != 'UR' && SYS_BeFloat(document.MAINFORM.URP_CHG.value) > 0) {
            SYS_CheckError(document.MAINFORM.URP_CHG, 'This transaction have not done the URP.Cannot collect URPCharge!');
            document.MAINFORM.URP_CHG.value = 0;
            //getOtherFEE('URPCharge','URPCharge',document.MAINFORM.URP_CHG.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'N',document.MAINFORM.VENT_CUST_AC_NO1_S.value+';'+document.MAINFORM.FINC_TYPE.value);
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_CUST_AC_NO1 = function() {
    try {

        var sC;
        var sA;
        var sB;
        var sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'BP') {
            sA = '';
            /*sA=SYS_Get22TableData_Boc('EXLC_NEGO',"BP_NO='"+document.MAINFORM.TRX_NO.value+"'",'LC_NO','VENT_TEMP_NO1');  */
        } else if (sTRX_NO == 'OC' || document.MAINFORM.GET_DATA_FLG.value == 'OC') {
            sB = '';
            /*var sB=SYS_Get22TableData_Boc('EXCL_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'INV_NO','VENT_TEMP_NO1');*/
        } else if (sTRX_NO == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'AD') {
            sC = '';
            /*sC=SYS_Get22TableData_Boc('EXLC_MASTER',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",'LC_NO','VENT_TEMP_NO1');*/
        }

        if (((sTRX_NO == 'AD' || document.MAINFORM.GET_DATA_FLG.value == 'AD') && sC == 'Y') || ((sTRX_NO == 'BP' || document.MAINFORM.GET_DATA_FLG.value == 'BP') && sA == 'Y')) {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Charge_SYF_FFIT_VENT_CUST_AC_NO1_0', '1');
        } else {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Charge_SYF_FFIT_VENT_CUST_AC_NO1_1', '1');
        }

        var FINCTYPE = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Charge_SYF_FFIT_VENT_CUST_AC_NO1_2', '1');
        if (FINCTYPE == 'Y' && document.MAINFORM.FINC_TYPE_DESC.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_Charge_SYF_FFIT_VENT_CUST_AC_NO1_3', '1');
        } else {
            document.MAINFORM.VENT_CUST_AC_NO1_S.value = document.MAINFORM.VENT_TEMP_NO1.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_commit_amt_check = function() {
    try {

        if (document.MAINFORM.COMMIT_NO.value == '' && SYS_BeFloat(document.MAINFORM.COMMIT_CHG.value) > 0 && document.MAINFORM.TEMP_ADD2.value != 'YES') {
            SYS_CheckError(document.MAINFORM.COMMIT_NO, 'This transaction have not done the commitment.Cannot collect commitment chg!');
            document.MAINFORM.COMMIT_CHG.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_pre_charge_check = function() {
    try {

        if (document.MAINFORM.FINC_TYPE.value == '' && SYS_BeFloat(document.MAINFORM.P_DEDUCTED_CHG.value) > 0 && document.MAINFORM.TEMP_ADD3.value != 'YES') {
            SYS_CheckError(document.MAINFORM.P_DEDUCTED_CHG, 'This transaction have not done the financing.Cannot collect PreCharge!');
            document.MAINFORM.P_DEDUCTED_CHG.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_trx_ccy = function() {
    try {

        if (document.MAINFORM.FINC_CCY.value != '') {
            document.MAINFORM.VENT_CCY.value = document.MAINFORM.FINC_CCY.value;
        } else if (document.MAINFORM.COMMIT_CCY.value != '') {
            document.MAINFORM.VENT_CCY.value = document.MAINFORM.COMMIT_CCY.value;
        } else if (document.MAINFORM.URP_CCY.value != '') {
            document.MAINFORM.VENT_CCY.value = document.MAINFORM.URP_CCY.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_BAL_CCY_onchange = function(event) {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_AT_onchange = function(event) {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_FOR_onchange = function(event) {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_COLLECT_CCY_onchange = function(event) {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function(event) {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_GETAC_BTN_onclick = function(event) {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_VALUE_DATE_onclick = function(event) {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_CCY_onchange = function(event) {
    try {
        SYF_FFIT_CommitCharge();
        SYF_FFIT_CCYANDAMT();
        SYF_FFIT_commit_amt_check();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_CHG_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.COMMIT_CHG.value)) {
            document.MAINFORM.COMMIT_CHG.value = 0;
        }
        SYF_FFIT_commit_amt_check();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_NO_onchange = function(event) {
    try {
        SYF_FFIT_commit_amt_check();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_C_MAIN_REF_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_TYPE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_OTHER_CHGS_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.OTHER_CHGS.value)) {
            document.MAINFORM.OTHER_CHGS.value = 0;
        }
        SYF_FFIT_Other();
        SYF_FFIT_CCYANDAMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_POST_CABLE_CHG_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.POST_CABLE_CHG.value)) {
            document.MAINFORM.POST_CABLE_CHG.value = 0;
        }
        SYF_FFIT_PostCable();
        SYF_FFIT_CCYANDAMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_P_DEDUCTED_CHG_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.P_DEDUCTED_CHG.value)) {
            document.MAINFORM.P_DEDUCTED_CHG.value = 0;
        }
        SYF_FFIT_PreCharge();
        SYF_FFIT_CCYANDAMT();
        SYF_FFIT_pre_charge_check();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_URP_CHG_onchange = function(event) {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.URP_CHG.value)) {
            document.MAINFORM.URP_CHG.value = 0;
        }
        SYF_FFIT_URP_CHG();
        SYF_FFIT_CCYANDAMT();
        SYF_FFIT_URP_CHG_check();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_VENT_CCY_onchange = function(event) {
    try {
        //TRX_CCY_COMM(document.MAINFORM.VENT_CCY.value);
        SYF_FFIT_CCYANDAMT();
        //SYF_FFIT_CommitCharge();
        SYF_FFIT_Other();
        SYF_FFIT_PostCable();
        SYF_FFIT_PreCharge();
        SYF_FFIT_URP_CHG();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_Charge.js", e);
    }
}