function SYM_EPLC_ADV_DEFAULT_VALUE() {
    try {
        document.MAINFORM.OUR_ROLE.value = "Advising Bank";
        document.MAINFORM.REV_LC.value = "NO";
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_ADV_DEFAULT_VALUE", e);
    }
}

function SYM_EPLC_ADV_SENDER_REF(sMESG_TYPE) {
    try {
        if (sMESG_TYPE == "MT700") {
            document.MAINFORM.SENDER_REF.value = document.MAINFORM.LC_NO.value;
            SYT_ChangeFldClass(document.MAINFORM.SENDER_REF, 'P');
        } else {

            SYT_ChangeFldClass(document.MAINFORM.SENDER_REF, 'M');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_ADV_SENDER_REF", e);
    }
}

function SYM_EPLC_AMD_DT_CHECK() {
    try {
        var nSubDays; // Utility Auto Fix Comments
        document.MAINFORM.TEMP_TRX_DT.value = SYS_BUSI_DATE;
        if (document.MAINFORM.AMD_DT.value != "") {
            nSubDays = SYS_GetSubDays('TEMP_TRX_DT', 'AMD_DT');
            if (nSubDays > 0) {
                SYS_CheckError(document.MAINFORM.AMD_DT, 'Amendment Date should not be later than system date!');
                document.MAINFORM.AMD_DT.value = SYS_BUSI_DATE;
            }
        }

        if (document.MAINFORM.AMD_DT.value != "") {
            nSubDays = SYS_GetSubDays('ISSUE_DT', 'AMD_DT');
            if (nSubDays < 0) {
                SYS_CheckError(document.MAINFORM.AMD_DT, 'Amendment Date should not before Issue date!');
                document.MAINFORM.AMD_DT.value = SYS_BUSI_DATE;
            }
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_AMD_DT_CHECK", e);
    }
}

function SYM_EPLC_Add_Charge() {
    try {
        var sADDIT; // Utility Auto Fix Comments
        sADDIT = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);

        if (sADDIT > 0) {
            SYT_ChangeFldClass(document.MAINFORM.CUST_AC_NO, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CUST_AC_NO, "B");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Add_Charge", e);
    }
}

function SYM_EPLC_Alert_SYN_FLG() {
    try {
        if (document.MAINFORM.SYND_FLG.value == 'YES') {
            alert('Please note this transaction has been syndicated.');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Alert_SYN_FLG", e);
    }
}

function SYM_EPLC_BASE_LCY() {
    try {
        var Rt; // Utility Auto Fix Comments
        var amtTrxccy; // Utility Auto Fix Comments
        amtTrxccy = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        Rt = SYS_BeFloat(document.MAINFORM.BASE_RT.value);
        document.MAINFORM.BASE_BAL.value = SYT_AmtFormat(document.MAINFORM.BASE_CCY.value, amtTrxccy * Rt);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_BASE_LCY", e);
    }
}

function SYM_EPLC_BASE_LCY_BAL() {
    try {
        SYS_GetExchangeRate(document.MAINFORM.LC_CCY.value, SYS_LOCAL_CCY, 'Booking Rate', document.MAINFORM.BASE_RT.name, SYM_EPLC_BASE_LCY);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_BASE_LCY_BAL", e);
    }
}

function SYM_EPLC_CALL_FOR_DRAFTS_AT() {
    try {
        if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE') {
            if (document.MAINFORM.TENOR_TYPE.value != '' && document.MAINFORM.DRWE_NM.value != '') {
                document.MAINFORM.DRAFTS_AT.value = document.MAINFORM.TENOR_DAYS.value + " " + document.MAINFORM.TENOR_TYPE.value;
            }
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CALL_FOR_DRAFTS_AT", e);
    }
}

function SYM_EPLC_CAL_AMEND_PAYMENT_AMT() {
    try {
        /*var Amount;// Utility Auto Fix Comments
            var NEW_LC_AMT;// Utility Auto Fix Comments
            var ccy;// Utility Auto Fix Comments
            var i;// Utility Auto Fix Comments
            var len;// Utility Auto Fix Comments
            var percent;// Utility Auto Fix Comments
            var targetDo;// Utility Auto Fix Comments
        NEW_LC_AMT = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value);
                ccy = document.MAINFORM.LC_CCY.value;
                document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value = SYT_AmtFormat(ccy, NEW_LC_AMT);
                targetDo = null;
                targetDo = SYS_GetObjByDoName("PaymentTerms");
                if (targetDo == null) {
                    return;
                } else {
                    len = targetDo.length;
                    for (i = 0; i < len; i++) {

                        percent = SYS_BeFloat(targetDo[i].getDoValueByName("CPYT_C_PAY_PER"));
                        Amount = SYT_AmtFormat(ccy, NEW_LC_AMT * percent * 0.01);
                        SYS_UpdateFldValueByDo(targetDo[i], "CPYT_N_PAY_AMT", Amount);
                    }
                    SYS_RefreshDoGrid(targetDo);
                }
        */
        //There is a bug in Mix payment if not amend the LC amount

        //Edit by amy in 20150630 for the bug
        var Amount; // Utility Auto Fix Comments
        var NEW_LC_AMT; // Utility Auto Fix Comments
        var LC_AMT; // Utility Auto Fix Comments
        var TRX_AMT; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var percent; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        NEW_LC_AMT = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value);
        LC_AMT = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        ccy = document.MAINFORM.LC_CCY.value;
        if (NEW_LC_AMT == 0) {
            TRX_AMT = LC_AMT;
        } else {
            TRX_AMT = NEW_LC_AMT;
        }
        document.MAINFORM.CPYT_N_PAY_TTL_AMT_TXCCY.value = SYT_AmtFormat(ccy, TRX_AMT);
        targetDo = null;
        targetDo = SYS_GetObjByDoName("PaymentTerms");
        if (targetDo == null) {
            return;
        } else {
            len = targetDo.length;
            for (i = 0; i < len; i++) {

                percent = SYS_BeFloat(targetDo[i].getDoValueByName("CPYT_C_PAY_PER"));
                Amount = SYT_AmtFormat(ccy, TRX_AMT * percent * 0.01);
                SYS_UpdateFldValueByDo(targetDo[i], "CPYT_N_PAY_AMT", Amount);
            }
            SYS_RefreshDoGrid(targetDo);
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_AMEND_PAYMENT_AMT", e);
    }
}

function SYM_EPLC_CAL_CHG_CASH_IND_back() {
    try {
        /*
        if(document.MAINFORM.STL_INSTR_FLG.value == 'Take Charges Separately'){
        SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND,'O');
        }else{
        SYT_ChangeFldClass(document.MAINFORM.CHG_CASH_IND,'P');
        }
        */
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_CHG_CASH_IND_back", e);
    }
}

function SYM_EPLC_CAL_CLEAR_DRWE_ID() {
    try {
        if (document.MAINFORM.DRWE_ID.value == '') {
            document.MAINFORM.DRWE_NM.value = '';
            document.MAINFORM.DRWE_ADD1.value = '';
            document.MAINFORM.DRWE_ADD2.value = '';
            document.MAINFORM.DRWE_ADD3.value = '';
            document.MAINFORM.DRWE_NOTES.value = '';
            document.MAINFORM.DRWE_SW_ADD.value = '';
            if (document.MAINFORM.DRWE_ID.value != '') {
                SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'O');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD_BTN, 'P');
            }
            SYM_EPLC_CHK_DRWE_SW_TAG();
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_CLEAR_DRWE_ID", e);
    }
}

function SYM_EPLC_CAL_CLEAR_NEW_DRWE_ID() {
    try {
        if (document.MAINFORM.NEW_DRWE_ID.value == '') {
            document.MAINFORM.NEW_DRWE_NM.value = '';
            document.MAINFORM.NEW_DRWE_ADD1.value = '';
            document.MAINFORM.NEW_DRWE_ADD2.value = '';
            document.MAINFORM.NEW_DRWE_ADD3.value = '';
            document.MAINFORM.NEW_DRWE_NOTES.value = '';
            document.MAINFORM.NEW_DRWE_SW_ADD.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_CLEAR_NEW_DRWE_ID", e);
    }
}

function SYM_EPLC_CAL_CONF_BAL_BY_PERCENT() {
    try {
        var nCONF_BAL; // Utility Auto Fix Comments
        var nCONF_PERCENT; // Utility Auto Fix Comments
        var nLC_BAL; // Utility Auto Fix Comments
        var nLIAB_BAL; // Utility Auto Fix Comments
        var nNO_PRD; // Utility Auto Fix Comments
        if (SYS_BeInt(document.MAINFORM.CONF_PCT.value) > 0) {
            nNO_PRD = SYS_BeInt(document.MAINFORM.NO_PRD.value) + 1;
            nCONF_PERCENT = SYS_BeFloat(document.MAINFORM.CONF_PCT.value);
            nLC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL.value);

            if (document.MAINFORM.REV_LC.value == 'YES') {
                if (document.MAINFORM.CUMULATIVE.value == 'Cumulative' || document.MAINFORM.EVERGREEN.value == 'YES') {
                    nCONF_BAL = SYS_BeFloat((nLC_BAL * nCONF_PERCENT) / 100 * nNO_PRD);
                    document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
                    document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
                }
                if (document.MAINFORM.CUMULATIVE.value == 'Non Cumulative' && document.MAINFORM.EVERGREEN.value == 'NO') {
                    nCONF_BAL = SYS_BeFloat((nLC_BAL * nCONF_PERCENT) / 100);
                    nLIAB_BAL = SYS_BeFloat((nLC_BAL * nCONF_PERCENT) / 100 * nNO_PRD);
                    document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
                    document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nLIAB_BAL);
                }
            } else {
                nCONF_BAL = SYS_BeFloat((nLC_BAL * nCONF_PERCENT) / 100);
                document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
                document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nCONF_BAL);
            }

        } else {
            document.MAINFORM.CONF_PCT.value = 0;
            document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
            document.MAINFORM.LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_CONF_BAL_BY_PERCENT", e);
    }
}

function SYM_EPLC_CAL_CONF_BAL_BY_PERCENT_AMD() {
    try {
        var nCONF_PCT; // Utility Auto Fix Comments
        var nNEW_CONF_BAL; // Utility Auto Fix Comments
        var nNEW_LC_BAL; // Utility Auto Fix Comments
        var nNEW_LIAB_BAL; // Utility Auto Fix Comments
        var nNO_PRD; // Utility Auto Fix Comments
        var nOLD_LC_BAL; // Utility Auto Fix Comments
        if (SYS_BeInt(document.MAINFORM.CONF_PCT.value) > 0) {
            nCONF_PCT = SYS_BeFloat(document.MAINFORM.CONF_PCT.value);
            nNEW_LC_BAL = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value);
            nOLD_LC_BAL = SYS_BeFloat(document.MAINFORM.OLD_LC_BAL.value);
            nNO_PRD = SYS_BeInt(document.MAINFORM.NO_PRD.value) + 1;

            if (document.MAINFORM.REV_LC.value == 'YES') {
                if (document.MAINFORM.CUMULATIVE.value == 'Cumulative' || document.MAINFORM.EVERGREEN.value == 'YES') {
                    nNEW_CONF_BAL = SYS_BeFloat((nNEW_LC_BAL * nCONF_PCT) / 100 * nNO_PRD);
                    document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                    document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                }
                if (document.MAINFORM.CUMULATIVE.value == 'Non Cumulative' && document.MAINFORM.EVERGREEN.value == 'NO') {
                    nNEW_CONF_BAL = SYS_BeFloat((nNEW_LC_BAL * nCONF_PCT) / 100);
                    nNEW_LIAB_BAL = SYS_BeFloat((nNEW_LC_BAL * nCONF_PCT) / 100 * nNO_PRD);
                    document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                    document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_LIAB_BAL);
                }
            } else {
                nNEW_CONF_BAL = SYS_BeFloat((nNEW_LC_BAL * nCONF_PCT) / 100);
                document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
            }
        } else {
            document.MAINFORM.CONF_PCT.value = 0;
            document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0.00);
            document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0.00);
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_CONF_BAL_BY_PERCENT_AMD", e);
    }
}

function SYM_EPLC_CAL_CONF_BK_ID() {
    try {
        if (document.MAINFORM.CONF_BK_ID.value == '') {
            document.MAINFORM.CONF_BK_NM.value = '';
            document.MAINFORM.CONF_BK_ADD1.value = '';
            document.MAINFORM.CONF_BK_ADD2.value = '';
            document.MAINFORM.CONF_BK_ADD3.value = '';
            document.MAINFORM.CONF_BK_SW_ADD.value = '';
            SYM_EPLC_CAL_CONF_BK_ID_back();
        } else {
            SYS_GetCUBK('CONF_BK_ID', 'CONF_BK_ID', 'SYM_EPLC_CAL_CONF_BK_ID_back()');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_CONF_BK_ID", e);
    }
}

function SYM_EPLC_CAL_CONF_BK_ID_back() {
    try {
        SYM_EPLC_CHK_CONF_BK_SW_TAG();
        if (document.MAINFORM.CONF_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.CONF_BK_SW_ADD.value = document.MAINFORM.CONF_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_CONF_BK_ID_back", e);
    }
}

function SYM_EPLC_CAL_EXPIRY_PRE_ADV_DT() {
    try {
        if (document.MAINFORM.PRE_ADV_DT.value.length > 0 && document.MAINFORM.EXPIRY_DT.value.length > 0) {
            var nDays;
            nDays = SYS_GetSubDays(document.MAINFORM.PRE_ADV_DT.name, document.MAINFORM.EXPIRY_DT.name);
            if (nDays <= 0) {
                SYS_CheckError(document.MAINFORM.PRE_ADV_DT, "Pre Advise date should be earlier than expiry date!");
                document.MAINFORM.PRE_ADV_DT.value = '';
                return false;
            }
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_EXPIRY_PRE_ADV_DT", e);
    }
}

function SYM_EPLC_CAL_FIREEVENT_BY_BENE_ID() {
    try {
        EEHtml.fireEvent(document.MAINFORM.BENE_CORR_MED, "onchange");
        EEHtml.fireEvent(document.MAINFORM.BENE_NM, "onchange");
        EEHtml.fireEvent(document.MAINFORM.BENE_ADD1, "onchange");
        EEHtml.fireEvent(document.MAINFORM.BENE_ADD2, "onchange");
        EEHtml.fireEvent(document.MAINFORM.BENE_ADD3, "onchange");
        EEHtml.fireEvent(document.MAINFORM.BENE_MAIL_ADD, "onchange");
        EEHtml.fireEvent(document.MAINFORM.BENE_EMAIL, "onchange");
        EEHtml.fireEvent(document.MAINFORM.BENE_FAX, "onchange");
        EEHtml.fireEvent(document.MAINFORM.BENE_LANG, "onchange");
        EEHtml.fireEvent(document.MAINFORM.BENE_REF_NO, "onchange");
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_FIREEVENT_BY_BENE_ID", e);
    }
}

function SYM_EPLC_CAL_INT_CHF() {
    try {
        var ccy; // Utility Auto Fix Comments
        var int; // Utility Auto Fix Comments
        var lib; // Utility Auto Fix Comments
        var lib_chf; // Utility Auto Fix Comments
        var mag; // Utility Auto Fix Comments
        var mag_chf; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        if (document.MAINFORM.DISCNT_FLG.value == "YES") {
            ccy = document.MAINFORM.CFNC_C_CCY.value;
            document.MAINFORM.CFNC_DISCOUNT_CCY.value = ccy;
            lib = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_AMT.value);
            mag = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_AMT.value);
            int = SYS_BeFloat(document.MAINFORM.INT_AMT.value);

            SYS_GetExchangeRate_S(ccy, SYS_LOCAL_CCY, 'Booking Rate', 'CFNC_BOOKING_RATE');
            rate = SYS_BeFloat(document.MAINFORM.CFNC_BOOKING_RATE.value);
            lib_chf = lib * rate;
            mag_chf = mag * rate;
            document.MAINFORM.CFNC_LIB_CHF_AMT.value = SYT_AmtFormat(ccy, lib_chf);
            document.MAINFORM.CFNC_MARG_CHF_AMT.value = SYT_AmtFormat(ccy, mag_chf);
            int_chf = SYS_BeFloat(document.MAINFORM.CFNC_LIB_CHF_AMT.value) + SYS_BeFloat(document.MAINFORM.CFNC_MARG_CHF_AMT.value);
            if (ccy != SYS_LOCAL_CCY) {
                document.MAINFORM.CFNC_TTL_CHF_AMT.value = SYT_AmtFormat(ccy, int_chf);
                document.MAINFORM.CFNC_TTL_FX_AMT.value = document.MAINFORM.INT_AMT.value;
            } else {
                document.MAINFORM.CFNC_TTL_CHF_AMT.value = 0;
                document.MAINFORM.CFNC_TTL_FX_AMT.value = 0;
            }

            if (ccy == SYS_LOCAL_CCY) {
                document.MAINFORM.CFNC_DISCOUNT_NO.value = "INT.LOCAL.CCY";
            } else {
                document.MAINFORM.CFNC_DISCOUNT_NO.value = "INT.F.CURR.";
            }
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_INT_CHF", e);
    }
}

function SYM_EPLC_CAL_INT_DEC_COMM() {
    try {
        var CONF_COMM; // Utility Auto Fix Comments
        var NEW_CONF_COMM; // Utility Auto Fix Comments
        var UNPAID_CONF_COMM; // Utility Auto Fix Comments
        CONF_COMM = Chg.Screen.getTrxChargeByCommCode('EPLC_CONF_COMM');
        NEW_CONF_COMM = SYS_BeFloat(CONF_COMM.getActiveAmt());
        UNPAID_CONF_COMM = SYS_BeFloat(document.MAINFORM.UNPAID_CONF_COMM.value);
        if (document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION" || document.MAINFORM.OUR_ENG.value == "CONFIRMATION") {
        if (NEW_CONF_COMM - UNPAID_CONF_COMM > 0) {
            document.MAINFORM.E_INT_COMM_AMT.value = NEW_CONF_COMM - UNPAID_CONF_COMM;
            document.MAINFORM.E_DEC_COMM_AMT.value = 0;
            document.MAINFORM.E_INT_COMM_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.E_INT_COMM_AMT.value);
            document.MAINFORM.E_DEC_COMM_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.E_DEC_COMM_AMT.value);
        } else {
            document.MAINFORM.E_DEC_COMM_AMT.value = UNPAID_CONF_COMM - NEW_CONF_COMM;
            document.MAINFORM.E_INT_COMM_AMT.value = 0;
            document.MAINFORM.E_INT_COMM_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.E_INT_COMM_AMT.value);
            document.MAINFORM.E_DEC_COMM_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.E_DEC_COMM_AMT.value);
        }
      }else{
      	document.MAINFORM.E_DEC_COMM_AMT.value = 0;
      	document.MAINFORM.E_INT_COMM_AMT.value = 0;
      }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_INT_DEC_COMM", e);
    }
}

function SYM_EPLC_CAL_LC_BAL() {
    try {
        /*if (document.MAINFORM.AMT_SPEC.value == "NOT EXCEEDING") {
                    document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_AMT.value);
                } else {*/ //This tag removed from SWIFT 2018;
        document.MAINFORM.LC_BAL.value = SYS_BeFloat(document.MAINFORM.LC_AMT.value) * (1 + SYS_BeInt(document.MAINFORM.POS_TOL.value) / 100);
        document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.LC_BAL.value);
        //}
        EEHtml.fireEvent(document.MAINFORM.LC_BAL, "onchange");
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_LC_BAL", e);
    }
}

function SYM_EPLC_CAL_LC_BAL_NEGO() {
    try {
        var LC_BAL; // Utility Auto Fix Comments
        var LC_BAL_TEMP; // Utility Auto Fix Comments
        var PRES_AMT_LC_CCY; // Utility Auto Fix Comments
        LC_BAL_TEMP = SYS_BeFloat(document.MAINFORM.LC_BAL.value);
        PRES_AMT_LC_CCY = SYS_BeFloat(document.MAINFORM.PRES_AMT_LC_CCY.value);

        LC_BAL = LC_BAL_TEMP - PRES_AMT_LC_CCY;

        if (LC_BAL < 0) {
            alert('Please note that the Presentation Amount exceeds the LC Balance.');
            LC_BAL = 0;
        } else {
            document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, LC_BAL);
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_LC_BAL_NEGO", e);
    }
}

function SYM_EPLC_CAL_MATURITY_DT() {
    try {
        var nDays; // Utility Auto Fix Comments
        nDays = SYS_BeInt(document.MAINFORM.TENOR_DAYS.value);

        if (nDays != "" && document.MAINFORM.TENOR_START_DT.value != "") {
            SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.TENOR_START_DT.value, nDays, "SYM_EPLC_MATURITY_DT_RESULT", "A", "N", "N");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_MATURITY_DT", e);
    }
}

