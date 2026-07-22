function SYM_GTEE_ACNO_EQL(bk_acNo, cu_acNo) {
    try {
        if (bk_acNo != '' && cu_acNo != '') {
            if (bk_acNo == cu_acNo) {
                return false;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ACNO_EQL", e);
    }
}

function SYM_GTEE_ADV_BK_ID() {
    try {
        if (document.MAINFORM.ADV_BK_ID.value == '') {
            document.MAINFORM.ADV_BK_NM.value = '';
            document.MAINFORM.ADV_BK_ADD1.value = '';
            document.MAINFORM.ADV_BK_ADD2.value = '';
            document.MAINFORM.ADV_BK_ADD3.value = '';
            document.MAINFORM.ADV_BK_SW_ADD.value = '';
            SYM_GTEE_ADV_BK_ID_B2();
        } else {
            SYS_GetCUBK('ADV_BK_ID', document.MAINFORM.ADV_BK_ID.name, 'SYM_GTEE_ADV_BK_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ADV_BK_ID", e);
    }
}

function SYM_GTEE_ADV_BK_ID_ADD() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_NM', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ADV_BK_ID_ADD", e);
    }
}

function SYM_GTEE_ADV_BK_ID_B() {
    try {
        SYM_GTEE_ADV_BK_ID_B2();
        SYM_GTEE_ADV_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ADV_BK_ID_B", e);
    }
}

function SYM_GTEE_ADV_BK_ID_B2() {
    try {
        if (document.MAINFORM.ADV_BK_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD_BTN, "P");
        }
        if (document.MAINFORM.ADV_BK_ID.value !== '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_ADD_BTN, "O");
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ADV_BK_ID_B2", e);
    }
}

function SYM_GTEE_ADV_SWIFT_TAG() {
    try {
        if (document.MAINFORM.ADV_BK_SW_ADD.value !== '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = 'A';
        }
        if (document.MAINFORM.ADV_BK_SW_ADD.value == '' && (document.MAINFORM.ADV_BK_NM.value != '' || document.MAINFORM.ADV_BK_ADD1.value != '' || document.MAINFORM.ADV_BK_ADD2.value != '' || document.MAINFORM.ADV_BK_ADD3.value != '')) {
            document.MAINFORM.ADV_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ADV_BK_NM.value == '' && document.MAINFORM.ADV_BK_SW_ADD.value == '' && document.MAINFORM.ADV_BK_ADD1.value == '' && document.MAINFORM.ADV_BK_ADD2.value == '' && document.MAINFORM.ADV_BK_ADD3.value == '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ADV_SWIFT_TAG", e);
    }
}

function SYM_GTEE_ADV_THRU_BK_ID() {
    try {
        SYS_GetCUBK('ADV_THRU_BK_ID', document.MAINFORM.ADV_THU_BK_ID.name);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ADV_THRU_BK_ID", e);
    }
}

function SYM_GTEE_AMT_CCY_DEC_AMT() {
    try {
        document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.DEC_AMT.value);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_AMT_CCY_DEC_AMT", e);
    }
}

function SYM_GTEE_AMT_CCY_INC_AMT() {
    try {
        document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.INC_AMT.value);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_AMT_CCY_INC_AMT", e);
    }
}

function SYM_GTEE_APLB_RULE() {
    try {
        if (document.MAINFORM.APLB_RULE.value == "OTHR") {
            document.all.Applicable.style.visibility = 'visible';
            document.all.APLB_RULE_NARR.style.display = 'block';
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'M');

        } else {
            document.MAINFORM.APLB_RULE_NARR.value = '';
            document.all.Applicable.style.visibility = 'hidden';
            document.all.APLB_RULE_NARR.style.display = 'none';
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_APLB_RULE", e);
    }
}

function SYM_GTEE_APLB_RULE2() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, 'P');
        if (document.MAINFORM.APLB_RULE.value == "OTHR") {
            document.all.Applicable.style.visibility = 'visible';
            document.all.APLB_RULE_NARR.style.display = 'block';
        } else {
            document.all.Applicable.style.visibility = 'hidden';
            document.all.APLB_RULE_NARR.style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_APLB_RULE2", e);
    }
}

function SYM_GTEE_APPL_AC_MRGN() {
    try {
        SYS_GetCUBK('APPL_AC_MRGN', document.MAINFORM.APPL_AC_MRGN.name);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_APPL_AC_MRGN", e);
    }
}

function SYM_GTEE_APPL_AGENT() {
    try {
        SYS_GetCUBK('APPL_AGENT', document.MAINFORM.AGNT1_ID.name);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_APPL_AGENT", e);
    }
}

function SYM_GTEE_APPL_BUTTON() {
    try {
        if (document.MAINFORM.APPL_CUST_BK.value == "Customer") {
            SYM_GTEE_Cal_APPL_CUST();
        } else if (document.MAINFORM.APPL_CUST_BK.value == "Bank") {
            SYM_GTEE_Cal_APPL_BANK();
        } else {
            SYS_CheckError(document.MAINFORM.APPL_CUST_BK, "Please select Customer or Bank first");
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_APPL_BUTTON", e);
    }
}

function SYM_GTEE_APPL_ID_BTN() {
    try {
        if (document.MAINFORM.APPL_ID_BTN.value == 'BANK') {
            SYS_GetCUBK('APPL_ID_BANK', document.MAINFORM.APPL_ID.name, 'SYM_GTEE_Cal_APPL_SYD_CallBak');
        } else if (document.MAINFORM.APPL_ID_BTN.value == 'CUST') {
            SYS_GetCUBK('APPL_ID_CUST', document.MAINFORM.APPL_ID.name, 'SYM_GTEE_Cal_APPL_SYD_CallBak');
            document.MAINFORM.APPL_SW_ADD.value = "";
            document.MAINFORM.APPL_SW_TAG.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_APPL_ID_BTN", e);
    }
}

function SYM_GTEE_Alert_SYN_FLG() {
    try {
        if (document.MAINFORM.SYND_FLG.value == 'YES') {
            alert('Please note this transaction has been syndicated.');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Alert_SYN_FLG", e);
    }
}

function SYM_GTEE_BASE_CLY_BAL() {
    try {
        SYS_GetExchangeRate(document.MAINFORM.GTEE_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.BASE_RT.name, SYM_GTEE_BASE_LCY);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_BASE_CLY_BAL", e);
    }
}

function SYM_GTEE_BASE_LCY() {
    try {
        var Rt; // Utility Auto Fix Comments
        var amtTrxccy; // Utility Auto Fix Comments
        amtTrxccy = SYS_BeFloat(document.MAINFORM.GTEE_BAL.value);
        Rt = SYS_BeFloat(document.MAINFORM.BASE_RT.value);
        document.MAINFORM.BASE_BAL.value = SYT_AmtFormat(document.MAINFORM.BASE_CCY.value, amtTrxccy * Rt);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_BASE_LCY", e);
    }
}

function SYM_GTEE_BENE_BUTTON() {
    try {
        if (document.MAINFORM.BENE_CUST_BK.value == "Bank") {
            SYM_GTEE_Cal_BENE_BANK();
        } else if (document.MAINFORM.BENE_CUST_BK.value == "Customer") {
            SYM_GTEE_Cal_BENE_CUST();
        } else {
            SYS_CheckError(document.MAINFORM.BENE_CUST_BK, "Please select Customer or Bank first");
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_BENE_BUTTON", e);
    }
}

function SYM_GTEE_BENE_ID_BTN() {
    try {
        if (document.MAINFORM.BENE_ID_BTN.value == 'BANK') {
            SYS_GetCUBK('BENE_ID_BANK', document.MAINFORM.BENE_ID.name, 'SYM_GTEE_MPO_BENE_CORR_MED');
        } else if (document.MAINFORM.BENE_ID_BTN.value == 'CUST') {
            SYS_GetCUBK('BENE_ID_CUST', document.MAINFORM.BENE_ID.name, 'SYM_GTEE_MPO_BENE_CORR_MED');
            document.MAINFORM.BENE_SW_ADD.value = "";
            document.MAINFORM.BENE_SW_TAG.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_BENE_ID_BTN", e);
    }
}

function SYM_GTEE_CAL_ADV_BK_ID() {
    try {
        if (document.MAINFORM.ADV_BK_ID.value == '') {
            document.MAINFORM.ADV_BK_NM.value = '';
            document.MAINFORM.ADV_BK_ADD1.value = '';
            document.MAINFORM.ADV_BK_ADD2.value = '';
            document.MAINFORM.ADV_BK_ADD3.value = '';
            document.MAINFORM.ADV_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_BK_CORR_MED.value = 'None';
            SYM_GTEE_CAL_ADV_BK_ID_back();
        } else {
            SYS_GetCUBK('ADV_BK_ID', 'ADV_BK_ID', 'SYM_GTEE_CAL_ADV_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_ADV_BK_ID", e);
    }
}

function SYM_GTEE_CAL_ADV_BK_ID_back() {
    try {
        SYM_GTEE_CHK_ADV_BK_SW_TAG();
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + 'XXX';
        }
        if(SYS_ORG_FUNCTION_NAME == 'RegisterOutward'||SYS_ORG_FUNCTION_NAME == 'RegisterGuarantee'){
        SYM_GTEE_DEFAULT_SEND_TO();
      }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_ADV_BK_ID_back", e);
    }
}

function SYM_GTEE_CAL_ADV_THU_BK_ID() {
    try {
        if (document.MAINFORM.ADV_THU_BK_ID.value == '') {
            document.MAINFORM.ADV_THU_BK_NM.value = '';
            document.MAINFORM.ADV_THU_BK_ADD1.value = '';
            document.MAINFORM.ADV_THU_BK_ADD2.value = '';
            document.MAINFORM.ADV_THU_BK_ADD3.value = '';
            document.MAINFORM.ADV_THU_BK_MAIL_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_CORR_MED.value = 'None';
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = '';
            SYM_GTEE_CAL_ADV_THU_BK_ID_back();
        } else {
            SYS_GetCUBK('ADV_THU_BK_ID', 'ADV_THU_BK_ID', 'SYM_GTEE_CAL_ADV_THU_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_ADV_THU_BK_ID", e);
    }
}

function SYM_GTEE_CAL_ADV_THU_BK_ID_back() {
    try {
        SYM_GTEE_CHK_ADV_THU_BK_SW_TAG();
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_ADV_THU_BK_ID_back", e);
    }
}

function SYM_GTEE_CAL_ADV_THU_BK_ID_LOCAL() {
    try {
        if (document.MAINFORM.ADV_THU_BK_ID_LOCAL.value == '') {
            document.MAINFORM.ADV_THU_BK_NM_LOCAL.value = '';
            document.MAINFORM.ADV_THU_BK_ADD1_LOCAL.value = '';
            document.MAINFORM.ADV_THU_BK_ADD2_LOCAL.value = '';
            document.MAINFORM.ADV_THU_BK_ADD3_LOCAL.value = '';
            document.MAINFORM.ADV_THU_BK_MAIL_ADD_LOCAL.value = '';
            document.MAINFORM.ADV_THU_BK_CORR_MED_LOCAL.value = 'None';
            document.MAINFORM.ADV_THU_BK_SW_ADD_LOCAL.value = '';
            SYM_GTEE_CAL_ADV_THU_BK_ID_LOCAL_back();
        } else {
            SYS_GetCUBK('ADV_THU_BK_ID_LOCAL', 'ADV_THU_BK_ID_LOCAL', 'SYM_GTEE_CAL_ADV_THU_BK_ID_LOCAL_back');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_ADV_THU_BK_ID", e);
    }
}

function SYM_GTEE_CAL_ADV_THU_BK_ID_LOCAL_back() {
    try {
        SYM_GTEE_CHK_ADV_THU_BK_SW_TAG_LOCAL();
        if (document.MAINFORM.ADV_THU_BK_SW_ADD_LOCAL.value.length == 8) {
            document.MAINFORM.ADV_THU_BK_SW_ADD_LOCAL.value = document.MAINFORM.ADV_THU_BK_SW_ADD_LOCAL.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_ADV_THU_BK_ID_LOCAL_back", e);
    }
}

function SYM_GTEE_CAL_APPL_ID_LOCAL() {
    try {
        if (document.MAINFORM.APPL_ID_LOCAL.value == '') {
            document.MAINFORM.APPL_NM_LOCAL.value = '';
            document.MAINFORM.APPL_ADD1_LOCAL.value = '';
            document.MAINFORM.APPL_ADD2_LOCAL.value = '';
            document.MAINFORM.APPL_ADD3_LOCAL.value = '';
        } else {
            SYS_GetCUBK('APPL_ID_LOCAL', 'APPL_ID_LOCAL');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_APPL_ID_LOCAL", e);
    }
}

function SYM_GTEE_CAL_AVAL_WT_BK_ID() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_ID.value == '') {
            document.MAINFORM.AVAL_WT_BK_NM.value = '';
            document.MAINFORM.AVAL_WT_BK_ADD1.value = '';
            document.MAINFORM.AVAL_WT_BK_ADD2.value = '';
            document.MAINFORM.AVAL_WT_BK_ADD3.value = '';
            document.MAINFORM.AVAL_WT_BK_SW_ADD.value = '';

        } else {
            SYS_GetCUBK('AVAL_WT_BK_ID', 'AVAL_WT_BK_ID','SYM_GTEE_CHK_AVAL_BK_SW_TAG');
        }
        SYM_GTEE_CHK_AVAL_BK_SW_TAG();
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_AVAL_WT_BK_ID", e);
    }
}

function SYM_GTEE_CAL_BENE_ID_LOCAL() {
    try {
        if (document.MAINFORM.BENE_ID_LOCAL.value == '') {
            document.MAINFORM.BENE_NM_LOCAL.value = '';
            document.MAINFORM.BENE_ADD1_LOCAL.value = '';
            document.MAINFORM.BENE_ADD2_LOCAL.value = '';
            document.MAINFORM.BENE_ADD3_LOCAL.value = '';
        } else {
            SYS_GetCUBK('BENE_ID_LOCAL', 'BENE_ID_LOCAL');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_BENE_ID_LOCAL", e);
    }
}

function SYM_GTEE_CAL_CHG_CASH_IND_back() {
    try {
        if (document.MAINFORM.SEPARATE_CHG_FLG.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_CHG_CASH_IND_back", e);
    }
}

function SYM_GTEE_CAL_CONF_BK_ID() {
    try {
        if (document.MAINFORM.CONF_BK_ID.value == '') {
            document.MAINFORM.CONF_BK_NM.value = '';
            document.MAINFORM.CONF_BK_ADD1.value = '';
            document.MAINFORM.CONF_BK_ADD2.value = '';
            document.MAINFORM.CONF_BK_ADD3.value = '';
            document.MAINFORM.CONF_BK_SW_ADD.value = '';
            SYM_GTEE_CAL_CONF_BK_ID_back();
        } else {
            SYS_GetCUBK('CONF_BK_ID', 'CONF_BK_ID', 'SYM_GTEE_CAL_CONF_BK_ID_back()');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_CONF_BK_ID", e);
    }
}

function SYM_GTEE_CAL_CONF_BK_ID_back() {
    try {
        SYM_GTEE_CHK_CONF_BK_SW_TAG();
        if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.CONF_BK_SW_ADD.value = document.MAINFORM.CONF_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_CONF_BK_ID_back", e);
    }
}

function SYM_GTEE_CAL_INDEMN_ID_LOCAL() {
    try {
        if (document.MAINFORM.INDEMN_ID_LOCAL.value == '') {
            document.MAINFORM.INDEMN_NM_LOCAL.value = '';
            document.MAINFORM.INDEMN_ADD1_LOCAL.value = '';
            document.MAINFORM.INDEMN_ADD2_LOCAL.value = '';
            document.MAINFORM.INDEMN_ADD3_LOCAL.value = '';
        } else {
            SYS_GetCUBK('INDEMN_ID_LOCAL', 'INDEMN_ID_LOCAL');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_INDEMN_ID_LOCAL", e);
    }
}

function SYM_GTEE_CAL_ISSUE_BK_ID() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID.value == '') {
            document.MAINFORM.ISSUE_BK_NM.value = '';
            document.MAINFORM.ISSUE_BK_ADD1.value = '';
            document.MAINFORM.ISSUE_BK_ADD2.value = '';
            document.MAINFORM.ISSUE_BK_ADD3.value = '';
            document.MAINFORM.ISSUE_BK_SW_ADD.value = '';
            SYM_GTEE_CAL_ISSUE_BK_ID_back();
        } else {
            SYS_GetCUBK('ISSUE_BK_ID', 'ISSUE_BK_ID', 'SYM_GTEE_CAL_ISSUE_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_ISSUE_BK_ID", e);
    }
}

function SYM_GTEE_CAL_ISSUE_BK_ID_LOCAL() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID_LOCAL.value == '') {
            document.MAINFORM.ISSUE_BK_NM_LOCAL.value = '';
            document.MAINFORM.ISSUE_BK_ADD1_LOCAL.value = '';
            document.MAINFORM.ISSUE_BK_ADD2_LOCAL.value = '';
            document.MAINFORM.ISSUE_BK_ADD3_LOCAL.value = '';
            document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value = '';
            SYM_GTEE_CAL_ISSUE_BK_ID_back_LOCAL();
        } else {
            SYS_GetCUBK('ISSUE_BK_ID_LOCAL', 'ISSUE_BK_ID_LOCAL', 'SYM_GTEE_CAL_ISSUE_BK_ID_back_LOCAL');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_ISSUE_BK_ID_LOCAL", e);
    }
}

function SYM_GTEE_CAL_ISSUE_BK_ID_back() {
    try {
        SYM_GTEE_CHK_ISSUE_BK_SW_TAG();
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.ISSUE_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_ISSUE_BK_ID_back", e);
    }
}

function SYM_GTEE_CAL_ISSUE_BK_ID_back_LOCAL() {
    try {
        SYM_GTEE_CHK_ISSUE_BK_SW_TAG_LOCAL();
        if (document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value.length == 8) {
            document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value = document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_ISSUE_BK_ID_back_LOCAL", e);
    }
}

function SYM_GTEE_CAL_NEW_BENE_ID() {
    try {
        if (document.MAINFORM.NEW_BENE_ID.value == '') {
            document.MAINFORM.NEW_BENE_NM.value = '';
            document.MAINFORM.NEW_BENE_ADD1.value = '';
            document.MAINFORM.NEW_BENE_ADD2.value = '';
            document.MAINFORM.NEW_BENE_ADD3.value = '';
        } else {
            SYS_GetCUBK('NEW_BENE_ID', 'NEW_BENE_ID');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_NEW_BENE_ID", e);
    }
}

function SYM_GTEE_CAL_NEW_BENE_ID_LOCAL() {
    try {
        if (document.MAINFORM.NEW_BENE_ID_LOCAL.value == '') {
            document.MAINFORM.NEW_BENE_NM_LOCAL.value = '';
            document.MAINFORM.NEW_BENE_ADD1_LOCAL.value = '';
            document.MAINFORM.NEW_BENE_ADD2_LOCAL.value = '';
            document.MAINFORM.NEW_BENE_ADD3_LOCAL.value = '';
        } else {
            SYS_GetCUBK('NEW_BENE_ID_LOCAL', 'NEW_BENE_ID_LOCAL');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_NEW_BENE_ID_LOCAL", e);
    }
}

function SYM_GTEE_CAL_PAYMENT_AC_DESC() {
    try {
        var CrLen; // Utility Auto Fix Comments
        var DrLen; // Utility Auto Fix Comments
        var acType; // Utility Auto Fix Comments
        var arrCredit; // Utility Auto Fix Comments
        var arrDebit; // Utility Auto Fix Comments
        var credit; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var sDesc; // Utility Auto Fix Comments
        arrDebit = SYS_GetObjByDoName("PaymentDebit");
        arrCredit = SYS_GetObjByDoName("PaymentCredit");
        DrLen = arrDebit.length;
        CrLen = arrCredit.length;
        sDesc = "GTEE04NULLNULLNULL";
        for (i = 0; i < DrLen; i++) { // Utility Auto Fix Comments
            debit = arrDebit[i];
            acType = debit.getDoValueByName("CPYT_DR_AC_TYPE");
            SYS_UpdateFldValueByDo(debit, "CPYT_DR_AC_DESC", sDesc + acType.substring(0, 1));
        }
        for (i = 0; i < CrLen; i++) {
            credit = arrCredit[i];
            acType = credit.getDoValueByName("CPYT_CR_AC_TYPE");
            SYS_UpdateFldValueByDo(credit, "CPYT_CR_AC_DESC", sDesc + acType.substring(0, 1));
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CAL_PAYMENT_AC_DESC", e);
    }
}

function SYM_GTEE_CASH_CVR_PER() {
    try {
        if (document.MAINFORM.CASH_COV_HELD.value == 'No cash cover') {
            document.MAINFORM.CASH_COV_PCT.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_PCT, 'P');

            document.MAINFORM.CASH_COV_AMT.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AMT, 'P');

            document.MAINFORM.CASH_COV_CCY.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_CCY, 'P');

            document.MAINFORM.RT_CASH_COV_LCY.value = "0.00";
            SYT_ChangeFldClass(document.MAINFORM.RT_CASH_COV_LCY, 'P');

            document.MAINFORM.CASH_COV_AC_NO.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AC_NO, 'P');

            document.MAINFORM.MRGN_CCY.value = "";
            SYT_ChangeFldClass(document.MAINFORM.MRGN_CCY, 'P');

            document.MAINFORM.APPL_AC_MRGN.value = "";
            SYT_ChangeFldClass(document.MAINFORM.APPL_AC_MRGN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.APPL_AC_MRGN_BTN, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AC_NO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_PCT, 'M');
            document.MAINFORM.MRGN_CCY.value = SYS_LOCAL_CCY;
            SYT_ChangeFldClass(document.MAINFORM.MRGN_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.APPL_AC_MRGN_BTN, 'M');
            document.MAINFORM.CASH_COV_CCY.value = SYS_LOCAL_CCY;
            document.MAINFORM.APPL_AC_MRGN.value = "";
            SYT_ChangeFldClass(document.MAINFORM.APPL_AC_MRGN, 'M');
            document.MAINFORM.CASH_COV_PCT.value = 0;

            if (document.MAINFORM.CASH_COV_HELD.value == 'Full cash cover') {
                document.MAINFORM.CASH_COV_PCT.value = 100;
                if (document.MAINFORM.CASH_COV_CCY.value == "") {
                    document.MAINFORM.CASH_COV_CCY.value = document.MAINFORM.GTEE_CCY.value;
                }
                SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AMT, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CASH_COV_PCT, 'P');
            }
        }
        EEHtml.fireEvent(document.MAINFORM.CASH_COV_CCY, 'onchange');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CASH_CVR_PER", e);
    }
}

function SYM_GTEE_CCY_AMT() {
    try {
        document.MAINFORM.GTEE_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_AMT.value);
        document.MAINFORM.GTEE_LCY_AMT.value = SYT_AmtFormat(SYS_LOCAL_CCY, document.MAINFORM.GTEE_LCY_AMT.value);
        //document.MAINFORM.CASH_COV_AMT.value=SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value,document.MAINFORM.CASH_COV_AMT.value);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CCY_AMT", e);
    }
}

function SYM_GTEE_CCY_AMT_CONTCT_VALUE() {
    try {
        document.MAINFORM.CONTCT_VALUE.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.CONTCT_VALUE.value);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CCY_AMT_CONTCT_VALUE", e);
    }
}

function SYM_GTEE_CCY_AMT_LIAB() {
    try {
        document.MAINFORM.LIAB_LCY_AMT.value = SYT_AmtFormat(SYS_LOCAL_CCY, document.MAINFORM.LIAB_LCY_AMT.value);
        document.MAINFORM.LIAB_TRXCCY_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.LIAB_TRXCCY_AMT.value);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CCY_AMT_LIAB", e);
    }
}

function SYM_GTEE_CHK_AC_WT_BK_SW_TAG() {
    try {
        if (document.MAINFORM.AC_WT_BK_SW_ADD.value != '') {
            document.MAINFORM.AC_WT_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.AC_WT_BK_NM.value != '' || document.MAINFORM.AC_WT_BK_ADD1.value != '' || document.MAINFORM.AC_WT_BK_ADD2.value != '' || document.MAINFORM.AC_WT_BK_ADD3.value != '') && document.MAINFORM.AC_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AC_WT_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.AC_WT_BK_SW_ADD.value == '' && document.MAINFORM.AC_WT_BK_NM.value == '' && document.MAINFORM.AC_WT_BK_ADD1.value == '' && document.MAINFORM.AC_WT_BK_ADD2.value == '' && document.MAINFORM.AC_WT_BK_ADD3.value == '') {
            document.MAINFORM.AC_WT_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CHK_AC_WT_BK_SW_TAG", e);
    }
}

function SYM_GTEE_CHK_ADV_BK_SW_TAG() {
    try {
        if (document.MAINFORM.ADV_BK_SW_ADD.value != '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.ADV_BK_NM.value != '' || document.MAINFORM.ADV_BK_ADD1.value != '' || document.MAINFORM.ADV_BK_ADD2.value != '' || document.MAINFORM.ADV_BK_ADD3.value != '') && document.MAINFORM.ADV_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ADV_BK_NM.value == '' && document.MAINFORM.ADV_BK_ADD1.value == '' && document.MAINFORM.ADV_BK_ADD2.value == '' && document.MAINFORM.ADV_BK_ADD3.value == '' && document.MAINFORM.ADV_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CHK_ADV_BK_SW_TAG", e);
    }
}

function SYM_GTEE_CHK_ADV_THU_BK_SW_TAG() {
    try {
        if (document.MAINFORM.ADV_THU_BK_SW_ADD.value != '') {
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.ADV_THU_BK_NM.value != '' || document.MAINFORM.ADV_THU_BK_ADD1.value != '' || document.MAINFORM.ADV_THU_BK_ADD2.value != '' || document.MAINFORM.ADV_THU_BK_ADD3.value != '') && document.MAINFORM.ADV_THU_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ADV_THU_BK_NM.value == '' && document.MAINFORM.ADV_THU_BK_ADD1.value == '' && document.MAINFORM.ADV_THU_BK_ADD2.value == '' && document.MAINFORM.ADV_THU_BK_ADD3.value == '' && document.MAINFORM.ADV_THU_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CHK_ADV_THU_BK_SW_TAG", e);
    }
}

function SYM_GTEE_CHK_ADV_THU_BK_SW_TAG_LOCAL() {
    try {
        if (document.MAINFORM.ADV_THU_BK_SW_ADD_LOCAL.value != '') {
            document.MAINFORM.ADV_THU_BK_SW_TAG_LOCAL.value = 'A';
        }
        if ((document.MAINFORM.ADV_THU_BK_NM_LOCAL.value != '' || document.MAINFORM.ADV_THU_BK_ADD1_LOCAL.value != '' || document.MAINFORM.ADV_THU_BK_ADD2_LOCAL.value != '' || document.MAINFORM.ADV_THU_BK_ADD3_LOCAL.value != '') && document.MAINFORM.ADV_THU_BK_SW_ADD_LOCAL.value == '') {
            document.MAINFORM.ADV_THU_BK_SW_TAG_LOCAL.value = 'D';
        }
        if (document.MAINFORM.ADV_THU_BK_NM_LOCAL.value == '' && document.MAINFORM.ADV_THU_BK_ADD1_LOCAL.value == '' && document.MAINFORM.ADV_THU_BK_ADD2_LOCAL.value == '' && document.MAINFORM.ADV_THU_BK_ADD3_LOCAL.value == '' && document.MAINFORM.ADV_THU_BK_SW_ADD_LOCAL.value == '') {
            document.MAINFORM.ADV_THU_BK_SW_TAG_LOCAL.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CHK_ADV_THU_BK_SW_TAG_LOCAL", e);
    }
}

function SYM_GTEE_CHK_AVAL_BK_SW_TAG() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value != '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = 'F';
        }
        if ((document.MAINFORM.AVAL_WT_BK_NM.value != '' || document.MAINFORM.AVAL_WT_BK_ADD1.value != '' || document.MAINFORM.AVAL_WT_BK_ADD2.value != '' || document.MAINFORM.AVAL_WT_BK_ADD3.value != '') && document.MAINFORM.AVAL_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = 'G';
        }
        if (document.MAINFORM.AVAL_WT_BK_NM.value == '' && document.MAINFORM.AVAL_WT_BK_ADD1.value == '' && document.MAINFORM.AVAL_WT_BK_ADD2.value == '' && document.MAINFORM.AVAL_WT_BK_ADD3.value == '' && document.MAINFORM.AVAL_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CHK_AVAL_BK_SW_TAG", e);
    }
}

function SYM_GTEE_CHK_AVAL_BK_SW_TAG_LOCAL() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value != '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG_LOCAL.value = 'F';
        }
        if ((document.MAINFORM.AVAL_WT_BK_NM_LOCAL.value != '' || document.MAINFORM.AVAL_WT_BK_ADD1_LOCAL.value != '' || document.MAINFORM.AVAL_WT_BK_ADD2_LOCAL.value != '' || document.MAINFORM.AVAL_WT_BK_ADD3_LOCAL.value != '') && document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG_LOCAL.value = 'G';
        }
        if (document.MAINFORM.AVAL_WT_BK_NM_LOCAL.value == '' && document.MAINFORM.AVAL_WT_BK_ADD1_LOCAL.value == '' && document.MAINFORM.AVAL_WT_BK_ADD2_LOCAL.value == '' && document.MAINFORM.AVAL_WT_BK_ADD3_LOCAL.value == '' && document.MAINFORM.AVAL_WT_BK_SW_ADD_LOCAL.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG_LOCAL.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CHK_AVAL_BK_SW_TAG_LOCAL", e);
    }
}

function SYM_GTEE_CHK_CONF_BK_SW_TAG() {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value != '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.CONF_BK_NM.value != '' || document.MAINFORM.CONF_BK_ADD1.value != '' || document.MAINFORM.CONF_BK_ADD2.value != '' || document.MAINFORM.CONF_BK_ADD3.value != '') && document.MAINFORM.CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.CONF_BK_NM.value == '' && document.MAINFORM.CONF_BK_ADD1.value == '' && document.MAINFORM.CONF_BK_ADD2.value == '' && document.MAINFORM.CONF_BK_ADD3.value == '' && document.MAINFORM.CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CHK_CONF_BK_SW_TAG", e);
    }
}

function SYM_GTEE_CHK_ISSUE_BK_SW_TAG() {
    try {
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value != '') {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.ISSUE_BK_NM.value != '' || document.MAINFORM.ISSUE_BK_ADD1.value != '' || document.MAINFORM.ISSUE_BK_ADD2.value != '' || document.MAINFORM.ISSUE_BK_ADD3.value != '') && document.MAINFORM.ISSUE_BK_SW_ADD.value == '') {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value == '' && document.MAINFORM.ISSUE_BK_NM.value == '' && document.MAINFORM.ISSUE_BK_ADD1.value == '' && document.MAINFORM.ISSUE_BK_ADD2.value == '' && document.MAINFORM.ISSUE_BK_ADD3.value == '') {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CHK_ISSUE_BK_SW_TAG", e);
    }
}

function SYM_GTEE_CHK_ISSUE_BK_SW_TAG_LOCAL() {
    try {
        if (document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value != '') {
            document.MAINFORM.ISSUE_BK_SW_TAG_LOCAL.value = 'A';
        }
        if ((document.MAINFORM.ISSUE_BK_NM_LOCAL.value != '' || document.MAINFORM.ISSUE_BK_ADD1_LOCAL.value != '' || document.MAINFORM.ISSUE_BK_ADD2_LOCAL.value != '' || document.MAINFORM.ISSUE_BK_ADD3_LOCAL.value != '') && document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value == '') {
            document.MAINFORM.ISSUE_BK_SW_TAG_LOCAL.value = 'D';
        }
        if (document.MAINFORM.ISSUE_BK_SW_ADD_LOCAL.value == '' && document.MAINFORM.ISSUE_BK_NM_LOCAL.value == '' && document.MAINFORM.ISSUE_BK_ADD1_LOCAL.value == '' && document.MAINFORM.ISSUE_BK_ADD2_LOCAL.value == '' && document.MAINFORM.ISSUE_BK_ADD3_LOCAL.value == '') {
            document.MAINFORM.ISSUE_BK_SW_TAG_LOCAL.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CHK_ISSUE_BK_SW_TAG_LOCAL", e);
    }
}

function SYM_GTEE_CHK_NEG(value) {
    try {
        if (SYS_BeFloat(value) < 0) {
            return true;
        } else {
            false;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CHK_NEG", e);
    }
}

function SYM_GTEE_CLM_BK_ID_BTN() {
    try {
        if (document.MAINFORM.CLM_BK_ID_BTN.value == 'BANK') {
            SYS_GetCUBK('CLM_BK_ID_BANK', document.MAINFORM.CLM_BK_ID.name, 'SYM_GTEE_MPO_CLM_BK_CORE_MED');
        } else if (document.MAINFORM.CLM_BK_ID_BTN.value == 'CUST') {
            SYS_GetCUBK('CLM_BK_ID_CUST', document.MAINFORM.CLM_BK_ID.name, 'SYM_GTEE_MPO_CLM_BK_CORE_MED');
            document.MAINFORM.CLM_BK_SW_ADD.value = "";
            document.MAINFORM.CLM_BK_SW_TAG.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_CLM_BK_ID_BTN", e);
    }
}

function SYM_GTEE_Cal_ACPT_REJ() {
    try {
        if (document.MAINFORM.ACPT_REJ.value == "Hold") {
            document.MAINFORM.NXT_STATUS.value = "OutApReAmd";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_ACPT_REJ", e);
    }
}

function SYM_GTEE_Cal_ADD_BUTTON() {
    try {
        if (document.MAINFORM.APPL_ID.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD1_BTN, 'P');
            SYM_GTEE_Cal_APPL_SW_TAG();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_ADD1_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD1_BTN, 'O');
            SYM_GTEE_Cal_APPL_SW_TAG();
        }
        if (document.MAINFORM.BENE_ID.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD1_BTN, 'P');
            SYM_GTEE_Cal_BENE_SW_TAG();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD1_BTN, 'O');
            SYM_GTEE_Cal_BENE_SW_TAG();
        }
        if (document.MAINFORM.INDEMN_ID.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD1_BTN, 'P');
            SYM_GTEE_Cal_INDEMN_SW_TAG();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_ADD1_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD1_BTN, 'O');
            SYM_GTEE_Cal_INDEMN_SW_TAG();
        }
        if (document.MAINFORM.SEND_TO_ID.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD1_BTN, 'P');
            SYM_GTEE_Cal_SEND_TO_SW_TAG();
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_ADD1_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD1_BTN, 'O');
            SYM_GTEE_Cal_SEND_TO_SW_TAG();
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_ADD_BUTTON", e);
    }
}

