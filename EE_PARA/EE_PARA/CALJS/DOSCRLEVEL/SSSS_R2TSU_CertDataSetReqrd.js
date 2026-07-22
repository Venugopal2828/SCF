"path:SCRN/DO/R2TSU_CertDataSetReqrd.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.ISSUER = function() {
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
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.InitValues = function() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_NM, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_CTRY, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_ID, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_ISS_IDTP, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_MAUF_NM, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_CTRY, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_ID, 'O', 'N');
        SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_IDTP, 'O', 'N');
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.MANUFACTURE = function() {
    try {
        if (document.MAINFORM.TSU_MANUF_ID.value == "") {
            if (document.MAINFORM.TSU_MANUF_IDTP.value == "") {
                if (document.MAINFORM.TSU_MTCH_MAUF_NM.value == "") {
                    if (document.MAINFORM.TSU_MANUF_CTRY.value == "") {
                        SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_MAUF_NM, 'O', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_CTRY, 'O', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_ID, 'O', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_IDTP, 'O', 'N');
                    } else {
                        SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_MAUF_NM, 'M', 'N');
                        SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_CTRY, 'M', 'N');
                    }
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_MAUF_NM, 'M', 'N');
                    SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_CTRY, 'M', 'N');
                }
            } else {
                SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_MAUF_NM, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_CTRY, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_ID, 'M', 'N');
                SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_IDTP, 'M', 'N');
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TSU_MTCH_MAUF_NM, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_CTRY, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_ID, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.TSU_MANUF_IDTP, 'M', 'N');
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.OnSelected = function() {
    try {
        ISSUER();
        MANUFACTURE();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_CERT_TP = function() {
    try {
        var vTSU_CERT_TP = document.MAINFORM.TSU_CERT_TP.value;
        if (vTSU_CERT_TP == 'ORIG') {
            document.MAINFORM.TSU_MTCH_ISS_DTTM.value = 'false';
            document.MAINFORM.TSU_MTCH_INSPC_DTTM.value = 'false';
        }
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_CERT_TP_onchange = function(event) {
    try {
        TSU_CERT_TP();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_MANUF_CTRY_onchange = function(event) {
    try {
        MANUFACTURE();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_MANUF_ID_onchange = function(event) {
    try {
        MANUFACTURE();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_MANUF_IDTP_onchange = function(event) {
    try {
        MANUFACTURE();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_MTCH_ISS_CTRY_onchange = function(event) {
    try {
        ISSUER();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_MTCH_ISS_ID_onchange = function(event) {
    try {
        ISSUER();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_MTCH_ISS_IDTP_onchange = function(event) {
    try {
        ISSUER();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_MTCH_ISS_NM_onchange = function(event) {
    try {
        ISSUER();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}

csDOScreenProto.TSU_MTCH_MAUF_NM_onchange = function(event) {
    try {
        MANUFACTURE();
    } catch (e) {
        DisExcpt("SSSS_R2TSU_CertDataSetReqrd.js", e);
    }
}