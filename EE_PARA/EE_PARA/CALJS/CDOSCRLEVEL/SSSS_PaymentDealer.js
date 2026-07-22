"path:SCRN/DO/PaymentDealer.jsp";

function Back_CPYT_D_MAT_DATE(enddate) {
    try {
        document.MAINFORM.CPYT_D_MAT_DATE.value = enddate;
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function CPYT_C_SDA_FLAG() {
    try {
        if (document.MAINFORM.CPYT_C_SDA_FLAG.value == "Sight") {
            document.MAINFORM.CPYT_I_TENOR_DAYS.value = 0;
            document.MAINFORM.CPYT_C_TENOR_TYPE.value = "";
            document.MAINFORM.CPYT_D_TENOR_START_DATE.value = "";
            document.MAINFORM.CPYT_D_MAT_DATE.value = "";
            SYS_changeClassName('CPYT_I_TENOR_DAYS', 'P');
            SYS_changeClassName('CPYT_C_TENOR_TYPE', 'P');
        } else {
            if (document.MAINFORM.CPYT_C_TENOR_TYPE.value != 'FIXED MATURITY') {
                SYS_changeClassName('CPYT_I_TENOR_DAYS', 'M');
            } else {
                SYS_changeClassName('CPYT_I_TENOR_DAYS', 'M');
            }
            SYS_changeClassName('CPYT_C_TENOR_TYPE', 'M');
        }
        CPYT_C_TENOR_TYPE();
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function CPYT_C_TENOR_TYPE() {
    try {
        if (document.MAINFORM.CPYT_C_TENOR_TYPE.value == "OTHER") {
            SYT_DisObj('CPYT_C_TENOR_DESC');
            SYS_changeClassName('CPYT_C_TENOR_DESC', 'M');
        } else {
            SYT_DisObj('CPYT_C_TENOR_DESC');
            SYS_changeClassName('CPYT_C_TENOR_DESC', 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function CPYT_D_TENOR_START_DATE() {
    try {
        if (document.MAINFORM.CPYT_C_SDA_FLAG.value == 'Sight') {
            SYS_changeClassName('CPYT_D_TENOR_START_DATE', 'P');
        } else {
            SYS_changeClassName('CPYT_D_TENOR_START_DATE', 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function CPYT_N_PAY_AMTonchange() {
    try {
        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = document.MAINFORM.CPYT_N_PAY_AMT.value;
        EEHtml.fireEvent(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function Cal_CPYT_D_MAT_DATE() {
    try {
        sDay = SYS_BeInt(document.MAINFORM.CPYT_I_TENOR_DAYS.value);
        SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CPYT_D_TENOR_START_DATE.value, sDay, Back_CPYT_D_MAT_DATE, 'A', 'Y', 'Y');
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function Cal_CPYT_N_PAY_AMT() {
    try {
        if (SYS_MODULE_NAME == "REIM") {
            document.MAINFORM.CPYT_N_PAY_AMT.value = document.MAINFORM.NET_CLAIM_ISSBK.value;
        }
        if (SYS_MODULE_NAME == "GTEE" || SYS_MODULE_NAME == "IWGT") {
            document.MAINFORM.CPYT_N_PAY_AMT.value = document.MAINFORM.TTL_DR_AMT.value;
        }
        if (SYS_MODULE_NAME == "SBLC") {
            document.MAINFORM.CPYT_N_PAY_AMT.value = document.MAINFORM.REDC_BAL_AMT.value;
        }
        if (SYS_MODULE_NAME == "SYND") {
            // document.MAINFORM.CPYT_N_PAY_AMT.value = document.MAINFORM.PCPT_AMT.value;
        }
        if (SYS_MODULE_NAME == "RPFM") {
            if (SYS_ORG_FUNCTION_NAME == "ProcessGrantor") {
                if (document.MAINFORM.COMM_FLG.value == 'Yes') {
                    document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PART_CHG_CCY.value, document.MAINFORM.PART_CHG_AMT.value);
                } else {
                    document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.PART_CHG_CCY.value, 0);
                }
            }
            if (SYS_ORG_FUNCTION_NAME == "SettleParticipant") {
                if (document.MAINFORM.PART_TYPE.value == 'Funded') {
                    if (document.MAINFORM.RISK_FLAG.value == 'No') {
                        if (SYS_BeFloat(document.MAINFORM.CFNC_N_UNPAID_PRIN.value) < SYS_FloatSub(SYS_BeFloat(document.MAINFORM.CPYT_N_PAY_AMT.value),SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_INT.value))) {
                            alert("Repay Amount exceeds Outstanding balance");
                            document.MAINFORM.CPYT_N_PAY_AMT.value = '0';
                        } else {
                            //document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value));
            var CFNC_C_INT_PAYABLE = document.MAINFORM.CFNC_C_INT_PAYABLE.value;
        if (CFNC_C_INT_PAYABLE == 'Up Front') {
                document.MAINFORM.CFNC_N_PAY_AMT.value = document.MAINFORM.CFNC_N_UNPAID_PRIN.value;
                document.MAINFORM.CFNC_N_PAY_PRIN.value = document.MAINFORM.CFNC_N_UNPAID_PRIN.value;
            document.MAINFORM.CFNC_N_PAY_INT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, 0);

        } else if (CFNC_C_INT_PAYABLE == 'In Arrears') {
                document.MAINFORM.CFNC_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, SYS_FloatAdd(SYS_BeFloat(document.MAINFORM.CFNC_N_UNPAID_PRIN.value), SYS_BeFloat(document.MAINFORM.CFNC_N_UNPAID_INT.value)));
                document.MAINFORM.CFNC_N_PAY_PRIN.value = document.MAINFORM.CFNC_N_UNPAID_PRIN.value;
                document.MAINFORM.CFNC_N_PAY_INT.value = document.MAINFORM.CFNC_N_UNPAID_INT.value;
        }
                        }
                    } else {
                        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, 0);
                    }
                } else {
                    if (document.MAINFORM.RISK_FLAG.value == 'Yes') {
                        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, SYS_BeFloat(document.MAINFORM.PART_RISK_AMT.value));
                    } else {
                        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, 0);
                    }
                }
            }
            if (SYS_ORG_FUNCTION_NAME == "ProcessParticipant") {
                if (document.MAINFORM.PART_TYPE.value == 'Funded') {
                    document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, document.MAINFORM.CFNC_N_AMT_LCCCY.value);
                }
            }
            if (SYS_ORG_FUNCTION_NAME == "RepayGrantor") {
                if (document.MAINFORM.FUND_FLAG.value == "Funded") {
                    if (document.MAINFORM.RISK_FLAG.value == 'No') {
                        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value);
                    } else {
                        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, 0);
                    }
                } else {
                    if (document.MAINFORM.RISK_FLAG.value == 'Yes') {
                        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, document.MAINFORM.SYND_PART_AMT.value);
                    } else {
                        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, 0);
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function PaymentDealer_CancelCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function CheckTotalDebitandCredit() {
    try {
        var TotalCredit; // Utility Auto Fix Comments
        var TotalDebit; // Utility Auto Fix Comments
        var arrCredit; // Utility Auto Fix Comments
        var arrDebit; // Utility Auto Fix Comments
        var credit; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        arrDebit = SYS_GetObjByDoName('PaymentDebit');
        TotalDebit = 0;
        len = arrDebit.length;
        debit = null;
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
            debit = arrDebit[i];
            TotalDebit += SYS_BeFloat(debit.getDoValueByName("CPYT_DR_AMT_TXCCY"));
        }
        arrCredit = SYS_GetObjByDoName('PaymentCredit');
        TotalCredit = 0;
        len = arrCredit.length;
        credit = null;
        for (i = 0; i < len; i++) {
            credit = arrCredit[i];
            TotalCredit += SYS_BeFloat(credit.getDoValueByName("CPYT_CR_AMT_TXCCY"));
        }
        if (TotalCredit > TotalDebit) {
            alert("Please note that the total credit amount is more than debit total amt!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function Check_CPYT_C_PAY_PER() {
    try {
        if (SYS_BeFloat(document.MAINFORM.CPYT_C_PAY_PER.value) > 100) {
            document.MAINFORM.CPYT_C_PAY_PER.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function Check_CPYT_I_TENOR_DAYS() {
    try {
        if (SYS_BeInt(document.MAINFORM.CPYT_I_TENOR_DAYS.value) > 9999) {
            document.MAINFORM.CPYT_I_TENOR_DAYS.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function PaymentDealer_ConfirmBusinessCall() {
    try {
        DealerSetUnpaidFlag();
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function PaymentDealer_ConfirmBusinessCheck() {
    try {
        if ('GTEE' == SYS_MODULE_NAME) {
            CheckTotalDebitandCredit();
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function PaymentDealer_ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function DealerSetUnpaidFlag() {
    try {
        var ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var ADDIT_PRES_BK_CCY; // Utility Auto Fix Comments
        var PRES_CCY; // Utility Auto Fix Comments
        var STL_BAL; // Utility Auto Fix Comments
        //eddit by zoe 20090114
        document.MAINFORM.CPYT_C_SETTLE_END_FLAG.value = 'N'; //add by Jeff
        if (SYS_MODULE_NAME == "EPLC") {
            STL_BAL = document.MAINFORM.STL_BAL.value;
            PRES_CCY = document.MAINFORM.PRES_CCY.value;
            ADDIT_PRES_BK_CCY = document.MAINFORM.ADDIT_PRES_BK_CCY.value;
            ADDIT_PRES_BK_AMTS = document.MAINFORM.ADDIT_PRES_BK_AMTS.value;
            //added by zoe 20090710
            if (SYS_ORG_FUNCTION_SHORT_NAME == "Discount") {
                document.MAINFORM.CPYT_C_SETTLE_END_FLAG.value = 'N';
            } else if (STL_BAL > 0 || (PRES_CCY != ADDIT_PRES_BK_CCY && ADDIT_PRES_BK_AMTS > 0)) {
                document.MAINFORM.CPYT_C_SETTLE_END_FLAG.value = 'N';

            } else {
                document.MAINFORM.CPYT_C_SETTLE_END_FLAG.value = 'Y';

            }

        }
        if (SYS_MODULE_NAME == "IPLC") {
            document.MAINFORM.CPYT_C_SETTLE_END_FLAG.value = "Y";
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function Get_CPYT_PAY_CCY() {
    try {
        if (SYS_MODULE_NAME == "EPLC" || SYS_MODULE_NAME == 'REIM') {
            nCCY = document.MAINFORM.LC_CCY.value;
        } else if (SYS_MODULE_NAME == "IPLC") {
            nCCY = document.MAINFORM.PRES_CCY.value;
        } else if (SYS_MODULE_NAME == "GTEE" || SYS_MODULE_NAME == "IWGT") {
            nCCY = document.MAINFORM.GTEE_CCY.value;
        } else if (SYS_MODULE_NAME == "EXCO" || SYS_MODULE_NAME == "IMCO") {
            nCCY = document.MAINFORM.COLL_CCY.value;
        } else if (SYS_MODULE_NAME == "SYND") {
            nCCY = document.MAINFORM.PCPT_CCY.value;
        } else if (SYS_MODULE_NAME == "RPFM") {
            if (SYS_ORG_FUNCTION_NAME == "ProcessGrantor") {
                nCCY = document.MAINFORM.SYND_PART_CCY.value;
            }
            if (SYS_ORG_FUNCTION_NAME == "ProcessParticipant" || SYS_ORG_FUNCTION_NAME == "SettleParticipant") {
                nCCY = document.MAINFORM.RECV_CCY.value;
            }
            if (SYS_ORG_FUNCTION_NAME == "RepayGrantor") {
                if (document.MAINFORM.RISK_FLAG.value == 'No') {
                    if (document.MAINFORM.FUND_FLAG.value == "Funded") {
                        nCCY = document.MAINFORM.CFNC_C_CCY.value;
                    }
                }
            }
        }


        document.MAINFORM.CPYT_PAY_CCY.value = nCCY;
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function PaymentDealer_InitValues() {
    try {
        Get_CPYT_PAY_CCY();
        SET_CPYT_C_SDA_FLAG();
        CPYT_C_SDA_FLAG();
        Cal_CPYT_N_PAY_AMT();

        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function PaymentDealer_PostconditionOnInit() {
    try {
        SET_CPYT_C_SDA_FLAG();
        document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(document.MAINFORM.CPYT_PAY_CCY.value, document.MAINFORM.CPYT_N_PAY_AMT.value);
        document.MAINFORM.CPYT_C_OUTPUT_FLAG.value = "Y";
        ProtectAllTheField();
        if (SYS_MODULE_NAME == "EPLC") {
            SYS_changeClassName('CPYT_DR_BAL_TXCCY', 'O');
            SYS_changeClassName('CPYT_CR_BAL_TXCCY', 'O');
        }
        return true;

    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function PaymentDealer_PreconditionOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function ProtectAllTheField() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.CPYT_C_SDA_FLAG, "P");
        SYT_ChangeFldClass(document.MAINFORM.CPYT_C_PAY_PER, "P");
        SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_CCY, "P");
        SYT_ChangeFldClass(document.MAINFORM.CPYT_N_PAY_AMT, "P");

        SYT_ChangeFldClass(document.MAINFORM.CPYT_I_TENOR_DAYS, "P");
        SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_TYPE, "P");
        SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_DESC, "P");

        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function SET_CPYT_C_SDA_FLAG() {
    try {
        var DELVR_DOC_AGST; // Utility Auto Fix Comments
        var TENOR_EVENT; // Utility Auto Fix Comments
        var TENOR_TYPE; // Utility Auto Fix Comments
        if ("EXCO" == SYS_MODULE_NAME || "IMCO" == SYS_MODULE_NAME) {
            DELVR_DOC_AGST = document.MAINFORM.DELVR_DOC_AGST.value;
            document.MAINFORM.CPYT_N_PAY_AMT.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
            if ("D/P" == DELVR_DOC_AGST) {
                document.MAINFORM.CPYT_C_SDA_FLAG.value = "Sight";
            }
            if ("D/A" == DELVR_DOC_AGST || "D/A and Aval" == DELVR_DOC_AGST) {
                document.MAINFORM.CPYT_C_SDA_FLAG.value = "Acceptance";
                document.MAINFORM.CPYT_D_TENOR_START_DATE.value = document.MAINFORM.TENOR_START_DT.value;
                document.MAINFORM.CPYT_I_TENOR_DAYS.value = document.MAINFORM.TENOR_DAYS.value;
                document.MAINFORM.CPYT_D_MAT_DATE.value = document.MAINFORM.DUE_DT.value;
                if ("EXCO" == SYS_MODULE_NAME) {
                    if ("After sight" == TENOR_TYPE) {
                        TENOR_TYPE = document.MAINFORM.TENOR_TYPE.value;
                        document.MAINFORM.CPYT_C_TENOR_TYPE.value = "DAYS AFTER SIGHT";
                    } else {
                        document.MAINFORM.CPYT_C_TENOR_TYPE.value = "OTHER";
                        document.MAINFORM.CPYT_C_TENOR_DESC.value = document.MAINFORM.TENOR_TYPE.value;
                    }
                }
                if ("IMCO" == SYS_MODULE_NAME) {
                    TENOR_EVENT = document.MAINFORM.TENOR_EVENT.value;
                    if ("ST" == TENOR_EVENT) {
                        document.MAINFORM.CPYT_C_TENOR_TYPE.value = "DAYS AFTER SIGHT";
                    }
                    if ("XXX" == TENOR_EVENT) {
                        document.MAINFORM.CPYT_C_TENOR_TYPE.value = "FIXED MATURITY";
                        document.MAINFORM.CPYT_C_TENOR_DESC.value = document.MAINFORM.TENOR_EVENT.value;
                    } else {
                        document.MAINFORM.CPYT_C_TENOR_TYPE.value = "OTHER";
                        document.MAINFORM.CPYT_C_TENOR_DESC.value = document.MAINFORM.TENOR_EVENT.value;
                    }
                }
            }
        }
        // Add by Miya start
        if (SYS_ORG_FUNCTION_NAME == "FinanceEstablish" || SYS_ORG_FUNCTION_NAME == "FinanceAmendment") {
            DELVR_DOC_AGST = document.MAINFORM.DELVR_DOC_AGST.value;
            document.MAINFORM.CPYT_D_TENOR_START_DATE.value = document.MAINFORM.CFNC_D_DT.value;
            document.MAINFORM.CPYT_PAY_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
            document.MAINFORM.CPYT_N_PAY_AMT.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            document.MAINFORM.CPYT_I_TENOR_DAYS.value = document.MAINFORM.TENOR_DAYS.value;
            document.MAINFORM.CPYT_D_MAT_DATE.value = document.MAINFORM.CFNC_D_MAST_MATU_DT.value;
            if ("D/P" == DELVR_DOC_AGST) {
                document.MAINFORM.CPYT_C_SDA_FLAG.value = "Sight";
            }
            if ("D/A" == DELVR_DOC_AGST || "D/A and Aval" == DELVR_DOC_AGST) {
                document.MAINFORM.CPYT_C_SDA_FLAG.value = "Acceptance";
            }
        } else if (SYS_ORG_FUNCTION_NAME == "FinanceRepay") {
            document.MAINFORM.CPYT_PAY_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
            document.MAINFORM.CPYT_I_TENOR_DAYS.value = document.MAINFORM.TENOR_DAYS.value;
            document.MAINFORM.CPYT_D_TENOR_START_DATE.value = document.MAINFORM.CFNC_D_DT.value;
            document.MAINFORM.CPYT_D_MAT_DATE.value = document.MAINFORM.CFNC_D_DUE_DT.value;
        }
        // Add by Miya end
        if ("RPFM" == SYS_MODULE_NAME) {
            if (SYS_ORG_FUNCTION_NAME == "ProcessGrantor") {
                document.MAINFORM.CPYT_D_TENOR_START_DATE.value = document.MAINFORM.SYND_PART_START_DT.value;
                document.MAINFORM.CPYT_D_MAT_DATE.value = document.MAINFORM.SYND_PART_EXP_DT.value;
                SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_TYPE, "P");
                SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_DESC, "P");
            }
            if (SYS_ORG_FUNCTION_NAME == "ProcessParticipant") {
                document.MAINFORM.CPYT_D_TENOR_START_DATE.value = document.MAINFORM.PART_START_DT.value;
                document.MAINFORM.CPYT_D_MAT_DATE.value = document.MAINFORM.PART_MAT_DT.value;
                SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_TYPE, "P");
                SYT_ChangeFldClass(document.MAINFORM.CPYT_C_TENOR_DESC, "P");
            }
        }
        if ("SYND" == SYS_MODULE_NAME) {
            if (SYS_ORG_FUNCTION_NAME == "SyndClaim_LG") {
                document.MAINFORM.CPYT_D_TENOR_START_DATE.value = document.MAINFORM.PCPT_START_DT.value;
            } else if (SYS_ORG_FUNCTION_NAME == "SYND_NotePartChg") {
                document.MAINFORM.CPYT_D_TENOR_START_DATE.value = document.MAINFORM.SYND_PART_START_DT.value;
            }
        }
        if ("REIM" == SYS_MODULE_NAME) {
            document.MAINFORM.CPYT_D_TENOR_START_DATE.value = document.MAINFORM.ISSUE_DT.value;
        }
        if ("IWGT" == SYS_MODULE_NAME) {
            document.MAINFORM.CPYT_D_TENOR_START_DATE.value = document.MAINFORM.INWARD_RCV_DT.value;
        }
        if ("SBLC" == SYS_MODULE_NAME) {
            document.MAINFORM.CPYT_D_TENOR_START_DATE.value = document.MAINFORM.DRAWDN_DATE.value;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function setDebitValuetoFinance() {
    try {
        if (SYS_ORG_FUNCTION_NAME == "EPLC_Discount" && SYS_FUNCTION_TYPE != "EC") {
            document.MAINFORM.CFNC_C_CCY.value = document.MAINFORM.CPYT_PAY_CCY.value;
            document.MAINFORM.CFNC_D_MAST_MATU_DT.value = document.MAINFORM.CPYT_D_MAT_DATE.value;
            document.MAINFORM.CFNC_D_DUE_DT.value = document.MAINFORM.CPYT_D_MAT_DATE.value;
            document.MAINFORM.STL_AMT.value = document.MAINFORM.CPYT_N_PAY_AMT.value;
            document.MAINFORM.STL_BAL.value = 0.00;
            EEHtml.fireEvent(document.MAINFORM.STL_AMT, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.STL_BAL, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.CFNC_D_DUE_DT, 'onchange');
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function PaymentDealer_initFieldEvent() {
    try {
        document.MAINFORM.CPYT_C_PAY_PER.onchange = CPYT_C_PAY_PER_onchange;
        document.MAINFORM.CPYT_C_SDA_FLAG.onchange = CPYT_C_SDA_FLAG_onchange;
        document.MAINFORM.CPYT_C_TENOR_TYPE.onchange = CPYT_C_TENOR_TYPE_onchange;
        document.MAINFORM.CPYT_D_TENOR_START_DATE.onchange = CPYT_D_TENOR_START_DATE_onchange;
        document.MAINFORM.CPYT_I_TENOR_DAYS.onchange = CPYT_I_TENOR_DAYS_onchange;
        document.MAINFORM.CPYT_N_PAY_AMT.onchange = CPYT_N_PAY_AMT_onchange;
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function CPYT_C_PAY_PER_onchange() {
    try {
        Check_CPYT_C_PAY_PER();
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function CPYT_C_SDA_FLAG_onchange() {
    try {
        CPYT_C_SDA_FLAG();
        CPYT_D_TENOR_START_DATE();
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function CPYT_C_TENOR_TYPE_onchange() {
    try {
        CPYT_C_TENOR_TYPE();
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function CPYT_D_TENOR_START_DATE_onchange() {
    try {
        Cal_CPYT_D_MAT_DATE();
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function CPYT_I_TENOR_DAYS_onchange() {
    try {
        Cal_CPYT_D_MAT_DATE();
        Check_CPYT_I_TENOR_DAYS();
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}

function CPYT_N_PAY_AMT_onchange() {
    try {
        CPYT_N_PAY_AMTonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentDealer.js", e);
    }
}