"path:SCRN/DO/TSU_pmtTerm_DO.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.AddSameDoRecord = function(xpath, attrName) {
    try {
        var curr_node; // Utility Auto Fix Comments
        var currrecords; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var idx; // Utility Auto Fix Comments
        var parent_node; // Utility Auto Fix Comments
        var rNode; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        curr_node = SYS_getcurrRecordCount('R2PaymentObligation.PaymentTerms1');
        currrecords = SYS_getRecords(curr_node);
        if (currrecords.length == 0) {
            parent_node = SYS_getNodeByXpath(xpath);
            records = SYS_getRecords(parent_node);
            for (i = 0; i < records.length; i++) { // Utility Auto Fix Comments
                if (SYS_DO_XPATH == "R2PaymentObligation.PaymentTerms1") {
                    idx = parent.SYS_getCurrNodeParentValue('R2PaymentObligation', 'TSU_SEQ_NUM');
                    records[i].TSU_IAFT_NO = "OBLGN" + idx + i;
                }
            }
            rNode = parent.DoFrame.tree.getCurrentTreeNode();
            if (records != "" && parent.DoFrame.tree.getPropertyValue(rNode, attrName) == undefined) {
                parent.DoFrame.tree.setPropertyValue(rNode, attrName, 1);
                SYS_insertRecordsToCurrentDO(records);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}

csDOScreenProto.CheckAmt = function() {
    try {
        var TSU_PMT_AMT; // Utility Auto Fix Comments
        var TSU_PMT_PER; // Utility Auto Fix Comments
        var chec; // Utility Auto Fix Comments
        TSU_PMT_AMT = document.MAINFORM.TSU_PMT_AMT.value;
        TSU_PMT_PER = document.MAINFORM.TSU_PMT_PER.value;
        chec = document.getElementsByName("RadioGroup2");
        if (TSU_PMT_AMT != 0) {
            SwitchDsplay(0);
            chec[0].checked = true;
        } else if (TSU_PMT_PER != 0) {
            SwitchDsplay(1);
            chec[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}

csDOScreenProto.CheckPaymCd = function() {
    try {
        var TSU_PMT_CODE; // Utility Auto Fix Comments
        var TSU_PMT_OT_TERM; // Utility Auto Fix Comments
        var ches; // Utility Auto Fix Comments
        TSU_PMT_CODE = document.MAINFORM.TSU_PMT_CD.value;
        TSU_PMT_OT_TERM = document.MAINFORM.TSU_PMT_OT_TERM.value;
        ches = document.getElementsByName("RadioGroup1");
        if (TSU_PMT_CODE != '') {
            SwitchDsp(0);
            ches[0].checked = true;
        } else if (TSU_PMT_OT_TERM != '') {
            SwitchDsp(1);
            ches[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        EEHtml.getElementById('RadioGroup0').checked = true;
        EEHtml.getElementById('RadioGroup2').checked = true;
        TSU_CCY();
        TSU_IAFT_NO();
        if (EEHtml.getElementById('RadioGroup0').checked == true) {
            SwitchDsp(0);
        }
        if (EEHtml.getElementById('RadioGroup2').checked == true) {
            SwitchDsplay(0);
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        CheckPaymCd();
        CheckAmt();
        document.MAINFORM.TEMP_AMT.value = document.MAINFORM.TSU_PMT_PER.value;
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}

csDOScreenProto.Percentage_Check = function() {
    try {
        var amt; // Utility Auto Fix Comments
        var cur; // Utility Auto Fix Comments
        var per; // Utility Auto Fix Comments
        var total; // Utility Auto Fix Comments
        amt = document.MAINFORM.TEMP_AMT.value;
        per = parent.SYS_getFieldSumByDoName('TSU_PMT_PER');
        cur = parent.SYS_getCurrDoScreenValue('TSU_PMT_PER');
        total = SYS_BeFloat(per) - SYS_BeFloat(amt) + SYS_BeFloat(cur);
        if (total > 100) {
            alert("The total of all percentages must be equal to 100.");
            document.MAINFORM.TSU_PMT_PER.value = '0';
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}

csDOScreenProto.SwitchDsp = function(intType) {
    try {
        switch (intType) {
            case 0:
                EEHtml.getElementById("TSU_PMT_OT_TERM").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMT_CD, 'M', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMT_OT_TERM, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMT_DAYS, 'O', 'Y');
                break;
            case 1:
                EEHtml.getElementById("TSU_PMT_CD").value = "";
                EEHtml.getElementById("TSU_PMT_DAYS").value = "0";
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMT_OT_TERM, 'M', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMT_CD, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMT_DAYS, 'P', 'Y');
                break;

        }
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}

csDOScreenProto.SwitchDsplay = function(intTp) {
    try {
        switch (intTp) {
            case 0:
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMT_AMT, 'M', 'N');
                EEHtml.getElementById("TSU_PMT_PER").value = "0";
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMT_PER, 'P', 'N');
                break;
            case 1:
                EEHtml.getElementById("TSU_PMT_AMT").value = "0";
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMT_AMT, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMT_PER, 'M', 'N');
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}

csDOScreenProto.TSU_CCY = function() {
    try {
        var mainccy; // Utility Auto Fix Comments
        mainccy = parent.SYS_getValueFromMain('TSU_CCY');
        document.MAINFORM.TSU_CCY.value = mainccy;
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}

csDOScreenProto.TSU_IAFT_NO = function() {
    try {
        var IAFT_NO; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var idx; // Utility Auto Fix Comments
        var maximum; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        records = parent.SYS_getGrpDataByFldNm('I_SEQ_NUM');
        maximum = 0;
        for (i = 0; i < records.length; i++) {
            if (records[i] < records[i + 1]) {
                maximum = records[i + 1];
            } else {
                maximum = records[i];
            }
        }
        IAFT_NO = parseInt(maximum, 0) + 1;

        if (SYS_DO_XPATH == "R2PaymentTerms" || SYS_DO_XPATH == "R2PaymentTermsRe") {
            document.MAINFORM.TSU_IAFT_NO.value = "PMT" + IAFT_NO;
        } else if (SYS_DO_XPATH == "R2PaymentObligation.PaymentTerms1") {
            idx = parent.SYS_getCurrNodeParentValue('R2PaymentObligation', 'I_SEQ_NUM');
            document.MAINFORM.TSU_IAFT_NO.value = "OBLGN" + IAFT_NO;
        } else if (SYS_DO_XPATH == "R2PaymentObligationRe.PaymentTerms1") {
            idx = parent.SYS_getCurrNodeParentValue('R2PaymentObligationRe', 'I_SEQ_NUM');
            document.MAINFORM.TSU_IAFT_NO.value = "OBLGN" + IAFT_NO;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}

csDOScreenProto.TSU_PMT_PER_onchange = function(event) {
    try {
        Percentage_Check();
    } catch (e) {
        DisExcpt("SSSS_TSU_pmtTerm_DO.js", e);
    }
}