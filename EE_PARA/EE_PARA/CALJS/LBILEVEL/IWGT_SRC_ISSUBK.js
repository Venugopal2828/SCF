"path:SCRN/Library/Party/Part/ISSUBK.lbi";

var csLbiCompProto = {};

csLbiCompProto.FLD_IWGT_ISSUE_BK_CORR_MED_onchange = function(event) {
    try {
        SYM_IWGT_MPO_SEND_BANK_TO_CORR_MED();
    } catch (e) {
        DisExcpt("IWGT_SRC_ISSUBK.js", e);
    }
}

csLbiCompProto.FLD_IWGT_ISSUE_BK_ID_onchange = function(event) {
    try {
        // SYS_GetCUBK('ISS_BK_ID', 'ISSUE_BK_ID');
        SYM_IWGT_ISSUE_BK();
        if ((SYM_IWGT_SpecialCharacters_onchange_1(document.MAINFORM.ISSUE_BK_ID.value)) == false) {
            document.MAINFORM.ISSUE_BK_ID.value = '';
        }
    } catch (e) {
        DisExcpt("IWGT_SRC_ISSUBK.js", e);
    }
}

csLbiCompProto.FLD_IWGT_ISSUE_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ISSUE_BK_ID_BTN_ADD', '1');
    } catch (e) {
        DisExcpt("IWGT_SRC_ISSUBK.js", e);
    }
}

csLbiCompProto.FLD_IWGT_ISSUE_BK_SW_ADD_onchange = function(event) {
    try {
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 11 || document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.ISSUE_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value + "XXX";
            }
        }
        SYM_IWGT_CHK_ISSUE_BK_SW_TAG();
    } catch (e) {
        DisExcpt("IWGT_SRC_ISSUBK.js", e);
    }
}

csLbiCompProto.FLD_IWGT_ISS_BK_ID_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('ISS_BK_ID', '1');
    } catch (e) {
        DisExcpt("IWGT_SRC_ISSUBK.js", e);
    }
}