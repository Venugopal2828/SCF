"path:SCRN/DO/ComplianceHitsDO_Detail.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_ComplianceHitsDO_Detail.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        var ComplianceChild; // Utility Auto Fix Comments
        var Status; // Utility Auto Fix Comments
        var count; // Utility Auto Fix Comments
        var editRecord; // Utility Auto Fix Comments
        var hitCount; // Utility Auto Fix Comments
        var hitDecision; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        ComplianceChild = SYS_getDoByXpath("ComplianceHits");
        Status = "PASSED";
        hitCount = parseInt(SYS_getcurrRecordCount("ComplianceHits"), 10);
        if (hitCount == null || isNaN(hitCount) || hitCount == 0) {
            return;
        }
        editRecord = ComplianceChild.getCurrentRecord();
        currIndex = SYS_getRecID(editRecord);

        if (document.MAINFORM.C_HIT_DECISION.value == "Compliance Dept") {
            Status = "PENDING";
        } else {
            for (count = 0; count < hitCount; count++) { // Utility Auto Fix Comments
                if (count == currIndex) {
                    continue;
                }
                record = ComplianceChild.getRecord(count);
                hitDecision = SYS_getValFromRec(record, "C_HIT_DECISION");
                if (hitDecision == "Compliance Dept") {
                    Status = "PENDING";
                    break;
                }
                if (hitDecision == "Fail") {
                    Status = "NOT PASSED";
                }
            }
        }
        SYS_setValueToMain("COMPLIANCE_STAT", Status);

        return true;
    } catch (e) {
        DisExcpt("SSSS_ComplianceHitsDO_Detail.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_ComplianceHitsDO_Detail.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.C_HIT_USERNAME.value = SYS_USER_ID;
    } catch (e) {
        DisExcpt("SSSS_ComplianceHitsDO_Detail.js", e);
    }
}