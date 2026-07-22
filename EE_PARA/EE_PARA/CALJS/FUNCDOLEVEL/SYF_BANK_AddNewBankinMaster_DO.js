function PostAddress_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_BANK_AddNewBankinMaster_DO.js*PostAddress_OnDeSelected", e);
    }
}

function PostAddress_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_BANK_AddNewBankinMaster_DO.js*PostAddress_OnSelected", e);
    }
}

function SYF_BANK_getDOdata_PostAddress(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_BANK_AddNewBankinMaster_DO.js*SYF_BANK_getDOdata_PostAddress", e);
    }
}

function SYF_BANK_getDOdata_SwFMTAddress(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_BANK_AddNewBankinMaster_DO.js*SYF_BANK_getDOdata_SwFMTAddress", e);
    }
}

function SwFMTAddress_OnDeSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_BANK_AddNewBankinMaster_DO.js*SwFMTAddress_OnDeSelected", e);
    }
}

function SwFMTAddress_OnSelected(node, record, recordId) {
    try {} catch (e) {
        DisExcpt("SYF_BANK_AddNewBankinMaster_DO.js*SwFMTAddress_OnSelected", e);
    }
}

function SwFMTAddress(node, recordId, status) {
    try {
        SYM_BANK_VDO_SET();
    } catch (e) {
        DisExcpt("SYF_BANK_AddNewBankinMaster_DO.js*SwFMTAddress", e);
    }
}