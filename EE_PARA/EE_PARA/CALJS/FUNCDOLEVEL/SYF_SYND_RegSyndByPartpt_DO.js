function AdviceForBankCust_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt_DO.js", e);
    }
}

function AdviceForBankCust_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt_DO.js", e);
    }
}

function SYF_SYND_getDOdata_AdviceForBankCust() {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt_DO.js", e);
    }
}


function ParticipantHeader_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt_DO.js", e);
    }
}

function ParticipantHeader_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt_DO.js", e);
    }
}

function ParticipantHeader_ParticipantDetail(node, recordId, status) {
    try {
        document.MAINFORM.SYND_PART_NO.value = node.getRecordCount();
        var targetdo = SYS_getDoByXpath('ParticipantHeader.ParticipantDetail');
        var sum = targetdo.getFieldSumValue('FUND_AMT', 2);
        var amt = SYS_BeFloat(sum);
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
        DisExcpt("SYF_SYND_RegSyndByPartpt_DO.js", e);
    }
}

function ParticipantHeader_ParticipantDetail_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt_DO.js", e);
    }
}

function ParticipantHeader_ParticipantDetail_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt_DO.js", e);
    }
}

function SYF_SYND_getDOdata_ParticipantHeader() {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt_DO.js", e);
    }
}

function SYF_SYND_getDOdata_ParticipantHeader_ParticipantDetail() {
    try {

    } catch (e) {
        DisExcpt("SYF_SYND_RegSyndByPartpt_DO.js", e);
    }
}