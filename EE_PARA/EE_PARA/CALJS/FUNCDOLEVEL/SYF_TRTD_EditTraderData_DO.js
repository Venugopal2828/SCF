function AssignTraderToTeam_OnDeSelected(node, record, recordId) {
    try {
        var BE_SELECT_FLG = record.BE_SELECT_FLG;
        var selectID = record.recordID;
        if (BE_SELECT_FLG !== "N") {
            node.setFieldValue("", selectID, "BE_SELECT_FLG", "N");
        }
    } catch (e) {
        DisExcpt("SYF_TRTD_AmendTraderData_DO.js*AssignTraderToTeam_OnDeSelected", e);
    }
}

function AssignTraderToTeam_OnSelected(node, record, recordId) {
    try {
        var BE_SELECT_FLG = record.BE_SELECT_FLG;
        var selectID = record.recordID;
        if (BE_SELECT_FLG !== "Y") {
            node.setFieldValue("", selectID, "BE_SELECT_FLG", "Y");
        }
    } catch (e) {
        DisExcpt("SYF_TRTD_AmendTraderData_DO.js*AssignTraderToTeam_OnSelected", e);
    }
}

function SYF_TADR_getDOdata_AssignTraderToTeam() {
    try {

    } catch (e) {
        DisExcpt("SYF_TRTD_AmendTraderData_DO.js*SYF_TRTD_getDOdata_AssignTraderToTeam", e);
    }
}


function KDFolderDetails_OnDeSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TRTD_AmendTraderData_DO.js*KDFolderDetails_OnDeSelected", e);
    }
}

function KDFolderDetails_OnSelected(node, record, recordId) {
    try {

    } catch (e) {
        DisExcpt("SYF_TRTDAmendTraderData_DO.js*KDFolderDetails_OnSelected", e);
    }
}

function SYF_TADR_getDOdata_KDFolderDetails() {
    try {

    } catch (e) {
        DisExcpt("SYF_TRTD_AmendTraderData_DO.js*SYF_TRTD_getDOdata_KDFolderDetails", e);
    }
}