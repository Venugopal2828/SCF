"path:SCRN/DO/FinanceEstablishmentCF.jsp";

function BASE_RATE_DECIMAL() {
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
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CAL_FINANCE_DAYS() {
    try {
        if (SYS_FUNCTION_TYPE == "EC") {
            document.MAINFORM.CFNC_I_DAYS_TEMP.value = SYS_BeInt(document.MAINFORM.CFNC_I_DAYS.value) - SYS_BeInt(document.MAINFORM.CFNC_C_GRACE_DAYS.value);
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_C_GRACE_DAYS_Change() {
    try {
        var nGraceDays; // Utility Auto Fix Comments
        var nfinanceDays; // Utility Auto Fix Comments
        var totalDays; // Utility Auto Fix Comments
        nGraceDays = SYS_BeInt(document.MAINFORM.CFNC_C_GRACE_DAYS.value);
        nfinanceDays = SYS_BeInt(document.MAINFORM.CFNC_I_DAYS_TEMP.value);
        if ('' != document.MAINFORM.CFNC_C_GRACE_DAYS.value) {
            if (nGraceDays < 100) {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_GRACE_FLG, 'M');
                totalDays = nfinanceDays + nGraceDays;
                //document.MAINFORM.CFNC_I_DAYS.value = totalDays;
                //dane 2008-12-15 begin
                if ("Calendar" == document.MAINFORM.CFNC_C_GRACE_FLG.value) {
                    SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DT.value, totalDays, 'SYF_CFNC_getendday', 'A', 'N', 'N');
                    if (document.MAINFORM.INC_EXC.value == 'Inclusive') {
                        document.MAINFORM.INC_PERIOD.value = document.MAINFORM.CFNC_C_GRACE_DAYS.value;
                    } else {
                        document.MAINFORM.INC_PERIOD.value = 0;
                    }

                } else {
                    SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DUE_DT.value, nGraceDays, 'SYF_CFNC_getendday', 'A', 'Y', 'Y');
                    if (document.MAINFORM.INC_EXC.value == 'Inclusive') {
                        SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DUE_DT.value, document.MAINFORM.CFNC_C_GRACE_DAYS.value, 'TEMP_CFNC_D_DUE_DT', 'A', 'y', 'y'); // Utility Auto Fix Comments
                        document.MAINFORM.INC_PERIOD.value = SYS_GetSubDays('CFNC_D_DUE_DT', 'TEMP_CFNC_D_DUE_DT', SYS_BANK_COUNTRY);
                    } else {
                        document.MAINFORM.INC_PERIOD.value = 0;
                    }
                }
            } else if (nGraceDays == 0) {
                SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DT.value, totalDays, 'SYF_CFNC_getendday', 'A', 'N', 'N');
            } else {
                SYS_CheckError(document.MAINFORM.CFNC_C_GRACE_DAYS, "Grace Days must between 0 and 99 days!");
            }
            //dane 2008-12-15 end 	
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_C_PAY_BY_Change() {
    try {
        var CFNC_C_PAY_BY; // Utility Auto Fix Comments
        //dane 2008-12-26 begin
        CFNC_C_PAY_BY = document.MAINFORM.CFNC_C_PAY_BY.value;
        switch (CFNC_C_PAY_BY) {
            case "Beneficiary":
                document.MAINFORM.CFNC_C_INT_PAYABLE.value = 'Up Front';
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_PAYABLE, 'P');
                break;
            case "Applicant":
                document.MAINFORM.CFNC_C_INT_PAYABLE.value = 'In Arrears';
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_PAYABLE, 'P');
                break;
            case "Drawer":
                document.MAINFORM.CFNC_C_INT_PAYABLE.value = 'Up Front';
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_PAYABLE, 'P');
                break;
            case "Drawee":
                document.MAINFORM.CFNC_C_INT_PAYABLE.value = 'In Arrears';
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_PAYABLE, 'P');
                break;

        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_D_DT_Change() {
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
                period = SYS_GetSubDays('CFNC_D_DT', 'CFNC_D_DUE_DT'); // Utility Auto Fix Comments
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
        if (document.MAINFORM.CFNC_D_DT.value != "" && document.MAINFORM.CFNC_D_DUE_DT.value != "") {
            SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CFNC_D_DT');
            nFinanceDays = SYS_GetSubDays('CFNC_D_DT', 'CFNC_D_DUE_DT');
            if (nFinanceDays < 0) {
                alert('Finance Start date should be earlier than Finance Due date!');
                document.MAINFORM.CFNC_D_DT.value = '';
            }
        }
        if (document.MAINFORM.CFNC_D_MAST_MATU_DT.value != "" && document.MAINFORM.CFNC_D_DT.value != "") {
            SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CFNC_D_DUE_DT');
            xxx = SYS_GetSubDays('CFNC_D_MAST_MATU_DT', 'CFNC_D_DUE_DT');
            if (xxx > 0) {
                alert('Finance Due date should not be later than Maturity date!');
                document.MAINFORM.CFNC_D_DUE_DT.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_D_DUE_DT_Change() {
    try {
        var nFinanceDays; // Utility Auto Fix Comments
        if (document.MAINFORM.CFNC_D_DT.value != "" && document.MAINFORM.CFNC_D_DUE_DT.value != "") {
            SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CFNC_D_DUE_DT');
            nFinanceDays = SYS_GetSubDays('CFNC_D_DT', 'CFNC_D_DUE_DT');
            if (nFinanceDays > 0) {
                document.MAINFORM.CFNC_I_DAYS.value = nFinanceDays;
                //dane 2008-12-13 begin for Discount
                document.MAINFORM.CFNC_I_DAYS_TEMP.value = nFinanceDays;
                //dane 2008-12-13 end for Discount
            } else {
                alert('Finance Due date should be later than Finance Start date!');
                document.MAINFORM.CFNC_D_DUE_DT.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_InquireInterest_eLoan() {
    try {
        var IntAmt;
        document.MAINFORM.IA_I_CCY_DEC.value = findDecFromCCY(document.MAINFORM.CFNC_C_CCY.value);
        if (document.MAINFORM.CFNC_C_INT_PAYABLE.value == 'Up Front') {
            if (SYS_BeFloat(document.MAINFORM.CFNC_N_RT.value) > 0) {
                SYS_InqGapi_S('eLOAN_Amz_InqInt');
                IntAmt = SYS_BeFloat(document.MAINFORM.IA_Y_REACC_INT.value);
            } else {
                IntAmt = 0;
            }
            document.MAINFORM.CFNC_N_PRE_INT.value = IntAmt;
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_PRE_INT, "onchange");
        } else {
            document.MAINFORM.CFNC_N_PRE_INT.value = 0;
            EEHtml.fireEvent(document.MAINFORM.CFNC_N_PRE_INT, "onchange");
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function Cal_CFNC_C_AC_NO() {
    try {
        var CCY; // Utility Auto Fix Comments
        //edit by zoe 20090219 for Bug 1243
        CCY = document.MAINFORM.CFNC_C_CCY.value;
        if (CCY == SYS_LOCAL_CCY) {
            document.MAINFORM.CFNC_C_AC_NO.value = "ADV.ACCT.CCY";
        } else {
            document.MAINFORM.CFNC_C_AC_NO.value = '';
        }
        if (SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            setFinanceAMTtoPaymentDebit();
            setFinanceAMTtoPaymentCredit();
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function Cal_CFNC_C_INT_PAYABLE() {
    try {
        var CFNC_C_INT_PAYABLE; // Utility Auto Fix Comments
        CFNC_C_INT_PAYABLE = document.MAINFORM.CFNC_C_INT_PAYABLE.value;
        if ("EPLC" == SYS_MODULE_NAME) {
            switch (CFNC_C_INT_PAYABLE) {
                case "Up Front":
                    document.MAINFORM.CFNC_C_PAY_BY.value = "Beneficiary";
                    SYT_ChangeFldClass(document.MAINFORM.CFNC_C_PAY_BY, "P");
                    break;
                case "In Arrears":
                    document.MAINFORM.CFNC_C_PAY_BY.value = "Applicant";
                    SYT_ChangeFldClass(document.MAINFORM.CFNC_C_PAY_BY, "P");
                    break;
            }
        } else if ("EXCO" == SYS_MODULE_NAME) {
            switch (CFNC_C_INT_PAYABLE) {
                case "Up Front":
                    document.MAINFORM.CFNC_C_PAY_BY.value = "Drawer";
                    SYT_ChangeFldClass(document.MAINFORM.CFNC_C_PAY_BY, "P");
                    break;
                case "In Arrears":
                    document.MAINFORM.CFNC_C_PAY_BY.value = "Drawee";
                    SYT_ChangeFldClass(document.MAINFORM.CFNC_C_PAY_BY, "P");
                    break;
            }
        } else if ("IPLC" == SYS_MODULE_NAME) {
            //Add by Jack on 20120908 for SMBC Workshop
            document.MAINFORM.CFNC_C_INT_PAYABLE.value = 'Up Front';
            CFNC_C_INT_PAYABLE = document.MAINFORM.CFNC_C_INT_PAYABLE.value;
            switch (CFNC_C_INT_PAYABLE) {
                case "Up Front":
                    document.MAINFORM.CFNC_C_PAY_BY.value = "Beneficiary";
                    SYT_ChangeFldClass(document.MAINFORM.CFNC_C_PAY_BY, "P");
                    break;
                case "In Arrears":
                    document.MAINFORM.CFNC_C_PAY_BY.value = "Applicant";
                    SYT_ChangeFldClass(document.MAINFORM.CFNC_C_PAY_BY, "P");
                    break;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function Cal_CFNC_OVERDUE_DT() {
    try {
        var nGraceDays; // Utility Auto Fix Comments
        var nfinanceDays; // Utility Auto Fix Comments
        nGraceDays = SYS_BeInt(document.MAINFORM.CFNC_C_GRACE_DAYS.value);
        nfinanceDays = SYS_BeInt(document.MAINFORM.CFNC_I_DAYS.value);
        if ('' != document.MAINFORM.CFNC_C_GRACE_DAYS.value) {
            if (nGraceDays < 100) {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_C_GRACE_FLG, 'M');
                if ("Calendar" == document.MAINFORM.CFNC_C_GRACE_FLG.value) {
                    SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DUE_DT.value, nGraceDays, 'SYF_CFNC_getendday1', 'A', 'N', 'N');
                } else {
                    SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DUE_DT.value, nGraceDays, 'SYF_CFNC_getendday1', 'A', 'Y', 'Y');
                }
            } else if (nGraceDays > 100) {
                SYS_CheckError(document.MAINFORM.CFNC_C_GRACE_DAYS, "Grace Days must between 0 and 99 days!");
            }
        }
        //SYS_CalEndWorkingDate(strCntyCode, strStartDate, strDays, strJsFuncName, strBeforeOrAfter, strIfCheckHol, strIfJumpHol);
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CalcInterestAmount() {
    try {
        /*      var _do; // Utility Auto Fix Comments
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
        if (SYS_MODULE_NAME !== "CFNC") { //Add BY Miya for cfnc
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
        } else {
            if (payable == "In Arrears") {
                document.MAINFORM.CFNC_N_NET_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, nFinanceAmount);
            }
            if (payable == "Up Front") {
                document.MAINFORM.CFNC_N_NET_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, nFinanceAmount - interest);
            }
        }
       
	if(func_nm =="EPLC_PayAccept"){
			 //document.MAINFORM.TTL_STL_AMT_RCV.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
			 //document.MAINFORM.TTL_STL_AMT_RCV.fireEvent("onchange");
			// document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = document.MAINFORM.CFNC_N_NET_AMT.value;
		}

        if (func_nm == "EPLC_Discount") {
            _do = SYS_getDoByXpath('PaymentDealer.PaymentCreditHeader'); // Utility Auto Fix Comments
        }
        if ("EXCO_Discount" == func_nm) {
            document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            document.MAINFORM.CR_AMT_DRWR_CCY.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            EEHtml.fireEvent(document.MAINFORM.NET_AMT_RCVD_COLL_CCY, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.CR_AMT_DRWR_CCY, 'onchange');
        }
        setInterestToSettle();
        setFinanceAMTtoPaymentDebit();
        setFinanceAMTtoPaymentCredit();
*/
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CalculateMarginAmount() {
    try {
        var baseday; // Utility Auto Fix Comments
        var interest; // Utility Auto Fix Comments
        var marginAmount; // Utility Auto Fix Comments
        var marginrate; // Utility Auto Fix Comments
        var nFinanceAmount; // Utility Auto Fix Comments
        var nFinanceDays; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        /* marginrate = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_RT.value);
	nFinanceAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
	nFinanceDays = SYS_BeInt(document.MAINFORM.CFNC_I_DAYS.value);
	baseday = SYS_BeInt(document.MAINFORM.CFNC_I_BASIC_DAYS.value);	
	interest = SYS_BeFloat(document.MAINFORM.CFNC_N_PRE_INT.value);
	rate = SYS_BeFloat(document.MAINFORM.CFNC_N_RT.value);
         if(document.MAINFORM.CFNC_C_INT_MODE.value == "Simple Interest"){
	    marginAmount = (nFinanceAmount/100)*(marginrate/baseday)*nFinanceDays;
	 }
	if(document.MAINFORM.CFNC_C_INT_MODE.value == "Simple Yield"){
	    marginAmount = interest/rate*marginrate;
	 }
	document.MAINFORM.CFNC_N_MARGIN_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value,marginAmount);
	document.MAINFORM.CFNC_N_MARGIN_AMT.fireEvent("onchange");*/
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function ConfirmBusinessCall() {
    try {
        if (SYS_MODULE_NAME !== "CFNC") {
            var base; // Utility Auto Fix Comments
            var margin; // Utility Auto Fix Comments
            var targetDo; // Utility Auto Fix Comments
            var targetDo_FinanceEstablishment; // Utility Auto Fix Comments
            document.MAINFORM.CFNC_N_BAL.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            base = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_AMT.value);
            margin = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_AMT.value);
            if (document.MAINFORM.CFNC_C_INT_PAYABLE.value == "Up Front" && base > 0) {
                document.MAINFORM.CFNC_DISCOUNT_AMT.value = base;
                document.MAINFORM.CFNC_MARGIN_AMT.value = margin;
            } else {
                document.MAINFORM.CFNC_DISCOUNT_AMT.value = 0;
            }
            document.MAINFORM.CFNC_DISCOUNT_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
            if (document.MAINFORM.CFNC_C_CCY.value == SYS_LOCAL_CCY) {
                document.MAINFORM.CFNC_DISCOUNT_NO.value = "INT.LOCAL.CCY";
            } else {
                document.MAINFORM.CFNC_DISCOUNT_NO.value = "INT.F.CURR.";
            }
            document.MAINFORM.CFNC_DISCOUNT_DT.value = document.MAINFORM.CFNC_D_DT.value;
            document.MAINFORM.CFNC_MARGIN_AC.value = "COM.LC";
            document.MAINFORM.CFNC_TRAN_CODE.value = document.MAINFORM.C_TRANS_CODE.value;

            GET_FINANCE_DATA();
        }
        if (SYS_ORG_FUNCTION_NAME == "FinanceEstablish") {
            document.MAINFORM.C_FUNC_SHORT_NAME.value = "Establishment";
            document.MAINFORM.CFNC_I_FINC_TIMES.value = document.MAINFORM.CFNC_I_FINC_TIMES.value + 1;
            document.MAINFORM.DISCNT_FLG.value = 'YES';
            document.MAINFORM.CFNC_C_STATUS.value = SYS_BUSI_DATE;
        }

        if (SYS_ORG_FUNCTION_SHORT_NAME == "PayAccept" || SYS_ORG_FUNCTION_SHORT_NAME == "Discount") {
            targetDo = (SYS_ORG_FUNCTION_SHORT_NAME == "PayAccept") ? SYS_GetObjByDoName("PaymentInstructionDealer") : SYS_GetObjByDoName("PaymentDealer");
            targetDo_FinanceEstablishment = SYS_GetObjByDoName("FinanceEstablishment");
            document.MAINFORM.DISCOUNT_TAB_KEY.value = targetDo[0].getDoValueByName('CPYT_C_SDA_FLAG') + targetDo[0].getDoValueByName('CPYT_C_PAY_PER') + targetDo[0].getDoValueByName('CPYT_I_TENOR_DAYS');
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function FinanceDataCheck() {
    try {
        var cfncRef; // Utility Auto Fix Comments
        var func_nm; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        cfncRef = document.MAINFORM.CFNC_C_REF.value;
        func_nm = "";
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC" || SYS_FUNCTION_TYPE == "IQ") {
            func_nm = SYS_ORG_FUNCTION_NAME;
        } else {
            func_nm = SYS_FUNCTION_NAME;
        }

        document.MAINFORM.CFNC_C_FINANCE_FLG.value = "Y";
        //Modofied by Jack on 20120906 for SMBC Workshop add func_nm=="IPLC_PayAcceptWithDiscount"
        if (func_nm == "EPLC_PayAccept" || func_nm == "IPLC_PayAcceptWithDiscount") {

            if (document.MAINFORM.DISCNT_FLG.value == 'NO') {
                document.MAINFORM.CFNC_C_FINANCE_FLG.value = "N";
            } else {
                targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
                len = targetDo.length;

                for (i = 0; i < len; i++) { // Utility Auto Fix Comments
                    vDo = targetDo[i];
                    vDo.putDoValueByName("CPYT_C_CFNC_REF", cfncRef);
                }
                SYS_RefreshDoGrid(targetDo);
            }
        }

        if (func_nm == "EPLC_Discount" || func_nm == "IPLC_Discount" || func_nm == "EXCO_Discount") {
            document.MAINFORM.CPYT_C_CFNC_REF.value = cfncRef;
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function FinanceDayschange() {
    try {
        var nFinanceDays; // Utility Auto Fix Comments
        nFinanceDays = SYS_BeInt(document.MAINFORM.CFNC_I_DAYS.value);
        document.MAINFORM.CFNC_I_DAYS_TEMP.value = nFinanceDays;
        if (document.MAINFORM.CFNC_D_DT.value != '' && nFinanceDays < 9999) {
            if (nFinanceDays == 0) {
                document.MAINFORM.CFNC_D_DUE_DT.value = "";
                document.MAINFORM.CFNC_C_GRACE_DAYS.value = 0;
            } else {
                SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DT.value, nFinanceDays, 'SYF_CFNC_getendday', 'A', 'N', 'N');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function FinanceLiborRateChange() {
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
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function FinancePercentageChange() {
    try {
        var nEqAmount; // Utility Auto Fix Comments
        var nFinancePersent; // Utility Auto Fix Comments
        var nLCCY; // Utility Auto Fix Comments
        var nTrxAmount; // Utility Auto Fix Comments
        var sTrxCCY; // Utility Auto Fix Comments
        nTrxAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_TRX_AMT.value);
        nFinancePersent = SYS_BeFloat(document.MAINFORM.CFNC_N_PCT.value);
        sTrxCCY = document.MAINFORM.CFNC_C_TRX_CCY.value;
        nLCCY = document.MAINFORM.CFNC_N_TRXCCY_LCY.value;
        if (nTrxAmount > 0) {
            if (nFinancePersent > 0 && nFinancePersent <= 100) {
                nEqAmount = nTrxAmount * nFinancePersent * nLCCY / 100;
                document.MAINFORM.CFNC_N_AMT_TXCCY.value = nEqAmount;
                EEHtml.fireEvent(document.MAINFORM.CFNC_N_AMT_TXCCY, "onchange");
                document.MAINFORM.CFNC_N_AMT_LCCCY.value = nEqAmount;
                EEHtml.fireEvent(document.MAINFORM.CFNC_N_AMT_LCCCY, "onchange");
                document.MAINFORM.CFNC_N_BAL.value = nEqAmount;
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'P');
            } else if (nFinancePersent == 0) {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'M');

            } else {
                SYS_CheckError(document.MAINFORM.CFNC_N_PCT, 'Finance Percentage should between 0 and 100% !'); // Utility Auto Fix Comments
                document.MAINFORM.CFNC_N_RT.value = 0;
                EEHtml.fireEvent(document.MAINFORM.CFNC_N_MARGIN_RT, 'onchange');
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'M');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function GET_BASE_DAY_BY_CCY() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        //sql = " WHERE C_CURRENCY='" + document.MAINFORM.CFNC_C_TRX_CCY.value + "'";
        //sFieldList = "I_BASE_DAY";
        //sMappingList = "CFNC_I_BASIC_DAYS";
        SYS_GetTableDataByRule_S('SSSS_FinanceEstablishment_GET_BASE_DAY_BY_CCY_0', '1', true);
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function GET_FINANCE_DATA() {
    try {
        var arrDebit; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        if (document.MAINFORM.DISCNT_FLG.value == "YES") {
            arrDebit = null;
            arrDebit = SYS_GetObjByDoName("PaymentDebit");
            if (arrDebit == null) {
                return; // Utility Auto Fix Comments
            }
            debit = arrDebit[0];
            if (!debit) {
                return;
            }
            document.MAINFORM.CFNC_C_INIT_FLG.value = debit.getDoValueByName("CPYT_DR_ID");
            document.MAINFORM.CFNC_C_TYPE_DESC.value = debit.getDoValueByName("CPYT_DR_NAME");
            document.MAINFORM.CFNC_C_AC_NO.value = debit.getDoValueByName("CPYT_DR_AC");
            document.MAINFORM.CFNC_C_AC_TYPE.value = debit.getDoValueByName("CPYT_DR_AC_TYPE");
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function GetLCYvalue() {
    try {
        var fromccy; // Utility Auto Fix Comments
        var toccy; // Utility Auto Fix Comments
        //dane 2008-12-24 begin
        toccy = document.MAINFORM.CFNC_C_CCY.value;
        fromccy = document.MAINFORM.CFNC_C_TRX_CCY.value;

        if (fromccy != "" && toccy != "") {
            SYS_GetExchangeRate_S(fromccy, toccy, 'Booking Rate', 'CFNC_N_TRXCCY_LCY');
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function InitValues() {
    try {
        document.MAINFORM.CFNC_C_ORIGIN_MAIN_REF.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.CFNC_C_ORIGIN_MODULE.value = SYS_MODULE_NAME;
        if (document.MAINFORM.CFNC_N_LIBOR_RT_TYPE.value !== 'Other') {
            document.getElementById("RATE_TYPE_NARR").style.display = "none";
            document.getElementById("CFNC_N_RT_NARR").style.display = "none";
        }
        if (document.MAINFORM.CFNC_PRINCIPAL_INSTAL_FLG.value == 'No') {
            document.getElementById("PRINCIPAL_INTERVAL").style.display = "none";
            document.getElementById("CFNC_PRINCIPAL_INTERVAL").style.display = "none";
        }
        if (document.MAINFORM.CFNC_INTEREST_INSTAL_FLG.value == 'No') {
            document.getElementById("INT_INTERVAL").style.display = "none";
            document.getElementById("CFNC_INTEREST_INTERVAL").style.display = "none";
        }
        Cal_CFNC_OVERDUE_DT();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function MARGIN_RATE_DECIMAL() {
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
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function MPO_CFNC_C_AC_NO() {
    try {
        // added by zoe for bug 1243
        if (document.MAINFORM.CFNC_C_CCY.value == SYS_LOCAL_CCY) {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_AC_NO_BTN, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_AC_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_AC_NO_BTN, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function MarginRateChange() {
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
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function PostconditionOnInit() {
    try {
        var nFinanceDays; // Utility Auto Fix Comments
        nFinanceDays = SYS_BeInt(document.MAINFORM.CFNC_I_DAYS.value);
        document.MAINFORM.CFNC_I_DAYS_TEMP.value = nFinanceDays;
        document.MAINFORM.IA_D_DUE_DATE.value = document.MAINFORM.CFNC_D_DUE_DT.value;
        document.MAINFORM.IA_C_CCY_CODE.value = document.MAINFORM.CFNC_C_CCY.value;
        document.MAINFORM.IA_I_BASE_DAYS.value = document.MAINFORM.CFNC_I_BASIC_DAYS.value;
        document.MAINFORM.IA_D_TRX_VALDATE.value = document.MAINFORM.CFNC_D_DT.value;
        document.MAINFORM.IA_Y_TRX_AMT.value = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        document.MAINFORM.IA_N_FIX_BAS_RATE.value = document.MAINFORM.CFNC_N_RT.value;
        document.MAINFORM.IA_D_CREATE_DATE.value = document.MAINFORM.CFNC_D_DT.value;
        document.MAINFORM.IA_I_CCY_DEC.value = findDecFromCCY(document.MAINFORM.CFNC_C_CCY.value);


    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function PreconditionOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function SYF_CFNC_getendday(enddate) {
    try {
        //document.MAINFORM.CFNC_D_DUE_DT.value = enddate;
        SYS_CheckHoliday(SYS_BANK_COUNTRY, 'CFNC_D_DUE_DT');
        //formatDateForSubmit(SYS_DATE_FORMAT,enddate);
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function SYF_CFNC_getendday1(enddate) {
    try {
        document.MAINFORM.CFNC_OVERDUE_DT.value = enddate;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function Set_CFNC_C_INT_MTHD() {
    try {
        if ('Up Front' == document.MAINFORM.CFNC_C_INT_PAYABLE.value) {
            document.MAINFORM.CFNC_C_INT_MTHD.value = 'AMZ';
        } else {
            document.MAINFORM.CFNC_C_INT_MTHD.value = 'ACC';
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function calculateFinanceAmount() {
    try {
        var amount; // Utility Auto Fix Comments
        var exchangerate; // Utility Auto Fix Comments
        var financeAmount; // Utility Auto Fix Comments
        var masterAmount; // Utility Auto Fix Comments
        var percentage; // Utility Auto Fix Comments
        masterAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_TRX_AMT.value);
        percentage = SYS_BeFloat(document.MAINFORM.CFNC_N_PCT.value);
        exchangerate = SYS_BeFloat(document.MAINFORM.CFNC_N_TRXCCY_LCY.value);
        if (masterAmount > 0) {
            if (percentage > 0 && percentage <= 100) {
                financeAmount = masterAmount * percentage * exchangerate / 100;
                //amount = masterAmount * percentage / 100;
                document.MAINFORM.CFNC_N_AMT_TXCCY.value = financeAmount;
                EEHtml.fireEvent(document.MAINFORM.CFNC_N_AMT_TXCCY, "onchange");
                document.MAINFORM.CFNC_N_AMT_LCCCY.value = financeAmount;
                EEHtml.fireEvent(document.MAINFORM.CFNC_N_AMT_LCCCY, "onchange");
                document.MAINFORM.CFNC_N_BAL.value = financeAmount;
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'P');
            } else if (percentage == 0) {
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'M');
            } else {
                SYS_CheckError(document.MAINFORM.CFNC_N_PCT, 'Finance Percentage should between 0 and 100% !'); // Utility Auto Fix Comments
                document.MAINFORM.CFNC_N_RT.value = 0;
                EEHtml.fireEvent(document.MAINFORM.CFNC_N_MARGIN_RT, 'onchange');
                SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'M');
            }
        }

        setFinanceAMTtoPaymentDebit();
        setFinanceAMTtoPaymentCredit();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function calculatePercentage() {
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
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function change_CFNC_N_AMT_LCCCY() {
    try {
        var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
        var CFNC_N_TRX_AMT; // Utility Auto Fix Comments
        var LCCCY; // Utility Auto Fix Comments
        var percentage; // Utility Auto Fix Comments
        CFNC_N_AMT_LCCCY = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
        LCCCY = SYS_BeFloat(CFNC_N_AMT_LCCCY);
        CFNC_N_TRX_AMT = SYS_BeFloat(document.MAINFORM.CFNC_N_TRX_AMT.value);
        if (CFNC_N_AMT_LCCCY != "" && LCCCY >= 0) {
            if (LCCCY > CFNC_N_TRX_AMT) {
                SYS_CheckError(document.MAINFORM.CFNC_N_AMT_LCCCY, "Finance cannot exceed Present Amount!");
                document.MAINFORM.CFNC_N_AMT_LCCCY.value = 0;
            } else {
                percentage = LCCCY / CFNC_N_TRX_AMT;
                document.MAINFORM.CFNC_N_PCT.value = SYS_BeInt(percentage * 100);
                //SYT_ChangeFldClass(document.MAINFORM.CFNC_N_PCT,"P");
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function deleteDOrecord(targetDo) {
    try {
        var datarecords; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        /*if( targetDo.getRecordCount()>0){
	records=SYS_getRecords(targetDo);
	datarecords=[];
	for(i=0,len=records.length;i<len;i++){
	   record = records[i];
	   record = SYS_setValToRec(record,'recordType','D');
	   datarecords[i]=record;
	  }
	SYS_reLoadGrid(targetDo,datarecords);
	}*/
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function getFunctionName() {
    try {
        var func_nm; // Utility Auto Fix Comments
        func_nm = "";
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC" || SYS_FUNCTION_TYPE == "IQ") {
            func_nm = SYS_ORG_FUNCTION_NAME;
        } else {
            func_nm = SYS_FUNCTION_NAME;
        }
        return func_nm;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function removeCFNC_C_PAY_BY(nvalue) {
    try {
        var arr; // Utility Auto Fix Comments
        var arroption; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var optionid; // Utility Auto Fix Comments
        optionid = EEHtml.getElementById("CFNC_C_PAY_BY");
        arroption = optionid.options;
        len = arroption.length;
        arr = new Array();
        for (i = 0; i < len; i++) {
            if (arroption[i].value != nvalue) {
                arr[arr.length] = arroption[i];
            }
        }
        optionid.options.length = 0;
        for (i = 0; i < arr.length; i++) {
            optionid.options[i] = arr[i];
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function setFinanceAMTtoPaymentCredit() {
    try {
        var Creditheader; // Utility Auto Fix Comments
        var Creditheaders; // Utility Auto Fix Comments
        var doObject; // Utility Auto Fix Comments
        var newRecord; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        //Add by jane for set credit amount from discount tab
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "IQ") {
            return;
        }
        if (SYS_ORG_FUNCTION_NAME == "EPLC_Discount") {
            targetDo = null;
            targetDo = SYS_GetObjByDoName("PaymentDealer");
            if (targetDo == null) {
                return;
            }
            if (targetDo.length > 0) {
                doObject = targetDo[0];
                Creditheaders = SYS_GetObjByDoName("PaymentCreditHeader");
                Creditheader = Creditheaders[0];
                Creditheader.deleteDoObj("PaymentCredit");
                doObject.deleteDoObj("PaymentCredit");
                SYS_DisableDoButton("PaymentCredit", "ADD", "DEL", true);
                newRecord = SYS_AddOneDoRecord("PaymentCredit", Creditheader);

                if (SYS_ORG_FUNCTION_NAME == "EPLC_Discount") {
                    document.MAINFORM.CPYT_NO_CR.value = "1";
                    document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                    document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, document.MAINFORM.AMT_TO_BENE_PRES_CCY.value);
                }
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_PER', '100');
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_CCY', document.MAINFORM.CFNC_C_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_BUY_RATE', 1.000000);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AMT_CRCCY', document.MAINFORM.AMT_TO_BENE_PRES_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AMT_TXCCY', document.MAINFORM.AMT_TO_BENE_PRES_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_AC', document.MAINFORM.CFNC_C_AC_NO.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_VAL_DATE', document.MAINFORM.CFNC_D_DT.value);
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_CR_TRX_CCY', document.MAINFORM.CFNC_C_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'X103_VALUE_DT_32A', SYS_BUSI_DATE);
                SYS_UpdateFldValueByDo(newRecord, 'X202_VALUE_DT_32A', SYS_BUSI_DATE);
                SYS_UpdateFldValueByDo(newRecord, 'X202_TRX_REF_NO_20', document.MAINFORM.C_MAIN_REF.value);
                SYS_UpdateFldValueByDo(newRecord, 'X103_SEND_NO_20', document.MAINFORM.C_MAIN_REF.value);
                SYS_UpdateFldValueByDo(newRecord, 'X103_SENDCHGCCY71F', document.MAINFORM.CPYT_CR_CCY.value);
                SYS_UpdateFldValueByDo(newRecord, 'X103_RECCHGCCY_71G', document.MAINFORM.CPYT_CR_CCY.value);
                SYS_RefreshDoGrid(newRecord);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function setFinanceAMTtoPaymentDebit() {
    try {
        var Creditheader; // Utility Auto Fix Comments
        var Debitheader; // Utility Auto Fix Comments
        var doObject; // Utility Auto Fix Comments
        var newRecord; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "IQ") {
            return;
        }
        targetDo = null;
        if ("EPLC_PayAccept" == SYS_ORG_FUNCTION_NAME || ("IPLC_PayAcceptWithDiscount" == SYS_ORG_FUNCTION_NAME && document.MAINFORM.DISCNT_FLG.value == 'YES')) {
            targetDo = SYS_GetObjByDoName("PaymentInstrDeal");
        }
        if ("EPLC_Discount" == SYS_ORG_FUNCTION_NAME || "EXCO_Discount" == SYS_ORG_FUNCTION_NAME) {
            targetDo = SYS_GetObjByDoName("PaymentDealer");
        }
        if (targetDo == null) {
            return;
        }
        if (targetDo.length > 0) {
            //SYS_DeleteDoRecord("PaymentDebit");
            doObject = targetDo[0];
            doObject.deleteDoObj("PaymentDebit");
            SYS_DisableDoButton("PaymentDebit", "ADD", "DEL", true);
            newRecord = SYS_AddOneDoRecord("PaymentDebit", doObject);
            Debitheader = newRecord.parentObj;
            Creditheader = SYS_GetObjByDoName("PaymentCreditHeader");
            if ("EPLC_PayAccept" == SYS_ORG_FUNCTION_NAME || "IPLC_PayAcceptWithDiscount" == SYS_ORG_FUNCTION_NAME) {
                SYS_UpdateFldValueByDo(Debitheader, 'CPYT_NO_DR', "1");
                SYS_UpdateFldValueByDo(Debitheader, "CPYT_DR_TTL_CCY", document.MAINFORM.CFNC_C_CCY.value);
                //SYS_UpdateFldValueByDo(Debitheader,"CPYT_DR_TTL_AMT_TTLCCY",SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value,document.MAINFORM.CFNC_N_AMT_LCCCY.value));	
            } else {
                document.MAINFORM.CPYT_NO_DR.value = "1";
                document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, document.MAINFORM.CFNC_N_AMT_LCCCY.value);
            }
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_PER', '100');
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_CCY', document.MAINFORM.CFNC_C_CCY.value);
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_BUY_RATE', 1.000000);
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_DRCCY', document.MAINFORM.CFNC_N_AMT_LCCCY.value);
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AMT_TXCCY', document.MAINFORM.CFNC_N_AMT_LCCCY.value);
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC', document.MAINFORM.CFNC_C_AC_NO.value);
            SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_VAL_DATE', document.MAINFORM.CFNC_D_DT.value);
            if (document.MAINFORM.CFNC_C_CCY.value == SYS_LOCAL_CCY) {
                SYS_UpdateFldValueByDo(newRecord, 'CPYT_DR_AC_TYPE', 'INTERNAL');
            }
            SYS_RefreshDoGrid(newRecord);
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}
window.onunload = OnLeave;

function OnLeave() {
    PreconditionOnUnload();
    SYS_OnLeave();
    PostconditionOnUnload();
}

function PreconditionOnUnload() {
    try {} catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function PostconditionOnUnload() {
    try {} catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function ConfirmBusinessCheck() {
    try {} catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
    return true;
}

function CancelCheck() {
    try {} catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
    return true;
}

function LoadDODataOnInit() {
    try {} catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}


function initFieldEvent() {
    try {
        document.MAINFORM.CFNC_C_AC_NO.onchange = CFNC_C_AC_NO_onchange;
        document.MAINFORM.CFNC_C_GRACE_DAYS.onchange = CFNC_C_GRACE_DAYS_onchange;
        document.MAINFORM.CFNC_C_GRACE_FLG.onchange = CFNC_C_GRACE_FLG_onchange;
        document.MAINFORM.CFNC_C_INT_PAYABLE.onchange = CFNC_C_INT_PAYABLE_onchange;
        document.MAINFORM.CFNC_D_DUE_DT.onchange = CFNC_D_DUE_DT_onchange;
        document.MAINFORM.CFNC_INTEREST_INSTAL_FLG.onchange = CFNC_INTEREST_INSTAL_FLG_onchange;
        document.MAINFORM.CFNC_N_AMT_LCCCY.onchange = CFNC_N_AMT_LCCCY_onchange;
        document.MAINFORM.CFNC_N_LIBOR_RT.onchange = CFNC_N_LIBOR_RT_onchange;
        document.MAINFORM.CFNC_N_LIBOR_RT_TYPE.onchange = CFNC_N_LIBOR_RT_TYPE_onchange;
        document.MAINFORM.CFNC_N_MARGIN_RT.onchange = CFNC_N_MARGIN_RT_onchange;
        document.MAINFORM.CFNC_N_NET_AMT.onchange = CFNC_N_NET_AMT_onchange;
        document.MAINFORM.CFNC_N_PCT.onchange = CFNC_N_PCT_onchange;
        document.MAINFORM.CFNC_N_PRE_INT.onchange = CFNC_N_PRE_INT_onchange;
        document.MAINFORM.CFNC_PAYMENT_FLAG.onchange = CFNC_PAYMENT_FLAG_onchange;
        document.MAINFORM.CFNC_PRINCIPAL_INSTAL_FLG.onchange = CFNC_PRINCIPAL_INSTAL_FLG_onchange;
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function PreInitValues() {
    try {} catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function OnInitial() {
    try {
        PreconditionOnInit();
        SYS_OnInit();
        PostconditionOnInit();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_C_AC_NO_onchange() {
    try {
        //20081213 for discount
        if (document.MAINFORM.CFNC_C_CCY.value == SYS_LOCAL_CCY) {
            setFinanceAMTtoPaymentDebit();
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_C_GRACE_DAYS_onchange() {
    try {
        Cal_CFNC_OVERDUE_DT();

    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_C_GRACE_FLG_onchange() {
    try {
        Cal_CFNC_OVERDUE_DT();

    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_C_INT_PAYABLE_onchange() {
    try {
        SYM_CFNC_Set_AMT_toPaymentDebit();

    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_D_DUE_DT_onchange() {
    try {
        CFNC_D_DUE_DT_Change();
        CFNC_D_DT_Change();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_INTEREST_INSTAL_FLG_onchange() {
    try {
        if (document.MAINFORM.CFNC_INTEREST_INSTAL_FLG.value == 'Yes') {
            document.getElementById("INT_INTERVAL").style.display = "";
            document.getElementById("CFNC_INTEREST_INTERVAL").style.display = "";
        } else {
            document.getElementById("INT_INTERVAL").style.display = "none";
            document.getElementById("CFNC_INTEREST_INTERVAL").style.display = "none";
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_N_AMT_LCCCY_onchange() {
    try {



        SYM_CFNC_Set_AMT_toPaymentDebit();
        document.MAINFORM.CPYT_N_PAY_AMT.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
        document.MAINFORM.CFNC_N_BAL.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;

    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_N_LIBOR_RT_onchange() {
    try {
        FinanceLiborRateChange();

        BASE_RATE_DECIMAL();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_N_LIBOR_RT_TYPE_onchange() {
    try {
        if (document.MAINFORM.CFNC_N_LIBOR_RT_TYPE.value == 'Other') {
            document.getElementById("RATE_TYPE_NARR").style.display = "";
            document.getElementById("CFNC_N_RT_NARR").style.display = "";
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_RT_NARR, 'M');
        } else {
            document.getElementById("RATE_TYPE_NARR").style.display = "none";
            document.getElementById("CFNC_N_RT_NARR").style.display = "none";
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_RT_NARR, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_N_MARGIN_RT_onchange() {
    try {
        MarginRateChange();
        CalculateMarginAmount();

    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_N_NET_AMT_onchange() {
    try {
        setFinanceAMTtoPaymentCredit();
        changeCPYT_CR_TTL_AMT_TTLCCY();

    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_N_PCT_onchange() {
    try {
        calculateFinanceAmount();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_N_PRE_INT_onchange() {
    try {
        CalculateMarginAmount();
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_PAYMENT_FLAG_onchange() {
    try {
        if (document.MAINFORM.CFNC_PAYMENT_FLAG.value == 'Yes') {
            document.getElementById("D").style.display = "";
        } else {
            document.getElementById("D").style.display = "none";
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}

function CFNC_PRINCIPAL_INSTAL_FLG_onchange() {
    try {
        if (document.MAINFORM.CFNC_PRINCIPAL_INSTAL_FLG.value == 'Yes') {
            document.getElementById("PRINCIPAL_INTERVAL").style.display = "";
            document.getElementById("CFNC_PRINCIPAL_INTERVAL").style.display = "";
        } else {
            document.getElementById("PRINCIPAL_INTERVAL").style.display = "none";
            document.getElementById("CFNC_PRINCIPAL_INTERVAL").style.display = "none";
        }
    } catch (e) {
        DisExcpt("SSSS_FinanceEstablishmentCF.js", e);
    }
}