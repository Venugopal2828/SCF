var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        if (document.MAINFORM.MX_OR_MT_FLAG.value == "MX") {
            document.MAINFORM.C_MAIN_REF_20Z.value = document.MAINFORM.C_MAIN_REF.value;
        } else {
            document.MAINFORM.C_MAIN_REF_20Z.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT101.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_SetRefNo = function(ref) {
    try {

        SYT_Format_Ref(ref);
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT101.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('PYMT1', 'SYF_PYMT_SetRefNo');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT101.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_50 = function() {
    try {

        SYS_GetCUBK('X102_50F_PARTY_ID', 'X102_50F_PARTY_ID', '', 'SYF_PYMT_Cal_50_Fail()');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT101.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_50_ADD = function() {
    try {

        SYS_InqCUBK('X102_50F_PARTY_ID', 'X102_50F_PARTY_ID');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT101.js", e);
    }
}

csFuncLevelProto.SYF_PYMT_Cal_50_Fail = function() {
    try {

        document.MAINFORM.X102_50A_IDENTIFIER.value = '';
        document.MAINFORM.X102_50F_PARTY_NAME.value = '';
        document.MAINFORM.X102_50F_PARTY_ADD1.value = '';
        document.MAINFORM.X102_50F_PARTY_ADD2.value = '';
        document.MAINFORM.X102_50F_PARTY_ADD3.value = '';
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT101.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_PART_50A_ADD_BTN_onclick = function(event) {
    try {
        SYF_PYMT_Cal_50_ADD();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT101.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X102_50F_PARTY_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.X102_50F_PARTY_ID.value.trim() != '') {
            SYF_PYMT_Cal_50();
        } else {
            SYF_PYMT_Cal_50_Fail();
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT101.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        SYM_PYMT_X103_ADV_BKID_B2_GETCUBK();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT101.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_ADV_BKSW_B2_onchange = function(event) {
    try {
        SYM_PYMT_set_X103_ADV_BKSW_B2_onchange();
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT101.js", e);
    }
}

csFuncLevelProto.FLD_PYMT_X103_B2_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2');
    } catch (e) {
        DisExcpt("SYF_PYMT_ProcessMT101.js", e);
    }
}