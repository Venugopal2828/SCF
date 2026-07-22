"path:SCRN/o2m/FAEF_DFSUBSettle.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBSettle.js", e);
    }
}

csDOScreenProto.CheckInt = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var intchg; // Utility Auto Fix Comments
        var loanDueDt; // Utility Auto Fix Comments
        var overdueInt; // Utility Auto Fix Comments
        var paidflg; // Utility Auto Fix Comments
        var payValDt; // Utility Auto Fix Comments
        var refoundInt; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('Settle.Settle_loan'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("Settle.Settle_loan");
        if (num > 0) {
            //payValDt=document.MAINFORM.TRX_DT.value; for historical data
            payValDt = SYS_getValueFromMain('FA_TEMP_TRX_DT');
            loanDueDt = document.MAINFORM.FA_LOAN_DUE_DT.value;
            refoundInt = document.MAINFORM.FA_INV_REFUND_INT.value;
            overdueInt = document.MAINFORM.FA_OVD_INT_AMT.value;
            intchg = document.MAINFORM.FA_INT_CHG_TYPE.value;
            paidflg = document.MAINFORM.FA_FINAL_PMT_FLG.value;
            if (payValDt < loanDueDt && refoundInt == 0 && intchg == '1' && paidflg == '1') {
                alert("Please get the refund interest!");
                return false;
            }
            if (payValDt > loanDueDt && overdueInt == 0 && intchg == '2') {
                alert("Please get the overdue interest!");
                return false;
            }
            return true;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBSettle.js", e);
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
        _do = SYS_getDoByXpath('Settle.Settle_loan'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("Settle.Settle_loan");
        mData = [];
        flag = false;
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                payINTamt = SYS_getValFromRec(record, 'FA_LOAN_IPAID_AMT');
                //dt=SYS_BUSI_DATE; FOR historical data
                dt = SYS_getValueFromMain('FA_TEMP_TRX_DT');
                //if(payINTamt!=''&&payINTamt!=0){
                record = SYS_setValToRec(record, 'FA_LAST_PINT_DT', dt);
                // }
                mData.push(record);
            }
            //for historical data , give the value trx_dt back to real trx_dt
            document.MAINFORM.TRX_DT.value = SYS_getValueFromMain('TRX_DT');
            doc_status();
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBSettle.js", e);
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
        var refundintamt; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('Settle.Settle_loan'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("Settle.Settle_loan");
        if (num > 0) {
            n = SYS_getFieldSumValue(_do, "FA_LOAN_PAID_AMT", 2); // Utility Auto Fix Comments
            intamtcheck = SYS_getFieldSumValue(_do, "FA_LOAN_INT_AMT", 2); // Utility Auto Fix Comments
            m = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
            intchgtype = SYS_getValFromRec(_do, 'FA_INT_CHG_TYPE'); // Utility Auto Fix Comments
            checkamt = SYS_BeFloat(m) - SYS_BeFloat(n);
            refundintamt = SYS_getFieldSumValue(_do, "IA_Y_REFUND_INT", 2); // Utility Auto Fix Comments
            overintamt = SYS_getFieldSumValue(_do, "FA_OVD_INT_EAMT", 2); // Utility Auto Fix Comments
            days = document.MAINFORM.FA_TEMP7.value;
            if (checkamt < 0) {
                alert('The sum of paid loan amount must be less than the payment amount!');
                return false;
            }
            if ((intamtcheck == 0 && intchgtype == '2') || (refundintamt == 0 && overintamt == 0 && intchgtype == '1' && days != 0)) {
                alert('Please click the InqInt button to get interest!');
                return false;
            }
        }

        if (!CheckInt()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBSettle.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBSettle.js", e);
    }
}

csDOScreenProto.LoadDODataOnInit = function() {
    try {
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S('settle', 'A', false);
        }
        num = SYS_getcurrRecordCount("Settle.Settle_loan");
        node = SYS_getDoByXpath('Settle.Settle_loan');
        if (num > 0) {
            SYF_FAEF_Change_Field_Class('1');
            Settle_Settle_loan(node);
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBSettle.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var strSQLWhere; // Utility Auto Fix Comments
        //document.MAINFORM.TRX_DT.value = SYS_getValueFromMain('TRX_DT'); for historical data
        document.MAINFORM.TRX_DT.value = SYS_getValueFromMain('FA_TEMP_TRX_DT');
        document.MAINFORM.FA_TEMP6.value = SYS_getValueFromMain('FA_TEMP6');
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain('FA_BUSI_TYPE');
        document.MAINFORM.CLERK_ID.value = SYS_getValueFromMain('CLERK_ID');
        document.MAINFORM.FA_TEMP4.value = SYS_ORG_FUNCTION_SHORT_NAME;
        document.MAINFORM.FA_PMT_DT.value = SYS_getValueFromMain('FA_PMT_DT');
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_getValueFromMain('FA_PMT_VAL_DT');
        document.MAINFORM.FA_OVDUE_INT_RT.value = SYS_getValueFromMain('FA_OVDUE_INT_RT');
        document.MAINFORM.TEMP_FLG1.value = document.MAINFORM.FA_DOC_STATUS.value;
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        //document.MAINFORM.FA_TEMP_DT1.value=document.MAINFORM.FA_LAST_PINT_DT.value;
        SetValForFA_Temp_dt2();
        forBAAmount();
        //strSQLWhere = "C_CURRENCY='" + document.MAINFORM.FA_DOC_CCY.value + "'";
        SYS_GetTableDataByRule_S('SSSS_FAEF_DFSUBSettle_PostconditionOnInit_0', '1');

    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBSettle.js", e);
    }
}

csDOScreenProto.SYF_FAEF_Change_Field_Class = function(type) {
    try {
        if (type == '1') {
            SYT_ChangeFldClass(opener.document.MAINFORM.FA_PMT_VAL_DT, 'P', 'N');
            SYT_ChangeFldClass(opener.document.MAINFORM.FA_OVDUE_INT_RT, 'P', 'N');

        } else {
            SYT_ChangeFldClass(opener.document.MAINFORM.FA_PMT_VAL_DT, 'M', 'N');
            SYT_ChangeFldClass(opener.document.MAINFORM.FA_OVDUE_INT_RT, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBSettle.js", e);
    }
}

csDOScreenProto.SetValForFA_Temp_dt2 = function() {
    try {
        var date; // Utility Auto Fix Comments
        var vDate; // Utility Auto Fix Comments
        var vDay; // Utility Auto Fix Comments
        var vMonth; // Utility Auto Fix Comments
        var vYear; // Utility Auto Fix Comments
        date = SYS_GetDateByIncrement('TRX_DT', 0, 0);
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
        DisExcpt("SSSS_FAEF_DFSUBSettle.js", e);
    }
}

csDOScreenProto.doc_status = function() {
    try {
        if (document.MAINFORM.FA_DOC_BAL.value == 0) {
            document.MAINFORM.FA_DOC_STATUS.value = 'CLOSED';
        } else {
            document.MAINFORM.FA_DOC_STATUS.value = 'STL';
        }
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_STATUS, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBSettle.js", e);
    }
}

csDOScreenProto.forBAAmount = function() {
    try {
        if (document.MAINFORM.FA_DOC_TYPE.value == '1') {
            document.MAINFORM.FA_TEMP_INV_BA.value = document.MAINFORM.FA_INV_CLEAR_AMT.value;
            document.MAINFORM.FA_TEMP_CRN_BA.value = 0;
        }
        if (document.MAINFORM.FA_DOC_TYPE.value == '2') {
            document.MAINFORM.FA_TEMP_CRN_BA.value = -SYS_BeFloat(document.MAINFORM.FA_INV_CLEAR_AMT.value);
            document.MAINFORM.FA_TEMP_INV_BA.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBSettle.js", e);
    }
}

csDOScreenProto.foramttomain = function(index, name) {
    try {
        var INTAMT; // Utility Auto Fix Comments
        var LOANBALAMT; // Utility Auto Fix Comments
        var OVDINTAMT; // Utility Auto Fix Comments
        var PRINAMT; // Utility Auto Fix Comments
        var REFUND; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
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
        DisExcpt("SSSS_FAEF_DFSUBSettle.js", e);
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
            record.data['FA_LOAN_IPAID_AMT'] = da;
            if (loanbal < ((v * 1000 - da * 1000 - oamt * 1000) / 1000)) {
                alert('Paid loan amount cannot be more than loan balance');
                record.data['FA_LOAN_PPAID_AMT'] = 0;
                //20080816
                v = 0;
            } else {
                record.data['FA_LOAN_PPAID_AMT'] = SYS_BeFloat((v * 1000 - da * 1000 - oamt * 1000) / 1000);
            }
            if ((v - da - oamt) > loanbal) {
                record.data['FA_INV_LOAN_EBAL'] = 0;
            } else {
                record.data['FA_INV_LOAN_EBAL'] = (loanbal * 1000 - (v * 1000 - da * 1000 - oamt * 1000)) / 1000;
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
        document.MAINFORM.FA_LAST_PINT_DT.value = SYS_BUSI_DATE;
        return v;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBSettle.js", e);
    }
}