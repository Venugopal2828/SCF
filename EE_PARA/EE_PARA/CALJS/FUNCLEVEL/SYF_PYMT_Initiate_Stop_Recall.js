var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {} catch (e) {
        DisExcpt("SYF_PYMT_Initiate_Stop_Recall.js*ConfirmBusinessCall", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        if (!SYF_PYMT_Check_C_121()) {
            return false;
        }
        if (!SYF_PYMT_Check_VALUE_DATE()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_PYMT_Initiate_Stop_Recall.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.VALUE_DT.value = SYS_BUSI_DATE;
        document.MAINFORM.GSRP_STRC_TYPE.value = 'STRC';
        document.MAINFORM.SERVICE_TYPE_ID_GPI_111.value = '002';
        document.MAINFORM.RCV_BK_SW_ADD.value = 'TRCKCHZ0XXX';
        document.MAINFORM.SENDER_SW_ADD.value = 'PTSABMAAXXX';
    } catch (e) {
        DisExcpt("SYF_PYMT_Initiate_Stop_Recall.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC') {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Initiate_Stop_Recall.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        SYS_GetRefNo('PYMT1', 'SYF_PYMT_Get_C_MAIN_REF');
    } catch (e) {
        DisExcpt("SYF_PYMT_Initiate_Stop_Recall.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_C_121 = function() {
    try {
        if (document.MAINFORM.UETR_GPI_121.value == '' || document.MAINFORM.UETR_GPI_121.value == null) {
            alert('Please select out related 121');
            return false;
        } else {

            return true;
        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Initiate_Stop_Recall.js*SYF_PYMT_Check_C_121", e);
    }
}

csFuncLevelProto.SYF_PYMT_Check_VALUE_DATE = function() {
    try {
        if (document.MAINFORM.VALUE_DT.value < SYS_BUSI_DATE) {
            SYS_CheckError(document.MAINFORM.VALUE_DT, 'Request to stop pay date can not before the transaction date!');
            return false;
        } else {

            return true;

        }
    } catch (e) {
        DisExcpt("SYF_PYMT_Initiate_Stop_Recall.js*SYF_PYMT_Check_VALUE_DATE", e);
    }
}

csFuncLevelProto.SYF_PYMT_Get_C_MAIN_REF = function(ref) {
    try {
        //var pre='SR';
        //var UnitCode=SYS_BUSI_UNIT;
        //UnitCode=UnitCode.substr(0,5);
        var year = SYS_BUSI_DATE;
        year = year.substr(2, 2);
        document.MAINFORM.C_MAIN_REF.value = year + ref;
    } catch (e) {
        DisExcpt("SYF_PYMT_Initiate_Stop_Recall.js*SYF_PYMT_Get_C_MAIN_REF", e);
    }
}

csFuncLevelProto.FLD_PYMT_GSRP_STRC_CODE_onchange = function() {
    try {
        var GSRP_STRC_CODE = document.MAINFORM.GSRP_STRC_CODE.value;
        document.MAINFORM.XN99_NARRATIVE_79.value = '';
        document.MAINFORM.XN99_NARRATIVE_79.value = '/' + GSRP_STRC_CODE + '/';
    } catch (e) {
        DisExcpt("SYF_PYMT_Initiate_Stop_Recall.js*FLD_PYMT_GSRP_STRC_CODE_onchange", e);
    }
}