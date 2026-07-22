"path:SCRN/o2m/DISC_Exp_InvPayment.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

var canBeConfirm = false;
var duedate = '';

csDOScreenProto.CHECK_LOAN_TIMES = function() {
    try {
        if (SYS_BeInt(document.MAINFORM.FA_INV_LOAN_TIMES.value) > 1 && document.MAINFORM.FA_FINAL_PMT_FLG.value == '2') {
            SYS_CheckError(document.MAINFORM.FA_FINAL_PMT_FLG, 'Invoice Financing times,should clear payment!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.CheckBuyPmtAmt = function() {
    try {
        var invbal; // Utility Auto Fix Comments
        /*invbal=SYS_BeFloat(document.MAINFORM.TEMP_INV_BAL.value);
if(opener.document.MAINFORM.FA_PMT_BY.value=='1' && document.MAINFORM.FA_FINAL_PMT_FLG.value=='1' && SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value)<invbal){
SYS_CheckError(document.MAINFORM.FA_PMT_AMT,'payment by buyer,please clear Payment!');
return false;
}else{

return true;
}*/
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.CheckSelPmtamt = function() {
    try {
        var pmtamt; // Utility Auto Fix Comments
        //pmtamt=SYS_BeFloat(document.MAINFORM.FA_PAID_INT_AMT.value)+SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
        //pmtamt=DecimalFormat(pmtamt,2);
        if (SYS_getValueFromMain("FA_PMT_TYPE") == '2' && document.MAINFORM.FA_FINAL_PMT_FLG.value == '1' && SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) < SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value)) {

            SYS_CheckError(document.MAINFORM.FA_PMT_AMT, 'Payment by seller,please clear Payment!');
            return false;
        } else {
            return true;

        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.Check_PMT_AMT = function() {
    try {
        if (document.MAINFORM.FA_FINAL_PMT_FLG.value != '' && SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) > SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value)) {
            alert('Payment amount can not be more than invoice amount!Please check!');
            return false;

        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.Check_buyerpayment = function() {
    try {
        if (SYS_getValueFromMain("FA_PMT_TYPE") == '1' && document.MAINFORM.FA_FINAL_PMT_FLG.value != '' && SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) > SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value)) {

            alert('Payment by buyer,payment amount can not be more than invoice amount!');
            return false;
        } else {

            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.Check_sellerpayment = function() {
    try {
        var sellerpayment; // Utility Auto Fix Comments
        //sellerpayment=SYS_BeFloat(document.MAINFORM.FA_PAID_INT_AMT.value)+SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
        //sellerpayment=DecimalFormat(sellerpayment,2);

        if (SYS_getValueFromMain("FA_PMT_TYPE") == '2' && document.MAINFORM.FA_FINAL_PMT_FLG.value != '' && SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) > SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value)) {
            alert('Payment by seller,payment amount can not be more than Financing amount!');
            return false;
        } else {

            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.FA_LAST_PINT_DT.value = SYS_getValueFromMain("FA_PMT_VAL_DT");
        if (!CHECK_LOAN_TIMES()) {
            return false;
        }
        INV_STATUS();
        if (!CheckSelPmtamt()) {

            return false;
        }
        if (!Check_PMT_AMT()) {

            return false;
        }

        if (!Check_sellerpayment()) {

            return false;
        }
        if (!Check_buyerpayment()) {

            return false;
        }
        if (!check_paymentamt()) {

            return false;
        }
        if (!check_payamt()) {

            return false;
        }
        DUE_DT();
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.DUE_DT = function() {
    try {
        var graceday; // Utility Auto Fix Comments
        var invduedate; // Utility Auto Fix Comments
        invduedate = document.MAINFORM.FA_DOC_DUE_DT.value;
        graceday = document.MAINFORM.FA_PMT_GRC_DAY.value;
        SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, invduedate, graceday, 'duedate', 'A', 'N', 'N');
        if (document.MAINFORM.FA_PMT_VAL_DT.value > duedate && SYS_BeFloat(document.MAINFORM.FA_OVDUE_INT_RT.value) <= 0) {

            alert('The invoice is overdue, the main page interest rate is the old Financing interest rate! please check!');

        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.FA_INV_BAL = function() {
    try {
        var INVBAL_BUYER; // Utility Auto Fix Comments
        var INVBAL_SELLER; // Utility Auto Fix Comments
        INVBAL_SELLER = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_AMT.value);
        INVBAL_BUYER = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) - SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);

        //FINAL PMT_FLG=1,Full repayment,=2,Part repayment,PMT BY=1,Buyer repayment,=2,Seller repayment

        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '1') {
            document.MAINFORM.FA_DOC_BAL.value = 0;
        } else {
            if (SYS_getValueFromMain("FA_PMT_TYPE") == '1') {
                document.MAINFORM.FA_DOC_BAL.value = Math.max(SYS_BeFloat(INVBAL_BUYER), 0);
            } else {
                if (SYS_BeFloat(document.MAINFORM.FA_INV_LOAN_BAL.value) > 0) {
                    document.MAINFORM.FA_DOC_BAL.value = SYS_BeFloat(INVBAL_SELLER);
                } else {
                    document.MAINFORM.FA_DOC_BAL.value = 0;
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.FA_PAID_INT_AMT = function() {
    try {
        //Charge first when INT CHG TYPE is 1

        /*if(document.MAINFORM.FA_INT_CHG_TYPE.value=='1')
{
  document.MAINFORM.FA_PAID_INT_AMT.value=SYS_BeFloat(document.MAINFORM.FA_OVD_INT_AMT.value);

}
else
{
  document.MAINFORM.FA_PAID_INT_AMT.value=SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_AMT.value)+SYS_BeFloat(document.MAINFORM.FA_OVD_INT_AMT.value);

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

        document.MAINFORM.FA_PAID_INT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PAID_INT_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_AMT, 'onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.FA_PAID_INT_AMT2 = function() {
    try {
        var pmtamt; // Utility Auto Fix Comments
        var tempamt; // Utility Auto Fix Comments
        tempamt = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT9.value);
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
        document.MAINFORM.FA_PAID_INT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PAID_INT_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_AMT, 'onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.FA_PAID_PRIN_AMT = function() {
    try {
        var fapaidprinamt; // Utility Auto Fix Comments
        var paidloanbal; // Utility Auto Fix Comments
        var paidprinamt; // Utility Auto Fix Comments
        paidprinamt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_INT_AMT.value);
        paidloanbal = SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
        /*
//when FINAL PMT FLG's value is 1 it's for full repayment, partial repayment when 2.


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


        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '1') {
            document.MAINFORM.FA_PAID_PRIN_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
        } else if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '2') {
            fapaidprinamt = SYS_BeFloat(Math.min(paidprinamt, paidloanbal));
            document.MAINFORM.FA_PAID_PRIN_AMT.value = SYS_BeFloat(Math.max(fapaidprinamt, 0));
        } else {
            document.MAINFORM.FA_PAID_PRIN_AMT.value = 0;
        }

        EEHtml.fireEvent(document.MAINFORM.FA_PAID_PRIN_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.FA_PMT_AMT = function() {
    try {
        var pmtamt; // Utility Auto Fix Comments
        /*pmtamt=SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);

//1 means full payment,2 means partial payment,when FINAL PMT FLG is ''. clear PMT AMT

if(document.MAINFORM.FA_FINAL_PMT_FLG.value=='1')
{
document.MAINFORM.FA_PMT_AMT.value=SYS_BeFloat(document.MAINFORM.FA_PAID_INT_AMT.value)+SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
}
else if(document.MAINFORM.FA_FINAL_PMT_FLG.value=='2')
{
  document.MAINFORM.FA_PMT_AMT.value=SYS_BeFloat(pmtamt);
}
else
{
   document.MAINFORM.FA_PMT_AMT.value=0;
}
*/

        pmtamt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
        if (SYS_getValueFromMain("FA_PMT_TYPE") == '1' && document.MAINFORM.FA_FINAL_PMT_FLG.value == '1') {

            document.MAINFORM.FA_PMT_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
        } else if (SYS_getValueFromMain("FA_PMT_TYPE") == '2' && document.MAINFORM.FA_FINAL_PMT_FLG.value == '1') {

            //document.MAINFORM.FA_PMT_AMT.value=SYS_BeFloat(document.MAINFORM.FA_PAID_INT_AMT.value)+SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
            //document.MAINFORM.FA_PMT_AMT.value=DecimalFormat(document.MAINFORM.FA_PMT_AMT.value,2);
            document.MAINFORM.FA_PMT_AMT.value = SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value);
        } else {

            document.MAINFORM.FA_PMT_AMT.value = SYS_BeFloat(pmtamt);
        }
        EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.FA_TEMP_AMT8 = function() {
    try {
        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '2' && document.MAINFORM.FA_INT_CHG_TYPE.value == '1') {

            document.MAINFORM.FA_TEMP_AMT9.value = SYS_BeFloat(document.MAINFORM.FA_OVD_INT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT15.value);
        } else
        if (document.MAINFORM.FA_FINAL_PMT_FLG.value == '2' && document.MAINFORM.FA_INT_CHG_TYPE.value == '2') {

            document.MAINFORM.FA_TEMP_AMT9.value = SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_OVD_INT_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT15.value);
        } else {


            document.MAINFORM.FA_TEMP_AMT9.value = 0;
        }


        document.MAINFORM.FA_TEMP_AMT9.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_AMT9.value);
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.INT_BAL = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT9.value) > SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value)) {

            document.MAINFORM.FA_INT_BAL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT9.value) - SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value); // Utility Auto Fix Comments

        } else {
            document.MAINFORM.FA_INT_BAL.value = 0;

        }
        document.MAINFORM.FA_INT_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INT_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.INV_LOAN_BAL = function() {
    try {
        var FA_INV_LOAN_BAL; // Utility Auto Fix Comments
        var LOAN_BAL; // Utility Auto Fix Comments
        FA_INV_LOAN_BAL = SYS_BeFloat(document.MAINFORM.TEMP_LOAN_BAL.value) - SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_AMT.value);
        LOAN_BAL = Math.max(FA_INV_LOAN_BAL, 0);
        document.MAINFORM.FA_INV_LOAN_BAL.value = SYS_BeFloat(LOAN_BAL);
        EEHtml.fireEvent(document.MAINFORM.FA_INV_LOAN_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.INV_STATUS = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_DOC_BAL.value) == 0) {
            document.MAINFORM.FA_INV_STATUS.value = 'Close';
        } else {
            document.MAINFORM.FA_INV_STATUS.value = 'Payment';
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.FA_TEMP_DT1.value = document.MAINFORM.TEMP_LAST_PINT_DT.value;
        document.MAINFORM.FA_INV_PMT_TIMES.value = SYS_BeInt(document.MAINFORM.TEMP_PMT_TIMES.value) + 1;
        document.MAINFORM.FA_INV_EVENT_DT.value = SYS_BUSI_DATE;

        //The following fields are grasping the value of the main page
        if (SYS_getValueFromMain("FA_OVDUE_INT_RT") == '') {
            document.MAINFORM.FA_OVDUE_INT_RT.value = 0;
        } else {
            document.MAINFORM.FA_OVDUE_INT_RT.value = opener.document.MAINFORM.FA_OVDUE_INT_RT.value;
        }
        //document.MAINFORM.FA_PMT_CCY.value=SYS_getValueFromMain("FA_PMT_CCY");
        //grid.setFieldValue(rowID,'FA_PMT_CCY',document.MAINFORM.FA_PMT_CCY.value);
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain("FA_BUSI_TYPE");
        document.MAINFORM.CLERK_ID.value = SYS_getValueFromMain("CLERK_ID");
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_getValueFromMain("FA_PMT_VAL_DT");

        document.MAINFORM.FA_PMT_DT.value = SYS_getValueFromMain("FA_PMT_DT");
        document.MAINFORM.FA_TEMP4.value = SYS_getValueFromMain("FA_TEMP4");
        document.MAINFORM.FA_TEMP3.value = SYS_getValueFromMain("FA_TEMP3");
        document.MAINFORM.IA_C_UNIT_OF_CRT.value = SYS_getValueFromMain("IA_C_UNIT_OF_CRT");

        document.MAINFORM.TEMP_DATE2.value = SYS_getValueFromMain("TEMP_DATE2");

        TEMP_DT1();
        Inq_Int_Gapi();


        EEHtml.fireEvent(document.MAINFORM.FA_PAID_PRIN_AMT, 'onchange');
        //when there is a late review the next day, the func(EEAuto) is called, requireing call time delay before.
        intBalance();
        IntresterBal();

        FA_PAID_PRIN_AMT();
        INV_LOAN_BAL();
        FA_INV_BAL();
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.Inq_Int_Gapi = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.IntresterBal = function() {
    try {
        var a; // Utility Auto Fix Comments
        a = SYS_GetSubDays(document.MAINFORM.TEMP_DATE2.name, document.MAINFORM.FA_PMT_VAL_DT.name);
        if (a > 0 && document.MAINFORM.FA_PMT_AMT.value != 0) {
            //FA_TEMP_AMT8();//add 20070908
            FA_TEMP_AMT8();
            FA_PAID_INT_AMT();
            FA_PAID_INT_AMT2();
            INT_BAL();
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var strSQLWhere; // Utility Auto Fix Comments
        document.MAINFORM.FA_TEMP_DT1.value = document.MAINFORM.FA_LAST_PINT_DT.value;
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_getValueFromMain('FA_PMT_VAL_DT');
        document.MAINFORM.FA_INV_PMT_TIMES.value = SYS_BeInt(document.MAINFORM.TEMP_PMT_TIMES.value) + 1;
        document.MAINFORM.FA_INV_EVENT_DT.value = SYS_BUSI_DATE;
        SetValForFA_Temp_dt2();
        //The following fields are grasping the value of the home page
        if (SYS_getValueFromMain("FA_OVDUE_INT_RT") == '') {
            document.MAINFORM.FA_OVDUE_INT_RT.value = 0;
        } else {
            document.MAINFORM.FA_OVDUE_INT_RT.value = opener.document.MAINFORM.FA_OVDUE_INT_RT.value;
        }
        //document.MAINFORM.FA_PMT_CCY.value=SYS_getValueFromMain("FA_PMT_CCY");
        //grid.setFieldValue(rowID,'FA_PMT_CCY',document.MAINFORM.FA_PMT_CCY.value);
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain("FA_BUSI_TYPE");
        document.MAINFORM.CLERK_ID.value = SYS_getValueFromMain("CLERK_ID");
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_getValueFromMain("FA_PMT_VAL_DT");

        document.MAINFORM.FA_PMT_DT.value = SYS_getValueFromMain("FA_PMT_DT");
        document.MAINFORM.FA_TEMP4.value = SYS_getValueFromMain("FA_TEMP4");
        document.MAINFORM.FA_TEMP3.value = SYS_getValueFromMain("FA_TEMP3");
        document.MAINFORM.IA_C_UNIT_OF_CRT.value = SYS_getValueFromMain("IA_C_UNIT_OF_CRT");

        document.MAINFORM.TEMP_DATE2.value = SYS_getValueFromMain("TEMP_DATE2");


        Inq_Int_Gapi();


        EEHtml.fireEvent(document.MAINFORM.FA_PAID_PRIN_AMT, 'onchange');
        //when there is a late review the next day, the func(EEAuto) is called, requiring call time delay before.
        intBalance();
        IntresterBal();

        FA_PAID_PRIN_AMT();
        INV_LOAN_BAL();
        FA_INV_BAL();
        //strSQLWhere = "C_CURRENCY='" + document.MAINFORM.FA_DOC_CCY.value + "'";
        SYS_GetTableDataByRule_S('SSSS_DISC_Exp_InvPayment_PostconditionOnInit_0', '1');

    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.SYF_DISC_getDOdata_Settle_Settle_loan = function() {
    try {
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S('settlement');
        }
        num = SYS_getcurrRecordCount("Settle.Settle_loan");
        node = SYS_getDoByXpath('Settle.Settle_loan');
        if (num > 0) {
            //SYF_FAEF_Change_Field_Class('1');
            Settle_Settle_loan(node);
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.SetValForFA_Temp_dt2 = function() {
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
        document.MAINFORM.FA_TEMP_DT2.value = vDate;
        SYS_FormatDate('FA_TEMP_DT2');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.check_payamt = function() {
    try {
        var a; // Utility Auto Fix Comments
        a = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
        if (a < 0) {
            SYS_CheckError(document.MAINFORM.FA_PMT_AMT, 'Payment Amount can not be negative!please check');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.check_paymentamt = function() {
    try {
        var invamt; // Utility Auto Fix Comments
        var paymentamt; // Utility Auto Fix Comments
        paymentamt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
        invamt = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
        if (paymentamt == invamt && document.MAINFORM.FA_FINAL_PMT_FLG.value == '2') {
            SYS_CheckError(document.MAINFORM.FA_PMT_AMT, 'When payment amount is equal to Invoice amount,can not choose Partial payment!please check!');
            return false;
        } else {
            return true;

        }
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.foramttomain = function(index, name) {
    try {
        var _do; // Utility Auto Fix Comments
        var INTAMT; // Utility Auto Fix Comments
        var LOANBALAMT; // Utility Auto Fix Comments
        var OVDINTAMT; // Utility Auto Fix Comments
        var PRINAMT; // Utility Auto Fix Comments
        var REFUND; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('Settle.Settle_loan'); // Utility Auto Fix Comments
        _do.setCurrInstance(index, name); // Utility Auto Fix Comments
        PRINAMT = SYS_getFieldSumValue(_do, "FA_LOAN_PPAID_AMT", 2); // Utility Auto Fix Comments
        //INTAMT = SYS_getFieldSumValue(_do,"FA_LOAN_INT_AMT",2);
        INTAMT = SYS_getFieldSumValue(_do, "FA_LOAN_IPAID_AMT", 2); // Utility Auto Fix Comments
        OVDINTAMT = SYS_getFieldSumValue(_do, "FA_TEMP_AMT19", 2); // Utility Auto Fix Comments
        LOANBALAMT = SYS_getFieldSumValue(_do, "FA_INV_LOAN_EBAL", 2); // Utility Auto Fix Comments
        REFUND = SYS_getFieldSumValue(_do, "IA_Y_REFUND_INT", 2); // Utility Auto Fix Comments
        document.MAINFORM.FA_PAID_PRIN_AMT.value = PRINAMT;
        document.MAINFORM.FA_PAID_INT_AMT.value = INTAMT;
        document.MAINFORM.FA_OVD_INT_AMT.value = OVDINTAMT;
        document.MAINFORM.FA_INV_LOAN_BAL.value = LOANBALAMT;
        document.MAINFORM.FA_INV_REFUND_INT.value = REFUND;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.intBalance = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value) == 0 && SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT15.value) == 0) {

            document.MAINFORM.FA_TEMP_AMT9.value = 0;
            document.MAINFORM.FA_INT_BAL.value = 0;

        }

        document.MAINFORM.FA_TEMP_AMT9.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_AMT9.value);
        document.MAINFORM.FA_INT_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INT_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
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
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.window_onload = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
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
        FA_PAID_INT_AMT();
        FA_PAID_INT_AMT2();
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.FA_INV_LOAN_BAL_onchange = function(event) {
    try {
        FA_INV_BAL();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_BAL, 'onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.FA_LOAN_PAID_AMT_onchange = function(event) {
    try {
        var da; // Utility Auto Fix Comments
        var loanbal; // Utility Auto Fix Comments
        var oamt; // Utility Auto Fix Comments
        da = SYS_getEditGridVal(record, 'FA_LOAN_INT_AMT');
        oamt = SYS_getEditGridVal(record, 'FA_OVD_INT_EAMT');
        loanbal = SYS_getEditGridVal(record, 'FA_TEMP_LOAN_EBAL');
        if (v > (da + oamt)) {
            //record.data['FA_LOAN_IPAID_AMT'] = da+oamt;
            record.data['FA_LOAN_IPAID_AMT'] = da;
            if (loanbal < (v - da - oamt)) {
                alert('Paid loan amount cannot be more than loan balance');
                record.data['FA_LOAN_PPAID_AMT'] = 0;
                //20080816
                v = 0;
            } else {
                record.data['FA_LOAN_PPAID_AMT'] = SYS_BeFloat(v - da - oamt);
            }
            if ((v - da - oamt) > loanbal) {
                record.data['FA_INV_LOAN_EBAL'] = 0;
            } else {
                record.data['FA_INV_LOAN_EBAL'] = (loanbal * 1000 - (v - da - oamt) * 1000) / 1000;
            }
            EEHtml.getElementById('FA_TEMP_AMT13').value = da;
            foramttomain(index, name);
        } else if (da > 0 && v > 0) {
            alert('The payment amount must be more than the sum of interest and overdue interest amount!');
            record.data['FA_LOAN_PAID_AMT'] = 0;
            record.data['FA_LOAN_IPAID_AMT'] = 0;
            record.data['FA_LOAN_PPAID_AMT'] = 0;
            record.data['FA_LOAN_INT_AMT'] = 0;
            record.data['FA_TEMP_AMT19'] = 0;
            record.data['FA_INV_LOAN_EBAL'] = loanbal * 1000 / 1000;
            EEHtml.getElementById('FA_TEMP_AMT13').value = da;
            foramttomain(index, name);
            v = 0;
        } else {
            record.data['FA_LOAN_PAID_AMT'] = 0;
            record.data['FA_LOAN_IPAID_AMT'] = 0;
            record.data['FA_LOAN_PPAID_AMT'] = 0;
            record.data['FA_LOAN_INT_AMT'] = da;
            record.data['FA_TEMP_AMT19'] = 0;
            record.data['FA_INV_LOAN_EBAL'] = loanbal * 1000 / 1000;
            EEHtml.getElementById('FA_TEMP_AMT13').value = da;
            foramttomain(index, name);
            v = 0;
        }
        document.MAINFORM.FA_LAST_PINT_DT.value = document.MAINFORM.FA_PMT_VAL_DT.value;
        return v;
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.FA_OVDUE_INT_RT_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}
csDOScreenProto.FA_PAID_INT_AMT_onchange = function(event) {
    try {
        //FA_PMT_AMT();
        //document.MAINFORM.FA_PMT_AMT.fireEvent('onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.FA_PAID_PRIN_AMT_onchange = function(event) {
    try {
        INV_LOAN_BAL();
        EEHtml.fireEvent(document.MAINFORM.FA_INV_LOAN_BAL, 'onChange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}

csDOScreenProto.FA_PMT_AMT_onchange = function(event) {
    try {
        check_payamt();
        INT_BAL();
        FA_PAID_INT_AMT();
        FA_PAID_INT_AMT2();

        FA_PAID_PRIN_AMT();
        EEHtml.fireEvent(document.MAINFORM.FA_PAID_PRIN_AMT, 'onChange');
        FA_INV_BAL();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_DISC_Exp_InvPayment.js", e);
    }
}