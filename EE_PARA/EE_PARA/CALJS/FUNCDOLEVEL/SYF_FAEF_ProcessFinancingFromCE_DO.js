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
        var invLoanAvl;
        var docRef;
        var docId;
        var len2;
        var LOAN_ID_LEN;
        var rebateamount;
        var reqLoanBal = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
        num = SYS_getcurrRecordCount("InvFinance");
        ttlloanamt = 0;
        busitype = SYS_getValueFromMain('FA_BUSI_TYPE');
        loanid = SYS_getValueFromMain('FA_LOAN_ID');
        LOAN_ID_LEN = loanid.length - 12;
        loanref = loanid.substr(LOAN_ID_LEN, 13);
        intsum = 0;
        tempInt = 0;
        rebateamount = 0;
        arrayvalue = SYS_getRecords(node);
        mData = [];

        if (num > 0) {

            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                type = SYS_getRecState(record);
                lmtAppro = SYS_getValFromRec(record, 'FA_INV_LMT_APPRV');
                invLoanAvl = SYS_getValFromRec(record, 'INV_LOAN_AVL');
                docNo = SYS_getValFromRec(record, 'FA_DOC_NO');
                if (invLoanAvl == 0 && status != 'E') {
                    alert("Invoice: " + docNo + " with no Available Amount for Finance, can't be financed!");
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
            /* if ('D' != status) {
                if (SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) == 0 || SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) == '') {
                    alert('Please input Request Loan Amount!');
                }
                if (FA_LOAN_PERC == 0 || FA_LOAN_PERC == '') {
                    alert('Please input loan percent!');
                    return false;
                }
                if (document.MAINFORM.FA_LOAN_INT_RT.value == 0 || document.MAINFORM.FA_LOAN_INT_RT.value == '') {
                    alert('Please input interest rate!');
                    return false;
                }
            }*/
            if ('D' != status) {
                for (i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    id = SYS_getRecID(record);
                    type = SYS_getRecState(record);
                    loantimes = SYS_getValFromRec(record, 'FA_TEMP4');
                    dueDateMain = SYS_getValFromRec(record, 'FA_DOC_DUE_DT');
                    document.MAINFORM.FA_LOAN_DUE_DT.value = dueDateMain;
                    if (reqLoanBal <= 0) {
                        SYS_setValToRec(record, "FA_INV_LOAN_TIMES", SYS_getValFromRec(record, 'FA_TEMP4'));
                        SYS_setValToRec(record, "FA_INV_LOAN_AMT", 0);
                        SYS_setValToRec(record, "FA_INV_LOAN_BAL", SYS_BeFloat(SYS_getValFromRec(record, 'FA_TEMP_AMT16')));
                        SYS_setValToRec(record, "FA_FIN_LOAN_AMT", SYS_BeFloat(SYS_getValFromRec(record, 'FA_TEMP_AMT15')));
                        SYS_setValToRec(record, "FA_INV_LOAN_EBAL", 0);
                        SYS_setValToRec(record, "FA_LOAN_INT_AMT", 0);
                    } else {
                        if (loantimes == 0) {
                            SYS_setValToRec(record, "FA_INT_CHG_TYPE", FA_INT_CHG_TYPE);
                        }

                        SYS_setValToRec(record, "FA_LOAN_INT_RT", FA_LOAN_INT_RATE);
                        //SYS_setValToRec(record, "FA_LOAN_PERC", FA_LOAN_PERC);
                        SYS_setValToRec(record, "FA_LOAN_VAL_DT", FA_LOAN_VAL_DT);
                        SYS_setValToRec(record, "FA_LAST_PINT_DT", FA_LOAN_VAL_DT);
                        SYS_setValToRec(record, "CLERK_ID", CLERK_ID);
                        SYS_setValToRec(record, "FA_TEMP3", FA_TEMP3);
                        SYS_setValToRec(record, "FA_TEMP7", FA_TEMP7);
                        SYS_setValToRec(record, "FA_TEMP6", FA_TEMP6);
                        SYS_setValToRec(record, "FA_DOC_STATUS", 'Financed');
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
                        SYS_setValToRec(record, "FA_TRF_FX_RT", document.MAINFORM.EXCH_RT6.value);
                        SYS_setValToRec(record, "FA_PMT_GRC_DAY", document.MAINFORM.FA_PMT_GRC_DAY.value);
                        invoiceLmtAmtLast = SYS_getValFromRec(record, 'FA_TEMP_AMT15');
                        /*invoiceLmtAmtNow = SYS_getValFromRec(record, 'FA_INV_LMT_APPRV');                
                                    invoiceAmt = SYS_getValFromRec(record, 'FA_DOC_AMT');
                                    if (busitype == 'EF' || busitype == 'DF') {
                                        lmtApprv = SYS_BeFloat(invoiceLmtAmtNow) - SYS_BeFloat(invoiceLmtAmtLast);
                                    } else {
                                        lmtApprv = SYS_BeFloat(invoiceAmt) - SYS_BeFloat(invoiceLmtAmtLast);
                                    }
                                    loanamt = SYS_BeFloat(lmtApprv) * (SYS_BeFloat(FA_LOAN_PERC) / 100);*/
                        invLoanAvl = SYS_BeFloat(SYS_getValFromRec(record, 'INV_LOAN_AVL'));
                        if (reqLoanBal >= invLoanAvl) {
                            loanamt = invLoanAvl;
                            reqLoanBal = reqLoanBal - loanamt;
                        } else {
                            loanamt = reqLoanBal;
                            reqLoanBal = 0;
                        }
                        loanbal = SYS_BeFloat(SYS_getValFromRec(record, 'FA_TEMP_AMT16')) + loanamt;
                        ttlloanamt = SYS_BeFloat(invoiceLmtAmtLast) + SYS_BeFloat(loanamt);

                        loanamt = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, loanamt);
                        loanbal = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, loanbal);
                        ttlloanamt = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, ttlloanamt);

                        SYS_setValToRec(record, "FA_INV_LOAN_AMT", SYS_BeFloat(loanamt));
                        SYS_setValToRec(record, "FA_INV_LOAN_BAL", SYS_BeFloat(loanbal));
                        SYS_setValToRec(record, "FA_FIN_LOAN_AMT", SYS_BeFloat(ttlloanamt));
                        SYS_setValToRec(record, "FA_INV_LOAN_EBAL", SYS_BeFloat(loanamt));
                        SYS_setValToRec(record, "FA_INV_LOAN_ID", loanid + i);
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
                            rebateamount = SYS_BeFloat(iaYReaccInt) * SYS_BeFloat(document.MAINFORM.FA_REBATE_RATE.value) / 100;
                            if(rebateamount==''||rebateamount ==null){
                                	rebateamount=0;
                                }
                                netInt = SYS_FloatSub(SYS_BeFloat(iaYReaccInt),SYS_BeFloat(rebateamount));
                            SYS_setValToRec(record, "FA_LOAN_INT_AMT", SYT_AmtFormat(document.MAINFORM.FA_LOAN_CCY.value,iaYReaccInt));
                            SYS_setValToRec(record, "FA_REBATE_AMT", SYT_AmtFormat(document.MAINFORM.FA_LOAN_CCY.value,rebateamount));
                            SYS_setValToRec(record, "FA_LOAN_INT_SM_AMT", SYT_AmtFormat(document.MAINFORM.FA_LOAN_CCY.value,netInt));
                        }
                    }
                }
                SYS_reLoadGrid(node, arrayvalue);
                bFirstFinance = false;
               //ttlloanamt = SYS_getFieldSumValue(node, "FA_INV_LOAN_AMT", 2);
               //document.MAINFORM.FA_TTL_LOAN_AMT.value = ttlloanamt;
              //EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
              document.MAINFORM.FA_PAID_INT_SUM.value = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
              document.MAINFORM.FA_REBATE_AMT.value = SYS_getFieldSumValue(node, "FA_REBATE_AMT", 2);
              EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_SUM, 'onchange');
              document.MAINFORM.FA_PAID_INT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PAID_INT_SUM.value);
              if(busitype =='POF'){
                SYF_FAEF_MLDC_SetDebitCreditData_POF();
                }
               else{
          	    SYF_FAEF_MLDC_SetDebitCreditData();
                }
            }

            
        }
        if ('D' == status) {
            //ttlloanamt = SYS_getFieldSumValue(node, "FA_INV_LOAN_AMT", 2);
            //document.MAINFORM.FA_TTL_LOAN_AMT.value = ttlloanamt;
            //EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
            document.MAINFORM.FA_TEMP1.value = SYS_getFieldSumValue(node, 'INV_LOAN_AVL', document.MAINFORM.FA_TEMP6.value);
            document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP1.value);
            document.MAINFORM.TTL_LOAN_AVL.value = SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
            document.MAINFORM.TTL_LOAN_AVL.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.TTL_LOAN_AVL.value);
            document.MAINFORM.FA_TTL_LOAN_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LOAN_CCY.value, document.MAINFORM.TTL_LOAN_AVL.value);
            document.MAINFORM.FA_PAID_INT_SUM.value = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
            document.MAINFORM.FA_REBATE_AMT.value = SYS_getFieldSumValue(node, "FA_REBATE_AMT", 2);
            EEHtml.fireEvent(document.MAINFORM.FA_PAID_INT_SUM, 'onchange');
            document.MAINFORM.FA_PAID_INT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PAID_INT_SUM.value);
            
            if(busitype =='POF'){
            SYF_FAEF_MLDC_SetDebitCreditData_POF();
          }
          else{
          	SYF_FAEF_MLDC_SetDebitCreditData();
          }
            num = SYS_getcurrRecordCount("InvFinance");
            if (num == 0) {
                SYF_FAEF_MPO_Financing_back('M');
                SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('2'); // Utility Auto Fix Comments
            } else {
                SYF_FAEF_MPO_Financing_back('P');
                SYF_FAEF_MPO_ControlInterestChgTypeAndLoanCcy('1'); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*InvFinance", e);
    }
}

