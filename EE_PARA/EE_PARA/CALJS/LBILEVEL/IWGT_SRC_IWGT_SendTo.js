"path:SCRN/Library/Party/Part/IWGT_SendTo.lbi";

var csLbiCompProto = {};

csLbiCompProto.FLD_IWGT_SEND_TO_EMAIL_onchange = function(event) {
    try {
        if ((SYM_IWGT_CHK_EMAIL(document.MAINFORM.SEND_TO_EMAIL.value)) == true) {
            document.MAINFORM.SEND_TO_EMAIL.value = '';
        }
    } catch (e) {
        DisExcpt("IWGT_SRC_IWGT_SendTo.js", e);
    }
}