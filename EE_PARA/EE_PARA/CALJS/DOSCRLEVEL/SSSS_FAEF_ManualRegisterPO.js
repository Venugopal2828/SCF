"path:SCRN/o2m/FAEF_ManualRegisterPO.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!checkPOValDate()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterPO.js*ConfirmBusinessCheck", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain("FA_BUSI_TYPE");
        document.MAINFORM.FA_SBR_REF.value = SYS_getValueFromMain("FA_SBR_REF");
        document.MAINFORM.FA_PMT_TERMS.value = SYS_getValueFromMain("FA_PMT_TERMS");
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUYER_ID.value = SYS_getValueFromMain("FA_BUYER_ID");
        document.MAINFORM.FA_BUYER_NM.value = SYS_getValueFromMain("FA_BUYER_NM");
        document.MAINFORM.FA_SEL_ID.value = SYS_getValueFromMain("FA_SEL_ID");
        document.MAINFORM.FA_SEL_NM.value = SYS_getValueFromMain("FA_SEL_NM");
        document.MAINFORM.FA_ANCHOR_ID.value = SYS_getValueFromMain("FA_ANCHOR_ID");
        document.MAINFORM.FA_CUST_REG_NO.value = SYS_getValueFromMain("FA_CUST_REG_NO");
        document.MAINFORM.FA_COUNTER_REG_NO.value = SYS_getValueFromMain("FA_COUNTER_REG_NO");
        document.MAINFORM.FA_COUNTER_ID.value = SYS_getValueFromMain("FA_COUNTER_ID");
        document.MAINFORM.FA_COUNTER_NM.value = SYS_getValueFromMain("FA_COUNTER_NM");
        document.MAINFORM.FA_ANCHOR_NM.value = SYS_getValueFromMain("FA_ANCHOR_NM");
        document.MAINFORM.FA_REQ_BUYER_APR_FLG.value = SYS_getValueFromMain("FA_REQ_BUYER_APR_FLG");
        document.MAINFORM.PO_MAX_LOAN_PERC.value = SYS_getValueFromMain("PO_MAX_LOAN_PERC");
        document.MAINFORM.FA_DOC_TYPE.value = '8';
        document.MAINFORM.PO_CCY.value = SYS_getValueFromMain("PO_CCY");
        document.MAINFORM.PO_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.PO_AMT.value);
        document.MAINFORM.TEMP_DATE2.value = SYS_getValueFromMain("FA_LMT_DUE_DT");
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterPO.js*InitValues", e);
    }
}

csDOScreenProto.checkPOValDate = function() {
    try {
        var subdays;
        var subdays1;
        var subdays2;
        subdays = SYS_GetSubDays(document.MAINFORM.TEMP_DATE2.name, document.MAINFORM.PO_VAL_DT.name);
        if (subdays > 0) {
            SYS_CheckError(document.MAINFORM.PO_VAL_DT, "Please check the PO value date! It's later than SBR due date.");
            return false;
        }

        subdays1 = SYS_GetSubDays(document.MAINFORM.PO_VAL_DT.name, document.MAINFORM.PO_DT.name);
        if (subdays1 > 0) {
            SYS_CheckError(document.MAINFORM.PO_DT, "The PO value date must be later than PO date!");
            return false;
        }
        
        subdays2 = SYS_GetSubDays(document.MAINFORM.TEMP_DATE2.name, document.MAINFORM.FA_LATEST_SHIP_DT.name);
        if (subdays2 > 0) {
            SYS_CheckError(document.MAINFORM.FA_LATEST_SHIP_DT, "Please check the Latest shipment date! It's later than SBR due date.");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterPO.js*checkPOValDate", e);
    }
}

csDOScreenProto.checkPO_NO = function() {
    try {
        var arrayvalue;
        var editid;
        var i;
        var PONo;
        var PONoFromSCR;
        var node;
        var recID;
        var record;
        node = SYS_getDoByXpath('ManualRegisterPO');
        editid = node.grid.getSelectionModel().editRowId;
        PONoFromSCR = document.MAINFORM.PO_NO.value;
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            recID = SYS_getRecID(record);
            PONo = SYS_getValFromRec(record, 'PO_NO');
            if (PONo == PONoFromSCR) {
                alert("PO No [" + PONo + "] cannot be duplicated!");
                document.MAINFORM.PO_NO.value = '';
                return false;
            }

        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterPO.js*checkPO_NO", e);
    }
}

csDOScreenProto.getPODueDate = function() {
    try {
        var pmtTerms;
        var valDate;
        var country;
        pmtTerms = document.MAINFORM.FA_PMT_TERMS.value;
        valDate = document.MAINFORM.PO_VAL_DT.value;
        country = SYS_BANK_COUNTRY;
        SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, valDate, pmtTerms, setPODueDate, 'A', 'N');
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterPO.js*getPODueDate", e);
    }
}

csDOScreenProto.setPODueDate = function(date) {
    try {
       // document.MAINFORM.PO_DUE_DT.value = date;
       // EEHtml.fireEvent(document.MAINFORM.PO_DUE_DT, 'onchange');
        
                var subdays = SYS_GetSubDays(document.MAINFORM.TEMP_DATE2.name, document.MAINFORM.PO_DUE_DT.name);
        if (subdays > 0) {
            SYS_CheckError(document.MAINFORM.PO_DUE_DT, "Please check the PO due date! It's later than SBR due date.");
            document.MAINFORM.PO_DUE_DT.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterPO.js*setPODueDate", e);
    }
}

csDOScreenProto.PO_NO_onchange = function() {
    try {
        checkPO_NO();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterPO.js*PO_NO_onchange", e);
    }
}

csDOScreenProto.PO_VAL_DT_onchange = function() {
    try {
        //getPODueDate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterPO.js*PO_VAL_DT_onchange", e);
    }
}


csDOScreenProto.PO_DUE_DT_onchange = function() {
    try {
        setPODueDate();
        checkPOValDate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterPO.js*PODUE_DT_onchange", e);
    }
}