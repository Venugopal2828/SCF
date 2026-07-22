var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        SYT_RELE_CREA_BY();
        document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
    } catch (e) {
        DisExcpt("SYF_DATA_Industry Add.js", e);
    }
}

csFuncLevelProto.SYF_DATA_C_MAIN_REF = function() {
    try {

        document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.INDUSTRY_CODE.value;
    } catch (e) {
        DisExcpt("SYF_DATA_Industry Add.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
    } catch (e) {
        DisExcpt("SYF_DATA_Industry Add.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_DATA_CHECK_INDUSTRY()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_DATA_Industry Add.js", e);
    }
}

csFuncLevelProto.SYF_DATA_CHECK_INDUSTRY = function() {
    try {

        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'RE') {
            return true;
        } else {
//For duplicate record check
			document.MAINFORM.FA_TEMP3.value = '';
			SYS_GetTableDataByRule_S('SYF_DATA_IndustryAdd_SYF_DATA_CHECK_INDUSTRY_0', '1', 'Y');
            if (document.MAINFORM.FA_TEMP3.value != null && document.MAINFORM.FA_TEMP3.value != '' && document.MAINFORM.FA_TEMP3.value != 'null') {
                SYS_CheckError(document.MAINFORM.INDUSTRY_CODE, 'The Industry Code  already exists ! Please check it!');
                document.MAINFORM.INDUSTRY_CODE.value = '';
                document.MAINFORM.INDUSTRY_NM.value = '';
                return false;
            }
		}
        return true;
    } catch (e) {
        DisExcpt("SYF_DATA_Industry Add.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_DATA_Industry Add.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_DATA_Industry Add.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_DATA_Industry Add.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_DATA_Industry Add.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_DATA_Industry Add.js", e);
    }
}

csFuncLevelProto.FLD_DATA_INDUSTRY_CODE_onchange = function(event) {
    try {
        SYF_DATA_C_MAIN_REF();
        EEHtml.fireEvent(document.MAINFORM.C_MAIN_REF, 'onchange');
    } catch (e) {
        DisExcpt("SYF_DATA_Industry Add.js", e);
    }
}