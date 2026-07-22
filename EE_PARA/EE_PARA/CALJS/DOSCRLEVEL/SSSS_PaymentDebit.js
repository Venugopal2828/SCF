"path:SCRN/DO/PaymentDebit.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

var cpytDebitAmt = 0;

csDOScreenProto.AmtFormatAmtTrxccy = function() {
    try {
        /*ccy=document.MAINFORM.CPYT_DR_TTL_CCY.value;
amt=document.MAINFORM.CPYT_DR_AMT_TXCCY.value;
document.MAINFORM.CPYT_DR_AMT_TXCCY.value = SYT_AmtFormat(ccy,amt);
*/
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.AmtFromatAmtDrccy = function() {
    try {
        amt = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_DRCCY.value);
        document.MAINFORM.CPYT_DR_AMT_DRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, amt);
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CAL_CPYT_DR_PER = function() {
    try {
        var PaymentDebit_obj; // Utility Auto Fix Comments
        var vSum_CPYT_DR_PER; // Utility Auto Fix Comments
        //Add by amy for SMBC Demo in 20120906
        PaymentDebit_obj = SYS_GetObjByDoName('PaymentDebit');
        if (!PaymentDebit_obj) {
            return;
        }
        vSum_CPYT_DR_PER = SYS_GetFldSumByDoName('PaymentDebit', 'CPYT_DR_PER');
        if (!PaymentDebit_obj[0]) {
            vSum_CPYT_DR_PER = 0;
        }
        document.MAINFORM.CPYT_DR_PER.value = 100 - vSum_CPYT_DR_PER;
        EEHtml.fireEvent(document.MAINFORM.CPYT_DR_PER, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CHK_CPYT_DR_VAL_DATE = function() {
    try {
        if (SYS_MODULE_NAME == 'CFNC' || SYS_MODULE_NAME == 'RPFM' || SYS_MODULE_NAME == 'SYND') {}
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_DRCCY = function() {
    try {
        var drBuyRate; // Utility Auto Fix Comments
        drBuyRate = document.MAINFORM.CPYT_DR_BUY_RATE.value;
        if (drBuyRate != "" && drBuyRate != null) {
            amt = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value) * SYS_BeFloat(drBuyRate);
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, amt);
        } else {
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = 0.0;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_DRCCY_DRRATE = function() {
    try {
        //added by zoe 20081128
        amt = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value) * SYS_BeFloat(document.MAINFORM.CPYT_DR_BUY_RATE.value);
        document.MAINFORM.CPYT_DR_AMT_DRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, amt);
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_TXCCY = function() {
    try {
        var PaymentDebit_obj; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var vSum_CPYT_DR_AMT_TXCCY; // Utility Auto Fix Comments
        amt = document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value;
        ccy = document.MAINFORM.CPYT_DR_TTL_CCY.value;

        document.MAINFORM.CPYT_DR_AMT_TXCCY.value = SYS_BeFloat(document.MAINFORM.CPYT_DR_PER.value) * SYS_BeFloat(amt) / 100;
        document.MAINFORM.CPYT_DR_AMT_TXCCY.value = SYT_AmtFormat(ccy, SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value)); //66943;

        //Add by amy for SMBC Demo in 20120907

        PaymentDebit_obj = SYS_GetObjByDoName('PaymentDebit');
        vSum_CPYT_DR_AMT_TXCCY = SYS_GetFldSumByDoName('PaymentDebit', 'CPYT_DR_AMT_TXCCY');
        var vStatus = SYS_GetCurrentDoStatus('PaymentDebit');
        var recordNum = PaymentDebit_obj.length;
        if (!PaymentDebit_obj[0]) {
            document.MAINFORM.CPYT_DR_BAL_TXCCY.value = SYS_BeFloat(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value) - SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value);
            if (document.MAINFORM.CPYT_DR_BAL_TXCCY.value < 0) {
                document.MAINFORM.CPYT_DR_BAL_TXCCY.value = 0;
            }
        } else if (vStatus == 'E') {
            document.MAINFORM.CPYT_DR_BAL_TXCCY.value = SYS_BeFloat(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value) - SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value);
            if (document.MAINFORM.CPYT_DR_BAL_TXCCY.value < 0) {
                document.MAINFORM.CPYT_DR_BAL_TXCCY.value = 0;
            }
        } else {
            document.MAINFORM.CPYT_DR_BAL_TXCCY.value = SYS_BeFloat(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value) - (SYS_BeFloat(vSum_CPYT_DR_AMT_TXCCY) + SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value));
            if (document.MAINFORM.CPYT_DR_BAL_TXCCY.value < 0) {
                document.MAINFORM.CPYT_DR_BAL_TXCCY.value = 0;
            }
        }
        document.MAINFORM.CPYT_DR_BAL_TXCCY.value = SYT_AmtFormat(ccy, document.MAINFORM.CPYT_DR_BAL_TXCCY.value);
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_TXCCYfromDrccy = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        //edit by Dane 2009-01-13 begin
        ccy = document.MAINFORM.CPYT_DR_TTL_CCY.value;
        if (document.MAINFORM.CPYT_DR_BUY_RATE.value != "" && document.MAINFORM.CPYT_DR_BUY_RATE.value != null) {
            amt = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_DRCCY.value) / SYS_BeFloat(document.MAINFORM.CPYT_DR_BUY_RATE.value);
            document.MAINFORM.CPYT_DR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
            AmtFormatAmtTrxccy();
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_ID_GetCUBK = function() {
    try {
        var sAccType;
        if (document.MAINFORM.CPYT_DR_ID.value != "") {
            sAccType = document.MAINFORM.CPYT_DR_AC_TYPE.value;
            if (sAccType == "CUSTOMER") {
                SYS_GetCUBK('Debit_CPYT_DR_ID', 'CPYT_DR_ID');
            } else if (sAccType == "NOSTRO" || sAccType == "VOSTRO") {
                SYS_GetCUBK('Debit_CPYT_DR_ID_BK', 'CPYT_DR_ID');
            }
        } else {
            document.MAINFORM.CPYT_DR_NAME.value = "";
            document.MAINFORM.CPYT_DR_AC.value = "";
        }
        if (document.MAINFORM.CPYT_DR_ID.value == document.MAINFORM.CPYT_ASSGN_ID.value) {
            alert("Debit & Credit Account number should not be same");
            document.MAINFORM.CPYT_DR_ID.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_PER = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var per; // Utility Auto Fix Comments
        amt = document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value;
        if (amt != "" && SYS_BeFloat(amt) != 0) {
            per = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value) / SYS_BeFloat(amt) * 100;
            per = SYS_BeInt(per * 100) / 100;
            document.MAINFORM.CPYT_DR_PER.value = per;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.Check_CPYT_DR_PER = function() {
    try {
        var len; // Utility Auto Fix Comments
        var percent; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var tolpercent; // Utility Auto Fix Comments
        targetDo = null;
        targetDo = SYS_GetObjByDoName("PaymentDebit"); // Utility Auto Fix Comments
        if (targetDo == null) {
            return;
        }
        len = targetDo.length;
        if (len < 1) {
            document.MAINFORM.CPYT_DR_PER.value = "100";
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value;
            document.MAINFORM.CPYT_DR_AMT_TXCCY.value = document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value;
        }
        /*  tolpercent = SYS_BeFloat(SYS_GetFldSumByDoName("PaymentDebit","CPYT_DR_PER"));
     percent = 100 - tolpercent;
     document.MAINFORM.CPYT_DR_PER.value =  percent;
     document.MAINFORM.CPYT_DR_AMT_TXCCY.value = percent * SYS_BeFloat(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value) / 100;
     document.MAINFORM.CPYT_DR_AMT_DRCCY.value = percent * SYS_BeFloat(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value) / 100;
*/
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        var oCUST_AC_CCY; // Utility Auto Fix Comments
        if (SYS_MODULE_NAME.substr(0, 2) == "EX") {
            oCUST_AC_CCY = document.MAINFORM.CUST_AC_CCY;
            if (oCUST_AC_CCY != null) {
                oCUST_AC_CCY.value = document.MAINFORM.CPYT_DR_CCY.value;
                EEHtml.fireEvent(oCUST_AC_CCY, "onchange");
            }
        }
        if (document.MAINFORM.CPYT_DR_CCY.value != document.MAINFORM.CPYT_DR_TRX_CCY.value) {
            document.MAINFORM.CPYT_DR_AMT_DRCCY_EXCH.value = document.MAINFORM.CPYT_DR_AMT_DRCCY.value;
            document.MAINFORM.CPYT_DR_AMT_MAPING.value = document.MAINFORM.CPYT_DR_AMT_TXCCY.value;
        } else {
            document.MAINFORM.CPYT_DR_AMT_DRCCY_EXCH.value = 0.0;
            document.MAINFORM.CPYT_DR_AMT_MAPING.value = 0.0;
        }

        setTimeout(Get_79, 50);
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!Debit_Chk_Total_Pct()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.DebitCheckRecordStatus = function() {
    try {
        var targetDO; // Utility Auto Fix Comments
        targetDO = SYS_GetCurrentEditDo("PaymentDebit");
        if (targetDO == null) {
            return "A";
        } else {
            return "E";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.DebitInitForFunction = function() {
    try {
        if (SYS_MODULE_NAME == "IMCO") {
            DebitRemoveSelectOption(document.MAINFORM.CPYT_DR_AC_TYPE, "SUSPENSE");
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.DebitRemoveSelectOption = function(selectObj, optionValue) {
    try {
        var arr; // Utility Auto Fix Comments
        var arrOption; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var oldValue; // Utility Auto Fix Comments
        arrOption = selectObj.options;
        oldValue = selectObj.value;
        len = arrOption.length;
        arr = new Array();
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
            if (arrOption[i].value != optionValue) {
                arr[arr.length] = arrOption[i];
            }
        }
        selectObj.options.length = 0;
        for (i = 0; i < arr.length; i++) {
            selectObj.options[i] = arr[i];
        }
        selectObj.value = oldValue;
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.Debit_Cal_CPYT_DR_AC_TYPE = function() {
    try {
        var sAccType; // Utility Auto Fix Comments
        sAccType = document.MAINFORM.CPYT_DR_AC_TYPE.value;
        if (sAccType == "SUSPENSE" || sAccType == "INTERNAL") {
            EEHtml.getElementById("CPYT_DR_AC_OWNER_BTN").disabled = true;
            //remove to function Set_CPYT_DR_ID_from_MAIN on 20200520
            /*	
if(SYS_MODULE_NAME == "RPFM" && SYS_ORG_FUNCTION_NAME == "RepayGrantor" || SYS_ORG_FUNCTION_NAME == "SettleParticipant" || SYS_ORG_FUNCTION_NAME == "ProcessGrantor"){
	}else{
            document.MAINFORM.CPYT_DR_ID.value = "";
            document.MAINFORM.CPYT_DR_NAME.value = "";
	}
*/
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_NAME, "O");
        } else {
            EEHtml.getElementById("CPYT_DR_AC_OWNER_BTN").disabled = false;
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_NAME, "O");
            // document.MAINFORM.CPYT_DR_AC.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.Debit_Cal_CPYT_DR_ID = function() {
    try {
        var sAccType; // Utility Auto Fix Comments
        sAccType = document.MAINFORM.CPYT_DR_AC_TYPE.value;
        if (sAccType == "CUSTOMER") {
            //SYS_InqCUBK_Sql('Debit_CPYT_DR_ID', "C_MAIN_REF LIKE '%<--CPYT_DR_ID-->%' AND C_CURRENCY=\'<--CPYT_DR_CCY-->\'");
            SYS_InqCUBK_byCondition('Debit_CPYT_DR_ID', '1');
        } else if (sAccType == "NOSTRO" || sAccType == "VOSTRO") {
            //SYS_InqCUBK_Sql('Debit_CPYT_DR_ID_BK', "C_MAIN_REF LIKE '%<--CPYT_DR_ID-->%' AND C_CURRENCY=\'<--CPYT_DR_CCY-->\'");
            SYS_InqCUBK_byCondition('Debit_CPYT_DR_ID_BK', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.Debit_Chk_Total_Pct = function() {
    try {
        var arrDebit; // Utility Auto Fix Comments
        var currentDeibt; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var newSum; // Utility Auto Fix Comments
        var oldValue; // Utility Auto Fix Comments
        var tempSum; // Utility Auto Fix Comments
        var ttlAmt; // Utility Auto Fix Comments
        arrDebit = SYS_GetObjByDoName('PaymentDebit');
        len = arrDebit.length;
        tempSum = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value);
        ttlAmt = SYS_BeFloat(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value);
        currentDeibt = SYS_GetCurrentEditDo('PaymentDebit');
        oldValue = 0;
        if (currentDeibt != null) {
            oldValue = SYS_BeFloat(currentDeibt.getDoValueByName("CPYT_DR_AMT_TXCCY"));
        }
        for (i = 0; i < len; i++) {
            debit = arrDebit[i];
            tempSum += SYS_BeFloat(debit.getDoValueByName("CPYT_DR_AMT_TXCCY"));
        }
        newSum = tempSum - oldValue;
        if (SYS_BeFloat(newSum) > ttlAmt) {
            if ("RPFM" == SYS_MODULE_NAME) {
                var sub = newSum - ttlAmt;
                if (sub <= 0.01 && sub >= 0) {
                    return true;
                }
            }
            alert("Please note that the total percent exceeds 100%");
            document.MAINFORM.CPYT_DR_PER.value = 0;
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = 0;
            document.MAINFORM.CPYT_DR_AMT_TXCCY.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.Debit_ExchangingRate = function() {
    try {
        var drAmtPer; // Utility Auto Fix Comments
        var fromccy; // Utility Auto Fix Comments
        var toccy; // Utility Auto Fix Comments
        var trxDrTTL; // Utility Auto Fix Comments
        var vAmt; // Utility Auto Fix Comments
        fromccy = document.MAINFORM.CPYT_DR_TTL_CCY.value;
        toccy = document.MAINFORM.CPYT_DR_CCY.value;
        /*
if(fromccy != toccy){
   //SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_EXNG_AC,'M');
}else{
   //SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_EXNG_AC,'O');
}
*/
        /* Add By Jeff @Date:2008-12-29 start For IMCO*/
        if (SYS_MODULE_NAME == "IMCO") {
            document.MAINFORM.CPYT_DR_BUY_RATE.value = 0.0;
            trxDrTTL = SYS_BeFloat(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value);
            drAmtPer = SYS_BeFloat(document.MAINFORM.CPYT_DR_PER.value);
            if (fromccy == SYS_LOCAL_CCY) {
                if (toccy != SYS_LOCAL_CCY) {
                    cpytDebitAmt = trxDrTTL * drAmtPer;
                    if (cpytDebitAmt <= 50000) {
                        SYS_GetExchangeRate_S(fromccy, toccy, 'Buying Rate', 'CPYT_DR_BUY_RATE'); //Buying Rate
                    } else {
                        SYS_GetExchangeRate_S(fromccy, toccy, 'High Buy-Rate', 'CPYT_DR_BUY_RATE');
                    }
                } else {
                    document.MAINFORM.CPYT_DR_BUY_RATE.value = 1;
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_BUY_RATE, "P");
                }

            } else {
                if (toccy == SYS_LOCAL_CCY) {
                    vAmt = trxDrTTL * drAmtPer; // Utility Auto Fix Comments
                    if (vAmt <= 0) {
                        cpytDebitAmt = 0;
                    } else {
                        SYS_calExchAmt(fromccy, SYS_LOCAL_CCY, trxDrTTL * drAmtPer, 'Booking Rate', 'cpytDebitAmt');
                    }
                    if (cpytDebitAmt <= 50000) {
                        SYS_GetExchangeRate_S(fromccy, toccy, 'Selling Rate', 'CPYT_DR_BUY_RATE'); //Buying Rate
                    } else {
                        SYS_GetExchangeRate_S(fromccy, toccy, 'High Sell-Rate', 'CPYT_DR_BUY_RATE');
                    }
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_BUY_RATE, "M");
                }
            }
        }
        /* Add By Jeff @Date:2008-12-29 start For IMCO*/
        if (fromccy != "" && toccy != "") {
            SYS_GetExchangeRate_S(fromccy, toccy, 'Booking Rate', 'CPYT_DR_BUY_RATE');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.Get_79 = function() {
    try {
        var PaymentDebit_DRDate; // Utility Auto Fix Comments
        var PaymentDebit_length; // Utility Auto Fix Comments
        var PaymentDebit_obj; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var vCPYT_DR_VAL_DATE; // Utility Auto Fix Comments
        if ("REIM" == SYS_MODULE_NAME && "SettleClaim" == SYS_ORG_FUNCTION_NAME) {
            vCPYT_DR_VAL_DATE = '';
            PaymentDebit_obj = SYS_GetObjByDoName('PaymentDebit');
            PaymentDebit_length = PaymentDebit_obj.length;
            PaymentDebit_DRDate = '';
            for (i = 0; i < PaymentDebit_length; i++) {
                PaymentDebit_DRDate = SYS_GetFldValueByDo(PaymentDebit_obj[i], 'CPYT_DR_VAL_DATE') + '  ' + SYS_GetFldValueByDo(PaymentDebit_obj[i], 'CPYT_DR_CCY') + ' ' + SYS_GetFldValueByDo(PaymentDebit_obj[i], 'CPYT_DR_AMT_DRCCY');
                vCPYT_DR_VAL_DATE += PaymentDebit_DRDate + '\n           ';
                if (i == PaymentDebit_length - 1) {
                    vCPYT_DR_VAL_DATE = vCPYT_DR_VAL_DATE.trim();
                }
            }


            if (document.MAINFORM.SEND_TO.value == 'MT799') {
                document.MAINFORM.ISSUE_NARR_TAG_79.value = 'REIM CLAIM SETTLED: \n' + 'YOUR REF----' + document.MAINFORM.LC_NO.value + '\n' + 'CLM BK BIC----' + document.MAINFORM.CLM_BK_SW_ADD.value + '\n' + 'AMT----' + document.MAINFORM.LC_CCY.value + document.MAINFORM.REIM_INST_AMT.value + '\n' + 'DR DATE----' + vCPYT_DR_VAL_DATE + '\n';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.Get_CPYT_DR_AC = function() {
    try {
        if (document.MAINFORM.CPYT_DR_AC.value != "") {
            SYS_GetCUBK('CPYT_DR_AC', "CPYT_DR_AC");
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.IPLC_Discount_Debit = function() {
    try {
        if (SYS_MODULE_NAME == 'IPLC' && document.MAINFORM.STL_FLG.value == "By Account") {

            if (SYS_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount" || SYS_FUNCTION_NAME == "IPLC_PayAcceptFrCE") {
                if (document.MAINFORM.DISCNT_FLG.value == "NO") {
                    document.MAINFORM.CPYT_DR_AC_TYPE.value = 'CUSTOMER';
                    document.MAINFORM.CPYT_DR_ID.value = document.MAINFORM.FORACOF_ID.value;
                    document.MAINFORM.CPYT_DR_NAME.value = document.MAINFORM.FORACOF_NM.value;
                } else if (document.MAINFORM.DISCNT_FLG.value == "YES") {
                    document.MAINFORM.CPYT_DR_AC_TYPE.value = 'INTERNAL';
                    document.MAINFORM.CPYT_DR_ID.value = '';
                    document.MAINFORM.CPYT_DR_NAME.value = '';
                }
            }
            if (SYS_FUNCTION_NAME == "IPLC_PaymentAtMaturity") {

                document.MAINFORM.CPYT_DR_AC_TYPE.value = 'CUSTOMER';
                document.MAINFORM.CPYT_DR_ID.value = document.MAINFORM.FORACOF_ID.value;
                document.MAINFORM.CPYT_DR_NAME.value = document.MAINFORM.FORACOF_NM.value;

            }

        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var sta; // Utility Auto Fix Comments
        sta = DebitCheckRecordStatus();
        if (sta == "A") {
            Check_CPYT_DR_PER();
            document.MAINFORM.CPYT_DR_CCY.value = document.MAINFORM.CPYT_DR_TTL_CCY.value;
        }
        Debit_ExchangingRate();

        if (SYS_MODULE_NAME == "EPLC") {
            if (document.MAINFORM.VALUE_DT_DR.value != '') {
                document.MAINFORM.CPYT_DR_VAL_DATE.value = document.MAINFORM.VALUE_DT_DR.value;
            }
        }

        if (SYS_MODULE_NAME == "IMCO") {
            document.MAINFORM.CPYT_DR_AC_TYPE.value = 'CUSTOMER';
        }

        //Add by amy for SMBC Demo in 20120906
        CAL_CPYT_DR_PER();
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.MPO_CPYT_DR_NAME = function() {
    try {
        var sAccType; // Utility Auto Fix Comments
        sAccType = document.MAINFORM.CPYT_DR_AC_TYPE.value;
        if (sAccType == "SUSPENSE" || sAccType == "INTERNAL") {
            EEHtml.getElementById("CPYT_DR_AC_OWNER_BTN").disabled = true;
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_NAME, "O");
        } else {
            EEHtml.getElementById("CPYT_DR_AC_OWNER_BTN").disabled = false;
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_NAME, "O");
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var ccy;
        var discountflag;
        var func_nm;
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC" || SYS_FUNCTION_TYPE == "IQ") {
            IPLC_Discount_Debit();
            MPO_CPYT_DR_NAME();
        }
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_VAL_DATE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_CCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AMT_DRCCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_BUY_RATE, 'M');
        switch (SYS_MODULE_NAME) {
            case "IMCO":
            case "EXCO":
                document.MAINFORM.CPYT_DR_TRX_CCY.value = document.MAINFORM.COLL_CCY.value;
                break;
            case "GTEE":
            case "IWGT":
                document.MAINFORM.CPYT_DR_TRX_CCY.value = document.MAINFORM.GTEE_CCY.value;
                break;
            case "SYND":
                document.MAINFORM.CPYT_DR_TRX_CCY.value = document.MAINFORM.PCPT_CCY.value;
                break;
            case "RPFM":
                document.MAINFORM.CPYT_DR_TRX_CCY.value = document.MAINFORM.RECV_CCY.value;
                break;
            case "CFNC":
                document.MAINFORM.CPYT_DR_TRX_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                break;
            default:
                document.MAINFORM.CPYT_DR_TRX_CCY.value = document.MAINFORM.LC_CCY.value;
                break;
        }
        func_nm = "";
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC" || SYS_FUNCTION_TYPE == "IQ") {
            func_nm = SYS_ORG_FUNCTION_NAME;
        } else {
            func_nm = SYS_FUNCTION_NAME;
        }
        if ("EPLC_PayAccept" == func_nm) {
            discountflag = document.MAINFORM.DISCNT_FLG.value;
            ccy = document.MAINFORM.CFNC_C_CCY.value;
            if ('YES' == discountflag && ccy == SYS_LOCAL_CCY) {
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AMT_TXCCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_BUY_RATE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_DEAL, 'B');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_ID, 'B');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC_BTN, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_EXNG_AC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC_OWNER_BTN, 'P');
            }
        }
        DebitInitForFunction();
        if (SYS_MODULE_NAME == "IPLC" && (SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount" || SYS_ORG_FUNCTION_NAME == "IPLC_PaymentAtMaturity")) {
            if (document.MAINFORM.STL_FLG.value == "By Loan") {
                document.MAINFORM.CPYT_DR_AC_TYPE.value = 'INTERNAL';
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC_TYPE, 'P');
                Debit_Cal_CPYT_DR_AC_TYPE();
            } else {
                document.MAINFORM.CPYT_DR_AC_TYPE.value = "CUSTOMER";
                EEHtml.fireEvent(document.MAINFORM.CPYT_DR_AC_TYPE, "onchange");
                EEHtml.fireEvent(document.MAINFORM.CPYT_DR_ID, "onchange");
                SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AC_TYPE, 'O');
                Debit_Cal_CPYT_DR_AC_TYPE();
            }
        }
        Debit_Cal_CPYT_DR_AC_TYPE(); //Add by susie on 20200520

    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.Set_CPYT_DR_ID_from_MAIN = function() {
    try {
        if (SYS_MODULE_NAME == "EPLC") {
            if (document.MAINFORM.CPYT_DR_AC_TYPE.value == 'CUSTOMER') {
                document.MAINFORM.CPYT_DR_ID.value = document.MAINFORM.BENE_ID.value;
                document.MAINFORM.CPYT_DR_NAME.value = document.MAINFORM.BENE_NM.value;
            } else {
                if (document.MAINFORM.CPYT_DR_ID.value == '') {
                    document.MAINFORM.CPYT_DR_ID.value = '';
                    document.MAINFORM.CPYT_DR_NAME.value = '';
                }
            }
        }

        //Add by amy for SMBC Demo 20120906
        if (SYS_MODULE_NAME == "IMCO") {
            if (document.MAINFORM.CPYT_DR_AC_TYPE.value == 'CUSTOMER') {
                document.MAINFORM.CPYT_DR_ID.value = document.MAINFORM.DRWE_ID.value;
                document.MAINFORM.CPYT_DR_NAME.value = document.MAINFORM.DRWE_NM.value;
            } else {
                if (document.MAINFORM.CPYT_DR_ID.value == '') {
                    document.MAINFORM.CPYT_DR_ID.value = '';
                    document.MAINFORM.CPYT_DR_NAME.value = '';
                }
            }
        }

        //Add by amy for SMBC Demo 20120925
        if (SYS_MODULE_NAME == "IPLC") {
            if (document.MAINFORM.CPYT_DR_AC_TYPE.value == 'CUSTOMER') {
                document.MAINFORM.CPYT_DR_ID.value = document.MAINFORM.FORACOF_ID.value;
                document.MAINFORM.CPYT_DR_NAME.value = document.MAINFORM.FORACOF_NM.value;
            } else {
                if (document.MAINFORM.CPYT_DR_ID.value == '') {
                    document.MAINFORM.CPYT_DR_ID.value = '';
                    document.MAINFORM.CPYT_DR_NAME.value = '';
                }
            }
        } else {
            if (document.MAINFORM.CPYT_DR_AC_TYPE.value == 'NOSTRO' || document.MAINFORM.CPYT_DR_AC_TYPE.value == 'VOSTRO' || document.MAINFORM.CPYT_DR_AC_TYPE.value == 'SUSPENSE' || document.MAINFORM.CPYT_DR_AC_TYPE.value == 'INTERNAL' || document.MAINFORM.CPYT_DR_AC_TYPE.value == 'CUSTOMER') {
                document.MAINFORM.CPYT_DR_ID.value = '';
                document.MAINFORM.CPYT_DR_NAME.value = '';
                document.MAINFORM.CPYT_DR_AC.value = '';
            }
        }

        //add by susie from function Debit_Cal_CPYT_DR_AC_TYPE on 20200520
        if (document.MAINFORM.CPYT_DR_AC_TYPE.value == "SUSPENSE" || document.MAINFORM.CPYT_DR_AC_TYPE.value == "INTERNAL") {
            if (SYS_MODULE_NAME == "RPFM" && SYS_ORG_FUNCTION_NAME == "RepayGrantor" || SYS_ORG_FUNCTION_NAME == "SettleParticipant" || SYS_ORG_FUNCTION_NAME == "ProcessGrantor") {} else {
                document.MAINFORM.CPYT_DR_ID.value = "";
                document.MAINFORM.CPYT_DR_NAME.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_AC_onchange = function(event) {
    try {
        Get_CPYT_DR_AC();
        Debit_ExchangingRate();
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_AC_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('CPYT_DR_AC', 'C_CUST_ID= \'<--CPYT_DR_ID-->\' AND  C_CURRENCY=\'<--CPYT_DR_CCY-->\'');
        var acType = document.MAINFORM.CPYT_DR_AC_TYPE.value;
        var cur = document.MAINFORM.CPYT_DR_CCY.value;
        if (acType == 'INTERNAL') {
            var condition = "C_AC_IDENTIFIER = 'I' AND C_CURRENCY = '" + cur + "'";
            SYS_InqCUBK_Sql('CPYT_DR_AC', condition);
        } else {
            SYS_InqCUBK_byCondition('CPYT_DR_AC', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_AC_OWNER_BTN_onclick = function(event) {
    try {
        Debit_Cal_CPYT_DR_ID();
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_AC_TYPE_onchange = function(event) {
    try {
        Set_CPYT_DR_ID_from_MAIN();

        Debit_Cal_CPYT_DR_AC_TYPE();
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_DRCCY_onchange = function(event) {
    try {
        AmtFromatAmtDrccy();
        CPYT_DR_AMT_TXCCYfromDrccy();
        CPYT_DR_PER();
        EEHtml.fireEvent(document.MAINFORM.CPYT_DR_AMT_TXCCY, 'onchange');
        //EEHtml.fireEvent(document.MAINFORM.CPYT_DR_PER, 'onchange');
        if (SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_DRCCY.value) < 0) {
            alert('Currency and Amount can not accept negative values');
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = 0;
            document.MAINFORM.CPYT_DR_AMT_TXCCY.value = 0;
            document.MAINFORM.CPYT_DR_BAL_TXCCY.value = 0;
            document.MAINFORM.CPYT_DR_PER.value = 0;

        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_TXCCY_onchange = function(event) {
    try {
        CPYT_DR_PER();
        CPYT_DR_AMT_DRCCY();
        AmtFormatAmtTrxccy();
        Debit_Chk_Total_Pct();
        //Add by amy for SMBC Demo in 20120907

        CPYT_DR_AMT_TXCCY();
        if (SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value) < 0) {
            alert('Amount in Trx CCY can not accept negative values')
            document.MAINFORM.CPYT_DR_AMT_TXCCY.value = '';
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = '';
            document.MAINFORM.CPYT_DR_PER.value = '';
            document.MAINFORM.CPYT_DR_BAL_TXCCY.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_BUY_RATE_onchange = function(event) {
    try {
        CPYT_DR_AMT_DRCCY();
        AmtFromatAmtDrccy();
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_CCY_onchange = function(event) {
    try {
        document.MAINFORM.CPYT_DR_ID.value = '';
        document.MAINFORM.CPYT_DR_AC.value = '';
        Debit_ExchangingRate();
        //CPYT_DR_AMT_TXCCY();
        CPYT_DR_AMT_DRCCY();

        AmtFromatAmtDrccy();
        EEHtml.fireEvent(document.MAINFORM.CPYT_DR_AMT_DRCCY, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_ID_onchange = function(event) {
    try {
        CPYT_DR_ID_GetCUBK();
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_PER_onchange = function(event) {
    try {
        Debit_ExchangingRate();
        CPYT_DR_AMT_TXCCY();
        CPYT_DR_AMT_DRCCY();
        Debit_Chk_Total_Pct();
        if (SYS_BeFloat(document.MAINFORM.CPYT_DR_PER.value) < 0) {
            alert('Percentage can not accept negative values');
            document.MAINFORM.CPYT_DR_PER.value = 0;
            document.MAINFORM.CPYT_DR_AMT_DRCCY.value = 0;
            document.MAINFORM.CPYT_DR_AMT_TXCCY.value = 0;
            document.MAINFORM.CPYT_DR_BAL_TXCCY.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_RATE_onchange = function(event) {
    try {
        CPYT_DR_AMT_DRCCY_DRRATE();
    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}

csDOScreenProto.CPYT_DR_VAL_DATE_onchange = function(event) {
    try {
        CHK_CPYT_DR_VAL_DATE();

    } catch (e) {
        DisExcpt("SSSS_PaymentDebit.js", e);
    }
}