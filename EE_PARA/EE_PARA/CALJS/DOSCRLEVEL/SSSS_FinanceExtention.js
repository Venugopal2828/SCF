"path:SCRN/DO/FinanceExtention.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.BASE_RATE_DECIMAL = function() {
    try {
        var oldAmt; // Utility Auto Fix Comments
        oldAmt = document.MAINFORM.CFNC_N_LIBOR_RT.value;

        oldAmt = Math.round(oldAmt * Math.pow(10, 4)) / Math.pow(10, 4);
        if (("" + oldAmt).indexOf(".") > -1) {
            oldAmt = oldAmt + "0000";
        } else {
            oldAmt = oldAmt + ".0000";
        }
        document.MAINFORM.CFNC_N_LIBOR_RT.value = oldAmt.substring(0, oldAmt.indexOf(".") + 5);


        oldAmt = document.MAINFORM.CFNC_N_RT.value; // Utility Auto Fix Comments

        oldAmt = Math.round(oldAmt * Math.pow(10, 4)) / Math.pow(10, 4);
        if (("" + oldAmt).indexOf(".") > -1) {
            oldAmt = oldAmt + "0000";
        } else {
            oldAmt = oldAmt + ".0000";
        }
        document.MAINFORM.CFNC_N_RT.value = oldAmt.substring(0, oldAmt.indexOf(".") + 5);
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.CFNC_D_DT_Change = function() {
    try {
        var nFinanceDays; // Utility Auto Fix Comments
        var nSubDays; // Utility Auto Fix Comments
        var period; // Utility Auto Fix Comments
        var xxx; // Utility Auto Fix Comments
        //dane 2008-12-13 begin
        document.MAINFORM.CFNC_C_STATUS.value = SYS_BUSI_DATE;
        if (document.MAINFORM.CFNC_D_DT.value != "") {
            nSubDays = SYS_GetSubDays('CFNC_C_STATUS', 'CFNC_D_DT');
            if (nSubDays < 0) {
                SYS_CheckError(document.MAINFORM.CFNC_D_DT, 'Finance Date should not before system date!');
                document.MAINFORM.CFNC_D_DT.value = SYS_BUSI_DATE;
                period = SYS_GetSubDays('CFNC_D_DT', 'CFNC_D_DUE_DT');
                document.MAINFORM.CFNC_I_DAYS.value = period;
                document.MAINFORM.CFNC_I_DAYS_TEMP.value = period;
            } else {
                period = SYS_GetSubDays('CFNC_D_DT', 'CFNC_D_EXTEN_DUE_DT_E'); // Utility Auto Fix Comments
                document.MAINFORM.CFNC_I_DAYS.value = period;
                document.MAINFORM.CFNC_I_DAYS_TEMP.value = period;
            }
        }
        //Marked by amy for SMBC Demo in 20120907
        /*
if(nSubDays>0){
alert('Finance Date should not be a future');
document.MAINFORM.CFNC_D_DT.value=SYS_BUSI_DATE;
}
*/

        //dane 2008-12-13 end
        if (document.MAINFORM.CFNC_D_DT.value != "" && document.MAINFORM.CFNC_D_EXTEN_DUE_DT_E.value != "") {
            SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CFNC_D_DT');
            nFinanceDays = SYS_GetSubDays('CFNC_D_DT', 'CFNC_D_EXTEN_DUE_DT_E');
            if (nFinanceDays < 0) {
                alert('Finance Start date should be earlier than Finance Due date!');
                document.MAINFORM.CFNC_D_DT.value = '';
            }
        }
        if (document.MAINFORM.CFNC_D_MAST_MATU_DT.value != "" && document.MAINFORM.CFNC_D_DT.value != "") {
            SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CFNC_D_DUE_DT');
            xxx = SYS_GetSubDays('CFNC_D_MAST_MATU_DT', 'CFNC_D_EXTEN_DUE_DT_E');
            if (xxx > 0) {
                alert('Finance Due date should not be later than Maturity date!');
                document.MAINFORM.CFNC_D_EXTEN_DUE_DT_E.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.CFNC_D_EXTEN_DUE_DT_E_Change = function() {
    try {
        var nFinanceDays; // Utility Auto Fix Comments
        if (document.MAINFORM.CFNC_D_DT.value != "" && document.MAINFORM.CFNC_D_EXTEN_DUE_DT_E.value != "") {
            SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CFNC_D_EXTEN_DUE_DT_E');
            nFinanceDays = SYS_GetSubDays('CFNC_D_DT', 'CFNC_D_EXTEN_DUE_DT_E');
            if (nFinanceDays > 0) {
                document.MAINFORM.CFNC_I_DAYS.value = nFinanceDays;
                //dane 2008-12-13 begin for Discount
                document.MAINFORM.CFNC_I_DAYS_TEMP.value = nFinanceDays;
                CalcInterestAmount();
                //dane 2008-12-13 end for Discount
            } else {
                alert('Finance Due date should be later than Finance Start date!');
                document.MAINFORM.CFNC_D_EXTEN_DUE_DT_E.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.Cal_AmendType = function() {
    try {
        if (document.MAINFORM.CFNC_C_AMEND_TYPE.value == 'ExtendDueDate') {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_DUE_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_LIBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_MARGIN_RT, 'P');
        } else if (document.MAINFORM.CFNC_C_AMEND_TYPE.value == 'AmendFinanceAmount') {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_DUE_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_LIBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_MARGIN_RT, 'P');
        } else if (document.MAINFORM.CFNC_C_AMEND_TYPE.value == 'AmendRate') {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_LIBOR_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_MARGIN_RT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_DUE_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_DUE_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_LIBOR_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_MARGIN_RT, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.CalcInterestAmount = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var baseday; // Utility Auto Fix Comments
        var func_nm; // Utility Auto Fix Comments
        var interest; // Utility Auto Fix Comments
        var liborAmount; // Utility Auto Fix Comments
        var liborrate; // Utility Auto Fix Comments
        var marginAmount; // Utility Auto Fix Comments
        var marginrate; // Utility Auto Fix Comments
        var nFinanceAmount; // Utility Auto Fix Comments
        var nFinanceDays; // Utility Auto Fix Comments
        var payable; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var sCCY; // Utility Auto Fix Comments
        func_nm = getFunctionName();
        marginrate = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_RT.value);
        liborrate = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_RT.value);
        payable = document.MAINFORM.CFNC_C_INT_PAYABLE.value;
        sCCY = document.MAINFORM.CFNC_C_CCY.value;
        nFinanceAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        nFinanceDays = SYS_BeFloat(document.MAINFORM.CFNC_I_DAYS_TEMP.value) + SYS_BeFloat(document.MAINFORM.INC_PERIOD.value);
        rate = SYS_BeFloat(document.MAINFORM.CFNC_N_RT.value);
        baseday = SYS_BeInt(document.MAINFORM.CFNC_I_BASIC_DAYS.value);
        if (document.MAINFORM.CFNC_C_INT_MODE.value == "Simple Interest") {
            marginAmount = (nFinanceAmount / 100) * (marginrate / baseday) * nFinanceDays;
            liborAmount = (nFinanceAmount / 100) * (liborrate / baseday) * nFinanceDays;
            interest = SYS_BeFloat(marginAmount) + SYS_BeFloat(liborAmount);
        }
        if (document.MAINFORM.CFNC_C_INT_MODE.value == "Simple Yield") {
            interest = (rate / (1 + ((rate / 100) * (nFinanceDays / baseday)))) * nFinanceAmount * nFinanceDays / baseday / 100; // Utility Auto Fix Comments
            marginAmount = interest / rate * marginrate; // Utility Auto Fix Comments
            liborAmount = interest / rate * liborrate; // Utility Auto Fix Comments
        }
        // Add for Interest amount should be credited in Bank Collection Currency defined in Charges tab
        //Edit by amy for Interest amount should be credited in Finance Currency in 2012.08.20
        document.MAINFORM.CFNC_N_PRE_INT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, interest);
        EEHtml.fireEvent(document.MAINFORM.CFNC_N_PRE_INT, "onchange");
        document.MAINFORM.CFNC_N_MARGIN_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, marginAmount);
        EEHtml.fireEvent(document.MAINFORM.CFNC_N_MARGIN_AMT, "onchange");
        document.MAINFORM.CFNC_N_LIBOR_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, liborAmount);

        //dane 2008-12-26 begin
        if (document.MAINFORM.CFNC_C_PAY_BY.value == "Applicant" && payable == "Up Front") {
            document.MAINFORM.CFNC_N_NET_AMT.value = nFinanceAmount - liborAmount - marginAmount;
        }
        if (document.MAINFORM.CFNC_C_PAY_BY.value == "Applicant" && payable == "In Arrears") {
            document.MAINFORM.CFNC_N_NET_AMT.value = nFinanceAmount;
        }
        if (document.MAINFORM.CFNC_C_PAY_BY.value == "Beneficiary" && payable == "Up Front") {
            document.MAINFORM.CFNC_N_NET_AMT.value = nFinanceAmount - liborAmount - marginAmount;
        }
        if (document.MAINFORM.CFNC_C_PAY_BY.value == "Drawer" && payable == "Up Front") {
            document.MAINFORM.CFNC_N_NET_AMT.value = nFinanceAmount - liborAmount - marginAmount;
        }
        if (document.MAINFORM.CFNC_C_PAY_BY.value == "Drawee") {
            document.MAINFORM.CFNC_N_NET_AMT.value = nFinanceAmount;
        }
        EEHtml.fireEvent(document.MAINFORM.CFNC_N_NET_AMT, "onchange");
        /*
	if(func_nm =="EPLC_PayAccept"){
			 //document.MAINFORM.TTL_STL_AMT_RCV.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
			 //document.MAINFORM.TTL_STL_AMT_RCV.fireEvent("onchange");
			// document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = document.MAINFORM.CFNC_N_NET_AMT.value;
		}
*/
        if (func_nm == "EPLC_Discount") {
            _do = SYS_getDoByXpath('PaymentDealer.PaymentCreditHeader'); // Utility Auto Fix Comments
        }
        if ("EXCO_Discount" == func_nm) {
            document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            document.MAINFORM.CR_AMT_DRWR_CCY.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            EEHtml.fireEvent(document.MAINFORM.NET_AMT_RCVD_COLL_CCY, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.CR_AMT_DRWR_CCY, 'onchange');
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.FinanceLiborRateChange = function() {
    try {
        var margin; // Utility Auto Fix Comments
        var nLiborRate; // Utility Auto Fix Comments
        if (document.MAINFORM.CFNC_N_LIBOR_RT.value != 0) {
            nLiborRate = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_RT.value);
            margin = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_RT.value);

            if (nLiborRate > 0 && nLiborRate <= 100) {
                //document.MAINFORM.CFNC_N_RT.value=nLiborRate+margin;

                if (nLiborRate.toString().length > margin.toString().length) {
                    document.MAINFORM.CFNC_N_RT.value = (margin + nLiborRate).toFixed(nLiborRate.toString().length - nLiborRate.toString().indexOf(SYS_AMT_DEC_FORMAT) - 1);
                } else if (nLiborRate.toString().length < margin.toString().length) {
                    document.MAINFORM.CFNC_N_RT.value = (margin + nLiborRate).toFixed(margin.toString().length - margin.toString().indexOf(SYS_AMT_DEC_FORMAT) - 1);
                } else {
                    document.MAINFORM.CFNC_N_RT.value = (margin + nLiborRate).toFixed(margin.toString().length - margin.toString().indexOf(SYS_AMT_DEC_FORMAT) - 1);
                }


                EEHtml.fireEvent(document.MAINFORM.CFNC_N_RT, 'onchange');
            } else {
                SYS_CheckError(document.MAINFORM.CFNC_N_LIBOR_RT, 'Libor rate should between 0 and 100% !');
                document.MAINFORM.CFNC_N_LIBOR_RT.value = 0;
            }
        } else {
            document.MAINFORM.CFNC_N_RT.value = document.MAINFORM.CFNC_N_MARGIN_RT.value;
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_RT, 'onchange');

        }
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.MARGIN_RATE_DECIMAL = function() {
    try {
        var oldAmt; // Utility Auto Fix Comments
        oldAmt = document.MAINFORM.CFNC_N_MARGIN_RT.value;

        oldAmt = Math.round(oldAmt * Math.pow(10, 4)) / Math.pow(10, 4);
        if (oldAmt.indexOf(".") > -1) {
            oldAmt = oldAmt + "0000";
        } else {
            oldAmt = oldAmt + ".0000";
        }
        document.MAINFORM.CFNC_N_MARGIN_RT.value = oldAmt.substring(0, oldAmt.indexOf(".") + 5);


        oldAmt = document.MAINFORM.CFNC_N_RT.value;

        oldAmt = Math.round(oldAmt * Math.pow(10, 4)) / Math.pow(10, 4);
        if (oldAmt.indexOf(".") > -1) {
            oldAmt = oldAmt + "0000";
        } else {
            oldAmt = oldAmt + ".0000";
        }
        document.MAINFORM.CFNC_N_RT.value = oldAmt.substring(0, oldAmt.indexOf(".") + 5);
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.MarginRateChange = function() {
    try {
        var nLiborRate; // Utility Auto Fix Comments
        var nMarginRate; // Utility Auto Fix Comments
        var nMarginRate2; // Utility Auto Fix Comments
        var nRate; // Utility Auto Fix Comments
        nMarginRate = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_RT.value);
        nLiborRate = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_RT.value);

        if (document.MAINFORM.CFNC_N_MARGIN_RT.value != 0 && document.MAINFORM.CFNC_N_LIBOR_RT.value != 0) {
            if (nMarginRate > 0 && nLiborRate > 0) {
                nMarginRate2 = nMarginRate;
                nRate = nLiborRate + nMarginRate2;
                //document.MAINFORM.CFNC_N_RT.value = nRate ;


                if (nLiborRate.toString().length > nMarginRate2.toString().length) {
                    document.MAINFORM.CFNC_N_RT.value = (nMarginRate2 + nLiborRate).toFixed(nLiborRate.toString().length - nLiborRate.toString().indexOf(SYS_AMT_DEC_FORMAT) - 1);
                } else if (nLiborRate.toString().length < nMarginRate2.toString().length) {
                    document.MAINFORM.CFNC_N_RT.value = (nMarginRate2 + nLiborRate).toFixed(nMarginRate2.toString().length - nMarginRate2.toString().indexOf(SYS_AMT_DEC_FORMAT) - 1);
                } else {
                    document.MAINFORM.CFNC_N_RT.value = (nMarginRate2 + nLiborRate).toFixed(nMarginRate2.toString().length - nMarginRate2.toString().indexOf(SYS_AMT_DEC_FORMAT) - 1);
                }

                EEHtml.fireEvent(document.MAINFORM.CFNC_N_RT, 'onchange');
            } else {
                SYS_CheckError(document.MAINFORM.CFNC_N_MARGIN_RT, 'Please Input Libor Rate First !');
                document.MAINFORM.CFNC_N_MARGIN_RT.value = 0;
            }
        } else {
            document.MAINFORM.CFNC_N_RT.value = nMarginRate + nLiborRate;
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_RT, 'onchange');
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        SYT_DisableDiv("A_div");
        SYT_ChangeFldClass(document.MAINFORM.CFNC_C_AMEND_TYPE, 'M');
        Cal_AmendType();

    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.calculatePercentage = function() {
    try {
        var exchangerate; // Utility Auto Fix Comments
        var financeAmount; // Utility Auto Fix Comments
        var masterAmount; // Utility Auto Fix Comments
        masterAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_TRX_AMT.value);
        exchangerate = SYS_BeFloat(document.MAINFORM.CFNC_N_TRXCCY_LCY.value);
        financeAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);

        if (exchangerate == 0) {
            GetLCYvalue();
            exchangerate = SYS_BeFloat(document.MAINFORM.CFNC_N_TRXCCY_LCY.value);
        }
        if (exchangerate == 0 || masterAmount == 0) {
            return;
        }
        if (exchangerate == 1) {
            document.MAINFORM.CFNC_N_PCT.value = financeAmount / masterAmount * 100;
            return;
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.CFNC_C_AMEND_TYPE_onchange = function(event) {
    try {
        Cal_AmendType();
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.CFNC_D_EXTEN_DUE_DT_E_onchange = function(event) {
    try {
        CFNC_D_EXTEN_DUE_DT_E_Change();
        CFNC_D_DT_Change();


    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.CFNC_N_AMT_LCCCY_onchange = function(event) {
    try {
        calculatePercentage();
        CalcInterestAmount();
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.CFNC_N_LIBOR_RT_onchange = function(event) {
    try {
        FinanceLiborRateChange();
        CalcInterestAmount();
        BASE_RATE_DECIMAL();


    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}

csDOScreenProto.CFNC_N_MARGIN_RT_onchange = function(event) {
    try {
        MarginRateChange();
        CalcInterestAmount();
        MARGIN_RATE_DECIMAL();
    } catch (e) {
        DisExcpt("SSSS_FinanceExtention.js", e);
    }
}