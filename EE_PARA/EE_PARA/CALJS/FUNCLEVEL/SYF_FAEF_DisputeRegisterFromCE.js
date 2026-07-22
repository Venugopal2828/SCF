var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});

csFuncLevelProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*CancelCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheck = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var docRef; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        var tempV; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('DisputeReg'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("DisputeReg");
        flag = false;
       // tempV = document.MAINFORM.FA_DOC_REF_TEMP.value;
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                temp = record['FA_TEMP2'];
                if (temp == '') {
                    alert('Please edit the records before confirm the transaction!');
                    return false;
                }
                /*
    		docRef = record['FA_DOC_REF'];
        flag = tempV.indexOf(docRef)>-1;
        if(!flag){
    	   alert('Please edit the records before confirm the transaction!');
    	   return false;
        }
    */
            }
        }

      if (!SYT_checkFactoringChildRecord('DisputeReg')) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*ConfirmBusinessCheck", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*ConfirmBusinessCheckSave", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {
        document.MAINFORM.FA_DSP_REF.value = document.MAINFORM.C_MAIN_REF.value;
        var obj; // Utility Auto Fix Comments
        var tempFldName; // Utility Auto Fix Comments
        document.MAINFORM.FA_MSG_TEXT.value = '';
        document.MAINFORM.FA_BUSI_STATUS.value = 'DSP';
        document.MAINFORM.FA_SEND_MSG_FLG.value = '2';
        tempFldName = "FA_DOC_REF_TEMP";
        obj = EEHtml.getElementById(tempFldName);
        if (obj == null || obj == "undefined") {
            obj = document.createElement("input");
            obj.name = tempFldName;
            obj.id = tempFldName;
            obj.setAttribute("type", "hidden");
            document.MAINFORM.appendChild(obj);
        }
        obj.value = '';
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*InitValues", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {
        var tt; // Utility Auto Fix Comments
        tt = EEHtml.getElementById('test');
        if (document.MAINFORM.FA_BUSI_TYPE.value != 'IF') {
            tt.style.display = 'none';
        } else {
            tt.style.display = '';
        }

        loadCCYComplete = 1;

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {

            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
        if (SYS_FUNCTION_TYPE == 'PM') {
            document.MAINFORM.FA_DOC_CCY.options.add(new Option(document.MAINFORM.FA_LMT_CCY.value, document.MAINFORM.FA_LMT_CCY.value));
            //document.MAINFORM.FA_DOC_CCY.value=document.MAINFORM.FA_LMT_CCY.value; MARK BY ECHO 20140424
            EEHtml.fireEvent(document.MAINFORM.FA_DOC_CCY, "onchange");
        }

        if (SYS_FUNCTION_TYPE == 'EC' && SYS_ERROR == "") {
            initEC();
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*PostconditionOnInit", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {
        SYS_GetRefNo('FAEF_DSP_REF', 'SYF_FAEF_SetDspRef');
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*PreconditionOnInit", e);
    }
}

csFuncLevelProto.SYF_FAEF_CHECK_DISPUTE = function() {
    try {
        var _do; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var docNO; // Utility Auto Fix Comments
        var dspCode; // Utility Auto Fix Comments
        var flag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        _do = SYS_getDoByXpath('DisputeReg'); // Utility Auto Fix Comments
        num = SYS_getcurrRecordCount("DisputeReg");
        flag = false;
        if (num > 0) {
            arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
            for (i = 0, len = arrayvalue.length; i < len; i++) {
                record = arrayvalue[i];
                dspCode = SYS_getValFromRec(record, 'FA_DSP_RSN_CODE');
                docNO = SYS_getValFromRec(record, 'FA_DOC_NO');
                if (dspCode.trim() == '' || dspCode.trim() == null) {
                    alert("DOC:" + docNO + " hasn't been done Disput!");
                    return false;

                }
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*SYF_FAEF_CHECK_DISPUTE", e);
    }
}

csFuncLevelProto.SYF_FAEF_FA_NOTIFY_BY = function() {
    try {
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            if (document.MAINFORM.FA_NOTIFY_BY.value == '1' || document.MAINFORM.FA_NOTIFY_BY.value == '3') {
                document.MAINFORM.FA_SEND_MSG_FLG.value = '2';
            } else {
                document.MAINFORM.FA_SEND_MSG_FLG.value = '1';
            }
        } else if (document.MAINFORM.FA_BUSI_TYPE.value == 'IF') {
            if (document.MAINFORM.FA_NOTIFY_BY.value == '1' || document.MAINFORM.FA_NOTIFY_BY.value == '3') {
                document.MAINFORM.FA_SEND_MSG_FLG.value = '1';
            } else {
                document.MAINFORM.FA_SEND_MSG_FLG.value = '2';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*SYF_FAEF_FA_NOTIFY_BY", e);
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

            while (true) {
                ary = optionAry.pop();
                if (!ary) {
                    break;
                }
                if (optionAry.contains(ary)) {

                    optionAry.splice(optionAry.indexOf(ary), 1, ary);
                } else {
                    newOption.push(ary);
                }
            }

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
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*SYF_FAEF_RefreshOptions", e);
    }
}

csFuncLevelProto.SYF_FAEF_SetDspRef = function(ref) {
    try {
        /*
        var UnitCode;// Utility Auto Fix Comments
            var dt;// Utility Auto Fix Comments
            var pre;// Utility Auto Fix Comments
            var sub;// Utility Auto Fix Comments
        pre = document.MAINFORM.FA_BUSI_TYPE.value;
                UnitCode = SYS_BUSI_UNIT;
                UnitCode = UnitCode.substr(0, 5);
                dt = getDate(SYS_DATE_FORMAT, SYS_BUSI_DATE);
                year = dt.substr(2, 2);
                month = dt.substr(5, 2);
                sub = 'DSP';
                document.MAINFORM.FA_DSP_REF.value = pre + UnitCode + year + month + ref + sub;
                document.MAINFORM.C_MAIN_REF.value = document.MAINFORM.FA_DSP_REF.value;
        */
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*SYF_FAEF_SetDspRef", e);
    }
}

csFuncLevelProto.SYF_FAEF_changefield = function(flag) {
    try {
        if (flag == '1') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_NOTIFY_BY, 'P', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_DOC_CCY, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.FA_NOTIFY_BY, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*SYF_FAEF_changefield", e);
    }
}

csFuncLevelProto.SYF_FAEF_getDOdata_DisputeReg = function() {
    try {
        var num; // Utility Auto Fix Comments
        if (document.MAINFORM.FA_NOTIFY_BY.value == '') {
            alert("Please choose the value for 'Notify By' !");
            return; // Utility Auto Fix Comments
        }
        SYS_GetDataForDO_S('DisputeRegFROMCE');
        num = SYS_getcurrRecordCount("DisputeReg");
        if (num > 0) {
            SYF_FAEF_changefield('1');
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*SYF_FAEF_getDOdata_DisputeReg", e);
    }
}

csFuncLevelProto.SYF_FAEF_setDSP_NO = function() {
    try {
        var notifyBY; // Utility Auto Fix Comments
        notifyBY = document.MAINFORM.FA_NOTIFY_BY.value;
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'EF') {
            if (notifyBY == '2' || notifyBY == '4') {
                document.MAINFORM.FA_DSP_NO.value = document.MAINFORM.FA_DSP_REF.value;
            } else {
                document.MAINFORM.FA_DSP_NO.value = '';
            }
        }
        if (document.MAINFORM.FA_BUSI_TYPE.value == 'IF') {
            if (notifyBY == '1' || notifyBY == '3') {
                document.MAINFORM.FA_DSP_NO.value = document.MAINFORM.FA_DSP_REF.value;
            } else {
                document.MAINFORM.FA_DSP_NO.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*SYF_FAEF_setDSP_NO", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*addRecordCheck", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*deleteRecordCheck", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*editRecordCheck", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function() {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*FLD_FAEF_DIARY_NARRATIVE_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DSP_REF_onchange = function() {
    try {
        SYF_FAEF_SetDspRef();
        EEHtml.fireEvent(document.MAINFORM.FA_DSP_NO, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*FLD_FAEF_FA_DSP_REF_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_NOTIFY_BY_onchange = function() {
    try {
        SYF_FAEF_FA_NOTIFY_BY();
        SYF_FAEF_setDSP_NO();
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*FLD_FAEF_FA_NOTIFY_BY_onchange", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function() {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeRegisterFromCE.js*FLD_FAEF_view_1_onclick", e);
    }
}