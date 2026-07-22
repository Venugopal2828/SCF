var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;
        document.MAINFORM.TEMP_N90_REF_21.value = document.MAINFORM.TEMP_REF.value;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_AC_WT_INST_ADD1_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_AC_WT_INST_ADD2_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_AC_WT_INST_ADD3_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_AC_WT_INST_ADD_BTN2_onclick = function(event) {
    try {
        Cal_AC_WT_INST_ADD_BTN2();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_AC_WT_INST_ID_onchange = function(event) {
    try {
        Cal_AC_WT_INST_ID();
        Cal_AC_WT_INST_SW_ADD();
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_AC_WT_INST_ID_BTN_onclick = function(event) {
    try {
        Cal_AC_WT_INST_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_AC_WT_INST_NM_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_AC_WT_INST_ORDER_NO_onchange = function(event) {
    try {
        Cal_AC_WT_INST_ID_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_AC_WT_INST_SW_ADD_onchange = function(event) {
    try {
        Cal_AC_WT_INST_SW_ADD();
        Cal_AC_WT_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_ISSUE_BK_ID_onchange = function(event) {
    try {
        SYS_GetCUBK('ISSUE_BK_ID', 'ISSUE_BK_ID');
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_MX_MT_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.MX_MT_ID.value !== "") {
            SYT_GetCUBK_All('MX_MT_IN_BTN', 'MX_MT_ID');
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_MX_MT_IN_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('MX_MT_IN_BTN', 'MX_MT_ID');
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_ORDER_INST_ADD1_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_ORDER_INST_ADD2_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_ORDER_INST_ADD3_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_ORDER_INST_ADD_BTN_onclick = function(event) {
    try {
        Cal_ORDER_INST_ADD_BTN();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_ORDER_INST_ID_onchange = function(event) {
    try {
        Cal_ORDER_INST_ID();
        Cal_ORDER_INST_SW_ADD();
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_ORDER_INST_ID_BTN_onclick = function(event) {
    try {
        Cal_ORDER_INST_ID_BTN();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_ORDER_INST_NM_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_ORDER_INST_ORDER_NO_onchange = function(event) {
    try {
        Cal_ORDER_INST_ORDER_NO();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_ORDER_INST_SW_ADD_onchange = function(event) {
    try {
        Cal_ORDER_INST_SW_ADD();
        Cal_ORDER_INST_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_TEMP_DT_ORGNL_MSG_onchange = function(event) {
    try {
        Cal_TEMP_SND_RCV_11();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_TEMP_MAIL_TXT_BTN_onclick = function(event) {
    try {
        Cal_TEMP_MAIL_TXT_BTN();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_TEMP_N90_CCY_32_onchange = function(event) {
    try {
        Cal_TEMP_N90_CHG_32();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_TEMP_N90_CHG_32_onchange = function(event) {
    try {
        Cal_TEMP_N90_CHG_32();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_TEMP_N90_DT_32_onchange = function(event) {
    try {
        //Chk_TEMP_N90_DT_32();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_TEMP_ORGNLMSG_TYPE_onchange = function(event) {
    try {
        Chk_TEMP_ORGNLMSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_TEMP_REF_onchange = function(event) {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_PYMT_PYMT_GeneralCorrespondenc_In.js", e);
    }
}