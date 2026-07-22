var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.TEMP_REF.value;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        SYM_IPLC_INIT_FOR_DT();
        //start  add by Jesse #3341 2014/3/13){

        if (document.MAINFORM.LC_TYPE.value == 'Transfer LC') {
            document.MAINFORM.LC_NO.value = document.MAINFORM.C_MAIN_REF.value;
            document.MAINFORM.ISSUE_BK_ID.value = SYS_LOGIN_BIC;
            SYS_GetCUBK_S('ISSUE_BK_ID', document.MAINFORM.ISSUE_BK_ID.name);
        }
        SYF_IPLC_Cal_ISSUE_BK_SW_TAG();
        //end by Jesse
        InitValues_lbi();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        FLD_IPLC_ISSUE_BK_ID_onchange();
        SYT_Init_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        SYT_Init_Notes(document.MAINFORM.CORR_NOTES.name);
        SYT_Show_Notes(document.MAINFORM.ISSUE_BK_NOTES.name);
        PostconditionOnInit_lbi();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
       PreconditionOnInit_lbi();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}


csFuncLevelProto.SYF_IPLC_Cal_ISSUE_BK_SW_TAG = function() {
    try {
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value != '') {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = 'A';
        } else if (document.MAINFORM.ISSUE_BK_NM.value != '' || document.MAINFORM.ISSUE_BK_ADD1.value != '' || document.MAINFORM.ISSUE_BK_ADD2.value != '' || document.MAINFORM.ISSUE_BK_ADD3.value != '') {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_INST_ADD1_onchange = function() {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_INST_ADD2_onchange = function() {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_INST_ADD3_onchange = function() {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_INST_ID_onchange = function() {
    try {
        Cal_AC_WT_INST_ID();
        Cal_AC_WT_INST_SW_ADD();
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_INST_NM_onchange = function() {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_INST_ORDER_NO_onchange = function() {
    try {
        Cal_AC_WT_INST_ID_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_INST_SW_ADD_onchange = function() {
    try {
        Cal_AC_WT_INST_SW_ADD();
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CHECK_BOX_798_onchange = function() {
    try {
        Cal_SUB_MESS_TYPE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ADD1_onchange = function() {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ADD2_onchange = function() {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ADD3_onchange = function() {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ADD_ORDER_NO_onchange = function() {
    try {
        Cal_CORR_ID_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_CUST_BANK_onchange = function() {
    try {
        CAL_Clear_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ID_onchange = function() {
    try {
        Cal_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_NM_onchange = function() {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ORDER_NO_onchange = function() {
    try {
        Cal_CORR_POST_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_SW_ADD_onchange = function() {
    try {
        Cal_CORR_SW_TAG();

        Cal_CORR_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ISSUE_BK_ID_onchange = function() {
    try {
        SYT_GetCUBK_All('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_MESG_TYPE_onchange = function() {
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
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ORDER_INST_ADD1_onchange = function() {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ORDER_INST_ADD2_onchange = function() {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ORDER_INST_ADD3_onchange = function() {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ORDER_INST_ID_onchange = function() {
    try {
        Cal_ORDER_INST_ID();
        Cal_ORDER_INST_SW_ADD();
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ORDER_INST_NM_onchange = function() {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ORDER_INST_ORDER_NO_onchange = function() {
    try {
        Cal_ORDER_INST_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ORDER_INST_SW_ADD_onchange = function() {
    try {
        Cal_ORDER_INST_SW_ADD();
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TEMP_CATEGORY_FLG_onchange = function() {
    try {
        Cal_TEMP_MESG_TYPE();
        Cal_MESG_TYPE();
        Cal_TEMP_N95_NARR_79();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TEMP_DT_ORGNL_MSG_onchange = function() {
    try {
        Cal_TEMP_SND_RCV_11();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TEMP_N90_CCY_32_onchange = function() {
    try {
        Cal_TEMP_N90_CHG_32();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TEMP_N90_CHG_32_onchange = function() {
    try {
        Cal_TEMP_N90_CHG_32();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TEMP_N90_DT_32_onchange = function() {
    try {
        //Chk_TEMP_N90_DT_32();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TEMP_ORGNLMSG_TYPE_onchange = function() {
    try {
        Chk_TEMP_ORGNLMSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TEMP_REF_onchange = function() {
    try {} catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_INST_ADD_BTN2_onclick = function() {
    try {
        Cal_AC_WT_INST_ADD_BTN2();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_AC_WT_INST_ID_BTN_onclick = function() {
    try {
        Cal_AC_WT_INST_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ADD_BTN_onclick = function() {
    try {
        CAL_CORR_MULT_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_ID_BTN_onclick = function() {
    try {
        CAL_CORR_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_CORR_POST_BTN_onclick = function() {
    try {
        Cal_CORR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ORDER_INST_ADD_BTN_onclick = function() {
    try {
        Cal_ORDER_INST_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ORDER_INST_ID_BTN_onclick = function() {
    try {
        Cal_ORDER_INST_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_TEMP_MAIL_TXT_BTN_onclick = function() {
    try {
        Cal_TEMP_MAIL_TXT_BTN();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button1_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button2_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_INSTR');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button3_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button4_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_CRSPD');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button5_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CUST_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_button6_onclick = function() {
    try {
        SYS_InsertClause('TEMP_CORR_ATTCH');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function() {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_GeneralCorrespondence.js", e);
    }
}