"path:SCRN/o2m/FAEF_InvTransfer.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CalCommChg = function() {
    try {
        var EFcommRT; // Utility Auto Fix Comments
        
		/*var IFcommRT; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            IFcommRT = SYS_getValueFromMain("FA_IF_COMM_RT");
            document.MAINFORM.FA_IF_COMM_AMT.value = SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value) * SYS_BeFloat(IFcommRT) / 100;
        }*/

        EFcommRT = SYS_getValueFromMain("FA_EF_COMM_RT");
        document.MAINFORM.FA_EF_COMM_AMT.value = SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value) * SYS_BeFloat(EFcommRT) / 100;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*CalCommChg", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*CancelCheck", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        FA_BA_FLG();
		//ADDED BY ILYAS -- CSME-RIYADH
        if (SYS_ORG_FUNCTION_NAME == 'InvoiceTransfer' || SYS_ORG_FUNCTION_NAME == 'ProcessInvoiceFromCE') {
            document.MAINFORM.FA_DOC_STATUS.value = 'TRF';
        } else if (SYS_ORG_FUNCTION_NAME == 'InvoiceTransfer_ME') {
            document.MAINFORM.FA_DOC_STATUS.value = 'Bank Approved';
        } else if (SYS_ORG_FUNCTION_NAME == 'ManualUploadInvoice') {
            document.MAINFORM.FA_DOC_STATUS.value = 'Active';
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*ConfirmBusinessCall", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (SYS_ORG_FUNCTION_NAME == 'InvoiceTransfer' || SYS_ORG_FUNCTION_NAME == 'InvoiceTransfer_ME' || SYS_ORG_FUNCTION_NAME == 'ManualUploadInvoice') {
            if (!checkINV_NO()) {
                return false;
            }
            if (!checkDocValDate()) {
                return false;
            }
            if (!chkIssueDT()) {
                return false;
            }
            if (!checkINV_NO_table()) {
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*ConfirmBusinessCheck", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*ConfirmBusinessCheckSave", e);
    }
}

