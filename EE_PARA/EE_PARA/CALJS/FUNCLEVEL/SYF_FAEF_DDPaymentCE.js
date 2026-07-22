var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_LOAN_VAL_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_STATUS.value = 'PMT';
        document.MAINFORM.FA_TEMP3.value = SYS_BUSI_UNIT;
      document.MAINFORM.FA_SBR_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
       document.MAINFORM.TEMP_TRX_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        SYS_GetRefNo_S('FAEF_PMT_GUR', 'SYF_FAEF_Cal_RefNo');
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            SYT_ExchRate_FIX_PENDING();
        }
       SYF_FAEF_Get_DOC_CCY();
       EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
       SYF_FAEF_Get_DDRate_ID();
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

    } catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_RefNo = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(0, 4);
        document.MAINFORM.FA_LOAN_ID.value = pre + UnitCode+ year.substr(2, 4) + ref + 'PMT';
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_LOAN_ID.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*SYF_FAEF_Cal_RefNo", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DDRate_ID = function() {
    try {
       SYS_GetTableDataByRule('Get_DD_Rate_Specific', '1', null,'SYF_FAEF_Get_DDDRate_ID()', 'Y');
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*SYF_FAEF_Get_DDRate_ID", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DDDRate_ID = function() {
    try {	
	SYS_GetTableDataByRule('Get_DD_Rate_Specific', '2', null,'SYF_FAEF_Fail_Warning()', 'Y');

}catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*SYF_FAEF_Get_SDDRate_ID", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
    	var lmt_bal= document.MAINFORM.FA_LMT_BAL.value;
    	if(lmt_bal > 0 ){
    		document.MAINFORM.LM_CRED_LMT.value = document.MAINFORM.FA_PMT_AMT_SUM.value;
    	}
    	    } catch (e) {
        DisExcpt("SYF_FAEF_DDPayment.js*ConfirmBusinessCall", e);
    }
}


csFuncLevelProto.SYF_FAEF_Fail_Warning = function() {
 try {	
	var Rate_ID = document.MAINFORM.TSU_PO_ID.value;
	        if (Rate_ID == '') {
            alert("No DD Rate to use, please to set.");
            SYS_highTrxButton("_cancel");
            return false;
            
        }
      }catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*SYF_FAEF_Get_SDDRate_ID", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DOC_CCY = function() {
    try {
        var ccy;
        var sFieldList;
        var sMappingList;
        ccy = document.MAINFORM.FA_SEL_AC_CCY.value;
        document.MAINFORM.FA_DOC_CCY.options.length = 0;
        sMappingList = "FA_DOC_CCY";
        SYS_GetTableDataByRule_S('GET_LOAN_CCY_FROM_INV', '1', null, 'Y', "Y");
        SYM_FAEF_RefreshOptions(sMappingList);
        if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.FA_DOC_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
            EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        }
        if (ccy != '' && ccy != null) {
            document.MAINFORM.FA_DOC_CCY.value = ccy;
        }
        document.MAINFORM.FA_SEL_AC_CCY.value = document.MAINFORM.FA_DOC_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*SYF_FAEF_Get_DOC_CCY", e);
    }
}

