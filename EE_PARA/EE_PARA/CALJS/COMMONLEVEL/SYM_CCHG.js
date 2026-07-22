function SYM_CCHG_CHG_SetRef(REFNO) {
    try {

        document.MAINFORM.C_MAIN_REF.value = REFNO;
    } catch (e) {
        DisExcpt("SYM_CCHG.js", e);
    }
}