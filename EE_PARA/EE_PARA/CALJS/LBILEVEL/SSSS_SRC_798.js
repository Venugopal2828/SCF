"path:SCRN/Library/COMMON/798.lbi";

var csLbiCompProto = {};

csLbiCompProto.Cal_CHECK_BOX_798 = function() {
    try {
        if (SYS_FUNCTION_TYPE == "EC" || SYS_FUNCTION_TYPE == "RE") {
            ECtimes += 1;
            if (ECtimes != 1) {
                return;
            }
            if (document.MAINFORM.SUB_MESS_TYPE.value != '') {
                document.MAINFORM.CHECK_BOX_798.checked = true;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_798.js", e);
    }
}

csLbiCompProto.Cal_SUB_MESS_TYPE = function() {
    try {
        Cal_CHECK_BOX_798();
        if (document.MAINFORM.CHECK_BOX_798.checked) {
            SYT_EnableDivClass('Z_div');
            SWITCH_CASE();
        } else {
            SYT_DisableDiv('Z_div');
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_798.js", e);
    }
}

csLbiCompProto.SWITCH_CASE = function() {
    try {
        switch (SYS_ORG_FUNCTION_SHORT_NAME) {
            case 'AdvAmd':
                document.MAINFORM.SUB_MESS_TYPE.value = '776';
                break;
            case 'AdvLC798':
                document.MAINFORM.SUB_MESS_TYPE.value = '780';
                break;
            case 'IPLC_ISS_TRN_LC':
                document.MAINFORM.SUB_MESS_TYPE.value = '782';
                break;
            case 'ProcMT752':
                document.MAINFORM.SUB_MESS_TYPE.value = '751';
                break;
            case 'DocsRefused':
                document.MAINFORM.SUB_MESS_TYPE.value = '733';
                break;
            case 'PayAtMat':
                document.MAINFORM.SUB_MESS_TYPE.value = '753';
                break;
            case 'IPLC_ISS_LC798':
                document.MAINFORM.SUB_MESS_TYPE.value = '771';
                break;
            case 'ISS_LC_AMD798':
                document.MAINFORM.SUB_MESS_TYPE.value = '773';
                break;
            case 'IPLC_REFUSE_DOCS':
                document.MAINFORM.SUB_MESS_TYPE.value = '733';
                break;
            case 'IPLC_PAY_ACCEPT':
                document.MAINFORM.SUB_MESS_TYPE.value = '755';
                break;
            case 'RegisterOutward':
                if (document.MAINFORM.GTEE_TYPE.value == 'standby') {
                    document.MAINFORM.SUB_MESS_TYPE.value = '746';
                } else {
                    document.MAINFORM.SUB_MESS_TYPE.value = '745';
                }
                EEHtml.attachEventListener(document.MAINFORM.GTEE_TYPE, "onchange", function() {
                    if (document.MAINFORM.GTEE_TYPE.value == 'standby') {
                        document.MAINFORM.SUB_MESS_TYPE.value = '746';
                    } else {
                        document.MAINFORM.SUB_MESS_TYPE.value = '745';
                    }
                });
                break;
            case 'AmdOutward1Step':
                if (document.MAINFORM.GTEE_TYPE.value == 'standby') {
                    document.MAINFORM.SUB_MESS_TYPE.value = '744';
                } else {
                    document.MAINFORM.SUB_MESS_TYPE.value = '743';
                }
                EEHtml.attachEventListener(document.MAINFORM.GTEE_TYPE, "onchange", function() {
                    if (document.MAINFORM.GTEE_TYPE.value == 'standby') {
                        document.MAINFORM.SUB_MESS_TYPE.value = '744';
                    } else {
                        document.MAINFORM.SUB_MESS_TYPE.value = '743';
                    }
                });
                break;
            case 'SettleCharges':
                document.MAINFORM.SUB_MESS_TYPE.value = '793';
                break;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_798.js", e);
    }
}