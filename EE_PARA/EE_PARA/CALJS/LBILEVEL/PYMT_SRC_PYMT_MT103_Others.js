"path:SCRN/Library/Payment/PYMT_MT103_Others.lbi";

var csLbiCompProto = {};

csLbiCompProto.CHK_Field72 = function() {
    try {
        if (SYS_FUNCTION_NAME != "CompOutPmt") {
            EEHtml.getElementById("ORD_CUST").style.display = "none";
            EEHtml.getElementById("APPROVAL_NO").style.display = "none";
            EEHtml.getElementById("AUTH_CD").style.display = "none";
            EEHtml.getElementById("INF1_72AA").style.visibility = 'hidden';
        }
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_MT103_Others.js", e);
    }
}