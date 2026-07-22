var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        LMTS.Ext.deleteAll();
        if (document.MAINFORM.FA_BA_FLG.value == '1' && SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value) > 0) {
            LMTS.Ext.createFSBC(document.MAINFORM.C_MAIN_REF.value, document.MAINFORM.FA_CCR_REF.value, document.MAINFORM.FA_LMT_AMT.value, document.MAINFORM.FA_LMT_CCY.value, 'Y', 'Y', SYS_BUSI_DATE, document.MAINFORM.FA_LMT_VAL_DT.value, document.MAINFORM.FA_LMT_DUE_DT.value); // Utility Auto Fix Comments
        }


        document.MAINFORM.FA_SBR_REF.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_FADA_CHECK_LIMIT_DATE()) {
            return false;
        }
        if (!SYF_FADA_CHECK_LIMIT_AMT()) {
            return false;
        }
        if (!SYF_FADA_CHECK_INSU_LIMIT()) {
            return false;
        }
        if (!SYF_FADA_CHECK_BUYER_NM()) {
            return false;
        }
        if (!SYF_FADA_Chk_ReplDT()) {
            return false;
        }

        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_BUSI_STATUS.value = 'CCR';
        document.MAINFORM.FA_BUSI_TYPE.value = 'IF';
        SYS_GetRefNo('FAEF_CCR_REF', 'SYF_FADA_setCCRref', "", "MAINREF", "", "MAINREF");
        SYF_FADA_GET_CUST_INFO();
        SYF_FADA_FA_IF_COMM_RT();

        document.MAINFORM.FA_LMT_CCY.value = document.MAINFORM.FA_APPL_LMT_CCY.value;
        //SYF_FADA_GET_CUST_INFO();
        SYF_FADA_GET_FA_TEMP1();
        SYF_FADA_GET_BUYER_LIMIT();
        SYF_FADA_exchangerate();
        document.MAINFORM.FA_MSG_TEXT02.value = '';
        SYF_FADA_GET_FA_SERVICE_REQ();
        SYF_FADA_FA_BA_FLG();
        if (document.MAINFORM.FA_BUSI_TYPE.value = 'IF') {
            document.MAINFORM.FA_ANCHOR_ID.value = document.MAINFORM.FA_BUYER_ID.value;
            document.MAINFORM.FA_ANCHOR_NM.value = document.MAINFORM.FA_BUYER_NM.value;
            document.MAINFORM.FA_COUNTER_ID.value = document.MAINFORM.FA_SEL_ID.value;
            document.MAINFORM.FA_COUNTER_NM.value = document.MAINFORM.FA_SEL_NM.value;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        var arrOptionV; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
        }
        arrOptionV = ['7', '8'];
        SYS_FilterOptions('FA_MSG_FUNC', arrOptionV);
        document.MAINFORM.FA_MSG_FUNC.value = '8';
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_BUYER_NM = function() {
    try {
        if (document.MAINFORM.FA_BUYER_NM.value != document.MAINFORM.FORACOF_TEMP_TEAM_NM.value) {
            alert('Buyer name is not the same with the info in our customer data! pls check it!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_CHECK_BUYER_NM", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_INSU_LIMIT = function() {
    try {
        var temp1; // Utility Auto Fix Comments
        var temp2; // Utility Auto Fix Comments
        temp1 = SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value) * SYS_BeFloat(document.MAINFORM.FA_IF_LMT_EXCH_RT.value); // Utility Auto Fix Comments
        temp2 = SYS_BeFloat(document.MAINFORM.FA_TEMP1.value);
        if (temp1 > temp2 && document.MAINFORM.FA_BA_FLG.value == '1' && document.MAINFORM.FA_INCO_ID.value != '') {
            alert('The Insurance CO Limit Balance is not enough!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_CHECK_INSU_LIMIT", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_LIMIT_AMT = function() {
    try {
        var temp1; // Utility Auto Fix Comments
        var temp2; // Utility Auto Fix Comments
        temp1 = SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value) * SYS_BeFloat(document.MAINFORM.FA_IF_LMT_EXCH_RT.value); // Utility Auto Fix Comments
        temp2 = SYS_BeFloat(document.MAINFORM.FA_TEMP5.value);
        if (temp1 > temp2 && document.MAINFORM.FA_BA_FLG.value == '1') {
            alert('The buyer limits is not enough!');
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_CHECK_LIMIT_AMT", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_LIMIT_DATE = function() {
    try {
        var a1; // Utility Auto Fix Comments
        a1 = SYS_GetSubDays(document.MAINFORM.FA_TEMP_DT1.name, document.MAINFORM.FA_LMT_DUE_DT.name);
        if (a1 > 0 && document.MAINFORM.FA_BA_FLG.value == '1') {
            alert('Please check the Limit Due Date! It is later than buyer limit due date.!');
            document.MAINFORM.FA_LMT_DUE_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_CHECK_LIMIT_DATE", e);
    }
}

csFuncLevelProto.SYF_FADA_CHECK_RESON = function() {
    try {
        var FA_APPL_LMT_AMT; // Utility Auto Fix Comments
        var FA_LMT_AMT; // Utility Auto Fix Comments
        FA_LMT_AMT = SYS_BeFloat(document.MAINFORM.FA_LMT_AMT.value);
        FA_APPL_LMT_AMT = SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value);
        if ((FA_LMT_AMT < FA_APPL_LMT_AMT) || (document.MAINFORM.FA_REPL_CODE.value == '2' || document.MAINFORM.FA_REPL_CODE.value == '3')) {
            SYT_ChangeFldClass(document.MAINFORM.FA_REASON, 'M', 'N');
        } else {

            SYT_ChangeFldClass(document.MAINFORM.FA_REASON, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_CHECK_RESON", e);
    }
}

csFuncLevelProto.SYF_FADA_Chk_ReplDT = function() {
    try {
        var nRepldays; // Utility Auto Fix Comments
        nRepldays = SYS_GetSubDays(document.MAINFORM.FA_REQ_DT.name, document.MAINFORM.FA_REPL_DT.name);
        if (nRepldays < 0) {
            SYS_CheckError(document.MAINFORM.FA_REPL_DT, 'Reply Date can not be ealier than Request Date!');
            document.MAINFORM.FA_REPL_DT.value = '';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_Chk_ReplDT", e);
    }
}

csFuncLevelProto.SYF_FADA_FA_BA_FLG = function() {
    try {
        if (document.MAINFORM.FA_SERVICE_REQ.value == '1' || document.MAINFORM.FA_SERVICE_REQ.value == '2') {
            document.MAINFORM.FA_BA_FLG.value = '1';


        } else {
            document.MAINFORM.FA_BA_FLG.value = '2';

        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_FA_BA_FLG", e);
    }
}

csFuncLevelProto.SYF_FADA_FA_IF_COMM_RT = function() {
    try {
        SYS_GetTableDataByRule_S('SYF_FADA_CCAResponse_SYF_FADA_FA_IF_COMM_RT_0', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_FA_IF_COMM_RT", e);
    }
}

csFuncLevelProto.SYF_FADA_FA_LMT_AMT = function() {
    try {
        if (document.MAINFORM.FA_REPL_CODE.value != '2' && document.MAINFORM.FA_REPL_CODE.value != '5' && document.MAINFORM.FA_REPL_CODE.value != '6') {
            if (SYS_BeFloat(document.MAINFORM.FA_APPL_LMT_AMT.value) > 0) {
                SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT, 'M', 'N');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT, 'P', 'N');
                document.MAINFORM.FA_LMT_AMT.value = 0;
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT, 'P', 'N');
            document.MAINFORM.FA_LMT_AMT.value = 0;
        }
        //document.MAINFORM.FA_LMT_AMT.fireEvent('onchange');
        //document.MAINFORM.FA_LMT_CCY.value=document.MAINFORM.FA_APPL_LMT_CCY.value;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_FA_LMT_AMT", e);
    }
}

csFuncLevelProto.SYF_FADA_FA_MSG_FUNC = function() {
    try {
        if (document.MAINFORM.FA_MSG_FUNC.value == '7') {

            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT, 'P', 'N');
            document.MAINFORM.FA_LMT_AMT.value = 0;
            document.MAINFORM.FA_REPL_CODE.value = '6';
            SYT_ChangeFldClass(document.MAINFORM.FA_REPL_CODE, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_IF_LMT_EXCH_RT, 'P', 'N');
            document.MAINFORM.FA_IF_LMT_EXCH_RT.value = 0;

        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_LMT_AMT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_REPL_CODE, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_IF_LMT_EXCH_RT, 'M', 'N');

        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_FA_MSG_FUNC", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_BUYER_LIMIT = function() {
    try {
        var FA_TEMP5; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        //sFieldList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;LM_DUE_DAY;LM_BASE_CCY";
        //sMappingList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;FA_TEMP_DT1;ACC_TRX_CCY";
        SYS_GetTableDataByRule_S('SYF_FADA_CCAResponse_SYF_FADA_GET_BUYER_LIMIT_3', '1', 'Y');

        FA_TEMP5 = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
        //document.MAINFORM.FA_TEMP5.value =SYT_CCY_AMT(document.MAINFORM.TEMP_CCY.value,FA_TEMP5);
        document.MAINFORM.FA_TEMP5.value = SYT_CCY_AMT(document.MAINFORM.ACC_TRX_CCY.value, FA_TEMP5);
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_GET_BUYER_LIMIT", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_CUST_INFO = function() {
    try {
        var FieldList; // Utility Auto Fix Comments
        var MappingList; // Utility Auto Fix Comments
        //FieldList = "FA_INSU_COMP_FLAG;FA_INSU_AGR_NO;FA_IF_ID;FA_IF_NM;PARTY_NM"
        //MappingList = "FA_INSU_COMP_FLAG;FA_INSU_AGR_NO;FA_INCO_ID;FA_INCO_NM;FORACOF_TEMP_TEAM_NM"
        SYS_GetTableDataByRule_S('SYF_FADA_CCAResponse_SYF_FADA_GET_CUST_INFO_1', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_GET_CUST_INFO", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_FA_SERVICE_REQ = function() {
    try {
        var FieldList; // Utility Auto Fix Comments
        var MappingList; // Utility Auto Fix Comments
        //FieldList = "FA_SERVICE_REQ";
        //MappingList = "FA_SERVICE_REQ";
        SYS_GetTableDataByRule_S('SYF_FADA_CCAResponse_SYF_FADA_GET_FA_SERVICE_REQ_4', '1', 'Y');
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_GET_FA_SERVICE_REQ", e);
    }
}

csFuncLevelProto.SYF_FADA_GET_FA_TEMP1 = function() {
    try {
        var FA_TEMP1; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        //sFieldList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;LM_BASE_CCY";
        //sMappingList = "LM_CRED_LMT;LM_OVER_OUT;LM_OUTD_APV;LM_OUTD_APL;LM_OUTC_APV;ACC_CCY";
        SYS_GetTableDataByRule_S('SYF_FADA_CCAResponse_SYF_FADA_GET_FA_TEMP1_2', '1', 'Y');

        FA_TEMP1 = SYS_BeFloat(document.MAINFORM.LM_CRED_LMT.value) - SYS_BeFloat(document.MAINFORM.LM_OVER_OUT.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APL.value) - SYS_BeFloat(document.MAINFORM.LM_OUTD_APV.value) + SYS_BeFloat(document.MAINFORM.LM_OUTC_APV.value);
        //document.MAINFORM.FA_TEMP1.value =SYT_CCY_AMT(document.MAINFORM.TEMP_CCY.value,FA_TEMP1);
        document.MAINFORM.FA_TEMP1.value = SYT_CCY_AMT(document.MAINFORM.ACC_CCY.value, FA_TEMP1);
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_GET_FA_TEMP1", e);
    }
}

csFuncLevelProto.SYF_FADA_INQ_FA_BUYER_ID = function() {
    try {
        //SYS_InqCUBK_Sql('GET_BUYER_INFO', "C_MAIN_REF='" + document.MAINFORM.FA_BUYER_ID.value + "'");
        SYS_InqCUBK_byCondition('GET_BUYER_INFO', '1');
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_INQ_FA_BUYER_ID", e);
    }
}

csFuncLevelProto.SYF_FADA_exchangerate = function() {
    try {
        SYS_GetExchangeRate_S('USD', document.MAINFORM.FA_LMT_CCY.value, 'Booking Rate', 'FA_IF_LMT_EXCH_RT');
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_exchangerate", e);
    }
}

csFuncLevelProto.SYF_FADA_setCCRref = function(ref) {
    try {
        var UnitCode; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var pre; // Utility Auto Fix Comments
        var sub; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
        UnitCode = SYS_BUSI_UNIT;
        //UnitCode=UnitCode.substr(0,4);
        year = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        month = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
        year = year.substr(2, 2);
        month = month.substr(5, 2);
        sub = 'CCR';
        document.MAINFORM.FA_CCR_REF.value = pre + UnitCode + year + month + ref + sub;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*SYF_FADA_setCCRref", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_APPL_LMT_AMT_onchange = function(event) {
    try {
        SYF_FADA_FA_LMT_AMT();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*FLD_FADA_FA_APPL_LMT_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_ID_onchange = function(event) {
    try {
        SYF_FADA_GET_CUST_INFO();
        SYF_FADA_GET_BUYER_LIMIT();
        if (document.MAINFORM.FA_BUYER_ID.value != '') {
            SYS_GetCUBK('GET_BUYER_INFO', document.MAINFORM.FA_BUYER_ID.name);
        }
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*FLD_FADA_FA_BUYER_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUYER_NM_onchange = function(event) {
    try {
        SYF_FADA_CHECK_BUYER_NM();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*FLD_FADA_FA_BUYER_NM_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_IF_LMT_EXCH_RT_onchange = function(event) {
    try {
        SYF_FADA_CHECK_LIMIT_AMT();
        SYF_FADA_CHECK_INSU_LIMIT();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*FLD_FADA_FA_IF_LMT_EXCH_RT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_INCO_ID_onchange = function(event) {
    try {
        SYF_FADA_FA_IF_COMM_RT();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*FLD_FADA_FA_INCO_ID_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_AMT_onchange = function(event) {
    try {
        SYF_FADA_CHECK_LIMIT_AMT();
        SYF_FADA_CHECK_INSU_LIMIT();
        SYF_FADA_CHECK_RESON();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*FLD_FADA_FA_LMT_AMT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_LMT_DUE_DT_onchange = function(event) {
    try {
        SYF_FADA_CHECK_LIMIT_DATE();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*FLD_FADA_FA_LMT_DUE_DT_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_MSG_FUNC_onchange = function(event) {
    try {
        SYF_FADA_FA_MSG_FUNC();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*FLD_FADA_FA_MSG_FUNC_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_REPL_CODE_onchange = function(event) {
    try {
        SYF_FADA_FA_LMT_AMT();
        SYF_FADA_CHECK_RESON();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*FLD_FADA_FA_REPL_CODE_onchange", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_REPL_DT_onchange = function(event) {
    try {
        SYF_FADA_Chk_ReplDT();
    } catch (e) {
        DisExcpt("SYF_FADA_CCAResponse.js*FLD_FADA_FA_REPL_DT_onchange", e);
    }
}