"path:SCRN/DO/MultiDebit.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.AmtFormatAmtTrxccy = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        ccy = document.MAINFORM.C_MLDC_CCY.value;
        amt = document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value;
        document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.AmtFromatAmtDrccy = function() {
    try {
        var amt; // Utility Auto Fix Comments
        amt = parseFloat(document.MAINFORM.N_MLDC_DR_AMT_DRCCY.value);
        document.MAINFORM.N_MLDC_DR_AMT_DRCCY.value = SYT_AmtFormat(document.MAINFORM.C_MLDC_DR_CCY.value, amt);
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.CheckDebitSummryForLastPerc = function() {
    try {
        var currPayAmt; // Utility Auto Fix Comments
        var currPerc; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var sum_Amt; // Utility Auto Fix Comments
        var sum_Perc; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var ttlAmt; // Utility Auto Fix Comments
        targetDo = SYS_getDoByXpath("MultiDebitSummary.MultiDebit");
        sum_Perc = parseFloat(targetDo.getFieldSumValue("C_MLDC_DR_PER"));
        currPerc = parseFloat(document.MAINFORM.C_MLDC_DR_PER.value);
        if (SYS_floatAddition(sum_Perc, currPerc) == 100) {
            record = SYS_getParentRecord(parent.currentDo);
            ttlAmt = parseFloat(record['N_MLDC_AMT']);
            sum_Amt = parseFloat(targetDo.getFieldSumValue("N_MLDC_DR_AMT_TXCCY"));
            currPayAmt = parseFloat(document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value);
            if (SYS_floatAddition(sum_Amt, currPayAmt) > ttlAmt) {
                currPayAmt = SYS_FloatSubtracter(ttlAmt, sum_Amt);
                document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value = currPayAmt;
                document.MAINFORM.C_MLDC_DR_PER.value = currPerc;
                EEHtml.fireEvent(document.MAINFORM.N_MLDC_DR_AMT_TXCCY, "onchange");
            }
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.Check_MLDC_DR_PER = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var totalAmt; // Utility Auto Fix Comments
        record = SYS_getParentRecord(parent.currentDo);
        totalAmt = parseFloat(record['N_MLDC_AMT']);
        node = SYS_getDoByXpath("MultiDebitSummary.MultiDebit");
        if (node == null) {
            return;
        }
        arrayvalue = SYS_getRecords(node);
        len = arrayvalue.length;
        if (len < 1) {
            document.MAINFORM.C_MLDC_DR_PER.value = "100";
            document.MAINFORM.N_MLDC_DR_AMT_DRCCY.value = SYT_AmtFormat(document.MAINFORM.C_MLDC_DR_CCY.value, totalAmt);
            document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.C_MLDC_CCY.value, totalAmt);
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        var from;
        if (SYS_ORG_FUNCTION_NAME == 'Settlement_ME') {
            from = document.MAINFORM.C_MLDC_FROM.value;
            if (from === "Payment") {
                var FA_DOC_DR_AC_TEMP = document.MAINFORM.C_MLDC_DR_AC.value;
                SYS_setValueToMain("FA_DOC_DR_AC_TEMP", FA_DOC_DR_AC_TEMP);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!Debit_Chk_Total_Pct()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.DebitCheckRecordStatus = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("MultiDebitSummary.MultiDebit");
        arrayvalue = SYS_getRecords(node);
        if (arrayvalue.length == 0) {
            return "A";
        } else {
            return "E";
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.DebitInitForFunction = function() {
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
        selectObj = document.MAINFORM.C_MLDC_DR_CCY;
        arrOption = selectObj.options;
        oldValue = selectObj.value;
        len = arrOption.length;
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
            if (arrOption[i].value == ccyVal) {
                arrOption[i].selected = true;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.Debit_C_MLDC_DR_ID = function() {
    try {
        if (SYS_MODULE_NAME == "FAEF") {
            if (document.MAINFORM.C_MLDC_DR_AC_TYPE.value == "CUSTOMER") {
                if (SYS_getValueFromMain("FA_BUSI_TYPE") == "PF" || SYS_getValueFromMain("FA_BUSI_TYPE") == "RD"|| SYS_getValueFromMain("FA_BUSI_TYPE") == "POF") {
                    document.MAINFORM.C_MLDC_DR_ID.value = SYS_getValueFromMain("FA_ANCHOR_ID");
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.Debit_Cal_C_MLDC_DR_AC_TYPE = function() {
    try {
        var sAccType; // Utility Auto Fix Comments
        sAccType = document.MAINFORM.C_MLDC_DR_AC_TYPE.value;
        if (sAccType == "SUSPENSE" || sAccType == "INTERNAL") {
            EEHtml.getElementById("MLDC_DR_AC_OWNER_BTN").disabled = true;
            document.MAINFORM.C_MLDC_DR_ID.value = "";
            document.MAINFORM.C_MLDC_DR_NAME.value = "";
            SYT_ChangeFldClass(document.MAINFORM.C_MLDC_DR_NAME, "O");
            SYT_ChangeFldClass(document.MAINFORM.C_MLDC_DR_ID, 'O');
        } else {
            EEHtml.getElementById("MLDC_DR_AC_OWNER_BTN").disabled = false;
            SYT_ChangeFldClass(document.MAINFORM.C_MLDC_DR_NAME, "O");
            SYT_ChangeFldClass(document.MAINFORM.C_MLDC_DR_ID, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.Debit_Chk_Total_Pct = function() {
    try {
        var arrDebit; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        var editid; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordId; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var tempSum; // Utility Auto Fix Comments
        var ttlAmt; // Utility Auto Fix Comments
        record = SYS_getParentRecord(parent.currentDo);
        ttlAmt = parseFloat(record['N_MLDC_AMT']);
        ttlAmt = SYT_AmtFormat(document.MAINFORM.C_MLDC_CCY.value, ttlAmt);
        targetDo = SYS_getDoByXpath("MultiDebitSummary.MultiDebit");
        arrDebit = SYS_getRecords(targetDo);
        len = arrDebit.length;

        tempSum = SYS_BeFloat(document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value);
        editid = targetDo.grid.getSelectionModel().editRowId;
        for (i = 0; i < len; i++) {
            debit = arrDebit[i];
            recordId = SYS_getRecID(debit);
            if (editid != recordId) {
                tempSum += parseFloat(SYS_getValFromRec(debit, "N_MLDC_DR_AMT_TXCCY"));
            }
        }
        if (tempSum > ttlAmt) {
            SYS_ThrowError_S("4619", 'debit');
            document.MAINFORM.C_MLDC_DR_PER.value = 0;
            document.MAINFORM.N_MLDC_DR_AMT_DRCCY.value = SYT_AmtFormat(document.MAINFORM.C_MLDC_DR_CCY.value, 0);
            document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value = SYT_AmtFormat(document.MAINFORM.C_MLDC_CCY.value, 0);
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.Debit_ExchangingRate = function() {
    try {
        var ayyRateObj; // Utility Auto Fix Comments
        var exchgRate; // Utility Auto Fix Comments
        var fromccy; // Utility Auto Fix Comments
        var rateObj; // Utility Auto Fix Comments
        var sAccType; // Utility Auto Fix Comments
        var toccy; // Utility Auto Fix Comments
        var trxAmt; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE !== 'IQ') {
            fromccy = document.MAINFORM.C_MLDC_CCY.value;
            if (fromccy == null) {
                fromccy = document.MAINFORM.C_TRX_CCY.value;
            }
            toccy = document.MAINFORM.C_MLDC_DR_CCY.value;
            sAccType = document.MAINFORM.C_MLDC_DR_AC_TYPE.value;
            trxAmt = document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value;


            trxAmt = SYS_BeFloat(SYS_MidifyDecimal(trxAmt, true));
            if (fromccy == toccy) {
                rateObj = 1;
                if (trxAmt != null) {
                    document.MAINFORM.N_MLDC_DR_AMT_DRCCY.value = SYT_AmtFormat(toccy, parseFloat(trxAmt));
                    document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value = document.MAINFORM.N_MLDC_DR_AMT_DRCCY.value;
                }
            } else {
                if (sAccType == "CUSTOMER") {
                    ayyRateObj = SYS_GetExchangeRateAMT_S(fromccy, toccy, 'Selling Rate;Selling Rate;Buying Rate', trxAmt, document.MAINFORM.N_MLDC_DR_AMT_DRCCY.name, 'Y');
                } else {
                    ayyRateObj = SYS_GetExchangeRateAMT_S(fromccy, toccy, 'Buying Rate;Buying Rate;Selling Rate', trxAmt, document.MAINFORM.N_MLDC_DR_AMT_DRCCY.name, 'Y');
                }
                rateObj = ayyRateObj[2];
            }
            if (rateObj == undefined) {
                return;
            }
            exchgRate = SYS_MidifyDecimal(rateObj, true);
            document.MAINFORM.F_MLDC_DR_BUY_RATE.value = exchgRate;
            document.MAINFORM.C_MLDC_TEMP_CCY.value = document.MAINFORM.C_MLDC_DR_CCY.value;

            if (document.MAINFORM.C_TRX_CCY.value != "" && document.MAINFORM.C_MLDC_DR_CCY.value != document.MAINFORM.C_TRX_CCY.value) {
                document.MAINFORM.N_MLDC_DR_CHG_LCCCY.value = document.MAINFORM.N_MLDC_DR_AMT_DRCCY.value;
            } else {
                document.MAINFORM.N_MLDC_DR_CHG_LCCCY.value = 0;
            }

        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.Debit_MLDC_DR_ID = function() {
    try {
        var sAccType; // Utility Auto Fix Comments
        sAccType = document.MAINFORM.C_MLDC_DR_AC_TYPE.value;
        if (sAccType == "CUSTOMER") {
            SYS_InqCUBK('MultiDebit_MLDC_DR_ID', 'C_MLDC_DR_ID');
        } else if (sAccType == "NOSTRO" || sAccType == "VOSTRO") {
            SYS_InqCUBK('MultiDebit_DR_BK', 'C_MLDC_DR_ID');
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.Get_C_MLDC_DR_AC = function() {
    try {
        if (document.MAINFORM.C_MLDC_DR_AC.value != "") {
            SYS_GetCUBK('MultiDebit_AC', "C_MLDC_DR_AC");
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.Get_C_MLDC_DR_ID_From_Main = function() {
    try {
        var IFId; // Utility Auto Fix Comments
        var busitype; // Utility Auto Fix Comments
        var buyId; // Utility Auto Fix Comments
        var selId; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME == 'FAEF') {
        	  busitype = SYS_getValueFromMain("FA_BUSI_TYPE");
        	  if(busitype!='PF'&&busitype!='RD'){
            buyId = SYS_getValueFromMain("FA_BUYER_ID");
            selId = SYS_getValueFromMain("FA_SEL_ID");
          }
            if (busitype == 'IF') {
                IFId = SYS_getValueFromMain("FA_IF_ID");
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'IFPayment') {
            if (document.MAINFORM.C_MLDC_DR_AC_TYPE.value == 'CUSTOMER') {
                document.MAINFORM.C_MLDC_DR_ID.value = buyId;
            } else if (document.MAINFORM.C_MLDC_DR_AC_TYPE.value == 'INTERNAL') {
                document.MAINFORM.C_MLDC_DR_ID.value = IFId;
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'InvoiceTransfer'|| SYS_ORG_FUNCTION_NAME == 'EFInvoiceTransfer' || SYS_ORG_FUNCTION_NAME == 'ProcessInvoiceFromCE' || SYS_ORG_FUNCTION_NAME == 'PORegistration' || SYS_ORG_FUNCTION_NAME == 'ProcessPOFromCE' || SYS_ORG_FUNCTION_NAME == 'Settlement') {
            busitype = SYS_getValueFromMain("FA_BUSI_TYPE");
            var from = document.MAINFORM.C_MLDC_FROM.value;
            if (busitype == 'RF') {
                document.MAINFORM.C_MLDC_DR_ID.value = buyId;
            } else if (from == 'Refund Interest' && busitype == 'RD') {
                document.MAINFORM.C_MLDC_DR_ID.value = '';
                document.MAINFORM.C_MLDC_DR_AC.value = 'BK_INT_REFUND';
            } else {
                document.MAINFORM.C_MLDC_DR_ID.value = selId;
                var sSQLWhere = "C_CUST_ID=\'" + selId + "\'"; //20190525 Barclays Start;
                var sDBFieldList = "C_AC_NUMBER";
                var sJSPMappingList = "C_MLDC_DR_AC";
                SYS_GetTableData_S("EXIMSYS.STD_AC_NUMBER", sSQLWhere, sDBFieldList, sJSPMappingList, true); //20190525 Barclays end;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var operate; // Utility Auto Fix Comments
        var status; // Utility Auto Fix Comments
        operate = DebitCheckRecordStatus();
        if (operate == "A") {
            Check_MLDC_DR_PER();
        }
        /*
status =isProtectedCCYField();
if(status == 'Y'){
	SYT_ChangeFldClass(document.MAINFORM.C_MLDC_DR_CCY,"P");
}else{
	DebitInitForFunction();
	SYT_ChangeFldClass(document.MAINFORM.C_MLDC_DR_CCY,'M');
}
*/
        //Edit by amy for optional CCY
        DebitInitForFunction();
        SYT_ChangeFldClass(document.MAINFORM.C_MLDC_DR_CCY, 'M');
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.MLDC_DR_AMT_TXCCY = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        record = SYS_getParentRecord(parent.currentDo);
        amt = parseFloat(record['N_MLDC_AMT']);
        amt = SYS_FloatDiv(SYS_FloatMul(parseFloat(document.MAINFORM.C_MLDC_DR_PER.value), parseFloat(amt)), 100);
        ccy = document.MAINFORM.C_MLDC_CCY.value;
        document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.MLDC_DR_ID_GetCUBK = function() {
    try {
        var sAccType; // Utility Auto Fix Comments
        if (document.MAINFORM.C_MLDC_DR_ID.value != "") {
            sAccType = document.MAINFORM.C_MLDC_DR_AC_TYPE.value;
            if (sAccType == "CUSTOMER") {
                SYS_GetCUBK('MultiDebit_MLDC_DR_ID', 'C_MLDC_DR_ID');
            } else if (sAccType == "NOSTRO" || sAccType == "VOSTRO") {
                SYS_GetCUBK('MultiDebit_DR_BK', 'C_MLDC_DR_ID');
            }
        } else {
            document.MAINFORM.C_MLDC_DR_NAME.value = "";
            document.MAINFORM.C_MLDC_DR_AC.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.MLDC_DR_PER = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var per; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        record = SYS_getParentRecord(parent.currentDo);
        amt = parseFloat(record['N_MLDC_AMT']);
        if (amt != "" && parseFloat(amt) != 0) {
            per = SYS_BeFloat(document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value) / parseFloat(amt) * 100;
            per = SYS_BeInt(per * 100) / 100;
            document.MAINFORM.C_MLDC_DR_PER.value = per;
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.MPO_C_MLDC_DR_NAME = function() {
    try {
        var sAccType; // Utility Auto Fix Comments
        sAccType = document.MAINFORM.C_MLDC_DR_AC_TYPE.value;
        if (sAccType == "SUSPENSE" || sAccType == "INTERNAL") {
            EEHtml.getElementById("MLDC_DR_AC_OWNER_BTN").disabled = true;
            SYT_ChangeFldClass(document.MAINFORM.C_MLDC_DR_NAME, "O");
        } else {
            EEHtml.getElementById("MLDC_DR_AC_OWNER_BTN").disabled = false;
            SYT_ChangeFldClass(document.MAINFORM.C_MLDC_DR_NAME, "O");
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.N_MLDC_DR_AMT_DRCCY = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var drBuyRate; // Utility Auto Fix Comments
        var drRate; // Utility Auto Fix Comments
        var txAmout; // Utility Auto Fix Comments
        drBuyRate = document.MAINFORM.F_MLDC_DR_BUY_RATE.value;
        if (drBuyRate != "" && drBuyRate != null) {
            txAmout = SYS_BeFloat(SYS_MidifyDecimal(document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value, true));
            drRate = SYS_BeFloat(SYS_MidifyDecimal(drBuyRate, true));
            amt = SYS_FloatMul(txAmout, drRate);
            document.MAINFORM.N_MLDC_DR_AMT_DRCCY.value = SYT_AmtFormat(document.MAINFORM.N_MLDC_DR_AMT_DRCCY.value, amt);
        } else {
            document.MAINFORM.N_MLDC_DR_AMT_DRCCY.value = 0.0;
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.N_MLDC_DR_AMT_TXCCYfromDrccy = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        ccy = document.MAINFORM.C_MLDC_CCY.value;
        if (document.MAINFORM.F_MLDC_DR_BUY_RATE.value != "" && document.MAINFORM.F_MLDC_DR_BUY_RATE.value != null) {
            amt = SYS_BeFloat(document.MAINFORM.N_MLDC_DR_AMT_DRCCY.value) / parseFloat(document.MAINFORM.F_MLDC_DR_BUY_RATE.value);
            document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        MPO_C_MLDC_DR_NAME();
        SYT_ChangeFldClass(document.MAINFORM.D_MLDC_DR_VAL_DATE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.N_MLDC_DR_AMT_DRCCY, 'M');
        Debit_ExchangingRate();

        Set_DR_AC_TYPE();
        Set_MLDC_DR_Fields();
        Get_C_MLDC_DR_ID_From_Main();

    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
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
        strRef = record['I_MLDC_SEQ'];
        strFrom = record['C_MLDC_FROM'];
        strDesc = record['C_MLDC_DESC'].trim();
        mainRef = record['C_MAIN_REF'];
        trxRef = record['C_TRX_REF'];
        unitCode = record['C_UNIT_CODE'];
        document.MAINFORM.C_MAIN_REF.value = mainRef;
        document.MAINFORM.C_TRX_REF.value = trxRef;
        document.MAINFORM.C_UNIT_CODE.value = unitCode;
        document.MAINFORM.C_MLDC_FROM.value = strFrom;
        document.MAINFORM.C_MLDC_DESC.value = strDesc;
        document.MAINFORM.I_MLDC_IDX.value = strRef;
        SYS_GetSubPageRefNo_S('MLDC_SEQ', SetMLDCRef, null, 'MLDC_SEQ', 'MLDC_SEQ');
        document.MAINFORM.C_MLDC_CCY.value = ccyValue;
        trxVal = document.MAINFORM.N_MLDC_DR_AMT_TXCCY;
        strAMT = SYS_formatAmt_Single(trxVal.value, ccyValue, false);
        trxVal.value = strAMT;
        document.MAINFORM.D_MLDC_DR_VAL_DATE.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.SetMLDCRef = function(ref) {
    try {
        document.MAINFORM.I_MLDC_SEQ.value = ref;
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.Set_DR_AC_TYPE = function() {
    try {
        var pmttype; // Utility Auto Fix Comments
        if (SYS_ORG_FUNCTION_NAME == 'IFPayment') {
            pmttype = SYS_getValueFromMain("FA_PMT_TYPE");
            if (pmttype == 'PMT') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
            } else if (pmttype == 'PUG') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'INTERNAL';
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'InvoiceTransfer'|| SYS_ORG_FUNCTION_NAME == 'EFInvoiceTransfer' || SYS_ORG_FUNCTION_NAME == 'ProcessInvoiceFromCE' || SYS_ORG_FUNCTION_NAME == 'PORegistration' || SYS_ORG_FUNCTION_NAME == 'ProcessPOFromCE') {
            document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.Set_MLDC_DR_Fields = function() {
    try {
        var from; // Utility Auto Fix Comments
        var selID; // Utility Auto Fix Comments
        var buyerID;
        var custID;
        var busitype;
        if (SYS_ORG_FUNCTION_NAME == 'Financing_ME' || SYS_ORG_FUNCTION_NAME == 'ProcessFinancingFromCE' ||  SYS_ORG_FUNCTION_NAME == 'POFinancing'||  SYS_ORG_FUNCTION_NAME == 'PoolFinancing') {
            busitype = SYS_getValueFromMain("FA_BUSI_TYPE");
            from = document.MAINFORM.C_MLDC_FROM.value;
            if (from == 'Rebate Interest') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                document.MAINFORM.C_MLDC_DR_AC.value = BK_INT_RCV;//zoe for voucher constant
            }else{
            document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'INTERNAL';
            SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
            document.MAINFORM.C_MLDC_DR_AC.value = BK_FIN_OUTSTD;//zoe for voucher constant
          }

        }
        if (SYS_ORG_FUNCTION_NAME == 'Financing'||SYS_ORG_FUNCTION_NAME == 'DFFinancing'||SYS_ORG_FUNCTION_NAME == 'DFFinancingFromCE') {
            busitype = SYS_getValueFromMain("FA_BUSI_TYPE");
            document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'INTERNAL';
            SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
            document.MAINFORM.C_MLDC_DR_AC.value = BK_FIN_OUTSTD;//zoe for voucher constant

        }
        if (SYS_ORG_FUNCTION_NAME == 'ABLFinancing' || SYS_ORG_FUNCTION_NAME == 'ProcessFinancingRequest') {
            from = document.MAINFORM.C_MLDC_FROM.value;
            if (from == 'Finance') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                document.MAINFORM.C_MLDC_DR_AC.value = BK_FIN_OUTSTD;//zoe for voucher constant

            } else {
                custID = SYS_getValueFromMain("FA_CUST_ID");
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'M');
                document.MAINFORM.C_MLDC_DR_ID.value = custID;
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'IndirectPayment') {
            selID = SYS_getValueFromMain("FA_SEL_ID");
            from = document.MAINFORM.C_MLDC_FROM.value; // Utility Auto Fix Comments
            if (from == 'Refund Interest') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                document.MAINFORM.C_MLDC_DR_AC.value = BK_INT_RCV;//zoe for voucher constant
            } else if ('Payment' == from) {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'M');
                document.MAINFORM.C_MLDC_DR_ID.value = selID;
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'FinancingReturn' || SYS_ORG_FUNCTION_NAME =='PoolFinancingReturn') { 
            selID = SYS_getValueFromMain("FA_SEL_ID");
            from = document.MAINFORM.C_MLDC_FROM.value;
            busitype = SYS_getValueFromMain("FA_BUSI_TYPE");
            var anchoracc = SYS_getValueFromMain("FA_ANCHOR_ACC");
            var counteracc = SYS_getValueFromMain("FA_COUNTER_ACC");
            if (from == 'Refund Interest' ||from == 'Rebate Interest') {//zoe
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                document.MAINFORM.C_MLDC_DR_AC.value = BK_INT_RCV;//zoe for voucher constant
            } 
             if (from == 'Overdue Interest') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                    document.MAINFORM.C_MLDC_DR_ID.value = buyerID;
            }
            if (from == 'Payment') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'M');
                document.MAINFORM.C_MLDC_DR_ID.value = selID;
                if(busitype=='PF'){
                document.MAINFORM.C_MLDC_DR_AC.value = counteracc;	
                }else{
                document.MAINFORM.C_MLDC_DR_AC.value = anchoracc;		
                }
            }
            
        }
        if (SYS_ORG_FUNCTION_NAME == 'Settlement'|| SYS_ORG_FUNCTION_NAME =='DFSettlement') {
            from = document.MAINFORM.C_MLDC_FROM.value; // Utility Auto Fix Comments
            busitype = SYS_getValueFromMain("FA_BUSI_TYPE");
            buyerID = SYS_getValueFromMain("FA_BUYER_ID");
            selID = SYS_getValueFromMain("FA_SEL_ID");
            if (from == 'Refund Interest') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                document.MAINFORM.C_MLDC_DR_AC.value = BK_INT_RCV;//zoe for voucher constant
            }
            if (from == 'Payment') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                document.MAINFORM.C_MLDC_DR_ID.value = buyerID;
            }
            if (from == 'Overdue Interest') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                if (busitype === "DISC") {
                    document.MAINFORM.C_MLDC_DR_ID.value = selID;
                } else {
                    document.MAINFORM.C_MLDC_DR_ID.value = buyerID;
                }
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'Settlement_ME'|| SYS_ORG_FUNCTION_NAME =='POFinancingReturn') {
        	var desc = document.MAINFORM.C_MLDC_DESC.value;
            from = document.MAINFORM.C_MLDC_FROM.value; // Utility Auto Fix Comments
            busitype = SYS_getValueFromMain("FA_BUSI_TYPE");
            buyerID = SYS_getValueFromMain("FA_BUYER_ID");
            selID = SYS_getValueFromMain("FA_SEL_ID");
            var anchoracc = SYS_getValueFromMain("FA_ANCHOR_ACC");
            var counteracc = SYS_getValueFromMain("FA_COUNTER_ACC");
            if (from == 'Rebate Interest') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                document.MAINFORM.C_MLDC_DR_AC.value = BK_RBT_RCV;//zoe for voucher constant
            }
            if (from == 'Payment') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                document.MAINFORM.C_MLDC_DR_ID.value = buyerID;
                if(busitype=='PF'){
                document.MAINFORM.C_MLDC_DR_AC.value = anchoracc;	
                }else{
                document.MAINFORM.C_MLDC_DR_AC.value = counteracc;		
                }
            }
              if (from == 'Refund Interest') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                document.MAINFORM.C_MLDC_DR_AC.value = BK_INT_RCV;//zoe for voucher constant
            }
            if (from == 'Overdue Interest') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                    document.MAINFORM.C_MLDC_DR_ID.value = buyerID;
            }
            
              if(desc == 'Amount from temporary Account'){
            	  document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'INTERNAL';
            	  document.MAINFORM.C_MLDC_DR_ID.value ='';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                SYT_ChangeFldClass_New('C_MLDC_DR_AC', 'P');
            	document.MAINFORM.C_MLDC_DR_AC.value = 'SUSPEND ACCOUNT';
            	
            }
              if (from == 'SUSPEND' && desc == 'Seller AC Amount') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                    document.MAINFORM.C_MLDC_DR_ID.value = selID;
                    document.MAINFORM.C_MLDC_DR_AC.value = anchoracc;	
                    SYT_ChangeFldClass_New('C_MLDC_DR_AC', 'M');
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'ABLPayment') {
            custID = SYS_getValueFromMain("FA_CUST_ID");
            from = document.MAINFORM.C_MLDC_FROM.value;
            if (from == 'Refund Interest') {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'P');
                document.MAINFORM.C_MLDC_DR_AC.value = BK_INT_RCV;//zoe for voucher constant
            } else {
                document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
                SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'M');
                document.MAINFORM.C_MLDC_DR_ID.value = custID;
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'Payment' || SYS_ORG_FUNCTION_NAME == 'PoolPayment') {
        	  var anchoracc = SYS_getValueFromMain("FA_ANCHOR_ACC");
            var counteracc = SYS_getValueFromMain("FA_COUNTER_ACC");
           busitype = SYS_getValueFromMain("FA_BUSI_TYPE");
            buyerID = SYS_getValueFromMain("FA_BUYER_ID");
            document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
            SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'M');
            document.MAINFORM.C_MLDC_DR_ID.value = buyerID;
            
               if(busitype=='PF'){
                document.MAINFORM.C_MLDC_DR_AC.value = anchoracc;	
                }else{
                document.MAINFORM.C_MLDC_DR_AC.value = counteracc;		
                }
        }
        if( SYS_ORG_FUNCTION_NAME == 'DDPayment'){
        	 var anchorac = SYS_getValueFromMain("FA_ANCHOR_ACC");
        	 buyerID = SYS_getValueFromMain("FA_BUYER_ID");
        	 document.MAINFORM.C_MLDC_DR_AC_TYPE.value = 'CUSTOMER';
            SYT_ChangeFldClass_New('C_MLDC_DR_ID', 'M');
            document.MAINFORM.C_MLDC_DR_ID.value = buyerID;
            document.MAINFORM.C_MLDC_DR_AC.value = anchorac;	
        }
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.isProtectedCCYField = function() {
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
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.C_MLDC_DR_AC_onchange = function(event) {
    try {
        Get_C_MLDC_DR_AC();
        Debit_ExchangingRate();
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.C_MLDC_DR_AC_TYPE_onchange = function(event) {
    try {
        Debit_ExchangingRate();
        Get_C_MLDC_DR_ID_From_Main();
        Debit_Cal_C_MLDC_DR_AC_TYPE();
        Debit_C_MLDC_DR_ID();
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.C_MLDC_DR_CCY_onchange = function(event) {
    try {
        Debit_ExchangingRate();
        document.MAINFORM.C_MLDC_DR_AC.value = '';
        if (document.MAINFORM.C_MLDC_DR_CCY.value != document.MAINFORM.C_TRX_CCY.value) {
            document.MAINFORM.N_MLDC_EXCH_FAVAMT.value = SYS_BeFloat(SYS_MidifyDecimal(document.MAINFORM.N_MLDC_DR_AMT_TXCCY.value, true));
            document.MAINFORM.N_MLDC_DR_CHG_LCCCY.value = document.MAINFORM.N_MLDC_DR_AMT_DRCCY.value;
        } else {
            document.MAINFORM.N_MLDC_EXCH_FAVAMT.value = 0;
            document.MAINFORM.N_MLDC_DR_CHG_LCCCY.value = 0;
        }
        CheckDebitSummryForLastPerc();
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.C_MLDC_DR_PER_onchange = function(event) {
    try {
        Debit_ExchangingRate();
        MLDC_DR_AMT_TXCCY();
        N_MLDC_DR_AMT_DRCCY();
        per = document.MAINFORM.C_MLDC_DR_PER.value;
        EEHtml.fireEvent(document.MAINFORM.C_MLDC_DR_CCY, "onchange");
        document.MAINFORM.C_MLDC_DR_PER.value = per;
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.C_MLDC_FROM_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}
csDOScreenProto.F_MLDC_DR_BUY_RATE_onchange = function(event) {
    try {
        N_MLDC_DR_AMT_DRCCY();
        AmtFromatAmtDrccy();
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.MLDC_DR_AC_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('MultiDebit_AC', 'C_CUST_ID= \'<--C_MLDC_DR_ID-->\' AND  C_CURRENCY=\'<--C_MLDC_DR_CCY-->\'');
        SYS_InqCUBK_byCondition('MultiDebit_AC', '1');
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.MLDC_DR_AC_OWNER_BTN_onclick = function(event) {
    try {
        Debit_MLDC_DR_ID();
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.N_MLDC_DR_AMT_DRCCY_onchange = function(event) {
    try {
        AmtFromatAmtDrccy();
        N_MLDC_DR_AMT_TXCCYfromDrccy();
        MLDC_DR_PER();
        EEHtml.fireEvent(document.MAINFORM.C_MLDC_DR_CCY, "onchange");
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}

csDOScreenProto.N_MLDC_DR_AMT_TXCCY_onchange = function(event) {
    try {
        AmtFormatAmtTrxccy();
        N_MLDC_DR_AMT_DRCCY();
        MLDC_DR_PER();
        EEHtml.fireEvent(document.MAINFORM.C_MLDC_DR_CCY, "onchange");
    } catch (e) {
        DisExcpt("SSSS_MultiDebit.js", e);
    }
}