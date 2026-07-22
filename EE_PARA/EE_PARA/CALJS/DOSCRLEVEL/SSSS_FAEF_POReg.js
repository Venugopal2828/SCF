"path:SCRN/o2m/FAEF_POReg.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CalCommChg = function() {
    try {
        var commRT; // Utility Auto Fix Comments
        commRT = SYS_getValueFromMain("FA_EF_COMM_RT");
        document.MAINFORM.FA_EF_COMM_AMT.value = SYS_BeFloat(document.MAINFORM.PO_AMT.value) * SYS_BeFloat(commRT) / 100;
    } catch (e) {
        DisExcpt("SSSS_FAEF_POReg.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (SYS_ORG_FUNCTION_NAME == 'PORegistration') {
            if (!checkPO_NO()) {
                return false;
            }
        }
        if (!checkPOValDate()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_POReg.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        SYS_GetSubPageRefNo_S('FAEF_INV_REF', setPORef, '', 'InvRef', 'InvRef');
    } catch (e) {
        DisExcpt("SSSS_FAEF_POReg.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain("FA_BUSI_TYPE");
        document.MAINFORM.FA_SBR_REF.value = SYS_getValueFromMain("FA_SBR_REF");
        document.MAINFORM.FA_PMT_TERMS.value = SYS_getValueFromMain("FA_TEMP4");
        document.MAINFORM.PO_CCY.value = SYS_getValueFromMain("PO_CCY");
        document.MAINFORM.FA_BUYER_ID.value = SYS_getValueFromMain("FA_BUYER_ID");
        document.MAINFORM.FA_BUYER_NM.value = SYS_getValueFromMain("FA_BUYER_NM");
        document.MAINFORM.FA_SEL_ID.value = SYS_getValueFromMain("FA_SEL_ID");
        document.MAINFORM.FA_SEL_NM.value = SYS_getValueFromMain("FA_SEL_NM");
		document.MAINFORM.FA_ANCHOR_ID.value = SYS_getValueFromMain("FA_ANCHOR_ID");
		
		document.MAINFORM.FA_COUNTER_REG_NO.value = SYS_getValueFromMain("FA_COUNTER_REG_NO");
		document.MAINFORM.FA_COUNTER_ID.value = SYS_getValueFromMain("FA_COUNTER_ID");
		document.MAINFORM.FA_COUNTER_NM.value = SYS_getValueFromMain("FA_COUNTER_NM");
		document.MAINFORM.FA_ANCHOR_NM.value = SYS_getValueFromMain("FA_ANCHOR_NM");
		document.MAINFORM.FA_REQ_BUYER_APR_FLG.value = SYS_getValueFromMain("FA_REQ_BUYER_APR_FLG");
  
		document.MAINFORM.PO_MAX_LOAN_PERC.value = SYS_getValueFromMain("PO_MAX_LOAN_PERC");
		document.MAINFORM.FA_DOC_TYPE.value = '8';
		
        document.MAINFORM.FA_EF_HAN_CHG_PAMT.value = SYS_getValueFromMain("FA_EF_HAN_CHG_PAMT");
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYS_getValueFromMain("FA_EF_HAN_CHG_AMT");
        document.MAINFORM.FA_EF_HAN_CHG_CCY.value = SYS_getValueFromMain("FA_EF_HAN_CHG_CCY");
        document.MAINFORM.FA_EF_COMM_RT.value = SYS_getValueFromMain("FA_EF_COMM_RT");
												  
		document.MAINFORM.TRX_DT.value = SYS_getValueFromMain("TRX_DT");
        document.MAINFORM.FA_LATEST_SHIP_DT.value = SYS_getValueFromMain("FA_LATEST_SHIP_DT");
        document.MAINFORM.FA_CNTR_REF.value = SYS_getValueFromMain("FA_CNTR_REF");
        document.MAINFORM.TEMP_DATE2.value = SYS_getValueFromMain("FA_AGM_DUE_DT");
        document.MAINFORM.FA_PMT_GRC_DAY.value = 0;
        document.MAINFORM.PO_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.PO_AMT.value);
		
		
		var FA_ACK_FLG = SYS_getValueFromMain("FA_ACK_FLG");
		
		if((FA_ACK_FLG=="Yes")&&(document.MAINFORM.FA_REQ_BUYER_APR_FLG.value=="1"))
		{
			document.MAINFORM.PO_STATUS.value = 'Pending';
		}
		else if((FA_ACK_FLG=="Yes")&&(document.MAINFORM.FA_REQ_BUYER_APR_FLG.value=="2"))
		{
			document.MAINFORM.PO_STATUS.value = 'Active';
		}
		else if(FA_ACK_FLG=="No")
		{
			document.MAINFORM.PO_STATUS.value = 'Need Acknowledged';
		}
    } catch (e) {
        DisExcpt("SSSS_FAEF_POReg.js", e);
    }
}