function SYM_EPLC_CAL_NEW_ADV_THU_BK_ID() {
    try {
        if (document.MAINFORM.NEW_ADV_THU_BK_ID.value == '') {
            document.MAINFORM.NEW_ADV_THU_BK_NM.value = '';
            document.MAINFORM.NEW_ADV_THU_BK_ADD1.value = '';
            document.MAINFORM.NEW_ADV_THU_BK_ADD2.value = '';
            document.MAINFORM.NEW_ADV_THU_BK_ADD3.value = '';
            document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value = '';
            document.MAINFORM.NEW_ADV_THU_BK_MAIL_ADD.value = '';
            document.MAINFORM.NEW_ADV_THU_BK_CORR_MED.value = '';
            SYM_EPLC_CAL_NEW_ADV_THU_BK_ID_back();
        } else {
            SYS_GetCUBK('NEW_ADV_THU_BK_ID', 'NEW_ADV_THU_BK_ID', 'SYM_EPLC_CAL_NEW_ADV_THU_BK_ID_back');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_NEW_ADV_THU_BK_ID", e);
    }
}

function SYM_EPLC_CAL_NEW_ADV_THU_BK_ID_back() {
    try {
        SYM_EPLC_CHK_NEW_ADV_THU_BK_SW_TAG();
        if (document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value.length == 8) {
            document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value = document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value + 'XXX';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_NEW_ADV_THU_BK_ID_back", e);
    }
}

function SYM_EPLC_CAL_NEW_CFM_COMM() {
    try {
        if (SYS_BeFloat(document.MAINFORM.NEW_CONF_BAL.value) > 0 && document.MAINFORM.AMD_DT.value != '') {
            if (document.MAINFORM.NEW_EXPIRY_DT.value == '') {
                SYT_CAL_COMM('EPLC_CONF_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.NEW_CONF_BAL.value, document.MAINFORM.AMD_DT.value, document.MAINFORM.EXPIRY_DT.value);
            } else {
                SYT_CAL_COMM('EPLC_CONF_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.NEW_CONF_BAL.value, document.MAINFORM.AMD_DT.value, document.MAINFORM.NEW_EXPIRY_DT.value);
            }
        } else {
            SYT_RESET_COMM('EPLC_CONF_COMM');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_NEW_CFM_COMM", e);
    }
}

function SYM_EPLC_CAL_NEW_CFM_COMM_FOR_PAY() {
    try {
        if (document.MAINFORM.PMT_FLG.value == 'SIGHT') {
            if (SYS_BeFloat(document.MAINFORM.CONF_BAL.value) > 0 && document.MAINFORM.VALUE_DT_DR.value != '' && document.MAINFORM.EXPIRY_DT.value != '') {
                SYT_CAL_COMM('EPLC_CONF_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.CONF_BAL.value, document.MAINFORM.VALUE_DT_DR.value, document.MAINFORM.EXPIRY_DT.value);
            } else {
                SYT_RESET_COMM('EPLC_CONF_COMM');
            }
        }
        /*else{

    if(SYS_BeFloat(document.MAINFORM.CONF_BAL.value)>0 && document.MAINFORM.MATURITY_DT.value!='' && document.MAINFORM.EXPIRY_DT.value!=''){	
    	SYT_CAL_COMM('EPLC_CONF_COMM',document.MAINFORM.LC_CCY.value,document.MAINFORM.CONF_BAL.value,document.MAINFORM.MATURITY_DT.value,document.MAINFORM.EXPIRY_DT.value);
    }else{
    SYT_RESET_COMM('EPLC_CONF_COMM');	
    }
    }*/
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_NEW_CFM_COMM_FOR_PAY", e);
    }
}

function SYM_EPLC_CAL_PAID_CFM_COMM() {
    try {
        var CONF_COMM; // Utility Auto Fix Comments
        var conf_chgObj; // Utility Auto Fix Comments
        if (SYS_BeFloat(document.MAINFORM.CONF_BAL.value) > 0 && document.MAINFORM.ADV_DT.value != '' && document.MAINFORM.AMD_DT.value != '') {
            SYT_CAL_COMM('EPLC_CONF_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.CONF_BAL.value, document.MAINFORM.ADV_DT.value, document.MAINFORM.AMD_DT.value);
        }
        CONF_COMM = Chg.Screen.getTrxChargeByCommCode('EPLC_CONF_COMM');
        document.MAINFORM.PAID_CONF_COMM.value = CONF_COMM.getActiveAmt();
        document.MAINFORM.PAID_CONF_COMM.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.PAID_CONF_COMM.value);
        SYT_RESET_COMM('EPLC_CONF_COMM');

        conf_chgObj = Chg.Screen.getDefChargeByCommCode('EPLC_CONF_COMM');
        if (conf_chgObj != '' && conf_chgObj != null && conf_chgObj != 'null' && conf_chgObj != 'undefined') {
            conf_chgObj[0].setActiveAmt(document.MAINFORM.PAID_CONF_COMM.value);
            if (conf_chgObj[0].getChargeAt() == '1') {
                conf_chgObj[0].setBalAmt(document.MAINFORM.PAID_CONF_COMM.value);
                conf_chgObj[0].setPayAmt(0.00);
            } else if (conf_chgObj[0].getChargeAt() == '0') {
                conf_chgObj[0].setPayAmt(document.MAINFORM.PAID_CONF_COMM.value);
                conf_chgObj[0].setBalAmt(0.00);
            } else {
                conf_chgObj[0].setPayAmt(0.00);
                conf_chgObj[0].setBalAmt(0.00);
            }
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_PAID_CFM_COMM", e);
    }
}

function SYM_EPLC_CAL_PAID_CONF_COMM_FOR_PAY() {
    try {
        var CONF_COMM; // Utility Auto Fix Comments
        var CONF_COMM_AMD; // Utility Auto Fix Comments
        var conf_chgObj; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var refno; // Utility Auto Fix Comments
        var str; // Utility Auto Fix Comments
        var trx_dt; // Utility Auto Fix Comments
        trx_dt = document.MAINFORM.VALUE_DT_DR.value;
        if (document.MAINFORM.MATURITY_DT.value != '') {
            trx_dt = document.MAINFORM.MATURITY_DT.value;
        }
        str = document.MAINFORM.DRAWING_REF.value;
        len = str.length;
        refno = str.substring(len - 2, len); // Utility Auto Fix Comments
        if (refno == '01') {
            if (document.MAINFORM.AMD_DT.value == '') {
                if (SYS_BeFloat(document.MAINFORM.TEMP_CONF_BAL.value) > 0 && document.MAINFORM.ADV_DT.value != '' && trx_dt != '') {
                    SYT_CAL_COMM('EPLC_CONF_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.TEMP_CONF_BAL.value, document.MAINFORM.ADV_DT.value, trx_dt);
                    CONF_COMM = Chg.Screen.getTrxChargeByCommCode('EPLC_CONF_COMM');
                    document.MAINFORM.PAID_CONF_COMM.value = CONF_COMM.getActiveAmt();
                    //document.MAINFORM.PAID_CONF_COMM1.value = document.MAINFORM.PAID_CONF_COMM.value;
                    document.MAINFORM.PAID_CONF_COMM.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.PAID_CONF_COMM.value);
                    //document.MAINFORM.PAID_CONF_COMM1.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value,document.MAINFORM.PAID_CONF_COMM1.value);
                    SYT_RESET_COMM('EPLC_CONF_COMM');

                    conf_chgObj = Chg.Screen.getDefChargeByCommCode('EPLC_CONF_COMM');
                    if (conf_chgObj != '' && conf_chgObj != null && conf_chgObj != 'null' && conf_chgObj != 'undefined') {
                        conf_chgObj[0].setActiveAmt(document.MAINFORM.PAID_CONF_COMM.value);
                        if (conf_chgObj[0].getChargeAt() == '1') {
                            conf_chgObj[0].setBalAmt(document.MAINFORM.PAID_CONF_COMM.value);
                            conf_chgObj[0].setPayAmt(0.00);  
                    
                        } else if (conf_chgObj[0].getChargeAt() == '0') {
                            conf_chgObj[0].setPayAmt(document.MAINFORM.PAID_CONF_COMM.value);
                            conf_chgObj[0].setBalAmt(0.00);
                        } else {
                            conf_chgObj[0].setPayAmt(0.00);
                            conf_chgObj[0].setBalAmt(0.00);
                        }
                    }
                }
            } else {
                if (SYS_BeFloat(document.MAINFORM.TEMP_CONF_BAL.value) > 0 && document.MAINFORM.AMD_DT.value != '' && trx_dt != '') {
                    SYT_CAL_COMM('EPLC_CONF_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.TEMP_CONF_BAL.value, document.MAINFORM.AMD_DT.value, trx_dt);
                    CONF_COMM_AMD = Chg.Screen.getTrxChargeByCommCode('EPLC_CONF_COMM');
                    document.MAINFORM.PAID_CONF_COMM2.value = CONF_COMM_AMD.getActiveAmt();
                    document.MAINFORM.PAID_CONF_COMM.value = SYS_BeFloat(CONF_COMM_AMD.getActiveAmt()) + SYS_BeFloat(document.MAINFORM.TEMP_PAID_CONF_COMM.value);
                    document.MAINFORM.PAID_CONF_COMM.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.PAID_CONF_COMM.value);
                    //document.MAINFORM.PAID_CONF_COMM1.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value,document.MAINFORM.PAID_CONF_COMM1.value);
                    document.MAINFORM.PAID_CONF_COMM2.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.PAID_CONF_COMM2.value);
                    SYT_RESET_COMM('EPLC_CONF_COMM');
                    conf_chgObj = Chg.Screen.getAllDefCharge(); // Utility Auto Fix Comments
                    for (i = 0; i < conf_chgObj.length; i++) {
                        if (conf_chgObj[i].getCommCode() == 'EPLC_CONF_COMM') {
                            if (conf_chgObj[i].getTempField('1') == 'AMD') {
                                conf_chgObj[i].setActiveAmt(document.MAINFORM.PAID_CONF_COMM2.value);
                                if (conf_chgObj[i].getChargeAt() == '1') {
                                    conf_chgObj[i].setBalAmt(document.MAINFORM.PAID_CONF_COMM2.value);
                                    conf_chgObj[i].setPayAmt(0.00);
                                } else if (conf_chgObj[i].getChargeAt() == '0') {
                                    conf_chgObj[i].setPayAmt(document.MAINFORM.PAID_CONF_COMM2.value);
                                    conf_chgObj[i].setBalAmt(0.00);
                                } else {
                                    conf_chgObj[i].setPayAmt(0.00);
                                    conf_chgObj[i].setBalAmt(0.00);
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if (SYS_BeFloat(document.MAINFORM.TEMP_CONF_BAL.value) > 0 && document.MAINFORM.PAYMENT_DT.value != '' && trx_dt != '') {
                SYT_CAL_COMM('EPLC_CONF_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.TEMP_CONF_BAL.value, document.MAINFORM.PAYMENT_DT.value, trx_dt);
                CONF_COMM = Chg.Screen.getTrxChargeByCommCode('EPLC_CONF_COMM');
                document.MAINFORM.PAID_CONF_COMM2.value = CONF_COMM.getActiveAmt();
                document.MAINFORM.PAID_CONF_COMM.value = SYS_BeFloat(CONF_COMM.getActiveAmt()) + SYS_BeFloat(document.MAINFORM.TEMP_PAID_CONF_COMM.value);
                document.MAINFORM.PAID_CONF_COMM.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.PAID_CONF_COMM.value);
                //document.MAINFORM.PAID_CONF_COMM1.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value,document.MAINFORM.PAID_CONF_COMM1.value);
                document.MAINFORM.PAID_CONF_COMM2.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.PAID_CONF_COMM2.value);
                SYT_RESET_COMM('EPLC_CONF_COMM');
                //document.MAINFORM.PAID_CONF_COMM1.value = document.MAINFORM.PAID_CONF_COMM.value;
                //document.MAINFORM.PAID_CONF_COMM1.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value,document.MAINFORM.PAID_CONF_COMM1.value);

                conf_chgObj = Chg.Screen.getAllDefCharge(); // Utility Auto Fix Comments
                for (i = 0; i < conf_chgObj.length; i++) {
                    if (conf_chgObj[i].getCommCode() == 'EPLC_CONF_COMM') {
                        if (conf_chgObj[i].getTempField('1') == 'PAY' || conf_chgObj[i].getTempField('1') == 'PAM') {
                            conf_chgObj[i].setActiveAmt(document.MAINFORM.PAID_CONF_COMM2.value);
                            if (conf_chgObj[i].getChargeAt() == '1') {
                                conf_chgObj[i].setBalAmt(document.MAINFORM.PAID_CONF_COMM2.value);
                                conf_chgObj[i].setPayAmt(0.00);
                            } else if (conf_chgObj[i].getChargeAt() == '0') {
                                conf_chgObj[i].setPayAmt(document.MAINFORM.PAID_CONF_COMM2.value);
                                conf_chgObj[i].setBalAmt(0.00);
                            } else {
                                conf_chgObj[i].setPayAmt(0.00);
                                conf_chgObj[i].setBalAmt(0.00);
                            }
                        }
                    }
                }

            }
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_PAID_CONF_COMM_FOR_PAY", e);
    }
}

function SYM_EPLC_CAL_PAYMENT_DT() {
    try {
        var trx_dt; // Utility Auto Fix Comments
        trx_dt = document.MAINFORM.VALUE_DT_DR.value;
        if (document.MAINFORM.MATURITY_DT.value != '') {
            trx_dt = document.MAINFORM.MATURITY_DT.value;
        }
        document.MAINFORM.PAYMENT_DT.value = trx_dt;
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_PAYMENT_DT", e);
    }
}

function SYM_EPLC_CAL_PRES_AMT_LCCCY() {
    try {
        var LC_CCY; // Utility Auto Fix Comments
        var PRES_AMT_LC_CCY; // Utility Auto Fix Comments
        var PRES_CCY; // Utility Auto Fix Comments
        //get exchange rate
        LC_CCY = document.MAINFORM.LC_CCY.value;
        PRES_CCY = document.MAINFORM.PRES_CCY.value;

        if (LC_CCY != PRES_CCY) {
            SYS_GetExchangeRate_S(PRES_CCY, LC_CCY, 'Booking Rate', document.MAINFORM.TEMP_RATE.name);
        } else {
            document.MAINFORM.TEMP_RATE.value = 1;
        }

        //calculate presentation amount in lc ccy
        PRES_AMT_LC_CCY = SYS_BeFloat(document.MAINFORM.PRES_AMT.value) * SYS_BeFloat(document.MAINFORM.TEMP_RATE.value);
        document.MAINFORM.PRES_AMT_LC_CCY.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, PRES_AMT_LC_CCY);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_PRES_AMT_LCCCY", e);
    }
}

function SYM_EPLC_CAL_STL_BAL() {
    try {
        var PMT_FLG; // Utility Auto Fix Comments
        var PRES_CCY; // Utility Auto Fix Comments
        var STL_AMT; // Utility Auto Fix Comments
        var STL_BAL; // Utility Auto Fix Comments
        var newSTL_BAL; // Utility Auto Fix Comments
        PMT_FLG = document.MAINFORM.PMT_FLG.value;
        PRES_CCY = document.MAINFORM.PRES_CCY.value;
        STL_BAL = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        STL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);

        if (PMT_FLG == 'SIGHT') {
            newSTL_BAL = STL_BAL - STL_AMT;
            document.MAINFORM.STL_BAL.value = SYT_AmtFormat(PRES_CCY, newSTL_BAL);
        } else {
            document.MAINFORM.STL_AMT.value = SYT_AmtFormat(PRES_CCY, STL_AMT);
            document.MAINFORM.STL_BAL.value = SYT_AmtFormat(PRES_CCY, STL_BAL);
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_STL_BAL", e);
    }
}

function SYM_EPLC_CAL_TTL_ACPT_AMT() {
    try {
        var PRES_CCY; // Utility Auto Fix Comments
        var STL_AMT; // Utility Auto Fix Comments
        var TENOR_DAYS; // Utility Auto Fix Comments
        var newTEMP_TTL_ACPT_AMT; // Utility Auto Fix Comments
        STL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        TENOR_DAYS = SYS_BeInt(document.MAINFORM.TENOR_DAYS.value);
        PRES_CCY = document.MAINFORM.PRES_CCY.value;

        if (TENOR_DAYS != 0) {
            newTEMP_TTL_ACPT_AMT = SYS_BeFloat(document.MAINFORM.TEMP_TTL_ACPT_AMT.value) + STL_AMT;
            document.MAINFORM.TTL_ACPT_AMT.value = SYT_AmtFormat(PRES_CCY, newTEMP_TTL_ACPT_AMT);
        } else {
            document.MAINFORM.TTL_ACPT_AMT.value = SYT_AmtFormat(PRES_CCY, document.MAINFORM.TEMP_TTL_ACPT_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_TTL_ACPT_AMT", e);
    }
}

function SYM_EPLC_CAL_TTL_CLAIM_AMT() {
    try {
        var ADDIT_AMTS; // Utility Auto Fix Comments
        var ADV_BK_CHGS; // Utility Auto Fix Comments
        var CHGS_DEDUCTED; // Utility Auto Fix Comments
        var PRES_AMT; // Utility Auto Fix Comments
        var PRES_BK_CHGS; // Utility Auto Fix Comments
        var TTL_CLM_AMT; // Utility Auto Fix Comments
        //modified by zoe 20090112 for different Additional Amount CCY will not be added to total claim amount 
        PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        CHGS_DEDUCTED = SYS_BeFloat(document.MAINFORM.CHGS_DEDUCTED.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        ADDIT_AMTS = 0;
        ADV_BK_CHGS = 0;
        TTL_CLM_AMT = 0;

        if (document.MAINFORM.ADDIT_PRES_BK_CCY.value != document.MAINFORM.PRES_CCY.value) {
            ADDIT_AMTS = 0;
        } else {
            ADDIT_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        }

        if (document.MAINFORM.ADV_BK_CHG_CCY.value != document.MAINFORM.PRES_CCY.value) {
            SYM_EPLC_M_GET_EXHANGE_RT(document.MAINFORM.ADV_BK_CHG_CCY.value);
            ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value) * document.MAINFORM.TEMP_RATE.value;
        } else {
            ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        }


        TTL_CLM_AMT = PRES_AMT + ADDIT_AMTS - CHGS_DEDUCTED + PRES_BK_CHGS + ADV_BK_CHGS;
        document.MAINFORM.TTL_CLM_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, TTL_CLM_AMT);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_TTL_CLAIM_AMT", e);
    }
}

function SYM_EPLC_CAL_TTL_CONF_COMM_FOR_PAY() {
    try {
        var CONF_COMM; // Utility Auto Fix Comments
        if (document.MAINFORM.PMT_FLG.value == 'SIGHT') {
            CONF_COMM = Chg.Screen.getTrxChargeByCommCode('EPLC_CONF_COMM');
            document.MAINFORM.UNPAID_CONF_COMM.value = SYS_BeFloat(CONF_COMM.getActiveAmt());
            document.MAINFORM.TTL_CONF_COMM.value = SYS_BeFloat(document.MAINFORM.PAID_CONF_COMM.value) + SYS_BeFloat(document.MAINFORM.UNPAID_CONF_COMM.value);
            document.MAINFORM.TTL_CONF_COMM.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.TTL_CONF_COMM.value);
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_TTL_CONF_COMM_FOR_PAY", e);
    }
}

function SYM_EPLC_CAL_TTL_STL_AMT() {
    try {
        var PMT_FLG; // Utility Auto Fix Comments
        var PRES_CCY; // Utility Auto Fix Comments
        var STL_AMT; // Utility Auto Fix Comments
        var newTTL_STL_AMT; // Utility Auto Fix Comments
        PMT_FLG = document.MAINFORM.PMT_FLG.value;
        PRES_CCY = document.MAINFORM.PRES_CCY.value;
        STL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);

        if (PMT_FLG == 'SIGHT') {
            newTTL_STL_AMT = SYS_BeFloat(document.MAINFORM.TEMP_TTL_STL_AMT.value) + STL_AMT;
            document.MAINFORM.TTL_STL_AMT.value = SYT_AmtFormat(PRES_CCY, newTTL_STL_AMT);
        } else {
            document.MAINFORM.TTL_STL_AMT.value = SYT_AmtFormat(PRES_CCY, document.MAINFORM.TEMP_TTL_STL_AMT.value);
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CAL_TTL_STL_AMT", e);
    }
}

function SYM_EPLC_CHARGES_ACCOUNT() {
    try {
        var sM_CLASS_ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var sM_CLASS_ADV_BK_CHGS; // Utility Auto Fix Comments
        var sM_CLASS_PRES_BK_CHGS; // Utility Auto Fix Comments
        var sM_CLASS_TNSFR_DOCS_DEDUCT_AMT; // Utility Auto Fix Comments
        sM_CLASS_TNSFR_DOCS_DEDUCT_AMT = SYS_BeFloat(document.MAINFORM.TNSFR_DOCS_DEDUCT_AMT.value);
        sM_CLASS_ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        sM_CLASS_PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        sM_CLASS_ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        var sM_CLASS_ADV_BK_CHGS_BENE = 0;
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept' || SYS_ORG_FUNCTION_NAME == 'EPLC_PayAcceptFrCE'||SYS_ORG_FUNCTION_NAME == 'EPLC_Discount' || SYS_ORG_FUNCTION_NAME == 'EPLC_PayAtMaturity'||SYS_ORG_FUNCTION_NAME == 'EPLC_SettlePartialPayment'||SYS_ORG_FUNCTION_NAME == 'EPLC_PaymentAtMaturityFrCE'){
        sM_CLASS_ADV_BK_CHGS_BENE = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS_BENE.value);        	
        }

        if (sM_CLASS_TNSFR_DOCS_DEDUCT_AMT > 0) {
            SYT_ChangeFldClass(document.MAINFORM.TNSFR_DOCS_AC_NO, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TNSFR_DOCS_AC_NO, "H");
        }

        if (sM_CLASS_ADV_BK_CHGS > 0||sM_CLASS_ADV_BK_CHGS_BENE >0) {
            SYT_ChangeFldClass_New('ADV_BK_CHG_AC_NO', 'P');
        } else {
            SYT_ChangeFldClass_New('ADV_BK_CHG_AC_NO', 'H');
        }

        if (sM_CLASS_PRES_BK_CHGS > 0) {
            SYT_ChangeFldClass_New('AC_BK_AC_NO', 'P');
        } else {
            SYT_ChangeFldClass_New('AC_BK_AC_NO', 'H');
        }

        if (sM_CLASS_ADDIT_PRES_BK_AMTS > 0) {
            SYT_ChangeFldClass_New('CUST_AC_NO', 'P');
        } else {
            SYT_ChangeFldClass_New('CUST_AC_NO', 'H');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHARGES_ACCOUNT", e);
    }
}

function SYM_EPLC_CHECK_VALUE_DT_CR() {
    try {
        var AMT_TO_BENE_PRES_CCY; // Utility Auto Fix Comments
        var TTL_STL_AMT_DR; // Utility Auto Fix Comments
        var TTL_STL_AMT_RCV; // Utility Auto Fix Comments
        TTL_STL_AMT_DR = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_DR.value);
        AMT_TO_BENE_PRES_CCY = SYS_BeFloat(document.MAINFORM.AMT_TO_BENE_PRES_CCY.value);
        TTL_STL_AMT_RCV = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value);
        if (SYS_BeFloat(document.MAINFORM.NET_AMT_PD_BENE.value) <= 0) {
            TTL_STL_AMT_DR = TTL_STL_AMT_RCV - AMT_TO_BENE_PRES_CCY;
            document.MAINFORM.TTL_STL_AMT_DR.value = TTL_STL_AMT_DR;
            document.MAINFORM.NET_AMT_PD_BENE.value = 0;
            document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = 0;

        } else {

            document.MAINFORM.TTL_STL_AMT_DR.value = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value);

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHECK_VALUE_DT_CR", e);
    }
}

function SYM_EPLC_CHK_ADV_BK_SW_TAG() {
    try {
        if (document.MAINFORM.ADV_BK_SW_ADD.value != '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.ADV_BK_NM.value != '' | document.MAINFORM.ADV_BK_ADD1.value != '' || document.MAINFORM.ADV_BK_ADD2.value != '' || document.MAINFORM.ADV_BK_ADD3.value != '') && document.MAINFORM.ADV_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.ADV_BK_NM.value == '' && document.MAINFORM.ADV_BK_ADD1.value == '' && document.MAINFORM.ADV_BK_ADD2.value == '' && document.MAINFORM.ADV_BK_ADD3.value == '' && document.MAINFORM.ADV_BK_SW_ADD.value == '') {
            document.MAINFORM.ADV_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_ADV_BK_SW_TAG", e);
    }
}

function SYM_EPLC_CHK_AVAL_BY() {
    try {
        if (document.MAINFORM.AVAL_BY.value == 'BY PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "M");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.DRWE_ID_BTN);
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            document.MAINFORM.DRAFTS_AT.value = 'Payment at Sight';
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.TENOR_TYPE.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'P');
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "M");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "M");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.DRWE_ID_BTN);
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            document.MAINFORM.DRAFTS_AT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'M');
            SYM_EPLC_Pay_By_Acceptance();
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "M");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "M");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.DRWE_ID_BTN);
            //document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            //document.MAINFORM.DRAFTS_AT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'M');
            SYM_EPLC_Pay_By_Acceptance();
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "M");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'O');
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.DRWE_ID.value = '';
            document.MAINFORM.MIX_PMT_DETL.value = '';
            SYM_EPLC_CAL_CLEAR_DRWE_ID();
            SYM_EPLC_Pay_By_Acceptance();
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DEF_PMT_DET.value;

        }

        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.MIX_PMT_DETL, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, 'P');
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.DRWE_ID.value = '';
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.TENOR_TYPE.value = '';
            SYM_EPLC_CAL_CLEAR_DRWE_ID();
            SYS_DeleteDoRecord("PaymentTerms");
            document.MAINFORM.CPYT_C_MIX_PAY_DETAIL.value = '';
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.MIX_PMT_DETL.value;
        }

        if (document.MAINFORM.AVAL_BY.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, "O");
            SYT_ChangeFldClass(document.MAINFORM.PAY_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.ACPT_BY, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'O');
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.DRWE_ID.value = '';
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.TENOR_TYPE.value = '';
            SYM_EPLC_CAL_CLEAR_DRWE_ID();
            document.MAINFORM.TENOR_TEMP.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_AVAL_BY", e);
    }
}