function SYM_GTEE_Cal_ADD_STL() {
    try {
        document.MAINFORM.APPL_ID.value = document.MAINFORM.ORDER_INST_ID.value;
        document.MAINFORM.APPL_NM.value = document.MAINFORM.ORDER_INST_NM.value;
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_ADD_STL", e);
    }
}

function SYM_GTEE_Cal_ADV_BK_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('ADV_BK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_ADV_BK_POST_ADD", e);
    }
}

function SYM_GTEE_Cal_ADV_THU_BK_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('ADV_THU_BK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_ADV_THU_BK_POST_ADD", e);
    }
}

function SYM_GTEE_Cal_APPL_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.APPL_ID_BTN.value = 'BANK';
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('APPL_ID_BANK', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_APPL_BANK", e);
    }
}

function SYM_GTEE_Cal_APPL_BANK_ADD() {
    try {
        SYS_InqCUBK_byCondition('APPL_BANK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_APPL_BANK_ADD", e);
    }
}

function SYM_GTEE_Cal_APPL_BANK_ADD_LOCAL() {
    try {
        SYS_InqCUBK_byCondition('APPL_ID_CUST_LOCAL', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_APPL_BANK_ADD_LOCAL", e);
    }
}

function SYM_GTEE_Cal_APPL_BANK_ORDERNO() {
    try {
        var APPL_BANK_ORDERNO; // Utility Auto Fix Comments
        var APPL_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //APPL_BANK_ORDERNO = document.MAINFORM.APPL_BANK_ADD_ORDERNO.value;
        //APPL_ID = document.MAINFORM.APPL_ID.value;
        //sSQLWhere = "ORDER_NO = " + APPL_BANK_ORDERNO + " AND C_MAIN_REF = '" + APPL_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "APPL_NM;APPL_ADD1;APPL_ADD2;APPL_ADD3";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_APPL_BANK_ORDERNO_0', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_APPL_BANK_ORDERNO", e);
    }
}

function SYM_GTEE_Cal_APPL_BANK_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('APPL_BANK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_APPL_BANK_POST_ADD", e);
    }
}

function SYM_GTEE_Cal_APPL_BANK_POST_ORDERNO() {
    try {
        var APPL_BANK_POST_ORDERNO; // Utility Auto Fix Comments
        var APPL_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //APPL_BANK_POST_ORDERNO = document.MAINFORM.APPL_BANK_MAIL_ADD_ORDERNO.value;
        //APPL_ID = document.MAINFORM.APPL_ID.value;
        //sSQLWhere = "ORDER_NO = " + APPL_BANK_POST_ORDERNO + " AND C_MAIN_REF = '" + APPL_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "APPL_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_APPL_BANK_POST_ORDERNO_1', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_APPL_BANK_POST_ORDERNO", e);
    }
}

function SYM_GTEE_Cal_APPL_BK_SW_ADD() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.APPL_SW_ADD.value.length == 11 || document.MAINFORM.APPL_SW_ADD.value.length == 8) {
            if (document.MAINFORM.APPL_SW_ADD.value.length == 8) {
                document.MAINFORM.APPL_SW_ADD.value = document.MAINFORM.APPL_SW_ADD.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.APPL_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "APPL_ID";
            if (document.MAINFORM.APPL_ID.value == '') {
                SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_APPL_BK_SW_ADD_8', '1', true);
            }
            if (document.MAINFORM.APPL_ID.value != '') {
                SYS_GetCUBK('APPL_ID_BANK', 'APPL_ID', 'SYM_GTEE_Cal_ADD_BUTTON');
            }
            SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O'); // Utility Auto Fix Comments
            document.MAINFORM.APPL_CUST_BK.value = "Bank";
            //SYT_Show_Notes('document.MAINFORM.APPL_NOTES.name');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_APPL_BK_SW_ADD", e);
    }
}

function SYM_GTEE_Cal_APPL_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.APPL_ID_BTN.value = 'CUST';
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('APPL_ID_CUST', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_APPL_CUST", e);
    }
}

function SYM_GTEE_Cal_APPL_SW_TAG() {
    try {
        if (document.MAINFORM.APPL_SW_ADD.value != "") {
            document.MAINFORM.APPL_SW_TAG.value = "A";
        } else {
            if (document.MAINFORM.APPL_NM.value == "" && document.MAINFORM.APPL_ADD1.value == "" && document.MAINFORM.APPL_ADD2.value == "" && document.MAINFORM.APPL_ADD3.value == "") {
                document.MAINFORM.APPL_SW_TAG.value = "";
            } else {
                document.MAINFORM.APPL_SW_TAG.value = "D";
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_APPL_SW_TAG", e);
    }
}

function SYM_GTEE_Cal_APPL_SYD_CallBak() {
    try {
        SYM_GTEE_MPO_APPL_CORR_MED1();
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_APPL_SYD_CallBak", e);
    }
}

function SYM_GTEE_Cal_AREA_CODE() {
    try {
        if (document.MAINFORM.FINANCE_TYPE.value == 'PFCE') {
            document.MAINFORM.AREA_CODE.value = 32;
        }
        if (document.MAINFORM.FINANCE_TYPE.value == 'PFLC') {
            document.MAINFORM.AREA_CODE.value = 33;
        }
        if (document.MAINFORM.FINANCE_TYPE.value == '') {
            document.MAINFORM.AREA_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_AREA_CODE", e);
    }
}

function SYM_GTEE_Cal_BENE_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.BENE_ID_BTN.value = 'BANK';
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('BENE_ID_BANK', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_BENE_BANK", e);
    }
}

function SYM_GTEE_Cal_BENE_BANK_ADD() {
    try {
        SYS_InqCUBK_byCondition('BENE_BANK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_BENE_BANK_ADD", e);
    }
}

function SYM_GTEE_Cal_BENE_BANK_ORDERNO() {
    try {
        var BENE_BANK_ORDERNO; // Utility Auto Fix Comments
        var BENE_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //BENE_BANK_ORDERNO = document.MAINFORM.BENE_BANK_ADD_ORDERNO.value;
        //BENE_ID = document.MAINFORM.BENE_ID.value;
        //sSQLWhere = "ORDER_NO = " + BENE_BANK_ORDERNO + " AND C_MAIN_REF = '" + BENE_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "BENE_NM;BENE_ADD1;BENE_ADD2;BENE_ADD3";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_BENE_BANK_ORDERNO_2', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_BENE_BANK_ORDERNO", e);
    }
}

function SYM_GTEE_Cal_BENE_BANK_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('BENE_BANK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_BENE_BANK_POST_ADD", e);
    }
}

function SYM_GTEE_Cal_BENE_BANK_POST_ORDERNO() {
    try {
        var BENE_BANK_POST_ORDERNO; // Utility Auto Fix Comments
        var BENE_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //BENE_BANK_POST_ORDERNO = document.MAINFORM.BENE_BANK_MAIL_ADD_ORDERNO.value;
        //BENE_ID = document.MAINFORM.BENE_ID.value;
        //sSQLWhere = "ORDER_NO = " + BENE_BANK_POST_ORDERNO + " AND C_MAIN_REF = '" + BENE_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "BENE_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_BENE_BANK_POST_ORDERNO_3', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_BENE_BANK_POST_ORDERNO", e);
    }
}

function SYM_GTEE_Cal_BENE_BK_SW_ADD() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.BENE_SW_ADD.value.length == 11 || document.MAINFORM.BENE_SW_ADD.value.length == 8) {
            if (document.MAINFORM.BENE_SW_ADD.value.length == 8) {
                document.MAINFORM.BENE_SW_ADD.value = document.MAINFORM.BENE_SW_ADD.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.BENE_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "BENE_ID";
            if (document.MAINFORM.BENE_ID.value == '') {
                SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_BENE_BK_SW_ADD_9', '1', true);
            }
            if (document.MAINFORM.BENE_ID.value != '') {
                SYS_GetCUBK('BENE_ID_BANK', 'BENE_ID', 'SYM_GTEE_Cal_ADD_BUTTON');
            }
            SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'O');
            document.MAINFORM.BENE_CUST_BK.value = "Bank";

        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_BENE_BK_SW_ADD", e);
    }
}

