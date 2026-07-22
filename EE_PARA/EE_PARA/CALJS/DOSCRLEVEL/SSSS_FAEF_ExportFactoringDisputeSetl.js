"path:SCRN/o2m/FAEF_ExportFactoringDisputeSetl.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetl.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        document.MAINFORM.FA_TEMP2.value = '1';
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetl.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetl.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetl.js", e);
    }
}

csDOScreenProto.Get_DSP_RSN_CODE = function() {
    try {
        var strFieldList; // Utility Auto Fix Comments
        var strMappingList; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        var strTableName; // Utility Auto Fix Comments
        //strTableName = 'INVC_DSP';
        //strSQLWhere = "FA_DOC_NO='" + document.MAINFORM.FA_DOC_NO.value + "' AND FA_DSP_REF='" + document.MAINFORM.FA_DSP_REF.value + "'";
        //strFieldList = "FA_DSP_RSN_CODE";
        //strMappingList = "FA_DSP_RSN_CODE";
        SYS_GetTableDataByRule('SSSS_FAEF_ExportFactoringDisputeSetl_Get_DSP_RSN_CODE_0', '1', "", "", true);
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetl.js", e);
    }
}

csDOScreenProto.Get_Notify_By_Name_Value = function() {
    try {
        if (document.MAINFORM.FA_NOTIFY_BY.value == '1') {
            document.MAINFORM.FA_NOTIFY_BY_NM.value = SYS_getValueFromMain('FA_IF_NM');
        } else if (document.MAINFORM.FA_NOTIFY_BY.value == '2') {
            document.MAINFORM.FA_NOTIFY_BY_NM.value = SYS_getValueFromMain('FA_EF_NM');
        } else if (document.MAINFORM.FA_NOTIFY_BY.value == '3') {
            document.MAINFORM.FA_NOTIFY_BY_NM.value = SYS_getValueFromMain('FA_BUYER_NM');
        } else if (document.MAINFORM.FA_NOTIFY_BY.value == '4') {
            document.MAINFORM.FA_NOTIFY_BY_NM.value = SYS_getValueFromMain('FA_SEL_NM');
        } else {
            document.MAINFORM.FA_NOTIFY_BY_NM.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetl.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.FA_NOTIFY_BY.value = SYS_getValueFromMain('FA_NOTIFY_BY');
        Get_Notify_By_Name_Value();
        document.MAINFORM.FA_DSP_AMT.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_DSP_AMT.value);
        document.MAINFORM.FA_INV_LOAN_BAL.value = SYT_CCY_AMT(document.MAINFORM.FA_DOC_CCY.value, document.MAINFORM.FA_INV_LOAN_BAL.value);
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetl.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        var func; // Utility Auto Fix Comments
        //func=SYS_getValueFromMain('SYF_FAEF_changefield');
        //func('1');

        document.MAINFORM.FA_DOC_CCY.value = SYS_getValueFromMain('FA_DOC_CCY');
        //document.MAINFORM.FA_DOC_TYPE.value=SYS_getValueFromMain('FA_DOC_TYPE');
        document.MAINFORM.FA_DSP_REF.value = SYS_getValueFromMain('FA_DSP_REF');
        Get_DSP_RSN_CODE();
        document.MAINFORM.FA_DSP_NO.value = SYS_getValueFromMain('FA_DSP_NO');
        document.MAINFORM.FA_TEMP_AMT8.value = '1';
        document.MAINFORM.FA_FIN_RETURN_REQ.value = SYS_getValueFromMain('FA_FIN_RETURN_REQ');
        document.MAINFORM.FA_NOTIFY_BY.value = SYS_getValueFromMain('FA_NOTIFY_BY');
        Get_Notify_By_Name_Value();
        EEHtml.fireEvent(document.MAINFORM.FA_NOTIFY_BY_NM, 'onchange');

        //if(document.MAINFORM.FA_DSP_STATUS.value=='3')
        if (SYS_getValueFromMain('FA_DSP_STATUS') == '3') {
            document.MAINFORM.FA_DOC_STATUS.value = 'DPS';
        } else {
            document.MAINFORM.FA_DOC_STATUS.value = 'DSP'; // Utility Auto Fix Comments
        }

    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetl.js", e);
    }
}

csDOScreenProto.window_onload = function() {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetl.js", e);
    }
}

csDOScreenProto.FA_DOC_NO_onchange = function(event) {
    try {
        Get_DSP_RSN_CODE();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetl.js", e);
    }
}

csDOScreenProto.FA_DSP_REF_onchange = function(event) {
    try {
        Get_DSP_RSN_CODE();
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetl.js", e);
    }
}

csDOScreenProto.FA_DSP_STATUS_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetl.js", e);
    }
}
csDOScreenProto.FA_NOTIFY_BY_onchange = function(event) {
    try {
        Get_Notify_By_Name_Value();
        EEHtml.fireEvent(document.MAINFORM.FA_NOTIFY_BY_NM, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_FAEF_ExportFactoringDisputeSetl.js", e);
    }
}