function SYM_EPLC_CHK_AVAL_BY_INIT() {
    try {
        if (document.MAINFORM.AVAL_BY.value == 'BY PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "M");
            SYT_EnableFields(document.MAINFORM.DRWE_ID_BTN);
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.DRAFTS_AT.value = 'Payment at Sight';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'P');
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
            SYM_EPLC_Pay_By_Acceptance();
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.DRWE_ID_BTN);
            //document.MAINFORM.DEF_PMT_DET.value = '';

            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'M');
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
            SYM_EPLC_Pay_By_Acceptance();
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_EnableFields(document.MAINFORM.DRWE_ID_BTN);
            //document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.DRAFTS_AT.value = '';
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'O');
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "M");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'O');
            SYM_EPLC_Pay_By_Acceptance();
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.DRWE_ID.value = '';
            SYM_EPLC_CAL_CLEAR_DRWE_ID();
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DEF_PMT_DET.value;
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "P");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "P");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'P');
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.DRWE_ID.value = '';
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.TENOR_TYPE.value = '';
            SYM_EPLC_CAL_CLEAR_DRWE_ID();
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.MIX_PMT_DETL.value;

        }

        if (document.MAINFORM.AVAL_BY.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
            SYT_ChangeFldClass(document.MAINFORM.DEF_PMT_DET, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DRWE_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE, 'O');
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.DEF_PMT_DET.value = '';
            document.MAINFORM.DRWE_ID.value = '';
            document.MAINFORM.TENOR_DAYS.value = 0;
            document.MAINFORM.TENOR_TYPE.value = '';
            SYM_EPLC_CAL_CLEAR_DRWE_ID();
            document.MAINFORM.TENOR_TEMP.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_AVAL_BY_INIT", e);
    }
}

function SYM_EPLC_CHK_CONF_BK_SW_TAG() {
    try {
        if (document.MAINFORM.CONF_BK_SW_ADD.value != '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.CONF_BK_NM.value != '' || document.MAINFORM.CONF_BK_ADD1.value != '' || document.MAINFORM.CONF_BK_ADD2.value != '' || document.MAINFORM.CONF_BK_ADD3.value != '') && document.MAINFORM.CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.CONF_BK_NM.value == '' && document.MAINFORM.CONF_BK_ADD1.value == '' && document.MAINFORM.CONF_BK_ADD2.value == '' && document.MAINFORM.CONF_BK_ADD3.value == '' && document.MAINFORM.CONF_BK_SW_ADD.value == '') {
            document.MAINFORM.CONF_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_CONF_BK_SW_TAG", e);
    }
}

function SYM_EPLC_CHK_DRWE_SW_TAG() {
    try {
        if (document.MAINFORM.DRWE_SW_ADD.value != '') {
            document.MAINFORM.DRWE_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.DRWE_NM.value != '' || document.MAINFORM.DRWE_ADD1.value != '' || document.MAINFORM.DRWE_ADD2.value != '' || document.MAINFORM.DRWE_ADD3.value != '') && document.MAINFORM.DRWE_SW_ADD.value == '') {
            document.MAINFORM.DRWE_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.DRWE_NM.value == '' && document.MAINFORM.DRWE_ADD1.value == '' && document.MAINFORM.DRWE_ADD2.value == '' && document.MAINFORM.DRWE_ADD3.value == '' && document.MAINFORM.DRWE_SW_ADD.value == '') {
            document.MAINFORM.DRWE_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_DRWE_SW_TAG", e);
    }
}

function SYM_EPLC_CHK_EMAIL(chkemail) {
    try {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (pattern.test(chkemail) == false) {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_EMAIL", e);
    }
}

function SYM_EPLC_CHK_FOREIGN_CHG() {
    try {
        var charge; // Utility Auto Fix Comments
        var defChgArr; // Utility Auto Fix Comments
        var getChargeFor_str; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        defChgArr = Chg.Screen.getAllDefCharge();
        getChargeFor_str = '';
        for (i = 0; i < defChgArr.length; i++) {
            charge = defChgArr[i];
            getChargeFor_str += charge.getChargeFor();
        }
        if (getChargeFor_str.indexOf("F") > -1) {
            alert("Please collect Applicant charge in Settle Charges Function first!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_FOREIGN_CHG", e);
    }
}

function SYM_EPLC_CHK_LTST_SHIP_DT() {
    try {
        if (document.MAINFORM.SHIP_PRD.value != '') {
            document.MAINFORM.SHIP_PRD.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_LTST_SHIP_DT", e);
    }
}

function SYM_EPLC_CHK_NEW_ADV_THU_BK_SW_TAG() {
    try {
        if (document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value != '') {
            document.MAINFORM.NEW_ADV_THU_BK_SW_TAG.value = 'A';
        }
        if ((document.MAINFORM.NEW_ADV_THU_BK_NM.value != '' || document.MAINFORM.NEW_ADV_THU_BK_ADD1.value != '' || document.MAINFORM.NEW_ADV_THU_BK_ADD2.value != '' || document.MAINFORM.NEW_ADV_THU_BK_ADD3.value != '') && document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value == '') {
            document.MAINFORM.NEW_ADV_THU_BK_SW_TAG.value = 'D';
        }
        if (document.MAINFORM.NEW_ADV_THU_BK_NM.value == '' && document.MAINFORM.NEW_ADV_THU_BK_ADD1.value == '' && document.MAINFORM.NEW_ADV_THU_BK_ADD2.value == '' && document.MAINFORM.NEW_ADV_THU_BK_ADD3.value == '' && document.MAINFORM.NEW_ADV_THU_BK_SW_ADD.value == '') {
            document.MAINFORM.NEW_ADV_THU_BK_SW_TAG.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_NEW_ADV_THU_BK_SW_TAG", e);
    }
}

function SYM_EPLC_CHK_NEW_LTST_SHIP_DT() {
    try {
        if (document.MAINFORM.NEW_SHIP_PRD.value != '') {
            document.MAINFORM.NEW_SHIP_PRD.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_NEW_LTST_SHIP_DT", e);
    }
}

function SYM_EPLC_CHK_NEW_SHIP_PRD() {
    try {
        if (document.MAINFORM.NEW_LTST_SHIP_DT.value != '') {
            document.MAINFORM.NEW_LTST_SHIP_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_NEW_SHIP_PRD", e);
    }
}

function SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY() {
    try {
        var cADV_LC_BY;
        cADV_LC_BY = document.MAINFORM.ADV_LC_BY.value;
        if (document.MAINFORM.OUR_ROLE.value == "Advise Through Bank") {
            if (cADV_LC_BY == "SWIFT to Beneficiary's Bank" || cADV_LC_BY == "Mail to beneficiary's Bank") {
                SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_40B, 'M');
                return true;
            } else {
                alert("Our role is Advise Through Bank, Advise LC By should be SWIFT to Beneficiary's Bank or Mail to beneficiary's Bank!");
                document.MAINFORM.ADV_LC_BY.value = "None";
                document.MAINFORM.ADV_LC_BY.focus();
                return false;
            }
        } else {
            if (cADV_LC_BY == "Mail to Beneficiary" || cADV_LC_BY == "e-mail to beneficiary" || cADV_LC_BY == "fax to beneficiary") {
                return true;
            } else {
                alert("Our role is Advising Bank, Advise LC By should be to Beneficiary!");
                document.MAINFORM.ADV_LC_BY.value = "None";
                document.MAINFORM.ADV_LC_BY.focus();
                SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ID, 'B');
                SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ID_BTN, 'B');
                SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_NM, 'B');
                SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD1, 'B');
                SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD2, 'B');
                SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD3, 'B');
                SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_MAIL_ADD, 'B');
                SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_SW_ADD, 'B');
                return false;
            }
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_OUR_RULE_ADV_LC_BY", e);
    }
}

function SYM_EPLC_CHK_PRES_BK_CORR_MED() {
    try {
        var PRES_BK_CORR_MED; // Utility Auto Fix Comments
        PRES_BK_CORR_MED = document.MAINFORM.PRES_BK_CORR_MED.value;
        if (PRES_BK_CORR_MED == "Fax") {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_FAX, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_FAX, 'O');
        }
        if (PRES_BK_CORR_MED == "Mail") {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'M');
            //SYT_ChangeFldClass(document.MAINFORM.PRES_BK_POST_ADD_BTN, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'O');
            //SYT_ChangeFldClass(document.MAINFORM.PRES_BK_POST_ADD_BTN, 'O');
        }
        if (PRES_BK_CORR_MED == "Email") {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_EMAIL, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_EMAIL, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_PRES_BK_CORR_MED", e);
    }
}

function SYM_EPLC_CHK_PRES_REF() {
    try {
        SYS_GetTableDataByRule('SYM_EPLC_SYM_EPLC_CHK_PRES_REF_0', '1', "SYM_EPLC_MSG", null, false);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_PRES_REF", e);
    }
}

