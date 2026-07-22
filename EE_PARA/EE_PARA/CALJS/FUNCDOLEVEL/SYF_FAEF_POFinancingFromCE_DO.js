function POFinance(node, recordId, status) {
    try {
        var CLERK_ID;
        var FA_INT_CHG_TYPE;
        var FA_LOAN_INT_RATE;
        var FA_LOAN_PERC;
        var FA_LOAN_VAL_DT;
        var FA_TEMP3;
        var FA_TEMP6;
        var FA_TEMP7;
        var arrayvalue;
        var ary;
        var busitype;
        var dDueDate;
        var dLoanValDate;
        var dTrxValDate;
        var docNo;
        var i;
        var iaYReaccInt;
        var id;
        var intsum;
        var POduedate;
        var POloan;
        var orgPOLoanAmt;
        var len;
        var lmtAppro;
        var lmtApprv;
        var loanamt;
        var loanbal;
        var loanid;
        var loanref;
        var loantimes;
        var mData;
        var num;
        var record;
        var tempInt;
        var ttlloanamt;
        var type;
        var invLoanAvl;
        var docRef;
        var docId;
        var reqLoanBal = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
        //var reqLoanBal = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value);
        num = SYS_getcurrRecordCount("POFinance");
        ttlloanamt = 0;
        busitype = SYS_getValueFromMain('FA_BUSI_TYPE');
        loanid = SYS_getValueFromMain('FA_LOAN_ID');
        len = loanid.length - 13;
        loanref = loanid.substr(len, 13);
        intsum = 0;
        tempInt = 0;
        arrayvalue = SYS_getRecords(node);
        mData = [];

        if (num > 0) {

            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                type = SYS_getRecState(record);
                POLoanAvl = SYS_getValFromRec(record, 'PO_LOAN_AVL');
                PONo = SYS_getValFromRec(record, 'PO_NO');
                if (POLoanAvl == 0 && status != 'E') {
                    alert("PO: " + docNo + " with no Available Amount for Finance, can't be financed!");
                    return false;
                }
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
                for (i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    id = SYS_getRecID(record);
                    type = SYS_getRecState(record);
                    loantimes = SYS_getValFromRec(record, 'FA_TEMP4');
                    dueDateMain = SYS_getValFromRec(record, 'PO_DUE_DT');
                    document.MAINFORM.FA_LOAN_DUE_DT.value = dueDateMain;
                    if (reqLoanBal <= 0) {
                        SYS_setValToRec(record, "PO_LOAN_TIMES", SYS_getValFromRec(record, 'FA_TEMP4'));
                        SYS_setValToRec(record, "PO_LOAN_AMT", 0);
                        SYS_setValToRec(record, "PO_LOAN_BAL", SYS_BeFloat(SYS_getValFromRec(record, 'FA_TEMP_AMT16')));
                        SYS_setValToRec(record, "FA_FIN_LOAN_AMT", SYS_BeFloat(SYS_getValFromRec(record, 'FA_TEMP_AMT15')));
                        SYS_setValToRec(record, "PO_LOAN_EBAL", 0);
                        SYS_setValToRec(record, "FA_LOAN_INT_AMT", 0);
                    } else {
                        if (loantimes == 0) {
                            SYS_setValToRec(record, "FA_INT_CHG_TYPE", FA_INT_CHG_TYPE);
                        }
                        SYS_setValToRec(record, "FA_LOAN_ID", loanid);
                        SYS_setValToRec(record, "FA_LOAN_INT_RT", FA_LOAN_INT_RATE);
                        //SYS_setValToRec(record, "FA_LOAN_PERC", FA_LOAN_PERC);
                        SYS_setValToRec(record, "FA_LOAN_VAL_DT", FA_LOAN_VAL_DT);
                        SYS_setValToRec(record, "FA_LAST_PINT_DT", FA_LOAN_VAL_DT);
                        SYS_setValToRec(record, "CLERK_ID", CLERK_ID);
                        SYS_setValToRec(record, "FA_TEMP3", FA_TEMP3);
                        SYS_setValToRec(record, "FA_TEMP7", FA_TEMP7);
                        SYS_setValToRec(record, "FA_TEMP6", FA_TEMP6);
                        SYS_setValToRec(record, "PO_STATUS", 'Loan');
                        if ('E' == type || 'N' == type) {
                            SYS_setValToRec(record, "FA_TEMP4", loantimes);
                        } else {
                            loantimes = SYS_BeFloat(loantimes) + 1;
                            SYS_setValToRec(record, "PO_LOAN_TIMES", loantimes);
                        }
                        SYS_setValToRec(record, "FA_TRF_FX_RT", document.MAINFORM.EXCH_RT6.value);
                        SYS_setValToRec(record, "FA_PMT_GRC_DAY", document.MAINFORM.FA_PMT_GRC_DAY.value);
                        orgPOLoanAmt = SYS_getValFromRec(record, 'FA_TEMP_AMT15');
                        POLoanAvl = SYS_BeFloat(SYS_getValFromRec(record, 'TSU_TTL_NET_AMT'));//PO_LOAN_AVL
                        if (reqLoanBal >= POLoanAvl) {
                            loanamt = POLoanAvl;
                            reqLoanBal = reqLoanBal - loanamt;
                        } else {
                            loanamt = reqLoanBal;
                            reqLoanBal = 0;
                        }
                        loanbal = SYS_BeFloat(SYS_getValFromRec(record, 'FA_TEMP_AMT16')) + loanamt;
                        ttlloanamt = SYS_BeFloat(orgPOLoanAmt) + SYS_BeFloat(loanamt);

                        loanamt = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, loanamt);
                        loanbal = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, loanbal);
                        ttlloanamt = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, ttlloanamt);

                        SYS_setValToRec(record, "PO_LOAN_AMT", SYS_BeFloat(loanamt));
                        SYS_setValToRec(record, "PO_LOAN_BAL", SYS_BeFloat(loanbal));
                        SYS_setValToRec(record, "FA_FIN_LOAN_AMT", SYS_BeFloat(ttlloanamt));
                        SYS_setValToRec(record, "PO_LOAN_EBAL", SYS_BeFloat(loanamt));
                        SYS_setValToRec(record, "PO_LOAN_AVL", 0);
                       /* docRef = SYS_getValFromRec(record, 'PO_REF');
                        len = docRef.length - 12;
                        docId = docRef.substr(len, 13);
                        POloan = docId + loanref;*/
                        //SYS_setValToRec(record, "PO_LOAN_ID", POloan);
                        SYS_setValToRec(record, "PO_LOAN_ID", loanid+i);
                        if (loantimes == 0) {
                            SYS_setValToRec(record, "FA_INT_CHG_TYPE", document.MAINFORM.FA_INT_CHG_TYPE.value);
                        }

                        POduedate = SYS_getValFromRec(record, 'PO_DUE_DT');
                        if ((POduedate == SYS_getValFromRec(record, 'FA_LOAN_VAL_DT')) && document.MAINFORM.FA_INT_CHG_TYPE.value == '1') {
                            alert("Loan Due Date is the same as Loan Value Date, Interest Charge Type: Settlement For PO No." + SYS_getValFromRec(record, 'PO_NO'));
                            return false;
                        }
                        SYS_setValToRec(record, "FA_LOAN_DUE_DT", POduedate);

                        //FOR eLAON
                        document.MAINFORM.IA_Y_TRX_AMT.value = loanamt;
                        document.MAINFORM.IA_D_TRX_VALDATE.value = FA_LOAN_VAL_DT;
                        //add by sandy 20120410 - marked.
                        //SYS_FormatDate('IA_D_DUE_DATE');
                        //end by sandy 20120410.
                        SYS_setValToRec(record, "IA_D_DUE_DATE", document.MAINFORM.IA_D_DUE_DATE.value);
                        document.MAINFORM.IA_I_DISCOUNT_DAYS.value = SYS_GetSubDays('FA_LOAN_VAL_DT', 'FA_LOAN_DUE_DT');
                        document.MAINFORM.FA_LOAN_CCY.value = SYS_getValFromRec(record, 'PO_CCY');
                        document.MAINFORM.IA_C_CCY_CODE.value = document.MAINFORM.FA_LOAN_CCY.value;
                        SYS_setValToRec(record, "FA_LOAN_CCY", document.MAINFORM.FA_LOAN_CCY.value);
                        document.MAINFORM.IA_I_CCY_DEC.value = findDecFromCCY(document.MAINFORM.FA_LOAN_CCY.value);

                        // for get interest
                        document.MAINFORM.IA_D_DUE_DATE.value = POduedate;
                        document.MAINFORM.IA_N_DISCOUNT_RATE.value = document.MAINFORM.FA_LOAN_INT_RT.value;
                        // for get interest end
                        if (document.MAINFORM.FA_INT_CHG_TYPE.value == '1') {
                            iaYReaccInt = -1;
                            if (SYS_BeFloat(loanamt) > 0) {
                                SYS_InqGapi_S('FAEF_AmtInquireInterest');
                                iaYReaccInt = SYS_BeFloat(document.MAINFORM.IA_Y_REACC_INT.value);
                            } else {
                                iaYReaccInt = 0;
                            }
                             rebateamount= SYS_BeFloat(iaYReaccInt) * SYS_BeFloat(document.MAINFORM.FA_REBATE_RATE.value) / 100;
                                if(rebateamount==''||rebateamount ==null){
                                	rebateamount=0;
                                }
                                netInt = SYS_FloatSub(SYS_BeFloat(iaYReaccInt),SYS_BeFloat(iaYReaccInt) * SYS_BeFloat(document.MAINFORM.FA_REBATE_RATE.value) / 100);
                            SYS_setValToRec(record, "FA_LOAN_INT_AMT", SYT_AmtFormat(document.MAINFORM.FA_LOAN_CCY.value,iaYReaccInt));
                            SYS_setValToRec(record, "FA_REBATE_AMT", SYT_AmtFormat(document.MAINFORM.FA_LOAN_CCY.value,rebateamount));
                            SYS_setValToRec(record, "FA_LOAN_INT_SM_AMT", SYT_AmtFormat(document.MAINFORM.FA_LOAN_CCY.value,netInt));
                        }

                    }
                }
                SYS_reLoadGrid(node, arrayvalue);

                bFirstFinance = false;
            }
           // ttlloanamt = SYS_getFieldSumValue(node, "PO_LOAN_AMT", 2);
          //  document.MAINFORM.FA_TTL_LOAN_AMT.value = ttlloanamt;
            EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
            document.MAINFORM.FA_PAID_INT_SUM.value = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
             document.MAINFORM.FA_REBATE_AMT.value = SYS_getFieldSumValue(node, "FA_REBATE_AMT", 2);
            EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_SUM, 'onchange');
            document.MAINFORM.FA_PAID_INT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PAID_INT_SUM.value);
            SYF_FAEF_MLDC_SetDebitCreditData();
        }
        if ('D' == status) {
            //ttlloanamt = SYS_getFieldSumValue(node, "PO_LOAN_AMT", 2);
            //document.MAINFORM.FA_TTL_LOAN_AMT.value = ttlloanamt;
            //EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
            document.MAINFORM.FA_TEMP1.value = SYS_getFieldSumValue(node, 'PO_LOAN_AVL', document.MAINFORM.FA_TEMP6.value);
            document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP1.value);
            document.MAINFORM.TTL_LOAN_AVL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
            document.MAINFORM.TTL_LOAN_AVL.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.TTL_LOAN_AVL.value);
            document.MAINFORM.FA_TTL_LOAN_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.TTL_LOAN_AVL.value);
            EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
            document.MAINFORM.FA_PAID_INT_SUM.value = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
            document.MAINFORM.FA_REBATE_AMT.value = SYS_getFieldSumValue(node, "FA_REBATE_AMT", 2);
            EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_SUM, 'onchange');
            document.MAINFORM.FA_PAID_INT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PAID_INT_SUM.value);
            SYF_FAEF_MLDC_SetDebitCreditData();
            num = SYS_getcurrRecordCount("POFinance");
         if (num == 0) {
            SYF_FAEF_MPO_Financing_back('M');
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('2');
        } else {
            SYF_FAEF_MPO_Financing_back('P');
            SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('1');
        }
      }
    } catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*POFinance", e);
    }
}

function MultiCreditSummary_MultiCredit_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*MultiCreditSummary_MultiCredit_OnDeSelected", e);
    }
}

function MultiCreditSummary_MultiCredit_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*MultiCreditSummary_MultiCredit_OnSelected", e);
    }
}

function MultiCreditSummary_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*MultiCreditSummary_OnDeSelected", e);
    }
}

function MultiCreditSummary_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*MultiCreditSummary_OnSelected", e);
    }
}

function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*MultiDebitSummary_MultiDebit_OnDeSelected", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*MultiDebitSummary_MultiDebit_OnSelected", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*MultiDebitSummary_OnDeSelected", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*MultiDebitSummary_OnSelected", e);
    }
}

function POFinance_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*POFinance_OnDeSelected", e);
    }
}

function POFinance_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*POFinance_OnSelected", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*SYF_FAEF_getDOdata_MultiCreditSummary", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*SYF_FAEF_getDOdata_MultiDebitSummary", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit", e);
    }
}

function SYF_FAEF_getDOdata_POFinance(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_POFinancingFromCE_DO.js*SYF_FAEF_getDOdata_POFinance", e);
    }
}