"path:SCRN/DO/R2TSU_Settlement_DO.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.AddSameDoRecord = function(attrName, xpath) {
    try {
        var i; // Utility Auto Fix Comments
        var idx; // Utility Auto Fix Comments
        var parent_node; // Utility Auto Fix Comments
        var rNode; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        parent_node = SYS_getNodeByXpath(xpath);
        records = SYS_getRecords(parent_node);
        for (i = 0; i < records.length; i++) { // Utility Auto Fix Comments
            idx = parent.SYS_getCurrNodeParentValue('R2PaymentObligation', 'TSU_SEQ_NUM');
            records[i].TSU_IDX = idx;
        }

        rNode = parent.DoFrame.tree.getCurrentTreeNode();
        if (records != "" && parent.DoFrame.tree.getPropertyValue(rNode, attrName) == undefined) {
            parent.DoFrame.tree.setPropertyValue(rNode, attrName, 1);
            SYS_insertRecordsToCurrentDO(records);
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.BIC = function() {
    try {
        if (document.MAINFORM.TSU_FININST_BIC.value == "") {
            if (document.MAINFORM.TSU_FININST_NM.value == "") {
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_BIC, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_NM, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_STREET_NM, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_CNTY_SUB_DIVI, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_CNTY, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_POST_CD, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_TOWN_NM, 'O', 'N');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_BIC, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_NM, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_STREET_NM, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_CNTY_SUB_DIVI, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_CNTY, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_POST_CD, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_TOWN_NM, 'M', 'N');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_BIC, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_NM, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_STREET_NM, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CNTY_SUB_DIVI, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_CNTY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_POST_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_TOWN_NM, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.CheckFinaInst = function() {
    try {
        var TSU_FININST_BIC; // Utility Auto Fix Comments
        var TSU_FININST_NAME; // Utility Auto Fix Comments
        TSU_FININST_BIC = document.MAINFORM.TSU_FININST_BIC.value;
        TSU_FININST_NAME = document.MAINFORM.TSU_FININST_NM.value;
        if (TSU_FININST_BIC != '') {
            SwitchDsp(0);
        } else if (TSU_FININST_NAME != '') {
            SwitchDsp(1);
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.DO_XPATH = function() {
    try {
        if (SYS_DO_XPATH == "R2SettlementTerms" || SYS_DO_XPATH == "R2SettlementTermsRe") {
            document.MAINFORM.TSU_IDX.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        DO_XPATH();
        if (SYS_DO_XPATH == "R2PaymentObligation.R2SettlementTerms2" || SYS_DO_XPATH == "R2PaymentObligationRe.R2SettlementTerms2") {
            AddSameDoRecord('R2SettlementTerms', 'Payment');
        }
        if (SYS_DO_XPATH == "R2ComrclDataset.R2DT_SttlmTerms") {
            checkSetment("R2ComrclDataset.R2DT_ComrclDocRef.R2DT_Goods");
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        CheckFinaInst();
        TSU_CDTRAC_TPCD();
        TsuBene();
        BIC();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.SwitchDsp = function(intType) {
    try {
        switch (intType) {
            case 0:
                document.MAINFORM.TSU_FININST_NM.value = '';
                document.MAINFORM.TSU_STREET_NM.value = '';
                document.MAINFORM.TSU_TOWN_NM.value = '';
                document.MAINFORM.TSU_POST_CD.value = '';
                document.MAINFORM.TSU_CNTY_SUB_DIVI.value = '';
                document.MAINFORM.TSU_FININST_CNTY.value = '';
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_BIC, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_NM, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_STREET_NM, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_TOWN_NM, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_POST_CD, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_CNTY_SUB_DIVI, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_CNTY, 'P', 'N');
                break;
            case 1:
                document.MAINFORM.TSU_FININST_BIC.value = '';
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_BIC, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_NM, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_STREET_NM, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_TOWN_NM, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_POST_CD, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_CNTY_SUB_DIVI, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_FININST_CNTY, 'M', 'N');

                break;
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.TSU_CDTRAC_TPCD = function() {
    try {
        if (document.MAINFORM.TSU_CDTRAC_TPCD.value == "") {
            if (document.MAINFORM.TSU_CDTRAC_TPID.value == "") {
                SYT_ChangeFldClass(document.MAINFORM.TSU_CDTRAC_TPCD, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_CDTRAC_TPID, 'O', 'N');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.TSU_CDTRAC_TPCD, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_CDTRAC_TPID, 'M', 'N');
                document.MAINFORM.TSU_CDTRAC_TPCD.value = "";
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TSU_CDTRAC_TPCD, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CDTRAC_TPID, 'P', 'N');
            document.MAINFORM.TSU_CDTRAC_TPID.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.TsuBene = function() {
    try {
        if (document.MAINFORM.TSU_BENE_BBAN.value == "") {
            if (document.MAINFORM.TSU_BENE_IBAN.value == "") {
                if (document.MAINFORM.TSU_BENE_UPIC.value == "") {
                    if (document.MAINFORM.TSU_BENE_ACC.value == "") {
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'M', 'N');
                    } else {
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'P', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'P', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'P', 'N');
                    }
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'M', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'P', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'P', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'P', 'N');
                }
            } else {
                SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'P', 'N');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_BBAN, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_UPIC, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_ACC, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_BENE_IBAN, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.checkSetment = function(xpath) {
    try {
        var i; // Utility Auto Fix Comments
        var ibr; // Utility Auto Fix Comments
        var k; // Utility Auto Fix Comments
        var parent_node; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        var selmentString; // Utility Auto Fix Comments
        parent_node = SYS_getNodeByXpath(xpath);
        records = SYS_getRecords(parent_node);
        selmentString = new Array();
        k = 0;
        for (i = 0; i < records.length; i++) {
            if (SYS_DO_XPATH == "R2ComrclDataset.R2DT_SttlmTerms") {
                if (records[i].TSU_SETTLEMENT != "") {
                    selmentString[k] = records[i].TSU_SETTLEMENT;
                    k++;
                }
            }
        }
        ibr = "";
        for (j = 0; j < selmentString.length; j++) {
            for (k = 0; k < selmentString.length; k++) {
                if (j !== k && selmentString[j] != selmentString[k]) {
                    alert("You have selected PO's with different settlement terms. Please verify!");
                    ibr = "B";
                    break;
                }
            }


        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.TSU_BENE_ACC_onchange = function(event) {
    try {
        TsuBene();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.TSU_BENE_BBAN_onchange = function(event) {
    try {
        TsuBene();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.TSU_BENE_IBAN_onchange = function(event) {
    try {
        TsuBene();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.TSU_BENE_UPIC_onchange = function(event) {
    try {
        TsuBene();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.TSU_CDTRAC_TPCD_onchange = function(event) {
    try {
        TSU_CDTRAC_TPCD();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.TSU_CDTRAC_TPID_onchange = function(event) {
    try {
        TSU_CDTRAC_TPCD();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.TSU_FININST_BIC_onchange = function(event) {
    try {
        BIC();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}

csDOScreenProto.TSU_FININST_NM_onchange = function(event) {
    try {
        BIC();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_Settlement_DO.js", e);
    }
}