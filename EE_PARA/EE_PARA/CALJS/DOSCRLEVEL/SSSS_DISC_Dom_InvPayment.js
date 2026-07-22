"path:SCRN/o2m/DISC_Dom_InvPayment.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

var canBeConfirm = false;
var duedate = '';

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.CheckBuyPmtAmt = function() {
    try {
        var invbal; // Utility Auto Fix Comments
        /*invbal=SYS_BeFloat(document.MAINFORM.TEMP_INV_BAL.value);
if(opener.document.MAINFORM.FA_PMT_BY.value=='1' && document.MAINFORM.FA_FINAL_PMT_FLG.value=='1' && SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value)<invbal){
SYS_CheckError(document.MAINFORM.FA_PMT_AMT,'Payment by buyer,please clear Payment!');
return false;
}else{

return true;
}
*/
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.CheckSelPmtamt = function() {
    try {
        var pmtamt; // Utility Auto Fix Comments
        //pmtamt=SYS_BeFloat(document.MAINFORM.FA_PAID_INT_AMT.value)+SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
        //pmtamt=DecimalFormat(pmtamt,2);
        if (opener.document.MAINFORM.FA_PMT_BY.value == '2' && document.MAINFORM.FA_FINAL_PMT_FLG.value == '1' && SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) < SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value)) {

            SYS_CheckError(document.MAINFORM.FA_PMT_AMT, 'Payment by seller,please clear Payment!');
            return false;
        } else {
            return true;

        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.Check_LOAN_TIMES = function() {
    try {
        if (SYS_BeInt(document.MAINFORM.FA_INV_LOAN_TIMES.value) > 1 && document.MAINFORM.FA_FINAL_PMT_FLG.value == '2') {
            SYS_CheckError(document.MAINFORM.FA_FINAL_PMT_FLG, 'This invoice has do financing many times, and it can only do payment once!'); // Utility Auto Fix Comments
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.Check_PMT_AMT = function() {
    try {
        if (document.MAINFORM.FA_FINAL_PMT_FLG.value != '' && SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) > SYS_BeFloat(document.MAINFORM.FA_INV_AMT.value)) {
            alert('Payments can not be greater than the invoice amount! Please check!');
            return false;
        } else {

            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.Check_buyerpayment = function() {
    try {
        if (opener.document.MAINFORM.FA_PMT_BY.value == '1' && document.MAINFORM.FA_FINAL_PMT_FLG.value != '' && SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) > SYS_BeFloat(document.MAINFORM.TEMP_INV_BAL.value)) {

            alert('When Buyer do payments, the repayment amount can not be greater than the invoice balance!');
            return false;
        } else {

            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.Check_sellerpayment = function() {
    try {
        var sellerpayment; // Utility Auto Fix Comments
        //sellerpayment=SYS_BeFloat(document.MAINFORM.FA_PAID_INT_AMT.value)+SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
        //sellerpayment=DecimalFormat(sellerpayment,2);

        if (opener.document.MAINFORM.FA_PMT_BY.value == '2' && document.MAINFORM.FA_FINAL_PMT_FLG.value != '' && SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) > SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value)) {
            alert('When seller do the payments, the repayment amount can not be greater than the balance of margin!');
            return false;
        } else {

            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.DUE_DT = function() {
    try {
        var graceday; // Utility Auto Fix Comments
        var invduedate; // Utility Auto Fix Comments
        invduedate = document.MAINFORM.FA_INV_DUE_DT.value;
        graceday = document.MAINFORM.FA_PMT_GRC_DAY.value;
        SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, invduedate, graceday, 'duedate', 'A', 'N', 'N');
        if (document.MAINFORM.FA_PMT_VAL_DT.value > duedate && SYS_BeFloat(document.MAINFORM.FA_OVDUE_INT_RT.value) <= 0) {

            alert('The invoice is overdue ,the main page interest rate is the old Financing interest rate! please check!');

        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.FA_INV_BAL = function() {
    try {
        var INVBAL_BUYER; // Utility Auto Fix Comments
        var INVBAL_SELLER; // Utility Auto Fix Comments
        /*'1' means full payment,opener.document.MAINFORM.FA_PMT_BY=='1' means buyer payment and '2' means seller payment.*/
        INVBAL_SELLER = SYS_BeFloat(document.MAINFORM.TEMP_INV_BAL.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_AMT.value);
        INVBAL_BUYER = SYS_BeFloat(document.MAINFORM.TEMP_INV_BAL.value) - SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);

        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '1') {
            document.MAINFORM.FA_INV_BAL.value = 0;
        } else {
            if (opener.document.MAINFORM.FA_PMT_BY.value == '1') {
                document.MAINFORM.FA_INV_BAL.value = Math.max(SYS_BeFloat(INVBAL_BUYER), 0);
            } else {
                if (SYS_BeFloat(document.MAINFORM.FA_INV_LOAN_BAL.value) > 0) {
                    document.MAINFORM.FA_INV_BAL.value = SYS_BeFloat(INVBAL_SELLER);
                } else {
                    document.MAINFORM.FA_INV_BAL.value = 0;
                }
            }
        }

        EEHtml.fireEvent(document.MAINFORM.FA_INV_BAL, 'onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.FA_PAID_PRIN_AMT = function() {
    try {
        var fapaidprinamt; // Utility Auto Fix Comments
        var paidloanbal; // Utility Auto Fix Comments
        var paidprinamt; // Utility Auto Fix Comments
        //'1' is for full repayment, '2' is for the partial repayment

        /*paidprinamt=SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value)-SYS_BeFloat(document.MAINFORM.FA_PAID_INT_AMT.value);

if(document.MAINFORM.FA_FINAL_PMT_FLG.value=='1')
{
document.MAINFORM.FA_PAID_PRIN_AMT.value=SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
}
else if(document.MAINFORM.FA_FINAL_PMT_FLG.value=='2')
{
  document.MAINFORM.FA_PAID_PRIN_AMT.value =Math.max(paidprinamt,0);
}
else
{
  document.MAINFORM.FA_PAID_PRIN_AMT.value=0;
}
*/
        paidprinamt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_INT_AMT.value);
        paidloanbal = SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);

        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '1') {
            document.MAINFORM.FA_PAID_PRIN_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
        } else if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '2') {
            fapaidprinamt = SYS_BeFloat(Math.min(paidprinamt, paidloanbal));
            document.MAINFORM.FA_PAID_PRIN_AMT.value = SYS_BeFloat(Math.max(fapaidprinamt, 0));
        } else {
            document.MAINFORM.FA_PAID_PRIN_AMT.value = 0;
        }


        EEHtml.fireEvent(document.MAINFORM.FA_PAID_PRIN_AMT, 'onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.FA_PMT_AMT = function() {
    try {
        var pmtamt; // Utility Auto Fix Comments
        //'1' is for full repayment, '2' for the partial repayment.

        /*pmtamt=SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
if(document.MAINFORM.FA_FINAL_PMT_FLG.value=='1')
{
document.MAINFORM.FA_PMT_AMT.value =SYS_BeFloat(document.MAINFORM.FA_PAID_INT_AMT.value)+SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
}
else if(document.MAINFORM.FA_FINAL_PMT_FLG.value=='2')
{
  document.MAINFORM.FA_PMT_AMT.value=SYS_BeFloat(pmtamt);
}
else
{
  document.MAINFORM.FA_PMT_AMT.value=0;
}*/

        //opener.document.MAINFORM.FA_PMT_BY.value=='1' means Buyer payment and '2'means seller payment,document.MAINFORM.FA_FINAL_PMT_FLG.value=='1'means full payment and '2' means partial payment.

        pmtamt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);

        if (opener.document.MAINFORM.FA_PMT_BY.value == '1' && document.MAINFORM.FA_FINAL_PMT_FLG.value == '1') {

            document.MAINFORM.FA_PMT_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_INV_BAL.value);

        } else if (opener.document.MAINFORM.FA_PMT_BY.value == '2' && document.MAINFORM.FA_FINAL_PMT_FLG.value == '1') {

            //document.MAINFORM.FA_PMT_AMT.value=SYS_BeFloat(document.MAINFORM.FA_PAID_INT_AMT.value)+SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
            //document.MAINFORM.FA_PMT_AMT.value=DecimalFormat(document.MAINFORM.FA_PMT_AMT.value,2);
            document.MAINFORM.FA_PMT_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
        } else {

            document.MAINFORM.FA_PMT_AMT.value = SYS_BeFloat(pmtamt);

        }
        EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT, 'onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.FA_TEMP_AMT8 = function() {
    try {
        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '2' && document.MAINFORM.FA_INT_CHG_TYPE.value == '1') {

            document.MAINFORM.FA_TEMP_AMT8.value = SYS_BeFloat(document.MAINFORM.FA_OVD_INT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT15.value);
        } else
        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '2' && document.MAINFORM.FA_INT_CHG_TYPE.value == '2') {

            document.MAINFORM.FA_TEMP_AMT8.value = SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_OVD_INT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT15.value);
        } else {


            document.MAINFORM.FA_TEMP_AMT8.value = 0;
        }


        document.MAINFORM.FA_TEMP_AMT8.value = SYT_CCY_AMT(document.MAINFORM.FA_INV_CCY.value, document.MAINFORM.FA_TEMP_AMT8.value);
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.INT_BAL = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) > SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value)) {

            document.MAINFORM.FA_INT_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) - SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value); // Utility Auto Fix Comments

        } else {
            document.MAINFORM.FA_INT_BAL.value = 0;

        }
        document.MAINFORM.FA_INT_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_INV_CCY.value, document.MAINFORM.FA_INT_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.INV_LOAN_BAL = function() {
    try {
        var FA_INV_LOAN_BAL; // Utility Auto Fix Comments
        var vINV_LOAN_BAL; // Utility Auto Fix Comments
        FA_INV_LOAN_BAL = SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_AMT.value);
        vINV_LOAN_BAL = Math.max(FA_INV_LOAN_BAL, 0);
        document.MAINFORM.FA_INV_LOAN_BAL.value = SYS_BeFloat(INV_LOAN_BAL);
        EEHtml.fireEvent(document.MAINFORM.FA_INV_LOAN_BAL, 'onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.INV_STATUS = function() {
    try {
        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '1' || SYS_BeFloat(document.MAINFORM.FA_INV_BAL.value) == 0) {
            document.MAINFORM.FA_INV_STATUS.value = 'Close';
        } else {
            document.MAINFORM.FA_INV_STATUS.value = 'Payment';
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.Inq_Int_Gapi = function() {
    try {
        var strFieldList; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        /*
strFieldList="sum(FA_LOAN_INT_AMT) as FA_LOAN_INT_AMT";
strSQLWhere="FA_INV_REF='"+document.MAINFORM.FA_INV_REF.value+"'";
*/
        //'2' means interest is taken later on.
        if (document.MAINFORM.FA_INT_CHG_TYPE.value == '2') {
            SYS_InqGapi('Domestic_Inq_Interest_Accruel', 'PAID_INT_AMT');
            SYS_InqGapi_S('Domestic_Inq_Interest_Accruel');
            PAID_INT_AMT();
            PAID_INT_AMT2();
        } else {
            //SYS_Get22TableData_S("DISC_INV_LOAN",strSQLWhere,strFieldList,"FA_LOAN_INT_AMT","PAID_INT_AMT");
            //SYS_InqGapi('Domestic_Inq_Interest_Advance','PAID_INT_AMT');
            SYS_InqGapi_S('Domestic_Inq_Interest_Advance');
            PAID_INT_AMT();
            PAID_INT_AMT2();
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.IntresterBal = function() {
    try {
        var a; // Utility Auto Fix Comments
        a = SYS_GetSubDays(document.MAINFORM.TEMP_DATE2.name, document.MAINFORM.FA_PMT_VAL_DT.name);
        if (a > 0 && document.MAINFORM.FA_PMT_AMT.value != 0) {
            //FA_TEMP_AMT8();//add 20070908
            FA_TEMP_AMT8();
            PAID_INT_AMT();
            PAID_INT_AMT2();
            INT_BAL();
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.PAID_INT_AMT = function() {
    try {
        var intamt; // Utility Auto Fix Comments
        var paid_int_amt; // Utility Auto Fix Comments
        //Precharge is charged when do discount, so only pay interest on overdue interest.

        /*if (document.MAINFORM.FA_INT_CHG_TYPE.value=='1'){

document.MAINFORM.FA_PAID_INT_AMT.value=SYS_BeFloat(document.MAINFORM.FA_OVD_INT_AMT.value);
 
  paid_int_amt=SYS_BeFloat(document.MAINFORM.FA_OVD_INT_AMT.value);
  document.MAINFORM.FA_PAID_INT_AMT.value=DecimalFormat(paid_int_amt,2);

}else{

document.MAINFORM.FA_PAID_INT_AMT.value=SYS_BeFloat(document.MAINFORM.FA_OVD_INT_AMT.value)+SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_AMT.value);
	
	intamt=SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_AMT.value)+SYS_BeFloat(document.MAINFORM.FA_OVD_INT_AMT.value);

	document.MAINFORM.FA_PAID_INT_AMT.value=DecimalFormat(intamt,2);

}


document.MAINFORM.FA_PAID_INT_AMT.fireEvent('onChange');
*/


        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '1') {
            if (document.MAINFORM.FA_INT_CHG_TYPE.value == '1') {
                document.MAINFORM.FA_PAID_INT_AMT.value = SYS_BeFloat(document.MAINFORM.FA_OVD_INT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT15.value);

            } else {
                document.MAINFORM.FA_PAID_INT_AMT.value = SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_OVD_INT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT15.value);

            }


        }

        document.MAINFORM.FA_PAID_INT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_INV_CCY.value, document.MAINFORM.FA_PAID_INT_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_AMT, 'onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.PAID_INT_AMT2 = function() {
    try {
        var pmtamt; // Utility Auto Fix Comments
        var tempamt; // Utility Auto Fix Comments
        tempamt = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
        pmtamt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '2') {
            if (document.MAINFORM.FA_INT_CHG_TYPE.value == '1' && tempamt > pmtamt) {

                document.MAINFORM.FA_PAID_INT_AMT.value = pmtamt;

            } else

            if (document.MAINFORM.FA_INT_CHG_TYPE.value == '1' && tempamt <= pmtamt) {

                document.MAINFORM.FA_PAID_INT_AMT.value = tempamt;

            } else
            if (document.MAINFORM.FA_INT_CHG_TYPE.value == '2' && tempamt > pmtamt) {

                document.MAINFORM.FA_PAID_INT_AMT.value = pmtamt;

            } else {

                document.MAINFORM.FA_PAID_INT_AMT.value = tempamt;

            }
        }
        document.MAINFORM.FA_PAID_INT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_INV_CCY.value, document.MAINFORM.FA_PAID_INT_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_AMT, 'onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.TEMP_DT1 = function() {
    try {
        var date; // Utility Auto Fix Comments
        var vDate; // Utility Auto Fix Comments
        var vDay; // Utility Auto Fix Comments
        var vMonth; // Utility Auto Fix Comments
        var vYear; // Utility Auto Fix Comments
        date = SYS_GetDateByIncrement('FA_PMT_VAL_DT', 0, 0);
        vYear = date.getFullYear();
        vMonth = date.getMonth() + 1;
        vDay = date.getDate();
        if (vMonth < 10) {
            vMonth = "0" + vMonth;
        }
        if (vDay < 10) {
            vDay = "0" + vDay;
        }
        vDate = vYear.toString() + vMonth.toString() + vDay.toString();
        document.MAINFORM.TEMP_DATE1.value = vDate;
        SYS_FormatDate('TEMP_DATE1');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.check_payamt = function() {
    try {
        var a; // Utility Auto Fix Comments
        a = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
        if (a < 0) {
            SYS_CheckError(document.MAINFORM.FA_PMT_AMT, 'Payment amount cannot be negative!Please check!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.check_paymentamt = function() {
    try {
        var invamt; // Utility Auto Fix Comments
        var paymentamt; // Utility Auto Fix Comments
        paymentamt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
        invamt = SYS_BeFloat(document.MAINFORM.TEMP_INV_BAL.value);
        if (paymentamt == invamt && document.MAINFORM.FA_FINAL_PMT_FLG.value == '2') {

            SYS_CheckError(document.MAINFORM.FA_PMT_AMT, 'When payment amount is equal to Invoice amount,can not choose Partial payment!please check!');
            return false;
        } else {
            return true;

        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.intBalance = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) == 0 && SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT15.value) == 0) {

            document.MAINFORM.FA_TEMP_AMT8.value = 0;
            document.MAINFORM.FA_INT_BAL.value = 0;

        }

        document.MAINFORM.FA_TEMP_AMT8.value = SYT_CCY_AMT(document.MAINFORM.FA_INV_CCY.value, document.MAINFORM.FA_TEMP_AMT8.value);
        document.MAINFORM.FA_INT_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_INV_CCY.value, document.MAINFORM.FA_INT_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.intbal = function() {
    try {
        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '') {

            document.MAINFORM.FA_INT_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT15.value);

        } else {
            INT_BAL();

        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.plg_InputFormPopulated = function(frm, rowID, grid) {
    try {
        document.MAINFORM.FA_TEMP_DT1.value = document.MAINFORM.TEMP_LAST_PINT_DT.value; //TEMP_DT1 means value date and it is for the transfer of GAPI 8213.
        document.MAINFORM.FA_INV_PMT_TIMES.value = SYS_BeInt(document.MAINFORM.TEMP_PMT_TIMES.value) + 1;
        document.MAINFORM.FA_INV_EVENT_DT.value = SYS_BUSI_DATE;

        //The following fields are grasping the value of the main page, when you pass the gapi
        document.MAINFORM.FA_PMT_CCY.value = opener.document.MAINFORM.FA_PMT_CCY.value;
        grid.setFieldValue(rowID, 'FA_PMT_CCY', document.MAINFORM.FA_PMT_CCY.value);
        document.MAINFORM.FA_BUSI_TYPE.value = opener.document.MAINFORM.FA_BUSI_TYPE.value;
        document.MAINFORM.CLERK_ID.value = opener.document.MAINFORM.CLERK_ID.value;
        document.MAINFORM.FA_PMT_VAL_DT.value = opener.document.MAINFORM.FA_PMT_VAL_DT.value;
        if (opener.document.MAINFORM.FA_OVDUE_INT_RT.value == '') {
            document.MAINFORM.FA_OVDUE_INT_RT.value = 0;
        } else {
            document.MAINFORM.FA_OVDUE_INT_RT.value = opener.document.MAINFORM.FA_OVDUE_INT_RT.value;
        }
        grid.setFieldValue(rowID, 'FA_OVDUE_INT_RT', document.MAINFORM.FA_OVDUE_INT_RT.value);
        document.MAINFORM.FA_PMT_DT.value = opener.document.MAINFORM.FA_PMT_DT.value;
        document.MAINFORM.FA_TEMP3.value = opener.document.MAINFORM.FA_TEMP3.value;
        document.MAINFORM.IA_C_UNIT_OF_CRT.value = opener.document.MAINFORM.IA_C_UNIT_OF_CRT.value;
        document.MAINFORM.FA_TEMP4.value = SYS_BUSI_UNIT;

        document.MAINFORM.TEMP_DATE2.value = opener.document.MAINFORM.TEMP_DATE2.value;

        TEMP_DT1();
        Inq_Int_Gapi();


        EEHtml.fireEvent(document.MAINFORM.FA_PAID_PRIN_AMT, 'onchange');
        //This func(EEAuto) is called when you do the review the next day, for there is time delay, so we use this method.


        intBalance();
        IntresterBal();


        FA_PAID_PRIN_AMT();
        INV_LOAN_BAL();
        FA_INV_BAL();
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.plg_o2mPostConfirmInput = function(argWindow, grid, inputMode) {
    try {
        var ovdintsum; // Utility Auto Fix Comments
        var paidintsum; // Utility Auto Fix Comments
        var paidprinsum; // Utility Auto Fix Comments
        var pmtamtsum; // Utility Auto Fix Comments
        paidprinsum = grid.sumFieldsValue("FA_PAID_PRIN_AMT", 2);
        paidintsum = grid.sumFieldsValue("FA_PAID_INT_AMT", 2);
        ovdintsum = grid.sumFieldsValue("FA_OVD_INT_AMT", 2);
        pmtamtsum = grid.sumFieldsValue("FA_PMT_AMT", 2);

        opener.document.MAINFORM.FA_PAID_PRIN_SUM.value = paidprinsum;
        EEHtml.fireEvent(opener.document.MAINFORM.FA_PAID_PRIN_SUM, 'onchange');
        opener.document.MAINFORM.FA_PAID_INT_SUM.value = paidintsum;
        EEHtml.fireEvent(opener.document.MAINFORM.FA_PAID_INT_SUM, 'onchange');
        opener.document.MAINFORM.FA_OVDUE_INT_SUM.value = ovdintsum;
        EEHtml.fireEvent(opener.document.MAINFORM.FA_OVDUE_INT_SUM, 'onchange');
        if (opener.document.MAINFORM.FA_PMT_BY.value == '2' && document.MAINFORM.FA_FINAL_PMT_FLG.value == '1') {

            opener.document.MAINFORM.FA_PMT_AMT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, (SYS_BeFloat(pmtamtsum) + SYS_BeFloat(paidintsum)));

        } else {

            opener.document.MAINFORM.FA_PMT_AMT_SUM.value = pmtamtsum;

        }
        EEHtml.fireEvent(opener.document.MAINFORM.FA_PMT_AMT_SUM, 'onchange');

        EEHtml.fireEvent(opener.document.MAINFORM.FA_TEMP1, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.plg_o2mPreConfirmInput = function(argWindow, grid, inputMode) {
    try {
        var cursor; // Utility Auto Fix Comments
        var recState; // Utility Auto Fix Comments
        //added by Viscent on 2007-3-20

        /*	cursor = grid.initCursor(true);
	
	while(rowID=cursor.next())
	{
	 recState=grid.getRecordState(rowID);
	 //opener.o2mLogger.debug("recState",recState);
	 if(opener.REC_STATE_UPDATE==recState){//override financed records
		continue;
	 }
	 //set initial values for unmodified records
	 grid.setFieldValue(rowID,'FA_PMT_AMT','0');
	 grid.setFieldValue(rowID,'FA_PAID_PRIN_AMT','0');
	 grid.setFieldValue(rowID,'FA_PAID_INT_AMT','0');
	 grid.setFieldValue(rowID,'FA_OVD_INT_AMT','0');
	}
*/
        //add end

        //document.MAINFORM.FA_LAST_PINT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_LAST_PINT_DT.value = opener.document.MAINFORM.FA_PMT_VAL_DT.value;
        INV_STATUS();
        //there is calculation of balance of the previous period in the form, but in the database there is no field for that.

        //We can only set the balance = current balance +  repayment of the amount - the amount of invoice registration.

        //when sellers do the repayment, there is no fields in the database for the repayment amount, so we add FA_RPT_PAID_AMT. 
        document.MAINFORM.FA_RPT_PAID_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_INV_BAL.value) - SYS_BeFloat(document.MAINFORM.FA_INV_BAL.value);
        if (!Check_LOAN_TIMES()) {

            return false;
        }

        /*if(!CheckBuyPmtAmt()){
return false;

}
*/
        if (!CheckSelPmtamt()) {

            return false;
        }
        if (!Check_PMT_AMT()) {

            return false;
        }

        if (!Check_buyerpayment()) {

            return false;
        }
        if (!Check_sellerpayment()) {

            return false;
        }
        if (!check_paymentamt()) {

            return false;
        }
        if (!check_payamt()) {
            return false;

        }
        DUE_DT();
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.window_onload = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.FA_FINAL_PMT_FLG_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '2' || document.MAINFORM.FA_FINAL_PMT_FLG.value == '') {
            document.MAINFORM.FA_PMT_AMT.value = 0;
        } //modified by huanghb on 20070212
        FA_PMT_AMT();
        EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT, 'onChange');

        FA_TEMP_AMT8(); //add 20070908
        intbal();
        PAID_INT_AMT();
        PAID_INT_AMT2();
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.FA_INV_LOAN_BAL_onchange = function(event) {
    try {
        FA_INV_BAL();
        EEHtml.fireEvent(document.MAINFORM.FA_INV_BAL, 'onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.FA_PAID_INT_AMT_onchange = function(event) {
    try {
        //FA_PMT_AMT();
        //document.MAINFORM.FA_PMT_AMT.fireEvent('onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.FA_PAID_PRIN_AMT_onchange = function(event) {
    try {
        INV_LOAN_BAL();
        EEHtml.fireEvent(document.MAINFORM.FA_INV_LOAN_BAL, 'onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}

csDOScreenProto.FA_PMT_AMT_onchange = function(event) {
    try {
        check_payamt();
        INT_BAL();
        PAID_INT_AMT();
        PAID_INT_AMT2();


        FA_PAID_PRIN_AMT();
        EEHtml.fireEvent(document.MAINFORM.FA_PAID_PRIN_AMT, 'onChange');
        FA_INV_BAL();
        EEHtml.fireEvent(document.MAINFORM.FA_INV_BAL, 'onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Dom_InvPayment.js", e);
    }
}