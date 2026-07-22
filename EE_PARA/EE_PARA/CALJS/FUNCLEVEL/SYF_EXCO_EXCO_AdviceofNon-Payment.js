var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        SYM_EXCO_INIT();
        document.MAINFORM.SEND_CCY.value = document.MAINFORM.COLL_CCY.value;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EXCO_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_MPO_ADV_TXT = function() {
    try {

        if (document.MAINFORM.ADV_TYPE.value == 'OTHR') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_TXT, 'M');
        } else {
            document.MAINFORM.ADV_TXT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.ADV_TXT, 'H');
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        InitRun();
        SYT_DisableDivClass('B_div');
        SYF_EXCO_MPO_ADV_TXT();
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.COLL_BK_REF.value;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.SYF_EXCO_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_ADV_TYPE_onchange = function(event) {
    try {
        SYF_EXCO_MPO_ADV_TXT();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_ADD', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('COLL_BK_ID', 'COLL_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.COLL_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('COLL_BK_POST', document.MAINFORM.COLL_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_COLL_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_NM_onchange = function(event) {
    try {
        //SYM_EXCO_CHG_PARTIES();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWE_POST_ADD', document.MAINFORM.DRWE_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_ADD', document.MAINFORM.DRWR_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWR_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_DRWR_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('DRWR_POST_ADD', 'DRWR_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_CORR_MED_onchange = function(event) {
    try {
        SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_ADD', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('INCASE_OF_ND_ID', 'INCASE_OF_ND_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_INCASE_OF_ND_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('INCASE_OF_ND_POST', document.MAINFORM.INCASE_OF_ND_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_ADD', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('PRES_BK_ID', 'PRES_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EXCO_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('PRES_BK_POST', document.MAINFORM.PRES_BK_ID.name, 'ID');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_SEND_AMT_onchange = function(event) {
    try {
        if (SYS_BeFloat(document.MAINFORM.SEND_AMT.value) < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.SEND_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}

csFuncLevelProto.FLD_EXCO_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EXCO_EXCO_AdviceofNon-Payment.js", e);
    }
}