function SYM_GTEE_Cal_BENE_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.BENE_ID_BTN.value = 'CUST';
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('BENE_ID_CUST', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_BENE_CUST", e);
    }
}

function SYM_GTEE_Cal_BENE_ID_PLF_ESCROW() {
    try {
        if (document.MAINFORM.BENE_ID.value == '') {
            SYM_GTEE_Cal_clear_BENE_ID_PLF_ESCROW();
            SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD1_BTN, 'P');
        } else {
            SYS_GetCUBK('BENE_ID_CUST', document.MAINFORM.BENE_ID.name);
            SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1_BTN, 'M');
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD1_BTN, 'M');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_BENE_ID_PLF_ESCROW", e);
    }
}

function SYM_GTEE_Cal_BENE_SW_TAG() {
    try {
        if (document.MAINFORM.BENE_SW_ADD.value != "") {
            document.MAINFORM.BENE_SW_TAG.value = "A";
        } else {
            if (document.MAINFORM.BENE_NM.value == "" && document.MAINFORM.BENE_ADD1.value == "" && document.MAINFORM.BENE_ADD2.value == "" && document.MAINFORM.BENE_ADD3.value == "") {
                document.MAINFORM.BENE_SW_TAG.value = "";
            } else {
                document.MAINFORM.BENE_SW_TAG.value = "D";
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_BENE_SW_TAG", e);
    }
}

function SYM_GTEE_Cal_CASH_COV_CCY() {
    try {
        document.MAINFORM.MRGN_CCY.value = document.MAINFORM.CASH_COV_CCY.value;
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_CASH_COV_CCY", e);
    }
}

function SYM_GTEE_Cal_CASH_CVR_AMT() {
    try {
        var amt; // Utility Auto Fix Comments
        var per; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        amt = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        rate = SYS_BeFloat(document.MAINFORM.RT_CASH_COV_LCY.value);
        per = SYS_BeFloat(document.MAINFORM.CASH_COV_PCT.value) / 100;
        if (document.MAINFORM.CASH_COV_CCY.value != '' && document.MAINFORM.CASH_COV_HELD.value != 'No cash cover') {
            document.MAINFORM.CASH_COV_AMT.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, amt / rate * per);
        } else {
            document.MAINFORM.CASH_COV_AMT.value = 0.00;
        }
        SYM_GTEE_CCY_AMT();
        SYM_GTEE_MRGN_AMT();
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_CASH_CVR_AMT", e);
    }
}

function SYM_GTEE_Cal_CLM_AMT_CUSTCCY() {
    try {
        var GTEE_CCY; // Utility Auto Fix Comments
        var ORG_CLM_AMT_CUSTCCY; // Utility Auto Fix Comments
        var RATE_STLCCY_TRXCCY; // Utility Auto Fix Comments
        var RATE_TRXCCY_LCY; // Utility Auto Fix Comments
        ORG_CLM_AMT_CUSTCCY = SYS_BeFloat(document.MAINFORM.ORG_CLM_AMT_CUSTCCY.value);
        RATE_STLCCY_TRXCCY = SYS_BeFloat(document.MAINFORM.RT_STLCCY_TRXCCY.value) / 100;
        RATE_TRXCCY_LCY = SYS_BeFloat(document.MAINFORM.RT_TRXCCY_LCY.value) / 100;
        GTEE_CCY = document.MAINFORM.GTEE_CCY.value;
        if (GTEE_CCY == SYS_LOCAL_CCY) {
            CLM_AMT_CUSTCCY = ORG_CLM_AMT_CUSTCCY / RATE_STLCCY_TRXCCY;
        } else {
            CLM_AMT_CUSTCCY = ORG_CLM_AMT_CUSTCCY * RATE_STLCCY_TRXCCY / RATE_TRXCCY_LCY;
        }

        document.MAINFORM.CLM_CUST_CCY_AMT.value = SYT_AmtFormat(document.MAINFORM.STL_CCY_AMT.value, CLM_AMT_CUSTCCY);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_CLM_AMT_CUSTCCY", e);
    }
}

function SYM_GTEE_Cal_CLM_TRX_CCY_AMT() {
    try {
        var CLM_TRX_CCY_AMT; // Utility Auto Fix Comments
        var GTEE_AMT; // Utility Auto Fix Comments
        CLM_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        GTEE_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        if ((GTEE_AMT - CLM_TRX_CCY_AMT) < 0) {
            SYS_CheckError(document.MAINFORM.CLM_TRX_CCY_AMT, "Claim amounts higher than the Gtee amount!");
            document.MAINFORM.CLM_TRX_CCY_AMT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_CLM_TRX_CCY_AMT", e);
    }
}

function SYM_GTEE_Cal_CLS_FLG_BY_GTEE_RETURN() {
    try {
        if (document.MAINFORM.GTEE_RETURN.value == 'Yes') {
            document.MAINFORM.CLS_FLG.value = 'YES';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_CLS_FLG_BY_GTEE_RETURN", e);
    }
}

function SYM_GTEE_Cal_COMM_DT() {
    try {
        var Fist_D; // Utility Auto Fix Comments
        var Fist_M; // Utility Auto Fix Comments
        var Fist_Y; // Utility Auto Fix Comments
        var Last_D; // Utility Auto Fix Comments
        var Last_M; // Utility Auto Fix Comments
        var Last_Y; // Utility Auto Fix Comments
        var _yyy; // Utility Auto Fix Comments
        var day; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var new_dt_month; // Utility Auto Fix Comments
        var new_dt_year; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        if (SYS_DATE_FORMAT == "" || SYS_DATE_FORMAT == null || SYS_DATE_FORMAT == "undefined") {
            return;
        }
        Fist_Y = SYS_DATE_FORMAT.toLowerCase().indexOf('y');
        Last_Y = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('y');
        Fist_M = SYS_DATE_FORMAT.toLowerCase().indexOf('m');
        Last_M = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('m');
        Fist_D = SYS_DATE_FORMAT.toLowerCase().indexOf('d');
        Last_D = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('d');

        _yyy = SYS_DATE_FORMAT.substr(Last_M + 1, 1).toString(); // Utility Auto Fix Comments

        if (document.MAINFORM.COMM_START_DT.value == '') {
            return;
        }
        year = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_Y, Last_Y - Fist_Y + 1));

        month = parseFloat(document.MAINFORM.COMM_START_DT.value.substr(Fist_M, Last_M - Fist_M + 1));

        day = document.MAINFORM.COMM_START_DT.value.substr(Fist_D, Last_D - Fist_D + 1);
        new_dt_year = year;
        new_dt_month = month;
        if (document.MAINFORM.CHG_POLICY.value == 'Monthly') {
            new_dt_month = month + 1;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Quarterly') {
            new_dt_month = month + 3;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Half yearly') {
            new_dt_month = month + 6;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Yearly') {
            new_dt_year = year + 1;
        }

        if (new_dt_month < 10) {
            new_dt_month = '0' + new_dt_month.toString();
        }

        if (Fist_Y < Fist_M) {
            if (Fist_M < Fist_D) {
                document.MAINFORM.COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
            }
        } else {
            if (Fist_M < Fist_D) {
                document.MAINFORM.COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            } else {
                document.MAINFORM.COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_COMM_DT", e);
    }
}

function SYM_GTEE_Cal_COMM_START_DT() {
    try {
        if (document.MAINFORM.COMM_START_DT.value == '') {
            document.MAINFORM.COMM_START_DT.value = document.MAINFORM.VALID_FM_DT.value;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_COMM_START_DT", e);
    }
}

function SYM_GTEE_Cal_CONTCT_VALUE() {
    try {
        var nCONTCT_VALUE; // Utility Auto Fix Comments
        var nCONTCT_VALUE_PCT; // Utility Auto Fix Comments
        var nGTEE_AMT; // Utility Auto Fix Comments
        nGTEE_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        nCONTCT_VALUE_PCT = SYS_BeInt(document.MAINFORM.CONTCT_VALUE_PCT.value) / 100;
        nCONTCT_VALUE = nGTEE_AMT * nCONTCT_VALUE_PCT;
        document.MAINFORM.CONTCT_VALUE.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, nCONTCT_VALUE);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_CONTCT_VALUE", e);
    }
}

function SYM_GTEE_Cal_CONTCT_VALUE_PCT() {
    try {
        var nCONTCT_VALUE; // Utility Auto Fix Comments
        var nGTEE_AMT; // Utility Auto Fix Comments
        nGTEE_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        nCONTCT_VALUE = SYS_BeFloat(document.MAINFORM.CONTCT_VALUE.value);
        document.MAINFORM.CONTCT_VALUE_PCT.value = nCONTCT_VALUE / nGTEE_AMT * 100;
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_CONTCT_VALUE_PCT", e);
    }
}

function SYM_GTEE_Cal_Clear_Appl() {
    try {
        if (document.MAINFORM.APPL_CUST_BK.value == "Customer") {
            document.MAINFORM.APPL_ID_BTN.value = "CUST";
            document.MAINFORM.APPL_REF.value = "";
            document.MAINFORM.APPL_NOTES.value = "";
            document.MAINFORM.APPL_NM.value = "";
            document.MAINFORM.APPL_MAIL_ADD.value = "";
            document.MAINFORM.APPL_SW_ADD.value = "";
            document.MAINFORM.APPL_SW_TAG.value = "";
            document.MAINFORM.APPL_FAX_NO_1.value = "";
            document.MAINFORM.APPL_EMAIL_1.value = "";
            document.MAINFORM.APPL_ADD1.value = "";
            document.MAINFORM.APPL_ADD2.value = "";
            document.MAINFORM.APPL_ADD3.value = "";
            document.MAINFORM.APPL_BR_CD.value = "";
            document.MAINFORM.APPL_CORR_MED1.value = "";
            document.MAINFORM.APPL_ID.value = "";
        }
        if (document.MAINFORM.APPL_CUST_BK.value == "") {
            document.MAINFORM.APPL_ID.value = "";
            document.MAINFORM.APPL_REF.value = "";
            document.MAINFORM.APPL_NOTES.value = "";
            document.MAINFORM.APPL_NM.value = "";
            document.MAINFORM.APPL_MAIL_ADD.value = "";
            document.MAINFORM.APPL_SW_ADD.value = "";
            document.MAINFORM.APPL_SW_TAG.value = "";
            document.MAINFORM.APPL_FAX_NO_1.value = "";
            document.MAINFORM.APPL_EMAIL_1.value = "";
            document.MAINFORM.APPL_ADD1.value = "";
            document.MAINFORM.APPL_ADD2.value = "";
            document.MAINFORM.APPL_ADD3.value = "";
            document.MAINFORM.APPL_BR_CD.value = "";
            document.MAINFORM.APPL_CORR_MED1.value = "";
        }
        if (document.MAINFORM.APPL_CUST_BK.value == "Bank") {
            document.MAINFORM.APPL_ID.value = "";
            document.MAINFORM.APPL_ID_BTN.value = "BANK";
            document.MAINFORM.APPL_REF.value = "";
            document.MAINFORM.APPL_NOTES.value = "";
            document.MAINFORM.APPL_NM.value = "";
            document.MAINFORM.APPL_MAIL_ADD.value = "";
            document.MAINFORM.APPL_SW_ADD.value = "";
            document.MAINFORM.APPL_SW_TAG.value = "";
            document.MAINFORM.APPL_FAX_NO_1.value = "";
            document.MAINFORM.APPL_EMAIL_1.value = "";
            document.MAINFORM.APPL_ADD1.value = "";
            document.MAINFORM.APPL_ADD2.value = "";
            document.MAINFORM.APPL_ADD3.value = "";
            document.MAINFORM.APPL_BR_CD.value = "";
            document.MAINFORM.APPL_CORR_MED1.value = "";
        }
        SYM_GTEE_MPO_APPL_CORR_MED1();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_Clear_Appl", e);
    }
}

function SYM_GTEE_Cal_Clear_Appl_ID() {
    try {
        if (document.MAINFORM.APPL_ID.value == "") {
            //document.MAINFORM.APPL_REF.value = "";
            //document.MAINFORM.APPL_NOTES.value = "";
            document.MAINFORM.APPL_NM.value = "";
            //document.MAINFORM.APPL_MAIL_ADD.value = "";
            //document.MAINFORM.APPL_SW_ADD.value = "";
            //            document.MAINFORM.APPL_SW_TAG.value = "";
            //            document.MAINFORM.APPL_FAX_NO_1.value = "";
            //            document.MAINFORM.APPL_EMAIL_1.value = "";
            document.MAINFORM.APPL_ADD1.value = "";
            document.MAINFORM.APPL_ADD2.value = "";
            document.MAINFORM.APPL_ADD3.value = "";
            //document.MAINFORM.APPL_BR_CD.value = "";
            //document.MAINFORM.APPL_CORR_MED1.value = "";
            //SYM_GTEE_MPO_APPL_CORR_MED1();
            //SYM_GTEE_Cal_ADD_BUTTON();
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_Clear_Appl_ID", e);
    }
}

function SYM_GTEE_Cal_Clear_Appl_ID_LOCAL() {
    try {
        if (document.MAINFORM.APPL_ID_LOCAL.value == "") {
            //document.MAINFORM.APPL_REF.value = "";
            //document.MAINFORM.APPL_NOTES.value = "";
            document.MAINFORM.APPL_NM_LOCAL.value = "";
            //document.MAINFORM.APPL_MAIL_ADD.value = "";
            //document.MAINFORM.APPL_SW_ADD.value = "";
            //            document.MAINFORM.APPL_SW_TAG.value = "";
            //            document.MAINFORM.APPL_FAX_NO_1.value = "";
            //            document.MAINFORM.APPL_EMAIL_1.value = "";
            document.MAINFORM.APPL_ADD1_LOCAL.value = "";
            document.MAINFORM.APPL_ADD2_LOCAL.value = "";
            document.MAINFORM.APPL_ADD3_LOCAL.value = "";
            //document.MAINFORM.APPL_BR_CD.value = "";
            //document.MAINFORM.APPL_CORR_MED1.value = "";
            //SYM_GTEE_MPO_APPL_CORR_MED1();
            //SYM_GTEE_Cal_ADD_BUTTON();
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_Clear_Appl_ID_LOCAL", e);
    }
}

function SYM_GTEE_Cal_Clear_Bene() {
    try {
        if (document.MAINFORM.BENE_CUST_BK.value == "Customer") {
            document.MAINFORM.BENE_ID_BTN.value = "CUST";
            document.MAINFORM.BENE_ID.value = "";
            document.MAINFORM.BENE_REF.value = "";
            document.MAINFORM.BENE_NOTES.value = "";
            document.MAINFORM.BENE_NM.value = "";
            document.MAINFORM.BENE_MAIL_ADD.value = "";
            document.MAINFORM.BENE_SW_ADD.value = "";
            document.MAINFORM.BENE_SW_TAG.value = "";
            document.MAINFORM.BENE_FAX.value = "";
            document.MAINFORM.BENE_EMAIL.value = "";
            document.MAINFORM.BENE_ADD1.value = "";
            document.MAINFORM.BENE_ADD2.value = "";
            document.MAINFORM.BENE_ADD3.value = "";
            document.MAINFORM.BENE_CORR_MED.value = "";
            document.MAINFORM.BENE_CNTY_CD.value = "";
        }
        if (document.MAINFORM.BENE_CUST_BK.value == "") {
            document.MAINFORM.BENE_ID.value = "";
            document.MAINFORM.BENE_REF.value = "";
            document.MAINFORM.BENE_NOTES.value = "";
            document.MAINFORM.BENE_NM.value = "";
            document.MAINFORM.BENE_MAIL_ADD.value = "";
            document.MAINFORM.BENE_SW_ADD.value = "";
            document.MAINFORM.BENE_SW_TAG.value = "";
            document.MAINFORM.BENE_FAX.value = "";
            document.MAINFORM.BENE_EMAIL.value = "";
            document.MAINFORM.BENE_ADD1.value = "";
            document.MAINFORM.BENE_ADD2.value = "";
            document.MAINFORM.BENE_ADD3.value = "";
            document.MAINFORM.BENE_CORR_MED.value = "";
            document.MAINFORM.BENE_CNTY_CD.value = "";
        }
        if (document.MAINFORM.BENE_CUST_BK.value == "Bank") {
            document.MAINFORM.BENE_ID_BTN.value = "BANK";
            document.MAINFORM.BENE_ID.value = ""; // Utility Auto Fix Comments
            document.MAINFORM.BENE_REF.value = "";
            document.MAINFORM.BENE_NOTES.value = "";
            document.MAINFORM.BENE_NM.value = "";
            document.MAINFORM.BENE_MAIL_ADD.value = "";
            document.MAINFORM.BENE_SW_ADD.value = "";
            document.MAINFORM.BENE_SW_TAG.value = "";
            document.MAINFORM.BENE_FAX.value = "";
            document.MAINFORM.BENE_EMAIL.value = "";
            document.MAINFORM.BENE_ADD1.value = "";
            document.MAINFORM.BENE_ADD2.value = "";
            document.MAINFORM.BENE_ADD3.value = "";
            document.MAINFORM.BENE_CORR_MED.value = "";
            document.MAINFORM.BENE_CNTY_CD.value = "";
        }
        SYM_GTEE_MPO_BENE_CORR_MED();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_Clear_Bene", e);
    }
}

function SYM_GTEE_Cal_Clear_Bene_ID() {
    try {
        if (document.MAINFORM.BENE_ID.value == "") {
            document.MAINFORM.BENE_REF.value = "";
            document.MAINFORM.BENE_NOTES.value = "";
            document.MAINFORM.BENE_NM.value = "";
            document.MAINFORM.BENE_MAIL_ADD.value = "";
            document.MAINFORM.BENE_SW_ADD.value = "";
            document.MAINFORM.BENE_SW_TAG.value = "";
            document.MAINFORM.BENE_FAX.value = "";
            document.MAINFORM.BENE_EMAIL.value = "";
            document.MAINFORM.BENE_ADD1.value = "";
            document.MAINFORM.BENE_ADD2.value = "";
            document.MAINFORM.BENE_ADD3.value = "";
            document.MAINFORM.BENE_CORR_MED.value = "";
            SYM_GTEE_MPO_BENE_CORR_MED();
            SYM_GTEE_Cal_ADD_BUTTON();
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_Clear_Bene_ID", e);
    }
}

function SYM_GTEE_Cal_Clear_Indemn() {
    try {
        if (document.MAINFORM.DOCS_PRESENTED_BY.value == "Customer") {
            document.MAINFORM.INDEMN_ID_BTN.value = "CUST";
            document.MAINFORM.INDEMN_ID.value = "";
            document.MAINFORM.INDEMN_REF.value = "";
            document.MAINFORM.INDEMN_NOTES.value = "";
            document.MAINFORM.INDEMN_NM.value = "";
            document.MAINFORM.INDEMN_MAIL_ADD.value = "";
            document.MAINFORM.INDEMN_SW_ADD.value = "";
            document.MAINFORM.INDEMN_SW_TAG.value = "";
            document.MAINFORM.INDEMN_FAX.value = "";
            document.MAINFORM.INDEMN_EMAIL.value = "";
            document.MAINFORM.INDEMN_ADD1.value = "";
            document.MAINFORM.INDEMN_ADD2.value = "";
            document.MAINFORM.INDEMN_ADD3.value = "";
            document.MAINFORM.INDEMN_CORR_MED.value = "";
        }
        if (document.MAINFORM.DOCS_PRESENTED_BY.value == "") {
            document.MAINFORM.INDEMN_ID.value = "";
            document.MAINFORM.INDEMN_REF.value = "";
            document.MAINFORM.INDEMN_NOTES.value = "";
            document.MAINFORM.INDEMN_NM.value = "";
            document.MAINFORM.INDEMN_MAIL_ADD.value = "";
            document.MAINFORM.INDEMN_SW_ADD.value = "";
            document.MAINFORM.INDEMN_SW_TAG.value = "";
            document.MAINFORM.INDEMN_FAX.value = "";
            document.MAINFORM.INDEMN_EMAIL.value = "";
            document.MAINFORM.INDEMN_ADD1.value = "";
            document.MAINFORM.INDEMN_ADD2.value = "";
            document.MAINFORM.INDEMN_ADD3.value = "";
            document.MAINFORM.INDEMN_CORR_MED.value = "";
        }
        if (document.MAINFORM.DOCS_PRESENTED_BY.value == "Bank") {
            document.MAINFORM.INDEMN_ID_BTN.value = "BANK";
            document.MAINFORM.INDEMN_ID.value = ""; // Utility Auto Fix Comments
            document.MAINFORM.INDEMN_REF.value = "";
            document.MAINFORM.INDEMN_NOTES.value = "";
            document.MAINFORM.INDEMN_NM.value = "";
            document.MAINFORM.INDEMN_MAIL_ADD.value = "";
            document.MAINFORM.INDEMN_SW_TAG.value = "";
            document.MAINFORM.INDEMN_SW_ADD.value = "";
            document.MAINFORM.INDEMN_FAX.value = "";
            document.MAINFORM.INDEMN_EMAIL.value = "";
            document.MAINFORM.INDEMN_ADD1.value = "";
            document.MAINFORM.INDEMN_ADD2.value = "";
            document.MAINFORM.INDEMN_ADD3.value = "";
            document.MAINFORM.INDEMN_CORR_MED.value = "";
        }
        SYM_GTEE_MPO_INDEMN_CORR_MED();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_Clear_Indemn", e);
    }
}

function SYM_GTEE_Cal_Clear_Indemn_ID() {
    try {
        if (document.MAINFORM.INDEMN_ID.value == "") {
            document.MAINFORM.INDEMN_ADD1.value = "";
            document.MAINFORM.INDEMN_ADD2.value = "";
            document.MAINFORM.INDEMN_ADD3.value = "";
            document.MAINFORM.INDEMN_CORR_MED.value = "";
            document.MAINFORM.INDEMN_EMAIL.value = "";
            document.MAINFORM.INDEMN_FAX.value = "";
            document.MAINFORM.INDEMN_SW_ADD.value = "";
            document.MAINFORM.SEND_TO_SW_TAG.value = "";
            document.MAINFORM.INDEMN_MAIL_ADD.value = "";
            document.MAINFORM.INDEMN_NM.value = "";
            document.MAINFORM.INDEMN_NOTES.value = "";
            document.MAINFORM.INDEMN_REF.value = "";
            SYM_GTEE_MPO_INDEMN_CORR_MED();
            SYM_GTEE_Cal_ADD_BUTTON();
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_Clear_Indemn_ID", e);
    }
}

function SYM_GTEE_Cal_Clear_Send() {
    try {
        if (document.MAINFORM.SEND_TO.value == "Customer") {
            document.MAINFORM.SEND_TO_ID_BTN.value = "CUST";
            document.MAINFORM.SEND_TO_ID.value = "";
            document.MAINFORM.SEND_TO_REF.value = "";
            document.MAINFORM.SEND_TO_NOTES.value = "";
            document.MAINFORM.SEND_TO_NM.value = "";
            document.MAINFORM.SEND_TO_MAIL_ADD.value = "";
            document.MAINFORM.SEND_TO_SW_ADD.value = "";
            document.MAINFORM.SEND_TO_SW_TAG.value = "";
            document.MAINFORM.SEND_TO_FAX.value = "";
            document.MAINFORM.SEND_TO_EMAIL.value = "";
            document.MAINFORM.SEND_TO_ADD1.value = "";
            document.MAINFORM.SEND_TO_ADD2.value = "";
            document.MAINFORM.SEND_TO_ADD3.value = "";
            document.MAINFORM.SEND_TO_CORR_MED.value = "";
            document.MAINFORM.SEND_TO_CNTY_CD.value = "";
        }
        if (document.MAINFORM.SEND_TO.value == "") {
            document.MAINFORM.SEND_TO_ID.value = "";
            document.MAINFORM.SEND_TO_REF.value = "";
            document.MAINFORM.SEND_TO_NOTES.value = "";
            document.MAINFORM.SEND_TO_NM.value = "";
            document.MAINFORM.SEND_TO_MAIL_ADD.value = "";
            document.MAINFORM.SEND_TO_SW_ADD.value = "";
            document.MAINFORM.SEND_TO_SW_TAG.value = "";
            document.MAINFORM.SEND_TO_FAX.value = "";
            document.MAINFORM.SEND_TO_EMAIL.value = "";
            document.MAINFORM.SEND_TO_ADD1.value = "";
            document.MAINFORM.SEND_TO_ADD2.value = "";
            document.MAINFORM.SEND_TO_ADD3.value = "";
            document.MAINFORM.SEND_TO_CORR_MED.value = "";
            document.MAINFORM.SEND_TO_CNTY_CD.value = "";
        }
        if (document.MAINFORM.SEND_TO.value == "Bank") {
            document.MAINFORM.SEND_TO_ID_BTN.value = "BANK";
            document.MAINFORM.SEND_TO_ID.value = "";
            document.MAINFORM.SEND_TO_REF.value = "";
            document.MAINFORM.SEND_TO_NOTES.value = "";
            document.MAINFORM.SEND_TO_NM.value = "";
            document.MAINFORM.SEND_TO_MAIL_ADD.value = "";
            document.MAINFORM.SEND_TO_SW_ADD.value = "";
            document.MAINFORM.SEND_TO_SW_TAG.value = "";
            document.MAINFORM.SEND_TO_FAX.value = "";
            document.MAINFORM.SEND_TO_EMAIL.value = "";
            document.MAINFORM.SEND_TO_ADD1.value = "";
            document.MAINFORM.SEND_TO_ADD2.value = "";
            document.MAINFORM.SEND_TO_ADD3.value = "";
            document.MAINFORM.SEND_TO_CORR_MED.value = "";
            document.MAINFORM.SEND_TO_CNTY_CD.value = "";
        }
        SYM_GTEE_MPO_SEND_TO_CORR_MED();
        SYM_GTEE_Cal_ADD_BUTTON();
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_Clear_Send", e);
    }
}

function SYM_GTEE_Cal_Clear_Send_ID() {
    try {
        if (document.MAINFORM.SEND_TO_ID.value == "") {
            document.MAINFORM.SEND_TO_ADD1.value = "";
            document.MAINFORM.SEND_TO_ADD2.value = "";
            document.MAINFORM.SEND_TO_ADD3.value = "";
            document.MAINFORM.SEND_TO_EMAIL.value = "";
            document.MAINFORM.SEND_TO_FAX.value = "";
            document.MAINFORM.SEND_TO_SW_ADD.value = "";
            document.MAINFORM.SEND_TO_SW_TAG.value = "";
            document.MAINFORM.SEND_TO_MAIL_ADD.value = "";
            document.MAINFORM.SEND_TO_NM.value = "";
            document.MAINFORM.SEND_TO_NOTES.value = "";
            document.MAINFORM.SEND_TO_REF.value = "";
            document.MAINFORM.SEND_TO_CORR_MED.value = "";
            document.MAINFORM.SEND_TO_CNTY_CD.value = "";
            SYM_GTEE_MPO_SEND_TO_CORR_MED();
            SYM_GTEE_Cal_ADD_BUTTON();
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_Clear_Send_ID", e);
    }
}

function SYM_GTEE_Cal_FXD_EXPIRY() {
    try {
        if (document.MAINFORM.AUTO_RENEW.value == 'Open Ended') {
            document.MAINFORM.FXD_EXPIRY.value = 'Review';
            //SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT,'O');
            SYT_ChangeFldClass(document.MAINFORM.MATURITY_DT, 'O');
        } else {
            document.MAINFORM.FXD_EXPIRY.value = 'Expiry';
            //SYT_ChangeFldClass(document.MAINFORM.EXPIRY_DT,'M');
            SYT_ChangeFldClass(document.MAINFORM.MATURITY_DT, 'M');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_FXD_EXPIRY", e);
    }
}

function SYM_GTEE_Cal_GTEE_TYPE2() {
    try {
        if (document.MAINFORM.GTEE_TYPE.value == "Standby") {
            document.MAINFORM.GTEE_TYPE2.value = "";
            SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE2, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.GTEE_TYPE2, 'M');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_GTEE_TYPE2", e);
    }
}

function SYM_GTEE_Cal_INC_AMT_DEC_AMT() {
    try {
        var DEC_AMT; // Utility Auto Fix Comments
        var GTEE_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var NEW_GTEE_AMT; // Utility Auto Fix Comments
        GTEE_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        NEW_GTEE_AMT = SYS_BeFloat(document.MAINFORM.NEW_GTEE_AMT.value);
        DEC_AMT = 0;
        INC_AMT = 0;
        if (NEW_GTEE_AMT != 0) {
            if (GTEE_AMT >= NEW_GTEE_AMT) {
                DEC_AMT = GTEE_AMT - NEW_GTEE_AMT;
                INC_AMT = 0;
            } else {
                INC_AMT = NEW_GTEE_AMT - GTEE_AMT;
                DEC_AMT = 0;
            }
        }
        document.MAINFORM.DEC_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, DEC_AMT);
        document.MAINFORM.INC_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, INC_AMT);
        // for Calculation New Guarantee Balance
        document.MAINFORM.LIAB_TRXCCY_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.NEW_GTEE_AMT.value);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_INC_AMT_DEC_AMT", e);
    }
}

function SYM_GTEE_Cal_INC_AMT_DEC_AMT_LOCAL() {
    try {
        var DEC_AMT_LOCAL;
        var GTEE_AMT_LOCAL;
        var INC_AMT_LOCAL;
        var NEW_GTEE_AMT_LOCAL;
        GTEE_AMT_LOCAL = SYS_BeFloat(document.MAINFORM.GTEE_AMT_LOCAL.value);
        NEW_GTEE_AMT_LOCAL = SYS_BeFloat(document.MAINFORM.NEW_GTEE_AMT_LOCAL.value);
        DEC_AMT_LOCAL = 0;
        INC_AMT_LOCAL = 0;
        if (NEW_GTEE_AMT_LOCAL != 0) {
            if (GTEE_AMT_LOCAL >= NEW_GTEE_AMT_LOCAL) {
                DEC_AMT_LOCAL = GTEE_AMT_LOCAL - NEW_GTEE_AMT_LOCAL;
                INC_AMT_LOCAL = 0;
            } else {
                INC_AMT_LOCAL = NEW_GTEE_AMT_LOCAL - GTEE_AMT_LOCAL;
                DEC_AMT_LOCAL = 0;
            }
        }
        document.MAINFORM.DEC_AMT_LOCAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY_LOCAL.value, DEC_AMT_LOCAL);
        document.MAINFORM.INC_AMT_LOCAL.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY_LOCAL.value, INC_AMT_LOCAL);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_INC_AMT_DEC_AMT_LOCAL", e);
    }
}

function SYM_GTEE_Cal_INDEMN_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.INDEMN_ID_BTN.value = "BANK";
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('INDEMN_ID_BANK', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_INDEMN_BANK", e);
    }
}

function SYM_GTEE_Cal_INDEMN_BANK_ADD() {
    try {
        SYS_InqCUBK_byCondition('INDEMN_BANK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_INDEMN_BANK_ADD", e);
    }
}

function SYM_GTEE_Cal_INDEMN_BANK_ORDERNO() {
    try {
        var INDEMN_BANK_ORDERNO; // Utility Auto Fix Comments
        var INDEMN_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //INDEMN_BANK_ORDERNO = document.MAINFORM.INDEMN_BANK_ADD_ORDERNO.value;
        //INDEMN_ID = document.MAINFORM.INDEMN_ID.value;
        //sSQLWhere = "ORDER_NO = " + INDEMN_BANK_ORDERNO + " AND C_MAIN_REF = '" + INDEMN_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "INDEMN_NM;INDEMN_ADD1;INDEMN_ADD2;INDEMN_ADD3";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_INDEMN_BANK_ORDERNO_4', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_INDEMN_BANK_ORDERNO", e);
    }
}

function SYM_GTEE_Cal_INDEMN_BANK_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('INDEMN_BANK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_INDEMN_BANK_POST_ADD", e);
    }
}

function SYM_GTEE_Cal_INDEMN_BANK_POST_ORDERNO() {
    try {
        var INDEMN_BANK_POST_ORDERNO; // Utility Auto Fix Comments
        var INDEMN_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //INDEMN_BANK_POST_ORDERNO = document.MAINFORM.INDEMN_BANK_MAIL_ADD_ORDERNO.value;
        //INDEMN_ID = document.MAINFORM.INDEMN_ID.value;
        //sSQLWhere = "ORDER_NO = " + INDEMN_BANK_POST_ORDERNO + " AND C_MAIN_REF = '" + INDEMN_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "INDEMN_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_INDEMN_BANK_POST_ORDERNO_5', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_INDEMN_BANK_POST_ORDERNO", e);
    }
}

function SYM_GTEE_Cal_INDEMN_BK_SW_ADD() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.INDEMN_SW_ADD.value.length == 11 || document.MAINFORM.INDEMN_SW_ADD.value.length == 8) {
            if (document.MAINFORM.INDEMN_SW_ADD.value.length == 8) {
                document.MAINFORM.INDEMN_SW_ADD.value = document.MAINFORM.INDEMN_SW_ADD.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.INDEMN_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "INDEMN_ID";
            if (document.MAINFORM.INDEMN_ID.value == '') {
                SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_INDEMN_BK_SW_ADD_10', '1', true);
            }
            if (document.MAINFORM.INDEMN_ID.value != '') {
                SYS_GetCUBK('INDEMN_ID_BANK', 'INDEMN_ID', 'SYM_GTEE_Cal_ADD_BUTTON');
            }
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'O');
            document.MAINFORM.DOCS_PRESENTED_BY.value = "Bank";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_INDEMN_BK_SW_ADD", e);
    }
}

function SYM_GTEE_Cal_INDEMN_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.INDEMN_ID_BTN.value = "CUST";
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('INDEMN_ID_CUST', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_INDEMN_CUST", e);
    }
}

