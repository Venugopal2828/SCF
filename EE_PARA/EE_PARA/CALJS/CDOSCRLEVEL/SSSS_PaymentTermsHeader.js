"path:SCRN/DO/PaymentTermsHeader.jsp";

function ATTACH_CLASS_BY_AVAL_BY() {
    try {
        var oAVAL_BY;
        var sDivLabel;
        var sMixSepa;
        oAVAL_BY = EEHtml.getElementById("AVAL_BY");
        sDivLabel = "";
        sMixSepa = "";
        switch (SYS_MODULE_NAME) {
            case "EPLC":
                sDivLabel = "D";
                sMixSepa = "MIXPAY_SEPA";
                break;
            case "IPLC":
                sDivLabel = "K";
                break;
            default:
                sDivLabel = "";
        }
        if (sDivLabel == "") {
            return;
        }
        if (sMixSepa == "") {
            return;
        }
        if (oAVAL_BY.value == "BY MIXED PYMT") {
            EEHtml.getElementById(sDivLabel).style.display = "block";
            EEHtml.getElementById(sMixSepa).style.display = "block";
        } else {
            EEHtml.getElementById(sDivLabel).style.display = "none";
            EEHtml.getElementById(sMixSepa).style.display = "none";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*ATTACH_CLASS_BY_AVAL_BY", e);
    }
}

function ATTACH_CLASS_BY_NEW_AVAL_BY() {
    try {
        var oAVAL_BY;
        var sDivLabel;
        var sMixSepa;
        oAVAL_BY = EEHtml.getElementById("NEW_AVAL_BY");
        sDivLabel = "";
        sMixSepa = "";
        switch (SYS_MODULE_NAME) {
            case "EPLC":
                sDivLabel = "D";
                sMixSepa = "MIXPAY_SEPA";
                break;
            default:
                sDivLabel = "";
        }
        if (sDivLabel == "") {
            return;
        }
        if (sMixSepa == "") {
            return;
        }
        if (oAVAL_BY.value == "BY MIXED PYMT") {
            EEHtml.getElementById(sDivLabel).style.display = "block";
            EEHtml.getElementById(sMixSepa).style.display = "block";
        } else {
            EEHtml.getElementById(sDivLabel).style.display = "none";
            EEHtml.getElementById(sMixSepa).style.display = "none";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*ATTACH_CLASS_BY_NEW_AVAL_BY", e);
    }
}

function ATTACH_CPYT_C_TRX_CCY() {
    try {
        document.MAINFORM.CPYT_C_TRX_CCY.value = EEHtml.getElementById("LC_CCY").value;
        EEHtml.fireEvent(document.MAINFORM.CPYT_C_TRX_CCY, "onchange");
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*ATTACH_CPYT_C_TRX_CCY", e);
    }
}

function ATTACH_CPYT_N_PAY_TTL_AMT_TXCCY() {
    try {
        var nAmt; // Utility Auto Fix Comments
        nAmt = 0;
        /*
        if(EEHtml.getElementById("NEW_LC_AMT") != null){
        	nAmt =SYS_BeFloat(EEHtml.getElementById("NEW_LC_AMT").value);
        }else{
        	nAmt =SYS_BeFloat(EEHtml.getElementById("LC_AMT").value);
        }
        Sunny 20100204 */

        if (typeof document.MAINFORM.NEW_LC_BAL == 'object') {
            nAmt = SYS_BeFloat(EEHtml.getElementById("NEW_LC_BAL").value);
        } else {
            nAmt = SYS_BeFloat(EEHtml.getElementById("LC_BAL").value);
        }
        // nAmt = SYS_BeFloat(EEHtml.getElementById("NEW_LC_BAL").value);
        // nAmt=SYS_BeFloat(EEHtml.getElementById("LC_AMT").value); mark by Jesse for defect #4187 2014/3/10

        document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value = SYT_AmtFormat(EEHtml.getElementById("LC_CCY").value, nAmt);

        EEHtml.fireEvent(document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY, "onchange");
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*ATTACH_CPYT_N_PAY_TTL_AMT_TXCCY", e);
    }
}

function AutoDeleteRecord() {
    try {
        var arr_fld; // Utility Auto Fix Comments
        arr_fld = new Array(document.MAINFORM.CPYT_C_TRX_CCY, document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY);
        SYS_DeleteDoRecord("PaymentTerms");

        document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = "";
        EEHtml.fireEvent(document.MAINFORM.CPYT_C_MIX_PAY_DETAIL, "onchange");
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*AutoDeleteRecord", e);
    }
}

function AutoInsertRecord() {
    try {
        var AVAL_BY; // Utility Auto Fix Comments
        var CPYT_N_PAY_AMT; // Utility Auto Fix Comments
        var TENOR_DAYS; // Utility Auto Fix Comments
        var TENOR_TYPE; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        var sTENOR_TYPE; // Utility Auto Fix Comments
        AVAL_BY = EEHtml.getElementById("AVAL_BY").value;
        if (typeof document.MAINFORM.NEW_LC_BAL == 'object') {
            CPYT_N_PAY_AMT = SYS_BeFloat(EEHtml.getElementById("NEW_LC_BAL").value);
        } else {
            CPYT_N_PAY_AMT = SYS_BeFloat(EEHtml.getElementById("LC_BAL").value);
        }
        // CPYT_N_PAY_AMT =EEHtml.getElementById("LC_BAL").value;
        sTENOR_TYPE = EEHtml.getElementById("TENOR_TYPE").value;
        TENOR_TYPE = (sTENOR_TYPE == "OTHER") ? EEHtml.getElementById("TENOR_TYPE_NARR").value : sTENOR_TYPE;
        TENOR_DAYS = EEHtml.getElementById("TENOR_DAYS").value;

        if (AVAL_BY != "" && AVAL_BY != "BY MIXED PYMT") {
            SYS_DeleteDoRecord("PaymentTerms");
            document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = "";

            record = SYS_AddOneDoRecord("PaymentTerms");
            switch (AVAL_BY) {
                case "BY PAYMENT":
                    SYS_UpdateFldValueByDo(record, "CPYT_C_SDA_FLAG", "Sight");
                    SYS_UpdateFldValueByDo(record, "CPYT_C_TENOR_TYPE", "");
                    SYS_UpdateFldValueByDo(record, "CPYT_I_TENOR_DAYS", "");
                    SYS_UpdateFldValueByDo(record, "CPYT_C_PAY_PER", "100");
                    SYS_UpdateFldValueByDo(record, "CPYT_N_PAY_AMT", CPYT_N_PAY_AMT);
                    document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = 100 + " " + "PEC" + " " + "At SIGHT";
                    break;
                case "BY ACCEPTANCE":
                    SYS_UpdateFldValueByDo(record, "CPYT_C_SDA_FLAG", "Acceptance");
                    SYS_UpdateFldValueByDo(record, "CPYT_C_TENOR_TYPE", TENOR_TYPE);
                    SYS_UpdateFldValueByDo(record, "CPYT_I_TENOR_DAYS", TENOR_DAYS);
                    SYS_UpdateFldValueByDo(record, "CPYT_C_PAY_PER", "100");
                    SYS_UpdateFldValueByDo(record, "CPYT_N_PAY_AMT", CPYT_N_PAY_AMT);
                    document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = 100 + " " + "PEC" + " " + "AT" + " " + TENOR_DAYS + " " + TENOR_TYPE;
                    break;
                case "BY NEGOTIATION":
                    if (TENOR_DAYS == 0) {
                        SYS_UpdateFldValueByDo(record, "CPYT_C_SDA_FLAG", "Sight");
                        SYS_UpdateFldValueByDo(record, "CPYT_C_TENOR_TYPE", "");
                        SYS_UpdateFldValueByDo(record, "CPYT_I_TENOR_DAYS", "");
                        SYS_UpdateFldValueByDo(record, "CPYT_C_PAY_PER", "100");
                        SYS_UpdateFldValueByDo(record, "CPYT_N_PAY_AMT", CPYT_N_PAY_AMT);
                        document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = 100 + " " + "PEC" + " " + "At SIGHT";
                    } else {
                        SYS_UpdateFldValueByDo(record, "CPYT_C_SDA_FLAG", "Deferred");
                        SYS_UpdateFldValueByDo(record, "CPYT_C_TENOR_TYPE", TENOR_TYPE);
                        SYS_UpdateFldValueByDo(record, "CPYT_I_TENOR_DAYS", TENOR_DAYS);
                        SYS_UpdateFldValueByDo(record, "CPYT_C_PAY_PER", "100");
                        SYS_UpdateFldValueByDo(record, "CPYT_N_PAY_AMT", CPYT_N_PAY_AMT);
                        document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = 100 + " " + "PEC" + " " + "AT" + " " + TENOR_DAYS + " " + TENOR_TYPE;
                    }
                    break;
                default:
                    SYS_UpdateFldValueByDo(record, "CPYT_C_SDA_FLAG", "Deferred");
                    SYS_UpdateFldValueByDo(record, "CPYT_C_TENOR_TYPE", TENOR_TYPE);
                    SYS_UpdateFldValueByDo(record, "CPYT_I_TENOR_DAYS", TENOR_DAYS);
                    SYS_UpdateFldValueByDo(record, "CPYT_C_PAY_PER", "100");
                    SYS_UpdateFldValueByDo(record, "CPYT_N_PAY_AMT", CPYT_N_PAY_AMT);
                    document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = 100 + " " + "PEC" + " " + "AT" + " " + TENOR_DAYS + " " + TENOR_TYPE;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*AutoInsertRecord", e);
    }
}

function PaymentTermsHeader_ConfirmBusinessCall() {
    try {
    	 var oAVAL_BY;
        var oCPYT_C_MIX_PAY_DETAIL;
        var oCPYT_INDIVID_DRAW_FLG;
        var oAVAL_BY1;
        oAVAL_BY = EEHtml.getElementById("AVAL_BY");
        oCPYT_C_MIX_PAY_DETAIL = EEHtml.getElementById("CPYT_C_MIX_PAY_DETAIL");
        oCPYT_INDIVID_DRAW_FLG = EEHtml.getElementById("CPYT_INDIVID_DRAW_FLG");
        if (oAVAL_BY.value == "BY MIXED PYMT") {
            SYT_ChangeFldClass(oCPYT_C_MIX_PAY_DETAIL, "O");
            SYT_ChangeFldClass(oCPYT_INDIVID_DRAW_FLG, "M");
        } else {
            SYT_ChangeFldClass(oCPYT_C_MIX_PAY_DETAIL, "P");
            SYT_ChangeFldClass(oCPYT_INDIVID_DRAW_FLG, "P");
        }
        document.MAINFORM.INDIVID_DRAW_FLG.value = document.MAINFORM.CPYT_INDIVID_DRAW_FLG.value;
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_RegisterAmendment') {
            oAVAL_BY1 = EEHtml.getElementById("NEW_AVAL_BY");
            oCPYT_C_MIX_PAY_DETAIL = EEHtml.getElementById("CPYT_C_MIX_PAY_DETAIL");
            oCPYT_INDIVID_DRAW_FLG = EEHtml.getElementById("CPYT_INDIVID_DRAW_FLG");
            if (oAVAL_BY1.value == "BY MIXED PYMT" || oAVAL_BY.value == "BY MIXED PYMT") {
                SYT_ChangeFldClass(oCPYT_C_MIX_PAY_DETAIL, "O");
                SYT_ChangeFldClass(oCPYT_INDIVID_DRAW_FLG, "M");
            } else {
                SYT_ChangeFldClass(oCPYT_C_MIX_PAY_DETAIL, "P");
                SYT_ChangeFldClass(oCPYT_INDIVID_DRAW_FLG, "P");
            }
        }
        if (SYS_ORG_FUNCTION_NAME != "EPLC_BeneAcceptsRejectsAmend" && SYS_ORG_FUNCTION_NAME != 'EPLC_RegisterAmendment' && SYS_ORG_FUNCTION_NAME != 'EPLC_AmendmentFrCE' && SYS_ORG_FUNCTION_NAME != 'IPLC_ReviewLCAmtFrCE' && SYS_ORG_FUNCTION_NAME != 'IPLC_IssueAmendmentFrCE' && SYS_ORG_FUNCTION_NAME != 'IPLC_IssueLCAmendment' ) {
            //Add IPLC_ReviewLCAmtFrCE on 20211221 by Hattie;
            //Add IPLC_IssueLCAmendment on 20240923 by Adam
            AutoInsertRecord();
        }
    	} catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*ConfirmBusinessCall", e);
    }
}

function MAIN_MIX_PMT_DETL() {
    try {
        var arrBreak; // Utility Auto Fix Comments
        var cols; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var length; // Utility Auto Fix Comments
        var rows; // Utility Auto Fix Comments
        var sLine; // Utility Auto Fix Comments
        var sResult; // Utility Auto Fix Comments
        if (EEHtml.getElementById("MIX_PMT_DETL") != null) {
            sResult = document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value;
            arrBreak = sResult.split("\r\n");
            len = arrBreak.length;
            rows = 0;
            cols = 35;
            sLine = "";
            for (i = 0; i < len; i++) { // Utility Auto Fix Comments
                sLine = arrBreak[i];
                length = sLine.length;
                if (length > cols) {
                    rows += SYT_getRows(sLine, cols);
                } else {
                    rows++;
                }
            }
            if (rows <= 4) {
                document.MAINFORM.MIX_PMT_DETL.value = sResult;
            } else {
                document.MAINFORM.MIX_PMT_DETL.value = "Please see the additional conditions field";
                document.MAINFORM.ADDIT_CONDITION.value = "";
                document.MAINFORM.ADDIT_CONDITION.value = sResult;
            }
            EEHtml.fireEvent(document.MAINFORM.MIX_PMT_DETL, "onchange");
            EEHtml.fireEvent(document.MAINFORM.ADDIT_CONDITION, "onchange");
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*MAIN_MIX_PMT_DETL", e);
    }
}

function NEW_MIX_PMT_DETL() {
    try {
        var arrBreak; // Utility Auto Fix Comments
        var cols; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var length; // Utility Auto Fix Comments
        var rows; // Utility Auto Fix Comments
        var sLine; // Utility Auto Fix Comments
        var sResult; // Utility Auto Fix Comments
        if (EEHtml.getElementById("NEW_MIX_PMT_DETL") != null) {
            sResult = document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value;
            arrBreak = sResult.split("\r\n");
            len = arrBreak.length;
            rows = 0;
            cols = 35;
            sLine = "";
            for (i = 0; i < len; i++) { // Utility Auto Fix Comments
                sLine = arrBreak[i];
                length = sLine.length;
                if (length > cols) {
                    rows += SYT_getRows(sLine, cols);
                } else {
                    rows++;
                }
            }
            if (rows <= 4) {
                document.MAINFORM.NEW_MIX_PMT_DETL.value = sResult;
            } else {
                document.MAINFORM.NEW_MIX_PMT_DETL.value = "Please see the additional conditions field";
                document.MAINFORM.AMD_ADDIT_CONDITION.value = "";
                document.MAINFORM.AMD_ADDIT_CONDITION.value = sResult;
            }
            EEHtml.fireEvent(document.MAINFORM.NEW_MIX_PMT_DETL, "onchange");
            //EEHtml.fireEvent(document.MAINFORM.AMD_ADDIT_CONDITION, "onchange");
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*NEW_MIX_PMT_DETL", e);
    }
}

function PaymentTermsHeader_CancelCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*PaymentTermsHeader_CancelCheck", e);
    }
}

function PaymentTermsHeader_ConfirmBusinessCheck() {
    try {
        var CPYT_N_PAY_TTL_AMT_TXCCY; // Utility Auto Fix Comments
        var sum_CPYT_C_PAY_PER; // Utility Auto Fix Comments
        var sum_CPYT_N_PAY_AMT; // Utility Auto Fix Comments
        sum_CPYT_C_PAY_PER = SYS_GetFldSumByDoName("PaymentTerms", "CPYT_C_PAY_PER");
        sum_CPYT_N_PAY_AMT = SYS_GetFldSumByDoName("PaymentTerms", "CPYT_N_PAY_AMT");
        CPYT_N_PAY_TTL_AMT_TXCCY = document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value;
        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            if (sum_CPYT_N_PAY_AMT != SYS_BeFloat(CPYT_N_PAY_TTL_AMT_TXCCY)) {

                alert("Please Check the Total Amount Must Equal to the Total Transaction Amount !");
                return false;
            } else {
                return true;
            }
        }

        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*PaymentTermsHeader_ConfirmBusinessCheck", e);
    }
}

function PaymentTermsHeader_ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*PaymentTermsHeader_ConfirmBusinessCheckSave", e);
    }
}

