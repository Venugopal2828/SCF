function PostAddress_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer_DO.js*PostAddress_OnDeSelected", e);
    }
}

function PostAddress_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer_DO.js*PostAddress_OnSelected", e);
    }
}

function SYF_STAT_getDOdata_PostAddress(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer_DO.js*SYF_STAT_getDOdata_PostAddress", e);
    }
}

function SYF_STAT_getDOdata_SwFMTAddress(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer_DO.js*SYF_STAT_getDOdata_SwFMTAddress", e);
    }
}

function SwFMTAddress_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer_DO.js*SwFMTAddress_OnDeSelected", e);
    }
}

function SwFMTAddress_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer_DO.js*SwFMTAddress_OnSelected", e);
    }
}

function SwFMTAddress(node, recordId, status) {
    try {
        SYM_STAT_VDO_SET();
    } catch (e) {
        DisExcpt("SYF_STAT_AddNewCustomer_DO.js*SwFMTAddress", e);
    }
}