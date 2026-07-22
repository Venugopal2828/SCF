function CollateralVariety_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TRDP_EditInspectInstitution_DO.js", e);
    }
}

function CollateralVariety_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TRDP_EditInspectInstitution_DO.js", e);
    }
}

function SYF_TRDP_getDOdata_CollateralVariety(node, recordId, status) {
    try {
        SYS_GetDataForDO_S("GetCollateralVariety", "N", false, '', "CollateralVariety");
    } catch (e) {
        DisExcpt("SYF_TRDP_EditInspectInstitution_DO.js", e);
    }
}


function PartyRegion_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TRDP_EditInspectInstitution_DO.js", e);
    }
}

function PartyRegion_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TRDP_EditInspectInstitution_DO.js", e);
    }
}

function SYF_TRDP_getDOdata_PartyRegion(node, recordId, status) {
    try {
        SYS_GetDataForDO_S("GetPartyRegion", "N", false, '', "PartyRegion");
    } catch (e) {
        DisExcpt("SYF_TRDP_EditInspectInstitution_DO.js", e);
    }
}