function InvFinance_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*InvFinance_OnDeSelected", e);
    }
}

function InvFinance_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*InvFinance_OnSelected", e);
    }
}

function SYF_FAEF_getDOdata_InvFinance(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*SYF_FAEF_getDOdata_InvFinance", e);
    }
}

function MultiCreditSummary_MultiCredit_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*MultiCreditSummary_MultiCredit_OnDeSelected", e);
    }
}

function MultiCreditSummary_MultiCredit_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*MultiCreditSummary_MultiCredit_OnSelected", e);
    }
}

function MultiCreditSummary_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*MultiCreditSummary_OnDeSelected", e);
    }
}

function MultiCreditSummary_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*MultiCreditSummary_OnSelected", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*SYF_FAEF_getDOdata_MultiCreditSummary", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit", e);
    }
}

function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*MultiDebitSummary_MultiDebit_OnDeSelected", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*MultiDebitSummary_MultiDebit_OnSelected", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*MultiDebitSummary_OnDeSelected", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*MultiDebitSummary_OnSelected", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*SYF_FAEF_getDOdata_MultiDebitSummary", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit", e);
    }
}

function POFinance_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*POFinance_OnDeSelected", e);
    }
}

function POFinance_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*POFinance_OnSelected", e);
    }
}

function SYF_FAEF_getDOdata_POFinance(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessFinancingFromCE_DO.js*SYF_FAEF_getDOdata_POFinance", e);
    }
}