function SYM_EPLC_CHK_SHIP_PRD() {
    try {
        if (document.MAINFORM.LTST_SHIP_DT.value != '') {
            document.MAINFORM.LTST_SHIP_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CHK_SHIP_PRD", e);
    }
}

function SYM_EPLC_CLEAR_PRES_INFO() {
    try {
        document.MAINFORM.PRES_BK_ID.value = '';
        document.MAINFORM.PRES_BK_NM.value = '';
        document.MAINFORM.PRES_BK_ADD1.value = '';
        document.MAINFORM.PRES_BK_ADD2.value = '';
        document.MAINFORM.PRES_BK_ADD3.value = '';
        document.MAINFORM.PRES_BK_SW_TAG.value = '';
        document.MAINFORM.PRES_BK_SW_ADD.value = '';
        document.MAINFORM.PRES_BK_MAIL_ADD.value = '';
        document.MAINFORM.PRES_BK_LANG.value = 'English';
        document.MAINFORM.PRES_BK_CORR_MED.value = 'None';
        document.MAINFORM.PRES_BK_EMAIL.value = '';
        document.MAINFORM.PRES_BK_FAX.value = '';
        document.MAINFORM.PRES_BK_TLX.value = '';
        document.MAINFORM.PRES_BK_AC_OFF_CODE.value = '';
        document.MAINFORM.PRES_BK_REF.value = '';
        document.MAINFORM.PRES_BK_AC_NO.value = '';
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CLEAR_PRES_INFO", e);
    }
}

function SYM_EPLC_CLS_DRWG_FLG() {
    try {
        var STL_BAL; // Utility Auto Fix Comments
        //modified by zoe 20090112
        STL_BAL = SYS_BeFloat(document.MAINFORM.STL_BAL.value);
        var PMT_FLG = document.MAINFORM.PMT_FLG.value;
        /* modified by susie for eplc report 20240118 */
        //if (STL_BAL > 0) {
        if ((PMT_FLG == 'DEFERRED' || PMT_FLG == 'MIX PAY') && (SYS_FUNCTION_NAME == 'EPLC_PayAccept' || SYS_FUNCTION_NAME == 'EPLC_PayAcceptFrCE')) {
            document.MAINFORM.CLS_DRWG_FLG.value = 'NO';
        } else if (document.MAINFORM.ADDIT_PRES_BK_CCY.value != document.MAINFORM.PRES_CCY.value && document.MAINFORM.ADDIT_PRES_BK_AMTS.value > 0) {
            document.MAINFORM.CLS_DRWG_FLG.value = 'NO';
        } else {
            document.MAINFORM.CLS_DRWG_FLG.value = 'YES';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CLS_DRWG_FLG", e);
    }
}

function SYM_EPLC_CONFIRM_CALL() {
    try {
        if (typeof Chg == "object") {
            SYT_CHG_VOUCHER();
        }

        SYT_GetMsgContent();
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CONFIRM_CALL", e);
    }
}

function SYM_EPLC_CONF_INSTR_AMD() {
    try {
        if (document.MAINFORM.OUR_ENG.value == 'CONFIRMATION' || document.MAINFORM.OUR_ENG.value == 'SILENT CONFIRMATION') {
            //document.MAINFORM.CONF_ADDED.value = 'YES';

            SYT_ChangeFldClass(document.MAINFORM.CONF_ADDED, 'M');
        } else {
            document.MAINFORM.CONF_ADDED.value = 'NO';
            SYT_ChangeFldClass(document.MAINFORM.CONF_ADDED, 'P');

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CONF_INSTR_AMD", e);
    }
}

function SYM_EPLC_C_MAIN_REF(ref) {
    try {
        document.MAINFORM.C_MAIN_REF.value = ref;
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_C_MAIN_REF", e);
    }
}

function SYM_EPLC_Cal_DISC_DET_ORG() {
    try {
        var DISCRE_CLAUSE_0; // Utility Auto Fix Comments
        var DISC_DET_SHOW; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        DISC_DET_ORG = document.MAINFORM.DISC_DET.value;
        node = SYS_getDoByXpath("Discrepancies_Clause");
        arrayvalue = SYS_getRecords(node);
        if (arrayvalue.length > 0) {
            DISCRE_CLAUSE_0 = SYS_getValFromRec(arrayvalue[0], 'DISCRE_CLAUSE');
            DISC_DET_SHOW = DISC_DET_ORG.indexOf(DISCRE_CLAUSE_0);
            DISC_DET_ORG = DISC_DET_ORG.substr(0, DISC_DET_SHOW).trim();
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Cal_DISC_DET_ORG", e);
    }
}

function SYM_EPLC_Cal_LC_Balance() {
    try {
        var N_LC_BAL = 0;
        N_LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL_TEMP.value) - SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        if (SYS_BeFloat(N_LC_BAL) < 0) {
            alert("The LC is overdrawn!");
            document.MAINFORM.PRES_AMT.value = 0;
            document.MAINFORM.PRES_AMT_LC_CCY.value = 0;
        } else {
            document.MAINFORM.LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, N_LC_BAL);
            //document.MAINFORM.LC_BAL_LOCAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY, N_LC_BAL);
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Cal_LC_Balance", e);
    }
}

function SYM_EPLC_CalcInterestAmount() {
    try {
        var Interest; // Utility Auto Fix Comments
        var InterestAmount; // Utility Auto Fix Comments
        var Rate; // Utility Auto Fix Comments
        var intmode; // Utility Auto Fix Comments
        var nBasicDays; // Utility Auto Fix Comments
        var nFinanceAmount; // Utility Auto Fix Comments
        var nFinanceDays; // Utility Auto Fix Comments
        var nNetAmount; // Utility Auto Fix Comments
        var payby; // Utility Auto Fix Comments
        nFinanceAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        nFinanceDays = SYS_BeFloat(document.MAINFORM.CFNC_I_DAYS.value);
        Rate = SYS_BeFloat(document.MAINFORM.CFNC_N_RT.value) / 100;
        intmode = document.MAINFORM.CFNC_C_INT_MODE.value;
        payby = document.MAINFORM.CFNC_C_PAY_BY.value;
        nBasicDays = document.MAINFORM.CFNC_I_BASIC_DAYS.value;
        if (payby == 'Drawer') {
            if (intmode == 'Straight') {
                if (nFinanceAmount > 0 && nFinanceDays > 0 && Rate > 0) {
                    InterestAmount = (nFinanceAmount * nFinanceDays * Rate) / nBasicDays;
                    document.MAINFORM.CFNC_N_PRE_INT.value = InterestAmount;
                    SYM_EPLC_NetAmount();
                }
            } else if (intmode == 'Yield') {
                if (nFinanceAmount > 0 && nFinanceDays > 0 && Rate > 0) {
                    nNetAmount = SYS_BeFloat(nFinanceAmount / (1 + Rate * nFinanceDays / nBasicDays));
                    Interest = nFinanceAmount - nNetAmount;
                    document.MAINFORM.CFNC_N_NET_AMT.value = nNetAmount;
                    document.MAINFORM.CFNC_N_PRE_INT.value = Interest;
                }
            }
        } else if (payby == 'Drawee') {
            if (nFinanceAmount > 0 && nFinanceDays > 0 && Rate > 0) {
                InterestAmount = (nFinanceAmount * nFinanceDays * Rate) / nBasicDays;
                document.MAINFORM.CFNC_N_PRE_INT.value = InterestAmount;
                document.MAINFORM.CFNC_N_NET_AMT.value = nFinanceAmount;
            } else if (intmode == 'Yield') {
                if (nFinanceAmount > 0 && nFinanceDays > 0 && Rate > 0) {
                    nNetAmount = SYS_BeFloat(nFinanceAmount / (1 + Rate * nFinanceDays / nBasicDays));
                    Interest = nFinanceAmount - nNetAmount;
                    document.MAINFORM.CFNC_N_NET_AMT.value = nNetAmount;
                    document.MAINFORM.CFNC_N_PRE_INT.value = Interest;
                }
            }
        } else {
            document.MAINFORM.CFNC_N_NET_AMT.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            document.MAINFORM.CFNC_N_PRE_INT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_CalcInterestAmount", e);
    }
}

function SYM_EPLC_DRAWING_REF() {
    try {
        var C_MAIN_REF; // Utility Auto Fix Comments
        var drawNo; // Utility Auto Fix Comments
        drawNo = SYS_BeInt(document.MAINFORM.NO_OF_DRAW.value);
        C_MAIN_REF = document.MAINFORM.C_MAIN_REF.value;

        if (drawNo == '' || drawNo == null || isNaN(drawNo)) {
            drawNo = 1;
        } else {
            drawNo = drawNo + 1;
        }

        document.MAINFORM.NO_OF_DRAW.value = drawNo;

        if (drawNo < 10) {
            document.MAINFORM.DRAWING_REF.value = C_MAIN_REF + '-0' + drawNo;
        } else {
            document.MAINFORM.DRAWING_REF.value = C_MAIN_REF + '-' + drawNo;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_DRAWING_REF", e);
    }
}

function SYM_EPLC_Discrepancies_Clause_DeleteBTN_onclick() {
    try {
        var DISCRE_CLAUSE_value; // Utility Auto Fix Comments
        var M; // Utility Auto Fix Comments
        var Obj_DISC_DET; // Utility Auto Fix Comments
        var arrayvalue; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        node = SYS_getDoByXpath("Discrepancies_Clause");
        arrayvalue = SYS_getRecords(node);
        DISCRE_CLAUSE_value = '';

        for (M = 0; M < arrayvalue.length; M++) {
            DISCRE_CLAUSE_value += '\n' + SYS_getValFromRec(arrayvalue[M], 'DISCRE_CLAUSE');
        }
        Obj_DISC_DET = SYS_getMainObj('DISC_DET');
        if (DISC_DET_ORG != '') {
            Obj_DISC_DET.value = DISC_DET_ORG + DISCRE_CLAUSE_value;
        } else {
            Obj_DISC_DET.value = DISCRE_CLAUSE_value;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Discrepancies_Clause_DeleteBTN_onclick", e);
    }
}

function SYM_EPLC_EnableDiv(sDivIdString) {
    try {
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var k; // Utility Auto Fix Comments
        var oDiv_input; // Utility Auto Fix Comments
        var oDiv_select; // Utility Auto Fix Comments
        var oDiv_textarea; // Utility Auto Fix Comments
        var oExceptFldName; // Utility Auto Fix Comments
        var temp_oDiv; // Utility Auto Fix Comments
        oExceptFldName = sDivIdString.split("|")[1];
        temp_oDiv = EEHtml.getElementById(sDivIdString.split("|")[0]);
        oDiv_input = temp_oDiv.getElementsByTagName("input");
        oDiv_select = temp_oDiv.getElementsByTagName("select");
        oDiv_textarea = temp_oDiv.getElementsByTagName("textarea");
        for (i = 0; i < oDiv_input.length; i++) {
            if (oDiv_input[i].name == oExceptFldName) { // Utility Auto Fix Comments
                continue; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            SYT_EnableFields(oDiv_input[i]);
        }
        for (j = 0; j < oDiv_select.length; j++) {
            if (oDiv_select[j].name == oExceptFldName) { // Utility Auto Fix Comments
                continue; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            SYT_EnableFields(oDiv_select[j]);


        }
        for (k = 0; k < oDiv_textarea.length; k++) {
            if (oDiv_textarea[k].name == oExceptFldName) { // Utility Auto Fix Comments
                continue; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
            SYT_EnableFields(oDiv_textarea[k]);
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_EnableDiv", e);
    }
}

function SYM_EPLC_FORM_OF_LC_MT710() {
    try {
        if (document.MAINFORM.ADV_LC_BY.value == "SWIFT to Beneficiary's Bank") {
            SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_MT710, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_40B, 'M');
            document.MAINFORM.MESG_TYPE.value = "MT710";

        } else {

            SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_MT710, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_40B, 'P');

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_FORM_OF_LC_MT710", e);
    }
}

function SYM_EPLC_FinanceDayschange() {
    try {
        var nFinanceDays; // Utility Auto Fix Comments
        nFinanceDays = SYS_BeFloat(document.MAINFORM.CFNC_I_DAYS.value);
        if (document.MAINFORM.CFNC_D_DT.value != '') {
            if ((document.MAINFORM.CFNC_C_GRACE_FLG.value == 'Working') && (document.MAINFORM.CFNC_C_GRACE_DAYS.value >= '0')) // is working day and not null 
            {
                SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DT.value, nFinanceDays, 'SYM_EPLC_getendday', 'A', 'Y', 'Y');
            } else if ((document.MAINFORM.CFNC_C_GRACE_FLG.value == 'Calendar') && (document.MAINFORM.CFNC_C_GRACE_DAYS.value >= '0')) { // is Calendar date and not null
                SYS_CalEndWorkingDate(SYS_BANK_COUNTRY, document.MAINFORM.CFNC_D_DT.value, nFinanceDays, 'SYM_EPLC_getendday', 'A', 'N', 'N');
            }
            SYM_EPLC_CalcInterestAmount();
        } else {
            SYS_CheckError(document.MAINFORM.CFNC_D_DT, 'Please specify the Start Date first !');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_FinanceDayschange", e);
    }
}

function SYM_EPLC_FinanceDueDatechange() {
    try {
        var nFinanceDays; // Utility Auto Fix Comments
        if (document.MAINFORM.CFNC_D_DT.value != "" && document.MAINFORM.CFNC_D_DUE_DT.value != "") {
            nFinanceDays = SYS_GetSubDays('CFNC_D_DT', 'CFNC_D_DUE_DT');
            if (nFinanceDays > 0) {
                document.MAINFORM.CFNC_I_DAYS.value = nFinanceDays;
            } else {
                SYS_CheckError(document.MAINFORM.CFNC_D_DUE_DT, 'Finance Due date should later than Finance Start date !');
            }
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_FinanceDueDatechange", e);
    }
}

function SYM_EPLC_FinanceLiborRateChange() {
    try {
        var nFinanceRate; // Utility Auto Fix Comments
        var nLiborRate; // Utility Auto Fix Comments
        var nMarginRate; // Utility Auto Fix Comments
        nLiborRate = SYS_BeFloat(document.MAINFORM.CFNC_N_LIBOR_RT.value);
        if (nLiborRate > 0 && nLiborRate < 101) {
            document.MAINFORM.CFNC_N_RT.value = nLiborRate;
            nMarginRate = SYS_BeFloat(document.MAINFORM.CFNC_N_MARGIN_RT.value);
            if (nMarginRate > 0) {
                nFinanceRate = nLiborRate + nMarginRate / 100;
                document.MAINFORM.CFNC_N_RT.value = nFinanceRate;
            }
            SYM_EPLC_CalcInterestAmount();
        } else {
            SYS_CheckError(document.MAINFORM.CFNC_N_LIBOR_RT, 'LIBOR should between 0% and 100%');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_FinanceLiborRateChange", e);
    }
}

function SYM_EPLC_FinancePercentChange() {
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
        SYM_EPLC_CalcInterestAmount();
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_FinancePercentChange", e);
    }
}

function SYM_EPLC_GET_REF_20() {
    try {
        var arrayvalue; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var mData; // Utility Auto Fix Comments
        var node; // Utility Auto Fix Comments
        var record; // Utility Auto Fix Comments
        document.MAINFORM.TEMP_N90_REF_20.value = document.MAINFORM.C_MAIN_REF.value;

        while (node == null) {
            node = SYS_getDoByXpath("AdviceForBankCust");
        }
        arrayvalue = SYS_getRecords(node);
        mData = [];
        for (i = 0, len = arrayvalue.length; i < len; i++) {
            record = arrayvalue[i];
            record = SYS_setValToRec(record, 'BANK_N90_REF_20', document.MAINFORM.C_MAIN_REF.value);
            mData[i] = record;
        }
        SYS_reLoadGrid(node, mData);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_GET_REF_20", e);
    }
}

function SYM_EPLC_GetLCYvalue() {
    try {
        var sCCY; // Utility Auto Fix Comments
        var sTRXCCY; // Utility Auto Fix Comments
        var strSQLWhere; // Utility Auto Fix Comments
        //sCCY = document.MAINFORM.CFNC_C_CCY.value;
        //sTRXCCY = document.MAINFORM.C_TRX_CCY.value;
        if (sCCY != sTRXCCY) {
            //strSQLWhere = "C_FROM_CCY='" + sTRXCCY + "'" + " " + "AND" + " " + "C_TO_CCY='" + sCCY + "'";
            SYS_GetTableDataByRule_S('SYM_EPLC_SYM_EPLC_GetLCYvalue_1', '1');
        } else {
            document.MAINFORM.CFNC_N_TRXCCY_LCY.value = 1;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_GetLCYvalue", e);
    }
}

function SYM_EPLC_Hidden_Mixpay_Separator() {
    try {
        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {
            EEHtml.getElementById('MIXPAY_SEPA').style.display = 'block';
        } else {
            EEHtml.getElementById('MIXPAY_SEPA').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Hidden_Mixpay_Separator", e);
    }
}

function SYM_EPLC_Hidden_Mixpay_Separator_NEW() {
    try {
        if (document.MAINFORM.NEW_AVAL_BY.value == 'BY MIXED PYMT') {
            EEHtml.getElementById('MIXPAY_SEPA').style.display = 'block';
        } else {
            EEHtml.getElementById('MIXPAY_SEPA').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Hidden_Mixpay_Separator_NEW", e);
    }
}

function SYM_EPLC_INIT() {
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

        //for trx date
        if (document.MAINFORM.TRX_DT != null) {
            document.MAINFORM.TRX_DT.value = SYS_BUSI_DATE;
        }

        //for trx CCY
        if (document.MAINFORM.TRX_CCY.value != null) {
            document.MAINFORM.TRX_CCY.value = SYS_LOCAL_CCY;
        }

        //for ISSUE_BK_CHG 
        if (document.MAINFORM.TEMP_OLD_ISSUE_BK_CHG != null) {
            document.MAINFORM.TEMP_OLD_ISSUE_BK_CHG.value = document.MAINFORM.ISSUE_BK_CHG.value;
            SYM_EPLC_M_CLASS_ISSUE_BK_CHG_CCY();
        }

        // for charge 20090103 added by zoe
        document.MAINFORM.TEMP_APPL_ID.value = 'APPLIDFORCHG';


        if (document.MAINFORM.TEMP_DOC_DT != null) {
            document.MAINFORM.TEMP_DOC_DT.value = SYS_BUSI_DATE;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_INIT", e);
    }
}

function SYM_EPLC_INIT_1ST() {
    try {
        SYM_EPLC_INIT();

        //get refno
        SYS_GetRefNo('EPLC', 'SYM_EPLC_C_MAIN_REF', 'SYM_EPLC_GET_REF_20');

        //define value
        document.MAINFORM.LC_CCY.value = SYS_LOCAL_CCY;
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_INIT_1ST", e);
    }
}

function SYM_EPLC_INIT_CCY() {
    try {
        document.MAINFORM.ADDIT_PRES_BK_CCY.value = document.MAINFORM.LC_CCY.value;
        document.MAINFORM.ADV_BK_CHG_CCY.value = document.MAINFORM.LC_CCY.value;
        document.MAINFORM.PRES_CCY.value = document.MAINFORM.LC_CCY.value;
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_INIT_CCY", e);
    }
}

function SYM_EPLC_INIT_MSG_CRE_DT() {
    try {} catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_INIT_MSG_CRE_DT", e);
    }
}

function SYM_EPLC_INIT_NEGO() {
    try {
        //Get Drawing Ref. No.
        SYS_GetRefNo('EPLC_DrwngRef', 'SYM_EPLC_DRAWING_REF');
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_INIT_NEGO", e);
    }
}

function SYM_EPLC_INIT_UNPAID_CONF_COMM() {
    try {
        var CONF_COMM; // Utility Auto Fix Comments
        if (SYS_BeFloat(document.MAINFORM.CONF_BAL.value) > 0 && document.MAINFORM.AMD_DT.value != '' && document.MAINFORM.EXPIRY_DT.value != '') {
            SYT_CAL_COMM('EPLC_CONF_COMM', document.MAINFORM.LC_CCY.value, document.MAINFORM.CONF_BAL.value, document.MAINFORM.AMD_DT.value, document.MAINFORM.EXPIRY_DT.value);
        }
        CONF_COMM = Chg.Screen.getTrxChargeByCommCode('EPLC_CONF_COMM');
        document.MAINFORM.UNPAID_CONF_COMM.value = SYS_BeFloat(CONF_COMM.getActiveAmt());
        document.MAINFORM.TTL_CONF_COMM.value = SYS_BeFloat(document.MAINFORM.PAID_CONF_COMM.value) + SYS_BeFloat(document.MAINFORM.UNPAID_CONF_COMM.value);
        document.MAINFORM.TTL_CONF_COMM.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.TTL_CONF_COMM.value);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_INIT_UNPAID_CONF_COMM", e);
    }
}

function SYM_EPLC_INQ_PRESENTER_INFO() {
    try {
        if (document.MAINFORM.DOC_PRES_BY.value == 'Beneficiary') {
            SYS_InqCUBK('BENE_NEGO_ID', 'PRES_BK_ID');
        } else {
            SYS_InqCUBK('PRES_BK_ID', 'PRES_BK_ID');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_INQ_PRESENTER_INFO", e);
    }
}

function SYM_EPLC_LC_AMT_CHECK() {
    try {
        if (SYS_BeFloat(document.MAINFORM.LC_AMT.value) < 0) {
            alert('LC Amount should not be negative value!');
            document.MAINFORM.LC_AMT.value = 0;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_LC_AMT_CHECK", e);
    }
}

function SYM_EPLC_LC_AmountOnchange() {
    try {
        var Func; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        //modified for PUI
        return;
        /*
    if('BY MIXED PYMT' == document.MAINFORM.AVAL_BY.value){
    	xDO=SYS_getDoByXpath("PaymentTermsHeader");
       if(xDO){
          Func = xDO.getselectedFrame().window["LC_AMTchange"];
          Func();
       }
    	}
    */
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_LC_AmountOnchange", e);
    }
}

function SYM_EPLC_MATURITY_DT_RESULT(MAT_DT) {
    try {
        document.MAINFORM.MATURITY_DT.value = MAT_DT;
        EEHtml.fireEvent(document.MAINFORM.MATURITY_DT, "onchange");
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_MATURITY_DT_RESULT", e);
    }
}

function SYM_EPLC_MPO_LIAB_ACNO() {
    try {
        if (document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION" || document.MAINFORM.OUR_ENG.value == "CONFIRMATION") {
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO, "M");
            SYT_ChangeFldClass(document.MAINFORM.LIAB_ACNO, "M");
            SYT_ChangeFldClass(document.MAINFORM.APPL_AC_MRGN_BTN, "M");
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO_BTN, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO, "P");
            SYT_ChangeFldClass(document.MAINFORM.LIAB_ACNO, "P");
            SYT_ChangeFldClass(document.MAINFORM.APPL_AC_MRGN_BTN, "P");
            SYT_ChangeFldClass(document.MAINFORM.ASSET_ACNO_BTN, "P");

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_MPO_LIAB_ACNO", e);
    }
}

function SYM_EPLC_MPO_NEW_BENE_CORR_MED() {
    try {
        var arr_FldClass_DEFAULT; // Utility Auto Fix Comments
        var arr_FldClass_EMAIL; // Utility Auto Fix Comments
        var arr_FldClass_FAX; // Utility Auto Fix Comments
        var arr_FldClass_MAIL; // Utility Auto Fix Comments
        arr_Fld = new Array(document.MAINFORM.NEW_BENE_EMAIL, document.MAINFORM.NEW_BENE_MAIL_ADD, document.MAINFORM.NEW_BENE_FAX);
        arr_FldClass_FAX = new Array("O", "O", "M");
        arr_FldClass_EMAIL = new Array("M", "O", "O");
        arr_FldClass_MAIL = new Array("O", "M", "O");
        arr_FldClass_DEFAULT = new Array("O", "O", "O");

        switch (document.MAINFORM.NEW_BENE_CORR_MED.value) {
            case "Fax":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_FAX);
                break;
            case "Mail":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_MAIL);
                break;
            case "Email":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_EMAIL);
                break;
            default:
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_DEFAULT);
                return;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_MPO_NEW_BENE_CORR_MED", e);
    }
}

function SYM_EPLC_MPO_REVOLVE_LC_INFO() {
    try {
        if (document.MAINFORM.REV_LC.value == 'YES') {

            SYT_ChangeFldClass(document.MAINFORM.EVERGREEN, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CUMULATIVE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.NO_PRD, 'M');
        } else {

            SYT_ChangeFldClass(document.MAINFORM.EVERGREEN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CUMULATIVE, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NO_PRD, 'P');
            //comment by jane for the logic for Revolving LC in advive part should be same
            //if(SYS_ORG_FUNCTION_SHORT_NAME =="AdvLCOneStep" ||SYS_ORG_FUNCTION_SHORT_NAME=="AdvLC"){
            document.MAINFORM.EVERGREEN.value = '';
            document.MAINFORM.NO_PRD.value = 0;
            document.MAINFORM.CUMULATIVE.value = '';
            //}
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_MPO_REVOLVE_LC_INFO", e);
    }
}

function SYM_EPLC_MSG() {
    try {
        if (document.MAINFORM.TEMP_CHAR1.value == document.MAINFORM.PRES_BK_REF.value) {
            alert('A drawing with this reference has already been made against this LC.');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_MSG", e);
    }
}

function SYM_EPLC_MT710_FIRST_ADVICE() {
    try {
        var sMESG_TYPE; // Utility Auto Fix Comments
        sMESG_TYPE = document.MAINFORM.MESG_TYPE.value;
        if (sMESG_TYPE == "MT710") {
            document.MAINFORM.OUR_ROLE.value = 'Advise Through Bank';
           document.MAINFORM.ADV_LC_BY.value="SWIFT to Beneficiary's Bank";
           EEHtml.fireEvent(document.MAINFORM.ADV_LC_BY, "onchange");
            //document.MAINFORM.ADV_LC_BY.value = "None";
        } else {
            document.MAINFORM.OUR_ROLE.value = 'Advising Bank';
            document.MAINFORM.ADV_LC_BY.value="Mail to beneficiary's Bank";
            EEHtml.fireEvent(document.MAINFORM.ADV_LC_BY, "onchange");
            //document.MAINFORM.ADV_LC_BY.value = "None";
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_MT710_FIRST_ADVICE", e);
    }
}

function SYM_EPLC_M_ADV_BK_CHGS_BENE(sPaidBy, sAdvChg) {
    try {
        if (sPaidBy == "L") {
            document.MAINFORM.ADV_BK_CHGS_BENE.value = SYS_BeFloat(sAdvChg);
        } else {
            document.MAINFORM.ADV_BK_CHGS_BENE.value = 0;
        }
        EEHtml.fireEvent(document.MAINFORM.ADV_BK_CHGS_BENE, "onchange");
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_ADV_BK_CHGS_BENE", e);
    }
}

function SYM_EPLC_M_ADV_BK_CHG_APPL(sPaidBy, sAdvChg) {
    try {
        if (sPaidBy == "L") {
            document.MAINFORM.ADV_BK_CHG_APPL.value = 0;
        } else {
            document.MAINFORM.ADV_BK_CHG_APPL.value = SYS_BeFloat(sAdvChg);
        }
        EEHtml.fireEvent(document.MAINFORM.ADV_BK_CHG_APPL, "onchange");
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_ADV_BK_CHG_APPL", e);
    }
}

function SYM_EPLC_M_AMD_BENE_ACNO() {
    try {
        var NEW_BENE_ACNO; // Utility Auto Fix Comments
        NEW_BENE_ACNO = document.MAINFORM.NEW_BENE_ACNO.value;
        if (document.MAINFORM.NEW_BENE_ACNO.value != "" && NEW_BENE_ACNO.substr(0, 1) != "/") {
            document.MAINFORM.NEW_BENE_ACNO.value = "/" + document.MAINFORM.NEW_BENE_ACNO.value;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_AMD_BENE_ACNO", e);
    }
}

function SYM_EPLC_M_AMT_TO_BENE_PRES_CCY() {
    try {
        var ADV_BK_CHGS_BENE; // Utility Auto Fix Comments
        var ASSIGN_DEDUCT_AMT; // Utility Auto Fix Comments
        var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
        var INT_AMT; // Utility Auto Fix Comments
        var NET_AMT_PD_BENE; // Utility Auto Fix Comments
        var TNSFR_DOCS_DEDUCT_AMT; // Utility Auto Fix Comments
        var sMark; // Utility Auto Fix Comments
        sMark = "";
        if (document.MAINFORM.FinanceEstablishment != null && document.MAINFORM.DISCNT_FLG != null) {
            sMark = (document.MAINFORM.DISCNT_FLG.value == "YES") ? "TAKEDOWN" : "NORMAL";
        } else {
            if (document.MAINFORM.FincSinglePayment != null && document.MAINFORM.DISCNT_FLG != null) {
                sMark = (document.MAINFORM.DISCNT_FLG.value == "YES") ? "REPAY" : "NORMAL";
            } else {
                sMark = "NORMAL";
            }
        }

        CFNC_N_AMT_LCCCY = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);

        NET_AMT_PD_BENE = SYS_BeFloat(document.MAINFORM.NET_AMT_PD_BENE.value);
        ADV_BK_CHGS_BENE = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS_BENE.value);
        TNSFR_DOCS_DEDUCT_AMT = SYS_BeFloat(document.MAINFORM.TNSFR_DOCS_DEDUCT_AMT.value);
        ASSIGN_DEDUCT_AMT = SYS_BeFloat(document.MAINFORM.ASSIGN_DEDUCT_AMT.value);
        INT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT.value);

        switch (sMark) {
            case "TAKEDOWN":

                document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = NET_AMT_PD_BENE - ADV_BK_CHGS_BENE - TNSFR_DOCS_DEDUCT_AMT - ASSIGN_DEDUCT_AMT - INT_AMT;
                break;
            case "REPAY":
                document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = CFNC_N_AMT_LCCCY + INT_AMT;
                break;
            default:
                document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = NET_AMT_PD_BENE - ADV_BK_CHGS_BENE - TNSFR_DOCS_DEDUCT_AMT - ASSIGN_DEDUCT_AMT;
        }
        EEHtml.fireEvent(document.MAINFORM.AMT_TO_BENE_PRES_CCY, "onchange");
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_AMT_TO_BENE_PRES_CCY", e);
    }
}

function SYM_EPLC_M_AVAL_WT_BK_OP() {
    try {
        var AVAL_WT_BK_OPT; // Utility Auto Fix Comments
        AVAL_WT_BK_OPT = document.MAINFORM.AVAL_WT_BK_OPT.value;

        switch (AVAL_WT_BK_OPT) {
            case 'Any Bank':
                document.MAINFORM.AVAL_WT_BK_NM.value = 'ANY BANK';
                document.MAINFORM.AVAL_WT_BK_ID.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD1.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD2.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD3.value = '';
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = '';
                document.MAINFORM.AVAL_WT_BK_NOTES.value = '';
                document.MAINFORM.AVAL_WT_BK_MAIL_ADD.value = '';
                break;
            case 'Issuing Bank':
                document.MAINFORM.AVAL_WT_BK_ID.value = document.MAINFORM.ISSUE_BK_ID.value;
                document.MAINFORM.AVAL_WT_BK_NM.value = document.MAINFORM.ISSUE_BK_NM.value;
                document.MAINFORM.AVAL_WT_BK_ADD1.value = document.MAINFORM.ISSUE_BK_ADD1.value;
                document.MAINFORM.AVAL_WT_BK_ADD2.value = document.MAINFORM.ISSUE_BK_ADD2.value;
                document.MAINFORM.AVAL_WT_BK_ADD3.value = document.MAINFORM.ISSUE_BK_ADD3.value;
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = document.MAINFORM.ISSUE_BK_SW_ADD.value;
                document.MAINFORM.AVAL_WT_BK_NOTES.value = document.MAINFORM.ISSUE_BK_NOTES.value;
                document.MAINFORM.AVAL_WT_BK_MAIL_ADD.value = document.MAINFORM.ISSUE_BK_MAIL_ADD.value;
                break;
            case 'Advising Bank':
                document.MAINFORM.AVAL_WT_BK_ID.value = document.MAINFORM.ADV_THU_BK_ID.value;
                document.MAINFORM.AVAL_WT_BK_NM.value = document.MAINFORM.ADV_THU_BK_NM.value;
                document.MAINFORM.AVAL_WT_BK_ADD1.value = document.MAINFORM.ADV_THU_BK_ADD1.value;
                document.MAINFORM.AVAL_WT_BK_ADD2.value = document.MAINFORM.ADV_THU_BK_ADD2.value;
                document.MAINFORM.AVAL_WT_BK_ADD3.value = document.MAINFORM.ADV_THU_BK_ADD3.value;
                document.MAINFORM.AVAL_WT_BK_MAIL_ADD.value = document.MAINFORM.ADV_THU_BK_MAIL_ADD.value;
                document.MAINFORM.AVAL_WT_BK_NOTES.value = document.MAINFORM.ADV_THU_BK_NOTES.value;
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = document.MAINFORM.ADV_THU_BK_SW_ADD.value;
                break;
            case 'Blank':
                document.MAINFORM.AVAL_WT_BK_ID.value = '';
                document.MAINFORM.AVAL_WT_BK_NM.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD1.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD2.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD3.value = '';
                document.MAINFORM.AVAL_WT_BK_NOTES.value = '';
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = '';
                document.MAINFORM.AVAL_WT_BK_MAIL_ADD.value = '';
                break;
            default:
                document.MAINFORM.AVAL_WT_BK_ID.value = '';
                document.MAINFORM.AVAL_WT_BK_NM.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD1.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD2.value = '';
                document.MAINFORM.AVAL_WT_BK_ADD3.value = '';
                document.MAINFORM.AVAL_WT_BK_NOTES.value = '';
                document.MAINFORM.AVAL_WT_BK_SW_ADD.value = '';
                document.MAINFORM.AVAL_WT_BK_MAIL_ADD.value = '';

        }

        EEHtml.fireEvent(document.MAINFORM.AVAL_WT_BK_SW_ADD, 'onchange');
        EEHtml.fireEvent(document.MAINFORM.AVAL_WT_BK_NM, 'onchange');
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_AVAL_WT_BK_OP", e);
    }
}

function SYM_EPLC_M_CALL_PRES_BENE(sDOC_PRES_BY) {
    try {
        if (sDOC_PRES_BY == "Beneficiary") {
            document.MAINFORM.PRES_BK_ID.value = document.MAINFORM.BENE_ID.value;
            document.MAINFORM.PRES_BK_NM.value = document.MAINFORM.BENE_NM.value;
            document.MAINFORM.PRES_BK_ADD1.value = document.MAINFORM.BENE_ADD1.value;
            document.MAINFORM.PRES_BK_ADD2.value = document.MAINFORM.BENE_ADD2.value;
            document.MAINFORM.PRES_BK_ADD3.value = document.MAINFORM.BENE_ADD3.value;
            document.MAINFORM.PRES_BK_MAIL_ADD.value = document.MAINFORM.BENE_MAIL_ADD.value;
            document.MAINFORM.PRES_BK_LANG.value = document.MAINFORM.BENE_LANG.value;
            document.MAINFORM.PRES_BK_CORR_MED.value = document.MAINFORM.BENE_CORR_MED.value;
            document.MAINFORM.PRES_BK_EMAIL.value = document.MAINFORM.BENE_EMAIL.value;
            document.MAINFORM.PRES_BK_FAX.value = document.MAINFORM.BENE_FAX.value;
            document.MAINFORM.PRES_BK_TLX.value = document.MAINFORM.BENE_TLX.value;
            document.MAINFORM.PRES_BK_AC_OFF_CODE.value = document.MAINFORM.BENE_AC_OFF_CODE.value;
            document.MAINFORM.PRES_BK_AC_NO.value = document.MAINFORM.BENE_ACNO.value;

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CALL_PRES_BENE", e);
    }
}

function SYM_EPLC_M_CAL_AVLB_LC_BAL() {
    try {
        var AVLB_LC_BAL; // Utility Auto Fix Comments
        var LC_BAL; // Utility Auto Fix Comments
        var PENDING_PRES_BAL; // Utility Auto Fix Comments
        //added by zoe 20090113
        LC_BAL = SYS_BeFloat(document.MAINFORM.LC_BAL_TEMP.value);
        PENDING_PRES_BAL = SYS_BeFloat(document.MAINFORM.PENDING_PRES_BAL.value);
        AVLB_LC_BAL = LC_BAL - PENDING_PRES_BAL;
        if (AVLB_LC_BAL < 0) {
            //alert('Please note that the Presentation Amount exceeds the Available LC Balance.');
            AVLB_LC_BAL = 0;
            document.MAINFORM.AVLB_LC_BAL.value = 0;
        } else {

            document.MAINFORM.AVLB_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, AVLB_LC_BAL);
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CAL_AVLB_LC_BAL", e);
    }
}

function SYM_EPLC_M_CAL_CONF_BAL() {
    try {
        var sSQLWhere; // Utility Auto Fix Comments
        if (document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION" || document.MAINFORM.OUR_ENG.value == "CONFIRMATION") {
            //sSQLWhere = "C_MAIN_REF ='" + document.MAINFORM.C_MAIN_REF.value + "'";
            SYS_GetTableDataByRule('SYM_EPLC_SYM_EPLC_M_CAL_CONF_BAL_2', '1');
            if (SYS_BeFloat(document.MAINFORM.CONF_BAL.value) == 0) {
                document.MAINFORM.CONF_BAL.value = document.MAINFORM.LC_BAL.value;
            }
        } else {
            document.MAINFORM.CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CAL_CONF_BAL", e);
    }
}

function SYM_EPLC_M_CAL_PENDING_PRES_BAL() {
    try {
        var OLD_PENDING_PRES_AMT; // Utility Auto Fix Comments
        var PENDING_PRES_BAL; // Utility Auto Fix Comments
        var PRES_AMT_LC_CCY; // Utility Auto Fix Comments
        //eddit by zoe 20090113
        OLD_PENDING_PRES_AMT = SYS_BeFloat(document.MAINFORM.TEMP_PENDING_PRES_BAL.value);
        PRES_AMT_LC_CCY = SYS_BeFloat(document.MAINFORM.PRES_AMT_LC_CCY.value);
        PENDING_PRES_BAL = OLD_PENDING_PRES_AMT + PRES_AMT_LC_CCY;
        document.MAINFORM.PENDING_PRES_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, PENDING_PRES_BAL);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CAL_PENDING_PRES_BAL", e);
    }
}

function SYM_EPLC_M_CAL_TTL_PRES_AMT() {
    try {
        var OLD_TTL_PRES_AMT; // Utility Auto Fix Comments
        var PRES_AMT_LC_CCY; // Utility Auto Fix Comments
        var TTL_PRES_AMT; // Utility Auto Fix Comments
        //eddit by zoe 20090113
        OLD_TTL_PRES_AMT = SYS_BeFloat(document.MAINFORM.TEMP_TTL_PRES_AMT.value);
        PRES_AMT_LC_CCY = SYS_BeFloat(document.MAINFORM.PRES_AMT_LC_CCY.value);
        TTL_PRES_AMT = OLD_TTL_PRES_AMT + PRES_AMT_LC_CCY;
        document.MAINFORM.TTL_PRES_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, TTL_PRES_AMT);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CAL_TTL_PRES_AMT", e);
    }
}

function SYM_EPLC_M_CHK_32B33B(oINC_AMT, oDEC_AMT) {
    try {
        if (SYS_BeFloat(oINC_AMT.value) > 0 && SYS_BeFloat(oDEC_AMT.value) > 0) {
            SYS_CheckError(oDEC_AMT, "You cannot enter both an Increase and a Decrease amount.");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_32B33B", e);
    }
}

function SYM_EPLC_M_CHK_BENE_ACNO() {
    try {
        var BENE_ACNO; // Utility Auto Fix Comments
        BENE_ACNO = document.MAINFORM.BENE_ACNO.value;
        if (document.MAINFORM.BENE_ACNO.value != "" && BENE_ACNO.substr(0, 1) != "/") {
            document.MAINFORM.BENE_ACNO.value = "/" + document.MAINFORM.BENE_ACNO.value;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_BENE_ACNO", e);
    }
}

function SYM_EPLC_M_CHK_EXPIRY_DT(oISSUE_DT, oEXPIRY_DT) {
    try {
        var nDays; // Utility Auto Fix Comments
        if (oISSUE_DT.value.length > 0 && oEXPIRY_DT.value.length > 0) {
            nDays = SYS_GetSubDays(oISSUE_DT.name, oEXPIRY_DT.name);
            if (nDays <= 0) {
                SYS_CheckError(oEXPIRY_DT, "Issue Date should be earlier than Expiry Date!");
                oISSUE_DT.value = "";
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_EXPIRY_DT", e);
    }
}

function SYM_EPLC_M_CHK_LTST_SHIP_DT(oLTST_SHIP_DT, oEXPIRY_DT) {
    try {
        var nDays; // Utility Auto Fix Comments
        if (oLTST_SHIP_DT.value.length > 0 && oEXPIRY_DT.value.length > 0) {
            nDays = SYS_GetSubDays(oLTST_SHIP_DT.name, oEXPIRY_DT.name);
            if (nDays < 0) {
                SYS_CheckError(oLTST_SHIP_DT, "The Latest Shipment Date must be equal to or less than the Expiry Date!");
                document.MAINFORM.LTST_SHIP_DT.value = '';
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_LTST_SHIP_DT", e);
    }
}

function SYM_EPLC_M_CHK_LTST_SHIP_DT_NEW(oNEW_LTST_SHIP_DT, oEXPIRY_DT) {
    try {
        var nDays; // Utility Auto Fix Comments
        if (oNEW_LTST_SHIP_DT.value.length > 0 && oEXPIRY_DT.value.length > 0) {
            nDays = SYS_GetSubDays(oNEW_LTST_SHIP_DT.name, oEXPIRY_DT.name);
            if (nDays < 0) {
                SYS_CheckError(oNEW_LTST_SHIP_DT, "The Latest Shipment Date must be equal to or less than the Expiry Date!");
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_LTST_SHIP_DT_NEW", e);
    }
}

function SYM_EPLC_M_CHK_LTST_SHIP_DT_OLD(oOLD_LTST_SHIP_DT, oEXPIRY_DT) {
    try {
        var nDays; // Utility Auto Fix Comments
        if (oOLD_LTST_SHIP_DT.value.length > 0 && oEXPIRY_DT.value.length > 0) {
            nDays = SYS_GetSubDays(oOLD_LTST_SHIP_DT.name, oEXPIRY_DT.name);
            if (nDays < 0) {
                SYS_CheckError(oOLD_LTST_SHIP_DT, "The Latest Shipment Date must be equal to or less than the Expiry Date!");
                return false;
            } else {
                return true;
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_LTST_SHIP_DT_OLD", e);
    }
}

function SYM_EPLC_M_CHK_PRE_ADV_DT() {
    try {
        var nDays; // Utility Auto Fix Comments
        nDays = SYS_GetSubDays(document.MAINFORM.PRE_ADV_DT.name, document.MAINFORM.TRX_DT.name);
        if (nDays > 0) {
            SYS_CheckError(document.MAINFORM.PRE_ADV_DT, "Pre Advise date should be later than today!");
            document.MAINFORM.PRE_ADV_DT.value = "";
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_PRE_ADV_DT", e);
    }
}

function SYM_EPLC_M_CHK_REV_LC(oREV_LC, oOUR_ENG) {
    try {
        if (oREV_LC.value == "YES" && (oOUR_ENG.value == "CONFIRMATION" || oOUR_ENG.value == "SILENT CONFIRMATION")) {
            alert("Please ensure that amount blocked is LC balance x (Revolving Times + 1).");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_REV_LC", e);
    }
}

function SYM_EPLC_M_CHK_SHP_PRD(oLTST_SHIP_DT, oSHIP_PRD) {
    try {
        if (oLTST_SHIP_DT.value.length > 0 && oSHIP_PRD.value.length > 0) {
            SYS_CheckError(oLTST_SHIP_DT, "You must not enter both a  Latest Shipment Date and Shipment Period!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_SHP_PRD", e);
    }
}

function SYM_EPLC_M_CHK_SHP_PRD_NEW(oNEW_LTST_SHIP_DT, oNEW_SHIP_PRD) {
    try {
        if (oNEW_LTST_SHIP_DT.value.length > 0 && oNEW_SHIP_PRD.value.length > 0) {
            SYS_CheckError(oNEW_LTST_SHIP_DT, "You must not enter both a  Latest Shipment Date and Shipment Period!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_SHP_PRD_NEW", e);
    }
}

function SYM_EPLC_M_CHK_SHP_PRD_OLD(oOLD_LTST_SHIP_DT, oOLD_SHIP_PRD) {
    try {
        if (oOLD_LTST_SHIP_DT.value.length > 0 && oOLD_SHIP_PRD.value.length > 0) {
            SYS_CheckError(oOLD_LTST_SHIP_DT, "You must not enter both a  Latest Shipment Date and Shipment Period!");
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_SHP_PRD_OLD", e);
    }
}

function SYM_EPLC_M_CHK_TEXTAREA(sTextArea) {
    try {
        var char1; // Utility Auto Fix Comments
        char1 = sTextArea.charAt(0);

        if (char1 == '/') {
            alert("You must not start a line of text with a /.");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_TEXTAREA", e);
    }
}

function SYM_EPLC_M_CHK_TRX_DT_EXP_DT() {
    try {
        var nDays; // Utility Auto Fix Comments
        nDays = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.EXPIRY_DT.name);
        if (nDays < 0) {
            SYS_CheckError(document.MAINFORM.EXPIRY_DT, "Expiry date should be later than today!");
            document.MAINFORM.EXPIRY_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_TRX_DT_EXP_DT", e);
    }
}

function SYM_EPLC_M_CHK_TRX_DT_ISSUE_DT() {
    try {
        var nDays; // Utility Auto Fix Comments
        nDays = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.ISSUE_DT.name);
        if (nDays <= 0) {
            SYS_CheckError(document.MAINFORM.ISSUE_DT, "Issue date should be later than today!");
            document.MAINFORM.ISSUE_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_TRX_DT_ISSUE_DT", e);
    }
}

function SYM_EPLC_M_CHK_TRX_DT_LTST_SHIP_DT() {
    try {
        var nDays; // Utility Auto Fix Comments
        nDays = SYS_GetSubDays(document.MAINFORM.TRX_DT.name, document.MAINFORM.LTST_SHIP_DT.name);
        if (nDays < 0) {
            SYS_CheckError(document.MAINFORM.LTST_SHIP_DT, "Latest shipment date should be later than today!");
            document.MAINFORM.LTST_SHIP_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_TRX_DT_LTST_SHIP_DT", e);
    }
}

function SYM_EPLC_M_CHK_TRX_DT_NEW_EXP_DT() {
    try {
        var nDays; // Utility Auto Fix Comments
        nDays = SYS_GetSubDays(document.MAINFORM.AMD_DT.name, document.MAINFORM.NEW_EXPIRY_DT.name);
        if (nDays <= 0) {
            SYS_CheckError(document.MAINFORM.NEW_EXPIRY_DT, "New expiry date should be later than today!");
            document.MAINFORM.NEW_EXPIRY_DT.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CHK_TRX_DT_NEW_EXP_DT", e);
    }
}

function SYM_EPLC_M_CLASS_42C42a(sDRAFTS_AT, sDRWE_NM) {
    try {
        if (sDRAFTS_AT != "") {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRWE_NM, "O");
        }
        if (sDRWE_NM != "") {
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.DRAFTS_AT, "O");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_42C42a", e);
    }
}

function SYM_EPLC_M_CLASS_AVAL_BY(sOUR_RULE, sADV_LC_BY) {
    try {
        if (sOUR_RULE == "Advise Through Bank" && sADV_LC_BY == "SWIFT to Beneficiary's Bank") {
            SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AVAL_BY, "O");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_AVAL_BY", e);
    }
}

function SYM_EPLC_M_CLASS_BY_39B(sAMT_SPEC) {
    try {
        if (sAMT_SPEC == "NOT EXCEEDING") {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, "B");
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, "B");

        } else {
            SYT_ChangeFldClass(document.MAINFORM.POS_TOL, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEG_TOL, "O");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_39B", e);
    }
}

function SYM_EPLC_M_CLASS_BY_40E(sAPLB_RULE) {
    try {
        if (sAPLB_RULE == "OTHR") {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, "H");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_40E", e);
    }
}

function SYM_EPLC_M_CLASS_BY_43P(sPARTIAL_SHIP) {
    try {
        if (sPARTIAL_SHIP == "CONDITIONAL") {
            SYT_ChangeFldClass_New('PARTIAL_SHIP_NARR', "M");
        } else {
            SYT_ChangeFldClass_New('PARTIAL_SHIP_NARR', "H");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_43P", e);
    }
}

function SYM_EPLC_M_CLASS_BY_43P_NEW(sPARTIAL_SHIP) {
    try {
        if (sPARTIAL_SHIP == "CONDITIONAL") {
            SYT_ChangeFldClass_New('NEW_PARTIAL_SHIP_NARR', "M");
        } else {
            SYT_ChangeFldClass_New('NEW_PARTIAL_SHIP_NARR', "H");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_43P_NEW", e);
    }
}

function SYM_EPLC_M_CLASS_BY_43P_OLD(sPARTIAL_SHIP) {
    try {
        if (sPARTIAL_SHIP == "CONDITIONAL") {
            SYT_ChangeFldClass_New('OLD_PARTIAL_SHIP_NARR', "M");
        } else {
            SYT_ChangeFldClass_New('OLD_PARTIAL_SHIP_NARR', "H");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_43P_OLD", e);
    }
}

function SYM_EPLC_M_CLASS_BY_43T(sTNSHIP) {
    try {
        if (sTNSHIP == "CONDITIONAL") {
            SYT_ChangeFldClass_New('TNSHIP_NARR', "M");
        } else {
            SYT_ChangeFldClass_New('TNSHIP_NARR', "H");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_43T", e);
    }
}

function SYM_EPLC_M_CLASS_BY_43T_NEW(sTNSHIP) {
    try {
        if (sTNSHIP == "CONDITIONAL") {
            SYT_ChangeFldClass_New('NEW_TNSHIP_NARR', "M");
        } else {
            SYT_ChangeFldClass_New('NEW_TNSHIP_NARR', "H");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_43T_NEW", e);
    }
}

function SYM_EPLC_M_CLASS_BY_43T_OLD(sTNSHIP) {
    try {
        if (sTNSHIP == "CONDITIONAL") {
            SYT_ChangeFldClass_New('OLD_TNSHIP_NARR', "M");
        } else {
            SYT_ChangeFldClass_New('OLD_TNSHIP_NARR', "H");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_43T_OLD", e);
    }
}

function SYM_EPLC_M_CLASS_BY_ADVBK_CHG() {
    try {
        var sADV_BK_CHGS; // Utility Auto Fix Comments
        sADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        var sADV_BK_CHGS_BENE = 0;
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept' || SYS_ORG_FUNCTION_NAME == 'EPLC_PayAcceptFrCE'||SYS_ORG_FUNCTION_NAME == 'EPLC_Discount' || SYS_ORG_FUNCTION_NAME == 'EPLC_PayAtMaturity'||SYS_ORG_FUNCTION_NAME == 'EPLC_SettlePartialPayment'||SYS_ORG_FUNCTION_NAME == 'EPLC_PaymentAtMaturityFrCE'){
        sADV_BK_CHGS_BENE = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS_BENE.value);        	
        }

        if (sADV_BK_CHGS > 0||sADV_BK_CHGS_BENE > 0) {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CHG_AC_NO, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.ADV_BK_CHG_AC_NO, "B");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_ADVBK_CHG", e);
    }
}

function SYM_EPLC_M_CLASS_BY_ADV_LC_BY(sADV_LC_BY) {
    try {
        var arr_Fld; // Utility Auto Fix Comments
        var arr_FldClass_A; // Utility Auto Fix Comments
        var arr_FldClass_B; // Utility Auto Fix Comments
        arr_Fld = new Array(document.MAINFORM.TRM_TO_BK_ID, document.MAINFORM.TRM_TO_BK_ID_BTN, document.MAINFORM.TRM_TO_BK_NM, document.MAINFORM.TRM_TO_BK_ADD1, document.MAINFORM.TRM_TO_BK_ADD2, document.MAINFORM.TRM_TO_BK_ADD3, document.MAINFORM.TRM_TO_BK_MAIL_ADD, document.MAINFORM.TRM_TO_BK_SW_TAG);
        arr_FldClass_A = new Array("O", "O", "O", "O", "O", "O", "O", "O");
        arr_FldClass_B = new Array("B", "B", "B", "B", "B", "B", "B", "B");

        if (sADV_LC_BY == "SWIFT to Beneficiary's Bank" || sADV_LC_BY == "Mail to beneficiary's Bank") {
            SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_A);
        } else {
            SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_B);
        }

        if (sADV_LC_BY == "SWIFT to Beneficiary's Bank") {
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_SW_ADD, "M");
            SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_40B, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_SW_ADD, "B");
            SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_40B, "P");
        }
        if (sADV_LC_BY == "Mail to beneficiary's Bank") {
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_MAIL_ADD, "M");

        } else {
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_MAIL_ADD, "B");

        }

        if (document.MAINFORM.TRM_TO_BK_ID.value != '') {
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD_BTN, "O");
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_POST_ADD_BTN, "O");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD_BTN, "P");
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_POST_ADD_BTN, "P");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_ADV_LC_BY", e);
    }
}

function SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED() {
    try {
        if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == 'Mail') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, "M");
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, "O");
        }
        if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == 'SWIFT') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, "M");
        }
        if (document.MAINFORM.ADV_THU_BK_CORR_MED.value == '') {
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_MAIL_ADD, "O");
            SYT_ChangeFldClass(document.MAINFORM.ADV_THU_BK_SW_ADD, "O");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_ADV_THU_BK_CORR_MED", e);
    }
}

function SYM_EPLC_M_CLASS_BY_AVAL_BY() {
    try {
        if (document.MAINFORM.AVAL_BY.value == "BY NEGOTIATION") {
            SYT_ChangeFldClass(document.MAINFORM.PMT_FLG, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PMT_FLG, "P");
        }

        if (document.MAINFORM.AVAL_BY.value == "BY PAYMENT" || document.MAINFORM.AVAL_BY.value == "BY MIXED PYMT") {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "P");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "P");
            SYT_ChangeFldClass(document.MAINFORM.MATURITY_DT, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "M");
            SYT_ChangeFldClass(document.MAINFORM.MATURITY_DT, "M");

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_AVAL_BY", e);
    }
}

function SYM_EPLC_M_CLASS_BY_BENE_CORR_MED() {
    try {
        var arr_Fld; // Utility Auto Fix Comments
        var arr_FldClass_DEFAULT; // Utility Auto Fix Comments
        var arr_FldClass_EMAIL; // Utility Auto Fix Comments
        var arr_FldClass_FAX; // Utility Auto Fix Comments
        var arr_FldClass_MAIL; // Utility Auto Fix Comments
        var arr_FldClass_TELEX; // Utility Auto Fix Comments
        arr_Fld = new Array(document.MAINFORM.BENE_FAX, document.MAINFORM.BENE_EMAIL, document.MAINFORM.BENE_TLX, document.MAINFORM.BENE_MAIL_ADD);
        arr_FldClass_FAX = new Array("M", "O", "O", "O");
        arr_FldClass_EMAIL = new Array("O", "M", "O", "O");
        arr_FldClass_TELEX = new Array("O", "O", "M", "O");
        arr_FldClass_MAIL = new Array("O", "O", "O", "M");
        arr_FldClass_DEFAULT = new Array("O", "O", "O", "O");

        switch (document.MAINFORM.BENE_CORR_MED.value) {
            case "Fax":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_FAX);
                break;
            case "Mail":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_MAIL);
                break;
            case "Email":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_EMAIL);
                break;
            case "Telex":
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_TELEX);
                break;
            default:
                SYT_ChangeFldStringClass(arr_Fld, arr_FldClass_DEFAULT);
                return;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_BENE_CORR_MED", e);
    }
}

function SYM_EPLC_M_CLASS_BY_DOCPRES(sDOC_PRES_BY) {
    try {
        if (sDOC_PRES_BY == 'Beneficiary') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_TAG, 'B');
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'B');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_TAG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'M');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_DOCPRES", e);
    }
}

function SYM_EPLC_M_CLASS_BY_MESG_TYPE(sMESG_TYPE) {
    try {
        if (sMESG_TYPE == "MT710" || sMESG_TYPE == "MT720") {
            SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_40B, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_40B, "B");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_MESG_TYPE", e);
    }
}

function SYM_EPLC_M_CLASS_BY_MT734(sADV_PRES_BY) {
    try {
        if (sADV_PRES_BY == 'MT734') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_NM_MT734, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_ADD1_MT734, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_ADD2_MT734, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_ADD3_MT734, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_SW_ADD_MT734, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_NM_MT734, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD1_MT734, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD2_MT734, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD3_MT734, 'O');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_SW_ADD_MT734, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DISC_DET_MT734, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DISC_DOC_MT734, 'M');
            SYT_ChangeFldClass(document.MAINFORM.DISC_DET, 'M');
        } else if (sADV_PRES_BY == 'MT999') {
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_NM_MT734, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_ADD1_MT734, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_ADD2_MT734, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_ADD3_MT734, 'M');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_SW_ADD_MT734, 'M');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_NM_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD1_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD2_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD3_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_SW_ADD_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DISC_DET_MT734, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DISC_DOC_MT734, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DISC_DET, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_NM_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_ADD1_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_ADD2_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_ADD3_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.RCV_BK_SW_ADD_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_NM_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD1_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD2_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_ADD3_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.AC_WT_BK_SW_ADD_MT734, 'P');
            SYT_ChangeFldClass(document.MAINFORM.DISC_DET_MT734, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DISC_DOC_MT734, 'O');
            SYT_ChangeFldClass(document.MAINFORM.DISC_DET, 'O');
        }

        if (sADV_PRES_BY == 'MAIL') {
            SYT_ChangeFldClass(document.MAINFORM.MAIL_ADV, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.MAIL_ADV, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_MT734", e);
    }
}

function SYM_EPLC_M_CLASS_BY_NEW_39B(sNEW_AMT_SPEC) {
    try {
        if (sNEW_AMT_SPEC == "NOT EXCEEDING") {
            SYT_ChangeFldClass(document.MAINFORM.NEW_POS_TOL, "B");
            SYT_ChangeFldClass(document.MAINFORM.NEW_NEG_TOL, "B");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.NEW_POS_TOL, "O");
            SYT_ChangeFldClass(document.MAINFORM.NEW_NEG_TOL, "O");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_NEW_39B", e);
    }
}

function SYM_EPLC_M_CLASS_BY_OUR_ENG(sOUR_ENG) {
    try {
        if (sOUR_ENG == "SILENT CONFIRMATION") {
            SYT_ChangeFldClass(document.MAINFORM.CONTRACT_FLAG, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CONTRACT_FLAG, "B"); // Utility Auto Fix Comments
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_OUR_ENG", e);
    }
}

function SYM_EPLC_M_CLASS_BY_PMT_FLG() {
    try {
        if (document.MAINFORM.PMT_FLG.value == "SIGHT" || document.MAINFORM.PMT_FLG.value == "MIX PAY") {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "B");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "B");
            SYT_ChangeFldClass(document.MAINFORM.MATURITY_DT, "B");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "M");
            SYT_ChangeFldClass(document.MAINFORM.MATURITY_DT, "M");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_PMT_FLG", e);
    }
}

function SYM_EPLC_M_CLASS_BY_TENOR_TYPE(sTENOR_TYPE) {
    try {
        if (sTENOR_TYPE == "OTHER") {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE_NARR, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE_NARR, "B");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE_NARR, "H");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_BY_TENOR_TYPE", e);
    }
}

