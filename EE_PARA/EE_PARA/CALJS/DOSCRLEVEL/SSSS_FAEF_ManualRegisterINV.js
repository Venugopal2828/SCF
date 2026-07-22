"path:SCRN/o2m/FAEF_ManualRegisterINV.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.PreconditionOnInit = function() {
    try {
        document.MAINFORM.FA_PMT_TERMS.value = SYS_getValueFromMain("FA_PMT_TERMS");
        document.MAINFORM.FA_BUYER_ID.value = SYS_getValueFromMain("FA_BUYER_ID");
        document.MAINFORM.FA_BUYER_NM.value = SYS_getValueFromMain("FA_BUYER_NM");
        document.MAINFORM.FA_CUST_REG_NO.value = SYS_getValueFromMain("FA_CUST_REG_NO");
        document.MAINFORM.FA_ANCHOR_ID.value = SYS_getValueFromMain("FA_ANCHOR_ID");
        document.MAINFORM.FA_ANCHOR_NM.value = SYS_getValueFromMain("FA_ANCHOR_NM");
        document.MAINFORM.FA_COUNTER_REG_NO.value = SYS_getValueFromMain("FA_COUNTER_REG_NO");
        document.MAINFORM.FA_COUNTER_NM.value = SYS_getValueFromMain("FA_COUNTER_NM");
        document.MAINFORM.FSBC_REF.value = SYS_getValueFromMain("FA_SBR_REF");
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain("FA_BUSI_TYPE");
        document.MAINFORM.FA_DOC_CCY.value = SYS_getValueFromMain("FA_LMT_CCY");
        document.MAINFORM.FA_DOC_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_AMT.value);
        document.MAINFORM.FA_TRF_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.TEMP_DATE2.value = SYS_getValueFromMain("FA_LMT_DUE_DT");
        var arrOptionV;
        arrOptionV = ['1', '2', '3'];
        SYS_FilterOptions('FA_DOC_TYPE', arrOptionV);
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterINV.js*PreconditionOnInit", e);
    }
}

csDOScreenProto.checkINV_NO = function() {
    try {
        var arrayvalue;
        var editid;
        var i;
        var invNo;
        var invNoFromSCR;
        var node;
        var recID;
        var record;
        node = SYS_getDoByXpath('ManualRegisterINV');
        editid = node.grid.getSelectionModel().editRowId;
        invNoFromSCR = document.MAINFORM.FA_DOC_NO.value;
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            recID = SYS_getRecID(record);
            if (editid == recID) continue;
            invNo = SYS_getValFromRec(record, 'FA_DOC_NO');
            if (invNo == invNoFromSCR) {
                alert("Invoice No [" + invNo + "] cannot be duplicated!");
                document.MAINFORM.FA_DOC_NO.value = '';
                return false;
            }
        }
        return true;

        valueFCUBK = invNoFromSCR;
        SYS_GetTableDataByRule_S('SYF_FAEF_InvoiceTransfer_SYF_FAEF_Chk_ValDuplicate_0', '1', 'Y');
        if (document.MAINFORM.TEMP_CHAR6.value != '' && document.MAINFORM.TEMP_CHAR6.value != 'null') {
            alert("Document with number [" + invNoFromSCR + "] is duplicated. It has been registered already.");
            document.MAINFORM.TEMP_CHAR6.value = '';
            return false;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterINV.js*checkINV_NO", e);
    }
}

