var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_ABLF_SetLoanRef = function(ref) {
    try { 

        var UnitCode = SYS_BUSI_UNIT;
        var dt = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = dt.substr(2, 2);
        document.MAINFORM.FA_LOAN_ID.value = 'ABLF' + UnitCode + year + ref + 'LOAN';

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_LOAN_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.LOAN_TIMES.value = SYS_BeFloat(document.MAINFORM.LOAN_TIMES.value) + 1;
        document.MAINFORM.FA_LOAN_STATUS.value = 'LOAN';
        SYS_GetRefNo('ABLF_LOAN', 'SYF_ABLF_SetLoanRef');
        document.MAINFORM.FA_TEMP6.value = SYS_BeFloat(document.MAINFORM.REG_LOAN_BAL.value);
        document.MAINFORM.FA_TEMP_AMT7.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_BAL.value);
        document.MAINFORM.FA_TEMP_AMT8.value = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value);
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        //test by michael
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_GetExchangeRate = function() {
    try {

        if (document.MAINFORM.FA_LMT_CCY.value != '' && document.MAINFORM.FA_LOAN_CCY.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.FA_LMT_CCY.value, 'Booking Rate', 'FA_LOAN_EXCH');
            EEHtml.fireEvent(document.MAINFORM.FA_LOAN_EXCH, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_InterestRate = function() {
    try {

        if (document.MAINFORM.BASE_RT_TP.value == '1') {
            document.MAINFORM.FA_LOAN_INT_RT.value = SYS_BeFloat(document.MAINFORM.FLAT_RT.value);
        } else {
            document.MAINFORM.FA_LOAN_INT_RT.value = SYS_BeFloat(document.MAINFORM.XBOR_RT.value) + SYS_BeFloat(document.MAINFORM.SPRD_RT.value);
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.LOAN_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
        document.MAINFORM.LOAN_BAL_LMT.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) * SYS_BeFloat(document.MAINFORM.FA_LOAN_EXCH.value);
        document.MAINFORM.LOAN_BAL_LMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.LOAN_BAL_LMT.value);
        document.MAINFORM.REG_LOAN_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP6.value) + SYS_BeFloat(document.MAINFORM.LOAN_BAL_LMT.value);
        document.MAINFORM.REG_LOAN_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.REG_LOAN_BAL.value);
        document.MAINFORM.FA_TTL_LOAN_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT7.value) + SYS_BeFloat(document.MAINFORM.LOAN_BAL_LMT.value);
        document.MAINFORM.FA_TTL_LOAN_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_TTL_LOAN_BAL.value);
        document.MAINFORM.FA_LMT_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) - SYS_BeFloat(document.MAINFORM.LOAN_BAL_LMT.value);
        document.MAINFORM.FA_LMT_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_BAL.value);
        document.MAINFORM.REG_LOWEST_VAL.value = SYS_BeFloat(document.MAINFORM.REG_LOAN_BAL.value) * 100 / SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value);
        document.MAINFORM.REG_LOWEST_VAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.REG_LOWEST_VAL.value);
        document.MAINFORM.FA_LAST_PINT_DT.value = document.MAINFORM.FA_LOAN_VAL_DT.value;
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_TtlLoanAvl = function() {
    try {

        document.MAINFORM.TTL_LOAN_AVL.value = (SYS_BeFloat(document.MAINFORM.REG_AMT.value) * SYS_BeFloat(document.MAINFORM.FA_MAX_LOAN_PERC.value) / 100 - SYS_BeFloat(document.MAINFORM.FA_TEMP6.value)) / SYS_BeFloat(document.MAINFORM.FA_LOAN_EXCH.value);
        document.MAINFORM.TTL_LOAN_AVL.value = Math.max(0, SYS_BeFloat(document.MAINFORM.TTL_LOAN_AVL.value));
        document.MAINFORM.TTL_LOAN_AVL.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.TTL_LOAN_AVL.value);
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_AmtToCust = function() {
    try {

        document.MAINFORM.CUST_CR_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_AMT.value);
        document.MAINFORM.CUST_CR_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.CUST_CR_AMT.value);
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_Charge = function() {
    try {

        if (document.MAINFORM.CHARGE_TP.value == '1' && document.MAINFORM.LOAN_TIMES.value == 1) {
            document.MAINFORM.CHARGE.value = SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value) * SYS_BeFloat(document.MAINFORM.CHARGE_RT.value) / 100;
        } else if (document.MAINFORM.CHARGE_TP.value == '2' && document.MAINFORM.LOAN_TIMES.value == 1) {
            document.MAINFORM.CHARGE.value = SYS_BeFloat(document.MAINFORM.CHARGE_AMT.value);
        } else if (document.MAINFORM.CHARGE_TP.value == '3') {
            document.MAINFORM.CHARGE.value = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) * SYS_BeFloat(document.MAINFORM.CHARGE_RT.value) / 100;
        } else if (document.MAINFORM.CHARGE_TP.value == '4') {
            document.MAINFORM.CHARGE.value = SYS_BeFloat(document.MAINFORM.CHARGE_AMT.value);
        } else {
            document.MAINFORM.CHARGE.value = 0;
        }
        document.MAINFORM.CHARGE.value = SYT_CCY_AMT(document.MAINFORM.CHARGE_CCY.value, document.MAINFORM.CHARGE.value);
        SYF_ABLF_Set_Charge();

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Cal_ChargeCCY = function() {
    try {

        if (document.MAINFORM.CHARGE_TP.value == '1' || document.MAINFORM.CHARGE_TP.value == '2') {
            document.MAINFORM.CHARGE_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        } else if (document.MAINFORM.CHARGE_TP.value == '3' || document.MAINFORM.CHARGE_TP.value == '4') {
            document.MAINFORM.CHARGE_CCY.value = document.MAINFORM.FA_LOAN_CCY.value;
        } else {
            document.MAINFORM.CHARGE_CCY.value == '';
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Get_BaseDay_CCYDec = function() {
    try {

        SYS_GetTableDataByRule_S('Get_BaseDay', '1', 'Y');
        document.MAINFORM.IA_I_CCY_DEC.value = findDecFromCCY(document.MAINFORM.FA_LOAN_CCY.value);
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_InquireInterest_eLoan = function() {
    try {

        var iaYReaccInt;
        if (document.MAINFORM.FA_INT_CHG_TYPE.value == '1') {
            if (SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) > 0) {
                SYS_InqGapi_S('eLoan_InquireInterest');
                iaYReaccInt = SYS_BeFloat(document.MAINFORM.IA_Y_REACC_INT.value);
            } else {
                iaYReaccInt = 0;
            }
            document.MAINFORM.FA_LOAN_INT_AMT.value = iaYReaccInt;
            EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_AMT, 'onchange');
        } else {
            document.MAINFORM.FA_LOAN_INT_AMT.value = 0;
            EEHtml.fireEvent(document.MAINFORM.FA_LOAN_INT_AMT, 'onchange');
        }

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            SYF_ABLF_GetExchangeRate();
            SYF_ABLF_Get_BaseDay_CCYDec();
            SYF_ABLF_Cal_TtlLoanAvl();
            SYF_ABLF_Cal_InterestRate();
            SYF_ABLF_Cal_ChargeCCY();
            SYF_ABLF_Cal_Charge();
        }
        SYF_ABLF_CHG_INIT();

        //////////Add By Echo for charge
        var arrOptionV = ['0'];
        SYS_FilterOptions('CHG_FLD_ALL_CHARGE_AT', arrOptionV);
        var valueArray;
        var descArray;
        valueArray = ['L'];
        descArray = ['Customer'];
        SYS_FilterOptions('CHG_FLD_ALL_CHARGE_FOR', valueArray);
        var obj1 = $('CHG_FLD_ALL_CHARGE_AT');
        obj1.value = '0';
        EEHtml.fireEvent(obj1, "onchange");
        var obj2 = $('CHG_FLD_ALL_CHARGE_FOR');
        obj2.value = 'L';
        EEHtml.fireEvent(obj2, "onchange");
        //////////////
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CheckLoanDueDt = function() {
    try {

        var a1;
        a1 = SYS_GetSubDays(document.MAINFORM.FA_LOAN_DUE_DT.name, document.MAINFORM.TRX_DT.name);
        if (a1 > 0) {
            alert('Loan Due Date should be a future date. Please check.');
            document.MAINFORM.FA_LOAN_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CheckReqLoanAmt = function() {
    try {

        var checkval = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) * SYS_BeFloat(document.MAINFORM.FA_LOAN_EXCH.value) / 100;
        if (checkval > SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value)) {
            alert('Request Loan Amount cannot more than Limit Available!');
            document.MAINFORM.FA_TTL_LOAN_AMT.value = 0;
            return false;
        }
        if (SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) > SYS_BeFloat(document.MAINFORM.TTL_LOAN_AVL.value)) {
            alert('Request Loan Amount cannot more than Total Available for Finance!');
            document.MAINFORM.FA_TTL_LOAN_AMT.value = 0;
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_ABLF_CheckLoanDueDt()) {
            return false;
        }
        if (!SYF_ABLF_CheckReqLoanAmt()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        var arrayvalue;
        var chgEntry;
        var commList1;
        var i;
        var record;
        var type;
        var xDO;
        xDO = SYS_getDoByXpath("ChgDoTrx");
        type = document.MAINFORM.CHARGE_TP.value;
        if (xDO) {
            commList1 = "ABLF_CHG";
            if (type != '5') {
                Chg.LoadCommission(commList1, 'MAINREF', '', null, '', '', 'false');
            }
        }
        arrayvalue = SYS_getRecords(xDO);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            chgEntry = new Chg.Entry(record);
            Chg.Screen.putOrignalTrxChg(chgEntry);
        }
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYF_ABLF_Get_DOdata_Collateral();
        }
        SYF_ABLF_Set_Charge();
        SYS_disableButton(Chg.Screen.trxChgDoNm, 'TotalAmt');
        SYS_disableButton(Chg.Screen.defChgDoNm, 'TotalAmt');
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Set_Charge = function() {
    try {

        var COMM;
        var cbccy;
        var i;
        var id;
        var records;
        var type;
        var xDO;
        xDO = SYS_getDoByXpath("ChgDoTrx");
        if (xDO) {
            chccy = document.MAINFORM.CHARGE_CCY.value;
            type = document.MAINFORM.FA_BUSI_TYPE.value;
            records = SYS_getRecords(xDO);
            COMM = new Array();
            for (i = 0; i < records.length; i++) {
                COMM[0] = SYS_getValFromRec(records[i], "CHG_COMMISSION_CODE");
                id = SYS_getRecID(records[i]);
                if (COMM[0] == 'ABLF_CHG') {
                    Chg.Screen.setChargeValue(COMM, chccy, document.MAINFORM.CHARGE.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.CHARGE.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", chccy);
                }
            }
            Chg_MultiDebitInvoker();
        }
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_SetDebitCreditData = function() {
    try {

        var IntSum;
        var actions;
        var ccyProtecteFlgs;
        var comp;
        var dcFlgs;
        var descs;
        var keyindex;
        var merges;
        var payAMTs;
        var payCCYs;
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "Finance";
        IntSum = SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_AMT.value);
        if (IntSum != 0) {
            dcFlgs = "D/C/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_CUST_ID.value;
            payCCYs = document.MAINFORM.FA_LOAN_CCY.value + "/" + document.MAINFORM.FA_LOAN_CCY.value + "/" + document.MAINFORM.FA_LOAN_CCY.value;
            payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + document.MAINFORM.FA_LOAN_INT_AMT.value + "/" + document.MAINFORM.CUST_CR_AMT.value;
            descs = "Total Loan Amt/Upfront Interest Amt/Amount to Customer";
            ccyProtecteFlgs = "N/N/N"; //protected ccy
            actions = "S/S/S"; //save
            merges = "N/N/N";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        } else {
            dcFlgs = "D/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.FA_CUST_ID.value;
            payCCYs = document.MAINFORM.FA_LOAN_CCY.value + "/" + document.MAINFORM.FA_LOAN_CCY.value;
            payAMTs = document.MAINFORM.FA_TTL_LOAN_AMT.value + "/" + document.MAINFORM.CUST_CR_AMT.value;
            descs = "Total Loan Amt/Amount to Customer";
            ccyProtecteFlgs = "N/N"; //protected ccy
            actions = "S/S"; //save
            merges = "N/N";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        }
        /*if (SYS_BeFloat(document.MAINFORM.CHARGE.value) > 0) {
    descs1 = "Total ABL Financing Charge";
    dcFlgs1 = "D/C"; //debit and credit group
    keyindex1 = document.MAINFORM.FA_CUST_ID.value + "/" + document.MAINFORM.FA_CUST_ID.value;
    payCCYs1 = document.MAINFORM.CHARGE_CCY.value + "/" + document.MAINFORM.CHARGE_CCY.value;
    payAMTs1 = document.MAINFORM.CHARGE.value + "/" + document.MAINFORM.CHARGE.value;
    descs1 += "/Total ABL Financing Charge";
    ccyProtecteFlgs1 = "N/N"; //protected ccy
    actions1 = "S/S"; //save
    merges1 = "N/N";
    comp1 = "Total ABL Financing Charge";
    SYT_MLDC_SaveSummary(dcFlgs1, keyindex1, payCCYs1, descs1, payAMTs1, ccyProtecteFlgs1, actions1, merges1, comp1);
}*/
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_CHG_INIT = function() {
    try {

        var type;
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        type = document.MAINFORM.FA_BUSI_TYPE.value;
        Chg.Screen.mapLocalCust("FA_CUST_ID", "FA_CUST_NM");
        Chg.Screen.mapForeignCust("FA_CUST_ID", "FA_CUST_NM");

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.SYF_ABLF_Get_DOdata_Collateral = function() {
    try {

        SYS_GetDataForDO_S("Get_CollateralForLoan", "N", false, '', "Collateral")
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_FA_INT_CHG_TYPE_onchange = function(event) {
    try {
        SYF_ABLF_InquireInterest_eLoan();
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_FA_LOAN_CCY_onchange = function(event) {
    try {
        SYF_ABLF_GetExchangeRate();
        SYF_ABLF_Cal_ChargeCCY();
        SYF_ABLF_Get_BaseDay_CCYDec();

    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_FA_LOAN_DUE_DT_onchange = function(event) {
    try {
        SYF_ABLF_CheckLoanDueDt();
        SYF_ABLF_InquireInterest_eLoan();
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_FA_LOAN_INT_AMT_onchange = function(event) {
    try {
        SYF_ABLF_Cal_AmtToCust();
        SYF_ABLF_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}

csFuncLevelProto.FLD_ABLF_FA_TTL_LOAN_AMT_onchange = function(event) {
    try {
        SYF_ABLF_CheckReqLoanAmt();
        SYF_ABLF_Cal_Charge();
        SYF_ABLF_InquireInterest_eLoan();
        SYF_ABLF_Cal_AmtToCust();
        SYF_ABLF_SetDebitCreditData();


    } catch (e) {
        DisExcpt("SYF_ABLF_ABLFinancing.js", e);
    }
}