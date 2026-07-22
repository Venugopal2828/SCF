var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.GSRP_STRC_TYPE.value = 'STPC';
        document.MAINFORM.SERVICE_TYPE_ID_GPI_111.value = '002';
        document.MAINFORM.RCV_BK_SW_ADD.value = 'TRCKCHZ0XXX';
        document.MAINFORM.SENDER_SW_ADD.value = 'PTSABMAAXXX';

    } catch (e) {
        DisExcpt("SYF_PYMT_Process_Stop_Recall.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_Process_Stop_Recall.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_GSRP_STRC_CODE_onchange = function(event) {
    try {
        var CODE = document.MAINFORM.GSRP_STRC_CODE.value;
        var SEND = document.MAINFORM.SENDER_SW_ADD.value;
        if (CODE == 'CNCL') {
            document.MAINFORM.TEMP_FLG10.value = '';
            document.MAINFORM.XN99_NARRATIVE_79.value = '/' + CODE + '/' + "\r\n" + SEND;
        }
        if (CODE == 'PDCR') {
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG10, 'M');
            SYT_RemoveOptionAll(document.MAINFORM.TEMP_FLG10);
            SYT_AddOptions(document.MAINFORM.TEMP_FLG10, ["", "PTNA", "RQDA"], ["", "Past To Next Agent", "Requested Debit Authority"]);
        }
        if (CODE == 'RJCR') {
            document.MAINFORM.TEMP_FLG10.value = '';
            SYT_ChangeFldClass(document.MAINFORM.TEMP_FLG10, 'M');
            SYT_RemoveOptionAll(document.MAINFORM.TEMP_FLG10);
            SYT_AddOptions(document.MAINFORM.TEMP_FLG10, ["", "LEGL", "AGNT", "CUST", "ARDT", "NOAS", "NOOR", "AC04", "AM04", "INDM"], ["", "regulatory rules", "Agent refuses to cancel", "Customer decision", "Transaction has already been returned", "No response from beneficiary", "Original transaction never received", "Account number specified has been closed", "Amount is insufficient", "Cancellation Indemnity Required"]);
        }

    } catch (e) {
        DisExcpt("SYF_PYMT_Process_Stop_Recall.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_TEMP_FLG10_onchange = function(event) {
    try {
        var REASON = document.MAINFORM.TEMP_FLG10.value;
        var CODE = document.MAINFORM.GSRP_STRC_CODE.value;
        if (REASON == 'PTNA') {

            document.MAINFORM.XN99_NARRATIVE_79.value = '/' + CODE + '/' + REASON + "\r\n" + document.MAINFORM.SENDER_SW_ADD.value + '/' + document.MAINFORM.RCV_BK_SW_ADD.value;

        } else {
            document.MAINFORM.XN99_NARRATIVE_79.value = '/' + CODE + '/' + REASON + "\r\n" + document.MAINFORM.SENDER_SW_ADD.value;

        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Process_Stop_Recall.js", e);
    }
}