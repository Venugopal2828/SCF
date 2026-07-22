function CollateralAdjustment_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralDischarge_DO.js", e);
    }
}

function CollateralAdjustment_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralDischarge_DO.js", e);
    }
}

function SYF_ABLF_getDOdata_CollateralAdjustment(node, recordId, status) {
    try {
        SYS_GetDataForDO_S("Get_Collateral", "N", false, '', "CollateralAdjustment");
    } catch (e) {
        DisExcpt("SYF_ABLF_CollateralDischarge_DO.js", e);
    }
}