csDOScreenProto.check_invduedate = function() {
    try {
        var tp = document.MAINFORM.FA_DOC_TYPE.value;
        var terms = document.MAINFORM.FA_PMT_TERMS.value;
        if (tp == '1') {
            var subdays;
            subdays = SYS_GetSubDays(document.MAINFORM.FA_DOC_VAL_DT.name, document.MAINFORM.FA_DOC_DT.name);
            if (subdays > 0) {
                SYS_CheckError(document.MAINFORM.FA_DOC_DT, 'The Invoice value date must be later than Invoice date!');
                document.MAINFORM.FA_DOC_VAL_DT.value = '';
                return false;
            }
            
        var subdays = SYS_GetSubDays(document.MAINFORM.TEMP_DATE2.name, document.MAINFORM.FA_DOC_DUE_DT.name);
        if (subdays > 0) {
            SYS_CheckError(document.MAINFORM.FA_DOC_DUE_DT, "Please check the invoice due date! It's later than SBR due date.");
            document.MAINFORM.FA_DOC_DUE_DT.value = '';
            return false;
        }
        
        var Invdays = SYS_GetSubDays(document.MAINFORM.FA_DOC_VAL_DT.name, document.MAINFORM.FA_DOC_DUE_DT.name);
       if (Invdays > terms) {
       	     SYS_CheckError(document.MAINFORM.FA_DOC_DUE_DT, "Please check the invoice due date! It's later than payment terms setting.");
            document.MAINFORM.FA_DOC_DUE_DT.value = '';
            return false;
        	
        }

            return true;
        }
        if (tp == '2' || tp == '3') {
            var cdays; // Utility Auto Fix Comments
            var cdays1; // Utility Auto Fix Comments
            cdays = SYS_GetSubDays(document.MAINFORM.FA_DOC_VAL_DT.name, document.MAINFORM.FA_TEMP_DT1.name);
            if (cdays > 0) {
                alert("The Credit Notes value date can't be earlier than the Invoice value date!");
                document.MAINFORM.FA_DOC_VAL_DT.value = '';
                return false;
            } else {
                return true;
            }
            cdays1 = SYS_GetSubDays(document.MAINFORM.FA_DOC_VAL_DT.name, document.MAINFORM.FA_DOC_DUE_DT.name);
            if (cdays1 < 0) {
                alert("The Credit Notes value date can't be later than Credit Note Due Date!");
                document.MAINFORM.FA_DOC_VAL_DT.value = '';
                return false;
            } else {
                return true;
            }
            
            

        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterINV.js*check_invduedate", e);
    }
}

csDOScreenProto.getInvDueDate = function() {
    try {
        var pmtTerms;
        var valDate;
        var country;
        pmtTerms = document.MAINFORM.FA_PMT_TERMS.value;
        valDate = document.MAINFORM.FA_DOC_VAL_DT.value;
        country = SYS_BANK_COUNTRY;
        if (pmtTerms > 0) {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, valDate, pmtTerms, setInvDueDate, 'A', 'N');
        } else {
            alert("payment terms is invalid");
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterINV.js*getInvDueDate", e);
    }
}

csDOScreenProto.setInvDueDate = function(date) {
    try {
        document.MAINFORM.FA_DOC_DUE_DT.value = date;
        //EEHtml.fireEvent(document.MAINFORM.FA_DOC_DUE_DT, 'onchange');
       /* var subdays = SYS_GetSubDays(document.MAINFORM.TEMP_DATE2.name, document.MAINFORM.FA_DOC_DUE_DT.name);
        if (subdays > 0) {
            SYS_CheckError(document.MAINFORM.FA_DOC_DUE_DT, "Please check the invoice due date! It's later than SBR due date.");
            document.MAINFORM.FA_DOC_DUE_DT.value = '';
            return false;
        }
        return true;*/
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterINV.js*setInvDueDate", e);
    }
}

csDOScreenProto.FA_DOC_AMT_onchange = function() {
    try {
        var FA_DOC_AMT = SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value);
        if (FA_DOC_AMT < 0) {
            alert("Invoice Amount can not be negative!")
            document.MAINFORM.FA_DOC_AMT.value = '0';
        }

        var tp = document.MAINFORM.FA_DOC_TYPE.value;
        if (tp == '2' || tp == '3') {
            var AMT; // Utility Auto Fix Comments
            var AMT1; // Utility Auto Fix Comments
            var AMT2; // Utility Auto Fix Comments
            var AMT3; // Utility Auto Fix Comments
            AMT1 = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT12.value);
            AMT2 = SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value);
            if (AMT2 > AMT) {
                SYS_CheckError(document.MAINFORM.FA_DOC_AMT, 'Credit Note Amount cannot exceed the Invoice Balance!');
                return false;
            }
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterINV.js*FA_DOC_AMT_onchange", e);
    }
}

csDOScreenProto.FA_DOC_DT_onchange = function() {
    try {
     check_invduedate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterINV.js*FA_DOC_DT_onchange", e);
    }
}

csDOScreenProto.FA_DOC_DUE_DT_onchange = function() {
    try {
     // setInvDueDate();
     check_invduedate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterINV.js*FA_DOC_DUE_DT_onchange", e);
    }
}

csDOScreenProto.FA_DOC_NO_onchange = function() {
    try {
        checkINV_NO();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterINV.js*FA_DOC_NO_onchange", e);
    }
}

csDOScreenProto.FA_DOC_TYPE_onchange = function() {
    try {
        var tp = document.MAINFORM.FA_DOC_TYPE.value;
        var busi = document.MAINFORM.FA_BUSI_TYPE.value;
        if (tp == '2' || tp == '3') {
            SYT_ChangeFldClass(document.MAINFORM.FA_CRN_INV_LINK_NO, 'M');
            document.MAINFORM.INQ_INV.style.visibility = 'visible';
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_CRN_INV_LINK_NO, 'P');
            document.MAINFORM.FA_CRN_INV_LINK_NO.value = '';
            document.MAINFORM.INQ_INV.style.visibility = 'hidden';
        }
        if (busi == 'POF' && tp == '1') {
            SYT_ChangeFldClass(document.MAINFORM.PO_NO, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PO_NO, 'P');
            document.MAINFORM.PO_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterINV.js*FA_DOC_TYPE_onchange", e);
    }
}

csDOScreenProto.FA_DOC_VAL_DT_onchange = function() {
    try {
       getInvDueDate();
      check_invduedate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterINV.js*FA_DOC_VAL_DT_onchange", e);
    }
}

csDOScreenProto.INQ_INV_onclick = function() {
    try {
        SYS_InqCUBK_byCondition('CRN_LINK_INV', '1');
    } catch (e) {
        DisExcpt("SSSS_FAEF_ManualRegisterINV.js*INQ_INV_onclick", e);
    }
}