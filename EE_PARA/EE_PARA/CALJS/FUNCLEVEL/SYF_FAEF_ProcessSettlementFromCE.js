var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.FA_TEMP2.value = 'STL';
        document.MAINFORM.FA_CE_MAIN_REF = ' ';
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        //if(SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_BAL.value)!=0){
        if (!SYT_checkFactoringChildRecord('Settle_New')) {
            return false;
        }
        //}
        /*if(document.MAINFORM.FA_SETTLE_TYPE.value!='FULL_INTEREST'&&document.MAINFORM.FA_SETTLE_TYPE.value!='PART_SETL'){
        var _do=SYS_getDoByXpath('Settle_New');
        num=SYS_getcurrRecordCount("Settle_New");
        if(num>0){
        	var arrayvalue= SYS_getRecords(_do);
        	for(var i=0,len=arrayvalue.length;i<len;i++){
        	var record = arrayvalue[i];
        	var recordTypeTemp = record['FA_PMT_AMT']
        	if(recordTypeTemp==0){
        		alert('Please edit the records before confirm the transaction!');
        		return false;
                 }
        	}	
        }
        }*/
        /*if(!SYF_FAEF_Chk_AMOUNT()){
        	return false;
        }*/
        if (!SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL()) {
            return false;
        }
        if (!SYT_MLDC_ValidateBalance()) {
            return false;
        }
        /*document.MAINFORM.FA_GAPI_ACC.value="";
         var Sql_Cond1 = "IA_C_REF_NO = '"+document.MAINFORM.FA_LOAN_ID.value+ "'";
         var Field_List = "IA_C_REF_NO";
         var Mapping_List = "FA_GAPI_ACC";
         SYS_GetTableData_S('EXIMTRX.IAAC_ACCEVENTLAY',Sql_Cond1,Field_List,Mapping_List,true);*/
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_BUSI_STATUS.value = 'STL';
        document.MAINFORM.FA_PMT_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_SBR_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_PMT_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_PMT_VAL_DT.value = document.MAINFORM.FA_PMT_DT.value;
        document.MAINFORM.FA_MSG_TEXT02.value = '';
        //document.MAINFORM.FA_PMT_AMT_SUM.value = 0;
        document.MAINFORM.FA_PAID_PRIN_SUM.value = 0;
        document.MAINFORM.FA_TTL_AMT_CLEARED.value = 0;
        document.MAINFORM.FA_SEL_AC_AMT.value = 0;
        document.MAINFORM.FA_LOAN_INT_RT.value = SYS_FloatAdd(SYS_BeFloat(document.MAINFORM.XBOR_RT.value), SYS_BeFloat(document.MAINFORM.FA_IRT_SPREAD.value));

        SYF_FAEF_FA_PMT_TYPE();
        //SYS_GetRefNo('SCF_INV_SETTLE', 'SYF_FAEF_Cal_SetRefNo', "", "PAYREF", "", "PAYREF");
        //SYM_FAEF_CreditCover_FSB_Inq();

        //document.MAINFORM.FA_OTH_CHG_AMT.value=SYT_AmtFormat(document.MAINFORM.FA_OTH_CHG_CCY.value,document.MAINFORM.FA_OTH_CHG_AMT.value);
        document.MAINFORM.TEMP_DUE_DT.value = SYS_BUSI_DATE;




        SYS_GetRefNo('FAEF_PMT_GUR', 'SYF_FAEF_Cal_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            var subday = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_PMT_DT.name);
            if (subday > 0) {
                document.MAINFORM.TEMP_TRX_DT.value = document.MAINFORM.FA_PMT_DT.value;
            } else {
                document.MAINFORM.TEMP_TRX_DT.value = SYS_BUSI_DATE;
            }
        }
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
        document.MAINFORM.FA_TEMP4.value = SYS_ORG_FUNCTION_SHORT_NAME;
        /*if(document.MAINFORM.FA_PMT_DT.value !== SYS_BUSI_DATE && SYS_FUNCTION_TYPE==='RE'){
        	SYT_restrictRelease();
        	}*/
        /*if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ') {

            SYS_highTrxButton("_save", "_confirm", "_cancel", "_vchview", "_transaction");
        }*/
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_AMTTOSELLER = function() {
    try {
        var selamt; // Utility Auto Fix Comments
        //selamt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) * 1000 - SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value) * 1000 - SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) * 1000 + SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value) * 1000;
        selamt = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) * 1000 - SYS_BeFloat(document.MAINFORM.FA_PAID_INT_SUM.value) * 1000 - SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) * 1000;
        document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(selamt) / 1000;
        document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_PMT_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);

        if (document.MAINFORM.FA_SETTLE_FLG.value == 'Unfinanced Invoices') {
            var arrayvalue; // Utility Auto Fix Comments
            var docamt; // Utility Auto Fix Comments
            var invsum;
            var percent;
            var invamtsum;
            var i; // Utility Auto Fix Comments
            var id; // Utility Auto Fix Comments
            var mData; // Utility Auto Fix Comments
            var node; // Utility Auto Fix Comments
            var record; // Utility Auto Fix Comments
            node = SYS_getDoByXpath("Settle_New");
            arrayvalue = SYS_getRecords(node);
            mData = [];
            invamtsum = 0;
            for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                record = arrayvalue[i];
                id = SYS_getRecID(record);
                docamt = SYS_getValFromRec(record, 'FA_ADJ_AMT');
                invamtsum = SYS_FloatAdd(invamtsum, docamt);
            }
            percent = SYS_getValueFromMain('FA_MAX_LOAN_PERC');
            invsum = SYS_FloatMul(invamtsum, percent) / 100;
            invsum = SYT_AmtFormat(document.MAINFORM.FA_PMT_CCY.value, invsum);
            SYS_setValueToMain('FA_ORG_LMT_AMT', invsum);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_Cal_AMTTOSELLER", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_ChargeFor = function() {
    try {
        var trxChgArr = Chg.Screen.getAllTrxCharge();
        if (document.MAINFORM.FA_BUSI_TYPE.value === "RD" || document.MAINFORM.FA_BUSI_TYPE.value === "IF") {
            for (var i = 0; i < trxChgArr.length; i++) {
                var charge = trxChgArr[i];
                var ID = "CHG_FLD_CHARGE_FOR_" + charge.index;
                document.getElementById(ID).options[0].text = "Seller";
                document.getElementById(ID).options[1].text = "Buyer";
            }
        } else {
            for (var i = 0; i < trxChgArr.length; i++) {
                var charge = trxChgArr[i];
                var ID = "CHG_FLD_CHARGE_FOR_" + charge.index;
                document.getElementById(ID).options[0].text = "Buyer";
                document.getElementById(ID).options[1].text = "Seller";
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_Cal_ChargeFor", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_PAY_SEQ = function(ref) {
    try {
        var reqDate = SYS_BUSI_DATE;
        var dateObj = SYT_GetDateObjectFromStr(reqDate);
        var juldate = String(dateObj.getYear()).substring(2, 4) + String(SYT_getDOY(dateObj));
        var prod = ref.substr(0, 2);
        var seqNumber = ref.substr(2, 6);
        var seq = prod + juldate + seqNumber;
        document.MAINFORM.FA_PAY_SEQ.value = seq;
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_Cal_PAY_SEQ", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_SetRefNo = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(0, 4);
        document.MAINFORM.FA_PMT_REF.value = pre + UnitCode + year.substr(2, 4) + ref + 'PMT';
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_PMT_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_Cal_SetRefNo", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_TRX_Value = function() {
    try {
        document.MAINFORM.TRX_CCY.value = document.MAINFORM.FA_PMT_CCY.value;
        if (SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) > 0) {
            document.MAINFORM.TRX_AMT.value = document.MAINFORM.FA_PMT_AMT_SUM.value;
        } else {
            document.MAINFORM.TRX_AMT.value = document.MAINFORM.FA_BU_AMT.value;
        }
        document.MAINFORM.TRX_STATUS.value = 'Invoice Settled';
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_Cal_TRX_Value", e);
    }
}

csFuncLevelProto.SYF_FAEF_CheckTotalIInterest = function() {
    try {
        var baseINT = SYS_BeFloat(document.MAINFORM.FA_BASE_INT_PAID.value);
        var marginINT = SYS_BeFloat(document.MAINFORM.FA_BUSI_MARGIN_PAID.value);
        var penaltyINT = SYS_BeFloat(document.MAINFORM.FA_PEN_INT_AMT.value);
        var sumINT = SYS_FloatAdd(SYS_FloatAdd(baseINT, marginINT), penaltyINT);
        var sumINT = SYT_AmtFormat(document.MAINFORM.FA_SBR_CCY.value, SYS_FloatAdd(SYS_FloatAdd(baseINT, marginINT), penaltyINT));
        if (SYS_BeFloat(document.MAINFORM.FA_TTL_AMT_PAID.value) != SYS_BeFloat(sumINT)) {
            alert('The Total Interest to be paid must be equal to the sum of the interest amounts. Please check');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_CheckTotalIInterest", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_AMOUNT = function() {
    try {
        if (SYS_BeFloat(document.MAINFORM.FA_SEL_AC_AMT.value) < 0) {
            return confirm("This amount: " + document.MAINFORM.FA_PMT_CCY.value + (-SYS_BeFloat(document.MAINFORM.FA_SEL_AC_AMT.value)) + " should claim from the customer");
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_Chk_AMOUNT", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        var sum; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('MultiDebitSummary'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("MultiDebitSummary");
        if (num > 0) {
            /*arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recordTypeTemp = record['N_MLDC_AMT'];
                if (SYS_BeFloat(recordTypeTemp) != SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value)) {
                    alert('Multi Debit Amount is not equal to Payment Amount!');
                    return false;
                }
            }*/
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiDebitSummary'));
            if (sum != SYS_FloatAdd(SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value), SYS_BeFloat(document.MAINFORM.FA_REBATE_AMT.value))) {
                alert('Multi Debit Amount is not equal to Payment Amount!');
                return false;
            }
        }


        num = SYS_getcurrRecordCount("MultiCreditSummary");

        if (num > 0) {
            sum = SYS_BeFloat(SYS_getFieldSumByDoName('N_MLDC_AMT', 'MultiCreditSummary'));
            if (sum != SYS_FloatAdd(SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value), SYS_BeFloat(document.MAINFORM.FA_REBATE_AMT.value))) {
                alert('Multi Credit Amount is not equal to Payment Amount!');
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_Chk_MultiDebit_MultiCredit_BAL", e);
    }
}

csFuncLevelProto.SYF_FAEF_CreditCover_FSB_Inq = function() {
    try {
        //var sFieldList = "LM_BASE_CCY;LM_CRED_LMT;LM_CRED_LMT;LM_OUTC_APL;LM_OUTC_APV;LM_OUTD_APL;LM_OUTD_APV;LM_OUTD_APLO;LM_OUTD_APVO;LM_OUTC_APLO;LM_OUTC_APVO";
        //var sMappingList = "FA_LMT_CCY;FA_LMT_APPRV;LM_CRED_LMT;LM_OUTC_APL;LM_OUTC_APV;LM_OUTD_APL;LM_OUTD_APV;LM_OUTD_APLO;LM_OUTD_APVO;LM_OUTC_APLO;LM_OUTC_APVO";
        //SYS_GetTableData_SvrSql_S("GET_Credit_Cover_FSB", "C_MAIN_REF", sFieldList, sMappingList, 'Y');
		SYS_GetTableDataByRule_S('GET_Credit_Cover_FSB', '1', 'Y');
        var FA_LMT_BAL = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APL.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value);
        var FA_LMT_EXTRA = SYS_BeFloat(document.MAINFORM.LM_OUTD_APLO.value) - SYS_BeFloat(document.MAINFORM.LM_OUTC_APLO.value) + SYS_BeFloat(document.MAINFORM.LM_OUTD_APVO.value) - SYS_BeFloat(document.MAINFORM.LM_OUTC_APVO.value);
        var FA_LMT_APPRV = SYS_BeFloat(document.MAINFORM.FA_LMT_APPRV.value);
        document.MAINFORM.FA_LMT_APPRV.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_APPRV);
        document.MAINFORM.FA_LMT_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_BAL);
        document.MAINFORM.FA_LMT_EXTRA.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_CCY.value, FA_LMT_EXTRA);
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_CreditCover_FSB_Inq", e);
    }
}

csFuncLevelProto.SYF_FAEF_FA_PMT_TYPE = function() {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_TYPE, 'O');

            document.MAINFORM.FA_PMT_TYPE.remove(2);

        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_PMT_TYPE, 'P');

            document.MAINFORM.FA_PMT_TYPE.value = 'PMT';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_FA_PMT_TYPE", e);
    }
}

