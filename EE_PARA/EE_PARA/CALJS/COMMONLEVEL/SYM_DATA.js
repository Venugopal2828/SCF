function SYM_DATA_setRef(ref) {
    try {

        var mainRef; // Utility Auto Fix Comments
        mainRef = ref;
        document.MAINFORM.C_MAIN_REF.value = mainRef;
    } catch (e) {
        DisExcpt("SYM_DATA.js", e);
    }
}