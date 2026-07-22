var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_DT_ORGNL_MSG.value = SYS_BUSI_DATE;
        InitValues_lbi();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        PostconditionOnInit_lbi();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        EEHtml.getElementById("B_div").style.display = "block";
        SYT_DisableDiv('A_div');
        PreconditionOnInit_lbi();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AC_WT_INST_ADD1_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AC_WT_INST_ADD2_onchange = function(event) {
    try {
        SYM_EPLC_setDocumentsData();
        //Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AC_WT_INST_ADD3_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AC_WT_INST_ADD_BTN2_onclick = function(event) {
    try {
        Cal_AC_WT_INST_ADD_BTN2();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AC_WT_INST_ID_onchange = function(event) {
    try {
        Cal_AC_WT_INST_ID();
        Cal_AC_WT_INST_SW_ADD();
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AC_WT_INST_ID_BTN_onclick = function(event) {
    try {
        Cal_AC_WT_INST_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AC_WT_INST_NM_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AC_WT_INST_ORDER_NO_onchange = function(event) {
    try {
        Cal_AC_WT_INST_ID_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_AC_WT_INST_SW_ADD_onchange = function(event) {
    try {
        //Cal_AC_WT_INST_SW_ADD();
        //Cal_AC_WT_INST_SW_TAG();
        SYM_EPLC_setDocumentsData();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CHECK_BOX_798_onchange = function(event) {
    try {
        Cal_SUB_MESS_TYPE();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_ADD1_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_ADD2_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_ADD3_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_ADD_BTN_onclick = function(event) {
    try {
        CAL_CORR_MULT_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_ADD_ORDER_NO_onchange = function(event) {
    try {
        Cal_CORR_ID_ORDERNO();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_CUST_BANK_onchange = function(event) {
    try {
        CAL_Clear_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_EMAIL_ADD_onchange = function(event) {
    try {
        var chkemail = document.MAINFORM.CORR_EMAIL_ADD.value;
        if (SYM_SYND_CHK_EMAIL(chkemail)) {
            alert("enter valid email address");
            document.MAINFORM.CORR_EMAIL_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_FAX_NO_onchange = function(event) {
    try {
        var faxNo = document.MAINFORM.CORR_FAX_NO.value;
        if (SYM_SYND_chk_faxNo(faxNo)) {
            alert("enter valid fax number");
            document.MAINFORM.CORR_FAX_NO.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_ID_onchange = function(event) {
    try {
        Cal_CORR_ID();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_ID_BTN_onclick = function(event) {
    try {
        CAL_CORR_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_NM_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_ORDER_NO_onchange = function(event) {
    try {
        Cal_CORR_POST_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_POST_BTN_onclick = function(event) {
    try {
        Cal_CORR_POST_ADD();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_CORR_SW_ADD_onchange = function(event) {
    try {
        Cal_CORR_SW_TAG();

        Cal_CORR_SW_ADD();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_MESG_TYPE_onchange = function(event) {
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
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_ORDER_INST_ADD1_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_ORDER_INST_ADD2_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_ORDER_INST_ADD3_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_ORDER_INST_ADD_BTN_onclick = function(event) {
    try {
        Cal_ORDER_INST_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_ORDER_INST_ID_onchange = function(event) {
    try {
        Cal_ORDER_INST_ID();
        Cal_ORDER_INST_SW_ADD();
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_ORDER_INST_ID_BTN_onclick = function(event) {
    try {
        Cal_ORDER_INST_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_ORDER_INST_NM_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_ORDER_INST_ORDER_NO_onchange = function(event) {
    try {
        Cal_ORDER_INST_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_ORDER_INST_SW_ADD_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_ADD();
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_TEMP_CATEGORY_FLG_onchange = function(event) {
    try {
        Cal_TEMP_MESG_TYPE();
        Cal_MESG_TYPE();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_TEMP_DT_ORGNL_MSG_onchange = function(event) {
    try {
        Cal_TEMP_SND_RCV_11();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_TEMP_MAIL_TXT_BTN_onclick = function(event) {
    try {
        Cal_TEMP_MAIL_TXT_BTN();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_TEMP_N90_CCY_32_onchange = function(event) {
    try {
        Cal_TEMP_N90_CHG_32();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_TEMP_N90_CHG_32_onchange = function(event) {
    try {
        Cal_TEMP_N90_CHG_32();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_TEMP_N90_DT_32_onchange = function(event) {
    try {
        //Chk_TEMP_N90_DT_32();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_TEMP_ORGNLMSG_TYPE_onchange = function(event) {
    try {
        Chk_TEMP_ORGNLMSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_TEMP_REF_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}

csFuncLevelProto.FLD_SYND_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_SYND_SYND_GeneralCorrespondence.js", e);
    }
}