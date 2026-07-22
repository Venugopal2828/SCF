function SYM_INVC_forBAFields(linkNO, statementShow) {
    try {

        document.MAINFORM.BA_UNIT_CODE.value = SYS_BUSI_UNIT;
        if (statementShow == 'N') {
            SYS_GetUUID_S(document.MAINFORM.FA_BA_LINK.name, statementShow);
        } else {
            SYS_GetUUID_S(document.MAINFORM.FA_BA_LINK.name);
        }
        //alert(document.MAINFORM.FA_BA_LINK.value);1109
    } catch (e) {
        DisExcpt("SYM_INVC.js", e);
    }
}