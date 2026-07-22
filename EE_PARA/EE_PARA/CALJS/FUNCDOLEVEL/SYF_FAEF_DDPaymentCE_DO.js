

function InvFinance(node, recordId, status) {
    try {
        var CLERK_ID; // Utility Auto Fix Comments
        var FA_LOAN_INT_RATE; // Utility Auto Fix Comments
        var FA_LOAN_VAL_DT; // Utility Auto Fix Comments
        var FA_TEMP3; // Utility Auto Fix Comments
        var FA_TEMP6; // Utility Auto Fix Comments
        var FA_TEMP7; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var ary; // Utility Auto Fix Comments
        var DDRateID;
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
        var loanIntAmt;
        var mData; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var tempInt; // Utility Auto Fix Comments
        var ttlloanamt; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        var docRef;
        var docId;
        var len2;
        var LOAN_ID_LEN;
        var FA_LOAN_DAYS;
        var FA_LOAN_INT_RT;
        var reqLoanBal = SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value);
        var _do = SYS_getDoByXpath('InvFinance');
        var recs = SYS_getRecords(_do);
       // num = SYS_getcurrRecordCount("InvFinance");
        ttlloanamt = 0;
        loanid = SYS_getValueFromMain('FA_LOAN_ID');
        LOAN_ID_LEN = loanid.length - 12;
        loanref = loanid.substr(LOAN_ID_LEN, 13);
        intsum = 0;
        tempInt = 0;   
        mData = [];

        if (recs.length > 0) {
            arrayvalue = SYS_getRecords(_do);
            FA_LOAN_VAL_DT = document.MAINFORM.FA_LOAN_VAL_DT.value;
            CLERK_ID = document.MAINFORM.CLERK_ID.value;
            FA_TEMP3 = document.MAINFORM.FA_TEMP3.value;
            FA_TEMP7 = document.MAINFORM.FA_TEMP7.value;
            DDRateID = document.MAINFORM.TSU_PO_ID.value;

            if ('D' != status) {
                for (i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    id = SYS_getRecID(record);
                    type = SYS_getRecState(record);
                    loantimes = SYS_getValFromRec(record, 'FA_TEMP4');
                    docNo = SYS_getValFromRec(record, 'FA_DOC_NO');
                    loanamt= SYS_getValFromRec(record, 'FA_INV_LOAN_AMT');
                    //alert(loanamt+"loanamt");
                    FA_LOAN_DAYS = SYS_getValFromRec(record, 'FA_LOAN_DAYS');
                   // alert(FA_LOAN_DAYS+"FA_LOAN_DAYS");
                    if (reqLoanBal <= 0) {
                        record = SYS_setValToRec(record, "FA_INV_LOAN_TIMES", SYS_getValFromRec(record, 'FA_TEMP4'));
                        record = SYS_setValToRec(record, "FA_INV_LOAN_AMT", 0);
                        record = SYS_setValToRec(record, "FA_INV_LOAN_BAL", SYS_BeFloat(SYS_getValFromRec(record, 'FA_TEMP_AMT16')));
                        record = SYS_setValToRec(record, "FA_FIN_LOAN_AMT", SYS_BeFloat(SYS_getValFromRec(record, 'FA_TEMP_AMT15')));
                        record = SYS_setValToRec(record, "FA_INV_LOAN_EBAL", 0);
                        record = SYS_setValToRec(record, "FA_LOAN_INT_AMT", 0);
                    } else {
                    	      if ('E' == type || 'N' == type) {
                            record = SYS_setValToRec(record, "FA_TEMP4", loantimes);
                        } else {
                            loantimes = SYS_BeFloat(loantimes) + 1;
                            record = SYS_setValToRec(record, "FA_INV_LOAN_TIMES", loantimes);
                        }
                        /*SYS_setValToRec(record, "FA_LOAN_DAYS", SYS_GetSubDays('FA_LOAN_VAL_DT', 'FA_DOC_DUE_DT'));
                        SYS_GetTableDataByRule_S('Get_DDRate_Rule', '1', 'Y');
                        var FA_LOAN_INT_RT = document.MAINFORM.FA_LOAN_INT_RT.value; 
                        if (FA_LOAN_INT_RT == null ||  FA_LOAN_INT_RT == '' && status != 'E') {
                           alert("Invoice: " + docNo + " with no available DD Rate Rule, can't be financed!");
                           return false;
                        }*/
                        //SYS_GetTableData_SvrSql_S("GET_BASE_DAYS", "FA_DOC_CCY", "I_BASE_DAY", "IA_I_BASE_DAYS", 'Y');
						SYS_GetTableDataByRule_S('GET_BASE_DAYS', '1', 'Y');
                        record=SYS_setValToRec(record,'IA_I_BASE_DAYS',document.MAINFORM.IA_I_BASE_DAYS.value);
                        record = SYS_setValToRec(record, "CLERK_ID", CLERK_ID);
                        record = SYS_setValToRec(record, "FA_TEMP3", FA_TEMP3);
                        record = SYS_setValToRec(record, "FA_TEMP7", FA_TEMP7);
                        record = SYS_setValToRec(record, "FA_TEMP6", FA_TEMP6);
                        record = SYS_setValToRec(record, "FA_DOC_STATUS", 'Settled');


                        record = SYS_setValToRec(record, "FA_TRF_FX_RT", document.MAINFORM.EXCH_RT6.value);
                        invoiceLmtAmtLast = SYS_getValFromRec(record, 'FA_TEMP_AMT15');
                        FA_LOAN_INT_RT =  SYS_getValFromRec(record, 'FA_LOAN_INT_RT');
                       var days=  SYS_getValFromRec(record, 'IA_I_BASE_DAYS');                 
                        loanIntAmt = SYS_BeFloat(loanamt) * SYS_BeFloat(FA_LOAN_INT_RT) / 100/days*SYS_BeFloat(FA_LOAN_DAYS) ;
                        // alert(loanIntAmt+"loanIntAmt");
                        loanbal = SYS_BeFloat(SYS_getValFromRec(record, 'FA_TEMP_AMT16')) + loanamt;
                        ttlloanamt = SYS_BeFloat(invoiceLmtAmtLast) + SYS_BeFloat(loanamt);
                        loanIntAmt = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, loanIntAmt);
                        loanamt = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, loanamt);
                        loanbal = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, loanbal);
                        ttlloanamt = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, ttlloanamt);

                        record = SYS_setValToRec(record, "FA_LOAN_INT_AMT", SYS_BeFloat(loanIntAmt));
                        record = SYS_setValToRec(record, "FA_INV_LOAN_AMT", SYS_BeFloat(loanamt));
                        record = SYS_setValToRec(record, "FA_INV_LOAN_BAL", SYS_BeFloat(loanbal));
                        record = SYS_setValToRec(record, "FA_FIN_LOAN_AMT", SYS_BeFloat(ttlloanamt));
                        record = SYS_setValToRec(record, "FA_INV_LOAN_EBAL", SYS_BeFloat(loanamt));
                        record = SYS_setValToRec(record, "FA_INV_LOAN_ID", loanid + i);
                        record = SYS_setValToRec(record, "FA_LOAN_DUE_DT", SYS_getValFromRec(record, 'FA_DOC_DUE_DT'));
                        document.MAINFORM.FA_LOAN_CCY.value = SYS_getValFromRec(record, 'FA_DOC_CCY');
                        record = SYS_setValToRec(record, "FA_LOAN_CCY", document.MAINFORM.FA_LOAN_CCY.value);
                    }
                }
                SYS_reLoadGrid(_do, arrayvalue);
                bFirstFinance = false;
                document.MAINFORM.FA_TTL_LOAN_AMT.value = SYS_getFieldSumValue(_do, "FA_LOAN_INT_AMT", 2);
                document.MAINFORM.FA_TTL_LOAN_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TTL_LOAN_AMT.value);
                EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
                
                 document.MAINFORM.FA_PMT_AMT_SUM.value = SYS_getFieldSumValue(_do, "FA_INV_LOAN_AMT", 2);
                document.MAINFORM.FA_PMT_AMT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PMT_AMT_SUM.value);
                EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT_SUM, 'onchange');

                    SYF_FAEF_MLDC_SetDebitCreditData();
                            }
        }
        if ('D' == status) {

               document.MAINFORM.FA_TTL_LOAN_AMT.value = SYS_getFieldSumValue(node, "FA_LOAN_INT_AMT", 2);
                document.MAINFORM.FA_TTL_LOAN_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TTL_LOAN_AMT.value);
                EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
                document.MAINFORM.FA_PMT_AMT_SUM.value = SYS_getFieldSumValue(_do, "FA_INV_LOAN_AMT", 2);
                document.MAINFORM.FA_PMT_AMT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PMT_AMT_SUM.value);
                EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT_SUM, 'onchange');
                SYF_FAEF_MLDC_SetDebitCreditData();

        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*InvFinance", e);
    }
}

