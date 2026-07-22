"path:SCRN/o2m/FAEF_CreditNotesTransfer.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CCY_AMT = function() {
    try {
        document.MAINFORM.FA_TEMP_AMT11.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_AMT11.value);
        document.MAINFORM.FA_TEMP_AMT12.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_AMT12.value);
        document.MAINFORM.FA_FIN_LOAN_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_FIN_LOAN_AMT.value);
        document.MAINFORM.FA_TEMP_LOAN_IBAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_LOAN_IBAL.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.CHECK_FA_DOC_NO = function() {
    try {
        var name1; // Utility Auto Fix Comments
        var name2; // Utility Auto Fix Comments
        name1 = document.MAINFORM.FA_CRN_INV_LINK_NO.value;
        name2 = document.MAINFORM.FA_DOC_NO.value;

        if (name1 == name2) {

            SYS_CheckError(document.MAINFORM.FA_DOC_NO, "Credit Note Number can't be the same with Invoice Number!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.CRN_INQ_INV = function() {
    try {
        //SYS_InqCUBK_byCondition('CRN_INQ_INV', '1');

        if (SYS_ORG_FUNCTION_NAME == 'CreditNotesTransfer_ME') {
            SYS_InqCUBK_byCondition('CRN_INQ_INV_ME', '1');
        } else {
            SYS_InqCUBK('CRN_INQ_INV');
        }

    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.Check_INV_LINK_NO = function() {
    try {
        var funcType; // Utility Auto Fix Comments
        var passed; // Utility Auto Fix Comments
        funcType = SYS_FUNCTION_TYPE;
        if (funcType == "IQ" || funcType == "RE" || funcType == "EC") {
            return true;
        }

        SYS_GetTableDataByRule_S('SSSS_FAEF_CreditNotesTransfer_Check_INV_LINK_NO_0', '1', 'Y');
        passed = FA_DOC_REF();
        if (passed == false) {
            SYS_CheckError(document.MAINFORM.FA_CRN_INV_LINK_NO, "Your Invoice Reference No is invalid!");
        }
        document.MAINFORM.FA_TEMP4.value = '0';
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        if (!Check_INV_LINK_NO()) {
            return false;
        }
        if (!checkCRN_NO()) {
            return false;
        }
        if (!check_FA_DOC_AMT()) {
            return false;
        }
        if (!CHECK_FA_DOC_NO()) {
            return false;
        }
        if (!check_DOC_VAL_DT()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.DOC_BAL = function() {
    try {
        document.MAINFORM.FA_DOC_BAL.value = SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.FA_DOC_REF = function() {
    try {
        if (document.MAINFORM.FA_TEMP4.value == '' || document.MAINFORM.FA_TEMP4.value == 'null') {
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.Get_Inv_Loan_Amt = function() {
    try {
        var FA_CRN_INV_LINK_NO; // Utility Auto Fix Comments
        var fieldlist; // Utility Auto Fix Comments
        var fieldmapping; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_CRN_INV_LINK_NO.value != '') {
            FA_CRN_INV_LINK_NO = document.MAINFORM.FA_CRN_INV_LINK_NO.value.trim();

            //fieldlist = "FA_TRF_FX_RT;FA_CRN_BAL;FA_FIN_RET_BAL;FA_FIN_LOAN_AMT;FA_INV_LOAN_BAL;FA_PMT_TERMS;FA_PMT_COND;FA_ORDER_NO;FA_LATEST_SHIP_DT;FA_PRM_DISC_DAYS;FA_PRM_DISC_RT;FA_SND_DISC_DAYS;FA_SND_DISC_RT;FA_INV_LINK_REF;FA_DOC_BAL;FA_DOC_BAL;FA_DOC_AMT;FA_BA_FLG;FA_DOC_VAL_DT;FA_DOC_DUE_DT";
            //fieldmapping = "FA_TRF_FX_RT;FA_TEMP_CRN_BAL;TEMP_AMT13;FA_FIN_LOAN_AMT;FA_TEMP_LOAN_IBAL;FA_PMT_TERMS;FA_PMT_COND;FA_ORDER_NO;FA_LATEST_SHIP_DT;FA_PRM_DISC_DAYS;FA_PRM_DISC_RT;FA_SND_DISC_DAYS;FA_SND_DISC_RT;FA_INV_LINK_REF;FA_TEMP_AMT10;FA_TEMP_AMT11;FA_TEMP_AMT12;FA_BA_FLG;FA_TEMP_DT1;FA_TEMP_DT2";

            SYS_GetTableDataByRule_S('SSSS_FAEF_CreditNotesTransfer_Get_Inv_Loan_Amt_1', '1', 'Y');
            INV_LOAN_BALSHOW();
            //Add by Smile: if the date is null,the value will be --
            if (document.MAINFORM.FA_LATEST_SHIP_DT.value == '--' || document.MAINFORM.FA_LATEST_SHIP_DT.value == '') {
                document.MAINFORM.FA_LATEST_SHIP_DT.value = '';
                return false;
            }
        } else {


            document.MAINFORM.FA_TRF_FX_RT.value = '0';
            document.MAINFORM.FA_TEMP_CRN_BAL.value = '0';
            document.MAINFORM.TEMP_AMT13.value = '0';
            document.MAINFORM.FA_FIN_LOAN_AMT.value = '0';
            document.MAINFORM.FA_TEMP_LOAN_IBAL.value = '0';
            document.MAINFORM.FA_PMT_TERMS.value = '0';
            document.MAINFORM.FA_PMT_COND.value = '0';
            document.MAINFORM.FA_ORDER_NO.value = '0';
            document.MAINFORM.FA_PRM_DISC_DAYS.value = '0';
            document.MAINFORM.FA_PRM_DISC_RT.value = '0';
            document.MAINFORM.FA_SND_DISC_DAYS.value = '0';
            document.MAINFORM.FA_SND_DISC_RT.value = '0';
            document.MAINFORM.FA_INV_LINK_REF.value = '0';
            //document.MAINFORM.FA_TEMP_AMT10.value='0';
            document.MAINFORM.FA_TEMP_AMT11.value = '0';
            document.MAINFORM.FA_TEMP_AMT12.value = '0';
            document.MAINFORM.FA_BA_FLG.value = '0';
            document.MAINFORM.FA_TEMP_DT1.value = '0';
            document.MAINFORM.FA_TEMP_DT2.value = '0';
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.INV_LOAN_BALSHOW = function() {
    try {
        var INV_BAL; // Utility Auto Fix Comments
        INV_BAL = SYS_BeFloat(document.MAINFORM.FA_TEMP_LOAN_IBAL.value);
        if (INV_BAL > 0) {
            SYS_CheckError(document.MAINFORM.FA_TEMP_LOAN_IBAL, 'There is still Financing balance that have not been paid.');


        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.FA_DOC_CCY.value = SYS_getValueFromMain("FA_DOC_CCY");

        //document.MAINFORM.FA_FIN_RETURN_REQ.value=SYS_getValueFromMain("FA_FIN_RETURN_REQ");

        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain("FA_BUSI_TYPE");
        //SYS_GetSubPageRefNo_S('DF_DOC_REF', SetCreNoteRef, null, "");
        document.MAINFORM.FA_DOC_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_DOC_VAL_DT.value = SYS_BUSI_DATE;

        if (SYS_ORG_FUNCTION_NAME == 'CreditNotesTransfer_ME') {
            SYS_GetSubPageRefNo_S('SCF_INV_REF', SetCreNoteRef, '', 'InvRef', 'InvRef');
        } else {
            SYS_getDORefForDO('DF_DOC_REF', SetCreNoteRef, '', 'InvRef', 'InvRef');
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        //DEV4-xxx MICHAEL.SONG 2015-07-30 S
        document.MAINFORM.FSBC_REF.value = SYS_getValueFromMain("FA_SBR_REF");
        //DEV4-xxx MICHAEL.SONG 2015-07-30 S
        CCY_AMT();
        document.MAINFORM.FA_DOC_CCY.value = SYS_getValueFromMain("FA_DOC_CCY");
        document.MAINFORM.FA_TEMP_AMT8.value = '1';
        document.MAINFORM.FA_DOC_STATUS.value = 'TRF';
        document.MAINFORM.FA_TRF_DT.value = SYS_getValueFromMain("FA_TRF_DT");

        if (SYS_FUNCTION_TYPE == 'PM') {
            //Get_Inv_Loan_Amt(); MARK ON 20190618 FOR CHANGE LINK NO TO GETDATA;
        }



    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        document.MAINFORM.FA_BUSI_TYPE.value = SYS_getValueFromMain("FA_BUSI_TYPE");
        document.MAINFORM.FA_TEMP_CRN_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP_CRN_BAL.value);
        document.MAINFORM.FA_TRF_DT.value = SYS_getValueFromMain("FA_TRF_DT");
        document.MAINFORM.FA_DOC_STATUS.value = 'TRF';
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_DOC_REF.value;
        document.MAINFORM.FSBC_REF.value = SYS_getValueFromMain("FA_SBR_REF");
        document.MAINFORM.FA_DOC_CCY.value = SYS_getValueFromMain("FA_DOC_CCY");
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYS_getValueFromMain("FA_EF_HAN_CHG_AMT");
        document.MAINFORM.FA_EF_HAN_CHG_CCY.value = SYS_getValueFromMain("FA_EF_HAN_CHG_CCY");
        document.MAINFORM.FA_EF_HAN_CHG_PAMT.value = SYS_getValueFromMain("FA_EF_HAN_CHG_PAMT");
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            document.MAINFORM.FA_IF_HAN_CHG_AMT.value = SYS_getValueFromMain("FA_IF_HAN_CHG_AMT");
            document.MAINFORM.FA_IF_HAN_CHG_CCY.value = SYS_getValueFromMain("FA_IF_HAN_CHG_CCY");
            document.MAINFORM.FA_IF_HAN_CHG_PAMT.value = SYS_getValueFromMain("FA_IF_HAN_CHG_PAMT");
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.SetCreNoteRef = function(ref) {
    try {
        if (SYS_ORG_FUNCTION_NAME == 'CreditNotesTransfer_ME') {
            var UnitCode; // Utility Auto Fix Comments
            var date; // Utility Auto Fix Comments
            var pre; // Utility Auto Fix Comments
            var sub; // Utility Auto Fix Comments
            pre = document.MAINFORM.FA_BUSI_TYPE.value;
            UnitCode = SYS_BUSI_UNIT;
            UnitCode = UnitCode.substr(0, 4);
            date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
            year = date.substr(2, 2);
            month = date.substr(5, 2);
            day = date.substr(8, 2);
            var date1 = new Date(year, month, day);
            var date2 = new Date(year, 1, 1);
            var day = date1 - date2;
            var day = (date1 - date2) / 1000 / 60 / 60 / 24 + 1;
            sub = 'CRN';
            document.MAINFORM.FA_DOC_REF.value = pre + year + day + UnitCode + ref;
        } else {
            var UnitCode; // Utility Auto Fix Comments
            var date; // Utility Auto Fix Comments
            var month; // Utility Auto Fix Comments
            var pre; // Utility Auto Fix Comments
            var sub; // Utility Auto Fix Comments
            var year; // Utility Auto Fix Comments
            pre = document.MAINFORM.FA_BUSI_TYPE.value;
            UnitCode = SYS_BUSI_UNIT;
            UnitCode = UnitCode.substr(0, 5);
            date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
            year = date.substr(2, 2);
            month = date.substr(5, 2);
            sub = 'CRN';
            //document.MAINFORM.FA_DOC_REF.value= pre+UnitCode+year+month+refef+sub; 
            document.MAINFORM.FA_DOC_REF.value = pre + year + month + ref + sub; //by TJ20081113
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.checkCRN_NO = function() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var editid; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var invNo; // Utility Auto Fix Comments
        var invNoFromSCR; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var recID; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        if (SYS_ORG_FUNCTION_NAME != 'CreditNotesTransferFromCE') {
            node = SYS_getDoByXpath('CreNote');
            editid = node.grid.getSelectionModel().editRowId;
            invNoFromSCR = document.MAINFORM.FA_DOC_NO.value;
            arrayvalue = SYS_getRecords(node);
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                recID = SYS_getRecID(record);
                if (editid == recID) {
                    continue;
                }
                invNo = SYS_getValFromRec(record, 'FA_DOC_NO');
                if (invNo == invNoFromSCR) {
                    alert("Credit Note Number [" + invNo + "] cannot be duplicated!");
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.check_DOC_VAL_DT = function() {
    try {
        var cdays; // Utility Auto Fix Comments
        var cdays1; // Utility Auto Fix Comments
        cdays = SYT_GetSubDays_SCF(document.MAINFORM.FA_DOC_VAL_DT.name, document.MAINFORM.FA_TEMP_DT1.name);
        if (cdays > 0) {
            alert("The Credit Notes value date can't be ealier than the Invoice value date!");
            return false;
        } else {
            return true;
        }
        cdays1 = SYT_GetSubDays_SCF(document.MAINFORM.FA_DOC_VAL_DT.name, document.MAINFORM.FA_DOC_DUE_DT.name);
        if (cdays1 < 0) {
            alert("The Credit Notes value date can't be later than Credit Note Due Date!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.check_FA_DOC_AMT = function() {
    try {
        var AMT; // Utility Auto Fix Comments
        var AMT1; // Utility Auto Fix Comments
        var AMT2; // Utility Auto Fix Comments
        var AMT3; // Utility Auto Fix Comments
        AMT1 = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT11.value);
        AMT3 = SYS_BeFloat(document.MAINFORM.FA_TEMP_CRN_BAL.value);
        AMT = AMT1 - AMT3;
        AMT2 = SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value);
        if (AMT2 > AMT) {
            SYS_CheckError(document.MAINFORM.FA_DOC_AMT, 'Credit Note Amount cannot exceed the Invoice Balance!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.getInvDueDate = function() {
    try {
        document.MAINFORM.FA_DOC_DUE_DT.value = document.MAINFORM.FA_DOC_DT.value; // Utility Auto Fix Comments
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.getccy = function() {
    try {
        var FA_CRN_INV_LINK_NO; // Utility Auto Fix Comments
        var fieldlist; // Utility Auto Fix Comments
        var fieldmapping; // Utility Auto Fix Comments
        //When user input inv_no, check whether its CCY is the same with DOC_CCY on the main page
        FA_CRN_INV_LINK_NO = document.MAINFORM.FA_CRN_INV_LINK_NO.value.trim();

        //fieldlist = "FA_INV_LINK_REF;FA_DOC_CCY";
        //fieldmapping = "FA_INV_LINK_REF;TEMP_CHAR1";

        SYS_GetTableDataByRule_S('SSSS_FAEF_CreditNotesTransfer_getccy_2', '1', 'Y');
        if (document.MAINFORM.FA_INV_LINK_REF.value == '') {
            return false;
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.setFIN_RETURN_AMT = function() {
    try {
        var amtDiff; // Utility Auto Fix Comments
        var crnAmt; // Utility Auto Fix Comments
        var exRate; // Utility Auto Fix Comments
        var faamtreturn; // Utility Auto Fix Comments
        var invBal; // Utility Auto Fix Comments
        var oldCrnBal; // Utility Auto Fix Comments
        var oldFinRetBal; // Utility Auto Fix Comments
        invBal = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT11.value);
        oldCrnBal = SYS_BeFloat(document.MAINFORM.FA_TEMP_CRN_BAL.value);
        oldFinRetBal = SYS_BeFloat(document.MAINFORM.TEMP_AMT13.value);
        amtDiff = invBal - oldCrnBal - SYS_BeFloat(document.MAINFORM.FA_TEMP_LOAN_IBAL.value) - oldFinRetBal;
        crnAmt = SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value);
        exRate = SYS_BeFloat(document.MAINFORM.FA_TRF_FX_RT.value);
        if (crnAmt > amtDiff && crnAmt <= (invBal - oldCrnBal)) {
            amttoReturn = crnAmt - amtDiff;
            document.MAINFORM.TEMP_AMT15.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, amttoReturn);
            document.MAINFORM.TEMP_AMT18.value = SYS_BeFloat(amttoReturn * exRate);
            //document.MAINFORM.FA_FIN_RET_BAL.value=SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value,amttoReturn);
        } else {
            amttoReturn = "0";
            document.MAINFORM.TEMP_AMT15.value = "0";
        }
        faamtreturn = SYS_getValueFromMain("FA_AMT_RETURN_TEMP");
        faamtreturn = faamtreturn + amttoReturn;
        SYS_setValueToMain("FA_AMT_RETURN_TEMP", faamtreturn);
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.setInvDueDate = function(date) {
    try {
        document.MAINFORM.FA_DOC_DUE_DT.value = date;
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.window_onload = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.FA_CRN_INV_LINK_NO_onchange = function(event) {
    try {
        getccy();
        if (document.MAINFORM.TEMP_CHAR1.value != SYS_getValueFromMain("FA_DOC_CCY")) { //checkINV_CCY = DOC_CCY of the main page
            alert("The currency is not correct");
        } else {
            Check_INV_LINK_NO();
            Get_Inv_Loan_Amt();
            CCY_AMT();
        }
        if (SYS_ORG_FUNCTION_NAME == 'CreditNotesTransfer_ME') {
            SYS_GetCUBK('CRN_INQ_INV_ME', document.MAINFORM.FA_CRN_INV_LINK_NO.name);
        } else {
            SYS_GetCUBK('CRN_INQ_INV', document.MAINFORM.FA_CRN_INV_LINK_NO.name);
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.FA_DOC_AMT_onchange = function(event) {
    try {
        DOC_BAL();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_BAL, 'onchange');
        setFIN_RETURN_AMT();
        if (SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value) > SYS_BeFloat(document.MAINFORM.TEMP_CRN_BAL1.value)) {
            alert("The Credit Note Amount can't be more than Credit Note Balance to Invoice!");
            document.MAINFORM.FA_DOC_AMT.value = '0';
            document.MAINFORM.FA_DOC_BAL.value = '0';
        }
        var crenotinvc = SYS_BeFloat(document.MAINFORM.TEMP_CRN_BAL1.value);
        var crenotamt = SYS_BeFloat(document.MAINFORM.FA_DOC_AMT.value);
        crenotinvc = SYS_BeFloat(crenotinvc) - SYS_BeFloat(crenotamt);
        crenotinvc = SYT_AmtFormat(document.MAINFORM.FA_DOC_CCY.value, crenotinvc);
        document.MAINFORM.FA_TEMP_CRN_BAL.value = crenotinvc;
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.FA_DOC_DT_onchange = function(event) {
    try {
        getInvDueDate();
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.FA_DOC_VAL_DT_onchange = function(event) {
    try {
        getInvDueDate();
        check_DOC_VAL_DT();
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.FA_TRF_DT_onchange = function(event) {
    try {
        FA_MSG_TYPE();
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}

csDOScreenProto.INQ_INV_onclick = function(event) {
    try {
        CRN_INQ_INV();
    } catch (e) {
        DisExcpt("SSSS_FAEF_CreditNotesTransfer.js", e);
    }
}