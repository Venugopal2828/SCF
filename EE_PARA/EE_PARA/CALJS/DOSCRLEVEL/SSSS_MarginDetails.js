"path:SCRN/DO/MarginDetails.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.Cal_FX_Field = function() {
    try {
        var nSUB_MRGN_AMT_FX = document.MAINFORM.SUB_MRGN_AMT.value;
        var nMRGN_AC_AMT_FX = document.MAINFORM.MRGN_AC_AMT.value;
        if (document.MAINFORM.MRGN_AC_CCY.value == document.MAINFORM.SUB_MRGN_CCY.value) {
            nSUB_MRGN_AMT_FX = 0;
            nMRGN_AC_AMT_FX = 0;
        }
        document.MAINFORM.SUB_MRGN_AMT_FX.value = SYT_AmtFormat(document.MAINFORM.SUB_MRGN_CCY.value, nSUB_MRGN_AMT_FX);
        document.MAINFORM.MRGN_AC_AMT_FX.value = SYT_AmtFormat(document.MAINFORM.MRGN_AC_CCY.value, nMRGN_AC_AMT_FX);
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.Cal_MRGN_AC_AMT = function() {
    try {
        if (document.MAINFORM.SUB_MRGN_CCY.value == document.MAINFORM.MRGN_AC_CCY.value) {
            document.MAINFORM.MRGN_AC_AMT.value = SYT_AmtFormat(document.MAINFORM.MRGN_AC_CCY.value, document.MAINFORM.SUB_MRGN_AMT.value);
        } else {
            document.MAINFORM.MRGN_AC_AMT.value = SYT_AmtFormat(document.MAINFORM.MRGN_AC_CCY.value, MRGN_AMT_CHANGED_VALUE() * SYS_BeFloat(document.MAINFORM.SUB_MRGN_PCT.value) / 100);
        }

        Cal_FX_Field();
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.Cal_MRGN_PCT_CHK = function() {
    try {
        var doDetail = SYS_getDoByXpath("MarginHeader.MarginDetails");
        var vStatue = doDetail.getStatue();
        if ("E" == vStatue) {
            SYS_setCurrNodeParentValue('MarginHeader', 'MRGN_PCT_CHK', MRGN_PCT_CHK_VALUE() - org_SUB_MRGN_PCT);
        }
        var SUM = MRGN_PCT_CHK_VALUE() + SYS_BeFloat(document.MAINFORM.SUB_MRGN_PCT.value);
        if (SUM > 100) {
            alert("Margin Percentage should not be greater than 100% .Please check it!");
            document.MAINFORM.SUB_MRGN_PCT.value = 0;
            document.MAINFORM.SUB_MRGN_AMT.value = 0;
            document.MAINFORM.SUB_MRGN_BAL.value = 0;
            document.MAINFORM.MRGN_AC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.Cal_SUB_MRGN_AMT = function() {
    try {
        if (document.MAINFORM.D_VALUE_DATE.value == '' || document.MAINFORM.SUB_MRGN_CCY.value == '') {
            return;
        }
        SYS_GetExchangeRate_S(document.MAINFORM.SUB_MRGN_CCY.value, MRGN_CCY_VALUE(), 'Booking Rate', 'C_EXCHAN_RATE', '', '', '', '', document.MAINFORM.D_VALUE_DATE.value, '');
        document.MAINFORM.SUB_MRGN_AMT.value = SYT_AmtFormat(document.MAINFORM.SUB_MRGN_CCY.value, (MRGN_AMT_CHANGED_VALUE() / SYS_BeFloat(document.MAINFORM.C_EXCHAN_RATE.value)) * SYS_BeFloat(document.MAINFORM.SUB_MRGN_PCT.value) / 100);
        Cal_FX_Field();
        Cal_MRGN_AC_AMT();
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.Cal_SUB_MRGN_BAL = function() {
    try {
        if (document.MAINFORM.D_VALUE_DATE.value == '' || document.MAINFORM.C_OPERATION_FLAG.value == 'RELEASE') {
            return;
        }
        document.MAINFORM.SUB_MRGN_BAL.value = SYT_AmtFormat(MRGN_CCY_VALUE(), (MRGN_AMT_VALUE() * SYS_BeFloat(document.MAINFORM.SUB_MRGN_PCT.value) / 100));
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.Cal_SUB_MRGN_PCT = function() {
    try {
        if (MRGN_CCY_VALUE() == document.MAINFORM.SUB_MRGN_CCY.value) {
            document.MAINFORM.SUB_MRGN_PCT.value = SYT_AmtFormat(document.MAINFORM.SUB_MRGN_CCY.value, SYS_BeFloat(document.MAINFORM.SUB_MRGN_AMT.value) * 100 / MRGN_AMT_CHANGED_VALUE());
        } else {
            document.MAINFORM.SUB_MRGN_PCT.value = SYT_AmtFormat(document.MAINFORM.SUB_MRGN_CCY.value, SYS_BeFloat(document.MAINFORM.SUB_MRGN_AMT.value) * SYS_BeFloat(document.MAINFORM.C_EXCHAN_RATE.value) * 100 / MRGN_AMT_CHANGED_VALUE());
        }

        if (SYS_BeFloat(document.MAINFORM.SUB_MRGN_PCT.value) > 100 || SYS_BeFloat(document.MAINFORM.SUB_MRGN_PCT.value) < 0) {
            alert("The Amount is not correct!");
            document.MAINFORM.SUB_MRGN_PCT.value = 0;
            document.MAINFORM.SUB_MRGN_AMT.value = 0;
        } else {
            if ((document.MAINFORM.SUB_MRGN_PCT.value).substr(document.MAINFORM.SUB_MRGN_PCT.value.length - 2, 2) == '00') {
                document.MAINFORM.SUB_MRGN_PCT.value = (document.MAINFORM.SUB_MRGN_PCT.value).substr(0, document.MAINFORM.SUB_MRGN_PCT.value.length - 3);
            }
            Cal_MRGN_AC_AMT();
        }
        Cal_SUB_MRGN_BAL();
        Cal_MRGN_PCT_CHK();
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.CancelCheck = function() {
    try {

        return true;
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.Chk_SUB_MRGN_PCT = function() {
    try {
        var SUB_MRGN_PCT = SYS_BeFloat(document.MAINFORM.SUB_MRGN_PCT.value);
        if (SUB_MRGN_PCT > 100 || SUB_MRGN_PCT < 0) {
            document.MAINFORM.SUB_MRGN_PCT.value = 0;
            alert("Please input value between 0~100!");
        }
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCall = function() {
    try {
        setTimeout(setTimeout_CalMRGN_PCT_CHK, 500);
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheck = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.ConfirmBusinessCheckSave = function() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.MPO_SUB_MRGN_AMT = function() {
    try {
        if (document.MAINFORM.C_OPERATION_FLAG.value == 'RELEASE') {
            SYT_ChangeFldClass(document.MAINFORM.SUB_MRGN_AMT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SUB_MRGN_AMT, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.MRGN_AMT_CHANGED_VALUE = function() {
    try {
        var MRGN_AMT_CHANGED = SYS_getCurrNodeParentValue('MarginHeader', 'MRGN_AMT_CHANGED', "MarginHeader.MarginDetails");
        return SYS_BeFloat(MRGN_AMT_CHANGED);
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.MRGN_AMT_VALUE = function() {
    try {
        var MRGN_AMT = SYS_getCurrNodeParentValue('MarginHeader', 'MRGN_AMT');
        return SYS_BeFloat(MRGN_AMT);
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.MRGN_CCY_VALUE = function() {
    try {
        var MRGN_CCY = SYS_getCurrNodeParentValue('MarginHeader', 'MRGN_CCY');
        return MRGN_CCY;
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.MRGN_PCT_CHK_VALUE = function() {
    try {
        var MRGN_PCT_CHK = SYS_getCurrNodeParentValue('MarginHeader', 'MRGN_PCT_CHK', "MarginHeader.MarginDetails");
        return SYS_BeFloat(MRGN_PCT_CHK);
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.PostconditionOnInit = function() {
    try {
        initPage();
        org_SUB_MRGN_PCT = SYS_BeFloat(document.MAINFORM.SUB_MRGN_PCT.value);
        MPO_SUB_MRGN_AMT();
        document.MAINFORM.SUB_MRGN_BAL.value = SYT_AmtFormat(MRGN_CCY_VALUE(), document.MAINFORM.SUB_MRGN_BAL.value);
        document.MAINFORM.SUB_MRGN_AMT.value = SYT_AmtFormat(document.MAINFORM.SUB_MRGN_CCY.value, document.MAINFORM.SUB_MRGN_AMT.value);
        document.MAINFORM.MRGN_AC_AMT.value = SYT_AmtFormat(MRGN_CCY_VALUE(), document.MAINFORM.MRGN_AC_AMT.value);

    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.D_VALUE_DATE_onchange = function(event) {
    try {
        Cal_SUB_MRGN_AMT();
        Cal_SUB_MRGN_BAL();
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.MRGN_AC_AMT_onchange = function(event) {
    try {
        Cal_FX_Field();
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.MRGN_AC_CCY_onchange = function(event) {
    try {
        Cal_FX_Field();
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.MRGN_AC_NO_BTN_onclick = function(event) {
    try {
        document.MAINFORM.MRGN_AC_NO.value = '';
        //SYS_InqCUBK_Sql('MRGN_AC_NO', 'C_CUST_ID=\'<--MRGN_DR_ID-->\' AND C_CURRENCY=\'<--MRGN_AC_CCY-->\'');
        SYS_InqCUBK_byCondition('MRGN_AC_NO', '1');
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.MRGN_DR_AC_BTN_onclick = function(event) {
    try {
        document.MAINFORM.MRGN_DR_AC.value = '';
        //SYS_InqCUBK_Sql('MRGN_DR_AC', 'C_CUST_ID=\'<--MRGN_DR_ID-->\' AND C_CURRENCY=\'<--SUB_MRGN_CCY-->\'');
        SYS_InqCUBK_byCondition('MRGN_DR_AC', '1');
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.MRGN_DR_ID_BTN_onclick = function(event) {
    try {
        document.MAINFORM.MRGN_DR_ID.value = '';
        SYS_InqCUBK('MRGN_DR_ID', 'MRGN_DR_ID');
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.SUB_MRGN_AMT_onchange = function(event) {
    try {
        Cal_SUB_MRGN_PCT();
        Cal_FX_Field();
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.SUB_MRGN_CCY_onchange = function(event) {
    try {
        Cal_SUB_MRGN_AMT();
        Cal_SUB_MRGN_PCT();
        Cal_FX_Field();
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}

csDOScreenProto.SUB_MRGN_PCT_onchange = function(event) {
    try {
        Chk_SUB_MRGN_PCT();
        Cal_SUB_MRGN_AMT();
        Cal_MRGN_AC_AMT();
        Cal_MRGN_PCT_CHK();
        Cal_SUB_MRGN_BAL();
    } catch (e) {
        DisExcpt("SSSS_MarginDetails.js", e);
    }
}