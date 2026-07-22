function SYM_CZQO_SetRefNo() {
    try {

        var ref_lmts;
        ref_lmts = "LMTS";
        SYS_GetRefNo(ref_lmts, "SYM_CZQO_GetRefNo");
    } catch (e) {
        DisExcpt("SYM_CZQO.js", e);
    }
}

function SYM_CZQO_GetRefNo(LmtsRef) {
    try {

        document.MAINFORM.C_MAIN_REF.value = LmtsRef;
    } catch (e) {
        DisExcpt("SYM_CZQO.js", e);
    }
}