csDOScreenProto.FA_BA_FLG = function() {
    try {
        var LMT_AMT; // Utility Auto Fix Comments
        var invduedate; // Utility Auto Fix Comments
        var trfdate; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        var vFA_BA_FLG; // Utility Auto Fix Comments
        LMT_AMT = SYS_getValueFromMain("FA_LMT_AMT");
        vFA_BA_FLG = SYS_getValueFromMain("FA_BA_FLG");
        type = SYS_getValueFromMain("FA_BUSI_TYPE");
        invduedate = getDate(SYS_DATE_FORMAT, document.MAINFORM.FA_DOC_DUE_DT.value);
        trfdate = getDate(SYS_DATE_FORMAT, document.MAINFORM.FA_TRF_DT.value);
        if (SYS_BeFloat(LMT_AMT) == 0 || (invduedate < trfdate) || FA_BA_FLG == '2') {
            document.MAINFORM.FA_BA_FLG.value = '2';
            document.MAINFORM.FA_INVAMT_IN_LMT.value = 0;
        } else {
            document.MAINFORM.FA_BA_FLG.value = '1';
            document.MAINFORM.FA_INVAMT_IN_LMT.value = document.MAINFORM.FA_DOC_AMT.value;
        }
        if (type != 'EF' && type != 'DF') {
            document.MAINFORM.FA_BA_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*FA_BA_FLG", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {

        var arrOptionV; // Utility Auto Fix Comments
        arrOptionV = ['1', '2', '3', '4', '5', '6'];
        SYS_FilterOptions('FA_PMT_COND', arrOptionV);

        if (SYS_ORG_FUNCTION_NAME == 'InvoiceTransfer_ME') {
            SYS_GetSubPageRefNo_S('SCF_INV_REF', setInvRef, '', 'InvRef', 'InvRef');
        } else {
            SYS_getDORefForDO('FAEF_INV_REF', setInvRef, '', 'InvRef', 'InvRef');
        }

		document.MAINFORM.FA_DOC_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_DOC_VAL_DT.value = SYS_BUSI_DATE;
		document.MAINFORM.FA_ANCHOR_ID.value = SYS_getValueFromMain('FA_ANCHOR_ID');
	    document.MAINFORM.FA_ANCHOR_NM.value = SYS_getValueFromMain('FA_ANCHOR_NM');
	    document.MAINFORM.FA_COUNTER_ID.value = SYS_getValueFromMain('FA_COUNTER_ID');
	    document.MAINFORM.FA_COUNTER_NM.value = SYS_getValueFromMain('FA_COUNTER_NM');
		document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYS_getValueFromMain('FA_EF_HAN_CHG_AMT');
		
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*InitValues", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_NAME != 'INVC_SCFEnquireCRN' && SYS_FUNCTION_NAME != 'INVC_SCFEnquireEvent') {
            document.MAINFORM.FA_DOC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_AMT.value);
            document.MAINFORM.FA_DOC_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_BAL.value);
            document.MAINFORM.FA_TEMP_DT1.value = SYS_getValueFromMain("FA_REQ_DT");
            document.MAINFORM.TEMP_DATE2.value = SYS_getValueFromMain("FA_AGM_DUE_DT");
            document.MAINFORM.TEMP_DATE3.value = SYS_getValueFromMain("FA_LMT_VAL_DT");
            document.MAINFORM.FA_LATEST_SHIP_DT.value = SYS_getValueFromMain("FA_LATEST_SHIP_DT");
            document.MAINFORM.FA_ORDER_NO.value = SYS_getValueFromMain("FA_ORDER_NO");
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
                document.MAINFORM.FA_PMT_COND.value = '1';
                SYT_ChangeFldClass_New('FA_PMT_COND', 'P');
            }
            document.MAINFORM.FA_PMT_TERMS.value = SYS_getValueFromMain("FA_TEMP4");
            document.MAINFORM.FA_SEL_ID.value = SYS_getValueFromMain("FA_SEL_ID");
            document.MAINFORM.FA_SEL_NM.value = SYS_getValueFromMain("FA_SEL_NM");
			getInvDueDate();
        }
        /*var type = SYS_getValueFromMain("FA_BUSI_TYPE");
        if (SYS_ORG_FUNCTION_NAME == 'InvoiceTransfer_ME') {
        	if (type == 'SF' || type == 'DD') {
            document.getElementById('SEL1').style.display = "none";
            document.getElementById('BUY1').style.display = "none";
            document.MAINFORM.FA_BUYER_ID.value = '';
            document.MAINFORM.FA_BUYER_NM.value = '';
            SYT_ChangeFldClass_New('FA_BUY_ID', 'P');
            SYT_ChangeFldClass_New('FA_BUY_NM', 'P');
            SYT_ChangeFldClass_New('FA_SELLER_ID', 'O');
            SYT_ChangeFldClass_New('FA_SELLER_NM', 'O');
        	} else if (type == 'RD') {
            document.getElementById('BUY1').style.display = "none";
            document.getElementById('SEL1').style.display = "none";
            document.MAINFORM.FA_SEL_ID.value = '';
            document.MAINFORM.FA_SEL_NM.value = '';
            SYT_ChangeFldClass_New('FA_SELLER_ID', 'P');
            SYT_ChangeFldClass_New('FA_SELLER_NM', 'P');
            SYT_ChangeFldClass_New('FA_BUY_ID', 'O');
            SYT_ChangeFldClass_New('FA_BUY_NM', 'O');
        	}
        }else{
        		
        }*/
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*PostconditionOnInit", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_NAME != 'INVC_SCFEnquireCRN' && SYS_FUNCTION_NAME != 'INVC_SCFEnquireEvent') {
            document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain("FA_BUSI_TYPE");
            document.MAINFORM.FSBC_REF.value = SYS_getValueFromMain("FA_SBR_REF");
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
                document.MAINFORM.FA_IF_HAN_CHG_CCY.value = SYS_getValueFromMain("FA_IF_HAN_CHG_CCY");
                document.MAINFORM.FA_IF_HAN_CHG_AMT.value = SYS_getValueFromMain("FA_IF_HAN_CHG_AMT");
                document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYS_getValueFromMain("FA_EF_HAN_CHG_AMT");
                document.MAINFORM.FA_IF_HAN_CHG_PAMT.value = SYS_getValueFromMain("FA_IF_HAN_CHG_PAMT");
                document.MAINFORM.FA_IF_COMM_RT.value = SYS_getValueFromMain("FA_IF_COMM_RT");
            }



            document.MAINFORM.FA_PMT_TERMS.value = SYS_getValueFromMain("FA_PMT_TERMS");
            document.MAINFORM.FA_DOC_CCY.value = SYS_getValueFromMain("FA_DOC_CCY");
            document.MAINFORM.FA_DOC_TYPE.value = SYS_getValueFromMain("FA_DOC_TYPE");
            document.MAINFORM.FA_BUYER_ID.value = SYS_getValueFromMain("FA_BUYER_ID");
            document.MAINFORM.FA_BUYER_NM.value = SYS_getValueFromMain("FA_BUYER_NM");
            document.MAINFORM.FA_EF_HAN_CHG_PAMT.value = SYS_getValueFromMain("FA_EF_HAN_CHG_PAMT");
            document.MAINFORM.FA_PRM_DISC_DAYS.value = SYS_getValueFromMain("FA_PRM_DISC_DAYS");
            document.MAINFORM.FA_PRM_DISC_RT.value = SYS_getValueFromMain("FA_PRM_DISC_RT");
            document.MAINFORM.FA_SND_DISC_DAYS.value = SYS_getValueFromMain("FA_SND_DISC_DAYS");
            document.MAINFORM.FA_SND_DISC_RT.value = SYS_getValueFromMain("FA_SND_DISC_RT");
            document.MAINFORM.FA_EF_HAN_CHG_CCY.value = SYS_getValueFromMain("FA_EF_HAN_CHG_CCY");
            document.MAINFORM.FA_EF_COMM_RT.value = SYS_getValueFromMain("FA_EF_COMM_RT");
			//ADDED BY ILYAS -- CSME-RIYADH
            if (SYS_ORG_FUNCTION_NAME == 'InvoiceTransfer' || SYS_ORG_FUNCTION_NAME == 'ProcessInvoiceFromCE') {
				document.MAINFORM.FA_DOC_STATUS.value = 'TRF';
			} else if (SYS_ORG_FUNCTION_NAME == 'InvoiceTransfer_ME') {
				document.MAINFORM.FA_DOC_STATUS.value = 'Bank Approved';
			} else if (SYS_ORG_FUNCTION_NAME == 'ManualUploadInvoice') {
				document.MAINFORM.FA_DOC_STATUS.value = 'Active';
			}
            document.MAINFORM.FA_IF_CHG_PAID_FLG.value = 'N';
            document.MAINFORM.FA_TRF_DT.value = SYS_getValueFromMain("FA_TRF_DT");
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*PreconditionOnInit", e);
    }
}

