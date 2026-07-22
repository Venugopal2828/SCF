"path:SCRN/o2m/FAEF_FinancingReturnLib.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CHECK_PMT_AMT = function() {
    try {
        var PMT_AMT; // Utility Auto Fix Comments
        var TEMP_AMT10; // Utility Auto Fix Comments
        TEMP_AMT10 = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT10.value);
        PMT_AMT = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
        if (TEMP_AMT10 < PMT_AMT) {
            SYS_CheckError(document.MAINFORM.FA_PMT_AMT, 'Return Amount cannot exceed Financing Balance!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.Cal_INV_LOAN_BAL = function() {
    try {
        var PMT_AMT; // Utility Auto Fix Comments
        var TEMP_AMT10; // Utility Auto Fix Comments
        PMT_AMT = document.MAINFORM.FA_PMT_AMT.value;
        TEMP_AMT10 = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT10.value);
        if (PMT_AMT == '') {
            document.MAINFORM.FA_INV_LOAN_BAL.value = TEMP_AMT10;
        } else {
            document.MAINFORM.FA_INV_LOAN_BAL.value = TEMP_AMT10 - SYS_BeFloat(PMT_AMT);
        }
        document.MAINFORM.FA_INV_LOAN_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INV_LOAN_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
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
        var payINTamt; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('ReturnFin.Settle_loan'); // Utility Auto Fix Comments
        recs = SYS_getRecords(_do); // Utility Auto Fix Comments
        mData = [];
        flag = false;
        if (recs.length > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                payINTamt = SYS_getValFromRec(record, 'FA_LOAN_IPAID_AMT');
                dt = SYS_BUSI_DATE;
                if (payINTamt != '' && payINTamt != 0) {
                    record = SYS_setValToRec(record, 'FA_LAST_PINT_DT', dt);
                }
                mData.push(record);
            }
            SYS_reLoadGrid(_do, mData); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var checkamt; // Utility Auto Fix Comments
        var days; // Utility Auto Fix Comments
        var intamtcheck; // Utility Auto Fix Comments
        var intchgtype; // Utility Auto Fix Comments
        var overintamt; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        var refundintamt; // Utility Auto Fix Comments
        var loanduedt;
        var subday;
        _do = SYS_getDoByXpath('ReturnFin.Settle_loan'); // Utility Auto Fix Comments
        recs = SYS_getRecords(_do); // Utility Auto Fix Comments
        if (recs.length > 0) {
            intamtcheck = SYS_getFieldSumValue(_do, "FA_LOAN_INT_AMT", 2); // Utility Auto Fix Comments
            intchgtype = document.MAINFORM.FA_INT_CHG_TYPE.value;
            refundintamt = SYS_getFieldSumValue(_do, "IA_Y_REFUND_INT", 2); // Utility Auto Fix Comments
            overintamt = SYS_getFieldSumValue(_do, "FA_OVD_INT_EAMT", 2); // Utility Auto Fix Comments
            loanduedt = document.MAINFORM.FA_LOAN_DUE_DT.value;
            subday = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_LOAN_DUE_DT.name);
            if ((intamtcheck == 0 && intchgtype == '2') || (overintamt == 0 && intchgtype == '1' && subday < 0) || (refundintamt == 0 && intchgtype == '1' && subday > 0)) {
                alert('Please click the InqInt button to get interest!');

                return false;
            }
        }
        if (!CHECK_PMT_AMT()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.FA_DOC_STATUS = function() {
    try {
        var DOC_BAL; // Utility Auto Fix Comments
        var INV_LOAN_BAL; // Utility Auto Fix Comments
        DOC_BAL = SYS_BeFloat(document.MAINFORM.FA_DOC_BAL.value);
        INV_LOAN_BAL = SYS_BeFloat(document.MAINFORM.FA_INV_LOAN_BAL.value);
        if (DOC_BAL == 0 && INV_LOAN_BAL == 0) {
            document.MAINFORM.FA_DOC_STATUS.value = 'CLOSED';

        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.FA_RET_BAL = function() {
    try {
        var exRt; // Utility Auto Fix Comments
        var temp_org_ret_bal; // Utility Auto Fix Comments
        var temp_pmt_amt; // Utility Auto Fix Comments
        var temp_ret_bal; // Utility Auto Fix Comments
        temp_pmt_amt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
        temp_org_ret_bal = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT7.value);
        temp_ret_bal = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT7.value) - SYS_BeFloat(document.MAINFORM.FA_PMT_AMT.value);
        document.MAINFORM.FA_FIN_RET_BAL.value = Math.max(temp_ret_bal, 0);
        document.MAINFORM.FA_TEMP_AMT8.value = Math.min(temp_org_ret_bal, temp_pmt_amt);
        document.MAINFORM.FA_FIN_RET_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_FIN_RET_BAL.value);
        document.MAINFORM.FA_TEMP_AMT8.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_AMT8.value);
        exRt = SYS_BeFloat(document.MAINFORM.FA_TRF_FX_RT.value);
        document.MAINFORM.TEMP_AMT18.value = SYS_BeFloat(SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT8.value) * exRt); //AMtReturned in Lmt CCY
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
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
        _do = SYS_getDoByXpath('ReturnFin.Settle_loan'); // Utility Auto Fix Comments
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
                fldValue = SYS_getValFromRec(record, 'FA_INV_LOAN_EBAL');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_INV_LOAN_EBAL', 0);
                }
                fldValue = SYS_getValFromRec(record, 'FA_TEMP_INV_INT_AMT');
                if (fldValue == '' || fldValue == null) {
                    record = SYS_setValToRec(record, 'FA_TEMP_INV_INT_AMT', 0);
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
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.LoadDODataOnInit = function() {
    try {
        var node; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        node = SYS_getDoByXpath('ReturnFin.Settle_loan');
        recs = SYS_getRecords(node);
        if (recs.length <= 0 && SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S('SUBReturnFin', 'A', false, '', "Settle_loan");
        }
        Refesh_Loan_do();
        Init_Loan_DO();
        if (recs.length > 0) {
            SYT_ChangeFldClass(document.MAINFORM.FA_OVDUE_INT_RT, 'P');
            document.MAINFORM.FA_OVDUE_INT_RT.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.MPO_PEN_INT_Fields = function() {
    try {
        if (document.MAINFORM.FA_PEN_INT_SDT.value == '' || document.MAINFORM.FA_PEN_INT_SDT.value == 0) {
            SYT_ChangeFldClass(document.MAINFORM.FA_PEN_INT_SDT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_PEN_INT_RT, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_PEN_INT_RT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_PEN_INT_SDT, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_DOC_CCY.value = SYS_getValueFromMain('FA_DOC_CCY');
        document.MAINFORM.FA_PMT_DT.value = SYS_getValueFromMain('TRX_DT');
        document.MAINFORM.FA_PMT_VAL_DT.value = SYS_getValueFromMain('FA_PMT_VAL_DT');
        document.MAINFORM.FA_PMT_REF.value = SYS_getValueFromMain('FA_PMT_REF');
        document.MAINFORM.FA_TEMP_DT2.value = document.MAINFORM.FA_PMT_VAL_DT.value;
        document.MAINFORM.FA_TEMP_DT1.value = document.MAINFORM.TEMP_LAST_PINT_DT.value;
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain('FA_BUSI_TYPE');
        document.MAINFORM.TRX_DT.value = SYS_getValueFromMain('TRX_DT');
        //inquiry_gapi();
        geteLOANBaseDay();
        if (document.MAINFORM.FA_LOAN_INT_RT.value == '') {
            document.MAINFORM.FA_LOAN_INT_RT.value = 0;
        }
        document.MAINFORM.FA_DOC_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_BAL.value);
        document.MAINFORM.FA_CRN_AMT_SUM.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_CRN_AMT_SUM.value);
        document.MAINFORM.FA_CHG_BC_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_CHG_BC_AMT.value);
        document.MAINFORM.FA_INV_LOAN_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INV_LOAN_BAL.value);
        document.MAINFORM.FA_OVD_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_OVD_INT_AMT.value);
        document.MAINFORM.FA_DSP_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DSP_AMT.value);
        document.MAINFORM.FA_CRN_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_CRN_BAL.value);
        document.MAINFORM.FA_FIN_RET_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_FIN_RET_BAL.value);
        document.MAINFORM.FA_TEMP_AMT8.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_AMT8.value);
        document.MAINFORM.FA_DOC_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_AMT.value);
        document.MAINFORM.FA_PMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PMT_AMT.value);
        //document.MAINFORM.FA_PEN_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_PEN_INT_AMT.value);
        document.MAINFORM.FA_FIN_LOAN_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_FIN_LOAN_AMT.value);
        document.MAINFORM.FA_LOAN_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_LOAN_INT_AMT.value);
        //MPO_PEN_INT_Fields();

    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_TEMP4.value = SYS_ORG_FUNCTION_SHORT_NAME;
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.Refesh_Loan_do = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var loanbal; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_PMT_AMT.value == 0 || document.MAINFORM.FA_PMT_AMT.value == '' || document.MAINFORM.FA_PMT_AMT.value == null) {
            _do = SYS_getDoByXpath('ReturnFin.Settle_loan'); // Utility Auto Fix Comments
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
                    record = SYS_setValToRec(record, 'FA_LOAN_IPAID_AMT', 0);
                    record = SYS_setValToRec(record, 'FA_TEMP_AMT19', 0);
                    loanbal = SYS_getValFromRec(record, 'FA_TEMP_LOAN_EBAL');
                    record = SYS_setValToRec(record, 'FA_INV_LOAN_EBAL', loanbal);
                    mData.push(record);
                }
                SYS_reLoadGrid(_do, mData); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.ReturnFin_Settle_loan_FA_LOAN_PAID_AMT_onChange = function(ed, record, index, name) {
    try {
        var da; // Utility Auto Fix Comments
        var intChgType; // Utility Auto Fix Comments
        var loanbal; // Utility Auto Fix Comments
        var loanDueDt; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var oamt; // Utility Auto Fix Comments
        var pmtValDt; // Utility Auto Fix Comments
        var tempDo; // Utility Auto Fix Comments
        var v; // Utility Auto Fix Comments
        var vindex; // Utility Auto Fix Comments
        var vname; // Utility Auto Fix Comments
        debugger;
        tempDo = currentDo;
        record = ed.record;
        vindex = ed.row;
        vname = ed.field;
        mData = [];
        v = ed.value;
        da = record.data['FA_LOAN_INT_AMT'];
        loanbal = record.data['FA_TEMP_LOAN_EBAL'];
        intChgType = record.data['FA_INT_CHG_TYPE'];
        pmtValDt = document.MAINFORM.FA_PMT_VAL_DT.value;
        loanDueDt = record.data['FA_LOAN_DUE_DT'];
        loanDueDt = SYS_FormatDateObj(loanDueDt, SYS_DATE_FORMAT);
        oamt = record.data['FA_OVD_INT_EAMT'];
        //if (v > (da + oamt)) {
        /*if (v > da) {
    //record.data['FA_LOAN_IPAID_AMT'] = da+oamt;
    record.data['FA_LOAN_IPAID_AMT'] = da;
    record.data['FA_TEMP_AMT19'] = oamt;
    //if (((SYS_BeFloat(v) - SYS_BeFloat(da) - SYS_BeFloat(oamt)) - SYS_BeFloat(loanbal)) >= 0.01) {
    if ((SYS_BeFloat(v) - SYS_BeFloat(da) - SYS_BeFloat(loanbal)) >= 0.01) {
        alert('Paid loan amount cannot be more than loan balance');
        record.data['FA_LOAN_PPAID_AMT'] = 0;
        record.data['FA_LOAN_IPAID_AMT'] = 0;
        record.data['FA_TEMP_AMT19'] = 0;
        record.data['FA_INV_LOAN_EBAL'] = loanbal * 1000 / 1000;
        record.data['FA_LOAN_PAID_AMT'] = 0;

        //20080816
        v = 0;
    }
}
if (intChgType == '1' && pmtValDt < loanDueDt) {
    record.data['FA_LOAN_PPAID_AMT'] = v;
    record.data['FA_INV_LOAN_EBAL'] = loanbal - v;
    forReturnAmt(vindex, vname);
    return v;
} else {
    if (v > da) {
        record.data['FA_LOAN_IPAID_AMT'] = da;
        record.data['FA_LOAN_PPAID_AMT'] = v - da;
        record.data['FA_INV_LOAN_EBAL'] = loanbal - (v - da);
        forReturnAmt(vindex, vname);
        return v;
    } else {
        alert('The Paid Amont can not be less than interest! Please input it again!');
        return v;
    }
}*/
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
                record.data['FA_INV_LOAN_EBAL'] = loanbal * 1000 / 1000;
                record.data['FA_LOAN_PAID_AMT'] = 0;
                v = 0;
            } else {
                rs = dcmAdd(v, -da);
                //rs = dcmAdd(rs, -oamt);
                record.data['FA_LOAN_PPAID_AMT'] = SYS_BeFloat(rs);
            }
            if (Math.abs((v - da) - loanbal) < 0.01) {
                record.data['FA_INV_LOAN_EBAL'] = 0;
            } else {
                if (v != 0) {
                    rs = dcmAdd(v, -da);
                    //rs = dcmAdd(rs, -oamt);
                    rs = dcmAdd(loanbal, -rs); // Utility Auto Fix Comments
                    record.data['FA_INV_LOAN_EBAL'] = SYS_BeFloat(rs);
                }
            }
            forReturnAmt(index, name);
        } else if (da > 0 && v > 0) {
            alert('The payment amount must be more than the sum of interest and overdue interest amount!');
            record.data['FA_LOAN_PAID_AMT'] = 0;
            record.data['FA_LOAN_IPAID_AMT'] = 0;
            record.data['FA_LOAN_PPAID_AMT'] = 0;
            record.data['FA_TEMP_AMT19'] = 0;
            record.data['FA_INV_LOAN_EBAL'] = loanbal * 1000 / 1000;
            forReturnAmt(index, name);
            v = 0;
        } else {
            record.data['FA_LOAN_PAID_AMT'] = 0;
            record.data['FA_LOAN_IPAID_AMT'] = 0;
            record.data['FA_LOAN_PPAID_AMT'] = 0;
            record.data['FA_LOAN_INT_AMT'] = da;
            record.data['FA_TEMP_AMT19'] = 0;
            record.data['FA_INV_LOAN_EBAL'] = loanbal * 1000 / 1000;
            forReturnAmt(index, name);
            v = 0;
        }
        mData.push(record.data);
        var node = SYS_getDoByXpath('ReturnFin.Settle_loan');
        SYS_reLoadGrid(node, mData);
        forReturnAmt(index, name);
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.SYF_FAEF_getDOdata_ReturnFin_Settle_loan = function() {
    try {
        var node; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        node = SYS_getDoByXpath('ReturnFin.Settle_loan');
        recs = SYS_getRecords(node);
        SYS_GetDataForDO_S('SUBReturnFin');
        if (recs.length > 0) {
            SYT_ChangeFldClass(document.MAINFORM.FA_OVDUE_INT_RT, 'P');
            document.MAINFORM.FA_OVDUE_INT_RT.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
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
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
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
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.forReturnAmt = function(index, name) {
    try {
        var FA_INV_LOAN_EBAL; // Utility Auto Fix Comments
        var FA_INV_REFUND_INT; // Utility Auto Fix Comments
        var FA_LOAN_INT_AMT; // Utility Auto Fix Comments
        var FA_OVD_INT_AMT; // Utility Auto Fix Comments
        var FA_PMT_AMT; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('ReturnFin.Settle_loan'); // Utility Auto Fix Comments
        _do.setCurrInstance(index, name); // Utility Auto Fix Comments
        FA_PMT_AMT = SYS_getFieldSumValue(_do, "FA_LOAN_PPAID_AMT", 2); // Utility Auto Fix Comments
        FA_INV_REFUND_INT = SYS_getFieldSumValue(_do, "IA_Y_REFUND_INT", 2);
        //alert(FA_INV_REFUND_INT);
        FA_OVD_INT_AMT = SYS_getFieldSumValue(_do, "FA_OVD_INT_EAMT", 2); // Utility Auto Fix Comments
        if (document.MAINFORM.FA_INT_CHG_TYPE.value == '2') {
            FA_LOAN_INT_AMT = SYS_getFieldSumValue(_do, "FA_LOAN_IPAID_AMT", 2); // Utility Auto Fix Comments
            document.MAINFORM.FA_LOAN_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, FA_LOAN_INT_AMT);
        }
        //alert('sum:'+_value);
        document.MAINFORM.FA_PMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, FA_PMT_AMT);
        EEHtml.fireEvent(document.MAINFORM.FA_PMT_AMT, 'onchange');
        //alert('Pmtvalue'+FA_PMT_AMT);
        document.MAINFORM.FA_INV_REFUND_INT.value = FA_INV_REFUND_INT;
        document.MAINFORM.FA_INV_REFUND_INT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, FA_INV_REFUND_INT);
        document.MAINFORM.FA_OVD_INT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, FA_OVD_INT_AMT);
        FA_INV_LOAN_EBAL = SYS_getFieldSumValue(_do, "FA_INV_LOAN_EBAL", 2); // Utility Auto Fix Comments
        document.MAINFORM.FA_INV_LOAN_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, FA_INV_LOAN_EBAL);
        EEHtml.fireEvent(document.MAINFORM.FA_INV_LOAN_BAL, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.geteLOANBaseDay = function() {
    try {
        SYS_GetTableDataByRule_S('SSSS_FAEF_FinancingReturnLib_geteLOANBaseDay_0', '1', true);
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.inquiry_gapi = function() {
    try {
        //SYS_InqGapi('FAEF_ReturnFin_InqINT');
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.FA_DOC_BAL_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}
csDOScreenProto.FA_PMT_AMT_onchange = function(event) {
    try {
        if (CHECK_PMT_AMT()) {
            Cal_INV_LOAN_BAL();
            FA_RET_BAL();
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}

csDOScreenProto.FA_TEMP_AMT10_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_FinancingReturnLib.js", e);
    }
}