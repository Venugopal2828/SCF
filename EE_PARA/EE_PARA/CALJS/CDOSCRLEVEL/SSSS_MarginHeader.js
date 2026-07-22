"path:SCRN/DO/MarginHeader.jsp";

function Cal_MRGN_AMT() {
    try {
        document.MAINFORM.MRGN_AMT.value = SYT_AmtFormat(document.MAINFORM.MRGN_CCY.value, SYS_BeFloat(nAMT) * SYS_BeFloat(document.MAINFORM.MRGN_PCT.value) / 100);
        Cal_MRGN_BAL();
        Cal_MRGN_AMT_CHANGED();
    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function Cal_MRGN_AMT_CHANGED() {
    try {
        Cal_nAMT_nCCY();
        var obj_INC_AMT = SYS_getMainObj('INC_AMT');
        var obj_DEC_AMT = SYS_getMainObj('DEC_AMT');
        var obj_ACCOUNT_ID;
        var nINC_AMT = 0;
        var nDEC_AMT = 0;
        var nACCOUNT_ID = "";
        var nPARENT_AMT = 0;

        if (SYS_MODULE_NAME == 'IPLC' || SYS_MODULE_NAME == 'GTEE') {
            obj_ACCOUNT_ID = SYS_getMainObj('APPL_ID');
            if (obj_ACCOUNT_ID != null && obj_ACCOUNT_ID != undefined && obj_ACCOUNT_ID != 'undefined') {
                nACCOUNT_ID = SYS_getValueFromMain('APPL_ID');
            }
        }

        if (SYS_MODULE_NAME == 'EPLC') {
            obj_ACCOUNT_ID = SYS_getMainObj('BENE_ID');
            if (obj_ACCOUNT_ID != null && obj_ACCOUNT_ID != undefined && obj_ACCOUNT_ID != 'undefined') {
                nACCOUNT_ID = SYS_getValueFromMain('BENE_ID');
            }
        }
        if (obj_INC_AMT != null && obj_INC_AMT != undefined && obj_INC_AMT != 'undefined') {
            nINC_AMT = SYS_getValueFromMain('INC_AMT');
        }

        if (obj_DEC_AMT != null && obj_DEC_AMT != undefined && obj_DEC_AMT != 'undefined') {
            nDEC_AMT = SYS_getValueFromMain('DEC_AMT');
        }

        if (nDEC_AMT == 0) {
            SYS_MRGN_Process(nAMT, nCCY, 'Booking Rate', nACCOUNT_ID, "HOLD", "Y");
            nPARENT_AMT = SYS_BeFloat(nAMT) + SYS_BeFloat(nINC_AMT);
        } else {
            SYS_MRGN_Process(nAMT, nCCY, 'Booking Rate', nACCOUNT_ID, "RELEASE", "Y");
            nPARENT_AMT = SYS_BeFloat(nDEC_AMT);
        }


        document.MAINFORM.MRGN_AMT_CHANGED.value = SYT_AmtFormat(document.MAINFORM.MRGN_CCY.value, nPARENT_AMT * SYS_BeFloat(document.MAINFORM.MRGN_PCT.value) / 100);
        SYS_Show_DO();
    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function Cal_MRGN_BAL() {
    try {
        document.MAINFORM.MRGN_BAL.value = SYT_AmtFormat(document.MAINFORM.MRGN_CCY.value, document.MAINFORM.MRGN_AMT.value);
    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function Cal_nAMT_nCCY() {
    try {
        obj_LC_CCY = SYS_getMainObj('LC_CCY');
        obj_LC_AMT = SYS_getMainObj('LC_AMT');
        obj_GTEE_CCY = SYS_getMainObj('GTEE_CCY');
        obj_GTEE_AMT = SYS_getMainObj('GTEE_AMT');
        nAMT = 0;
        nCCY = "";
        if (obj_LC_AMT != null && obj_LC_AMT != undefined && obj_LC_AMT != 'undefined') {
            nAMT = SYS_getValueFromMain('LC_AMT');
            nCCY = SYS_getValueFromMain('LC_CCY');
        }

        if (obj_GTEE_AMT != null && obj_GTEE_AMT != undefined && obj_LC_AMT != 'undefined') {
            nAMT = SYS_getValueFromMain('GTEE_AMT');
            nCCY = SYS_getValueFromMain('GTEE_CCY');
        }
    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function CancelCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function Chk_MRGN_PCT() {
    try {
        var nMRGN_PCT = SYS_BeFloat(document.MAINFORM.MRGN_PCT.value);
        if (nMRGN_PCT > 100 || nMRGN_PCT < 0) {
            document.MAINFORM.MRGN_PCT.value = 0;
            alert("Please input value between 0~100!");
        }
    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function ConfirmBusinessCall() {
    try {

    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function ConfirmBusinessCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function InitValues() {
    try {
        Cal_MRGN_AMT_CHANGED();
    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function LoadDODataOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function MPO_MRGN_PCT() {
    try {
        var obj_AMT;
        var obj_AMT_1;
        if (SYS_MODULE_NAME == 'IPLC') {
            if (SYS_ORG_FUNCTION_NAME == 'IPLC_IssueLCAmendment' || SYS_ORG_FUNCTION_NAME == 'IPLC_IssueLCAmendmentOneStep') {
                obj_AMT = SYS_getMainObj('INC_AMT');
                obj_AMT_1 = SYS_getMainObj('DEC_AMT');
                if (obj_AMT.value == 0 && obj_AMT_1.value == 0) {
                    SYT_ChangeFldClass(document.MAINFORM.MRGN_PCT, 'P');
                }
            } else {
                obj_AMT = SYS_getMainObj('LC_AMT');
                if (obj_AMT.value == 0) {
                    SYT_ChangeFldClass(document.MAINFORM.MRGN_PCT, 'P');
                }
            }
        }
        if (SYS_MODULE_NAME == 'GTEE') {
            obj_AMT = SYS_getMainObj('GTEE_AMT');
            if (obj_AMT.value == 0) {
                SYT_ChangeFldClass(document.MAINFORM.MRGN_PCT, 'P');
            }
        }

        if (obj_AMT != undefined && obj_AMT != 'undefined' && obj_AMT != null) {
            EEHtml.attachEventListener(obj_AMT, 'onchange', function() {
                var fldObj = SYS_getScreenObjByxpath('MarginHeader', "MRGN_PCT");
                if (obj_AMT.value != 0 || obj_AMT.value != "") {
                    fldObj.className = "FLOAT_M";
                    fldObj.readOnly = false;
                } else {
                    fldObj.className = "FLOAT_P";
                    fldObj.readOnly = true;
                } if (fldObj.value != 0 && fldObj.value != "" && fldObj.value != "0") {
                    EEHtml.fireEvent(fldObj, 'onchange');
                }
            });
        }
        if (obj_AMT_1 != undefined && obj_AMT_1 != 'undefined' && obj_AMT_1 != null) {
            EEHtml.attachEventListener(obj_AMT_1, 'onchange', function() {
                var fldObj = SYS_getScreenObjByxpath('MarginHeader', "MRGN_PCT");
                if (obj_AMT_1.value != 0 || obj_AMT.value != "") {
                    fldObj.className = "FLOAT_M";
                    fldObj.readOnly = false;
                } else {
                    fldObj.className = "FLOAT_P";
                    fldObj.readOnly = true;
                } if (fldObj.value != 0 && fldObj.value != "" && fldObj.value != "0") {
                    EEHtml.fireEvent(fldObj, 'onchange');
                }
            });
        }
    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function PostconditionOnInit() {
    try {
        Cal_nAMT_nCCY();
        MPO_MRGN_PCT();

    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function PostconditionOnUnload() {
    try {

    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function PreInitValues() {
    try {

    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function PreconditionOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function PreconditionOnUnload() {
    try {

    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}
window.onunload = OnLeave;

function OnLeave() {
    PreconditionOnUnload();
    SYS_OnLeave();
    PostconditionOnUnload();
}


function initFieldEvent() {
    try {
        document.MAINFORM.MRGN_AMT.onchange = MRGN_AMT_onchange;
        document.MAINFORM.MRGN_PCT.onchange = MRGN_PCT_onchange;
    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function OnInitial() {
    try {
        PreconditionOnInit();
        SYS_OnInit();
        PostconditionOnInit();
    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}

function MRGN_AMT_onchange() {}

function MRGN_PCT_onchange() {
    try {
        Chk_MRGN_PCT();
        Cal_MRGN_AMT();
        Cal_MRGN_AMT_CHANGED();
    } catch (e) {
        DisExcpt("SSSS_MarginHeader.js", e);
    }
}