csDOScreenProto.ReferenceNumber = function() {
    try {
        document.MAINFORM.FA_CRN_INV_LINK_NO.value = document.MAINFORM.FA_DOC_NO.value;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*ReferenceNumber", e);
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
        DisExcpt("SSSS_FAEF_InvTransfer.js*calTotalInvoiceAmtandNO", e);
    }
}

csDOScreenProto.checkDocDate = function() {
    try {
        var subdays; // Utility Auto Fix Comments
        subdays = SYS_GetSubDays(document.MAINFORM.FA_DOC_VAL_DT.name, document.MAINFORM.FA_TEMP_DT1.name);
        if (subdays > 30) {
            SYS_CheckError(document.MAINFORM.FA_DOC_VAL_DT, "Please check Invoice value date!!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*checkDocDate", e);
    }
}

csDOScreenProto.checkDocValDate = function() {
    try {
        var subdays; // Utility Auto Fix Comments
        var subdays2; // Utility Auto Fix Comments
        subdays = SYS_GetSubDays(document.MAINFORM.TEMP_DATE2.name, document.MAINFORM.FA_DOC_VAL_DT.name);
        if (subdays > 0) {
            SYS_CheckError(document.MAINFORM.FA_DOC_VAL_DT, "Please check the invoice value date! It's later than agreement due date.");
            return false;
        }

        subdays2 = SYS_GetSubDays(document.MAINFORM.FA_TRF_DT.name, document.MAINFORM.FA_DOC_VAL_DT.name);
        if (subdays2 > 0) {
            SYS_CheckError(document.MAINFORM.FA_DOC_VAL_DT, "Can't assign invoice with a future value date! Please check your input for Invoice Value Date.");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*checkDocValDate", e);
    }
}

csDOScreenProto.checkINV_NO = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var editid; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var invNo; // Utility Auto Fix Comments
        var invNoFromSCR; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var recID; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        node = SYS_getDoByXpath('InvTRF');
        editid = node.grid.getSelectionModel().editRowId;
        invNoFromSCR = document.MAINFORM.FA_DOC_NO.value;
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            recID = SYS_getRecID(record);
            if (editid == recID) continue;
            invNo = SYS_getValFromRec(record, 'FA_DOC_NO');
            if (invNo == invNoFromSCR) {
                alert("Invoice No [" + invNo + "] cannot be duplicated!");
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
        DisExcpt("SSSS_FAEF_InvTransfer.js*checkINV_NO", e);
    }
}

csDOScreenProto.checkINV_NO_table = function() {
    try {
        document.MAINFORM.TEMP_CHAR6.value = '';
        document.MAINFORM.FA_SBR_REF.value = SYS_getValueFromMain("FA_SBR_REF");
        valueF = document.MAINFORM.FA_DOC_NO.value;
        valueFCUBK = valueF;
        SYS_GetTableDataByRule_S('SYF_FAEF_InvoiceTransfer_SYF_FAEF_Chk_ValDuplicate_0', '1', 'Y');
        if (document.MAINFORM.TEMP_CHAR6.value != '' && document.MAINFORM.TEMP_CHAR6.value != 'null') {
            alert("Document with number [" + valueF + "] is duplicated. It has been registered already.");
            document.MAINFORM.TEMP_CHAR6.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*checkINV_NO_table", e);
    }
}

csDOScreenProto.check_invduedate = function() {
    try {
        var subdays; // Utility Auto Fix Comments
        subdays = SYS_GetSubDays(document.MAINFORM.FA_DOC_VAL_DT.name, document.MAINFORM.FA_DOC_DT.name);
        if (subdays > 0) {
            SYS_CheckError(document.MAINFORM.FA_DOC_DT, 'The Invoice value date must be later than Invoice date!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*check_invduedate", e);
    }
}

csDOScreenProto.chkIssueDT = function() {
    try {
        var subdays; // Utility Auto Fix Comments
        //temp_date3 = FA_LMT_VAL_DT;
        subdays = SYS_GetSubDays(document.MAINFORM.FA_DOC_VAL_DT.name, document.MAINFORM.TEMP_DATE3.name);
        if (subdays > 30) {
            SYS_CheckError(document.MAINFORM.FA_DOC_VAL_DT, "Limit Value Date is " + document.MAINFORM.TEMP_DATE3.value + ". Invoice Value date can't precede Limit Value Date by more than 30 days.");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*chkIssueDT", e);
    }
}

csDOScreenProto.getInvDueDate = function() {
    try {
        var pmtTerms; // Utility Auto Fix Comments
        var valDate; // Utility Auto Fix Comments
        pmtTerms = document.MAINFORM.FA_PMT_TERMS.value;
        valDate = document.MAINFORM.FA_DOC_VAL_DT.value;
		if(pmtTerms > 0){
			SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, valDate, pmtTerms, setInvDueDate, 'A', 'N');
		} else {
			alert("payment terms is invalid");
		}
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*getInvDueDate", e);
    }
}

csDOScreenProto.setDocBalance = function() {
    try {
        document.MAINFORM.FA_DOC_BAL.value = document.MAINFORM.FA_DOC_AMT.value;
		//ADDED BY ILYAS -- CSME-RIYADH		
		document.MAINFORM.FA_ADJ_AMT.value = document.MAINFORM.FA_DOC_AMT.value;		
		document.MAINFORM.FA_ADJ_BAL.value = document.MAINFORM.FA_DOC_AMT.value;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*setDocBalance", e);
    }
}

csDOScreenProto.setInvDueDate = function(date) {
    try {
        document.MAINFORM.FA_DOC_DUE_DT.value = date;
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_DUE_DT, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*setInvDueDate", e);
    }
}

csDOScreenProto.setInvRef = function(ref) {
    try {
        if (SYS_ORG_FUNCTION_NAME == 'InvoiceTransfer_ME') {
            var UnitCode; // Utility Auto Fix Comments
            var date; // Utility Auto Fix Comments
            var pre; // Utility Auto Fix Comments
            var sub; // Utility Auto Fix Comments
            pre = document.MAINFORM.FA_BUSI_TYPE.value;
            UnitCode = SYS_BUSI_UNIT.substr(0, 2);
            date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
            year = date.substr(2, 2);
            month = date.substr(5, 2);
            day = date.substr(8, 2);
            var date1 = new Date(year, month, day);
            var date2 = new Date(year, 1, 1);
            var day = date1 - date2;
            var day = (date1 - date2) / 1000 / 60 / 60 / 24 + 1;
            sub = 'INV';
            document.MAINFORM.FA_DOC_REF.value = sub + UnitCode + year + day + ref;
            document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_DOC_REF.value;
            document.MAINFORM.FA_INV_LINK_REF.value = document.MAINFORM.FA_DOC_REF.value;
        } else {
            var UnitCode; // Utility Auto Fix Comments
            var date; // Utility Auto Fix Comments
            var pre; // Utility Auto Fix Comments
            var sub; // Utility Auto Fix Comments
            pre = document.MAINFORM.FA_BUSI_TYPE.value;
            UnitCode = SYS_BUSI_UNIT;
            date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
            year = date.substr(2, 2);
            month = date.substr(5, 2);
            sub = 'INV';
            document.MAINFORM.FA_DOC_REF.value = pre + UnitCode + year + month + ref + sub;
            document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_DOC_REF.value;
            document.MAINFORM.FA_INV_LINK_REF.value = document.MAINFORM.FA_DOC_REF.value;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*setInvRef", e);
    }
}

csDOScreenProto.window_onload = function() {
    try {} catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*window_onload", e);
    }
}

csDOScreenProto.FA_DOC_AMT_onchange = function() {
    try {
        var FA_DOC_AMT = SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value);
        if (FA_DOC_AMT < 0) {
            alert("Invoice Amount can not be negative!")
            document.MAINFORM.FA_DOC_AMT.value = '0';
        }
        setDocBalance();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_BAL, 'onchange');
        CalCommChg();
        document.MAINFORM.FA_DOC_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_AMT.value);
        if (SYS_ORG_FUNCTION_NAME == 'InvoiceTransfer_ME') {
            var CreditPercentage;
            var ccy;
            var Amt;
            var CreditAmount;
            CreditPercentage = SYS_getValueFromMain("FA_CREDIT_NOTE_PER");
            Amt = SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value);
            CreditAmount = (Amt * CreditPercentage) / 100;
            ccy = document.MAINFORM.FA_DOC_CCY.value;
            document.MAINFORM.FA_CREDIT_NOTE_PER_AMT.value = SYT_AmtFormat(ccy, CreditAmount);
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*FA_DOC_AMT_onchange", e);
    }
}

csDOScreenProto.FA_DOC_DT_onchange = function() {
    try {
        check_invduedate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*FA_DOC_DT_onchange", e);
    }
}

csDOScreenProto.FA_DOC_NO_onchange = function() {
    try {
        ReferenceNumber();
        document.MAINFORM.C_TRX_REF.value = document.MAINFORM.FA_DOC_NO.value;
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*FA_DOC_NO_onchange", e);
    }
}

csDOScreenProto.FA_DOC_VAL_DT_onchange = function() {
    try {
        getInvDueDate();
        check_invduedate();
        checkDocDate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*FA_DOC_VAL_DT_onchange", e);
    }
}

csDOScreenProto.FA_PMT_TERMS_onchange = function() {
    try {} catch (e) {
        DisExcpt("SSSS_FAEF_InvTransfer.js*FA_PMT_TERMS_onchange", e);
    }
}