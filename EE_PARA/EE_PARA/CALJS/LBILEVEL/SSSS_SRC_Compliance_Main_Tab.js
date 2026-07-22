"path:SCRN/Library/COMMON/Compliance_Main_Tab.lbi";

var csLbiCompProto = {};

var COMPLIANCE_FIELD_DESC = '';
var COMPLIANCE_FIELD_LIST = '';

csLbiCompProto.ComplianceCheck = function() {
    try {
        var fieldData; // Utility Auto Fix Comments
        var fieldDesc; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        if (COMPLIANCE_FIELD_LIST == undefined || COMPLIANCE_FIELD_DESC == undefined) {
            alert("Please define the fields for Compliance checking!");
            return;
        }
        ComplianceInit();

        fieldData = "";
        fieldDesc = "";

        for (i = 0; i < COMPLIANCE_FIELD_LIST.length; i++) { // Utility Auto Fix Comments
            if (EEHtml.getElementById(COMPLIANCE_FIELD_LIST[i]) != undefined && EEHtml.getElementById(COMPLIANCE_FIELD_LIST[i]).value != "") {
                if (fieldData != "") {
                    fieldData += "\t";
                    fieldDesc += "\t";
                }
                fieldData += EEHtml.getElementById(COMPLIANCE_FIELD_LIST[i]).value;
                if (COMPLIANCE_FIELD_DESC[i] != undefined) {
                    fieldDesc += COMPLIANCE_FIELD_DESC[i];
                } else {
                    fieldDesc += COMPLIANCE_FIELD_LIST[i];
                }
            }

        }

        if (fieldData != '') {
            document.MAINFORM.COMPLIANCE_FIELD_NAMES.value = fieldDesc;
            document.MAINFORM.COMPLIANCE_FIELD_VALUES.value = fieldData;
            SYS_InqGapi('SYS_ComplianceCheck', 'ComplianceRetSucc()');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Compliance_Main_Tab.js", e);
    }
}

csLbiCompProto.ComplianceInit = function() {
    try {
        COMPLIANCE_FIELD_LIST = new Array('BENE_NM', 'BENE_ADD1', 'BENE_ADD2', 'BENE_ADD3', 'BENE_MAIL_ADD', 'APPL_NM', 'APPL_ADD1', 'APPL_ADD2', 'APPL_ADD3', 'APPL_MAIL_ADD', 'DRWR_NM', 'DRWR_ADD1', 'DRWR_ADD2', 'DRWR_ADD3', 'DRWR_MAIL_ADD', 'DRWE_NM', 'DRWE_ADD1', 'DRWE_ADD2', 'DRWE_ADD3', 'DRWE_MAIL_ADD');
        COMPLIANCE_FIELD_DESC = new Array('Beneficiary Name', 'Bene Address 1', 'Bene Address 2', 'Bene Address 3', 'Bene Mail Address', 'Applicant Name', 'Appl. Address 1', 'Appl. Address 2', 'Appl. Address 3', 'Appl. Mail Address', 'Drawer Name', 'Drawer Address 1', 'Drawer Address 2', 'Drawer Address 3', 'Drawer Mail Address', 'Drawee Name', 'Drawee Address 1', 'Drawee Address 2', 'Drawee Address 3', 'Drawee Mail Address');
    } catch (e) {
        DisExcpt("SSSS_SRC_Compliance_Main_Tab.js", e);
    }
}

csLbiCompProto.ComplianceRetSucc = function() {
    try {
        var ComplianceHits; // Utility Auto Fix Comments
        var allData; // Utility Auto Fix Comments
        var count; // Utility Auto Fix Comments
        var index; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var result; // Utility Auto Fix Comments
        var xmlDoc; // Utility Auto Fix Comments
        result = document.MAINFORM.INTF_STATUSDESC.value;
        result = result.replace(new RegExp(/\\n/g), '\n');
        document.MAINFORM.INTF_STATUSDESC.value = result;

        if (result != "") {
            Popup_Confirm(document.MAINFORM.INTF_STATUSDESC.value, 'Popup_ConfirmReturnMethod()');
            document.MAINFORM.COMPLIANCE_STAT.value = "NOT PASSED";
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
            xmlDoc.loadXML(SYT_base64_decode(document.MAINFORM.COMPLIANCE_HITDETAILS_B64.value));

            xmlDoc.setProperty("SelectionLanguage", "XPath");
            hitField = xmlDoc.selectNodes("//ComplianceCheck//HITS//FIELD");

            ComplianceHits = SYS_getDoByXpath("ComplianceHits");
            ComplianceHits.clearAll(false);
            allData = [];

            for (count = 0; count < hitField.length; count++) {
                ComplianceHits.addRecord_click();
                nodeFieldName = hitField[count].getElementsByTagName("C_HIT_FIELDNAME")[0];
                nodeStopDesc = hitField[count].getElementsByTagName("C_HIT_STOPDESC")[0];
                index = ComplianceHits.currInstance.sequence;
                record = ComplianceHits.getRecord(index - 1);
                record = SYS_setValToRec(record, "C_HIT_DECISION", "Fail");
                record = SYS_setValToRec(record, "C_HIT_USERNAME", SYS_USER_ID);
                record = SYS_setValToRec(record, "C_HIT_FIELDNAME", nodeFieldName.childNodes[0].nodeValue);
                record = SYS_setValToRec(record, "C_HIT_STOPDESC", nodeStopDesc.childNodes[0].nodeValue);
                allData[count] = record;
            }
            SYS_reLoadGrid(ComplianceHits, allData);

        } else {
            document.MAINFORM.COMPLIANCE_STAT.value = "PASSED";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Compliance_Main_Tab.js", e);
    }
}