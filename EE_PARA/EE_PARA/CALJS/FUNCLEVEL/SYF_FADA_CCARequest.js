var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FADA_Chk_Buyer_Country = function(fieldName) {
    try {

        if (/^[A-Z]*$/.test(document.MAINFORM.FA_BUYER_CNTY.value)) {
            return true;
        } else {
            SYS_CheckError(document.MAINFORM.FA_BUYER_CNTY, 'Please check the input characters of Buyer Country!');
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FSBC = function() {
    try {

        var funcType; // Utility Auto Fix Comments
        var passed; // Utility Auto Fix Comments
        funcType = SYS_FUNCTION_TYPE;
        if (funcType == "IQ" || funcType == "RE" || funcType == "EC") {
            return true;
        }
        SYS_GetTableDataByRule_S('SYF_FADA_CCARequest_SYF_FADA_Chk_FSBC_0', '1', 'Y');
        passed = SYF_FADA_Cal_TEMP_CHAR6();
        if (passed == false) {
            alert("The FSBC already exists!");
        }
        document.MAINFORM.TEMP_CHAR6.value = '';
        return passed;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var goodsDesc; // Utility Auto Fix Comments
        var goodsNM; // Utility Auto Fix Comments
        SYF_FADA_Cal_EDIMSG05_MSGTXT();
        if (document.MAINFORM.FA_LMT_ASS_AMT.value == '') {
            document.MAINFORM.FA_LMT_ASS_AMT.value = 0; // Utility Auto Fix Comments
        }
        document.MAINFORM.FA_RELATION_STATUS.value = 'Active';
        goodsDesc = document.MAINFORM.FA_GOODS_DES.value;
        goodsNM = document.MAINFORM.FA_GOODS_NM.value;
        document.MAINFORM.TEMP_CHAR21.value = goodsNM + ", " + goodsDesc;
        document.MAINFORM.TEMP_CHAR2.value = document.MAINFORM.FA_TTL_SEL_TNOVCCY.value + SYS_BeFloat(document.MAINFORM.FA_TTL_SEL_TNOV.value);
        SYF_FADA_Cal_setBA_FLG();
        document.MAINFORM.FA_LMT_CCY.value = document.MAINFORM.FA_LMT_ASS_CCY.value;
        document.MAINFORM.FA_SBR_REF.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.CURRNT_STATUS.value = 'CCA';
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_setBA_FLG = function() {
    try {

        if (document.MAINFORM.FA_SERVICE_REQ.value == '1') {
            document.MAINFORM.FA_BA_FLG.value = '1';
        } else {
            document.MAINFORM.FA_BA_FLG.value = '2';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_APPL_LMT_CCYbak = function() {
    try {

        if (document.MAINFORM.FA_LMT_ASS_AMT.value == 0) {
            document.MAINFORM.TEMP_FLG1.value = '1';
        } else {
            document.MAINFORM.TEMP_FLG1.value = '2';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_PMT_TERMS = function() {
    try {

        if (document.MAINFORM.FA_PMT_TERMS_FLG.value == '1') {
            if (SYS_BeFloat(document.MAINFORM.FA_PMT_TERMS.value) > 180) {
                SYS_CheckError(document.MAINFORM.FA_PMT_TERMS, 'Payment Terms should not exceed 180 days from invoice value day!');
                document.MAINFORM.FA_PMT_TERMS.value = '';
                document.MAINFORM.FA_APPL_INFO.value = '';
                return false;
            }
            return true;
        } else {
            if (SYS_BeFloat(document.MAINFORM.FA_PMT_TERMS.value) > 60) {
                SYS_CheckError(document.MAINFORM.FA_PMT_TERMS, 'Payment Terms should not exceed 60 days from end of month!');
                document.MAINFORM.FA_PMT_TERMS.value = '';
                document.MAINFORM.FA_APPL_INFO.value = '';
                return false;
            }
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_TEMP_CHAR6 = function() {
    try {

        if (document.MAINFORM.TEMP_CHAR6.value == '' || document.MAINFORM.TEMP_CHAR6.value == 'null') {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_IF_LMT_EXCH_RT = function() {
    try {

        if (document.MAINFORM.FA_APPL_LMT_CCY.value != '') {
            SYS_GetExchangeRate_S(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.TEMP_CHAR1.value, 'Booking Rate', 'FA_IF_LMT_EXCH_RT');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_setMainRef = function(ref) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = 'EF';
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);

        document.MAINFORM.FA_TEMP3.value = pre + UnitCode + year + month + ref;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_CCY_AMT = function() {
    try {

        document.MAINFORM.FA_CHG_BC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_CHG_BC_CCY.value, document.MAINFORM.FA_CHG_BC_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_APPL_INFO = function() {
    try {

        if (document.MAINFORM.FA_PMT_TERMS_FLG.value == '1') {
            document.MAINFORM.FA_APPL_INFO.value = 'Payment terms is ' + document.MAINFORM.FA_PMT_TERMS.value + ' days from invoice value date.';
        } else {
            document.MAINFORM.FA_APPL_INFO.value = 'Payment terms is ' + document.MAINFORM.FA_PMT_TERMS.value + ' days from invoice issue month.';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        var arrOptionV; // Utility Auto Fix Comments
        SYT_loadExchRate();
        //SYS_GetRefNo_S('FAEF_REQ_LIMIT','SYF_FADA_setLimitsRef');
        SYS_GetRefNo_S('FAEF_MAIN_REF', 'SYF_FADA_setMainRef');

        arrOptionV = ['5', '6'];
        SYS_FilterOptions('FA_MSG_FUNC', arrOptionV);
        arrOptionV = ['1', '2', '3']; // Utility Auto Fix Comments
        SYS_FilterOptions('FA_SERVICE_REQ', arrOptionV);
        arrOptionV = ['1', '2']; // Utility Auto Fix Comments
        SYS_FilterOptions('FA_LMT_TYPE', arrOptionV);
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_SERVICE_REQ = function() {
    try {

        if (document.MAINFORM.FA_SERVICE_REQ.value == '3') {
            document.MAINFORM.FA_APPL_LMT_AMT.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'M');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_TEMP_IF_BAL = function() {
    try {

        //if (document.MAINFORM.FA_IS_BANK.value=='2'&& SYS_BeFloat(document.MAINFORM.FA_TEMP2.value)<0) -By TJ 20081011
        if (SYS_BeFloat(document.MAINFORM.FA_TEMP2.value) < 0) {
            SYS_CheckError(document.MAINFORM.FA_APPL_LMT_AMT, "Import factor's limit is not enough!");
            document.MAINFORM.FA_APPL_LMT_AMT.value = 0;
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_BUYER_CONT_TEL = function() {
    try {

        if (document.MAINFORM.FA_BUYER_CNTC_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'O');
            if (document.MAINFORM.FA_BUYER_ID.value != '') {
                SYS_GetCUBK('FA_BUYER_CONT', document.MAINFORM.FA_BUYER_ID.name);
            }
        } else {
            document.MAINFORM.FA_BUYER_CONT_NM.value = '';
            document.MAINFORM.FA_BUYER_CONT_TEL.value = '';
            document.MAINFORM.FA_BUYER_CONT_MAIL.value = '';
            document.MAINFORM.FA_BUYER_CONT_FAX.value = '';
            document.MAINFORM.FA_BUYER_CONT_ADDR.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_CRccy = function() {
    try {

        var ccyCR; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_APPL_LMT_CCY.value != '' && document.MAINFORM.FA_CREDIT_REQ.value == '3') {
            ccyCR = document.MAINFORM.FA_APPL_LMT_CCY.value;
            switch (ccyCR) {
                case document.MAINFORM.FA_INV_CCY1.value:
                    SYS_CheckError(document.MAINFORM.FA_APPL_LMT_CCY, "The CCY has been applied before!");
                    return false;
                    //break;
                case document.MAINFORM.FA_INV_CCY2.value:
                    SYS_CheckError(document.MAINFORM.FA_APPL_LMT_CCY, "The CCY has been applied before!");
                    return false;
                    //break;
                case document.MAINFORM.FA_INV_CCY3.value:
                    SYS_CheckError(document.MAINFORM.FA_APPL_LMT_CCY, "The CCY has been applied before!");
                    return false;
                    //break;
                case document.MAINFORM.FA_INV_CCY4.value:
                    SYS_CheckError(document.MAINFORM.FA_APPL_LMT_CCY, "The CCY has been applied before!");
                    return false;
                    //break;
                case document.MAINFORM.FA_INV_CCY5.value:
                    SYS_CheckError(document.MAINFORM.FA_APPL_LMT_CCY, "The CCY has been applied before!");
                    return true;
                    //break;
                default:
                    return true;
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_PreCreditinfo = function() {
    try {

        var strFieldList; // Utility Auto Fix Comments
        var strMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_SEL_ID.value != '' && document.MAINFORM.FA_BUYER_ID.value != '' && document.MAINFORM.FA_IF_ID.value != '') {
            //strFieldList = "FA_APPL_LMT_CCY;FA_APPL_LMT_AMT;FA_PMT_TERMS";
            //strMappingList = "FA_LMT_ASS_CCY;FA_LMT_ASS_AMT;FA_PMT_TERMS";
            SYS_GetTableDataByRule_S('SYF_FADA_CCARequest_SYF_FADA_Get_PreCreditinfo_1', '1', 'Y');
            SYF_FADA_Cal_FA_APPL_LMT_CCYbak();
        } else {
            document.MAINFORM.FA_LMT_ASS_CCY.value = '';
            document.MAINFORM.FA_LMT_ASS_AMT.value = '';
            document.MAINFORM.FA_PMT_TERMS.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_setLimitsRef = function(ref) {
    try {

        var UnitCode; // Utility Auto Fix Comments
        var date; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = 'EF';
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'CCA';
        document.MAINFORM.FA_CCA_REF.value = pre + UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_LMT_TYPE = function() {
    try {

        if (document.MAINFORM.FA_MSG_FUNC.value == '5') {
            document.MAINFORM.FA_LMT_TYPE.value = '1';
        } else {
            document.MAINFORM.FA_LMT_TYPE.value = '2';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_EDIMSG05_MSGTXT = function() {
    try {

        var EDI05MsgTxt; // Utility Auto Fix Comments
        var FA_APPL_INFO; // Utility Auto Fix Comments
        var otherMsgInfo; // Utility Auto Fix Comments
        FA_APPL_INFO = document.MAINFORM.FA_APPL_INFO.value;
        otherMsgInfo = document.MAINFORM.FA_MSG_TEXT02.value;
        EDI05MsgTxt = FA_APPL_INFO + "\r\n" + otherMsgInfo;
        document.MAINFORM.X750_72.value = EDI05MsgTxt;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var mappingList; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var tempFA_IF_ID; // Utility Auto Fix Comments
        //SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_TEMP3.value;
        document.MAINFORM.FA_CCA_REF.value = document.MAINFORM.FA_TEMP3.value + 'CCA';
        //sFieldList = "DISTINCT(FA_IF_ID) AS FA_IF_ID";
        mappingList = "FA_IF_ID";
        SYS_GetTableDataByRule_S('SYF_FADA_CCARequest_PostconditionOnInit_2', '1', 'Y', 'Y');
        SYM_FADA_RefreshOptions(mappingList);

        if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {

            window_onload.toString().match(/fv\(\'FA_IF_ID\'\,\'(.*)\'\);/mg);
            tempFA_IF_ID = RegExp.$1;
            document.MAINFORM.FA_IF_ID.value = tempFA_IF_ID;
        }
        EEHtml.fireEvent(document.MAINFORM.FA_TTL_SEL_TNOV, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.FA_OA_TNOV, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.FA_OTHER_TNOV, 'onchange');
        SYF_FADA_Cal_CCY_AMT();
        SYF_FADA_Cal_FA_LMT_TYPE();
        SYF_FADA_MPO_ChgFldClassForSelInfo();
        if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {
            SYF_FADA_MPO_CCYClassOnit();
            SYF_FADA_MPO_Buyer_Contact();
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FSB_constraint = function() {
    try {

        document.MAINFORM.TEMP_CHAR6.value = '';
        SYS_GetTableDataByRule_S('SYF_FADA_CCARequest_SYF_FADA_Chk_FSB_constraint_3', '1', 'Y');
        if (document.MAINFORM.TEMP_CHAR6.value != null && document.MAINFORM.TEMP_CHAR6.value != '' && document.MAINFORM.TEMP_CHAR6.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_BUYER_ID, 'The FSBC already exists!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_buyerinfo = function() {
    try {

        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_GetCUBK('FA_BUYER_ID1', document.MAINFORM.FA_BUYER_ID.name, '', 'SYF_FADA_Chk_BuyerIDExistorNot');
        } else {
            document.MAINFORM.FA_BUYER_NM.value = '';
            document.MAINFORM.FA_BUYER_AC_NO.value = '';
            document.MAINFORM.FA_BUYER_BK_BRCH.value = '';
            document.MAINFORM.FA_BUYER_BK_NM.value = '';
            document.MAINFORM.FA_BUYER_CITY.value = '';
            document.MAINFORM.FA_BUYER_CNTC_FLG.value = '';
            document.MAINFORM.FA_BUYER_CNTY.value = '';
            document.MAINFORM.FA_BUYER_CNTY1.value = '';
            document.MAINFORM.FA_BUYER_COMP_REG.value = '';
            document.MAINFORM.FA_BUYER_CONT_ADDR.value = '';
            document.MAINFORM.FA_BUYER_CONT_FAX.value = '';
            document.MAINFORM.FA_BUYER_CONT_MAIL.value = '';
            document.MAINFORM.FA_BUYER_CONT_NM.value = '';
            document.MAINFORM.FA_BUYER_CONT_TEL.value = '';
            document.MAINFORM.FA_BUYER_NM2.value = '';
            document.MAINFORM.FA_BUYER_POSTBOX.value = '';
            document.MAINFORM.FA_BUYER_POSTCODE.value = '';
            document.MAINFORM.FA_BUYER_PROV.value = '';
            document.MAINFORM.FA_BUYER_RESP_AGNT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_ChgFldClassForSelInfo = function() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.FA_GOODS_NM, 'M');
        SYT_ChangeFldClass(document.MAINFORM.FA_NORMAL_TERMS, 'O');
        SYT_ChangeFldClass(document.MAINFORM.FA_GOODS_DES, 'M');
        SYT_ChangeFldClass(document.MAINFORM.FA_CHG_BC_CCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.FA_CHG_BC_AMT, 'O');
        SYT_ChangeFldClass(document.MAINFORM.FA_TTL_SEL_TNOVCCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.FA_TTL_SEL_TNOV, 'M');
        SYT_ChangeFldClass(document.MAINFORM.FA_NO_OF_CRN, 'O');
        SYT_ChangeFldClass(document.MAINFORM.FA_NO_OF_INV, 'M');
        SYT_ChangeFldClass(document.MAINFORM.FA_OA_TNOV, 'M');
        SYT_ChangeFldClass(document.MAINFORM.FA_OTHER_TNOV, 'M');
        SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.FA_PMT_GRC_DAY, 'O');
        SYT_ChangeFldClass(document.MAINFORM.FA_PRM_DISC_DAYS, 'O');
        SYT_ChangeFldClass(document.MAINFORM.FA_PRM_DISC_RT, 'O');
        SYT_ChangeFldClass(document.MAINFORM.FA_SND_DISC_DAYS, 'O');
        SYT_ChangeFldClass(document.MAINFORM.FA_SND_DISC_RT, 'O');
        SYT_ChangeFldClass(document.MAINFORM.FA_CHG_BC_PERC, 'O');
        SYT_ChangeFldClass(document.MAINFORM.FA_NO_OF_COUNTER, 'M');
        SYT_ChangeFldClass(document.MAINFORM.FA_MSG_TEXT, 'O');
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        SYF_FADA_Chk_CRccy();
        if (!SYF_FADA_Chk_APPL_CCY()) {
            return false;
        } //add by TJ20081028
        /*if(!SYF_FADA_Chk_FA_PMT_TERMS())
{
 return false;
}*/
        if (!SYF_FADA_Chk_TEMP_IF_BAL()) {
            return false;
        }

        if (!SYF_FADA_Chk_FSB_constraint()) {
            return false;
        }
        if (!SYF_FADA_Chk_IF_LMT_DATE()) {
            return false;
        }
        if (!SYF_FADA_Chk_LmtDueDT()) {
            return false;
        }
        if (!SYF_FADA_Chk_LmtAmt()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_CCYClassChg = function() {
    try {

        var tempValue; // Utility Auto Fix Comments
        tempValue = document.MAINFORM.FA_INV_CCY1.value;
        if (document.MAINFORM.FA_INV_CCY2.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY2, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY2, 'P');
            tempValue = tempValue + ";" + document.MAINFORM.FA_INV_CCY2.value;
        }
        if (document.MAINFORM.FA_INV_CCY3.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY3, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY3, 'P');
            tempValue = tempValue + ";" + document.MAINFORM.FA_INV_CCY3.value;
        }
        document.MAINFORM.FA_TEMP6.value = tempValue;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_SellerInfo = function() {
    try {

        var FldList; // Utility Auto Fix Comments
        var MapList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_SEL_ID.value != '' && document.MAINFORM.FA_IF_ID.value != '') {
            //FldList = "FA_GOODS_NM;FA_OTHER_IF;FA_TTL_SEL_TNOVCCY;FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5;FA_MSG01_FUNC;FA_NO_OF_BUYERS;FA_NO_OF_CRN;FA_NO_OF_INV;FA_OA_TNOV;FA_OTHER_TNOV;FA_OTHER_TNOV_CCY;FA_PMT_GRC_DAY;FA_PMT_TERMS;FA_PRM_DISC_DAYS;FA_PRM_DISC_RT;FA_SEL_ADDR;FA_SEL_CITY;FA_SEL_CNTY;FA_SEL_POST_CODE;FA_SEL_PROV;FA_SERVICE_REQ;FA_SND_DISC_DAYS;FA_SND_DISC_RT;FA_TTL_SEL_TNOV;FA_CHG_BC_CCY;FA_GOODS_DES;FA_CHG_BC_PERC;FA_CHG_BC_AMT;FA_SEL_BK_BR;FA_IF_NM;FA_OA_TNOV_CCY;FA_SEL_BK_NM";
            //MapList = "FA_GOODS_NM;FA_OTHER_IF;FA_TTL_SEL_TNOVCCY;FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5;FA_MSG01_FUNC;FA_NO_OF_BUYERS;FA_NO_OF_CRN;FA_NO_OF_INV;FA_OA_TNOV;FA_OTHER_TNOV;FA_OTHER_TNOV_CCY;FA_PMT_GRC_DAY;FA_PMT_TERMS;FA_PRM_DISC_DAYS;FA_PRM_DISC_RT;FA_SEL_ADDR;FA_SEL_CITY;FA_SEL_CNTY;FA_SEL_POST_CODE;FA_SEL_PROV;FA_SERVICE_REQ;FA_SND_DISC_DAYS;FA_SND_DISC_RT;FA_TTL_SEL_TNOV;FA_CHG_BC_CCY;FA_GOODS_DES;FA_CHG_BC_PERC;FA_CHG_BC_AMT;FA_SEL_BK_BR;FA_IF_NM;FA_OA_TNOV_CCY;FA_SEL_BK_NM";
            SYS_GetTableDataByRule_S('SYF_FADA_CCARequest_SYF_FADA_Get_SellerInfo_4', '1', 'Y');
        } else {
            document.MAINFORM.FA_IF_NM.value = '';
            document.MAINFORM.FA_SEL_CITY.value = '';
            document.MAINFORM.FA_SEL_PROV.value = '';
            document.MAINFORM.FA_SEL_POST_CODE.value = '';
            document.MAINFORM.FA_SEL_CNTY.value = '';
            document.MAINFORM.FA_SEL_AC_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_BuyerIDExistorNot = function() {
    try {

        alert('The buyer does not exist!');
        document.MAINFORM.FA_BUYER_ID.value = '';
        document.MAINFORM.FA_BUYER_NM.value = '';
        document.MAINFORM.FA_BUYER_POSTBOX.value = '';
        document.MAINFORM.FA_BUYER_NM2.value = '';
        document.MAINFORM.FA_BUYER_CITY.value = '';
        document.MAINFORM.FA_BUYER_CNTY.value = '';
        document.MAINFORM.FA_BUYER_COMP_REG.value = '';
        document.MAINFORM.FA_BUYER_CONT_ADDR.value = '';
        document.MAINFORM.FA_BUYER_CONT_FAX.value = '';
        document.MAINFORM.FA_BUYER_CONT_MAIL.value = '';
        document.MAINFORM.FA_BUYER_CONT_NM.value = '';
        document.MAINFORM.FA_BUYER_CONT_TEL.value = '';
        document.MAINFORM.FA_BUYER_PROV.value = '';
        document.MAINFORM.FA_BUYER_POSTCODE.value = '';
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_LmtDueDT = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        //if (document.MAINFORM.TEMP_DATE4.value<document.MAINFORM.FA_LMT_DUE_DT.value){//Edit by amy
        if (document.MAINFORM.TEMP_DATE4.value == document.MAINFORM.FA_LMT_DUE_DT.value) {
            return true;
        }
        nDays = SYS_GetSubDays(document.MAINFORM.FA_LMT_DUE_DT.name, document.MAINFORM.TEMP_DATE4.name);
        if (document.MAINFORM.FA_LMT_DUE_DT.value != '' && nDays < 0) {
            alert("FSBC due date cannot be later than IF limit expiry date!");
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_IFInfo = function() {
    try {

        var FA_TEMP1; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sFieldList1; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sMappingList1; // Utility Auto Fix Comments
        //sFieldList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;LM_BASE_CCY;LM_DUE_DAY";
        //sMappingList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;TEMP_CHAR1;TEMP_DATE4";
        SYS_GetTableDataByRule_S('SYF_FADA_CCARequest_SYF_FADA_Get_IFInfo_5', '1', 'Y');
        FA_TEMP1 = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.TEMP_CHAR1.value, FA_TEMP1);

        //sFieldList1 = "FA_IS_BANK;FA_FACTOR_BIC";
        //sMappingList1 = "FA_IS_BANK;FA_FACTOR_BIC";
        SYS_GetTableDataByRule_S('SYF_FADA_CCARequest_SYF_FADA_Get_IFInfo_6', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_IF_LMT_DATE = function() {
    try {

        var nDays; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_SERVICE_REQ.value == '1' || document.MAINFORM.FA_SERVICE_REQ.value == '2') {
            //if(document.MAINFORM.FA_REQ_DT.value>document.MAINFORM.FA_TEMP_IF_LMT_DUE_DT.value){//Edit by amy
            if (document.MAINFORM.FA_REQ_DT.value == document.MAINFORM.TEMP_DATE4.value) {
                return true;
            }
            nDays = SYS_GetSubDays(document.MAINFORM.FA_REQ_DT.name, document.MAINFORM.TEMP_DATE4.name);
            if (nDays < 0) {
                SYS_CheckError(document.MAINFORM.FA_REQ_DT, 'Request date cannot be later than IF limit due date!');
                document.MAINFORM.FA_REQ_DT.value = '';
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_APPL_LMT_AMT_CCY = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_LMT_ASS_AMT.value) > 0) {
            document.MAINFORM.FA_APPL_LMT_CCY.value = document.MAINFORM.FA_LMT_ASS_CCY.value;
            SYF_FADA_Cal_FA_IF_LMT_EXCH_RT();
            document.MAINFORM.FA_APPL_LMT_AMT.value = document.MAINFORM.FA_LMT_ASS_AMT.value;
            EEHtml.fireEvent(document.MAINFORM.FA_APPL_LMT_AMT, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.FA_APPL_LMT_CCY, 'onchange');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_APPL_CCY = function() {
    try {

        var applCCY; // Utility Auto Fix Comments
        var ccy1; // Utility Auto Fix Comments
        var ccy2; // Utility Auto Fix Comments
        var ccy3; // Utility Auto Fix Comments
        applCCY = document.MAINFORM.FA_APPL_LMT_CCY.value;
        ccy1 = document.MAINFORM.FA_INV_CCY1.value;
        ccy2 = document.MAINFORM.FA_INV_CCY2.value;
        ccy3 = document.MAINFORM.FA_INV_CCY3.value;
        if (applCCY != ccy1 && applCCY != ccy2 && applCCY != ccy3) {
            SYS_CheckError(document.MAINFORM.FA_APPL_LMT_CCY, "Incorrect Applied CCY value! Please select one from INV_CCY1~3!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_TEMP2 = function() {
    try {

        var LMTReq; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_APPL_LMT_AMT.value != 0) {
            LMTReq = SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value) * SYS_BeFloat(document.MAINFORM.FA_IF_LMT_EXCH_RT.value);
            document.MAINFORM.FA_TEMP2.value = SYS_BeFloat(document.MAINFORM.FA_TEMP1.value) - LMTReq; //FA_TEMP1 = IF_LMT_BAL
            SYF_FADA_Chk_TEMP_IF_BAL();
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUYER_CNTC_FLG.value = '2';

        document.MAINFORM.FA_MSG01_FUNC.value = '2';
        document.MAINFORM.FA_BUSI_STATUS.value = 'CCA';
        document.MAINFORM.FA_BUSI_TYPE.value = 'EF';
        document.MAINFORM.FA_MSG_FUNC.value = '5';
        if (document.MAINFORM.FA_BUYER_ID.value != '') {
        SYS_GetCUBK('FA_BUYER_REG_NO', document.MAINFORM.FA_BUYER_ID.name, '', '');
        }
        if (document.MAINFORM.FA_SEL_ID.value != '') {
        SYS_GetCUBK('FA_SEL_REG_NO', document.MAINFORM.FA_SEL_ID.name, '', '');
        }
        SYS_GetTableDataByRule_S('CCARequest_GET_FA_CUST_TYPE', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FA_GOODS_DES = function() {
    try {

        SYS_GetCUBK('FA_GOODS_QUERY', 'FA_GOODS_CODE');
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_CCYClassOnit = function() {
    try {

        var arrayCCY; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var tempValue; // Utility Auto Fix Comments
        tempValue = document.MAINFORM.FA_TEMP6.value;
        arrayCCY = tempValue.split(";");
        len = arrayCCY.length;
        if (len == 1) {
            SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY3, 'O');
        } else if (len == 2) {
            SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY3, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_INV_CCY3, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_Buyer_Contact = function() {
    try {

        if (document.MAINFORM.FA_BUYER_CNTC_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'O'); // Utility Auto Fix Comments
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_LmtAmt = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value) < 0) {
            SYS_CheckError(document.MAINFORM.FA_APPL_LMT_AMT, 'Invalid Amount,Please check it!');
            document.MAINFORM.FA_APPL_LMT_AMT.value = 0;
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_APPL_LMT_CCY_OPTION = function() {
    try {

        var FA_APPL_LMT_CCY; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSelects1; // Utility Auto Fix Comments
        //sFieldList = "FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5";
        //sMappingList = "FA_INV_CCY1;FA_INV_CCY2;FA_INV_CCY3;FA_INV_CCY4;FA_INV_CCY5";
        SYS_GetTableDataByRule_S('SYF_FADA_CCARequest_SYF_FADA_Get_APPL_LMT_CCY_OPTION_7', '1', 'Y');
        sSelects1 = [
            [document.MAINFORM.FA_INV_CCY1.value, document.MAINFORM.FA_INV_CCY1.value],
            [document.MAINFORM.FA_INV_CCY2.value, document.MAINFORM.FA_INV_CCY2.value],
            [document.MAINFORM.FA_INV_CCY3.value, document.MAINFORM.FA_INV_CCY3.value],
            [document.MAINFORM.FA_INV_CCY4.value, document.MAINFORM.FA_INV_CCY4.value],
            [document.MAINFORM.FA_INV_CCY5.value, document.MAINFORM.FA_INV_CCY5.value]
        ];

        FA_APPL_LMT_CCY = document.MAINFORM.FA_APPL_LMT_CCY.value;
        for (i = 0; i < sSelects1.length; ++i) {
            if (sSelects1[i][0] == '') {
                continue;
            }
            document.MAINFORM.FA_APPL_LMT_CCY.options.add(new Option(sSelects1[i][0], sSelects1[i][1]));
            if (FA_APPL_LMT_CCY != '') {
                document.MAINFORM.FA_APPL_LMT_CCY.value = FA_APPL_LMT_CCY;
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_C_MAIN_REF_onchange = function(event) {
    try {
        EEHtml.fireEvent(document.MAINFORM.CLERK_ID, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_INFO_onchange = function(event) {
    try {
        SYF_FADA_Cal_EDIMSG05_MSGTXT();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_AMT_onchange = function(event) {
    try {
        SYF_FADA_Chk_LmtAmt();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_CCY_onchange = function(event) {
    try {
        SYF_FADA_Chk_APPL_CCY();
        SYF_FADA_Chk_CRccy();
        SYF_FADA_Cal_FA_IF_LMT_EXCH_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_CNTC_FLG_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_BUYER_CONT_TEL();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_CNTY_onchange = function(event) {
    try {
        SYM_FADA_toUpperCase('FA_BUYER_CNTY');

        SYF_FADA_Chk_Buyer_Country();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_BUYER_CONT_TEL();
        SYF_FADA_Get_buyerinfo();
        SYF_FADA_Get_PreCreditinfo();
        SYF_FADA_Cal_CCY_AMT();
        SYF_FADA_Cal_FA_APPL_LMT_AMT_CCY();
        if (document.MAINFORM.FA_APPL_LMT_CCY.value != '') {
            SYF_FADA_Cal_FA_IF_LMT_EXCH_RT();
        }
        if (document.MAINFORM.FA_BUYER_ID.value != '') {
        SYS_GetCUBK('FA_BUYER_REG_NO', document.MAINFORM.FA_BUYER_ID.name, '', '');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_CHG_BC_AMT_onchange = function(event) {
    try {
        SYF_FADA_Cal_CCY_AMT();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_CHG_BC_CCY_onchange = function(event) {
    try {
        SYF_FADA_Cal_CCY_AMT();
        EEHtml.fireEvent(document.MAINFORM.FA_CHG_BC_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_GOODS_CODE_onchange = function(event) {
    try {
        SYF_FADA_Get_FA_GOODS_DES();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_IF_ID_onchange = function(event) {
    try {
        SYF_FADA_Get_IFInfo();
        SYF_FADA_Get_SellerInfo();
        SYF_FADA_Get_PreCreditinfo();
        SYF_FADA_Cal_CCY_AMT();
        SYF_FADA_MPO_CCYClassChg();
        SYF_FADA_Get_APPL_LMT_CCY_OPTION();
        SYF_FADA_Cal_FA_IF_LMT_EXCH_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_ASS_AMT_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_APPL_LMT_AMT_CCY();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_DUE_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_LmtDueDT();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_MSG_FUNC_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_LMT_TYPE();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_MSG_TEXT02_onchange = function(event) {
    try {
        SYF_FADA_Cal_EDIMSG05_MSGTXT();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_OA_TNOV_CCY_onchange = function(event) {
    try {
        //document.MAINFORM.FA_OA_TNOV.fireEvent('onchange');
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_OTHER_TNOV_CCY_onchange = function(event) {
    try {
        //document.MAINFORM.FA_OTHER_TNOV.fireEvent('onchange');
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_PMT_TERMS_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_APPL_INFO();
        SYF_FADA_Chk_FA_PMT_TERMS();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_PMT_TERMS_FLG_onchange = function(event) {
    try {
        SYF_FADA_Cal_FA_APPL_INFO();
        SYF_FADA_Chk_FA_PMT_TERMS();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_REQ_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_IF_LMT_DATE();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SEL_ID_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SERVICE_REQ_onchange = function(event) {
    try {
        SYF_FADA_Chk_SERVICE_REQ();
        SYF_FADA_Chk_IF_LMT_DATE();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_TEMP1_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_TEMP2_onchange = function(event) {
    try {
        SYF_FADA_Chk_TEMP_IF_BAL();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_TTL_SEL_TNOVCCY_onchange = function(event) {
    try {
        //document.MAINFORM.FA_TTL_SEL_TNOV.fireEvent('onchange');
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_CCARequest.js", e);
    }
}