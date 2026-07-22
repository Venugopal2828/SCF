"path:SCRN/Library/EPLC/Nego_PresenterInfo.lbi";

var csLbiCompProto = {};

csLbiCompProto.Lbi_PRESENTER_INIT_CLS = function() {
    try {
        var funcshrtnm = SYT_FUNC_SHORT_NAME();
        switch (funcshrtnm) {
            case "SendDocs":
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ID, "P");
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_NM, "P");
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD1, "P");
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD2, "P");
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD3, "P");
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, "P");
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "M");
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_LANG, 'M');
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_AC_OFF_CODE, 'P');
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ID_BTN, 'P');
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_POST_ADD_BTN, 'P');
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_REF, 'P');
                SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'P');
                break;

            default:

                return;

        }
    } catch (e) {
        DisExcpt("EPLC_SRC_Nego_PresenterInfo.js", e);
    }
}

csLbiCompProto.lbi_CLASS_DOC_PRES_BY = function() {
    try {
        var nDOC_PRES_BY = document.getElementsByName('DOC_PRES_BY');
        if (nDOC_PRES_BY[0] != undefined) {
            SYM_EPLC_M_CLASS_BY_DOCPRES(nDOC_PRES_BY[0].value);
        }
    } catch (e) {
        DisExcpt("EPLC_SRC_Nego_PresenterInfo.js", e);
    }
}