"path:SCRN/DO/R2TSU_InsrncDataSetReqrd.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataSetReqrd.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataSetReqrd.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataSetReqrd.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        PartyIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataSetReqrd.js", e);
    }
}

csDOScreenProto.PartyIdentification = function() {
    try {
        if (document.MAINFORM.TSU_MTCH_ISS_ID.value == "") {
            if (document.MAINFORM.TSU_MTCH_ISS_IDTP.value == "") {
                if (document.MAINFORM.TSU_MTCH_ISS_NM.value == "") {
                    if (document.MAINFORM.TSU_MTCH_ISS_CTRY.value == "") {
                        SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_NM, 'O', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_CTRY, 'O', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_ID, 'O', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_IDTP, 'O', 'N');
                    } else {
                        SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_NM, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_CTRY, 'M', 'N');
                    }
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_NM, 'M', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_CTRY, 'M', 'N');
                }
            } else {
                SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_ID, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_IDTP, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_NM, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_CTRY, 'M', 'N');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_IDTP, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_ID, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_NM, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_CTRY, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_MTCH_ISS_CTRY_onchange = function(event) {
    try {
        PartyIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_MTCH_ISS_ID_onchange = function(event) {
    try {
        PartyIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_MTCH_ISS_IDTP_onchange = function(event) {
    try {
        PartyIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_MTCH_ISS_NM_onchange = function(event) {
    try {
        PartyIdentification();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_InsrncDataSetReqrd.js", e);
    }
}