"path:SCRN/DO/TSU_RejctElement_DO.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RejctElement_DO.js", e);
    }
}

csDOScreenProto.Chk_FieldP_AmdDO = function() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'tsmt.008.001.03B') {
            document.MAINFORM.TSU_REJT_ELMT_SQNB.className = 'CHAR_P';
            document.MAINFORM.TSU_RJ_RSN_INDVL.className = 'CHAR_P';
            document.MAINFORM.TSU_REJT_ELMT_SQNB.disabled = true;
            document.MAINFORM.TSU_RJ_RSN_INDVL.disabled = true;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RejctElement_DO.js", e);
    }
}

csDOScreenProto.Chk_TSU_RJ_RSN_INDVL = function() {
    try {
        var TSU_REJT_RSN; // Utility Auto Fix Comments
        var TSU_REJT_RSNTP; // Utility Auto Fix Comments
        /*
TSU_REJT_RSN = parent.SYS_getValueToMain('TSU_REJT_RSN2');
TSU_REJT_RSNTP = parent.SYS_getValueToMain('TSU_REJT_RSNTP');
if(TSU_REJT_RSN!=''||TSU_REJT_RSNTP=='1'){
	alert('Please select the Reject Reason Type as \'\Rejected Element\'\ at Main Screen first!');	
	document.MAINFORM.TSU_RJ_RSN_INDVL.value="";
	parent.SYS_disableButton('addbutton');
	parent.SYS_disableButton('savebutton');
}
else
        return true;
*/
    } catch (e) {
        DisExcpt("SSSS_TSU_RejctElement_DO.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RejctElement_DO.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_RejctElement_DO.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        //Chk_TSU_RJ_RSN_INDVL();
        TSU_REJT_ELMT_SQNB();
        Chk_FieldP_AmdDO();
        TSU_REJT_AMDMB();
    } catch (e) {
        DisExcpt("SSSS_TSU_RejctElement_DO.js", e);
    }
}

csDOScreenProto.TSU_REJT_AMDMB = function() {
    try {
        var vTSU_REJT_AMDMB; // Utility Auto Fix Comments
        //if(SYS_ORG_FUNCTION_SHORT_NAME =='tsmt.008.001.03A')
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'tsmt.007.001.02A' || SYS_ORG_FUNCTION_SHORT_NAME == 'tsmt.008.001.03A') {
            vTSU_REJT_AMDMB = parent.SYS_getValueFromMain('TSU_REJT_AMDMB');
            SYT_setFldValue("TSU_REJT_AMDMB", TSU_REJT_AMDMB);
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'tsmt.022.001.02A') {
            SYT_setFldValue("TSU_REJT_AMDMB", 0);
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RejctElement_DO.js", e);
    }
}

csDOScreenProto.TSU_REJT_ELMT_SQNB = function() {
    try {
        var i; // Utility Auto Fix Comments
        var maximum; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'tsmt.007.001.02A' || SYS_ORG_FUNCTION_SHORT_NAME == 'tsmt.022.001.02A') {
            records = parent.SYS_getGrpDataByFldNm('TSU_REJT_ELMT_SQNB');
            maximum = 0;
            for (i = 0; i < records.length; i++) { // Utility Auto Fix Comments
                if (records[i] < records[i + 1]) {
                    maximum = records[i + 1];
                } else {
                    maximum = records[i];
                }
            }
            document.MAINFORM.TSU_REJT_ELMT_SQNB.value = parseInt(maximum, 0) + 1;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_RejctElement_DO.js", e);
    }
}