"path:SCRN/o2m/FAEF_setl_po.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Cal_FA_PMT_AMT = function() {
    try {
        if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '1') {
            document.MAINFORM.FA_PMT_AMT.value = SYS_BeFloat(document.MAINFORM.PO_AMT.value);
            EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT, "onchange");
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.Cal_PO_Available_Loan_Amount = function() {
    try {
        var poamt = SYS_BeFloat(document.MAINFORM.PO_AMT.value);
        var finMaxPercent = SYS_getValueFromMain("PO_MAX_LOAN_PERC");
        var poloanamt = SYS_BeFloat(document.MAINFORM.FA_FIN_LOAN_AMT.value);
        var poloanavl = poamt * finMaxPercent / 100 - poloanamt;
        document.MAINFORM.PO_LOAN_AVL.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, poloanavl);
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.Cal_PO_CLEAR_AMT = function() {
    try {
        document.MAINFORM.PO_CLEAR_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.FA_PMT_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.Cal_PO_STATUS = function() {
    try {
        if (document.MAINFORM.PO_LOAN_AVL.value == 0 || document.MAINFORM.PO_LOAN_BAL.value == 0) {
            document.MAINFORM.PO_STATUS.value = 'CLOSED';
        } else {
            document.MAINFORM.PO_STATUS.value = 'STL';
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.Chk_FA_PMT_AMT = function() {
    try {

        var poamt; // Utility Auto Fix Comments
        var payamt; // Utility Auto Fix Comments
        var pmttype; // Utility Auto Fix Comments
        pmttype = document.MAINFORM.FA_PMT_CLEAR_TYPE.value;
        payamt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
        poamt = SYS_BeFloat(document.MAINFORM.PO_AMT.value);
        if (pmttype == '1' && payamt > poamt) {
            SYS_CheckError(document.MAINFORM.FA_PMT_AMT.name, "Amount paid exceeds the PO Amount! Please check!"); // Utility Auto Fix Comments
            return false;
        }

        if (pmttype == '2' && payamt >= poamt) {
            SYS_CheckError(document.MAINFORM.FA_PMT_AMT.name, "Amount paid should be less than the PO Amount! Please check!"); // Utility Auto Fix Comments
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var dt; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var payINTamt; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('Settle_pmt_po.Settle_loan_po'); // Utility Auto Fix Comments
        //num=SYS_getcurrRecordCount("Settle_New.Settle_loan");
        recs = SYS_getRecords(_do); // Utility Auto Fix Comments
        mData = [];
        flag = false;
        if (recs.length > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                payINTamt = SYS_getValFromRec(record, 'FA_LOAN_IPAID_AMT');
                dt = SYS_getValueFromMain('FA_TEMP_TRX_DT');
                record = SYS_setValToRec(record, 'FA_LAST_PINT_DT', dt);
                mData.push(record);
            }
            SYS_reLoadGrid(_do, mData); // Utility Auto Fix Comments
        }
        Cal_PO_Available_Loan_Amount();
        Cal_PO_STATUS();
        Cal_PO_CLEAR_AMT();
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var checkamt; // Utility Auto Fix Comments
        var days; // Utility Auto Fix Comments
        var intamtcheck; // Utility Auto Fix Comments
        var intchgtype; // Utility Auto Fix Comments
        var m; // Utility Auto Fix Comments
        var n; // Utility Auto Fix Comments
        var overintamt; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        var refundintamt; // Utility Auto Fix Comments
        var loanduedt;
        var subday;
        var pmtcleartype;
        _do = SYS_getDoByXpath('Settle_pmt_po.Settle_loan_po'); // Utility Auto Fix Comments
        //num=SYS_getcurrRecordCount("Settle_pmt_po.Settle_loan_po");
        recs = SYS_getRecords(_do); // Utility Auto Fix Comments
        if (recs.length > 0) {
            n = SYS_getFieldSumValue(_do, "FA_LOAN_PAID_AMT", 2); // Utility Auto Fix Comments
            intamtcheck = SYS_getFieldSumValue(_do, "FA_LOAN_INT_AMT", 2); // Utility Auto Fix Comments
            m = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
            intchgtype = document.MAINFORM.FA_INT_CHG_TYPE.value;
            pmtcleartype = document.MAINFORM.FA_PMT_CLEAR_TYPE.value;
            checkamt = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, SYS_BeFloat(m) - SYS_BeFloat(n));
            refundintamt = SYS_getFieldSumValue(_do, "IA_Y_REFUND_INT", 2); // Utility Auto Fix Comments
            overintamt = SYS_getFieldSumValue(_do, "FA_OVD_INT_EAMT", 2); // Utility Auto Fix Comments
            //loanduedt = SYS_getValFromRec(_do, 'FA_LOAN_DUE_DT');
            loanduedt = document.MAINFORM.FA_LOAN_DUE_DT.value;
            subday = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_LOAN_DUE_DT.name);
            if (checkamt < 0) {
                //alert('The sum of paid loan amount must be less than the payment amount!');
                alert("Amount:" + (-checkamt) + " will deduct from Total Amount to Seller or Claim from Customer Account!");
                return true;
            }
            if ((intamtcheck == 0 && intchgtype == '2') || (overintamt == 0 && intchgtype == '2' && subday < 0) || (refundintamt == 0 && intchgtype == '1' && subday > 0 && pmtcleartype == '1')) {
                alert('Please click the InqInt button to get interest!');
                return false;
            }
        }

        if (!Chk_FA_PMT_AMT()) {
            return false;
        }
        if (!checkRefundInt()) {
            return false;
        }
        document.MAINFORM.TRX_DT.value = SYS_getValueFromMain('TRX_DT'); //add by amy 
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.For_Clear_Type = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var loanbal; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_PMT_CLEAR_TYPE.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_AMT, 'P');
            document.MAINFORM.FA_PMT_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.FA_PMT_AMT.value);
            document.MAINFORM.FA_OVD_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_OVD_INT_AMT.value, 0);
            document.MAINFORM.FA_PAID_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_PAID_INT_AMT.value, 0);
            document.MAINFORM.FA_PAID_PRIN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_PAID_PRIN_AMT.value, 0);
            document.MAINFORM.PO_REFUND_INT.value = SYT_AmtFormat(document.MAINFORM.PO_REFUND_INT.value, 0);
            document.MAINFORM.PO_LOAN_BAL.value = SYT_AmtFormat(document.MAINFORM.PO_LOAN_BAL.value, 0);
            EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT, "onchange");
            _do = SYS_getDoByXpath('Settle_pmt_po.Settle_loan_po'); // Utility Auto Fix Comments
            recs = SYS_getRecords(_do); // Utility Auto Fix Comments
            mData = [];
            flag = false;
            if (recs.length > 0) {
                arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
                for (i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    record = SYS_setValToRec(record, 'FA_LOAN_PPAID_AMT', 0);
                    record = SYS_setValToRec(record, 'FA_LOAN_PAID_AMT', 0);
                    record = SYS_setValToRec(record, 'FA_LOAN_INT_AMT', 0);
                    record = SYS_setValToRec(record, 'FA_OVD_INT_EAMT', 0);
                    record = SYS_setValToRec(record, 'IA_Y_REFUND_INT', 0);

                    loanbal = SYS_getValFromRec(record, 'FA_TEMP_LOAN_EBAL');
                    record = SYS_setValToRec(record, 'PO_LOAN_EBAL', loanbal);

                    mData.push(record);
                }
                SYS_reLoadGrid(_do, mData); // Utility Auto Fix Comments
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_AMT, 'M');
            document.MAINFORM.FA_PMT_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, 0);
            document.MAINFORM.FA_OVD_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_OVD_INT_AMT.value, 0);
            document.MAINFORM.FA_PAID_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_PAID_INT_AMT.value, 0);
            document.MAINFORM.FA_PAID_PRIN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_PAID_PRIN_AMT.value, 0);
            document.MAINFORM.PO_REFUND_INT.value = SYT_AmtFormat(document.MAINFORM.PO_REFUND_INT.value, 0);
            document.MAINFORM.PO_LOAN_BAL.value = SYT_AmtFormat(document.MAINFORM.PO_LOAN_BAL.value, 0);
            EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT, "onchange");
            _do = SYS_getDoByXpath('Settle_pmt_po.Settle_loan_po'); // Utility Auto Fix Comments
            recs = SYS_getRecords(_do); // Utility Auto Fix Comments
            mData = [];
            flag = false;
            if (recs.length > 0) {
                arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
                for (i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    record = SYS_setValToRec(record, 'FA_LOAN_PPAID_AMT', 0);
                    record = SYS_setValToRec(record, 'FA_LOAN_PAID_AMT', 0);
                    record = SYS_setValToRec(record, 'FA_LOAN_INT_AMT', 0);
                    record = SYS_setValToRec(record, 'FA_OVD_INT_EAMT', 0);
                    record = SYS_setValToRec(record, 'IA_Y_REFUND_INT', 0);
                    loanbal = SYS_getValFromRec(record, 'FA_TEMP_LOAN_EBAL');
                    record = SYS_setValToRec(record, 'PO_LOAN_EBAL', loanbal);

                    mData.push(record);
                }
                SYS_reLoadGrid(_do, mData); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        Cal_FA_PMT_AMT()
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.Init_Loan_DO = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('Settle_pmt_po.Settle_loan_po'); // Utility Auto Fix Comments
        recs = SYS_getRecords(_do); // Utility Auto Fix Comments
        mData = [];


        if (recs.length > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                fldValue = SYS_getValFromRec(record, 'IA_Y_REFUND_INT');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'IA_Y_REFUND_INT', 0);
                }
                fldValue = SYS_getValFromRec(record, 'FA_LOAN_PPAID_AMT');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_LOAN_PPAID_AMT', 0);
                }
                fldValue = SYS_getValFromRec(record, 'FA_LOAN_INT_AMT');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_LOAN_INT_AMT', 0);
                }
                fldValue = SYS_getValFromRec(record, 'FA_TEMP_AMT19');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_TEMP_AMT19', 0);
                }
                fldValue = SYS_getValFromRec(record, 'PO_LOAN_EBAL');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'PO_LOAN_EBAL', 0);
                }
                fldValue = SYS_getValFromRec(record, 'FA_TEMP_PO_INT_AMT');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_TEMP_PO_INT_AMT', 0);
                }
                fldValue = SYS_getValFromRec(record, 'FA_LOAN_IPAID_AMT');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_LOAN_IPAID_AMT', 0);
                }
                fldValue = SYS_getValFromRec(record, 'FA_OVD_INT_EAMT');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_OVD_INT_EAMT', 0);
                }
                mData.push(record);
            }
            SYS_reLoadGrid(_do, mData); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.LoadDODataOnInit = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var intChgType; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        node = SYS_getDoByXpath('Settle_pmt_po.Settle_loan_po');
        recs = SYS_getRecords(node);
        if (recs.length <= 0 && SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S("settle_loan_po", "N", false, '', "Settle_loan_po");
        }
        //Refesh_Loan_do();
        Init_Loan_DO();
        if (recs.length > 0) {
            SYF_FAEF_Change_Field_Class('1');
            Settle_pmt_po_Settle_loan_po(node);
        }

        /*arrayvalue = SYS_getRecords(node);
        if (arrayvalue.length > 0) {
            intChgType = SYS_getValFromRec(arrayvalue[0], "FA_INT_CHG_TYPE");
            if (intChgType == "1") {
                SYS_disableButton('Settle_pmt_po.Settle_loan_po', 'newButton');
            }
        }*/
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_PMT_REF.value = SYS_getValueFromMain("FA_PMT_REF");
        document.MAINFORM.FA_PMT_DT.value = SYS_getValueFromMain("FA_PMT_DT");
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_getValueFromMain("FA_PMT_VAL_DT");
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain('FA_BUSI_TYPE');
        document.MAINFORM.CLERK_ID.value = SYS_getValueFromMain('CLERK_ID');
        document.MAINFORM.TRX_DT.value = SYS_getValueFromMain('TRX_DT');
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_TEMP4.value = SYS_ORG_FUNCTION_SHORT_NAME;
        SYS_GetTableDataByRule_S('SSSS_FAEF_setl_New_PostconditionOnInit_0', '1', 'Y');
        document.MAINFORM.PO_LOAN_BAL.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.PO_LOAN_BAL.value);
        document.MAINFORM.FA_OVD_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.FA_OVD_INT_AMT.value);
        document.MAINFORM.FA_PAID_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.FA_PAID_INT_AMT.value);
        document.MAINFORM.FA_PAID_PRIN_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.FA_PAID_PRIN_AMT.value);
        document.MAINFORM.PO_REFUND_INT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.PO_REFUND_INT.value);
        document.MAINFORM.PO_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.PO_AMT.value);
        document.MAINFORM.FA_PMT_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.FA_PMT_AMT.value);

    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.SYF_FAEF_Change_Field_Class = function(type) {
    try {
        if (type == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_VAL_DT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_OVDUE_INT_RT, 'P', 'N');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_VAL_DT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_OVDUE_INT_RT, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.Settle_pmt_po_Settle_loan_po_FA_LOAN_PAID_AMT_onChange = function(ed, index, record, name) {
    try {

        var da; // Utility Auto Fix Comments
        var faLoanPpaid; // Utility Auto Fix Comments
        var flg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var loanbal; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var oamt; // Utility Auto Fix Comments
        var rec; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        var rs; // Utility Auto Fix Comments
        var v; // Utility Auto Fix Comments
        var vindex; // Utility Auto Fix Comments
        var vname; // Utility Auto Fix Comments
        record = ed.record;
        vindex = ed.row;
        vname = ed.field;
        mData = [];
        v = ed.value;
        da = record.data['FA_LOAN_INT_AMT'];
        oamt = record.data['FA_OVD_INT_EAMT'];
        loanbal = record.data['FA_TEMP_LOAN_EBAL'];
        //if (v > (da + oamt)) {
        if (v > da) {
            record.data['FA_LOAN_IPAID_AMT'] = da;
            record.data['FA_TEMP_AMT19'] = oamt;

            //if (((SYS_BeFloat(v) - SYS_BeFloat(da) - SYS_BeFloat(oamt)) - SYS_BeFloat(loanbal)) >= 0.01) {
            if ((SYS_BeFloat(v) - SYS_BeFloat(da) - SYS_BeFloat(loanbal)) >= 0.01) {
                alert('Paid loan amount cannot be more than loan balance');
                record.data['FA_LOAN_PPAID_AMT'] = 0;
                record.data['FA_LOAN_IPAID_AMT'] = 0;
                record.data['FA_TEMP_AMT19'] = 0;
                record.data['PO_LOAN_EBAL'] = loanbal * 1000 / 1000;
                record.data['FA_LOAN_PAID_AMT'] = 0;
                v = 0;
            } else {
                rs = dcmAdd(v, -da);
                //rs = dcmAdd(rs, -oamt);
                record.data['FA_LOAN_PPAID_AMT'] = SYS_BeFloat(rs);
            }
            if (Math.abs((v - da) - loanbal) < 0.01) {
                record.data['PO_LOAN_EBAL'] = 0;
            } else {
                if (v != 0) {
                    rs = dcmAdd(v, -da);
                    //rs = dcmAdd(rs, -oamt);
                    rs = dcmAdd(loanbal, -rs); // Utility Auto Fix Comments
                    record.data['PO_LOAN_EBAL'] = SYS_BeFloat(rs);
                }
            }
            EEHtml.getElementById('FA_TEMP_AMT13').value = da;
            foramttomain(index, name);
        } else if (da > 0 && v > 0) {
            alert('The payment amount must be more than the sum of interest and overdue interest amount!');
            record.data['FA_LOAN_PAID_AMT'] = 0;
            record.data['FA_LOAN_IPAID_AMT'] = 0;
            record.data['FA_LOAN_PPAID_AMT'] = 0;
            record.data['FA_TEMP_AMT19'] = 0;
            record.data['PO_LOAN_EBAL'] = loanbal * 1000 / 1000;
            EEHtml.getElementById('FA_TEMP_AMT13').value = da;
            foramttomain(index, name);
            v = 0;
        } else {
            record.data['FA_LOAN_PAID_AMT'] = 0;
            record.data['FA_LOAN_IPAID_AMT'] = 0;
            record.data['FA_LOAN_PPAID_AMT'] = 0;
            record.data['FA_LOAN_INT_AMT'] = da;
            record.data['FA_TEMP_AMT19'] = 0;
            record.data['PO_LOAN_EBAL'] = loanbal * 1000 / 1000;
            EEHtml.getElementById('FA_TEMP_AMT13').value = da;
            foramttomain(index, name);
            v = 0;
        }
        document.MAINFORM.FA_LAST_PINT_DT.value = SYS_BUSI_DATE;
        mData.push(record.data);
        node = SYS_getDoByXpath('Settle_pmt_po.Settle_loan_po');
        SYS_reLoadGrid(node, mData);

        recs = SYS_getRecords(node);

        faLoanPpaid = 0;
        flg = true;
        for (i = 0, l = recs.length; i < l; i++) {
            rec = recs[i];
            faLoanPpaid = SYS_getValFromRec(rec, "FA_LOAN_PPAID_AMT");
            faLoanPpaid = SYS_BeFloat(faLoanPpaid);
            if (faLoanPpaid == 0) {
                flg = false;
                break;
            }
        }
        foramttomain(index, name);
        if (flg) {
            SYS_enableButton('Settle_pmt_po.Settle_loan_po', 'newButton');
        } else {
            SYS_disableButton('Settle_pmt_po.Settle_loan_po', 'newButton');
        }
        return v;

    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.checkRefundInt = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var intchg; // Utility Auto Fix Comments
        var loanDueDt; // Utility Auto Fix Comments
        var overdueInt; // Utility Auto Fix Comments
        var paidflg; // Utility Auto Fix Comments
        var payValDt; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        var refoundInt; // Utility Auto Fix Comments
        var subdays2;
        _do = SYS_getDoByXpath('Settle_pmt_po.Settle_loan_po'); // Utility Auto Fix Comments
        recs = SYS_getRecords(_do); // Utility Auto Fix Comments
        if (recs.length > 0) {
            //payValDt= document.MAINFORM.TRX_DT.value; for historical data
            payValDt = SYS_getValueFromMain('FA_TEMP_TRX_DT');
            loanDueDt = document.MAINFORM.FA_LOAN_DUE_DT.value;
            refoundInt = document.MAINFORM.PO_REFUND_INT.value;
            overdueInt = document.MAINFORM.FA_OVD_INT_AMT.value;
            intchg = document.MAINFORM.FA_INT_CHG_TYPE.value;
            paidflg = document.MAINFORM.FA_PMT_CLEAR_TYPE.value;
            //Edit by Sunny
            document.MAINFORM.TRX_DT.value = payValDt; // Utility Auto Fix Comments
            subdays2 = SYS_GetSubDays(document.MAINFORM.FA_LOAN_DUE_DT.name, document.MAINFORM.TRX_DT.name);
            if (subdays2 < 0 && refoundInt == 0 && intchg == '1' && paidflg == '1') {
                alert("Please get the refund interest!");
                return false;
            }
            if (subdays2 > 0 && overdueInt == 0 && intchg == '2') {
                alert("Please get the overdue interest!");
                return false;
            }
            return true;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.dcmAdd = function(arg2, arg1) {
    try {
        var m; // Utility Auto Fix Comments
        var r1; // Utility Auto Fix Comments
        var r2; // Utility Auto Fix Comments
        try {
            r1 = arg1.toString().split(".")[1].length;
        } catch (e1) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        } catch (e2) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (dcmMul(arg1, m) + dcmMul(arg2, m)) / m;
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.dcmMul = function(arg2, arg1) {
    try {
        var m; // Utility Auto Fix Comments
        var s1; // Utility Auto Fix Comments
        var s2; // Utility Auto Fix Comments
        m = 0;
        s1 = arg1.toString();
        s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length;
        } catch (e1) {}
        try {
            m += s2.split(".")[1].length;
        } catch (e2) {}
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.foramttomain = function(name, index) {
    try {
        var INTAMT; // Utility Auto Fix Comments
        var LOANBALAMT; // Utility Auto Fix Comments
        var OVDINTAMT; // Utility Auto Fix Comments
        var PRINAMT; // Utility Auto Fix Comments
        var REFUND; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('Settle_pmt_po.Settle_loan_po'); // Utility Auto Fix Comments
        _do.setCurrInstance(index, name); // Utility Auto Fix Comments
        PRINAMT = SYS_getFieldSumValue(_do, "FA_LOAN_PPAID_AMT", 2); // Utility Auto Fix Comments
        //INTAMT = SYS_getFieldSumValue(_do,"FA_LOAN_INT_AMT",2);
        INTAMT = SYS_getFieldSumValue(_do, "FA_LOAN_IPAID_AMT", 2); // Utility Auto Fix Comments
        OVDINTAMT = SYS_getFieldSumValue(_do, "FA_TEMP_AMT19", 2); // Utility Auto Fix Comments
        LOANBALAMT = SYS_getFieldSumValue(_do, "PO_LOAN_EBAL", 2); // Utility Auto Fix Comments
        REFUND = SYS_getFieldSumValue(_do, "IA_Y_REFUND_INT", 2); // Utility Auto Fix Comments
        if (isNaN(REFUND)) {
            REFUND = 0;
        }
        //Edit by Sunny
        document.MAINFORM.FA_PAID_PRIN_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, PRINAMT);
        document.MAINFORM.FA_PAID_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, INTAMT);
        document.MAINFORM.FA_OVD_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, OVDINTAMT);
        document.MAINFORM.PO_LOAN_BAL.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, LOANBALAMT);
        document.MAINFORM.PO_REFUND_INT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, REFUND);

    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.FA_PMT_AMT_onchange = function(event) {
    try {
        Chk_FA_PMT_AMT();
        document.MAINFORM.FA_PMT_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.FA_PMT_AMT.value);
        Cal_PO_CLEAR_AMT();

    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}

csDOScreenProto.FA_PMT_CLEAR_TYPE_onchange = function(event) {
    try {
        Cal_FA_PMT_AMT();
        For_Clear_Type();
        Cal_PO_CLEAR_AMT();
        Chk_FA_PMT_AMT();

    } catch (e) {
        DisExcpt("SSSS_FAEF_setl_po.js", e);
    }
}