var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FADA_CHECK_POF_LOAN_FIELD = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'POF') {
            EEHtml.getElementById('pof').style.display = "";
            SYT_ChangeFldClass_New('PO_MAX_LOAN_PERC', 'M');
        } else {
            EEHtml.getElementById('pof').style.display = "none";
            SYT_ChangeFldClass_New('PO_MAX_LOAN_PERC', 'O');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_IRT_SPREAD = function() {
    try {

        if (document.MAINFORM.FA_LOAN_IRATE_TYPE.value == '2') {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'O', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P', 'N');
            document.MAINFORM.FA_IRT_SPREAD.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_LMT_BAL = function() {
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
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_IncDecFlg = function() {
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
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_Incr_Decr_Amt = function() {
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
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_forChildtoMainScreen = function(node, recordId, status) {
    try {

        var node;
        var docAmt;
        node = SYS_getDoByXpath('Buyer_Info');
        docAmt = SYS_getFieldSumValue(node, "FA_SBR_AMT", 2);
        SYS_setValueToMain("FA_APPL_LMT_AMT", docAmt);
        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);
        EEHtml.fireEvent(document.MAINFORM.FA_APPL_LMT_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_DecrAmt = function() {
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
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_LMT_DUE_DT = function() {
    try {

        var day;
        var day1;
        var day2;
        day = SYS_GetSubDays(document.MAINFORM.FA_LMT_VAL_DT.name, document.MAINFORM.FA_LMT_DUE_DT.name);
        if (day < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "The SBR End Date must be later than it's Valid From Date!");
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }

        day1 = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT.name, document.MAINFORM.FA_LMT_DUE_DT2.name);
        if (day1 < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "The SBR End Date should be early than anchor Limit End Date!");
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }
        day2 = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT.name, document.MAINFORM.FA_AGM_DUE_DT.name);
        if (day2 < 0) {
            SYS_CheckError(document.MAINFORM.FA_LMT_DUE_DT.name, "The SBR End Date should be early than Agreement End Date!");
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_LMT_VAL_DT = function() {
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
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_IncrAmt = function() {
    try {

        var ANCHORLMT;
        var exchRT;
        var incramt;
        ANCHORLMT = SYS_BeFloat(document.MAINFORM.FA_ANCHOR_AMT.value);
        exchRT = SYS_BeFloat(document.MAINFORM.EXCH_RT1.value);
        incramt = SYS_BeFloat(document.MAINFORM.FA_INCR_AMT.value) * exchRT;
        if (incramt > ANCHORLMT) {
            SYS_CheckError(document.MAINFORM.FA_INCR_AMT, 'The anchor limit balance is not enough!');
            document.MAINFORM.FA_INCR_AMT.value = 0;
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var DCMrk; // Utility Auto Fix Comments
        var DecrAmt; // Utility Auto Fix Comments
        var DueDt; // Utility Auto Fix Comments
        var IncrAmt; // Utility Auto Fix Comments
        var LmtID; // Utility Auto Fix Comments
        SYF_FADA_Cal_Incr_Decr_Amt();
        LMTS.Ext.deleteAll();

        document.MAINFORM.FA_SBR_REF.value = document.MAINFORM.C_MAIN_REF.value;

        //SYF_FADA_Cal_forChildtoMainScreen();--marked for SCF change
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_Check_Pending_Invoices()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_LMT_VAL_DT()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_LMT_DUE_DT()) {
            return false;
        }
        if (!SYF_FADA_Chk_DecrAmt()) {
            return false;
        }
        if (!SYF_FADA_Chk_IncrAmt()) {
            return false;
        }
        if (document.MAINFORM.FA_EF_HAN_CHG_AMT.value == 0) {
            if (!confirm('Handling charge is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_IRT_SPREAD.value == 0) {
            if (!confirm('Financing Profit Margin Rate is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_OVD_IRT_SPREAD.value == 0) {
            if (!confirm('Penalty Profit Spread Rate is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_EF_COMM_RT.value == 0) {
            if (!confirm('Gross Turnover Commission rate is 0!')) {
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_AnchorLimitEndDate = function() {
    try {

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF') {
            document.getElementById('LIMIT').innerHTML = 'Buyer Limit ';
            document.getElementById('LIM').innerHTML = 'Buyer Limit End Date';
            SYS_GetTableDataByRule_S('CreateSBR_Get_AnchorLimitEndDate', '1', 'Y'); //GET BUYER;
            document.MAINFORM.FA_ANCHOR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_ANCHOR_CCY.value, document.MAINFORM.FA_ANCHOR_AMT.value);
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD' && document.MAINFORM.FA_SERVICE_APPRVD.value == '2') {
            document.getElementById('LIMIT').innerHTML = 'Seller Limit';
            document.getElementById('LIM').innerHTML = 'Seller Limit End Date';
            SYS_GetTableDataByRule_S('CreateSBR_Get_AnchorLimitEndDate', '2', 'Y'); //GET SELLER;
            document.MAINFORM.FA_ANCHOR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_ANCHOR_CCY.value, document.MAINFORM.FA_ANCHOR_AMT.value);
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD' && document.MAINFORM.FA_SERVICE_APPRVD.value == '1') {
            document.getElementById('LIMIT').innerHTML = 'Buyer Limit';
            document.getElementById('LIM').innerHTML = 'Buyer Limit End Date';
            SYS_GetTableDataByRule_S('CreateSBR_Get_AnchorLimitEndDate', '1', 'Y'); //GET BUYER;
            document.MAINFORM.FA_ANCHOR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_ANCHOR_CCY.value, document.MAINFORM.FA_ANCHOR_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_SBR_LMT_BAL = function() {
    try {

        var lmtbal; // Utility Auto Fix Comments
        SYS_GetTableDataByRule_S('Get_SBR_LM_BAL_ASBR', '1', 'Y');
        lmtbal = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value); // Utility Auto Fix Comments
        document.MAINFORM.FA_LMT_BAL.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, lmtbal);

    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_ORG_LMT_AMT.value = document.MAINFORM.FA_LMT_AMT.value;
        document.MAINFORM.FA_ORG_DUE_DT.value = document.MAINFORM.FA_LMT_DUE_DT.value;
        SYF_FADA_Get_SBR_LMT_BAL();
        document.MAINFORM.FA_TEMP5.value = document.MAINFORM.FA_LMT_AMT.value;
        SYF_FADA_Get_AnchorLimitEndDate();
        EEHtml.getElementById('discount1').style.display = "none";
        EEHtml.getElementById('discount2').style.display = "none";
        EEHtml.getElementById('disc1').style.display = "";
        EEHtml.getElementById('disc2').style.display = "";
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_LoadDoComplete = function() {
    try {


    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_IncDecAmt = function() {
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
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYF_FADA_Get_AnchorLimitEndDate();
            SYF_FADA_GET_SBR_ANCHOR_LMTCCY_EXCH_RT();
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DD') {
            EEHtml.getElementById('LIMIT_DIV').style.display = "none"; //DD needn't limit; 
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            EEHtml.getElementById('B').style.display = "block";
            EEHtml.getElementById('G').style.display = "none";
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') { //Change from RF to SF for SCF change
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('G').style.display = "block";
        } else {
            EEHtml.getElementById('B').style.display = "none";
            EEHtml.getElementById('G').style.display = "none";
        }

        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF') { //Change from RF to SF for SCF change
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '3') {
                SYT_ChangeFldClass(document.MAINFORM.FA_MAX_LOAN_PERC, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_LOAN_IRATE_TYPE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_IRT_SPREAD, 'P');
            }
            if (document.MAINFORM.FA_SERVICE_APPRVD.value == '2') {
                SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'M');
            }
        }
        SYF_FADA_Cal_FA_IRT_SPREAD();
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'IQ') {
            SYF_FADA_Cal_IncDecFlg();
        }
        SYF_FADA_MPO_IncDecAmt();
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
        SYF_FADA_MPO_BUYER_SELLER_ACC_NO();
        SYF_FADA_Hidden_Show_FA_REQ_BUYER_APR_FLG();
        SYF_FADA_CHECK_POF_LOAN_FIELD();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_checkDiscRate1 = function() {
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
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_checkDiscRate2 = function() {
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
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_BUYER_SELLER_ACC_NO = function() {
    try {

        //Add by Canny for SCF change
        if (document.MAINFORM.FA_AUTO_DEBIT.value == "Yes") {
            if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF') {
                SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_AC_NO, 'M');
                SYT_ChangeFldClass(document.MAINFORM.FA_SEL_AC_NO, 'P');
            } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
                SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_AC_NO, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_SEL_AC_NO, 'M');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_AC_NO, 'P');
                SYT_ChangeFldClass(document.MAINFORM.FA_SEL_AC_NO, 'P');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_SEL_AC_NO, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Hidden_Show_FA_REQ_BUYER_APR_FLG = function() {
    try {

        //Add by Canny for SCF change
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'RD') {
            EEHtml.getElementById('NeedBuyerApprove').style.display = "block";
            SYT_ChangeFldClass_New('FA_REQ_BUYER_APR_FLG', 'O');
        } else {
            EEHtml.getElementById('NeedBuyerApprove').style.display = "none";
            SYT_ChangeFldClass_New('FA_REQ_BUYER_APR_FLG', 'H');
            document.MAINFORM.FA_REQ_BUYER_APR_FLG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_Pending_Invoices = function() {
    try {

        if (document.MAINFORM.FA_RELATION_STATUS.value == 'Close') {
            document.MAINFORM.FA_DOC_REF_TEMP.value = "";
            SYS_GetTableDataByRule_S('Chk_Pending_INV_ME', '1', 'Y');
            if (document.MAINFORM.FA_DOC_REF_TEMP.value != "") {
                alert("The Relationship cannot be closed until all invoices have been settled or closed. Please close all pending invoices or settle all financed invoices before closing the relationship.");
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_SBR_ANCHOR_LMTCCY_EXCH_RT = function() {
    try {

        var busi_tp = document.MAINFORM.FA_BUSI_TYPE.value;
        if (busi_tp != 'DD' && document.MAINFORM.FA_ANCHOR_CCY.value != document.MAINFORM.FA_SBR_CCY.value) {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_SBR_CCY.value, document.MAINFORM.FA_ANCHOR_CCY.value, 'Booking Rate', 'EXCH_RT1');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_COMM_RT = function() {
    try {

        var COMM_RT = document.MAINFORM.FA_EF_COMM_RT.value;
        if (COMM_RT >= 100 || COMM_RT < 0) {
            SYS_CheckError(document.MAINFORM.FA_EF_COMM_RT, 'The Gross Turnover Commission must between 0 and 100!');
            document.MAINFORM.FA_EF_COMM_RT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_Rebate_RT = function() {
    try {

        var REBATE_RT = document.MAINFORM.FA_REBATE_RATE.value;
        if (REBATE_RT >= 100 || REBATE_RT < 0) {
            SYS_CheckError(document.MAINFORM.FA_REBATE_RATE, 'The Rebate Rate must between 0 and 100!');
            document.MAINFORM.FA_REBATE_RATE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_VAT_RT = function() {
    try {

        var VAT_RT = document.MAINFORM.VAT_RT.value;
        if (VAT_RT >= 100 || VAT_RT < 0) {
            SYS_CheckError(document.MAINFORM.VAT_RT, 'The VAT Rate must between 0 and 100!');
            document.MAINFORM.VAT_RT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_AUTO_DEBIT_onchange = function(event) {
    try {
        SYF_FADA_MPO_BUYER_SELLER_ACC_NO();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'DF') {
            SYS_GetCUBK('GET_BUYER_INFO_FOR_DF', 'FA_BUYER_ID');
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'DISC') {
            SYS_GetCUBK('GET_BUYER_INFO_FOR_DISC', 'FA_BUYER_ID');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_DECR_AMT_onchange = function(event) {
    try {
        SYF_FADA_Chk_DecrAmt();
        SYF_FADA_Cal_FA_LMT_BAL();
        document.MAINFORM.FA_DECR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_DECR_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_EF_COMM_RT_onchange = function(event) {
    try {
        SYF_FADA_Check_COMM_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_EF_HAN_CHG_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_EF_HAN_CHG_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_EF_HAN_CHG_CCY.value, document.MAINFORM.FA_EF_HAN_CHG_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_INCR_AMT_onchange = function(event) {
    try {
        SYF_FADA_Chk_IncrAmt();
        SYF_FADA_Cal_FA_LMT_BAL();
        document.MAINFORM.FA_INCR_AMT.value = SYT_AmtFormat(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_INCR_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_DUE_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            SYF_FADA_Chk_FA_LMT_DUE_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_VAL_DT_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_LMT_VAL_DT.value != '' && document.MAINFORM.FA_LMT_DUE_DT.value != '') {
            SYF_FADA_Chk_FA_LMT_VAL_DT();
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LOAN_IRATE_TYPE_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_IRT_SPREAD();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_PRM_DISC_RT_onchange = function(event) {
    try {
        SYF_FADA_checkDiscRate1();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_REBATE_RATE_onchange = function(event) {
    try {
        SYF_FADA_Check_Rebate_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_RELATION_STATUS_onchange = function(event) {
    try {
        SYF_FADA_Check_Pending_Invoices();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'SF' || document.MAINFORM.FA_BUSI_TYPE.value == 'DD') { //Change from RF to SF for SCF change
            SYS_GetCUBK('GET_SELLER_INFO_FOR_RF', 'FA_SEL_ID');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SND_DISC_RT_onchange = function(event) {
    try {
        SYF_FADA_checkDiscRate2();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_REBATE_BT_onclick = function(event) {
    try {
        var BUSI_TP = document.MAINFORM.FA_BUSI_TYPE.value;
        if (BUSI_TP == 'SF') {
            SYS_InqCUBK_byCondition('GET_REBATE_ACC_ME', '1');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_TEMP_FLG1_onchange = function(event) {
    try {
        SYF_FADA_Cal_IncDecFlg();
        SYF_FADA_MPO_IncDecAmt();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendSBR_ME.js", e);
    }
}