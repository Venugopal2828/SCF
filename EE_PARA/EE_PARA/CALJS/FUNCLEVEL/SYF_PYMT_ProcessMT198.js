var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        /*
document.MAINFORM.FOR198_77E.value=':20:REF000140'+"\n"+':23B:CRED'+"\n"+':23E:SDVA'+"\n"+':32A:110615USD300,00'+"\n"+':33B:USD300,00'+"\n"+':50A:PTSABMABXXX';
document.MAINFORM.MT_NO.value ='103';
*/

        document.MAINFORM.CANCEL_FLG.value = 'No';
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT198.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SetRefNo = function(ref) {
    try {

        SYT_Format_Ref(ref);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT198.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('PYMT1', 'SYF_PYMT_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT198.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT198.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT198.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        SYM_PYMT_X103_ADV_BKID_B2_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT198.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYM_PYMT_set_X103_ADV_BKSW_B2_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT198.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('X103_ADV_BKID_B2', '1');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT198.js", e);
    }
}