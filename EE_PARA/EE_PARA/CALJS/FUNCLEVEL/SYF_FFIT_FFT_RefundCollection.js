var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        SYF_FFIT_TEMP_CHAR6();
        SYF_FFIT_COUNTER_CNTY_CODE();
        SYF_FFIT_inqFinDNA();
        SYF_FFIT_AUTH_BLACK();
        SYF_FFIT_COVER_CRAC_BUSI_TYPE();
        SYF_FFIT_TEMP_CHAR4();
        SYT_CHG_VOUCHER();
        document.MAINFORM.RFD_8114_AMT.value = 0.00;
        document.MAINFORM.RFD_8114_BAL.value = 0.00;
        document.MAINFORM.CR_8114_RFD_ACNO.value = "";
        document.MAINFORM.CR_8114_RFD_DT.value = "";
        document.MAINFORM.DECLARE_NO_RFD.value = '';
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_FFIT_ShenBao_check()) {
            return false;
        }
        if (!SYF_FFIT_FFT_BK_FLG_check()) {
            return false;
        }
        if (!SYF_FFIT_CR_AMT_check()) {
            return false;
        }
        if (!SYF_FFIT_TEMP_AMT3_check()) {
            return false;
        }
        if (!SYF_FFIT_TEMP_AMT()) {
            return false;
        }
        if (!SYT_WHZH_TRX_CODE_CHECK()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.EVENT_TYPE.value = 'RefundCollection';
        document.MAINFORM.CR_AMT.value = '0';
        document.MAINFORM.CR_VALUE_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.X202_VALUE_DT_32A.value = SYS_BUSI_DATE;
        //document.MAINFORM.RPT_CCY_AC_NO.value='';
        //document.MAINFORM.RPT_CNY_AC_NO.value='';
        //document.MAINFORM.RPT_EXCH_RT.value='0';
        document.MAINFORM.TEMP_AMT54.value = document.MAINFORM.TTL_CABLE_APDE.value;
        SYF_FFIT_VENT_CUST_AC_NO1();
        SYF_FFIT_INV_NO();
        SYF_FFIT_INV_NO_1();
        SYF_FFIT_VENT_CCY_1();

        //InitEvent_MT202();

        //InitChg('FFTCommCharge','CableFee');
        //InitValues_COMM();
        //TRX_CCY_COMM(document.MAINFORM.VENT_CCY.value);
        //SYT_CommPageConfirm();
        //CommCustId(document.MAINFORM.C_MAIN_REF.value,'CHN',document.MAINFORM.EXPT_ID.value);

        //GetTrxCcyExchRt(document.MAINFORM.VENT_CCY.value, document.MAINFORM.EXPT_ID.value);  by adam

        if (document.MAINFORM.FINC_CCY.value != '') {
            document.MAINFORM.AMT_TO_BUY.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.AMT_TO_BUY.value);
            document.MAINFORM.COLL_OVS_CHG.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.COLL_OVS_CHG.value);
        }
        SYF_FFIT_TEMP_FLG1();

        document.MAINFORM.BRANCH_REMARK_ORG.value = document.MAINFORM.FFIT_REMARK.value;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
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
            SYT_GetCustAcNo(document.MAINFORM.EXPT_ID.value);
            SYT_GetCustAcNo(document.MAINFORM.EXPT_ID.value);
            SYT_GetCustAcNo(document.MAINFORM.EXPT_ID.value);
            SYF_FFIT_FFT_BK_FLG();
            SYF_FFIT_CHANGEFIELD();
            SYT_ExchRate_FIX_PENDING();
        }
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            SYT_RELE_CREA_BY();
            SYT_CommPageInit();
            SYF_FFIT_FFT_BK_FLG();
            SYF_FFIT_CHANGEFIELD();
        }
        SYF_FFIT_TEMP_CHAR4();
        SYT_relAuthBlack();
        Chg.Screen.mapLocalCust("EXPT_ID", "EXPT_NM");
        Chg.Screen.mapForeignCust("EXPT_ID", "EXPT_NM");
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            arr = ['FFT_COMM_CHG', 'CABLE_CHG'];
            ccy = document.MAINFORM.COMMIT_CCY.value;
            amt = document.MAINFORM.RFD_8114_BAL.value;
            Chg.calculate(arr, ccy, amt, '');
        }
        CHG_DefCharge_chargeAtOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
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
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_AMT = function() {
    try {
        if (document.MAINFORM.VENT_CCY.value != '') {
            document.MAINFORM.CR_AMT.value = SYT_CCY_AMT(document.MAINFORM.VENT_CCY.value, document.MAINFORM.CR_AMT.value);
            document.MAINFORM.DR_CUST_AMT.value = SYT_CCY_AMT(document.MAINFORM.VENT_CCY.value, document.MAINFORM.DR_CUST_AMT.value);
            document.MAINFORM.CR_CUST_AMT.value = SYT_CCY_AMT(document.MAINFORM.VENT_CCY.value, document.MAINFORM.CR_CUST_AMT.value);
            document.MAINFORM.TEMP_AMT.value = SYT_CCY_AMT(document.MAINFORM.VENT_CCY.value, document.MAINFORM.TEMP_AMT.value);
            document.MAINFORM.TEMP_AMT3.value = SYT_CCY_AMT(document.MAINFORM.VENT_CCY.value, document.MAINFORM.TEMP_AMT3.value);
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
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
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_AUTH_POINT1 = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_AUTH_SPEL = function() {
    try {
        var i; // Utility Auto Fix Comments
        var pmtcustacno; // Utility Auto Fix Comments
        for (i = 1; i < 6; i++) { // Utility Auto Fix Comments
            pmtcustacno = EEHtml.getElementById('PMT_CUST_AC_NO' + i);
            if (pmtcustacno.value == '6201') {
                document.MAINFORM.AUTH_SPEL.value = '2';
                break;
            } else {
                document.MAINFORM.AUTH_SPEL.value = '0';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CCY = function() {
    try {
        var sA; // Utility Auto Fix Comments
        var sB; // Utility Auto Fix Comments
        sA = 'Y';
        sB = 'Y';
        if (document.MAINFORM.COMMIT_CCY.value != '') {
            if (document.MAINFORM.VENT_CCY.value != document.MAINFORM.COMMIT_CCY.value) {
                sA = 'N';
            }
        }
        if (document.MAINFORM.FINC_CCY.value != '') {
            if (document.MAINFORM.VENT_CCY.value != document.MAINFORM.FINC_CCY.value) {
                sB = 'N';
            }
        }

        if ((sA == 'N') || (sB == 'N')) {
            alert('Transaction currency should be same with the commitment currency or financing currency!');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CHANGEFIELD = function() {
    try {
        /*
        if(SYS_BeFloat(document.MAINFORM.NET_CR_AMT.value)>0)
        {
        SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO1,'M','N');
        }
        if(SYS_BeFloat(document.MAINFORM.NET_DR_AMT.value)>'0')
        {
        SYT_ChangeFldClass(document.MAINFORM.PMT_CUST_AC_NO1,'O','N');
        }

        if(document.MAINFORM.TEMP_FLG1.value=='1')
        {    
             H.style.display='';
             h1.style.display='';
             K.style.display='none';
             k1.style.display='none';
             if(document.MAINFORM.RPT_SETT_FLAG.value=='YES')
             {
             SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE_SETT,'M','N');
             Rpt_ChangeFieldClass_SETT();
             }	 
        }
        else if(document.MAINFORM.TEMP_FLG1.value=='2')
        {    
             H.style.display='none';
             h1.style.display='none';
             K.style.display='';
             k1.style.display='';
             if(document.MAINFORM.RPT_PMT_FLAG.value=='YES')
             {
             SYT_ChangeFldClass(document.MAINFORM.RPT_CNTY_CODE,'M','N');
             Rpt_ChangeFieldClass();
             }	
        }
        else
        {    
             H.style.display='none';
             h1.style.display='none';
             K.style.display='none';
             k1.style.display='none';
        }
        */
        if ((SYS_BeFloat(document.MAINFORM.CR_AMT.value) > 0) && (document.MAINFORM.TEMP_FLG3.value == '1')) {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG3, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'P', 'N');
        } else if ((SYS_BeFloat(document.MAINFORM.CR_AMT.value) > 0) && (document.MAINFORM.TEMP_FLG3.value == '2')) {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG3, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'O', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG3, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'O', 'N');
        }

        if (document.MAINFORM.TEMP_FLG2.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.VENT_TEMP_NO1, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COUNTER_CNTY_CODE = function() {
    try {
        if (document.MAINFORM.FFT_BK_FLG.value == '1') {
            SYT_GetCntyCode(document.MAINFORM.X202_ADV_BKSW_B2.value, document.MAINFORM.COUNTER_CNTY_CODE.name);
        } else {
            document.MAINFORM.COUNTER_CNTY_CODE.value = 'CHN';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_COVER_CRAC_BUSI_TYPE = function() {
    try {
        var sC_MAIN; // Utility Auto Fix Comments
        sC_MAIN = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        if (sC_MAIN == 'CT' || sC_MAIN == 'CP') {
            document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.PRODUCT_CODE.value;
        } else {
            document.MAINFORM.COMMON_PRDT_CODE.value = document.MAINFORM.FINC_TYPE.value;
        }
        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT.value) > 0) {
            document.MAINFORM.COVER_AC_NO_CR.value = document.MAINFORM.VENT_TEMP_NO1.value;
            document.MAINFORM.COVER_AMT_CR.value = document.MAINFORM.TEMP_AMT.value;
            document.MAINFORM.COVER_CCY_CR.value = document.MAINFORM.VENT_CCY.value;
            if (document.MAINFORM.TEMP_FLG2.value == '2') {
                document.MAINFORM.COVER_CRAC_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_RefundCollection_SYF_FFIT_COVER_CRAC_BUSI_TYPE_0', '1');
            } else if (document.MAINFORM.TEMP_FLG2.value == '3') {
                document.MAINFORM.COVER_CRAC_BUSI_TYPE.value = INTERFACE_BANCS_BGLCR_TRX_CODE;
                document.MAINFORM.COVER_BR_ID2.value = document.MAINFORM.GTS_BR_ID.value;
            }
        }
        if (SYS_BeFloat(document.MAINFORM.CR_AMT.value) > 0) {
            document.MAINFORM.COVER_AC_NO_DR.value = document.MAINFORM.CR_AC_NO.value;
            document.MAINFORM.COVER_AMT_DR.value = document.MAINFORM.CR_AMT.value;
            document.MAINFORM.COVER_CCY_DR.value = document.MAINFORM.VENT_CCY.value;
            if (document.MAINFORM.TEMP_FLG3.value == '1') {
                document.MAINFORM.COVER_DRAC_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
                SYS_GetTableDataByRule_S('SYF_FFIT_FFT_RefundCollection_SYF_FFIT_COVER_CRAC_BUSI_TYPE_1', '1');
            } else if (document.MAINFORM.TEMP_FLG3.value == '2') {
                document.MAINFORM.COVER_DRAC_BUSI_TYPE.value = INTERFACE_BANCS_BGLDR_TRX_CODE;
                document.MAINFORM.COVER_BR_ID.value = document.MAINFORM.GTS_BR_ID.value;
            }
        }
        document.MAINFORM.GL_BUSI_TYPE.value = INTERFACE_GL_TRX_CODE;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CR_AMT = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.CR_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG3, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG3, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CR_AMT_check = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.CR_AMT.value) > '0') {
            if (document.MAINFORM.CR_AC_NO.value == '') {
                SYS_CheckError(document.MAINFORM.CR_AC_NO, 'Debit CR AMT should be greater than zero,Debit CR AC No cannot be empty!');
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_CR_CUST_AMT = function() {
    try {
        /*
        if(SYS_BeFloat(document.MAINFORM.CR_CUST_AMT.value)>0)
        {
           SettleCcyAmt(document.MAINFORM.VENT_CCY.value,document.MAINFORM.CR_CUST_AMT.value);
           SettleReturnOvsAmt('','','');
        }
        else
        {
           SettleCcyAmt('','');
           SettleReturnOvsAmt('','','');
        }
        */
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_DR_CUST_AMT = function() {
    try {
        /*
        if(SYS_BeFloat(document.MAINFORM.DR_CUST_AMT.value)>0)
        {
        PaymentCcyAmt(document.MAINFORM.VENT_CCY.value,document.MAINFORM.DR_CUST_AMT.value);
        }
        else
        {
        PaymentCcyAmt('','');
        }
        */
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FFT_BK_FLG = function() {
    try {
        var G; // Utility Auto Fix Comments
        var g1; // Utility Auto Fix Comments
        G = EEHtml.getElementById('G');
        g1 = EEHtml.getElementById('g1');
        SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKID_58A, 'O', 'N');
        document.MAINFORM.X202_TRX_REF_NO_20.value = '';
        document.MAINFORM.X202_CCY_32A.value = '';
        //document.MAINFORM.X202_AMT_32A.value = '0';
        SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, 'P', 'N');
        if (document.MAINFORM.FFT_BK_FLG.value == '1') {
            G.style.display = '';
            g1.style.display = '';
            SYT_ChangeFldClass(document.MAINFORM.X202_ADV_BKSW_B2, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_TRX_REF_NO_20, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_VALUE_DT_32A, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_CCY_32A, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_AMT_32A, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.X202_RELATEDNO_21, 'M', 'N');
            if (document.MAINFORM.X202_TAG_58A.value == '') {
                SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'M', 'N');
            }
            if (document.MAINFORM.X202_TAG_58A.value == 'A') {
                SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKID_58A, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'O', 'N');
            }
            if (document.MAINFORM.X202_TAG_58A.value == 'D') {
                SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKSW_58A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202_BENE_BKID_58A, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.X202BENEBKADD1_58A, 'M', 'N');
            }
            document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
            document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.VENT_CCY.value;
            document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.TEMP_AMT.value;
        } else {
            G.style.display = 'none';
            g1.style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_FFT_BK_FLG_check = function() {
    try {
        if ((document.MAINFORM.FFT_BK_FLG.value == '1') && (SYS_BeFloat(document.MAINFORM.TEMP_AMT.value) == '0')) {
            SYS_CheckError(document.MAINFORM.TEMP_AMT, 'Credit CR AMT cannot be zero!');
            return false;
        }
        if (SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.X202_VALUE_DT_32A.name) < 0) {
            SYS_CheckError(document.MAINFORM.X202_VALUE_DT_32A, 'MT202 32tag value date can not before the transaction date!');
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_INV_NO = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_INV_NO_1 = function() {
    try {
        var A; // Utility Auto Fix Comments
        var B; // Utility Auto Fix Comments
        var C; // Utility Auto Fix Comments
        var sTRX_NO; // Utility Auto Fix Comments
        sTRX_NO = SYM_FFIT_TRX_NO(document.MAINFORM.TRX_NO.value);
        if (sTRX_NO != 'AD' && sTRX_NO != 'BP' && sTRX_NO != 'OC') {
            if (document.MAINFORM.BA_ADOC_NO.value != '' && document.MAINFORM.BA_TRX_NO.value != '') {
                A = '';
                /* A=SYS_Get22TableData_Boc('EPLC_NEGO',"C_MAIN_REF='"+document.MAINFORM.TRX_NO.value+"'",
         'LC_CCY;LC_AMT;LC_NO;C_MAIN_REF','LC_CCY;DRAFT_AMT;LC_NO;TEMP_CHAR1');*/

                if (A == 'Y') {
                    SYS_GetTableDataByRule_S('SYF_FFIT_FFT_RefundCollection_SYF_FFIT_INV_NO_1_2', '1');
                }
            } else if (document.MAINFORM.BA_ADOC_NO.value != '' && document.MAINFORM.BA_TRX_NO.value == '') {
                B = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_RefundCollection_SYF_FFIT_INV_NO_1_3', '1');

                if (B == 'N') {
                    C = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_RefundCollection_SYF_FFIT_INV_NO_1_4', '1');
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_ShenBao_check = function() {
    try {
        if ((document.MAINFORM.TEMP_FLG1.value == '1') && (SYS_BeFloat(document.MAINFORM.CR_AMT.value) <= '0')) {
            SYS_CheckError(document.MAINFORM.CR_AMT, 'Debit CR AMT can not be empty!');
            return false;
        } else {
            return true;
        }

        if ((document.MAINFORM.TEMP_FLG1.value == '2') && (SYS_BeFloat(document.MAINFORM.TEMP_AMT.value) <= '0')) {
            SYS_CheckError(document.MAINFORM.TEMP_AMT, 'Credit CR AMT can not be empty!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT = function() {
    try {
        if ((SYS_BeFloat(document.MAINFORM.TEMP_AMT.value) > '0') && (document.MAINFORM.VENT_TEMP_NO1.value == '')) {
            SYS_CheckError(document.MAINFORM.VENT_TEMP_NO1, 'Credit CR AMT should be greater than zero,Credit CR AC No can not be empty!'); // Utility Auto Fix Comments
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT1 = function() {
    try {
        document.MAINFORM.TEMP_AMT1.value = SYT_CCY_AMT(document.MAINFORM.VENT_CCY.value, document.MAINFORM.TEMP_AMT1.value);
        /*
    if(SYS_BeFloat(document.MAINFORM.TEMP_AMT1.value)>0)
    {
    getOtherFEE('FFITCHG','FFTCommCharge',document.MAINFORM.TEMP_AMT1.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'Y',document.MAINFORM.VENT_CUST_AC_NO1_S.value+';'+document.MAINFORM.FINC_TYPE.value);
    }
    else
    {
    getOtherFEE('FFITCHG','FFTCommCharge',document.MAINFORM.TEMP_AMT1.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'N',document.MAINFORM.VENT_CUST_AC_NO1_S.value+';'+document.MAINFORM.FINC_TYPE.value);
    }
    */
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT2 = function() {
    try {
        var sMAINREF; // Utility Auto Fix Comments
        sMAINREF = document.MAINFORM.C_MAIN_REF.value.substring(0, 2);
        document.MAINFORM.TEMP_AMT2.value = SYT_CCY_AMT(document.MAINFORM.VENT_CCY.value, document.MAINFORM.TEMP_AMT2.value);
        /*
    if(SYS_BeFloat(document.MAINFORM.TEMP_AMT2.value)>0)
    {
             if(sMAINREF=='CT'||sMAINREF=='CP')
    	{
             getOtherFEE('CABLE','CableFee',document.MAINFORM.TEMP_AMT2.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'Y',CABLEAC+';'+document.MAINFORM.PRODUCT_CODE.value);
             }else
             {
             getOtherFEE('CABLE','CableFee',document.MAINFORM.TEMP_AMT2.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'Y',CABLEAC+';'+document.MAINFORM.FINC_TYPE.value);
             }
    }
    else
    {
             if(sMAINREF=='CT'||sMAINREF=='CP')
    	{
             getOtherFEE('CABLE','CableFee',document.MAINFORM.TEMP_AMT2.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'N',CABLEAC+';'+document.MAINFORM.PRODUCT_CODE.value);
             }else
             {
             getOtherFEE('CABLE','CableFee',document.MAINFORM.TEMP_AMT2.value,document.MAINFORM.VENT_CCY.value,document.MAINFORM.VENT_CCY.value,'N',CABLEAC+';'+document.MAINFORM.FINC_TYPE.value);
             }
    }
    */
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT3 = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT3.value) > 0) {
            document.MAINFORM.VENT_CUST_AC_NO2.value = FFTPREFEE;
        } else {
            document.MAINFORM.VENT_CUST_AC_NO2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_AMT3_check = function() {
    try {
        if ((SYS_BeFloat(document.MAINFORM.TEMP_AMT3.value) > '0') && (document.MAINFORM.VENT_CUST_AC_NO2.value == '')) {
            SYS_CheckError(document.MAINFORM.VENT_CUST_AC_NO2, 'Pre Charge should be greater than zero,Pre Charge AC No cannot be empty!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR4 = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT3.value) > 0 && document.MAINFORM.TEMP_CHAR4.value == '') {
            alert('Please input the transfer 842No.!');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_CHAR6 = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.DRAFT_AMT.value) > 0) {
            document.MAINFORM.TEMP_CHAR6.value = document.MAINFORM.LC_CCY.value;
        } else {
            document.MAINFORM.TEMP_CHAR6.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_FLG1 = function() {
    try {
        /*
        if((document.MAINFORM.TEMP_FLG1.value=='1')&&(SYS_BeFloat(document.MAINFORM.CR_AMT.value)>'0'))
        {    
             H.style.display='';
             h1.style.display='';
             K.style.display='none';
             k1.style.display='none';
             document.MAINFORM.RPT_PMT_FLAG.value='NO';
             document.MAINFORM.RPT_ISREF.value='N';
             document.MAINFORM.RPT_IS_REF.value='NO';
            // document.MAINFORM.RPT_SETT_FLAG.value = '';
            // document.MAINFORM.RPT_ISREF_SETT.value = '';
            // document.MAINFORM.RPT_IS_REF_SETT.value = '';
             SYT_ChangeFldClass(document.MAINFORM.RPT_ISREF_SETT,'M','N');
             SYT_ChangeFldClass(document.MAINFORM.RPT_IS_REF_SETT,'M','N');
             document.MAINFORM.RPT_TRX_DT_SETT.value=SYS_BUSI_DATE;
             document.MAINFORM.RPT_PAY_FLG_SETT.value='F';
             document.MAINFORM.RPT_TRX_REF_NO_SETT.value=document.MAINFORM.C_MAIN_REF.value;
             document.MAINFORM.RPT_DT_SETT.value=SYS_BUSI_DATE;
            // document.MAINFORM.RPT_PAYER_NM_SETT.value=document.MAINFORM.IMPT_NM.value; 
            // RptInitCust_SETT(document.MAINFORM.EXPT_ID.value);
             RptCnyCcyAmt_SETT(document.MAINFORM.VENT_CCY.value,document.MAINFORM.CR_AMT.value);
              if( SYS_FUNCTION_TYPE!='EC'){
        	  document.MAINFORM.RPT_SETT_FLAG.value = '';
                   document.MAINFORM.RPT_ISREF_SETT.value = '';
                   document.MAINFORM.RPT_IS_REF_SETT.value = '';
        	  document.MAINFORM.RPT_PAYER_NM_SETT.value=document.MAINFORM.IMPT_NM.value; 
                   RptInitCust_SETT(document.MAINFORM.EXPT_ID.value);
        	  }//20101009 WLY
             if(document.MAINFORM.RPT_DCLR_NO_SETT.value=='')
                {
                SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_FLAG,'M','Y'); 
                }
                else
                {
                SYT_ChangeFldClass(document.MAINFORM.RPT_SETT_FLAG,'M','N'); 
                } 
        }
        else if((document.MAINFORM.TEMP_FLG1.value=='2')&&(SYS_BeFloat(document.MAINFORM.TEMP_AMT.value)>'0'))
        {    
             H.style.display='none';
             h1.style.display='none';
             K.style.display='';
             k1.style.display='';
             document.MAINFORM.RPT_SETT_FLAG.value='NO';
             document.MAINFORM.RPT_ISREF_SETT.value = 'N';
             document.MAINFORM.RPT_IS_REF_SETT.value = 'NO';
             //document.MAINFORM.RPT_PMT_FLAG.value='';
            // document.MAINFORM.RPT_ISREF.value='';
            // document.MAINFORM.RPT_IS_REF.value='';
             SYT_ChangeFldClass(document.MAINFORM.RPT_ISREF,'M','N');
             SYT_ChangeFldClass(document.MAINFORM.RPT_IS_REF,'M','N');
             document.MAINFORM.RPT_TRX_DT.value=SYS_BUSI_DATE;
             document.MAINFORM.RPT_TRX_REF_NO.value=document.MAINFORM.C_MAIN_REF.value;
            // document.MAINFORM.RPT_PAYEE_NM.value=document.MAINFORM.IMPT_NM.value;
             document.MAINFORM.RPT_DT.value=SYS_BUSI_DATE; 
             document.MAINFORM.RPT_NET_PMT_CCY.value=document.MAINFORM.VENT_CCY.value;
             document.MAINFORM.RPT_NET_PMT_AMT.value=document.MAINFORM.TEMP_AMT.value; 
             document.MAINFORM.RPT_NET_PMT_AMT.value=SYT_CCY_AMT('JPY',document.MAINFORM.RPT_NET_PMT_AMT.value);  
             //RptInitCust(document.MAINFORM.EXPT_ID.value);	

             if( SYS_FUNCTION_TYPE!='EC'){
              document.MAINFORM.RPT_PAYEE_NM.value=document.MAINFORM.IMPT_NM.value;
              document.MAINFORM.RPT_PMT_FLAG.value='';
              document.MAINFORM.RPT_ISREF.value='';
             document.MAINFORM.RPT_IS_REF.value='';
             RptInitCust(document.MAINFORM.EXPT_ID.value);	
             }//20101009 WLY
             RptCnyCcyAmt(document.MAINFORM.VENT_CCY.value,document.MAINFORM.TEMP_AMT.value);
             document.MAINFORM.RPT_DRAFT_CCY.value=document.MAINFORM.VENT_CCY.value;    
        }
        else
        {    
             H.style.display='none';
             h1.style.display='none';
             K.style.display='none';
             k1.style.display='none';
             document.MAINFORM.RPT_PMT_FLAG.value='NO';
             document.MAINFORM.RPT_ISREF.value='N';
             document.MAINFORM.RPT_IS_REF.value='NO';
             document.MAINFORM.RPT_SETT_FLAG.value='NO';
             document.MAINFORM.RPT_ISREF_SETT.value = 'N';
             document.MAINFORM.RPT_IS_REF_SETT.value = 'NO';
        }
        Rpt_ChangeFieldClass_SETT1();
        Rpt_ChangeFieldClass();
        */
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_FLG2 = function() {
    try {
        if (document.MAINFORM.TEMP_FLG2.value == '2') {
            document.MAINFORM.VENT_TEMP_NO1.value = GL9992;
            SYT_ChangeFldClass(document.MAINFORM.VENT_TEMP_NO1, 'P', 'N');
        } else if (document.MAINFORM.TEMP_FLG2.value == '3') {
            document.MAINFORM.VENT_TEMP_NO1.value = '';
            SYT_ChangeFldClass(document.MAINFORM.VENT_TEMP_NO1, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_FLG3 = function() {
    try {
        if ((SYS_BeFloat(document.MAINFORM.CR_AMT.value) > 0) && (document.MAINFORM.TEMP_FLG3.value == '1')) {
            document.MAINFORM.CR_AC_NO.value = GL9992;
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'P', 'N');
            document.MAINFORM.COVER_BGL_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'P', 'N');
        } else if ((SYS_BeFloat(document.MAINFORM.CR_AMT.value) > 0) && (document.MAINFORM.TEMP_FLG3.value == '2')) {
            document.MAINFORM.CR_AC_NO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'M', 'N');
            document.MAINFORM.COVER_BGL_ACNO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'O', 'N');
        } else {
            document.MAINFORM.CR_AC_NO.value = '';
            document.MAINFORM.COVER_BGL_ACNO.value = '';
            document.MAINFORM.TEMP_FLG3.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.CR_AC_NO, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.COVER_BGL_ACNO, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_TEMP_FLG4 = function() {
    try {
        //document.MAINFORM.SETT_NONEXCH_FLG.value=document.MAINFORM.TEMP_FLG4.value
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_CCY = function() {
    try {
        document.MAINFORM.DR_CUST_AMT.value = '0';
        document.MAINFORM.CR_CUST_AMT.value = '0';
        document.MAINFORM.CR_AC_NO.value = '';
        document.MAINFORM.CR_AMT.value = '0';
        document.MAINFORM.VENT_CUST_AC_NO2.value = '';
        document.MAINFORM.TEMP_AMT3.value = '0';
        document.MAINFORM.VENT_TEMP_NO1.value = '';
        document.MAINFORM.TEMP_AMT.value = '0';
        document.MAINFORM.TEMP_AMT1.value = '0';
        document.MAINFORM.TEMP_AMT2.value = '0';
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_CCY_1 = function() {
    try {
        if (document.MAINFORM.COMMIT_CCY.value != '') {
            document.MAINFORM.VENT_CCY.value = document.MAINFORM.COMMIT_CCY.value;
        } else if (document.MAINFORM.FINC_CCY.value != '') {
            document.MAINFORM.VENT_CCY.value = document.MAINFORM.FINC_CCY.value;
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_VENT_CUST_AC_NO1 = function() {
    try {
        var FINCTYPE; // Utility Auto Fix Comments
        FINCTYPE = SYS_GetTableDataByRule_S('SYF_FFIT_FFT_RefundCollection_SYF_FFIT_VENT_CUST_AC_NO1_5', '1');
        if (FINCTYPE == 'Y' && document.MAINFORM.FINC_TYPE_DESC.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_RefundCollection_SYF_FFIT_VENT_CUST_AC_NO1_6', '1');
        } else if (document.MAINFORM.FINC_TYPE_DESC.value == 'FINCFFITLC') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_RefundCollection_SYF_FFIT_VENT_CUST_AC_NO1_7', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_X202_1_B2 = function() {
    try {
        if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            SYS_GetTableDataByRule_S('SYF_FFIT_FFT_RefundCollection_SYF_FFIT_X202_1_B2_8', '1');
        } else {
            document.MAINFORM.TEMP_NM2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.SYF_FFIT_check_acno = function() {
    try {
        var a1; // Utility Auto Fix Comments
        var a2; // Utility Auto Fix Comments
        var a3; // Utility Auto Fix Comments
        var a4; // Utility Auto Fix Comments
        var a5; // Utility Auto Fix Comments
        var b1; // Utility Auto Fix Comments
        var b2; // Utility Auto Fix Comments
        var b3; // Utility Auto Fix Comments
        var b4; // Utility Auto Fix Comments
        var b5; // Utility Auto Fix Comments
        /*
    a1=document.MAINFORM.PMT_CUST_AC_NO1.value;
    a2=document.MAINFORM.PMT_CUST_AC_NO2.value;
    a3=document.MAINFORM.PMT_CUST_AC_NO3.value;
    a4=document.MAINFORM.PMT_CUST_AC_NO4.value;
    a5=document.MAINFORM.PMT_CUST_AC_NO5.value;
    b1=document.MAINFORM.PMT_EQ_AMT1.value;
    b2=document.MAINFORM.PMT_EQ_AMT2.value;
    b3=document.MAINFORM.PMT_EQ_AMT3.value;
    b4=document.MAINFORM.PMT_EQ_AMT4.value;
    b5=document.MAINFORM.PMT_EQ_AMT5.value;
    if(SYS_BeFloat(document.MAINFORM.NET_DR_AMT.value)>'0')
    {
        if((b1>'0')&&(a1==''))
        {
           SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO1,'Please input the account No.1!');
           return false;
        }
        else if((b2>'0')&&(a2==''))
        {
            SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO2,'Please input the account No.2!');
            return false;
        } 
        else if((b3>'0')&&(a3==''))
        {
            SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO3,'Please input the account No.3!');
            return false; 
        }
        else if((b4>'0')&&(a4==''))
        {
            SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO4,'Please input the account No.4!');
            return false; 
        }
        else if((b5>'0')&&(a5==''))
        {
            SYS_CheckError(document.MAINFORM.PMT_CUST_AC_NO5,'Please input the account No.5!');
            return false; 
        }
        else
        {
            return true;
        } 
    }
    else
    {
       return true;
    }
    */
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
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
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_AMT_TO_BUY_onchange = function() {
    try {
        SYF_FFIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BA_ADOC_NO_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BA_TRX_NO_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUYING_FAV_RT_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_BUYING_RT_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_BAL_CCY_onchange = function() {
    try {
        CHG_allBalCcy_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_AT_onchange = function() {
    try {
        CHG_allTrxChargeAt_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_ALL_CHARGE_FOR_onchange = function() {
    try {
        CHG_allChargeFor_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_COLLECT_CCY_onchange = function() {
    try {
        Chg.Screen.collectCcyOnchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_FLD_LOCAL_CUST_AC_NO_onchange = function() {
    try {
        CHG_FLD_LOCAL_CUST_AC_NO_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CLERK_ID_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COLL_OVS_CHG_onchange = function() {
    try {
        SYF_FFIT_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_COMMIT_CCY_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CR_AC_NO_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CR_AMT_onchange = function() {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.CR_AMT.value)) {
            document.MAINFORM.CR_AMT.value = 0;
        }
        SYF_FFIT_AMT();
        SYF_FFIT_CR_AMT();
        SYF_FFIT_TEMP_FLG3();
        SYF_FFIT_TEMP_FLG1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CR_CUST_AMT_onchange = function() {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.CR_CUST_AMT.value)) {
            document.MAINFORM.CR_CUST_AMT.value = 0;
        }
        SYF_FFIT_AMT();
        SYF_FFIT_CR_CUST_AMT();
        //SETT_NONEXCH_FLG_onchange();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_C_MAIN_REF_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_DR_CUST_AMT_onchange = function() {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.DR_CUST_AMT.value)) {
            document.MAINFORM.DR_CUST_AMT.value = 0;
        }
        SYF_FFIT_AMT();
        SYF_FFIT_DR_CUST_AMT();

        //PaymentCcyAmt (document.MAINFORM.FINC_CCY.value,document.MAINFORM.DR_CUST_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FFT_BK_FLG_onchange = function() {
    try {
        SYF_FFIT_FFT_BK_FLG();
        SYF_FFIT_AUTH_POINT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_FINC_TYPE_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_GET_DATA_FLG_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_LC_CCY_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_SELLING_CUST_RT_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT_onchange = function() {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_AMT.value)) {
            document.MAINFORM.TEMP_AMT.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'M', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG2, 'O', 'N');
        }
        SYF_FFIT_AMT();
        SYF_FFIT_TEMP_FLG1();
        SYF_FFIT_AUTH_POINT1();
        SYF_FFIT_FFT_BK_FLG();
        SYF_FFIT_TEMP_AMT();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT1_onchange = function() {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_AMT1.value)) {
            document.MAINFORM.TEMP_AMT1.value = 0;
        }
        SYF_FFIT_TEMP_AMT1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT11_onchange = function() {
    try {
        document.MAINFORM.TEMP_AMT11.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT11.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT12_onchange = function() {
    try {
        document.MAINFORM.TEMP_AMT12.value = SYT_CCY_AMT(document.MAINFORM.FINC_CCY.value, document.MAINFORM.TEMP_AMT12.value);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT2_onchange = function() {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_AMT2.value)) {
            document.MAINFORM.TEMP_AMT2.value = 0;
        }
        SYF_FFIT_TEMP_AMT2();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_AMT3_onchange = function() {
    try {
        if (SYM_FFIT_CHK_NEG_VAL(document.MAINFORM.TEMP_AMT3.value)) {
            document.MAINFORM.TEMP_AMT3.value = 0;
        }
        SYF_FFIT_AMT();
        SYF_FFIT_TEMP_AMT3();
        SYF_FFIT_TEMP_CHAR4();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG1_onchange = function() {
    try {
        SYF_FFIT_TEMP_FLG1();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG2_onchange = function() {
    try {
        SYF_FFIT_TEMP_FLG2();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_TEMP_FLG3_onchange = function() {
    try {
        SYF_FFIT_TEMP_FLG3();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_VENT_CCY_onchange = function() {
    try {
        SYF_FFIT_CCY();
        GetTrxCcyExchRt(document.MAINFORM.VENT_CCY.value, document.MAINFORM.EXPT_ID.value);
        SYF_FFIT_VENT_CCY();
        SYF_FFIT_AMT();
        SYF_FFIT_AUTH_POINT1();
        SYF_FFIT_CR_CUST_AMT();
        SYF_FFIT_DR_CUST_AMT();
        SYF_FFIT_FFT_BK_FLG();
        CHG_INOUT_FLAG('IN', document.MAINFORM.VENT_CCY.value);
        TRX_CCY_COMM(document.MAINFORM.VENT_CCY.value);
        SYF_FFIT_TEMP_AMT1();
        SYF_FFIT_TEMP_AMT2();
        SYF_FFIT_TEMP_FLG1();
        SYF_FFIT_CR_AMT();
        SYF_FFIT_TEMP_FLG3();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_52_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ORDBK_ADD_52A', 'X202_52_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_53_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_SENDCORRADD53A', 'X202_53_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_54_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_RECCORRADD_54A', 'X202_54_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_56_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_MEDI_BKADD_56A', 'X202_56_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_57_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ACC_BKADD_57A', 'X202_57_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_58_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_BENE_BKADD_58A', 'X202_58_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ACC_BKID_57A_onchange = function() {
    try {
        if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
            SYS_GetCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A');
        } else {
            document.MAINFORM.X202_ACC_BKNM_57A.value = '';
            document.MAINFORM.X202_ACCBKADD1_57A.value = '';
            document.MAINFORM.X202_ACCBKADD2_57A.value = '';
            document.MAINFORM.X202_ACCBKADD3_57A.value = '';
            document.MAINFORM.X202_ACC_BKSW_57A.value = '';
            document.MAINFORM.X202_ACC_BKACNO57A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ADV_BKID_B2_onchange = function() {
    try {
        if (document.MAINFORM.X202_ADV_BKID_B2.value != '') {
            SYS_GetCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2');
        } else {
            document.MAINFORM.X202_ADV_BKNM_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD1_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD2_B2.value = '';
            document.MAINFORM.X202_ADV_BKADD3_B2.value = '';
            document.MAINFORM.X202_ADV_BKSW_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ADV_BKSW_B2_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_ORDER_NO_onchange = function() {
    try {
        if (document.MAINFORM.X202_B2_ORDER_NO.value != '') {
            SYS_GetCUBK('X202_ADV_BKADD_B2', 'X202_B2_ORDER_NO');
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_BENE_BKID_58A_onchange = function() {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
            SYS_GetCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
        } else {
            document.MAINFORM.X202_BENE_BKNM_58A.value = '';
            document.MAINFORM.X202BENEBKADD1_58A.value = '';
            document.MAINFORM.X202BENEBKADD2_58A.value = '';
            document.MAINFORM.X202BENEBKADD3_58A.value = '';
            document.MAINFORM.X202_BENE_BKSW_58A.value = '';
            document.MAINFORM.X202_BENEBKACNO58A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_MEDI_BKID_56A_onchange = function() {
    try {
        if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
            SYS_GetCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A');
        } else {
            document.MAINFORM.X202_MEDI_BKNM_56A.value = '';
            document.MAINFORM.X202MEDIBKADD1_56A.value = '';
            document.MAINFORM.X202MEDIBKADD2_56A.value = '';
            document.MAINFORM.X202MEDIBKADD3_56A.value = '';
            document.MAINFORM.X202_MEDI_BKSW_56A.value = '';
            document.MAINFORM.X202_MEDIBKACNO56A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_ORDBK_ID_52A_onchange = function() {
    try {
        if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
            SYS_GetCUBK_ALL('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A', 'ID');
        } else {
            document.MAINFORM.X202_ORDBK_NM_52A.value = '';
            document.MAINFORM.X202_ORDBKADD1_52A.value = '';
            document.MAINFORM.X202_ORDBKADD2_52A.value = '';
            document.MAINFORM.X202_ORDBKADD3_52A.value = '';
            document.MAINFORM.X202_ORDBK_SW_52A.value = '';
            document.MAINFORM.X202_ORDBKACNO_52A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_RECCORRID_54A_onchange = function() {
    try {
        if (document.MAINFORM.X202_RECCORRID_54A.value != '') {
            SYS_GetCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A');
        } else {
            document.MAINFORM.X202_RECCORRNM_54A.value = '';
            document.MAINFORM.X202_RECCORADD154A.value = '';
            document.MAINFORM.X202_RECCORADD254A.value = '';
            document.MAINFORM.X202_RECCORADD354A.value = '';
            document.MAINFORM.X202_RECCORRSW_54A.value = '';
            document.MAINFORM.X202RECCORRACNO54A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_SENDCORRID53A_onchange = function() {
    try {
        if (document.MAINFORM.X202_SENDCORRID53A.value != '') {
            SYS_GetCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A');
        } else {
            document.MAINFORM.X202_SENDCORRNM53A.value = '';
            document.MAINFORM.X202SENDCORADD153A.value = '';
            document.MAINFORM.X202SENDCORADD253A.value = '';
            document.MAINFORM.X202SENDCORADD353A.value = '';
            document.MAINFORM.X202_SENDCORRSW53A.value = '';
            document.MAINFORM.X202SENDCORACNO53A.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_GETAC_BTN_onclick = function() {
    try {
        CHG_Get_AC();
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_CHG_VALUE_DATE_onclick = function() {
    try {
        SYT_doCalendar(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_52_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ORDBK_ADD_52A', 'X202_ORDBK_ID_52A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_52_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_53_ORDER_NO.value = '';
        SYS_InqCUBK('X202_SENDCORRADD53A', 'X202_SENDCORRID53A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_53_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_SENDCORRID53A', 'X202_SENDCORRID53A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_54_ORDER_NO.value = '';
        SYS_InqCUBK('X202_RECCORRADD_54A', 'X202_RECCORRID_54A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_54_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_RECCORRID_54A', 'X202_RECCORRID_54A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_56_ORDER_NO.value = '';
        SYS_InqCUBK('X202_MEDI_BKADD_56A', 'X202_MEDI_BKID_56A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_56_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_57_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ACC_BKADD_57A', 'X202_ACC_BKID_57A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_57_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_58_ORDER_NO.value = '';
        SYS_InqCUBK('X202_BENE_BKADD_58A', 'X202_BENE_BKID_58A', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_58_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_ADD_BTN_onclick = function() {
    try {
        document.MAINFORM.X202_B2_ORDER_NO.value = '';
        SYS_InqCUBK('X202_ADV_BKADD_B2', 'X202_ADV_BKID_B2', 'ID');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}

csFuncLevelProto.FLD_FFIT_X202_B2_BTN_onclick = function() {
    try {
        SYS_InqCUBK('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2');
    } catch (e) {
        DisExcpt("SYF_FFIT_FFT_RefundCollection.js", e);
    }
}