"path:SCRN/DO/PaymentDebitHeader.jsp";

function PaymentDebitHeader_CancelCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function PaymentDebitHeader_ConfirmBusinessCall() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function PaymentDebitHeader_ConfirmBusinessCheck() {
    try {
        var arrDebit; // Utility Auto Fix Comments
        var debit; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var tempSum; // Utility Auto Fix Comments
        var ttlAmt; // Utility Auto Fix Comments
        targetDo = SYS_GetObjByDoName("PaymentInstructionDealer");
        if (targetDo.length > 0 && document.MAINFORM.CPYT_C_SDA_FLAG.value != "Sight") {
            return true;
        } else {
            if (SYS_FUNCTION_NAME === "FinanceEstablish") {
                if (document.MAINFORM.CFNC_PAYMENT_FLAG.value === 'No') {
                    return true;
                }
            }
            arrDebit = SYS_GetObjByDoName('PaymentDebit');
            ttlAmt = SYS_BeFloat(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value);
            tempSum = 0;
            len = arrDebit.length;
            debit = null;
            for (i = 0; i < len; i++) { // Utility Auto Fix Comments
                debit = arrDebit[i];
                tempSum += SYS_BeFloat(debit.getDoValueByName("CPYT_DR_AMT_TXCCY"));
            }
            if (tempSum != ttlAmt) {
                if ("RPFM" == SYS_MODULE_NAME) {
                    var sub = tempSum - ttlAmt;
                    if (sub <= 0.01 && sub >= 0) {
                        return true;
                    }
                }
                alert("Please note that the debit amt does not equal to total amt!");
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function PaymentDebitHeader_ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function DebitHeader_CPYT_DR_TTL_AMT_TTLCCY() {
    try {
        var CPYT_DR_TTL_AMT_TTLCCY; // Utility Auto Fix Comments
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
        CPYT_DR_TTL_AMT_TTLCCY = SYS_BeFloat(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value);
        ccy = document.MAINFORM.CPYT_DR_TTL_CCY.value; // Utility Auto Fix Comments
        targetDo = null;
        targetDo = SYS_GetObjByDoName("PaymentDebit");
        if (targetDo == null && targetDo.length == 0) {
            _do = SYS_GetObjByDoName("PaymentInstrDeal"); // Utility Auto Fix Comments
            targetDo = _do[0].getDoByName("PaymentDebit"); // Utility Auto Fix Comments
        }
        if (targetDo == null && targetDo.length == 0) {
            return;
        }
        len = targetDo.length;
        for (i = 0; i < len; i++) {
            vDo = targetDo[i];
            percent = SYS_BeFloat(vDo.getDoValueByName('CPYT_DR_PER'));
            rate = SYS_BeFloat(vDo.getDoValueByName('CPYT_DR_BUY_RATE'));
            totalamount = SYS_BeFloat(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value);
            trxCcy = vDo.getDoValueByName('CPYT_DR_TRX_CCY');
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
            vDo.putDoValueByName('CPYT_DR_AMT_DRCCY', SYT_AmtFormat(ccy, trxamount));
            vDo.putDoValueByName('CPYT_DR_AMT_TXCCY', SYT_AmtFormat(ccy, realamount));
        }
        SYS_RefreshDoGrid(targetDo);
    } catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function DebitHeader_ChangeDebitdetail() {
    try {
        var DISCNT_FLG; // Utility Auto Fix Comments
        var func_nm; // Utility Auto Fix Comments
        var records; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        /* 
 func_nm = SYS_ORG_FUNCTION_NAME;
  if("EPLC_PayAccept" == func_nm){
     DISCNT_FLG =document.MAINFORM.DISCNT_FLG.value;
     if("YES" == DISCNT_FLG){
       targetDo = SYS_GetObjByDoName("PaymentDebit");
       if(targetDo == null || targetDo.length<1){
          return ;     
       }      
       records=targetDo[0];
       record.putDoValueByName("CPYT_DR_AMT_DRCCY",document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value);
       record.putDoValueByName("CPYT_DR_AMT_TXCCY", document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value);
       SYS_RefreshDoGrid(targetDo);
  }
  if("EPLC_Discount" == func_nm){
       targetDo = SYS_GetObjByDoName("PaymentDebit");
       if(targetDo == null || targetDo.length<1){
          return ;     
       }      
       records=targetDo[0];
       record.putDoValueByName("CPYT_DR_AMT_DRCCY",document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value);
       record.putDoValueByName("CPYT_DR_AMT_TXCCY", document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value);
       SYS_RefreshDoGrid(targetDo);
 }
*/
    } catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function PaymentDebitHeader_InitValues() {
    try {
        getCPYT_DR_TTL_AMT_TTLCCY();
    } catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function PaymentDealer_PaymentDebitHeader_PaymentDebit(node, recordId, status) {
    try {
        PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_PaymentDebit(node, recordId, status);
    } catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function PaymentInstructionDealer_PaymentInstrDeal_PaymentDebitHeader_PaymentDebit(node, recordId, status) {
    try {
        var CrdNum_obj; // Utility Auto Fix Comments
        var oldValue; // Utility Auto Fix Comments
        var vCount; // Utility Auto Fix Comments
        CrdNum_obj = document.MAINFORM.CPYT_NO_DR;
        if (status == "D") {
            oldValue = CrdNum_obj.value;
            CrdNum_obj.value = oldValue - 1;
            return;
        }
        vCount = node.parentObj.getChildDoRecordCount("PaymentDebit");
        CrdNum_obj.value = vCount;
    } catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function PaymentDebitHeader_PostconditionOnInit() {
    try {
        //getCPYT_DR_TTL_AMT_TTLCCY();

    } catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function PaymentDebitHeader_PreconditionOnInit() {
    try {

    } catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function getCPYT_DR_TTL_AMT_TTLCCY() {
    try {
        var amt; // Utility Auto Fix Comments
        if ('SYND' == SYS_MODULE_NAME) {
            amt = document.MAINFORM.PCPT_CCY.value;
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(amt, document.MAINFORM.PCPT_AMT.value);
            document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.PCPT_CCY.value;
            if (SYS_ORG_FUNCTION_NAME == "SYND_NotePartChg") {
                document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(amt, document.MAINFORM.SYND_NOTE_PART_TOTAL_AMT.value);
            }
        }
        if ('SBLC' == SYS_MODULE_NAME) {
            document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.LC_CCY.value;
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_TTL_CCY.value, document.MAINFORM.CPYT_N_PAY_AMT.value);
            EEHtml.fireEvent(document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY, 'onchange'); //Jax added 2020/6/2
        }
        if ('REIM' == SYS_MODULE_NAME) {
            document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.CLM_CCY.value;
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_DR_TTL_CCY.value, document.MAINFORM.CPYT_N_PAY_AMT.value);
        }
        if ('IMCO' == SYS_MODULE_NAME || 'EXCO' == SYS_MODULE_NAME) {
            amt = document.MAINFORM.COLL_CCY.value;
            document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.COLL_CCY.value;
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(amt, document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value);
        }
        if ('EPLC' == SYS_MODULE_NAME) {
            if ("EPLC_Discount" == SYS_ORG_FUNCTION_NAME) {
                return;
            }
            amt = document.MAINFORM.PRES_CCY.value;
            document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.PRES_CCY.value;
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(amt, document.MAINFORM.TTL_STL_AMT_DR.value);
        }
        if (SYS_MODULE_NAME == 'IPLC') {
            document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.PRES_CCY.value;
            if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAccept" || SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount") {
                document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.PRES_CCY.value;
                if (document.MAINFORM.CPYT_C_SDA_FLAG.value == "Sight" || document.MAINFORM.DISCNT_FLG.value == 'YES') {
                    document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = document.MAINFORM.TTL_DR_AMT.value;
                } else {
                    document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = 0;
                }
            } else {
                document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = document.MAINFORM.TTL_DR_AMT.value;
            }
        }
        if (SYS_MODULE_NAME == 'IMCO') {
            amt = document.MAINFORM.COLL_CCY.value;
            document.MAINFORM.CPYT_N_PAY_AMT.value = SYT_AmtFormat(amt, document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value);
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(amt, document.MAINFORM.NET_AMT_RCVD_COLL_CCY.value);
        }
        if (SYS_MODULE_NAME == 'IWGT' || SYS_MODULE_NAME == 'GTEE') {
            document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.GTEE_CCY.value;
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.GTEE_CCY.value, document.MAINFORM.TTL_DR_AMT.value);
        }
        if (SYS_ORG_FUNCTION_NAME == "FinanceEstablish") {
            document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
            document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = document.MAINFORM.CFNC_N_AMT_LCCCY.value;
        }
        if (SYS_MODULE_NAME == 'CFNC') {
            document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
        }
        if (SYS_MODULE_NAME == 'RPFM') {
            if (SYS_ORG_FUNCTION_NAME == "ProcessGrantor") {
                document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.RECV_CCY.value;
                if (document.MAINFORM.COMM_FLG.value == 'Yes') {
                    document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.PART_CHG_CCY.value, document.MAINFORM.PART_CHG_AMT.value);
                } else {
                    document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.PART_CHG_CCY.value, 0);
                }
            }
            if (SYS_ORG_FUNCTION_NAME == "RepayGrantor") {
                if (document.MAINFORM.FUND_FLAG.value == "Funded") {
                    if (document.MAINFORM.RISK_FLAG.value == 'No') {
                        document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value);
                    } else {
                        document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.CFNC_C_CCY.value;
                        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CFNC_C_CCY.value, 0);
                    }
                } else {
                    if (document.MAINFORM.RISK_FLAG.value == 'Yes') {
                        document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.SYND_PART_CCY.value;
                        var DRamt=SYS_BeFloat(document.MAINFORM.SYND_PART_AMT.value);
                        var percent = SYS_FloatSub(100,document.MAINFORM.CASH_PERCENT.value);
                        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, SYS_FloatMul(DRamt,percent)/100);
                    } else {
                        document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.SYND_PART_CCY.value;
                        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.SYND_PART_CCY.value, 0);
                    }
                }
            }
            if (SYS_ORG_FUNCTION_NAME == "SettleParticipant") {
                if (document.MAINFORM.PART_TYPE.value == 'Funded') {
                    if (document.MAINFORM.RISK_FLAG.value == 'No') {
                        document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.RECV_CCY.value;
                        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, document.MAINFORM.CFNC_N_PAY_AMT.value);
                    } else {
                        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, 0);
                    }
                } else {
                    if (document.MAINFORM.RISK_FLAG.value == 'Yes') {
                        document.MAINFORM.CPYT_DR_TTL_CCY.value = document.MAINFORM.RECV_CCY.value;
                        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, SYS_BeFloat(document.MAINFORM.PART_RISK_AMT.value));
                    } else {
                        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.RECV_CCY.value, 0);
                    }
                }
            }
        }









    } catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function PaymentDebitHeader_initFieldEvent() {
    try {
        document.MAINFORM.CPYT_DR_TTL_AMT_TTLCCY.onchange = CPYT_DR_TTL_AMT_TTLCCY_onchange;
    } catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function PreInitValues() {
    try {} catch (e) {
        DisExcpt("SSSS_PaymentDebitHeader.js", e);
    }
}

function CPYT_DR_TTL_AMT_TTLCCY_onchange() {
    DebitHeader_CPYT_DR_TTL_AMT_TTLCCY();
}