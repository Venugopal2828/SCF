var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FADA_Chk_ReplDT = function() {
    try {

        var nRepldays = SYS_GetSubDays(document.MAINFORM.FA_REQ_DT.name, document.MAINFORM.FA_REPL_DT.name);
        if (nRepldays < 0) {
            SYS_CheckError(document.MAINFORM.FA_REPL_DT, 'Reply Date can not be ealier than Request Date!');
            document.MAINFORM.FA_REPL_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_RefNo = function(ref) {
    try {

        var pre = document.MAINFORM.FA_BUSI_TYPE.value;
        var UnitCode = SYS_BUSI_UNIT;
        var year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        var month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        var sub = 'PCR';
        document.MAINFORM.FA_PCR_REF.value = pre + UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FA_LMT_ASS_AMT = function() {
    try {

        var appllmtamt = SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value);
        var exRt1 = document.MAINFORM.EXCH_RT1.value;
        var lmtassamt = SYS_BeFloat(SYS_BeFloat(document.MAINFORM.FA_LMT_ASS_AMT.value) * exRt1);

        if (lmtassamt < appllmtamt) {
            SYT_ChangeFldClass_New('FA_REASON', 'M');
            if (document.MAINFORM.FA_REASON.value == '') {
                alert('Please input the reason!');
                return false;
            } else {
                return true;
            }
        } else {
            SYT_ChangeFldClass_New('FA_REASON', 'P');
            document.MAINFORM.FA_REASON.value = '';
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('PCR_REF', 'SYF_FADA_Get_RefNo');
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_MSG_TEXT02.value = '';

        //document.MAINFORM.FA_LMT_ASS_CCY.value=document.MAINFORM.FA_APPL_LMT_CCY.value;//0821
        //document.MAINFORM.FA_LMT_ASS_AMT.value=document.MAINFORM.FA_APPL_LMT_AMT.value;//0831
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        }
        if (SYS_FUNCTION_TYPE == 'EC' && SYS_ERROR == "") {
            SYF_FADA_MPO_FA_LMT_ASS_AMT();
        }
        if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.FA_BUSI_STATUS.value = 'PCR';
        }
        SYF_FADA_getLmtExRT();
        SYF_FADA_Cal_Buyer_Lmt();
        SYF_FADA_MPO_FieldClass();
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_Chk_Buyer_ID()) {
            return false;
        }
        if (!SYF_FADA_Chk_Buyer_LMTDueDT()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_LMT_ASS_AMT()) {
            return false;
        }
        if (!SYF_FADA_Chk_ReplDT()) {
            return false;
        }
        if (!SYF_FADA_Chk_Buyer_Name()) {
            return false;
        }
        if (!SYF_FADA_MPO_FA_LMT_ASS_AMT()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_getLmtExRT = function() {
    try {

        var fromCCY = document.MAINFORM.FA_LMT_ASS_CCY.value;
        var toCCY1 = document.MAINFORM.FA_APPL_LMT_CCY.value;
        var toCCY2 = document.MAINFORM.TEMP_CCY.value;
        if (fromCCY != '') {
            SYS_GetExchangeRate_S(fromCCY, toCCY1, 'Booking Rate', 'EXCH_RT1');
            SYS_GetExchangeRate_S(fromCCY, toCCY2, 'Booking Rate', 'EXCH_RT3');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_Buyer_Lmt = function() {
    try {

        //var sFieldList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;LM_BASE_CCY;LM_DUE_DAY;LM_CUST_NAME";
        //var sMappingList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;TEMP_CCY;TEMP_DATE1;FA_TEMP4";
        SYS_GetTableDataByRule_S('SYF_FADA_PCAResponse_SYF_FADA_Cal_Buyer_Lmt_0', '1', 'Y');

        var BUYER_LMT = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.TEMP_CCY.value, BUYER_LMT);

        SYF_FADA_getLmtExRT();
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FieldClass = function() {
    try {

        SYT_ChangeFldClass_New('FA_BUYER_COMP_REG', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CNTC_FLG', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_RESP_AGNT', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CONT_NM', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_ID', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CONT_TEL', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_NM', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_NM2', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CONT_FAX', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_POSTBOX', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CONT_MAIL', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CITY', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CONT_ADDR', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_CNTY', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_BK_NM', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_PROV', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_BK_BRCH', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_POSTCODE', 'P');
        SYT_ChangeFldClass_New('FA_BUYER_AC_NO', 'P');
        SYT_ChangeFldClass_New('B_BUYER', 'P');
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_LMT_ASS_AMT = function() {
    try {

        var BuyerLmtBal = SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
        var exRt = document.MAINFORM.EXCH_RT3.value;
        var AssAmt = SYS_BeFloat(SYS_BeFloat(document.MAINFORM.FA_LMT_ASS_AMT.value) * exRt);
        if (AssAmt > BuyerLmtBal) {
            alert("Credit Assessment exceeds buyer's Limit Balance!");
            document.MAINFORM.FA_LMT_ASS_AMT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_Buyer_LMTDueDT = function() {
    try {

        if (document.MAINFORM.TEMP_DATE1.value != '') {
            var ndays = SYS_GetSubDays(document.MAINFORM.TEMP_DATE1.name, document.MAINFORM.TRX_DT.name);
            if (ndays > 0) {
                SYS_CheckError(document.MAINFORM.TEMP_DATE1, 'Buyer limits is overdue, please check it!');
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_Buyer_ID = function() {
    try {

        if (document.MAINFORM.FA_BUYER_ID.value == '') {
            alert('Buyer info is not maintained in our customer data, Please check it first!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_Buyer_Name = function() {
    try {

        var BYLmtNM = document.MAINFORM.FA_TEMP4.value;
        var BYNM1 = document.MAINFORM.FA_BUYER_NM.value;
        var BYNM2 = document.MAINFORM.FA_BUYER_NM2.value;
        if (BYLmtNM != BYNM1 && BYLmtNM != BYNM2) {
            alert('Buyer name is not same with the info in our customer data! pls check it');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_ASS_AMT_onchange = function(event) {
    try {
        document.MAINFORM.FA_LMT_ASS_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_LMT_ASS_CCY.value, document.MAINFORM.FA_LMT_ASS_AMT.value);
        SYF_FADA_MPO_FA_LMT_ASS_AMT();
        SYF_FADA_Chk_FA_LMT_ASS_AMT();
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_ASS_CCY_onchange = function(event) {
    try {
        SYF_FADA_getLmtExRT();
        SYF_FADA_Chk_FA_LMT_ASS_AMT();
        SYF_FADA_MPO_FA_LMT_ASS_AMT();
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_REPL_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_ReplDT();
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_PCAResponse.js", e);
    }
}