csDOScreenProto.checkPOValDate = function() {
    try {
        var subdays; // Utility Auto Fix Comments
        var subdays1; // Utility Auto Fix Comments
        subdays = SYS_GetSubDays(document.MAINFORM.TEMP_DATE2.name, document.MAINFORM.PO_VAL_DT.name);
        if (subdays > 0) {
            SYS_CheckError(document.MAINFORM.PO_VAL_DT, "Please check the PO value date! It's later than agreement due date.");
            return false;
        }

        subdays1 = SYS_GetSubDays(document.MAINFORM.PO_VAL_DT.name, document.MAINFORM.PO_DT.name);
        if (subdays1 > 0) {
            SYS_CheckError(document.MAINFORM.PO_DT, 'The PO value date must be later than PO date!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_POReg.js", e);
    }
}

csDOScreenProto.checkPO_NO = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var editid; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var PONo; // Utility Auto Fix Comments
        var PONoFromSCR; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var recID; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath('PORegister');
        editid = node.grid.getSelectionModel().editRowId;
        PONoFromSCR = document.MAINFORM.PO_NO.value;
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            recID = SYS_getRecID(record);
            if (editid == recID) {
                PONo = SYS_getValFromRec(record, 'PO_NO');
                if (PONo == PONoFromSCR) {
                    alert("PO No [" + PONo + "] cannot be duplicated!");
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_POReg.js", e);
    }
}

csDOScreenProto.getPODueDate = function() {
    try {
        var pmtTerms; // Utility Auto Fix Comments
        var valDate; // Utility Auto Fix Comments
        pmtTerms = document.MAINFORM.FA_PMT_TERMS.value;
        valDate = document.MAINFORM.PO_VAL_DT.value;
        SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, valDate, pmtTerms, setPODueDate, 'A', 'N');
    } catch (e) {
        DisExcpt("SSSS_FAEF_POReg.js", e);
    }
}

csDOScreenProto.setPODueDate = function(date) {
    try {
        document.MAINFORM.PO_DUE_DT.value = date;
        EEHtml.fireEvent(document.MAINFORM.PO_DUE_DT, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_FAEF_POReg.js", e);
    }
}

csDOScreenProto.setPORef = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'PO';
        document.MAINFORM.PO_REF.value = pre + UnitCode + year + month + ref + sub;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.PO_REF.value;
    } catch (e) {
        DisExcpt("SSSS_FAEF_POReg.js", e);
    }
}

csDOScreenProto.PO_AMT_onchange = function(event) {
    try {
		
		CalCommChg();
		poloanavail();
        document.MAINFORM.PO_AMT.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.PO_AMT.value);
		document.MAINFORM.PO_BAL.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, document.MAINFORM.PO_AMT.value);
		
    } catch (e) {
        DisExcpt("SSSS_FAEF_POReg.js", e);
    }
}

csDOScreenProto.poloanavail = function() {
    try {
        var PO_LOAN_AVL=(SYS_BeFloat(document.MAINFORM.PO_AMT.value)*SYS_BeFloat(document.MAINFORM.PO_MAX_LOAN_PERC.value))/100;
		document.MAINFORM.PO_LOAN_AVL.value = SYT_AmtFormat(document.MAINFORM.PO_CCY.value, PO_LOAN_AVL);
    } catch (e) {
        DisExcpt("SSSS_FAEF_POReg.js", e);
    }
}


csDOScreenProto.PO_VAL_DT_onchange = function(event) {
    try {
        getPODueDate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_POReg.js", e);
    }
}