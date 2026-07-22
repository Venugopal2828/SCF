function InvFinance(node, recordId, status) {
    try {

        var CLERK_ID; // Utility Auto Fix Comments
        var FA_INT_CHG_TYPE; // Utility Auto Fix Comments
        var FA_LOAN_INT_RATE; // Utility Auto Fix Comments
        var FA_LOAN_PERC; // Utility Auto Fix Comments
        var FA_LOAN_VAL_DT; // Utility Auto Fix Comments
        var FA_TEMP3; // Utility Auto Fix Comments
        var FA_TEMP6; // Utility Auto Fix Comments
        var FA_TEMP7; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var ary; // Utility Auto Fix Comments
        var busitype; // Utility Auto Fix Comments
        var dDueDate; // Utility Auto Fix Comments
        var dLoanValDate; // Utility Auto Fix Comments
        var dTrxValDate; // Utility Auto Fix Comments
        var docNo; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var iaYReaccInt; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var intsum; // Utility Auto Fix Comments
        var invduedate; // Utility Auto Fix Comments
        var invloan; // Utility Auto Fix Comments
        var invoiceAmt; // Utility Auto Fix Comments
        var invoiceLmtAmtLast; // Utility Auto Fix Comments
        var invoiceLmtAmtNow; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var lmtAppro; // Utility Auto Fix Comments
        var lmtApprv; // Utility Auto Fix Comments
        var loanamt; // Utility Auto Fix Comments
        var loanbal; // Utility Auto Fix Comments
        var loanid; // Utility Auto Fix Comments
        var loanref; // Utility Auto Fix Comments
        var loantimes; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var tempInt; // Utility Auto Fix Comments
        var ttlloanamt; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        var baflg;
        var LMT_AMT;
        num = SYS_getcurrRecordCount("InvFinance");
        ttlloanamt = 0;
        busitype = SYS_getValueFromMain('FA_BUSI_TYPE');
        loanid = SYS_getValueFromMain('FA_LOAN_ID');
        baflg = SYS_getValueFromMain('FA_BA_FLG');
        LMT_AMT = SYS_getValueFromMain("FA_LMT_AMT");
        len = loanid.length - 12;
        loanref = loanid.substr(len, 13);
        intsum = 0;
        tempInt = 0;
        arrayvalue = SYS_getRecords(node);
        mData = [];

        if (num > 0) {

            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                type = SYS_getRecState(record);
                lmtAppro = SYS_getValFromRec(record, 'FA_INV_LMT_APPRV');
                docNo = SYS_getValFromRec(record, 'FA_DOC_NO');
                if (lmtAppro == 0 && (busitype == 'EF' || busitype == 'DF') && 'E' != status) {
                    var docamt = SYS_getValFromRec(record, 'FA_DOC_AMT');
                    SYS_setValToRec(record, "FA_INV_LMT_APPRV", docamt);
                    //alert("Invoice: " + docNo + " with no limit approved amount can't be financed!");
                    //return false;
                }
                if (SYS_BeFloat(LMT_AMT) == 0 || baflg == '2') {
                    SYS_setValToRec(record, "FA_BA_FLG", '2');
                } else {
                    SYS_setValToRec(record, "FA_BA_FLG", '1');
                }
                if (busitype != 'EF' && busitype != 'DF') {
                    SYS_setValToRec(record, "FA_BA_FLG", '');
                }

                FA_LOAN_PERC = document.MAINFORM.FA_LOAN_PERC.value;
                FA_LOAN_VAL_DT = document.MAINFORM.FA_LOAN_VAL_DT.value;
                CLERK_ID = document.MAINFORM.CLERK_ID.value;
                FA_TEMP3 = document.MAINFORM.FA_TEMP3.value;
                FA_TEMP7 = document.MAINFORM.FA_TEMP7.value;
                FA_TEMP6 = document.MAINFORM.FA_TEMP6.value;
                FA_LOAN_INT_RATE = document.MAINFORM.FA_LOAN_INT_RT.value;
                FA_INT_CHG_TYPE = document.MAINFORM.FA_INT_CHG_TYPE.value;
                if ('D' != status) {
                    if (FA_LOAN_PERC == 0 || FA_LOAN_PERC == '') {
                        alert('Please input loan percent!');
                        return false;
                    }
                    if (document.MAINFORM.FA_LOAN_INT_RT.value == 0 || document.MAINFORM.FA_LOAN_INT_RT.value == '') {
                        alert('Please input interest rate!');
                        return false;
                    }
                }
                if ('D' != status) {
                    for (i = 0, len = arrayvalue.length; i < len; i++) {
                        record = arrayvalue[i];
                        id = SYS_getRecID(record);
                        type = SYS_getRecState(record);
                        loantimes = SYS_getValFromRec(record, 'FA_TEMP4');
                        dueDateMain = SYS_getValFromRec(record, 'FA_DOC_DUE_DT');
                        document.MAINFORM.FA_LOAN_DUE_DT.value = dueDateMain;
                        loantimes = SYS_getValFromRec(record, 'FA_TEMP4');
                        if (loantimes == 0) {
                            SYS_setValToRec(record, "FA_INT_CHG_TYPE", FA_INT_CHG_TYPE);
                        }

                        SYS_setValToRec(record, "FA_LOAN_INT_RT", FA_LOAN_INT_RATE);
                        SYS_setValToRec(record, "FA_LOAN_PERC", FA_LOAN_PERC);
                        SYS_setValToRec(record, "FA_LOAN_VAL_DT", FA_LOAN_VAL_DT);
                        SYS_setValToRec(record, "FA_LAST_PINT_DT", FA_LOAN_VAL_DT);
                        SYS_setValToRec(record, "CLERK_ID", CLERK_ID);
                        SYS_setValToRec(record, "FA_TEMP3", FA_TEMP3);
                        SYS_setValToRec(record, "FA_TEMP7", FA_TEMP7);
                        SYS_setValToRec(record, "FA_TEMP6", FA_TEMP6);
                        SYS_setValToRec(record, "FA_DOC_STATUS", 'Loan');
                        SYS_setValToRec(record, "FA_INV_INT_DAYS", SYS_GetSubDays('FA_LOAN_VAL_DT', 'FA_LOAN_DUE_DT'));
                        if (SYS_getValFromRec(record, 'FA_INV_LOAN_AMT') == '' || SYS_getValFromRec(record, 'FA_INV_LOAN_AMT') == null) {
                            SYS_setFieldValue(node, id, "FA_INV_LOAN_AMT", '0');
                        }
                        if ('E' == type || 'N' == type) {
                            SYS_setValToRec(record, "FA_TEMP4", loantimes);
                        } else {
                            loantimes = SYS_BeFloat(loantimes) + 1;
                            SYS_setValToRec(record, "FA_INV_LOAN_TIMES", loantimes);
                        }

                        SYS_setValToRec(record, "FA_PMT_GRC_DAY", document.MAINFORM.FA_PMT_GRC_DAY.value);

                        invoiceLmtAmtNow = SYS_getValFromRec(record, 'FA_INV_LMT_APPRV');
                        invoiceLmtAmtLast = SYS_getValFromRec(record, 'FA_TEMP_AMT15');
                        invoiceAmt = SYS_getValFromRec(record, 'FA_DOC_AMT');
                        if (busitype == 'EF' || busitype == 'DF') {
                            lmtApprv = SYS_BeFloat(invoiceLmtAmtNow) - SYS_BeFloat(invoiceLmtAmtLast);
                        } else {
                            lmtApprv = SYS_BeFloat(invoiceAmt) - SYS_BeFloat(invoiceLmtAmtLast);
                        }
                        loanamt = SYS_BeFloat(lmtApprv) * (SYS_BeFloat(FA_LOAN_PERC) / 100);
                        loanbal = SYS_BeFloat(SYS_getValFromRec(record, 'FA_TEMP_AMT16')) + loanamt;
                        ttlloanamt = SYS_BeFloat(invoiceLmtAmtLast) + SYS_BeFloat(loanamt);

                        loanamt = SYT_CCY_AMTdocument.MAINFORM.FA_DOC_CCY.value, loanamt);
                    loanbal = SSYT_CCY_AMT.value, loanbal);
                ttlloanamt = SYSYT_CCY_AMTvalue, ttlloanamt);

            SYS_setValToRec(record, "FA_INV_LOAN_AMT", SYS_BeFloat(loanamt));
            SYS_setValToRec(record, "FA_INV_LOAN_BAL", SYS_BeFloat(loanbal));
            SYS_setValToRec(record, "FA_FIN_LOAN_AMT", SYS_BeFloat(ttlloanamt));
            SYS_setValToRec(record, "FA_INV_LOAN_EBAL", SYS_BeFloat(loanamt));

            invloan = SYS_getValFromRec(record, 'FA_DOC_REF') + loanref;
            SYS_setValToRec(record, "FA_INV_LOAN_ID", invloan);
            if (loantimes == 0) {
                SYS_setValToRec(record, "FA_INT_CHG_TYPE", document.MAINFORM.FA_INT_CHG_TYPE.value);
            }


            invduedate = SYS_getValFromRec(record, 'FA_DOC_DUE_DT');

            if ((invduedate == SYS_getValFromRec(record, 'FA_LOAN_VAL_DT')) && document.MAINFORM.FA_INT_CHG_TYPE.value == '1') {
                alert("Loan Due Date is the same as Loan Value Date, Interest Charge Type: Settlement For Invoice No." + SYS_getValFromRec(record, 'FA_DOC_NO'));
                return false;
            }
            SYS_setValToRec(record, "FA_LOAN_DUE_DT", invduedate);
            //FOR eLAON
            document.MAINFORM.IA_Y_TRX_AMT.value = loanamt;
            document.MAINFORM.IA_D_TRX_VALDATE.value = FA_LOAN_VAL_DT;
            //add by sandy 20120410 - marked.
            //SYS_FormatDate('IA_D_DUE_DATE');
            //end by sandy 20120410.
            SYS_setValToRec(record, "IA_D_DUE_DATE", document.MAINFORM.IA_D_DUE_DATE.value);
            document.MAINFORM.IA_I_DISCOUNT_DAYS.value = SYS_GetSubDays('FA_LOAN_VAL_DT', 'FA_LOAN_DUE_DT');
            document.MAINFORM.FA_LOAN_CCY.value = SYS_getValFromRec(record, 'FA_DOC_CCY');
            document.MAINFORM.IA_C_CCY_CODE.value = document.MAINFORM.FA_LOAN_CCY.value;
            SYS_setValToRec(record, "FA_LOAN_CCY", document.MAINFORM.FA_LOAN_CCY.value);
            document.MAINFORM.IA_I_CCY_DEC.value = findDecFromCCY(document.MAINFORM.FA_LOAN_CCY.value);

            // for get interest
            document.MAINFORM.IA_D_DUE_DATE.value = invduedate;
            // add by sandy 20120410 date format to yyyy-mm-dd before eloan gapi.
            dDueDate = document.MAINFORM.IA_D_DUE_DATE.value;
            dTrxValDate = document.MAINFORM.IA_D_TRX_VALDATE.value;
            dLoanValDate = document.MAINFORM.FA_LOAN_VAL_DT.value;
            document.MAINFORM.IA_D_DUE_DATE.value = getDate(SYS_DATE_FORMAT, document.MAINFORM.IA_D_DUE_DATE.value);
            document.MAINFORM.IA_D_TRX_VALDATE.value = getDate(SYS_DATE_FORMAT, document.MAINFORM.IA_D_TRX_VALDATE.value);
            document.MAINFORM.FA_LOAN_VAL_DT.value = getDate(SYS_DATE_FORMAT, document.MAINFORM.FA_LOAN_VAL_DT.value);
            // end by sandy 20120410
            document.MAINFORM.IA_N_DISCOUNT_RATE.value = document.MAINFORM.FA_LOAN_INT_RT.value;
            // for get interest end
            //add by sandy 20120410 date format after eloan gapi.
            document.MAINFORM.IA_D_DUE_DATE.value = dDueDate;
            document.MAINFORM.IA_D_TRX_VALDATE.value = dTrxValDate;
            document.MAINFORM.FA_LOAN_VAL_DT.value = dLoanValDate;
            //end by sandy 20120410.

            SYS_setValToRec(record, "FA_LOAN_INT_AMT", 0);
        }
        SYS_reLoadGrid(node, arrayvalue);
        if (document.MAINFORM.FA_INT_CHG_TYPE.value == '1') {
            ary = SYS_InqGapi_S('FAEF_AmtInquireInterest');
            record = null;
            iaYReaccInt = -1;
            if (ary != null && ary.length > 0) {
                for (i = 0, l = arrayvalue.length; i < l; i++) {
                    record = arrayvalue[i];
                    iaYReaccInt = ary[i]["IA_Y_REACC_INT"];
                    if (iaYReaccInt == null || iaYReaccInt == "") {
                        iaYReaccInt = 0;
                    }
                    SYS_setValToRec(record, "FA_LOAN_INT_AMT", iaYReaccInt);
                }
            }
            SYS_reLoadGrid(node, arrayvalue);
        }

        if (status != 'D') {
            bFirstFinance = false;
        }
    }
    ttlloanamt = SYS_getFieldSumValue(node, "FA_INV_LOAN_AMT", 2);
    document.MAINFORM.FA_TTL_LOAN_AMT.value = ttlloanamt;
    EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
    document.MAINFORM.FA_PAID_INT_SUM.value = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
    EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_SUM, 'onchange');
    document.MAINFORM.FA_PAID_INT_SUM.value = SYTSYT_CCY_AMTalue, document.MAINFORM.FA_PAID_INT_SUM.value);
