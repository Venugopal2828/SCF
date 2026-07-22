function SYM_RPFM_set_ref(ref) {
    try {

        var date = new Date();
        var dYear = SYS_BUSI_DATE;
        var strYear, strPrefix, strPostfix;
        var unitcode = SYS_BUSI_UNIT;
        dYear = SYS_FormatDateToStd(dYear);
        strYear = dYear + "/";
        strPostfix = ref.substr(0, 6);
        if (SYS_ORG_FUNCTION_NAME == 'RegMstAgreement') {

            strPrefix = "RG";
            document.MAINFORM.C_MAIN_REF.value = strPrefix + unitcode.substr(0, 3) + strYear.substr(2, 2) + ref;
        } else if (SYS_ORG_FUNCTION_NAME == 'RegMstAgreement') {
            strPrefix = "RP";
            document.MAINFORM.C_MAIN_REF.value = strPrefix + unitcode + strYear.substr(2, 2) + strPostfix;
        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_Set_MODULE_SELECT() {
    try {

        if (document.MAINFORM.MODULE_SELECT2.value != '') {
            document.MAINFORM.SOURCE_REF.value = document.MAINFORM.MODULE_SELECT2.value;
        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_OBLG_ID_GetCUBK() {
    try {

        if (document.MAINFORM.OBLG_ID.value == '') {
            document.MAINFORM.OBLG_NM.value = '';
            document.MAINFORM.OBLG_ADD1.value = '';
            document.MAINFORM.OBLG_ADD2.value = '';
            document.MAINFORM.OBLG_ADD3.value = '';
            document.MAINFORM.BENE_CNTY_CD.value = '';
            document.MAINFORM.OBLG_SWIFT_TAG.value = '';
            document.MAINFORM.OBLG_SWIFT_ADD.value = '';
        } else {
            if (document.MAINFORM.SYND_OBLG_TYPE.value == "Bank") {
                SYS_GetCUBK('OBLG_ID_BANK', document.MAINFORM.OBLG_ID.name, 'SYF_RPFM_Cal_OBLG_SW_TAG');
            } else {
                SYS_GetCUBK('OBLG_ID', document.MAINFORM.OBLG_ID.name);
            }

        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_Cal_NO_OF_AMD(ref) {
    try {

        var NO_OF_AMD; // Utility Auto Fix Comments
        NO_OF_AMD = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);
        if (NO_OF_AMD == "" || NO_OF_AMD == 0) {
            document.MAINFORM.NO_OF_AMD.value = 1;
        } else {
            document.MAINFORM.NO_OF_AMD.value = NO_OF_AMD + 1;
        }
        SYM_RPFM_SetAmdRef(document.MAINFORM.NO_OF_AMD.value);
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_SetAmdRef() {
    try {

        var NO_OF_AMD; // Utility Auto Fix Comments
        NO_OF_AMD = SYS_BeInt(document.MAINFORM.NO_OF_AMD.value);

        if (NO_OF_AMD < 10) {
            ref = '0' + NO_OF_AMD;
        } else {
            ref = NO_OF_AMD;
        }
        document.MAINFORM.PART_CNTR_REF.value = document.MAINFORM.C_MAIN_REF.value + ref;
        document.MAINFORM.PART_CNTR.value = ref;
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_Set_TTL_STL_AMT_RCV_toPaymentDebit() {
    try {

        var DISCNT_FLG; // Utility Auto Fix Comments
        var PaymentInstrDeal; // Utility Auto Fix Comments
        var arrDebit; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        var debitheader; // Utility Auto Fix Comments
        var flg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var percent; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var realamount; // Utility Auto Fix Comments
        var totalamount; // Utility Auto Fix Comments
        var trxamount; // Utility Auto Fix Comments
        //Add by Jack on 20120908 for SMBC Workshop
        ccy = document.MAINFORM.LC_CCY.value;
        PaymentInstrDeal = SYS_GetObjByDoName("PaymentInstrDeal");
        DISCNT_FLG = document.MAINFORM.DISCNT_FLG.value;
        if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount" || SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptFrCE") {
            len = PaymentInstrDeal.length;
            if (len == 0) { // Utility Auto Fix Comments
                return; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            else {
                for (i = 0; i < len; i++) {
                    flg = SYS_GetFldValueByDo(PaymentInstrDeal[i], "CPYT_C_SDA_FLAG");
                    if (flg == "Sight" || DISCNT_FLG == 'YES') {
                        debitheader = null;
                        debitheader = PaymentInstrDeal[i].getDoByName("PaymentDebitHeader");
                        if (debitheader == null) {
                            return;
                        } else {
                            SYS_UpdateFldValueByDo(debitheader[0], "CPYT_DR_TTL_AMT_TTLCCY", SYT_AmtFormat(ccy, document.MAINFORM.TTL_DR_AMT.value));
                            totalamount = SYS_BeFloat(document.MAINFORM.TTL_DR_AMT.value);
                            arrDebit = PaymentInstrDeal[i].getDoByName("PaymentDebit");
                            len = arrDebit.length;
                            for (i = 0; i < len; i++) {
                                debit = arrDebit[i];
                                percent = SYS_BeFloat(debit.getDoValueByName('CPYT_DR_PER'));
                                rate = SYS_BeFloat(debit.getDoValueByName('CPYT_DR_BUY_RATE'));
                                trxamount = totalamount * percent * rate / 100;
                                realamount = totalamount * percent / 100;
                                SYS_UpdateFldValueByDo(debit, 'CPYT_DR_AMT_DRCCY', SYT_AmtFormat(ccy, trxamount));
                                SYS_UpdateFldValueByDo(debit, 'CPYT_DR_AMT_TXCCY', SYT_AmtFormat(ccy, realamount));
                            }
                            SYS_RefreshDoGrid(arrDebit);
                        }
                    }
                }
            }
        } else {
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_DR.value);
            EEHtml.fireEvent(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY, "onchange");
        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit() {
    try {

        var PaymentInstrDeal; // Utility Auto Fix Comments
        var arrCredit; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var credit; // Utility Auto Fix Comments
        var creditheader; // Utility Auto Fix Comments
        var disflg; // Utility Auto Fix Comments
        var flg; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var percent; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var realamount; // Utility Auto Fix Comments
        var totalamount; // Utility Auto Fix Comments
        var trxamount; // Utility Auto Fix Comments
        ccy = document.MAINFORM.LC_CCY.value;
        disflg = document.MAINFORM.DISCNT_FLG.value;
        PaymentInstrDeal = SYS_GetObjByDoName("PaymentInstrDeal");
        if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount") {
            len = PaymentInstrDeal.length;
            if (len == 0) { // Utility Auto Fix Comments
                return; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            else {
                for (i = 0; i < len; i++) {
                    flg = SYS_GetFldValueByDo(PaymentInstrDeal[i], "CPYT_C_SDA_FLAG");
                    if (flg == "Sight" || disflg == "YES") {
                        creditheader = null;
                        creditheader = PaymentInstrDeal[i].getDoByName("PaymentCreditHeader");
                        if (creditheader == null) {
                            return;
                        } else {
                            SYS_UpdateFldValueByDo(creditheader[0], "CPYT_CR_TTL_AMT_TTLCCY", SYT_AmtFormat(ccy, document.MAINFORM.TTL_CR_AMT.value));
                            totalamount = SYS_BeFloat(document.MAINFORM.TTL_CR_AMT.value);
                            arrCredit = PaymentInstrDeal[i].getDoByName("PaymentCredit");
                            len = arrCredit.length;
                            for (i = 0; i < len; i++) {

                                credit = arrCredit[i];
                                percent = SYS_BeFloat(credit.getDoValueByName('CPYT_CR_PER'));
                                rate = SYS_BeFloat(credit.getDoValueByName('CPYT_CR_BUY_RATE'));
                                trxamount = totalamount * percent * rate / 100;
                                realamount = totalamount * percent / 100;
                                SYS_UpdateFldValueByDo(credit, 'CPYT_CR_AMT_CRCCY', SYT_AmtFormat(ccy, trxamount));
                                SYS_UpdateFldValueByDo(credit, 'CPYT_CR_AMT_TXCCY', SYT_AmtFormat(ccy, realamount));
                            }
                            SYS_RefreshDoGrid(arrCredit);
                        }
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_addPaymentRecord() {
    try {

        var Func; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        //modified for PUI
        //return;

        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'EC' && SYS_FUNCTION_TYPE != 'FP') {
            xDO = SYS_getDoByXpath("PaymentDealer");
            if (xDO) {
                Func = xDO.getselectedFrame().window["addOneRecordToPaymentDO"];
                Func();
            }
        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_Cal_AC_WT_BK_SW_TAG() {
    try {

        if (document.MAINFORM.AC_BK_SW_ADD.value != '') {

            document.MAINFORM.AC_BK_SW_TAG.value = "A";

        } else if ((document.MAINFORM.AC_WT_BK_NM.value != '' || document.MAINFORM.AC_WT_BK_ADD1.value != '' || document.MAINFORM.AC_WT_BK_ADD2.value != '' || document.MAINFORM.AC_WT_BK_ADD3.value != '') && document.MAINFORM.AC_BK_SW_ADD.value == '') {
            document.MAINFORM.AC_BK_SW_TAG.value = "D";

        } else {
            document.MAINFORM.AC_BK_SW_TAG.value = "";

        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_Cal_SYND_PART_SW_TAG() {
    try {

        if (document.MAINFORM.SYND_PART_SW_ADD.value != '') {
            document.MAINFORM.SYND_PART_SW_TAG.value = 'A';
        } else if ((document.MAINFORM.SYND_PART_NM.value != '' || document.MAINFORM.SYND_PART_ADD1.value != '' || document.MAINFORM.SYND_PART_ADD2.value != '' || document.MAINFORM.SYND_PART_ADD3.value != '') && document.MAINFORM.SYND_PART_SW_ADD.value == '') {
            document.MAINFORM.SYND_PART_SW_TAG.value = 'D';
        } else {
            document.MAINFORM.SYND_PART_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_Cal_FACI_TYPE() {
    try {

        if (SYS_ORG_FUNCTION_NAME == 'RegParticipant') {
            if (document.MAINFORM.UDLY_TYPE.value == "LC/SKBDN Issuance" || document.MAINFORM.UDLY_TYPE.value == "LC/SKBDN Confirmation" || document.MAINFORM.UDLY_TYPE.value == "LC/SKBDN Negotiation" || document.MAINFORM.UDLY_TYPE.value == "LC/SKBDN UPAS" || document.MAINFORM.UDLY_TYPE.value == "Bankers' Acceptance") {
                document.MAINFORM.RPFM_FACI_TP.value = 'Import';
            } else if (document.MAINFORM.UDLY_TYPE.value == "Bank Guarantee" || document.MAINFORM.UDLY_TYPE.value == "Counter Guarantee") {
                document.MAINFORM.RPFM_FACI_TP.value = 'Guarantee';
            } else if (document.MAINFORM.UDLY_TYPE.value == "Export Bills Discounting" || document.MAINFORM.UDLY_TYPE.value == "Forfaiting") {
                document.MAINFORM.RPFM_FACI_TP.value = 'Export/AR Financing';
            } else if (document.MAINFORM.UDLY_TYPE.value == "Others") {
                document.MAINFORM.RPFM_FACI_TP.value = 'Trade/AP Financing';
            }
        }
        if (SYS_ORG_FUNCTION_NAME == 'RegMstAgreement') {
            if (document.MAINFORM.TRX_TYPE.value == 'Issuance' || document.MAINFORM.TRX_TYPE.value == 'Confirmation' || document.MAINFORM.TRX_TYPE.value == 'Negotiation' || document.MAINFORM.TRX_TYPE.value == 'UPAS' || document.MAINFORM.TRX_TYPE.value == "Bankers' Acceptance") {
                document.MAINFORM.RPFM_FACI_TP.value = 'Import';
            } else if (document.MAINFORM.TRX_TYPE.value == 'Bank Guarantee' || document.MAINFORM.TRX_TYPE.value == 'Counter Guarantee') {
                document.MAINFORM.RPFM_FACI_TP.value = 'Guarantee';
            } else if (document.MAINFORM.TRX_TYPE.value == 'Export Bills Discounting' || document.MAINFORM.TRX_TYPE.value == 'Forfaiting'|| document.MAINFORM.TRX_TYPE.value == 'Confirmation') {
                document.MAINFORM.RPFM_FACI_TP.value = 'Export/AR Financing';
            } else if (document.MAINFORM.TRX_TYPE.value == 'OTHR') {
                document.MAINFORM.RPFM_FACI_TP.value = 'Trade/AP Financing';
            }
        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_Cal_FinACNO() {
    try {

        var CFNC_C_SOURCE_OF_FUND = document.MAINFORM.CFNC_C_SOURCE_OF_FUND.value;
        var OVERS_TRANSFER_VIA = document.MAINFORM.OVERS_TRANSFER_VIA.value;
        if (SYS_FUNCTION_NAME == "ProcessGrantor") {
            if (CFNC_C_SOURCE_OF_FUND == 'T') {
                document.MAINFORM.CFNC_FIN_AC_NO.value = '23611401';
                document.MAINFORM.CFNC_INT_AC_NO.value = '27513702';

            } else {
                document.MAINFORM.OVS_FINC_AC_NO.value = '';
                document.MAINFORM.CFNC_INT_AC_NO.value = '';
            }
        }
        if (SYS_FUNCTION_NAME == "ProcessParticipant") {
            if (CFNC_C_SOURCE_OF_FUND == 'T') {
                document.MAINFORM.CFNC_FIN_AC_NO.value = '15611401';
                document.MAINFORM.CFNC_INT_AC_NO.value = '16571401';
            } else {
                document.MAINFORM.CFNC_FIN_AC_NO.value = '';
                document.MAINFORM.CFNC_INT_AC_NO.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_Cal_SYND_OBLG_SW_TAG() {
    try {

        if (document.MAINFORM.OBLG_SWIFT_ADD.value != '') {
            document.MAINFORM.OBLG_SWIFT_TAG.value = 'A';
        } else if ((document.MAINFORM.OBLG_NM.value != '' || document.MAINFORM.OBLG_ADD1.value != '' || document.MAINFORM.OBLG_ADD2.value != '' || document.MAINFORM.OBLG_ADD3.value != '') && document.MAINFORM.OBLG_SWIFT_ADD.value == '') {
            document.MAINFORM.OBLG_SWIFT_TAG.value = 'D';
        } else {
            document.MAINFORM.OBLG_SWIFT_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_Delete_credit_record() {
    try {

        var instDo = SYS_GetObjByDoName("PaymentDealer")[0]; //create array PaymentInstruction	
        if (typeof instDo != 'undefined') {
            var deitHeaderDo = instDo.getChildByName("PaymentCreditHeader")[0];
            if (deitHeaderDo == null || deitHeaderDo == "undefined") {
                deitHeaderDo = DoRoot.getTemplate("PaymentCreditHeader").getTempObj(instDo); //create array PaymentInstruction.PaymentDebitHeader
            }
            // will remove the orignal debit do record first .
            var orgDebitDoObjs = deitHeaderDo.getChildByName("PaymentCredit");
            for (var i = 0; i < orgDebitDoObjs.length; i++) {
                DoRoot.deleteDoObj(orgDebitDoObjs[i]);
            }
        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_SYND_MPO_PART_CORR_MED() {
    try {

        if (document.MAINFORM.SYND_PART_CORR_MED.value == 'Swift') {
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_SW_ADD, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SYND_PART_SW_ADD, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_CLAIM_AMT_CHECK() {
    try {

        if (SYS_BeFloat(document.MAINFORM.CLAIM_AMT.value) > SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value)) {
            alert("Claim Amount should not be more than Participant amount!");
            document.MAINFORM.CLAIM_AMT.value = 0;
        }
        if (SYS_BeFloat(document.MAINFORM.CLAIM_AMT.value) < 0) {
            alert("The Claim amount field should not accept negative values!");
            document.MAINFORM.CLAIM_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}

function SYM_RPFM_CAL_MATURITY_DT() {
    try {

        var nDays; // Utility Auto Fix Comments
        //Add by Jack on 20120907 for SMBC Workshop
        nDays = SYS_BeInt(document.MAINFORM.PART_DAYS.value);
        if (nDays != "" && document.MAINFORM.PART_START_DT.value != "") {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.PART_START_DT.value, nDays, "SYF_RPFM_PART_MAT_DT_RESULT", "A", "N", "N");
        }
    } catch (e) {
        DisExcpt("SYM_RPFM.js", e);
    }
}