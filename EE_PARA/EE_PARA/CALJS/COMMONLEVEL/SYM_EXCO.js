function SYM_EXCO_INIT() {
    try {

        var sMark; // Utility Auto Fix Comments
        var sResult; // Utility Auto Fix Comments
        //for clerk id
        if (document.MAINFORM.CLERK_ID != null) {
            SYT_CLERK_ID();
        }

        //for current status
        sMark = SYS_ORG_FUNCTION_SHORT_NAME;

        sResult = sMark;
        document.MAINFORM.CURRNT_STATUS.value = sResult;
        //added by zoe 20090103
        document.MAINFORM.TEMP_DRWE_ID.value = 'DRWEIDFORCHG';

        //added by zoe 20090204 for bug 1074
        if (document.MAINFORM.TEMP_DOC_DT != null) {
            document.MAINFORM.TEMP_DOC_DT.value = SYS_BUSI_DATE;
        }


        //added by zoe 20090216 for bug 1209
        /*
if(document.MAINFORM.DELVR_DOC_AGST != null){
	if( document.MAINFORM.DELVR_DOC_AGST.value=='D/P'){
//	document.MAINFORM.C_TRANS_CODE.value = '400';
	}
	else{
//document.MAINFORM.C_TRANS_CODE.value = '401';
	}
}
*/
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_CONFIRM_CALL() {
    try {

        var Day_Month; // Utility Auto Fix Comments
        var deliver_agst; // Utility Auto Fix Comments
        var tenor_days; // Utility Auto Fix Comments
        var tenor_type; // Utility Auto Fix Comments
        if (typeof Chg == "object") {
            SYT_CHG_VOUCHER();
        }

        SYT_GetMsgContent();
        //SYT for C_TRANS_CODE
        SYT_Cal_C_TRANS_CODE();

        //for mapping tenor field
        if (document.MAINFORM.TENOR_DAYS != null && document.MAINFORM.TENOR_DETAILS != null && document.MAINFORM.TENOR_TYPE != null && document.MAINFORM.DAY_MON_FLG != null && document.MAINFORM.DELVR_DOC_AGST != null) {
            tenor_days = SYS_BeFloat(document.MAINFORM.TENOR_DAYS.value);
            Day_Month = document.MAINFORM.DAY_MON_FLG.value;
            tenor_type = document.MAINFORM.TENOR_TYPE.value;
            deliver_agst = document.MAINFORM.DELVR_DOC_AGST.value;
            if (tenor_days == 0) {
                tenor_days = '';
                Day_Month = '';
            }

            if (Day_Month == "Days" && tenor_days == 1) {
                Day_Month = " day";
            }
            if (Day_Month == "Days" && tenor_days > 1) {
                Day_Month = " days";
            }
            if (Day_Month == "Months" && tenor_days == 1) {
                Day_Month = " month";
            }
            if (Day_Month == "Months" && tenor_days > 1) {
                Day_Month = " months";
            }

            if (tenor_type == "After date of Bill of Exchange") {
                tenor_type = " after date of Bill of exchange";
            }
            if (tenor_type == "After customs clearance of goods") {
                tenor_type = " after customs clearance of goods";
            }
            if (tenor_type == "After goods pass food and drug administration") {
                tenor_type = " after goods pass food and drug administration";
            }
            if (tenor_type == "First presentation") {
                tenor_type = " after first presentation";
            }
            if (tenor_type == "After arrival of goods") {
                tenor_type = " after arrival of goods";
            }
            if (tenor_type == "After invoice date") {
                tenor_type = " after invoice date";
            }
            if (tenor_type == "After sight") {
                tenor_type = " after sight";
            }
            if (tenor_type == "After date of transport document") {
                tenor_type = " after date of transport document";
            }
            if (tenor_type == "Fixed Maturity") {
                tenor_type = "Fixed Maturity";
            }
            if (tenor_type == "See Below") {
                tenor_type = " " + document.MAINFORM.TENOR_DETAILS.value;
            }

            if (deliver_agst == "D/P") {
                deliver_agst = "Sight";
                document.MAINFORM.TEMP_TENOR_FORM_MAP.value = "Sight";
            } else {
                deliver_agst = '';
                document.MAINFORM.TEMP_TENOR_FORM_MAP.value = tenor_days + Day_Month + tenor_type + deliver_agst;
            }

        }
        return true;
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_FinancePercentChange() {
    try {

        var nEqAmount; // Utility Auto Fix Comments
        var nFinancePersent; // Utility Auto Fix Comments
        var nLCCY; // Utility Auto Fix Comments
        var nTrxAmount; // Utility Auto Fix Comments
        var sTrxCCY; // Utility Auto Fix Comments
        nTrxAmount = SYS_BeFloat(document.MAINFORM.N_TRX_AMT.value);
        nFinancePersent = SYS_BeFloat(document.MAINFORM.CFNC_N_PCT.value);
        sTrxCCY = document.MAINFORM.C_TRX_CCY.value;
        nLCCY = document.MAINFORM.CFNC_N_TRXCCY_LCY.value;
        if (nTrxAmount > 0 && nFinancePersent > 0 && nFinancePersent < 101) {
            nEqAmount = nTrxAmount * nFinancePersent * nLCCY / 100;
            document.MAINFORM.CFNC_N_AMT_LCCCY.value = nEqAmount;
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_FinanceDayschange() {
    try {

        var nFinanceDays; // Utility Auto Fix Comments
        nFinanceDays = SYS_BeFloat(document.MAINFORM.CFNC_I_DAYS.value);
        if (document.MAINFORM.CFNC_D_DT.value != '') {
            if ((document.MAINFORM.CFNC_C_GRACE_FLG.value == 'Working') && (document.MAINFORM.CFNC_C_GRACE_DAYS.value >= '0')) {
                SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DT.value, nFinanceDays, 'SYM_EXCO_getendday', 'A', 'Y', 'Y');
            } else if ((document.MAINFORM.CFNC_C_GRACE_FLG.value == 'Calendar') && (document.MAINFORM.CFNC_C_GRACE_DAYS.value >= '0')) {
                SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DT.value, nFinanceDays, 'SYM_EXCO_getendday', 'A', 'N', 'N');
            }
        } else {
            SYS_CheckError(document.MAINFORM.CFNC_D_DT, 'Please specify the Start Date first !');
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_FinanceDueDatechange() {
    try {

        var nFinanceDays; // Utility Auto Fix Comments
        if (document.MAINFORM.CFNC_D_DT.value != "" && document.MAINFORM.CFNC_D_DUE_DT.value != "") {
            nFinanceDays = SYS_GetSubDays('CFNC_D_DT', 'CFNC_D_DUE_DT');
            if (nFinanceDays <= 0) {
                //document.MAINFORM.CFNC_I_DAYS.value = nFinanceDays;
                SYS_CheckError(document.MAINFORM.CFNC_D_DUE_DT, 'Finance Due date should later than Finance Start date !');
            }
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_FinanceLiborRateChange() {
    try {

        var nFinanceRate; // Utility Auto Fix Comments
        var nLiborRate; // Utility Auto Fix Comments
        var nMarginRate; // Utility Auto Fix Comments
        nLiborRate = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_RT.value);
        /*
  if (nLiborRate > 0 && nLiborRate < 101 ){
  // document.MAINFORM.CFNC_N_RT.value=nLiborRate;
}
*/
        nMarginRate = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_RT.value);
        if (nMarginRate > 0) {
            nFinanceRate = nLiborRate + nMarginRate / 100;
            // document.MAINFORM.CFNC_N_RT.value = nFinanceRate;}
        } else {
            SYS_CheckError(document.MAINFORM.CFNC_N_LIBOR_RT, 'LIBOR should between 0% and 100%');
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_FinanceMarginRateChange() {
    try {

        var nLiborRate; // Utility Auto Fix Comments
        var nMarginRate; // Utility Auto Fix Comments
        var nRate; // Utility Auto Fix Comments
        nMarginRate = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_RT.value);
        nLiborRate = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_RT.value);
        if (nMarginRate >= 0) {
            if (nLiborRate > 0) {
                nRate = nLiborRate + nMarginRate;
                document.MAINFORM.CFNC_N_RT.value = nRate;
            } else {
                SYS_CheckError(document.MAINFORM.CFNC_N_MARGIN_RT, 'Please Input Libor Rate First !');
                document.MAINFORM.CFNC_N_MARGIN_RT.value = 0;
            }
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_getendday(enddate) {
    try {

        document.MAINFORM.CFNC_D_DUE_DT.value = enddate;
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_GetLCYvalue() {
    try {

        var sCCY; // Utility Auto Fix Comments
        var sTRXCCY; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        //sCCY = document.MAINFORM.CFNC_C_CCY.value;
        //sTRXCCY = document.MAINFORM.C_TRX_CCY.value;
        if (sCCY != sTRXCCY) {
            //strSQLWhere = "C_FROM_CCY='" + sTRXCCY + "'" + " " + "AND" + " " + "C_TO_CCY='" + sCCY + "'";
            SYS_GetTableDataByRule_S('SYM_EXCO_SYM_EXCO_GetLCYvalue_0', '1');
        } else {
            document.MAINFORM.CFNC_N_TRXCCY_LCY.value = 1;
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_M_SW_TAG(arr_BIC) {
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
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_HiddenFinanceDoFields() {
    try {

        var Func; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        xDO = SYS_getDoByXpath("FinanceEstablishment");
        if (xDO) {
            Func = xDO.getselectedFrame().window["HidenDoField"];
            Func();
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_Set_NET_AMT_RCVD_COLL_CCY_toPaymentDebit() {
    try {

        var ccy; // Utility Auto Fix Comments
        //modified for PUI
        if (document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY != null) {
            ccy = document.MAINFORM.COLL_CCY.value;
            // 2010-8-23, cancel the comments for Payment func(EEAuto), output voucher not balance
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(ccy, document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value);
            EEHtml.fireEvent(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY, "onchange");
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_Set_NET_AMT_PD_COL_CCY_toPaymentCredit() {
    try {

        //modified for PUI
        if (document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY != null) {
            // 2010-8-23, cancel the comments for Payment func(EEAuto), output voucher not balance
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.COLL_CCY.value, SYS_BeFloat(document.MAINFORM.NET_AMT_PD_COL_CCY.value));
            EEHtml.fireEvent(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY, "onchange");
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_M_CLASS_BY_DRWR_CORR_MED() {
    try {

        var arr_Fld; // Utility Auto Fix Comments
        var arr_FldClass_DEFAULT; // Utility Auto Fix Comments
        var arr_FldClass_EMAIL; // Utility Auto Fix Comments
        var arr_FldClass_FAX; // Utility Auto Fix Comments
        var arr_FldClass_MAIL; // Utility Auto Fix Comments
        var arr_FldClass_NONE; // Utility Auto Fix Comments
        var arr_FldClass_TELEX; // Utility Auto Fix Comments
        arr_Fld = new Array(document.MAINFORM.DRWR_FAX, document.MAINFORM.DRWR_EMAIL, document.MAINFORM.DRWR_TEL_NO, document.MAINFORM.DRWR_MAIL_ADD, document.MAINFORM.DRWR_POST_ADD_BTN);
        arr_FldClass_FAX = new Array("M", "O", "O", "O", "O");
        arr_FldClass_EMAIL = new Array("O", "M", "O", "O", "O");
        arr_FldClass_TELEX = new Array("O", "O", "M", "O", "O");
        arr_FldClass_MAIL = new Array("O", "O", "O", "M", "O");
        arr_FldClass_NONE = new Array("P", "P", "P", "P", "P");
        arr_FldClass_DEFAULT = new Array("O", "O", "O", "O", "O");

        switch (document.MAINFORM.DRWR_CORR_MED.value) {
            case "Fax":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_FAX);
                break;
            case "Email":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_EMAIL);
                break;
            case "Telex":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_TELEX);
                break;
            case "Mail":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_MAIL);
                break;
            case "None":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_NONE);
                break;
            default:
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_DEFAULT);
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_M_CLASS_BY_DRWE_CORR_MED() {
    try {

        var arr_Fld; // Utility Auto Fix Comments
        var arr_FldClass_DEFAULT; // Utility Auto Fix Comments
        var arr_FldClass_EMAIL; // Utility Auto Fix Comments
        var arr_FldClass_FAX; // Utility Auto Fix Comments
        var arr_FldClass_MAIL; // Utility Auto Fix Comments
        var arr_FldClass_NONE; // Utility Auto Fix Comments
        var arr_FldClass_TELEX; // Utility Auto Fix Comments
        arr_Fld = new Array(document.MAINFORM.DRWE_FAX, document.MAINFORM.DRWE_EMAIL, document.MAINFORM.DRWE_TEL_NO, document.MAINFORM.DRWE_MAIL_ADD, document.MAINFORM.DRWE_POST_ADD_BTN);
        arr_FldClass_FAX = new Array("M", "O", "O", "O", "O");
        arr_FldClass_EMAIL = new Array("O", "M", "O", "O", "O");
        arr_FldClass_TELEX = new Array("O", "O", "M", "O", "O");
        arr_FldClass_MAIL = new Array("O", "O", "O", "M", "O");
        arr_FldClass_NONE = new Array("P", "P", "P", "P", "P");
        arr_FldClass_DEFAULT = new Array("O", "O", "O", "O", "O");
        switch (document.MAINFORM.DRWE_CORR_MED.value) {
            case "Fax":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_FAX);
                break;
            case "Email":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_EMAIL);
                break;
            case "Telex":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_TELEX);
                break;
            case "Mail":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_MAIL);
                break;
            case "None":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_NONE);
                break;
            default:
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_DEFAULT);
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_M_TAG32K(oTENOR_TYPE, oTENOR_DAYS, oDAY_MON_FLG) {
    try {

        var TENOR_TYPE; // Utility Auto Fix Comments
        var code; // Utility Auto Fix Comments
        var days; // Utility Auto Fix Comments
        var sMark; // Utility Auto Fix Comments
        TENOR_TYPE = oTENOR_TYPE.value;
        code = "";
        days = "";
        sMark = "";
        switch (TENOR_TYPE) {
            case "After date of Bill of Exchange":
                code = "BE";
                break;
            case "After customs clearance of goods":
                code = "CC";
                break;
            case "After goods pass food and drug administration":
                code = "FD";
                break;
            case "First presentation":
                code = "FP";
                break;
            case "After arrival of goods":
                code = "GA";
                break;
            case "After invoice date":
                code = "ID";
                break;
            case "After sight":
                code = "ST";
                break;
            case "After date of transport document":
                code = "TD";
                break;
            case "See Below":
                code = "XX";

                break;
        }
        days = SYT_FillZero(oTENOR_DAYS.value, 3);


        if (oDAY_MON_FLG.value == "Days") {
            sMark = "D";
        }
        if (oDAY_MON_FLG.value == "Months") {
            sMark = "M";
        }
        if (document.MAINFORM.TAG32.value == "K" && sMark != "") {
            document.MAINFORM.TAG32_MAP.value = sMark + days + code;
        } else {
            document.MAINFORM.TAG32_MAP.value = "";
        }
        EEHtml.fireEvent(document.MAINFORM.TAG32_MAP, "onchange");
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_Cal_TENOR_DETAILS() {
    try {

        //edit by Dane 2009-01-27
        if ('See Below' == document.MAINFORM.TENOR_TYPE.value) {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DETAILS, 'P');
            document.MAINFORM.TENOR_DETAILS.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_MPO_NXT_TRCR_DT() {
    try {

        if (document.MAINFORM.SEND_TRACER.value == 'YES') {
            document.MAINFORM.NXT_TRCR_DT.value = SYS_DATE;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NXT_TRCR_DT, 'P');
            document.MAINFORM.NXT_TRCR_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_Cal_NXT_TRCR_DT(NXT_TRCR_DT) {
    try {

        document.MAINFORM.NXT_TRCR_DT.value = NXT_TRCR_DT;
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_Cal_NXT_TRCR_DT_DT() {
    try {

        if (document.MAINFORM.INTERVAL_DAYS.value != '') {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, SYS_DATE, document.MAINFORM.INTERVAL_DAYS.value, 'SYM_EXCO_Cal_NXT_TRCR_DT', 'A', 'N', 'Y');
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_MPO_NEW_TENOR_DETAILS() {
    try {

        if (document.MAINFORM.NEW_TENOR_TYPE.value == 'See Below') {
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DETAILS, 'M');

        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_TENOR_DETAILS, 'O');
            document.MAINFORM.NEW_TENOR_DETAILS.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_Cal_NEW_DUE_DT() {
    try {

        if (document.MAINFORM.NEW_TENOR_TYPE.value == 'Fixed Maturity') {
            document.MAINFORM.NEW_DUE_DT.value = document.MAINFORM.DUE_DT.value;
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_M_CLEAR_DOCUMENTS() {
    try {

        document.MAINFORM.DRAFT_1.value = '';
        document.MAINFORM.DRAFT_2.value = '';
        document.MAINFORM.INVOICE_1.value = '';
        document.MAINFORM.INVOICE_2.value = '';
        document.MAINFORM.BL_AWB_1.value = '';
        document.MAINFORM.BL_AWB_2.value = '';
        document.MAINFORM.CERTIFICATE_1.value = '';
        document.MAINFORM.CERTIFICATE_2.value = '';
        document.MAINFORM.INSP_CERT_1.value = '';
        document.MAINFORM.INSP_CERT_2.value = '';
        document.MAINFORM.PACK_LIST_1.value = '';
        document.MAINFORM.PACK_LIST_2.value = '';
        document.MAINFORM.INSURANCE_1.value = '';
        document.MAINFORM.INSURANCE_2.value = '';
        document.MAINFORM.VESSEL_CERT_1.value = '';
        document.MAINFORM.VESSEL_CERT_2.value = '';
        document.MAINFORM.FREIGHT_INV_1.value = '';
        document.MAINFORM.FREIGHT_INV_2.value = '';
        document.MAINFORM.BENEF_CERT_1.value = '';
        document.MAINFORM.BENEF_CERT_2.value = '';
        document.MAINFORM.OTHERS_1.value = '';
        document.MAINFORM.OTHERS_2.value = '';
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_M_EXCO_POST_CHG(nTimes) {
    try {

        var sFromCode; // Utility Auto Fix Comments
        var sToCode; // Utility Auto Fix Comments
        sFromCode = null;
        sToCode = null;

        if (SYS_ORG_FUNCTION_SHORT_NAME == "COLLECTION") {
            if (nTimes == 0) {
                Chg.reset(["EXCO_POST_CHG"]);
                return;
            }
            Chg.calculate(["EXCO_POST_CHG"], document.MAINFORM.COLL_CCY.value, null, null, null, sFromCode, sToCode, null, nTimes, null);
        } else {
            if (nTimes == 0) {
                Chg.reset(["EXCO_POST_CHG_NA"]);
                return;
            }
            Chg.calculate(["EXCO_POST_CHG_NA"], document.MAINFORM.COLL_CCY.value, null, null, null, sFromCode, sToCode, null, nTimes, null);
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_M_EXCO_COURIER_CHG(nTimes) {
    try {

        var sFromCode; // Utility Auto Fix Comments
        var sToCode; // Utility Auto Fix Comments
        sFromCode = null;
        sToCode = null;
        if (SYS_ORG_FUNCTION_SHORT_NAME == "COLLECTION") {
            if (nTimes == 0) {
                Chg.reset(["EXCO_COURIER_CHG"]);
                return;
            }
            Chg.calculate(["EXCO_COURIER_CHG"], document.MAINFORM.COLL_CCY.value, null, null, null, sFromCode, sToCode, null, nTimes, null);
        } else {
            if (nTimes == 0) {
                Chg.reset(["EXCO_COURIER_CHG_NA"]);
                return;
            }
            Chg.calculate(["EXCO_COURIER_CHG_NA"], document.MAINFORM.COLL_CCY.value, null, null, null, sFromCode, sToCode, null, nTimes, null);
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_M_EXCO_SWIFT_CHG(nTimes) {
    try {

        Chg.calculate(["EXCO_SWIFT_CHG"], document.MAINFORM.COLL_CCY.value, null, null, null, null, null, null, nTimes, null);
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_M_EXCO_OTHER_CHG() {
    try {

        Chg.calculate(["EXCO_OTHER_CHG"], document.MAINFORM.COLL_CCY.value, document.MAINFORM.COLL_TRX_CCY_AMT.value);
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_M_DRWR_FIELDS_CLASS() {
    try {

        SYT_ChangeFldClass(document.MAINFORM.DRWR_ID, "M");
        SYT_ChangeFldClass(document.MAINFORM.DRWR_ID_BTN, "O");
        SYT_ChangeFldClass(document.MAINFORM.DRWR_NM, "M");
        SYT_ChangeFldClass(document.MAINFORM.DRWR_ADD1, "O");
        SYT_ChangeFldClass(document.MAINFORM.DRWR_ADD2, "O");
        SYT_ChangeFldClass(document.MAINFORM.DRWR_ADD3, "O");
        SYT_ChangeFldClass(document.MAINFORM.DRWR_MAIL_ADD, "P");
        SYT_ChangeFldClass(document.MAINFORM.DRWR_LANG, "M");
        SYT_ChangeFldClass(document.MAINFORM.DRWR_CORR_MED, "M");
        SYT_ChangeFldClass(document.MAINFORM.DRWR_FAX, "P");
        SYT_ChangeFldClass(document.MAINFORM.DRWR_EMAIL, "P");
        SYT_ChangeFldClass(document.MAINFORM.DRWR_TEL_NO, "P");
        SYT_ChangeFldClass(document.MAINFORM.AC_OFFICER_CODE, "P");
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_CAL_CHG_CASH_IND_back() {
    try {

        if (document.MAINFORM.STL_INSTR_FLG.value == 'Take Charges Separately') {
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_CHARGE_DT() {
    try {

        if (document.MAINFORM.DRWR_ID.value == 'C000085') {
            document.MAINFORM.CHARGE_DT.value = document.MAINFORM.TEMP_CHARGE_DT.value;
        } else {

            document.MAINFORM.CHARGE_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_FOR_DISCOUNT() {
    try {

        if (document.MAINFORM.DISCNT_FLG.value == 'YES') {

            document.MAINFORM.STL_INSTR_FLG.value = 'Take Charges Separately';
            SYT_ChangeFldClass(document.MAINFORM.STL_INSTR_FLG, 'P');
        } else {
            //document.MAINFORM.STL_INSTR_FLG.value = 'Deduct Charges from Proceeds'; //add for Unique test on 20200610
            SYT_ChangeFldClass(document.MAINFORM.STL_INSTR_FLG, 'M');

        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_TEMP_CHARGE_DT() {
    try {

        var curMonth; // Utility Auto Fix Comments
        var curYear; // Utility Auto Fix Comments
        var d; // Utility Auto Fix Comments
        var nextMonth; // Utility Auto Fix Comments
        d = new Date();
        curYear = d.getFullYear();
        curMonth = d.getMonth() + 1;
        nextMonth = curMonth + 1;
        //alert(curYear+"  "+nextMonth);
        if (nextMonth > 12) {
            curYear = curYear + 1;
            nextMonth = nextMonth - 12;
        }
        if (nextMonth < 10) {
            nextMonth = "0" + nextMonth;
        }
        //alert(curYear+"  "+nextMonth);
        document.MAINFORM.TEMP_CHARGE_DT.value = SYM_EXCO_getDateToSytemDate(SYS_DATE_FORMAT, curYear, nextMonth, "01");
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_getDateToSytemDate(dateFormat, yyyy, mm, dd) {
    try {

        var sD; // Utility Auto Fix Comments
        //2013-11-01

        if (dateFormat == "yyyy-MM-dd") {
            sD = yyyy + "-" + mm + "-" + dd;
        }

        if (dateFormat == "yy-MM-dd") {
            yyyy = yyyy.substr(2, 2);
            sD = yyyy + "-" + mm + "-" + dd;
        } else if (dateFormat == "MM-dd-yyyy") {
            sD = mm + "-" + dd + "-" + yyyy;
        } else if (dateFormat == "MM-dd-yy") {
            yyyy = yyyy.substr(2, 2);
            sD = mm + "-" + dd + "-" + yyyy;
        } else if (dateFormat == "dd-MM-yyyy") {
            sD = dd + "-" + mm + "-" + yyyy;
        } else if (dateFormat == "dd-MM-yy") {
            yyyy = yyyy.substr(2, 2);
            sD = dd + "-" + mm + "-" + dd;
        } else if (dateFormat == "yyyy/MM/dd") {
            sD = yyyy + "-" + mm + "-" + dd;
        } else if (dateFormat == "yy/MM/dd") {
            yyyy = yyyy.substr(2, 2);
            sD = yyyy + "/" + mm + "/" + dd;
        } else if (dateFormat == "MM/dd/yyyy") {
            sD = mm + "/" + dd + "/" + yyyy;
        } else if (dateFormat == "MM/dd/yy") {
            yyyy = yyyy.substr(2, 2);
            sD = mm + "/" + dd + "/" + yyyy;
        } else if (dateFormat == "dd/MM/yy") {
            yyyy = yyyy.substr(2, 2);
            sD = dd + "/" + mm + "/" + yyyy;
        } else if (dateFormat == "dd/MM/yyyy") {
            sD = dd + "/" + mm + "/" + yyyy;
        }
        return sD;
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_FREE_PYMT() {
    try {

        var amt; // Utility Auto Fix Comments
        var arr; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        arr = ['EXCO_FREE_PAYT'];
        amt = EEHtml.getElementById('COLL_TRX_CCY_AMT').value;
        ccy = EEHtml.getElementById('COLL_CCY').value;
        Chg.calculate(arr, ccy, amt);
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}

function SYM_EXCO_checkEmailAdd(str) {
    try {

        var re = /^[0-9A-Za-z[\.-_0-9A-Za-z]*@[0-9A-Za-z]+(?:\.[0-9A-Za-z]+)+$/;
        if (re.test(str)) {
            return true;
        } else {
            alert("Wrong Email format");
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_EXCO.js", e);
    }
}