function PaymentTermsHeader_InitValues() {
    try {
        //default value	
        document.MAINFORM.CPYT_C_LOCAL_CCY.value = SYS_LOCAL_CCY;
        document.MAINFORM.CPYT_C_TRX_CCY.value = EEHtml.getElementById("LC_CCY").value;
        if (typeof document.MAINFORM.NEW_LC_BAL == 'object') {
            document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value = SYT_AmtFormat(EEHtml.getElementById("LC_CCY").value, EEHtml.getElementById("NEW_LC_BAL").value);
        } else {
            document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value = SYT_AmtFormat(EEHtml.getElementById("LC_CCY").value, EEHtml.getElementById("LC_BAL").value);
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*PaymentTermsHeader_InitValues", e);
    }
}

function PaymentTermsHeader_PostconditionOnInit() {
    try {
        if ("PM||MM||KP||EC".indexOf(SYS_FUNCTION_TYPE) > -1) {
            EEHtml.attachEventListener(document.MAINFORM.LC_CCY, "onchange", new Function("ATTACH_CPYT_C_TRX_CCY()"));
            EEHtml.attachEventListener(document.MAINFORM.LC_CCY, "onchange", new Function("ATTACH_CPYT_N_PAY_TTL_AMT_TXCCY()"));
            EEHtml.attachEventListener(document.MAINFORM.LC_BAL, "onchange", new Function("ATTACH_CPYT_N_PAY_TTL_AMT_TXCCY()")); //sunny 20100204
            if (typeof document.MAINFORM.NEW_LC_BAL !== 'undefined') {
                EEHtml.attachEventListener(document.MAINFORM.NEW_LC_BAL, "onchange", new Function("ATTACH_CPYT_N_PAY_TTL_AMT_TXCCY()")); //sunny
            }
            EEHtml.attachEventListener(document.MAINFORM.AVAL_BY, "onchange", new Function("ATTACH_CLASS_BY_AVAL_BY()"));
        }
        ATTACH_CLASS_BY_AVAL_BY();
        if (SYS_MODULE_NAME == 'EPLC' && (SYS_ORG_FUNCTION_NAME == 'EPLC_RegisterAmendment' || SYS_ORG_FUNCTION_NAME == 'EPLC_AmendmentFrCE' || SYS_ORG_FUNCTION_NAME == 'EPLC_AmendmentOneStep' || SYS_ORG_FUNCTION_NAME == 'EPLC_AdviseAmendment')) {
            ATTACH_CLASS_BY_NEW_AVAL_BY();
        }
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_RegisterLC' || SYS_ORG_FUNCTION_NAME == 'EPLC_AdviseLCOneStep' || SYS_ORG_FUNCTION_NAME == 'EPLC_AdviseLC') {
            ATTACH_CLASS_BY_AVAL_BY();
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*PaymentTermsHeader_PostconditionOnInit", e);
    }
}

function PaymentTermsHeader_PreconditionOnInit() {
    try {} catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*PaymentTermsHeader_PreconditionOnInit", e);
    }
}

