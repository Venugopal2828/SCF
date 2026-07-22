"path:SCRN/DO/TSU_015_Element.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_015_Element.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_015_Element.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_TSU_015_Element.js", e);
    }
}

csDOScreenProto.PreconditionOnInit = function() {
    try {
        //switch();
    } catch (e) {
        DisExcpt("SSSS_TSU_015_Element.js", e);
    }
}

csDOScreenProto.SwitchDsp = function(intType) {
    try {
        switch (intType) {
            case 0:
                EEHtml.getElementById("TSU_DELTN").value = "";
                EEHtml.getElementById("TSU_ADDTN").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_RPLC_MNT, 'M', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_DELTN, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ADDTN, 'P', 'Y');
                break;
            case 1:
                EEHtml.getElementById("TSU_RPLC_MNT").value = "";
                EEHtml.getElementById("TSU_ADDTN").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_RPLC_MNT, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ADDTN, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_DELTN, 'M', 'Y');
                break;
            case 2:
                EEHtml.getElementById("TSU_RPLC_MNT").value = "";
                EEHtml.getElementById("TSU_DELTN").value = "";
                SYT_ChangeFldClass(document.MAINFORM.TSU_RPLC_MNT, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_DELTN, 'P', 'Y');
                SYT_ChangeFldClass(document.MAINFORM.TSU_ADDTN, 'M', 'Y');
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_TSU_015_Element.js", e);
    }
}

csDOScreenProto.TSU_DELTN_onchange = function(event) {
    try {
        SwitchDsp(1);
    } catch (e) {
        DisExcpt("SSSS_TSU_015_Element.js", e);
    }
}