csFuncLevelProto.SYF_FAEF_FLD_FAEF_ACJENERICDTLSTRINGDO_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_FLD_FAEF_ACJENERICDTLSTRINGDO_onchange", e);
    }
}

csFuncLevelProto.SYF_FAEF_LoadDoComplete = function() {
    try {
        if (SYS_FUNCTION_TYPE === "IQ" || SYS_FUNCTION_TYPE === "RE") {
            SYS_disableButton('Settle_New', 'GetData');
            SYS_disableButton('Settle_New', 'addbutton');
            SYS_disableButton('Settle_New', 'editbutton');
            SYS_disableButton('Settle_New', 'deletebutton');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_LoadDoComplete", e);
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
        var actions1; // Utility Auto Fix Comments
        var ccyProtecteFlgs1; // Utility Auto Fix Comments
        var comp1; // Utility Auto Fix Comments
        var dcFlgs1; // Utility Auto Fix Comments
        var descs1; // Utility Auto Fix Comments
        var keyindex1; // Utility Auto Fix Comments
        var merges1; // Utility Auto Fix Comments
        var payAMTs1; // Utility Auto Fix Comments
        var payCCYs1; // Utility Auto Fix Comments
        var pmttype1; // Utility Auto Fix Comments
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "";
        dcFlgs1 = "";
        keyindex1 = "";
        payCCYs1 = "";
        payAMTs1 = "";
        descs1 = "";
        ccyProtecteFlgs1 = ""; //protected ccy
        actions1 = ""; //save
        merges1 = "";
        comp1 = "";
        var prin_ref = document.MAINFORM.C_MAIN_REF.value + 'PRN';
        var int_ref = document.MAINFORM.C_MAIN_REF.value + 'INT';
        var IntSum = document.MAINFORM.FA_PAID_INT_SUM.value;
        var rebate = document.MAINFORM.FA_REBATE_AMT.value;
        var minus_rebate = SYS_FloatSub(IntSum, rebate);
        var rb_ref = document.MAINFORM.C_MAIN_REF.value + 'RB';
        if (SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) > 0 && SYS_BeFloat(IntSum) > 0 && SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) > 0) {
            descs = "Payment Amount/Principal Paid Amount/Net Interest Paid Amount/Amount to Seller";
            dcFlgs = "D/C/C/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + prin_ref + "/" + int_ref + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_SBR_CCY.value + "/" + document.MAINFORM.FA_SBR_CCY.value + "/" + document.MAINFORM.FA_SBR_CCY.value + "/" + document.MAINFORM.FA_SBR_CCY.value;
            payAMTs = document.MAINFORM.FA_PMT_AMT_SUM.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value + "/" + document.MAINFORM.FA_PAID_INT_SUM.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
            ccyProtecteFlgs = "N/N/N/N"; //protected ccy
            actions = "S/S/S/S"; //save
            merges = "N/N/N/N";
            comp = "Payment";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        } else if (SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) > 0 && SYS_BeFloat(document.MAINFORM.FA_PAID_PRIN_SUM.value) > 0) {
            descs = "Payment Amount/Principal Paid Amount/Amount to Seller";
            dcFlgs = "D/C/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + prin_ref + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_SBR_CCY.value + "/" + document.MAINFORM.FA_SBR_CCY.value + "/" + document.MAINFORM.FA_SBR_CCY.value;
            payAMTs = document.MAINFORM.FA_PMT_AMT_SUM.value + "/" + document.MAINFORM.FA_PAID_PRIN_SUM.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
            ccyProtecteFlgs = "N/N/N"; //protected ccy
            actions = "S/S/S"; //save
            merges = "N/N/N";
            comp = "Payment";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        } else if (SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) > 0 && SYS_BeFloat(IntSum) > 0) {
            descs = "Payment Amount/Net Interest Paid Amount/Amount to Seller";
            dcFlgs = "D/C/C"; //debit and credit group
            keyindex = document.MAINFORM.C_MAIN_REF.value + "/" + int_ref + "/" + document.MAINFORM.FA_SEL_ID.value;
            payCCYs = document.MAINFORM.FA_SBR_CCY.value + "/" + document.MAINFORM.FA_SBR_CCY.value + "/" + document.MAINFORM.FA_SBR_CCY.value;
            payAMTs = document.MAINFORM.FA_PMT_AMT_SUM.value + "/" + document.MAINFORM.FA_PAID_INT_SUM.value + "/" + document.MAINFORM.FA_SEL_AC_AMT.value;
            ccyProtecteFlgs = "N/N/N"; //protected ccy
            actions = "S/S/S"; //save
            merges = "N/N/N";
            comp = "Payment";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
        }
        if (SYS_BeFloat(document.MAINFORM.FA_REBATE_AMT.value) > 0 && document.MAINFORM.FA_BUSI_TYPE.value == 'PF') {
            dcFlgs1 = "D/C"; //debit and credit group
            keyindex1 = rb_ref + "/" + rb_ref;
            payCCYs1 = document.MAINFORM.FA_SBR_CCY.value + "/" + document.MAINFORM.FA_SBR_CCY.value;
            payAMTs1 = rebate + "/" + rebate;
            descs1 = "Rebate Interest/Rebate Interest";
            ccyProtecteFlgs1 = "N/N"; //protected ccy
            actions1 = "S/S"; //save
            merges1 = "N/N";
            comp1 = "Rebate Interest";
            SYT_MLDC_SaveSummary(dcFlgs1, keyindex1, payCCYs1, descs1, payAMTs1, ccyProtecteFlgs1, actions1, merges1, comp1);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_MLDC_SetDebitCreditData", e);
    }
}

