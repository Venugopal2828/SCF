"path:SCRN/DO/PaymentCreditHeader.jsp";

function AddoneRecordtoCredit() {
    try {
        var CCY; // Utility Auto Fix Comments
        var CFNC_C_INIT_FLG; // Utility Auto Fix Comments
        var CFNC_C_REF; // Utility Auto Fix Comments
        var CFNC_C_TYPE_DESC; // Utility Auto Fix Comments
        var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
        var CPYT_CR_AC; // Utility Auto Fix Comments
        var CPYT_CR_TTL_AMT_TTLCCY; // Utility Auto Fix Comments
        var CPYT_CR_VAL_DATE; // Utility Auto Fix Comments
        var CPYT_DR_AC_TYPE;
        var DISCNT_FLG;
        var newRecord1;
        var newRecord2;
        var percent;
        var targetDo;
        if ((SYS_ORG_FUNCTION_NAME == "EPLC_PayAtMaturity" || SYS_ORG_FUNCTION_NAME == "EXCO_SettlementAtMaturity" || SYS_ORG_FUNCTION_NAME == "EXCO_SettlementAtMaturityFrCE" || SYS_ORG_FUNCTION_NAME == "EXCO_ProcessMT400") && SYS_FUNCTION_TYPE != "EC" && SYS_FUNCTION_TYPE != "RE" && SYS_FUNCTION_TYPE != "IQ") {
            CCY = document.MAINFORM.CPYT_CR_TTL_CCY.value;
            DISCNT_FLG = document.MAINFORM.DISCNT_FLG.value;
            if ("YES" == DISCNT_FLG) {
                CPYT_CR_AC = document.MAINFORM.CFNC_C_AC_NO.value;
                CPYT_CR_TTL_AMT_TTLCCY = SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value);
                CFNC_N_AMT_LCCCY = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
                CPYT_CR_VAL_DATE = document.MAINFORM.CFNC_D_DUE_DT.value;
                CFNC_C_INIT_FLG = document.MAINFORM.CFNC_C_INIT_FLG.value; //For CPYT_DR_ID
                CFNC_C_TYPE_DESC = document.MAINFORM.CFNC_C_TYPE_DESC.value; //For CPYT_DR_NAME
                CPYT_DR_AC_TYPE = document.MAINFORM.CFNC_C_AC_TYPE.value; //For CPYT_DR_AC_TYPE
                CFNC_C_REF = document.MAINFORM.CFNC_C_REF.value;
                if (CPYT_CR_TTL_AMT_TTLCCY == 0) {
                    return;
                }
                percent = Math.round(CFNC_N_AMT_LCCCY / CPYT_CR_TTL_AMT_TTLCCY * 100*1e6)/1e6;
                var percent2 = 100 - SYS_BeFloat(percent);
                var record2AMT = CPYT_CR_TTL_AMT_TTLCCY -SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
               targetDo = null;
                targetDo = SYS_GetObjByDoName("PaymentCredit");
                if (targetDo == null) {
                    return;
                }

                newRecord1 = SYS_AddDoRecords("PaymentCredit", targetDo[0]);           
                SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_PER', percent);
                SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_CCY', document.MAINFORM.CPYT_CR_TTL_CCY.value);
                SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_TRX_CCY', document.MAINFORM.CPYT_CR_TTL_CCY.value);
                SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_AMT_CRCCY', SYT_AmtFormat(CCY, document.MAINFORM.CFNC_N_AMT_LCCCY.value));
                SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_AMT_TXCCY', SYT_AmtFormat(CCY, document.MAINFORM.CFNC_N_AMT_LCCCY.value));
                SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_AC', CPYT_CR_AC);
                SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_BUY_RATE', "1.000000");
                SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_VAL_DATE', CPYT_CR_VAL_DATE);
                SYS_UpdateFldValueByDo(newRecord1, 'CPYT_ASSGN_ID', CFNC_C_INIT_FLG);
                SYS_UpdateFldValueByDo(newRecord1, 'CPYT_ASSGN_NM', CFNC_C_TYPE_DESC);
                SYS_UpdateFldValueByDo(newRecord1, 'CPYT_CR_AC_TYPE', CPYT_DR_AC_TYPE);
                //Add on 20241105; 
                newRecord2 = SYS_AddDoRecords("PaymentCredit", targetDo[1]);
                SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_PER', percent2);
                SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_CCY', document.MAINFORM.CPYT_CR_TTL_CCY.value);
                SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_TRX_CCY', document.MAINFORM.CPYT_CR_TTL_CCY.value);
                SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_AMT_CRCCY', SYT_AmtFormat(CCY, record2AMT));
                SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_AMT_TXCCY', SYT_AmtFormat(CCY, record2AMT));
                SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_BUY_RATE', "1.000000");
                SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_VAL_DATE', CPYT_CR_VAL_DATE);
                SYS_UpdateFldValueByDo(newRecord2, 'CPYT_CR_AC_TYPE', 'CUSTOMER');

                document.MAINFORM.CPYT_NO_CR.value = 2;
                    var arrDO = [];
                    arrDO[0] = newRecord1;
                    arrDO[1] = newRecord2;
                    SYS_RefreshDoGrid(arrDO);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function CAL_CPYT_CR_TTL_AMT_TTLCCY() {
    try {
        var TTL_CR_AMT; // Utility Auto Fix Comments
        var percent; // Utility Auto Fix Comments
        if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAccept" || SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount") {
            TTL_CR_AMT = SYS_BeFloat(document.MAINFORM.TTL_CR_AMT.value); //Modified by Tony on 20090626 for Get right Credit Amount;
            percent = SYS_BeFloat(document.MAINFORM.CPYT_C_PAY_PER.value);
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = TTL_CR_AMT * percent / 100;
            EEHtml.fireEvent(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY, "onchange");
            document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.CPYT_PAY_CCY.value;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function PaymentCreditHeader_CancelCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function PaymentCreditHeader_ConfirmBusinessCall() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function PaymentCreditHeader_ConfirmBusinessCheck() {
    try {
        var arrCredit; // Utility Auto Fix Comments
        var credit; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var tempSum; // Utility Auto Fix Comments
        var ttlAmt; // Utility Auto Fix Comments
        targetDo = SYS_GetObjByDoName("PaymentInstructionDealer");
        if (targetDo.length > 0 && document.MAINFORM.CPYT_C_SDA_FLAG.value != "Sight") {
            return true;
        }
        /*  	Modify by jeff for check the debit/credit amount when accept deferred payment record
	if(SYS_ORG_FUNCTION_NAME=="IPLC_PayAccept" && document.MAINFORM.CPYT_C_SDA_FLAG.value != "Sight"){
    		return true;
	}
*/
        else {
            if (SYS_FUNCTION_NAME === "FinanceEstablish") {
                if (document.MAINFORM.CFNC_PAYMENT_FLAG.value === 'No') {
                    return true;
                }
            }
            arrCredit = SYS_GetObjByDoName('PaymentCredit');
            ttlAmt = SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value);
            tempSum = 0;
            len = arrCredit.length;
            credit = null;
            for (i = 0; i < len; i++) { // Utility Auto Fix Comments
                credit = arrCredit[i];
                tempSum += SYS_BeFloat(credit.getDoValueByName(document.MAINFORM.CPYT_CR_AMT_TXCCY.name));
            }
            if (tempSum != ttlAmt) {
                if ("CFNC" == SYS_MODULE_NAME) {
                    var sub = tempSum - ttlAmt;
                    if (sub <= 0.02 && sub >= 0) {
                        return true;
                    }
                }
                if ("RPFM" == SYS_MODULE_NAME) {
                    var sub = tempSum - ttlAmt;
                    if (sub <= 0.01 && sub >= 0) {
                        return true;
                    }
                }
                alert("Please note that the credit amt does not equal to total amt!");
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function PaymentCreditHeader_ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function PaymentCreditHeader_InitValues() {
    try {
        getCPYT_CR_TTL_AMT_TTLCCY();
    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function PaymentDealer_PaymentCreditHeader_PaymentCredit(node, recordId, status) {
    try {
        var CrdNum_obj; // Utility Auto Fix Comments
        var oldValue; // Utility Auto Fix Comments
        var vCount; // Utility Auto Fix Comments
        CrdNum_obj = document.MAINFORM.CPYT_NO_CR;
        if (status == "D") {
            oldValue = CrdNum_obj.value;
            CrdNum_obj.value = oldValue - 1;
            return;
        }
        vCount = node.parentObj.getChildDoRecordCount("PaymentCredit");
        CrdNum_obj.value = vCount;
    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentCreditHeader_PaymentCredit(node, recordId, status) {
    try {
        PaymentDealer_PaymentCreditHeader_PaymentCredit(node, recordId, status);
    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function PaymentCreditHeader_PostconditionOnInit() {
    try {
        getCPYT_CR_TTL_AMT_TTLCCY();
        //changeCPYT_CR_TTL_AMT_TTLCCY();

    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function PaymentCreditHeader_PreconditionOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function changeCPYT_CR_TTL_AMT_TTLCCY() {
    try {
        var CFNC_N_AMT_LCCCY; // Utility Auto Fix Comments
        var CPYT_CR_TTL_AMT_TTLCCY; // Utility Auto Fix Comments
        var Obj_disflg; // Utility Auto Fix Comments
        var _do; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var percent; // Utility Auto Fix Comments
        var rate; // Utility Auto Fix Comments
        var realamount; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var totalamount; // Utility Auto Fix Comments
        var trxamount; // Utility Auto Fix Comments
        var vDo; // Utility Auto Fix Comments
        var sumPer; // Utility Auto Fix Comments
        var sumAmt; // Utility Auto Fix Comments
        var trxCcy; // Utility Auto Fix Comments
        sumPer = 0;
        sumAmt = 0;
        CPYT_CR_TTL_AMT_TTLCCY = SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value);
        ccy = document.MAINFORM.CPYT_CR_TTL_CCY.value;
        targetDo = null;
        targetDo = SYS_GetObjByDoName("PaymentCredit");
        if (targetDo == null && targetDo.length == 0) {
            _do = SYS_GetObjByDoName("PaymentInstrDeal"); // Utility Auto Fix Comments
            targetDo = _do[0].getDoByName("PaymentCredit"); // Utility Auto Fix Comments
        }
        if (targetDo == null && targetDo.length == 0) {
            return;
        }
        len = targetDo.length;
        for (i = 0; i < len; i++) {
            vDo = targetDo[i];
            Obj_disflg = document.MAINFORM.DISCNT_FLG;
            if ((SYS_ORG_FUNCTION_NAME == "EPLC_PayAtMaturity" || SYS_ORG_FUNCTION_NAME == "EPLC_PaymentAtMaturityFrCE" || SYS_ORG_FUNCTION_NAME == "EPLC_PayAccept" || SYS_ORG_FUNCTION_NAME == "EPLC_PayAcceptFrCE") && Obj_disflg != '' && Obj_disflg != 'null' && Obj_disflg != null && Obj_disflg != undefined && Obj_disflg.value == 'YES') {
                CFNC_N_AMT_LCCCY = SYS_BeFloat(document.MAINFORM.CFNC_N_AMT_LCCCY.value);
                rate = SYS_BeFloat(vDo.getDoValueByName('CPYT_CR_BUY_RATE'));
                totalamount = SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value);
                //trxamount = CFNC_N_AMT_LCCCY * rate;
                //percent = trxamount / (totalamount * rate);
                trxamount = SYS_FloatMulToString(CFNC_N_AMT_LCCCY, rate);
                percent = SYS_FloatDivToString(trxamount, SYS_FloatMulToString(totalamount, rate));
                realamount = CFNC_N_AMT_LCCCY;
            } else {
                percent = SYS_BeFloat(vDo.getDoValueByName('CPYT_CR_PER'));
                rate = SYS_BeFloat(vDo.getDoValueByName('CPYT_CR_BUY_RATE'));
                trxCcy = vDo.getDoValueByName('CPYT_CR_TRX_CCY');
                totalamount = SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value);
                //trxamount = totalamount * percent * rate / 100;
                //realamount = totalamount * percent / 100;
                trxamount = SYS_FloatDivToString(SYS_FloatMulToString(SYS_FloatMulToString(totalamount, percent), rate), 100);
                realamount = SYS_FloatDivToString(SYS_FloatMulToString(totalamount, percent), 100);
                trxamount = SYT_AmtFormat(trxCcy, trxamount);
                realamount = SYT_AmtFormat(trxCcy, realamount);
                sumPer = SYS_FloatAddToString(sumPer, percent);
                sumAmt = SYS_FloatAddToString(sumAmt, realamount);
                if (len > 1 && sumPer == 100) {
                    var subAmt = SYS_FloatSubToString(sumAmt, totalamount);
                    if (subAmt > 0) {
                        realamount = SYS_FloatSubToString(realamount, subAmt);
                        if (rate == 1) {
                            trxamount = SYS_FloatSubToString(trxamount, subAmt);
                        }
                    } else if (subAmt < 0) {
                        realamount = SYS_FloatAddToString(realamount, subAmt);
                        if (rate == 1) {
                            trxamount = SYS_FloatAddToString(trxamount, subAmt);
                        }
                    }
                }
            }
            vDo.putDoValueByName('CPYT_CR_AMT_CRCCY', SYT_AmtFormat(ccy, trxamount));
            vDo.putDoValueByName('CPYT_CR_AMT_TXCCY', SYT_AmtFormat(ccy, realamount));
        }
        SYS_RefreshDoGrid(targetDo);
    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function check_OOPE_charge() {
    try {
        if (SYS_MODULE_NAME == "RPFM" && SYS_ORG_FUNCTION_NAME == "SettleParticipant") {
            var arrCredit; // Utility Auto Fix Comments
            var credit; // Utility Auto Fix Comments
            var currentCredit; // Utility Auto Fix Comments
            var i; // Utility Auto Fix Comments
            var len; // Utility Auto Fix Comments
            var newSum; // Utility Auto Fix Comments

            var advmsg;
            var ttlAmt; // Utility Auto Fix Comments
            arrCredit = SYS_GetObjByDoName('PaymentCredit');
            len = arrCredit.length;
            currentCredit = SYS_GetCurrentEditDo('PaymentCredit');

            for (i = 0; i < len; i++) { // Utility Auto Fix Comments
                credit = arrCredit[i];
                advmsg = credit.getDoValueByName(document.MAINFORM.CPYT_PAY_ADV_MSG.name);
                covmsg = credit.getDoValueByName(document.MAINFORM.CPYT_PAY_COV_MSG.name);
                if (advmsg == 'MT103' || advmsg == 'MT400' || covmsg == 'MT202' || covmsg == 'MT202COV') {
                    SYF_RPFM_cal_for_charge();
                    break;
                } else {
                    Chg.reset(['BM_SWIFT_LONG_LOCAL']);
                    Chg.reset(['BM_SWIFT_LONG']);
                }
            }




        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function getCPYT_CR_TTL_AMT_TTLCCY() {
    try {
        var amt; // Utility Auto Fix Comments
        if ('SYND' == SYS_MODULE_NAME) {
            amt = document.MAINFORM.PCPT_CCY.value;
            if (SYS_ORG_FUNCTION_NAME == "SYND_NotePartChg") {
                amt = document.MAINFORM.PCPT_CCY.value;
                document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(amt, document.MAINFORM.SYND_NOTE_PART_TOTAL_AMT.value);
                document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.PCPT_CCY.value;
            }
        }
        if ("SBLC" == SYS_MODULE_NAME) {
            document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.LC_CCY.value;
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_TTL_CCY.value, document.MAINFORM.CPYT_N_PAY_AMT.value);
            EEHtml.fireEvent(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY, 'onchange'); //Jax added 2020/6/2
        }
        if ('REIM' == SYS_MODULE_NAME) {
            document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.CLM_CCY.value;
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_TTL_CCY.value, document.MAINFORM.CPYT_N_PAY_AMT.value);
        }
        if ("IMCO" == SYS_MODULE_NAME) {
            document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.COLL_CCY.value;
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_TTL_CCY.value, document.MAINFORM.TTL_PAID_DRWR_AMT.value);
        }
        if ("EXCO" == SYS_MODULE_NAME) {
            amt = document.MAINFORM.COLL_CCY.value;
            document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.COLL_CCY.value;
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(amt, document.MAINFORM.NET_AMT_PD_COL_CCY.value);
        }
        if ("EPLC" == SYS_MODULE_NAME) {
            if (SYS_ORG_FUNCTION_NAME == "EPLC_Discount") {
                return;
            }
            if ((SYS_ORG_FUNCTION_NAME == "EPLC_PayAccept" || SYS_ORG_FUNCTION_NAME == "EPLC_PayAcceptFrCE") && document.MAINFORM.DISCNT_FLG.value == "YES") {
                document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = document.MAINFORM.AMT_TO_BENE_PRES_CCY.value;
                return;
            }
            if ((SYS_ORG_FUNCTION_NAME == "EPLC_PayAtMaturity" || SYS_ORG_FUNCTION_NAME == "EPLC_PaymentAtMaturityFrCE") && document.MAINFORM.DISCNT_FLG.value == "YES") {
            document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.PRES_CCY.value;	
                return;
            }
            amt = document.MAINFORM.PRES_CCY.value;
            document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.PRES_CCY.value;
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(amt, document.MAINFORM.AMT_TO_BENE_PRES_CCY.value);
        }
        if (SYS_MODULE_NAME == 'GTEE' || SYS_MODULE_NAME == 'IWGT') {
            amt = document.MAINFORM.GTEE_CCY.value;
            document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.GTEE_CCY.value;
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.valuee = SYT_AmtFormat(amt, document.MAINFORM.TTL_CR_AMT.value);
        }
        if (SYS_MODULE_NAME == 'IMCO') {
            document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = document.MAINFORM.TTL_PAID_DRWR_AMT.value;
        }
        if (SYS_MODULE_NAME == 'IPLC') {
            document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.PRES_CCY.value;
            if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount") {
                if (document.MAINFORM.CPYT_C_SDA_FLAG.value == "Sight") {
                    document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = document.MAINFORM.TTL_CR_AMT.value;
                } else {
                    document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = 0;
                    if (document.MAINFORM.AVAL_BY.value != "BY MIXED PYMT" && document.MAINFORM.DISCNT_FLG.value == 'YES') {
                        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = document.MAINFORM.TTL_CR_AMT.value;
                    }
                }
            } else {
                document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = document.MAINFORM.TTL_CR_AMT.value;
            }
        }
        if (SYS_MODULE_NAME == 'CFNC') {
            if (document.MAINFORM.CFNC_C_INT_PAYABLE.value == 'In Arrears' && SYS_ORG_FUNCTION_NAME == "FinanceEstablish") {
                document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
            } else if (document.MAINFORM.CFNC_C_INT_PAYABLE.value == 'Up Front' && SYS_ORG_FUNCTION_NAME == "FinanceEstablish") {
                document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = document.MAINFORM.CFNC_N_NET_AMT.value;
            }
            document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
        }
        if (SYS_MODULE_NAME == 'RPFM') {
            if (SYS_ORG_FUNCTION_NAME == "ProcessGrantor") {
                document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.RECV_CCY.value;
                if (document.MAINFORM.COMM_FLG.value == 'Yes') {
                    document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.PART_CHG_CCY.value, document.MAINFORM.PART_CHG_AMT.value);
                } else {
                    document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.PART_CHG_CCY.value, 0);
                }
            }
            if (SYS_ORG_FUNCTION_NAME == "RepayGrantor") {
                if (document.MAINFORM.FUND_FLAG.value == "Funded") {
                    if (document.MAINFORM.RISK_FLAG.value == 'No') {
                        document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value);
                    } else {
                        document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, 0);
                    }
                } else {
                    if (document.MAINFORM.RISK_FLAG.value == 'Yes') {
                    	  var DRamt=SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value);
                        var percent = SYS_FloatSub(100,document.MAINFORM.CASH_PERCENT.value);
                        document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.SYND_PART_CCY.value;
                        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, SYS_FloatMul(DRamt,percent)/100);
                    } else {
                        document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.SYND_PART_CCY.value;
                        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, 0);
                    }
                }
            }
            if (SYS_ORG_FUNCTION_NAME == "ProcessParticipant") {
                if (document.MAINFORM.PART_TYPE.value == 'Funded') {
                    document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.RECV_CCY.value;
                    document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_TTL_CCY.value, document.MAINFORM.CFNC_N_AMT_LCCCY.value);
                    document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.RECV_CCY.value; //added
                    document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_TTL_CCY.value, document.MAINFORM.CFNC_N_AMT_LCCCY.value); //added
                }
            }
            if (SYS_ORG_FUNCTION_NAME == "SettleParticipant") {
                if (document.MAINFORM.PART_TYPE.value == 'Funded') {
                    if (document.MAINFORM.RISK_FLAG.value == 'No') {
                        document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.RECV_CCY.value;
                        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value); //change
                    } else {
                        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, 0);
                    }
                } else {
                    if (document.MAINFORM.RISK_FLAG.value == 'No') {
                        document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.RECV_CCY.value;
                        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, 0);
                    } else {
                        document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.RECV_CCY.value;
                        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, document.MAINFORM.PART_RISK_AMT.value);
                    }
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function PaymentCreditHeader_initFieldEvent() {
    try {
        document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.onchange = CPYT_CR_TTL_AMT_TTLCCY_onchange;
    } catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function PreInitValues() {
    try {} catch (e) {
        DisExcpt("SSSS_PaymentCreditHeader.js", e);
    }
}

function CPYT_CR_TTL_AMT_TTLCCY_onchange() {
    changeCPYT_CR_TTL_AMT_TTLCCY();
}