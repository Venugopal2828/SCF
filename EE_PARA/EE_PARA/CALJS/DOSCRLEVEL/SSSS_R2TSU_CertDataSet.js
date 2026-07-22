"path:SCRN/DO/R2TSU_CertDataSet.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.ISSRIdentification = function() {
    try {
        var temp2 = document.MAINFORM.TSU_ISSR_ID.value;
        var temp1 = document.MAINFORM.TSU_ISSR_ID_TP.value;
        if (temp2 != '' || temp1 != '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_ISSR_ID_TP, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_ISSR_ID, 'M', 'N');
        } else if (temp2 == '' && temp1 == '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_ISSR_ID_TP, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_ISSR_ID, 'O', 'N');
            document.MAINFORM.TSU_ISSR_ID.value = '';
            document.MAINFORM.TSU_ISSR_ID_TP.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        document.MAINFORM.TSU_SUBMITR_BIC.value = SYS_LOGIN_BIC;
        document.MAINFORM.TSU_DS_VRSN.value = '1';
        getCERTRef();
        SYT_ChangeFldClass(document.MAINFORM.TSU_INSPCTN_FR_DT, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_INSPCTN_TO_DT, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ORGN, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_QLTY, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ANLYS, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_HLTH_INDCTN, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_PHYTOSN_INDCTN, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_UNIT_CD, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_OTUNIT, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_VAL, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_FCTR, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSUR2_QTY_UNIT_CD, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_OTUNIT, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_VAL, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_FCTR, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_ISSR_ID_TP, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_ISSR_ID, 'O', 'N');
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        TSU_CERT_TP();
        ISSRIdentification();
        TSU_ISS_CNTY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_CERT_TP = function() {
    try {
        var vTSU_CERT_TP = document.MAINFORM.TSU_CERT_TP.value;
        if (vTSU_CERT_TP == 'ORIG') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ORGN, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_QLTY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ANLYS, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_HLTH_INDCTN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_PHYTOSN_INDCTN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_UNIT_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_OTUNIT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_VAL, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_FCTR, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSUR2_QTY_UNIT_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_OTUNIT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_VAL, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_FCTR, 'P', 'N');
            document.MAINFORM.TSU_CERT_ANLYS.value = '';
            document.MAINFORM.TSU_CERT_QLTY.value = '';
            document.MAINFORM.TSU_HLTH_INDCTN.value = '';
            document.MAINFORM.TSU_PHYTOSN_INDCTN.value = '';
            document.MAINFORM.TSU_WGT_UNIT_CD.value = '';
            document.MAINFORM.TSU_WGT_OTUNIT.value = '';
            document.MAINFORM.TSU_WGT_VAL.value = '0';
            document.MAINFORM.TSU_WGT_FCTR.value = '0';
            document.MAINFORM.TSUR2_QTY_UNIT_CD.value = '';
            document.MAINFORM.TSU_QTY_OTUNIT.value = '';
            document.MAINFORM.TSU_QTY_VAL.value = '0';
            document.MAINFORM.TSU_QTY_FCTR.value = '0';
        }
        if (vTSU_CERT_TP == 'QUAL') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_QLTY, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ORGN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ANLYS, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_HLTH_INDCTN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_PHYTOSN_INDCTN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_UNIT_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_OTUNIT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_VAL, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_FCTR, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSUR2_QTY_UNIT_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_OTUNIT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_VAL, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_FCTR, 'P', 'N');
            document.MAINFORM.TSU_CERT_ANLYS.value = '';
            document.MAINFORM.TSU_CERT_ORGN.value = '';
            document.MAINFORM.TSU_HLTH_INDCTN.value = '';
            document.MAINFORM.TSU_PHYTOSN_INDCTN.value = '';
            document.MAINFORM.TSU_WGT_UNIT_CD.value = '';
            document.MAINFORM.TSU_WGT_OTUNIT.value = '';
            document.MAINFORM.TSU_WGT_VAL.value = '0';
            document.MAINFORM.TSU_WGT_FCTR.value = '0';
            document.MAINFORM.TSUR2_QTY_UNIT_CD.value = '';
            document.MAINFORM.TSU_QTY_OTUNIT.value = '';
            document.MAINFORM.TSU_QTY_VAL.value = '0';
            document.MAINFORM.TSU_QTY_FCTR.value = '0';
        }
        if (vTSU_CERT_TP == 'ANLY') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ANLYS, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ORGN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_QLTY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_HLTH_INDCTN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_PHYTOSN_INDCTN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_UNIT_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_OTUNIT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_VAL, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_FCTR, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSUR2_QTY_UNIT_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_OTUNIT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_VAL, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_FCTR, 'P', 'N');
            document.MAINFORM.TSU_CERT_QLTY.value = '';
            document.MAINFORM.TSU_CERT_ORGN.value = '';
            document.MAINFORM.TSU_HLTH_INDCTN.value = '';
            document.MAINFORM.TSU_PHYTOSN_INDCTN.value = '';
            document.MAINFORM.TSU_WGT_UNIT_CD.value = '';
            document.MAINFORM.TSU_WGT_OTUNIT.value = '';
            document.MAINFORM.TSU_WGT_VAL.value = '0';
            document.MAINFORM.TSU_WGT_FCTR.value = '0';
            document.MAINFORM.TSUR2_QTY_UNIT_CD.value = '';
            document.MAINFORM.TSU_QTY_OTUNIT.value = '';
            document.MAINFORM.TSU_QTY_VAL.value = '0';
            document.MAINFORM.TSU_QTY_FCTR.value = '0';
        }
        if (vTSU_CERT_TP == 'HEAL') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_HLTH_INDCTN, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ORGN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_QLTY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ANLYS, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_PHYTOSN_INDCTN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_UNIT_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_OTUNIT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_VAL, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_FCTR, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSUR2_QTY_UNIT_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_OTUNIT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_VAL, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_FCTR, 'P', 'N');
            document.MAINFORM.TSU_CERT_QLTY.value = '';
            document.MAINFORM.TSU_CERT_ORGN.value = '';
            document.MAINFORM.TSU_CERT_ANLYS.value = '';
            document.MAINFORM.TSU_PHYTOSN_INDCTN.value = '';
            document.MAINFORM.TSU_WGT_UNIT_CD.value = '';
            document.MAINFORM.TSU_WGT_OTUNIT.value = '';
            document.MAINFORM.TSU_WGT_VAL.value = '0';
            document.MAINFORM.TSU_WGT_FCTR.value = '0';
            document.MAINFORM.TSUR2_QTY_UNIT_CD.value = '';
            document.MAINFORM.TSU_QTY_OTUNIT.value = '';
            document.MAINFORM.TSU_QTY_VAL.value = '0';
            document.MAINFORM.TSU_QTY_FCTR.value = '0';
        }
        if (vTSU_CERT_TP == 'PHYT') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_PHYTOSN_INDCTN, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ORGN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_QLTY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ANLYS, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_HLTH_INDCTN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_UNIT_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_OTUNIT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_VAL, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_FCTR, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSUR2_QTY_UNIT_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_OTUNIT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_VAL, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_FCTR, 'P', 'N');
            document.MAINFORM.TSU_CERT_QLTY.value = '';
            document.MAINFORM.TSU_CERT_ORGN.value = '';
            document.MAINFORM.TSU_CERT_ANLYS.value = '';
            document.MAINFORM.TSU_HLTH_INDCTN.value = '';
            document.MAINFORM.TSU_WGT_UNIT_CD.value = '';
            document.MAINFORM.TSU_WGT_OTUNIT.value = '';
            document.MAINFORM.TSU_WGT_VAL.value = '0';
            document.MAINFORM.TSU_WGT_FCTR.value = '0';
            document.MAINFORM.TSUR2_QTY_UNIT_CD.value = '';
            document.MAINFORM.TSU_QTY_OTUNIT.value = '';
            document.MAINFORM.TSU_QTY_VAL.value = '0';
            document.MAINFORM.TSU_QTY_FCTR.value = '0';
        }
        if (vTSU_CERT_TP == 'WEIG') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_PHYTOSN_INDCTN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ORGN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_QLTY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ANLYS, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_HLTH_INDCTN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_UNIT_CD, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_OTUNIT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_VAL, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_FCTR, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSUR2_QTY_UNIT_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_OTUNIT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_VAL, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_FCTR, 'P', 'N');
            document.MAINFORM.TSU_CERT_ORGN.value = '';
            document.MAINFORM.TSU_CERT_QLTY.value = '';
            document.MAINFORM.TSU_CERT_ANLYS.value = '';
            document.MAINFORM.TSU_HLTH_INDCTN.value = '';
            document.MAINFORM.TSU_PHYTOSN_INDCTN.value = '';
            document.MAINFORM.TSUR2_QTY_UNIT_CD.value = '';
            document.MAINFORM.TSU_QTY_OTUNIT.value = '';
            document.MAINFORM.TSU_QTY_VAL.value = '0';
            document.MAINFORM.TSU_QTY_FCTR.value = '0';
            TSU_WGT_OTUNIT();
        }
        if (vTSU_CERT_TP == 'QUAN') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_PHYTOSN_INDCTN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ORGN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_QLTY, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_CERT_ANLYS, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_HLTH_INDCTN, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_UNIT_CD, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_OTUNIT, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_VAL, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_WGT_FCTR, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSUR2_QTY_UNIT_CD, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_OTUNIT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_VAL, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_QTY_FCTR, 'O', 'N');
            document.MAINFORM.TSU_CERT_ORGN.value = '';
            document.MAINFORM.TSU_CERT_QLTY.value = '';
            document.MAINFORM.TSU_CERT_ANLYS.value = '';
            document.MAINFORM.TSU_HLTH_INDCTN.value = '';
            document.MAINFORM.TSU_PHYTOSN_INDCTN.value = '';
            document.MAINFORM.TSU_WGT_UNIT_CD.value = '';
            document.MAINFORM.TSU_WGT_OTUNIT.value = '';
            document.MAINFORM.TSU_WGT_VAL.value = '0';
            document.MAINFORM.TSU_WGT_FCTR.value = '0';
            TSU_QTY_OTUNIT();
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_INSPCTN_DT = function() {
    try {
        var TSU_INSPCTN_FR_DT = document.MAINFORM.TSU_INSPCTN_FR_DT.value;
        var TSU_INSPCTN_TO_DT = document.MAINFORM.TSU_INSPCTN_TO_DT.value;
        if (TSU_INSPCTN_FR_DT != '' || TSU_INSPCTN_TO_DT != '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_INSPCTN_FR_DT, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_INSPCTN_TO_DT, 'M', 'N');
        }
        if (TSU_INSPCTN_FR_DT == '' && TSU_INSPCTN_TO_DT == '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_INSPCTN_FR_DT, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_INSPCTN_TO_DT, 'O', 'N');
            document.MAINFORM.TSU_INSPCTN_FR_DT.value = '';
            document.MAINFORM.TSU_INSPCTN_TO_DT.value = '';
        }
        if (TSU_INSPCTN_FR_DT != '' && TSU_INSPCTN_TO_DT != '' && (TSU_INSPCTN_TO_DT < TSU_INSPCTN_FR_DT)) {
            alert("The Inspection To Date can not be earlier than the Inspection From Date!");
            document.MAINFORM.TSU_INSPCTN_TO_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_ISS_CNTY = function() {
    try {
        var TSU_ISS_STREET = document.MAINFORM.TSU_ISS_STREET.value;
        var TSU_ISS_POST_CODE = document.MAINFORM.TSU_ISS_POST_CD.value;
        var TSU_ISS_TOWN = document.MAINFORM.TSU_ISS_TOWN.value;
        var TSU_ISS_CNTY_SUB = document.MAINFORM.TSU_ISS_CNTY_SUB.value;
        var vTSU_ISS_CNTY = document.MAINFORM.TSU_ISS_CNTY.value;
        if (TSU_ISS_STREET != '' || TSU_ISS_POST_CODE != '' || TSU_ISS_TOWN != '' || TSU_ISS_CNTY_SUB != '' || vTSU_ISS_CNTY != '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_ISS_CNTY, 'M', 'N');
        } else if (TSU_ISS_STREET == '' && TSU_ISS_POST_CODE == '' && TSU_ISS_TOWN == '' && TSU_ISS_CNTY_SUB == '' && vTSU_ISS_CNTY == '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_ISS_CNTY, 'O', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_QTY_OTUNIT = function() {
    try {
        var TSUR2_QTY_UNIT_CD = document.MAINFORM.TSUR2_QTY_UNIT_CD.options[document.MAINFORM.TSUR2_QTY_UNIT_CD.selectedIndex].text;
        if (TSUR2_QTY_UNIT_CD == 'Other') {
            document.MAINFORM.TSU_QTY_OTUNIT.className = 'CHAR_M';
            document.MAINFORM.TSUR2_QTY_UNIT_CD.className = 'CHAR_O';
            document.MAINFORM.TSU_QTY_OTUNIT.style.visibility = "visible";
        } else {
            document.MAINFORM.TSU_QTY_OTUNIT.className = 'CHAR_O';
            document.MAINFORM.TSUR2_QTY_UNIT_CD.className = 'CHAR_M';
            document.MAINFORM.TSU_QTY_OTUNIT.style.visibility = "hidden";
            document.MAINFORM.TSU_QTY_OTUNIT.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_WGT_OTUNIT = function() {
    try {
        var TSU_WGTL_UNIT_CD = document.MAINFORM.TSU_WGT_UNIT_CD.options[document.MAINFORM.TSU_WGT_UNIT_CD.selectedIndex].text;
        if (TSU_WGTL_UNIT_CD == 'Other') {
            document.MAINFORM.TSU_WGT_OTUNIT.className = 'CHAR_M';
            document.MAINFORM.TSU_WGT_UNIT_CD.className = 'CHAR_O';
            document.MAINFORM.TSU_WGT_OTUNIT.style.visibility = "visible";
        } else {
            document.MAINFORM.TSU_WGT_OTUNIT.className = 'CHAR_O';
            document.MAINFORM.TSU_WGT_UNIT_CD.className = 'CHAR_M';
            document.MAINFORM.TSU_WGT_OTUNIT.style.visibility = "hidden";
            document.MAINFORM.TSU_WGT_OTUNIT.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.getCERTRef = function() {
    try {
        var TSU_DATA_ID = "";
        var ref = parent.SYS_getValueFromMain('C_MAIN_REF');
        var Length = ref.length;
        Length = Length - 10;
        var DataIdSuf = ref.substr(10, Length);
        TSU_DATA_ID = SYS_LOGIN_BIC + "CERT" + DataIdSuf;
        document.MAINFORM.TSU_DS_ID.value = TSU_DATA_ID;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSUR2_QTY_UNIT_CD_onchange = function(event) {
    try {
        TSU_QTY_OTUNIT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_CERT_TP_onchange = function(event) {
    try {
        TSU_CERT_TP();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_INSPCTN_FR_DT_onchange = function(event) {
    try {
        TSU_INSPCTN_DT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_INSPCTN_TO_DT_onchange = function(event) {
    try {
        TSU_INSPCTN_DT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_ISSR_ID_onchange = function(event) {
    try {
        ISSRIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_ISSR_ID_TP_onchange = function(event) {
    try {
        ISSRIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_ISS_CNTY_onchange = function(event) {
    try {
        TSU_ISS_CNTY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_ISS_CNTY_SUB_onchange = function(event) {
    try {
        TSU_ISS_CNTY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_ISS_POST_CD_onchange = function(event) {
    try {
        TSU_ISS_CNTY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_ISS_STREET_onchange = function(event) {
    try {
        TSU_ISS_CNTY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_ISS_TOWN_onchange = function(event) {
    try {
        TSU_ISS_CNTY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}

csDOScreenProto.TSU_WGT_UNIT_CD_onchange = function(event) {
    try {
        TSU_WGT_OTUNIT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSet.js", e);
    }
}