function SYM_GTEE_Cal_INDEMN_SW_TAG() {
    try {
        if (document.MAINFORM.INDEMN_SW_ADD.value != "") {
            document.MAINFORM.INDEMN_SW_TAG.value = "A";
        } else {
            if (document.MAINFORM.INDEMN_NM.value == "" && document.MAINFORM.INDEMN_ADD1.value == "" && document.MAINFORM.INDEMN_ADD2.value == "" && document.MAINFORM.INDEMN_ADD3.value == "") {
                document.MAINFORM.INDEMN_SW_TAG.value = "";
            } else {
                document.MAINFORM.INDEMN_SW_TAG.value = "D";
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_INDEMN_SW_TAG", e);
    }
}

function SYM_GTEE_Cal_LIAB_AMT() {
    try {
        document.MAINFORM.LIAB_TRXCCY_AMT.value = document.MAINFORM.GTEE_AMT.value;
        //document.MAINFORM.LIAB_LCY_AMT.value=document.MAINFORM.GTEE_LCY_AMT.value;
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_LIAB_AMT", e);
    }
}

function SYM_GTEE_Cal_LIAB_TRXCCY_AMT() {
    try {
        var DEC_AMT; // Utility Auto Fix Comments
        var GTEE_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var LIAB_TRXCCY_AMT; // Utility Auto Fix Comments
        if (document.MAINFORM.ACPT_REJ.value == "Apply") {
            GTEE_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
            DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
            INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
            LIAB_TRXCCY_AMT = SYS_BeFloat(document.MAINFORM.LIAB_TRXCCY_AMT.value);
            LIAB_TRXCCY_AMT = GTEE_AMT + INC_AMT - DEC_AMT;
            document.MAINFORM.LIAB_TRXCCY_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, LIAB_TRXCCY_AMT);
        } else {
            document.MAINFORM.LIAB_TRXCCY_AMT.value = document.MAINFORM.TEMP_LIAB_TRXCCY_AMT.value;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_LIAB_TRXCCY_AMT", e);
    }
}

function SYM_GTEE_Cal_LIAB_TRXCCY_AMT_ISSUE() {
    try {
        document.MAINFORM.LIAB_TRXCCY_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.GTEE_AMT.value);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_LIAB_TRXCCY_AMT_ISSUE", e);
    }
}

function SYM_GTEE_Cal_LIAB_TRXCCY_AMT_SETTCLAIM() {
    try {
        var CLM_TRX_CCY_AMT; // Utility Auto Fix Comments
        var GTEE_AMT; // Utility Auto Fix Comments
        CLM_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        GTEE_AMT = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);

        document.MAINFORM.LIAB_TRXCCY_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, GTEE_AMT - CLM_TRX_CCY_AMT);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_LIAB_TRXCCY_AMT_SETTCLAIM", e);
    }
}

function SYM_GTEE_Cal_MATURITY_DT() {
    try {
        if (SYS_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'Process767763' || SYS_ORG_FUNCTION_NAME == 'Process783' || SYS_ORG_FUNCTION_NAME == 'AmendGuaranteeFrCoE') {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.NEW_EXPIRY_DT.value, 21, 'SYM_GTEE_Cal_MATURITY_DT_DT', 'A', 'N', 'Y');
        } else {
            if (document.MAINFORM.EXPIRY_DT.value != "") {
                SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.EXPIRY_DT.value, 21, 'SYM_GTEE_Cal_MATURITY_DT_DT', 'A', 'N', 'Y');
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_MATURITY_DT", e);
    }
}

function SYM_GTEE_Cal_MATURITY_DT_DT(MATURITY) {
    try {
        document.MAINFORM.MATURITY_DT.value = MATURITY;
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_MATURITY_DT_DT", e);
    }
}

