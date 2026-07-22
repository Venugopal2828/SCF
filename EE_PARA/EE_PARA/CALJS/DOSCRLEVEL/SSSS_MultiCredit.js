"path:SCRN/DO/MultiCredit.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.AmtFormatAmtTrxccy = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        ccy = document.MAINFORM.C_MLDC_CCY.value;
        amt = document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value;
        document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.AmtFromatAmtCrccy = function() {
    try {
        var amt; // Utility Auto Fix Comments
        amt = document.MAINFORM.N_MLDC_CR_AMT_CRCCY.value;
        document.MAINFORM.N_MLDC_CR_AMT_CRCCY.value = SYT_AmtFormat(document.MAINFORM.C_MLDC_CR_CCY.value, amt);
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.CHK_Total_Pct = function() {
    try {
        var arrCredit; // Utility Auto Fix Comments
        var credit; // Utility Auto Fix Comments
        var editid; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordId; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var tempSum; // Utility Auto Fix Comments
        var ttlAmt; // Utility Auto Fix Comments
        targetDo = SYS_getDoByXpath("MultiCreditSummary.MultiCredit");
        arrCredit = SYS_getRecords(targetDo);
        len = arrCredit.length;

        tempSum = SYS_BeFloat(document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value);
        record = SYS_getParentRecord(parent.currentDo);
        ttlAmt = parseFloat(record['N_MLDC_AMT']);
        editid = targetDo.grid.getSelectionModel().editRowId;
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
            credit = arrCredit[i];
            recordId = SYS_getRecID(credit);
            if (editid != recordId) {
                tempSum += parseFloat(SYS_getValFromRec(credit, "N_MLDC_CR_AMT_TXCCY"));
            }
        }
        if (tempSum > ttlAmt) {
            SYS_ThrowError_S("4619", 'credit');
            document.MAINFORM.C_MLDC_CR_PER.value = 0;
            document.MAINFORM.N_MLDC_CR_AMT_CRCCY.value = SYT_AmtFormat(document.MAINFORM.C_MLDC_CR_CCY.value, 0);
            document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.C_MLDC_CCY.value, 0);
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.Cal_MLDC_ASSGN_ID = function() {
    try {
        if (document.MAINFORM.C_MLDC_CR_AC_TYPE.value == 'CUSTOMER') {
            SYS_InqCUBK('MultiCredit_MLDC_ASSGN_ID', 'C_MLDC_ASSGN_ID');
        } else if (document.MAINFORM.C_MLDC_CR_AC_TYPE.value == 'NOSTRO' || document.MAINFORM.C_MLDC_CR_AC_TYPE.value == 'VOSTRO') {
            SYS_InqCUBK('MultiCredit_CR_BK', 'C_MLDC_ASSGN_ID');
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.Cal_MLDC_CR_AC_TYPE = function() {
    try {
        if (document.MAINFORM.C_MLDC_CR_AC_TYPE.value == 'INTERNAL') {
            SYT_ChangeFldClass(document.MAINFORM.MLDC_ASSGN_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.C_MLDC_ASSGN_ID, 'O');
            document.MAINFORM.C_MLDC_ASSGN_ID.value = '';
            document.MAINFORM.C_MLDC_ASSGN_NM.value = '';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.MLDC_ASSGN_ID_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.C_MLDC_ASSGN_ID, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.CheckCreditSummryForLastPerc = function() {
    try {
        var currPayAmt; // Utility Auto Fix Comments
        var currPerc; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var sum_Amt; // Utility Auto Fix Comments
        var sum_Perc; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var ttlAmt; // Utility Auto Fix Comments
        targetDo = SYS_getDoByXpath("MultiCreditSummary.MultiCredit");
        sum_Perc = parseFloat(targetDo.getFieldSumValue("C_MLDC_CR_PER"));
        currPerc = parseFloat(document.MAINFORM.C_MLDC_CR_PER.value);
        if (SYS_floatAddition(sum_Perc, currPerc) == 100) {
            record = SYS_getParentRecord(parent.currentDo);
            ttlAmt = parseFloat(record['N_MLDC_AMT']);
            sum_Amt = parseFloat(targetDo.getFieldSumValue("N_MLDC_CR_AMT_TXCCY"));
            currPayAmt = parseFloat(document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value);
            if (SYS_floatAddition(sum_Amt, currPayAmt) > ttlAmt) {
                currPayAmt = SYS_FloatSubtracter(ttlAmt, sum_Amt);
                document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value = currPayAmt;
                document.MAINFORM.C_MLDC_CR_PER.value = currPerc;
                EEHtml.fireEvent(document.MAINFORM.N_MLDC_CR_AMT_TXCCY, "onchange");
            }
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.Check_MLDC_CR_PER = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var totalAmt; // Utility Auto Fix Comments
        record = SYS_getParentRecord(parent.currentDo);
        totalAmt = parseFloat(record['N_MLDC_AMT']);
        node = SYS_getDoByXpath("MultiCreditSummary.MultiCredit");
        if (node == null) {
            return;
        }
        arrayvalue = SYS_getRecords(node);
        len = arrayvalue.length;
        if (len < 1) {
            document.MAINFORM.C_MLDC_CR_PER.value = "100";
            document.MAINFORM.N_MLDC_CR_AMT_CRCCY.value = SYT_AmtFormat(document.MAINFORM.C_MLDC_CR_CCY.value, totalAmt);
            document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.C_MLDC_CCY.value, totalAmt);
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        var strDesc;
        if (SYS_ORG_FUNCTION_NAME == 'Financing_ME' || SYS_ORG_FUNCTION_NAME == 'ProcessFinancingFromCE') {
            strDesc = document.MAINFORM.C_MLDC_DESC.value;
            if (strDesc === "Amount to Seller") {
                var FA_DOC_CR_AC_TEMP = document.MAINFORM.C_MLDC_CR_AC.value;
                SYS_setValueToMain("FA_DOC_CR_AC_TEMP", FA_DOC_CR_AC_TEMP);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!CHK_Total_Pct()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.CreditInitForFunction = function() {
    try {
        var arrOption; // Utility Auto Fix Comments
        var ccyVal; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var oldValue; // Utility Auto Fix Comments
        var selectObj; // Utility Auto Fix Comments
        ccyVal = document.MAINFORM.C_MLDC_CCY.value;
        document.MAINFORM.C_MLDC_TEMP_CCY.value = ccyVal;
        document.MAINFORM.C_TRX_CCY.value = ccyVal;
        selectObj = document.MAINFORM.C_MLDC_CR_CCY;
        arrOption = selectObj.options;
        oldValue = selectObj.value;
        len = arrOption.length;
        for (i = 0; i < len; i++) {
            if (arrOption[i].value == ccyVal) {
                arrOption[i].selected = true;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.DebitCheckRecordStatus = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("MultiCreditSummary.MultiCredit");
        arrayvalue = SYS_getRecords(node);
        if (arrayvalue.length == 0) {
            return "A";
        } else {
            return "E";
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.ExchangingRate = function() {
    try {
        var ayyRateObj; // Utility Auto Fix Comments
        var exchgRate; // Utility Auto Fix Comments
        var fromccy; // Utility Auto Fix Comments
        var rateObj; // Utility Auto Fix Comments
        var sAccType; // Utility Auto Fix Comments
        var toccy; // Utility Auto Fix Comments
        var trxAmt; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {
            fromccy = document.MAINFORM.C_MLDC_CCY.value;
            if (fromccy == null) {
                fromccy = document.MAINFORM.C_TRX_CCY.value;
            }
            toccy = document.MAINFORM.C_MLDC_CR_CCY.value;
            sAccType = document.MAINFORM.C_MLDC_CR_AC_TYPE.value;
            trxAmt = document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value;


            trxAmt = SYS_BeFloat(SYS_MidifyDecimal(trxAmt, true));
            if (fromccy == toccy) {
                rateObj = 1;
                if (trxAmt != null) {
                    document.MAINFORM.N_MLDC_CR_AMT_CRCCY.value = SYT_AmtFormat(toccy, parseFloat(trxAmt));
                    document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value = document.MAINFORM.N_MLDC_CR_AMT_CRCCY.value;
                }
            } else {
                if (sAccType == "CUSTOMER") {
                    ayyRateObj = SYS_GetExchangeRateAMT_S(fromccy, toccy, 'Buying Rate;Buying Rate;Selling Rate', trxAmt, document.MAINFORM.N_MLDC_CR_AMT_CRCCY.name, 'Y');
                } else {
                    ayyRateObj = SYS_GetExchangeRateAMT_S(fromccy, toccy, 'Selling Rate;Selling Rate;Buying Rate', trxAmt, document.MAINFORM.N_MLDC_CR_AMT_CRCCY.name, 'Y');
                }
                rateObj = ayyRateObj[2];
            }
            if (rateObj == undefined) {
                return;
            }
            exchgRate = SYS_MidifyDecimal(rateObj, true);
            document.MAINFORM.F_MLDC_CR_BUY_RATE.value = exchgRate;
            document.MAINFORM.C_MLDC_TEMP_CCY.value = document.MAINFORM.C_MLDC_CR_CCY.value;
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.Get_MLDC_ASSGN_ID = function() {
    try {
        var sAcType; // Utility Auto Fix Comments
        var vAssId; // Utility Auto Fix Comments
        vAssId = document.MAINFORM.C_MLDC_ASSGN_ID.value;
        if (vAssId != "") {
            sAcType = document.MAINFORM.C_MLDC_CR_AC_TYPE.value;
            if (sAcType == 'CUSTOMER') {
                SYS_GetCUBK('MultiCredit_MLDC_ASSGN_ID', 'C_MLDC_ASSGN_ID');
            } else if (sAcType == 'NOSTRO' || sAcType == 'VOSTRO') {
                SYS_GetCUBK('MultiCredit_CR_BK', 'C_MLDC_ASSGN_ID');
            }
        } else {
            document.MAINFORM.C_MLDC_ASSGN_NM.value = "";
            document.MAINFORM.C_MLDC_CR_AC.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var operate; // Utility Auto Fix Comments
        var status; // Utility Auto Fix Comments
        operate = DebitCheckRecordStatus();
        if (operate == "A") {
            Check_MLDC_CR_PER();
        }
        /*
status = checkCCYIsProtected();
if(status == "Y"){
	SYT_ChangeFldClass(document.MAINFORM.C_MLDC_CR_CCY,'P');
}else{
	CreditInitForFunction();
	SYT_ChangeFldClass(document.MAINFORM.C_MLDC_CR_CCY,'M');
}
*/
        //Edit by amy for optional CCY
        CreditInitForFunction();
        SYT_ChangeFldClass(document.MAINFORM.C_MLDC_CR_CCY, 'M');
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.MLDC_CR_AMT_CRCCY = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var crBuyRate; // Utility Auto Fix Comments
        var crRate; // Utility Auto Fix Comments
        var trAmount; // Utility Auto Fix Comments
        crBuyRate = document.MAINFORM.F_MLDC_CR_BUY_RATE.value;
        if (crBuyRate != '' && crBuyRate != null) {
            trAmount = SYS_BeFloat(SYS_MidifyDecimal(document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value, true));
            crRate = SYS_BeFloat(SYS_MidifyDecimal(crBuyRate, true));
            amt = SYS_FloatMul(trAmount, crRate);
            document.MAINFORM.N_MLDC_CR_AMT_CRCCY.value = SYT_AmtFormat(document.MAINFORM.C_MLDC_CR_CCY.value, amt);
        } else {
            document.MAINFORM.N_MLDC_CR_AMT_CRCCY.value = 0.0;
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.MLDC_CR_AMT_TXCCY = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        record = SYS_getParentRecord(parent.currentDo);
        amt = parseFloat(record['N_MLDC_AMT']);
        ccy = document.MAINFORM.C_MLDC_CCY.value;
        //amt = parseFloat(document.MAINFORM.C_MLDC_CR_PER.value)*parseFloat(amt)/100;
        amt = SYS_FloatDiv(SYS_FloatMul(parseFloat(document.MAINFORM.C_MLDC_CR_PER.value), parseFloat(amt)), 100);
        document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.MLDC_CR_AMT_TXCCYfromCrccy = function() {
    try {
        var amt; // Utility Auto Fix Comments
        if (document.MAINFORM.F_MLDC_CR_BUY_RATE.value != '' && document.MAINFORM.F_MLDC_CR_BUY_RATE.value != 0) {
            amt = SYS_BeFloat(document.MAINFORM.N_MLDC_CR_AMT_CRCCY.value) / parseFloat(document.MAINFORM.F_MLDC_CR_BUY_RATE.value);
            document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.C_MLDC_CCY.value, amt);
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.MLDC_CR_PER = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var per; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        record = SYS_getParentRecord(parent.currentDo);
        amt = parseFloat(record['N_MLDC_AMT']);
        if (amt != "" && parseFloat(amt) != 0) {
            per = SYS_BeFloat(document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value) / parseFloat(amt) * 100;
            per = SYS_BeInt(per * 100) / 100;
            document.MAINFORM.C_MLDC_CR_PER.value = per;
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.D_MLDC_CR_VAL_DATE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.C_MLDC_CR_AC, 'M');
        SYT_ChangeFldClass(document.MAINFORM.N_MLDC_CR_AMT_CRCCY, 'M');
        ExchangingRate();
        Set_MLDC_CR_Fields();

    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        var ccyValue; // Utility Auto Fix Comments
        var mainRef; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var strAMT; // Utility Auto Fix Comments
        var strFrom; // Utility Auto Fix Comments
        var strRef; // Utility Auto Fix Comments
        var trxRef; // Utility Auto Fix Comments
        var trxVal; // Utility Auto Fix Comments
        var unitCode; // Utility Auto Fix Comments
        var strDesc;
        record = SYS_getParentRecord(parent.currentDo);
        ccyValue = record['C_MLDC_CCY'];
        mainRef = record['C_MAIN_REF'];
        trxRef = record['C_TRX_REF'];
        unitCode = record['C_UNIT_CODE'];
        strFrom = record['C_MLDC_FROM'];
        strDesc = record['C_MLDC_DESC'].trim();
        strRef = record['I_MLDC_SEQ'];
        document.MAINFORM.C_MLDC_CCY.value = ccyValue;
        document.MAINFORM.C_MAIN_REF.value = mainRef;
        document.MAINFORM.C_TRX_REF.value = trxRef;
        document.MAINFORM.C_UNIT_CODE.value = unitCode;
        document.MAINFORM.C_MLDC_FROM.value = strFrom;
        document.MAINFORM.C_MLDC_DESC.value = strDesc;
        document.MAINFORM.I_MLDC_IDX.value = strRef;
        SYS_GetSubPageRefNo_S('MLDC_SEQ', SetMLDCRef, null, 'MLDC_SEQ', 'MLDC_SEQ');
        trxVal = document.MAINFORM.N_MLDC_CR_AMT_TXCCY;
        strAMT = SYS_formatAmt_Single(trxVal.value, ccyValue, false);
        trxVal.value = strAMT;
        document.MAINFORM.D_MLDC_CR_VAL_DATE.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.SetMLDCRef = function(ref) {
    try {
        document.MAINFORM.I_MLDC_SEQ.value = ref;
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.Set_MLDC_CR_Fields = function() {
    try {
        var from; // Utility Auto Fix Comments
        var main; // Utility Auto Fix Comments
        var selID; // Utility Auto Fix Comments
        var seq; // Utility Auto Fix Comments
        var buyerID;
        var custID;
        var busitype;
        if (SYS_ORG_FUNCTION_NAME == 'InvoiceTransfer') {
            document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
            SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
            from = document.MAINFORM.C_MLDC_FROM.value; // Utility Auto Fix Comments
            if (from == "Commission Fee") {
                document.MAINFORM.C_MLDC_CR_AC.value = 'BK_FEE_COMM';
            } else if (from == "Handling Fee") {
                document.MAINFORM.C_MLDC_CR_AC.value = 'BK_FEE_HANDLING';
            } else if (from == "Total IF Commission" || from == "Total IF Handling") {
                document.MAINFORM.C_MLDC_CR_AC.value = 'BK_AP_OTH';
            } else if (from == "Total Insurance Co. Commissions") {
                document.MAINFORM.C_MLDC_CR_AC.value = 'BK_INCO_COMM';
            } else if (from == "Cable Charge") {
                document.MAINFORM.C_MLDC_CR_AC.value = 'BK_FEE_CABLE';
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'Financing_ME' || SYS_ORG_FUNCTION_NAME == 'ProcessFinancingFromCE'||  SYS_ORG_FUNCTION_NAME == 'POFinancing'||  SYS_ORG_FUNCTION_NAME == 'PoolFinancing' ) {
            main = SYS_getValueFromMain("C_MAIN_REF");
            selID = SYS_getValueFromMain("FA_SEL_ID");
            var busi_tp = SYS_getValueFromMain("FA_BUSI_TYPE");
            var anchoracc = SYS_getValueFromMain("FA_ANCHOR_ACC");
            var counteracc = SYS_getValueFromMain("FA_COUNTER_ACC");
            var rebate_acc = SYS_getValueFromMain("FA_REBATE_ACCOUNT");
            var BuyID = SYS_getValueFromMain("FA_BUYER_ID");
            var desc = document.MAINFORM.C_MLDC_DESC.value;
            seq = document.MAINFORM.I_MLDC_IDX.value;
            if (main == seq) {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                SYT_ChangeFldClass_New('C_MLDC_CR_AC', 'P');
                document.MAINFORM.C_MLDC_CR_AC.value = BK_INT_RCV;//zoe for voucher constant
            } else if (selID == seq) {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'M');
                document.MAINFORM.C_MLDC_ASSGN_ID.value = selID;
                if(busi_tp=='PF'){
                document.MAINFORM.C_MLDC_CR_AC.value = counteracc;	
                }else if(busi_tp=='DD'){
                document.MAINFORM.C_MLDC_CR_AC.value = counteracc;	
                }else{
                document.MAINFORM.C_MLDC_CR_AC.value = anchoracc;		
                }
            }
            if (busi_tp == 'PF' && desc == 'Rebate Interest') {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                SYT_ChangeFldClass_New('C_MLDC_CR_AC', 'P');
                document.MAINFORM.C_MLDC_ASSGN_ID.value = '';
                document.MAINFORM.C_MLDC_CR_AC.value = BK_RBT_RCV;//zoe for voucher constant
            }
            if(busi_tp == 'POF'&& desc == 'Amount to Temporary Account'){
            	  document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                SYT_ChangeFldClass_New('C_MLDC_CR_AC', 'P');
            	document.MAINFORM.C_MLDC_CR_AC.value = SUSPEND_ACCOUNT;
            	
            }
        }

        if (SYS_ORG_FUNCTION_NAME == 'Financing'||SYS_ORG_FUNCTION_NAME == 'DFFinancing'||SYS_ORG_FUNCTION_NAME == 'DFFinancingFromCE') {
            main = SYS_getValueFromMain("C_MAIN_REF");
            selID = SYS_getValueFromMain("FA_SEL_ID");
            seq = document.MAINFORM.I_MLDC_IDX.value;
            if (main == seq) {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                document.MAINFORM.C_MLDC_CR_AC.value = BK_INT_RCV;//zoe for voucher constant
            } else if (selID == seq) {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'M');
                document.MAINFORM.C_MLDC_ASSGN_ID.value = selID;
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'ABLFinancing' || SYS_ORG_FUNCTION_NAME == 'ProcessFinancingRequest') {
            from = document.MAINFORM.C_MLDC_FROM.value;
            main = SYS_getValueFromMain("C_MAIN_REF");
            custID = SYS_getValueFromMain("FA_CUST_ID");
            seq = document.MAINFORM.I_MLDC_IDX.value;
            if (from == 'Finance') {
                if (main == seq) {
                    document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                    SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                    document.MAINFORM.C_MLDC_CR_AC.value = BK_INT_RCV;//zoe for voucher constant
                } else if (custID == seq) {
                    document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'CUSTOMER';
                    SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'M');
                    document.MAINFORM.C_MLDC_ASSGN_ID.value = custID;
                }
            } else if (from == 'Total ABL Financing Charge') {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                document.MAINFORM.C_MLDC_CR_AC.value = 'ABLF_CHG';
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'IndirectPayment' ||  SYS_ORG_FUNCTION_NAME == 'PoolPayment') {
            selID = SYS_getValueFromMain("FA_SEL_ID");
            var anchoracc = SYS_getValueFromMain("FA_ANCHOR_ACC");
            var counteracc = SYS_getValueFromMain("FA_COUNTER_ACC");
            busitype = SYS_getValueFromMain("FA_BUSI_TYPE");
            from = document.MAINFORM.C_MLDC_FROM.value; // Utility Auto Fix Comments
            if (from == 'Payment') {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'M');
                document.MAINFORM.C_MLDC_ASSGN_ID.value = selID;
                 if(busitype=='PF'){
                document.MAINFORM.C_MLDC_CR_AC.value = counteracc;	
                }else{
                document.MAINFORM.C_MLDC_CR_AC.value = anchoracc;		
                }
            } else if (from == 'Refund Interest') {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                document.MAINFORM.C_MLDC_CR_AC.value = BK_FIN_OUTSTD;//zoe for voucher constant
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'FinancingReturn') {
            main = SYS_getValueFromMain("C_MAIN_REF");
            selID = SYS_getValueFromMain("FA_SEL_ID");
            seq = document.MAINFORM.I_MLDC_IDX.value;
            from = document.MAINFORM.C_MLDC_FROM.value;
            if (from == 'Refund Interest') {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'M');
                document.MAINFORM.C_MLDC_ASSGN_ID.value = selID;
            } else {
                if (main == seq) {
                    document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                    SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                    document.MAINFORM.C_MLDC_CR_AC.value = BK_INT_RCV;//zoe for voucher constant
                } else if (selID == seq) {
                    document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                    SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                    document.MAINFORM.C_MLDC_CR_AC.value = BK_FIN_OUTSTD;//zoe for voucher constant
                }
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'Settlement'|| SYS_ORG_FUNCTION_NAME =='DFSettlement') {
            from = document.MAINFORM.C_MLDC_FROM.value; // Utility Auto Fix Comments
            selID = SYS_getValueFromMain("FA_SEL_ID");
            seq = document.MAINFORM.I_MLDC_IDX.value;
            if (from == 'Refund Interest') {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                document.MAINFORM.C_MLDC_ASSGN_ID.value = selID;
            }
            if (from == 'Payment') {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                document.MAINFORM.C_MLDC_CR_AC.value = BK_FIN_OUTSTD;//zoe for voucher constant
            }if (selID == seq) {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'M');
                document.MAINFORM.C_MLDC_ASSGN_ID.value = selID;
                document.MAINFORM.C_MLDC_CR_AC.value = '';
            }
        }

        if (SYS_ORG_FUNCTION_NAME == 'Settlement_ME'|| SYS_ORG_FUNCTION_NAME =='POFinancingReturn' || SYS_ORG_FUNCTION_NAME =='PoolFinancingReturn') {
            from = document.MAINFORM.C_MLDC_FROM.value; // Utility Auto Fix Comments
            selID = SYS_getValueFromMain("FA_SEL_ID");
            seq = document.MAINFORM.I_MLDC_IDX.value;
            main = SYS_getValueFromMain("C_MAIN_REF");
            var busi_tp = SYS_getValueFromMain("FA_BUSI_TYPE");
            var anchoracc = SYS_getValueFromMain("FA_ANCHOR_ACC");
            var counteracc = SYS_getValueFromMain("FA_COUNTER_ACC");
            var rebate_acc = SYS_getValueFromMain("FA_REBATE_ACCOUNT");
            var BuyID = SYS_getValueFromMain("FA_BUYER_ID");
            var desc = document.MAINFORM.C_MLDC_DESC.value;
            if (from == 'Rebate Interest') {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                document.MAINFORM.C_MLDC_ASSGN_ID.value = BuyID;
                if(busi_tp=='PF'){
                //document.MAINFORM.C_MLDC_CR_AC.value = anchoracc;	//zoe
                document.MAINFORM.C_MLDC_CR_AC.value = rebate_acc;//zoe
                }else{
                document.MAINFORM.C_MLDC_CR_AC.value = counteracc;		
                }
            }
            if (seq == main+'PRN') {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                document.MAINFORM.C_MLDC_ASSGN_ID.value = '';
                document.MAINFORM.C_MLDC_CR_AC.value = BK_FIN_OUTSTD;	//zoe for voucher constant
            }
            if (seq == main+'INT') {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                document.MAINFORM.C_MLDC_ASSGN_ID.value = '';
                document.MAINFORM.C_MLDC_CR_AC.value = BK_INT_RCV;	//zoe for voucher constant
            }
            if (seq == selID ) {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'M');
                document.MAINFORM.C_MLDC_ASSGN_ID.value = selID;
                if(busi_tp=='PF'){
                document.MAINFORM.C_MLDC_CR_AC.value = counteracc;	
                }else{
                document.MAINFORM.C_MLDC_CR_AC.value = anchoracc;		
                }
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'ABLPayment') {
            main = SYS_getValueFromMain("C_MAIN_REF");
            pmtref = SYS_getValueFromMain("FA_PMT_REF");
            custID = SYS_getValueFromMain("FA_CUST_ID");
            seq = document.MAINFORM.I_MLDC_IDX.value;
            from = document.MAINFORM.C_MLDC_FROM.value;
            if (from == 'Refund Interest') {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'M');
                document.MAINFORM.C_MLDC_ASSGN_ID.value = custID;
            } else {
                if (main == seq) {
                    document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                    SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                    document.MAINFORM.C_MLDC_CR_AC.value = BK_INT_RCV;//zoe for voucher constant
                } else if (pmtref == seq) {
                    document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                    SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                    document.MAINFORM.C_MLDC_CR_AC.value = BK_FIN_OUTSTD;//zoe for voucher constant
                } else if (custID == seq) {
                    document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'CUSTOMER';
                    SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'M');
                    document.MAINFORM.C_MLDC_ASSGN_ID.value = custID;
                }
            }
        }
        
        if(SYS_ORG_FUNCTION_NAME == 'DDPayment'){
        	 seq = document.MAINFORM.I_MLDC_IDX.value;
            selID = SYS_getValueFromMain("FA_SEL_ID");
            main = SYS_getValueFromMain("C_MAIN_REF");
            var counteracc = SYS_getValueFromMain("FA_COUNTER_ACC");
            if(selID ==seq){
            	     document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'CUSTOMER';
                    SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'M');
                    document.MAINFORM.C_MLDC_ASSGN_ID.value = selID;
                    document.MAINFORM.C_MLDC_CR_AC.value = counteracc;
            }
        	  if (main ==seq) {
                document.MAINFORM.C_MLDC_CR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_ASSGN_ID', 'P');
                SYT_ChangeFldClass_New('C_MLDC_CR_AC', 'P');
                document.MAINFORM.C_MLDC_ASSGN_ID.value = '';
                document.MAINFORM.C_MLDC_CR_AC.value = BK_FEE_RCV;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.checkCCYIsProtected = function() {
    try {
        var isProtect; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        record = SYS_getParentRecord(parent.currentDo);
        isProtect = record['C_PROTECT_FLAG'];
        if (isProtect != "" && isProtect != null) {
            return isProtect;
        } else {
            return "N";
        }
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.C_MLDC_ASSGN_ID_onchange = function(event) {
    try {
        Get_MLDC_ASSGN_ID();
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.C_MLDC_CR_AC_TYPE_onchange = function(event) {
    try {
        ExchangingRate();
        Cal_MLDC_CR_AC_TYPE();
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.C_MLDC_CR_CCY_onchange = function(event) {
    try {
        ExchangingRate();
        document.MAINFORM.C_MLDC_CR_AC.value = '';
        if (document.MAINFORM.C_MLDC_CR_CCY.value != document.MAINFORM.C_TRX_CCY.value) {
            document.MAINFORM.N_MLDC_EXCH_FAVAMT.value = SYS_BeFloat(SYS_MidifyDecimal(document.MAINFORM.N_MLDC_CR_AMT_TXCCY.value, true));
            document.MAINFORM.N_MLDC_CR_CHG_LCCCY.value = document.MAINFORM.N_MLDC_CR_AMT_CRCCY.value;
        } else {
            document.MAINFORM.N_MLDC_EXCH_FAVAMT.value = 0;
            document.MAINFORM.N_MLDC_CR_CHG_LCCCY.value = 0;
        }
        CheckCreditSummryForLastPerc();
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.C_MLDC_CR_PER_onchange = function(event) {
    try {
        ExchangingRate();
        MLDC_CR_AMT_TXCCY();
        MLDC_CR_AMT_CRCCY();
        EEHtml.fireEvent(document.MAINFORM.C_MLDC_CR_CCY, "onchange");
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.F_MLDC_CR_BUY_RATE_onchange = function(event) {
    try {
        MLDC_CR_AMT_CRCCY();
        AmtFromatAmtCrccy();
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.MLDC_ASSGN_ID_BTN_onclick = function(event) {
    try {
        Cal_MLDC_ASSGN_ID();
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.MLDC_CR_AC_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('MultiCredit_AC', 'C_CUST_ID= \'<--C_MLDC_ASSGN_ID-->\' AND  C_CURRENCY=\'<--C_MLDC_CR_CCY-->\'');
        SYS_InqCUBK_byCondition('MultiCredit_AC', '1');
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.N_MLDC_CR_AMT_CRCCY_onchange = function(event) {
    try {
        AmtFromatAmtCrccy();
        MLDC_CR_AMT_TXCCYfromCrccy();
        MLDC_CR_PER();
        EEHtml.fireEvent(document.MAINFORM.C_MLDC_CR_CCY, "onchange");
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}

csDOScreenProto.N_MLDC_CR_AMT_TXCCY_onchange = function(event) {
    try {
        MLDC_CR_AMT_CRCCY();
        MLDC_CR_PER();
    } catch (e) {
        DisExcpt("SSSS_MultiCredit.js", e);
    }
}