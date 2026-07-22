var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'PCI';
        document.MAINFORM.FA_BUSI_TYPE.value = 'IF';
        SYS_GetRefNo('IF_PCI', 'SYF_FADA_SetRefNo', "", "MAINREF", "", "MAINREF");
        SYF_FADA_GET_CCY();
        document.MAINFORM.FA_MSG_DT.value = '';
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.SYF_FADA_SetRefNo = function(ref) {
    try {

        var pre = document.MAINFORM.FA_BUSI_TYPE.value;
        var UnitCode = SYS_BUSI_UNIT;
        //UnitCode=UnitCode.substr(0,4);
        var year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        var month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        var sub = 'PCI';
        document.MAINFORM.C_MAIN_REF.value = pre + UnitCode + year + month + ref + sub;
        document.MAINFORM.FA_PRICING_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Get_Pricing_Info = function() {
    try {

        //var FieldList = "FA_IF_COMM_RT;FA_IF_OTH_CHG_AMT;FA_IF_OTH_CHG_CCY;FA_IF_HAN_CHG_AMT;FA_IF_HAN_CHG_CCY;FA_ASSESS_CHG;FA_ASSESS_CHG_CCY";
        //var MappingList = "FA_IF_COMM_RT;FA_IF_OTH_CHG_AMT;FA_IF_OTH_CHG_CCY;FA_IF_HAN_CHG_AMT;FA_IF_HAN_CHG_CCY;FA_ASSESS_CHG;FA_ASSESS_CHG_CCY";
        SYS_GetTableDataByRule_S('SYF_FADA_IFPricing_SYF_FADA_Get_Pricing_Info_0', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.SYF_FADA_INQ_BUYER_PCA = function() {
    try {

        /*sqlcondition = "C_TRX_STATUS = 'M' and FA_BUSI_TYPE = 'IF' and FA_EF_ID= '" + document.MAINFORM.FA_EF_ID.value + "' and FA_SEL_ID= '" + document.MAINFORM.FA_SEL_ID.value + "'";
        SYS_InqCUBK_Sql('PCA_BUYER', sqlcondition);*/
        SYS_InqCUBK_byCondition('PCA_BUYER', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.SYF_FADA_INQ_BUYER_FSBC = function() {
    try {

        /*sqlcondition = "C_TRX_STATUS = 'M' and FA_BUSI_TYPE = 'IF' and C_FUNC_SHORT_NAME = 'CCAResp' and FA_EF_ID= '" + document.MAINFORM.FA_EF_ID.value + "' and FA_SEL_ID= '" + document.MAINFORM.FA_SEL_ID.value + "'";
        SYS_InqCUBK_Sql('FSBC_BUYER', sqlcondition);*/
        SYS_InqCUBK_byCondition('FSBC_BUYER', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_BUYER_PCA = function() {
    try {

        if (document.MAINFORM.PYMT_C_MAIN_REF.value != '') {
            SYS_GetCUBK('PCA_BUYER', document.MAINFORM.PYMT_C_MAIN_REF.name, 'SYF_FADA_BUYER_bak()');
        } else {
            document.MAINFORM.PYMT_C_MAIN_REF.value = '';

        }
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_BUYER_FSBC = function() {
    try {

        if (document.MAINFORM.CFNC_C_ORIGIN_MAIN_REF.value != '') {
            SYS_GetCUBK('FSBC_BUYER', document.MAINFORM.CFNC_C_ORIGIN_MAIN_REF.name, 'SYF_FADA_BUYER_bak()');
        } else {
            document.MAINFORM.CFNC_C_ORIGIN_MAIN_REF.value = '';

        }
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_CCY = function() {
    try {

        if (document.MAINFORM.FA_APPL_LMT_CCY.value != '' && document.MAINFORM.FA_APPL_LMT_CCY.value != null) {
            document.MAINFORM.FA_IF_HAN_CHG_CCY.value = document.MAINFORM.FA_APPL_LMT_CCY.value;
            document.MAINFORM.FA_IF_OTH_CHG_CCY.value = document.MAINFORM.FA_APPL_LMT_CCY.value;


        }
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_INSU_ID = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FADA_IFPricing_SYF_FADA_GET_INSU_ID_1', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_INSU_RATE = function() {
    try {

        SYS_GetTableDataByRule_S('SYF_FADA_IFPricing_SYF_FADA_GET_INSU_RATE_2', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.SYF_FADA_BUYER_bak = function() {
    try {

        SYF_FADA_GET_CCY();
        SYF_FADA_GET_INSU_ID();
        SYF_FADA_GET_INSU_RATE();
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.SYF_FADA_Check_IF_COMM_RT = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_IF_COMM_RT.value) < SYS_BeFloat(document.MAINFORM.FA_INCO_COMM_RT.value)) {
            SYS_CheckError(document.MAINFORM.FA_IF_COMM_RT, ' IF commission should be higher than Insurance Co. commission.');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_Check_IF_COMM_RT()) {
            return false;
        }
        return SYF_FADA_IF_Confirm();
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.SYF_FADA_IF_Confirm = function() {
    try {

        if (document.MAINFORM.FA_IF_COMM_RT.value == 0) {
            if (!confirm('IF commission rate is 0!')) {
                return false;
            }
        }
        if (document.MAINFORM.FA_IF_HAN_CHG_AMT.value == 0) {
            if (!confirm('IF handling charge per document is 0!')) {
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.FLD_FADA_CFNC_C_ORIGIN_MAIN_REF_onchange = function(event) {
    try {
        SYF_FADA_GET_BUYER_FSBC();
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.FLD_FADA_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_CCY_onchange = function(event) {
    try {
        SYF_FADA_BUYER_bak();
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.FLD_FADA_PYMT_C_MAIN_REF_onchange = function(event) {
    try {
        SYF_FADA_GET_BUYER_PCA();
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}

csFuncLevelProto.FLD_FADA_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FADA_IFPricing.js", e);
    }
}