function SYM_GTEE_Cal_NXT_COMM_DT() {
    try {
        var Fist_D; // Utility Auto Fix Comments
        var Fist_M; // Utility Auto Fix Comments
        var Fist_Y; // Utility Auto Fix Comments
        var Last_D; // Utility Auto Fix Comments
        var Last_M; // Utility Auto Fix Comments
        var Last_Y; // Utility Auto Fix Comments
        var _yyy; // Utility Auto Fix Comments
        var day; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var new_dt_month; // Utility Auto Fix Comments
        var new_dt_year; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        var unit_code;
        if (SYS_DATE_FORMAT == "" || SYS_DATE_FORMAT == null || SYS_DATE_FORMAT == "undefined") {
            return;
        }
        unit_code = SYS_ORI_UNIT_CODE;
        Fist_Y = SYS_DATE_FORMAT.toLowerCase().indexOf('y');
        Last_Y = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('y');
        Fist_M = SYS_DATE_FORMAT.toLowerCase().indexOf('m');
        Last_M = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('m');
        Fist_D = SYS_DATE_FORMAT.toLowerCase().indexOf('d');
        Last_D = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('d');
        _yyy = SYS_DATE_FORMAT.substr(Last_M + 1, 1).toString(); // Utility Auto Fix Comments
        if (document.MAINFORM.COMM_DT.value == '') {
            return;
        }
        year = parseFloat(document.MAINFORM.COMM_DT.value.substr(Fist_Y, Last_Y - Fist_Y + 1));
        month = parseFloat(document.MAINFORM.COMM_DT.value.substr(Fist_M, Last_M - Fist_M + 1));
        day = document.MAINFORM.COMM_DT.value.substr(Fist_D, Last_D - Fist_D + 1);
        new_dt_year = year;
        new_dt_month = month;
        if (document.MAINFORM.CHG_POLICY.value == 'Monthly') {
            new_dt_month = month + 1;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }
        if (document.MAINFORM.CHG_POLICY.value == 'Quarterly') {
            new_dt_month = month + 3;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }
        if (document.MAINFORM.CHG_POLICY.value == 'Half yearly') {
            new_dt_month = month + 6;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }
        if (document.MAINFORM.CHG_POLICY.value == 'Yearly') {
            new_dt_year = year + 1;
        }
        if (new_dt_month < 10) {
            new_dt_month = '0' + new_dt_month.toString();
        }
        if (Fist_Y < Fist_M) {
            if (Fist_M < Fist_D) {
                document.MAINFORM.NXT_COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
            }
        } else {
            if (Fist_M < Fist_D) {
                document.MAINFORM.NXT_COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            } else {
                document.MAINFORM.NXT_COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            }
        }
        if (document.MAINFORM.CHG_POLICY.value == 'Weekly') {
            SYS_CalEndWorkingDate_S(unit_code, document.MAINFORM.COMM_DT.value, '7', document.MAINFORM.NXT_COMM_DT.name, 'A', 'N', 'N');
        }
        if (document.MAINFORM.CHG_POLICY.value == 'Part in Advance') {
            document.MAINFORM.NXT_COMM_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_NXT_COMM_DT", e);
    }
}

function SYM_GTEE_Cal_ORDER_CUST_ADD() {
    try {
        SYS_InqCUBK_byCondition('ORDER_CUST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_ORDER_CUST_ADD", e);
    }
}

function SYM_GTEE_Cal_ORDER_CUST_ORDERNO() {
    try {
        var ORDER_CUST_ORDERNO; // Utility Auto Fix Comments
        var ORDER_INST_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ORDER_CUST_ORDERNO = document.MAINFORM.ORDER_CUST_ADD_ORDERNO.value;
        //ORDER_INST_ID = document.MAINFORM.ORDER_INST_ID.value;
        //sSQLWhere = "ORDER_NO = " + ORDER_CUST_ORDERNO + " AND C_MAIN_REF = '" + ORDER_INST_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "ORDER_INST_NM;ORDER_INST_ADD1;ORDER_INST_ADD2;ORDER_INST_ADD3";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_ORDER_CUST_ORDERNO_13', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_ORDER_CUST_ORDERNO", e);
    }
}

function SYM_GTEE_Cal_ORDER_CUST_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('ORDER_CUST_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_ORDER_CUST_POST_ADD", e);
    }
}

function SYM_GTEE_Cal_ORDER_CUST_POST_ORDERNO() {
    try {
        var ORDER_CUST_POST_ORDERNO; // Utility Auto Fix Comments
        var ORDER_INST_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //ORDER_CUST_POST_ORDERNO = document.MAINFORM.ORDER_CUST_MAIL_ADD_ORDERNO.value;
        //ORDER_INST_ID = document.MAINFORM.ORDER_INST_ID.value;
        //sSQLWhere = "ORDER_NO = " + ORDER_CUST_POST_ORDERNO + " AND C_MAIN_REF = '" + ORDER_INST_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "ORDER_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_ORDER_CUST_POST_ORDERNO_12', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_ORDER_CUST_POST_ORDERNO", e);
    }
}

function SYM_GTEE_Cal_ORDER_INST_ID() {
    try {
        if (document.MAINFORM.ORDER_INST_ID.value == '') {
            SYM_GTEE_Cal_clear_OrderingCustomer();
            SYT_ChangeFldClass(document.MAINFORM.ORDER_ADD1_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_MAIL_ADD1_BTN, 'P');
        } else {
            SYS_GetCUBK('ORDER_INST_ID', document.MAINFORM.ORDER_INST_ID.name);
            SYT_ChangeFldClass(document.MAINFORM.ORDER_ADD1_BTN, 'M');
            SYT_ChangeFldClass(document.MAINFORM.ORDER_MAIL_ADD1_BTN, 'M');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_ORDER_INST_ID", e);
    }
}

function SYM_GTEE_Cal_RISK_DIV() {
    try {
        if (document.MAINFORM.COUNTR_GTEE.value == "No") {
            SYT_DisableDivClass("G_div");
        } else {
            SYT_EnableDivClass("G_div");
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_RISK_DIV", e);
    }
}

function SYM_GTEE_Cal_RT_CASH_COV_LCY() {
    try {
        if (document.MAINFORM.CASH_COV_CCY.value == "" && document.MAINFORM.MRGN_CCY.value == "") {
            document.MAINFORM.RT_CASH_COV_LCY.value = "0.00";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_RT_CASH_COV_LCY", e);
    }
}

function SYM_GTEE_Cal_RV_PRODUCTCODE() {
    try {
        var vGTEE_TYPE; // Utility Auto Fix Comments
        //	   if(document.MAINFORM.GTEE_TYPE2 != null && document.MAINFORM.GTEE_TYPE != null){
        //    		vGTEE_TYPE = document.MAINFORM.GTEE_TYPE.value;
        //    	   	if(document.MAINFORM.GTEE_TYPE2.value == "abstract guarantee"){
        //    			switch(vGTEE_TYPE){
        //    			case "bid bond":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08300';
        //    				break;
        //    			case "advance payment guarantee":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08400';
        //    				break;
        //    			case "performance guarantee":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08300';
        //    				break;
        //    			case "guarantee securing credit line":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08600';
        //    				break;
        //    			case "payment guarantee":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08500';
        //    				break;
        //    			case "guarantee securing rent":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08500';
        //    				break;
        //    			case "guarantee for court":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08500';
        //    				break;
        //    			case "guarantee for credit cards":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08500';
        //    				break;
        //    			case "letter of indemnity for missing documents":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08500';
        //    				break;
        //    			case "construction guarantee for projects in Switzerland":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08200';
        //    				break;
        //    			case "construction guarantee for projects outside of Switzerland":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08210';
        //    				break;
        //    			case "Standby":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '';
        //    				break;
        //        		         }
        //    		}
        //    		else{
        //    			switch(vGTEE_TYPE){
        //    			case "bid bond":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08300';
        //    				break;
        //    			case "advance payment guarantee":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08400';
        //    				break;
        //    			case "performance guarantee":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08300';
        //    				break;
        //    			case "guarantee securing credit line":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08600';
        //    				break;
        //    			case "payment guarantee":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08500';
        //    				break;
        //    			case "guarantee securing rent":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08500';
        //    				break;
        //    			case "guarantee for court":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08500';
        //    				break;
        //    			case "guarantee for credit cards":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08500';
        //    				break;
        //    			case "letter of indemnity for missing documents":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08500';
        //    				break;
        //    			case "construction guarantee for projects in Switzerland":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08200';
        //    				break;
        //    			case "construction guarantee for projects outside of Switzerland":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '08210';
        //    				break;
        //    			case "Standby":
        //    				document.MAINFORM.RV_PRODUCTCODE.value = '';
        //    				break;
        //        		         }
        //    		}
        //    	   }
        //    
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_RV_PRODUCTCODE", e);
    }
}

function SYM_GTEE_Cal_RV_TRXTYPE() {
    try {
        SYT_Cal_C_TRANS_CODE();

        document.MAINFORM.RV_TRXTYPE.value = document.MAINFORM.C_TRANS_CODE.value;
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_RV_TRXTYPE", e);
    }
}

function SYM_GTEE_Cal_Risk_DT_VALUE(risk) {
    try {
        document.MAINFORM.RISK_DT.value = risk;
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_Risk_DT_VALUE", e);
    }
}

function SYM_GTEE_Cal_SEND_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.SEND_TO_ID_BTN.value = "BANK";
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('SEND_TO_BANK', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_SEND_BANK", e);
    }
}

function SYM_GTEE_Cal_SEND_BK_SW_ADD() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.SEND_TO_SW_ADD.value.length == 11 || document.MAINFORM.SEND_TO_SW_ADD.value.length == 8) {
            if (document.MAINFORM.SEND_TO_SW_ADD.value.length == 8) {
                document.MAINFORM.SEND_TO_SW_ADD.value = document.MAINFORM.SEND_TO_SW_ADD.value + 'XXX';
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.SEND_TO_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "SEND_TO_ID";
            if (document.MAINFORM.SEND_TO_ID.value == '') {
                SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_SEND_BK_SW_ADD_11', '1', true);
            }
            if (document.MAINFORM.SEND_TO_ID.value != '') {
                SYS_GetCUBK('SEND_TO_BANK', 'SEND_TO_ID', 'SYM_GTEE_Cal_ADD_BUTTON');
            }

            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FAX, 'O');
            document.MAINFORM.SEND_TO.value = "Bank";

        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_SEND_BK_SW_ADD", e);
    }
}

function SYM_GTEE_Cal_SEND_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        document.MAINFORM.SEND_TO_ID_BTN.value = "CUST";
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('SEND_TO_CUST', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_SEND_CUST", e);
    }
}

function SYM_GTEE_Cal_SEND_TO() {
    try {
        if (document.MAINFORM.SEND_TO_ID.value == "") {
            document.MAINFORM.SEND_TO_ADD1.value = "";
            document.MAINFORM.SEND_TO_ADD2.value = "";
            document.MAINFORM.SEND_TO_ADD3.value = "";
            document.MAINFORM.SEND_TO_CNTY_CD.value = "";
            document.MAINFORM.SEND_TO_CNTY_NM.value = "";
            document.MAINFORM.SEND_TO_CORR_MED.value = "";
            document.MAINFORM.SEND_TO_EMAIL.value = "";
            document.MAINFORM.SEND_TO_FAX.value = "";
            document.MAINFORM.SEND_TO_MAIL_ADD.value = "";
            document.MAINFORM.SEND_TO_NM.value = "";
            document.MAINFORM.SEND_TO_REF.value = "";
            document.MAINFORM.SEND_TO_SW_ADD.value = "";
            document.MAINFORM.SEND_TO_SW_TAG.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_SEND_TO", e);
    }
}

function SYM_GTEE_Cal_SEND_TO_BANK_ADD() {
    try {
        SYS_InqCUBK_byCondition('SEND_TO_BANK_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_SEND_TO_BANK_ADD", e);
    }
}

function SYM_GTEE_Cal_SEND_TO_BANK_ORDERNO() {
    try {
        var SEND_TO_BANK_ORDERNO; // Utility Auto Fix Comments
        var SEND_TO_ID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //SEND_TO_BANK_ORDERNO = document.MAINFORM.SEND_TO_ADD_ORDERNO.value;
        //SEND_TO_ID = document.MAINFORM.SEND_TO_ID.value;
        //sSQLWhere = "ORDER_NO = " + SEND_TO_BANK_ORDERNO + " AND C_MAIN_REF = '" + SEND_TO_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "SEND_TO_NM;SEND_TO_ADD1;SEND_TO_ADD2;SEND_TO_ADD3";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_SEND_TO_BANK_ORDERNO_6', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_SEND_TO_BANK_ORDERNO", e);
    }
}

function SYM_GTEE_Cal_SEND_TO_BANK_POST_ADD() {
    try {
        SYS_InqCUBK_byCondition('SEND_TO_BANK_POST_ADD', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_SEND_TO_BANK_POST_ADD", e);
    }
}

function SYM_GTEE_Cal_SEND_TO_BANK_POST_ORDERNO() {
    try {
        var SEND_TO_ID; // Utility Auto Fix Comments
        var SEND_TO_MAIL_ADD_ORDERNO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //SEND_TO_MAIL_ADD_ORDERNO = document.MAINFORM.SEND_TO_MAIL_ADD_ORDERNO.value;
        //SEND_TO_ID = document.MAINFORM.SEND_TO_ID.value;
        //sSQLWhere = "ORDER_NO = " + SEND_TO_MAIL_ADD_ORDERNO + " AND C_MAIN_REF = '" + SEND_TO_ID + "'";
        //sTableName = "POST_ADD_DO";
        //sFieldList = "POSTAL_FMT_ADD";
        //sMappingList = "SEND_TO_MAIL_ADD";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Cal_SEND_TO_BANK_POST_ORDERNO_7', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_SEND_TO_BANK_POST_ORDERNO", e);
    }
}

function SYM_GTEE_Cal_SEND_TO_SW_TAG() {
    try {
        if (document.MAINFORM.SEND_TO_SW_ADD.value != "") {
            document.MAINFORM.SEND_TO_SW_TAG.value = "A";
        } else {
            if (document.MAINFORM.SEND_TO_NM.value == "" && document.MAINFORM.SEND_TO_ADD1.value == "" && document.MAINFORM.SEND_TO_ADD2.value == "" && document.MAINFORM.SEND_TO_ADD3.value == "") {
                document.MAINFORM.SEND_TO_SW_TAG.value = "";
            } else {
                document.MAINFORM.SEND_TO_SW_TAG.value = "D";
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_SEND_TO_SW_TAG", e);
    }
}

function SYM_GTEE_Cal_SND_TO_RCVR_INFO() {
    try {
        if (document.MAINFORM.ISSUE_BY.value == 'Mail') {
            switch (document.MAINFORM.MTHD_OF_ISS.value) {
                case 'Issued by us':
                    document.MAINFORM.SEND_TO_RCV_INFO.value = "WE CONFIRM HAVING ISSUED THE ABOVE MENTIONED GUARANTEE";
                    break;
                case 'Issued by our branch':
                    document.MAINFORM.SEND_TO_RCV_INFO.value = "WE CONFIRM HAVING PASSED YOUR GUARANTEE ONTO THE BENEFICIARY, UNDER NO RESPONSIBILITY ON OUR PART";
                    break;
                case 'Issued by a correspondent bank':
                    document.MAINFORM.SEND_TO_RCV_INFO.value = "WE CONFIRM HAVING ISSUED THE ABOVE MENTIONED GUARANTEE ON YOUR BEHALF";
                    break;
            }
        } else {
            document.MAINFORM.SEND_TO_RCV_INFO.value = ''; // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_SND_TO_RCVR_INFO", e);
    }
}

function SYM_GTEE_Cal_SW_FORM_ISSUE_AMD_BY() {
    try {
        if (document.MAINFORM.ISSUE_BY.value == 'Mail') {
            document.MAINFORM.SW_FORM.value = 'Mail';
        } else if (document.MAINFORM.ISSUE_BY.value == 'Telex') {
            document.MAINFORM.SW_FORM.value = 'Telex';
        } else {
            document.MAINFORM.SW_FORM.value = 'MT760';
        }
        EEHtml.fireEvent(document.MAINFORM.SW_FORM, "onchange");
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_SW_FORM_ISSUE_AMD_BY", e);
    }
}

function SYM_GTEE_Cal_TEMP_LIAB_ACNO() {
    try {
        //Add by jane at 20101109 for liability account 
        document.MAINFORM.TEMP_ASSET_ACNO.value = document.MAINFORM.ASSET_ACNO.value;
        document.MAINFORM.TEMP_LIAB_ACNO.value = document.MAINFORM.LIAB_ACNO.value;
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_TEMP_LIAB_ACNO", e);
    }
}

function SYM_GTEE_Cal_TEMP_MATURITY_DT() {
    try {
        if (document.MAINFORM.ACPT_REJ.value == 'Reject') {
            document.MAINFORM.MATURITY_DT.value = document.MAINFORM.TEMP_MATURITY_DT.value;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_TEMP_MATURITY_DT", e);
    }
}

function SYM_GTEE_Cal_TEMP_NEW_GTEE_AMT() {
    try {
        if (document.MAINFORM.ACPT_REJ.value == 'Apply') {
            document.MAINFORM.GTEE_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.NEW_GTEE_AMT.value);
        } else {
            document.MAINFORM.GTEE_AMT.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.TEMP_GTEE_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_TEMP_NEW_GTEE_AMT", e);
    }
}

function SYM_GTEE_Cal_TEMP_PART_AMT() {
    try {
        document.MAINFORM.TEMP_PART_AMT.value = document.MAINFORM.CLM_BK_CHG.value;
        EEHtml.fireEvent(document.MAINFORM.TEMP_PART_AMT, 'onchange');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_TEMP_PART_AMT", e);
    }
}

function SYM_GTEE_Cal_change_tab() {
    try {
        if (document.MAINFORM.SEPARATE_CHG_FLG.value == 'No') {
            document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, 'P');
            document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
            SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, 'P');
        } else {
            if (document.MAINFORM.SEPARATE_CHG_FLG.value == 'Yes') {
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_LOCAL_CUST_AC_NO, 'M');
                document.MAINFORM.CHG_FLD_ALL_CHARGE_AT.value = '0';
                SYT_ChangeFldClass(document.MAINFORM.CHG_FLD_COLLECT_CCY, 'M');
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_change_tab", e);
    }
}

function SYM_GTEE_Cal_clear_BENE_ID_PLF_ESCROW() {
    try {
        document.MAINFORM.BENE_ID.value = '';
        document.MAINFORM.BENE_FAX.value = '';
        document.MAINFORM.BENE_EMAIL.value = '';
        document.MAINFORM.BENE_NM.value = '';
        document.MAINFORM.BENE_ADD1.value = '';
        document.MAINFORM.BENE_ADD2.value = '';
        document.MAINFORM.BENE_ADD3.value = '';
        document.MAINFORM.BENE_SW_ADD.value = '';
        document.MAINFORM.BENE_MAIL_ADD.value = '';
        document.MAINFORM.BENE_REF.value = '';
        document.MAINFORM.BENE_NOTES.value = '';
        document.MAINFORM.BENE_AC_OFF_CODE.value = '';
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_clear_BENE_ID_PLF_ESCROW", e);
    }
}

function SYM_GTEE_Cal_clear_OrderingCustomer() {
    try {
        document.MAINFORM.ORDER_AC_OFF_CODE.value = '';
        document.MAINFORM.ORDER_EMAIL_ADD.value = '';
        document.MAINFORM.ORDER_FAX_NO.value = '';
        document.MAINFORM.ORDER_INST_AC_NO.value = '';
        document.MAINFORM.ORDER_INST_ADD1.value = '';
        document.MAINFORM.ORDER_INST_ADD2.value = '';
        document.MAINFORM.ORDER_INST_ADD3.value = '';
        document.MAINFORM.ORDER_INST_ID.value = '';
        document.MAINFORM.ORDER_INST_NM.value = '';
        document.MAINFORM.ORDER_MAIL_ADD.value = '';
        document.MAINFORM.ORDER_NOTES.value = '';
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Cal_clear_OrderingCustomer", e);
    }
}

function SYM_GTEE_Calculate_GTEE_ISS_COMM_NEW() {
    try {
        var DAY; // Utility Auto Fix Comments
        var Days; // Utility Auto Fix Comments
        var HALF_YEAR; // Utility Auto Fix Comments
        var HALF_YEAR_1; // Utility Auto Fix Comments
        var MONTH; // Utility Auto Fix Comments
        var QUARTER; // Utility Auto Fix Comments
        var QUARTER_1; // Utility Auto Fix Comments
        var TTLAMT; // Utility Auto Fix Comments
        var WEEK; // Utility Auto Fix Comments
        var WEEK_1; // Utility Auto Fix Comments
        var YEAR; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chgObj; // Utility Auto Fix Comments
        var chgamt; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var pertermamt; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        var terms; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM'];
        if (SYS_ORG_FUNCTION_NAME == 'RegisterOutward' || SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm' || SYS_ORG_FUNCTION_NAME == 'ReviewLCFromCE_NEW') {
            amt = document.MAINFORM.GTEE_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'OutwardApplyRejectAmendment') {
            amt = document.MAINFORM.NEW_GTEE_AMT.value;
        }
        ccy = document.MAINFORM.GTEE_CCY.value;
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;

        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, sDate, eDate, '', '', '');

        Days = SYS_GetSubDays(document.MAINFORM.COMM_START_DT.name, document.MAINFORM.COMM_END_DT.name);
        MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');
        chgObj = Chg.Screen.getTrxChargeByCommCode('GTEE_ISS_COMM');
        if (chgObj != '' && chgObj != null && chgObj != 'null' && chgObj != 'undefined') {
            chgamt = chgObj.getActiveAmt();
        }
        TTLAMT = chgamt;

        document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, TTLAMT);
        terms = document.MAINFORM.CHG_POLICY.value;
        pertermamt = 0;
        if (terms == 'Weekly') {
            DAY = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'D');
            WEEK = Math.round(DAY / 7);
            WEEK_1 = DAY % 3;

            if (WEEK_1 > 0) {
                WEEK += 1;
            }
            document.MAINFORM.PERIOD.value = WEEK;
            pertermamt = chgamt / WEEK;
        }
        if (terms == 'Monthly') {
            document.MAINFORM.PERIOD.value = MONTH;
            pertermamt = chgamt / MONTH;
        }
        if (terms == 'Quarterly') {
            QUARTER = Math.round(MONTH / 3);
            QUARTER_1 = MONTH % 3;

            if (QUARTER_1 > 0) {
                QUARTER += 1;
            }
            document.MAINFORM.PERIOD.value = QUARTER;
            pertermamt = chgamt / QUARTER;
        }
        if (terms == 'Half yearly') {
            HALF_YEAR = Math.round(MONTH / 6);
            HALF_YEAR_1 = MONTH % 6;

            if (HALF_YEAR_1 > 0) {
                HALF_YEAR += 1;
            }

            document.MAINFORM.PERIOD.value = HALF_YEAR;
            pertermamt = chgamt / HALF_YEAR;
        }
        if (terms == 'Yearly') {
            YEAR = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'Y');
            document.MAINFORM.PERIOD.value = YEAR;
            pertermamt = chgamt / YEAR;
        }
        pertermamt = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, pertermamt);
        document.MAINFORM.CURRENT_COMM_TEMP.value = pertermamt;

        if (chgObj != '' && chgObj != null && chgObj != 'null' && chgObj != 'undefined') {
            //chgObj.setActiveAmt(pertermamt);
            //            if (chgObj.getChargeAt() == '1') {
            //                chgObj.setBalAmt(pertermamt);
            //                chgObj.setPayAmt(0.00);
            //            } else if (chgObj.getChargeAt() == '0') {
            //                chgObj.setPayAmt(pertermamt);
            //                chgObj.setBalAmt(0.00);
            //            } else {
            //                chgObj.setPayAmt(0.00);
            //                chgObj.setBalAmt(0.00);
            //            }
            chgObj.setChargeValue(document.MAINFORM.GTEE_CCY.value, pertermamt);
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Calculate_GTEE_ISS_COMM_NEW", e);
    }
}

function SYM_GTEE_Check_APPL_BENE() {
    try {
        if (document.MAINFORM.APPL_NM.value == document.MAINFORM.BENE_NM.value) {
            alert('Applicant should not be as same as Beneficiary');
            return false;
        }
        //
        //    else if(document.MAINFORM.ASSET_ACNO.value == document.MAINFORM.LIAB_ACNO.value)
        //    {
        //             alert('Bank Liability Account should not be as same as Customer Liability Account');
        //    	return false;
        //    }
        //    
        else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Check_APPL_BENE", e);
    }
}

function SYM_GTEE_Check_CASH_COV_PCT() {
    try {
        var CASH_COV_HELD; // Utility Auto Fix Comments
        var CASH_COV_PCT; // Utility Auto Fix Comments
        CASH_COV_HELD = document.MAINFORM.CASH_COV_HELD.value;
        CASH_COV_PCT = SYS_BeFloat(document.MAINFORM.CASH_COV_PCT.value);

        if (CASH_COV_HELD == 'Part. cash cover' && CASH_COV_PCT >= 100) {
            SYS_CheckError(document.MAINFORM.CASH_COV_PCT, 'Cash Cover % should be less than 100%');
            document.MAINFORM.CASH_COV_PCT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Check_CASH_COV_PCT", e);
    }
}

function SYM_GTEE_Check_CLM_TRX_CCY_AMT() {
    try {
        var CLM_TRX_CCY_AMT; // Utility Auto Fix Comments
        var ORIGIN_GTEE_BAL; // Utility Auto Fix Comments
        ORIGIN_GTEE_BAL = SYS_BeFloat(document.MAINFORM.ORIGIN_GTEE_BAL.value);
        CLM_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        if (ORIGIN_GTEE_BAL - CLM_TRX_CCY_AMT < 0) {
            SYS_CheckError(document.MAINFORM.CLM_TRX_CCY_AMT, 'Claim Amount should not more than Guarantee new liability!');
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Check_CLM_TRX_CCY_AMT", e);
    }
}

function SYM_GTEE_Check_CLM_TRX_CCY_AMT2() {
    try {
        var CLM_TRX_CCY_AMT; // Utility Auto Fix Comments
        var ORIGIN_GTEE_BAL; // Utility Auto Fix Comments
        ORIGIN_GTEE_BAL = SYS_BeFloat(document.MAINFORM.LIAB_TRXCCY_AMT.value);
        CLM_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        if (ORIGIN_GTEE_BAL - CLM_TRX_CCY_AMT < 0) {
            SYS_CheckError(document.MAINFORM.CLM_TRX_CCY_AMT, 'Claim Amount should not more than Guarantee new liability!');
            document.MAINFORM.CLM_TRX_CCY_AMT.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Check_CLM_TRX_CCY_AMT2", e);
    }
}

function SYM_GTEE_Check_EXPIRY_DT() {
    try {
        if (document.MAINFORM.AUTO_RENEW.value == 'Fixed expiry' && SYS_GetSubDays(document.MAINFORM.VALID_FM_DT.name, document.MAINFORM.EXPIRY_DT.name) < 0) {
            alert("It's fixed expiry, Expiry date must be later than Guarantee Valid From");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Check_EXPIRY_DT", e);
    }
}

function SYM_GTEE_Check_EXPIRY_DT_ISSUE_DT() {
    try {
        var nDays; // Utility Auto Fix Comments
        if(document.MAINFORM.ISSUE_DT.value!=''&&document.MAINFORM.ISSUE_DT.value!=''&&document.MAINFORM.EXPIRY_DT.value!=''&&document.MAINFORM.EXPIRY_DT.value!=null){
        nDays = SYS_GetSubDays(document.MAINFORM.ISSUE_DT.name, document.MAINFORM.EXPIRY_DT.name);
        if (nDays <= 0) {
            alert('Expiry Date Must Be Later than Issue Date');
            //document.MAINFORM.EXPIRY_DT.value = '';
            return false;
        } else {
            return true;
        }
      }else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Check_EXPIRY_DT_ISSUE_DT", e);
    }
}

function SYM_GTEE_Chg_Calculate() {
    try {
        if (SYS_FUNCTION_TYPE != "EC") {
            if (document.MAINFORM.ISSUE_BY.value == 'SWIFT auth' || document.MAINFORM.ISSUE_BY.value == 'SWIFT non-auth') {
                SYM_GTEE_Chg_Calculate_SWIFT();

            }
            //
            //    else if (document.MAINFORM.ISSUE_BY.value=='Mail')
            //    {
            //    //	SYM_GTEE_Chg_Calculate_EMAIL();
            //    }
            //    
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate", e);
    }
}

function SYM_GTEE_Chg_Calculate_Amd_Comm() {
    try {
        var ACPT_REJ; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['GTEE_AMEND_COMM'];
        ACPT_REJ = document.MAINFORM.ACPT_REJ.value;
        if (ACPT_REJ == 'Apply') {
            amt = document.MAINFORM.INC_AMT.value;
        } else {
            amt = 0; // Utility Auto Fix Comments
        }
        ccy = document.MAINFORM.GTEE_CCY.value;
        Chg.calculate(arr, ccy, amt, '');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_Amd_Comm", e);
    }
}

function SYM_GTEE_Chg_Calculate_COURIER_CHG() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != "EC") {
            arr = ['GTEE_COURIER_CHG'];
            amt = document.MAINFORM.GTEE_AMT.value;
            ccy = document.MAINFORM.GTEE_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_COURIER_CHG", e);
    }
}

function SYM_GTEE_Chg_Calculate_EMAIL() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != "EC") {
            arr = ['MAIL_CHG'];
            amt = document.MAINFORM.GTEE_AMT.value;
            ccy = document.MAINFORM.GTEE_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_EMAIL", e);
    }
}

function SYM_GTEE_Chg_Calculate_ForeignBank() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != "EC") {
            arr = ['ForeignBank'];
            amt = document.MAINFORM.GTEE_AMT.value;
            ccy = document.MAINFORM.GTEE_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_ForeignBank", e);
    }
}

function SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM() {
    try {
        var amt;
        var arr;
        var ccy;
        var sDate;
        var eDate;
        arr = ['GTEE_ISS_COMM'];
        amt = document.MAINFORM.GTEE_AMT.value;
        ccy = document.MAINFORM.GTEE_CCY.value;
        sDate = SYS_BUSI_DATE;
        if (document.MAINFORM.EXPIRY_DT.value == '') {
            eDate = document.MAINFORM.MATURITY_DT.value;
        } else {
            eDate = document.MAINFORM.EXPIRY_DT.value;
        }
        Chg.calculate(arr, ccy, amt, sDate, eDate, '', '', '');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM", e);
    }
}

function SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM1() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM'];
        amt = document.MAINFORM.GTEE_AMT.value;
        ccy = document.MAINFORM.GTEE_CCY.value;
        sDate = document.MAINFORM.REG_DT.value;
        eDate = document.MAINFORM.EXPIRY_DT.value;

        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, sDate, eDate, '', '', '');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM1", e);
    }
}

function SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR() {
    try {
        var HALF_YEAR; // Utility Auto Fix Comments
        var HALF_YEAR_1; // Utility Auto Fix Comments
        var MONTH; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM_HALF_YEAR'];
        if (SYS_ORG_FUNCTION_NAME == 'RegisterOutward' || SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm' || SYS_ORG_FUNCTION_NAME == 'OWGT_IssueGTEEFrCE') {
            amt = document.MAINFORM.GTEE_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'OutwardApplyRejectAmendment') {
            amt = document.MAINFORM.NEW_GTEE_AMT.value;
        }
        ccy = document.MAINFORM.GTEE_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');

        HALF_YEAR = Math.round(MONTH / 6);
        HALF_YEAR_1 = MONTH % 6;

        if (HALF_YEAR_1 > 0) {
            HALF_YEAR += 1;
        }

        document.MAINFORM.PERIOD.value = HALF_YEAR;
        if (sDate == '' || eDate == '') {
            return;
        }

        Chg.calculate(arr, ccy, amt, '', '', '');

        aResult = Chg.callCalcService(ccy, amt, 'GTEE_ISS_COMM_HALF_YEAR', chargeFor, custID, 'USD', 'Booking Rate', '', '', '', '', '', HALF_YEAR, '');

        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_HALF_YEAR", e);
    }
}

function SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_MONTH() {
    try {
        var MONTH; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM_MONTH'];
        if (SYS_ORG_FUNCTION_NAME == 'RegisterOutward' || SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm' || SYS_ORG_FUNCTION_NAME == 'OWGT_IssueGTEEFrCE') {
            amt = document.MAINFORM.GTEE_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'OutwardApplyRejectAmendment') {
            amt = document.MAINFORM.NEW_GTEE_AMT.value;
        }
        ccy = document.MAINFORM.GTEE_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');
        document.MAINFORM.PERIOD.value = MONTH;
        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, '', '', '', '', '');
        aResult = Chg.callCalcService(ccy, amt, 'GTEE_ISS_COMM_MONTH', chargeFor, custID, 'USD', 'Booking Rate', sDate, eDate, '', '', '', MONTH, '');
        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_MONTH", e);
    }
}

function SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_QUARTER() {
    try {
        var MONTH; // Utility Auto Fix Comments
        var QUARTER; // Utility Auto Fix Comments
        var QUARTER_1; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM_QUARTER'];
        if (SYS_ORG_FUNCTION_NAME == 'RegisterOutward' || SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm' || SYS_ORG_FUNCTION_NAME == 'OWGT_IssueGTEEFrCE') {
            amt = document.MAINFORM.GTEE_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'OutwardApplyRejectAmendment') {
            amt = document.MAINFORM.NEW_GTEE_AMT.value;
        }
        ccy = document.MAINFORM.GTEE_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        MONTH = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'M');

        QUARTER = Math.round(MONTH / 3);
        QUARTER_1 = MONTH % 3;

        if (QUARTER_1 > 0) {
            QUARTER += 1;
        }

        document.MAINFORM.PERIOD.value = QUARTER;
        if (sDate == '' || eDate == '') {
            return;
        }

        Chg.calculate(arr, ccy, amt, '', '', '');

        aResult = Chg.callCalcService(ccy, amt, 'GTEE_ISS_COMM_QUARTER', chargeFor, custID, 'USD', 'Booking Rate', '', '', '', '', '', QUARTER, '');

        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_QUARTER", e);
    }
}

function SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_WEEK() {
    try {
        var DAY; // Utility Auto Fix Comments
        var WEEK; // Utility Auto Fix Comments
        var WEEK_1; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM_WEEK'];
        if (SYS_ORG_FUNCTION_NAME == 'RegisterOutward' || SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm' || SYS_ORG_FUNCTION_NAME == 'OWGT_IssueGTEEFrCE') {
            amt = document.MAINFORM.GTEE_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'OutwardApplyRejectAmendment') {
            amt = document.MAINFORM.NEW_GTEE_AMT.value;
        }
        ccy = document.MAINFORM.GTEE_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        DAY = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'D');
        WEEK = Math.round(DAY / 7);
        WEEK_1 = DAY % 3;

        if (WEEK_1 > 0) {
            WEEK += 1;
        }
        document.MAINFORM.PERIOD.value = WEEK;

        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, '', '', '', '', '');
        aResult = Chg.callCalcService(ccy, amt, 'GTEE_ISS_COMM_WEEK', chargeFor, custID, 'USD', 'Booking Rate', '', '', '', '', '', WEEK, '');
        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_WEEK", e);
    }
}

function SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_YEAR() {
    try {
        var YEAR; // Utility Auto Fix Comments
        var aResult; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var chargeFor; // Utility Auto Fix Comments
        var custID; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var ruleAmt; // Utility Auto Fix Comments
        var ruleCCY; // Utility Auto Fix Comments
        var ruleInfo; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        arr = ['GTEE_ISS_COMM_YEAR'];
        if (SYS_ORG_FUNCTION_NAME == 'RegisterOutward' || SYS_ORG_FUNCTION_NAME == 'CollectPeriodComm' || SYS_ORG_FUNCTION_NAME == 'OWGT_IssueGTEEFrCE') {
            amt = document.MAINFORM.GTEE_AMT.value;
        } else if (SYS_ORG_FUNCTION_NAME == 'AmendOutwardOneStep' || SYS_ORG_FUNCTION_NAME == 'OutwardApplyRejectAmendment') {
            amt = document.MAINFORM.NEW_GTEE_AMT.value;
        }
        ccy = document.MAINFORM.GTEE_CCY.value;
        chargeFor = document.MAINFORM.CHG_FLD_ALL_CHARGE_FOR.value;
        if (chargeFor == 'L') {
            custID = document.MAINFORM.APPL_ID.value;
        } else {
            custID = document.MAINFORM.BENE_ID.value;
        }
        sDate = document.MAINFORM.COMM_START_DT.value;
        eDate = document.MAINFORM.COMM_END_DT.value;
        YEAR = SYT_Cal_NUM_Month(document.MAINFORM.COMM_START_DT, document.MAINFORM.COMM_END_DT, 'Y');
        document.MAINFORM.PERIOD.value = YEAR;
        if (sDate == '' || eDate == '') {
            return;
        }
        Chg.calculate(arr, ccy, amt, '', '', '', '', '');
        aResult = Chg.callCalcService(ccy, amt, 'GTEE_ISS_COMM_YEAR', chargeFor, custID, 'USD', 'Booking Rate', '', '', '', '', '', YEAR, '');
        if (aResult[0] != "") {
            alert("Has error:" + aResult[0]);
        } else {
            ruleCCY = aResult[1];
            ruleAmt = aResult[2];
            ruleInfo = aResult[3];
            document.MAINFORM.TOTAL_ISS_COMM.value = SYT_AmtFormat(ruleCCY, ruleAmt);
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_GTEE_ISS_COMM_YEAR", e);
    }
}

function SYM_GTEE_Chg_Calculate_ISS_COMM() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var eDate; // Utility Auto Fix Comments
        var sDate; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != "EC") {
            arr = ['GTEE_ISS_COMM'];
            amt = document.MAINFORM.GTEE_AMT.value;
            ccy = document.MAINFORM.GTEE_CCY.value;
            sDate = document.MAINFORM.CLM_DT.value;
            eDate = document.MAINFORM.MATURITY_DT.value;
            if (sDate == '' || eDate == '') {
                return;
            }
            Chg.calculate(arr, ccy, amt, sDate, eDate, '', '', '');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_ISS_COMM", e);
    }
}

function SYM_GTEE_Chg_Calculate_Other() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != "EC") {
            arr = ['GTEE_OTHER_CHG'];
            amt = document.MAINFORM.GTEE_AMT.value;
            ccy = document.MAINFORM.GTEE_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_Other", e);
    }
}

function SYM_GTEE_Chg_Calculate_POST() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != "EC") {
            arr = ['GTEE_POST_CHG'];
            amt = document.MAINFORM.GTEE_AMT.value;
            ccy = document.MAINFORM.GTEE_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_POST", e);
    }
}

function SYM_GTEE_Chg_Calculate_SWIFT() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != "EC") {
            arr = ['GTEE_SWIFT_CHG'];
            amt = document.MAINFORM.GTEE_AMT.value;
            ccy = document.MAINFORM.GTEE_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Calculate_SWIFT", e);
    }
}