function PaymentTermsHeader_initFieldEvent() {
    try {
        document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.onchange = CPYT_C_MIX_PAY_DETAIL_onchange;
        document.MAINFORM.CPYT_C_TRX_CCY.onchange = CPYT_C_TRX_CCY_onchange;
        document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.onchange = CPYT_N_PAY_TTL_AMT_TXCCY_onchange;
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*PaymentTermsHeader_initFieldEvent", e);
    }
}

function CPYT_C_MIX_PAY_DETAIL_onchange() {
    try {
        if (SYS_ORG_FUNCTION_NAME == 'IPLC_IssueLCAmendmentOneStep' || SYS_ORG_FUNCTION_NAME == 'IPLC_IssueLCAmendment' || SYS_ORG_FUNCTION_NAME == 'IPLC_RegisterLCAmendment' || SYS_ORG_FUNCTION_NAME == 'EPLC_AmendmentFrCE' || SYS_ORG_FUNCTION_NAME == 'EPLC_AdviseAmendment' || SYS_ORG_FUNCTION_NAME == 'EPLC_AmendmentOneStep') {
            NEW_MIX_PMT_DETL();
        } else {
            MAIN_MIX_PMT_DETL();
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*CPYT_C_MIX_PAY_DETAIL", e);
    }
}

function CPYT_C_TRX_CCY_onchange() {
    try {
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_RegisterAmendment' || SYS_ORG_FUNCTION_NAME == 'EPLC_AmendmentOneStep' || SYS_ORG_FUNCTION_NAME == 'EPLC_AdviseLCOneStep' || SYS_ORG_FUNCTION_NAME == 'EPLC_RegisterLC') {
            SYM_EPLC_CAL_AMEND_PAYMENT_AMT();
        } else if (SYS_ORG_FUNCTION_NAME == 'IPLC_IssueLCAmendment' || SYS_ORG_FUNCTION_NAME == "IPLC_IssueLCAmendmentOneStep" || SYS_ORG_FUNCTION_NAME == "IPLC_ReviewLCAmtFrCE" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueAmendmentFrCE" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueLCFrCE" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueLCOneStep" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueB2BLC" || SYS_ORG_FUNCTION_NAME == "IPLC_RegisterTransferLC" || SYS_ORG_FUNCTION_NAME == "IPLC_ReviewLCFrCE" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueTransferLCOneStep" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueB2BLCOneStep") {
            SYM_IPLC_CAL_AMEND_PAYMENT_AMT();
        } else {
            AutoDeleteRecord();
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*CPYT_C_TRX_CCY", e);
    }
}

function CPYT_N_PAY_TTL_AMT_TXCCY_onchange() {
    try {
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_RegisterAmendment' || SYS_ORG_FUNCTION_NAME == 'EPLC_AmendmentOneStep' || SYS_ORG_FUNCTION_NAME == 'EPLC_RegisterLC' || SYS_ORG_FUNCTION_NAME == 'EPLC_AdviseLCOneStep' || SYS_ORG_FUNCTION_NAME == 'EPLC_AmendmentFrCE') {
            SYM_EPLC_CAL_AMEND_PAYMENT_AMT();
        } else if (SYS_ORG_FUNCTION_NAME == 'IPLC_IssueLCAmendment' || SYS_ORG_FUNCTION_NAME == 'IPLC_IssueLCAmendmentOneStep' || SYS_ORG_FUNCTION_NAME == "IPLC_ReviewLCAmtFrCE" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueAmendmentFrCE" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueLCFrCE" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueLCOneStep" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueB2BLC" || SYS_ORG_FUNCTION_NAME == "IPLC_RegisterTransferLC" || SYS_ORG_FUNCTION_NAME == "IPLC_ReviewLCFrCE" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueTransferLCOneStep" || SYS_ORG_FUNCTION_NAME == "IPLC_IssueB2BLCOneStep") {
            SYM_IPLC_CAL_AMEND_PAYMENT_AMT();
        } else {
            AutoDeleteRecord();
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentTermsHeader.js*CPYT_N_PAY_TTL_AMT_TXCCY", e);
    }
}


