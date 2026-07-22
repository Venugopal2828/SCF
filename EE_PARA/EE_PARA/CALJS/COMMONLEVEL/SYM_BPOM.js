function SYM_BPOM_CAL_BUYR() {
    try {

        if (document.MAINFORM.BUYR_ID.value != '') {
            SYS_GetCUBK_S('BUYR_ID', document.MAINFORM.BUYR_ID.name);
        }
    } catch (e) {
        DisExcpt("SYM_BPOM.js", e);
    }
}

function SYM_BPOM_CAL_SUPLR() {
    try {

        if (document.MAINFORM.SUPLR_ID.value != '') {
            SYS_GetCUBK_S('SUPLR_ID', document.MAINFORM.SUPLR_ID.name);
        }
    } catch (e) {
        DisExcpt("SYM_BPOM.js", e);
    }
}

function SYM_BPOM_CAL_ISSUE_BK() {
    try {

        if (document.MAINFORM.ISSUE_BK_ID.value != '') {
            SYS_GetCUBK_S('ISSUE_BK_ID', document.MAINFORM.ISSUE_BK_ID.name);
        }
    } catch (e) {
        DisExcpt("SYM_BPOM.js", e);
    }
}

function SYM_BPOM_CAL_ADV_BK() {
    try {

        if (document.MAINFORM.ADV_BK_ID.value != '') {
            SYS_GetCUBK_S('ADV_BK_ID', document.MAINFORM.ADV_BK_ID.name);
        }
    } catch (e) {
        DisExcpt("SYM_BPOM.js", e);
    }
}

function SYM_BPOM_M_SW_TAG(arr_BIC) {
    try {

        var i; // Utility Auto Fix Comments
        var sBKAdd_1; // Utility Auto Fix Comments
        var sBKAdd_2; // Utility Auto Fix Comments
        var sBKAdd_3; // Utility Auto Fix Comments
        var sBKName; // Utility Auto Fix Comments
        var sTagName; // Utility Auto Fix Comments
        for (i = 0; i < arr_BIC.length; i++) { // Utility Auto Fix Comments
            sTagName = arr_BIC[i].name.replace("_ADD", "_TAG");
            sBKName = arr_BIC[i].name.replace("_SW_ADD", "_NM");
            sBKAdd_1 = arr_BIC[i].name.replace("_SW_ADD", "_ADD1");
            sBKAdd_2 = arr_BIC[i].name.replace("_SW_ADD", "_ADD2");
            sBKAdd_3 = arr_BIC[i].name.replace("_SW_ADD", "_ADD3");

            if (arr_BIC[i].value != "") {
                MAINFORM.elements[sTagName].value = "A";
            } else {
                if (MAINFORM.elements[sBKName].value != "" || MAINFORM.elements[sBKAdd_1].value != "" || MAINFORM.elements[sBKAdd_2].value != "" || MAINFORM.elements[sBKAdd_3].value != "") {
                    MAINFORM.elements[sTagName].value = "D";
                } else {
                    MAINFORM.elements[sTagName].value = "";
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_BPOM.js", e);
    }
}

function SYM_BPOM_Chg_OtherFee() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['BPOM_OTHER'];
        amt = EEHtml.getElementById('TSU_LINE_TTL_AMT').value;
        ccy = EEHtml.getElementById('TSU_LINE_TTL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_BPOM.js", e);
    }
}

function SYM_BPOM_Change_BUYR_CORR_MED() {
    try {

        if (document.MAINFORM.BUYR_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass_New('BUYR_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('BUYR_EMAIL', 'O');
            SYT_ChangeFldClass_New('BUYR_FAX', 'M');
        } else if (document.MAINFORM.BUYR_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass_New('BUYR_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('BUYR_EMAIL', 'M');
            SYT_ChangeFldClass_New('BUYR_FAX', 'O');
        } else if (document.MAINFORM.BUYR_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass_New('BUYR_MAIL_ADD', 'M');
            SYT_ChangeFldClass_New('BUYR_EMAIL', 'O');
            SYT_ChangeFldClass_New('BUYR_FAX', 'O');
        } else {
            SYT_ChangeFldClass_New('BUYR_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('BUYR_EMAIL', 'O');
            SYT_ChangeFldClass_New('BUYR_FAX', 'O');
        }
    } catch (e) {
        DisExcpt("SYM_BPOM.js", e);
    }
}

function SYM_BPOM_Change_SUPLR_CORR_MED() {
    try {

        if (document.MAINFORM.SUPLR_CORR_MED.value == 'Fax') {
            SYT_ChangeFldClass_New('SUPLR_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('SUPLR_EMAIL', 'O');
            SYT_ChangeFldClass_New('SUPLR_FAX', 'M');
        } else if (document.MAINFORM.SUPLR_CORR_MED.value == 'Email') {
            SYT_ChangeFldClass_New('SUPLR_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('SUPLR_EMAIL', 'M');
            SYT_ChangeFldClass_New('SUPLR_FAX', 'O');
        } else if (document.MAINFORM.SUPLR_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass_New('SUPLR_MAIL_ADD', 'M');
            SYT_ChangeFldClass_New('SUPLR_EMAIL', 'O');
            SYT_ChangeFldClass_New('SUPLR_FAX', 'O');
        } else {
            SYT_ChangeFldClass_New('SUPLR_MAIL_ADD', 'O');
            SYT_ChangeFldClass_New('SUPLR_EMAIL', 'O');
            SYT_ChangeFldClass_New('SUPLR_FAX', 'O');
        }
    } catch (e) {
        DisExcpt("SYM_BPOM.js", e);
    }
}