function SYM_GTEE_Chg_Screen() {
    try {
        if (document.MAINFORM.APPL_ID_BTN.value == "CUST" || document.MAINFORM.APPL_ID.value != "") {
            Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");

            if (document.MAINFORM.BENE_ID_BTN.value == "CUST" || document.MAINFORM.BENE_NM.value != "") {
                Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM", "GTEE_CCY");
            }
        } else {
            if (document.MAINFORM.BENE_ID_BTN.value == "CUST" || document.MAINFORM.BENE_NM.value != "") {
                Chg.Screen.mapForeignCust("BENE_ID", "BENE_NM", "GTEE_CCY");
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Screen", e);
    }
}

function SYM_GTEE_Chg_Screen_Appl() {
    try {
        if (document.MAINFORM.APPL_ID_BTN.value == "CUST") {
            Chg.Screen.mapLocalCust("APPL_ID", "APPL_NM");
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Screen_Appl", e);
    }
}

function SYM_GTEE_Chg_Screen_Bene() {
    try {
        if (document.MAINFORM.BENE_ID_BTN.value == "CUST") {
            Chg.Screen.setForeignCust("BENE_ID", "BENE_NM", "GTEE_CCY");
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_Screen_Bene", e);
    }
}

function SYM_GTEE_Chg_calculate_Issue() {
    try {
        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != "EC") {
            arr = ['GTEE_ISS_COMM'];
            amt = document.MAINFORM.GTEE_AMT.value;
            ccy = document.MAINFORM.GTEE_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Chg_calculate_Issue", e);
    }
}


function SYM_GTEE_DEFAULT_SEND_TO() {
    try {
    	      if (document.MAINFORM.PURP_OF_MESS.value == 'ISSU') { 
            document.MAINFORM.SEND_TO_ID.value = document.MAINFORM.ADV_BK_ID.value;
            document.MAINFORM.SEND_TO_ADD1.value = document.MAINFORM.ADV_BK_ADD1.value; 
            document.MAINFORM.SEND_TO_ADD2.value = document.MAINFORM.ADV_BK_ADD2.value; 
            document.MAINFORM.SEND_TO_ADD3.value = document.MAINFORM.ADV_BK_ADD3.value; 
            document.MAINFORM.SEND_TO_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value; 
            document.MAINFORM.SEND_TO_SW_TAG.value = document.MAINFORM.ADV_BK_SW_TAG.value; 
            document.MAINFORM.SEND_TO_MAIL_ADD.value = document.MAINFORM.ADV_BK_MAIL_ADD.value; 
            document.MAINFORM.SEND_TO_NM.value = document.MAINFORM.ADV_BK_NM.value;
            document.MAINFORM.SEND_TO_CORR_MED.value = document.MAINFORM.ADV_BK_CORR_MED.value;
            document.MAINFORM.SEND_TO_REF.value = document.MAINFORM.ADV_BK_REF.value; 
            document.MAINFORM.SEND_TO.value = 'Bank';
          }else if (document.MAINFORM.PURP_OF_MESS.value == 'ISCO' || document.MAINFORM.PURP_OF_MESS.value == 'ICCO') { 
          	document.MAINFORM.SEND_TO.value = 'Bank';
          }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYF_GTEE_DEFAULT_SEND_TO", e);
    }
}

function SYM_GTEE_FOR798() {
    try {
        if (document.MAINFORM.SUB_MESS_TYPE.value == '762') {
            SYT_ChangeFldClass(document.MAINFORM.X798_CUST_REF, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X798_CRE_DATE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X798_CRE_TIME, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X798_AMT_TYPE_39P, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X798_VALI_TYPE_23B, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X798_CUST_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X798_20_REF, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.X798_CUST_REF, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X798_CRE_DATE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X798_CRE_TIME, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X798_AMT_TYPE_39P, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X798_VALI_TYPE_23B, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X798_CUST_ADD, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X798_20_REF, 'P');


        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_FOR798", e);
    }
}

function SYM_GTEE_For_APPL_CUBK_798() {
    try {
        var Mapping_List; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //sSQLWhere = "SWF_FMT_NM=" + "'" + document.MAINFORM.APPL_NM.value + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "C_MAIN_REF";
        //Mapping_List = "APPL_ID";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_For_APPL_CUBK_798_14', '1', true);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_For_APPL_CUBK_798", e);
    }
}

function SYM_GTEE_For_BENE_CUBK_798() {
    try {
        var Mapping_List; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //sSQLWhere = "SWF_FMT_NM=" + "'" + document.MAINFORM.BENE_NM.value + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "C_MAIN_REF";
        //Mapping_List = "BENE_ID";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_For_BENE_CUBK_798_15', '1', true);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_For_BENE_CUBK_798", e);
    }
}

function SYM_GTEE_For_INDEMN_CUBK_798() {
    try {
        var Mapping_List; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //sSQLWhere = "SWF_FMT_NM=" + "'" + document.MAINFORM.INDEMN_NM.value + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "C_MAIN_REF";
        //Mapping_List = "INDEMN_ID";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_For_INDEMN_CUBK_798_16', '1', true);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_For_INDEMN_CUBK_798", e);
    }
}

function SYM_GTEE_For_SEND_CUBK_798() {
    try {
        var Mapping_List; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //sSQLWhere = "SW_ADD=" + "'" + document.MAINFORM.SEND_TO_SW_ADD.value + "'";
        //sTableName = "BANK_MASTER";
        //sFieldList = "C_MAIN_REF";
        //Mapping_List = "SEND_TO_ID";
        SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_For_SEND_CUBK_798_17', '1', true);

        if (document.MAINFORM.SEND_TO_ID.value == '') {
            return;
        } else {
            SYS_GetCUBK('SEND_TO_BANK', document.MAINFORM.SEND_TO_ID.name);
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_For_SEND_CUBK_798", e);
    }
}

function SYM_GTEE_GTEE_AMT_LCY() {
    try {
        var amt; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        amt = SYS_BeFloat(document.MAINFORM.GTEE_AMT.value);
        rate = SYS_BeFloat(document.MAINFORM.RT_TRXCCY_LCY.value);
        document.MAINFORM.GTEE_LCY_AMT.value = amt * rate;
        SYM_GTEE_CCY_AMT();
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_GTEE_AMT_LCY", e);
    }
}

function SYM_GTEE_Get_ADV_BK_ID() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 11 || document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
            if (document.MAINFORM.ADV_BK_SW_ADD.value.length == 8) {
                document.MAINFORM.ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value + "XXX"; // Utility Auto Fix Comments
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.ADV_BK_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "ADV_BK_ID";
            SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Get_ADV_BK_ID', '1', true);

            if (document.MAINFORM.ADV_BK_ID.value !== '') {
                SYS_GetCUBK('ADV_BK_ID', 'ADV_BK_ID', 'SYM_GTEE_ADV_BK_ID_B()');
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Get_ADV_BK_ID", e);
    }
}

function SYM_GTEE_Get_ISSUE_BK_52_ID() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.ISSUE_BK_52_SW_ADD.value.length == 11 || document.MAINFORM.ISSUE_BK_52_SW_ADD.value.length == 8) {
            if (document.MAINFORM.ISSUE_BK_52_SW_ADD.value.length == 8) {
                document.MAINFORM.ISSUE_BK_52_SW_ADD.value = document.MAINFORM.ISSUE_BK_52_SW_ADD.value + "XXX"; // Utility Auto Fix Comments
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.ISSUE_BK_52_SW_ADD.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "ISSUE_BK_52_ID";
            SYS_GetTableDataByRule_S('SYM_GTEE_SYM_GTEE_Get_ISSUE_BK_52_ID', '1', true);
            if (document.MAINFORM.ISSUE_BK_52_ID.value != '') {
                SYS_GetCUBK('ISSUE_BK_52_ID', 'ISSUE_BK_52_ID', 'SYM_GTEE_ISSUE_BK_52_ID_B()');
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Get_ISSUE_BK_52_ID", e);
    }
}

function SYM_GTEE_Get_RCV_FRM_BK() {
    try {
        SYS_GetCUBK('RCV_FM_BK_ID', document.MAINFORM.RCV_FM_BK_ID.name);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Get_RCV_FRM_BK", e);
    }
}

function SYM_GTEE_INDEMNIFY_BUTTON() {
    try {
        if (document.MAINFORM.DOCS_PRESENTED_BY.value == "Customer") {
            SYM_GTEE_Cal_INDEMN_CUST();
        } else if (document.MAINFORM.DOCS_PRESENTED_BY.value == "Bank") {
            SYM_GTEE_Cal_INDEMN_BANK();
        } else {
            SYS_CheckError(document.MAINFORM.DOCS_PRESENTED_BY, "Please select Customer or Bank first");
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_INDEMNIFY_BUTTON", e);
    }
}

function SYM_GTEE_INDEMN_ID_BTN() {
    try {
        if (document.MAINFORM.INDEMN_ID.value == "") {
            SYM_GTEE_Cal_Clear_Indemn_ID();
        } else {
            if (document.MAINFORM.INDEMN_ID_BTN.value == 'BANK') {
                SYS_GetCUBK('INDEMN_ID_BANK', document.MAINFORM.INDEMN_ID.name, 'SYM_GTEE_MPO_INDEMN_CORR_MED');
            } else if (document.MAINFORM.INDEMN_ID_BTN.value == 'CUST') {
                SYS_GetCUBK('INDEMN_ID_CUST', document.MAINFORM.INDEMN_ID.name, 'SYM_GTEE_MPO_INDEMN_CORR_MED');
                document.MAINFORM.INDEMN_SW_ADD.value = "";
                document.MAINFORM.INDEMN_SW_TAG.value = "";
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_INDEMN_ID_BTN", e);
    }
}

function SYM_GTEE_ISSUE_BK_52_ID() {
    try {
        if (document.MAINFORM.ISSUE_BK_52_ID.value == '') {
            document.MAINFORM.ISSUE_BK_52_NM.value = '';
            document.MAINFORM.ISSUE_BK_52_ADD1.value = '';
            document.MAINFORM.ISSUE_BK_52_ADD2.value = '';
            document.MAINFORM.ISSUE_BK_52_ADD3.value = '';
            document.MAINFORM.ISSUE_BK_52_SW_ADD.value = '';
            SYM_GTEE_ISSUE_BK_52_ID_B2();
        } else {
            SYS_GetCUBK('ISSUE_BK_52_ID', document.MAINFORM.ISSUE_BK_52_ID.name, 'SYM_GTEE_ISSUE_BK_52_ID_B()');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ISSUE_BK_52_ID", e);
    }
}

function SYM_GTEE_ISSUE_BK_52_ID_ADD() {
    try {
        SYS_InqCUBK_byCondition('ISSUE_BK_52_NM', '1');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ISSUE_BK_52_ID_ADD", e);
    }
}

function SYM_GTEE_ISSUE_BK_52_ID_B() {
    try {
        SYM_GTEE_ISSUE_BK_52_ID_B2();
        SYM_GTEE_ISSUE_SWIFT_TAG();
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ISSUE_BK_52_ID_B", e);
    }
}

function SYM_GTEE_ISSUE_BK_52_ID_B2() {
    try {
        if (document.MAINFORM.ISSUE_BK_52_ID.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_52_BTN2, "P");
        }
        if (document.MAINFORM.ISSUE_BK_52_ID.value !== '') {
            SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_52_BTN2, "O");
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ISSUE_BK_52_ID_B2", e);
    }
}

function SYM_GTEE_ISSUE_SWIFT_TAG() {
    try {
        if (document.MAINFORM.ISSUE_BK_52_SW_ADD.value != '') {
            document.MAINFORM.ISSUE_BK_52_SW_TAG.value = 'A';
        }
        if (document.MAINFORM.ISSUE_BK_52_SW_ADD.value == '' && (document.MAINFORM.ISSUE_BK_52_NM.value != '' || document.MAINFORM.ISSUE_BK_52_ADD1.value != '' || document.MAINFORM.ISSUE_BK_52_ADD2.value != '' || document.MAINFORM.ISSUE_BK_52_ADD3.value != '')) {
            document.MAINFORM.ISSUE_BK_52_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ISSUE_BK_52_NM.value == '' && document.MAINFORM.ISSUE_BK_52_SW_ADD.value == '' && document.MAINFORM.ISSUE_BK_52_ADD1.value == '' && document.MAINFORM.ISSUE_BK_52_ADD2.value == '' && document.MAINFORM.ISSUE_BK_52_ADD3.value == '') {
            document.MAINFORM.ISSUE_BK_52_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ISSUE_SWIFT_TAG", e);
    }
}

function SYM_GTEE_MODE_OF_DRFT() {
    try {
        if (document.MAINFORM.DRAFT_REQ.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.MODE_OF_DRFT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.MODE_OF_DRFT, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MODE_OF_DRFT", e);
    }
}

function SYM_GTEE_MPO_APPL_CORR_MED1() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'O');

        SYM_GTEE_Cal_APPL_SW_TAG();

        SYT_Show_Notes(document.MAINFORM.APPL_NOTES.name);

        if (document.MAINFORM.APPL_CORR_MED1.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'M');
        } else if (document.MAINFORM.APPL_CORR_MED1.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'M');
        } else if (document.MAINFORM.APPL_CORR_MED1.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'M');
        } else if (document.MAINFORM.APPL_CORR_MED1.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APPL_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_EMAIL_1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_FAX_NO_1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.APPL_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_APPL_CORR_MED1", e);
    }
}

function SYM_GTEE_MPO_APPL_SW_TAG() {
    try {
        if (document.MAINFORM.APPL_SW_ADD.value != "") {
            document.MAINFORM.APPL_SW_TAG.value = "A";
        } else {
            document.MAINFORM.APPL_SW_TAG.value = "D";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_APPL_SW_TAG", e);
    }
}

function SYM_GTEE_MPO_BENE_CORR_MED() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'O');
        SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'O');
        SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'O');

        SYM_GTEE_Cal_BENE_SW_TAG();

        SYT_Show_Notes(document.MAINFORM.BENE_NOTES.name);

        if (document.MAINFORM.BENE_CORR_MED.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'M');
        } else if (document.MAINFORM.BENE_CORR_MED.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'M');
        } else if (document.MAINFORM.BENE_CORR_MED.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'M');
        } else if (document.MAINFORM.BENE_CORR_MED.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.BENE_SW_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_BENE_CORR_MED", e);
    }
}

function SYM_GTEE_MPO_BENE_SW_TAG() {
    try {
        if (document.MAINFORM.BENE_SW_ADD.value != "") {
            document.MAINFORM.BENE_SW_TAG.value = "A";
        } else {
            document.MAINFORM.BENE_SW_TAG.value = "D";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_BENE_SW_TAG", e);
    }
}

function SYM_GTEE_MPO_CLM_BK_CORE_MED() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_EMAIL, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_FAX, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_MAIL_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.CLM_BK_SW_ADD, 'O');

        SYT_Show_Notes(document.MAINFORM.CLM_BK_NOTES.name);

        if (document.MAINFORM.CLM_BK_CORE_MED.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.CLM_BK_SW_ADD, 'M');
        } else if (document.MAINFORM.CLM_BK_CORE_MED.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.CLM_BK_MAIL_ADD, 'M');
        } else if (document.MAINFORM.CLM_BK_CORE_MED.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.CLM_BK_FAX, 'M');
        } else if (document.MAINFORM.CLM_BK_CORE_MED.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.CLM_BK_EMAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CLM_BK_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CLM_BK_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CLM_BK_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CLM_BK_SW_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_CLM_BK_CORE_MED", e);
    }
}

function SYM_GTEE_MPO_CLM_BK_SW_TAG() {
    try {
        if (document.MAINFORM.CLM_BK_SW_ADD.value != "") {
            document.MAINFORM.CLM_BK_SW_TAG.value = "A";
        } else {
            document.MAINFORM.CLM_BK_SW_TAG.value = "D";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_CLM_BK_SW_TAG", e);
    }
}

function SYM_GTEE_MPO_COUNTR_GTEE() {
    try {
        if (document.MAINFORM.COUNTR_GTEE.value == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_REF, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_EXP, 'M'); // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_REQ, 'M');
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_HELD, 'O');
        } else if (document.MAINFORM.COUNTR_GTEE.value == 'No') {
            document.MAINFORM.CONTR_GTEE_REF.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_REF, 'P');
            document.MAINFORM.CONTR_GTEE_EXP.value = '';
            SYT_ChangeFldClass(document.MAINFORM.CONTR_GTEE_EXP, 'P');
            document.MAINFORM.COUNTR_INDMNTY_REQ.value = 'Yes';
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_REQ, 'P');
            document.MAINFORM.COUNTR_INDMNTY_HELD.value = 'Yes';
            SYT_ChangeFldClass(document.MAINFORM.COUNTR_INDMNTY_HELD, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_COUNTR_GTEE", e);
    }
}

function SYM_GTEE_MPO_INDEMN_CORR_MED() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'O');
        SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'O');

        SYM_GTEE_Cal_INDEMN_SW_TAG();

        SYT_Show_Notes(document.MAINFORM.INDEMN_NOTES.name);
        //if (document.MAINFORM.INDEMN_NM.value == "") {
        //            document.MAINFORM.INDEMN_CORR_MED.value = 'None';
        //            return;
        //        }
        if (document.MAINFORM.INDEMN_CORR_MED.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'M');
        } else if (document.MAINFORM.INDEMN_CORR_MED.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'M');
        } else if (document.MAINFORM.INDEMN_CORR_MED.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'M');
        } else if (document.MAINFORM.INDEMN_CORR_MED.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.INDEMN_MAIL_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_INDEMN_CORR_MED", e);
    }
}

function SYM_GTEE_MPO_INDEMN_SW_TAG() {
    try {
        if (document.MAINFORM.INDEMN_SW_ADD.value != "") {
            document.MAINFORM.INDEMN_SW_TAG.value = "A";
        } else {
            document.MAINFORM.INDEMN_SW_TAG.value = "D";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_INDEMN_SW_TAG", e);
    }
}

function SYM_GTEE_MPO_R_COLLAT_DTLS() {
    try {
        //JACK 0919 GTEE
        if (document.MAINFORM.COUNTR_GTEE.value == 'Yes') {
            document.MAINFORM.R_COLLAT_DTLS.value = 'Counter Guarantee Ref:' + document.MAINFORM.CONTR_GTEE_REF.value + '\r' + 'Counter Guarantee Expiry Date:' + document.MAINFORM.CONTR_GTEE_EXP.value;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_R_COLLAT_DTLS", e);
    }
}

function SYM_GTEE_MPO_R_COLLAT_REQ() {
    try {
        //JACK 0919 GTEE
        if (document.MAINFORM.COUNTR_GTEE.value == 'Yes') {
            document.MAINFORM.R_COLLAT_REQ.value = 'Y';
        } else {
            document.MAINFORM.R_COLLAT_REQ.value = 'N';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_R_COLLAT_REQ", e);
    }
}

function SYM_GTEE_MPO_R_PARTY_INFO() {
    try {
        //Add by Jack on 20120917 for SMBC Workshop
        SYT_ChangeFldClass(document.MAINFORM.R_CUST_BK, 'O');
        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ID, 'M');
        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_NM, 'M');
        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_CNTY, 'O');
        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD1, 'O');
        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD2, 'O');
        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD3, 'O');
        SYT_ChangeFldClass(document.MAINFORM.R_WEIG_PCT, 'M');
        SYT_ChangeFldClass(document.MAINFORM.R_COLLAT_REQ, 'M');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_R_PARTY_INFO", e);
    }
}

function SYM_GTEE_MPO_SEND_TO_CORR_MED() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FAX, 'O');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_EMAIL, 'O');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'O');

        SYM_GTEE_Cal_SEND_TO_SW_TAG();

        SYT_Show_Notes(document.MAINFORM.SEND_TO_NOTES.name);

        if (document.MAINFORM.SEND_TO_CORR_MED.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD, 'M');
        } else if (document.MAINFORM.SEND_TO_CORR_MED.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FAX, 'M');
        } else if (document.MAINFORM.SEND_TO_CORR_MED.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_EMAIL, 'M');
        } else if (document.MAINFORM.SEND_TO_CORR_MED.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_SEND_TO_CORR_MED", e);
    }
}

function SYM_GTEE_MPO_SEND_TO_CORR_MED_MT() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FAX, 'O');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_EMAIL, 'O');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'O');
        SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_TAG, 'O');
        SYT_ChangeFldClass('GTEE_DETAILS', 'P');
        document.MAINFORM.GTEE_DETAILS.value = "";
        if (document.MAINFORM.SEND_TO_CORR_MED.value == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD, 'M');
        } else if (document.MAINFORM.SEND_TO_CORR_MED.value == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FAX, 'M');
        } else if (document.MAINFORM.SEND_TO_CORR_MED.value == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_EMAIL, 'M');
        } else if (document.MAINFORM.SEND_TO_CORR_MED.value == "SWIFT") {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'M');
            SYT_ChangeFldClass('GTEE_DETAILS', 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_EMAIL, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_FAX, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_SW_TAG, 'O');
            SYT_ChangeFldClass('GTEE_DETAILS', 'P');
            document.MAINFORM.GTEE_DETAILS.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_SEND_TO_CORR_MED_MT", e);
    }
}

function SYM_GTEE_MPO_SEND_TO_RCV_INFO() {
    try {
        if (document.MAINFORM.SW_FORM.value == 'MT767') {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SEND_TO_RCV_INFO, 'P');
            document.MAINFORM.SEND_TO_RCV_INFO.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_SEND_TO_RCV_INFO", e);
    }
}

function SYM_GTEE_MPO_SEND_TO_SW_TAG() {
    try {
        if (document.MAINFORM.SEND_TO_SW_ADD.value != "") {
            document.MAINFORM.SEND_TO_SW_TAG.value = "A";
        } else {
            document.MAINFORM.SEND_TO_SW_TAG.value = "D";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_SEND_TO_SW_TAG", e);
    }
}

function SYM_GTEE_MPO_SIGNATURE() {
    try {
        if (document.MAINFORM.SW_FORM.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.SIGNATURE, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SIGNATURE, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_SIGNATURE", e);
    }
}

function SYM_GTEE_MPO_SW_FORM() {
    try {
        if (document.MAINFORM.SW_FORM.value == 'MT760') {
            SYT_ChangeFldClass('GTEE_DETAILS', 'M');
            SYT_ChangeFldClass(document.MAINFORM.TMPL_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.ClauseButton, 'M');
            SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ClauseButton2, 'P');
            document.MAINFORM.GTEE_DETAILS_79.value = "";
            document.MAINFORM.NARR_MAIL.value = "";
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BK_TO_BK_INFO, 'O');
        } else {
            SYT_ChangeFldClass('GTEE_DETAILS', 'P');
            SYT_ChangeFldClass(document.MAINFORM.TMPL_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.BK_TO_BK_INFO, 'P');
            document.MAINFORM.BK_TO_BK_INFO.value = '';
            document.MAINFORM.GTEE_DETAILS.value = '';
            SYT_ChangeFldClass(document.MAINFORM.ClauseButton, 'P');
            if (document.MAINFORM.SW_FORM.value == "Mail") {
                SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'M');
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'M');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
                document.MAINFORM.GTEE_DETAILS_79.value = "";
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton2, 'P');
            } else if (document.MAINFORM.SW_FORM.value == " ") {
                SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton2, 'P');
            } else {
                document.MAINFORM.NARR_MAIL.value = "";
                SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'M');
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton2, 'M');
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_SW_FORM", e);
    }
}

function SYM_GTEE_MPO_SW_FORM_AMD() {
    try {
        if (document.MAINFORM.SW_FORM.value == 'MT760' || document.MAINFORM.SW_FORM.value == 'MT767') {
            SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
            document.MAINFORM.GTEE_DETAILS_79.value = "";
            document.MAINFORM.NARR_MAIL.value = "";
            SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'P');
        } else {
            if (document.MAINFORM.SW_FORM.value == "Mail") {
                SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'M');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'P');
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'M');
            } else {
                document.MAINFORM.NARR_MAIL.value = "";
                SYT_ChangeFldClass(document.MAINFORM.NARR_MAIL, 'P');
                SYT_ChangeFldClass(document.MAINFORM.GTEE_DETAILS_79, 'M');
                SYT_ChangeFldClass(document.MAINFORM.ClauseButton3, 'P');
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MPO_SW_FORM_AMD", e);
    }
}

