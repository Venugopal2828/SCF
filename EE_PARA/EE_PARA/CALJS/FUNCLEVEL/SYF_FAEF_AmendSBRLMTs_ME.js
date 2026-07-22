var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_ORG_LMT_AMT.value = document.MAINFORM.FA_LMT_AMT.value;
        document.MAINFORM.FA_ORG_DUE_DT.value = document.MAINFORM.FA_LMT_DUE_DT.value;
        SYF_FAEF_Get_FA_LMT_BAL();
        document.MAINFORM.FA_TEMP5.value = document.MAINFORM.FA_LMT_AMT.value;
        document.MAINFORM.FA_ORG_LMT_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_LMT_BAL_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_INCR_AMT_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        document.MAINFORM.FA_DECR_AMT_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYF_FAEF_Get_BuyerLimitEnDDPate();
            SYF_FAEF_GET_SBR_BUYER_CCY_EXCH_RT();
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            EEHtml.getElementById('NeedBuyerApprove').style.display = "none";
            EEHtml.getElementById('FA_REQ_BUYER_APR_FLG').style.display = "none";
        } else {
            EEHtml.getElementById('NeedBuyerApprove').style.display = "block";
            EEHtml.getElementById('FA_REQ_BUYER_APR_FLG').style.display = "block";
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            EEHtml.getElementById('B').style.display = "block";
            EEHtml.getElementById('G').style.display = "none";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('G').style.display = "block";
        } else {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('G').style.display = "none";
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF') {
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '3') {
                SYT_ChangeFldClass(document.MAINFORM.FA_MAX_LOAN_PERC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_IRATE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            }
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '2') {
                SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'M');
            }
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '1' || document.MAINFORM.FA_SERVICE_APPRVD.value == '3') {
                SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'O');
            }
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            EEHtml.getElementById('C').style.display = "none";
            SYT_DisableDiv('C_div');
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'ICD' || document.MAINFORM.FA_BUSI_TYPE.value == 'MCD') {
            document.getElementById('SL1').innerHTML = 'Medical Provider ID & Name ';
            document.getElementById('disc1').innerHTML = 'Insurance Company ID & Name ';
        }

        SYF_FAEF_Cal_FA_IRT_SPREAD();
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'IQ') {
            SYF_FAEF_Cal_IncDecFlg();
        }
        SYF_FAEF_MPO_IncDecAmt();

        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);

        SYF_FAEF_CHECK_DO_ENABLE();
        SYF_FAEF_CHECK_POF_LOAN_FIELD();
        SYT_DisableDivClass('A_div');
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_BuyerLimitEnDDPate = function() {
    try {

        var FA_TEMP_AMT11; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            document.MAINFORM.CUST_ID.value = document.MAINFORM.FA_BUYER_ID.value;
            document.MAINFORM.RCUST_ID.value = document.MAINFORM.FA_BUYER_ID.value;
            document.MAINFORM.SUB_DESC.value = 'Factoring';
            document.MAINFORM.FACI_TYPE.value = 'DF';
            sSourceFieldLists = "CUST_ID;RCUST_ID;SUB_DESC;FACI_TYPE";
            SYS_GetDataBySSS_S('FAEF_GET_FACI_BAL_TRX', sSourceFieldLists);
            FA_TEMP_AMT11 = document.MAINFORM.FACI_BAL.value;
            document.MAINFORM.FA_TEMP_AMT11.value = SYT_AmtFormat(document.MAINFORM.FA_REMI_CCY1.value, FA_TEMP_AMT11);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_GET_SBR_BUYER_CCY_EXCH_RT = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_REMI_CCY1.value, 'Booking Rate', 'EXCH_RT1');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_FA_LMT_BAL = function() {
    try {

        var lmtbal; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYS_GetTableDataByRule_S('SYF_FADA_AmendSBR_SYF_FADA_Get_FA_LMT_BAL_0', '1', 'Y');
            lmtbal = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APL.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value);
            document.MAINFORM.FA_LMT_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, lmtbal);
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF') {
            SYS_GetTableDataByRule_S('SYF_FAEF_AmendSBR_SYF_FADA_Get_FA_LMT_BAL_1', '1', 'Y');
            lmtbal = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value); // Utility Auto Fix Comments
            document.MAINFORM.FA_LMT_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, lmtbal);
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            SYS_GetTableDataByRule_S('Get_FA_LMT_BAL_POF', '1', 'Y');
            lmtbal = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value); // Utility Auto Fix Comments
            document.MAINFORM.FA_LMT_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, lmtbal);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_InqBuyerInfo = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYS_InqCUBK('GET_BUYER_INFO_FOR_DF', 'FA_BUYER_ID'); // Utility Auto Fix Comments
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            SYS_InqCUBK('GET_BUYER_INFO_FOR_DISC', 'FA_BUYER_ID'); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_InqSellerInfo = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF') {
            SYS_InqCUBK('GET_SELLER_INFO_FOR_SFP', 'FA_SEL_ID'); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_IRT_SPREAD = function() {
    try {

        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'O', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P', 'N');
            document.MAINFORM.FA_IRT_SPREAD.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_setBA_FLG = function() {
    try {

        var servApprv; // Utility Auto Fix Comments
        servApprv = document.MAINFORM.FA_SERVICE_APPRVD.value;
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            if (servApprv == '1' || servApprv == '2') {
                document.MAINFORM.FA_BA_FLG.value = '1';
            } else {
                document.MAINFORM.FA_BA_FLG.value = '2';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var DCMrk; // Utility Auto Fix Comments
        var DecrAmt; // Utility Auto Fix Comments
        var DueDt; // Utility Auto Fix Comments
        var IncrAmt; // Utility Auto Fix Comments
        var LmtID; // Utility Auto Fix Comments
        SYF_FAEF_Cal_Incr_Decr_Amt();
        SYF_FAEF_Cal_setBA_FLG();
        document.MAINFORM.FA_SBR_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_IncDecFlg = function() {
    try {

        if (document.MAINFORM.TEMP_FLG1.value == '1') {
            document.MAINFORM.FA_DECR_AMT.value = 0;
            document.MAINFORM.FA_LMT_AMT.value = document.MAINFORM.FA_TEMP5.value;
        } else if (document.MAINFORM.TEMP_FLG1.value == '2') {
            document.MAINFORM.FA_INCR_AMT.value = 0;
            document.MAINFORM.FA_LMT_AMT.value = document.MAINFORM.FA_TEMP5.value;
        } else {
            document.MAINFORM.FA_INCR_AMT.value = 0;
            document.MAINFORM.FA_DECR_AMT.value = 0;
            document.MAINFORM.FA_LMT_AMT.value = document.MAINFORM.FA_TEMP5.value;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_FA_LMT_BAL = function() {
    try {

        var chgAmt; // Utility Auto Fix Comments
        var decAmt; // Utility Auto Fix Comments
        var incAmt; // Utility Auto Fix Comments
        incAmt = SYS_BeFloat(document.MAINFORM.FA_INCR_AMT.value);
        decAmt = SYS_BeFloat(document.MAINFORM.FA_DECR_AMT.value);

        if (incAmt > 0) {
            chgAmt = incAmt;
        } else if (decAmt > 0) {
            chgAmt = -decAmt;
        } else {
            chgAmt = 0;
        }
        document.MAINFORM.FA_LMT_AMT.value = SYS_BeFloat(document.MAINFORM.FA_TEMP5.value) + chgAmt;
        document.MAINFORM.FA_LMT_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_FA_LMT_VAL_DT = function() {
    try {

        var day; // Utility Auto Fix Comments
        day = SYS_GetSubDays(document.MAINFORM.FA_LMT_VAL_DT.name, document.MAINFORM.FA_LMT_DUE_DT.name); // Utility Auto Fix Comments
        if (day < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_VAL_DT.name, "SBR Valid From Date cannot be later than SBR End Date!"); // Utility Auto Fix Comments
            document.MAINFORM.FA_LMT_VAL_DT.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_FA_LMT_DUE_DT = function() {
    try {

        var day; // Utility Auto Fix Comments
        var day1; // Utility Auto Fix Comments
        day = SYS_GetSubDays(document.MAINFORM.FA_LMT_VAL_DT.name, document.MAINFORM.FA_LMT_DUE_DT.name); // Utility Auto Fix Comments
        if (day < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "The SBR End Date must be later than it's Valid From Date!"); // Utility Auto Fix Comments
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }

        day1 = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT.name, document.MAINFORM.FA_LMT_DUE_DT2.name); // Utility Auto Fix Comments
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' && day1 < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "The SBR End Date should be early than buyer Limit End Date!"); // Utility Auto Fix Comments
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_DecrAmt = function() {
    try {

        var decrAmt; // Utility Auto Fix Comments
        var lmtbal; // Utility Auto Fix Comments
        decrAmt = SYS_BeFloat(document.MAINFORM.FA_DECR_AMT.value);
        lmtbal = SYS_BeFloat(document.MAINFORM.FA_LMT_BAL.value);
        if (decrAmt > lmtbal) {
            SYS_CheckError(document.MAINFORM.FA_DECR_AMT, 'Decrease Amount cannot be more than Last SBR balance!'); // Utility Auto Fix Comments
            document.MAINFORM.FA_DECR_AMT.value = 0;
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FAEF_Chk_DecrAmt()) {
            return false;
        }
        if (!SYF_FAEF_Chk_IncrAmt()) {
            return false;
        }
        /*  if (!SYF_FAEF_checkAMLCustomer()) {
            return false;
        }
      //modify by rainie , INT_LMTREF Field does not exist
      if (!SYF_FAEF_LimitCheck()) {
            return false;
        }*/
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Chk_IncrAmt = function() {
    try {

        var buyerlimbal; // Utility Auto Fix Comments
        var exchRT; // Utility Auto Fix Comments
        var incramt; // Utility Auto Fix Comments
        buyerlimbal = SYS_BeFloat(document.MAINFORM.FA_TEMP_AMT11.value);
        exchRT = SYS_BeFloat(document.MAINFORM.EXCH_RT1.value);
        incramt = SYS_BeFloat(document.MAINFORM.FA_INCR_AMT.value) * exchRT;
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' && (incramt > buyerlimbal)) {
            SYS_CheckError(document.MAINFORM.FA_INCR_AMT, 'The buyer limit balance is not enough!');
            document.MAINFORM.FA_INCR_AMT.value = 0;
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_Incr_Decr_Amt = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_INCR_AMT.value) > 0) {
            document.MAINFORM.FA_TEMP2.value = 'D'; // Utility Auto Fix Comments
            document.MAINFORM.FA_TEMP3.value = document.MAINFORM.FA_INCR_AMT.value;
        } else if (SYS_BeFloat(document.MAINFORM.FA_DECR_AMT.value) > 0) {
            document.MAINFORM.FA_TEMP2.value = 'C'; // Utility Auto Fix Comments
            document.MAINFORM.FA_TEMP3.value = document.MAINFORM.FA_DECR_AMT.value;
        } else {
            document.MAINFORM.FA_TEMP2.value = '';
            document.MAINFORM.FA_TEMP3.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_IncDecAmt = function() {
    try {

        if (document.MAINFORM.TEMP_FLG1.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_INCR_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_DECR_AMT, 'P');
        } else if (document.MAINFORM.TEMP_FLG1.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DECR_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_INCR_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_INCR_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_DECR_AMT, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_aDDPRecoRFPCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_editRecoRFPCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_deleteRecoRFPCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_LoaDDPODataOnInit = function() {
    try {


    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_LoaDDPoComplete = function() {
    try {


    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_CHECK_DO_ENABLE = function() {
    try {


    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_CHECK_POF_LOAN_FIELD = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            EEHtml.getElementById('pof').style.display = "";
            SYT_ChangeFldClass_New('PO_MAX_LOAN_PERC', 'M');
        } else {
            EEHtml.getElementById('pof').style.display = "none";
            SYT_ChangeFldClass_New('PO_MAX_LOAN_PERC', 'O');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forChildtoMainScreen = function(node, recoRFPId, status) {
    try {

        var node;
        var docAmt;
        docAmt = SYS_getFieldSumValue(node, "FA_SBR_AMT", 2);
        SYS_setValueToMain("FA_APPL_LMT_AMT", docAmt);
        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_APPL_LMT_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DOdata_BuyerInfo = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            SYS_GetDataFoRFPO_S("BuyerInfo", "N", false, '', "Buyer_Info");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {

        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_FLD_FADA_FA_DECR_AMT_onchange = function(event) {
    try {

        SYF_FAEF_Chk_DecrAmt();
        SYF_FAEF_Cal_FA_LMT_BAL();
        document.MAINFORM.FA_DECR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_DECR_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_FLD_FADA_FA_INCR_AMT_onchange = function(event) {
    try {

        SYF_FAEF_Chk_IncrAmt();
        SYF_FAEF_Cal_FA_LMT_BAL();
        document.MAINFORM.FA_INCR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_INCR_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_FLD_FADA_view_1_onclick = function(event) {
    try {

        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_AML_DATA = function() {
    try {

        var busi_type = document.MAINFORM.FA_BUSI_TYPE.value;
        var SBR_Amt = document.MAINFORM.FA_LMT_AMT.value;
        var recourse = document.MAINFORM.FA_SERVICE_REQ.value;
        if ((busi_type == 'SFP' || busi_type == 'DDP' || busi_type == 'ICD' || (busi_type == 'RFP' && recourse == '1')) && SBR_Amt > 0) {
            var Cust = document.MAINFORM.FA_BUYER_ID.value + ";" + document.MAINFORM.FA_BUYER_NM.value + ";" + "AP";
            var benficary = document.MAINFORM.FA_SELLER_ID.value + ";" + document.MAINFORM.FA_SELLER_NM.value + ";" + "BE";
            document.MAINFORM.AML_DATA.value = Cust + "|" + benficary;
        }

        if (((busi_type == 'RFP' && recourse == '2') || busi_type == 'MCD') && SBR_Amt > 0) {
            var Cust = document.MAINFORM.FA_SELLER_ID.value + ";" + document.MAINFORM.FA_BUYER_NM.value + ";" + "AP";
            var benficary = document.MAINFORM.FA_BUYER_ID.value + ";" + document.MAINFORM.FA_SELLER_NM.value + ";" + "BE";
            document.MAINFORM.AML_DATA.value = Cust + "|" + benficary;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_LimitInquiry = function() {
    try {

        SYF_FAEF_getProductCode();
        if (document.MAINFORM.INT_LMTPCODE.value == "0") {
            alert("Limit not available");
        } else {
            document.MAINFORM.INT_LMTCOLL.value = "";
            SYF_FAEF_removeAllOptions(document.MAINFORM.INT_LMTDET);
            var recourse = document.MAINFORM.FA_SERVICE_REQ.value;
            var busi_type = document.MAINFORM.FA_BUSI_TYPE.value;
            if ((busi_type == 'SFP' || busi_type == 'DDP' || busi_type == 'ICD' || (busi_type == 'RFP' && recourse == '1'))) {
                var name = "FADA_LMTRET_SF";
                SYS_InqGapi(name, 'SYF_FADA_postLimitInquiry');
            }
            if (((busi_type == 'RFP' && recourse == '2') || busi_type == 'MCD')) {
                var name = "FADA_LMTRET_RFRE";
                SYS_InqGapi(name, 'SYF_FADA_postLimitInquiry');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_postLimitInquiry = function() {
    try {

        var count = 0;
        var temp = '';
        var msgc = 0;
        var limitArr = 0;
        if (document.MAINFORM.INT_LMTCOLL.value == null || document.MAINFORM.INT_LMTCOLL.value == "") {
            alert("No Limits returned from Trasset");
        } else {
            limitArr = document.MAINFORM.INT_LMTCOLL.value.split(";"); //split using blank space as delimiter
            for (i = 0; i < limitArr.length; i++) {
                var limtcode = limitArr[i];
                var limit_Arr = limtcode.split(".");
                var ppc_data2 = limit_Arr[1];
                var ppc_ref_data2 = ppc_data2.substring(0, 3);
                if (limitArr[i] != "") {
                    if (ppc_ref_data2 == "PPC")
                        count++;
                    else {
                        document.MAINFORM.INT_LMTDET[i - count] = new Option(limitArr[i], limitArr[i], false);
                        temp = temp + limitArr[i] + ';';
                        document.MAINFORM.INT_LMTCOLLTMP.value = temp;
                        msgc++;
                    }
                }
                if ((limitArr.length - 1) == count)
                    alert("There is no Line Limit for your product!!! \n Kindly check in Trasset Limit System");
                if (i >= (limitArr.length - 2))
                    break;

            }
            SYF_FAEF_getLimitDetail();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_getLimitDetail = function() {
    try {

        var limitArr = document.MAINFORM.INT_LMTCOLL.value.split(";");
        var limitsArr = limitArr[document.MAINFORM.INT_LMTDET.selectedIndex].split("+");
        document.MAINFORM.INT_LMTREF.value = limitsArr[0];
        document.MAINFORM.INT_LMTEXPIRY.value = limitsArr[1];
        document.MAINFORM.INT_LMTCCY.value = limitsArr[2];
        document.MAINFORM.INT_LMTAVAILAMT.value = limitsArr[3];
        document.MAINFORM.INT_LMTCASHMRGN.value = limitsArr[4];
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_getProductCode = function() {
    try {

        var recourse = document.MAINFORM.FA_SERVICE_REQ.value;
        var busi_type = document.MAINFORM.FA_BUSI_TYPE.value;
        if ((busi_type == 'SFP')) {
            document.MAINFORM.INT_LMTPCODE.value = "SCF";
        } else if (busi_type == 'MCD') {
            document.MAINFORM.INT_LMTPCODE.value = "MCF";
        } else if (busi_type == 'ICD') {
            document.MAINFORM.INT_LMTPCODE.value = "ICF";
        } else if (busi_type == 'DCD') {
            document.MAINFORM.INT_LMTPCODE.value = "DCF";
        } else if (busi_type == 'RFP') {
            document.MAINFORM.INT_LMTPCODE.value = "RFP";
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_checkAMLCustomer = function() {
    try {

        var FA_APPL_LMT_AMT = document.MAINFORM.FA_APPL_LMT_AMT.value;
        var FA_APPL_LMT_CCY = document.MAINFORM.FA_APPL_LMT_CCY.value;
        var FA_SEL_ID = document.MAINFORM.FA_SEL_ID.value;
        var FA_SEL_NM = document.MAINFORM.FA_SEL_NM.value;
        var busi_type = document.MAINFORM.FA_BUSI_TYPE.value;
        var recourse = document.MAINFORM.FA_SERVICE_REQ.value;
        var SBR_Amt = document.MAINFORM.FA_LMT_AMT.value;
        if ((busi_type == 'SF' || busi_type == 'DD' || (busi_type == 'RD' && recourse == '1'))) {
            var Cust = document.MAINFORM.FA_BUYER_ID.value + ";" + document.MAINFORM.FA_BUYER_NM.value + ";" + "AP";
            var benficary = FA_SEL_ID + ";" + FA_SEL_NM + ";" + "BE";
            document.MAINFORM.AML_DATA.value = Cust + "|" + benficary;
        }
        if ((busi_type == 'RD' && recourse == '2')) {
            var Cust = FA_SEL_ID + ";" + FA_SEL_NM + ";" + "AP";
            var benficary = document.MAINFORM.FA_BUYER_ID.value + ";" + document.MAINFORM.FA_BUYER_NM.value + ";" + "BE";
            document.MAINFORM.AML_DATA.value = Cust + "|" + benficary;
        }
        /*SYS_InqGapi_S('AML_CHEK_INQ');
        if (document.MAINFORM.AML_RESPONSE.value == "Success") {
            return true;
        } else {
            alert('AML Response:' + document.MAINFORM.AML_RESPONSE.value);
            return false;
        }*/
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_LimitCheck = function() {
    try {

        //modify by rainie , INT_LMTREF Field does not exist
        /*
if (document.MAINFORM.INT_LMTREF.value == "" || document.MAINFORM.INT_LMTREF.value == null) {
            alert('Please select the Limit');
            return false;
        } else {
            return true;
        }  */
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_removeAllOptions = function(selectbox) {
    try {

        var i;
        for (i = selectbox.options.length - 1; i >= 0; i--) {
            selectbox.remove(i);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_BUYER_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYS_GetCUBK('GET_BUYER_INFO_FOR_DF', 'FA_BUYER_ID');
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            SYS_GetCUBK('GET_BUYER_INFO_FOR_DISC', 'FA_BUYER_ID');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DECR_AMT_onchange = function(event) {
    try {
        SYF_FAEF_FLD_FADA_FA_DECR_AMT_onchange();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_EF_HAN_CHG_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_INCR_AMT_onchange = function(event) {
    try {
        SYF_FAEF_FLD_FADA_FA_INCR_AMT_onchange();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LMT_DUE_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            SYF_FAEF_Chk_FA_LMT_DUE_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LMT_VAL_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            SYF_FAEF_Chk_FA_LMT_VAL_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_IRATE_TYPE_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_IRT_SPREAD();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_SEL_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF') {
            SYS_GetCUBK('GET_SELLER_INFO_FOR_SFP', 'FA_SEL_ID');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_TEMP_FLG1_onchange = function(event) {
    try {
        SYF_FAEF_Cal_IncDecFlg();
        SYF_FAEF_MPO_IncDecAmt();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRLMTs_ME.js", e);
    }
}