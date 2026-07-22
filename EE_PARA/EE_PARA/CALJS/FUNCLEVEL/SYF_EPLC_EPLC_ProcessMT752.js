var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.DRAWING_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.LC_NO.value;
        SYT_DisableDivClass('B_div');
        SYM_EPLC_M_PRES_BK_CLS();
        SYF_EPLC_CAL_SEND_MT752();
        document.MAINFORM.PRES_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.PRES_AMT.value);
        document.MAINFORM.TTL_CLM_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.TTL_CLM_AMT.value);
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_LANG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, 'P');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_SEND_MT752 = function() {
    try {

        if (document.MAINFORM.SEND_MT752_FLG.value == "No") {
            SYT_DisableDivClass('I_div');
            document.MAINFORM.X752_DOC_CRE_NO_20.value = '';
            document.MAINFORM.X752_PRESBK_REF_21.value = '';
            document.MAINFORM.X752_FUR_IDEN_23.value = '';
            document.MAINFORM.X752_TTLADVCCY_32B.value = '';
            document.MAINFORM.X752_TTLADVAMT_32B.value = '';
            document.MAINFORM.X752_CHG_DEDUCT71B.value = '';
            document.MAINFORM.X752_NET_CCY_33A.value = '';
            document.MAINFORM.X752_NET_AMT_33A.value = '';
            document.MAINFORM.X752_BKTOBK_INFO72.value = '';
            SYT_ChangeFldClass(document.MAINFORM.SEND_MT752_FLG, 'O');
        } else {
            SYT_EnableDivClass('I_div');
            document.MAINFORM.X752_DOC_CRE_NO_20.value = document.MAINFORM.LC_NO.value;
            document.MAINFORM.X752_PRESBK_REF_21.value = document.MAINFORM.DRAWING_REF.value;
            document.MAINFORM.X752_FUR_IDEN_23.value = document.MAINFORM.FURTHER_IDENTITY.value;
            document.MAINFORM.X752_TTLADVCCY_32B.value = document.MAINFORM.LC_CCY.value;
            document.MAINFORM.X752_TTLADVAMT_32B.value = document.MAINFORM.PRES_AMT.value;
            document.MAINFORM.X752_CHG_DEDUCT71B.value = document.MAINFORM.CHGS_DEDUCTED_TXT_MT752.value;
            document.MAINFORM.X752_NET_CCY_33A.value = document.MAINFORM.LC_CCY.value;
            document.MAINFORM.X752_NET_AMT_33A.value = document.MAINFORM.TTL_CLM_AMT.value;
            document.MAINFORM.X752_BKTOBK_INFO72.value = document.MAINFORM.SEND_TO_RCV_INFO_MT752.value;
            document.MAINFORM.X752_B2_ADV_BK_ADD_BTN.disabled = true;
            document.MAINFORM.X752_53A_SENDCORR_BK_ADD_BTN.disabled = true;
            document.MAINFORM.X752_54A_RECCORR_BK_ADD_BTN.disabled = true;
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        SYM_EPLC_INIT();
        /*document.MAINFORM.X752_DOC_CRE_NO_20.value=document.MAINFORM.LC_NO.value;
document.MAINFORM.X752_PRESBK_REF_21.value=document.MAINFORM.DRAWING_REF.value;
document.MAINFORM.X752_FUR_IDEN_23.value=document.MAINFORM.FURTHER_IDENTITY.value;
document.MAINFORM.X752_TTLADVCCY_32B.value=document.MAINFORM.LC_CCY.value;
document.MAINFORM.X752_TTLADVAMT_32B.value=document.MAINFORM.PRES_AMT.value;
document.MAINFORM.X752_CHG_DEDUCT71B.value=document.MAINFORM.CHGS_DEDUCTED_TXT_MT752.value;
document.MAINFORM.X752_NET_CCY_33A.value=document.MAINFORM.LC_CCY.value;
document.MAINFORM.X752_NET_AMT_33A.value=document.MAINFORM.TTL_CLM_AMT.value;
document.MAINFORM.X752_BKTOBK_INFO72.value=document.MAINFORM.SEND_TO_RCV_INFO_MT752.value;*/
        //SYT_GetBKInfoByBIC(document.MAINFORM.SEND_CORR_BK_SW_ADD);
        //SYT_GetBKInfoByBIC(document.MAINFORM.RCV_CORR_BK_SW_ADD);
        document.MAINFORM.SEND_MT752_FLG.value = 'No';
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_CAL_TAG33 = function() {
    try {

        if (document.MAINFORM.X752_DT_33A.value == '') {
            document.MAINFORM.TAG33.value = 'B';
        } else {
            document.MAINFORM.TAG33.value = 'A';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.SYF_EPLC_getDOdata_AdviceForBankCust = function() {
    try {

        SYS_GetDataForDO_S("AdviceForBankCust");
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYM_EPLC_CONFIRM_CALL();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ADV_THU_BK_ID', 'ADV_THU_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ADV_THU_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_PARTY_ID_onchange = function(event) {
    try {
        SYM_EPLC_M_PARTY_ID(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ADV_THU_BK_POST_ADD', 'ADV_THU_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ADV_THU_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('APPL_ADD', 'APPL_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_APPL_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.AVAL_WT_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_OPT_onchange = function(event) {
    try {
        SYM_EPLC_M_AVAL_WT_BK_OP();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('AVAL_WT_BK_POST_ADD', 'AVAL_WT_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_AVAL_WT_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ACNO_onchange = function(event) {
    try {
        SYM_EPLC_M_CHK_BENE_ACNO();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('BENE_ID', 'BENE_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ID_BTN_onclick = function(event) {
    try {
        SYT_CustLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_BENE_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('BENE_POST_ADD', 'BENE_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYT_BankLookUp(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.ISSUE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('ISSUE_BK_POST_ADD', 'ISSUE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD1_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD3_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ADD_BTN_onclick = function(event) {
    try {
        var nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYS_InqCUBK('BENE_NEGO_ID_ADD', 'PRES_BK_ID', 'ID');
            } else {
                SYS_InqCUBK('PRES_BK_ADD', 'PRES_BK_ID', 'ID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_EPLC_CHK_PRES_BK_CORR_MED();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_onchange = function(event) {
    try {
        var nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYT_GetCUBK_All('BENE_NEGO_ID', document.MAINFORM.PRES_BK_ID.name);
                lbi_CLASS_DOC_PRES_BY();
            } else {
                SYT_GetCUBK_All('PRES_BK_ID', document.MAINFORM.PRES_BK_ID.name);
            }
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'RegisterDocsnot') {

            SYM_EPLC_PRES_BK_TO_BENE();
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ID_BTN_onclick = function(event) {
    try {
        var nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYM_EPLC_SQL_PRESENTER_CUST();
            } else {
                SYT_BankLookUp(event.currentTarget);
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_NM_onchange = function(event) {
    try {
        SYM_EPLC_PRES_BANK_SW_ADD_TAG();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_NO_onchange = function(event) {
    try {
        SYT_GetSwiftAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_ORDER_POST_onchange = function(event) {
    try {
        SYT_GetPostAdd(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_POST_ADD_BTN_onclick = function(event) {
    try {
        var nfieldname = document.getElementsByName('DOC_PRES_BY');
        if (nfieldname[0] != undefined) {
            if (nfieldname[0].value == 'Beneficiary') {
                SYS_InqCUBK('BENE_NEGO_POST_ADD', 'PRES_BK_ID', 'ID');
            } else {
                SYS_InqCUBK('PRES_BK_POST_ADD', 'PRES_BK_ID', 'ID');
            }
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_PRES_BK_SW_ADD_onchange = function(event) {
    try {
        SYT_GetBKInfoByBIC(event.currentTarget);
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_SEND_MT752_FLG_onchange = function(event) {
    try {
        SYF_EPLC_CAL_SEND_MT752();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_X752_53A_SENDCORR_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X752_53A_SENDCORR_BK_ADD', 'X752_53A_SENDCORR_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_X752_53A_SENDCORR_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.X752_53A_SENDCORR_BK_ID.value != '') {
            SYS_GetCUBK_S('X752_53A_SENDCORR_BK_ID', 'X752_53A_SENDCORR_BK_ID');
        } else {

            document.MAINFORM.X752_53A_SENDCORR_BK_NM.value = '';
            document.MAINFORM.X752_53A_SENDCORR_BK_ADD1.value = '';
            document.MAINFORM.X752_53A_SENDCORR_BK_ADD2.value = '';
            document.MAINFORM.X752_53A_SENDCORR_BK_ADD3.value = '';
            document.MAINFORM.X752_53A_SENDCORR_BK_SW_ADD.value = '';
            document.MAINFORM.X752_53A_SENDCORR_BK_SW_TAG.value = '';

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_X752_53A_SENDCORR_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X752_53A_SENDCORR_BK_ID', 'X752_53A_SENDCORR_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_X752_53A_SENDCORR_BK_NM_onchange = function(event) {
    try {
        if (document.MAINFORM.X752_53A_SENDCORR_BK_NM.value != '') {
            SYS_GetCUBK_S('X752_53A_SENDCORR_BK_NM', 'X752_53A_SENDCORR_BK_ID');
        } else {
            document.MAINFORM.X752_53A_SENDCORR_BK_ID.value = '';
            document.MAINFORM.X752_53A_SENDCORR_BK_ADD1.value = '';
            document.MAINFORM.X752_53A_SENDCORR_BK_ADD2.value = '';
            document.MAINFORM.X752_53A_SENDCORR_BK_ADD3.value = '';
            document.MAINFORM.X752_53A_SENDCORR_BK_SW_ADD.value = '';
            document.MAINFORM.X752_53A_SENDCORR_BK_SW_TAG.value = '';

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_X752_54A_RECCORR_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X752_54A_RECCORR_BK_ADD', 'X752_54A_RECCORR_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_X752_54A_RECCORR_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.X752_54A_RECCORR_BK_ID.value != '') {
            SYS_GetCUBK_S('X752_54A_RECCORR_BK_ID', 'X752_54A_RECCORR_BK_ID');
        } else {
            document.MAINFORM.X752_54A_RECCORR_BK_NM.value = '';
            document.MAINFORM.X752_54A_RECCORR_BK_ADD1.value = '';
            document.MAINFORM.X752_54A_RECCORR_BK_ADD2.value = '';
            document.MAINFORM.X752_54A_RECCORR_BK_ADD3.value = '';
            document.MAINFORM.X752_54A_RECCORR_BK_NM.value = '';
            document.MAINFORM.X752_54A_RECCORR_BK_SW_ADD.value = '';
            document.MAINFORM.X752_54A_RECCORR_BK_SW_TAG.value = '';

        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_X752_54A_RECCORR_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X752_54A_RECCORR_BK_ID', 'X752_54A_RECCORR_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_X752_54A_RECCORR_BK_NM_onchange = function(event) {
    try {
        if (document.MAINFORM.X752_54A_RECCORR_BK_NM.value != '') {
            SYS_GetCUBK_S('X752_54A_RECCORR_BK_NM', 'X752_54A_RECCORR_BK_ID');
        } else {
            document.MAINFORM.X752_54A_RECCORR_BK_ID.value = '';
            document.MAINFORM.X752_54A_RECCORR_BK_ADD1.value = '';
            document.MAINFORM.X752_54A_RECCORR_BK_ADD2.value = '';
            document.MAINFORM.X752_54A_RECCORR_BK_ADD3.value = '';
            document.MAINFORM.X752_54A_RECCORR_BK_SW_ADD.value = '';
            document.MAINFORM.X752_54A_RECCORR_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_X752_B2_ADV_BK_ADD_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X752_B2_ADV_BK_ADD', 'X752_B2_ADV_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_X752_B2_ADV_BK_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.X752_B2_ADV_BK_ID.value != '') {
            SYS_GetCUBK_S('X752_B2_ADV_BK_ID', 'X752_B2_ADV_BK_ID');
        } else {
            document.MAINFORM.X752_B2_ADV_BK_ID.value = '';
            document.MAINFORM.X752_B2_ADV_BK_ADD1.value = '';
            document.MAINFORM.X752_B2_ADV_BK_ADD2.value = '';
            document.MAINFORM.X752_B2_ADV_BK_ADD3.value = '';
            document.MAINFORM.X752_B2_ADV_BK_NM.value = '';
            document.MAINFORM.X752_B2_ADV_BK_SW_ADD.value = '';
            document.MAINFORM.X752_B2_ADV_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_X752_B2_ADV_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X752_B2_ADV_BK_ID', 'X752_B2_ADV_BK_ID');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_X752_B2_ADV_BK_NM_onchange = function(event) {
    try {
        if (document.MAINFORM.X752_B2_ADV_BK_NM.value != '') {
            SYS_GetCUBK_S('X752_B2_ADV_BK_NM', 'X752_B2_ADV_BK_ID');
        } else {
            document.MAINFORM.X752_B2_ADV_BK_ID.value = '';
            document.MAINFORM.X752_B2_ADV_BK_ADD1.value = '';
            document.MAINFORM.X752_B2_ADV_BK_ADD2.value = '';
            document.MAINFORM.X752_B2_ADV_BK_ADD3.value = '';
            document.MAINFORM.X752_B2_ADV_BK_SW_ADD.value = '';
            document.MAINFORM.X752_B2_ADV_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_X752_DT_33A_onchange = function(event) {
    try {
        SYF_EPLC_CAL_TAG33();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}

csFuncLevelProto.FLD_EPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_EPLC_EPLC_ProcessMT752.js", e);
    }
}