function SYM_EPLC_M_CLASS_ISSUE_BK_CHG_CCY() {
    try {
        /*  
        if(SYS_BeFloat(document.MAINFORM.TEMP_OLD_ISSUE_BK_CHG.value)>0){
        	SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_CHG_CCY,"P");
        }else{
        	SYT_ChangeFldClass(document.MAINFORM.ISSUE_BK_CHG_CCY,"O");
        }
        */
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_ISSUE_BK_CHG_CCY", e);
    }
}

function SYM_EPLC_M_CLASS_TNSFR_DOCS_DEDUCT_AMT() {
    try {
        var sM_CLASS_ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var sM_CLASS_ADV_BK_CHGS; // Utility Auto Fix Comments
        var sM_CLASS_PRES_BK_CHGS; // Utility Auto Fix Comments
        var sM_CLASS_TNSFR_DOCS_DEDUCT_AMT; // Utility Auto Fix Comments
        sM_CLASS_TNSFR_DOCS_DEDUCT_AMT = SYS_BeFloat(document.MAINFORM.TNSFR_DOCS_DEDUCT_AMT.value);
        sM_CLASS_ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        sM_CLASS_PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        sM_CLASS_ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        var sM_CLASS_ADV_BK_CHGS_BENE = 0;
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept' || SYS_ORG_FUNCTION_NAME == 'EPLC_PayAcceptFrCE'||SYS_ORG_FUNCTION_NAME == 'EPLC_Discount' || SYS_ORG_FUNCTION_NAME == 'EPLC_PayAtMaturity'||SYS_ORG_FUNCTION_NAME == 'EPLC_SettlePartialPayment'||SYS_ORG_FUNCTION_NAME == 'EPLC_PaymentAtMaturityFrCE'){
        sM_CLASS_ADV_BK_CHGS_BENE = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS_BENE.value);        	
        }

        if (sM_CLASS_TNSFR_DOCS_DEDUCT_AMT > 0) {
            SYT_ChangeFldClass(document.MAINFORM.TNSFR_DOCS_AC_NO, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TNSFR_DOCS_AC_NO, "H");
        }

        if (sM_CLASS_ADV_BK_CHGS > 0||sM_CLASS_ADV_BK_CHGS_BENE >0) {
            SYT_ChangeFldClass_New('ADV_BK_CHG_AC_NO', 'M');
        } else {
            SYT_ChangeFldClass_New('ADV_BK_CHG_AC_NO', 'H');
        }

        if (sM_CLASS_PRES_BK_CHGS > 0) {
            SYT_ChangeFldClass_New('AC_BK_AC_NO', 'M');
        } else {
            SYT_ChangeFldClass_New('AC_BK_AC_NO', 'H');
        }

        if (sM_CLASS_ADDIT_PRES_BK_AMTS > 0) {
            SYT_ChangeFldClass_New('CUST_AC_NO', 'M');
        } else {
            SYT_ChangeFldClass_New('CUST_AC_NO', 'H');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_TNSFR_DOCS_DEDUCT_AMT", e);
    }
}

