var csFuncLevelProto = Object.create(csFuncLevelBaseProto || {});
csFuncLevelProto.SYF_FAEF_Chk_TotalInvoice = function() {
    try {

        if (SYS_BeFloat(document.MAINFORM.FA_TTL_INV_NO.value) > 10) {
            SYS_CheckError(document.MAINFORM.FA_TTL_INV_NO, "Total invoice number can't be more than 10!");
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.PostconditionOnInit = function() {
    try {

        var funcType; // Utility Auto Fix Comments
        var ruleShow; // Utility Auto Fix Comments
        /**

funcType=SYS_FUNCTION_TYPE;
if(funcType=="IQ" || funcType=="RE"){
	ruleShow={GetInv:false,
		Add:false,Edit:false,View:true,Import:false};
}else {
	ruleShow={GetInv:false,
                   Add:false,Edit:true,View:true,Import:false};
}
**/

        if (SYS_FUNCTION_TYPE == 'PM' || SYS_FUNCTION_TYPE == 'EC' || SYS_FUNCTION_TYPE == 'KP') {
            document.MAINFORM.CLERK_ID.value = SYS_USER_ID;
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.SYF_FAEF_MPO_DSP_SETTLE_DT = function() {
    try {

        if (document.MAINFORM.FA_DSP_STATUS.value == '3') {
            SYT_ChangeFldClass(document.MAINFORM.FA_DSP_SETTLE_DT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FA_DSP_SETTLE_DT, 'O');
            document.MAINFORM.FA_DSP_SETTLE_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCall = function() {
    try {

        SYF_FAEF_Cal_BUSI_STATUS();
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
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
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
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
        if (!SYF_FAEF_Chk_TotalInvoice()) {
            return false;
        }
        if (SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'RE') {
            _do = SYS_getDoByXpath('DisputeSettl'); // Utility Auto Fix Comments
            num = SYS_getcurrRecordCount("DisputeSettl");
            flag = false;
            tempV = document.MAINFORM.FA_DOC_REF_TEMP.value;
            if (num > 0) {
                arrayvalue = SYS_getRecords(_do); // Utility Auto Fix Comments
                for (i = 0, len = arrayvalue.length; i < len; i++) { // Utility Auto Fix Comments
                    record = arrayvalue[i];
                    temp = record['FA_TEMP2'];
                    if (temp == '') {
                        alert('Please eidt the docs before confirm the transaction!');
                        return false;
                    }
                    /*
			docRef = record['FA_DOC_REF'];
			flag = tempV.indexOf(docRef)>-1;
	if(!flag){
		alert('Please edit the docs before confirm the transaction!');
		return false;
		}
*/
                }
            }
        }
        if (!SYT_checkFactoringChildRecord('DisputeSettl')) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.InitValues = function() {
    try {

        var obj; // Utility Auto Fix Comments
        var tempFldName; // Utility Auto Fix Comments
        document.MAINFORM.FA_DSP_STATUS.value = '3';

        document.MAINFORM.FA_ACTION_TXT.value = '';
        document.MAINFORM.FA_DSP_RSN_TXT.value = '';
        document.MAINFORM.FA_MSG_TEXT.value = '';
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
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.PreconditionOnInit = function() {
    try {

        var issueadd; // Utility Auto Fix Comments
        var issueadd1; // Utility Auto Fix Comments
        var issuename; // Utility Auto Fix Comments
        var issuename1; // Utility Auto Fix Comments
        issuename = EEHtml.getElementById("aaa");
        issuename1 = EEHtml.getElementById("FA_INCO_NM");
        issueadd = EEHtml.getElementById("bbb");
        issueadd1 = EEHtml.getElementById("FA_INCO_ADD");
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE == 'IQ') {
            if (document.MAINFORM.FA_BUSI_TYPE.value != "IF") {
                issuename1.style.display = "none";
                issueadd1.style.display = "none";
                issuename.style.display = "none";
                issueadd.style.display = "none";
            }
        }
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.ConfirmBusinessCheckSave = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.addRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.editRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.deleteRecordCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_DIARY_NARRATIVE_onchange = function(event) {
    try {
        onChangeDiary();
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DSP_SETTLE_DT_onchange = function(event) {
    try {
        SYF_FAEF_MPO_DSP_SETTLE_DT();
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_DSP_STATUS_onchange = function(event) {
    try {
        SYF_FAEF_Cal_BUSI_STATUS();
        SYF_FAEF_MPO_DSP_SETTLE_DT();
        EEHtml.fireEvent(document.MAINFORM.FA_BUSI_STATUS, 'onchange');
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_FA_TTL_INV_NO_onchange = function(event) {
    try {
        SYF_FAEF_Chk_TotalInvoice();
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}

csFuncLevelProto.FLD_FAEF_view_1_onclick = function(event) {
    try {
        viewDiaryHistory();
    } catch (e) {
        DisExcpt("SYF_FAEF_DisputeSettlement.js", e);
    }
}