function InvFinance_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*InvFinance_OnDeSelected", e);
    }
}

function InvFinance_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*InvFinance_OnSelected", e);
    }
}

function MultiCreditSummary_MultiCredit_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*MultiCreditSummary_MultiCredit_OnDeSelected", e);
    }
}

function MultiCreditSummary_MultiCredit_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*MultiCreditSummary_MultiCredit_OnSelected", e);
    }
}

function MultiCreditSummary_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*MultiCreditSummary_OnDeSelected", e);
    }
}

function MultiCreditSummary_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*MultiCreditSummary_OnSelected", e);
    }
}

function MultiDebitSummary_MultiDebit_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*MultiDebitSummary_MultiDebit_OnDeSelected", e);
    }
}

function MultiDebitSummary_MultiDebit_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*MultiDebitSummary_MultiDebit_OnSelected", e);
    }
}

function MultiDebitSummary_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*MultiDebitSummary_OnDeSelected", e);
    }
}

function MultiDebitSummary_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*MultiDebitSummary_OnSelected", e);
    }
}

function SYF_FAEF_getDOdata_InvFinance(node, record, recordId) {
    try {
        var LMTAPPRV; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var invref; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var DocBal;
        var CRNBal;
        var OrgttlLoanAmt;
        var InvLoanAvl;
        var LoanDays;
        var DDRtID=document.MAINFORM.TSU_PO_ID.value;

        document.MAINFORM.FA_TTL_LOAN_AMT.value = 0;
        document.MAINFORM.FA_SEL_AC_AMT.value = 0;
        document.MAINFORM.FA_LOAN_PERC.value = 100;
        if (document.MAINFORM.FA_TEMP_AMT8.value == 0) {
            alert('Please input the Request Financing Amount first!');
            return;
        } else {
            var para = {
                ruleName: "Get_CEINV_DD",
                status: "A",
                showError: false,
                xpathFordo: "InvFinance",
                reqAMTFldNm: "FA_TEMP_AMT8",
                singleAMTFldNm: "FA_ADJ_AMT",
                percFldNm: "FA_LOAN_PERC"
            };
            SYS_GetDynDataForDO_S(para);
        }
        num = SYS_getcurrRecordCount("InvFinance");
        node = SYS_getDoByXpath("InvFinance");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            SYS_setFieldValue(node, id, "FA_LOAN_INT_AMT", 0);
            SYS_setFieldValue(node, id, "FA_LOAN_VAL_DT", SYS_BUSI_DATE);
            SYS_setFieldValue(node, id, "PO_NO", DDRtID);
            invref = SYS_getValFromRec(record, 'FA_DOC_REF');
            DocBal = SYS_getValFromRec(record, 'FA_ADJ_BAL');
            document.MAINFORM.FA_TEMP2.value = invref;
            var ducdue= SYS_getValFromRec(record, 'FA_DOC_DUE_DT');
            document.MAINFORM.FA_DOC_DUE_DT.value = ducdue;
            var loandays=SYS_GetSubDays('FA_LOAN_VAL_DT', 'FA_DOC_DUE_DT');
            document.MAINFORM.FA_LOAN_DAYS.value = loandays;
            SYS_setFieldValue(node, id,  "FA_LOAN_DAYS", loandays);
            SYS_GetTableDataByRule_S('Get_DDRate_Rule', '1', 'Y');
            
            var RT = document.MAINFORM.FA_TEMP_RT_TYPE1.value;
            SYS_setFieldValue(node, id,  "FA_LOAN_INT_RT", RT);
            var FA_LOAN_INT_RT = SYS_getValFromRec(record, 'FA_LOAN_INT_RT');
            var docstatus= SYS_getValFromRec(record, 'FA_DOC_STATUS');
            var docNo = SYS_getValFromRec(record, 'FA_DOC_NO');
                        if(loandays >0){
                            if (RT == null ||  RT == '' && status != 'E') {
                           alert("Invoice: " + docNo + " with no available DD Rate Rule, can't do discount!");                        
                            record = SYS_setValToRec(record, "recordType", 'D');
                          continue;
                              }
            
                        }
                        if (loandays <=0 && status != 'E') {
                           alert("Invoice: " + docNo + " is overdue, will be paid!");                        
                            record = SYS_setValToRec(record, "recordType", 'D');
                          continue;
                              }
                        

            record=SYS_setValToRec(record, "FA_LOAN_INT_RT", RT);
            record=SYS_setValToRec(record, "FA_LOAN_DAYS", loandays);
            record=SYS_setValToRec(record, "FA_LOAN_VAL_DT", SYS_BUSI_DATE);
            mData.push(record);
            document.MAINFORM.FA_TEMP_RT_TYPE1.value ='';
            document.MAINFORM.FA_LOAN_DAYS.value='';

        }
        SYS_reLoadGrid(node, mData);
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP1.value);
        document.MAINFORM.FA_TTL_LOAN_AMT.value = SYS_getFieldSumValue(node, "FA_INV_LOAN_AMT")
        document.MAINFORM.FA_TTL_LOAN_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TTL_LOAN_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
        InvFinance();
    	} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*SYF_FAEF_getDOdata_InvFinance", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*SYF_FAEF_getDOdata_MultiCreditSummary", e);
    }
}

function SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*SYF_FAEF_getDOdata_MultiCreditSummary_MultiCredit", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*SYF_FAEF_getDOdata_MultiDebitSummary", e);
    }
}

function SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE_DO.js*SYF_FAEF_getDOdata_MultiDebitSummary_MultiDebit", e);
    }
}