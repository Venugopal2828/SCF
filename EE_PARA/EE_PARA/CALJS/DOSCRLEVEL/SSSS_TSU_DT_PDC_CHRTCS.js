"path:SCRN/DO/TSU_DT_PDC_CHRTCS.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_PDC_CHRTCS.js", e);
    }
}

csDOScreenProto.CheckPdcChrtcs = function() {
    try {
        var TSU_PDC_TP = document.MAINFORM.TSU_PDC_TP.value;
        var TSU_PDC_OTTP = document.MAINFORM.TSU_PDC_OTTP.value;
        var ches = document.getElementsByName("RadioGroup1");
        if (TSU_PDC_TP != '') {
            SwitchDsp(0);
            ches[0].checked = true;
        } else if (TSU_PDC_OTTP != '') {
            SwitchDsp(1);
            ches[1].checked = true;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_PDC_CHRTCS.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_PDC_CHRTCS.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_PDC_CHRTCS.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        EEHtml.getElementById('RadioGroup0').checked = true;
        if (EEHtml.getElementById('RadioGroup0').checked == true) {
            SwitchDsp(0);
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_PDC_CHRTCS.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        CheckPdcChrtcs();
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_PDC_CHRTCS.js", e);
    }
}

csDOScreenProto.SwitchDsp = function(intType) {
    try {
        switch (intType) {
            case 0:
                EEHtml.getElementById("TSU_PDC_OTTP").value = "";
                EEHtml.getElementById("TSU_PDC_OTID").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_PDC_OTTP, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_PDC_OTID, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_PDC_TP, 'M', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_PDC_DESC, 'M', 'Y');
                break;
            case 1:
                EEHtml.getElementById("TSU_PDC_TP").value = "";
                EEHtml.getElementById("TSU_PDC_DESC").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_PDC_TP, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_PDC_DESC, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_PDC_OTTP, 'M', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_PDC_OTID, 'M', 'Y');
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_DT_PDC_CHRTCS.js", e);
    }
}