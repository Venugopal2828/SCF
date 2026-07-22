var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
var vPmtTerms = '';
var valueFCUBK = '';

csFuncLevelProto.SYF_FAEF_Cal_ExcelUploaded = function() {
    try {

        var EF_COMM_AMT; // Utility Auto Fix Comments
        var EFcommRT; // Utility Auto Fix Comments
        var FA_BA_FLG; // Utility Auto Fix Comments
        var FA_LMT_AMT; // Utility Auto Fix Comments
        var IF_COMM_AMT; // Utility Auto Fix Comments
        var IFcommRT; // Utility Auto Fix Comments
        var InvRef; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var doObj_InvTRF; // Utility Auto Fix Comments
        var docValdate; // Utility Auto Fix Comments
        var docdate; // Utility Auto Fix Comments
        var docduedate; // Utility Auto Fix Comments
        var docno; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var invbal; // Utility Auto Fix Comments
        var invccy; // Utility Auto Fix Comments
        var invduedate; // Utility Auto Fix Comments
        var linkref; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var selId; // Utility Auto Fix Comments
        var selNm; // Utility Auto Fix Comments
        var subdays; // Utility Auto Fix Comments
        var trfdate; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        var sbrref;
        node = SYS_getDoByXpath('InvTRF');
        node.status = "A"; //For Paul,if not "A",UPLOAD DO CAN NOT GENERATE REF
        mData = [];
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            type = SYS_getRecState(record);
            invccy = document.MAINFORM.FA_DOC_CCY.value;
            SYS_setFieldValue(node, id, "FA_DOC_CCY", invccy);
            invbal = SYS_BeFloat(SYS_getValFromRec(record, 'FA_DOC_AMT'));
            SYS_setFieldValue(node, id, "FA_DOC_BAL", invbal);
            SYS_setFieldValue(node, id, "FA_TEMP_AMT8", 1);
            SYS_setFieldValue(node, id, "FA_DOC_STATUS", 'TRF');
            SYS_setFieldValue(node, id, "FA_DOC_TYPE", '1');
            SYS_setFieldValue(node, id, "FA_TRF_DT", document.MAINFORM.FA_TRF_DT.value);
            SYS_setFieldValue(node, id, "FA_BUYER_ID", document.MAINFORM.FA_BUYER_ID.value);
            SYS_setFieldValue(node, id, "FA_BUYER_NM", document.MAINFORM.FA_BUYER_NM.value);
            SYS_setFieldValue(node, id, "FA_PRM_DISC_DAYS", document.MAINFORM.FA_PRM_DISC_DAYS.value);
            SYS_setFieldValue(node, id, "FA_EF_COMM_RT", document.MAINFORM.FA_EF_COMM_RT.value);
            SYS_setFieldValue(node, id, "FA_IF_COMM_RT", document.MAINFORM.FA_IF_COMM_RT.value);
            SYS_setFieldValue(node, id, "FA_PRM_DISC_RT", document.MAINFORM.FA_PRM_DISC_RT.value);
            SYS_setFieldValue(node, id, "FA_SND_DISC_DAYS", document.MAINFORM.FA_SND_DISC_DAYS.value);
            SYS_setFieldValue(node, id, "FA_SND_DISC_RT", document.MAINFORM.FA_SND_DISC_RT.value);
            SYS_setFieldValue(node, id, "FA_IF_HAN_CHG_AMT", document.MAINFORM.FA_IF_HAN_CHG_AMT.value);
            SYS_setFieldValue(node, id, "FA_IF_HAN_CHG_PAMT", document.MAINFORM.FA_IF_HAN_CHG_PAMT.value);
            SYS_setFieldValue(node, id, "FA_IF_HAN_CHG_CCY", document.MAINFORM.FA_IF_HAN_CHG_CCY.value);
            SYS_setFieldValue(node, id, "FA_EF_HAN_CHG_CCY", document.MAINFORM.FA_EF_HAN_CHG_CCY.value);
            SYS_setFieldValue(node, id, "FA_EF_HAN_CHG_AMT", document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
            SYS_setFieldValue(node, id, "FA_EF_HAN_CHG_PAMT", document.MAINFORM.FA_EF_HAN_CHG_PAMT.value);

            EFcommRT = SYS_BeFloat(document.MAINFORM.FA_EF_COMM_RT.value);
            IFcommRT = SYS_BeFloat(document.MAINFORM.FA_IF_COMM_RT.value);
            EF_COMM_AMT = invbal * EFcommRT / 100;
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
                IF_COMM_AMT = invbal * IFcommRT / 100;
            } else {
                IF_COMM_AMT = 0;
            }
            SYS_setFieldValue(node, id, "FA_IF_COMM_AMT", IF_COMM_AMT);
            SYS_setFieldValue(node, id, "FA_EF_COMM_AMT", EF_COMM_AMT);

            sbrref = document.MAINFORM.FA_SBR_REF.value;
            var FA_DOC_REF = SYS_getValFromRec(record, 'FA_DOC_REF');
            if (FA_DOC_REF == "") {
                SYS_GetSubPageRefNo_S('FAEF_INV_REF', SYF_FAEF_Cal_ImportedInvRef, '', 'InvRef', 'InvRef');
                InvRef = document.MAINFORM.FA_TEMP3.value;
                SYS_setFieldValue(node, id, "FA_DOC_REF", InvRef);
            }
            SYS_setFieldValue(node, id, "FSBC_REF", sbrref);

            //linkref=SYS_getValFromRec(record,'FA_DOC_REF');
            //SYS_setFieldValue(node,id,"FA_INV_LINK_REF",linkref);
            SYS_setFieldValue(node, id, "FA_INV_LINK_REF", InvRef);

            docno = SYS_getValFromRec(record, 'FA_DOC_NO');
            SYS_setFieldValue(node, id, "FA_CRN_INV_LINK_NO", docno);

            trfdate = getDate(SYS_DATE_FORMAT, document.MAINFORM.FA_TRF_DT.value);
            invduedate = SYS_getValFromRec(record, 'FA_DOC_DUE_DT');
            invduedate = getDate(SYS_DATE_FORMAT, invduedate);
            FA_LMT_AMT = SYS_BeFloat(SYS_getValueFromMain('FA_LMT_AMT'));
            FA_BA_FLG = SYS_getValueFromMain('FA_BA_FLG');
            if (FA_LMT_AMT == 0 || invduedate < trfdate || FA_BA_FLG == '2') {
                SYS_setFieldValue(node, id, "FA_BA_FLG", 2);
                SYS_setFieldValue(node, id, "FA_INVAMT_IN_LMT", 0);
            } else {
                SYS_setFieldValue(node, id, "FA_BA_FLG", 1);
                SYS_setFieldValue(node, id, "FA_INVAMT_IN_LMT", invbal);
            }
            if (document.MAINFORM.FA_BUSI_TYPE.value != 'EF' && document.MAINFORM.FA_BUSI_TYPE.value != 'DF') {
                SYS_setFieldValue(node, id, "FA_BA_FLG", '');
            }

            selId = SYS_getValueFromMain('FA_SEL_ID');
            selNm = SYS_getValueFromMain('FA_SEL_NM');
            SYS_setFieldValue(node, id, "FA_SEL_ID", selId);
            SYS_setFieldValue(node, id, "FA_SEL_NM", selNm);



            docValdate = SYS_getValFromRec(record, 'FA_DOC_VAL_DT');
            docValdate = getDate(SYS_DATE_FORMAT, docValdate);

            if (trfdate < docValdate) {
                alert('Invoice Value Date must be earlier than or equal to transfer date. Please check inv no ' + docno + '!');
                node.clearAll();
                return false;
            }

            docdate = SYS_getValFromRec(record, 'FA_DOC_DT');
            docdate = getDate(SYS_DATE_FORMAT, docdate);
            docduedate = SYS_getValFromRec(record, 'FA_DOC_DUE_DT');
            docduedate = getDate(SYS_DATE_FORMAT, docduedate);


            if (docduedate < docdate || docduedate == docdate) {
                alert('Invoice Due Date must be later than Invoice date. Please check inv no ' + docno + '!');
                node.clearAll();
                return false;
            }
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
                document.MAINFORM.TEMP_DATE4.value = SYS_getValFromRec(record, 'FA_DOC_VAL_DT');
                subdays = SYS_GetSubDays(document.MAINFORM.TEMP_DATE4.name, document.MAINFORM.FA_LMT_VAL_DT.name);
                if (subdays > 30) {
                    alert("FSBC Value Date is " + document.MAINFORM.FA_LMT_VAL_DT.value + ". Invoice Value date can't precede FSBC Value Date by more than 30 days. Please check inv no " + docno + "!");
                    node.clearAll();
                    return false;
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, 'onchange'); //to getNewExchageRate

        doObj_InvTRF = SYS_getDoByXpath('InvTRF');
        SYF_FAEF_Cal_forChildtoMainScreen(doObj_InvTRF);
        SYF_FAEF_Chk_ValDuplicate(doObj_InvTRF, 'FA_DOC_NO');
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Cal_ExcelUploaded", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_ValDuplicate = function(_do, fieldName) {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordNext; // Utility Auto Fix Comments
        var valueF; // Utility Auto Fix Comments
        var valueN; // Utility Auto Fix Comments
        arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
        len = arrayvalue.length;
        for (i = 0; i < len; i++) {
            record = arrayvalue[i];
            valueF = SYS_getValFromRec(record, fieldName);
            for (j = 0; j < len; j++) {
                if (j == i) {
                    continue;
                }
                recordNext = arrayvalue[j];
                valueN = SYS_getValFromRec(recordNext, fieldName);
                if (valueF == valueN) {
                    alert("Invoice No [" + valueF + "] cannot be duplicated!");
                    return false;
                }
            }
        }
        // return true;


        document.MAINFORM.TEMP_CHAR6.value = '';

        for (i = 0; i < len; i++) {
            record = arrayvalue[i];
            valueF = SYS_getValFromRec(record, fieldName);
            valueFCUBK = valueF;
            SYS_GetTableDataByRule_S('SYF_FAEF_InvoiceTransfer_SYF_FAEF_Chk_ValDuplicate_0', '1', 'Y');
            if (document.MAINFORM.TEMP_CHAR6.value != '' && document.MAINFORM.TEMP_CHAR6.value != 'null') {
                alert("Document with number [" + valueF + "] is duplicated. It has been registered already.");
                document.MAINFORM.TEMP_CHAR6.value = '';
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Chk_ValDuplicate", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forFSBCBal = function() {
    try {

        var InvAmt_inLmtCCY; // Utility Auto Fix Comments
        var curLmtBal; // Utility Auto Fix Comments
        var curLmtExtr; // Utility Auto Fix Comments
        var docCCY; // Utility Auto Fix Comments
        var exRt; // Utility Auto Fix Comments
        var lmtBal; // Utility Auto Fix Comments
        var lmtCCY; // Utility Auto Fix Comments
        var lmtExtr; // Utility Auto Fix Comments
        var ttlInvAmt; // Utility Auto Fix Comments
        exRt = SYS_BeFloat(document.MAINFORM.EXCH_RT6.value); // exchangRate from INV CCY to LMT CCY
        lmtCCY = document.MAINFORM.FA_LMT_CCY.value;
        docCCY = document.MAINFORM.FA_DOC_CCY.value;
        lmtBal = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value); //Smile to fix the error while fixpending
        ttlInvAmt = SYS_BeFloat(document.MAINFORM.FA_TTL_AMT_BA.value); //20080801 total of invoice amt which BA_FLAG=1
        InvAmt_inLmtCCY = ttlInvAmt * exRt; // Utility Auto Fix Comments
        lmtExtr = SYS_BeFloat(document.MAINFORM.FA_LMT_EXTRA.value);



        if (lmtBal > InvAmt_inLmtCCY && InvAmt_inLmtCCY > 0) {
            curLmtBal = lmtBal - InvAmt_inLmtCCY;
            document.MAINFORM.RPT_TRX_BAL1.value = SYT_CCY_AMT(lmtCCY, curLmtBal); //curLmtBal
            document.MAINFORM.FA_TEMP_AMT11.value = SYT_CCY_AMT(docCCY, ttlInvAmt); // amtinLmt_docCCY
            document.MAINFORM.FA_TEMP_AMT12.value = 0; //amtOverLmt_docCCY
            document.MAINFORM.RPT_OTHER_AMT1.value = SYT_CCY_AMT(lmtCCY, InvAmt_inLmtCCY); //amtInLmt_LmtCCY
            document.MAINFORM.RPT_OTHER_AMT2.value = 0;
            document.MAINFORM.RPT_TRX_BAL2.value = 0; //curLmtExtr	

        } else if (lmtBal < InvAmt_inLmtCCY && lmtBal > 0) {
            lmtExtr = InvAmt_inLmtCCY - lmtBal;
            AmtOverLmt_docCCY = lmtExtr / exRt;
            document.MAINFORM.FA_TEMP_AMT12.value = SYT_CCY_AMT(docCCY, AmtOverLmt_docCCY); //amtOverLmt_docCCY
            amtInLmt_docCCY = lmtBal / exRt;
            document.MAINFORM.FA_TEMP_AMT11.value = SYT_CCY_AMT(docCCY, amtInLmt_docCCY);
            document.MAINFORM.RPT_OTHER_AMT1.value = SYT_CCY_AMT(lmtCCY, lmtBal);
            document.MAINFORM.RPT_OTHER_AMT2.value = SYT_CCY_AMT(lmtCCY, lmtExtr);
            document.MAINFORM.RPT_TRX_BAL1.value = 0;
            document.MAINFORM.RPT_TRX_BAL2.value = document.MAINFORM.RPT_OTHER_AMT2.value; //curLmtExtr	

        } else if (lmtBal == 0) {
            document.MAINFORM.FA_TEMP_AMT11.value = 0; //amtinLmt_docCCY
            document.MAINFORM.FA_TEMP_AMT12.value = SYT_CCY_AMT(docCCY, ttlInvAmt); //amtOverLmt_docCCY
            document.MAINFORM.RPT_OTHER_AMT1.value = 0; //amtInLmt_LmtCCY
            document.MAINFORM.RPT_OTHER_AMT2.value = SYT_CCY_AMT(lmtCCY, InvAmt_inLmtCCY); //amtOverLmt_LmtCCY
            document.MAINFORM.RPT_TRX_BAL1.value = 0; //curLmtBal
            curLmtExtr = SYS_BeFloat(lmtExtr + InvAmt_inLmtCCY);
            document.MAINFORM.RPT_TRX_BAL2.value = SYT_CCY_AMT(lmtCCY, curLmtExtr); //curLmtExtr

        } else if (lmtBal == InvAmt_inLmtCCY && lmtBal != 0) {
            document.MAINFORM.FA_TEMP_AMT11.value = SYT_CCY_AMT(docCCY, ttlInvAmt); //amtinLmt_docCCY
            document.MAINFORM.FA_TEMP_AMT12.value = 0; //amtOverLmt_docCCY
            document.MAINFORM.RPT_OTHER_AMT1.value = SYT_CCY_AMT(lmtCCY, lmtBal); //amtInLmt_LmtCCY
            document.MAINFORM.RPT_OTHER_AMT2.value = 0; //amtOverLmt_LmtCCY
            document.MAINFORM.RPT_TRX_BAL1.value = 0; //curLmtBal
            document.MAINFORM.RPT_TRX_BAL2.value = 0; //curLmtExtr

        } else {
            //alert(55);
            document.MAINFORM.FA_TEMP_AMT11.value = SYT_CCY_AMT(docCCY, ttlInvAmt);
            document.MAINFORM.FA_TEMP_AMT12.value = 0;
            document.MAINFORM.RPT_OTHER_AMT1.value = SYT_CCY_AMT(lmtCCY, InvAmt_inLmtCCY);
            document.MAINFORM.RPT_OTHER_AMT2.value = 0;
            document.MAINFORM.RPT_TRX_BAL1.value = SYT_CCY_AMT(lmtCCY, lmtBal);
            document.MAINFORM.RPT_TRX_BAL2.value = 0;

        }
        // Smile 1102 -- end
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Cal_forFSBCBal", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_PmtTerms = function() {
    try {

        var pmtTerms; // Utility Auto Fix Comments
        //below change by TJ20081024 to use FA_TEMP4 as invoice payment terms
        pmtTerms = SYS_BeFloat(document.MAINFORM.FA_TEMP4.value);
        if (pmtTerms > 180) {
            alert("Payment Terms are more than 180 days!");
        }
        if (pmtTerms > SYS_BeFloat(document.MAINFORM.FA_PMT_TERMS.value)) {
            alert("Payment Terms exceed limit set at the FSBC level!");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Chk_PmtTerms", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forChildtoMainScreen = function(node, recordId, status) {
    try {

        var docCCY; // Utility Auto Fix Comments
        var efcommsum; // Utility Auto Fix Comments
        var efhandalsum; // Utility Auto Fix Comments
        var ifcommsum; // Utility Auto Fix Comments
        var ifhandalsum; // Utility Auto Fix Comments
        var incocommsum; // Utility Auto Fix Comments
        var invamtForBA; // Utility Auto Fix Comments
        var invamtsum; // Utility Auto Fix Comments
        var invnosum; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        invnosum = SYS_getcurrRecordCount("InvTRF");
        docCCY = SYS_getValueFromMain('FA_DOC_CCY');
        type = SYS_getValueFromMain('FA_BUSI_TYPE');
        SYS_setValueToMain('FA_TTL_INV_NO', invnosum);

        invamtsum = SYS_getFieldSumValue(node, "FA_DOC_AMT", 2);
        efhandalsum = SYS_getFieldSumValue(node, "FA_EF_HAN_CHG_PAMT", 2);
        if (type == 'IF') {
            ifhandalsum = SYS_getFieldSumValue(node, "FA_IF_HAN_CHG_PAMT", 2);
            EEHtml.fireEvent(document.MAINFORM.FA_IF_HAN_CHG_SUM, 'onchange');
            document.MAINFORM.FA_IF_HAN_CHG_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_IF_HAN_CHG_CCY.value, document.MAINFORM.FA_IF_HAN_CHG_SUM.value);
        } else {
            ifhandalsum = 0;
        }
        invamtForBA = SYS_getFieldSumValue(node, "FA_INVAMT_IN_LMT", 2); //for inv amount within limits
        SYS_setValueToMain('FA_TTL_AMT_BA', invamtForBA); //for inv amt within limits
        SYS_setValueToMain('FA_TTL_INV_AMT', invamtsum);
        document.MAINFORM.FA_TTL_INV_AMT.value = SYT_CCY_AMT(docCCY, document.MAINFORM.FA_TTL_INV_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_INV_AMT, 'onchange');

        SYS_setValueToMain('FA_IF_HAN_CHG_SUM', ifhandalsum);
        SYS_setValueToMain('FA_EF_HAN_CHG_SUM', efhandalsum);
        EEHtml.fireEvent(document.MAINFORM.FA_EF_HAN_CHG_SUM, 'onchange');
        document.MAINFORM.FA_EF_HAN_CHG_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_SUM.value);

        efcommsum = SYS_BeFloat(SYS_getValueFromMain('FA_TTL_INV_AMT')) * SYS_BeFloat(SYS_getValueFromMain('FA_EF_COMM_RT')) / 100;
        if (type == 'IF') {
            ifcommsum = SYS_BeFloat(SYS_getValueFromMain('FA_TTL_INV_AMT')) * SYS_BeFloat(SYS_getValueFromMain('FA_IF_COMM_RT')) / 100;
            document.MAINFORM.FA_IF_COMM_SUM.value = SYT_CCY_AMT(docCCY, document.MAINFORM.FA_IF_COMM_SUM.value);
            EEHtml.fireEvent(document.MAINFORM.FA_IF_COMM_SUM, 'onchange');
        } else {
            ifcommsum = 0;
        }
        SYS_setValueToMain('FA_IF_COMM_SUM', ifcommsum);
        SYS_setValueToMain('FA_EF_COMM_SUM', efcommsum);
        document.MAINFORM.FA_EF_COMM_SUM.value = SYT_CCY_AMT(docCCY, document.MAINFORM.FA_EF_COMM_SUM.value);
        EEHtml.fireEvent(document.MAINFORM.FA_EF_COMM_SUM, 'onchange');

        document.MAINFORM.FA_TEMP_AMT9.value = SYS_BeFloat(document.MAINFORM.FA_EF_HAN_CHG_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_EF_COMM_SUM.value);
        if (type == 'IF') {
            document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYS_BeFloat(ifhandalsum) + SYS_BeFloat(ifcommsum);
            EEHtml.fireEvent(document.MAINFORM.FA_TTL_IF_CHG_AMT, 'onchange');
            document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_TTL_IF_CHG_AMT.value);
        } else {
            document.MAINFORM.FA_TTL_IF_CHG_AMT.value = 0;
        }
        if (type == 'DF' && document.MAINFORM.FA_SERVICE_APPRVD.value == '1') {
            incocommsum = SYS_BeFloat(SYS_getValueFromMain('FA_TTL_INV_AMT')) * SYS_BeFloat(SYS_getValueFromMain('FA_INCO_COMM_RT')) / 100;
            document.MAINFORM.FA_INCO_COMM_SUM.value = SYT_CCY_AMT(docCCY, document.MAINFORM.FA_INCO_COMM_SUM.value);
            EEHtml.fireEvent(document.MAINFORM.FA_INCO_COMM_SUM, 'onchange');
        } else {
            incocommsum = 0;
        }
        SYS_setValueToMain('FA_INCO_COMM_SUM', incocommsum);

        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT9.value) + SYS_BeFloat(document.MAINFORM.FA_TTL_IF_CHG_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_SEL_AC_AMT, 'onchange');
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(docCCY, document.MAINFORM.FA_SEL_AC_AMT.value);

        document.MAINFORM.FA_BUY_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT9.value);
        EEHtml.fireEvent(document.MAINFORM.FA_BUY_AC_AMT, 'onchange');
        document.MAINFORM.FA_BUY_AC_AMT.value = SYT_CCY_AMT(docCCY, document.MAINFORM.FA_BUY_AC_AMT.value);
        SYF_FAEF_Set_charge();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Cal_forChildtoMainScreen", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYT_ExchRate_FIX_PENDING();
        }

        SYF_FAEF_Get_FA_DOC_CCY_OPTION();
        SYF_FAEF_Get_Princing_Info();
        //SYM_FAEF_setDocCCY(); 
        if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
            EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        }
        //SYF_FAEF_Cal_CCY_AMT1();


        SYF_FAEF_MPO_cableChargeCCYReload();
        SYF_FAEF_Get_EXCH_RT4();
        EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, 'onchange');

        if (document.MAINFORM.FA_BUSI_TYPE.value === 'CD' || document.MAINFORM.FA_BUSI_TYPE.value === 'DD') {
            document.getElementById('CD1').innerHTML = 'Medical Provider ID & Name';
            document.getElementById('CD2').innerHTML = 'Insurance Company ID & Name';
        }

        SYF_FAEF_Cal_CCY_AMT1();

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            SYF_FAEF_Get_FA_IF_COMM_RT();
        }
        SYF_FAEF_Get_FA_LMT_BAL();
        SYF_FAEF_Get_EXCH_RT6();
        SYF_FAEF_CHG_INIT();

        SYF_FAEF_Cal_Change_By_Type();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_ImportedInvRef = function(ref) {
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
        sub = 'INV';
        document.MAINFORM.FA_TEMP3.value = pre + UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Cal_ImportedInvRef", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_CCY_AMT1 = function() {
    try {

        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
        document.MAINFORM.FA_EF_HAN_CHG_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
        document.MAINFORM.FA_IF_HAN_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_IF_HAN_CHG_CCY.value, document.MAINFORM.FA_IF_HAN_CHG_AMT.value);
        document.MAINFORM.FA_IF_HAN_CHG_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_IF_HAN_CHG_CCY.value, document.MAINFORM.FA_IF_HAN_CHG_SUM.value); //1212
        document.MAINFORM.FA_EF_COMM_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_EF_COMM_SUM.value);
        document.MAINFORM.FA_IF_COMM_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_IF_COMM_SUM.value);
        document.MAINFORM.FA_CB_FEE.value = SYT_CCY_AMT(document.MAINFORM.FA_CB_FEE_CCY.value, document.MAINFORM.FA_CB_FEE.value);
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
        document.MAINFORM.FA_TTL_IF_CHG_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_TTL_IF_CHG_AMT.value);
        document.MAINFORM.FA_EF_HAN_CHG_PAMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_PAMT.value); //1212
        document.MAINFORM.FA_IF_HAN_CHG_PAMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_IF_HAN_CHG_PAMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Cal_CCY_AMT1", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo_S('FAEF_INV_TRF', 'SYF_FAEF_Cal_Ref');
        SYT_loadExchRate();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Ref = function(ref) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'IVT';
        document.MAINFORM.FA_TRF_REF.value = UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Cal_Ref", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FINC_CCY1 = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            document.MAINFORM.FINC_CCY1.value = document.MAINFORM.FA_DOC_CCY.value;
        }
        document.MAINFORM.FINC_CCY2.value = document.MAINFORM.FA_DOC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Cal_FINC_CCY1", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.FA_TRF_FX_RT.value = document.MAINFORM.EXCH_RT6.value;
        /*modify by huyechao for POF 20151009*/
        document.MAINFORM.FA_TEMP5.value = SYS_BeFloat(document.MAINFORM.FA_TTL_INV_AMT.value) * SYS_BeFloat(document.MAINFORM.EXCH_RT6.value);
        /*modify by huyechao for POF 20151009*/
        SYF_FAEF_invAllocation();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_FA_TTL_COMM_RT = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF' && SYS_BeFloat(document.MAINFORM.FA_TTL_COMM_RT.value) == 0) {
            SYS_CheckError(document.MAINFORM.FA_TTL_COMM_RT, 'There is no Pricing information.');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Chk_FA_TTL_COMM_RT", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_cableChargeCCYReload = function() {
    try {

        var FA_CB_FEE_CCY; // Utility Auto Fix Comments
        var FA_DOC_CCY; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        FA_DOC_CCY = EEHtml.getElementById('FA_DOC_CCY');
        FA_CB_FEE_CCY = EEHtml.getElementById('FA_CB_FEE_CCY');
        len = FA_CB_FEE_CCY.options.length;
        i = 0;
        for (i = len - 1; i >= 0; i--) {
            FA_CB_FEE_CCY.options.remove(i);
        }
        FA_CB_FEE_CCY.options.add(new Option('', ''));
        if (document.MAINFORM.FA_DOC_CCY.value != 'USD' && document.MAINFORM.FA_DOC_CCY.value != '') {
            FA_CB_FEE_CCY.options.add(new Option(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DOC_CCY.value));
        }
        FA_CB_FEE_CCY.options.add(new Option('USD', 'USD'));
        document.MAINFORM.FA_CB_FEE_CCY.value = 'USD';
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_MPO_cableChargeCCYReload", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var doObj_InvTRF; // Utility Auto Fix Comments
        if (!SYF_FAEF_Chk_FA_TTL_COMM_RT()) {
            return false;
        }
        if (!SYF_FAEF_Chk_DOC_FLG()) {
            return false;
        }
        doObj_InvTRF = SYS_getDoByXpath('InvTRF');
        if (SYS_FUNCTION_TYPE == 'PM') {
            if (!SYF_FAEF_Chk_ValDuplicate(doObj_InvTRF, 'FA_DOC_NO')) {
                return false;
            }
        }
        if (!SYT_checkFactoringChildRecord('InvTRF')) {
            return false;
        }
        if (document.MAINFORM.FA_DOC_CCY.value != document.MAINFORM.FA_LMT_CCY.value && (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' || document.MAINFORM.FA_BUSI_TYPE.value == 'EF')) {
            if (!confirm('You are confirming with FX Rate: ' + document.MAINFORM.EXCH_RT6.value + '!')) {
                return false;
            }
        }

        if (!SYF_FAEF_Chk_MultiDebit_BAL()) {
            return false;
        }
        if (!SYT_MLDC_ValidateBalance()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_DOC_FLG = function() {
    try {

        var docFLG; // Utility Auto Fix Comments
        docFLG = document.MAINFORM.DOC_FLAG.value;
        if (docFLG != '1') {
            SYS_CheckError(document.MAINFORM.DOC_FLAG, 'Documents required must be ready to approve the invoice transfer!'); // Utility Auto Fix Comments
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Chk_DOC_FLG", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_INV_CCY = function() {
    try {

        var ccy; // Utility Auto Fix Comments
        ccy = document.MAINFORM.FA_DOC_CCY.value;
        SYS_refreshChildDoValue("InvTRF", 'FA_DOC_CCY', ccy);
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Cal_FA_INV_CCY", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forRealChgRT = function() {
    try {

        var docCcy; // Utility Auto Fix Comments
        var efPAMT; // Utility Auto Fix Comments
        var efPrice; // Utility Auto Fix Comments
        var exRt; // Utility Auto Fix Comments
        var ifPAMT; // Utility Auto Fix Comments
        var ifPrice; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var priCcy; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        docCcy = document.MAINFORM.FA_DOC_CCY.value;
        priCcy = document.MAINFORM.FA_EF_HAN_CHG_CCY.value;
        efPrice = document.MAINFORM.FA_EF_HAN_CHG_AMT.value;
        ifPrice = document.MAINFORM.FA_IF_HAN_CHG_AMT.value;
        type = document.MAINFORM.FA_BUSI_TYPE.value;
        if (docCcy == priCcy) {
            document.MAINFORM.FA_EF_HAN_CHG_PAMT.value = efPrice;
            if (type == 'IF') {
                document.MAINFORM.FA_IF_HAN_CHG_PAMT.value = ifPrice;
            }
        } else {
            exRt = SYS_BeFloat(document.MAINFORM.EXCH_RT4.value);
            if (exRt != '') {
                efPAMT = SYS_BeFloat(efPrice) / exRt;
                document.MAINFORM.FA_EF_HAN_CHG_PAMT.value = SYT_CCY_AMT(priCcy, efPAMT);
                if (type == 'IF') {
                    ifPAMT = SYS_BeFloat(ifPrice) / exRt;
                    document.MAINFORM.FA_IF_HAN_CHG_PAMT.value = SYT_CCY_AMT(priCcy, ifPAMT);
                }
                num = SYS_getcurrRecordCount("InvTRF");
                if (num > 0) {
                    EEHtml.fireEvent(document.MAINFORM.FA_EF_HAN_CHG_PAMT, "onchange");
                    EEHtml.fireEvent(document.MAINFORM.FA_IF_HAN_CHG_PAMT, "onchange");
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Cal_forRealChgRT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_EXCH_RT6 = function() {
    try {

        if (document.MAINFORM.FA_LMT_CCY.value != '' && document.MAINFORM.FA_DOC_CCY.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_LMT_CCY.value, 'Booking Rate', 'EXCH_RT6');
            EEHtml.fireEvent(document.MAINFORM.EXCH_RT6, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Get_EXCH_RT6", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_FA_TTL_INV_AMT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_TTL_INV_AMT.value) > SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value)) {
            alert('Invoice is surrendered beyond Credit Cover!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Chk_FA_TTL_INV_AMT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_Princing_Info = function() {
    try {

        var dTRF_DT; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            dTRF_DT = document.MAINFORM.FA_TRF_DT.value;
            //mark by echo for test gettabledata
            //document.MAINFORM.FA_TRF_DT.value = getDate(SYS_DATE_FORMAT, document.MAINFORM.FA_TRF_DT.value);
            //sFieldList = "FA_FIN_INFO;FA_TTL_COMM_RT;FA_IF_COMM_RT;FA_EF_COMM_RT;FA_IF_HAN_CHG_AMT;FA_IF_HAN_CHG_CCY;FA_EF_HAN_CHG_AMT;FA_EF_HAN_CHG_CCY;FA_DOC_REQD";
            //sMappingList = "FA_FIN_INFO;FA_TTL_COMM_RT;FA_IF_COMM_RT;FA_EF_COMM_RT;FA_IF_HAN_CHG_AMT;FA_IF_HAN_CHG_CCY;FA_EF_HAN_CHG_AMT;FA_EF_HAN_CHG_CCY;FA_DOC_REQD";
            SYS_GetTableDataByRule_S('SYF_FAEF_InvoiceTransfer_SYF_FAEF_Get_Princing_Info_1', '1', 'Y');
            document.MAINFORM.FA_TRF_DT.value = dTRF_DT;
            EEHtml.fireEvent(document.MAINFORM.FA_IF_HAN_CHG_AMT, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.FA_EF_HAN_CHG_AMT, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Get_Princing_Info", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        var FA_TTL_INV_AMT; // Utility Auto Fix Comments
        document.MAINFORM.FA_TRF_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_STATUS.value = 'TRF';
        document.MAINFORM.FA_DOC_TYPE.value = '1';
        document.MAINFORM.FA_MSG_TEXT.value = '';
        document.MAINFORM.FA_MSG_TEXT02.value = '';
        document.MAINFORM.FA_IF_CHG_PAID_FLG.value = 'N';
        document.MAINFORM.FA_TTL_INV_NO.value = 0;
        document.MAINFORM.FA_CB_FEE_CCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.FA_TEMP4.value = document.MAINFORM.FA_PMT_TERMS.value;
        document.MAINFORM.FA_BUY_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
        document.MAINFORM.FA_TRF_REF.value = document.MAINFORM.FA_BUSI_TYPE.value + document.MAINFORM.FA_TRF_REF.value;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_TRF_REF.value;
        SYF_FAEF_Get_Princing_Info();
        SYM_FAEF_checkDspInvoice();
        SYF_FAEF_Chk_FA_TTL_FIN_RET_BAL();
        SYF_FAEF_Cal_FINC_CCY1();

        FA_TTL_INV_AMT = 0;
        document.MAINFORM.FA_TTL_INV_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, FA_TTL_INV_AMT);
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*InitValues", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_FA_DOC_CCY_OPTION = function() {
    try {

        var FA_DOC_CCY; // Utility Auto Fix Comments
        var sSelects1; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            document.MAINFORM.FA_DOC_CCY.options.length = 0;
            sSelects1 = [
                [document.MAINFORM.FA_INV_CCY1.value, document.MAINFORM.FA_INV_CCY1.value],
                [document.MAINFORM.FA_INV_CCY2.value, document.MAINFORM.FA_INV_CCY2.value],
                [document.MAINFORM.FA_INV_CCY3.value, document.MAINFORM.FA_INV_CCY3.value],
                [document.MAINFORM.FA_INV_CCY4.value, document.MAINFORM.FA_INV_CCY4.value],
                [document.MAINFORM.FA_INV_CCY5.value, document.MAINFORM.FA_INV_CCY5.value]
            ];
            FA_DOC_CCY = document.MAINFORM.FA_DOC_CCY.value;
            for (i = 0; i < sSelects1.length; ++i) {
                if (sSelects1[i][0] == '') {
                    continue;
                }
                document.MAINFORM.FA_DOC_CCY.options.add(new Option(sSelects1[i][0], sSelects1[i][1]));
                if (FA_DOC_CCY != '') {
                    document.MAINFORM.FA_DOC_CCY.value = FA_DOC_CCY;
                }
            }
            if (SYS_FUNCTION_TYPE == 'PM') {
                document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
                EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
            }
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYT_ChangeFldClass_New('FA_DOC_CCY', 'P');
            document.MAINFORM.FA_DOC_CCY.value = SYS_LOCAL_CCY;
        } else {
            if (SYS_FUNCTION_TYPE == 'PM') {
                document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
                EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Get_FA_DOC_CCY_OPTION", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_FA_IF_COMM_RT = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' && document.MAINFORM.FA_INCO_ID.value != '') {
            SYS_GetTableDataByRule_S('SYF_FAEF_InvoiceTransfer_SYF_FAEF_Get_FA_IF_COMM_RT_2', '1', 'Y');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Get_FA_IF_COMM_RT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_FA_LMT_BAL = function() {
    try {

        var FA_LMT_APPRV; // Utility Auto Fix Comments
        var FA_LMT_BAL; // Utility Auto Fix Comments
        var FA_LMT_EXTRA; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            //sFieldList = "LM_CRED_LMT;LM_OUTC_APL;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV";
            //sMappingList = "FA_LMT_APPRV;LM_OUTC_APL;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV";
            SYS_GetTableDataByRule_S('SYF_FAEF_InvoiceTransfer_SYF_FAEF_Get_FA_LMT_BAL_3', '1', 'Y');
            FA_LMT_BAL = SYS_BeFloat(document.MAINFORM.FA_LMT_APPRV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APL.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value);
            FA_LMT_EXTRA = SYS_BeFloat(document.MAINFORM.LM_OUTD_APLO.value) - SYS_BeFloat(document.MAINFORM.LM_OUTC_APLO.value) + SYS_BeFloat(document.MAINFORM.LM_OUTD_APVO.value) - SYS_BeFloat(document.MAINFORM.LM_OUTC_APVO.value);
            FA_LMT_APPRV = SYS_BeFloat(document.MAINFORM.FA_LMT_APPRV.value);
            document.MAINFORM.FA_LMT_APPRV.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_APPRV);
            document.MAINFORM.FA_LMT_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_BAL);
            document.MAINFORM.FA_LMT_EXTRA.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_EXTRA);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Get_FA_LMT_BAL", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_EXCH_RT4 = function() {
    try {

        if (document.MAINFORM.FA_EF_HAN_CHG_CCY.value != '' && document.MAINFORM.FA_DOC_CCY.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_CCY.value, 'Booking Rate', 'EXCH_RT4');
            EEHtml.fireEvent(document.MAINFORM.EXCH_RT4, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Get_EXCH_RT4", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_FA_TTL_FIN_RET_BAL = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_TTL_FIN_RET_BAL.value) > 0) {
            alert('Financing is blocked!');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Chk_FA_TTL_FIN_RET_BAL", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Change_By_Type = function() {
    try {

        var Desc1; // Utility Auto Fix Comments
        var Desc2; // Utility Auto Fix Comments
        var Desc3; // Utility Auto Fix Comments
        var Desc4; // Utility Auto Fix Comments
        var Desc5; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        var val; // Utility Auto Fix Comments
        type = EEHtml.getElementById('FA_BUSI_TYPE');
        Desc1 = EEHtml.getElementById('Desc1');
        Desc2 = EEHtml.getElementById('Desc2');
        Desc3 = EEHtml.getElementById('Desc3');
        Desc4 = EEHtml.getElementById('Desc4');
        Desc5 = EEHtml.getElementById('Desc5');
        val = type.value;
        if (val != 'EF') {
            Desc1.innerHTML = 'Gross Turnover Commission';
            Desc2.innerHTML = 'Handling Charge Amount';
            Desc3.innerHTML = 'Handling Charge Collected';
            Desc4.innerHTML = 'Total Commissions';
            Desc5.innerHTML = 'Total Handling Charges';
        }
        if (val == 'EF') {
            EEHtml.getElementById('EF1').style.display = "";
            EEHtml.getElementById('EF2').style.display = "";
            EEHtml.getElementById('EF3').style.display = "";
            EEHtml.getElementById('EF4').style.display = "";
            EEHtml.getElementById('EF5').style.display = "";
            EEHtml.getElementById('EF6').style.display = "";
            EEHtml.getElementById('EF7').style.display = "";
            EEHtml.getElementById('EF8').style.display = "";
            EEHtml.getElementById('DF/EF1').style.display = "";
        }

        if (val == 'DF') {
            EEHtml.getElementById('DF1').style.display = "";
            EEHtml.getElementById('DF2').style.display = "";
            EEHtml.getElementById('DF/EF1').style.display = "";
        }


        if (val != 'DF' && val != 'EF') {
            EEHtml.getElementById('C').style.display = "none";
            SYT_DisableDivClass('C_div');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Cal_Change_By_Type", e);
    }
}

csFuncLevelProto.SYF_FAEF_invAllocation = function() {
    try {

        var LMT_FLG; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var invamt; // Utility Auto Fix Comments
        var invccy; // Utility Auto Fix Comments
        var invduedt; // Utility Auto Fix Comments
        var invno; // Utility Auto Fix Comments
        var invref; // Utility Auto Fix Comments
        var invvaldt; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var ref; // Utility Auto Fix Comments
        LMTS.Ext.deleteAll();

        node = SYS_getDoByXpath('InvTRF');
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            invref = SYS_getValFromRec(record, 'FA_DOC_REF');
            invno = SYS_getValFromRec(record, 'FA_DOC_NO');
            ref = document.MAINFORM.FA_SBR_REF.value;
            invamt = SYS_getValFromRec(record, 'FA_DOC_AMT');
            invccy = SYS_getValFromRec(record, 'FA_DOC_CCY');
            rate = document.MAINFORM.EXCH_RT6.value;
            invvaldt = SYS_getValFromRec(record, 'FA_DOC_VAL_DT');
            invduedt = SYS_getValFromRec(record, 'FA_DOC_DUE_DT');
            LMT_FLG = SYS_getValFromRec(record, 'FA_BA_FLG');

            if (LMT_FLG == '1' && (document.MAINFORM.FA_BUSI_TYPE.value == 'EF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DF')) {
                LMTS.Ext.invAllocation(invref, invno, ref, invamt, invccy, rate, SYS_BUSI_DATE, invvaldt, invduedt);
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_invAllocation", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        var arrayvalue; // Utility Auto Fix Comments
        var chgEntry; // Utility Auto Fix Comments
        var commList1; // Utility Auto Fix Comments
        var commList2; // Utility Auto Fix Comments
        var commList3; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        xDO = SYS_getDoByXpath("ChgDoTrx");
        type = document.MAINFORM.FA_BUSI_TYPE.value;
        if (xDO) {
            commList1 = "FAEF_EF_COMM,FAEF_EF_CHG,FAEF_IF_COMM,FAEF_IF_CHG,FAEF_CABLE_CHG";
            commList2 = "FAEF_EF_COMM,FAEF_EF_CHG,FAEF_CABLE_CHG,FAEF_INCO_COMM";
            commList3 = "FAEF_EF_COMM,FAEF_EF_CHG,FAEF_CABLE_CHG";
            if (type == 'IF') {
                Chg.LoadCommission(commList1, 'MAINREF', '', null, '', '', 'false');
            } else if (type == 'DF') {
                Chg.LoadCommission(commList2, 'MAINREF', '', null, '', '', 'false');
            } else {
                Chg.LoadCommission(commList3, 'MAINREF', '', null, '', '', 'false');
            }
        }
        arrayvalue = SYS_getRecords(xDO);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            chgEntry = new Chg.Entry(record);
            Chg.Screen.putOrignalTrxChg(chgEntry);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Set_charge = function() {
    try {

        var COMM; // Utility Auto Fix Comments
        var cbccy; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var invccy; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        xDO = SYS_getDoByXpath("ChgDoTrx");
        if (xDO) {
            invccy = document.MAINFORM.FA_DOC_CCY.value;
            cbccy = document.MAINFORM.FA_CB_FEE_CCY.value;
            type = document.MAINFORM.FA_BUSI_TYPE.value;
            records = SYS_getRecords(xDO);
            COMM = new Array();
            for (i = 0; i < records.length; i++) {
                COMM[0] = SYS_getValFromRec(records[i], "CHG_COMMISSION_CODE");
                id = SYS_getRecID(records[i]);
                if (COMM[0] == 'FAEF_EF_COMM') {
                    if (type != 'IF') {
                        SYS_setFieldValue(xDO, id, "CHG_COMMISSION_DESC", 'Total Commissions');
                    }
                    Chg.Screen.setChargeValue(COMM, invccy, document.MAINFORM.FA_EF_COMM_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_EF_COMM_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", invccy);
                } else if (COMM[0] == 'FAEF_EF_CHG') {
                    if (type != 'IF') {
                        SYS_setFieldValue(xDO, id, "CHG_COMMISSION_DESC", 'Total Handling Charges');
                    }
                    Chg.Screen.setChargeValue(COMM, invccy, document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_EF_HAN_CHG_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", invccy);
                } else if (COMM[0] == 'FAEF_CABLE_CHG') {
                    Chg.Screen.setChargeValue(COMM, cbccy, document.MAINFORM.FA_CB_FEE.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_CB_FEE.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", cbccy);
                } else if (COMM[0] == 'FAEF_IF_COMM' && type == 'IF') {
                    Chg.Screen.setChargeValue(COMM, invccy, document.MAINFORM.FA_IF_COMM_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_IF_COMM_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", invccy);
                } else if (COMM[0] == 'FAEF_IF_CHG' && type == 'IF') {
                    Chg.Screen.setChargeValue(COMM, invccy, document.MAINFORM.FA_IF_HAN_CHG_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_IF_HAN_CHG_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", invccy);
                } else if (type == 'DF' && COMM[0] == 'FAEF_INCO_COMM') {
                    Chg.Screen.setChargeValue(COMM, invccy, document.MAINFORM.FA_INCO_COMM_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_AMT", document.MAINFORM.FA_INCO_COMM_SUM.value);
                    SYS_setFieldValue(xDO, id, "CHG_COLLECT_CCY", invccy);
                }
            }
            Chg_MultiDebitInvoker();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Set_charge", e);
    }
}

csFuncLevelProto.SYF_FAEF_CHG_INIT = function() {
    try {

        var type; // Utility Auto Fix Comments
        Chg.init('Booking Rate', 'Booking Rate', 'Booking Rate', 'Booking Rate');
        type = document.MAINFORM.FA_BUSI_TYPE.value;
        if (type == 'EF' || type == 'DF' || type == 'DISC' || type == 'RD') {
            Chg.Screen.mapLocalCust("FA_SEL_ID", "FA_SEL_NM");
            Chg.Screen.mapForeignCust("FA_BUYER_ID", "FA_BUYER_NM");
        } else {
            Chg.Screen.mapLocalCust("FA_BUYER_ID", "FA_BUYER_NM");
            Chg.Screen.mapForeignCust("FA_SEL_ID", "FA_SEL_NM");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_CHG_INIT", e);
    }
}

csFuncLevelProto.SYF_FAEF_UpLoadFile_InvTRF = function() {
    try {

        SYS_UpLoadInvFile('UploadInvoice', 'SYF_FAEF_Cal_ExcelUploaded', '', 'FI', '', 'InvTRF');
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_UpLoadFile_InvTRF", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MultiDebit_BAL = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var payBamt; // Utility Auto Fix Comments
        var paySamt; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('MultiDebitSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiDebitSummary");
        paySamt = SYS_BeFloat(document.MAINFORM.FA_SEL_AC_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_CB_FEE.value);
        payBamt = SYS_BeFloat(document.MAINFORM.FA_BUY_AC_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_CB_FEE.value);
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recordTypeTemp = SYS_getFieldSumValue(_do, "N_MLDC_AMT", 2); // Utility Auto Fix Comments
                //recordTypeTemp = record['N_MLDC_AMT'];
                SYS_setValueToMain('FA_TEMP1', recordTypeTemp);
            }
        }
        if (SYS_BeFloat(document.MAINFORM.FA_TEMP1.value) != paySamt && SYS_BeFloat(document.MAINFORM.FA_TEMP1.value) != payBamt) {
            alert('Multi Debit Amount is not equal to Payment Amount!');
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_Chk_MultiDebit_BAL", e);
    }
}

csFuncLevelProto.SYF_FAEF_PreChkInv = function(arrayNV) {
    try {

        var MM; // Utility Auto Fix Comments
        var attr; // Utility Auto Fix Comments
        var days; // Utility Auto Fix Comments
        var dd; // Utility Auto Fix Comments
        var docno; // Utility Auto Fix Comments
        var duedt; // Utility Auto Fix Comments
        var objfld; // Utility Auto Fix Comments
        var val; // Utility Auto Fix Comments
        var value; // Utility Auto Fix Comments
        var yy; // Utility Auto Fix Comments
        var yyyy; // Utility Auto Fix Comments
        docno = arrayNV['FA_DOC_NO'];
        duedt = arrayNV['FA_DOC_DUE_DT'];
        for (attr in arrayNV) {
            value = arrayNV[attr];
            objfld = EEHtml.getElementById(attr);
            if (objfld) {
                if ('FA_DOC_CCY' == attr) {
                    val = document.MAINFORM.FA_DOC_CCY.value;
                    if (val != value) {
                        alert("Please check inv no " + docno + ", Invoice CCY should be the same with transaction page!"); // Utility Auto Fix Comments
                        return false;
                    }
                } else if ('FA_BUYER_NM' == attr) {
                    val = document.MAINFORM.FA_BUYER_NM.value;
                    if (val != value) {
                        alert("Please check inv no " + docno + ", Buyer Name should be the same with transaction page!");
                        return false;
                    }
                } else if ('FA_SEL_NM' == attr) {
                    val = document.MAINFORM.FA_SEL_NM.value;
                    if (val != value) {
                        alert("Please check inv no " + docno + ", Seller Name should be the same with transaction page!");
                        return false;
                    }
                }
            }
            /*if ('FA_DOC_DUE_DT' == attr) {
                duedt = value;
            }*/
            if ('FA_DOC_VAL_DT' == attr && value != '' && value != null) {
                days = document.MAINFORM.FA_TEMP4.value;
                value = value.substr(0, 10);
                /*
       mm = value.substr(5,2);
       dd = value.substr(8,2); 
       yy = value.substr(0,4);
       value = mm+ "/" + dd + "/" + yy;
*/
                yyyy = value.substr(0, 4);
                yy = value.substr(2, 2);
                MM = value.substr(5, 2);
                dd = value.substr(8, 2);
                if (SYS_DATE_FORMAT == "yyyy-MM-dd") {
                    value = yyyy + "-" + MM + "-" + dd;
                } else if (SYS_DATE_FORMAT == "yy-MM-dd") {
                    value = yy + "-" + MM + "-" + dd;
                } else if (dateFormat == "MM-dd-yyyy") {
                    value = MM + "-" + dd + "-" + yyyy;
                } else if (dateFormat == "MM-dd-yy") {
                    value = MM + "-" + dd + "-" + yy;
                } else if (dateFormat == "dd-MM-yyyy") {
                    value = dd + "-" + MM + "-" + yyyy;
                } else if (dateFormat == "dd-MM-yy") {
                    value = dd + "-" + MM + "-" + yy;
                } else if (dateFormat == "yyyy/MM/dd") {
                    value = yyyy + "/" + MM + "/" + dd;
                } else if (dateFormat == "yy/MM/dd") {
                    value = yy + "/" + MM + "/" + dd;
                } else if (dateFormat == "MM/dd/yyyy") {
                    value = MM + "/" + dd + "/" + yyyy;
                } else if (dateFormat == "MM/dd/yy") {
                    value = MM + "/" + dd + "/" + yy;
                } else if (dateFormat == "dd/MM/yy") {
                    value = dd + "/" + MM + "/" + yy;
                } else if (dateFormat == "dd/MM/yyyy") {
                    value = dd + "/" + MM + "/" + yyyy;
                }
                SYS_CalEndWorkingDate_S(SYS_BANK_COUNTRY, value, days, 'TEMP_DATE2', 'A', 'N', 'N');
                val = getDate(SYS_DATE_FORMAT, document.MAINFORM.TEMP_DATE2.value);
                if (val != duedt) {
                    alert("Please check inv no " + docno + ", Invoice Due Date should be " + val + ", Payment Terms should be the same with transaction page!");
                    return false;
                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*SYF_FAEF_PreChkInv", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*CancelCheck", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*addRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*editRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_EXCH_RT6_onchange = function(event) {
    try {
        SYF_FAEF_Cal_forFSBCBal();
        EEHtml.fireEvent(document.MAINFORM.FA_TEMP_AMT11, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.FA_TEMP_AMT12, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.RPT_OTHER_AMT1, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.RPT_TRX_BAL1, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.RPT_OTHER_AMT2, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.RPT_TRX_BAL2, 'onchange');
        SYF_FAEF_Cal_forRealChgRT();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_EXCH_RT6_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_CB_FEE_onchange = function(event) {
    try {
        SYF_FAEF_Set_charge();
        document.MAINFORM.FA_CB_FEE.value = SYT_AmtFormat(document.MAINFORM.FA_CB_FEE_CCY.value, document.MAINFORM.FA_CB_FEE.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_CB_FEE_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DOC_CCY_onchange = function(event) {
    try {
        var num; // Utility Auto Fix Comments
        SYF_FAEF_Get_EXCH_RT6();
        SYF_FAEF_Get_EXCH_RT4();
        SYF_FAEF_Cal_forRealChgRT();
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
        /***
if(document.MAINFORM.FA_EF_HAN_CHG_CCY.value==document.MAINFORM.FA_DOC_CCY.value){
document.MAINFORM.FA_EF_HAN_CHG_PAMT.value=document.MAINFORM.FA_EF_HAN_CHG_AMT.value;
}else{
document.MAINFORM.FA_EF_HAN_CHG_PAMT.value=0;
}
if(document.MAINFORM.FA_DOC_CCY.value==document.MAINFORM.FA_IF_HAN_CHG_CCY.value){
document.MAINFORM.FA_IF_HAN_CHG_PAMT.value=document.MAINFORM.FA_IF_HAN_CHG_AMT.value;
}else{
document.MAINFORM.FA_IF_HAN_CHG_PAMT.value=0;
}
***/
        num = SYS_getcurrRecordCount("InvTRF");
        if (num > 0) {
            EEHtml.fireEvent(document.MAINFORM.FA_EF_HAN_CHG_PAMT, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.FA_IF_HAN_CHG_PAMT, 'onchange');
        }

        SYF_FAEF_Cal_FINC_CCY1();
        SYF_FAEF_Cal_FA_INV_CCY();
        SYF_FAEF_MPO_cableChargeCCYReload();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_DOC_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_EF_HAN_CHG_AMT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_forRealChgRT();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_EF_HAN_CHG_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_EF_HAN_CHG_PAMT_onchange = function(event) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var doObj_InvTRF; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        //SYS_refreshChildDoValue('InvTRF','FA_EF_HAN_CHG_PAMT',document.MAINFORM.FA_EF_HAN_CHG_PAMT.value);
        node = SYS_getDoByXpath('InvTRF');
        mData = [];
        arrayvalue = SYS_getRecords(node);
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            type = SYS_getRecState(record);
            record = SYS_setValToRec(record, 'FA_EF_HAN_CHG_PAMT', document.MAINFORM.FA_EF_HAN_CHG_PAMT.value);
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
        doObj_InvTRF = SYS_getDoByXpath('InvTRF');
        //(doObj_InvTRF);
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_EF_HAN_CHG_PAMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IF_COMM_SUM_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.FA_SEL_AC_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_IF_COMM_SUM_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IF_HAN_CHG_AMT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_forRealChgRT();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_IF_HAN_CHG_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IF_HAN_CHG_PAMT_onchange = function(event) {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var doObj_InvTRF; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var type; // Utility Auto Fix Comments
        //SYS_refreshChildDoValue('InvTRF','FA_IF_HAN_CHG_PAMT',document.MAINFORM.FA_IF_HAN_CHG_PAMT.value);
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            node = SYS_getDoByXpath('InvTRF');
            mData = [];
            arrayvalue = SYS_getRecords(node);
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                type = SYS_getRecState(record);
                record = SYS_setValToRec(record, 'FA_IF_HAN_CHG_PAMT', document.MAINFORM.FA_IF_HAN_CHG_PAMT.value);
                mData.push(record);
            }
            SYS_reLoadGrid(node, mData);
            doObj_InvTRF = SYS_getDoByXpath('InvTRF');
            //doObj_InvTRF;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_IF_HAN_CHG_PAMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_IF_HAN_CHG_SUM_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_IF_HAN_CHG_SUM_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LMT_CCY_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_LMT_CCY_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PRM_DISC_RT_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_PRM_DISC_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TEMP4_onchange = function(event) {
    try {
        SYF_FAEF_Chk_PmtTerms();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_TEMP4_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TRF_DT_onchange = function(event) {
    try {
        SYF_FAEF_Get_Princing_Info();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_TRF_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_COMM_RT_onchange = function(event) {
    try {
        SYF_FAEF_Chk_FA_TTL_COMM_RT();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_TTL_COMM_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_INV_AMT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_forFSBCBal();
        EEHtml.fireEvent(document.MAINFORM.FA_TEMP_AMT11, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.FA_TEMP_AMT12, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.RPT_OTHER_AMT1, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.RPT_TRX_BAL1, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.RPT_OTHER_AMT2, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.RPT_TRX_BAL2, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_FA_TTL_INV_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_RPT_OTHER_AMT2_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_RPT_OTHER_AMT2_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_InvoiceTransfer.js*FLD_FAEF_view_1_onclick", e);
    }
}