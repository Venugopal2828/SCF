"path:SCRN/DO/R2TSU_InsrncDataset.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.ASSRIdentification = function() {
    try {
        var temp3 = document.MAINFORM.TSU_ASSR_ID.value;
        var temp4 = document.MAINFORM.TSU_ASSR_ID_TP.value;
        if (temp3 != '' || temp4 != '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_ID_TP, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_ID, 'M', 'N');
        } else if (temp3 == '' && temp4 == '') {
            SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_ID_TP, 'O', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_ID, 'O', 'N');
            document.MAINFORM.TSU_ASSR_ID.value = '';
            document.MAINFORM.TSU_ASSR_ID_TP.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.CheckAssured = function() {
    try {
        var TSU_ASSR_BIC = document.MAINFORM.TSU_ASSR_BIC.value;
        var TSU_ASSR_NM = document.MAINFORM.TSU_ASSR_NM.value;
        var ches = document.getElementsByName("RadioGroup1");
        if (TSU_ASSR_BIC != '') {
            SwitchDsp(0);
            ches[0].checked = true;
        } else if (TSU_ASSR_NM != '') {
            SwitchDsp(1);
            ches[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
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
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        SYT_setFldValue("TSU_SUBMITR_BIC", SYS_LOGIN_BIC);
        document.MAINFORM.TSU_DS_VRSN.value = '1';
        getINSRRef();
        TSU_CCY();
        if (EEHtml.getElementById('RadioGroup0').checked == true) {
            SwitchDsp(0);
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        ISSRIdentification();
        TSU_ISS_CNTY();
        CheckAssured();
        ASSRIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.SwitchDsp = function(intType) {
    try {
        switch (intType) {
            case 0:
                EEHtml.getElementById("TSU_ASSR_NM").value = "";
                EEHtml.getElementById("TSU_ASSR_ID").value = "";
                EEHtml.getElementById("TSU_ASSR_ID_TP").value = "";
                EEHtml.getElementById("TSU_ASSR_STREET").value = "";
                EEHtml.getElementById("TSU_ASSR_TOWN").value = "";
                EEHtml.getElementById("TSU_ASSR_POST_CD").value = "";
                EEHtml.getElementById("TSU_ASSR_CNTY_SUB").value = "";
                EEHtml.getElementById("TSU_ASSR_CNTY").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_BIC, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_NM, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_ID, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_ID_TP, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_STREET, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_TOWN, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_POST_CD, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_CNTY_SUB, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_CNTY, 'P', 'N');
                break;
            case 1:
                EEHtml.getElementById("TSU_ASSR_BIC").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_BIC, 'P', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_NM, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_ID, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_ID_TP, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_STREET, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_TOWN, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_POST_CD, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_CNTY_SUB, 'O', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ASSR_CNTY, 'M', 'N');

                break;
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.TSU_CCY = function() {
    try {
        var mainccy = parent.SYS_getValueFromMain('TSU_CCY');
        document.MAINFORM.TSU_CCY.value = mainccy;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.TSU_INSRD_AMT = function() {
    try {
        document.MAINFORM.TSU_INSRD_AMT.value = SYT_CCY_AMT(document.MAINFORM.TSU_CCY.value, document.MAINFORM.TSU_INSRD_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
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
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.getINSRRef = function() {
    try {
        var TSU_DATA_ID = "";
        var ref = parent.SYS_getValueFromMain('C_MAIN_REF');
        var Length = ref.length;
        Length = Length - 10;
        var DataIdSuf = ref.substr(10, Length);
        TSU_DATA_ID = SYS_LOGIN_BIC + "INSR" + DataIdSuf;
        document.MAINFORM.TSU_DS_ID.value = TSU_DATA_ID;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.TSU_ASSR_ID_onchange = function(event) {
    try {
        ASSRIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.TSU_ASSR_ID_TP_onchange = function(event) {
    try {
        ASSRIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.TSU_INSRD_AMT_onchange = function(event) {
    try {
        TSU_INSRD_AMT();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.TSU_ISSR_ID_onchange = function(event) {
    try {
        ISSRIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.TSU_ISSR_ID_TP_onchange = function(event) {
    try {
        ISSRIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.TSU_ISS_CNTY_onchange = function(event) {
    try {
        TSU_ISS_CNTY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.TSU_ISS_CNTY_SUB_onchange = function(event) {
    try {
        TSU_ISS_CNTY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.TSU_ISS_POST_CD_onchange = function(event) {
    try {
        TSU_ISS_CNTY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.TSU_ISS_STREET_onchange = function(event) {
    try {
        TSU_ISS_CNTY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}

csDOScreenProto.TSU_ISS_TOWN_onchange = function(event) {
    try {
        TSU_ISS_CNTY();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataset.js", e);
    }
}