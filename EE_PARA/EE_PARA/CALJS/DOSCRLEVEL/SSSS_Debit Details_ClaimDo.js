"path:SCRN/DO/Debit Details_ClaimDo.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.AmtFormatAmtTrxccy = function() {
    try {
        /*ccy=document.MAINFORM.CPYT_DR_TTL_CCY.value;
amt=document.MAINFORM.CPYT_DR_AMT_TXCCY.value;
document.MAINFORM.CPYT_DR_AMT_TXCCY.value = SYT_AmtFormat(ccy,amt);
*/
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.AmtFromatAmtDrccy = function() {
    try {
        amt = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_DRCCY.value);
        document.MAINFORM.CPYT_DR_AMT_DRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, amt);
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
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
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_DRCCY_DRRATE = function() {
    try {
        //added by zoe 20081128
        amt = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value) * SYS_BeFloat(document.MAINFORM.CPYT_DR_BUY_RATE.value);
        document.MAINFORM.CPYT_DR_AMT_DRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_CCY.value, amt);
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_TXCCY = function() {
    try {
        var amt; // Utility Auto Fix Comments
        amt = SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CPYT_DR_TTL_AMT_TTLCCY').value;
        amt = SYS_BeFloat(document.MAINFORM.CPYT_DR_PER.value) * SYS_BeFloat(amt) / 100;
        ccy = SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CPYT_DR_TTL_CCY').value;
        document.MAINFORM.CPYT_DR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_TXCCYfromDrccy = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        ccy = SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CPYT_DR_TTL_CCY').value;
        if (document.MAINFORM.CPYT_DR_BUY_RATE.value != "" && document.MAINFORM.CPYT_DR_BUY_RATE.value != null) {
            amt = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_DRCCY.value) / SYS_BeFloat(document.MAINFORM.CPYT_DR_BUY_RATE.value);
            document.MAINFORM.CPYT_DR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
            AmtFormatAmtTrxccy();
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_ID_GetCUBK = function() {
    try {
        var sAccType; // Utility Auto Fix Comments
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
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_PER = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var per; // Utility Auto Fix Comments
        amt = SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CPYT_DR_TTL_AMT_TTLCCY').value;
        if (amt != "" && SYS_BeFloat(amt) != 0) {
            per = SYS_BeFloat(document.MAINFORM.CPYT_DR_AMT_TXCCY.value) / SYS_BeFloat(amt) * 100;
            per = SYS_BeInt(per * 100) / 100;
            if (per > 100 || per < 0) {
                per = 0;
                alert("Please note the Amount value!");
            }
            document.MAINFORM.CPYT_DR_PER.value = per;
            EEHtml.fireEvent(document.MAINFORM.CPYT_DR_PER, 'onchange');
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Check_CPYT_DR_PER = function() {
    try {
        Debit_Chk_Total_Pct();
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
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
        EEHtml.fireEvent(SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CLAIMDO_DR_TOTAL_PCT'), 'onchange');
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!Debit_Chk_Total_Pct()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.DebitCheckRecordStatus = function() {
    try {
        var targetDO; // Utility Auto Fix Comments
        /*
targetDO = SYS_GetCurrentEditDo("PaymentDebit");
if(targetDO == null){
   return "A";
}else{
   return "E";
}
*/
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.DebitInitForFunction = function() {
    try {
        if (SYS_MODULE_NAME == "IMCO") {
            DebitRemoveSelectOption(document.MAINFORM.CPYT_DR_AC_TYPE, "SUSPENSE");
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
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
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Debit_Cal_CPYT_DR_AC_TYPE = function() {
    try {
        var sAccType; // Utility Auto Fix Comments
        sAccType = document.MAINFORM.CPYT_DR_AC_TYPE.value;
        if (sAccType == "SUSPENSE" || sAccType == "INTERNAL") {
            EEHtml.getElementById("CPYT_DR_AC_OWNER_BTN").disabled = true;
            document.MAINFORM.CPYT_DR_ID.value = "";
            document.MAINFORM.CPYT_DR_NAME.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_NAME, "O");
        } else {
            EEHtml.getElementById("CPYT_DR_AC_OWNER_BTN").disabled = false;
            SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_NAME, "O");
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Debit_Cal_CPYT_DR_ID = function() {
    try {
        var sAccType; // Utility Auto Fix Comments
        sAccType = document.MAINFORM.CPYT_DR_AC_TYPE.value;
        if (sAccType == "CUSTOMER") {
            SYS_InqCUBK('Debit_CPYT_DR_ID', 'CPYT_DR_ID');
        } else if (sAccType == "NOSTRO" || sAccType == "VOSTRO") {
            SYS_InqCUBK('Debit_CPYT_DR_ID_BK', 'CPYT_DR_ID');
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Debit_Chk_Total_Pct = function() {
    try {
        var doDetail; // Utility Auto Fix Comments
        var vStatus; // Utility Auto Fix Comments
        doDetail = SYS_getDoByXpath("Claim.DebitHeader_ClaimDo.DebitDetails_ClaimDo");
        vStatus = doDetail.getStatue();
        if (vStatus == "E") {
            nTotal_Pct = SYS_BeFloat(SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CLAIMDO_DR_TOTAL_PCT').value) - SYS_BeFloat(document.MAINFORM.CPYT_DR_PER.value);
        } else {
            nTotal_Pct = SYS_BeFloat(SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CLAIMDO_DR_TOTAL_PCT').value);
        }
        nTotal_Pct = nTotal_Pct + SYS_BeFloat(document.MAINFORM.CPYT_DR_PER.value);
        if (nTotal_Pct > 100) {
            alert("Please note that the total percent exceeds 100%");
            nTotal_Pct = SYS_BeFloat(SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CLAIMDO_DR_TOTAL_PCT').value);
            document.MAINFORM.CPYT_DR_PER.value = 0;
            EEHtml.fireEvent(document.MAINFORM.CPYT_DR_PER, 'onchange');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Debit_ExchangingRate = function() {
    try {
        var fromccy; // Utility Auto Fix Comments
        var toccy; // Utility Auto Fix Comments
        fromccy = SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CPYT_DR_TTL_CCY').value;
        toccy = document.MAINFORM.CPYT_DR_CCY.value;
        if (fromccy != toccy) {
            if (fromccy != "" && toccy != "") {
                SYS_GetExchangeRate_S(fromccy, toccy, 'Booking Rate', 'CPYT_DR_BUY_RATE');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Get_CPYT_DR_AC = function() {
    try {
        if (document.MAINFORM.CPYT_DR_AC.value != "") {
            SYS_GetCUBK('CPYT_DR_AC', "CPYT_DR_AC");
        }
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        var sta; // Utility Auto Fix Comments
        sta = DebitCheckRecordStatus();
        if (sta == "A") {
            Check_CPYT_DR_PER();
            document.MAINFORM.CPYT_DR_CCY.value = SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CPYT_DR_TTL_CCY').value;
        }
        Debit_ExchangingRate();


        document.MAINFORM.CPYT_DR_VAL_DATE.value = SYS_BUSI_DATE;

        //Get Beneficiary id and name to Account Owner ID
        Set_CPYT_DR_ID_from_MAIN();
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
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
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        EEHtml.fireEvent(SYS_getScreenObjByxpath('Claim.DebitHeader_ClaimDo', 'CLAIMDO_DR_TOTAL_PCT'), 'onchange');
        MPO_CPYT_DR_NAME();
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_VAL_DATE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_CCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_AMT_DRCCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_DR_BUY_RATE, 'M');
        document.MAINFORM.CPYT_DR_TRX_CCY.value = SYS_getScreenObjByxpath('Claim', 'CLM_CCY').value;

        DebitInitForFunction();

    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        SYT_Delay_MilliSeconds(2000);
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.Set_CPYT_DR_ID_from_MAIN = function() {
    try {
        /*
if(SYS_MODULE_NAME=="EPLC"){
	if(document.MAINFORM.CPYT_DR_AC_TYPE.value =='CUSTOMER')
	{
		document.MAINFORM.CPYT_DR_ID.value= document.MAINFORM.BENE_ID.value;
		document.MAINFORM.CPYT_DR_NAME.value = document.MAINFORM.BENE_NM.value;
	}else{
		document.MAINFORM.CPYT_DR_ID.value ='';
		document.MAINFORM.CPYT_DR_NAME.value = '';
	}
}
*/
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_AC_onchange = function(event) {
    try {
        Get_CPYT_DR_AC();
        Debit_ExchangingRate();
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_AC_BTN_onclick = function(event) {
    try {
        //SYS_InqCUBK_Sql('CPYT_DR_AC', 'C_CUST_ID= \'<--CPYT_DR_ID-->\' AND  C_CURRENCY=\'<--CPYT_DR_CCY-->\'');
        SYS_InqCUBK_byCondition('CPYT_DR_AC', '1');
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_AC_OWNER_BTN_onclick = function(event) {
    try {
        Debit_Cal_CPYT_DR_ID();
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_AC_TYPE_onchange = function(event) {
    try {
        Set_CPYT_DR_ID_from_MAIN();

        Debit_Cal_CPYT_DR_AC_TYPE();
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_DRCCY_onchange = function(event) {
    try {
        AmtFromatAmtDrccy();
        CPYT_DR_AMT_TXCCYfromDrccy();
        CPYT_DR_PER();
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_AMT_TXCCY_onchange = function(event) {
    try {
        CPYT_DR_PER();
        CPYT_DR_AMT_DRCCY();
        AmtFormatAmtTrxccy();
        Debit_Chk_Total_Pct();
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_BUY_RATE_onchange = function(event) {
    try {
        CPYT_DR_AMT_DRCCY();
        AmtFromatAmtDrccy();
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_CCY_onchange = function(event) {
    try {
        Debit_ExchangingRate();
        //CPYT_DR_AMT_TXCCY();
        CPYT_DR_AMT_DRCCY();

        AmtFromatAmtDrccy();
        EEHtml.fireEvent(document.MAINFORM.CPYT_DR_AMT_DRCCY, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_ID_onchange = function(event) {
    try {
        CPYT_DR_ID_GetCUBK();
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_PER_onchange = function(event) {
    try {
        Debit_ExchangingRate();
        CPYT_DR_AMT_TXCCY();
        CPYT_DR_AMT_DRCCY();
        Debit_Chk_Total_Pct();
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}

csDOScreenProto.CPYT_DR_RATE_onchange = function(event) {
    try {
        CPYT_DR_AMT_DRCCY_DRRATE();
    } catch (e) {
        DisExcpt("SSSS_Debit Details_ClaimDo.js", e);
    }
}