"path:SCRN/o2m/FAEF_DFSUBInvTransfer.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CalCommChg = function() {
    try {
        var EFcommRT; // Utility Auto Fix Comments
        EFcommRT = SYS_getValueFromMain("FA_EF_COMM_RT");
        document.MAINFORM.FA_EF_COMM_AMT.value = SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value) * SYS_BeFloat(EFcommRT) / 100;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!checkINV_NO()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.FA_BA_FLG = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.TEMP_AMT9.value) == 0 || (document.MAINFORM.FA_DOC_DUE_DT.value < document.MAINFORM.FA_TRF_DT.value)) {
            document.MAINFORM.FA_BA_FLG.value = '2';
        } else {
            document.MAINFORM.FA_BA_FLG.value = '1';
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_DOC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_AMT.value);
        document.MAINFORM.FA_DOC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_BAL.value);
        document.MAINFORM.FA_TEMP_DT1.value = SYS_getValueFromMain("FA_REQ_DT");
        document.MAINFORM.TEMP_DATE2.value = SYS_getValueFromMain("FA_AGM_DUE_DT");
        document.MAINFORM.FA_LATEST_SHIP_DT.value = SYS_getValueFromMain("FA_LATEST_SHIP_DT");
        document.MAINFORM.FA_ORDER_NO.value = SYS_getValueFromMain("FA_ORDER_NO");
        document.MAINFORM.FA_STATE_MONTH.value = SYS_getValueFromMain("FA_STATE_MONTH");
        document.MAINFORM.FA_PMT_COND.value = '1';
        document.MAINFORM.TEMP_CHAR5.value = SYS_getValueFromMain("FA_TEMP3");
        document.MAINFORM.TEMP_AMT5.value = SYS_getValueFromMain("FA_LMT_BAL");
        if (SYS_FUNCTION_TYPE == 'EC' && SYS_ERROR == "") {
            initEC();
        }

    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        SYS_GetSubPageRefNo('FAEF_INV_REF', setInvRef, '', 'InvRef');
        document.MAINFORM.FA_PMT_TERMS.value = SYS_getValueFromMain("FA_TEMP4");
        document.MAINFORM.FA_DOC_CCY.value = SYS_getValueFromMain("FA_DOC_CCY");
        document.MAINFORM.FA_BUYER_ID.value = SYS_getValueFromMain("FA_BUYER_ID");
        document.MAINFORM.FA_BUYER_NM.value = SYS_getValueFromMain("FA_BUYER_NM");
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYS_getValueFromMain("FA_EF_HAN_CHG_AMT");
        document.MAINFORM.FA_PRM_DISC_DAYS.value = SYS_getValueFromMain("FA_PRM_DISC_DAYS");
        document.MAINFORM.FA_PRM_DISC_RT.value = SYS_getValueFromMain("FA_PRM_DISC_RT");
        document.MAINFORM.FA_SND_DISC_DAYS.value = SYS_getValueFromMain("FA_SND_DISC_DAYS");
        document.MAINFORM.FA_SND_DISC_RT.value = SYS_getValueFromMain("FA_SND_DISC_RT");
        document.MAINFORM.FA_DOC_STATUS.value = 'TRF';
        document.MAINFORM.FA_EF_HAN_CHG_CCY.value = SYS_getValueFromMain("FA_EF_HAN_CHG_CCY");
        document.MAINFORM.FA_TRF_DT.value = SYS_getValueFromMain("FA_TRF_DT");
        document.MAINFORM.FA_EF_COMM_RT.value = SYS_getValueFromMain("FA_EF_COMM_RT");
        document.MAINFORM.TEMP_AMT9.value = SYS_getValueFromMain("FA_LMT_AMT");
        document.MAINFORM.FA_TEMP_AMT8.value = 1; //for calcualtion of total invoice numbers
        document.MAINFORM.FA_STATE_MONTH.value = SYS_getValueFromMain("FA_STATE_MONTH");
        document.MAINFORM.TEMP_CHAR5.value = SYS_getValueFromMain("FA_TEMP3");
        document.MAINFORM.TEMP_AMT5.value = SYS_getValueFromMain("FA_LMT_BAL");
        document.MAINFORM.FA_COMM_CHG_TYPE.value = SYS_getValueFromMain("FA_COMM_CHG_TYPE");
        FA_BA_FLG();
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.ReferenceNumber = function() {
    try {
        document.MAINFORM.FA_CRN_INV_LINK_NO.value = document.MAINFORM.FA_DOC_NO.value;
        document.MAINFORM.FA_INV_LINK_REF.value = document.MAINFORM.FA_DOC_REF.value;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.calTotalInvoiceAmtandNO = function() {
    try {
        var docAmt; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("InvTRF"); //grid.getRowCount();
        SYS_setValueToMain("FA_TTL_INV_NO", num);
        docAmt = SYS_getFieldSumValue(node, "FA_DOC_AMT", 2);
        SYS_setValueToMain("FA_TTL_INV_AMT", docAmt);
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.checkDocDate = function() {
    try {
        var subdays; // Utility Auto Fix Comments
        subdays = SYS_GetSubDays(document.MAINFORM.FA_DOC_VAL_DT.name, document.MAINFORM.FA_TEMP_DT1.name);
        if (subdays > 30) {
            SYS_CheckError(document.MAINFORM.FA_DOC_VAL_DT, "Please check Invoice DOC_VAL_DT!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.checkINV_NO = function() {
    try {
        var arrayRecord; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var invNo; // Utility Auto Fix Comments
        var invNoFromSCR; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        //get edit Record id -s
        id = -1;
        arrayRecord = SYS_getEditRecord(opener.currentDo);
        if (arrayRecord) {
            id = arrayRecord[arrayRecord.length - 2];
        }
        //-e
        invNoFromSCR = document.MAINFORM.FA_DOC_NO.value;
        arrayvalue = SYS_getRecords(opener.currentDo);
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            invNo = SYS_getValFromRec(record, 'FA_DOC_NO');
            if (invNo == invNoFromSCR) {
                alert("Invoice No [" + invNo + "] cannot be duplicated!");
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.checkInvValDate = function() {
    try {
        if (document.MAINFORM.FA_DOC_VAL_DT.value < document.MAINFORM.FA_LATEST_SHIP_DT.value) {
            SYS_CheckError(document.MAINFORM.FA_DOC_VAL_DT, "The last shipment date must be later than Invoice value date!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.check_invduedate = function() {
    try {
        if (document.MAINFORM.FA_DOC_VAL_DT.value != '' && document.MAINFORM.FA_DOC_DT.value != '' && document.MAINFORM.FA_DOC_VAL_DT.value < document.MAINFORM.FA_DOC_DT.value) {
            SYS_CheckError(document.MAINFORM.FA_DOC_DT, 'The Invoice value date must be later than Invoice date!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.checkdocvaldate = function() {
    try {
        var subdays; // Utility Auto Fix Comments
        subdays = SYS_GetSubDays(document.MAINFORM.TEMP_DATE2.name, document.MAINFORM.FA_DOC_VAL_DT.name);
        if (subdays > 0) {
            SYS_CheckError(document.MAINFORM.FA_DOC_VAL_DT, "Please check the invoice value date!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.getInvDueDate = function() {
    try {
        var pmtTerms; // Utility Auto Fix Comments
        var valDate; // Utility Auto Fix Comments
        pmtTerms = document.MAINFORM.FA_PMT_TERMS.value;
        valDate = document.MAINFORM.FA_DOC_VAL_DT.value;
        SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, valDate, pmtTerms, setInvDueDate, 'A', 'N');
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.setDocBalance = function() {
    try {
        document.MAINFORM.FA_DOC_BAL.value = document.MAINFORM.FA_DOC_AMT.value;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.setInvDueDate = function(date) {
    try {
        document.MAINFORM.FA_DOC_DUE_DT.value = date;
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_DUE_DT, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.setInvRef = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = 'EF';
        UnitCode = SYS_BUSI_UNIT;
        UnitCode = UnitCode.substr(0, 5);
        year = SYS_BUSI_DATE;
        year = year.substr(2, 2);
        sub = 'INV';
        //document.MAINFORM.FA_DOC_REF.value=pre+UnitCode+year+ref+sub;
        document.MAINFORM.FA_DOC_REF.value = pre + year + ref + sub; //by TJ20081017
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.FA_DOC_AMT_onchange = function(event) {
    try {
        setDocBalance();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_BAL, 'onchange');
        CalCommChg();
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.FA_DOC_DT_onchange = function(event) {
    try {
        check_invduedate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.FA_DOC_DUE_DT_onchange = function(event) {
    try {
        FA_BA_FLG();
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.FA_DOC_NO_onchange = function(event) {
    try {
        ReferenceNumber();
        document.MAINFORM.C_TRX_REF.value = document.MAINFORM.FA_DOC_NO.value;
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}

csDOScreenProto.FA_DOC_VAL_DT_onchange = function(event) {
    try {
        getInvDueDate();
        check_invduedate();
        checkDocDate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_DFSUBInvTransfer.js", e);
    }
}