SYF_FAEF_MLDC_SetDebitCreditData();
}
if ('D' == status) {
    ttlloanamt = SYS_getFieldSumValue(node, "FA_INV_LOAN_AMT", 2);
    document.MAINFORM.FA_TTL_LOAN_AMT.value = ttlloanamt;
    EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
    document.MAINFORM.FA_PAID_INT_SUM.value = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
    EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_SUM, 'onchange');
    document.MAINFORM.FA_PAID_INT_SUM.value = SYT_SYT_CCY_AMTlue, document.MAINFORM.FA_PAID_INT_SUM.value);
SYF_FAEF_MLDC_SetDebitCreditData();
num = SYS_getcurrRecordCount("InvFinance");
if (num == 0) {
    SYF_FAEF_MPO_Financing_back('M');
    SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('2'); // Utility Auto Fix Comments
}
} else if (num == 0) {
    SYF_FAEF_MPO_Financing_back('M');
    SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('2'); // Utility Auto Fix Comments
} else {
    SYF_FAEF_MPO_Financing_back('P');
    SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('1'); // Utility Auto Fix Comments
}

var num; // Utility Auto Fix Comments
num = SYS_getcurrRecordCount("InvFinance"); //grid.getRowCount();
SYS_setValueToMain("FA_TTL_INV_NO", num);
}

} catch (e) {
    DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
}
}

function InvFinance_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function InvFinance_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_InvFinance() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}


function LimitsDo_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function LimitsDo_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_LimitsDo() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}


function MultiCreditSummary_MultiCredit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function MultiCreditSummary_MultiCredit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function MultiCreditSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function MultiCreditSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}


function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_FinancingFromCE_DO.js", e);
    }
}