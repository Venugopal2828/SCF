var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.PostconditionOnInit = function() {
    try {

        //SYT_RELE_CREA_BY();//zb1210
        InitValues();
        SYF_FAEF_Cal_BUSI_STATUS();
        if (SYS_FUNCTION_TYPE == "EC") {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
            SYS_GetTableDataByRule_S('SYF_FAEF_InEDI15_PostconditionOnInit_0', '1');
            SYS_GetTableDataByRule_S('SYF_FAEF_InEDI15_PostconditionOnInit_1', '1');
        }
        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Cal_BUSI_STATUS = function() {
    try {

        if (document.MAINFORM.FA_DSP_STATUS.value == '3') {
            document.MAINFORM.FA_BUSI_STATUS.value = 'DPS';
        } else {
            document.MAINFORM.FA_BUSI_STATUS.value = 'DSP';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}

csFuncLevelProto.LoadDODataOnInit = function() {
    try {

        var funcType; // Utility Auto Fix Comments
        funcType = SYS_FUNCTION_TYPE;
        if (funcType == 'PM') {
            SYS_GetDataForDO_S('DisputeSettl');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_RefreshOptions = function(mappingList) {
    try {

        var arrayValue; // Utility Auto Fix Comments
        var ary; // Utility Auto Fix Comments
        var fldValue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var newOption; // Utility Auto Fix Comments
        var objFld; // Utility Auto Fix Comments
        var optionAry; // Utility Auto Fix Comments
        optionAry = new Array();
        newOption = new Array();
        try {
            for (i = 0; i < SYS_MULTI_DATA.length; i++) { // Utility Auto Fix Comments
                arrayValue = SYS_MULTI_DATA[i][1];
                for (j = 0; j < arrayValue.length; j++) {
                    optionAry.push(arrayValue[j]);
                }
            }
            //o2mLogger.debug("optionAry1:"+optionAry.join("@"));
            while (true) {
                ary = optionAry.pop();
                if (!ary) {
                    break;
                }
                if (optionAry.contains(ary)) {
                    //alert(ary);
                    optionAry.splice(optionAry.indexOf(ary), 1, ary);
                } else {
                    newOption.push(ary);
                }
            }
            //o2mLogger.debug("optionAry2:"+newOption.join("@"));
            objFld = EEHtml.getElementById(mappingList);
            if (objFld) {
                objFld.options[0] = new Option("", "");
                for (i = 0; i < newOption.length; i++) {
                    fldValue = newOption[i];
                    objFld.options.add(new Option(fldValue, fldValue));
                }
            }
        } catch (e1) {
            alert("[RefreshOptions Error]: " + e1.expression);
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_SEND_MSG_FLG.value = '2';
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DSP_STATUS_onchange = function(event) {
    try {
        SYF_FAEF_Cal_BUSI_STATUS();
        EEHtml.fireEvent(document.MAINFORM.FA_BUSI_STATUS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI15.js", e);
    }
}