var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.TEMP_REF.value;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.APPLY_FLG.value = 'NO';
        document.MAINFORM.TEMP_DT_ORGNL_MSG.value = SYS_BUSI_DATE;
        InitValues_lbi();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYF_GTEE_MT798_FLG();
        PostconditionOnInit_lbi();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        PreconditionOnInit_lbi();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.SYF_GTEE_MT798_FLG = function() {
    try {

        if (document.MAINFORM.APPLY_FLG.value == 'YES') {
            EEHtml.getElementById('Z').style.display = '';
            SYT_EnableDivClass('Z_div');
            document.MAINFORM.SUB_MESS_TYPE.value = '714';
            var time = SYS_TIME;
            document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
            document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
            document.MAINFORM.X798_32B_AMT.value = document.MAINFORM.GTEE_AMT.value;
        } else {
            EEHtml.getElementById('Z').style.display = 'none';
            SYT_DisableDiv('Z_div');

        }
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AC_WT_INST_ADD1_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AC_WT_INST_ADD2_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AC_WT_INST_ADD3_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AC_WT_INST_ADD_BTN2_onclick = function(event) {
    try {
        Cal_AC_WT_INST_ADD_BTN2();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AC_WT_INST_ID_onchange = function(event) {
    try {
        Cal_AC_WT_INST_ID();
        Cal_AC_WT_INST_SW_ADD();
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AC_WT_INST_ID_BTN_onclick = function(event) {
    try {
        Cal_AC_WT_INST_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AC_WT_INST_NM_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AC_WT_INST_ORDER_NO_onchange = function(event) {
    try {
        Cal_AC_WT_INST_ID_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_AC_WT_INST_SW_ADD_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_ADD();
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_APPLY_FLG_onchange = function(event) {
    try {
        SYF_GTEE_MT798_FLG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CHECK_BOX_798_onchange = function(event) {
    try {
        Cal_SUB_MESS_TYPE();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CORR_ADD1_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CORR_ADD2_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CORR_ADD3_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CORR_ADD_BTN_onclick = function(event) {
    try {
        CAL_CORR_MULT_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CORR_ADD_ORDER_NO_onchange = function(event) {
    try {
        Cal_CORR_ID_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CORR_CUST_BANK_onchange = function(event) {
    try {
        CAL_Clear_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CORR_ID_onchange = function(event) {
    try {
        Cal_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CORR_ID_BTN_onclick = function(event) {
    try {
        CAL_CORR_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CORR_NM_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CORR_ORDER_NO_onchange = function(event) {
    try {
        Cal_CORR_POST_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CORR_POST_BTN_onclick = function(event) {
    try {
        Cal_CORR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_CORR_SW_ADD_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();

        Cal_CORR_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_MESG_TYPE_onchange = function(event) {
    try {
        Set_CORR_SW_ADD();
        Cal_CORR_EMAIL_ADD();
        Cal_CORR_FAX_NO();
        Cal_CORR_MAIL_ADD();
        Cal_CORR_TLX_NO();
        Cal_TEMP_MESG_TYPE();
        Cal_MESG_TYPE();
        Cal_TEMP_DT_ORGNL_MSG();
        Cal_TEMP_MAIL_TXT();
        Cal_TEMP_N90_AC_IDN_25();
        Cal_TEMP_N90_CHG_32();
        Cal_TEMP_N90_CHG_71();
        Cal_TEMP_N90_DT_32();
        Cal_TEMP_N90_SNDINF_72();
        Cal_TEMP_N95_NARR_77();
        Cal_TEMP_N95_NARR_79();
        Cal_TEMP_N95_QA_75();
        Cal_TEMP_ORGNLMSG_TYPE();
        Cal_TEMP_SND_RCV_11();
        Cal_TEMP_REF();
        Cal_MTn91_52_57();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ORDER_INST_ADD1_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ORDER_INST_ADD2_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ORDER_INST_ADD3_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ORDER_INST_ADD_BTN_onclick = function(event) {
    try {
        Cal_ORDER_INST_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ORDER_INST_ID_onchange = function(event) {
    try {
        Cal_ORDER_INST_ID();
        Cal_ORDER_INST_SW_ADD();
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ORDER_INST_ID_BTN_onclick = function(event) {
    try {
        Cal_ORDER_INST_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ORDER_INST_NM_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ORDER_INST_ORDER_NO_onchange = function(event) {
    try {
        Cal_ORDER_INST_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_ORDER_INST_SW_ADD_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_ADD();
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TEMP_CATEGORY_FLG_onchange = function(event) {
    try {
        Cal_TEMP_MESG_TYPE();
        Cal_MESG_TYPE();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TEMP_DT_ORGNL_MSG_onchange = function(event) {
    try {
        Cal_TEMP_SND_RCV_11();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TEMP_MAIL_TXT_BTN_onclick = function(event) {
    try {
        Cal_TEMP_MAIL_TXT_BTN();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TEMP_N90_CCY_32_onchange = function(event) {
    try {
        Cal_TEMP_N90_CHG_32();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TEMP_N90_CHG_32_onchange = function(event) {
    try {
        Cal_TEMP_N90_CHG_32();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TEMP_N90_DT_32_onchange = function(event) {
    try {
        //Chk_TEMP_N90_DT_32();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TEMP_ORGNLMSG_TYPE_onchange = function(event) {
    try {
        Chk_TEMP_ORGNLMSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_TEMP_REF_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button1_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button2_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button3_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button4_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button5_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_button6_onclick = function(event) {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_GTEE_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_GTEE_GTEE_GeneralCorrespondence.js", e);
    }
}