var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FADA_Cal_APPL_CCY_AMT = function() {
    try {

        document.MAINFORM.FA_APPL_LMT_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_APPL_LMT_CCY.value, document.MAINFORM.FA_APPL_LMT_AMT.value);
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_CCY_AMT = function() {
    try {

        document.MAINFORM.FA_CHG_BC_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_CHG_BC_CCY.value, document.MAINFORM.FA_CHG_BC_AMT.value);
        document.MAINFORM.FA_TTL_SEL_TNOV.value = SYT_CCY_AMT(document.MAINFORM.FA_TTL_SEL_TNOVCCY.value, document.MAINFORM.FA_TTL_SEL_TNOV.value);
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_toUpperCase = function(fldName) {
    try {

        var fldObj; // Utility Auto Fix Comments
        fldObj = EEHtml.getElementById(fldName);
        fldObj.value = fldObj.value.toUpperCase();
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_APPL_INFO = function() {
    try {

        if (document.MAINFORM.FA_PMT_TERMS_FLG.value == '1') {
            document.MAINFORM.FA_APPL_INFO.value = 'Payment terms is ' + document.MAINFORM.FA_PMT_TERMS.value + ' days from invoice value date.';
        } else {
            document.MAINFORM.FA_APPL_INFO.value = 'Payment terms is ' + document.MAINFORM.FA_PMT_TERMS.value + ' days from invoice issue month.';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_APPL_LMT_AMT = function() {
    try {

        if (document.MAINFORM.FA_SERVICE_REQ.value == '3' && document.MAINFORM.FA_APPL_LMT_AMT.value != 0) {
            SYS_CheckError(document.MAINFORM.FA_APPL_LMT_AMT.value, 'Applied Credit Assessment Amount should be zero!');
            document.MAINFORM.FA_APPL_LMT_AMT.value = 0;
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_BUYER_CNTY = function() {
    try {

        if (/^[A-Z]*$/.test(document.MAINFORM.FA_BUYER_CNTY.value)) {
            return true;
        } else {
            SYS_CheckError(document.MAINFORM.FA_BUYER_CNTY, 'Please check the Country Code!');
            document.MAINFORM.FA_BUYER_CNTY.value = '';
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_BUYER_ID = function() {
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
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_PMT_TERMS = function() {
    try {

        if (document.MAINFORM.FA_PMT_TERMS_FLG.value == '1') {
            if (SYS_BeFloat(document.MAINFORM.FA_PMT_TERMS.value) > 180) {
                SYS_CheckError(document.MAINFORM.FA_PMT_TERMS, 'Payment Terms should not exceed 180 days from invoice value day!');
                document.MAINFORM.FA_PMT_TERMS.value = 0;
                return false;
            }
            return true;
        } else {
            if (SYS_BeFloat(document.MAINFORM.FA_PMT_TERMS.value) > 60) {
                SYS_CheckError(document.MAINFORM.FA_PMT_TERMS, 'Payment Terms should not exceed 60 days from end of month!');
                document.MAINFORM.FA_PMT_TERMS.value = 0;
                return false;
            }
            return true;
        }
        if (SYS_BeFloat(document.MAINFORM.FA_PMT_TERMS.value) > 180) {
            SYS_CheckError(document.MAINFORM.FA_PMT_TERMS, 'Payment Terms should not exceed 180 days!');
            document.MAINFORM.FA_PMT_TERMS.value = 0;
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_IF_Bal = function() {
    try {

        var IFLmtBal; // Utility Auto Fix Comments
        var LmtAppled; // Utility Auto Fix Comments
        var exRt; // Utility Auto Fix Comments
        IFLmtBal = SYS_BeFloat(document.MAINFORM.TEMP_AMT5.value);
        exRt = document.MAINFORM.EXCH_RT3.value;
        LmtAppled = SYS_BeFloat(SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value) * exRt);
        if (LmtAppled > IFLmtBal) {
            alert("Applied Credit Assessment exceeds Import Factor's Limit Balance!");
            document.MAINFORM.FA_APPL_LMT_AMT.value = 0;

        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_IF_LIMIT_DATE = function() {
    try {

        var strFieldList; // Utility Auto Fix Comments
        var strMappingList; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_SERVICE_REQ.value == '1') {
            //strFieldList = "FA_LMT_VAL_DT;FA_LMT_DUE_DT";
            //strMappingList = "FA_TEMP_IF_LMT_VAL_DT;FA_TEMP_IF_LMT_DUE_DT";
            SYS_GetTableDataByRule_S('SYF_FADA_PCARequest_SYF_FADA_Chk_IF_LIMIT_DATE_3', '1', 'Y');

            if (document.MAINFORM.FA_REQ_DT.value == document.MAINFORM.FA_TEMP_IF_LMT_DUE_DT.value) {
                return true;
            }
            if (!SYS_Day1MustbeLaterThanDay2('FA_TEMP_IF_LMT_DUE_DT', 'FA_REQ_DT')) {
                return confirm('The Date is after IF limit due date!');
            } else {
                return true;
            }
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
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
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_Pmt_terms = function() {
    try {

        if (/^(\+)?(0|[1-9]\d*)$/.test(document.MAINFORM.FA_PMT_TERMS.value)) {
            return true;
        } else {
            SYS_CheckError(document.MAINFORM.FA_PMT_TERMS, 'Invalid number,please check it!');
            document.MAINFORM.FA_PMT_TERMS.value = 0;
            return false;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_Sel_IF_constraint = function() {
    try {

        document.MAINFORM.FA_TEMP4.value = '';
        SYS_GetTableDataByRule_S('SYF_FADA_PCARequest_SYF_FADA_Chk_Sel_IF_constraint_2', '1', 'Y');
        if (document.MAINFORM.FA_TEMP4.value != null && document.MAINFORM.FA_TEMP4.value != '' && document.MAINFORM.FA_TEMP4.value != 'null') {
            SYS_CheckError(document.MAINFORM.FA_BUYER_ID.value, 'The PCA has been done before!');
            document.MAINFORM.FA_BUYER_ID.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        var goodsDesc; // Utility Auto Fix Comments
        var goodsNM; // Utility Auto Fix Comments
        goodsDesc = document.MAINFORM.FA_GOODS_DES.value;
        goodsNM = document.MAINFORM.FA_GOODS_NM.value;
        document.MAINFORM.TEMP_CHAR21.value = goodsNM + ", " + goodsDesc;
        document.MAINFORM.TEMP_CHAR2.value = document.MAINFORM.FA_TTL_SEL_TNOVCCY.value + SYS_BeFloat(document.MAINFORM.FA_TTL_SEL_TNOV.value); //get ttl sel turnover for edi
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_Chk_FA_APPL_LMT_AMT()) {
            return false;
        }
        if (!SYF_FADA_Chk_LmtAmt()) {
            return false;
        }
        if (!SYF_FADA_Chk_FA_BUYER_CNTY()) {
            return false;
        }
        if (!SYF_FADA_Chk_Sel_IF_constraint()) {
            return false;
        }

        if (!SYF_FADA_Chk_IF_LIMIT_DATE()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
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
        SYS_GetTableDataByRule_S('SYF_FADA_PCARequest_SYF_FADA_Get_APPL_LMT_CCY_OPTION_4', '1', 'Y');
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
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_BuyerInfo = function() {
    try {

        if (document.MAINFORM.FA_BUYER_CNTC_FLG.value == '1') {
            document.MAINFORM.FA_BUYER_CONT_ADDR.value = '';
            document.MAINFORM.FA_BUYER_CONT_FAX.value = '';
            document.MAINFORM.FA_BUYER_CONT_MAIL.value = '';
            document.MAINFORM.FA_BUYER_CONT_TEL.value = '';
            document.MAINFORM.FA_BUYER_CONT_NM.value = '';
            if (document.MAINFORM.FA_BUYER_ID.value != '') {
                SYS_GetCUBK('FA_BUYER_ID1', document.MAINFORM.FA_BUYER_ID.name);
            }
        } else {
            document.MAINFORM.FA_BUYER_CONT_ADDR.value = '';
            document.MAINFORM.FA_BUYER_CONT_FAX.value = '';
            document.MAINFORM.FA_BUYER_CONT_MAIL.value = '';
            document.MAINFORM.FA_BUYER_CONT_NM.value = '';
            document.MAINFORM.FA_BUYER_CONT_TEL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_Buyer_Contatc = function() {
    try {

        if (document.MAINFORM.FA_BUYER_CNTC_FLG.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'O'); // Utility Auto Fix Comments
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
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FA_BUYER_NM = function() {
    try {

        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_GetCUBK('FA_BUYER_ID1', document.MAINFORM.FA_BUYER_ID.name, '', 'SYF_FADA_Chk_FA_BUYER_ID');
        } else {
            document.MAINFORM.FA_BUYER_NM.value = '';
            document.MAINFORM.FA_BUYER_NM2.value = '';
            document.MAINFORM.FA_BUYER_POSTBOX.value = '';
            document.MAINFORM.FA_BUYER_POSTCODE.value = '';
            document.MAINFORM.FA_BUYER_PROV.value = '';
            document.MAINFORM.FA_BUYER_RESP_AGNT.value = '';
            document.MAINFORM.FA_BUYER_EDI_ID.value = '';
            document.MAINFORM.FA_BUYER_AC_NO.value = '';
            document.MAINFORM.FA_BUYER_BK_BRCH.value = '';
            document.MAINFORM.FA_BUYER_BK_NM.value = '';
            document.MAINFORM.FA_BUYER_CITY.value = '';
            document.MAINFORM.FA_BUYER_CNTC_FLG.value = '';
            document.MAINFORM.FA_BUYER_CNTY.value = '';
            document.MAINFORM.FA_BUYER_COMP_REG.value = '';
            document.MAINFORM.FA_BUYER_CONT_ADDR.value = '';
            document.MAINFORM.FA_BUYER_CONT_FAX.value = '';
            document.MAINFORM.FA_BUYER_CONT_MAIL.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FA_GOODS_DES = function() {
    try {

        SYS_GetCUBK('FA_GOODS_QUERY', 'FA_GOODS_CODE');
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_FA_IS_FCI = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FADA_PCARequest_SYF_FADA_Get_FA_IS_FCI_0', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_RefNo = function(ref) {
    try {

        /*
var UnitCode;// Utility Auto Fix Comments
    var date;// Utility Auto Fix Comments
    var pre;// Utility Auto Fix Comments
    var sub;// Utility Auto Fix Comments
pre = 'EF';
        UnitCode = SYS_BUSI_UNIT;
        date = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = date.substr(2, 2);
        month = date.substr(5, 2);
        sub = 'PCA';
        document.MAINFORM.C_MAIN_REF.value = pre + UnitCode + year + month + ref + sub;
        document.MAINFORM.FA_PCA_REF.value = document.MAINFORM.C_MAIN_REF.value;
*/
        //// Mark by Echo for EECE
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_TYPE.value = 'EF';
        document.MAINFORM.FA_BUSI_STATUS.value = 'PCA';
        //document.MAINFORM.FA_REQ_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_PMT_COND.value = 'O/A';
        document.MAINFORM.FA_MSG01_FUNC.value = '1';
        document.MAINFORM.FA_SERVICE_REQ.value = '1';
        document.MAINFORM.FA_MSG_FUNC.value = '3';
        SYF_FADA_Cal_APPL_CCY_AMT();
        SYF_FADA_Get_FA_IS_FCI();
        document.MAINFORM.FA_BUYER_CNTY.value = SYS_BANK_COUNTRY;
        document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        //Add by Echo for EECE
        document.MAINFORM.FA_PCA_REF.value = document.MAINFORM.C_MAIN_REF.value;

        SYF_FADA_Get_FA_BUYER_NM();
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FA_APPL_LMT_AMT = function() {
    try {

        if (document.MAINFORM.FA_SERVICE_REQ.value == '3') {
            document.MAINFORM.FA_APPL_LMT_AMT.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_CCY, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FA_APPL_LMT_AMT3 = function() {
    try {

        if (document.MAINFORM.FA_SERVICE_REQ.value == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_CCY, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FIELDCLASS = function() {
    try {

        //1=YES,2=NO
        if (document.MAINFORM.FA_BUYER_CNTC_FLG.value == '1') {
            SYT_ChangeFldClass_New('FA_BUYER_CONT_NM', 'O');
            SYT_ChangeFldClass_New('FA_BUYER_CONT_TEL', 'O');
            SYT_ChangeFldClass_New('FA_BUYER_CONT_MAIL', 'O');
            SYT_ChangeFldClass_New('FA_BUYER_CONT_FAX', 'O');
            SYT_ChangeFldClass_New('FA_BUYER_CONT_ADDR', 'O');
        } else {
            SYT_ChangeFldClass_New('FA_BUYER_CONT_NM', 'P');
            SYT_ChangeFldClass_New('FA_BUYER_CONT_TEL', 'P');
            SYT_ChangeFldClass_New('FA_BUYER_CONT_MAIL', 'P');
            SYT_ChangeFldClass_New('FA_BUYER_CONT_FAX', 'P');
            SYT_ChangeFldClass_New('FA_BUYER_CONT_ADDR', 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var TEMP_AMT5; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        SYT_RELE_CREA_BY();
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        }

        SYF_FADA_Get_APPL_LMT_CCY_OPTION();
        if (SYS_FUNCTION_TYPE == "IQ" || SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "EC") {
            SYF_FADA_MPO_FIELDCLASS();
        }


        //sFieldList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;LM_BASE_CCY;LM_DUE_DAY";
        //sMappingList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;TEMP_CHAR1;FA_TEMP_IF_LMT_DUE_DT";
        SYS_GetTableDataByRule_S('SYF_FADA_PCARequest_PostconditionOnInit_1', '1', 'Y');
        document.MAINFORM.FA_TEMP_IF_LMT_DUE_DT.value = SYT_FormatDateToCurrent(document.MAINFORM.FA_TEMP_IF_LMT_DUE_DT.value);
        TEMP_AMT5 = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
        document.MAINFORM.TEMP_AMT5.value = SYT_CCY_AMT(document.MAINFORM.TEMP_CHAR1.value, TEMP_AMT5); //TO get IF LMT CCY&BAL&DUE DATE


        if (SYS_FUNCTION_TYPE == 'EC' && SYS_ERROR == "") {
            SYF_FADA_getExRT();
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        var arrOptionV; // Utility Auto Fix Comments
        // Mark by Echo for EECE
        //SYS_GetRefNo('FAEF_PRE_REQUEST', 'SYF_FADA_Get_RefNo');
        arrOptionV = ['1', '3'];
        SYS_FilterOptions('FA_SERVICE_REQ', arrOptionV);
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.SYF_FADA_getExRT = function() {
    try {

        var fromCCY; // Utility Auto Fix Comments
        var toCCY; // Utility Auto Fix Comments
        fromCCY = document.MAINFORM.FA_APPL_LMT_CCY.value;
        toCCY = document.MAINFORM.TEMP_CHAR1.value;
        if (fromCCY != '') {
            SYS_GetExchangeRate_S(fromCCY, toCCY, 'Booking Rate', 'EXCH_RT3');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_AMT_onchange = function(event) {
    try {
        SYF_FADA_Chk_LmtAmt();
        SYF_FADA_Chk_IF_Bal();
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_CCY_onchange = function(event) {
    try {
        SYF_FADA_Cal_APPL_CCY_AMT();
        SYF_FADA_getExRT();
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_CNTC_FLG_onchange = function(event) {
    try {
        SYF_FADA_MPO_FIELDCLASS();
        SYF_FADA_Get_Buyer_Contatc();
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_CNTY_onchange = function(event) {
    try {
        //SYF_FADA_FA_BUYER_CNTY();
        SYF_FADA_Chk_FA_BUYER_CNTY();
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        SYF_FADA_Chk_Sel_IF_constraint();
        SYF_FADA_Get_FA_BUYER_NM();
        SYF_FADA_Get_BuyerInfo();
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_CHG_BC_CCY_onchange = function(event) {
    try {
        SYF_FADA_Cal_CCY_AMT();
        EEHtml.fireEvent(document.MAINFORM.FA_CHG_BC_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_GOODS_CODE_onchange = function(event) {
    try {
        SYF_FADA_Get_FA_GOODS_DES();
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_PMT_TERMS_onchange = function(event) {
    try {
        SYF_FADA_Chk_APPL_INFO();
        SYF_FADA_Chk_FA_PMT_TERMS();
        SYF_FADA_Chk_Pmt_terms();
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_PMT_TERMS_FLG_onchange = function(event) {
    try {
        SYF_FADA_Chk_APPL_INFO();
        SYF_FADA_Chk_FA_PMT_TERMS();
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_SERVICE_REQ_onchange = function(event) {
    try {
        SYF_FADA_MPO_FA_APPL_LMT_AMT();
        EEHtml.fireEvent(document.MAINFORM.FA_APPL_LMT_AMT, 'onchange');
        if (document.MAINFORM.FA_SERVICE_REQ.value == '1') {
            SYF_FADA_MPO_FA_APPL_LMT_AMT3();
        } //11-13add
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FADA_TEMP_AMT5_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_PCARequestFromCE.js", e);
    }
}