function SYM_GTEE_MRGN_AMT() {
    try {
        var nCASH_COV_AMT; // Utility Auto Fix Comments
        var nCASH_COV_PCT; // Utility Auto Fix Comments
        var nMRGN_AMT; // Utility Auto Fix Comments
        var nMRGN_COLL; // Utility Auto Fix Comments
        var sCASH_COV_HELD; // Utility Auto Fix Comments
        //sCASH_COV_HELD=document.MAINFORM.CASH_COV_HELD.value;
        //    nCASH_COV_PCT=SYS_BeFloat(document.MAINFORM.CASH_COV_PCT.value);
        //    nMRGN_AMT=0.00;
        //    nMRGN_COLL=0.00;
        //    nCASH_COV_AMT=SYS_BeFloat(document.MAINFORM.CASH_COV_AMT.value);
        //    if (sCASH_COV_HELD=='No cash cover'){
        //    	nMRGN_AMT=0.00;
        //    	nMRGN_COLL=0.00;
        //    }else if (sCASH_COV_HELD=='Full cash cover'){
        //    	nMRGN_AMT=nCASH_COV_AMT;
        //    	nMRGN_COLL=nCASH_COV_AMT;
        //    }else if (sCASH_COV_HELD=='Part. cash cover'){
        //    	nMRGN_AMT=nCASH_COV_AMT*nCASH_COV_PCT/100;
        //    	nMRGN_COLL=nMRGN_AMT;
        //    }
        //    

        document.MAINFORM.MRGN_AMT.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, document.MAINFORM.CASH_COV_AMT.value);
        document.MAINFORM.MRGN_COLL.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, document.MAINFORM.CASH_COV_AMT.value);
        document.MAINFORM.MRGN_BAL_LCY.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, document.MAINFORM.MRGN_COLL.value);
        document.MAINFORM.MRGN_BAL_FCY.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, document.MAINFORM.MRGN_AMT.value);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MRGN_AMT", e);
    }
}

function SYM_GTEE_MRGN_AMT_AMD() {
    try {
        var nCASH_COV_AMT; // Utility Auto Fix Comments
        var nCASH_COV_PCT; // Utility Auto Fix Comments
        var nDEC_AMT; // Utility Auto Fix Comments
        var nINC_AMT; // Utility Auto Fix Comments
        var nMRGN_AMT; // Utility Auto Fix Comments
        var nMRGN_BAL_FCY; // Utility Auto Fix Comments
        var nMRGN_BAL_LCY; // Utility Auto Fix Comments
        var nMRGN_COLL; // Utility Auto Fix Comments
        nINC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        nDEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        nMRGN_AMT = 0.00;
        nMRGN_COLL = 0.00;
        nCASH_COV_AMT = 0.00;
        nCASH_COV_PCT = SYS_BeFloat(document.MAINFORM.CASH_COV_PCT.value);
        nMRGN_BAL_FCY = SYS_BeFloat(document.MAINFORM.MRGN_BAL_FCY.value); //MRGN_AMT
        nMRGN_BAL_LCY = SYS_BeFloat(document.MAINFORM.MRGN_BAL_LCY.value); //MRGN_COLL

        nMRGN_AMT = (nINC_AMT - nDEC_AMT) * nCASH_COV_PCT / 100;
        nCASH_COV_AMT = nMRGN_AMT;
        nMRGN_COLL = nMRGN_AMT + nMRGN_BAL_LCY;
        document.MAINFORM.MRGN_AMT.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, nMRGN_AMT);
        document.MAINFORM.CASH_COV_AMT.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, nCASH_COV_AMT);
        document.MAINFORM.MRGN_COLL.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, nMRGN_COLL);
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_MRGN_AMT_AMD", e);
    }
}

function SYM_GTEE_NXT_COMM_DT() {
    try {
        var Fist_D; // Utility Auto Fix Comments
        var Fist_M; // Utility Auto Fix Comments
        var Fist_Y; // Utility Auto Fix Comments
        var Last_D; // Utility Auto Fix Comments
        var Last_M; // Utility Auto Fix Comments
        var Last_Y; // Utility Auto Fix Comments
        var _yyy; // Utility Auto Fix Comments
        var day; // Utility Auto Fix Comments
        var month; // Utility Auto Fix Comments
        var new_dt_month; // Utility Auto Fix Comments
        var new_dt_year; // Utility Auto Fix Comments
        var year; // Utility Auto Fix Comments
        if (SYS_DATE_FORMAT == "" || SYS_DATE_FORMAT == null || SYS_DATE_FORMAT == "undefined") {
            return;
        }
        Fist_Y = SYS_DATE_FORMAT.toLowerCase().indexOf('y');
        Last_Y = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('y');
        Fist_M = SYS_DATE_FORMAT.toLowerCase().indexOf('m');
        Last_M = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('m');
        Fist_D = SYS_DATE_FORMAT.toLowerCase().indexOf('d');
        Last_D = SYS_DATE_FORMAT.toLowerCase().lastIndexOf('d');

        _yyy = SYS_DATE_FORMAT.substr(Last_M + 1, 1).toString(); // Utility Auto Fix Comments

        if (document.MAINFORM.COMM_DT.value == '') {
            return;
        }
        year = parseFloat(document.MAINFORM.COMM_DT.value.substr(Fist_Y, Last_Y - Fist_Y + 1));

        month = parseFloat(document.MAINFORM.COMM_DT.value.substr(Fist_M, Last_M - Fist_M + 1));

        day = document.MAINFORM.COMM_DT.value.substr(Fist_D, Last_D - Fist_D + 1);
        new_dt_year = year;
        new_dt_month = month;
        if (document.MAINFORM.CHG_POLICY.value == 'Monthly') {
            new_dt_month = month + 1;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Quarterly') {
            new_dt_month = month + 3;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Half yearly') {
            new_dt_month = month + 6;
            if (new_dt_month > 12) {
                new_dt_month = new_dt_month - 12;
                new_dt_year = year + 1;
            }
        }

        if (document.MAINFORM.CHG_POLICY.value == 'Yearly') {
            new_dt_year = year + 1;
        }

        if (Fist_Y < Fist_M) {
            if (Fist_M < Fist_D) {
                document.MAINFORM.NXT_COMM_DT.value = new_dt_year.toString() + _yyy + new_dt_month.toString() + _yyy + day.toString(); // Utility Auto Fix Comments
            }
        } else {
            if (Fist_M < Fist_D) {
                document.MAINFORM.NXT_COMM_DT.value = new_dt_month.toString() + _yyy + day.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            } else {
                document.MAINFORM.NXT_COMM_DT.value = day.toString() + _yyy + new_dt_month.toString() + _yyy + new_dt_year.toString(); // Utility Auto Fix Comments
            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_NXT_COMM_DT", e);
    }
}

function SYM_GTEE_ORDER_BUTTON() {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ORDER_INST_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ORDER_BUTTON", e);
    }
}

function SYM_GTEE_RATE_CASH_LCY() {
    try {
        if (document.MAINFORM.CASH_COV_CCY.value != "" && document.MAINFORM.CASH_COV_CCY.value != null) {
            if (document.MAINFORM.CASH_COV_CCY.value != SYS_LOCAL_CCY) {
                SYS_GetExchangeRate(document.MAINFORM.CASH_COV_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.RT_CASH_COV_LCY.name, 'SYM_GTEE_Cal_CASH_CVR_AMT');
            } else {
                document.MAINFORM.RT_CASH_COV_LCY.value = "1.00";
                SYM_GTEE_Cal_CASH_CVR_AMT();
            }
        } else {
            document.MAINFORM.RT_CASH_COV_LCY.value = "0.00";
            SYM_GTEE_Cal_CASH_CVR_AMT();
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_RATE_CASH_LCY", e);
    }
}

function SYM_GTEE_RATE_STLCCY_TRXCCY() {
    try {
        SYS_GetExchangeRate(document.MAINFORM.STL_CCY_AMT.value, document.MAINFORM.GTEE_CCY.value, 'Booking Rate', document.MAINFORM.RT_STLCCY_TRXCCY.name);
        //SYS_calExchAmt(document.MAINFORM.STL_CCY_AMT.value,document.MAINFORM.GTEE_CCY.value,document.MAINFORM.CLM_TRX_CCY_AMT.value,'Booking Rate',document.MAINFORM.RT_STLCCY_TRXCCY.name);
        EEHtml.fireEvent(document.MAINFORM.RT_STLCCY_TRXCCY, 'onchange');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_RATE_STLCCY_TRXCCY", e);
    }
}

function SYM_GTEE_RATE_TRXCCY_LCY() {
    try {
        SYS_GetExchangeRate_S(document.MAINFORM.GTEE_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.RT_TRXCCY_LCY.name);
        EEHtml.fireEvent(document.MAINFORM.RT_TRXCCY_LCY, 'onchange');
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_RATE_TRXCCY_LCY", e);
    }
}

function SYM_GTEE_ResetADVTHRU() {
    try {
        if (SYS_FUNCTION_TYPE != "EC") {
            document.MAINFORM.ADV_THU_BK_ID.value = '';
            document.MAINFORM.ADV_THU_BK_NM.value = '';
            document.MAINFORM.ADV_THU_BK_ADD1.value = '';
            document.MAINFORM.ADV_THU_BK_ADD2.value = '';
            document.MAINFORM.ADV_THU_BK_ADD3.value = '';
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = '';
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_ResetADVTHRU", e);
    }
}

function SYM_GTEE_SEND_BUTTON() {
    try {
        if (document.MAINFORM.SEND_TO.value == "Bank") {
            SYM_GTEE_Cal_SEND_BANK();
        } else if (document.MAINFORM.SEND_TO.value == "Customer") {
            SYM_GTEE_Cal_SEND_CUST();
        } else {
            SYS_CheckError(document.MAINFORM.SEND_TO, "Please select Customer or Bank first");
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SEND_BUTTON", e);
    }
}

function SYM_GTEE_SND_TO_ID_BTN() {
    try {
        if (document.MAINFORM.SEND_TO_ID.value == "") {
            SYM_GTEE_Cal_Clear_Send_ID();
            SYM_GTEE_MPO_SEND_TO_SW_TAG();
        } else {
            if (document.MAINFORM.SEND_TO_ID_BTN.value == 'BANK') {
                SYS_GetCUBK('SEND_TO_BANK', document.MAINFORM.SEND_TO_ID.name, 'SYM_GTEE_MPO_SEND_TO_CORR_MED');

            } else if (document.MAINFORM.SEND_TO_ID_BTN.value == 'CUST') {
                SYS_GetCUBK('SEND_TO_CUST', document.MAINFORM.SEND_TO_ID.name, 'SYM_GTEE_MPO_SEND_TO_CORR_MED');

            }
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SND_TO_ID_BTN", e);
    }
}

function SYM_GTEE_SQL_ADV_BK() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ADV_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SQL_ADV_BK", e);
    }
}

function SYM_GTEE_SQL_ADV_THU_BK() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ADV_THU_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SQL_ADV_THU_BK", e);
    }
}

function SYM_GTEE_SQL_APPL_ID_LOCAL() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('APPL_ID_LOCAL', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SQL_APPL_ID_LOCAL", e);
    }
}

function SYM_GTEE_SQL_AVAL_WT_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('AVAL_WT_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SQL_AVAL_WT_BANK", e);
    }
}

function SYM_GTEE_SQL_BENE_ID_LOCAL() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('BENE_ID_LOCAL', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SQL_BENE_ID_LOCAL", e);
    }
}

function SYM_GTEE_SQL_CONF_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('CONF_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SQL_CONF_BANK", e);
    }
}

function SYM_GTEE_SQL_CONF_BK() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('CONF_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SQL_CONF_BK", e);
    }
}

function SYM_GTEE_SQL_INDEMN_ID_LOCAL() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('INDEMN_ID_LOCAL', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SQL_INDEMN_ID_LOCAL", e);
    }
}

function SYM_GTEE_SQL_ISSUE_BK() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ISSUE_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SQL_ISSUE_BK", e);
    }
}

function SYM_GTEE_SQL_ISSUE_BK_LOCAL() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ISSUE_BK_ID_LOCAL', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SQL_ISSUE_BK_LOCAL", e);
    }
}

function SYM_GTEE_SQL_NEW_BENE() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NEW_BENE_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SQL_NEW_BENE", e);
    }
}

function SYM_GTEE_SQL_NEW_BENE_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        NEW_BENE_NM = EEHtml.getElementById("NEW_BENE_NM").value;
        NEW_BENE_ADD1 = EEHtml.getElementById("NEW_BENE_ADD1").value;
        NEW_BENE_ADD2 = EEHtml.getElementById("NEW_BENE_ADD2").value;
        NEW_BENE_ADD3 = EEHtml.getElementById("NEW_BENE_ADD3").value;
        var _string = NEW_BENE_NM + NEW_BENE_ADD1 + NEW_BENE_ADD2 + NEW_BENE_ADD3;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NEW_BENE_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SQL_NEW_BENE_CUST", e);
    }
}

function SYM_GTEE_SQL_NEW_BENE_ID_LOCAL() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NEW_BENE_ID_LOCAL', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SQL_NEW_BENE_ID_LOCAL", e);
    }
}

function SYM_GTEE_SWIFT_FORM() {
    try {
        switch (document.MAINFORM.ISSUE_BY.value) {
            case 'Mail':
                switch (document.MAINFORM.MTHD_OF_ISS.value) {
                    case 'Issued by us':
                        switch (document.MAINFORM.STANDNG_WORDINGS.value) {
                            case 'Yes':
                                if (document.MAINFORM.FORM_OF_GTEE.value == "Others") {
                                    document.MAINFORM.SW_FORM.value = 'M-General';
                                } else {
                                    document.MAINFORM.SW_FORM.value = document.MAINFORM.FORM_OF_GTEE.value;
                                }
                                break;
                            case 'No':
                                document.MAINFORM.SW_FORM.value = 'M-General';
                                break;
                        }
                        break;
                    case 'Issued by our branch':
                        document.MAINFORM.SW_FORM.value = 'M-GeneralPA';
                        break;
                    case 'Issued by a correspondent bank':
                        document.MAINFORM.SW_FORM.value = 'M-GeneralON';
                        break;
                }
                break;
            case 'SWIFT auth':
                document.MAINFORM.SW_FORM.value = 'MT760';
                break;
            case 'Telex':
                switch (document.MAINFORM.MTHD_OF_ISS.value) {
                    case 'Issued by us':
                        document.MAINFORM.SW_FORM.value = 'TELEX';
                        break;
                    case 'Issued by our branch':
                        document.MAINFORM.SW_FORM.value = 'TELEXPA';
                        break;
                    case 'Issued by a correspondent bank':
                        document.MAINFORM.SW_FORM.value = 'TELEXON';
                        break;
                }
                break;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SWIFT_FORM", e);
    }
}

function SYM_GTEE_SYF_GTEE_Cal_Charge_Regist() {
    try {
        SYM_GTEE_Chg_Screen();
        SYM_GTEE_Chg_calculate_Issue();
        SYM_GTEE_Chg_Calculate_POST();
        SYM_GTEE_Chg_Calculate_SWIFT();
        SYM_GTEE_Chg_Calculate_COURIER_CHG();
        SYM_GTEE_Chg_Calculate_ForeignBank();
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SYF_GTEE_Cal_Charge_Regist", e);
    }
}

function SYM_GTEE_SetADVTHRU() {
    try {
        if (SYS_FUNCTION_TYPE != "EC") {
            document.MAINFORM.ADV_THU_BK_ID.value = document.MAINFORM.SEND_TO_ID.value;
            document.MAINFORM.ADV_THU_BK_NM.value = document.MAINFORM.SEND_TO_NM.value;
            document.MAINFORM.ADV_THU_BK_ADD1.value = document.MAINFORM.SEND_TO_ADD1.value;
            document.MAINFORM.ADV_THU_BK_ADD2.value = document.MAINFORM.SEND_TO_ADD2.value;
            document.MAINFORM.ADV_THU_BK_ADD3.value = document.MAINFORM.SEND_TO_ADD3.value;
            document.MAINFORM.ADV_THU_BK_SW_ADD.value = document.MAINFORM.SEND_TO_SW_ADD.value;
            document.MAINFORM.ADV_THU_BK_SW_TAG.value = document.MAINFORM.SEND_TO_SW_TAG.value;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SetADVTHRU", e);
    }
}

function SYM_GTEE_Set_Risk_Party_Info() {
    try {
        var sAPPL_ID; // Utility Auto Fix Comments
        var sINDEMN_ID; // Utility Auto Fix Comments
        //JACK 0918 GTEE
        sAPPL_ID = document.MAINFORM.APPL_ID.value;
        sINDEMN_ID = document.MAINFORM.INDEMN_ID.value;
        if (sAPPL_ID + sINDEMN_ID == '') {
            document.MAINFORM.R_CUST_BK.value = document.MAINFORM.APPL_CUST_BK.value;
            document.MAINFORM.R_PARTY_NM.value = document.MAINFORM.APPL_NM.value;
            document.MAINFORM.R_PARTY_ADD1.value = document.MAINFORM.APPL_ADD1.value;
            document.MAINFORM.R_PARTY_ADD2.value = document.MAINFORM.APPL_ADD2.value;
            document.MAINFORM.R_PARTY_ADD3.value = document.MAINFORM.APPL_ADD3.value;

        } else {

            if ((sAPPL_ID != '' && sINDEMN_ID == '') || (sAPPL_ID != '' && sINDEMN_ID != '' && sAPPL_ID == sINDEMN_ID)) {
                document.MAINFORM.R_CUST_BK.value = document.MAINFORM.APPL_CUST_BK.value;
                document.MAINFORM.R_PARTY_ID_BTN.value = document.MAINFORM.APPL_CUST_BK.value;
                document.MAINFORM.R_PARTY_ID.value = document.MAINFORM.APPL_ID.value;
                document.MAINFORM.R_PARTY_NM.value = document.MAINFORM.APPL_NM.value;
                document.MAINFORM.R_PARTY_ADD1.value = document.MAINFORM.APPL_ADD1.value;
                document.MAINFORM.R_PARTY_ADD2.value = document.MAINFORM.APPL_ADD2.value;
                document.MAINFORM.R_PARTY_ADD3.value = document.MAINFORM.APPL_ADD3.value;
                document.MAINFORM.R_PARTY_CNTY.value = document.MAINFORM.APPL_SW_ADD.value.substr(4, 2);
                Cal_R_PARTY_CNTY();
            }

            if ((sAPPL_ID == '' && sINDEMN_ID != '') || (sAPPL_ID != '' && sINDEMN_ID != '' && sAPPL_ID != sINDEMN_ID)) {
                document.MAINFORM.R_CUST_BK.value = document.MAINFORM.DOCS_PRESENTED_BY.value;
                document.MAINFORM.R_PARTY_ID_BTN.value = document.MAINFORM.DOCS_PRESENTED_BY.value;
                document.MAINFORM.R_PARTY_ID.value = document.MAINFORM.INDEMN_ID.value;
                document.MAINFORM.R_PARTY_NM.value = document.MAINFORM.INDEMN_NM.value;
                document.MAINFORM.R_PARTY_ADD1.value = document.MAINFORM.INDEMN_ADD1.value;
                document.MAINFORM.R_PARTY_ADD2.value = document.MAINFORM.INDEMN_ADD2.value;
                document.MAINFORM.R_PARTY_ADD3.value = document.MAINFORM.INDEMN_ADD3.value;
                document.MAINFORM.R_PARTY_CNTY.value = document.MAINFORM.INDEMN_SW_ADD.value.substr(4, 2);
                Cal_R_PARTY_CNTY();
            }


        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Set_Risk_Party_Info", e);
    }
}

function SYM_GTEE_SetupExitFields() {
    try {
        document.MAINFORM.NEW_GTEE_AMT.value = document.MAINFORM.GTEE_AMT.value;
        //document.MAINFORM.CASH_COV_BAL.value=document.MAINFORM.CASH_COV_AMT.value;
        document.MAINFORM.NEW_EXPIRY_DT.value = document.MAINFORM.EXPIRY_DT.value;
        document.MAINFORM.NW_EXPIRY_IN_WORDINGS.value = document.MAINFORM.GTEE_DETAILS.value;
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SetupExitFields", e);
    }
}

function SYM_GTEE_SpecialCharacters_onchange_1(FieldValue) {
    try {
        var regex = /^[0-9a-zA-Z]+$/;
        var isValid = regex.test(FieldValue);
        if (!isValid) {
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_SpecialCharacters_onchange_1", e);
    }
}

function SYM_GTEE_Sql_ADV_BK_ID() {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ADV_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Sql_ADV_BK_ID", e);
    }
}

function SYM_GTEE_Sql_ISSUE_BK_52_ID() {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('ISSUE_BK_52_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_Sql_ISSUE_BK_52_ID", e);
    }
}

function SYM_GTEE_getSEND_TO_REF() {
    try {
        if (document.MAINFORM.SEND_TO_REF.value == "") {
            document.MAINFORM.SEND_TO_REF.value = "NONREF";
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_getSEND_TO_REF", e);
    }
}

function SYM_GTEE_setRef(ref) {
    try {
        var Sys_date; // Utility Auto Fix Comments
        var funcshrtnm; // Utility Auto Fix Comments
        Sys_date = SYS_BUSI_DATE;
        document.MAINFORM.C_MAIN_REF.value = ref;
        funcshrtnm = SYT_FUNC_SHORT_NAME();
        if (funcshrtnm == 'RegisterOutward') {
            document.MAINFORM.TEMP_N90_REF_20.value = ref;
        }
    } catch (e) {
        DisExcpt("SYM_GTEE.js*SYM_GTEE_setRef", e);
    }
}