function SYM_EPLC_M_CLASS_TRM_TO_BK() {
    try {
        if (document.MAINFORM.ADV_LC_BY.value == "SWIFT to Beneficiary's Bank") {
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ID_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_MAIL_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_SW_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_40B, 'P');
        }
        if (document.MAINFORM.ADV_LC_BY.value == "Mail to beneficiary's Bank") {
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ID_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_NM, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD1, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD2, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD3, 'O');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_MAIL_ADD, 'M');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_SW_ADD, 'O');
            SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_40B, 'P');
        }
        if (document.MAINFORM.ADV_LC_BY.value == "None" || document.MAINFORM.ADV_LC_BY.value == "Mail to Beneficiary" || document.MAINFORM.ADV_LC_BY.value == "e-mail to beneficiary" || document.MAINFORM.ADV_LC_BY.value == "fax to beneficiary") {
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ID, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ID_BTN, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_NM, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD1, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD2, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD3, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_MAIL_ADD, 'B');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_SW_ADD, 'B');
            SYT_ChangeFldClass(document.MAINFORM.FORM_OF_LC_40B, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_ADD_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.TRM_TO_BK_POST_ADD_BTN, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_CLASS_TRM_TO_BK", e);
    }
}

function SYM_EPLC_M_DETRMNTL_FLG(oDEC_AMT, oOLD_EXPIRY_DT, oNEW_EXPIRY_DT) {
    try {
        var nDays; // Utility Auto Fix Comments
        nDays = SYS_GetSubDays(oNEW_EXPIRY_DT.name, oOLD_EXPIRY_DT.name);

        if (SYS_BeFloat(oDEC_AMT.value) > 0 || nDays > 0) {
            document.MAINFORM.DETRMNTL_FLG.value = "YES";
            document.MAINFORM.CONF_ADDED.value = 'NO'; 
            SYT_ChangeFldClass(document.MAINFORM.CONF_ADDED, 'P'); 
        } else {
            document.MAINFORM.DETRMNTL_FLG.value = "NO";
        }
        EEHtml.fireEvent(document.MAINFORM.DETRMNTL_FLG, "onchange");
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_DETRMNTL_FLG", e);
    }
}

function SYM_EPLC_M_DOCUMENTS_BY_FUNCTION() {
    try {
        var arr_Fld; // Utility Auto Fix Comments
        var arr_FldClassA; // Utility Auto Fix Comments
        var arr_FldClassB; // Utility Auto Fix Comments
        var sMARK; // Utility Auto Fix Comments
        sMARK = SYT_FUNC_SHORT_NAME();
        arr_Fld = new Array(document.MAINFORM.DRAFT, document.MAINFORM.INVOICE, document.MAINFORM.BL_AWB, document.MAINFORM.CERTIFICATE, document.MAINFORM.INSP_CERT, document.MAINFORM.PACK_LIST, document.MAINFORM.INSURANCE, document.MAINFORM.VESSEL_CERT, document.MAINFORM.BENEF_CERT, document.MAINFORM.OTHERS);
        arr_FldClassA = new Array("O", "O", "O", "O", "O", "O", "O", "O", "O", "O");
        arr_FldClassB = new Array("P", "P", "P", "P", "P", "P", "P", "P", "P", "P");
        if (sMARK == "RegisterDocsEE" || sMARK == "RegisterDocs" || sMARK == "CheckDocs" || sMARK == "SendDocs" || sMARK == "RegClaim") {

            SYT_ChangeFldStringClass(arr_Fld, arr_FldClassA);

        } else {
            SYT_ChangeFldStringClass(arr_Fld, arr_FldClassB);

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_DOCUMENTS_BY_FUNCTION", e);
    }
}

function SYM_EPLC_M_EPLC_COURIER_CHG(nTimes) {
    try {
        var sFromCode; // Utility Auto Fix Comments
        var sToCode; // Utility Auto Fix Comments
        sFromCode = null;
        sToCode = null;

        Chg.calculate(["EPLC_COURIER_CHG"], null, null, null, null, sFromCode, sToCode, null, nTimes, null);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_EPLC_COURIER_CHG", e);
    }
}

function SYM_EPLC_M_EPLC_OTHER_CHG() {
    try {
        Chg.calculate(["EPLC_OTHER_CHG"], document.MAINFORM.LC_CCY.value);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_EPLC_OTHER_CHG", e);
    }
}

function SYM_EPLC_M_EPLC_POST_CHG(nTimes) {
    try {
        var sFromCode; // Utility Auto Fix Comments
        var sToCode; // Utility Auto Fix Comments
        sFromCode = null;
        sToCode = null;

        Chg.calculate(["EPLC_POST_CHG"], null, null, null, null, sFromCode, sToCode, null, nTimes, null);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_EPLC_POST_CHG", e);
    }
}

function SYM_EPLC_M_EPLC_SWIFT_CHG(nTimes) {
    try {
        Chg.calculate(["EPLC_SWIFT_CHG"], null, null, null, null, null, null, null, nTimes, null);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_EPLC_SWIFT_CHG", e);
    }
}

function SYM_EPLC_M_GET_EXHANGE_RT(FROM_CCY) {
    try {
        var PRES_CCY; // Utility Auto Fix Comments
        PRES_CCY = document.MAINFORM.PRES_CCY.value;

        if (FROM_CCY != PRES_CCY) {
            SYS_GetExchangeRate_S(FROM_CCY, PRES_CCY, 'Booking Rate', document.MAINFORM.TEMP_RATE.name);
        } else {
            document.MAINFORM.TEMP_RATE.value = 1;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_GET_EXHANGE_RT", e);
    }
}

function SYM_EPLC_M_ISSUE_BK_CHG(sTEMP_ISSUE_BK_CHG) {
    try {
        var CHG; // Utility Auto Fix Comments
        var OLD_CHG; // Utility Auto Fix Comments
        OLD_CHG = SYS_BeFloat(document.MAINFORM.TEMP_OLD_ISSUE_BK_CHG.value);
        CHG = SYS_BeFloat(sTEMP_ISSUE_BK_CHG);

        document.MAINFORM.ISSUE_BK_CHG.value = OLD_CHG + CHG;
        EEHtml.fireEvent(document.MAINFORM.ISSUE_BK_CHG, "onchange");
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_ISSUE_BK_CHG", e);
    }
}

function SYM_EPLC_M_MPO_APLB_RULE_NARR(sAPLB_RULE) {
    try {
        if (sAPLB_RULE == "OTHR") {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.APLB_RULE_NARR, "H");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_MPO_APLB_RULE_NARR", e);
    }
}

function SYM_EPLC_M_MPO_BY_TENOR_TYPE(sTENOR_TYPE) {
    try {
        if (sTENOR_TYPE == "OTHER") {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE_NARR, "P");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_TYPE_NARR, "H");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_MPO_BY_TENOR_TYPE", e);
    }
}

function SYM_EPLC_M_MPO_CONF_BAL() {
    try {
        if (document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION" || document.MAINFORM.OUR_ENG.value == "CONFIRMATION") {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BAL, "P");
            SYT_ChangeFldClass(document.MAINFORM.CONF_PCT, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CONF_BAL, "P");
            SYT_ChangeFldClass(document.MAINFORM.CONF_PCT, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_MPO_CONF_BAL", e);
    }
}

function SYM_EPLC_M_MPO_PRES_REF(vDocPresBy) {
    try {
        if (vDocPresBy == 'Beneficiary') {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_REF, 'O');
            SYT_hideObj("PRES_BK_REF");
            SYT_DisObj("PRES_BENE_REF");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BENE_REF, 'M');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.PRES_BENE_REF, 'O');
            SYT_hideObj("PRES_BENE_REF");
            SYT_DisObj("PRES_BK_REF");
            SYT_ChangeFldClass(document.MAINFORM.PRES_BK_REF, 'M');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_MPO_PRES_REF", e);
    }
}

function SYM_EPLC_M_NEGO_CLASS_BY_AVAL_BY() {
    try {
        if (document.MAINFORM.AVAL_BY.value == "BY PAYMENT" || document.MAINFORM.AVAL_BY.value == "BY MIXED PYMT") {
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "B");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "B"); // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.MATURITY_DT, "B"); // Utility Auto Fix Comments

        } else {
            SYT_ChangeFldClass(document.MAINFORM.MATURITY_DT, "M");
            SYT_ChangeFldClass(document.MAINFORM.TENOR_DAYS, "M"); // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.TENOR_START_DT, "M"); // Utility Auto Fix Comments

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_NEGO_CLASS_BY_AVAL_BY", e);
    }
}

function SYM_EPLC_M_NEW_CONF_BAL(sNEW_LC_BAL, sOUR_ENG) {
    try {
        var nCONF_PCT; // Utility Auto Fix Comments
        var nNEW_CONF_BAL; // Utility Auto Fix Comments
        var nNEW_LC_BAL; // Utility Auto Fix Comments
        var nNEW_LIAB_BAL; // Utility Auto Fix Comments
        var nNO_PRD; // Utility Auto Fix Comments
        var nOLD_LC_BAL; // Utility Auto Fix Comments
        if (document.MAINFORM.OUR_ENG.value == "CONFIRMATION" || document.MAINFORM.OUR_ENG.value == "SILENT CONFIRMATION") {
            if (document.MAINFORM.CONF_PCT.value <= 0) {
                document.MAINFORM.CONF_PCT.value = 100;
            }
            nCONF_PCT = SYS_BeFloat(document.MAINFORM.CONF_PCT.value);
            nNEW_LC_BAL = SYS_BeFloat(document.MAINFORM.NEW_LC_BAL.value);
            nOLD_LC_BAL = SYS_BeFloat(document.MAINFORM.OLD_LC_BAL.value);
            nNO_PRD = SYS_BeInt(document.MAINFORM.NO_PRD.value) + 1;

            if (document.MAINFORM.CONF_ADDED.value == 'YES' && (SYS_BeFloat(document.MAINFORM.INC_AMT.value) > 0)) {
                if (document.MAINFORM.REV_LC.value == 'YES') {
                    if (document.MAINFORM.CUMULATIVE.value == 'Cumulative' || document.MAINFORM.EVERGREEN.value == 'YES') {
                        nNEW_CONF_BAL = SYS_BeFloat((nNEW_LC_BAL * nCONF_PCT) / 100 * nNO_PRD);
                        document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                        document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                    }
                    if (document.MAINFORM.CUMULATIVE.value == 'Non Cumulative' && document.MAINFORM.EVERGREEN.value == 'NO') {
                        nNEW_CONF_BAL = SYS_BeFloat((nNEW_LC_BAL * nCONF_PCT) / 100);
                        nNEW_LIAB_BAL = SYS_BeFloat((nNEW_LC_BAL * nCONF_PCT) / 100 * nNO_PRD);
                        document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                        document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_LIAB_BAL);
                    }
                } else {
                    nNEW_CONF_BAL = SYS_BeFloat((nNEW_LC_BAL * nCONF_PCT) / 100);
                    document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                    document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                }

            } else {
                if (document.MAINFORM.REV_LC.value == 'YES') {
                    if (document.MAINFORM.CUMULATIVE.value == 'Cumulative' || document.MAINFORM.EVERGREEN.value == 'YES') {
                        nNEW_CONF_BAL = SYS_BeFloat((nOLD_LC_BAL * nCONF_PCT) / 100 * nNO_PRD);
                        document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                        document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                    }
                    if (document.MAINFORM.CUMULATIVE.value == 'Non Cumulative' && document.MAINFORM.EVERGREEN.value == 'NO') {
                        nNEW_CONF_BAL = SYS_BeFloat((nOLD_LC_BAL * nCONF_PCT) / 100);
                        nNEW_LIAB_BAL = SYS_BeFloat((nOLD_LC_BAL * nCONF_PCT) / 100 * nNO_PRD);
                        document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                        document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_LIAB_BAL);
                    }
                } else {
                    nNEW_CONF_BAL = SYS_BeFloat((nOLD_LC_BAL * nCONF_PCT) / 100);
                    document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                    document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, nNEW_CONF_BAL);
                }
            }

            SYT_ChangeFldClass(document.MAINFORM.NEW_CONF_BAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_LIAB_BAL, 'P');

            if (SYS_ORG_FUNCTION_SHORT_NAME == "BeneAmdResponse" || SYS_ORG_FUNCTION_SHORT_NAME == "AdvAmd" || SYS_ORG_FUNCTION_SHORT_NAME == "RegAmd" || SYS_ORG_FUNCTION_SHORT_NAME == "AmdOneStep") {
                SYT_ChangeFldClass(document.MAINFORM.CONF_PCT, 'P');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.CONF_PCT, 'M');
            }
        } else {
            document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
            document.MAINFORM.CONF_PCT.value = 0;
            document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
            SYT_ChangeFldClass(document.MAINFORM.NEW_CONF_BAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.NEW_LIAB_BAL, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_PCT, 'P');
        }
        if (document.MAINFORM.INC_AMT.value == 0 && document.MAINFORM.DEC_AMT.value == 0) {
            document.MAINFORM.NEW_CONF_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
            document.MAINFORM.NEW_LIAB_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, 0);
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_NEW_CONF_BAL", e);
    }
}

function SYM_EPLC_M_NEW_LC_AMT(sOLD_LC_AMT, sINC_AMT, sDEC_AMT) {
    try {
        var DEC_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var NEW_LC_AMT; // Utility Auto Fix Comments
        var OLD_LC_AMT; // Utility Auto Fix Comments
        OLD_LC_AMT = SYS_BeFloat(sOLD_LC_AMT);
        INC_AMT = SYS_BeFloat(sINC_AMT);
        DEC_AMT = SYS_BeFloat(sDEC_AMT);


        if (INC_AMT == 0 && DEC_AMT == 0) {
            OLD_LC_AMT = 0;
        }
        NEW_LC_AMT = OLD_LC_AMT + INC_AMT - DEC_AMT;
        document.MAINFORM.NEW_LC_AMT.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_AMT);
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_AMT, "onchange");
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_NEW_LC_AMT", e);
    }
}

function SYM_EPLC_M_NEW_LC_BAL(sOLD_LC_AMT, sTTL_PRES_AMT, sINC_AMT, sDEC_AMT, sNEW_POS_TOL) {
    try {
        var DEC_AMT; // Utility Auto Fix Comments
        var INC_AMT; // Utility Auto Fix Comments
        var NEW_LC_BAL; // Utility Auto Fix Comments
        var nOld; // Utility Auto Fix Comments
        nOld = Math.max(0, SYS_BeFloat(sOLD_LC_AMT) - SYS_BeFloat(sTTL_PRES_AMT));
        INC_AMT = SYS_BeFloat(sINC_AMT);
        DEC_AMT = SYS_BeFloat(sDEC_AMT);

        NEW_LC_BAL = (nOld + INC_AMT - DEC_AMT) * (1 + SYS_BeFloat(sNEW_POS_TOL) / 100);
        document.MAINFORM.NEW_LC_BAL.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, NEW_LC_BAL);
        EEHtml.fireEvent(document.MAINFORM.NEW_LC_BAL, "onchange");
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_NEW_LC_BAL", e);
    }
}

function SYM_EPLC_M_PARTY_ID(oPARTY_ID) {
    try {
        if (oPARTY_ID.value != "" && oPARTY_ID.value.substr(0, 1) != "/") {
            oPARTY_ID.value = "/" + oPARTY_ID.value;
            if (oPARTY_ID.value.length > 35) {
                SYS_CheckError(oPARTY_ID, "The max length for this field is 35!");
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_PARTY_ID", e);
    }
}

function SYM_EPLC_M_PARTY_TAG(oPARTY_TAG) {
    try {
        if (oPARTY_TAG.value != "" && oPARTY_TAG.value.substr(0, 1) != "/") {
            oPARTY_TAG.value = "/" + oPARTY_TAG.value;
            if (oPARTY_TAG.value.length > 2) {
                SYS_CheckError(oPARTY_TAG, "The max length for this field is 2!");
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_PARTY_TAG", e);
    }
}

function SYM_EPLC_M_PRES_BK_CLS() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ID, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_NM, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD1, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD2, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD3, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ADD_BTN, "P");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_CORR_MED, "M");
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_LANG, 'M');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_AC_OFF_CODE, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_ID_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_POST_ADD_BTN, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_REF, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_SW_ADD, 'P');
        SYT_ChangeFldClass(document.MAINFORM.PRES_BK_MAIL_ADD, 'P');
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_PRES_BK_CLS", e);
    }
}

function SYM_EPLC_M_STP_BANK_LOOKUP(oFld) {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sBKAdd1; // Utility Auto Fix Comments
        var sBKAdd2; // Utility Auto Fix Comments
        var sBKAdd3; // Utility Auto Fix Comments
        var sBKBIC; // Utility Auto Fix Comments
        var sBKID; // Utility Auto Fix Comments
        var sBKName; // Utility Auto Fix Comments
        var sFldName; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        //add by zoe on 08.11.25 for bank lookup INQ_CUBK in STP parties
        sFldName = oFld.name;
        if (sFldName.indexOf("ID_BTN") == -1) { // Utility Auto Fix Comments
            return; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments

        sql = "1=1";
        sBKID = sFldName.replace("ID_BTN", "ID");
        sBKName = sFldName.replace("ID_BTN", "NM");
        sBKAdd1 = sFldName.replace("ID_BTN", "ADD1");
        sBKAdd2 = sFldName.replace("ID_BTN", "ADD2");
        sBKAdd3 = sFldName.replace("ID_BTN", "ADD3");
        sBKBIC = sFldName.replace("ID_BTN", "SW_ADD");
        temp = "";
        if (MAINFORM.elements[sBKName].value != "") {
            if (MAINFORM.elements[sBKName].value.length >= 5) {
                temp = MAINFORM.elements[sBKName].value.substr(0, 5);
            } else {
                temp = MAINFORM.elements[sBKName].value;
            }
            sql += " AND upper(PARTY_NM) like '%" + temp.toUpperCase() + "%'";
        }

        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
            if (retvalue) {
                SYS_InqCUBK(sBKID);
            }
        }
        /*else {
            SYS_InqCUBK_Sql(sBKID, sql);
        }*/
        else if (sBKID == 'ADV_THU_BK_ID_BTN') {
            SYS_InqCUBK_byCondition('ADV_THU_BK_ID', '2');
        } else if (sBKID == 'AVAL_WT_BK_ID_BTN') {
            SYS_InqCUBK_byCondition('AVAL_WT_BK_ID', '2');
        } else if (sBKID == 'DRWE_ID_BTN') {
            SYS_InqCUBK_byCondition('DRWE_ID', '2');
        } else if (sBKID == 'REIM_BK_ID_BTN') {
            SYS_InqCUBK_byCondition('REIM_BK_ID', '2');
        } else if (sBKID == 'APPL_BK_ID_BTN') {
            SYS_InqCUBK_byCondition('APPL_BK_ID', '2');
        } else if (sBKID == 'ISSUE_BK_52_ID_BTN') {
            SYS_InqCUBK_byCondition('ISSUE_BK_52_ID', '2');
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_STP_BANK_LOOKUP", e);
    }
}

