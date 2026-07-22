function CollatScope_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement_DO.js", e);
    }
}

function CollatScope_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement_DO.js", e);
    }
}

function SYF_ABLF_getDOdata_CollatScope(node, recordId, status) {
    try {
        SYS_GetDataForDO_S("Get_CollatScope", "N", false, '', "CollatScope");
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement_DO.js", e);
    }
}


function InspectScope_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement_DO.js", e);
    }
}

function InspectScope_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement_DO.js", e);
    }
}

function SYF_ABLF_getDOdata_InspectScope(node, recordId, status) {
    try {
        SYS_GetDataForDO_S("Get_InspectScope", "N", false, '', "InspectScope");
    } catch (e) {
        DisExcpt("SYF_ABLF_AmendAgreement_DO.js", e);
    }
}