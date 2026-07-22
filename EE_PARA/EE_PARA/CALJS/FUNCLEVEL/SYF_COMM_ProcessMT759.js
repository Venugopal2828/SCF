var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.C_MAIN_REF_20Z.value = document.MAINFORM.C_MAIN_REF.value;
        var time = SYS_TIME;
        document.MAINFORM.X798_CRE_TIME.value = time.substr(0, 2) + time.substr(3, 2);
        document.MAINFORM.X798_CRE_DATE.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        SYS_GetRefNo('COMM', 'SYF_COMM_SetRef');
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.SYF_COMM_SetRef = function(ref) {
    try {

        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.SYF_COMM_CHK_ISSUER_SW_TAG = function() {
    try {

        if (document.MAINFORM.X759_52A_IDENTIFIER.value != '') {
            document.MAINFORM.X759_52_TAG.value = 'A';
        }
        if ((document.MAINFORM.X759_52D_PARTY_NAME.value != '' || document.MAINFORM.X759_52D_PARTY_ADD1.value != '' || document.MAINFORM.X759_52D_PARTY_ADD2.value != '' || document.MAINFORM.X759_52D_PARTY_ADD3.value != '') && document.MAINFORM.X759_52A_IDENTIFIER.value == '') {
            document.MAINFORM.X759_52_TAG.value = 'D';
        }
        if (document.MAINFORM.X759_52D_PARTY_NAME.value == '' && document.MAINFORM.X759_52D_PARTY_ADD1.value == '' && document.MAINFORM.X759_52D_PARTY_ADD2.value == '' && document.MAINFORM.X759_52D_PARTY_ADD3.value == '' && document.MAINFORM.X759_52A_IDENTIFIER.value == '') {
            document.MAINFORM.X759_52_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.SYF_COMM_CAL_ISSUER_ID_back = function() {
    try {

        SYF_COMM_CHK_ISSUER_SW_TAG();
        if (document.MAINFORM.X759_52A_IDENTIFIER.value.length == 8) {
            document.MAINFORM.X759_52A_IDENTIFIER.value = document.MAINFORM.X759_52A_IDENTIFIER.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.FLD_COMM_X103_ADV_BKID_B2_onchange = function(event) {
    try {
        if (document.MAINFORM.X103_ADV_BKID_B2.value != '') {
            SYS_GetCUBK('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2');
        } else {
            document.MAINFORM.X103_ADV_BKID_B2.value = '';
            document.MAINFORM.X103_ADV_BKNM_B2.value = '';
            document.MAINFORM.X103_ADV_BKSW_B2.value = '';
            document.MAINFORM.X103_ADV_BKADD1_B2.value = '';
            document.MAINFORM.X103_ADV_BKADD2_B2.value = '';
            document.MAINFORM.X103_ADV_BKADD3_B2.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.FLD_COMM_X103_B2_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('X103_ADV_BKID_B2', '1');
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.FLD_COMM_X759_52A_IDENTIFIER_onchange = function(event) {
    try {
        SYF_COMM_CHK_ISSUER_SW_TAG();
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.FLD_COMM_X759_52_PARTY_ID_onchange = function(event) {
    try {
        if (document.MAINFORM.X759_52_PARTY_ID.value != '') {
            SYS_GetCUBK('X759_52_PARTY_ID', 'X759_52_PARTY_ID', 'SYF_COMM_CAL_ISSUER_ID_back');
        } else {
            document.MAINFORM.X759_52_PARTY_ID.value = '';
            document.MAINFORM.X759_52D_PARTY_NAME.value = '';
            document.MAINFORM.X759_52_PARTY_IDENTIFIER.value = '';
            document.MAINFORM.X759_52A_IDENTIFIER.value = '';
            document.MAINFORM.X759_52D_PARTY_ADD1.value = '';
            document.MAINFORM.X759_52D_PARTY_ADD2.value = '';
            document.MAINFORM.X759_52D_PARTY_ADD3.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.FLD_COMM_X759_ID_52_BTN_onclick = function(event) {
    try {
        SYS_InqCUBK_byCondition('X759_52_PARTY_ID', '1');
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}

csFuncLevelProto.FLD_COMM_X798_23X_CODE_onchange = function(event) {
    try {
        var X798_23X_CODE = document.MAINFORM.X798_23X_CODE.value;
        if (X798_23X_CODE != '') {
            document.MAINFORM.TEMP_X798_23X_CODE.value = X798_23X_CODE + '/';
        } else {
            document.MAINFORM.TEMP_X798_23X_CODE.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_COMM_ProcessMT759.js", e);
    }
}