/*csFuncLevelProto.SYF_FAEF_getDOdata_InvFinance = function() {
    try {
        var LMTAPPRV; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var id; // Utility Auto Fix Comments
        var invref; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var num; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var DocBal;
        var CRNBal;
        var OrgttlLoanAmt;
        var InvLoanAvl;
        var LoanDays;
        var DDRtID=document.MAINFORM.TSU_PO_ID.value;

        document.MAINFORM.FA_TTL_LOAN_AMT.value = 0;
        document.MAINFORM.FA_SEL_AC_AMT.value = 0;
        document.MAINFORM.FA_LOAN_PERC.value = 100;
        if (document.MAINFORM.FA_TEMP_AMT8.value == 0) {
            alert('Please input the Request Financing Amount first!');
            return;
        } else {
            var para = {
                ruleName: "Get_INV_DD",
                status: "A",
                showError: false,
                xpathFordo: "InvFinance",
                reqAMTFldNm: "FA_TEMP_AMT8",
                singleAMTFldNm: "FA_ADJ_AMT",
                percFldNm: "FA_LOAN_PERC"
            };
            SYS_GetDynDataForDO_S(para);
        }
       // SYS_GetDataForDO_S("Get_INV_DD", "A", false, '', "InvFinance");
        num = SYS_getcurrRecordCount("InvFinance");
        node = SYS_getDoByXpath("InvFinance");
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
            record = arrayvalue[i];
            id = SYS_getRecID(record);
            SYS_setFieldValue(node, id, "FA_LOAN_INT_AMT", 0);
           // SYS_setFieldValue(node, id, "FA_INV_LOAN_AMT", 0);
           // SYS_setFieldValue(node, id, "FA_INV_LOAN_EBAL", 0);
            SYS_setFieldValue(node, id, "FA_LOAN_VAL_DT", SYS_BUSI_DATE);
            SYS_setFieldValue(node, id, "PO_NO", DDRtID);
            invref = SYS_getValFromRec(record, 'FA_DOC_REF');
            DocBal = SYS_getValFromRec(record, 'FA_ADJ_BAL');
            document.MAINFORM.FA_TEMP2.value = invref;
            var ducdue= SYS_getValFromRec(record, 'FA_DOC_DUE_DT');
            document.MAINFORM.FA_DOC_DUE_DT.value = ducdue;
            var loandays=SYS_GetSubDays('FA_LOAN_VAL_DT', 'FA_DOC_DUE_DT');
            document.MAINFORM.FA_LOAN_DAYS.value = loandays;
            SYS_setFieldValue(node, id,  "FA_LOAN_DAYS", loandays);
            SYS_GetTableDataByRule_S('Get_DDRate_Rule', '1', 'Y');
            
            var RT = document.MAINFORM.FA_TEMP_RT_TYPE1.value;
            SYS_setFieldValue(node, id,  "FA_LOAN_INT_RT", RT);
            var FA_LOAN_INT_RT = SYS_getValFromRec(record, 'FA_LOAN_INT_RT');
            var docstatus= SYS_getValFromRec(record, 'FA_DOC_STATUS');
            var docNo = SYS_getValFromRec(record, 'FA_DOC_NO');
                        if(docstatus =='Active'){
                            //  if (FA_LOAN_INT_RT == null ||  FA_LOAN_INT_RT == '' && status != 'E') {
                            if (RT == null ||  RT == '' && status != 'E') {
                           alert("Invoice: " + docNo + " with no available DD Rate Rule, can't be financed!");
                           return false;
                              }
            
                        }
            record=SYS_setValToRec(record, "FA_LOAN_INT_RT", RT);
            record=SYS_setValToRec(record, "FA_LOAN_DAYS", loandays);
            record=SYS_setValToRec(record, "FA_LOAN_VAL_DT", SYS_BUSI_DATE);
            mData.push(record);
        }
        SYS_reLoadGrid(node, mData);
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TEMP1.value);
        document.MAINFORM.FA_TTL_LOAN_AMT.value = SYS_getFieldSumValue(node, "FA_INV_LOAN_AMT")
        document.MAINFORM.FA_TTL_LOAN_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TTL_LOAN_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_LOAN_AMT, 'onchange');
        InvFinance();
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*SYF_FAEF_getDOdata_InvFinance", e);
    }
}*/


csFuncLevelProto.SYF_FAEF_CalDDFee = function() {
    try {
    	var ChgTp= document.MAINFORM.FA_DD_CHG_TP.value;
    	var Fixed= document.MAINFORM.FA_DD_CHG_FIX.value;
    	var Percent=document.MAINFORM.FA_DD_CHG_SHA.value;
    	if(ChgTp == 'F'){
    		document.MAINFORM.FA_LOAN_INT_SM_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_SBR_CCY.value, Fixed);
    	}
    	else{
    		document.MAINFORM.FA_LOAN_INT_SM_AMT.value =SYT_CCY_AMT(document.MAINFORM.FA_SBR_CCY.value, SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value)*SYS_BeFloat(Percent)/100);
    	}
    		
    	
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*SYF_FAEF_CalDDFee", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_LOAN_AMT_onchange = function() {
    try {
SYF_FAEF_CalDDFee();
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*FLD_FAEF_FA_TTL_LOAN_AMT_onchange", e);
    }
}


