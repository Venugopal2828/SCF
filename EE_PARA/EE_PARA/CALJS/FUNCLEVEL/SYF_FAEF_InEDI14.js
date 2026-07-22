var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FAEF_Cal_RefreshOptions = function(mappingList) {
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
        DisExcpt("SYF_FAEF_InEDI14.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_Get_DOdata_DisputeReg = function() {
    try {

        SYS_GetDataForDO('DisputeReg');
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var funcType; // Utility Auto Fix Comments
        var ruleShow; // Utility Auto Fix Comments
        document.MAINFORM.FA_BUSI_STATUS.value = 'DSP';
        document.MAINFORM.FA_BUSI_TYPE.value = 'EF';
        document.MAINFORM.FA_SEND_MSG_FLG.value = '2';

        funcType = SYS_FUNCTION_TYPE;
        if (SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        if (SYS_FUNCTION_TYPE == "EC") {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID; //zb1207
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        loadCCYComplete = 1;
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        document.MAINFORM.FA_BUSI_STATUS.value = 'DSP';
        document.MAINFORM.FA_BUSI_TYPE.value = 'EF';
        document.MAINFORM.FA_SEND_MSG_FLG.value = '2';
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {

        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var recordTypeTemp; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('DisputeReg'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("DisputeReg");
        flag = false;
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                recordTypeTemp = record['recordTypeTemp']; // Utility Auto Fix Comments
                if (recordTypeTemp != 'AE') {
                    flag = true;
                }
            }
        }
        if (flag) {
            alert('Please edit the records before confirm the transaction!');
            return false;
        }

        if (!SYT_checkFactoringChildRecord('DisputeReg')) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_field = function(flag) {
    try {

        if (flag == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_NOTIFY_BY, 'P', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_NOTIFY_BY, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_InEDI14.js", e);
    }
}