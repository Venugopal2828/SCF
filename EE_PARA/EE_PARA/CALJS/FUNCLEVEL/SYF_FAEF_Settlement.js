var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments

        _do = SYS_getDoByXpath('Settle_New'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("Settle_New");
        if (num == 0) {
            alert('The transaction can not be confirmed without any invoice record!');
            return false;
        }
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                recordTypeTemp = record['FA_PMT_AMT']; // Utility Auto Fix Comments
                if (recordTypeTemp == 0) {
                    alert('Please eidt the Invoice records before confirm the transaction!');
                    return false;
                }
            }
        }

        _do = SYS_getDoByXpath('Settle_pmt_po'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("Settle_pmt_po");
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                recordTypeTemp = record['FA_PMT_AMT']; // Utility Auto Fix Comments
                if (recordTypeTemp == 0) {
                    alert('Please eidt the PO records before confirm the transaction!');
                    return false;
                }
            }
        }

        if (!SYF_FAEF_Chk_AMOUNT()) {
            return false;
        }
        if (!SYF_FAEF_chk_FA_PMT_DT()) {
            return false;
        }
        if (SYS_FUNCTION_TYPE == 'PM' && document.MAINFORM.TSU_BK_BPO_FLG.value == 'true') {
            if (!SYF_FAEF_CheckDOEdit()) {
                return false;
            }
        }
        /*
if(!SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL()){
	return false;
}
*/
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_AMOUNT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_SEL_AC_AMT.value) < 0) {
            return confirm("This amount: " + document.MAINFORM.FA_PMT_CCY.value + (-SYS_BeFloat(document.MAINFORM.FA_SEL_AC_AMT.value)) + " should claim from the customer");
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if (document.MAINFORM.TSU_BK_BPO_FLG.value == 'true') {
            if (SYS_FUNCTION_TYPE == 'PM') {
                SYS_GetDataForDO_S("GET_BPO_PO_INFO", "N", false, '', "BPO_PAY_OBLIGOR");
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var DCMrk; // Utility Auto Fix Comments
        var LmtAmt1; // Utility Auto Fix Comments
        var LmtAmt2; // Utility Auto Fix Comments
        var LmtID; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        var recs; // Utility Auto Fix Comments
        //SYM_FAEF_forBAFields();
        //document.MAINFORM.RPT_TRX_REF_NO1.value = document.MAINFORM.FA_PMT_REF.value;
        LMTS.Ext.deleteAll();
        if (document.MAINFORM.FA_BA_FLG.value == "1" && document.MAINFORM.FA_LMT_TYPE.value == "1") {
            DCMrk = "";
            _do = SYS_getDoByXpath('Settle_New'); // Utility Auto Fix Comments
            recs = SYS_getRecords(_do); // Utility Auto Fix Comments
            if (recs.length > 0) {
                arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
                for (i = 0, len = arrayvalue.length; i < len; i++) {
                    record = arrayvalue[i];
                    recordTypeTemp = record['FA_DOC_TYPE'];
                    LmtID = record['FA_INV_LINK_REF'];
                    LmtAmt1 = record['FA_TEMP_INV_BA'];
                    LmtAmt2 = record['FA_TEMP_CRN_BA'];
                    if (recordTypeTemp == "1") {
                        DCMrk = "C";
                        LMTS.Ext.invPayment(LmtID, DCMrk, LmtAmt1);
                    } else if (recordTypeTemp == "2") {
                        DCMrk = "D";
                        LMTS.Ext.invPayment(LmtID, DCMrk, LmtAmt2);
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'STL';
        document.MAINFORM.FA_PMT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_PMT_VAL_DT.value = document.MAINFORM.FA_PMT_DT.value;
        document.MAINFORM.FA_MSG_TEXT02.value = '';
        document.MAINFORM.FA_TEMP_TRX_DT.value = document.MAINFORM.FA_PMT_VAL_DT.value;
        SYS_GetRefNo('FAEF_PMT_GUR', 'SYF_FAEF_Cal_SetRefNo', "", "PAYREF", "", "PAYREF");
        SYF_FAEF_GET_PMT_CCY();
        SYF_FAEF_CreditCover_FSB_Inq();
        SYF_FAEF_MLDC_SetDebitCreditData();

        document.MAINFORM.FA_OTH_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_OTH_CHG_CCY.value, document.MAINFORM.FA_OTH_CHG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_AMTTOSELLER = function() {
    try {

        var selamt; // Utility Auto Fix Comments
        selamt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) * 1000 - SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value) * 1000 - SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) * 1000 + SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value) * 1000;
        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(selamt) / 1000;
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_FAEF_FA_PMT_TYPE();
        SYF_FAEF_HIDDEN_PO_INV_TTL_INPO();
        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_TEMP4.value = SYS_ORG_FUNCTION_SHORT_NAME;
        SYF_FAEF_GET_PMT_CCY();
        SYF_FAEF_Change_Obligation_Tab();
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_FA_PMT_TYPE = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_TYPE, 'O');

            document.MAINFORM.FA_PMT_TYPE.remove(2);

        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_TYPE, 'P'); // Utility Auto Fix Comments

            document.MAINFORM.FA_PMT_TYPE.value = 'PMT';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_SetRefNo = function(ref) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        //UnitCode=UnitCode.substr(0,4);
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = document.MAINFORM.FA_PMT_TYPE.value;
        document.MAINFORM.FA_PMT_REF.value = pre + UnitCode + year + month + ref + sub;
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_PMT_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_GET_PMT_CCY = function() {
    try {

        var sMappingList; // Utility Auto Fix Comments
        var tempFA_PMT_CCY; // Utility Auto Fix Comments
        sMappingList = "FA_PMT_CCY";
        var ary1, ary2;
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DISC' || document.MAINFORM.FA_BUSI_TYPE.value == 'RD' || document.MAINFORM.FA_BUSI_TYPE.value == 'CD') {
            document.MAINFORM.FA_PMT_CCY.options.length = 0;
            SYS_GetTableDataByRule_S('SYF_FAEF_Settlement_SYF_FAEF_GET_PMT_CCY_1', '1', null, 'Y', "Y");
            /*if (document.MAINFORM.FA_PMT_CCY.value == '') {
                SYS_GetTableDataByRule_S('Get_PMT_CCY_FOR_CE', '1', null, 'Y', "Y");
                document.MAINFORM.FA_CE_MAIN_REF.value = C_FUNC_SHORT_NAME;
            }*/
            SYM_FAEF_RefreshOptions(sMappingList);
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            document.MAINFORM.FA_PMT_CCY.options.length = 0;
            SYS_GetTableDataByRule_S('SYF_FAEF_Settlement_SYF_FAEF_GET_PMT_CCY_1', '1', null, 'Y', "Y");
            ary1 = SYF_FAEF_RefreshDuplicate();
            SYS_GetTableDataByRule_S('Get_PO_CCY_FOR_SETTLE', '1', null, 'Y', "Y");
            ary2 = SYF_FAEF_RefreshDuplicate();
            for (var i = 0, l = ary2.length; i < l; i++) {
                if (ary1.contains(ary2[i])) {
                    continue;
                }
                ary1.push(ary2[i]);
            }
            var objFld = EEHtml.getElementById(sMappingList);
            var fldValue;
            if (objFld) {
                objFld.options[0] = new Option("", "");
                for (var i = 0; i < ary1.length; i++) {
                    fldValue = ary1[i];
                    objFld.options.add(new Option(fldValue, fldValue));
                }
            }
        }
        if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {

            window_onload.toString().match(/fv\(\'FA_PMT_CCY\'\,\'(.*)\'\);/mg);
            tempFA_PMT_CCY = RegExp.$1;
            document.MAINFORM.FA_PMT_CCY.value = tempFA_PMT_CCY;
        }
        SYT_ChangeFldClass(document.MAINFORM.FA_PMT_CCY, 'M');
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            document.MAINFORM.FA_PMT_CCY.options.add(new Option(SYS_LOCAL_CCY, SYS_LOCAL_CCY));
            document.MAINFORM.FA_PMT_CCY.value = SYS_LOCAL_CCY;
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_CCY, 'P');
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            SYS_GetTableDataByRule_S('SYF_FAEF_Settlement_SYF_FAEF_GET_PMT_CCY_1', '1', null, 'Y', "Y");
            SYM_FAEF_RefreshOptions(sMappingList);
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_CCY, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_CreditCover_FSB_Inq = function() {
    try {

        var FA_LMT_APPRV; // Utility Auto Fix Comments
        var FA_LMT_BAL; // Utility Auto Fix Comments
        var FA_LMT_EXTRA; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        //sFieldList = "LM_BASE_CCY;LM_CRED_LMT;LM_CRED_LMT;LM_OUTC_APL;LM_OUTC_APV;LM_OUTD_APL;LM_OUTD_APV;LM_OUTD_APLO;LM_OUTD_APVO;LM_OUTC_APLO;LM_OUTC_APVO";
        //sMappingList = "FA_LMT_CCY;FA_LMT_APPRV;LM_CRED_LMT;LM_OUTC_APL;LM_OUTC_APV;LM_OUTD_APL;LM_OUTD_APV;LM_OUTD_APLO;LM_OUTD_APVO;LM_OUTC_APLO;LM_OUTC_APVO";
        SYS_GetTableDataByRule_S('SYF_FAEF_Settlement_SYF_FAEF_CreditCover_FSB_Inq_2', '1', 'Y');
        FA_LMT_BAL = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APL.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value);
        FA_LMT_EXTRA = SYS_BeFloat(document.MAINFORM.LM_OUTD_APLO.value) - SYS_BeFloat(document.MAINFORM.LM_OUTC_APLO.value) + SYS_BeFloat(document.MAINFORM.LM_OUTD_APVO.value) - SYS_BeFloat(document.MAINFORM.LM_OUTC_APVO.value);
        FA_LMT_APPRV = SYS_BeFloat(document.MAINFORM.FA_LMT_APPRV.value);
        document.MAINFORM.FA_LMT_APPRV.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_APPRV);
        document.MAINFORM.FA_LMT_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_BAL);
        document.MAINFORM.FA_LMT_EXTRA.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_EXTRA);
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_chk_FA_PMT_DT = function() {
    try {

        var subdays; // Utility Auto Fix Comments
        subdays = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_PMT_DT.name);
        if (subdays < 0) {
            SYS_CheckError(document.MAINFORM.FA_PMT_DT, "Payment date can not be early than transaction date!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('MultiDebitSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiDebitSummary");

        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recordTypeTemp = record['N_MLDC_AMT']; // Utility Auto Fix Comments
                if (SYS_BeFloat(recordTypeTemp) != SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value)) {
                    alert('Multi Debit Amount is not equal to Payment Amount!');
                    return false;
                }
            }
        }

        _do = SYS_getDoByXpath('MultiCreditSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiCreditSummary");

        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recordTypeTemp = record['N_MLDC_AMT']; // Utility Auto Fix Comments
                if (SYS_BeFloat(recordTypeTemp) != SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value)) {
                    alert('Multi Credit Amount is not equal to Payment Amount!');
                    return false;
                }
            }
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MLDC_SetDebitCreditData = function() {
    try {

        var actions; // Utility Auto Fix Comments
        var ccyProtecteFlgs; // Utility Auto Fix Comments
        var comp; // Utility Auto Fix Comments
        var dcFlgs; // Utility Auto Fix Comments
        var descs; // Utility Auto Fix Comments
        var keyindex; // Utility Auto Fix Comments
        var merges; // Utility Auto Fix Comments
        var payAMTs; // Utility Auto Fix Comments
        var payCCYs; // Utility Auto Fix Comments
        var pmttype; // Utility Auto Fix Comments
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "";
        pmttype = document.MAINFORM.FA_PMT_TYPE.value;
        descs = "Payment";
        dcFlgs = "D/C"; //debit and credit group
        keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + document.MAINFORM.C_MAIN_REF.value;
        payCCYs = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
        payAMTs = document.MAINFORM.FA_PMT_AMT_SUM.value + "/" + document.MAINFORM.FA_PMT_AMT_SUM.value;
        descs += "/Payment";
        ccyProtecteFlgs = "N/N"; //protected ccy
        actions = "S/S"; //save
        merges = "N/N";
        comp = "Payment";
        SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);

      /* Add for pay unfinance invoices on 20240429- S*/
        if(SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) > 0 &&document.MAINFORM.FA_SETTLE_FLG.value =='Unfinanced Invoices' ) {
            descs = "Payment Amount/Amount to Seller";
            dcFlgs = "D/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value +  "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_SBR_CCY.value + "/" + document.MAINFORM.FA_SBR_CCY.value;
            payAMTs = document.MAINFORM.FA_PMT_AMT_SUM.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
            ccyProtecteFlgs = "N/N"; //protected ccy
            actions = "S/S"; //save
            merges = "N/N";
            comp = "Payment";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        }
        /* Add for pay unfinance invoices on 20240429- E*/

        //if(SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value)>0){
        descs1 = "Refund Interest";
        dcFlgs1 = "D/C"; //debit and credit group
        keyindex1 = document.MAINFORM.FA_SEL_ID.value + "/" + document.MAINFORM.FA_SEL_ID.value;
        payCCYs1 = document.MAINFORM.FA_PMT_CCY.value + "/" + document.MAINFORM.FA_PMT_CCY.value;
        payAMTs1 = document.MAINFORM.FA_TTL_REFUND_INT.value + "/" + document.MAINFORM.FA_TTL_REFUND_INT.value;
        descs1 += "/Refund Interest";
        ccyProtecteFlgs1 = "N/N"; //protected ccy
        actions1 = "S/S"; //save
        merges1 = "N/N";
        comp1 = "Refund Interest";
        SYT_MLDC_SaveSummary(dcFlgs1, keyindex1, payCCYs1, descs1, payAMTs1, ccyProtecteFlgs1, actions1, merges1, comp1);
        //}
        
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_GET_SETTL_EF = function() {
    try {

        var faPmtCcy; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var tmpCcy; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            //sFieldList = "FA_PMT_DT;FA_PMT_REF;FA_PMT_TYPE;FA_PMT_CCY;FA_PMT_AMT_SUM;FA_TTL_AMT_CLEARED;FA_TTL_AMT_DEDUCT;THEIR_REF_NO";
            //sMappingList = "FA_PMT_DT;FA_TEMP2;FA_PMT_TYPE;ACC_CCY;FA_PMT_AMT_SUM;FA_TTL_AMT_CLEARED;FA_TTL_AMT_DEDUCT;THEIR_REF_NO";

            SYS_GetTableDataByRule_S('SYF_FAEF_Settlement_SYF_FAEF_GET_SETTL_EF_3', '1', "Y");

            tmpCcy = document.MAINFORM.ACC_CCY.value;

            if (tmpCcy != null && tmpCcy != "") {
                faPmtCcy = document.MAINFORM.FA_PMT_CCY;
                faPmtCcy.options.add(new Option(tmpCcy, tmpCcy));
            }
            SYF_FAEF_GET_EF_DO();
            document.MAINFORM.FA_PMT_AMT_SUM.value = SYT_AmtFormat(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_PMT_AMT_SUM.value);
            document.MAINFORM.FA_TTL_AMT_CLEARED.value = SYT_AmtFormat(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_TTL_AMT_CLEARED.value);
            document.MAINFORM.FA_TTL_AMT_DEDUCT.value = SYT_AmtFormat(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_TTL_AMT_DEDUCT.value);
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_TYPE, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_CCY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TEMP_DUE_DT, 'P', 'N');
            SYS_disableButton('Settle_New', 'deletebutton');
            SYS_disableButton('Settle_New', 'GetData');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_GET_EF_DO = function() {
    try {

        //SYS_GetDataForDO_S('settlement');
        SYS_GetDataForDO_S("settlement", "N", false, '', "Settle_New");
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_dcmMul = function(arg1, arg2) {
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
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_dcmAdd = function(arg1, arg2) {
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
        return (SYF_FAEF_dcmMul(arg1, m) + SYF_FAEF_dcmMul(arg2, m)) / m;
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Change_Obligation_Tab = function() {
    try {

        if (document.MAINFORM.TSU_BK_BPO_FLG.value == 'true') {
            EEHtml.getElementById('W').style.display = '';
            SYT_EnableDivClass('W_div');
        } else {
            EEHtml.getElementById('W').style.display = 'none';
            SYT_DisableDivClass('W_div');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_LoadDoComplete = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            if (document.MAINFORM.TSU_BK_BPO_FLG.value == 'true') {
                SYS_GetDataForDO_S("GET_BPO_PO_INFO", "N", false, '', "BPO_PAY_OBLIGOR");
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_CheckDOEdit = function() {
    try {

        var _do;
        var arrayvalue;
        var i;
        var mData;
        var num;
        var record;
        var type;
        _do = SYS_getDoByXpath('BPO_PAY_OBLIGOR');
        num = SYS_getcurrRecordCount("BPO_PAY_OBLIGOR");
        mData = [];
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do);
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                type = SYS_getRecState(record);
                if ('E' == type) {
                    return true;
                } else {
                    alert("Should edit the Payment Obligation DO first!");
                    return false;
                }
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Payment_Information = function() {
    try {

        document.MAINFORM.FA_PMT_AMT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, SYS_BeFloat(document.MAINFORM.FA_INV_PMT_AMT_SUM.value));
        document.MAINFORM.FA_PAID_PRIN_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, SYS_BeFloat(document.MAINFORM.FA_PO_PAID_PRIN_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_INV_PAID_PRIN_SUM.value));
        document.MAINFORM.FA_PAID_INT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, SYS_BeFloat(document.MAINFORM.FA_PO_PAID_INT_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_INV_PAID_INT_SUM.value));
        document.MAINFORM.FA_TTL_AMT_CLEARED.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, SYS_BeFloat(document.MAINFORM.FA_INV_TTL_AMT_CLEARED.value));
        document.MAINFORM.FA_OVDUE_INT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, SYS_BeFloat(document.MAINFORM.FA_PO_OVDUE_INT_SUM.value) + SYS_BeFloat(document.MAINFORM.FA_INV_OVDUE_INT_SUM.value));
        document.MAINFORM.FA_TTL_REFUND_INT.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, SYS_BeFloat(document.MAINFORM.FA_PO_TTL_REFUND_INT.value) + SYS_BeFloat(document.MAINFORM.FA_INV_TTL_REFUND_INT.value));

    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_RefreshDuplicate = function() {
    try {

        var arrayValue; // Utility Auto Fix Comments
        var ary; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var newOption; // Utility Auto Fix Comments
        var objFld; // Utility Auto Fix Comments
        var optionAry; // Utility Auto Fix Comments
        optionAry = new Array();
        newOption = new Array();
        for (i = 0; i < SYS_MULTI_DATA.length; i++) { // Utility Auto Fix Comments
            arrayValue = SYS_MULTI_DATA[i][1];
            if (arrayValue == null || arrayValue == "undefined" || arrayValue == "") {
                continue;
            }
            for (j = 0; j < arrayValue.length; j++) {
                optionAry.push(arrayValue[j]);
            }
        }
        while (true) {
            ary = optionAry.pop();
            if (!ary) {
                break;
            }
            if (optionAry.contains(ary)) {
                optionAry.splice(optionAry.indexOf(ary), 1, ary);
            } else {
                newOption.push(ary);
            }
        }
        return newOption;
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_ForAmtFormat = function() {
    try {

        document.MAINFORM.FA_INV_OVDUE_INT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_INV_OVDUE_INT_SUM.value)
        document.MAINFORM.FA_INV_PAID_INT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_INV_PAID_INT_SUM.value)
        document.MAINFORM.FA_INV_PAID_PRIN_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_INV_PAID_PRIN_SUM.value)
        document.MAINFORM.FA_INV_PMT_AMT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_INV_PMT_AMT_SUM.value)
        document.MAINFORM.FA_INV_TTL_AMT_CLEARED.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_INV_TTL_AMT_CLEARED.value)
        document.MAINFORM.FA_INV_TTL_REFUND_INT.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_INV_TTL_REFUND_INT.value)
        document.MAINFORM.FA_INV_TTL_AMT_DEDUCT.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_INV_TTL_AMT_DEDUCT.value)
        document.MAINFORM.FA_PO_OVDUE_INT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_PO_OVDUE_INT_SUM.value)
        document.MAINFORM.FA_PO_PAID_INT_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_PO_PAID_INT_SUM.value)
        document.MAINFORM.FA_PO_PAID_PRIN_SUM.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_PO_PAID_PRIN_SUM.value)
        document.MAINFORM.FA_PO_TTL_REFUND_INT.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_PO_TTL_REFUND_INT.value)

    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_HIDDEN_PO_INV_TTL_INPO = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            EEHtml.getElementById('line1').style.display = '';
            EEHtml.getElementById('line2').style.display = '';
            EEHtml.getElementById('line3').style.display = '';
            EEHtml.getElementById('line5').style.display = '';
            EEHtml.getElementById('line6').style.display = '';
            EEHtml.getElementById('line7').style.display = '';
            EEHtml.getElementById('line8').style.display = '';
            EEHtml.getElementById('line9').style.display = '';
        } else {
            EEHtml.getElementById('line1').style.display = 'none';
            EEHtml.getElementById('line2').style.display = 'none';
            EEHtml.getElementById('line3').style.display = 'none';
            EEHtml.getElementById('line5').style.display = 'none';
            EEHtml.getElementById('line6').style.display = 'none';
            EEHtml.getElementById('line7').style.display = 'none';
            EEHtml.getElementById('line8').style.display = 'none';
            EEHtml.getElementById('line9').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_OVDUE_INT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_AMTTOSELLER();
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_INT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_AMTTOSELLER();
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_PRIN_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_AMTTOSELLER();
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_AMT_SUM_onchange = function(event) {
    try {
        SYF_FAEF_Cal_AMTTOSELLER();
        SYF_FAEF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_CCY_onchange = function(event) {
    try {
        SYF_FAEF_ForAmtFormat();
        SYF_FAEF_Cal_Payment_Information();
        SYF_FAEF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_DT_onchange = function(event) {
    try {
        SYF_FAEF_chk_FA_PMT_DT();
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_TYPE_onchange = function(event) {
    try {
        SYS_GetRefNo('FAEF_PMT_GUR', 'SYF_FAEF_Cal_SetRefNo', "", "PAYREF", "", "PAYREF");
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_VAL_DT_onchange = function(event) {
    try {
        SYS_refreshChildDoValue('Settle_New', 'FA_PMT_VAL_DT', document.MAINFORM.FA_PMT_VAL_DT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_REFUND_INT_onchange = function(event) {
    try {
        SYF_FAEF_Cal_AMTTOSELLER();
        if (SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.FA_TXT_REFUNDINT, 'M');

        } else {

            SYT_ChangeFldClass(document.MAINFORM.FA_TXT_REFUNDINT, 'O');

        }
        SYF_FAEF_MLDC_SetDebitCreditData();
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_Settlement.js", e);
    }
}