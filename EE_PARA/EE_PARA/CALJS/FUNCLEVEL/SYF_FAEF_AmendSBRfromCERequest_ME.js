var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FAEF_CHECK_DO_ENABLE = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            SYS_enableButton('Buyer_Info', 'addbutton');
        } else {
            SYS_disableButton('Buyer_Info', 'addbutton');
            SYS_disableButton('Buyer_Info', 'editbutton');
            SYS_disableButton('Buyer_Info', 'deletebutton');
            SYS_disableButton('Buyer_Info', 'viewbutton');

        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_forChildtoMainScreen = function(node, recordId, status) {
    try {

        var node;
        var docAmt;
        node = SYS_getDoByXpath('Buyer_Info');
        docAmt = SYS_getFieldSumValue(node, "FA_SBR_AMT", 2);
        SYS_setValueToMain("FA_APPL_LMT_AMT", docAmt);
        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_APPL_LMT_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        LMTS.Ext.deleteAll();
        if (document.MAINFORM.FA_BA_FLG.value == '1' && document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            LmtID = document.MAINFORM.C_MAIN_REF.value;
            IncrAmt = document.MAINFORM.FA_INCR_AMT.value;
            DecrAmt = document.MAINFORM.FA_DECR_AMT.value;
            DueDt = document.MAINFORM.FA_LMT_DUE_DT.value;
            DCMrk = "";
            if (IncrAmt != "" && parseFloat(IncrAmt) > 0) {
                DCMrk = "C";
                LMTS.Ext.increaseFSBC(LmtID, DCMrk, IncrAmt);
            } else if (DecrAmt != "" && parseFloat(DecrAmt) > 0) {
                DCMrk = "D";
                LMTS.Ext.increaseFSBC(LmtID, DCMrk, DecrAmt);
            }
            LMTS.Ext.extensionDay(LmtID, DueDt);
        }

        document.MAINFORM.FA_SBR_REF.value = document.MAINFORM.C_MAIN_REF.value;

        SYF_FAEF_Cal_forChildtoMainScreen();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FAEF_Chk_FA_LMT_VAL_DT()) {
            return false;
        }
        if (!SYF_FAEF_Chk_FA_LMT_DUE_DT()) {
            return false;
        }
        if (!SYF_FAEF_Chk_DecrAmt()) {
            return false;
        }
        if (!SYF_FAEF_Chk_IncrAmt()) {
            return false;
        }
        if (document.MAINFORM.FA_EF_HAN_CHG_AMT.value == 0) {
            if (!confirm('Handling charge is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_IRT_SPREAD.value == 0) {
            if (!confirm('Financing Interest Margin Rate is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_OVD_IRT_SPREAD.value == 0) {
            if (!confirm('Penalty Interest Spread Rate is 0!')) {
                return false;
            }
        }
        if (!SYF_FAEF_checkDiscRate1()) {
            return false;
        }
        if (!SYF_FAEF_checkDiscRate2()) {
            return false;
        }
        if (document.MAINFORM.FA_EF_COMM_RT.value == 0) {
            if (!confirm('Factoring commission rate is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            if (!SYT_checkFactoringChildRecord('Buyer_Info')) {
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_GET_SBR_BUYER_CCY_EXCH_RT = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_REMI_CCY1.value, 'Booking Rate', 'EXCH_RT1');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_BuyerLimitEndDate = function() {
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DOdata_BuyerInfo = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            SYS_GetDataForDO_S("BuyerInfo", "N", false, '', "Buyer_Info");
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            SYS_GetTableDataByRule_S('SYF_FADA_AmendSBR_SYF_FADA_Get_FA_LMT_BAL_1', '1', 'Y');
            lmtbal = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value); // Utility Auto Fix Comments
            document.MAINFORM.FA_LMT_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, lmtbal);
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            SYS_GetTableDataByRule_S('Get_FA_LMT_BAL_POF', '1', 'Y');
            lmtbal = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value); // Utility Auto Fix Comments
            document.MAINFORM.FA_LMT_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, lmtbal);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_ORG_LMT_AMT.value = document.MAINFORM.FA_LMT_AMT.value;
        document.MAINFORM.FA_ORG_DUE_DT.value = document.MAINFORM.FA_LMT_DUE_DT.value;
        SYF_FAEF_Get_FA_LMT_BAL();
        document.MAINFORM.FA_TEMP5.value = document.MAINFORM.FA_LMT_AMT.value;

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            EEHtml.getElementById('discount1').style.display = "";
            EEHtml.getElementById('discount2').style.display = "";
            EEHtml.getElementById('disc1').style.display = "none";
            EEHtml.getElementById('disc2').style.display = "none";
            document.MAINFORM.FA_APPL_LMT_CCY.value = SYS_LOCAL_CCY;
        } else {
            EEHtml.getElementById('discount1').style.display = "none";
            EEHtml.getElementById('discount2').style.display = "none";
            EEHtml.getElementById('disc1').style.display = "";
            EEHtml.getElementById('disc2').style.display = "";
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_InqSellerInfo = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
            SYS_InqCUBK('GET_SELLER_INFO_FOR_RF', 'FA_SEL_ID'); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'PM') {
            SYF_FAEF_Get_DOdata_BuyerInfo()
        }
        SYF_FAEF_CHECK_DO_ENABLE();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_LoadDoComplete = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            SYS_enableButton('Buyer_Info', 'addbutton');
        } else {
            SYS_disableButton('Buyer_Info', 'addbutton');
            SYS_disableButton('Buyer_Info', 'editbutton');
            SYS_disableButton('Buyer_Info', 'deletebutton');
            SYS_disableButton('Buyer_Info', 'viewbutton');

        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYF_FAEF_Get_BuyerLimitEndDate();
            SYF_FAEF_GET_SBR_BUYER_CCY_EXCH_RT();
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            EEHtml.getElementById('B').style.display = "block";
            EEHtml.getElementById('G').style.display = "none";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('G').style.display = "block";
        } else {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('G').style.display = "none";
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            EEHtml.getElementById('limitInfo').style.display = "block";
        } else {
            EEHtml.getElementById('limitInfo').style.display = "none";
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            SYT_ChangeFldClass_New('B_BUYER', 'O');
            SYT_ChangeFldClass_New('B_SELLER', 'H'); // Utility Auto Fix Comments
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
            SYT_ChangeFldClass_New('B_SELLER', 'O');
            SYT_ChangeFldClass_New('B_BUYER', 'H');
        } else {
            SYT_ChangeFldClass_New('B_BUYER', 'H');
            SYT_ChangeFldClass_New('B_SELLER', 'H'); // Utility Auto Fix Comments
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF' || document.MAINFORM.FA_BUSI_TYPE.value == 'RF') {
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '3') {
                SYT_ChangeFldClass(document.MAINFORM.FA_MAX_LOAN_PERC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_IRATE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            }
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '2') {
                SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'M');
            }
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            EEHtml.getElementById('C').style.display = "none";
            SYT_DisableDiv('C_div');
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'CD') {
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
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_checkDiscRate1 = function() {
    try {

        if (document.MAINFORM.FA_PRM_DISC_RT.value > 100) {
            SYS_CheckError(document.MAINFORM.FA_PRM_DISC_RT, "1st Discount Rate must between 0 and 100!");
            return false;
        }
        if (document.MAINFORM.FA_PRM_DISC_RT.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_PRM_DISC_RT, "1st Discount Rate must between 0 and 100!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_checkDiscRate2 = function() {
    try {

        if (document.MAINFORM.FA_SND_DISC_RT.value > 100) {
            SYS_CheckError(document.MAINFORM.FA_SND_DISC_RT, "2nd Discount Rate must be between 0 and 100!");
            return false;
        }
        if (document.MAINFORM.FA_SND_DISC_RT.value < 0) {
            SYS_CheckError(document.MAINFORM.FA_SND_DISC_RT, "2nd Discount Rate must be between 0 and 100!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
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
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DECR_AMT_onchange = function(event) {
    try {
        SYF_FAEF_Chk_DecrAmt();
        SYF_FAEF_Cal_FA_LMT_BAL();
        document.MAINFORM.FA_DECR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_DECR_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_EF_HAN_CHG_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_INCR_AMT_onchange = function(event) {
    try {
        SYF_FAEF_Chk_IncrAmt();
        SYF_FAEF_Cal_FA_LMT_BAL();
        document.MAINFORM.FA_INCR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_INCR_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LMT_DUE_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            SYF_FAEF_Chk_FA_LMT_DUE_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LMT_VAL_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            SYF_FAEF_Chk_FA_LMT_VAL_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_LOAN_IRATE_TYPE_onchange = function(event) {
    try {
        SYF_FAEF_Cal_FA_IRT_SPREAD();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_PRM_DISC_RT_onchange = function(event) {
    try {
        SYF_FAEF_checkDiscRate1();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_SEL_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            SYS_GetCUBK('GET_SELLER_INFO_FOR_RF', 'FA_SEL_ID');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_SND_DISC_RT_onchange = function(event) {
    try {
        SYF_FAEF_checkDiscRate2();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_TEMP_FLG1_onchange = function(event) {
    try {
        SYF_FAEF_Cal_IncDecFlg();
        SYF_FAEF_MPO_IncDecAmt();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_AmendSBRfromCERequest_ME.js", e);
    }
}