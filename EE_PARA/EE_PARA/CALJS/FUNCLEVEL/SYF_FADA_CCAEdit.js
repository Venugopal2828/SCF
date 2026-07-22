var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RELE_CREA_BY();


        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYF_FADA_MPO_FA_APPL_LMT_AMT_CLASS();
        }
        SYF_FADA_Get_IF_LMT();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.SYF_FADA_MPO_FA_APPL_LMT_AMT_CLASS = function() {
    try {

        if (document.MAINFORM.FA_CREDIT_REQ.value == '4') {
            document.MAINFORM.FA_APPL_LMT_AMT.value = 0;
            document.MAINFORM.FA_APPL_LMT_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_VAL_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_ORDER_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LATEST_SHIP_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_PERC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_COMP_REG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_RESP_AGNT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_NM2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_POSTBOX, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CITY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_PROV, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_POSTCODE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CNTY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_BK_BRCH, 'O');
        } else if (document.MAINFORM.FA_CREDIT_REQ.value == '2') {
            document.MAINFORM.FA_APPL_LMT_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_VAL_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_ORDER_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_LATEST_SHIP_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_PERC, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_AMT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_COMP_REG, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_RESP_AGNT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_NM2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_POSTBOX, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CITY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_PROV, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_POSTCODE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CNTY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_BK_BRCH, 'O');
        } else if (document.MAINFORM.FA_CREDIT_REQ.value == '3') {
            document.MAINFORM.FA_APPL_LMT_AMT.value = 0;
            document.MAINFORM.FA_APPL_LMT_CCY.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_VAL_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_ORDER_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LATEST_SHIP_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_PERC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_COMP_REG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_RESP_AGNT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_NM2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_POSTBOX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CITY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_PROV, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_POSTCODE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CNTY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_BK_BRCH, 'P');
        } else {
            document.MAINFORM.FA_APPL_LMT_AMT.value = 0;
            document.MAINFORM.FA_APPL_LMT_CCY.value = '';
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_APPL_LMT_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_VAL_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_ORDER_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_LATEST_SHIP_DT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_PERC, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_OWN_RISK_AMT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_COMP_REG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_RESP_AGNT, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_NM2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_POSTBOX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CITY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_PROV, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_POSTCODE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CNTY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_TEL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_FAX, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_MAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_CONT_ADDR, 'P');
            SYT_ChangeFldClass(document.MAINFORM.FA_BUYER_BK_BRCH, 'P');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_APPL_LMT_AMT = function() {
    try {

        if (document.MAINFORM.FA_CREDIT_REQ.value == '3') {
            document.MAINFORM.FA_APPL_LMT_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        SYF_FADA_Chk_CRccy();
        SYF_FADA_Cal_FA_INV_CCY15();
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_REQ_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.FA_BUSI_TYPE.value = 'EF';
        document.MAINFORM.TEMP_FLG1.value = '2';
        document.MAINFORM.FA_MSG01_FUNC.value = '2';
        document.MAINFORM.FA_MSG_TEXT.value = '';
        document.MAINFORM.FA_CREDIT_REQ.value = '';
        var arrOptionV = ['2', '3', '4'];
        SYS_FilterOptions('FA_CREDIT_REQ', arrOptionV);
        SYF_FADA_Cal_FA_MSG_FUNC();
        SYF_FADA_Cal_FA_BUSI_STATUS();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_FA_CREDIT_REQ = function() {
    try {

        if (document.MAINFORM.FA_CREDIT_REQ.value == '2' && document.MAINFORM.FA_LMT_AMT.value != 0) {
            alert('Request New Limit option in the Credit required field is only selected when FSBC limit amount is 0!');
            document.MAINFORM.FA_CREDIT_REQ.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_BUSI_STATUS = function() {
    try {

        if (document.MAINFORM.FA_CREDIT_REQ.value == '2') {
            document.MAINFORM.FA_BUSI_STATUS.value = 'CCA';
        } else {
            document.MAINFORM.FA_BUSI_STATUS.value = 'CCE';
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_CRccy = function() {
    try {

        var ccy1 = document.MAINFORM.FA_INV_CCY1.value;
        var ccy2 = document.MAINFORM.FA_INV_CCY2.value;
        var ccy3 = document.MAINFORM.FA_INV_CCY3.value;
        var ccy4 = document.MAINFORM.FA_INV_CCY4.value;
        var ccy5 = document.MAINFORM.FA_INV_CCY5.value;
        var applCCY = document.MAINFORM.FA_APPL_LMT_CCY.value;
        if (applCCY != '' && document.MAINFORM.FA_CREDIT_REQ.value == '3') {
            if (applCCY == ccy1 || applCCY == ccy2 || applCCY == ccy3 || applCCY == ccy4 || applCCY == ccy5) {
                SYS_CheckError(document.MAINFORM.FA_APPL_LMT_CCY, 'The CCY has been applied before!');
                return false;
            }
            return true;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {



        if (document.MAINFORM.FA_APPL_LMT_CCY.value == '') {
            document.MAINFORM.FA_APPL_LMT_CCY.value = document.MAINFORM.FA_LMT_CCY.value;
        } //for EDI check
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_INV_CCY15 = function() {
    try {

        var ccy1 = document.MAINFORM.FA_INV_CCY1.value;
        var ccy2 = document.MAINFORM.FA_INV_CCY2.value;
        var ccy3 = document.MAINFORM.FA_INV_CCY3.value;
        var ccy4 = document.MAINFORM.FA_INV_CCY4.value;
        var ccy5 = document.MAINFORM.FA_INV_CCY5.value;
        var applCCY = document.MAINFORM.FA_APPL_LMT_CCY.value;
        if (document.MAINFORM.FA_CREDIT_REQ.value == '3') {
            if (ccy2 == '' && ccy1 != applCCY) {
                document.MAINFORM.FA_INV_CCY2.value = applCCY;
            } else if (ccy3 == '' && ccy1 != applCCY && ccy2 != applCCY) {
                document.MAINFORM.FA_INV_CCY3.value = applCCY;
            } else if (ccy4 == '' && ccy1 != applCCY && ccy2 != applCCY && ccy3 != applCCY) {
                document.MAINFORM.FA_INV_CCY4.value = applCCY;
            } else if (ccy5 == '' && ccy1 != applCCY && ccy2 != applCCY && ccy3 != applCCY && ccy4 != applCCY) {
                document.MAINFORM.FA_INV_CCY5.value = applCCY;
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Cal_FA_MSG_FUNC = function() {
    try {

        if (document.MAINFORM.FA_CREDIT_REQ.value == '4') {
            document.MAINFORM.FA_MSG_FUNC.value = '7';
        } else {
            if (document.MAINFORM.FA_LMT_TYPE.value == '1') {
                document.MAINFORM.FA_MSG_FUNC.value = '5';
            } else {
                document.MAINFORM.FA_MSG_FUNC.value = '6';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_IF_LMT = function() {
    try {

        //var sFieldList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;LM_BASE_CCY;LM_DUE_DAY";
        //var sMappingList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;TEMP_CHAR1;TEMP_DATE4";
        SYS_GetTableDataByRule_S('SYF_FADA_CCAEdit_SYF_FADA_Get_IF_LMT_0', '1', 'Y');
        var FA_TEMP1 = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.TEMP_CHAR1.value, FA_TEMP1);
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        var arrOptionV = ['2', '3', '4'];
        SYS_FilterOptions('FA_CREDIT_REQ', arrOptionV);
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_CCY_onchange = function(event) {
    try {
        SYF_FADA_Chk_CRccy();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_CREDIT_REQ_onchange = function(event) {
    try {
        SYF_FADA_Chk_FA_CREDIT_REQ();
        SYF_FADA_Chk_FA_APPL_LMT_AMT();
        SYF_FADA_Cal_FA_MSG_FUNC();
        SYF_FADA_MPO_FA_APPL_LMT_AMT_CLASS();
        if (document.MAINFORM.FA_CREDIT_REQ.value == '3') {
            SYF_FADA_Cal_FA_INV_CCY15();
        }
        SYF_FADA_Cal_FA_BUSI_STATUS();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_AMT_onchange = function(event) {
    try {
        SYF_FADA_Chk_FA_CREDIT_REQ();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAEdit.js", e);
    }
}