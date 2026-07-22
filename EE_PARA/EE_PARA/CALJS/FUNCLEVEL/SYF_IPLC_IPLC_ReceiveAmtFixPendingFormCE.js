var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'Awaiting Bank Verification LC Amd';
        SYF_IPLC_Cal_NEW_LC_BAL();
        SYT_ChangeFldClass(document.MAINFORM.AC_OFFICER_CODE, "O");


        //The fields for the "old/existing" Beneficiary must be protected
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_NM, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD1, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD2, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_ADD3, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_MAIL_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_AC_NO, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_LANG, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_CORR_MED, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_EMAIL, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_FAX, 'P');
        SYT_ChangeFldClass(document.MAINFORM.BENE_AC_OFF_CODE, 'P');




        document.MAINFORM.NEW_BENE_ID.value = document.MAINFORM.BENE_ID.value;
        document.MAINFORM.NEW_BENE_NM.value = document.MAINFORM.BENE_NM.value;
        document.MAINFORM.NEW_BENE_ADD1.value = document.MAINFORM.BENE_ADD1.value;
        document.MAINFORM.NEW_BENE_ADD2.value = document.MAINFORM.BENE_ADD2.value;
        document.MAINFORM.NEW_BENE_ADD3.value = document.MAINFORM.BENE_ADD3.value;
        document.MAINFORM.NEW_BENE_MAIL_ADD.value = document.MAINFORM.BENE_MAIL_ADD.value;
        document.MAINFORM.NEW_BENE_REF.value = document.MAINFORM.BENE_REF.value;
        document.MAINFORM.NEW_BENE_ACNO.value = document.MAINFORM.BENE_AC_NO.value;
        document.MAINFORM.NEW_BENE_LANG.value = document.MAINFORM.BENE_LANG.value;
        document.MAINFORM.NEW_BENE_CORR_MED.value = document.MAINFORM.BENE_CORR_MED.value;
        document.MAINFORM.NEW_BENE_EMAIL.value = document.MAINFORM.BENE_EMAIL.value;
        document.MAINFORM.NEW_BENE_FAX.value = document.MAINFORM.BENE_FAX.value;
        document.MAINFORM.NEW_BENE_AC_OFF_CODE.value = document.MAINFORM.BENE_AC_OFF_CODE.value;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReceiveAmtFixPendingFormCE.js", e);
    }
}

csFuncLevelProto.SYF_IPLC_Cal_NEW_LC_BAL = function() {
    try {

        var LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        var LC_AMT = SYS_BeFloat(document.MAINFORM.LC_AMT.value);
        var INC_AMT = SYS_BeFloat(document.MAINFORM.INC_AMT.value);
        var DEC_AMT = SYS_BeFloat(document.MAINFORM.DEC_AMT.value);
        var POS_TOL = SYS_BeInt(document.MAINFORM.NEW_POS_TOL.value);
        var NEW_LC_AMT = LC_AMT + INC_AMT - DEC_AMT;
        var lc_bal_new = LC_BAL + INC_AMT - DEC_AMT;
        var NEW_LC_BAL = lc_bal_new * (1 + POS_TOL / 100);
        document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_AMT);
        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_BAL);
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReceiveAmtFixPendingFormCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        if (document.MAINFORM.ACCEPT_REJECT.value == 'ACCEPTED') {
            document.MAINFORM.NXT_STATUS.value = 'AmdLC';
        } else {
            document.MAINFORM.NXT_STATUS.value = 'ResubmitLCAmd';
        }

        Cal_MSG_TYPE();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReceiveAmtFixPendingFormCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReceiveAmtFixPendingFormCE.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReceiveAmtFixPendingFormCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_APPL_AC_MRGN_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER=\'C\'";
        SYS_InqCUBK_Sql('LIAB_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('LIAB_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReceiveAmtFixPendingFormCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_ASSET_ACNO_BTN_onclick = function(event) {
    try {
        /*var SQL = "C_CUST_ID=\'liability\' AND C_CURRENCY = \'" + SYS_LOCAL_CCY + "\' AND C_AC_IDENTIFIER<>\'C\'";
        SYS_InqCUBK_Sql('ASSET_ACNO', SQL);*/
        SYS_InqCUBK_byCondition('ASSET_ACNO', '1');
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReceiveAmtFixPendingFormCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DEC_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.DEC_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.DEC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReceiveAmtFixPendingFormCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReceiveAmtFixPendingFormCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_INC_AMT_onchange = function(event) {
    try {
        if (document.MAINFORM.INC_AMT.value < 0) {
            alert("The amount field do not accept negative values");
            document.MAINFORM.INC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReceiveAmtFixPendingFormCE.js", e);
    }
}

csFuncLevelProto.FLD_IPLC_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_IPLC_IPLC_ReceiveAmtFixPendingFormCE.js", e);
    }
}