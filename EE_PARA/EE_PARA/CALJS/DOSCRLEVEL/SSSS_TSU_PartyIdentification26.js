"path:SCRN/DO/TSU_PartyIdentification26.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.AddSameDoRecord = function(xpath, attrName) {
    try {
        var i; // Utility Auto Fix Comments
        var idx; // Utility Auto Fix Comments
        var parent_node; // Utility Auto Fix Comments
        var rNode; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        parent_node = SYS_getNodeByXpath(xpath);
        records = SYS_getRecords(parent_node);
        for (i = 0; i < records.length; i++) { // Utility Auto Fix Comments
            if (SYS_DO_XPATH == "R2TrnsprtDataset.DT_Buyer" || SYS_DO_XPATH == "R2TrnsprtDataset.DT_Seller") {
                idx = parent.SYS_getCurrNodeParentValue('R2TrnsprtDataset', 'TSU_TRAN_INF');
                records[i].TSU_IDX = idx;
            }
        }
        rNode = parent.DoFrame.tree.getCurrentTreeNode();
        if (records != "" && parent.DoFrame.tree.getPropertyValue(rNode, attrName) == undefined) {
            parent.DoFrame.tree.setPropertyValue(rNode, attrName, 1);
            SYS_insertRecordsToCurrentDO(records);
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.CUST_ID = function() {
    try {
        var notshowError; // Utility Auto Fix Comments
        notshowError = true;
        SYS_GetCUBK('TSU_CUST_ID', 'CUST_ID', '', '', notshowError);
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        if (SYS_DO_XPATH == "R2ComrclDataset.DT_Buyer" || SYS_DO_XPATH == "R2ComrclDataset.DT_Seller" || SYS_DO_XPATH == "R2ComrclDataset.DT_BillTo") {
            document.MAINFORM.TSU_IDX.value = 0;
        }
        if (SYS_DO_XPATH == "R2TrnsprtDataset.DT_Buyer") {
            AddSameDoRecord('R2ComrclDataset.DT_Buyer', 'Buyer');
        }
        if (SYS_DO_XPATH == "R2TrnsprtDataset.DT_Seller") {
            AddSameDoRecord('R2ComrclDataset.DT_Seller', 'Seller');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        PartyIdentification();
        XPathCheck();
        if (SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'PM') {
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "CUST_ID";
            SYS_GetTableDataByRule('SSSS_TSU_PartyIdentification26_OnSelected_0', '1', '', '', 'Y');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.PartyIdentification = function() {
    try {
        var temp1; // Utility Auto Fix Comments
        var temp2; // Utility Auto Fix Comments
        temp2 = document.MAINFORM.TSU_PARTY_ID.value;
        temp1 = document.MAINFORM.TSU_PARTY_ID_TP.value;
        if (temp2 != '' || temp1 != '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_PARTY_ID_TP, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_PARTY_ID, 'M', 'N');
        } else if (temp2 == '' && temp1 == '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_PARTY_ID_TP, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_PARTY_ID, 'O', 'N');
            document.MAINFORM.TSU_PARTY_ID.value = '';
            document.MAINFORM.TSU_PARTY_ID_TP.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.RETURN_PARTYINFO = function() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        //sFieldList = "CNTY_CODE;POST_CODE;CUST_CITY;CUST_STREET_NM;CUST_CNTY_SUB_DIVI";
        //sMappingList = "TSU_PARTY_CNTY;TSU_POST_CD;TSU_TOWN_NM;TSU_STREET_NM;TSU_CNTY_SUB_DIVI";
        SYS_GetTableDataByRule('SSSS_TSU_PartyIdentification26_RETURN_PARTYINFO_1', '1', '', '', 'Y');
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.TSU_PARTY_NAME = function() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        //sFieldList = "C_MAIN_REF";
        //sMappingList = "TEMP_CHAR1";
        SYS_GetTableDataByRule('SSSS_TSU_PartyIdentification26_TSU_PARTY_NAME_2', '1', '', '', 'Y');
        if (document.MAINFORM.TEMP_CHAR1.value != '' && document.MAINFORM.TEMP_CHAR1.value != null) {
            RETURN_PARTYINFO();
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.XPathCheck = function() {
    try {
        if (SYS_DO_XPATH == "R2ForwdDataSetReport.R2CertDataSet017.DT_CertParty.DT_Consgnr" || SYS_DO_XPATH == "R2ForwdDataSetReport.R2CertDataSet017.DT_CertParty.DT_Consgn" || SYS_DO_XPATH == "R2ForwdDataSetReport.R2CertDataSet017.DT_CertParty.DT_Manfctr") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNTY_SUB_DIVI, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_PARTY_CNTY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_PARTY_ID, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_PARTY_ID_TP, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_PARTY_NM, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_POST_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_STREET_NM, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_TOWN_NM, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.convString = function(strValue) {
    try {
        var iIndex; // Utility Auto Fix Comments
        if (strValue == null) {
            return null;
        }
        iIndex = strValue.indexOf("'", 0);
        if (iIndex >= 0) {
            strValue = strValue.replace("'", "''");
        }
        return strValue;
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.CUST_ID_onchange = function(event) {
    try {
        CUST_ID();
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.TEMP_CHAR1_onchange = function(event) {
    try {

    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}
csDOScreenProto.TSU_PARTY_ID_onchange = function(event) {
    try {
        PartyIdentification();
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.TSU_PARTY_ID_TP_onchange = function(event) {
    try {
        PartyIdentification();
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}

csDOScreenProto.TSU_PARTY_NM_onchange = function(event) {
    try {
        TSU_PARTY_NAME();
    } catch (e) {
        DisExcpt("SSSS_TSU_PartyIdentification26.js", e);
    }
}