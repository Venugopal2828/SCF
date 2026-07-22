function SYM_CUOF_Chk_CutoffTime() {
    try {

        if (document.MAINFORM.CCY_CUTOFF_TIME.value > 2400) {
            alert("The Cutoff Time cannot be greater than 24:00");
            document.MAINFORM.CCY_CUTOFF_TIME.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_CUOF.js", e);
    }
}