function SYM_EPLC_M_STP_CUST_LOOKUP(oFld) {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sCUSTAdd1; // Utility Auto Fix Comments
        var sCUSTAdd2; // Utility Auto Fix Comments
        var sCUSTAdd3; // Utility Auto Fix Comments
        var sCUSTID; // Utility Auto Fix Comments
        var sCUSTName; // Utility Auto Fix Comments
        var sFldName; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        sFldName = oFld.name;
        if (sFldName.indexOf("ID_BTN") == -1) { // Utility Auto Fix Comments
            return; // Utility Auto Fix Comments
        } // Utility Auto Fix Comments

        sql = "1=1";
        sCUSTID = sFldName.replace("ID_BTN", "ID");
        sCUSTName = sFldName.replace("ID_BTN", "NM");
        sCUSTAdd1 = sFldName.replace("ID_BTN", "ADD1");
        sCUSTAdd2 = sFldName.replace("ID_BTN", "ADD2");
        sCUSTAdd3 = sFldName.replace("ID_BTN", "ADD3");
        temp = "";
        if (MAINFORM.elements[sCUSTName].value != "") {
            if (MAINFORM.elements[sCUSTName].value.length >= 5) {
                temp = MAINFORM.elements[sCUSTName].value.substr(0, 5);
            } else {
                temp = MAINFORM.elements[sCUSTName].value;
            }
            sql += " AND upper(PARTY_NM) like '%" + temp.toUpperCase() + "%'";
        }

        if (sql == "1=1") {
            retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUCUST");
            if (retvalue) {
                SYS_InqCUBK(sCUSTID);
            }
        }
        /*else {
            SYS_InqCUBK_Sql(sCUSTID, sql);
        }*/
        else if (sFldName == 'APPL_ID_BTN') {
            SYS_InqCUBK_byCondition('APPL_ID', '1');
        } else if (sFldName == 'BENE_ID_BTN') {
            SYS_InqCUBK_byCondition('BENE_ID', '1');
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_STP_CUST_LOOKUP", e);
    }
}

function SYM_EPLC_M_SW_TAG(arr_BIC) {
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
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_SW_TAG", e);
    }
}

function SYM_EPLC_M_TAG41D_MAP() {
    try {
        if (document.MAINFORM.AVAL_WT_BK_SW_TAG.value == "" && document.MAINFORM.AVAL_WT_BK_NM.value != "" && document.MAINFORM.TRM_TO_BK_SW_ADD.value != "") {
            document.MAINFORM.AVAL_WT_BK_SW_TAG.value = "D";
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_TAG41D_MAP", e);
    }
}

function SYM_EPLC_M_TOL_TAG39() {
    try {
        var NEG_TOL; // Utility Auto Fix Comments
        var POS_TOL; // Utility Auto Fix Comments
        var TEMP_TAG_39A; // Utility Auto Fix Comments
        POS_TOL = document.MAINFORM.POS_TOL.value;
        NEG_TOL = document.MAINFORM.NEG_TOL.value;
        TEMP_TAG_39A = POS_TOL + "/" + NEG_TOL;
        if (TEMP_TAG_39A != "0/0") {
            document.MAINFORM.TEMP_TAG_39A.value = TEMP_TAG_39A;
        } else {
            document.MAINFORM.TEMP_TAG_39A.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_TOL_TAG39", e);
    }
}

function SYM_EPLC_M_TTL_STL_AMT_RCV() {
    try {
        var ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var ADV_BK_CHG_APPL; // Utility Auto Fix Comments
        var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
        var CHGS_DEDUCTED; // Utility Auto Fix Comments
        var INT_AMT; // Utility Auto Fix Comments
        var ISSUE_BK_CHG; // Utility Auto Fix Comments
        var OUR_CHGS_APPL; // Utility Auto Fix Comments
        var PRES_BK_CHGS; // Utility Auto Fix Comments
        var REIM_BK_CHG; // Utility Auto Fix Comments
        var STL_AMT; // Utility Auto Fix Comments
        var sMark; // Utility Auto Fix Comments
        sMark = "";
        if (document.MAINFORM.FinanceEstablishment != null && document.MAINFORM.DISCNT_FLG != null && document.MAINFORM.PMT_FLG != null) {
            sMark = (document.MAINFORM.DISCNT_FLG.value == "YES") ? "TAKEDOWN" : "NORMAL";
        } else {
            if (document.MAINFORM.FincSinglePayment != null && document.MAINFORM.DISCNT_FLG != null) {
                sMark = (document.MAINFORM.DISCNT_FLG.value == "YES") ? "REPAY" : "NORMAL";
            } else {
                sMark = "NORMAL";
            }
        }

        CFNC_N_AMT_LCCCY = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);

        STL_AMT = SYS_BeFloat(document.MAINFORM.STL_AMT.value);
        ADV_BK_CHG_APPL = SYS_BeFloat(document.MAINFORM.ADV_BK_CHG_APPL.value);
        ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        OUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
        INT_AMT = SYS_BeFloat(document.MAINFORM.INT_AMT.value);

        ISSUE_BK_CHG = SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value);
        CHGS_DEDUCTED = SYS_BeFloat(document.MAINFORM.CHGS_DEDUCTED.value);
        REIM_BK_CHG = SYS_BeFloat(document.MAINFORM.REIM_BK_CHG.value);

        switch (sMark) {
            case "TAKEDOWN":
                document.MAINFORM.TTL_STL_AMT_RCV.value = CFNC_N_AMT_LCCCY;
                break;
            case "REPAY":
                document.MAINFORM.TTL_STL_AMT_RCV.value = STL_AMT + ADV_BK_CHG_APPL + ADDIT_PRES_BK_AMTS + PRES_BK_CHGS + OUR_CHGS_APPL + INT_AMT - ISSUE_BK_CHG - CHGS_DEDUCTED - REIM_BK_CHG;
                break;
            default:
                document.MAINFORM.TTL_STL_AMT_RCV.value = STL_AMT + ADV_BK_CHG_APPL + ADDIT_PRES_BK_AMTS + PRES_BK_CHGS + OUR_CHGS_APPL - ISSUE_BK_CHG - CHGS_DEDUCTED - REIM_BK_CHG;
        }
        EEHtml.fireEvent(document.MAINFORM.TTL_STL_AMT_RCV, "onchange");
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_M_TTL_STL_AMT_RCV", e);
    }
}

function SYM_EPLC_MarginRateChange() {
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
                SYM_EPLC_CalcInterestAmount();
            } else {
                SYS_CheckError(document.MAINFORM.CFNC_N_MARGIN_RT, 'Please Input Libor Rate First !');
                document.MAINFORM.CFNC_N_MARGIN_RT.value = 0;
            }
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_MarginRateChange", e);
    }
}

function SYM_EPLC_NARRATIVE() {
    try {
        var a; // Utility Auto Fix Comments
        var b; // Utility Auto Fix Comments
        var c; // Utility Auto Fix Comments
        var d; // Utility Auto Fix Comments
        var start; // Utility Auto Fix Comments
        start = '+';

        if (document.MAINFORM.NEW_DOC_REQ.value != '') {
            a = start + "PLEASE AMEND DOCUMENTS REQUIRED AS FOLLOWS: " + document.MAINFORM.NEW_DOC_REQ.value + '\n';
        } else {
            a = '';
        }
        if (document.MAINFORM.NEW_GOODS_DESC.value != '') {
            b = start + "PLEASE AMEND GOODS DESCRIPTION AS FOLLOWS: " + document.MAINFORM.NEW_GOODS_DESC.value + '\n';
        } else {
            b = "";
        }
        if (document.MAINFORM.NEW_ADDIT_CONDITION.value != '') {
            c = start + "PLEASE AMEND ADDITIONAL CONDITIONS AS FOLLOWS: " + '\n' + document.MAINFORM.NEW_ADDIT_CONDITION.value + '\n';
        } else {
            c = "";
        }
        if (document.MAINFORM.TENOR_TEMP.value != '') {
            d = start + "PLEASE AMEND TENOR DETAILS AS FOLLOWS: " + '\n' + document.MAINFORM.TENOR_TEMP.value + '\n';
        } else {
            d = '';
        }

        document.MAINFORM.NEW_INSTR_TO_PAY_BK.value = a + b + c + d;
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_NARRATIVE", e);
    }
}

function SYM_EPLC_NEW_Pay_By_Acceptance() {
    try {
        if (document.MAINFORM.NEW_TENOR_TYPE.value != 'OTHR' && document.MAINFORM.NEW_TENOR_TYPE.value != '' && document.MAINFORM.NEW_AVAL_BY.value == 'BY ACCEPTANCE') {
            document.MAINFORM.NEW_DRAFTS_AT.value = document.MAINFORM.NEW_TENOR_DAYS.value + ' ' + document.MAINFORM.NEW_TENOR_TYPE.value;
        }
        if (document.MAINFORM.NEW_TENOR_TYPE.value != 'OTHR' && document.MAINFORM.NEW_TENOR_TYPE.value != '' && document.MAINFORM.NEW_AVAL_BY.value == 'BY DEF PAYMENT') {
            document.MAINFORM.NEW_DEF_PMT_DET.value = document.MAINFORM.NEW_TENOR_DAYS.value + ' ' + document.MAINFORM.NEW_TENOR_TYPE.value;
        }
        if (document.MAINFORM.NEW_TENOR_TYPE.value == 'OTHER') {
            if (document.MAINFORM.NEW_AVAL_BY.value == 'BY ACCEPTANCE') {
                document.MAINFORM.NEW_DRAFTS_AT.value = 'OTHER';
            } else if (document.MAINFORM.NEW_AVAL_BY.value == 'BY DEF PAYMENT') {
                document.MAINFORM.NEW_DEF_PMT_DET.value = 'OTHER';
            }
        }
        if (document.MAINFORM.NEW_TENOR_TYPE.value == '') {
            document.MAINFORM.NEW_DRAFTS_AT.value = '';
            document.MAINFORM.NEW_DEF_PMT_DET.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_NEW_Pay_By_Acceptance", e);
    }
}

function SYM_EPLC_NetAmount() {
    try {
        var InterestAmount; // Utility Auto Fix Comments
        var NetAmount; // Utility Auto Fix Comments
        var nFinanceAmount; // Utility Auto Fix Comments
        InterestAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_PRE_INT.value);
        nFinanceAmount = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
        NetAmount = nFinanceAmount - InterestAmount;
        document.MAINFORM.CFNC_N_NET_AMT.value = NetAmount;
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_NetAmount", e);
    }
}