csFuncLevelProto.SYF_FAEF_dcmAdd = function(arg1, arg2) {
    try {
        var r1, r2, m;
        try {
            r1 = arg1.toString().split(".")[1].length;
        } catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split(".")[1].length;
        } catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2));
        return (SYF_FAEF_dcmMul(arg1, m) + SYF_FAEF_dcmMul(arg2, m)) / m;
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_dcmAdd", e);
    }
}

csFuncLevelProto.SYF_FAEF_dcmMul = function(arg1, arg2) {
    try {
        var m = 0,
            s1 = arg1.toString(),
            s2 = arg2.toString();
        try {
            m += s1.split(".")[1].length;
        } catch (e) {}
        try {
            m += s2.split(".")[1].length;
        } catch (e) {}
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*SYF_FAEF_dcmMul", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_ID_onchange = function() {
    try {
        var node = SYS_getDoByXpath('Settle_New');
        var invnosum = SYS_getcurrRecordCount("Settle_New");
        if (node != null && invnosum != 0) {
            node.clearAll();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*FLD_FAEF_FA_LOAN_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_OVDUE_INT_SUM_onchange = function() {
    try {
        SYF_FAEF_Cal_AMTTOSELLER();
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*FLD_FAEF_FA_OVDUE_INT_SUM_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_INT_SUM_onchange = function() {
    try {
        SYF_FAEF_Cal_AMTTOSELLER();
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*FLD_FAEF_FA_PAID_INT_SUM_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PAID_PRIN_SUM_onchange = function() {
    try {
        SYF_FAEF_Cal_AMTTOSELLER();
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*FLD_FAEF_FA_PAID_PRIN_SUM_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_DT_onchange = function() {
    try {
        var sub = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.FA_PMT_DT.name);
        if (sub > 0) {
            document.MAINFORM.TEMP_TRX_DT.value = document.MAINFORM.FA_PMT_DT.value;
        } else {
            document.MAINFORM.TEMP_TRX_DT.value = SYS_BUSI_DATE;
        }
        document.MAINFORM.FA_PMT_VAL_DT.value = document.MAINFORM.FA_PMT_DT.value;
        SYF_FAEF_Inq_INT();
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*FLD_FAEF_FA_PMT_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_TYPE_onchange = function() {
    try {
        /*
                                if(document.MAINFORM.FA_BUSI_TYPE.value=='SF'){
                                SYS_GetRefNo('SCF_SF_RULE','SYF_FAEF_Cal_SetRefNo');
                                }else if(document.MAINFORM.FA_BUSI_TYPE.value=='RD' || document.MAINFORM.FA_BUSI_TYPE.value=='IF'){
                                SYS_GetRefNo('SCF_RD_RULE','SYF_FAEF_Cal_SetRefNo');
                                }
                                */
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*FLD_FAEF_FA_PMT_TYPE_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PMT_VAL_DT_onchange = function() {
    try {
        SYS_refreshChildDoValue('Settle_New', 'FA_PMT_VAL_DT', document.MAINFORM.FA_PMT_VAL_DT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*FLD_FAEF_FA_PMT_VAL_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_SETTLE_FLG_onchange = function() {
    try {
        var node = SYS_getDoByXpath('Settle_New');
        node.clearAllDataSets(true);
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*FLD_FAEF_FA_SETTLE_FLG_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_REFUND_INT_onchange = function() {
    try {
        /*SYF_FAEF_Cal_AMTTOSELLER();
                                if(SYS_BeFloat(document.MAINFORM.FA_TTL_REFUND_INT.value)>0)
                                {
                                SYT_ChangeFldClass(document.MAINFORM.FA_TXT_REFUNDINT,'M');

                                }
                                else
                                {

                                SYT_ChangeFldClass(document.MAINFORM.FA_TXT_REFUNDINT,'O');

                                }*/
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*FLD_FAEF_FA_TTL_REFUND_INT_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_ID_BTN_onclick = function() {
    try {
        //SYS_InqCUBK_Sql('FA_LOAN_ID',"FA_SBR_REF=\'<--FA_SBR_REF-->\' AND FA_LOAN_STATUS NOT IN ('FULL SETTLED','REVERSED')");
        SYS_InqCUBK_byCondition('FA_LOAN_ID', '1');
    } catch (e) {
        DisExcpt("SYF_FAEF_ProcessSettlementFromCE.js*FLD_FAEF_FA_LOAN_ID_BTN_onclick", e);
    }
}