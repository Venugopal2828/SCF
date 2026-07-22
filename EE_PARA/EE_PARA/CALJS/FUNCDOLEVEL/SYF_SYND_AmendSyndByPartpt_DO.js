function ParticipantHeader_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt_DO.js", e);
    }
}

function ParticipantHeader_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt_DO.js", e);
    }
}

function ParticipantHeader_ParticipantDetail(node, recordId, status) {
    try {
        document.MAINFORM.SYND_PART_NO.value = node.getRecordCount();
        /*
	document.MAINFORM.SYND_AMT.value=SYS_BeFloat(SYS_getFieldSumValue(node,'SYND_PART_FAMT'));
	document.MAINFORM.SYND_AMT.fireEvent('onchange');
*/
        var targetdo = SYS_getDoByXpath('ParticipantHeader.ParticipantDetail');
        var sum = targetdo.getFieldSumValue('FUND_AMT', 2);
        var amt = 0;
        if (!isNaN(sum)) {
            amt = SYS_BeFloat(sum);
        }
        var obj = SYS_getScreenObjByxpath("ParticipantHeader", "TTL_FUNDED_AMT");
        var ccyObj = SYS_getScreenObjByxpath("ParticipantHeader", "SYND_CCY");
        obj.value = SYT_AmtFormat(ccyObj.value, amt);
        var SYND_AMT = SYS_getScreenObjByxpath("ParticipantHeader", "SYND_AMT");
        var FUND_FLAG = SYS_getScreenObjByxpath("ParticipantHeader", "FUND_FLAG");
        if (SYS_BeFloat(obj.value) == SYS_BeFloat(SYND_AMT.value)) {
            FUND_FLAG.value = "Funded";
        } else if (SYS_BeFloat(obj.value) == 0) {
            FUND_FLAG.value = "Unfunded";
        } else if (SYS_BeFloat(obj.value) < SYS_BeFloat(SYND_AMT.value)) {
            FUND_FLAG.value = "Part Funded";
        }
    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt_DO.js", e);
    }
}

function ParticipantHeader_ParticipantDetail_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt_DO.js", e);
    }
}

function ParticipantHeader_ParticipantDetail_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt_DO.js", e);
    }
}

function SYF_SYND_getDOdata_ParticipantHeader() {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt_DO.js", e);
    }
}

function SYF_SYND_getDOdata_ParticipantHeader_ParticipantDetail() {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_AmendSyndByPartpt_DO.js", e);
    }
}