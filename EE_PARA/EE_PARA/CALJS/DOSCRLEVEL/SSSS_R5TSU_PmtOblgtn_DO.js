"path:SCRN/DO/R5TSU_PmtOblgtn_DO.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.ApplicableRules = function() {
    try {
        if (document.MAINFORM.TSU_URBPO_VRSN.value == "" && document.MAINFORM.TSU_URBPO_VRSN_OTHER.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_URBPO_VRSN, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_URBPO_VRSN_OTHER, 'O', 'N');
        } else if (document.MAINFORM.TSU_URBPO_VRSN.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_URBPO_VRSN, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_URBPO_VRSN_OTHER, 'P', 'N');
        } else if (document.MAINFORM.TSU_URBPO_VRSN_OTHER.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_URBPO_VRSN_OTHER, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_URBPO_VRSN, 'P', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.CheckAmt = function() {
    try {
        var AMT; // Utility Auto Fix Comments
        var PCTG; // Utility Auto Fix Comments
        var ches; // Utility Auto Fix Comments
        AMT = document.MAINFORM.TSU_PMTOBLGR_AMT.value;
        PCTG = document.MAINFORM.TSU_PMTOBLGR_PCTG.value;
        ches = document.getElementsByName("RadioGroup2");
        if (AMT != 0) {
            SwitchDsplay(0);
            ches[0].checked = true;
        } else if (PCTG != 0) {
            SwitchDsplay(1);
            ches[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        OBLGRBK_RECPTBK_DEFAULT();

        EEHtml.getElementById('RadioGroup2').checked = true;
        if (EEHtml.getElementById('RadioGroup2').checked == true) {
            SwitchDsplay(0);
        }
        TSU_CCY();
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.OBLGRBK_RECPTBK_DEFAULT = function() {
    try {
        var i; // Utility Auto Fix Comments
        var nBuyerBank; // Utility Auto Fix Comments
        var nSellerBank; // Utility Auto Fix Comments
        var rlen1; // Utility Auto Fix Comments
        var rlen2; // Utility Auto Fix Comments
        nBuyerBank = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.BuyerBank');
        records1 = parent.SYS_getRecords(nBuyerBank, 0);
        rlen1 = records1.length;
        for (i = 0; i < rlen1; i++) { // Utility Auto Fix Comments
            record1 = records1[i];
            document.MAINFORM.TSU_OBLGRBK_ID.value = record1.TSU_BUYER_BK_ID;
            document.MAINFORM.TSU_OBLGR_BK.value = record1.TSU_BUYER_BK_BIC;
            document.MAINFORM.TSU_OBLGRBK_NM.value = record1.TSU_BUYER_BK_NM;
        }

        nSellerBank = parent.SYS_getNodeByXpath('R2InvolvedPartyInfo.SellerBank');
        records2 = parent.SYS_getRecords(nSellerBank, 0);
        rlen2 = records2.length;
        for (i = 0; i < rlen2; i++) {
            record2 = records2[i];
            document.MAINFORM.TSU_RCPTBK_ID.value = record2.TSU_SEL_BK_ID;
            document.MAINFORM.TSU_RCPTBK.value = record2.TSU_SEL_BK_BIC;
            document.MAINFORM.TSU_RCPTBK_NM.value = record2.TSU_SEL_BK_NM;
        }
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        CheckAmt();
        TSU_CCY();
        TEMP_AMT();
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.PlaceOfJurisdiction = function() {
    try {
        if (document.MAINFORM.TSU_JUR_CODE.value == "" && document.MAINFORM.TSU_JUR_ID.value == "") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_JUR_CODE, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_JUR_ID, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_JUR_SCHM_NM, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_JUR_ISSR, 'O', 'N');
        } else if (document.MAINFORM.TSU_JUR_CODE.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_JUR_CODE, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_JUR_ID, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_JUR_SCHM_NM, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_JUR_ISSR, 'P', 'N')
        } else if (document.MAINFORM.TSU_JUR_ID.value != "") {
            SYT_ChangeFldClass(document.MAINFORM.TSU_JUR_CODE, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_JUR_ID, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_JUR_SCHM_NM, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_JUR_ISSR, 'O', 'N')
        }
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.SwitchDsplay = function(intTp) {
    try {
        switch (intTp) {
            case 0:
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMTOBLGR_AMT, 'M', 'N');
                EEHtml.getElementById("TSU_PMTOBLGR_PCTG").value = "0";
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMTOBLGR_PCTG, 'P', 'N');
                break;
            case 1:
                EEHtml.getElementById("TSU_PMTOBLGR_AMT").value = "0";
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMTOBLGR_AMT, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_PMTOBLGR_PCTG, 'M', 'N');
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.TEMP_AMT = function(node, recordindex) {
    try {
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        records = SYS_getRecords(node);
        len = records.length;
        for (i = 0; i < len; i++) {
            record = records[i];
            id = record.recordID;
            if (id == recordindex) {
                document.MAINFORM.TEMP_AMT.value = record.TSU_PMTOBLGR_AMT;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.TSUM_TSU_OBLGRBK_ID = function() {
    try {
        SYS_GetCUBK('TSU_OBLGRBK_ID', 'TSU_OBLGRBK_ID');
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.TSUM_TSU_RCPTBK_ID = function() {
    try {
        SYS_GetCUBK('TSU_RCPTBK_ID', 'TSU_RCPTBK_ID');
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.TSU_CCY = function() {
    try {
        var MainCCY; // Utility Auto Fix Comments
        MainCCY = parent.SYS_getValueFromMain('TSU_CCY');
        document.MAINFORM.TSU_CCY.value = MainCCY;
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.TotalAmt_Check = function() {
    try {
        var Line_ttl_amt; // Utility Auto Fix Comments
        var amt; // Utility Auto Fix Comments
        var cur; // Utility Auto Fix Comments
        var per; // Utility Auto Fix Comments
        var total; // Utility Auto Fix Comments
        amt = document.MAINFORM.TEMP_AMT.value;
        per = parent.SYS_getFieldSumByDoName('TSU_PMTOBLGR_AMT');
        cur = document.MAINFORM.TSU_PMTOBLGR_AMT.value;
        total = SYS_BeFloat(per) - SYS_BeFloat(amt) + SYS_BeFloat(cur);
        Line_ttl_amt = parent.SYS_getFieldSumByXpath('TSU_TTL_NET_AMT', 'R5Goods');

        if (total > Line_ttl_amt) {
            alert("Maximum amount that will be paid under the obligation can't over the line total amount.");
            document.MAINFORM.TSU_PMTOBLGR_AMT.value = '0';
            return false;
        } else {
            return true;

        }
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.TSU_JUR_CODE_onchange = function(event) {
    try {
        PlaceOfJurisdiction();
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.TSU_JUR_ID_onchange = function(event) {
    try {
        PlaceOfJurisdiction();
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.TSU_OBLGRBK_ID_onchange = function(event) {
    try {
        TSUM_TSU_OBLGRBK_ID();
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.TSU_RCPTBK_ID_onchange = function(event) {
    try {
        TSUM_TSU_RCPTBK_ID();
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.TSU_URBPO_VRSN_onchange = function(event) {
    try {
        ApplicableRules();
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}

csDOScreenProto.TSU_URBPO_VRSN_OTHER_onchange = function(event) {
    try {
        ApplicableRules();
    } catch (e) {
        DisExcpt("SSSS_R5TSU_PmtOblgtn_DO.js", e);
    }
}