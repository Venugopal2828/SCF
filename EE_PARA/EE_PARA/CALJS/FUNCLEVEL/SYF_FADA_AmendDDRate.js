var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.InitValues = function() {
    try {} catch (e) {
        DisExcpt("SYF_FADA_AmendDDRate.js*InitValues", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'PM') {
            SYS_GetDataForDO_S("Get_DDRateRule", "N", false, '', "DDRate");
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendDDRate.js*LoadDODataOnInit", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendDDRate.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FADA_Status = function() {
    try {
        var action;
        action = document.MAINFORM.FA_BUSI_FUNC.value;
        if (action == 'Deactivate') {

            document.MAINFORM.FA_DD_RT_ST.value = 'Deactive';
        } else {
            document.MAINFORM.FA_DD_RT_ST.value = 'Active';

        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendDDRate.js*SYF_FADA_Status", e);
    }
}

csFuncLevelProto.SYF_FADA_freeControlDOButton = function() {
    try {
        if (SYS_FUNCTION_TYPE == "RE" || SYS_FUNCTION_TYPE == "IQ") return;
        var func = document.MAINFORM.FA_BUSI_FUNC.value;
        if (SYS_getDoByXpath("DDRate")) {
            if (func == 'Activate') {
                SYS_enableButton('DDRate', 'addbutton');
                SYS_enableButton('DDRate', 'editbutton');
                SYS_enableButton('DDRate', 'deletebutton');
            } else if (func == 'Deactivate') {
                SYS_disableButton('DDRate', 'addbutton');
                SYS_disableButton('DDRate', 'editbutton');
                SYS_disableButton('DDRate', 'deletebutton');
            }
        }
    } catch (e) {
        DisExcpt("SYF_FADA_AmendDDRate.js*SYF_FADA_freeControlDOButton", e);
    }
}

csFuncLevelProto.FLD_FADA_FA_BUSI_FUNC_onchange = function() {
    try {
        SYF_FADA_freeControlDOButton();
        SYF_FADA_Status();
    } catch (e) {
        DisExcpt("SYF_FADA_AmendDDRate.js*FLD_FADA_FA_BUSI_FUNC_onchange", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        if (!SYF_FADA_CHECK_DO_NO()) {

                 return false;
             }
                     return true;
                 } catch (e) {
        DisExcpt("SYF_FADA_AmendDDRate.js*SYF_FADA_CHECK_DO_NO", e);
    }
}


csFuncLevelProto.SYF_FADA_CHECK_DO_NO = function() {
    try {
    	 var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordP;
        var From;
        var ToP;
        var recs = SYS_getcurrRecordCount('DDRate');
        _do = SYS_getDoByXpath('DDRate');
        mData = [];
      if (recs == 0) {
            alert('The transaction can not be confirmed without any rate rule.');
            return false;
        } else {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            
            for (i = 0, len = arrayvalue.length-1; i < len; i++) {
                record = arrayvalue[i];
                recordP= arrayvalue[i+1];
             From = SYS_BeFloat(SYS_getValFromRec(recordP, 'FA_DD_D_FROM'));
             ToP = SYS_BeFloat(SYS_getValFromRec(record, 'FA_DD_D_TO'));
             var gap = SYS_FloatSub(From,ToP);
             if( gap !=1){
             	alert('The rate rule is inconsecutive.');
             	            return false;
            }

            }  	
            return true;
        }
    } catch (e) {
        DisExcpt("SYF_FADA_SetDDRate.js*SYF_FADA_CHECK_DO_NO", e);
    }
}