function SYM_EPLC_OUR_ENG() {
    try {
        var sCONF_INSTR; // Utility Auto Fix Comments
        sCONF_INSTR = document.MAINFORM.CONF_INSTR.value;
        if (sCONF_INSTR == 'WITHOUT') {

            SYT_ChangeFldClass(document.MAINFORM.OUR_ENG, 'P');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_OUR_ENG", e);
    }
}

function SYM_EPLC_OUR_ENG_BY_CONF_INSTR(sCONF_INSTR) {
    try {
        if (sCONF_INSTR == "CONFIRM") {
            document.MAINFORM.OUR_ENG.value = "CONFIRMATION";
            SYT_ChangeFldClass(document.MAINFORM.OUR_ENG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M'); //Add on 20111129 for SWIFT 2018 Requirement enhancement;
        } else if (sCONF_INSTR == 'WITHOUT') {
            document.MAINFORM.OUR_ENG.value = "ADVICE";
            EEHtml.fireEvent(document.MAINFORM.OUR_ENG, 'onchange');
            SYT_ChangeFldClass(document.MAINFORM.OUR_ENG, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'O');
        } else {
            document.MAINFORM.OUR_ENG.value = "ADVICE";
            SYT_ChangeFldClass(document.MAINFORM.OUR_ENG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CONF_BK_ID, 'M'); //Add on 20111129 for SWIFT 2018 Requirement enhancement;
        }
        EEHtml.fireEvent(document.MAINFORM.OUR_ENG, 'onchange');
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_OUR_ENG_BY_CONF_INSTR", e);
    }
}

function SYM_EPLC_OUR_ENG_BY_CONF_INSTR_AMD() {
    try {
        sCONF_INSTR = document.MAINFORM.NEW_CONF_INSTR.value;
        if (sCONF_INSTR == "CONFIRM") {
            SYT_ChangeFldClass(document.MAINFORM.OUR_ENG, 'M');
            EEHtml.fireEvent(document.MAINFORM.NEW_CONF_INSTR, 'onchange');
            SYT_ChangeFldClass(document.MAINFORM.NEW_CONF_BK_ID, 'M');
        } else if (sCONF_INSTR == 'WITHOUT') {
            SYT_ChangeFldClass(document.MAINFORM.OUR_ENG, 'P');
            EEHtml.fireEvent(document.MAINFORM.OUR_ENG, 'onchange');
            EEHtml.fireEvent(document.MAINFORM.NEW_CONF_INSTR, 'onchange');
            SYT_ChangeFldClass(document.MAINFORM.NEW_CONF_BK_ID, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.OUR_ENG, 'M');
            EEHtml.fireEvent(document.MAINFORM.NEW_CONF_INSTR, 'onchange');
            SYT_ChangeFldClass(document.MAINFORM.NEW_CONF_BK_ID, 'M');
        }
        //document.MAINFORM.OUR_ENG.fireEvent('onchange');
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_OUR_ENG_BY_CONF_INSTR_AMD", e);
    }
}


function SYM_EPLC_OUR_ENG_BY_CONF_INSTR_INITVALUE() {
    try {
        if (document.MAINFORM.CONF_INSTR.value == 'CONFIRM') {
            document.MAINFORM.OUR_ENG.value = 'CONFIRMATION';
        } else if (document.MAINFORM.CONF_INSTR.value == 'WITHOUT') {
            document.MAINFORM.OUR_ENG.value = 'ADVICE';
            EEHtml.fireEvent(document.MAINFORM.OUR_ENG, 'onchange');
        } else {
            document.MAINFORM.OUR_ENG.value = 'ADVICE';
        }
        EEHtml.fireEvent(document.MAINFORM.OUR_ENG, 'onchange');
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_OUR_ENG_BY_CONF_INSTR_INITVALUE", e);
    }
}

function SYM_EPLC_PRES_BANK_SW_ADD_TAG() {
    try {
        if (document.MAINFORM.DOC_PRES_BY.value == "Beneficiary's Bank") {
            SYM_EPLC_M_SW_TAG(new Array(document.MAINFORM.PRES_BK_SW_ADD));
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_PRES_BANK_SW_ADD_TAG", e);
    }
}

function SYM_EPLC_PRES_BK_TO_BENE() {
    try {
        document.MAINFORM.BENE_ID.value = document.MAINFORM.PRES_BK_ID.value;
        document.MAINFORM.BENE_NM.value = document.MAINFORM.PRES_BK_NM.value;
        document.MAINFORM.BENE_ADD1.value = document.MAINFORM.PRES_BK_ADD1.value;
        document.MAINFORM.BENE_ADD2.value = document.MAINFORM.PRES_BK_ADD2.value;
        document.MAINFORM.BENE_ADD3.value = document.MAINFORM.PRES_BK_ADD3.value;
        document.MAINFORM.BENE_MAIL_ADD.value = document.MAINFORM.PRES_BK_MAIL_ADD.value;
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_PRES_BK_TO_BENE", e);
    }
}

function SYM_EPLC_PRE_Charge() {
    try {
        var sPRES_BK_CHGS; // Utility Auto Fix Comments
        sPRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);

        if (sPRES_BK_CHGS > 0) {
            SYT_ChangeFldClass(document.MAINFORM.AC_BK_AC_NO, "M");
        } else {
            SYT_ChangeFldClass(document.MAINFORM.AC_BK_AC_NO, "B");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_PRE_Charge", e);
    }
}

function SYM_EPLC_Pay_By_Acceptance() {
    try {
        if (document.MAINFORM.TENOR_TYPE.value != 'OTHER' && document.MAINFORM.TENOR_TYPE.value != '' && (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE' || document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION')) {
            document.MAINFORM.DRAFTS_AT.value = document.MAINFORM.TENOR_DAYS.value + ' ' + document.MAINFORM.TENOR_TYPE.value;
        }
        if (document.MAINFORM.TENOR_TYPE.value != 'OTHER' && document.MAINFORM.TENOR_TYPE.value != '' && document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {
            document.MAINFORM.DEF_PMT_DET.value = document.MAINFORM.TENOR_DAYS.value + ' ' + document.MAINFORM.TENOR_TYPE.value;
        }
        if (document.MAINFORM.TENOR_TYPE.value == 'OTHER') {
            if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE' || document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION') {
                document.MAINFORM.DRAFTS_AT.value = 'OTHER';
            } else if (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {
                document.MAINFORM.DEF_PMT_DET.value = 'OTHER';
            }
        }

        if (document.MAINFORM.TENOR_TYPE.value == '') {
            document.MAINFORM.DRAFTS_AT.value = '';
            document.MAINFORM.DEF_PMT_DET.value = '';
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Pay_By_Acceptance", e);
    }
}

function SYM_EPLC_PaymentAvailableByChange() {
    try {
        var obj1; // Utility Auto Fix Comments
        var obj2; // Utility Auto Fix Comments
        //modified for PUI
        return;
        /*
    obj1 = SYS_getScreenObjByxpath('PaymentTermsHeader','CPYT_C_MIX_PAY_DETAIL');
    obj2 = SYS_getScreenObjByxpath('PaymentTermsHeader','CPYT_INDIVID_DRAW_FLG');
    if("BY MIXED PYMT" == document.MAINFORM.AVAL_BY.value){
    SYT_ChangeFldClass(obj1,'O');
    SYT_ChangeFldClass(obj2,'M');
    }
    else{
    SYT_ChangeFldClass(obj1, 'P');
    SYT_ChangeFldClass(obj2,'P');
    }
    */
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_PaymentAvailableByChange", e);
    }
}

function SYM_EPLC_SET_NEW_CONF_COMM() {
    try {
        var CONF_COMM; // Utility Auto Fix Comments
        var NEW_CONF_COMM; // Utility Auto Fix Comments
        var PAID_CONF_COMM; // Utility Auto Fix Comments
        CONF_COMM = Chg.Screen.getTrxChargeByCommCode('EPLC_CONF_COMM');
        NEW_CONF_COMM = SYS_BeFloat(CONF_COMM.getActiveAmt());
        PAID_CONF_COMM = SYS_BeFloat(document.MAINFORM.PAID_CONF_COMM.value); // Utility Auto Fix Comments
        document.MAINFORM.TEMP_UNPAID_CONF_COMM.value = NEW_CONF_COMM;
        document.MAINFORM.TEMP_TTL_CONF_COMM.value = NEW_CONF_COMM + PAID_CONF_COMM;
        document.MAINFORM.TEMP_UNPAID_CONF_COMM.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.TEMP_UNPAID_CONF_COMM.value);
        document.MAINFORM.TEMP_TTL_CONF_COMM.value = SYT_AmtFormat(document.MAINFORM.LC_CCY.value, document.MAINFORM.TEMP_TTL_CONF_COMM.value);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_SET_NEW_CONF_COMM", e);
    }
}

function SYM_EPLC_SQL_CONF_BANK() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('CONF_BK_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_SQL_CONF_BANK", e);
    }
}

function SYM_EPLC_SQL_NEW_ADV_THU_BK() {
    try {
        var retvalue;
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('NEW_ADV_THU_BK_ID', '1');
            SYT_ChangeFldClass(document.MAINFORM.NEW_ADV_THU_BK_ADD_BTN, 'O');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_SQL_NEW_ADV_THU_BK", e);
    }
}

function SYM_EPLC_SQL_PRESENTER_CUST() {
    try {
        var retvalue; // Utility Auto Fix Comments
        var sql; // Utility Auto Fix Comments
        sql = "1=1";

        /*if (document.MAINFORM.PRES_BK_NM.value != '') {
            sql = sql + " AND PARTY_NM LIKE '%<--PRES_BK_NM-->%'";
        }
        if (document.MAINFORM.PRES_BK_ADD1.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD1 LIKE '%<--PRES_BK_ADD1-->%'";
        }
        if (document.MAINFORM.PRES_BK_ADD2.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD2 LIKE '%<--PRES_BK_ADD2-->%'";
        }
        if (document.MAINFORM.PRES_BK_ADD3.value != '') {
            sql = sql + " AND SWIFT_FMT_ADD3 LIKE '%<--PRES_BK_ADD3-->%'";
        }*/
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inqure CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('BENE_NEGO_ID', '1');
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_SQL_PRESENTER_CUST", e);
    }
}

function SYM_EPLC_SetTrxTempFieldVaule() {
    try {
        if (SYS_ORG_FUNCTION_NAME == 'EPLC_AdviseLCOneStep' || SYS_ORG_FUNCTION_NAME == 'PROCESS_700701720') {
            Chg.Screen.setTrxTempFieldVaule("EPLC_CONF_COMM", "1", "ADV");
        } else if (SYS_ORG_FUNCTION_NAME == 'EPLC_AmendmentOneStep' || SYS_ORG_FUNCTION_NAME == 'EPLC_Process_MT707_New') {
            Chg.Screen.setTrxTempFieldVaule("EPLC_CONF_COMM", "1", "AMD");
        } else if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAccept') {
            Chg.Screen.setTrxTempFieldVaule("EPLC_CONF_COMM", "1", "PAY");
        } else if (SYS_ORG_FUNCTION_NAME == 'EPLC_PayAtMaturity') {
            Chg.Screen.setTrxTempFieldVaule("EPLC_CONF_COMM", "1", "PAM");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_SetTrxTempFieldVaule", e);
    }
}

function SYM_EPLC_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit() {
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
        var rate;
        var realamount;
        var totalamount;
        var trxamount;
        var stlFlg;
        var debitAmt;
        var amt_Sight;
        ccy = document.MAINFORM.LC_CCY.value;
        disflg = document.MAINFORM.DISCNT_FLG.value;
        PaymentInstrDeal = SYS_GetObjByDoName("PaymentInstrDeal");
        stlFlg = document.MAINFORM.STL_INSTR_FLG.value;
        if (SYS_ORG_FUNCTION_NAME == "EPLC_PayAccept" || SYS_ORG_FUNCTION_NAME == "EPLC_PayAcceptFrCE") {
            len = PaymentInstrDeal.length;
            if (len == 0) {
                return;
            } else {
                for (i = 0; i < len; i++) {
                    flg = SYS_GetFldValueByDo(PaymentInstrDeal[i], "CPYT_C_SDA_FLAG");
                   //amt_Sight = SYS_GetFldValueByDo(PaymentInstrDeal[i], "CPYT_N_PAY_AMT");
                    amt_Sight =document.MAINFORM.TTL_STL_AMT_RCV.value;
                    if (flg == "Sight" || disflg == "YES") {
                     //   if (stlFlg == "Deduct Charges from Proceeds") {
                            //debitAmt = SYS_BeFloat(amt_Sight) - SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value) - SYS_BeFloat(document.MAINFORM.OUR_CHGS_BENE.value);
                    //        debitAmt = SYS_BeFloat(amt_Sight) - SYS_BeFloat(document.MAINFORM.OUR_CHGS_BENE.value); //reconstructed on 20241101;
                    //    } else {
                           // debitAmt = SYS_BeFloat(amt_Sight) - SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value);
                   //        debitAmt = SYS_BeFloat(amt_Sight); //reconstructed on 20241101;
                   //     }
                        creditheader = null;
                        creditheader = PaymentInstrDeal[i].getDoByName("PaymentCreditHeader");
                        if (creditheader == null) {
                            return;
                        } else if (document.MAINFORM.AVAL_BY.value == "BY MIXED PYMT") {
                            //document.MAINFORM.AMT_TO_BENE_PRES_CCY.value = SYT_AmtFormat(ccy, debitAmt);
                          //  document.MAINFORM.NET_AMT_PD_BENE.value = SYT_AmtFormat(ccy, bene_amt);
                            SYS_UpdateFldValueByDo(creditheader[0], "CPYT_CR_TTL_AMT_TTLCCY", SYT_AmtFormat(ccy, document.MAINFORM.AMT_TO_BENE_PRES_CCY.value));
                            totalamount = SYS_BeFloat(document.MAINFORM.AMT_TO_BENE_PRES_CCY.value);
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
                        } else {
                            SYS_UpdateFldValueByDo(creditheader[0], "CPYT_CR_TTL_AMT_TTLCCY", SYT_AmtFormat(ccy, document.MAINFORM.AMT_TO_BENE_PRES_CCY.value));
                            totalamount = SYS_BeFloat(document.MAINFORM.AMT_TO_BENE_PRES_CCY.value);
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
        } else if (SYS_ORG_FUNCTION_NAME == "EPLC_PayAtMaturity" && disflg == "YES") {
            //document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(ccy, document.MAINFORM.AMT_TO_BENE_PRES_CCY.value);
            var ttl_credit= SYS_BeFloat(document.MAINFORM.CFNC_N_PAY_AMT.value)+SYS_BeFloat(document.MAINFORM.AMT_TO_BENE_PRES_CCY.value);// for non mix
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(ccy, ttl_credit);
            EEHtml.fireEvent(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY, "onchange");
        } else {
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(ccy, document.MAINFORM.AMT_TO_BENE_PRES_CCY.value);
            EEHtml.fireEvent(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY, "onchange");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Set_AMT_TO_BENE_PRES_CCY_TOPaymentCredit", e);
    }
}

function SYM_EPLC_Set_BENE_ADD1_TO_CUST_DO() {
    try {
        if (document.MAINFORM.BENE_ADD1.value != '') {

            SYS_refreshChildDoValue("AdviceForBankCust", "SEND_TO_CUST_ADD1", document.MAINFORM.BENE_ADD1.value);

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Set_BENE_ADD1_TO_CUST_DO", e);
    }
}

function SYM_EPLC_Set_BENE_ADD2_TO_CUST_DO() {
    try {
        if (document.MAINFORM.BENE_ADD2.value != '') {

            SYS_refreshChildDoValue("AdviceForBankCust", "SEND_TO_CUST_ADD2", document.MAINFORM.BENE_ADD2.value);

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Set_BENE_ADD2_TO_CUST_DO", e);
    }
}

function SYM_EPLC_Set_BENE_ADD3_TO_CUST_DO() {
    try {
        if (document.MAINFORM.BENE_ADD3.value != '') {

            SYS_refreshChildDoValue("AdviceForBankCust", "SEND_TO_CUST_ADD3", document.MAINFORM.BENE_ADD3.value);

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Set_BENE_ADD3_TO_CUST_DO", e);
    }
}

function SYM_EPLC_Set_BENE_CORR_TO_CUST_DO() {
    try {
        if (document.MAINFORM.BENE_CORR_MED.value != '') {

            SYS_refreshChildDoValue("AdviceForBankCust", "MESG_TYPE_CUST", document.MAINFORM.BENE_CORR_MED.value);

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Set_BENE_CORR_TO_CUST_DO", e);
    }
}

function SYM_EPLC_Set_BENE_EMAIL_TO_CUST_DO() {
    try {
        if (document.MAINFORM.BENE_EMAIL.value != '') {

            SYS_refreshChildDoValue("AdviceForBankCust", "SEND_TO_CUST_EMAIL", document.MAINFORM.BENE_EMAIL.value);

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Set_BENE_EMAIL_TO_CUST_DO", e);
    }
}

function SYM_EPLC_Set_BENE_FAX_TO_CUST_DO() {
    try {
        if (document.MAINFORM.BENE_FAX.value != '') {

            SYS_refreshChildDoValue("AdviceForBankCust", "SEND_TO_CUST_FAX", document.MAINFORM.BENE_FAX.value);

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Set_BENE_FAX_TO_CUST_DO", e);
    }
}

function SYM_EPLC_Set_BENE_ID_TO_CUST_DO() {
    try {
        if (document.MAINFORM.BENE_ID.value != '') {

            SYS_refreshChildDoValue("AdviceForBankCust", "SEND_TO_CUST_ID", document.MAINFORM.BENE_ID.value);

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Set_BENE_ID_TO_CUST_DO", e);
    }
}

function SYM_EPLC_Set_BENE_LANG_TO_CUST_DO() {
    try {
        if (document.MAINFORM.BENE_LANG.value != '') {

            SYS_refreshChildDoValue("AdviceForBankCust", "SEND_TO_CUST_LANG", document.MAINFORM.BENE_LANG.value);

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Set_BENE_LANG_TO_CUST_DO", e);
    }
}

function SYM_EPLC_Set_BENE_NM_TO_CUST_DO() {
    try {
        if (document.MAINFORM.BENE_NM.value != '') {

            SYS_refreshChildDoValue("AdviceForBankCust", "SEND_TO_CUST_NM", document.MAINFORM.BENE_NM.value);

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Set_BENE_NM_TO_CUST_DO", e);
    }
}

function SYM_EPLC_Set_BENE_POSTADD_TO_CUST_DO() {
    try {
        if (document.MAINFORM.BENE_MAIL_ADD.value != '') {

            SYS_refreshChildDoValue("AdviceForBankCust", "SEND_TO_CUST_POST_ADD", document.MAINFORM.BENE_MAIL_ADD.value);

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Set_BENE_POSTADD_TO_CUST_DO", e);
    }
}

function SYM_EPLC_Set_BENE_REF_TO_CUST_DO() {
    try {
        if (document.MAINFORM.BENE_REF_NO.value != '') {

            SYS_refreshChildDoValue("AdviceForBankCust", "SEND_TO_CUST_REF", document.MAINFORM.BENE_REF_NO.value);

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Set_BENE_REF_TO_CUST_DO", e);
    }
}

function SYM_EPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit() {
    try {
        var PaymentInstrDeal; // Utility Auto Fix Comments
        var arrDebit; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        var debitheader; // Utility Auto Fix Comments
        var flg; // Utility Auto Fix Comments
        var i;
        var len;
        var percent;
        var rate;
        var realamount;
        var totalamount;
        var trxamount;
        ccy = document.MAINFORM.LC_CCY.value;
        PaymentInstrDeal = SYS_GetObjByDoName("PaymentInstrDeal");
        var amt_Sight;
        if (SYS_ORG_FUNCTION_NAME == "EPLC_PayAccept" || SYS_ORG_FUNCTION_NAME == "EPLC_PayAcceptFrCE") {
            len = PaymentInstrDeal.length;
            if (len == 0) {
                return;
            } else {
                for (i = 0; i < len; i++) {
                    flg = SYS_GetFldValueByDo(PaymentInstrDeal[i], "CPYT_C_SDA_FLAG");
                   // amt_Sight = SYS_GetFldValueByDo(PaymentInstrDeal[i], "CPYT_N_PAY_AMT");
                     amt_Sight =document.MAINFORM.TTL_STL_AMT_RCV.value;
                    if (flg == "Sight" || document.MAINFORM.DISCNT_FLG.value == 'YES') {
                        debitheader = null;
                        debitheader = PaymentInstrDeal[i].getDoByName("PaymentDebitHeader");
                        if (debitheader == null) {
                            return;
                        } else if (document.MAINFORM.AVAL_BY.value == "BY MIXED PYMT") {
                        	var ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
                        	var OUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
                        	var PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
                        	var ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
                        	var our=SYS_BeFloat(document.MAINFORM.OUR_CHGS_BENE.value);
                             SYS_UpdateFldValueByDo(debitheader[0], "CPYT_DR_TTL_AMT_TTLCCY", SYT_AmtFormat(ccy, amt_Sight));
                            arrDebit = PaymentInstrDeal[i].getDoByName("PaymentDebit");
                            len = arrDebit.length;
                            for (i = 0; i < len; i++) {
                                debit = arrDebit[i];
                                percent = SYS_BeFloat(debit.getDoValueByName('CPYT_DR_PER'));
                                rate = SYS_BeFloat(debit.getDoValueByName('CPYT_DR_BUY_RATE'));
                                //SYS_UpdateFldValueByDo(debit, 'CPYT_DR_AMT_DRCCY', SYT_AmtFormat(ccy, SYS_BeFloat(amt_Sight) - SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value)));
                               // SYS_UpdateFldValueByDo(debit, 'CPYT_DR_AMT_TXCCY', SYT_AmtFormat(ccy, SYS_BeFloat(amt_Sight) - SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value)));
                               SYS_UpdateFldValueByDo(debit, 'CPYT_DR_AMT_DRCCY', SYT_AmtFormat(ccy, SYS_BeFloat(amt_Sight)));
                               SYS_UpdateFldValueByDo(debit, 'CPYT_DR_AMT_TXCCY', SYT_AmtFormat(ccy, SYS_BeFloat(amt_Sight)));
                            }
                            SYS_RefreshDoGrid(arrDebit);
                        } else {
                        	  if(document.MAINFORM.DISCNT_FLG.value == 'NO'){ 
                         SYS_UpdateFldValueByDo(debitheader[0], "CPYT_DR_TTL_AMT_TTLCCY", SYT_AmtFormat(ccy, document.MAINFORM.TTL_STL_AMT_DR.value));                           
                         totalamount = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_DR.value);
                            
                            
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
            }
        } 
        	else {
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_DR.value);
            EEHtml.fireEvent(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY, "onchange");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Set_TTL_STL_AMT_RCV_toPaymentDebit", e);
    }
}

function SYM_EPLC_TEMP_LC_AMT_707() {
    try {
        if (document.MAINFORM.OLD_LC_AMT.value == document.MAINFORM.NEW_LC_AMT.value) {
            document.MAINFORM.TEMP_LC_AMT.value = 0;
        } else {
            document.MAINFORM.TEMP_LC_AMT.value = document.MAINFORM.NEW_LC_AMT.value;

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_TEMP_LC_AMT_707", e);
    }
}

function SYM_EPLC_TTL_CLM_AMT() {
    try {
        var ADDIT_PRES_BK_AMTS; // Utility Auto Fix Comments
        var ADV_BK_CHGS; // Utility Auto Fix Comments
        var OUR_CHGS_APPL; // Utility Auto Fix Comments
        var PRES_AMT; // Utility Auto Fix Comments
        var PRES_BK_CHGS; // Utility Auto Fix Comments
        var TTL_CLM_AMT; // Utility Auto Fix Comments
        ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        OUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
        PRES_AMT = SYS_BeFloat(document.MAINFORM.PRES_AMT.value);
        TTL_CLM_AMT = SYS_BeFloat(document.MAINFORM.TTL_CLM_AMT.value);

        TTL_CLM_AMT = PRES_AMT + ADV_BK_CHGS + ADDIT_PRES_BK_AMTS + PRES_BK_CHGS + OUR_CHGS_APPL;
        document.MAINFORM.TTL_CLM_AMT.value = SYT_AmtFormat(document.MAINFORM.PRES_CCY.value, TTL_CLM_AMT);
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_TTL_CLM_AMT", e);
    }
}

function SYM_EPLC_Tenor_Narrative() {
    try {
        if (document.MAINFORM.AVAL_BY.value == 'BY PAYMENT') {

            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY ACCEPTANCE') {
            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DRAFTS_AT.value;
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY NEGOTIATION') {
            document.MAINFORM.TENOR_TEMP.value = '';
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY DEF PAYMENT') {

            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.DEF_PMT_DET.value;
        }

        if (document.MAINFORM.AVAL_BY.value == 'BY MIXED PYMT') {

            document.MAINFORM.TENOR_TEMP.value = document.MAINFORM.MIX_PMT_DETL.value;
        }
        SYM_EPLC_NARRATIVE();
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Tenor_Narrative", e);
    }
}

function SYM_EPLC_UPDATE_PAID_CONF_COMM() {
    try {
        var conf_chgObj; // Utility Auto Fix Comments
        conf_chgObj = Chg.Screen.getDefChargeByCommCode('EPLC_CONF_COMM');
        if (conf_chgObj != '' && conf_chgObj != null && conf_chgObj != 'null' && conf_chgObj != 'undefined') {
            if (conf_chgObj[0].getChargeAt() == '0' || conf_chgObj[0].getChargeAt() == '3') {
                document.MAINFORM.PAID_CONF_COMM.value = 0.00;
            }
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_UPDATE_PAID_CONF_COMM", e);
    }
}

function SYM_EPLC_addPaymentRecord() {
    try {
        var Func; // Utility Auto Fix Comments
        var xDO; // Utility Auto Fix Comments
        //modified for PUI
        //return;   Unique Marked;
        /*
    if('BY MIXED PYMT' != document.MAINFORM.AVAL_BY.value){
    xDO=SYS_getDoByXpath("PaymentTermsHeader");
       if(xDO){
          Func = xDO.getselectedFrame().window["addOneRecordToPaymentDO"];
          Func();
       }
    	}else{
    	xDO=SYS_getDoByXpath("PaymentTermsHeader");
       if(xDO){
          Func = xDO.getselectedFrame().window["deleteDOrecord"];
          Func();
       }
    		}
    */
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_addPaymentRecord", e);
    }
}

function SYM_EPLC_changeDiscountFieldclass() {
    try {
        if ("NO" == document.MAINFORM.DISCNT_FLG.value) {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_MODE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_PAY_BY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_CCY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_PAYABLE, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_AC_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_I_BASIC_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_DT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_LIBOR_RT, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_I_DAYS, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_DUE_DT, 'O');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_MODE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_PAY_BY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_CCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_INT_PAYABLE, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_AC_NO, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_I_BASIC_DAYS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_LIBOR_RT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_I_DAYS, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_D_DUE_DT, 'M');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_MARGIN_RT, 'O');
        }
        if (SYS_ORG_FUNCTION_NAME === "EPLC_PayAccept") {
            SYT_ChangeFldClass(document.MAINFORM.CFNC_C_CCY, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CFNC_N_AMT_LCCCY, 'P');

            //document.MAINFORM.CFNC_C_CCY.value = document.MAINFORM.CFNC_C_TRX_CCY.value;
            //document.MAINFORM.CFNC_N_AMT_LCCCY.value = document.MAINFORM.CFNC_N_TRX_AMT.value;

        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_changeDiscountFieldclass", e);
    }
}

function SYM_EPLC_getendday(enddate) {
    try {
        document.MAINFORM.CFNC_D_DUE_DT.value = enddate;
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_getendday", e);
    }
}

function SYM_EPLC_setDocumentsData() {
    try {
        var DUP; // Utility Auto Fix Comments
        var DocumentNames; // Utility Auto Fix Comments
        var ORIG; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        i = 0;

        DocumentNames = new Array(11);
        ORIG = new Array(11);
        DUP = new Array(11);

        ORIG[1] = document.MAINFORM.DRAFT_1.value;
        ORIG[2] = document.MAINFORM.INVOICE_1.value;
        ORIG[3] = document.MAINFORM.BL_AWB_1.value;
        ORIG[4] = document.MAINFORM.CERTIFICATE_1.value;
        ORIG[5] = document.MAINFORM.INSP_CERT_1.value;
        ORIG[6] = document.MAINFORM.PACK_LIST_1.value;
        ORIG[7] = document.MAINFORM.INSURANCE_1.value;
        ORIG[8] = document.MAINFORM.VESSEL_CERT_1.value;
        ORIG[9] = document.MAINFORM.FREIGHT_INV_1.value;
        ORIG[10] = document.MAINFORM.BENEF_CERT_1.value;
        ORIG[11] = document.MAINFORM.OTHERS_1.value;

        DUP[1] = document.MAINFORM.DRAFT_2.value;
        DUP[2] = document.MAINFORM.INVOICE_2.value;
        DUP[3] = document.MAINFORM.BL_AWB_2.value;
        DUP[4] = document.MAINFORM.CERTIFICATE_2.value;
        DUP[5] = document.MAINFORM.INSP_CERT_2.value;
        DUP[6] = document.MAINFORM.PACK_LIST_2.value;
        DUP[7] = document.MAINFORM.INSURANCE_2.value;
        DUP[8] = document.MAINFORM.VESSEL_CERT_2.value;
        DUP[9] = document.MAINFORM.FREIGHT_INV_2.value;
        DUP[10] = document.MAINFORM.BENEF_CERT_2.value;
        DUP[11] = document.MAINFORM.OTHERS_2.value;

        DocumentNames[1] = "  " + document.MAINFORM.DRAFT.value + SYT_AddMoreSpace(35 - document.MAINFORM.DRAFT.value.length);
        DocumentNames[2] = "  " + document.MAINFORM.INVOICE.value + SYT_AddMoreSpace(35 - document.MAINFORM.INVOICE.value.length);
        DocumentNames[3] = "  " + document.MAINFORM.BL_AWB.value + SYT_AddMoreSpace(35 - document.MAINFORM.BL_AWB.value.length);
        DocumentNames[4] = "  " + document.MAINFORM.CERTIFICATE.value + SYT_AddMoreSpace(35 - document.MAINFORM.CERTIFICATE.value.length);
        DocumentNames[5] = "  " + document.MAINFORM.INSP_CERT.value + SYT_AddMoreSpace(35 - document.MAINFORM.INSP_CERT.value.length);
        DocumentNames[6] = "  " + document.MAINFORM.PACK_LIST.value + SYT_AddMoreSpace(35 - document.MAINFORM.PACK_LIST.value.length);
        DocumentNames[7] = "  " + document.MAINFORM.INSURANCE.value + SYT_AddMoreSpace(35 - document.MAINFORM.INSURANCE.value.length);
        DocumentNames[8] = "  " + document.MAINFORM.VESSEL_CERT.value + SYT_AddMoreSpace(35 - document.MAINFORM.VESSEL_CERT.value.length);
        DocumentNames[9] = "  " + document.MAINFORM.FREIGHT_INV.value + SYT_AddMoreSpace(35 - document.MAINFORM.FREIGHT_INV.value.length);
        DocumentNames[10] = "  " + document.MAINFORM.BENEF_CERT.value + SYT_AddMoreSpace(35 - document.MAINFORM.BENEF_CERT.value.length);
        DocumentNames[11] = "  " + document.MAINFORM.OTHERS.value + SYT_AddMoreSpace(35 - document.MAINFORM.OTHERS.value.length);


        document.MAINFORM.DOC_PRES.value = "-----------------------------------------------------------" + '\n' + " Documents Present                Original          Copies" + "\n" + "-----------------------------------------------------------";

        for (i = 1; i <= 11; i++) {
            if (ORIG[i] != 0 || DUP[i] != 0) { // Utility Auto Fix Comments
                document.MAINFORM.DOC_PRES.value = document.MAINFORM.DOC_PRES.value + "\n" + DocumentNames[i] + ORIG[i] + SYT_AddMoreSpace(15 + 3 - ORIG[i].length) + DUP[i]; // Utility Auto Fix Comments
            } // Utility Auto Fix Comments
        }

        document.MAINFORM.DOC_PRES.value = document.MAINFORM.DOC_PRES.value + "\n" + "-----------------------------------------------------------";
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_setDocumentsData", e);
    }
}

function SYM_EPLC_showMixPayment() {
    try {
        var obj; // Utility Auto Fix Comments
        //modified for PUI
        return;
        obj = document.MAINFORM.AVAL_BY;
        if ('BY MIXED PYMT' == obj.value) {
            EEHtml.getElementById('D').style.display = '';
            initFlag = true;
            DoFrame.showDO("PaymentTermsHeader", "D_div");
        } else {
            EEHtml.getElementById('D').style.display = 'none';
            DoFrame.hideDO("PaymentTermsHeader", "D_div");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_showMixPayment", e);
    }
}

function SYM_EPLC_showMixPaymentSchedule() {
    try {
        var obj; // Utility Auto Fix Comments
        //modified for PUI
        return;
        obj = document.MAINFORM.AVAL_BY;
        if ('BY MIXED PYMT' == obj.value) {
            EEHtml.getElementById('D').style.display = 'block';
            initFlag = true;
            DoFrame.showDO("PaymentScheduleHeader", "D_div");
        } else {
            EEHtml.getElementById('D').style.display = 'none';
            DoFrame.hideDO("PaymentScheduleHeader", "D_div");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_showMixPaymentSchedule", e);
    }
}

function SYM_EPLC_showMixPayment_New() {
    try {
        var obj;
        obj = EEHtml.getElementById("NEW_AVAL_BY");
        if (obj.value == 'BY MIXED PYMT') {
            EEHtml.getElementById('D').style.display = '';
            initFlag = true;
            DoFrame.showDO("PaymentTermsHeader", "D_div");
        } else {
            EEHtml.getElementById('D').style.display = 'none';
            DoFrame.hideDO("PaymentTermsHeader", "D_div");
        }
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_showMixPayment_New", e);
    }
}



/*function SYM_EPLC_Compare_target_TO_REVAMT() {
    try {
        var REIM_BK_CHG;
        var ISSUE_BK_CHG;
        var CHGS_DEDUCTED;
        var  TEMP_TOTAL_AMT;
        var ADV_BK_CHGS;
        var OUR_CHGS_APPL; 
        var PRES_BK_CHGS;
        var ADDIT_PRES_BK_AMTS ;
        var target_recv_amt;
        ADV_BK_CHGS = SYS_BeFloat(document.MAINFORM.ADV_BK_CHGS.value);
        OUR_CHGS_APPL = SYS_BeFloat(document.MAINFORM.OUR_CHGS_APPL.value);
        PRES_BK_CHGS = SYS_BeFloat(document.MAINFORM.PRES_BK_CHGS.value);
        ADDIT_PRES_BK_AMTS = SYS_BeFloat(document.MAINFORM.ADDIT_PRES_BK_AMTS.value);
        ISSUE_BK_CHG = SYS_BeFloat(document.MAINFORM.ISSUE_BK_CHG.value);
        CHGS_DEDUCTED =SYS_BeFloat(document.MAINFORM.CHGS_DEDUCTED.value);	
        REIM_BK_CHG =SYS_BeFloat(document.MAINFORM.REIM_BK_CHG.value);	
        
         target_recv_amt = SYS_BeFloat(document.MAINFORM.STL_AMT.value) +ADV_BK_CHGS + OUR_CHGS_APPL + PRES_BK_CHGS +ADDIT_PRES_BK_AMTS - ISSUE_BK_CHG -CHGS_DEDUCTED - REIM_BK_CHG;
              if(target_recv_amt != SYS_BeFloat(document.MAINFORM.TTL_STL_AMT_RCV.value)){
        	alert("The target received amount : + "target_recv_amt"+ not match to the actual received amount. " );
             }   
        
    } catch (e) {
        DisExcpt("SYM_EPLC.js*SYM_EPLC_Compare_REIMISSDED_CHG_TO_REVAMT", e);
    }
}*/