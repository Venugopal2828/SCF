var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYM_IMCO_CHG_mapLocal_Foreign_Cust();
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        //tracery invoke a method for payment logic;
        Chg.attchEvent(SYF_IMCO_ChgCallBack);

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {


            SYM_IMCO_COLL_AMD_COMM_CHG();
            SYM_IMCO_COURIER_FEE_CHG();
            SYM_IMCO_Chg_Calculate_IMCOSWIFT();
            SYM_IMCO_Postage_charge();
            SYM_IMCO_DEF_PMT_COM_CHG();
            SYM_IMCO_Chg_Calculation_Other();
            SYM_IMCO_Rel_Goods_CHG();
        }
        SYT_Init_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.PRES_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.REMIT_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.DRWR_NOTES.name);
        SYM_IMCO_DRWE_ID_B2();
        SYM_IMCO_DRWR_ID_B2();
        SYM_IMCO_PRES_BK_ID_B2();
        SYM_IMCO_REMIT_BK_ID_B2();
        SYM_IMCO_Get_PRES_BK_ID();
        SYM_IMCO_Get_REMIT_BK_ID();
        SYM_IMCO_REIM_SWIFT_TAG();
        SYM_IMCO_PRE_SWIFT_TAG();
        SYT_Cal_CHG_FLD_LOCAL_CUST_CCY();
        document.MAINFORM.TEMP_DRWE_ID.value = 'DRWRIDFORCHG';
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'ProcessMT400';
        document.MAINFORM.NXT_STATUS.value = 'Close';
        document.MAINFORM.PMT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.BILL_AMT_TO_DRWR.value = SYS_BeFloat(document.MAINFORM.BILL_AMT_FM_DRWE.value);
        document.MAINFORM.REMIT_BK_CHG.value = SYS_BeFloat(document.MAINFORM.REMIT_BK_CHG_AMT.value);
        document.MAINFORM.PRES_BK_CHG_LCY.value = SYS_BeFloat(document.MAINFORM.REMIT_BK_CHG_AMT.value);

        SYM_IMCO_INIT();
        SYF_IMCO_CHK_INT_RT();
        SYF_IMCO_CHK_WAIVE_INSTRUCTION();
        SYF_IMCO_SEPARATE_CHG_FLG();
        SYF_IMCO_CHK_REMIT_BK_AMT_ADD();
        SYF_IMCO_CHK_REMIT_BK_CHG();
        SYF_IMCO_CHK_PRES_BK_SW_TAG();
        SYF_IMCO_CHK_REMIT_BK_SW_TAG();
        SYF_IMCO_CHK_DRWE_CORR_MED();
        SYF_IMCO_CHK_DRWR_CORR_MED();
        SYF_IMCO_CAL_NEW_COL_BAL();
        //tracery add a mark for payment logic
        SYF_IMCO_INT_REMIT_BK_CHG();
        SYF_IMCO_PRES_BK_ID();
        SYM_IMCO_DRWE_CORR_MED();
        SYM_IMCO_DRWR_CORR_MED();
        SYF_IMCO_Get_TEMP();
        //tracery invoke a method for payment logic
        SYF_IMCO_CHG_FLD_LOCAL_CUST_AC_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_INT_RT = function() {
    try {

        if (document.MAINFORM.COLL_INT_FLG.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.INT_RT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_DT, 'O');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.INT_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INT_FM_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INT_TO_DT, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_WAIVE_INSTRUCTION = function() {
    try {

        if (document.MAINFORM.WAIVE_INSTRUCTION.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ACPT_FLG, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ACPT_FLG, 'P');
            document.MAINFORM.DRWE_ACPT_FLG.value = 'Yes';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_SEPARATE_CHG_FLG = function() {
    try {

        //tracery modify for payment logic
        if (document.MAINFORM.CHG_FLG.value != 'Drawee' || document.MAINFORM.REMIT_BK_CHG_FLG.value != 'Drawee') {
            SYT_ChangeFldClass(document.MAINFORM.SEPARATE_CHG_FLG, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEPARATE_CHG_FLG, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_REMIT_BK_CHG = function() {
    try {

        if (document.MAINFORM.PRES_BK_CHG.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CHG_LCY, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CHG_LCY, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_REMIT_BK_AMT_ADD = function() {
    try {

        if (document.MAINFORM.ADDED_AMT_DET.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_AMT_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.REMIT_BK_AMT_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CAL_TTL_PAID_DRWR_AMT = function() {
    try {

        var nBILL_AMT = SYS_BeFloat(document.MAINFORM.BILL_AMT_TO_DRWR.value);
        var nINT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT_CHG_CCY.value);
        var nREMIT_BK_CHG = SYS_BeFloat(document.MAINFORM.REMIT_BK_CHG.value);
        var nCOLL_BK_CHG_MNS = SYS_BeFloat(document.MAINFORM.CHG_PD_BY_DRWR.value);

        var SUB_TTL = nBILL_AMT + nINT_AMT + nREMIT_BK_CHG - nCOLL_BK_CHG_MNS;

        document.MAINFORM.TTL_PAID_DRWR_AMT.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, SUB_TTL);
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_PRES_BK_SW_TAG = function() {
    try {

        if (document.MAINFORM.PRES_BK_SW_ADD.value != '') {
            document.MAINFORM.PRES_BK_SW_TAG.value = 'A';
        } else {
            document.MAINFORM.PRES_BK_SW_TAG.value = 'D';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_REMIT_BK_SW_TAG = function() {
    try {

        if (document.MAINFORM.REMIT_BK_SW_ADD.value != '') {
            document.MAINFORM.REMIT_BK_SW_TAG.value = 'A';
        } else {
            document.MAINFORM.REMIT_BK_SW_TAG.value = 'D';
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_DRWE_CORR_MED = function() {
    try {

        if (document.MAINFORM.DRWE_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_EMAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_EMAIL, 'O');
        }

        if (document.MAINFORM.DRWE_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_FAX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_FAX, 'O');
        }

        if (document.MAINFORM.DRWE_CORR_MED.value == 'Telex') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_TEL_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_TEL_NO, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHK_DRWR_CORR_MED = function() {
    try {

        if (document.MAINFORM.DRWR_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.DRWR_EMAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWR_EMAIL, 'O');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CAL_NEW_COL_BAL = function() {
    try {

        var nCOLL_TRX_BAL = SYS_BeFloat(document.MAINFORM.COLL_TRX_CCY_BAL.value);
        var nBILL_AMT = SYS_BeFloat(document.MAINFORM.BILL_AMT_FM_DRWE.value);

        if (nCOLL_TRX_BAL >= nBILL_AMT) {
            var nNEW_COL_BAL_CCY = nCOLL_TRX_BAL - nBILL_AMT;
            document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, nNEW_COL_BAL_CCY);
        } else {
            document.MAINFORM.NEW_COL_AMT_NCOL_CCY.value = 0.00;
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYT_CHG_VOUCHER();
        SYM_IMCO_MT400_TAG_32();
        SYM_IMCO_CAL_TENOR_32K();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CAL_LOCAL_Charge = function() {
    try {

        SYM_IMCO_Postage_charge();
        SYM_IMCO_Chg_Calculate_IMCOSWIFT();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Get_DRAWEE_ID = function() {
    try {

        SYS_GetCUBK('DRW_ID', document.MAINFORM.DRWE_ID.name, 'SYF_IMCO_CAL_LOCAL_Charge()');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_INT_REMIT_BK_CHG = function() {
    try {

        var nREMIT_BK_CHG = SYS_BeFloat(document.MAINFORM.REMIT_BK_CHG_AMT.value);

        document.MAINFORM.REMIT_BK_CHG.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, nREMIT_BK_CHG);
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_PRES_BK_ID = function() {
    try {

        if (document.MAINFORM.PRES_BK_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "M");
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_Get_TEMP = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_NO.value;
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_BILL_AMT_FM_DRWE = function() {
    try {

        var nBILL_AMT = SYS_BeFloat(document.MAINFORM.BILL_AMT_FM_DRWE.value);
        var nINT_AMT = SYS_BeFloat(document.MAINFORM.REMIT_BK_AMT_ADD.value);
        var nREMIT_BK_CHG = SYS_BeFloat(document.MAINFORM.PRES_BK_CHG_LCY.value);
        var nDE_BK_CHG = SYS_BeFloat(document.MAINFORM.CHG_PD_BY_DRWE.value);
        var nCOLL_BK_CHG_MNS = SYS_BeFloat(document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value);

        var nCOLL_BK_CHG_MNS = nBILL_AMT + nINT_AMT + nREMIT_BK_CHG + nDE_BK_CHG;
        //tracery modify for payment logic

        document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, nCOLL_BK_CHG_MNS);
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRWE_ID_B = function() {
    try {

        SYF_IMCO_CAL_LOCAL_Charge();
        SYM_IMCO_DRWE_CORR_MED();
        SYM_IMCO_Cal_DRWE_ID_back();
        SYM_IMCO_DRWE_ID_B2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRWE_NM_Z = function() {
    try {

        if (document.MAINFORM.DRWE_ID.value == '') {
            document.MAINFORM.DRWE_ADD1.value = '';
            document.MAINFORM.DRWE_ADD2.value = '';
            document.MAINFORM.DRWE_ADD3.value = '';
            document.MAINFORM.DRWE_CORR_MED.value = '';
            document.MAINFORM.DRWE_EMAIL.value = '';
            document.MAINFORM.DRWE_FAX.value = '';
            document.MAINFORM.DRWE_LANG.value = 'English';
            document.MAINFORM.DRWE_MAIL_ADD.value = '';
            document.MAINFORM.DRWE_NM.value = '';
            document.MAINFORM.DRWE_REF.value = '';
            document.MAINFORM.DRWE_TELEX.value = '';
            document.MAINFORM.DRWE_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.DRWE_NOTES.name);
            SYM_IMCO_DRWE_ID_B2();
        } else {
            SYS_GetCUBK('DRW_ID', document.MAINFORM.DRWE_ID.name, 'SYF_IMCO_DRWE_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRWR_ID_B = function() {
    try {

        SYM_IMCO_DRWR_CORR_MED();
        SYM_IMCO_Cal_DRWR_ID_back();
        SYM_IMCO_DRWR_ID_B2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_DRWR_NM_Z = function() {
    try {

        if (document.MAINFORM.DRWR_ID.value == '') {
            document.MAINFORM.DRWR_LANG.value = 'English';
            document.MAINFORM.DRWR_MAIL_ADD.value = '';
            document.MAINFORM.DRWR_NM.value = '';
            document.MAINFORM.DRWR_TELEX.value = '';
            document.MAINFORM.DRWR_ADD1.value = '';
            document.MAINFORM.DRWR_ADD2.value = '';
            document.MAINFORM.DRWR_ADD3.value = '';
            document.MAINFORM.DRWR_CORR_MED.value = '';
            document.MAINFORM.DRWR_EMAIL.value = '';
            document.MAINFORM.DRWR_FAX.value = '';
            document.MAINFORM.DRWR_NOTES.value = '';
            SYT_Show_Notes(document.MAINFORM.DRWR_NOTES.name);
            SYM_IMCO_DRWR_ID_B2();

        } else {
            SYS_GetCUBK('DRWR_ID', document.MAINFORM.DRWR_ID.name, 'SYF_IMCO_DRWR_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_CHG_FLD_LOCAL_CUST_AC_NO = function() {
    try {

        //tracery add this method for payment logic
        if (document.MAINFORM.SEPARATE_CHG_FLG.value == "Yes") {
            CHG_set_UsedChgACFlag(true);
        } else {
            CHG_set_UsedChgACFlag(false);
        }
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.SYF_IMCO_ChgCallBack = function() {
    try {

        //tracery add this method for payment logic
        if (document.MAINFORM.SEPARATE_CHG_FLG.value == "No") {
            document.MAINFORM.CHG_PD_BY_DRWE.value = Chg.Screen.getLocalChgCustPayTotalAmt();
        } else {
            document.MAINFORM.CHG_PD_BY_DRWE.value = 0;
        }
        EEHtml.fireEvent(document.MAINFORM.CHG_PD_BY_DRWE, "onchange");
        SYF_IMCO_CAL_TTL_PAID_DRWR_AMT();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_BILL_AMT_FM_DRWE_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_BILL_AMT_TO_DRWR_onchange = function(event) {
    try {
        SYF_IMCO_CAL_TTL_PAID_DRWR_AMT();
        //tracery add a link for payment logic
        EEHtml.fireEvent(document.MAINFORM.TTL_PAID_DRWR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_PD_BY_DRWE_onchange = function(event) {
    try {
        //tracery add for payment logic
        SYF_IMCO_BILL_AMT_FM_DRWE();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_CHG_PD_BY_DRWR_onchange = function(event) {
    try {
        SYF_IMCO_CAL_TTL_PAID_DRWR_AMT();
        //tracery add a link for payment logic
        EEHtml.fireEvent(document.MAINFORM.TTL_PAID_DRWR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_COLL_NO_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_IMCO_Get_TEMP();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ID_onchange = function(event) {
    try {
        SYF_IMCO_DRWE_NM_Z();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWE_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_IMCO_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_onchange = function(event) {
    try {
        SYF_IMCO_DRWR_NM_Z();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWR_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_DRWR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_DRW_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_DRWE_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_INT_AMT_CHG_CCY_onchange = function(event) {
    try {
        SYF_IMCO_CAL_TTL_PAID_DRWR_AMT();
        //tracery add a link for payment logic
        EEHtml.fireEvent(document.MAINFORM.TTL_PAID_DRWR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_NET_AMT_RCVD_COLL_CCY_onchange = function(event) {
    try {
        //tracery add for payment logic
        SYM_IMCO_Set_NET_AMT_RCVD_COLL_CCY_toPayment();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_CHG_LCY_onchange = function(event) {
    try {
        SYF_IMCO_BILL_AMT_FM_DRWE();
        //tracery modify for payment logic
        EEHtml.fireEvent(document.MAINFORM.REMIT_BK_CHG, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.NEW_COL_AMT_NCOL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_PRES_BK_ID_M();
        SYM_IMCO_Cal_PRES_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_PRES_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_ORDER_POST2();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_PRES_BK_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_PRES_BK_ID();
        SYM_IMCO_PRE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_AMT_ADD_onchange = function(event) {
    try {
        SYF_IMCO_BILL_AMT_FM_DRWE();
        //tracery modify for payment logic
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_RCVD_COLL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_CHG_onchange = function(event) {
    try {
        SYF_IMCO_CAL_TTL_PAID_DRWR_AMT();
        //tracery add a link for payment logic
        EEHtml.fireEvent(document.MAINFORM.TTL_PAID_DRWR_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_CHG_AMT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_NM();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ID_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Sql_REMIT_BK_ID();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_BK_ORDER_POST2()
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_BK_SW_ADD_onchange = function(event) {
    try {
        SYM_IMCO_Get_REMIT_BK_ID();
        SYM_IMCO_REIM_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_REMIT_POST_ADD_BTN_onclick = function(event) {
    try {
        SYM_IMCO_Cal_REMIT_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_SEPARATE_CHG_FLG_onchange = function(event) {
    try {
        //tracery add event.currentTarget method for payment logic
        SYF_IMCO_CHG_FLD_LOCAL_CUST_AC_NO();
        SYF_IMCO_ChgCallBack();
        EEHtml.fireEvent(document.MAINFORM.NET_AMT_RCVD_COLL_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_TTL_PAID_DRWR_AMT_onchange = function(event) {
    try {
        //tracery add for payment logic
        SYM_IMCO_Set_TTL_PAID_DRWR_AMT_toPayment();
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('SPCL_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}

csFuncLevelProto.FLD_IMCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IMCO_Process_MT400.js", e);
    }
}