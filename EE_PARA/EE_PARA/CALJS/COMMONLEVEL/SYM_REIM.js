function SYM_REIM_CAL_ISSUE_BK_ID() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID.value == '') {
            document.MAINFORM.ISSUE_BK_NM.value = '';
            document.MAINFORM.ISSUE_BK_ADD1.value = '';
            document.MAINFORM.ISSUE_BK_ADD2.value = '';
            document.MAINFORM.ISSUE_BK_ADD3.value = '';
            document.MAINFORM.ISSUE_BK_SW_ADD.value = '';
            SYM_IWGT_CAL_ISSUE_BK_ID_back();
        } else {
            SYS_GetCUBK('ISSUE_BK_ID', 'ISSUE_BK_ID', 'SYM_IWGT_CAL_ISSUE_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_CHK_AVAL_BK_SW_TAG() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_ADD.value != '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.AVAL_WT_BK_NM.value != '' || document.MAINFORM.AVAL_WT_BK_ADD1.value != '' || document.MAINFORM.AVAL_WT_BK_ADD2.value != '' || document.MAINFORM.AVAL_WT_BK_ADD3.value != '') && document.MAINFORM.AVAL_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.AVAL_WT_BK_NM.value == '' && document.MAINFORM.AVAL_WT_BK_ADD1.value == '' && document.MAINFORM.AVAL_WT_BK_ADD2.value == '' && document.MAINFORM.AVAL_WT_BK_ADD3.value == '' && document.MAINFORM.AVAL_WT_BK_SW_ADD.value == '') {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_CHK_ISSUE_BK_SW_TAG() {
    try {
        if (document.MAINFORM.ISSUE_BK_SW_ADD.value != '') {
            document.MAINFORM.ISSUE_BK_SW_TAG.value = 'A';
        } else {
            if (document.MAINFORM.ISSUE_BK_NM.value == "") {
                if (document.MAINFORM.ISSUE_BK_ADD1.value != "" || document.MAINFORM.ISSUE_BK_ADD2.value != "" || document.MAINFORM.ISSUE_BK_ADD3.value != "") {
                    document.MAINFORM.ISSUE_BK_SW_TAG.value = "D";
                } else {
                    document.MAINFORM.ISSUE_BK_SW_TAG.value = "";
                }
            } else {
                document.MAINFORM.ISSUE_BK_SW_TAG.value = 'D';
            }
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_CONF_INSTR_onchange() {
    try {
        if (document.MAINFORM.CONF_INSTR.value == "Confirmed") {
            document.MAINFORM.REIM_CONF_BAL.value = document.MAINFORM.REIM_INST_BAL.value;
            document.MAINFORM.NEW_REIM_CONF_BAL.value = document.MAINFORM.NEW_REIM_INST_BAL.value;
        } else {
            document.MAINFORM.REIM_CONF_BAL.value = 0;
            document.MAINFORM.NEW_REIM_CONF_BAL.value = 0;
        }

        document.MAINFORM.REIM_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.REIM_CONF_BAL.value);
        document.MAINFORM.NEW_REIM_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.NEW_REIM_CONF_BAL.value);
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_CASH_COV_AC_NO() {
    try {
        var CASH_COV_HELD; // Utility Auto Fix Comments
        CASH_COV_HELD = document.MAINFORM.CASH_COV_HELD.value;
        if (CASH_COV_HELD == 'Yes') {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AC_NO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AC_NO_BTN, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AC_NO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_AC_NO_BTN, 'H');
            document.MAINFORM.CASH_COV_AC_NO.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_CASH_COV_AMT() {
    try {
        if (document.MAINFORM.CASH_COV_HELD.value != "Yes") {
            document.MAINFORM.CASH_COV_AMT.value = 0;
        } else if (SYS_FUNCTION_NAME = "ReimbursementAmendment") {
            document.MAINFORM.CASH_COV_CCY.value = document.MAINFORM.LC_CCY.value;
            document.MAINFORM.CASH_COV_AMT.value = SYS_BeFloat(document.MAINFORM.NEW_REIM_INST_BAL.value) * SYS_BeInt(document.MAINFORM.CASH_COV_PCT.value) / 100;
            document.MAINFORM.CASH_COV_AMT.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, document.MAINFORM.CASH_COV_AMT.value);
        } else {
            document.MAINFORM.CASH_COV_CCY.value = document.MAINFORM.LC_CCY.value;
            document.MAINFORM.CASH_COV_AMT.value = SYS_BeFloat(document.MAINFORM.REIM_INST_BAL.value) * SYS_BeInt(document.MAINFORM.CASH_COV_PCT.value) / 100;
            document.MAINFORM.CASH_COV_AMT.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, document.MAINFORM.CASH_COV_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_CASH_COV_AMT_1() {
    try {
        var CASH_COV_PCT; // Utility Auto Fix Comments
        var NEG_TOL; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        var REIM_INST_AMT; // Utility Auto Fix Comments
        REIM_INST_AMT = SYS_BeFloat(document.MAINFORM.REIM_INST_AMT.value);
        POS_TOL = SYS_BeFloat(document.MAINFORM.POS_TOL.value);
        CASH_COV_PCT = SYS_BeFloat(document.MAINFORM.CASH_COV_PCT.value);
        if (document.MAINFORM.CASH_COV_HELD.value == "Yes") {
            if (CASH_COV_PCT >= 1 || CASH_COV_PCT <= 100) {
                if (REIM_INST_AMT != "" && POS_TOL != "") {
                    document.MAINFORM.CASH_COV_CCY.value = document.MAINFORM.LC_CCY.value;
                    document.MAINFORM.CASH_COV_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, REIM_INST_AMT * (1 + POS_TOL / 100) * (CASH_COV_PCT / 100));
                } else if (REIM_INST_AMT != "" && POS_TOL == "") {
                    document.MAINFORM.CASH_COV_CCY.value = document.MAINFORM.LC_CCY.value;
                    document.MAINFORM.CASH_COV_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, REIM_INST_AMT * (CASH_COV_PCT / 100));
                }
            } else {
                SYS_CheckError(document.MAINFORM.CASH_COV_PCT, 'Percentage must be from 1 to 100.'); // Utility Auto Fix Comments
                document.MAINFORM.CASH_COV_PCT.value = 0;
            }
        } else {
            document.MAINFORM.CASH_COV_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_CASH_COV_AMT_2() {
    try {
        var CASH_COV_PCT; // Utility Auto Fix Comments
        var NEG_TOL; // Utility Auto Fix Comments
        var NEW_POS_TOL; // Utility Auto Fix Comments
        var NEW_REIM_CONF_BAL; // Utility Auto Fix Comments
        NEW_REIM_CONF_BAL = SYS_BeFloat(document.MAINFORM.NEW_REIM_CONF_BAL.value);
        NEW_POS_TOL = SYS_BeFloat(document.MAINFORM.NEW_POS_TOL.value);
        NEG_TOL = SYS_BeFloat(document.MAINFORM.NEG_TOL.value);
        CASH_COV_PCT = SYS_BeFloat(document.MAINFORM.CASH_COV_PCT.value);
        if (CASH_COV_PCT >= 1 || CASH_COV_PCT <= 100) {
            if (NEW_REIM_CONF_BAL != "" && NEW_POS_TOL != "" && NEG_TOL == "") {
                document.MAINFORM.CASH_COV_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_REIM_CONF_BAL * (1 + NEW_POS_TOL / 100) * (CASH_COV_PCT / 100));
            } else if (NEW_REIM_CONF_BAL != "" && NEW_POS_TOL == "" && NEG_TOL == "") {
                document.MAINFORM.CASH_COV_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_REIM_CONF_BAL * (CASH_COV_PCT / 100));
            }
        } else {
            SYS_CheckError(document.MAINFORM.CASH_COV_PCT, 'Percentage must be from 1 to 100.'); // Utility Auto Fix Comments
            document.MAINFORM.CASH_COV_PCT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_CASH_COV_BAL() {
    try {
        if (document.MAINFORM.CASH_COV_HELD.value == "Yes") {
            document.MAINFORM.CASH_COV_BAL.value = SYT_AmtFormat(document.MAINFORM.CASH_COV_CCY.value, document.MAINFORM.CASH_COV_AMT.value);
        } else {
            document.MAINFORM.CASH_COV_BAL.value = 0;
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_CASH_COV_CCY() {
    try {
        document.MAINFORM.CASH_COV_CCY.value = document.MAINFORM.LC_CCY.value;
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_CASH_COV_DR_ACNO() {
    try {
        if (document.MAINFORM.CASH_COV_HELD.value == "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_DR_ACNO, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_DR_ACNO_BTN, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_DR_ACNO, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_DR_ACNO_BTN, 'H');
            document.MAINFORM.CASH_COV_DR_ACNO.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_CASH_COV_HELD() {
    try {
        SYM_REIM_Cal_CASH_COV_AMT_1();
        SYM_REIM_Cal_CASH_COV_BAL();
        SYM_REIM_Cal_CASH_COV_DR_ACNO();
        SYM_REIM_Cal_CASH_COV_PCT();
        SYM_REIM_Cal_CASH_COV_AC_NO();
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_CASH_COV_PCT() {
    try {
        if (document.MAINFORM.CASH_COV_HELD.value == "Yes") {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_PCT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CASH_COV_PCT, 'P');
            document.MAINFORM.CASH_COV_PCT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_CHG_MINUS() {
    try {
        var CHG_MINUS; // Utility Auto Fix Comments
        var CHG_PLUS; // Utility Auto Fix Comments
        CHG_PLUS = SYS_BeInt(document.MAINFORM.CHG_PLUS.value);
        CHG_MINUS = SYS_BeFloat(document.MAINFORM.CHG_MINUS.value);
        if (CHG_PLUS != 0) {
            document.MAINFORM.CHG_MINUS.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.CHG_MINUS, 'P');
        } else if (CHG_PLUS == 0 && CHG_MINUS == 0) {
            SYT_ChangeFldClass(document.MAINFORM.CHG_MINUS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CHG_PLUS, 'O');
        }
        SYM_REIM_NEW_NET_CLAIM_ISSBK();
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_CHG_PLUS() {
    try {
        var CHG_MINUS; // Utility Auto Fix Comments
        var CHG_PLUS; // Utility Auto Fix Comments
        CHG_PLUS = SYS_BeInt(document.MAINFORM.CHG_PLUS.value);
        CHG_MINUS = SYS_BeInt(document.MAINFORM.CHG_MINUS.value);
        if (CHG_MINUS != 0) {
            document.MAINFORM.CHG_PLUS.value = 0;
            SYT_ChangeFldClass(document.MAINFORM.CHG_PLUS, 'P');
        } else if (CHG_PLUS == 0 && CHG_MINUS == 0) {
            SYT_ChangeFldClass(document.MAINFORM.CHG_PLUS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CHG_MINUS, 'O');
        }
        SYM_REIM_NEW_NET_CLAIM_ISSBK();
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_Chg_For_Issue() {
    try {
        var arr; // Utility Auto Fix Comments
        if (document.MAINFORM.CURRNT_STATUS.value != 'Claim') {

            if (SYS_ORG_FUNCTION_SHORT_NAME == 'ProcessMT740' || SYS_ORG_FUNCTION_SHORT_NAME == 'RegInstruction') {
                arr = ['ISS_COMM', 'CONF_COMM', 'SWIFT_CHG', 'POST_CHG', 'OTHER_CHG'];
            } else if (SYS_ORG_FUNCTION_SHORT_NAME == 'ProcessMT747' || SYS_ORG_FUNCTION_SHORT_NAME == 'ReimAmend') {
                arr = ['AMEND_COMM', 'ISS_COMM', 'CONF_COMM', 'SWIFT_CHG', 'POST_CHG', 'OTHER_CHG']; // Utility Auto Fix Comments
            } else {
                arr = ['ISS_COMM', 'AMEND_COMM', 'CONF_COMM', 'SWIFT_CHG', 'POST_CHG', 'OTHER_CHG']; // Utility Auto Fix Comments
            }
            document.MAINFORM.ISSUE_BK_ID.value = document.MAINFORM.ISSUE_BK_SW_ADD.value + '_BIC';

            SYM_REIM_Chg_Calculate();
            document.MAINFORM.ISSUE_BK_ID.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_ISSUE_BK_CNTY() {
    try {
        var ISSUE_BK_SW_ADD; // Utility Auto Fix Comments
        ISSUE_BK_SW_ADD = document.MAINFORM.ISSUE_BK_SW_ADD.value;
        document.MAINFORM.ISSUE_BK_CNTY.value = ISSUE_BK_SW_ADD.trim().substr(4, 2);
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_REIM_BK_CHG_DESC() {
    try {
        if (document.MAINFORM.REIM_BK_CHG_DESC.value == 'OUR') {
            CHG_setAllChargeFor('L');
        } else {
            CHG_setAllChargeFor('F');
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Cal_X730_BEACK_DT_30() {
    try {
        document.MAINFORM.X730_BEACK_DT_30.value = document.MAINFORM.ISSUE_DT.value;
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Chg_Calculate(arr) {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE != 'RE' && SYS_FUNCTION_TYPE != 'IQ' && SYS_FUNCTION_TYPE != 'EC') {
            amt = document.MAINFORM.REIM_INST_AMT.value;
            ccy = document.MAINFORM.LC_CCY.value;
            Chg.calculate(arr, ccy, amt, '');
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Chg_Screen_CLM() {
    try {
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'ProcessMT742') {
            return;
        }
        if (SYS_ORG_FUNCTION_SHORT_NAME == 'SettleClaim' || typeof document.MAINFORM.CLM_BK_ID == 'object') {
            Chg.Screen.mapForeignCust(document.MAINFORM.CLM_BK_ID.name, document.MAINFORM.CLM_BK_NM.name);
        } else {
            Chg.Screen.mapForeignCust(document.MAINFORM.TEMP_CLM_BK_ID.name, document.MAINFORM.TEMP_CLM_BK_NM.name);
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Chg_Screen_ISSUE() {
    try {
        Chg.Screen.mapLocalCust(document.MAINFORM.ISSUE_BK_ID.name, document.MAINFORM.ISSUE_BK_NM.name);
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Chk_CASH_COV_PCT() {
    try {
        var CASH_COV_PCT; // Utility Auto Fix Comments
        CASH_COV_PCT = SYS_BeFloat(document.MAINFORM.CASH_COV_PCT.value);
        if (document.MAINFORM.CASH_COV_HELD.value == "Yes") {
            if (CASH_COV_PCT < 1 || CASH_COV_PCT > 100) {
                SYS_CheckError(document.MAINFORM.CASH_COV_PCT, 'Percentage must be from 1 to 100!!');
                document.MAINFORM.CASH_COV_PCT.value = 0;
            }
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Get_X730_ADV_BKID_B2() {
    try {
        if (document.MAINFORM.ISSUE_BK_ID.value != '' && typeof document.MAINFORM.X730_ADV_BKID_B2 == "object") {

            document.MAINFORM.X730_ADV_BKID_B2.value = document.MAINFORM.ISSUE_BK_ID.value;
            document.MAINFORM.X730_ADV_BKNM_B2.value = document.MAINFORM.ISSUE_BK_NM.value;
            document.MAINFORM.X730_ADV_BKADD1_B2.value = document.MAINFORM.ISSUE_BK_ADD1.value;
            document.MAINFORM.X730_ADV_BKADD2_B2.value = document.MAINFORM.ISSUE_BK_ADD2.value;
            document.MAINFORM.X730_ADV_BKADD3_B2.value = document.MAINFORM.ISSUE_BK_ADD3.value;
            document.MAINFORM.X730_ADV_BKSW_B2.value = document.MAINFORM.ISSUE_BK_SW_ADD.value;

        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Get_X730_DOC_CRE_NO_20() {
    try {
        document.MAINFORM.X730_DOC_CRE_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Get_X730_RCVER_NO_21() {
    try {
        if (document.MAINFORM.LC_NO.value != '') {
            document.MAINFORM.X730_RCVER_NO_21.value = document.MAINFORM.LC_NO.value;
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_NEW_NET_CLAIM_ISSBK() {
    try {
        var CHG_MINUS; // Utility Auto Fix Comments
        var CHG_PLUS; // Utility Auto Fix Comments
        CHG_PLUS = SYS_BeFloat(document.MAINFORM.CHG_PLUS.value);
        CHG_MINUS = SYS_BeFloat(document.MAINFORM.CHG_MINUS.value);
        var NET_CLAIM_ISSBK = SYS_BeFloat(document.MAINFORM.NET_CLAIM_ISSBK.value);
        var TEMP_NET_CLAIM_ISSBK = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        var CLM_TRX_CCY_AMT = SYS_BeFloat(document.MAINFORM.CLM_TRX_CCY_AMT.value);
        if (CHG_PLUS < 0) {
            alert("Amount field should not be negative!");
            document.MAINFORM.CHG_PLUS.value = '';
        } else if (CHG_PLUS != 0) {
            SYT_ChangeFldClass(document.MAINFORM.CHG_MINUS, 'P');
            NET_CLAIM_ISSBK = Math.max(0, CLM_TRX_CCY_AMT + CHG_PLUS);
            document.MAINFORM.NET_CLAIM_ISSBK.value = SYT_AmtFormat(document.MAINFORM.LOCAL_CCY.value, NET_CLAIM_ISSBK);
        } else if (CHG_MINUS < 0) {
            document.MAINFORM.CHG_MINUS.value = '';
        } else if (CHG_MINUS != 0) {
            SYT_ChangeFldClass(document.MAINFORM.CHG_PLUS, 'P');
            NET_CLAIM_ISSBK = Math.max(0, CLM_TRX_CCY_AMT - CHG_MINUS);
            document.MAINFORM.NET_CLAIM_ISSBK.value = SYT_AmtFormat(document.MAINFORM.LOCAL_CCY.value, NET_CLAIM_ISSBK);
        } else {
            document.MAINFORM.NET_CLAIM_ISSBK.value = SYT_AmtFormat(document.MAINFORM.LOCAL_CCY.value, TEMP_NET_CLAIM_ISSBK);
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_Set_Risk_Party_Info() {
    try {
        /*
                        //JACK 0921 REIM
                        if(document.MAINFORM.CONF_INSTR.value == 'Confirmed')
                        {
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ID,'O');
                        SYT_ChangeFldClass(document.MAINFORM.RISK_ID_BTN,'O');
                        SYT_ChangeFldClass(document.MAINFORM.R_CUST_BK,'O');
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_NM,'O');
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD1,'O');
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD2,'O');
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD3,'O');
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_CNTY,'O');
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_CNTY_NM,'O');
                        SYT_ChangeFldClass(document.MAINFORM.R_LIMIT_CHK_BTN1,'O');
                           if(document.MAINFORM.ISSUE_BK_ID.value != ''){
                              document.MAINFORM.R_PARTY_ID_BTN.value = 'Bank';
                              document.MAINFORM.R_PARTY_ID.value = document.MAINFORM.ISSUE_BK_ID.value;
                              document.MAINFORM.R_CUST_BK.value = 'Bank';
                              document.MAINFORM.R_PARTY_NM.value = document.MAINFORM.ISSUE_BK_NM.value;
                              document.MAINFORM.R_PARTY_ADD1.value = document.MAINFORM.ISSUE_BK_ADD1.value;
                              document.MAINFORM.R_PARTY_ADD2.value = document.MAINFORM.ISSUE_BK_ADD2.value;
                              document.MAINFORM.R_PARTY_ADD3.value = document.MAINFORM.ISSUE_BK_ADD3.value;
                              document.MAINFORM.R_PARTY_CNTY.value = document.MAINFORM.ISSUE_BK_CNTY.value;
                              Cal_R_PARTY_CNTY();
                              }

                        }else{
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ID,'P');
                        SYT_ChangeFldClass(document.MAINFORM.RISK_ID_BTN,'P');
                        SYT_ChangeFldClass(document.MAINFORM.R_CUST_BK,'P');
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_NM,'P');
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD1,'P');
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD2,'P');
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_ADD3,'P');
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_CNTY,'P');
                        SYT_ChangeFldClass(document.MAINFORM.R_PARTY_CNTY_NM,'O');
                        SYT_ChangeFldClass(document.MAINFORM.R_LIMIT_CHK_BTN1,'P');
                        document.MAINFORM.R_PARTY_ID.value = '';
                        document.MAINFORM.R_CUST_BK.value = '';
                        document.MAINFORM.R_PARTY_NM.value = '';
                        document.MAINFORM.R_PARTY_ADD1.value = '';
                        document.MAINFORM.R_PARTY_ADD2.value = '';
                        document.MAINFORM.R_PARTY_ADD3.value = '';
                        document.MAINFORM.R_PARTY_CNTY.value = '';
                        document.MAINFORM.R_PARTY_CNTY_NM.value = '';
                        }
                        */
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_SpecialCharacters_onchange(FieldValues) {
    try {
        var regex = /^[0-9]*$/;
        var isValid = regex.test(FieldValues);
        if (!isValid) {
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_SpecialCharacters_onchange_1(FieldValue) {
    try {
        var regex = /^[A-Za-z]+$/;
        var isValid = regex.test(FieldValue);
        if (!isValid) {
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}

function SYM_REIM_SpecialCharacters_onchange_2(FieldValuese) {
    try {
        var regex = /^[A-Za-z0-9 ]+$/;
        var isValid = regex.test(FieldValuese);
        if (!isValid) {
            return false;
        }
    } catch (e) {
        DisExcpt("SYM_REIM.js", e);
    }
}