csFuncLevelProto.FLD_FAEF_FA_PMT_AMT_SUM_onchange = function() {
    try {
SYF_FAEF_Cal_FA_SELBUY_AC_AMT();
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*FLD_FAEF_FA_PMT_AMT_SUM_onchange", e);
    }
}


csFuncLevelProto.SYF_FAEF_Cal_FA_SELBUY_AC_AMT = function() {
    try {
 
        var ChgBy= document.MAINFORM.CHG_PAID_BY.value;
        
        if (ChgBy == 'BY OUR CUST') {
              document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) ;
              document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
              document.MAINFORM.FA_TTL_AMT_CLEARED.value = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) + SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_SM_AMT.value);
              document.MAINFORM.FA_TTL_AMT_CLEARED.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TTL_AMT_CLEARED.value);
        } else if (ChgBy == 'BY COUNTER' ){
            document.MAINFORM.FA_SEL_AC_AMT.value = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) - SYS_BeFloat(document.MAINFORM.FA_LOAN_INT_SM_AMT.value);
            document.MAINFORM.FA_SEL_AC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_SEL_AC_AMT.value);
            document.MAINFORM.FA_TTL_AMT_CLEARED.value = SYS_BeFloat(document.MAINFORM.FA_PMT_AMT_SUM.value) - SYS_BeFloat(document.MAINFORM.FA_TTL_LOAN_AMT.value) ;
            document.MAINFORM.FA_TTL_AMT_CLEARED.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_TTL_AMT_CLEARED.value);
        }
        
  
    } catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*SYF_FAEF_Cal_FA_SELBUY_AC_AMT", e);
    }
}

csFuncLevelProto.SYF_FAEF_MLDC_SetDebitCreditData = function() {
    try {

        var actions; // Utility Auto Fix Comments
        var actionA;
        var ccyProtecteFlgs; // Utility Auto Fix Comments
        var comp; // Utility Auto Fix Comments
        var dcFlgs; // Utility Auto Fix Comments
        var descs; // Utility Auto Fix Comments
        var keyindex; // Utility Auto Fix Comments
        var merges; // Utility Auto Fix Comments
        var payAMTs; // Utility Auto Fix Comments
        var payCCYs; // Utility Auto Fix Comments
        var DDAmt;
        var CrAmt;
        dcFlgs = "";
        keyindex = "";
        payCCYs = "";
        payAMTs = "";
        descs = "";
        ccyProtecteFlgs = ""; //protected ccy
        actions = ""; //save
        merges = "";
        comp = "";
        var ChgBy= document.MAINFORM.CHG_PAID_BY.value;
        var int_ref = document.MAINFORM.C_MAIN_REF.value + 'INT';

        	//if (ChgBy == 'BY OUR CUST') {
            dcFlgs = "C/C/D"; //debit and credit group
            keyindex =  document.MAINFORM.FA_SEL_ID.value+"/" + document.MAINFORM.C_MAIN_REF.value+"/" + document.MAINFORM.C_MAIN_REF.value;
            payCCYs =  document.MAINFORM.FA_DOC_CCY.value+"/" + document.MAINFORM.FA_DOC_CCY.value+"/" + document.MAINFORM.FA_DOC_CCY.value;
            payAMTs =  document.MAINFORM.FA_SEL_AC_AMT.value+"/" + document.MAINFORM.FA_LOAN_INT_SM_AMT.value+"/"+ document.MAINFORM.FA_TTL_AMT_CLEARED.value;
            descs = "Amount to Seller/Bank Fee Collect/Payment Amount";
            ccyProtecteFlgs = "N/N/N"; //protected ccy
            actions = "S/S/S"; //save
            actionA = "D/D/D"; //save
            merges = "N/N/N";
            comp = "Payment";
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actionA, merges, comp);
            SYT_MLDC_SaveSummary(dcFlgs, keyindex, payCCYs, descs, payAMTs, ccyProtecteFlgs, actions, merges, comp);
      //  }

    } catch (e) {
        DisExcpt("SYF_FAEF_DDPaymentCE.js*SYF_FAEF_MLDC_SetDebitCreditData", e);
    }
}
