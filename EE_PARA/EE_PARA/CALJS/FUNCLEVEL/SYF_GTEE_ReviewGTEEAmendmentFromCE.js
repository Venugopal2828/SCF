var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.ACCEPT_REJECT.value = '';
    } catch (e) {
        DisExcpt("SYF_GTEE_ReviewGTEEAmendmentFromCE.js*InitValues", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        document.MAINFORM.CURRNT_STATUS.value = 'Awaiting Bank Verification GTEE Amd';
        document.MAINFORM.NXT_STATUS.value = 'Issue GTEE Amendment';
    } catch (e) {
        DisExcpt("SYF_GTEE_ReviewGTEEAmendmentFromCE.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_ShowBlankRow('INDE', 1);
        SYT_DisableDivClass('C_div');
        SYT_DisableDivClass('D_div');
        SYT_DisableDivClass('I_div');
        //CHG_DefCharge_chargeAtOnchange();
        FLD_GTEE_DIARY_NARRATIVE_onchange();
    } catch (e) {
        DisExcpt("SYF_GTEE_ReviewGTEEAmendmentFromCE.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.FLD_GTEE_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_GTEE_ReviewGTEEAmendmentFromCE.js*FLD_GTEE_DIARY_NARRATIVE_onchange", e);
    }
}