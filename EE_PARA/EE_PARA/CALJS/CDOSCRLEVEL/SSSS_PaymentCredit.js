"path:SCRN/DO/PaymentCredit.jsp";

var ccyflag = true;
var cpytDebitAmt = 0;
var cpytcreditAmt = 0;
var flag = true;
var ntimes = 0;
var oBICCUBK = "";
var sBKIDCUBK = "";

function AmtFormatAmtTrxccy() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        ccy = document.MAINFORM.CPYT_CR_TTL_CCY.value;
        amt = document.MAINFORM.CPYT_CR_AMT_TXCCY.value;
        document.MAINFORM.CPYT_CR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*AmtFormatAmtTrxccy", e);
    }
}

function AmtFromatAmtCrccy() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        ccy = document.MAINFORM.CPYT_CR_CCY.value;
        amt = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
        document.MAINFORM.CPYT_CR_AMT_CRCCY.value = SYT_AmtFormat(ccy, amt);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*AmtFromatAmtCrccy", e);
    }
}

function CAL_CPYT_CR_AMT_TXCCY() {
    try {
        var amt; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        amt = document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value;
        ccy = document.MAINFORM.CPYT_CR_TTL_CCY.value;
        amt = SYS_FloatMul(SYS_BeFloat(document.MAINFORM.CPYT_CR_PER.value), SYS_BeFloat(amt)) / 100;
        document.MAINFORM.CPYT_CR_AMT_TXCCY.value = SYT_AmtFormat(ccy, amt); //reverse calculation with bias;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CAL_CPYT_CR_AMT_TXCCY", e);
    }
}

function CAL_CPYT_CR_CCY() {
    try {
        if (document.MAINFORM.CPYT_CR_CCY.value == document.MAINFORM.CPYT_CR_TRX_CCY.value) {
            //SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_EXNG_AC,'M');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_EXNG_AC, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CAL_CPYT_CR_CCY", e);
    }
}

function CAL_CPYT_CR_PER() {
    try {
        var PaymentCredit_obj; // Utility Auto Fix Comments
        var vSum_CPYT_CR_PER; // Utility Auto Fix Comments
        //add by amy for SMBC Demo in 20120906
        PaymentCredit_obj = SYS_GetObjByDoName('PaymentCredit');
        if (!PaymentCredit_obj) {
            return;
        }
        vSum_CPYT_CR_PER = SYS_GetFldSumByDoName('PaymentCredit', 'CPYT_CR_PER');
        if (!PaymentCredit_obj[0]) {
            vSum_CPYT_CR_PER = 0;
        }
        document.MAINFORM.CPYT_CR_PER.value = 100 - vSum_CPYT_CR_PER;
        EEHtml.fireEvent(document.MAINFORM.CPYT_CR_PER, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CAL_CPYT_CR_PER", e);
    }
}

function CAL_X103_RECCHGAMT_71G() {
    try {
        var X103_RECCHGAMT_71G; // Utility Auto Fix Comments
        X103_RECCHGAMT_71G = document.MAINFORM.X103_RECCHGAMT_71G.value;
        document.MAINFORM.X103_RECCHGAMT_71G.value = SYT_AmtFormat(document.MAINFORM.X103_RECCHGCCY_71G.value, X103_RECCHGAMT_71G);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CAL_X103_RECCHGAMT_71G", e);
    }
}

function CAL_X103_SENDCHGAMT71F() {
    try {
        var X103_SENDCHGAMT71F; // Utility Auto Fix Comments
        X103_SENDCHGAMT71F = document.MAINFORM.X103_SENDCHGAMT71F.value;
        document.MAINFORM.X103_SENDCHGAMT71F.value = SYT_AmtFormat(document.MAINFORM.X103_SENDCHGCCY71F.value, X103_SENDCHGAMT71F);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CAL_X103_SENDCHGAMT71F", e);
    }
}

function CAL_X202_BKTOBK_INFO72() {
    try {
        var APPL_NM; // Utility Auto Fix Comments
        var BENE_NM; // Utility Auto Fix Comments
        var DEST_PLACE; // Utility Auto Fix Comments
        var DEST_PORT; // Utility Auto Fix Comments
        var LOAD_PLACE; // Utility Auto Fix Comments
        var LOAD_PORT; // Utility Auto Fix Comments
        var a; // Utility Auto Fix Comments
        var b; // Utility Auto Fix Comments
        var c; // Utility Auto Fix Comments
        var d; // Utility Auto Fix Comments
        var start; // Utility Auto Fix Comments
        if ("EPLC" == SYS_MODULE_NAME) {
            BENE_NM = SYS_getValueFromMain('BENE_NM');
            APPL_NM = SYS_getValueFromMain('APPL_NM');
            LOAD_PLACE = SYS_getValueFromMain('LOAD_PLACE');
            LOAD_PORT = SYS_getValueFromMain('LOAD_PORT');
            DEST_PORT = SYS_getValueFromMain('DEST_PORT');
            DEST_PLACE = SYS_getValueFromMain('DEST_PLACE');

            start = '//';

            if (BENE_NM != '') {
                a = start + "BENE:" + BENE_NM + '\n';
            } else {
                a = '';
            }
            if (APPL_NM != '') {
                b = start + "APPL:" + APPL_NM + '\n';
            } else {
                b = "";
            }
            if (LOAD_PLACE != '' || LOAD_PORT != '' || DEST_PORT != '' || DEST_PLACE != '') {
                c = start + "PORTS:" + LOAD_PLACE + "  " + LOAD_PORT + '\n';
                d = "        " + DEST_PORT + "  " + DEST_PLACE + '\n';
                if (DEST_PORT == '') {
                    d = "        " + DEST_PLACE + '\n';
                }
                if (LOAD_PLACE == '') {
                    c = start + "PORTS:" + LOAD_PORT + '\n';
                    if (LOAD_PORT == '') {
                        c = start + "PORTS:" + d.trim();
                    }
                }
            } else {
                c = "";
                d = "";
            }

            document.MAINFORM.X202_BKTOBK_INFO72.value = a + b + c + d;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CAL_X202_BKTOBK_INFO72", e);
    }
}

function CHK_CPYT_CR_VAL_DATE() {
    try {
        if (SYS_MODULE_NAME == 'CFNC' || SYS_MODULE_NAME == 'RPFM' || SYS_MODULE_NAME == 'SYND') {}
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CHK_CPYT_CR_VAL_DATE", e);
    }
}

function CHK_Total_Pct() {
    try {
        var arrCredit; // Utility Auto Fix Comments
        var credit; // Utility Auto Fix Comments
        var currentCredit; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var newSum; // Utility Auto Fix Comments
        var oldValue; // Utility Auto Fix Comments
        var tempSum; // Utility Auto Fix Comments
        var ttlAmt; // Utility Auto Fix Comments
        arrCredit = SYS_GetObjByDoName('PaymentCredit');
        len = arrCredit.length;

        tempSum = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value);
        ttlAmt = SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value);
        currentCredit = SYS_GetCurrentEditDo('PaymentCredit');
        oldValue = 0;
        if (currentCredit != null) {
            oldValue = SYS_BeFloat(currentCredit.getDoValueByName(document.MAINFORM.CPYT_CR_AMT_TXCCY.name));
        }
        for (i = 0; i < len; i++) { // Utility Auto Fix Comments
            credit = arrCredit[i];
            tempSum += SYS_BeFloat(credit.getDoValueByName(document.MAINFORM.CPYT_CR_AMT_TXCCY.name));
        }
        //newSum = SYT_AmtFormat(document.MAINFORM.CPYT_CR_TTL_CCY.value, tempSum - oldValue);
        newSum = tempSum - oldValue;
        if (newSum > ttlAmt) {
            if ("CFNC" == SYS_MODULE_NAME) {
                var sub = newSum - ttlAmt;
                if (sub <= 0.02) {
                    return true;
                }
            }
            if ("RPFM" == SYS_MODULE_NAME) {
                var sub = newSum - ttlAmt;
                if (sub <= 0.01 && sub >= 0) {
                    return true;
                }
            }
            if (SYS_ORG_FUNCTION_NAME == "SettleParticipant") {
                document.MAINFORM.CPYT_CR_PER.value = 0;
                document.MAINFORM.CPYT_CR_AMT_CRCCY.value = 0;
                document.MAINFORM.CPYT_CR_AMT_TXCCY.value = 0;
                return true;
            }
            alert("Please note that the total percent exceeds 100%");
            document.MAINFORM.CPYT_CR_PER.value = 0;
            document.MAINFORM.CPYT_CR_AMT_CRCCY.value = 0;
            document.MAINFORM.CPYT_CR_AMT_TXCCY.value = 0;
            return false;
        } else {
            return true;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CHK_Total_Pct", e);
    }
}

function CPYT_BENE_IDonchange() {
    try {
        if (document.MAINFORM.CPYT_BENE_ID.value != "") {
            if (document.MAINFORM.CPYT_ORD_TYPE.value == 'B' || document.MAINFORM.CPYT_ORD_TYPE.value == 'D') {
                SYS_GetCUBK_S('CPYT_BENE_ID_SW', 'CPYT_BENE_ID');
            } else {
                SYS_GetCUBK_S('CPYT_BENE_ID_CT', 'CPYT_BENE_ID');
            }
        } else {
            document.MAINFORM.CPYT_BENE_NM.value = "";
            document.MAINFORM.CPYT_BENE_ADD1.value = "";
            document.MAINFORM.CPYT_BENE_ADD2.value = "";
            document.MAINFORM.CPYT_BENE_ADD3.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_BENE_IDonchange", e);
    }
}

function CPYT_BENE_IDonclick() {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            if (document.MAINFORM.CPYT_ORD_TYPE.value == 'B' || document.MAINFORM.CPYT_ORD_TYPE.value == 'D') {
                //SYS_InqCUBK_Sql('CPYT_BENE_ID_SW', sql);
                SYS_InqCUBK_byCondition('CPYT_BENE_ID_SW', '1');
            } else {
                //SYS_InqCUBK_Sql('CPYT_BENE_ID_CT', sql);
                SYS_InqCUBK_byCondition('CPYT_BENE_ID_CT', '1');
            }

        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_BENE_IDonclick", e);
    }
}

function CPYT_CR_AMT_CRCCY() {
    try {
        if (document.MAINFORM.CPYT_CR_BUY_RATE.value != '' && document.MAINFORM.CPYT_CR_BUY_RATE.value != 0) {
            amt = SYS_FloatMul(SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value), SYS_BeFloat(document.MAINFORM.CPYT_CR_BUY_RATE.value));
            document.MAINFORM.CPYT_CR_AMT_CRCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_CCY.value, amt);
            document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
            document.MAINFORM.X103_SETT_AMT_32A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
            document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
            document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_CR_AMT_CRCCY", e);
    }
}

function CPYT_CR_AMT_CRCCY_CRRATE() {
    try {
        var amt; // Utility Auto Fix Comments
        /*amt=SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value)*SYS_BeFloat(document.MAINFORM.CPYT_CR_RATE.value);
        document.MAINFORM.CPYT_CR_AMT_CRCCY.value = SYT_AmtFormat('CPYT_CR_CCY',amt);*/
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_CR_AMT_CRCCY_CRRATE", e);
    }
}

function CPYT_CR_AMT_TXCCY() {
    try {
        var PaymentCredit_obj; // Utility Auto Fix Comments
        var vSum_CPYT_CR_AMT_TXCCY; // Utility Auto Fix Comments


        PaymentCredit_obj = SYS_GetObjByDoName('PaymentCredit');
        vSum_CPYT_CR_AMT_TXCCY = SYS_GetFldSumByDoName('PaymentCredit', 'CPYT_CR_AMT_TXCCY');
        var vStatus = SYS_GetCurrentDoStatus('PaymentCredit');
        var recordNum = PaymentCredit_obj.length;
        if (!PaymentCredit_obj[0]) {
            document.MAINFORM.CPYT_CR_BAL_TXCCY.value = SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value) - SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value);
            if (document.MAINFORM.CPYT_CR_BAL_TXCCY.value < 0) {
                document.MAINFORM.CPYT_CR_BAL_TXCCY.value = 0;
            }
        } else if (vStatus == 'E') {
            document.MAINFORM.CPYT_CR_BAL_TXCCY.value = SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value) - SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value);
            if (document.MAINFORM.CPYT_CR_BAL_TXCCY.value < 0) {
                document.MAINFORM.CPYT_CR_BAL_TXCCY.value = 0;
            }
        } else {
            document.MAINFORM.CPYT_CR_BAL_TXCCY.value = SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value) - (SYS_BeFloat(vSum_CPYT_CR_AMT_TXCCY) + SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value));
            if (document.MAINFORM.CPYT_CR_BAL_TXCCY.value < 0) {
                document.MAINFORM.CPYT_CR_BAL_TXCCY.value = 0;
            }
        }
        document.MAINFORM.CPYT_CR_BAL_TXCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_TTL_CCY.value, document.MAINFORM.CPYT_CR_BAL_TXCCY.value);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_CR_AMT_TXCCY", e);
    }
}

function CPYT_CR_AMT_TXCCYfromCrccy() {
    try {
        if (document.MAINFORM.CPYT_CR_BUY_RATE.value != '' && document.MAINFORM.CPYT_CR_BUY_RATE.value != 0) {
            document.MAINFORM.CPYT_CR_AMT_TXCCY.value = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_CRCCY.value) / SYS_BeFloat(document.MAINFORM.CPYT_CR_BUY_RATE.value);
            AmtFormatAmtTrxccy();
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_CR_AMT_TXCCYfromCrccy", e);
    }
}

function CPYT_CR_PER() {
    try {
        var amt; // Utility Auto Fix Comments
        var per; // Utility Auto Fix Comments
        amt = document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value;
        if (amt != "" && SYS_BeFloat(amt) != 0) {
            per = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value) / SYS_BeFloat(amt) * 100;
            per = Math.round(per * 100) / 100;
            document.MAINFORM.CPYT_CR_PER.value = per;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_CR_PER", e);
    }
}

function CPYT_PAY_ADV_MSG() {
    try {
        if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == 'MT103' || document.MAINFORM.CPYT_PAY_ADV_MSG.value == 'PACS008') {
            enable103();
            document.MAINFORM.X103_SETT_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
            document.MAINFORM.X103_SETT_AMT_32A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
            document.MAINFORM.X103_INSTR_CCY_33B.value = document.MAINFORM.CPYT_CR_CCY.value;
            document.MAINFORM.X103_INSTR_AMT_33B.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
            SYT_ChangeFldClass(document.MAINFORM.IS_GPI_MEMBER, 'M');
            //for MT202COV by Sindy
        } else if ((document.MAINFORM.CPYT_PAY_ADV_MSG.value != 'MT103' && document.MAINFORM.CPYT_PAY_ADV_MSG.value != 'PACS008') && (document.MAINFORM.CPYT_PAY_COV_MSG.value == 'MT202COV' || document.MAINFORM.CPYT_PAY_COV_MSG.value == 'PACS009COV')) {
            alert("The Payment Advice Message should be MT103 or PACS008, while the Payment Cover Message is MT202COV or PACS009COV.");
            document.MAINFORM.CPYT_PAY_ADV_MSG.value = '';
        } else {
            disable103();
            document.MAINFORM.X103_SETT_CCY_32A.value = "";
            document.MAINFORM.X103_SETT_AMT_32A.value = "";
            document.MAINFORM.X103_INSTR_AMT_33B.value = '';
            document.MAINFORM.X103_INSTR_CCY_33B.value = '';
            document.MAINFORM.IS_GPI_MEMBER.value = '';
            SYT_ChangeFldClass(document.MAINFORM.IS_GPI_MEMBER, 'P');
            document.MAINFORM.SERVICE_TYPE_ID_GPI_111.value = '';
        }
        SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_COV_MSG, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC_TYPE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC, 'M');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_PAY_ADV_MSG", e);
    }
}

function CPYT_PAY_COV_MSG() {
    try {
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == 'MT202') {
            enable202();
            SYT_ChangeFldClass(document.MAINFORM.IS_GPI_MEMBER, 'M');
        } else if (document.MAINFORM.CPYT_PAY_COV_MSG.value == 'MT202COV' || document.MAINFORM.CPYT_PAY_COV_MSG.value == 'PACS009COV') {
            enable202();
            SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_ADV_MSG, 'M');
            SYT_ChangeFldClass(document.MAINFORM.IS_GPI_MEMBER, 'M');
            if (document.MAINFORM.CPYT_PAY_ADV_MSG.value != 'MT103' && document.MAINFORM.CPYT_PAY_ADV_MSG.value != 'PACS008') {
                alert("The Payment Advice Message should be MT103 or PACS008, while the Payment Cover Message is MT202COV or PACS009COV.");
            }
        } else {
            disable202();
            SYT_ChangeFldClass(document.MAINFORM.IS_GPI_MEMBER, 'P');
            document.MAINFORM.IS_GPI_MEMBER.value = '';
            document.MAINFORM.SERVICE_TYPE_ID_GPI_111.value = '';
        }

        SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_COV_MSG, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC_TYPE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC, 'M');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_PAY_COV_MSG", e);
    }
}

function CR_checkRecordStatus() {
    try {
        var targetDO; // Utility Auto Fix Comments
        targetDO = SYS_GetCurrentEditDo("PaymentCredit");
        if (targetDO == null) {
            return "A";
        } else {
            return "E";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CR_checkRecordStatus", e);
    }
}

function Cal_CPYT_ASSGN_ID() {
    try {
        if (document.MAINFORM.CPYT_CR_AC_TYPE.value == 'CUSTOMER') {
            //SYS_InqCUBK_Sql('CPYT_ASSGN_AC', "C_MAIN_REF LIKE '%<--CPYT_ASSGN_ID-->%' AND C_CURRENCY=\'<--CPYT_CR_CCY-->\'");
            SYS_InqCUBK_byCondition('CPYT_ASSGN_AC', '1');
        } else if (document.MAINFORM.CPYT_CR_AC_TYPE.value == 'NOSTRO' || document.MAINFORM.CPYT_CR_AC_TYPE.value == 'VOSTRO') {
            //SYS_InqCUBK_Sql('CPYT_ASSGN_AC_BK', "C_MAIN_REF LIKE '%<--CPYT_ASSGN_ID-->%' AND C_CURRENCY=\'<--CPYT_CR_CCY-->\'");
            SYS_InqCUBK_byCondition('CPYT_ASSGN_AC_BK', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_CPYT_ASSGN_ID", e);
    }
}

function Cal_CPYT_BENE_ORDER_NO() {
    try {
        var CPYT_BENE_ID; // Utility Auto Fix Comments
        var CPYT_BENE_ORDER_NO; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //CPYT_BENE_ORDER_NO = document.MAINFORM.CPYT_BENE_ORDER_NO.value;
        //CPYT_BENE_ID = document.MAINFORM.CPYT_BENE_ID.value;
        //sSQLWhere = "ORDER_NO = " + CPYT_BENE_ORDER_NO + " AND C_MAIN_REF = '" + CPYT_BENE_ID + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "CPYT_BENE_NM;CPYT_BENE_ADD1;CPYT_BENE_ADD2;CPYT_BENE_ADD3";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_CPYT_BENE_ORDER_NO_0', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_CPYT_BENE_ORDER_NO", e);
    }
}

function Cal_CPYT_CR_AC_TYPE() {
    try {
        if (document.MAINFORM.CPYT_CR_AC_TYPE.value == 'INTERNAL') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_ID_BTN, 'P');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_ID, 'O');
            if (SYS_MODULE_NAME == "RPFM" && SYS_ORG_FUNCTION_NAME == "RepayGrantor" || SYS_ORG_FUNCTION_NAME == "SettleParticipant" || SYS_ORG_FUNCTION_NAME == "ProcessGrantor") {
                //}else{
                document.MAINFORM.CPYT_ASSGN_ID.value = '';
                document.MAINFORM.CPYT_ASSGN_NM.value = '';
                document.MAINFORM.CPYT_CR_AC.value = '';
            }
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_ID_BTN, 'O');
            SYT_ChangeFldClass(document.MAINFORM.CPYT_ASSGN_ID, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_CPYT_CR_AC_TYPE", e);
    }
}

function Cal_CPYT_NO_CR() {
    try {
        /*Count=SYS_getcurrRecordCount('PaymentDealer.PaymentCreditHeader.PaymentCredit');
                                                SYS_setCurrNodeParentValue('PaymentCreditHeader','CPYT_NO_CR',Count);*/
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_CPYT_NO_CR", e);
    }
}

function Cal_CPYT_PARTY_REF() {
    try {
        if (document.MAINFORM.CPYT_ORD_TYPE.value == 'D') {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_PARTY_REF, 'O');
        } else {
            document.MAINFORM.CPYT_PARTY_REF.value = "";
            SYT_ChangeFldClass(document.MAINFORM.CPYT_PARTY_REF, 'P');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_CPYT_PARTY_REF", e);
    }
}

function Cal_CPYT_REV() {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('CPYT_REV_ID', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_CPYT_REV", e);
    }
}

function Cal_X103_59_ORDER_NO() {
    try {
        var X103_59_ORDER_NO; // Utility Auto Fix Comments
        var X103_BENECU_ID_59A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X103_59_ORDER_NO = document.MAINFORM.X103_59_ORDER_NO.value;
        //X103_BENECU_ID_59A = document.MAINFORM.X103_BENECU_ID_59A.value;
        //sSQLWhere = "ORDER_NO = " + X103_59_ORDER_NO + " AND C_MAIN_REF = '" + X103_BENECU_ID_59A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_BENECU_NM_59A;X103BENECUADD1_59A;X103BENECUADD2_59A;X103BENECUADD3_59A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_59_ORDER_NO_1', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_59_ORDER_NO", e);
    }
}

function Cal_X103_ACC_BKSW_57A() {
    try {
        var nX103_ACC_BKSW_57A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_ACC_BKID_57A.value = "";
        if (document.MAINFORM.X103_ACC_BKSW_57A.value.length == 11 || document.MAINFORM.X103_ACC_BKSW_57A.value.length == 8) {
            if (document.MAINFORM.X103_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X103_ACC_BKSW_57A.value = document.MAINFORM.X103_ACC_BKSW_57A.value + "XXX";
            }
            //nX103_ACC_BKSW_57A = document.MAINFORM.X103_ACC_BKSW_57A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like'%" + nX103_ACC_BKSW_57A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_ACC_BKID_57A";
            Cal_X103_TAG_57A();
            if (document.MAINFORM.X103_ACC_BKID_57A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_ACC_BKSW_57A_2', '1', true);
                if (document.MAINFORM.X103_ACC_BKID_57A.value != "") {
                    SYS_GetCUBK('X103_ACC_BKID_57A', 'X103_ACC_BKID_57A');
                    SYS_changeClassName('X103_57A_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_ACC_BKID_57A, 'onchange');
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_ACC_BKSW_57A", e);
    }
}

function Cal_X103_ADV_BKSW_B2() {
    try {
        var nX103_ADV_BKSW_B2; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_ADV_BKID_B2.value = "";
        if (document.MAINFORM.X103_ADV_BKSW_B2.value.length == 11 || document.MAINFORM.X103_ADV_BKSW_B2.value.length == 8) {

            if (document.MAINFORM.X103_ADV_BKSW_B2.value.length == 8) {
                document.MAINFORM.X103_ADV_BKSW_B2.value = document.MAINFORM.X103_ADV_BKSW_B2.value + "XXX";
            }
            //nX103_ADV_BKSW_B2 = document.MAINFORM.X103_ADV_BKSW_B2.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_ADV_BKSW_B2 + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_ADV_BKID_B2";
            if (document.MAINFORM.X103_ADV_BKID_B2.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_ADV_BKSW_B2_3', '1', true);
                Cal_X103_TAG_B2();
                if (document.MAINFORM.X103_ADV_BKID_B2.value != "") {
                    SYS_GetCUBK('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2', 'X103_ADV_BKID_B2_back()');
                    SYS_changeClassName(document.MAINFORM.X103_B2_ADD_BTN.name, 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_ADV_BKID_B2, 'onchange');
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_ADV_BKSW_B2", e);
    }
}

function Cal_X103_BENECU_BKSW_59() {
    try {
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        if (document.MAINFORM.X103_BENECU_BKSW_59.value.length == 11 || document.MAINFORM.X103_BENECU_BKSW_59.value.length == 8) {
            if (document.MAINFORM.X103_BENECU_BKSW_59.value.length == 8) {
                document.MAINFORM.X103_BENECU_BKSW_59.value = document.MAINFORM.X103_BENECU_BKSW_59.value + "XXX";
            }
            //sSQLWhere = "SW_ADD = '" + document.MAINFORM.X103_BENECU_BKSW_59.value + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_BENECU_ID_59A";
            if (document.MAINFORM.X103_BENECU_ID_59A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_BENECU_BKSW_59_4', '1', true);
                Cal_X103_TAG_59A();
                if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
                    SYS_GetCUBK('X103_BENECU_ID_BANK_59A', 'X103_BENECU_ID_59A');
                    SYS_changeClassName('X103_50_ADD_BTN', 'O');
                }
            }
        }
        Cal_X103_TAG_59A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_BENECU_BKSW_59", e);
    }
}

function Cal_X103_MEDI_BKSW_56A() {
    try {
        var nX103_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_MEDI_BKID_56A.value = "";
        if (document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 11 || document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 8) {
            if (document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X103_MEDI_BKSW_56A.value = document.MAINFORM.X103_MEDI_BKSW_56A.value + "XXX";
            }
            //nX103_MEDI_BKSW_56A = document.MAINFORM.X103_MEDI_BKSW_56A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '" + nX103_MEDI_BKSW_56A + "'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_MEDI_BKID_56A";
            if (document.MAINFORM.X103_MEDI_BKID_56A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_MEDI_BKSW_56A_5', '1', true);
                Cal_X103_TAG_56A();
                if (document.MAINFORM.X103_MEDI_BKID_56A.value != "") {
                    SYS_GetCUBK('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A_back()');
                    SYS_changeClassName('X103_56A_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_MEDI_BKID_56A, 'onchange');
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_MEDI_BKSW_56A", e);
    }
}

function Cal_X103_ORDCU_SW_50A() {
    try {
        var nX103_ORDCU_SW_50A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_ORDCU_ID_50A.value = "";
        if (document.MAINFORM.X103_ORDCU_SW_50A.value.length == 11 || document.MAINFORM.X103_ORDCU_SW_50A.value.length == 8) {
            if (document.MAINFORM.X103_ORDCU_SW_50A.value.length == 8) {
                document.MAINFORM.X103_ORDCU_SW_50A.value = document.MAINFORM.X103_ORDCU_SW_50A.value + "XXX";
            }
            //nX103_ORDCU_SW_50A = document.MAINFORM.X103_ORDCU_SW_50A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_ORDCU_SW_50A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_ORDCU_ID_50A";
            if (document.MAINFORM.X103_ORDCU_ID_50A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_ORDCU_SW_50A_6', '1', true);
                Cal_X103_TAG_50A();
                if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
                    SYS_GetCUBK('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A_back()');
                    SYS_changeClassName(document.MAINFORM.X103_50_ADD_BTN.name, 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_ORDCU_ID_50A, 'onchange');
        Cal_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_ORDCU_SW_50A", e);
    }
}

function Cal_X103_ORD_BKSW_52A() {
    try {
        var nX103_ORD_BKSW_52A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_ORD_BKID_52A.value = "";
        if (document.MAINFORM.X103_ORD_BKSW_52A.value.length == 11 || document.MAINFORM.X103_ORD_BKSW_52A.value.length == 8) {
            if (document.MAINFORM.X103_ORD_BKSW_52A.value.length == 8) {
                document.MAINFORM.X103_ORD_BKSW_52A.value = document.MAINFORM.X103_ORD_BKSW_52A.value + "XXX";
            }
            //nX103_ORD_BKSW_52A = document.MAINFORM.X103_ORD_BKSW_52A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like'%" + nX103_ORD_BKSW_52A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_ORD_BKID_52A";
            if (document.MAINFORM.X103_ORD_BKID_52A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_ORD_BKSW_52A_7', '1', true);
                Cal_X103_TAG_52A();
                if (document.MAINFORM.X103_ORD_BKID_52A.value != "") {
                    SYS_GetCUBK('X103_ORD_BKID_52A', 'X103_ORD_BKID_52A', 'X103_ORD_BKID_52A_back()');
                    SYS_changeClassName('X103_52A_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_ORD_BKID_52A, 'onchange');
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_ORD_BKSW_52A", e);
    }
}

function Cal_X103_RECCORRSW_54A() {
    try {
        var nX103_RECCORRSW_54A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_RECCORRID_54A.value = "";
        if (document.MAINFORM.X103_RECCORRSW_54A.value.length == 11 || document.MAINFORM.X103_RECCORRSW_54A.value.length == 8) {
            if (document.MAINFORM.X103_RECCORRSW_54A.value.length == 8) {
                document.MAINFORM.X103_RECCORRSW_54A.value = document.MAINFORM.X103_RECCORRSW_54A.value + "XXX";
            }

            //nX103_RECCORRSW_54A = document.MAINFORM.X103_RECCORRSW_54A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_RECCORRSW_54A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_RECCORRID_54A";
            if (document.MAINFORM.X103_RECCORRID_54A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_RECCORRSW_54A_8', '1', true);
                Cal_X103_TAG_54A();
                if (document.MAINFORM.X103_RECCORRID_54A.value != "") {
                    SYS_GetCUBK('X103_RECCORRID_54A', 'X103_RECCORRID_54A', 'X103_RECCORRID_54A_back()');
                    SYS_changeClassName('X103_54A_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_RECCORRID_54A, 'onchange');
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_RECCORRSW_54A", e);
    }
}

function Cal_X103_SENDCORRSW53A() {
    try {
        var arr; // Utility Auto Fix Comments
        var nX103_SENDCORRSW53A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_SENDCORRID53A.value = "";
        arr = document.MAINFORM.X103_SENDCORRSW53A.value;
        if (arr.length == 11 || document.MAINFORM.X103_SENDCORRSW53A.value.length == 8) {
            if (document.MAINFORM.X103_SENDCORRSW53A.value.length == 8) {
                document.MAINFORM.X103_SENDCORRSW53A.value = document.MAINFORM.X103_SENDCORRSW53A.value + "XXX";
            }
            //nX103_SENDCORRSW53A = document.MAINFORM.X103_SENDCORRSW53A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_SENDCORRSW53A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_SENDCORRID53A";
            if (document.MAINFORM.X103_SENDCORRID53A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_SENDCORRSW53A_9', '1', true);
                Cal_X103_TAG_53A();
                if (document.MAINFORM.X103_SENDCORRID53A.value != "") {
                    SYS_GetCUBK('X103_SENDCORRID53A', 'X103_SENDCORRID53A', 'X103_SENDCORRID53A_back()');
                    SYS_changeClassName('X103_51_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_SENDCORRID53A, 'onchange');
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_SENDCORRSW53A", e);
    }
}

function Cal_X103_SEND_BKSW_51A() {
    try {
        var nX103_SEND_BKSW_51A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X103_SEND_BKID_51A.value = "";
        if (document.MAINFORM.X103_SEND_BKSW_51A.value.length == 11 || document.MAINFORM.X103_SEND_BKSW_51A.value.length == 8) {
            if (document.MAINFORM.X103_SEND_BKSW_51A.value.length == 8) {
                document.MAINFORM.X103_SEND_BKSW_51A.value = document.MAINFORM.X103_SEND_BKSW_51A.value + "XXX";
            }
            //nX103_SEND_BKSW_51A = document.MAINFORM.X103_SEND_BKSW_51A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX103_SEND_BKSW_51A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X103_SEND_BKID_51A";
            if (document.MAINFORM.X103_SEND_BKID_51A.value == "") {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X103_SEND_BKSW_51A_10', '1', true);
                Cal_X103_TAG_51A();
                if (document.MAINFORM.X103_SEND_BKID_51A.value != "") {
                    SYS_GetCUBK('X103_SEND_BKID_51A', 'X103_SEND_BKID_51A', 'X103_SEND_BKID_51A_back()');
                    SYS_changeClassName('X103_51_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X103_SEND_BKID_51A, 'onchange');
        Cal_X103_TAG_51A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_SEND_BKSW_51A", e);
    }
}

function Cal_X103_TAG_50A() {
    try {
        if (document.MAINFORM.X103_ORDCU_SW_50A.value != '') {
            document.MAINFORM.X103_TAG_50A.value = 'A';
            if (document.MAINFORM.X103_ORDCU_SW_50A.value.length == 8) {
                document.MAINFORM.X103_ORDCU_SW_50A.value = document.MAINFORM.X103_ORDCU_SW_50A.value + "XXX";
            }
        } else if (document.MAINFORM.X103_ORDCU_NM_50A.value != "" || document.MAINFORM.X103_ORDCUADD1_50A.value != "" || document.MAINFORM.X103_ORDCUADD2_50A.value != "" || document.MAINFORM.X103_ORDCUADD3_50A.value != "") {
            document.MAINFORM.X103_TAG_50A.value = 'K';
        } else {
            document.MAINFORM.X103_TAG_50A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_TAG_50A", e);
    }
}

function Cal_X103_TAG_51A() {
    try {
        if (document.MAINFORM.X103_SEND_BKSW_51A.value != '') {
            document.MAINFORM.X103_TAG_51A.value = 'A';
            if (document.MAINFORM.X103_SEND_BKSW_51A.value.length == 8) {
                document.MAINFORM.X103_SEND_BKSW_51A.value = document.MAINFORM.X103_SEND_BKSW_51A.value + "XXX";
            }
        } else if (document.MAINFORM.X103SENDBKADD1_51A.value != "" || document.MAINFORM.X103SENDBKADD2_51A.value != "" || document.MAINFORM.X103SENDBKADD3_51A.value != "" || document.MAINFORM.X103_SEND_BKNM_51A.value != "") {
            document.MAINFORM.X103_TAG_51A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_51A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_TAG_51A", e);
    }
}

function Cal_X103_TAG_52A() {
    try {
        if (document.MAINFORM.X103_ORD_BKSW_52A.value != '') {
            document.MAINFORM.X103_TAG_52A.value = 'A';
            if (document.MAINFORM.X103_ORD_BKSW_52A.value.length == 8) {
                document.MAINFORM.X103_ORD_BKSW_52A.value = document.MAINFORM.X103_ORD_BKSW_52A.value + "XXX";
            }
        } else if (document.MAINFORM.X103_ORD_BKNM_52A.value != "" || document.MAINFORM.X103_ORDBKADD1_52A.value != "" || document.MAINFORM.X103_ORDBKADD2_52A.value != "" || document.MAINFORM.X103_ORDBKADD3_52A.value != "") {
            document.MAINFORM.X103_TAG_52A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_52A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_TAG_52A", e);
    }
}

function Cal_X103_TAG_53A() {
    try {
        if (document.MAINFORM.X103_SENDCORRSW53A.value != '') {
            document.MAINFORM.X103_TAG_53A.value = 'A';
            if (document.MAINFORM.X103_SENDCORRSW53A.value.length == 8) {
                document.MAINFORM.X103_SENDCORRSW53A.value = document.MAINFORM.X103_SENDCORRSW53A.value + "XXX";
            }
        } else if (document.MAINFORM.X103_SENDCORRNM53A.value != "" || document.MAINFORM.X103SENDCORADD153A.value != "" || document.MAINFORM.X103SENDCORADD253A.value != "" || document.MAINFORM.X103SENDCORADD353A.value != "") {
            document.MAINFORM.X103_TAG_53A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_53A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_TAG_53A", e);
    }
}

function Cal_X103_TAG_54A() {
    try {
        if (document.MAINFORM.X103_RECCORRSW_54A.value != '') {
            document.MAINFORM.X103_TAG_54A.value = 'A';
            if (document.MAINFORM.X103_RECCORRSW_54A.value.length == 8) {
                document.MAINFORM.X103_RECCORRSW_54A.value = document.MAINFORM.X103_RECCORRSW_54A.value + "XXX";
            }

        } else if (document.MAINFORM.X103_RECCORRNM_54A.value != "" || document.MAINFORM.X103_RECCORADD154A.value != "" || document.MAINFORM.X103_RECCORADD254A.value != "" || document.MAINFORM.X103_RECCORADD354A.value != "") {
            document.MAINFORM.X103_TAG_54A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_54A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_TAG_54A", e);
    }
}

function Cal_X103_TAG_56A() {
    try {
        if (document.MAINFORM.X103_MEDI_BKSW_56A.value != '') {
            document.MAINFORM.X103_TAG_56A.value = 'A';
            if (document.MAINFORM.X103_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X103_MEDI_BKSW_56A.value = document.MAINFORM.X103_MEDI_BKSW_56A.value + "XXX";
            }
        } else if (document.MAINFORM.X103MEDIBKADD1_56A.value != "" || document.MAINFORM.X103MEDIBKADD2_56A.value != "" || document.MAINFORM.X103MEDIBKADD3_56A.value != "" || document.MAINFORM.X103_MEDI_BKNM_56A.value != "") {
            document.MAINFORM.X103_TAG_56A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_56A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_TAG_56A", e);
    }
}

function Cal_X103_TAG_57A() {
    try {
        if (document.MAINFORM.X103_ACC_BKSW_57A.value != '') {
            document.MAINFORM.X103_TAG_57A.value = 'A';
            if (document.MAINFORM.X103_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X103_ACC_BKSW_57A.value = document.MAINFORM.X103_ACC_BKSW_57A.value + "XXX";
            }
        } else if (document.MAINFORM.X103_ACC_BKNM_57A.value != "" || document.MAINFORM.X103_ACCBKADD1_57A.value != "" || document.MAINFORM.X103_ACCBKADD2_57A.value != "" || document.MAINFORM.X103_ACCBKADD3_57A.value != "") {
            document.MAINFORM.X103_TAG_57A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_57A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_TAG_57A", e);
    }
}

function Cal_X103_TAG_59A() {
    try {
        if (document.MAINFORM.X103_BENECU_BKSW_59.value != '') {
            document.MAINFORM.X103_TAG_59A.value = 'A';
        } else if (document.MAINFORM.X103_BENECU_NM_59A.value != "" || document.MAINFORM.X103BENECUADD1_59A.value != "" || document.MAINFORM.X103BENECUADD2_59A.value != "" || document.MAINFORM.X103BENECUADD3_59A.value != "") {
            document.MAINFORM.X103_TAG_59A.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_59A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_TAG_59A", e);
    }
}

function Cal_X103_TAG_B2() {
    try {
        if (document.MAINFORM.X103_ADV_BKSW_B2.value != '') {
            document.MAINFORM.X103_TAG_B2.value = 'A';
            if (document.MAINFORM.X103_ADV_BKSW_B2.value.length == 8) {
                document.MAINFORM.X103_ADV_BKSW_B2.value = document.MAINFORM.X103_ADV_BKSW_B2.value + "XXX";
            }
        } else if (document.MAINFORM.X103_ADV_BKADD1_B2.value != "" || document.MAINFORM.X103_ADV_BKADD2_B2.value != "" || document.MAINFORM.X103_ADV_BKADD3_B2.value != "" || document.MAINFORM.X103_ADV_BKNM_B2.value != "") {
            document.MAINFORM.X103_TAG_B2.value = 'D';
        } else {
            document.MAINFORM.X103_TAG_B2.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_TAG_B2", e);
    }
}

function Cal_X103_VALUE_DT_32A() {
    try {
        document.MAINFORM.X103_VALUE_DT_32A.value = document.MAINFORM.CPYT_CR_VAL_DATE.value;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X103_VALUE_DT_32A", e);
    }
}

function Cal_X202_52_ORDER_NO() {
    try {
        var X202_52_ORDER_NO; // Utility Auto Fix Comments
        var X202_ORDBK_ID_52A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X202_52_ORDER_NO = document.MAINFORM.X202_52_ORDER_NO.value;
        //X202_ORDBK_ID_52A = document.MAINFORM.X202_ORDBK_ID_52A.value;
        //sSQLWhere = "ORDER_NO = " + X202_52_ORDER_NO + " AND C_MAIN_REF = '" + X202_ORDBK_ID_52A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X202_ORDBK_NM_52A;X202_ORDBKADD1_52A;X202_ORDBKADD2_52A;X202_ORDBKADD3_52A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X202_52_ORDER_NO_11', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_52_ORDER_NO", e);
    }
}

function Cal_X202_53_ORDER_NO() {
    try {
        var X202_53_ORDER_NO; // Utility Auto Fix Comments
        var X202_SENDCORRID53A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X202_53_ORDER_NO = document.MAINFORM.X202_53_ORDER_NO.value;
        //X202_SENDCORRID53A = document.MAINFORM.X202_SENDCORRID53A.value;
        //sSQLWhere = "ORDER_NO = " + X202_53_ORDER_NO + " AND C_MAIN_REF = '" + X202_SENDCORRID53A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X202_SENDCORRNM53A;X202SENDCORADD153A;X202SENDCORADD253A;X202SENDCORADD353A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X202_53_ORDER_NO_12', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_53_ORDER_NO", e);
    }
}

function Cal_X202_54_ORDER_NO() {
    try {
        var X202_54_ORDER_NO; // Utility Auto Fix Comments
        var X202_RECCORRID_54A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X202_54_ORDER_NO = document.MAINFORM.X202_54_ORDER_NO.value;
        //X202_RECCORRID_54A = document.MAINFORM.X202_RECCORRID_54A.value;
        //sSQLWhere = "ORDER_NO = " + X202_54_ORDER_NO + " AND C_MAIN_REF = '" + document.MAINFORM.X202_RECCORRID_54A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X202_RECCORRNM_54A;X202_RECCORADD154A;X202_RECCORADD254A;X202_RECCORADD354A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X202_54_ORDER_NO_13', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_54_ORDER_NO", e);
    }
}

function Cal_X202_56_ORDER_NO() {
    try {
        var X202_56_ORDER_NO; // Utility Auto Fix Comments
        var X202_MEDI_BKID_56A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X202_56_ORDER_NO = document.MAINFORM.X202_56_ORDER_NO.value;
        //X202_MEDI_BKID_56A = document.MAINFORM.X202_MEDI_BKID_56A.value;
        //sSQLWhere = "ORDER_NO = " + X202_56_ORDER_NO + " AND C_MAIN_REF = '" + X202_MEDI_BKID_56A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X202_MEDI_BKNM_56A;X202MEDIBKADD1_56A;X202MEDIBKADD2_56A;X202MEDIBKADD3_56A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X202_56_ORDER_NO_14', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_56_ORDER_NO", e);
    }
}

function Cal_X202_57_ORDER_NO() {
    try {
        var X202_57_ORDER_NO; // Utility Auto Fix Comments
        var X202_ACC_BKID_57A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //X202_57_ORDER_NO = document.MAINFORM.X202_57_ORDER_NO.value;
        //X202_ACC_BKID_57A = document.MAINFORM.X202_ACC_BKID_57A.value;
        //sSQLWhere = "ORDER_NO = " + X202_57_ORDER_NO + " AND C_MAIN_REF = '" + X202_ACC_BKID_57A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X202_ACC_BKNM_57A;X202_ACCBKADD1_57A;X202_ACCBKADD2_57A;X202_ACCBKADD3_57A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_Cal_X202_57_ORDER_NO_15', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_57_ORDER_NO", e);
    }
}

function Cal_X202_AMT_32A() {
    try {
        document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_AMT_32A", e);
    }
}

function Cal_X202_CCY_32A() {
    try {
        document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_CCY_32A", e);
    }
}

function Cal_X202_TAG_52A() {
    try {
        if (document.MAINFORM.X202_ORDBK_SW_52A.value != '') {
            document.MAINFORM.X202_TAG_52A.value = 'A';
            if (document.MAINFORM.X202_ORDBK_SW_52A.value.length == 8) {
                document.MAINFORM.X202_ORDBK_SW_52A.value = document.MAINFORM.X202_ORDBK_SW_52A.value + "XXX";
            }

        } else if (document.MAINFORM.X202_ORDBK_NM_52A.value != "" || document.MAINFORM.X202_ORDBKADD1_52A.value != "" || document.MAINFORM.X202_ORDBKADD2_52A.value != "" || document.MAINFORM.X202_ORDBKADD3_52A.value != "") {
            document.MAINFORM.X202_TAG_52A.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_52A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_TAG_52A", e);
    }
}

function Cal_X202_TAG_53A() {
    try {
        if (document.MAINFORM.X202_SENDCORRSW53A.value != '') {
            document.MAINFORM.X202_TAG_53A.value = 'A';

            if (document.MAINFORM.X202_SENDCORRSW53A.value.length == 8) {
                document.MAINFORM.X202_SENDCORRSW53A.value = document.MAINFORM.X202_SENDCORRSW53A.value + "XXX";
            }
        } else if (document.MAINFORM.X202SENDCORADD153A.value != "" || document.MAINFORM.X202SENDCORADD253A.value != "" || document.MAINFORM.X202SENDCORADD353A.value != "" || document.MAINFORM.X202_SENDCORRNM53A.value != "") {
            document.MAINFORM.X202_TAG_53A.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_53A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_TAG_53A", e);
    }
}

function Cal_X202_TAG_54A() {
    try {
        if (document.MAINFORM.X202_RECCORRSW_54A.value != '') {
            document.MAINFORM.X202_TAG_54A.value = 'A';
            if (document.MAINFORM.X202_RECCORRSW_54A.value.length == 8) {
                document.MAINFORM.X202_RECCORRSW_54A.value = document.MAINFORM.X202_RECCORRSW_54A.value + "XXX";
            }
        } else if (document.MAINFORM.X202_RECCORRNM_54A.value != "" || document.MAINFORM.X202_RECCORADD154A.value != "" || document.MAINFORM.X202_RECCORADD254A.value != "" || document.MAINFORM.X202_RECCORADD354A.value != "") {
            document.MAINFORM.X202_TAG_54A.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_54A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_TAG_54A", e);
    }
}

function Cal_X202_TAG_56A() {
    try {
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value != '') {
            document.MAINFORM.X202_TAG_56A.value = 'A';
            if (document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X202_MEDI_BKSW_56A.value = document.MAINFORM.X202_MEDI_BKSW_56A.value + "XXX";
            }
        } else if (document.MAINFORM.X202MEDIBKADD1_56A.value != "" || document.MAINFORM.X202MEDIBKADD2_56A.value != "" || document.MAINFORM.X202MEDIBKADD3_56A.value != "" || document.MAINFORM.X202_MEDI_BKNM_56A.value != "") {
            document.MAINFORM.X202_TAG_56A.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_56A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_TAG_56A", e);
    }
}

function Cal_X202_TAG_57A() {
    try {
        if (document.MAINFORM.X202_ACC_BKSW_57A.value != '') {
            document.MAINFORM.X202_TAG_57A.value = 'A';
            if (document.MAINFORM.X202_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X202_ACC_BKSW_57A.value + "XXX";
            }
        } else if (document.MAINFORM.X202_ACC_BKNM_57A.value != "" || document.MAINFORM.X202_ACCBKADD1_57A.value != "" || document.MAINFORM.X202_ACCBKADD2_57A.value != "" || document.MAINFORM.X202_ACCBKADD3_57A.value != "") {
            document.MAINFORM.X202_TAG_57A.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_57A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_TAG_57A", e);
    }
}

function Cal_X202_TAG_58A() {
    try {
        if (document.MAINFORM.X202_BENE_BKSW_58A.value != '') {
            document.MAINFORM.X202_TAG_58A.value = 'A';
            if (document.MAINFORM.X202_BENE_BKSW_58A.value.length == 8) {
                document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.X202_BENE_BKSW_58A.value + "XXX";
            }
        } else if (document.MAINFORM.X202_BENE_BKNM_58A.value != "" || document.MAINFORM.X202BENEBKADD1_58A.value != "" || document.MAINFORM.X202BENEBKADD2_58A.value != "" || document.MAINFORM.X202BENEBKADD3_58A.value != "") {
            document.MAINFORM.X202_TAG_58A.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_58A.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_TAG_58A", e);
    }
}

function Cal_X202_TAG_B2() {
    try {
        if (document.MAINFORM.X202_ADV_BKSW_B2.value != '') {
            document.MAINFORM.X202_TAG_B2.value = 'A';
            if (document.MAINFORM.X202_ADV_BKSW_B2.value.length == 8) {
                document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.X202_ADV_BKSW_B2.value + "XXX";
            }

        } else if (document.MAINFORM.X202_ADV_BKNM_B2.value != "" || document.MAINFORM.X202_ADV_BKADD1_B2.value != "" || document.MAINFORM.X202_ADV_BKADD2_B2.value != "" || document.MAINFORM.X202_ADV_BKADD3_B2.value != "") {
            document.MAINFORM.X202_TAG_B2.value = 'D';
        } else {
            document.MAINFORM.X202_TAG_B2.value = "";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_TAG_B2", e);
    }
}

function Cal_X202_VALUE_DT_32A() {
    try {
        document.MAINFORM.X202_VALUE_DT_32A.value = document.MAINFORM.CPYT_CR_VAL_DATE.value;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X202_VALUE_DT_32A", e);
    }
}

function Cal_X400_AMT_32A() {
    try {
        //20081205
        document.MAINFORM.X400_NET_AMT_33A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
        document.MAINFORM.X400_COLL_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
        document.MAINFORM.X400_NET_CCY_33A.value = document.MAINFORM.CPYT_CR_CCY.value;
        document.MAINFORM.X400_VALUE_DT_33A.value = document.MAINFORM.CPYT_CR_VAL_DATE.value;
        document.MAINFORM.X400_VALUE_DT_32A.value = document.MAINFORM.CPYT_CR_VAL_DATE.value;
        if ("IMCO" == SYS_MODULE_NAME) {
            document.MAINFORM.X400_COLL_AMT_32A.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
        }
        if ("EPLC" == SYS_MODULE_NAME || "IPLC" == SYS_MODULE_NAME) {
            document.MAINFORM.X400_COLL_AMT_32A.value = document.MAINFORM.PRES_AMT.value;
        }
        if ("REIM" == SYS_MODULE_NAME) {
            document.MAINFORM.X400_COLL_AMT_32A.value = document.MAINFORM.NET_CLAIM_ISSBK.value;
            document.MAINFORM.X400_ADV_BK_ID.value = document.MAINFORM.CLM_BK_ID.value;
            EEHtml.fireEvent(document.MAINFORM.X400_ADV_BK_ID, 'onchange');
        }
        if ("SBLC" == SYS_MODULE_NAME) {
            document.MAINFORM.X400_COLL_AMT_32A.value = document.MAINFORM.CPYT_N_PAY_AMT.value;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X400_AMT_32A", e);
    }
}

function Cal_X400_ORD_BKSW_52A() {
    try {} catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Cal_X400_ORD_BKSW_52A", e);
    }
}

function Change_53andRecevieBank() {
    try {
        if ("REIM" == SYS_MODULE_NAME) {
            if (document.MAINFORM.X400_ADV_BK_ID.value != document.MAINFORM.CLM_BK_ID.value) {
                document.MAINFORM.X400_SENDCORR_BK_ID.value = document.MAINFORM.CLM_BK_ID.value;
            } else {
                document.MAINFORM.X400_SENDCORR_BK_ID.value = '';
            }
            EEHtml.fireEvent(document.MAINFORM.X400_SENDCORR_BK_ID, 'onchange');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Change_53andRecevieBank", e);
    }
}

function Check_CPYT_CR_PER() {
    try {
        var len; // Utility Auto Fix Comments
        var percent; // Utility Auto Fix Comments
        var targetDo; // Utility Auto Fix Comments
        var tolpercent; // Utility Auto Fix Comments
        targetDo = null;
        targetDo = SYS_GetObjByDoName("PaymentCredit");
        if (targetDo == null) {
            return;
        }
        len = targetDo.length;
        if (len < 1) {
            document.MAINFORM.CPYT_CR_PER.value = "100";
            document.MAINFORM.CPYT_CR_AMT_CRCCY.value = document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value;
            document.MAINFORM.CPYT_CR_AMT_TXCCY.value = document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value;
        }

        /* tolpercent = SYS_BeFloat(SYS_GetFldSumByDoName("PaymentCredit","CPYT_CR_PER"));
            percent = 100 - tolpercent;
            document.MAINFORM.CPYT_CR_PER.value = percent;
            document.MAINFORM.CPYT_CR_AMT_CRCCY.value = percent * SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value)/100;
            document.MAINFORM.CPYT_CR_AMT_TXCCY.value = percent * SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value)/100;
        */
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Check_CPYT_CR_PER", e);
    }
}

function CreditInitForFunction() {
    try {
        if (SYS_MODULE_NAME == "IMCO") {
            if (SYS_ORG_FUNCTION_NAME == "Process_MT400") {
                CreditRemoveSelectOption(document.MAINFORM.CPYT_CR_AC_TYPE, "CUSTOMER");
            }
            return;
        }
        if (SYS_MODULE_NAME == "EXCO") {
            if (SYS_ORG_FUNCTION_NAME == "EPLC_PayAtMaturity") {
                if ("" != document.MAINFORM.CFNC_C_REF.value) {
                    SYT_ChangeFldClass(document.MAINFORM.CFNC_C_REF, "P");
                    document.MAINFORM.CPYT_PAY_ADV_MSG.value = "None";
                    document.MAINFORM.CPYT_PAY_COV_MSG.value = "None";
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_ADV_MSG, "P");
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_PAY_COV_MSG, "P");
                }
            }
            if (SYS_ORG_FUNCTION_NAME == "EPLC_Discount") {
                document.MAINFORM.CPYT_CR_TTL_CCY.value = document.MAINFORM.CFNC_C_CCY.value; // Utility Auto Fix Comments
                document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value = SYT_AmtFormat(document.MAINFORM.CPYT_CR_TTL_CCY.value, document.MAINFORM.CFNC_N_NET_AMT.value);
            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CreditInitForFunction", e);
    }
}

function CreditRemoveSelectOption(selectObj, optionValue) {
    try {
        var arr; // Utility Auto Fix Comments
        var arrOption; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var len; // Utility Auto Fix Comments
        var oldValue; // Utility Auto Fix Comments
        oldValue = selectObj.value;
        arrOption = selectObj.options;
        len = arrOption.length;
        arr = new Array();
        for (i = 0; i < len; i++) {
            if (arrOption[i].value != optionValue) {
                arr[arr.length] = arrOption[i];
            }
        }
        selectObj.options.length = 0;
        for (i = 0; i < arr.length; i++) {
            selectObj.options[i] = arr[i];
        }
        selectObj.value = oldValue;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CreditRemoveSelectOption", e);
    }
}

function Credit_Fields() {
    try {
        if (SYS_MODULE_NAME == "IPLC") {
            if (SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount") {
                document.MAINFORM.CPYT_CR_AC_TYPE.value = 'INTERNAL';
                document.MAINFORM.CPYT_CR_AC.value = '123456';
            }
            if (SYS_ORG_FUNCTION_NAME == "IPLC_PaymentAtMaturity") {
                if (document.MAINFORM.DISCNT_FLG.value == "NO") {
                    document.MAINFORM.CPYT_CR_AC_TYPE.value = 'INTERNAL';
                    document.MAINFORM.CPYT_CR_AC.value = '123456';
                }
                if (document.MAINFORM.DISCNT_FLG.value == "YES") {
                    document.MAINFORM.CPYT_CR_AC_TYPE.value = 'INTERNAL';
                    document.MAINFORM.CPYT_CR_AC.value = 'ADV.ACCT.CCY';
                }
            }

        }

        if (SYS_MODULE_NAME == "EXCO") {

            if (SYS_ORG_FUNCTION_NAME == "EXCO_Discount" || SYS_ORG_FUNCTION_NAME == "EXCO_Process400" || SYS_ORG_FUNCTION_NAME == "EXCO_Payment" || (SYS_ORG_FUNCTION_NAME == "EXCO_SettlementAtMaturity" && document.MAINFORM.DISCNT_FLG.value == "NO")) {
                document.MAINFORM.CPYT_CR_AC_TYPE.value = 'CUSTOMER';
            }


        }
        if (SYS_MODULE_NAME == "RPFM") {
            var payfeeccy = document.MAINFORM.SYND_PART_CCY.value
            if (SYS_ORG_FUNCTION_NAME == "ProcessGrantor") {


                if (payfeeccy != "IDR") {
                    document.MAINFORM.CPYT_CR_AC_TYPE.value = 'NOSTRO';
                    document.MAINFORM.CPYT_CR_AC.value = '12011101';

                } else {
                    document.MAINFORM.CPYT_CR_AC_TYPE.value = 'RTGS';
                    document.MAINFORM.CPYT_CR_AC.value = '19511609';


                }
            }
            if (SYS_ORG_FUNCTION_NAME == "RepayGrantor") {
                if (document.MAINFORM.FUND_FLAG.value == "Unfunded" && document.MAINFORM.RISK_FLAG.value == 'Yes') {
                    document.MAINFORM.CPYT_CR_AC_TYPE.value = 'INTERNAL';
                    document.MAINFORM.CPYT_CR_AC.value = '23611301';

                } else if ((document.MAINFORM.FUND_FLAG.value == "Funded" && document.MAINFORM.RISK_FLAG.value == 'No')) {
                    if (payfeeccy != "IDR") {
                        document.MAINFORM.CPYT_CR_AC_TYPE.value = 'NOSTRO';
                        document.MAINFORM.CPYT_CR_AC.value = '12011101';

                    } else {
                        document.MAINFORM.CPYT_CR_AC_TYPE.value = 'RTGS';
                        document.MAINFORM.CPYT_CR_AC.value = '19511609';


                    }

                }
            }
            if (SYS_ORG_FUNCTION_NAME == "SettleParticipant") {
                var payfeeccy = document.MAINFORM.PART_RISK_CCY.value
                if (payfeeccy != "IDR") {
                    document.MAINFORM.CPYT_CR_AC_TYPE.value = 'NOSTRO';
                    document.MAINFORM.CPYT_CR_AC.value = '12011101';


                } else {
                    // document.MAINFORM.CPYT_CR_AC_TYPE.value = 'RTGS';
                    document.MAINFORM.CPYT_CR_AC.value = '11511101';


                }
            }
            if (SYS_ORG_FUNCTION_NAME == "ProcessParticipant") {
                var payfeeccy = document.MAINFORM.PART_RISK_CCY.value
                if (payfeeccy != "IDR") {
                    document.MAINFORM.CPYT_CR_AC_TYPE.value = 'NOSTRO';
                    document.MAINFORM.CPYT_CR_AC.value = '12011101';


                } else {
                    document.MAINFORM.CPYT_CR_AC_TYPE.value = 'RTGS';
                    document.MAINFORM.CPYT_CR_AC.value = '19511609';


                }
            }

        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Credit_Fields", e);
    }
}

function ExchangingRate() {
    try {
        var crAmtPer;
        var fromccy;
        var toccy;
        var trxCrTTL;
        var vAmt;
        fromccy = document.MAINFORM.CPYT_CR_TTL_CCY.value;
        toccy = document.MAINFORM.CPYT_CR_CCY.value;
        trxCrTTL = SYS_BeFloat(document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value);
        //crAmtPer = SYS_BeFloat(document.MAINFORM.CPYT_CR_PER.value) / 100;
        crAmtPer = SYS_BeFloat(SYS_FloatDivToString(SYS_BeFloat(document.MAINFORM.CPYT_CR_PER.value), 100));
        if (fromccy == toccy) {
            document.MAINFORM.CPYT_CR_BUY_RATE.value = 1;
        } else if (SYS_MODULE_NAME == 'CFNC' || SYS_MODULE_NAME == 'SYND' || SYS_MODULE_NAME == 'RPFM' || SYS_MODULE_NAME == 'GTEE' || SYS_MODULE_NAME == 'EPLC') {
            //TAmt = trxCrTTL * crAmtPer;
            TAmt = SYS_FloatMulToString(trxCrTTL, crAmtPer);
            if (SYS_BeFloat(TAmt) <= 0) {
                cpytcreditAmt = 0;
            } else {
                //SYS_calExchAmt(fromccy, SYS_LOCAL_CCY, trxCrTTL * crAmtPer, 'Booking Rate', 'cpytcreditAmt');
                SYS_calExchAmt(fromccy, SYS_LOCAL_CCY, SYS_FloatMulToString(trxCrTTL, crAmtPer), 'Booking Rate', 'cpytcreditAmt');
            }
            if (SYS_BeFloat(cpytcreditAmt) <= 50000) {
                SYS_GetExchangeRate_S(fromccy, toccy, 'Selling Rate', 'CPYT_CR_BUY_RATE');
            } else if (SYS_BeFloat(cpytcreditAmt) > 50000 && SYS_BeFloat(cpytcreditAmt) < 250000) {
                SYS_GetExchangeRate_S(fromccy, toccy, 'Buying Rate', 'CPYT_CR_BUY_RATE');
            } else {
                SYS_GetExchangeRate_S(fromccy, toccy, 'Selling Rate', 'CPYT_CR_BUY_RATE');
            }
        } else {
            if (SYS_MODULE_NAME == 'EXCO' || SYS_MODULE_NAME == 'IMCO') {
                if (fromccy == SYS_LOCAL_CCY && toccy != SYS_LOCAL_CCY) {
                    //cpytcreditAmt = trxCrTTL * crAmtPer;
                    cpytcreditAmt = SYS_FloatMulToString(trxCrTTL, crAmtPer);
                    if (SYS_BeFloat(cpytcreditAmt) <= 50000) {
                        SYS_GetExchangeRate_S(fromccy, toccy, 'Selling Rate', 'CPYT_CR_BUY_RATE');
                    } else if (SYS_BeFloat(cpytcreditAmt) > 250000) {
                        document.MAINFORM.CPYT_CR_BUY_RATE.value = 0.0;
                        alert("Credit amount exceeds local currency 250,000.00, Please obtain the appropriate rate from Treasury!");
                    } else {
                        SYS_GetExchangeRate_S(fromccy, toccy, 'Selling Rate', 'CPYT_CR_BUY_RATE');
                    }
                } else if (toccy == SYS_LOCAL_CCY && fromccy != SYS_LOCAL_CCY) {
                    //get cpytCreditAmt
                    //vAmt = trxCrTTL * crAmtPer;
                    vAmt = SYS_FloatMulToString(trxCrTTL, crAmtPer);
                    if (SYS_BeFloat(vAmt) <= 0) {
                        cpytcreditAmt = 0;
                    } else {
                        //SYS_calExchAmt(fromccy, SYS_LOCAL_CCY, trxCrTTL * crAmtPer, 'Booking Rate', 'cpytcreditAmt');
                        SYS_calExchAmt(fromccy, SYS_LOCAL_CCY, SYS_FloatMulToString(trxCrTTL, crAmtPer), 'Booking Rate', 'cpytcreditAmt');
                    }
                    // use different Buying rate for different cpytDebitAmt
                    if (SYS_BeFloat(cpytcreditAmt) <= 50000) {
                        SYS_GetExchangeRate_S(fromccy, toccy, 'Buying Rate', 'CPYT_CR_BUY_RATE');
                    } else if (SYS_BeFloat(cpytcreditAmt) > 250000) {
                        document.MAINFORM.CPYT_CR_BUY_RATE.value = 0.0;
                        alert("Credit amount exceeds local currency 250,000.00, Please obtain the appropriate rate from Treasury!");
                    } else {
                        SYS_GetExchangeRate_S(fromccy, toccy, 'Buying Rate', 'CPYT_CR_BUY_RATE');
                    }
                } else {
                    SYS_GetExchangeRate_S(fromccy, toccy, 'Booking Rate', 'CPYT_CR_BUY_RATE');
                }
            } else {
                SYS_GetExchangeRate_S(fromccy, toccy, 'Booking Rate', 'CPYT_CR_BUY_RATE');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*ExchangingRate", e);
    }
}

function GetDataForMT400() {
    try {
        document.MAINFORM.X400_VALUE_DT_32A.value = document.MAINFORM.CPYT_CR_VAL_DATE.value;
        if ("IMCO" == SYS_MODULE_NAME) {
            document.MAINFORM.X400_VALUE_DT_33A.value = document.MAINFORM.CPYT_CR_VAL_DATE.value;
            document.MAINFORM.X400_TENOR_DAYS_32K.value = document.MAINFORM.TENOR_DAYS.value;
            document.MAINFORM.X400_DAYMON_FLG_32K.value = document.MAINFORM.DAY_MON_FLG.value;
            document.MAINFORM.X400_TENOR_EVENT_32K.value = document.MAINFORM.TENOR_EVENT.value;
            document.MAINFORM.X400_COLL_AMT_32A.value = document.MAINFORM.COLL_TRX_CCY_AMT.value;
            document.MAINFORM.X400_COLL_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
            document.MAINFORM.X400_DUE_DT_32A.value = document.MAINFORM.DUE_DT.value;
            document.MAINFORM.X400_NET_AMT_33A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
            document.MAINFORM.X400_NET_CCY_33A.value = document.MAINFORM.CPYT_CR_CCY.value;
            document.MAINFORM.X400_RELATEDNO_21.value = document.MAINFORM.COLL_NO.value;
            document.MAINFORM.X400_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        }
        if ("EPLC" == SYS_MODULE_NAME || "IPLC" == SYS_MODULE_NAME) {
            document.MAINFORM.X400_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
            document.MAINFORM.X400_RELATEDNO_21.value = document.MAINFORM.C_MAIN_REF.value;
            document.MAINFORM.X400_COLL_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
            document.MAINFORM.X400_NET_CCY_33A.value = document.MAINFORM.CPYT_CR_CCY.value;
        }
        if ("IPLC" == SYS_MODULE_NAME) {
            document.MAINFORM.X400_RELATEDNO_21.value = document.MAINFORM.PRES_BK_REF.value;
        }
        if ("REIM" == SYS_MODULE_NAME) {
            document.MAINFORM.X400_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
            document.MAINFORM.X400_RELATEDNO_21.value = document.MAINFORM.CLM_BK_CLM_REF.value;
            document.MAINFORM.X400_COLL_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
            document.MAINFORM.X400_NET_CCY_33A.value = document.MAINFORM.CPYT_CR_CCY.value;
        }
        if ("RPFM" == SYS_MODULE_NAME) {
            if (SYS_FUNCTION_NAME == "ProcessGrantor") {
                document.MAINFORM.X400_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
                document.MAINFORM.X400_RELATEDNO_21.value = document.MAINFORM.PART_CNTR_REF.value;
                document.MAINFORM.X400_COLL_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
                document.MAINFORM.X400_COLL_AMT_32A.value = document.MAINFORM.X400_NET_AMT_33A.value; //Added
                document.MAINFORM.X400_NET_CCY_33A.value = document.MAINFORM.CPYT_CR_CCY.value;
            } else if (SYS_ORG_FUNCTION_NAME == "ProcessParticipant" || SYS_ORG_FUNCTION_NAME == "SettleParticipant") {
                document.MAINFORM.X400_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
                document.MAINFORM.X400_RELATEDNO_21.value = document.MAINFORM.C_MAIN_REF.value;
                document.MAINFORM.X400_COLL_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
                document.MAINFORM.X400_COLL_AMT_32A.value = document.MAINFORM.X400_NET_AMT_33A.value;
                document.MAINFORM.X400_NET_CCY_33A.value = document.MAINFORM.CPYT_CR_CCY.value;
                document.MAINFORM.X400_TENOR_EVENT_32K.value = document.MAINFORM.PART_DAYS.value;
                document.MAINFORM.X400_DUE_DT_32A.value = document.MAINFORM.PART_MAT_DT.value;
            } else if (SYS_FUNCTION_NAME == "RepayGrantor") {
                document.MAINFORM.X400_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value; //Added
                document.MAINFORM.X400_RELATEDNO_21.value = document.MAINFORM.C_MAIN_REF.value; //Added
            }
        }
        if ("SYND" == SYS_MODULE_NAME) {
            if (SYS_ORG_FUNCTION_NAME == "SYND_NotePartChg") {
                document.MAINFORM.X400_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
                document.MAINFORM.X400_RELATEDNO_21.value = SYS_getValueFromMain('SYND_PART_ID');
            } else if (SYS_ORG_FUNCTION_NAME == "SyndClaim_LG") {
                document.MAINFORM.X400_COLL_AMT_32A.value = document.MAINFORM.X400_NET_AMT_33A.value; //Added
                document.MAINFORM.X400_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
                document.MAINFORM.X400_RELATEDNO_21.value = document.MAINFORM.CLM_BK_CLM_REF.value;
            }
        }
        if ("CFNC" == SYS_MODULE_NAME) {
            document.MAINFORM.X400_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value; //vadd
            document.MAINFORM.X400_RELATEDNO_21.value = document.MAINFORM.C_MAIN_REF.value;
        }
        if ("SBLC" == SYS_MODULE_NAME) {
            document.MAINFORM.X400_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
            document.MAINFORM.X400_RELATEDNO_21.value = document.MAINFORM.C_MAIN_REF.value;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*GetDataForMT400", e);
    }
}

function Get_CPYT_ASSGN_ID() {
    try {
        var sAcType; // Utility Auto Fix Comments
        var vAssId; // Utility Auto Fix Comments
        vAssId = document.MAINFORM.CPYT_ASSGN_ID.value;
        if (vAssId != "") {
            sAcType = document.MAINFORM.CPYT_CR_AC_TYPE.value;
            if (sAcType == 'CUSTOMER') {
                SYS_GetCUBK('CPYT_ASSGN_AC', 'CPYT_ASSGN_ID');
            } else if (sAcType == 'NOSTRO' || sAcType == 'VOSTRO') {
                SYS_GetCUBK('CPYT_ASSGN_AC_BK', 'CPYT_ASSGN_ID');
            }
        } else {
            document.MAINFORM.CPYT_ASSGN_NM.value = "";
            document.MAINFORM.CPYT_CR_AC.value = "";
        }
        if (vAssId == document.MAINFORM.CPYT_DR_ID.value) {
            alert("Debit & Credit Account number should not be same");
            document.MAINFORM.CPYT_ASSGN_ID.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Get_CPYT_ASSGN_ID", e);
    }
}

function HiddenMT103Tab() {
    try {
        if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == "MT103" || document.MAINFORM.CPYT_PAY_ADV_MSG.value == "PACS008") {
            EEHtml.getElementById('MT103_SEPA').style.display = ""; //EE-10000 remove block
            EEHtml.getElementById('do_PaymentMT103_Tab').style.display = ""; //EE-10000 remove block
            enable103();
        } else {
            SYT_DisableDivClass('do_PaymentMT103');

            EEHtml.getElementById('MT103_SEPA').style.display = 'none';
            EEHtml.getElementById('do_PaymentMT103_Tab').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*HiddenMT103Tab", e);
    }
}

function HiddenMT202Tab() {
    try {
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT202" || document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT202COV" || document.MAINFORM.CPYT_PAY_COV_MSG.value == "PACS009COV") {
            EEHtml.getElementById('ADVMT202_SEPA').style.display = ""; //EE-10000 remove block
            EEHtml.getElementById('do_PaymentMT202_Tab').style.display = ""; //EE-10000 remove block
            enable202();

        } else {
            disable202();
            EEHtml.getElementById('ADVMT202_SEPA').style.display = 'none';
            EEHtml.getElementById('do_PaymentMT202_Tab').style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*HiddenMT202Tab", e);
    }
}

function InqAssignee() {
    try {
        var retValue; // Utility Auto Fix Comments
        var sArgu; // Utility Auto Fix Comments
        var sMainRef; // Utility Auto Fix Comments
        var sStyle; // Utility Auto Fix Comments
        var sURL; // Utility Auto Fix Comments
        sURL = "../SCRN/InquireAssignee.jsp";
        sStyle = "dialogWidth:600px;dialogheight:400px;status:no;help:no;scroll:yes";
        sMainRef = document.MAINFORM.C_MAIN_REF.value;
        sArgu = sMainRef + ";" + SYS_BUSI_UNIT; // Utility Auto Fix Comments
        //retValue = showModalDialog(sURL, sArgu, sStyle);
        InqAssigneeProcessReturn(retValue);
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*InqAssignee", e);
    }
}

function InqAssigneeProcessReturn(retValue) {
    try {
        var obj; // Utility Auto Fix Comments
        var ojbAmtValue; // Utility Auto Fix Comments
        var retArr; // Utility Auto Fix Comments
        if (retValue) {
            retArr = retValue.split(";");
            obj = document.MAINFORM.CPYT_ASSIGNEE_BAL.value;
            document.MAINFORM.I_ASSIGNEE_SEQ.value = retArr[0];
            obj.value = retArr[1];
            dec = findDecFromCCY(obj.value, obj.className);
            ojbAmtValue = SYS_BeFloat(obj.value);
            obj.value = DecimalFormat(ojbAmtValue, dec);
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*InqAssigneeProcessReturn", e);
    }
}

function MPO_CPYT_CR_BUY_RATE() {
    try {
        if (document.MAINFORM.CPYT_CR_CCY.value == document.MAINFORM.CPYT_CR_TRX_CCY.value) {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BUY_RATE, 'P');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BUY_RATE, 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*MPO_CPYT_CR_BUY_RATE", e);
    }
}

function MT400_CAL_TENOR_32K() {
    try {
        var X400_TENOR_DAYS_32K; // Utility Auto Fix Comments
        var cTENOR_EVENT; // Utility Auto Fix Comments
        var nTENOR_DAYS; // Utility Auto Fix Comments
        if (document.MAINFORM.X400_TAG_32.value == "K") {
            nTENOR_DAYS = document.MAINFORM.X400_TENOR_DAYS_32K.value.length;
            cTENOR_EVENT = document.MAINFORM.X400_TENOR_EVENT_32K.value.trim().substr(0, 2);
            X400_TENOR_DAYS_32K = 0;
            if (nTENOR_DAYS == 1) {
                X400_TENOR_DAYS_32K = "00" + document.MAINFORM.X400_TENOR_DAYS_32K.value;
            } else if (nTENOR_DAYS == 2) {
                X400_TENOR_DAYS_32K = "0" + document.MAINFORM.X400_TENOR_DAYS_32K.value;
            } else {
                X400_TENOR_DAYS_32K = document.MAINFORM.X400_TENOR_DAYS_32K.value;
            }
            if (document.MAINFORM.X400_DAYMON_FLG_32K.value == "D") {
                document.MAINFORM.X400_TEMP_32K.value = "D" + X400_TENOR_DAYS_32K + cTENOR_EVENT;
            }
            if (document.MAINFORM.X400_DAYMON_FLG_32K.value == "M") {
                document.MAINFORM.X400_TEMP_32K.value = "M" + X400_TENOR_DAYS_32K + cTENOR_EVENT;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*MT400_CAL_TENOR_32K", e);
    }
}

function MT400_TAG_32() {
    try {
        var DUE_DT; // Utility Auto Fix Comments
        var opvalue; // Utility Auto Fix Comments
        opvalue = document.MAINFORM.CPYT_PAY_ADV_MSG;
        if (opvalue.value == 'MT400') {
            DUE_DT = document.MAINFORM.X400_DUE_DT_32A.value;
            if (DUE_DT != "") {
                document.MAINFORM.X400_TAG_32.value = 'A';
            } else {
                document.MAINFORM.X400_TAG_32.value = 'K';
            }
        } else if (opvalue.value == 'MT756') {
            document.MAINFORM.X400_TAG_32.value = 'B';
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*MT400_TAG_32", e);
    }
}

function PaymentCredit_CancelCheck() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*PaymentCredit_CancelCheck", e);
    }
}

function PaymentCredit_ConfirmBusinessCall() {
    try {
        //Cal_CPYT_NO_CR();
        //20081204
        GetDataForMT400();
        MT400_TAG_32();
        MT400_CAL_TENOR_32K();
        //dane 2008-12-30 begin  Add
        if (document.MAINFORM.CPYT_CR_CCY.value != document.MAINFORM.CPYT_CR_TRX_CCY.value) {
            document.MAINFORM.CPYT_CR_AMT_CRCCY_EXCH.value = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_CRCCY.value);
            document.MAINFORM.CPYT_CR_AMT_MAPING.value = SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value);
        } else {
            document.MAINFORM.CPYT_CR_AMT_CRCCY_EXCH.value = 0;
            document.MAINFORM.CPYT_CR_AMT_MAPING.value = 0;
        }
        if (document.MAINFORM.CPYT_CR_AMT_TXCCY.value != document.MAINFORM.CPYT_CR_TTL_AMT_TTLCCY.value) {
            document.MAINFORM.CPYT_CR_AMT_TXCCY.value = document.MAINFORM.CPYT_CR_AMT_TXCCY.value;
        }
        //for Tag 59 mapping
        if (document.MAINFORM.X103_BENECU_BKSW_59.value == '') {
            document.MAINFORM.TEMP_X103BENECUADD1_59A.value = document.MAINFORM.X103BENECUADD1_59A.value;
            document.MAINFORM.TEMP_X103BENECUADD2_59A.value = document.MAINFORM.X103BENECUADD2_59A.value;
            document.MAINFORM.TEMP_X103BENECUADD3_59A.value = document.MAINFORM.X103BENECUADD3_59A.value;
            document.MAINFORM.TEMP_X103_BENECUACNO59A.value = document.MAINFORM.X103_BENECUACNO59A.value;
            document.MAINFORM.TEMP_X103_BENECU_NM_59A.value = document.MAINFORM.X103_BENECU_NM_59A.value;
        } else {
            document.MAINFORM.TEMP_X103BENECUADD1_59A.value = '';
            document.MAINFORM.TEMP_X103BENECUADD2_59A.value = '';
            document.MAINFORM.TEMP_X103BENECUADD3_59A.value = '';
            document.MAINFORM.TEMP_X103_BENECUACNO59A.value = '';
            document.MAINFORM.TEMP_X103_BENECU_NM_59A.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*PaymentCredit_ConfirmBusinessCall", e);
    }
}

function PaymentCredit_ConfirmBusinessCheck() {
    try {
        if (!CHK_Total_Pct()) {
            return false;
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*PaymentCredit_ConfirmBusinessCheck", e);
    }
}

function PaymentCredit_ConfirmBusinessCheckSave() {
    try {
        return true;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*PaymentCredit_ConfirmBusinessCheckSave", e);
    }
}

function PaymentCredit_InitValues() {
    try {
        var balance; // Utility Auto Fix Comments
        var balance1; // Utility Auto Fix Comments
        var sta; // Utility Auto Fix Comments
        document.MAINFORM.X103_VALUE_DT_32A.value = document.MAINFORM.X202_VALUE_DT_32A.value = SYS_BUSI_DATE;
        document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.X103_SEND_NO_20.value = document.MAINFORM.C_MAIN_REF.value;
        //document.MAINFORM.X202_TRX_REF_NO_20.value = document.MAINFORM.C_MAIN_REF.value;

        if (SYS_MODULE_NAME == "EPLC") {
            if (document.MAINFORM.VALUE_DT_CR.value != '') {

                document.MAINFORM.CPYT_CR_VAL_DATE.value = document.MAINFORM.VALUE_DT_CR.value;
            }
           if( SYS_ORG_FUNCTION_NAME == "EPLC_PayAccept" && document.MAINFORM.DISCNT_FLG.value == "NO"){
           	document.MAINFORM.CPYT_CR_AC_TYPE.value = 'CUSTOMER';
           }
        }
        //moved from postcondition
                if (SYS_MODULE_NAME == "IPLC") {
            if ((SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount"&&document.MAINFORM.DISCNT_FLG.value=='NO') || SYS_ORG_FUNCTION_NAME == "IPLC_PaymentAtMaturity") {
                if (document.MAINFORM.STL_FLG.value == "By Loan") {
                    document.MAINFORM.CPYT_CR_AC_TYPE.value = 'INTERNAL';
                } else {
                    document.MAINFORM.CPYT_CR_AC_TYPE.value = 'CUSTOMER';
                }
            }
        }
        Credit_Fields();
        Set_CPYT_ASSGN_from_MAIN();

        disable103();
        disable202();
        //20081204
        GetDataForMT400();
        //20081205
        sta = CR_checkRecordStatus();
        if (sta == "A") {
            Check_CPYT_CR_PER();
            document.MAINFORM.CPYT_CR_CCY.value = document.MAINFORM.CPYT_CR_TTL_CCY.value;
        }
        document.MAINFORM.CPYT_CR_TRX_CCY.value = document.MAINFORM.CPYT_CR_TTL_CCY.value;
        CAL_CPYT_CR_CCY();
        ExchangingRate();
        Cal_X202_CCY_32A();
        if (ccyflag) {
            document.MAINFORM.X103_SENDCHGCCY71F.value = document.MAINFORM.CPYT_CR_CCY.value;
            document.MAINFORM.X103_RECCHGCCY_71G.value = document.MAINFORM.CPYT_CR_CCY.value;
            ccyflag = false;
        }
        Set_X400_ADV_BK_ID_from_MAIN();
        //add by amy for SMBC Demo in 20120906
        CAL_CPYT_CR_PER();
        document.MAINFORM.X103_DET_CHG_71A.value = 'SHA'; // add by jesse for Defect #4424 point 3 2014/3/10
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*PaymentCredit_InitValues", e);
    }
}

function PaymentCredit_PostconditionOnInit() {
    try {
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_VAL_DATE, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_CCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AMT_CRCCY, 'M');
        SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_BUY_RATE, 'M');
        MPO_CPYT_CR_BUY_RATE();
        if ("IMCO" == SYS_MODULE_NAME) {
            initCPYT_PAY_ADV_MSG("MT756");
        }
        if ("EPLC" == SYS_MODULE_NAME || "IPLC" == SYS_MODULE_NAME || "REIM" == SYS_MODULE_NAME || "SYND" == SYS_MODULE_NAME) { //FOR #66487 jax added SYND 2020/5/26
            initCPYT_PAY_ADV_MSG("MT400");
        }
        if ("GTEE" == SYS_MODULE_NAME || "IWGT" == SYS_MODULE_NAME || "EXCO" == SYS_MODULE_NAME) {
            initCPYT_PAY_ADV_MSG("MT400");
            initCPYT_PAY_ADV_MSG("MT756");
        }
        if (document.MAINFORM.CPYT_PAY_ADV_MSG.value == "MT103" || document.MAINFORM.CPYT_PAY_ADV_MSG.value == "PACS008") {
            enable103();
        }
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT202") {
            enable202();
        }
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT202COV" || document.MAINFORM.CPYT_PAY_ADV_MSG.value == "PACS009COV") {
            enable103();
            enable202();
            //document.MAINFORM.CPYT_PAY_ADV_MSG.value = "MT103";
        }
        GetDataForMT400();
        checkSWIFTname();
        Show_MESSAGE_TYPE();
        CreditInitForFunction();
        if ("Bank" == document.MAINFORM.X103_BENECU_OP.value) {
            SYS_changeClassName('X103_BENECU_BKSW_59', 'O');
        }

        X103_TAG_50Achange();

        if (SYS_ORG_FUNCTION_NAME == "EXCO_SettlementAtMaturity" || SYS_ORG_FUNCTION_NAME == "EPLC_PayAtMaturity" || SYS_ORG_FUNCTION_NAME == "EPLC_PaymentAtMaturityFrCE") {
            if (document.MAINFORM.DISCNT_FLG.value == "YES") {
                //SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC, 'P');marked for cannot get acno
                //SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC_BTN, 'P');marked for cannot get acno
                SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_PER, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_CCY, 'P');
                SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AMT_CRCCY, 'P');
                CPYT_CR_PER();
            }
        }

        CAL_X103_RECCHGAMT_71G();
        CAL_X103_SENDCHGAMT71F();

        //for hidden mt103,mt202 if Payment Advice or Cover Message are not 202,103
        HiddenMT103Tab();
        HiddenMT202Tab();

        //Add by amy for SMBC Memo in 20120908
        Cal_CPYT_CR_AC_TYPE();

        if (document.MAINFORM.X103_DET_CHG_71A.value == 'BEN') {
            SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X103_RECCHGAMT_71G, 'P');
        }
        if (document.MAINFORM.X103_DET_CHG_71A.value == 'OUR') {
            SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X103_RECCHGAMT_71G, 'O');
        }

        if (document.MAINFORM.X103_DET_CHG_71A.value == 'SHA') {
            SYT_ChangeFldClass(document.MAINFORM.X103_RECCHGAMT_71G, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, 'O');
        }

        if (SYS_MODULE_NAME == "IPLC") {
            if ((SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount"&&document.MAINFORM.DISCNT_FLG.value=='NO') || SYS_ORG_FUNCTION_NAME == "IPLC_PaymentAtMaturity") {
                if (document.MAINFORM.STL_FLG.value == "By Loan") {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC_TYPE, 'P');
                    Cal_CPYT_CR_AC_TYPE();
                } else {
                    SYT_ChangeFldClass(document.MAINFORM.CPYT_CR_AC_TYPE, 'O');
                    Cal_CPYT_CR_AC_TYPE();
                }
            }
        }

        if ("RPFM" == SYS_MODULE_NAME) {
            if (document.MAINFORM.CPYT_ASSGN_ID.value != '') {
                CPYT_ASSGN_ID_onchange();
            }
        }
        //Added
        if ("RPFM" == SYS_MODULE_NAME) {
            var arraySelects = EEHtml.getElementById('CPYT_PAY_ADV_MSG');
            for (var i = 0; i < arraySelects.length; i++) {
                if (arraySelects[i].value == "MT400") {
                    arraySelects.remove(i);
                }
            }
        }
        //65699;
        if ("EPLC" != SYS_MODULE_NAME) {
            balance = EEHtml.getElementById("BALANCE");
            balance1 = EEHtml.getElementById("BALANCE1");
            balance.style.display = "none";
            balance1.style.display = "none";
        } //65699;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*PaymentCredit_PostconditionOnInit", e);
    }
}

function PaymentCredit_PreconditionOnInit() {
    try {} catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*PaymentCredit_PreconditionOnInit", e);
    }
}

function SET_CPYT_VOUCHER_DR_DESC() {
    try {
        switch (SYS_ORG_FUNCTION_NAME) {
            case "EXCO_Discount":
                document.MAINFORM.CPYT_VOUCHER_CR_DESC.value = "1234";
                break;
            case "EXCO_Payment":
                document.MAINFORM.CPYT_VOUCHER_CR_DESC.value = "3456";
                break;
            case "EXCO_Process400":
                document.MAINFORM.CPYT_VOUCHER_CR_DESC.value = "3456";
                break;

        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*SET_CPYT_VOUCHER_DR_DESC", e);
    }
}

function Set_CPYT_ASSGN_from_MAIN() {
    try {
        if (SYS_MODULE_NAME == "EPLC") {
            if (document.MAINFORM.CPYT_CR_AC_TYPE.value == 'CUSTOMER') {
                document.MAINFORM.CPYT_ASSGN_ID.value = document.MAINFORM.BENE_ID.value;
                document.MAINFORM.CPYT_ASSGN_NM.value = document.MAINFORM.BENE_NM.value;
            } else {
                if (document.MAINFORM.CPYT_ASSGN_ID.value == '') {
                    document.MAINFORM.CPYT_ASSGN_ID.value = '';
                    document.MAINFORM.CPYT_ASSGN_NM.value = '';
                }
            }
        }

        //Add by amy for SMBC Demo in 20120906
       else if (SYS_MODULE_NAME == "IMCO") {
            if (document.MAINFORM.CPYT_CR_AC_TYPE.value == 'CUSTOMER') {
                document.MAINFORM.CPYT_ASSGN_ID.value = document.MAINFORM.DRWR_ID.value;
                document.MAINFORM.CPYT_ASSGN_NM.value = document.MAINFORM.DRWR_NM.value;
            } else {
                if (document.MAINFORM.CPYT_ASSGN_ID.value == '') {
                    document.MAINFORM.CPYT_ASSGN_ID.value = '';
                    document.MAINFORM.CPYT_ASSGN_NM.value = '';
                }
            }
        }

       else if (SYS_MODULE_NAME == "EXCO") {
            if (document.MAINFORM.CPYT_CR_AC_TYPE.value == 'CUSTOMER') {
                document.MAINFORM.CPYT_ASSGN_ID.value = document.MAINFORM.DRWR_ID.value;
                document.MAINFORM.CPYT_ASSGN_NM.value = document.MAINFORM.DRWR_NM.value;
            } else {
                if (document.MAINFORM.CPYT_ASSGN_ID.value == '') {
                    document.MAINFORM.CPYT_ASSGN_ID.value = '';
                    document.MAINFORM.CPYT_ASSGN_NM.value = '';
                }
            }
        } else {
            if (document.MAINFORM.CPYT_CR_AC_TYPE.value == 'CUSTOMER' || document.MAINFORM.CPYT_CR_AC_TYPE.value == 'NOSTRO' || document.MAINFORM.CPYT_CR_AC_TYPE.value == 'VOSTRO') {
                document.MAINFORM.CPYT_ASSGN_ID.value = '';
                document.MAINFORM.CPYT_ASSGN_NM.value = ''; //vadd
                document.MAINFORM.CPYT_CR_AC.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Set_CPYT_ASSGN_from_MAIN", e);
    }
}

function Set_X400_ADV_BK_ID_from_MAIN() {
    try {
        var SWIFTvalue; // Utility Auto Fix Comments
        if ("IPLC" == SYS_MODULE_NAME) {
            SWIFTvalue = EEHtml.getElementById("CPYT_PAY_ADV_MSG");
            if (SWIFTvalue.value == "MT756") {
                document.MAINFORM.X400_ADV_BK_ID.value = document.MAINFORM.ADV_BK_ID.value;
                document.MAINFORM.X400_ADV_BK_NM.value = document.MAINFORM.ADV_BK_NM.value;
                document.MAINFORM.X400_ADV_BK_ADD1.value = document.MAINFORM.ADV_BK_ADD1.value;
                document.MAINFORM.X400_ADV_BK_ADD2.value = document.MAINFORM.ADV_BK_ADD2.value;
                document.MAINFORM.X400_ADV_BK_ADD3.value = document.MAINFORM.ADV_BK_ADD3.value;
                document.MAINFORM.X400_ADV_BK_SW_ADD.value = document.MAINFORM.ADV_BK_SW_ADD.value;
                document.MAINFORM.X400_ADV_BK_SW_TAG.value = document.MAINFORM.ADV_BK_SW_TAG.value;
            } else {
                document.MAINFORM.X400_ADV_BK_ID.value = '';
                document.MAINFORM.X400_ADV_BK_NM.value = '';
                document.MAINFORM.X400_ADV_BK_ADD1.value = '';
                document.MAINFORM.X400_ADV_BK_ADD2.value = '';
                document.MAINFORM.X400_ADV_BK_ADD3.value = '';
                document.MAINFORM.X400_ADV_BK_SW_ADD.value = '';
                document.MAINFORM.X400_ADV_BK_SW_TAG.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Set_X400_ADV_BK_ID_from_MAIN", e);
    }
}

function Show_MESSAGE_TYPE() {
    try {
        var SWIFTdiv2; // Utility Auto Fix Comments
        var SWIFTdiv3; // Utility Auto Fix Comments
        var SWIFTdiv4; // Utility Auto Fix Comments
        var SWIFTvalue; // Utility Auto Fix Comments
        var tab; // Utility Auto Fix Comments
        SWIFTvalue = EEHtml.getElementById("CPYT_PAY_ADV_MSG");
        tab = EEHtml.getElementById("do_PaymentMT400_Tab");
        SWIFTdiv2 = EEHtml.getElementById("MT400_DIV_2");
        SWIFTdiv3 = EEHtml.getElementById("MT400_DIV_3");
        SWIFTdiv4 = EEHtml.getElementById("MT400_DIV_4");
        if (SWIFTvalue.value == "MT756") {
            tab.innerHTML = "MT756";
            tab.style.display = "";
            SYT_ChangeFldClass(document.MAINFORM.X400_ADV_BK_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X400_ADV_BK_NM, 'M');
            SWIFTdiv2.style.display = "none";
            SWIFTdiv3.style.display = "none";
            SWIFTdiv4.style.display = "none";
            EEHtml.getElementById("MT400_SEPA").style.display = "block";
        } else if (SWIFTvalue.value == 'MT400') {
            tab.innerHTML = "MT400";
            tab.style.display = "";
            SYT_ChangeFldClass(document.MAINFORM.X400_ADV_BK_ID, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X400_ADV_BK_NM, 'M');
            SWIFTdiv2.style.display = "";
            SWIFTdiv3.style.display = "";
            SWIFTdiv4.style.display = "";
            EEHtml.getElementById("MT400_SEPA").style.display = "block";
        } else {
            tab.style.display = "none";
            SYT_ChangeFldClass(document.MAINFORM.X400_ADV_BK_ID, 'O');
            SYT_ChangeFldClass(document.MAINFORM.X400_ADV_BK_NM, 'O');
            EEHtml.getElementById("MT400_SEPA").style.display = "none";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*Show_MESSAGE_TYPE", e);
    }
}

function VDO_Set_X103_CDTR() {
    try {
        var nm = document.MAINFORM.X103_BENECU_NM_59A.value;
        var add1 = document.MAINFORM.X103BENECUADD1_59A.value;
        var add2 = document.MAINFORM.X103BENECUADD2_59A.value;
        var add3 = document.MAINFORM.X103BENECUADD3_59A.value;
        var vdo = document.querySelector('#MX_CDTR');
        var info = info = '{"Nm":"' + nm + '", "PstlAdr":{"AdrLine":[{"AdrLine":"' + add1 + '"},{"AdrLine":"' + add2 + '"},{"AdrLine":"' + add3 + '"}]}}';
        vdo.value = Object.assign(vdo.value || {}, JSON.parse(info));
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*VDO_Set_X103_CDTR", e);
    }
}

function VDO_Set_X103_CDTRAGT() {
    try {
        var bic = document.MAINFORM.X103_ACC_BKSW_57A.value;
        var nm = document.MAINFORM.X103_ACC_BKNM_57A.value;
        var add1 = document.MAINFORM.X103_ACCBKADD1_57A.value;
        var add2 = document.MAINFORM.X103_ACCBKADD2_57A.value;
        var add3 = document.MAINFORM.X103_ACCBKADD3_57A.value;
        var vdo = document.querySelector('#MX_CDTRAGT');
        var info = '{"FinInstnId": {"BICFI":"' + bic + '", "Nm":"' + nm + '", "PstlAdr":{"AdrLine":[{"AdrLine":"' + add1 + '"},{"AdrLine":"' + add2 + '"},{"AdrLine":"' + add3 + '"}]}}}';
        vdo.value = Object.assign(vdo.value || {}, JSON.parse(info));
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*VDO_Set_X103_CDTRAGT", e);
    }
}

function VDO_Set_X103_DBTR() {
    try {
        var type = document.MAINFORM.X103_ORDCU_ID_OP.value;
        var bic = document.MAINFORM.X103_ORDCU_SW_50A.value;
        var nm = document.MAINFORM.X103_ORDCU_NM_50A.value;
        var add1 = document.MAINFORM.X103_ORDCUADD1_50A.value;
        var add2 = document.MAINFORM.X103_ORDCUADD2_50A.value;
        var add3 = document.MAINFORM.X103_ORDCUADD3_50A.value;
        var vdo = document.querySelector('#MX_DBTR');
        if (type == 'Bank') {
            var info = info = '{"Nm":"' + nm + '", "PstlAdr":{"AdrLine":[{"AdrLine":"' + add1 + '"},{"AdrLine":"' + add2 + '"},{"AdrLine":"' + add3 + '"}]}, "Id":{"OrgId":{"AnyBIC": "' + bic + '"}}}';
        } else {
            var info = info = '{"Nm":"' + nm + '", "PstlAdr":{"AdrLine":[{"AdrLine":"' + add1 + '"},{"AdrLine":"' + add2 + '"},{"AdrLine":"' + add3 + '"}]}}';
        }
        vdo.value = Object.assign(vdo.value || {}, JSON.parse(info));
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*VDO_Set_X103_DBTR", e);
    }
}

function VDO_Set_X103_DBTRAGT() {
    try {
        var bic = document.MAINFORM.X103_SEND_BKSW_51A.value;
        var nm = document.MAINFORM.X103_SEND_BKNM_51A.value;
        var add1 = document.MAINFORM.X103SENDBKADD1_51A.value;
        var add2 = document.MAINFORM.X103SENDBKADD2_51A.value;
        var add3 = document.MAINFORM.X103SENDBKADD3_51A.value;
        var vdo = document.querySelector('#MX_DBTRAGT');
        var info = '{"FinInstnId": {"BICFI":"' + bic + '", "Nm":"' + nm + '", "PstlAdr":{"AdrLine":[{"AdrLine":"' + add1 + '"},{"AdrLine":"' + add2 + '"},{"AdrLine":"' + add3 + '"}]}}}';
        vdo.value = Object.assign(vdo.value || {}, JSON.parse(info));
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*VDO_Set_X103_DBTRAGT", e);
    }
}

function VDO_Set_X103_INSTDAGT() {
    try {
        var bic = document.MAINFORM.X103_ADV_BKSW_B2.value;
		if(document.getElementById("MX_INSTDAGT") && SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount"){
			var v = new Vdo('MX_INSTDAGT');
            v.set('FinInstnId/BICFI', bic);
            v.save();
		}
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*VDO_Set_X103_INSTDAGT", e);
    }
}

function VDO_Set_X202_CDTR() {
    try {
        var bic = document.MAINFORM.X202_BENE_BKSW_58A.value;
        var nm = document.MAINFORM.X202_BENE_BKNM_58A.value;
        var add1 = document.MAINFORM.X202BENEBKADD1_58A.value;
        var add2 = document.MAINFORM.X202BENEBKADD2_58A.value;
        var add3 = document.MAINFORM.X202BENEBKADD3_58A.value;
        var vdo = document.querySelector('#MX_CDTR_PACS009');
        var info = '{"FinInstnId": {"BICFI":"' + bic + '", "Nm":"' + nm + '", "PstlAdr":{"AdrLine":[{"AdrLine":"' + add1 + '"},{"AdrLine":"' + add2 + '"},{"AdrLine":"' + add3 + '"}]}}}';
        vdo.value = Object.assign(vdo.value || {}, JSON.parse(info));
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*VDO_Set_X202_CDTR", e);
    }
}

function VDO_Set_X202_DBTR() {
    try {
        var bic = document.MAINFORM.X202_ORDBK_SW_52A.value;
        var nm = document.MAINFORM.X202_ORDBK_NM_52A.value;
        var add1 = document.MAINFORM.X202_ORDBKADD1_52A.value;
        var add2 = document.MAINFORM.X202_ORDBKADD2_52A.value;
        var add3 = document.MAINFORM.X202_ORDBKADD3_52A.value;
        var vdo = document.querySelector('#MX_DBTR_PACS009');
        var info = '{"FinInstnId": {"BICFI":"' + bic + '", "Nm":"' + nm + '", "PstlAdr":{"AdrLine":[{"AdrLine":"' + add1 + '"},{"AdrLine":"' + add2 + '"},{"AdrLine":"' + add3 + '"}]}}}';
        vdo.value = Object.assign(vdo.value || {}, JSON.parse(info));
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*VDO_Set_X202_DBTR", e);
    }
}

function VDO_Set_X202_INSTDAGT() {
    try {
        var bic = document.MAINFORM.X202_ADV_BKSW_B2.value;
		if(document.getElementById("MX_INSTDAGT_PACS009") && SYS_ORG_FUNCTION_NAME == "IPLC_PayAcceptWithDiscount"){
			var v = new Vdo('MX_INSTDAGT_PACS009');
            v.set('FinInstnId/BICFI', bic);
            v.save();
		}
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*VDO_Set_X202_INSTDAGT", e);
    }
}

function X103_50_ORDER_NO() {
    try {
        var X103_ORDCU_ID_50A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_50_ORDER_NO; // Utility Auto Fix Comments
        //vX103_50_ORDER_NO = document.MAINFORM.X103_50_ORDER_NO.value;
        //X103_ORDCU_ID_50A = document.MAINFORM.X103_ORDCU_ID_50A.value;
        //sSQLWhere = "ORDER_NO = " + X103_50_ORDER_NO + " AND C_MAIN_REF = '" + X103_ORDCU_ID_50A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_ORDCU_NM_50A;X103_ORDCUADD1_50A;X103_ORDCUADD2_50A;X103_ORDCUADD3_50A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_50_ORDER_NO_16', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_50_ORDER_NO", e);
    }
}

function X103_51_ORDER_NO() {
    try {
        var X103_SEND_BKID_51A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_51_ORDER_NO; // Utility Auto Fix Comments
        //vX103_51_ORDER_NO = document.MAINFORM.X103_51_ORDER_NO.value;
        //X103_SEND_BKID_51A = document.MAINFORM.X103_SEND_BKID_51A.value;
        //sSQLWhere = "ORDER_NO = " + X103_51_ORDER_NO + " AND C_MAIN_REF = '" + X103_SEND_BKID_51A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_SEND_BKNM_51A;X103SENDBKADD1_51A;X103SENDBKADD2_51A;X103SENDBKADD3_51A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_51_ORDER_NO_17', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_51_ORDER_NO", e);
    }
}

function X103_52_ORDER_NO() {
    try {
        var X103_ORD_BKID_52A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_52_ORDER_NO; // Utility Auto Fix Comments
        //vX103_52_ORDER_NO = document.MAINFORM.X103_52_ORDER_NO.value;
        //X103_ORD_BKID_52A = document.MAINFORM.X103_ORD_BKID_52A.value;
        //sSQLWhere = "ORDER_NO = " + X103_52_ORDER_NO + " AND C_MAIN_REF = '" + X103_ORD_BKID_52A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_ORD_BKNM_52A;X103_ORDBKADD1_52A;X103_ORDBKADD2_52A;X103_ORDBKADD3_52A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_52_ORDER_NO_18', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_52_ORDER_NO", e);
    }
}

function X103_53_ORDER_NO() {
    try {
        var X103_SENDCORRID53A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_53_ORDER_NO; // Utility Auto Fix Comments
        //vX103_53_ORDER_NO = document.MAINFORM.X103_53_ORDER_NO.value;
        //X103_SENDCORRID53A = document.MAINFORM.X103_SENDCORRID53A.value;
        //sSQLWhere = "ORDER_NO = " + X103_53_ORDER_NO + " AND C_MAIN_REF = '" + X103_SENDCORRID53A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_SENDCORRNM53A;X103SENDCORADD153A;X103SENDCORADD253A;X103SENDCORADD353A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_53_ORDER_NO_19', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_53_ORDER_NO", e);
    }
}

function X103_54_ORDER_NO() {
    try {
        var X103_RECCORRID_54A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_54_ORDER_NO; // Utility Auto Fix Comments
        //vX103_54_ORDER_NO = document.MAINFORM.X103_54_ORDER_NO.value;
        //X103_RECCORRID_54A = document.MAINFORM.X103_RECCORRID_54A.value;
        //sSQLWhere = "ORDER_NO = " + X103_54_ORDER_NO + " AND C_MAIN_REF = '" + X103_RECCORRID_54A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_RECCORRNM_54A;X103_RECCORADD154A;X103_RECCORADD254A;X103_RECCORADD354A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_54_ORDER_NO_20', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_54_ORDER_NO", e);
    }
}

function X103_56_ORDER_NO() {
    try {
        var X103_MEDI_BKID_56A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_56_ORDER_NO; // Utility Auto Fix Comments
        //vX103_56_ORDER_NO = document.MAINFORM.X103_56_ORDER_NO.value;
        //X103_MEDI_BKID_56A = document.MAINFORM.X103_MEDI_BKID_56A.value;
        //sSQLWhere = "ORDER_NO = " + document.MAINFORM.X103_56_ORDER_NO + " AND C_MAIN_REF = '" + document.MAINFORM.X103_MEDI_BKID_56A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_MEDI_BKNM_56A;X103MEDIBKADD1_56A;X103MEDIBKADD2_56A;X103MEDIBKADD3_56A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_56_ORDER_NO_21', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_56_ORDER_NO", e);
    }
}

function X103_57_ORDER_NO() {
    try {
        var X103_ACC_BKID_57A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_57_ORDER_NO; // Utility Auto Fix Comments
        //vX103_57_ORDER_NO = document.MAINFORM.X103_57_ORDER_NO.value;
        //X103_ACC_BKID_57A = document.MAINFORM.X103_ACC_BKID_57A.value;
        //sSQLWhere = "ORDER_NO = " + X103_57_ORDER_NO + " AND C_MAIN_REF = '" + X103_ACC_BKID_57A + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_ACC_BKNM_57A;X103_ACCBKADD1_57A;X103_ACCBKADD2_57A;X103_ACCBKADD3_57A";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_57_ORDER_NO_22', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_57_ORDER_NO", e);
    }
}

function X103_ACC_BKID_57A() {
    try {
        SYS_GetCUBK_S('X103_ACC_BKID_57A', 'X103_ACC_BKID_57A');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ACC_BKID_57A", e);
    }
}

function X103_ACC_BKID_57A_back() {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ACC_BKID_57A_back", e);
    }
}

function X103_ACC_BKID_57Aonchange() {
    try {
        if (document.MAINFORM.X103_ACC_BKID_57A.value != "") {
            SYS_GetCUBK_S('X103_ACC_BKID_57A', 'X103_ACC_BKID_57A');
            Cal_X103_TAG_57A();
            SYS_changeClassName('X103_57A_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_ACC_BKSW_57A.value = "";
            document.MAINFORM.X103_ACC_BKNM_57A.value = "";
            document.MAINFORM.X103_ACCBKADD1_57A.value = "";
            document.MAINFORM.X103_ACCBKADD2_57A.value = "";
            document.MAINFORM.X103_ACCBKADD3_57A.value = "";
            document.MAINFORM.X103_TAG_57A.value = "";
            document.MAINFORM.X103_ACC_BKACNO57A.value = "";
            SYS_changeClassName('X103_57A_ADD_BTN', 'P');
            var vagt = document.querySelector('#MX_CDTRAGT');
            var vacc = document.querySelector('#MX_CDTRAGTACCT');
            vagt.value = {};
            vacc.value = {};
        }
        SYT_CHK_AC_NO(document.MAINFORM.X103_ACC_BKACNO57A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ACC_BKID_57Aonchange", e);
    }
}

function X103_ACC_BKID_57Aonclick() {
    try {
        var nX103_ACC_BKSW_57A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_ACC_BKID_57A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ACC_BKID_57Aonclick", e);
    }
}

function X103_ADV_BKID_B2() {
    try {
        SYS_GetCUBK_S('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ADV_BKID_B2", e);
    }
}

function X103_ADV_BKID_B2_back() {
    try {
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ADV_BKID_B2_back", e);
    }
}

function X103_ADV_BKID_B2onchange() {
    try {
        if (document.MAINFORM.X103_ADV_BKID_B2.value != "") {
            SYS_GetCUBK_S('X103_ADV_BKID_B2', 'X103_ADV_BKID_B2');
            Cal_X103_TAG_B2();
            SYS_changeClassName('X103_B2_ADD_BTN', 'O');
			VDO_Set_X103_INSTDAGT();
        } else {
            document.MAINFORM.X103_ADV_BKSW_B2.value = "";
            document.MAINFORM.X103_ADV_BKNM_B2.value = "";
            document.MAINFORM.X103_ADV_BKADD1_B2.value = "";
            document.MAINFORM.X103_ADV_BKADD2_B2.value = "";
            document.MAINFORM.X103_ADV_BKADD3_B2.value = "";
            document.MAINFORM.X103_TAG_B2.value = "";
            SYS_changeClassName(document.MAINFORM.X103_B2_ADD_BTN.name, 'P');
            var vagt = document.querySelector('#MX_INSTDAGT');
            vagt.value = {};
        }
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ADV_BKID_B2onchange", e);
    }
}

function X103_ADV_BKID_B2onclick() {
    try {
        var nX103_ADV_BKSW_B2; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_ADV_BKID_B2', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ADV_BKID_B2onclick", e);
    }
}

function X103_B2_ORDER_NO() {
    try {
        var X103_ADV_BKID_B2; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        var vX103_B2_ORDER_NO; // Utility Auto Fix Comments
        //vX103_B2_ORDER_NO = document.MAINFORM.X103_B2_ORDER_NO.value;
        //X103_ADV_BKID_B2 = document.MAINFORM.X103_ADV_BKID_B2.value;
        //sSQLWhere = "ORDER_NO = " + X103_B2_ORDER_NO + " AND C_MAIN_REF = '" + X103_ADV_BKID_B2 + "'";
        //sTableName = "SWF_ADD_DO";
        //sFieldList = "SWF_FMT_NM;SWIFT_FMT_ADD1;SWIFT_FMT_ADD2;SWIFT_FMT_ADD3";
        //sMappingList = "X103_ADV_BKNM_B2;X103_ADV_BKADD1_B2;X103_ADV_BKADD2_B2;X103_ADV_BKADD3_B2";
        SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X103_B2_ORDER_NO_23', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_B2_ORDER_NO", e);
    }
}

function X103_BENECU_ID_59Aonchange() {
    try {
        if (document.MAINFORM.X103_BENECU_ID_59A.value != "") {
            if ("Customer" == document.MAINFORM.X103_BENECU_OP.value) {
                SYS_GetCUBK_S('X103_BENECU_ID_59A', 'X103_BENECU_ID_59A');
            } else {
                SYS_GetCUBK_S('X103_BENECU_ID_BANK_59A', 'X103_BENECU_ID_59A');
                Cal_X103_TAG_59A();
            }
            SYS_changeClassName('X103_59_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_BENECU_NM_59A.value = "";
            document.MAINFORM.X103BENECUADD1_59A.value = "";
            document.MAINFORM.X103BENECUADD2_59A.value = "";
            document.MAINFORM.X103BENECUADD3_59A.value = "";
            document.MAINFORM.X103_BENECU_BKSW_59.value = "";
            document.MAINFORM.X103_TAG_59A.value = "";
            document.MAINFORM.X103_BENECUACNO59A.value = "";
            SYS_changeClassName('X103_59_ADD_BTN', 'P');
            var vagt = document.querySelector('#MX_CDTR');
            var vacc = document.querySelector('#MX_CDTRACCT');
            vagt.value = {};
            vacc.value = {};
        }
        SYT_CHK_AC_NO(document.MAINFORM.X103_BENECUACNO59A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_BENECU_ID_59Aonchange", e);
    }
}

function X103_BENECU_ID_59Aonclick() {
    try {
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            if ("Customer" == document.MAINFORM.X103_BENECU_OP.value) {
                //SYS_InqCUBK_Sql('X103_BENECU_ID_59A', sql);
                SYS_InqCUBK_byCondition('X103_BENECU_ID_59A', '1');
            } else {
                //SYS_InqCUBK_Sql('X103_BENECU_ID_BANK_59A', sql);
                SYS_InqCUBK_byCondition('X103_BENECU_ID_BANK_59A', '1');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_BENECU_ID_59Aonclick", e);
    }
}

function X103_MEDI_BKID_56A() {
    try {
        SYS_GetCUBK_S('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_MEDI_BKID_56A", e);
    }
}

function X103_MEDI_BKID_56A_back() {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_MEDI_BKID_56A_back", e);
    }
}

function X103_MEDI_BKID_56Aonchange() {
    try {
        if (document.MAINFORM.X103_MEDI_BKID_56A.value != "") {
            SYS_GetCUBK_S('X103_MEDI_BKID_56A', 'X103_MEDI_BKID_56A');
            Cal_X103_TAG_56A();
            SYS_changeClassName('X103_56A_ADD_BTN', 'O');

        } else {
            document.MAINFORM.X103_MEDI_BKSW_56A.value = "";
            document.MAINFORM.X103_MEDI_BKNM_56A.value = "";
            document.MAINFORM.X103MEDIBKADD1_56A.value = "";
            document.MAINFORM.X103MEDIBKADD2_56A.value = "";
            document.MAINFORM.X103MEDIBKADD3_56A.value = "";
            document.MAINFORM.X103_TAG_56A.value = "";
            document.MAINFORM.X103_MEDIBKACNO56A.value = "";
            SYS_changeClassName('X103_56A_ADD_BTN', 'P');
            var vagt = document.querySelector('#MX_INTRMYAGT1');
            var vacc = document.querySelector('#MX_INTRMYAGT1ACCT');
            vagt.value = {};
            vacc.value = {};
        }
        Cal_X103_TAG_56A();
        SYT_CHK_AC_NO(document.MAINFORM.X103_MEDIBKACNO56A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_MEDI_BKID_56Aonchange", e);
    }
}

function X103_MEDI_BKID_56Aonclick() {
    try {
        var nX103_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_MEDI_BKID_56A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_MEDI_BKID_56Aonclick", e);
    }
}

function X103_ORDCU_ID_50A() {
    try {
        SYS_GetCUBK_S('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDCU_ID_50A", e);
    }
}

function X103_ORDCU_ID_50A_back() {
    try {
        Cal_X103_TAG_50A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDCU_ID_50A_back", e);
    }
}

function X103_ORDCU_ID_50Aonchange() {
    try {
        if (document.MAINFORM.X103_ORDCU_ID_50A.value != "") {
            if ("Bank" == document.MAINFORM.X103_ORDCU_ID_OP.value) {
                SYS_GetCUBK_S('X103_ORDCU_ID_50A', 'X103_ORDCU_ID_50A');
            } else {
                SYS_GetCUBK_S('X103_ORDCU_CUST_ID_50A', 'X103_ORDCU_ID_50A'); // Utility Auto Fix Comments
            }
            SYS_changeClassName('X103_50_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_ORDCU_SW_50A.value = "";
            document.MAINFORM.X103_ORDCU_NM_50A.value = "";
            document.MAINFORM.X103_ORDCUADD1_50A.value = "";
            document.MAINFORM.X103_ORDCUADD2_50A.value = "";
            document.MAINFORM.X103_ORDCUADD3_50A.value = "";
            document.MAINFORM.X103_ORDCUACNO_50A.value = '';
            document.MAINFORM.X103_TAG_50A.value = "";
            SYS_changeClassName('X103_50_ADD_BTN', 'P');
            X103_TAG_50Achange();
            var vagt = document.querySelector('#MX_DBTR');
            var vacc = document.querySelector('#MX_DBTRACCT');
            vagt.value = {};
            vacc.value = {};
        }
        Cal_X103_TAG_50A();
        //added by zoe for bug 1508
        SYT_CHK_AC_NO(document.MAINFORM.X103_ORDCUACNO_50A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDCU_ID_50Aonchange", e);
    }
}

function X103_ORDCU_ID_50Aonclick() {
    try {
        var nX103_ORDCU_SW_50A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            if (document.MAINFORM.X103_ORDCU_ID_OP.value == "Bank") {
                //SYS_InqCUBK_Sql('X103_ORDCU_ID_50A', sql);
                SYS_InqCUBK_byCondition('X103_ORDCU_ID_50A', '1');
            } else {
                //SYS_InqCUBK_Sql('X103_ORDCU_CUST_ID_50A', sql);
                SYS_InqCUBK_byCondition('X103_ORDCU_CUST_ID_50A', '1');
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDCU_ID_50Aonclick", e);
    }
}

function X103_ORDCU_ID_OP_change() {
    try {
        document.MAINFORM.X103_50_NOTES.value = "";
        document.MAINFORM.X103_ORDCUACNO_50A.value = "";
        document.MAINFORM.X103_ORDCUADD1_50A.value = "";
        document.MAINFORM.X103_ORDCUADD2_50A.value = "";
        document.MAINFORM.X103_ORDCUADD3_50A.value = "";
        document.MAINFORM.X103_ORDCU_ID_50A.value = "";
        document.MAINFORM.X103_ORDCU_NM_50A.value = "";
        document.MAINFORM.X103_ORDCU_SW_50A.value = "";
        document.MAINFORM.X103_TAG_50A.value = "";
        SYS_changeClassName('X103_50_ADD_BTN', 'P');
        if ("Customer" == document.MAINFORM.X103_ORDCU_ID_OP.value) {
            SYS_changeClassName('X103_ORDCU_SW_50A', 'P');
            SYS_changeClassName('X103_TAG_50A', 'P');
        } else {
            SYS_changeClassName('X103_ORDCU_SW_50A', 'O');
            SYS_changeClassName('X103_TAG_50A', 'M');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDCU_ID_OP_change", e);
    }
}

function X103_ORD_BKID_52A_back() {
    try {
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORD_BKID_52A_back", e);
    }
}

function X103_ORD_BKID_52Aonchange() {
    try {
        if (document.MAINFORM.X103_ORD_BKID_52A.value != "") {
            SYS_GetCUBK_S('X103_ORD_BKID_52A', 'X103_ORD_BKID_52A');
            SYS_changeClassName('X103_52A_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_ORD_BKSW_52A.value = "";
            document.MAINFORM.X103_ORD_BKNM_52A.value = "";
            document.MAINFORM.X103_ORDBKADD1_52A.value = "";
            document.MAINFORM.X103_ORDBKADD2_52A.value = "";
            document.MAINFORM.X103_ORDBKADD3_52A.value = "";
            document.MAINFORM.X103_TAG_52A.value = "";
            document.MAINFORM.X103_ORDBKACNO_52A.value = "";
            SYS_changeClassName('X103_52A_ADD_BTN', 'P');
            var vagt = document.querySelector('#MX_INITGPTY');
            vagt.value = {};
        }
        Cal_X103_TAG_52A();
        SYT_CHK_AC_NO(document.MAINFORM.X103_ORDBKACNO_52A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORD_BKID_52Aonchange", e);
    }
}

function X103_ORD_BKID_52Aonclick() {
    try {
        var nX103_ORD_BKSW_52A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_ORD_BKID_52A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORD_BKID_52Aonclick", e);
    }
}

function X103_RECCORRID_54A() {
    try {
        SYS_GetCUBK_S('X103_RECCORRID_54A', 'X103_RECCORRID_54A');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_RECCORRID_54A", e);
    }
}

function X103_RECCORRID_54A_back() {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_RECCORRID_54A_back", e);
    }
}

function X103_RECCORRID_54Aonchange() {
    try {
        if (document.MAINFORM.X103_RECCORRID_54A.value != "") {
            SYS_GetCUBK_S('X103_RECCORRID_54A', 'X103_RECCORRID_54A');
            Cal_X103_TAG_54A();
            SYS_changeClassName('X103_54A_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_RECCORRNM_54A.value = "";
            document.MAINFORM.X103_RECCORADD154A.value = "";
            document.MAINFORM.X103_RECCORADD254A.value = "";
            document.MAINFORM.X103_RECCORADD354A.value = "";
            document.MAINFORM.X103_RECCORRSW_54A.value = "";
            document.MAINFORM.X103_TAG_54A.value = "";
            document.MAINFORM.X103RECCORRACNO54A.value = "";

            SYS_changeClassName('X103_54A_ADD_BTN', 'P');
            var vagt = document.querySelector('#MX_INSTDRMBRSMNTAGT');
            var vacc = document.querySelector('#MX_INSTDRMBRSMNTAGTACCT');
            vagt.value = {};
            vacc.value = {};
        }

        SYT_CHK_AC_NO(document.MAINFORM.X103RECCORRACNO54A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_RECCORRID_54Aonchange", e);
    }
}

function X103_RECCORRID_54Aonclick() {
    try {
        var nX103_RECCORRSW_54A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_RECCORRID_54A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_RECCORRID_54Aonclick", e);
    }
}

function X103_SENDCORRID53A_back() {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SENDCORRID53A_back", e);
    }
}

function X103_SENDCORRID53Aonchange() {
    try {
        if (document.MAINFORM.X103_SENDCORRID53A.value != "") {
            SYS_GetCUBK_S('X103_SENDCORRID53A', 'X103_SENDCORRID53A');
            Cal_X103_TAG_53A();
            SYS_changeClassName('X103_53A_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_SENDCORRNM53A.value = "";
            document.MAINFORM.X103SENDCORADD153A.value = "";
            document.MAINFORM.X103SENDCORADD253A.value = "";
            document.MAINFORM.X103SENDCORADD353A.value = "";
            document.MAINFORM.X103_SENDCORRSW53A.value = "";
            document.MAINFORM.X103_TAG_53A.value = "";
            document.MAINFORM.X103SENDCORACNO53A.value = "";

            SYS_changeClassName('X103_53A_ADD_BTN', 'P');
            var vagt = document.querySelector('#MX_INSTGRMBRSMNTAGT');
            var vacc = document.querySelector('#MX_INSTGRMBRSMNTAGTACCT');
            vagt.value = {};
            vacc.value = {};
        }
        Cal_X103_TAG_53A();

        SYT_CHK_AC_NO(document.MAINFORM.X103SENDCORACNO53A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SENDCORRID53Aonchange", e);
    }
}

function X103_SENDCORRID53Aonclick() {
    try {
        var nX103_SENDCORRSW53A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_SENDCORRID53A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SENDCORRID53Aonclick", e);
    }
}

function X103_SEND_BKID_51A() {
    try {
        SYS_GetCUBK_S('X103_SEND_BKID_51A', 'X103_SEND_BKID_51A');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SEND_BKID_51A", e);
    }
}

function X103_SEND_BKID_51A_back() {
    try {
        Cal_X103_TAG_51A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SEND_BKID_51A_back", e);
    }
}

function X103_SEND_BKID_51Aonchange() {
    try {
        if (document.MAINFORM.X103_SEND_BKID_51A.value != "") {
            SYS_GetCUBK_S('X103_SEND_BKID_51A', 'X103_SEND_BKID_51A');
            Cal_X103_TAG_51A();
            SYS_changeClassName('X103_51_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X103_SEND_BKNM_51A.value = "";
            document.MAINFORM.X103SENDBKADD1_51A.value = "";
            document.MAINFORM.X103SENDBKADD2_51A.value = "";
            document.MAINFORM.X103SENDBKADD3_51A.value = "";
            document.MAINFORM.X103_SEND_BKSW_51A.value = "";
            document.MAINFORM.X103_TAG_51A.value = "";
            document.MAINFORM.X103_SENDBKACNO51A.value = "";

            SYS_changeClassName('X103_51_ADD_BTN', 'P');
            var vagt = document.querySelector('#MX_DBTRAGT');
            var vacc = document.querySelector('#MX_DBTRAGTACCT');
            vagt.value = {};
            vacc.value = {};
        }
        Cal_X103_TAG_51A();
        SYT_CHK_AC_NO(document.MAINFORM.X103_SENDBKACNO51A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SEND_BKID_51Aonchange", e);
    }
}

function X103_SEND_BKID_51Aonclick() {
    try {
        var X103_SEND_BKSW_51A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X103_SEND_BKID_51A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SEND_BKID_51Aonclick", e);
    }
}

function X103_TAG_50Achange() {
    try {
        if ("A" == document.MAINFORM.X103_TAG_50A.value) {
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_SW_50A.name, 'M');
            SYS_changeClassName(document.MAINFORM.X103_ORDCUACNO_50A.name, 'M');
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_NM_50A.name, 'O');
            SYT_CHK_AC_NO(document.MAINFORM.X103_ORDCUACNO_50A);
        }
        if ("F" == document.MAINFORM.X103_TAG_50A.value) {
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_SW_50A.name, 'P');
            SYS_changeClassName(document.MAINFORM.X103_ORDCUACNO_50A.name, 'M');
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_NM_50A.name, 'M');
            document.MAINFORM.X103_ORDCU_SW_50A.value = "";
            if (document.MAINFORM.X103_ORDCUACNO_50A.value != "" && document.MAINFORM.X103_ORDCUACNO_50A.value.substr(0, 1) == "/") {
                document.MAINFORM.X103_ORDCUACNO_50A.value = document.MAINFORM.X103_ORDCUACNO_50A.value.substr(1, document.MAINFORM.X103_ORDCUACNO_50A.value.length - 1);
            }
        }
        if ("K" == document.MAINFORM.X103_TAG_50A.value) {
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_SW_50A.name, 'P');
            SYS_changeClassName(document.MAINFORM.X103_ORDCUACNO_50A.name, 'M');
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_NM_50A.name, 'M');
            document.MAINFORM.X103_ORDCU_SW_50A.value = "";
            SYT_CHK_AC_NO(document.MAINFORM.X103_ORDCUACNO_50A);
        }
        if ("" == document.MAINFORM.X103_TAG_50A.value) {
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_SW_50A.name, 'O');
            SYS_changeClassName(document.MAINFORM.X103_ORDCUACNO_50A.name, 'O');
            SYS_changeClassName(document.MAINFORM.X103_ORDCU_NM_50A.name, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_TAG_50Achange", e);
    }
}

function X202_ACC_BKID_57A_back() {
    try {
        Cal_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ACC_BKID_57A_back", e);
    }
}

function X202_ACC_BKID_57Aonchange() {
    try {
        if (document.MAINFORM.X202_ACC_BKID_57A.value != "") {
            SYS_GetCUBK_S('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A');
            SYS_changeClassName('X202_57_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X202_ACC_BKNM_57A.value = "";
            document.MAINFORM.X202_ACCBKADD1_57A.value = "";
            document.MAINFORM.X202_ACCBKADD2_57A.value = "";
            document.MAINFORM.X202_ACCBKADD3_57A.value = "";
            document.MAINFORM.X202_ACC_BKSW_57A.value = "";
            document.MAINFORM.X202_TAG_57A.value = "";
            document.MAINFORM.X202_ACC_BKACNO57A.value = "";

            SYS_changeClassName('X202_57_ADD_BTN', 'P');
        }
        Cal_X202_TAG_57A();
        SYT_CHK_AC_NO(document.MAINFORM.X202_ACC_BKACNO57A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ACC_BKID_57Aonchange", e);
    }
}

function X202_ACC_BKID_57Aonclick() {
    try {
        var nX202_ACC_BKSW_57A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_ACC_BKID_57A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ACC_BKID_57Aonclick", e);
    }
}

function X202_ACC_BKSW_57Achange() {
    try {
        var nX202_ACC_BKSW_57A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_ACC_BKID_57A.value = "";
        if (document.MAINFORM.X202_ACC_BKSW_57A.value.length == 11 || document.MAINFORM.X202_ACC_BKSW_57A.value.length == 8) {
            if (document.MAINFORM.X202_ACC_BKSW_57A.value.length == 8) {
                document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X202_ACC_BKSW_57A.value + "XXX";
            }
            //nX202_ACC_BKSW_57A = document.MAINFORM.X202_ACC_BKSW_57A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX202_ACC_BKSW_57A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_ACC_BKID_57A";
            if (document.MAINFORM.X202_ACC_BKID_57A.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_ACC_BKSW_57Achange_24', '1', true);
                Cal_X202_TAG_57A();
                SYS_changeClassName('X202_57_ADD_BTN', 'O');
                if (document.MAINFORM.X202_ACC_BKID_57A.value != '') {
                    SYS_GetCUBK_S('X202_ACC_BKID_57A', 'X202_ACC_BKID_57A', 'X202_ACC_BKID_57A_back()');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_ACC_BKID_57A, "onchange");
        Cal_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ACC_BKSW_57Achange", e);
    }
}

function X202_ADV_BKID_B2_back() {
    try {
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ADV_BKID_B2_back", e);
    }
}

function X202_ADV_BKID_B2onchange() {
    try {
        if (document.MAINFORM.X202_ADV_BKID_B2.value != "") {
            SYS_GetCUBK_S('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2');
            Cal_X202_TAG_B2();
            SYS_changeClassName('X202_B2_ADD_BTN', 'O');
			VDO_Set_X202_INSTDAGT();
        } else {
            document.MAINFORM.X202_ADV_BKSW_B2.value = "";
            document.MAINFORM.X202_ADV_BKNM_B2.value = "";
            document.MAINFORM.X202_ADV_BKADD1_B2.value = "";
            document.MAINFORM.X202_ADV_BKADD2_B2.value = "";
            document.MAINFORM.X202_ADV_BKADD3_B2.value = "";
            document.MAINFORM.X202_TAG_B2.value = "";
            SYS_changeClassName('X202_B2_ADD_BTN', 'P');
        }
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ADV_BKID_B2onchange", e);
    }
}

function X202_ADV_BKID_B2onclick() {
    try {
        var nX202_ADV_BKSW_B2; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_ADV_BKID_B2', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ADV_BKID_B2onclick", e);
    }
}

function X202_ADV_BKSW_B2change() {
    try {
        var nX202_ADV_BKSW_B2; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_ADV_BKID_B2.value = "";
        if (document.MAINFORM.X202_ADV_BKSW_B2.value.length == 11 || document.MAINFORM.X202_ADV_BKSW_B2.value.length == 8) {
            if (document.MAINFORM.X202_ADV_BKSW_B2.value.length == 8) {
                document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.X202_ADV_BKSW_B2.value + "XXX"; // Utility Auto Fix Comments
            }
            //nX202_ADV_BKSW_B2 = document.MAINFORM.X202_ADV_BKSW_B2.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX202_ADV_BKSW_B2 + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_ADV_BKID_B2";
            if (document.MAINFORM.X202_ADV_BKID_B2.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_ADV_BKSW_B2change_25', '1', true);
                Cal_X202_TAG_B2();
                SYS_changeClassName('X202_B2_ADD_BTN', 'O');
                if (document.MAINFORM.X202_ADV_BKID_B2.value != '') {
                    SYS_GetCUBK_S('X202_ADV_BKID_B2', 'X202_ADV_BKID_B2', 'X202_ADV_BKID_B2_back()');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_ADV_BKID_B2, 'onchange');
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ADV_BKSW_B2change", e);
    }
}

function X202_BENE_BKID_58A() {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value != "") {
            SYS_GetCUBK('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
        } else {
            document.MAINFORM.X202_BENE_BKNM_58A.value = "";
            document.MAINFORM.X202BENEBKADD1_58A.value = "";
            document.MAINFORM.X202BENEBKADD2_58A.value = "";
            document.MAINFORM.X202BENEBKADD3_58A.value = "";
            document.MAINFORM.X202_BENE_BKSW_58A.value = "";
            document.MAINFORM.X202_TAG_58A.value = "";
            document.MAINFORM.X202_BENEBKACNO58A.value = "";

        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_BENE_BKID_58A", e);
    }
}

function X202_BENE_BKID_58A_back() {
    try {
        Cal_X202_TAG_58A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_BENE_BKID_58A_back", e);
    }
}

function X202_BENE_BKID_58Aonchange() {
    try {
        if (document.MAINFORM.X202_BENE_BKID_58A.value != "") {
            SYS_GetCUBK_S('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A');
            SYS_changeClassName('X202_58_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X202_BENE_BKNM_58A.value = "";
            document.MAINFORM.X202BENEBKADD1_58A.value = "";
            document.MAINFORM.X202BENEBKADD2_58A.value = "";
            document.MAINFORM.X202BENEBKADD3_58A.value = "";
            document.MAINFORM.X202_BENE_BKSW_58A.value = "";
            document.MAINFORM.X202_TAG_58A.value = "";
            document.MAINFORM.X202_BENEBKACNO58A.value = "";
            SYS_changeClassName('X202_58_ADD_BTN', 'P');
        }
        Cal_X202_TAG_58A();
        SYT_CHK_AC_NO(document.MAINFORM.X202_BENEBKACNO58A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_BENE_BKID_58Aonchange", e);
    }
}

function X202_BENE_BKID_58Aonclick() {
    try {
        var nX202_BENE_BKSW_58A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_BENE_BKID_58A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_BENE_BKID_58Aonclick", e);
    }
}

function X202_BENE_BKSW_58Achange() {
    try {
        var nX202_BENE_BKSW_58A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_BENE_BKID_58A.value = "";
        if (document.MAINFORM.X202_BENE_BKSW_58A.value.length == 11 || document.MAINFORM.X202_BENE_BKSW_58A.value.length == 8) {
            if (document.MAINFORM.X202_BENE_BKSW_58A.value.length == 8) {
                document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.X202_BENE_BKSW_58A.value + "XXX";
            }
            //nX202_BENE_BKSW_58A = document.MAINFORM.X202_BENE_BKSW_58A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like'%" + nX202_BENE_BKSW_58A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_BENE_BKID_58A";
            if (document.MAINFORM.X202_BENE_BKID_58A.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_BENE_BKSW_58Achange_26', '1', true);
                Cal_X202_TAG_58A();
                SYS_changeClassName('X202_58_ADD_BTN', 'O');
                if (document.MAINFORM.X202_BENE_BKID_58A.value != '') {
                    SYS_GetCUBK_S('X202_BENE_BKID_58A', 'X202_BENE_BKID_58A', 'X202_BENE_BKID_58A_back()');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_BENE_BKID_58A, "onchange");
        Cal_X202_TAG_58A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_BENE_BKSW_58Achange", e);
    }
}

function X202_MEDI_BKID_56A_back() {
    try {
        Cal_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_MEDI_BKID_56A_back", e);
    }
}

function X202_MEDI_BKID_56Aonchange() {
    try {
        if (document.MAINFORM.X202_MEDI_BKID_56A.value != "") {
            SYS_GetCUBK_S('X202_MEDI_BKID_56A', document.MAINFORM.X202_MEDI_BKID_56A.name);
            SYS_changeClassName('X202_56_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X202_MEDI_BKNM_56A.value = "";
            document.MAINFORM.X202MEDIBKADD1_56A.value = "";
            document.MAINFORM.X202MEDIBKADD2_56A.value = "";
            document.MAINFORM.X202MEDIBKADD3_56A.value = "";
            document.MAINFORM.X202_MEDI_BKSW_56A.value = "";
            document.MAINFORM.X202_TAG_56A.value = "";
            document.MAINFORM.X202_MEDIBKACNO56A.value = "";
            SYS_changeClassName('X202_56_ADD_BTN', 'P');
        }
        Cal_X202_TAG_56A();
        SYT_CHK_AC_NO(document.MAINFORM.X202_MEDIBKACNO56A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_MEDI_BKID_56Aonchange", e);
    }
}

function X202_MEDI_BKID_56Aonclick() {
    try {
        var nX202_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_MEDI_BKID_56A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_MEDI_BKID_56Aonclick", e);
    }
}

function X202_MEDI_BKSW_56Achange() {
    try {
        var nX202_MEDI_BKSW_56A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_MEDI_BKID_56A.value = "";
        if (document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 11 || document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 8) {
            if (document.MAINFORM.X202_MEDI_BKSW_56A.value.length == 8) {
                document.MAINFORM.X202_MEDI_BKSW_56A.value = document.MAINFORM.X202_MEDI_BKSW_56A.value + "XXX";
            }
            //nX202_MEDI_BKSW_56A = document.MAINFORM.X202_MEDI_BKSW_56A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like'%" + nX202_MEDI_BKSW_56A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_MEDI_BKID_56A";
            if (document.MAINFORM.X202_MEDI_BKID_56A.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_MEDI_BKSW_56Achange_27', '1', true);
                Cal_X202_TAG_56A();
                SYS_changeClassName('X202_56_ADD_BTN', 'O');
                if (document.MAINFORM.X202_MEDI_BKID_56A.value != '') {
                    SYS_GetCUBK_S('X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A', 'X202_MEDI_BKID_56A_back()');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_MEDI_BKID_56A, "onchange");
        Cal_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_MEDI_BKSW_56Achange", e);
    }
}

function X202_ORDBK_ID_52A_back() {
    try {
        Cal_X202_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ORDBK_ID_52A_back", e);
    }
}

function X202_ORDBK_ID_52Aonchange() {
    try {
        if (document.MAINFORM.X202_ORDBK_ID_52A.value != "") {
            SYS_GetCUBK_S('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A');
            SYS_changeClassName('X202_52_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X202_ORDBK_NM_52A.value = "";
            document.MAINFORM.X202_ORDBKADD1_52A.value = "";
            document.MAINFORM.X202_ORDBKADD2_52A.value = "";
            document.MAINFORM.X202_ORDBKADD3_52A.value = "";
            document.MAINFORM.X202_ORDBK_SW_52A.value = "";
            document.MAINFORM.X202_TAG_52A.value = "";
            document.MAINFORM.X202_ORDBKACNO_52A.value = "";
            SYS_changeClassName('X202_52_ADD_BTN', 'P');
        }
        Cal_X202_TAG_52A();
        SYT_CHK_AC_NO(document.MAINFORM.X202_ORDBKACNO_52A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ORDBK_ID_52Aonchange", e);
    }
}

function X202_ORDBK_ID_52Aonclick() {
    try {
        var nX202_ORDBK_SW_52A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {;
            SYS_InqCUBK_byCondition('X202_ORDBK_ID_52A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ORDBK_ID_52Aonclick", e);
    }
}

function X202_ORDBK_SW_52Achange() {
    try {
        var nX202_ORDBK_SW_52A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_ORDBK_ID_52A.value = "";
        if (document.MAINFORM.X202_ORDBK_SW_52A.value.length == 11 || document.MAINFORM.X202_ORDBK_SW_52A.value.length == 8) {
            if (document.MAINFORM.X202_ORDBK_SW_52A.value.length == 8) {
                document.MAINFORM.X202_ORDBK_SW_52A.value = document.MAINFORM.X202_ORDBK_SW_52A.value + "XXX"; // Utility Auto Fix Comments
            }
            //nX202_ORDBK_SW_52A = document.MAINFORM.X202_ORDBK_SW_52A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX202_ORDBK_SW_52A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_ORDBK_ID_52A";
            if (document.MAINFORM.X202_ORDBK_ID_52A.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_ORDBK_SW_52Achange_28', '1', true);
                Cal_X202_TAG_52A();
                SYS_changeClassName('X202_52_ADD_BTN', 'O');
                if (document.MAINFORM.X202_ORDBK_ID_52A.value != '') {
                    SYS_GetCUBK_S('X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A', 'X202_ORDBK_ID_52A_back()');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_ORDBK_ID_52A, 'onchange');
        Cal_X202_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ORDBK_SW_52Achange", e);
    }
}

function X202_RECCORRID_54A_back() {
    try {
        Cal_X202_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_RECCORRID_54A_back", e);
    }
}

function X202_RECCORRID_54Aonchange() {
    try {
        if (document.MAINFORM.X202_RECCORRID_54A.value != "") {
            SYS_GetCUBK_S('X202_RECCORRID_54A', 'X202_RECCORRID_54A');
            SYS_changeClassName('X202_54_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X202_RECCORRNM_54A.value = "";
            document.MAINFORM.X202_RECCORADD154A.value = "";
            document.MAINFORM.X202_RECCORADD254A.value = "";
            document.MAINFORM.X202_RECCORADD354A.value = "";
            document.MAINFORM.X202_RECCORRSW_54A.value = "";
            document.MAINFORM.X202_TAG_54A.value = "";
            document.MAINFORM.X202RECCORRACNO54A.value = "";

            SYS_changeClassName('X202_54_ADD_BTN', 'P');
        }
        Cal_X202_TAG_54A();
        SYT_CHK_AC_NO(document.MAINFORM.X202RECCORRACNO54A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_RECCORRID_54Aonchange", e);
    }
}

function X202_RECCORRID_54Aonclick() {
    try {
        var nX202_RECCORRSW_54A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_RECCORRID_54A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_RECCORRID_54Aonclick", e);
    }
}

function X202_RECCORRSW_54Achange() {
    try {
        var nX202_RECCORRSW_54A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_RECCORRID_54A.value = "";
        if (document.MAINFORM.X202_RECCORRSW_54A.value.length == 11 || document.MAINFORM.X202_RECCORRSW_54A.value.length == 8) {
            if (document.MAINFORM.X202_RECCORRSW_54A.value.length == 8) {
                document.MAINFORM.X202_RECCORRSW_54A.value = document.MAINFORM.X202_RECCORRSW_54A.value + "XXX";
            }
            //nX202_RECCORRSW_54A = document.MAINFORM.X202_RECCORRSW_54A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like'%" + nX202_RECCORRSW_54A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_RECCORRID_54A";
            if (document.MAINFORM.X202_RECCORRID_54A.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_RECCORRSW_54Achange_29', '1', true);
                Cal_X202_TAG_54A();
                SYS_changeClassName('X202_54_ADD_BTN', 'O');
                if (document.MAINFORM.X202_RECCORRID_54A.value != '') {
                    SYS_GetCUBK_S('X202_RECCORRID_54A', document.MAINFORM.X202_RECCORRID_54A.name, 'X202_RECCORRID_54A_back()');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_RECCORRID_54A, "onchange");
        Cal_X202_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_RECCORRSW_54Achange", e);
    }
}

function X202_SENDCORRID53A_back() {
    try {
        Cal_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_SENDCORRID53A_back", e);
    }
}

function X202_SENDCORRID53Aonchange() {
    try {
        if (document.MAINFORM.X202_SENDCORRID53A.value != "") {
            SYS_GetCUBK_S('X202_SENDCORRID53A', 'X202_SENDCORRID53A');
            Cal_X202_TAG_53A();
            SYS_changeClassName('X202_53_ADD_BTN', 'O');
        } else {
            document.MAINFORM.X202_SENDCORRNM53A.value = "";
            document.MAINFORM.X202SENDCORADD153A.value = "";
            document.MAINFORM.X202SENDCORADD253A.value = "";
            document.MAINFORM.X202SENDCORADD353A.value = "";
            document.MAINFORM.X202_SENDCORRSW53A.value = "";
            document.MAINFORM.X202_TAG_53A.value = "";
            document.MAINFORM.X202SENDCORACNO53A.value = "";
            SYS_changeClassName('X202_53_ADD_BTN', 'P');
        }
        Cal_X202_TAG_53A();
        SYT_CHK_AC_NO(document.MAINFORM.X202SENDCORACNO53A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_SENDCORRID53Aonchange", e);
    }
}

function X202_SENDCORRID53Aonclick() {
    try {
        var nX202_SENDCORRSW53A; // Utility Auto Fix Comments
        var retvalue; // Utility Auto Fix Comments
        retvalue = window.confirm("Are you sure you wish to continue,this look up will take some time.", "Inquire CUBK");
        if (retvalue) {
            SYS_InqCUBK_byCondition('X202_SENDCORRID53A', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_SENDCORRID53Aonclick", e);
    }
}

function X202_SENDCORRSW53Achange() {
    try {
        var nX202_SENDCORRSW53A; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sMappingList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        document.MAINFORM.X202_SENDCORRID53A.value = "";
        if (document.MAINFORM.X202_SENDCORRSW53A.value.length == 11 || document.MAINFORM.X202_SENDCORRSW53A.value.length == 8) {
            if (document.MAINFORM.X202_SENDCORRSW53A.value.length == 8) {
                document.MAINFORM.X202_SENDCORRSW53A.value = document.MAINFORM.X202_SENDCORRSW53A.value + "XXX";
            }
            //nX202_SENDCORRSW53A = document.MAINFORM.X202_SENDCORRSW53A.value.substr(0, 8);
            //sSQLWhere = "SW_ADD like '%" + nX202_SENDCORRSW53A + "%'";
            //sTableName = "BANK_MASTER";
            //sFieldList = "C_MAIN_REF";
            //sMappingList = "X202_SENDCORRID53A";
            if (document.MAINFORM.X202_SENDCORRID53A.value == '') {
                SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X202_SENDCORRSW53Achange_30', '1', true);
                Cal_X202_TAG_53A();

                if (document.MAINFORM.X202_SENDCORRID53A.value != '') {
                    SYS_GetCUBK_S('X202_SENDCORRID53A', 'X202_SENDCORRID53A', 'X202_SENDCORRID53A_back()');
                    SYS_changeClassName('X202_53_ADD_BTN', 'O');
                }
            }
        }
        EEHtml.fireEvent(document.MAINFORM.X202_SENDCORRID53A, 'onchange');
        Cal_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_SENDCORRSW53Achange", e);
    }
}

function X400_CHK_ACNO(oACNO) {
    try {
        //added by zoe 20081204 for check account number
        if (oACNO.value != "" && oACNO.value.substr(0, 1) != "/") {

            //Edit by amy for SMBC demo in 20120929 because swift templete has "/"  
            //oACNO.value = "/"+ oACNO.value;

            if (oACNO.value.length > 35) {
                SYS_CheckError(oACNO, "The max length for this field is 35!");
                return false;
            } else {
                return true;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_CHK_ACNO", e);
    }
}

function X400_GetBKIF_BY_BIC(oBIC) {
    try {
        var arr_BIC; // Utility Auto Fix Comments
        var oADD_BTN; // Utility Auto Fix Comments
        var sBKID; // Utility Auto Fix Comments
        var sFieldList; // Utility Auto Fix Comments
        var sSQLWhere; // Utility Auto Fix Comments
        var sTableName; // Utility Auto Fix Comments
        //added by zoe on 08.12.03
        if (oBIC.value.length == 8) {
            oBIC.value = oBIC.value + "XXX";
        }
        oBICCUBK = oBIC.value;
        //sSQLWhere = "SW_ADD = '" + oBICCUBK + "'";
        //sTableName = "BANK_MASTER";
        //sFieldList = "C_MAIN_REF";
        sBKID = oBIC.name.replace("SW_ADD", "ID");
        sBKIDCUBK = sBKID;
        if (oBIC.value.length == 11 && MAINFORM.elements[sBKID].value == "") {
            SYS_GetTableDataByRule_S('SSSS_PaymentCredit_X400_GetBKIF_BY_BIC_31', '1', true);
            document.all(sBKID).value = sBKIDCUBK;
            if (MAINFORM.elements[sBKID].value != "") {
                SYS_GetCUBK(sBKID, sBKID);
            }
        }
        if (oBIC != null) {
            arr_BIC = new Array(oBIC);
            X400_SW_TAG_A_D(arr_BIC);
        }
        oADD_BTN = MAINFORM.elements[sBKID.replace("ID", "ADD_BTN")];
        if (EEHtml.getElementById(sBKID).value == "") {
            if (oADD_BTN != null) {
                oADD_BTN.disabled = true;
            }
        } else {
            if (oADD_BTN != null) {
                oADD_BTN.disabled = false;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_GetBKIF_BY_BIC", e);
    }
}

function X400_ID_ONCHANGE_CUBK(sfKeyFldName, sCUBKMappingName, sSucJsFuncName) {
    try {
        var arr_BIC; // Utility Auto Fix Comments
        var oADD_BTN; // Utility Auto Fix Comments
        var oBIC; // Utility Auto Fix Comments
        var sBANK_CUST_ID; // Utility Auto Fix Comments
        //add by zoe on 08.11.03 for X400 ID onchange
        sBANK_CUST_ID = MAINFORM.elements[sfKeyFldName].value;
        if (sBANK_CUST_ID == "") {
            SYT_BlankGetCUBK(sfKeyFldName);
        } else {
            SYS_GetCUBK_S(sCUBKMappingName, sfKeyFldName);
            if (sSucJsFuncName != null) {
                if (sSucJsFuncName.indexOf("(") == -1) {
                    sSucJsFuncName += "()";
                }
                eval(sSucJsFuncName);
            }
            oBIC = MAINFORM.elements[sfKeyFldName.replace("_ID", "_SW_ADD")];
            if (oBIC != null) {
                arr_BIC = new Array(oBIC);
                X400_SW_TAG_A_D(arr_BIC);
            }
        }
        oADD_BTN = MAINFORM.elements[sfKeyFldName.replace("ID", "ADD_BTN")];
        if (sBANK_CUST_ID == "") {
            if (oADD_BTN != null) {
                oADD_BTN.disabled = true;
            }
        } else {
            if (oADD_BTN != null) {
                oADD_BTN.disabled = false;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ID_ONCHANGE_CUBK", e);
    }
}

function X400_SW_TAG_A_D(arr_BIC) {
    try {
        var i; // Utility Auto Fix Comments
        var sBKAdd_1; // Utility Auto Fix Comments
        var sBKAdd_2; // Utility Auto Fix Comments
        var sBKAdd_3; // Utility Auto Fix Comments
        var sBKName; // Utility Auto Fix Comments
        var sTagName; // Utility Auto Fix Comments
        for (i = 0; i < arr_BIC.length; i++) {
            sTagName = arr_BIC[i].name.replace("_ADD", "_TAG");
            sBKName = arr_BIC[i].name.replace("_SW_ADD", "_NM");
            sBKAdd_1 = arr_BIC[i].name.replace("_SW_ADD", "_ADD1");
            sBKAdd_2 = arr_BIC[i].name.replace("_SW_ADD", "_ADD2");
            sBKAdd_3 = arr_BIC[i].name.replace("_SW_ADD", "_ADD3");
            if (arr_BIC[i].value != "") {
                MAINFORM.elements[sTagName].value = "A";
            } else {
                if (MAINFORM.elements[sBKName].value != "") {
                    MAINFORM.elements[sTagName].value = "D";
                } else {
                    MAINFORM.elements[sTagName].value = "";
                }
            }
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_SW_TAG_A_D", e);
    }
}

function checkSWIFTname() {
    try {
        var opvalue; // Utility Auto Fix Comments
        var tab; // Utility Auto Fix Comments
        opvalue = document.MAINFORM.CPYT_PAY_ADV_MSG;
        tab = EEHtml.getElementById("do_PaymentMT400_Tab");
        if ("IMCO" == SYS_MODULE_NAME && opvalue.value == 'MT400') {
            tab.style.display = "block";
        } else if (("EPLC" == SYS_MODULE_NAME || "IPLC" == SYS_MODULE_NAME || "REIM" == SYS_MODULE_NAME) && opvalue.value == 'MT756') {
            tab.innerHTML = "MT756";
            tab.style.display = "block";
        } else {
            tab.style.display = "none";
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*checkSWIFTname", e);
    }
}

function disable103() {
    try {
        SYT_DisableDivClass("do_PaymentMT103");
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*disable103", e);
    }
}

function disable202() {
    try {
        SYT_DisableDivClass("do_PaymentMT202");

        document.MAINFORM.X202_AMT_32A.value = 0.00;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*disable202", e);
    }
}

function enable103() {
    try {
        SYS_changeClassName('IS_GPI_MEMBER', 'M');
        SYS_changeClassName('X103_ADV_BKID_B2', 'M');
        SYS_changeClassName('X103_ADV_BKNM_B2', 'M');
        SYS_changeClassName('X103_ADV_BKADD1_B2', 'O');
        SYS_changeClassName('X103_ADV_BKADD2_B2', 'O');
        SYS_changeClassName('X103_ADV_BKADD3_B2', 'O');
        SYS_changeClassName('X103_ADV_BKSW_B2', 'M');
        SYS_changeClassName('X103_B2_BTN', 'M');
        SYS_changeClassName('X103_BENECU_ID_59A', 'O');
        SYS_changeClassName('X103_BENECU_NM_59A', 'M');
        SYS_changeClassName('X103BENECUADD1_59A', 'O');
        SYS_changeClassName('X103BENECUADD2_59A', 'O');
        SYS_changeClassName('X103BENECUADD3_59A', 'O');
        SYS_changeClassName('X103_BENECUACNO59A', 'O');

        SYS_changeClassName('X103_ORDCU_ID_50A', 'O');
        SYS_changeClassName('X103_ORDCU_NM_50A', 'M');
        SYS_changeClassName('X103_ORDCUADD1_50A', 'O');
        SYS_changeClassName('X103_ORDCUADD2_50A', 'O');
        SYS_changeClassName('X103_ORDCUADD3_50A', 'O');
        SYS_changeClassName('X103_ORDCU_SW_50A', 'O');
        SYS_changeClassName('X103_ORDCUACNO_50A', 'O');

        SYS_changeClassName('X103_SEND_BKID_51A', 'O');
        SYS_changeClassName('X103_SEND_BKNM_51A', 'M');
        SYS_changeClassName('X103SENDBKADD1_51A', 'O');
        SYS_changeClassName('X103SENDBKADD2_51A', 'O');
        SYS_changeClassName('X103SENDBKADD3_51A', 'O');
        SYS_changeClassName('X103_SEND_BKSW_51A', 'O');
        SYS_changeClassName('X103_SENDBKACNO51A', 'O');

        SYS_changeClassName('X103_ORD_BKID_52A', 'O');
        SYS_changeClassName('X103_ORD_BKNM_52A', 'O');
        SYS_changeClassName('X103_ORDBKADD1_52A', 'O');
        SYS_changeClassName('X103_ORDBKADD2_52A', 'O');
        SYS_changeClassName('X103_ORDBKADD3_52A', 'O');
        SYS_changeClassName('X103_ORD_BKSW_52A', 'O');
        SYS_changeClassName('X103_ORDBKACNO_52A', 'O');

        SYS_changeClassName('X103_SENDCORRID53A', 'O');
        SYS_changeClassName('X103_SENDCORRNM53A', 'O');
        SYS_changeClassName('X103SENDCORADD153A', 'O');
        SYS_changeClassName('X103SENDCORADD253A', 'O');
        SYS_changeClassName('X103SENDCORADD353A', 'O');
        SYS_changeClassName('X103_SENDCORRSW53A', 'O');
        SYS_changeClassName('X103SENDCORACNO53A', 'O');

        SYS_changeClassName('X103_RECCORRID_54A', 'O');
        SYS_changeClassName('X103_RECCORRNM_54A', 'O');
        SYS_changeClassName('X103_RECCORADD154A', 'O');
        SYS_changeClassName('X103_RECCORADD254A', 'O');
        SYS_changeClassName('X103_RECCORADD354A', 'O');
        SYS_changeClassName('X103_RECCORRSW_54A', 'O');
        SYS_changeClassName('X103RECCORRACNO54A', 'O');

        SYS_changeClassName('X103_MEDI_BKID_56A', 'O');
        SYS_changeClassName('X103_MEDI_BKNM_56A', 'O');
        SYS_changeClassName('X103MEDIBKADD1_56A', 'O');
        SYS_changeClassName('X103MEDIBKADD2_56A', 'O');
        SYS_changeClassName('X103MEDIBKADD3_56A', 'O');
        SYS_changeClassName('X103_MEDI_BKSW_56A', 'O');
        SYS_changeClassName('X103_MEDIBKACNO56A', 'O');

        SYS_changeClassName('X103_ACC_BKID_57A', 'O');
        SYS_changeClassName('X103_ACC_BKNM_57A', 'M');
        SYS_changeClassName('X103_ACCBKADD1_57A', 'O');
        SYS_changeClassName('X103_ACCBKADD2_57A', 'O');
        SYS_changeClassName('X103_ACCBKADD3_57A', 'O');
        SYS_changeClassName('X103_ACC_BKSW_57A', 'O');
        SYS_changeClassName('X103_ACC_BKACNO57A', 'O');
        SYS_changeClassName('X103_53A_BTN', 'M');

        SYS_changeClassName('X103_BKOP_CODE_23B', 'O');
        SYS_changeClassName('X103_DET_CHG_71A', 'M');
        SYS_changeClassName('X103_INSTRCODE_23E', 'O');
        SYS_changeClassName('X103_RECCHGCCY_71G', 'O');
        SYS_changeClassName('X103_RECCHGAMT_71G', 'O');
        SYS_changeClassName('X103_REMIT_INFO_70', 'O');
        SYS_changeClassName('X103_REG_REP_77B', 'O');
        SYS_changeClassName('X103_BKTOBK_INFO72', 'O');
        SYS_changeClassName('X103_ORDCU_ID_OP', 'O');

        SYS_changeClassName('X103_B2_BTN', 'O');
        SYS_changeClassName('X103_50_BTN', 'O');
        SYS_changeClassName('X103_51_BTN', 'O');
        SYS_changeClassName('X103_52A_BTN', 'O');
        SYS_changeClassName('X103_54A_BTN', 'O');
        SYS_changeClassName('X103_56A_BTN', 'O');
        SYS_changeClassName('X103_57A_BTN', 'O');
        SYS_changeClassName('X103_59_BTN', 'O');
        SYS_changeClassName('X103_53A_BTN', 'O');

        SYS_changeClassName('X103_BENECU_OP', 'O');
        SYS_changeClassName('X103_TAG_50A', 'M');

        SYS_changeClassName('X103_SENDCHGCCY71F', 'O');
        SYS_changeClassName('X103_SENDCHGAMT71F', 'O');
        SYS_changeClassName('SETTLE_METHOD', 'M');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*enable103", e);
    }
}

function enable202() {
    try {
        //edit by Dane 2009-01-13 begin
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT202" || document.MAINFORM.CPYT_PAY_COV_MSG.value == "MT202COV" || document.MAINFORM.CPYT_PAY_COV_MSG.value == "PACS009COV") {
            SYS_changeClassName('X202_ADV_BKID_B2', 'M');
            SYS_changeClassName('X202_ADV_BKNM_B2', 'M');
            SYS_changeClassName('X202_ADV_BKADD1_B2', 'O');
            SYS_changeClassName('X202_ADV_BKADD2_B2', 'O');
            SYS_changeClassName('X202_ADV_BKADD3_B2', 'O');
            SYS_changeClassName('X202_ADV_BKSW_B2', 'O');
            SYS_changeClassName('X202RECCORRACNO54A', 'O');
            SYS_changeClassName('X202_ORDBK_ID_52A', 'O');
            SYS_changeClassName('X202_ORDBK_NM_52A', 'O');
            SYS_changeClassName('X202_ORDBKADD1_52A', 'O');
            SYS_changeClassName('X202_ORDBKADD2_52A', 'O');
            SYS_changeClassName('X202_ORDBKADD3_52A', 'O');
            SYS_changeClassName('X202_ORDBK_SW_52A', 'O');
            SYS_changeClassName('X202_ORDBKACNO_52A', 'O');
            SYS_changeClassName('X202_SENDCORRID53A', 'O');
            SYS_changeClassName('X202_SENDCORRNM53A', 'O');
            SYS_changeClassName('X202SENDCORADD153A', 'O');
            SYS_changeClassName('X202SENDCORADD253A', 'O');
            SYS_changeClassName('X202SENDCORADD353A', 'O');
            SYS_changeClassName('X202_SENDCORRSW53A', 'O');
            SYS_changeClassName('X202SENDCORACNO53A', 'O');
            SYS_changeClassName('X202_RECCORRID_54A', 'O');
            SYS_changeClassName('X202_RECCORRNM_54A', 'O');
            SYS_changeClassName('X202_RECCORADD154A', 'O');
            SYS_changeClassName('X202_RECCORADD254A', 'O');
            SYS_changeClassName('X202_RECCORADD354A', 'O');
            SYS_changeClassName('X202_RECCORRSW_54A', 'O');
            SYS_changeClassName('X202_MEDI_BKID_56A', 'O');
            SYS_changeClassName('X202_MEDI_BKNM_56A', 'O');
            SYS_changeClassName('X202MEDIBKADD1_56A', 'O');
            SYS_changeClassName('X202MEDIBKADD2_56A', 'O');
            SYS_changeClassName('X202MEDIBKADD3_56A', 'O');
            SYS_changeClassName('X202_MEDIBKACNO56A', 'O');
            SYS_changeClassName('X202_MEDI_BKSW_56A', 'O');
            SYS_changeClassName('X202_ACC_BKID_57A', 'O'); // Utility Auto Fix Comments
            SYS_changeClassName('X202_ACC_BKNM_57A', 'O');
            SYS_changeClassName('X202_ACCBKADD1_57A', 'O');
            SYS_changeClassName('X202_ACCBKADD2_57A', 'O');
            SYS_changeClassName('X202_ACCBKADD3_57A', 'O');
            SYS_changeClassName('X202_ACC_BKSW_57A', 'O');
            SYS_changeClassName('X202_ACC_BKACNO57A', 'O');
            SYS_changeClassName('X202_BENE_BKID_58A', 'O');
            SYS_changeClassName('X202_BENE_BKNM_58A', 'M');
            SYS_changeClassName('X202BENEBKADD1_58A', 'O');
            SYS_changeClassName('X202BENEBKADD2_58A', 'O');
            SYS_changeClassName('X202BENEBKADD3_58A', 'O');
            SYS_changeClassName('X202_BENE_BKSW_58A', 'O');
            SYS_changeClassName('X202_BENEBKACNO58A', 'O');
            SYS_changeClassName('X202_BKTOBK_INFO72', 'O');
            SYS_changeClassName('X202_B2_BTN', 'O');

            SYS_changeClassName('X202_RELATEDNO_21', 'M');
            SYS_changeClassName('X202_ACC_BKACNO57A', 'O');

            SYS_changeClassName('X202_B2_BTN', 'O');
            SYS_changeClassName('X202_52_BTN', 'O');
            SYS_changeClassName('X202_53_BTN', 'O');
            SYS_changeClassName('X202_54_BTN', 'O');
            SYS_changeClassName('X202_56_BTN', 'O');
            SYS_changeClassName('X202_57_BTN', 'O');
            SYS_changeClassName('X202_58_BTN', 'O');
			SYS_changeClassName('SETTLE_METHOD_PACS009', 'M');

            document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
            //Add by amy for SMBC demo in 20120826
            if ("IPLC" == SYS_MODULE_NAME) {
                document.MAINFORM.X202_RELATEDNO_21.value = document.MAINFORM.PRES_BK_REF.value;
            }
            if ("IMCO" == SYS_MODULE_NAME) {
                document.MAINFORM.X202_RELATEDNO_21.value = document.MAINFORM.COLL_NO.value;
            }
			if (document.MAINFORM.CPYT_PAY_COV_MSG.value == "PACS009COV"){
				SYS_changeClassName('X202_ORDBK_NM_52A', 'M');
			}
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*enable202", e);
    }
}

function get_guid() {
    try {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*get_guid", e);
    }
}

function initCPYT_PAY_ADV_MSG(nvalue) {
    try {
        return CreditRemoveSelectOption(document.MAINFORM.CPYT_PAY_ADV_MSG, nvalue);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*initCPYT_PAY_ADV_MSG", e);
    }
}

function CPYT_ASSGN_ID_onchange() {
    try {
        Get_CPYT_ASSGN_ID();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_ASSGN_ID_onchange", e);
    }
}

function CPYT_CR_AC_TYPE_onchange() {
    try {
        Set_CPYT_ASSGN_from_MAIN();
        Cal_CPYT_CR_AC_TYPE();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_CR_AC_TYPE_onchange", e);
    }
}

function CPYT_CR_AMT_CRCCY_onchange() {
    try {
        AmtFromatAmtCrccy();
        CPYT_CR_AMT_TXCCYfromCrccy();
        CPYT_CR_PER();
        CHK_Total_Pct();
        Cal_X202_AMT_32A();
        Cal_X400_AMT_32A();
        CPYT_CR_AMT_CRCCY();
        EEHtml.fireEvent(document.MAINFORM.CPYT_CR_AMT_TXCCY, 'onchange');
        if (SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_CRCCY.value) < 0) {
            alert('Currency and Amount can not accept negative values')
            document.MAINFORM.CPYT_CR_AMT_CRCCY.value = 0;
            document.MAINFORM.CPYT_CR_PER.value = 0;
            document.MAINFORM.CPYT_CR_AMT_TXCCY.value = 0;
            document.MAINFORM.CPYT_CR_BAL_TXCCY.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_CR_AMT_CRCCY_onchange", e);
    }
}

function CPYT_CR_AMT_TXCCY_onchange() {
    try {
        CPYT_CR_PER();
        ExchangingRate();
        CPYT_CR_AMT_CRCCY();
        AmtFormatAmtTrxccy();
        CHK_Total_Pct();

        ////add by amy for SMBC Demo in 20120907
        CPYT_CR_AMT_TXCCY();
        if (SYS_BeFloat(document.MAINFORM.CPYT_CR_AMT_TXCCY.value) < 0) {
            alert('Amount in Trx CCY can not accept negative values');
            document.MAINFORM.CPYT_CR_AMT_TXCCY.value = '';
            document.MAINFORM.CPYT_CR_BAL_TXCCY.value = '';
            document.MAINFORM.CPYT_CR_PER.value = '';
            document.MAINFORM.CPYT_CR_AMT_CRCCY.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_CR_AMT_TXCCY_onchange", e);
    }
}

function CPYT_CR_BUY_RATE_onchange() {
    try {
        CPYT_CR_AMT_CRCCY();

        AmtFromatAmtCrccy();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_CR_BUY_RATE_onchange", e);
    }
}

function CPYT_CR_CCY_onchange() {
    try {
        document.MAINFORM.CPYT_ASSGN_ID.value = "";
        document.MAINFORM.CPYT_CR_AC.value = "";
        MPO_CPYT_CR_BUY_RATE();
        ExchangingRate();
        CPYT_CR_AMT_CRCCY();
        Cal_X202_CCY_32A();
        Cal_X400_AMT_32A();
        CAL_CPYT_CR_CCY();
        document.MAINFORM.X202_CCY_32A.value = document.MAINFORM.CPYT_CR_CCY.value;
        document.MAINFORM.X202_AMT_32A.value = document.MAINFORM.CPYT_CR_AMT_CRCCY.value;
        CPYT_PAY_ADV_MSG();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_CR_CCY_onchange", e);
    }
}

function CPYT_CR_PER_onchange() {
    try {
        ExchangingRate();
        CAL_CPYT_CR_AMT_TXCCY();
        CPYT_CR_AMT_TXCCY();
        CPYT_CR_AMT_CRCCY();
        CHK_Total_Pct();
        Cal_X400_AMT_32A();
        if (SYS_BeFloat(document.MAINFORM.CPYT_CR_PER.value) < 0) {
            alert('Percentage can not be negative values')
                //alert('Pay amount is too small, please reinput.');
            document.MAINFORM.CPYT_CR_PER.value = 0;
            document.MAINFORM.CPYT_CR_AMT_CRCCY.value = 0;
            document.MAINFORM.CPYT_CR_AMT_TXCCY.value = 0;
            document.MAINFORM.CPYT_CR_BAL_TXCCY.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_CR_PER_onchange", e);
    }
}

function CPYT_CR_VAL_DATE_onchange() {
    try {
        CHK_CPYT_CR_VAL_DATE();
        Cal_X202_VALUE_DT_32A();
        Cal_X400_AMT_32A();
        Cal_X103_VALUE_DT_32A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_CR_VAL_DATE_onchange", e);
    }
}

function CPYT_PAY_ADV_MSG_onchange() {
    try {
        HiddenMT103Tab();
        CPYT_PAY_ADV_MSG();
        Show_MESSAGE_TYPE();
        Cal_X400_AMT_32A();
        Set_X400_ADV_BK_ID_from_MAIN();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_PAY_ADV_MSG_onchange", e);
    }
}

function CPYT_PAY_COV_MSG_onchange() {
    try {
        CPYT_PAY_COV_MSG();
        HiddenMT202Tab();
        CAL_X202_BKTOBK_INFO72();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_PAY_COV_MSG_onchange", e);
    }
}

function IS_GPI_MEMBER_onchange() {
    try {
        var IS_GPI = document.MAINFORM.IS_GPI_MEMBER.value;
        if (IS_GPI == 'YES') {
            document.MAINFORM.SERVICE_TYPE_ID_GPI_111.value = '001';
			document.MAINFORM.UETR_GPI_121.value = get_guid();
        } else if (IS_GPI == 'NO') {
            document.MAINFORM.SERVICE_TYPE_ID_GPI_111.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*IS_GPI_MEMBER_onchange", e);
    }
}

function X103BENECUADD1_59A_onchange() {
    try {
        Cal_X103_TAG_59A();
        VDO_Set_X103_CDTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103BENECUADD1_59A_onchange", e);
    }
}

function X103BENECUADD2_59A_onchange() {
    try {
        Cal_X103_TAG_59A();
        VDO_Set_X103_CDTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103BENECUADD2_59A_onchange", e);
    }
}

function X103BENECUADD3_59A_onchange() {
    try {
        Cal_X103_TAG_59A();
        VDO_Set_X103_CDTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103BENECUADD3_59A_onchange", e);
    }
}

function X103MEDIBKADD1_56A_onchange() {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103MEDIBKADD1_56A_onchange", e);
    }
}

function X103MEDIBKADD2_56A_onchange() {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103MEDIBKADD2_56A_onchange", e);
    }
}

function X103MEDIBKADD3_56A_onchange() {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103MEDIBKADD3_56A_onchange", e);
    }
}

function X103RECCORRACNO54A_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103RECCORRACNO54A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103RECCORRACNO54A_onchange", e);
    }
}

function X103SENDBKADD1_51A_onchange() {
    try {
        Cal_X103_TAG_51A();
        VDO_Set_X103_DBTRAGT();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103SENDBKADD1_51A_onchange", e);
    }
}

function X103SENDBKADD2_51A_onchange() {
    try {
        Cal_X103_TAG_51A();
        VDO_Set_X103_DBTRAGT();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103SENDBKADD2_51A_onchange", e);
    }
}

function X103SENDBKADD3_51A_onchange() {
    try {
        Cal_X103_TAG_51A();
        VDO_Set_X103_DBTRAGT();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103SENDBKADD3_51A_onchange", e);
    }
}

function X103SENDCORACNO53A_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103SENDCORACNO53A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103SENDCORACNO53A_onchange", e);
    }
}

function X103SENDCORADD153A_onchange() {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103SENDCORADD153A_onchange", e);
    }
}

function X103SENDCORADD253A_onchange() {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103SENDCORADD253A_onchange", e);
    }
}

function X103SENDCORADD353A_onchange() {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103SENDCORADD353A_onchange", e);
    }
}

function X103_50_ORDER_NO_onchange() {
    try {
        X103_50_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_50_ORDER_NO_onchange", e);
    }
}

function X103_51_ORDER_NO_onchange() {
    try {
        X103_51_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_51_ORDER_NO_onchange", e);
    }
}

function X103_52_ORDER_NO_onchange() {
    try {
        X103_52_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_52_ORDER_NO_onchange", e);
    }
}

function X103_53_ORDER_NO_onchange() {
    try {
        X103_53_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_53_ORDER_NO_onchange", e);
    }
}

function X103_54_ORDER_NO_onchange() {
    try {
        X103_54_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_54_ORDER_NO_onchange", e);
    }
}

function X103_56_ORDER_NO_onchange() {
    try {
        X103_56_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_56_ORDER_NO_onchange", e);
    }
}

function X103_57_ORDER_NO_onchange() {
    try {
        X103_57_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_57_ORDER_NO_onchange", e);
    }
}

function X103_59_ORDER_NO_onchange() {
    try {
        Cal_X103_59_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_59_ORDER_NO_onchange", e);
    }
}

function X103_ACCBKADD1_57A_onchange() {
    try {
        Cal_X103_TAG_57A();
        VDO_Set_X103_CDTRAGT();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ACCBKADD1_57A_onchange", e);
    }
}

function X103_ACCBKADD2_57A_onchange() {
    try {
        Cal_X103_TAG_57A();
        VDO_Set_X103_CDTRAGT();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ACCBKADD2_57A_onchange", e);
    }
}

function X103_ACCBKADD3_57A_onchange() {
    try {
        Cal_X103_TAG_57A();
        VDO_Set_X103_CDTRAGT();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ACCBKADD3_57A_onchange", e);
    }
}

function X103_ACC_BKACNO57A_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103_ACC_BKACNO57A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ACC_BKACNO57A_onchange", e);
    }
}

function X103_ACC_BKID_57A_onchange() {
    try {
        X103_ACC_BKID_57Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ACC_BKID_57A_onchange", e);
    }
}

function X103_ACC_BKNM_57A_onchange() {
    try {
        Cal_X103_TAG_57A();
        VDO_Set_X103_CDTRAGT();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ACC_BKNM_57A_onchange", e);
    }
}

function X103_ACC_BKSW_57A_onchange() {
    try {
        Cal_X103_ACC_BKSW_57A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ACC_BKSW_57A_onchange", e);
    }
}

function X103_ADV_BKADD1_B2_onchange() {
    try {
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ADV_BKADD1_B2_onchange", e);
    }
}

function X103_ADV_BKADD2_B2_onchange() {
    try {
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ADV_BKADD2_B2_onchange", e);
    }
}

function X103_ADV_BKADD3_B2_onchange() {
    try {
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ADV_BKADD3_B2_onchange", e);
    }
}

function X103_ADV_BKID_B2_onchange() {
    try {
        X103_ADV_BKID_B2onchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ADV_BKID_B2_onchange", e);
    }
}

function X103_ADV_BKNM_B2_onchange() {
    try {
        Cal_X103_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ADV_BKNM_B2_onchange", e);
    }
}

function X103_ADV_BKSW_B2_onchange() {
    try {
        Cal_X103_ADV_BKSW_B2();
        VDO_Set_X103_INSTDAGT();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ADV_BKSW_B2_onchange", e);
    }
}

function X103_B2_ORDER_NO_onchange() {
    try {
        X103_B2_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_B2_ORDER_NO_onchange", e);
    }
}

function X103_BENECUACNO59A_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103_BENECUACNO59A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_BENECUACNO59A_onchange", e);
    }
}

function X103_BENECU_BKSW_59_onchange() {
    try {
        Cal_X103_BENECU_BKSW_59();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_BENECU_BKSW_59_onchange", e);
    }
}

function X103_BENECU_ID_59A_onchange() {
    try {
        X103_BENECU_ID_59Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_BENECU_ID_59A_onchange", e);
    }
}

function X103_BENECU_NM_59A_onchange() {
    try {
        Cal_X103_TAG_59A();
        VDO_Set_X103_CDTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_BENECU_NM_59A_onchange", e);
    }
}

function X103_BKTOBK_INFO72_onchange() {
    try {
        SYT_ADD_CHK_AC_NO(document.MAINFORM.X103_BKTOBK_INFO72);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_BKTOBK_INFO72_onchange", e);
    }
}

function X103_DET_CHG_71A_onchange() {
    try {
        document.MAINFORM.X103_SENDCHGAMT71F.value = 0; // add by Jesse for Defect #4424 2014/3/10
        document.MAINFORM.X103_RECCHGAMT_71G.value = 0; // add by Jesse for Defect #4424 2014/3/10
        if (document.MAINFORM.X103_DET_CHG_71A.value == 'BEN') {
            SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, 'M');
            SYT_ChangeFldClass(document.MAINFORM.X103_RECCHGAMT_71G, 'P');
        }
        if (document.MAINFORM.X103_DET_CHG_71A.value == 'OUR') {
            SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X103_RECCHGAMT_71G, 'O');
        }

        if (document.MAINFORM.X103_DET_CHG_71A.value == 'SHA') {
            SYT_ChangeFldClass(document.MAINFORM.X103_RECCHGAMT_71G, 'P');
            SYT_ChangeFldClass(document.MAINFORM.X103_SENDCHGAMT71F, 'O');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_DET_CHG_71A_onchange", e);
    }
}

function X103_MEDIBKACNO56A_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103_MEDIBKACNO56A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_MEDIBKACNO56A_onchange", e);
    }
}

function X103_MEDI_BKID_56A_onchange() {
    try {
        X103_MEDI_BKID_56Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_MEDI_BKID_56A_onchange", e);
    }
}

function X103_MEDI_BKNM_56A_onchange() {
    try {
        Cal_X103_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_MEDI_BKNM_56A_onchange", e);
    }
}

function X103_MEDI_BKSW_56A_onchange() {
    try {
        Cal_X103_MEDI_BKSW_56A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_MEDI_BKSW_56A_onchange", e);
    }
}

function X103_ORDBKACNO_52A_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X103_ORDBKACNO_52A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDBKACNO_52A_onchange", e);
    }
}

function X103_ORDBKADD1_52A_onchange() {
    try {
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDBKADD1_52A_onchange", e);
    }
}

function X103_ORDBKADD2_52A_onchange() {
    try {
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDBKADD2_52A_onchange", e);
    }
}

function X103_ORDBKADD3_52A_onchange() {
    try {
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDBKADD3_52A_onchange", e);
    }
}

function X103_ORDCUACNO_50A_onchange() {
    try {
        if (document.MAINFORM.X103_TAG_50A.value == "A" || document.MAINFORM.X103_TAG_50A.value == "K") {
            SYT_CHK_AC_NO_IDNT(document.MAINFORM.X103_ORDCUACNO_50A);
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDCUACNO_50A_onchange", e);
    }
}

function X103_ORDCUADD1_50A_onchange() {
    try {
        Cal_X103_TAG_50A();
        VDO_Set_X103_DBTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDCUADD1_50A_onchange", e);
    }
}

function X103_ORDCUADD2_50A_onchange() {
    try {
        Cal_X103_TAG_50A();
        VDO_Set_X103_DBTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDCUADD2_50A_onchange", e);
    }
}

function X103_ORDCUADD3_50A_onchange() {
    try {
        Cal_X103_TAG_50A();
        VDO_Set_X103_DBTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDCUADD3_50A_onchange", e);
    }
}

function X103_ORDCU_ID_50A_onchange() {
    try {
        X103_ORDCU_ID_50Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDCU_ID_50A_onchange", e);
    }
}

function X103_ORDCU_ID_OP_onchange() {
    try {
        X103_ORDCU_ID_OP_change();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDCU_ID_OP_onchange", e);
    }
}

function X103_ORDCU_NM_50A_onchange() {
    try {
        Cal_X103_TAG_50A();
        VDO_Set_X103_DBTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDCU_NM_50A_onchange", e);
    }
}

function X103_ORDCU_SW_50A_onchange() {
    try {
        Cal_X103_ORDCU_SW_50A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORDCU_SW_50A_onchange", e);
    }
}

function X103_ORD_BKID_52A_onchange() {
    try {
        X103_ORD_BKID_52Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORD_BKID_52A_onchange", e);
    }
}

function X103_ORD_BKNM_52A_onchange() {
    try {
        Cal_X103_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORD_BKNM_52A_onchange", e);
    }
}

function X103_ORD_BKSW_52A_onchange() {
    try {
        Cal_X103_ORD_BKSW_52A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_ORD_BKSW_52A_onchange", e);
    }
}

function X103_RECCHGAMT_71G_onchange() {
    try {
        CAL_X103_RECCHGAMT_71G();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_RECCHGAMT_71G_onchange", e);
    }
}

function X103_RECCHGCCY_71G_onchange() {
    try {
        CAL_X103_RECCHGAMT_71G();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_RECCHGCCY_71G_onchange", e);
    }
}

function X103_RECCORADD154A_onchange() {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_RECCORADD154A_onchange", e);
    }
}

function X103_RECCORADD254A_onchange() {
    try {
        Cal_X103_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_RECCORADD254A_onchange", e);
    }
}

function X103_RECCORADD354A_onchange() {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_RECCORADD354A_onchange", e);
    }
}

function X103_RECCORRID_54A_onchange() {
    try {
        X103_RECCORRID_54Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_RECCORRID_54A_onchange", e);
    }
}

function X103_RECCORRNM_54A_onchange() {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_RECCORRNM_54A_onchange", e);
    }
}

function X103_RECCORRSW_54A_onchange() {
    try {
        Cal_X103_RECCORRSW_54A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_RECCORRSW_54A_onchange", e);
    }
}

function X103_REG_REP_77B_onchange() {
    try {
        SYT_ADD_CHK_AC_NO(document.MAINFORM.X103_REG_REP_77B);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_REG_REP_77B_onchange", e);
    }
}

function X103_REMIT_INFO_70_onchange() {
    try {
        SYT_ADD_CHK_AC_NO(document.MAINFORM.X103_REMIT_INFO_70);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_REMIT_INFO_70_onchange", e);
    }
}

function X103_SENDBKACNO51A_onchange() {
    try {
        SYT_CHK_AC_NO_IDNT(document.MAINFORM.X103_SENDBKACNO51A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SENDBKACNO51A_onchange", e);
    }
}

function X103_SENDCHGAMT71F_onchange() {
    try {
        CAL_X103_SENDCHGAMT71F();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SENDCHGAMT71F_onchange", e);
    }
}

function X103_SENDCHGCCY71F_onchange() {
    try {
        CAL_X103_SENDCHGAMT71F();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SENDCHGCCY71F_onchange", e);
    }
}

function X103_SENDCORRID53A_onchange() {
    try {
        X103_SENDCORRID53Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SENDCORRID53A_onchange", e);
    }
}

function X103_SENDCORRNM53A_onchange() {
    try {
        Cal_X103_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SENDCORRNM53A_onchange", e);
    }
}

function X103_SENDCORRSW53A_onchange() {
    try {
        Cal_X103_SENDCORRSW53A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SENDCORRSW53A_onchange", e);
    }
}

function X103_SEND_BKID_51A_onchange() {
    try {
        X103_SEND_BKID_51Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SEND_BKID_51A_onchange", e);
    }
}

function X103_SEND_BKNM_51A_onchange() {
    try {
        Cal_X103_TAG_51A();
        VDO_Set_X103_DBTRAGT();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SEND_BKNM_51A_onchange", e);
    }
}

function X103_SEND_BKSW_51A_onchange() {
    try {
        Cal_X103_SEND_BKSW_51A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_SEND_BKSW_51A_onchange", e);
    }
}

function X103_TAG_50A_onchange() {
    try {
        X103_TAG_50Achange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_TAG_50A_onchange", e);
    }
}

function X202BENEBKADD1_58A_onchange() {
    try {
        Cal_X202_TAG_58A();
        VDO_Set_X202_CDTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202BENEBKADD1_58A_onchange", e);
    }
}

function X202BENEBKADD2_58A_onchange() {
    try {
        Cal_X202_TAG_58A();
        VDO_Set_X202_CDTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202BENEBKADD2_58A_onchange", e);
    }
}

function X202BENEBKADD3_58A_onchange() {
    try {
        Cal_X202_TAG_58A();
        VDO_Set_X202_CDTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202BENEBKADD3_58A_onchange", e);
    }
}

function X202MEDIBKADD1_56A_onchange() {
    try {
        Cal_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202MEDIBKADD1_56A_onchange", e);
    }
}

function X202MEDIBKADD2_56A_onchange() {
    try {
        Cal_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202MEDIBKADD2_56A_onchange", e);
    }
}

function X202MEDIBKADD3_56A_onchange() {
    try {
        Cal_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202MEDIBKADD3_56A_onchange", e);
    }
}

function X202RECCORRACNO54A_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202RECCORRACNO54A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202RECCORRACNO54A_onchange", e);
    }
}

function X202SENDCORACNO53A_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202SENDCORACNO53A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202SENDCORACNO53A_onchange", e);
    }
}

function X202SENDCORADD153A_onchange() {
    try {
        Cal_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202SENDCORADD153A_onchange", e);
    }
}

function X202SENDCORADD253A_onchange() {
    try {
        Cal_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202SENDCORADD253A_onchange", e);
    }
}

function X202SENDCORADD353A_onchange() {
    try {
        Cal_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202SENDCORADD353A_onchange", e);
    }
}

function X202_52_ORDER_NO_onchange() {
    try {
        Cal_X202_52_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_52_ORDER_NO_onchange", e);
    }
}

function X202_53_ORDER_NO_onchange() {
    try {
        Cal_X202_53_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_53_ORDER_NO_onchange", e);
    }
}

function X202_54_ORDER_NO_onchange() {
    try {
        Cal_X202_54_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_54_ORDER_NO_onchange", e);
    }
}

function X202_56_ORDER_NO_onchange() {
    try {
        Cal_X202_56_ORDER_NO();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_56_ORDER_NO_onchange", e);
    }
}

function X202_ACCBKADD1_57A_onchange() {
    try {
        Cal_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ACCBKADD1_57A_onchange", e);
    }
}

function X202_ACCBKADD2_57A_onchange() {
    try {
        Cal_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ACCBKADD2_57A_onchange", e);
    }
}

function X202_ACCBKADD3_57A_onchange() {
    try {
        Cal_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ACCBKADD3_57A_onchange", e);
    }
}

function X202_ACC_BKACNO57A_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202_ACC_BKACNO57A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ACC_BKACNO57A_onchange", e);
    }
}

function X202_ACC_BKID_57A_onchange() {
    try {
        X202_ACC_BKID_57Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ACC_BKID_57A_onchange", e);
    }
}

function X202_ACC_BKNM_57A_onchange() {
    try {
        Cal_X202_TAG_57A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ACC_BKNM_57A_onchange", e);
    }
}

function X202_ACC_BKSW_57A_onchange() {
    try {
        X202_ACC_BKSW_57Achange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ACC_BKSW_57A_onchange", e);
    }
}

function X202_ADV_BKADD1_B2_onchange() {
    try {
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ADV_BKADD1_B2_onchange", e);
    }
}

function X202_ADV_BKADD2_B2_onchange() {
    try {
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ADV_BKADD2_B2_onchange", e);
    }
}

function X202_ADV_BKADD3_B2_onchange() {
    try {
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ADV_BKADD3_B2_onchange", e);
    }
}

function X202_ADV_BKID_B2_onchange() {
    try {
        X202_ADV_BKID_B2onchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ADV_BKID_B2_onchange", e);
    }
}

function X202_ADV_BKNM_B2_onchange() {
    try {
        Cal_X202_TAG_B2();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ADV_BKNM_B2_onchange", e);
    }
}

function X202_ADV_BKSW_B2_onchange() {
    try {
        X202_ADV_BKSW_B2change();
        VDO_Set_X202_INSTDAGT();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ADV_BKSW_B2_onchange", e);
    }
}

function X202_BENEBKACNO58A_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202_BENEBKACNO58A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_BENEBKACNO58A_onchange", e);
    }
}

function X202_BENE_BKID_58A_onchange() {
    try {
        X202_BENE_BKID_58Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_BENE_BKID_58A_onchange", e);
    }
}

function X202_BENE_BKNM_58A_onchange() {
    try {
        Cal_X202_TAG_58A();
        VDO_Set_X202_CDTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_BENE_BKNM_58A_onchange", e);
    }
}

function X202_BENE_BKSW_58A_onchange() {
    try {
        X202_BENE_BKSW_58Achange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_BENE_BKSW_58A_onchange", e);
    }
}

function X202_BKTOBK_INFO72_onchange() {
    try {
        SYT_ADD_CHK_AC_NO(document.MAINFORM.X202_BKTOBK_INFO72);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_BKTOBK_INFO72_onchange", e);
    }
}

function X202_MEDIBKACNO56A_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202_MEDIBKACNO56A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_MEDIBKACNO56A_onchange", e);
    }
}

function X202_MEDI_BKID_56A_onchange() {
    try {
        X202_MEDI_BKID_56Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_MEDI_BKID_56A_onchange", e);
    }
}

function X202_MEDI_BKNM_56A_onchange() {
    try {
        Cal_X202_TAG_56A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_MEDI_BKNM_56A_onchange", e);
    }
}

function X202_MEDI_BKSW_56A_onchange() {
    try {
        X202_MEDI_BKSW_56Achange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_MEDI_BKSW_56A_onchange", e);
    }
}

function X202_ORDBKACNO_52A_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X202_ORDBKACNO_52A);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ORDBKACNO_52A_onchange", e);
    }
}

function X202_ORDBKADD1_52A_onchange() {
    try {
        Cal_X202_TAG_52A();
        VDO_Set_X202_DBTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ORDBKADD1_52A_onchange", e);
    }
}

function X202_ORDBKADD2_52A_onchange() {
    try {
        Cal_X202_TAG_52A();
        VDO_Set_X202_DBTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ORDBKADD2_52A_onchange", e);
    }
}

function X202_ORDBKADD3_52A_onchange() {
    try {
        Cal_X202_TAG_52A();
        VDO_Set_X202_DBTR();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ORDBKADD3_52A_onchange", e);
    }
}

function X202_ORDBK_ID_52A_onchange() {
    try {
        X202_ORDBK_ID_52Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ORDBK_ID_52A_onchange", e);
    }
}

function X202_ORDBK_NM_52A_onchange() {
    try {
        Cal_X202_TAG_52A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ORDBK_NM_52A_onchange", e);
    }
}

function X202_ORDBK_SW_52A_onchange() {
    try {
        X202_ORDBK_SW_52Achange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_ORDBK_SW_52A_onchange", e);
    }
}

function X202_RECCORADD154A_onchange() {
    try {
        Cal_X202_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_RECCORADD154A_onchange", e);
    }
}

function X202_RECCORADD254A_onchange() {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_RECCORADD254A_onchange", e);
    }
}

function X202_RECCORADD354A_onchange() {
    try {
        Cal_X103_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_RECCORADD354A_onchange", e);
    }
}

function X202_RECCORRID_54A_onchange() {
    try {
        X202_RECCORRID_54Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_RECCORRID_54A_onchange", e);
    }
}

function X202_RECCORRNM_54A_onchange() {
    try {
        Cal_X202_TAG_54A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_RECCORRNM_54A_onchange", e);
    }
}

function X202_RECCORRSW_54A_onchange() {
    try {
        X202_RECCORRSW_54Achange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_RECCORRSW_54A_onchange", e);
    }
}

function X202_SENDCORRID53A_onchange() {
    try {
        X202_SENDCORRID53Aonchange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_SENDCORRID53A_onchange", e);
    }
}

function X202_SENDCORRNM53A_onchange() {
    try {
        Cal_X202_TAG_53A();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_SENDCORRNM53A_onchange", e);
    }
}

function X202_SENDCORRSW53A_onchange() {
    try {
        X202_SENDCORRSW53Achange();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_SENDCORRSW53A_onchange", e);
    }
}

function X400_ACC_BK_ACNO_onchange() {
    try {
        X400_CHK_ACNO(document.MAINFORM.X400_ACC_BK_ACNO);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ACC_BK_ACNO_onchange", e);
    }
}

function X400_ACC_BK_ID_onchange() {
    try {
        X400_ID_ONCHANGE_CUBK('X400_ACC_BK_ID', 'X400_ACC_BK_ID');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ACC_BK_ID_onchange", e);
    }
}

function X400_ACC_BK_NM_onchange() {
    try {
        X400_SW_TAG_A_D(new Array(document.MAINFORM.X400_ACC_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ACC_BK_NM_onchange", e);
    }
}

function X400_ACC_BK_SW_ADD_onchange() {
    try {
        X400_GetBKIF_BY_BIC(document.MAINFORM.X400_ACC_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ACC_BK_SW_ADD_onchange", e);
    }
}

function X400_ADV_BK_ID_onchange() {
    try {
        X400_ID_ONCHANGE_CUBK('X400_ADV_BK_ID', 'X400_ADV_BK_ID');
        Change_53andRecevieBank();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ADV_BK_ID_onchange", e);
    }
}

function X400_ADV_BK_NM_onchange() {
    try {
        X400_SW_TAG_A_D(new Array(document.MAINFORM.X400_ADV_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ADV_BK_NM_onchange", e);
    }
}

function X400_ADV_BK_SW_ADD_onchange() {
    try {
        X400_GetBKIF_BY_BIC(document.MAINFORM.X400_ADV_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ADV_BK_SW_ADD_onchange", e);
    }
}

function X400_BENE_BK_ID_onchange() {
    try {
        X400_ID_ONCHANGE_CUBK('X400_BENE_BK_ID', 'X400_BENE_BK_ID');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_BENE_BK_ID_onchange", e);
    }
}

function X400_BENE_BK_NM_onchange() {
    try {
        X400_SW_TAG_A_D(new Array(document.MAINFORM.X400_BENE_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_BENE_BK_NM_onchange", e);
    }
}

function X400_BENE_BK_SW_ADD_onchange() {
    try {
        X400_GetBKIF_BY_BIC(document.MAINFORM.X400_BENE_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_BENE_BK_SW_ADD_onchange", e);
    }
}

function X400_BKTOBK_INFO_72_onchange() {
    try {
        SYT_ADD_CHK_AC_NO(document.MAINFORM.X400_BKTOBK_INFO_72);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_BKTOBK_INFO_72_onchange", e);
    }
}

function X400_ORD_BK_ACNO_onchange() {
    try {
        X400_CHK_ACNO(document.MAINFORM.X400_ORD_BK_ACNO);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ORD_BK_ACNO_onchange", e);
    }
}

function X400_ORD_BK_ID_onchange() {
    try {
        X400_ID_ONCHANGE_CUBK('X400_ORD_BK_ID', 'X400_ORD_BK_ID');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ORD_BK_ID_onchange", e);
    }
}

function X400_ORD_BK_NM_onchange() {
    try {
        X400_SW_TAG_A_D(new Array(document.MAINFORM.X400_ORD_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ORD_BK_NM_onchange", e);
    }
}

function X400_ORD_BK_SW_ADD_onchange() {
    try {
        X400_GetBKIF_BY_BIC(document.MAINFORM.X400_ORD_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ORD_BK_SW_ADD_onchange", e);
    }
}

function X400_RECCOR_BK_ACNO_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X400_RECCOR_BK_ACNO);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_RECCOR_BK_ACNO_onchange", e);
    }
}

function X400_RECCOR_BK_ID_onchange() {
    try {
        X400_ID_ONCHANGE_CUBK('X400_RECCOR_BK_ID', 'X400_RECCOR_BK_ID');
        EEHtml.fireEvent(document.MAINFORM.X400_RECCOR_BK_ACNO, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_RECCOR_BK_ID_onchange", e);
    }
}

function X400_RECCOR_BK_NM_onchange() {
    try {
        X400_SW_TAG_A_D(new Array(document.MAINFORM.X400_RECCOR_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_RECCOR_BK_NM_onchange", e);
    }
}

function X400_RECCOR_BK_SW_ADD_onchange() {
    try {
        X400_GetBKIF_BY_BIC(document.MAINFORM.X400_RECCOR_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_RECCOR_BK_SW_ADD_onchange", e);
    }
}

function X400_SENDCORR_BK_ACNO_onchange() {
    try {
        SYT_CHK_AC_NO(document.MAINFORM.X400_SENDCORR_BK_ACNO);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_SENDCORR_BK_ACNO_onchange", e);
    }
}

function X400_SENDCORR_BK_ID_onchange() {
    try {
        X400_ID_ONCHANGE_CUBK('X400_SENDCORR_BK_ID', 'X400_SENDCORR_BK_ID');
        EEHtml.fireEvent(document.MAINFORM.X400_SENDCORR_BK_ACNO, 'onchange');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_SENDCORR_BK_ID_onchange", e);
    }
}

function X400_SENDCORR_BK_NM_onchange() {
    try {
        X400_SW_TAG_A_D(new Array(document.MAINFORM.X400_SENDCORR_BK_SW_ADD));
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_SENDCORR_BK_NM_onchange", e);
    }
}

function X400_SENDCORR_BK_SW_ADD_onchange() {
    try {
        X400_GetBKIF_BY_BIC(document.MAINFORM.X400_SENDCORR_BK_SW_ADD);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_SENDCORR_BK_SW_ADD_onchange", e);
    }
}

function CPYT_ASSGN_ID_BTN_onclick() {
    try {
        Cal_CPYT_ASSGN_ID();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_ASSGN_ID_BTN_onclick", e);
    }
}

function CPYT_ASSIGNEE_BTN_onclick() {
    try {
        InqAssignee();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_ASSIGNEE_BTN_onclick", e);
    }
}

function CPYT_CR_AC_BTN_onclick() {
    try {
        //SYS_InqCUBK_Sql('CPYT_CR_AC', 'C_CUST_ID= \'<--CPYT_ASSGN_ID-->\' AND  C_CURRENCY=\'<--CPYT_CR_CCY-->\'');
        var acType = document.MAINFORM.CPYT_CR_AC_TYPE.value;
        var cur = document.MAINFORM.CPYT_CR_CCY.value;
        if (acType == 'INTERNAL') {
            var condition = "C_AC_IDENTIFIER = 'I' AND C_CURRENCY = '" + cur + "'";
            SYS_InqCUBK_Sql('CPYT_CR_AC', condition);
        } else {
            SYS_InqCUBK_byCondition('CPYT_CR_AC', '1');
        }
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*CPYT_CR_AC_BTN_onclick", e);
    }
}

function X103BENECUADD1_59A_BTN_onclick() {
    try {
        SYS_InqCUBK('X103_BENECU_ADD_59A', 'X103_BENECU_ID_59A', 'ID');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103BENECUADD1_59A_BTN_onclick", e);
    }
}

function X103_50_ADD_BTN_onclick() {
    try {
        SYS_InqCUBK('X103_ORDCU_ADD_50A', 'X103_ORDCU_ID_50A');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_50_ADD_BTN_onclick", e);
    }
}

function X103_50_BTN_onclick() {
    try {
        X103_ORDCU_ID_50Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_50_BTN_onclick", e);
    }
}

function X103_51_ADD_BTN_onclick() {
    try {
        SYS_InqCUBK('X103_SEND_BK_ADD_51A', 'X103_SEND_BKID_51A');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_51_ADD_BTN_onclick", e);
    }
}

function X103_51_BTN_onclick() {
    try {
        X103_SEND_BKID_51Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_51_BTN_onclick", e);
    }
}

function X103_52A_ADD_BTN_onclick() {
    try {
        SYS_InqCUBK('X103_ORD_BK_ADD_52A', 'X103_ORD_BKID_52A');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_52A_ADD_BTN_onclick", e);
    }
}

function X103_52A_BTN_onclick() {
    try {
        X103_ORD_BKID_52Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_52A_BTN_onclick", e);
    }
}

function X103_53A_ADD_BTN_onclick() {
    try {
        SYS_InqCUBK('X103_SENDCORRADD53A', 'X103_SENDCORRID53A');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_53A_ADD_BTN_onclick", e);
    }
}

function X103_53A_BTN_onclick() {
    try {
        X103_SENDCORRID53Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_53A_BTN_onclick", e);
    }
}

function X103_54A_ADD_BTN_onclick() {
    try {
        SYS_InqCUBK('X103_RECCORRADD_54A', 'X103_RECCORRID_54A');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_54A_ADD_BTN_onclick", e);
    }
}

function X103_54A_BTN_onclick() {
    try {
        X103_RECCORRID_54Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_54A_BTN_onclick", e);
    }
}

function X103_56A_ADD_BTN_onclick() {
    try {
        SYS_InqCUBK('X103_MEDI_BKADD_56A', 'X103_MEDI_BKID_56A');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_56A_ADD_BTN_onclick", e);
    }
}

function X103_56A_BTN_onclick() {
    try {
        X103_MEDI_BKID_56Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_56A_BTN_onclick", e);
    }
}

function X103_57A_ADD_BTN_onclick() {
    try {
        SYS_InqCUBK('X103_ACC_BKADD_57A', 'X103_ACC_BKID_57A');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_57A_ADD_BTN_onclick", e);
    }
}

function X103_57A_BTN_onclick() {
    try {
        X103_ACC_BKID_57Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_57A_BTN_onclick", e);
    }
}

function X103_59_ADD_BTN_onclick() {
    try {
        SYS_InqCUBK('X103_BENECU_ADD_59A', 'X103_BENECU_ID_59A');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_59_ADD_BTN_onclick", e);
    }
}

function X103_59_BTN_onclick() {
    try {
        X103_BENECU_ID_59Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_59_BTN_onclick", e);
    }
}

function X103_B2_ADD_BTN_onclick() {
    try {
        SYS_InqCUBK('X103_ADV_BKADD_B2', 'X103_ADV_BKID_B2');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_B2_ADD_BTN_onclick", e);
    }
}

function X103_B2_BTN_onclick() {
    try {
        X103_ADV_BKID_B2onclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X103_B2_BTN_onclick", e);
    }
}

function X202_52_ADD_BTN_onclick() {
    try {
        //SYS_InqCUBK('X202_ORDBK_ADD_52A', 'X202_ORDBK_ID_52A', 'ID');
        SYS_InqCUBK_byCondition('X202_ORDBK_ADD_52A', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_52_ADD_BTN_onclick", e);
    }
}

function X202_52_BTN_onclick() {
    try {
        X202_ORDBK_ID_52Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_52_BTN_onclick", e);
    }
}

function X202_53_ADD_BTN_onclick() {
    try {
        //SYS_InqCUBK('X202_SENDCORRADD53A', 'X202_SENDCORRID53A', 'ID');
        SYS_InqCUBK_byCondition('X202_SENDCORRADD53A', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_53_ADD_BTN_onclick", e);
    }
}

function X202_53_BTN_onclick() {
    try {
        X202_SENDCORRID53Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_53_BTN_onclick", e);
    }
}

function X202_54_ADD_BTN_onclick() {
    try {
        //SYS_InqCUBK('X202_RECCORRADD_54A', 'X202_RECCORRID_54A', 'ID');
        SYS_InqCUBK_byCondition('X202_RECCORRID_54A', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_54_ADD_BTN_onclick", e);
    }
}

function X202_54_BTN_onclick() {
    try {
        X202_RECCORRID_54Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_54_BTN_onclick", e);
    }
}

function X202_56_ADD_BTN_onclick() {
    try {
        //X202_MEDI_BKID_56Aonclick();
        SYS_InqCUBK_byCondition('X202_MEDI_BKADD_56A', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_56_ADD_BTN_onclick", e);
    }
}

function X202_56_BTN_onclick() {
    try {
        //SYS_InqCUBK('X202_MEDI_BKID_56A');
        X202_MEDI_BKID_56Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_56_BTN_onclick", e);
    }
}

function X202_57_ADD_BTN_onclick() {
    try {
        //SYS_InqCUBK('X202_ACC_BKADD_57A', 'X202_ACC_BKID_57A', 'ID');
        SYS_InqCUBK_byCondition('X202_ACC_BKADD_57A', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_57_ADD_BTN_onclick", e);
    }
}

function X202_57_BTN_onclick() {
    try {
        X202_ACC_BKID_57Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_57_BTN_onclick", e);
    }
}

function X202_58_ADD_BTN_onclick() {
    try {
        //SYS_InqCUBK('X202_BENE_BKADD_58A', 'X202_BENE_BKID_58A', 'ID');
        SYS_InqCUBK_byCondition('X202_BENE_BKADD_58A', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_58_ADD_BTN_onclick", e);
    }
}

function X202_58_BTN_onclick() {
    try {
        X202_BENE_BKID_58Aonclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_58_BTN_onclick", e);
    }
}

function X202_B2_ADD_BTN_onclick() {
    try {
        SYS_InqCUBK_byCondition('X202_ADV_BKADD_B2', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_B2_ADD_BTN_onclick", e);
    }
}

function X202_B2_BTN_onclick() {
    try {
        X202_ADV_BKID_B2onclick();
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_B2_BTN_onclick", e);
    }
}

function X202_TAB_onclick() {
    try {
        var EEAutoaArray_X202_input; // Utility Auto Fix Comments
        var EEAutoaArray_X202_select; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var l; // Utility Auto Fix Comments
        var m; // Utility Auto Fix Comments
        var n; // Utility Auto Fix Comments
        var nAll_input_elements; // Utility Auto Fix Comments
        var nAll_select_elements; // Utility Auto Fix Comments
        var sFull_X103_input_name; // Utility Auto Fix Comments
        var sFull_X103_select_name; // Utility Auto Fix Comments
        var sFull_X202_input_name; // Utility Auto Fix Comments
        var sFull_X202_select_name; // Utility Auto Fix Comments
        var sStr_input; // Utility Auto Fix Comments
        var EEAutosStr_input; // Utility Auto Fix Comments
        var sStr_select; // Utility Auto Fix Comments
        var EEAutosStr_select; // Utility Auto Fix Comments
        var sX103_input; // Utility Auto Fix Comments
        var EEAutosX103_input; // Utility Auto Fix Comments
        var sX103_select; // Utility Auto Fix Comments
        var EEAutosX103_select; // Utility Auto Fix Comments
        var sX202_input; // Utility Auto Fix Comments
        var EEAutosX202_input; // Utility Auto Fix Comments
        var sX202_select; // Utility Auto Fix Comments
        var EEAutosX202_select; // Utility Auto Fix Comments

        nAll_input_elements = document.getElementsByTagName("input");
        sX202_input = "";
        EEAutosX202_input = ""; // Utility Auto Fix Comments
        sX103_input = "";
        EEAutosX103_input = ""; // Utility Auto Fix Comments
        sStr_input = "";
        EEAutosStr_input = ""; // Utility Auto Fix Comments

        for (i = 0; i < nAll_input_elements.length; i++) {
            sStr_input = nAll_input_elements[i].name.substr(0, 4);
            EEAutosStr_input = nAll_input_elements[i].name.substr(4, nAll_input_elements[i].name.length - 4); // Utility Auto Fix Comments
            if (sStr_input == "X202") {
                sX202_input += nAll_input_elements[i].name + ";";
                EEAutosX202_input += EEAutosStr_input + ";"; // Utility Auto Fix Comments
            }
            if (sStr_input == "X103") {
                sX103_input += nAll_input_elements[i].name + ";";
                EEAutosX103_input += EEAutosStr_input + ";"; // Utility Auto Fix Comments
            }
        }
        EEAutoaArray_X202_input = EEAutosX202_input.split(";"); // Utility Auto Fix Comments
        sFull_X202_input_name = "";
        sFull_X103_input_name = "";
        for (l = 0; l < EEAutoaArray_X202_input.length; l++) { // Utility Auto Fix Comments
            if (EEAutosX103_input.indexOf(EEAutoaArray_X202_input[l]) > -1) { // Utility Auto Fix Comments
                sFull_X202_input_name = "X202" + EEAutoaArray_X202_input[l]; // Utility Auto Fix Comments
                sFull_X103_input_name = "X103" + EEAutoaArray_X202_input[l]; // Utility Auto Fix Comments
                if (!EEHtml.getElementById(sFull_X103_input_name)) {
                    continue;
                }
                if (EEHtml.getElementById(sFull_X103_input_name).value != "" && EEHtml.getElementById(sFull_X202_input_name).value == "") {
                    EEHtml.getElementById(sFull_X202_input_name).value = EEHtml.getElementById(sFull_X103_input_name).value;
                }
            }
        }

        nAll_select_elements = document.getElementsByTagName("select");
        sX202_select = "";
        EEAutosX202_select = ""; // Utility Auto Fix Comments
        sX103_select = "";
        EEAutosX103_select = ""; // Utility Auto Fix Comments
        sStr_select = "";
        EEAutosStr_select = ""; // Utility Auto Fix Comments
        for (n = 0; n < nAll_select_elements.length; n++) {
            sStr_select = nAll_select_elements[n].name.substr(0, 4);
            EEAutosStr_select = nAll_select_elements[n].name.substr(4, nAll_select_elements[n].name.length - 4); // Utility Auto Fix Comments
            if (sStr_select == "X202") {
                sX202_select += nAll_select_elements[n].name + ";";
                EEAutosX202_select += EEAutosStr_select + ";"; // Utility Auto Fix Comments
            }
            if (sStr_select == "X103") {
                sX103_select += nAll_select_elements[n].name + ";";
                EEAutosX103_select += EEAutosStr_select + ";"; // Utility Auto Fix Comments
            }
        }

        EEAutoaArray_X202_select = EEAutosX202_select.split(";"); // Utility Auto Fix Comments
        sFull_X202_select_name = "";
        sFull_X103_select_name = "";
        for (m = 0; m < EEAutoaArray_X202_select.length; m++) { // Utility Auto Fix Comments
            if (EEAutosX103_select.indexOf(EEAutoaArray_X202_select[m]) > -1) { // Utility Auto Fix Comments
                sFull_X202_select_name = "X202" + EEAutoaArray_X202_select[m]; // Utility Auto Fix Comments
                sFull_X103_select_name = "X103" + EEAutoaArray_X202_select[m]; // Utility Auto Fix Comments
                if (!EEHtml.getElementById(sFull_X103_select_name)) {
                    continue;
                }
                if (EEHtml.getElementById(sFull_X103_select_name).value != "" && EEHtml.getElementById(sFull_X202_select_name).value == "") {
                    EEHtml.getElementById(sFull_X202_select_name).value = EEHtml.getElementById(sFull_X103_select_name).value;
                }
            }
        }
        EEHtml.getElementById("X202_ORDBK_ID_52A").value = EEHtml.getElementById("X103_ORD_BKID_52A").value;
        EEHtml.getElementById("X202_ORDBK_NM_52A").value = EEHtml.getElementById("X103_ORD_BKNM_52A").value;
        EEHtml.getElementById("X202_ORDBK_SW_52A").value = EEHtml.getElementById("X103_ORD_BKSW_52A").value;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X202_TAB_onclick", e);
    }
}

function X400_ACC_BK_ADD_BTN_onclick() {
    try {
        SYS_InqCUBK('X400_ACC_BKADD_57A', 'X400_ACC_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ACC_BK_ADD_BTN_onclick", e);
    }
}

function X400_ACC_BK_ID_BTN_onclick() {
    try {
        SYT_BankLookUp(document.MAINFORM.X400_ACC_BK_ID_BTN);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ACC_BK_ID_BTN_onclick", e);
    }
}

function X400_ADV_BK_ADD_BTN_onclick() {
    try {
        //SYS_InqCUBK('X400_ADV_BKADD_B2', 'X400_ADV_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('X400_ADV_BKADD_B2', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ADV_BK_ADD_BTN_onclick", e);
    }
}

function X400_ADV_BK_ID_BTN_onclick() {
    try {
        SYT_BankLookUp(document.MAINFORM.X400_ADV_BK_ID_BTN);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ADV_BK_ID_BTN_onclick", e);
    }
}

function X400_BENE_BK_ADD_BTN_onclick() {
    try {
        SYS_InqCUBK('X400_ACC_BKADD_58A', 'X400_BENE_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_BENE_BK_ADD_BTN_onclick", e);
    }
}

function X400_BENE_BK_ID_BTN_onclick() {
    try {
        SYT_BankLookUp(document.MAINFORM.X400_BENE_BK_ID_BTN);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_BENE_BK_ID_BTN_onclick", e);
    }
}

function X400_ORD_BK_ADD_BTN_onclick() {
    try {
        SYS_InqCUBK('X400_ORD_BK_ADD_52A', 'X400_ORD_BK_ID', 'ID');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ORD_BK_ADD_BTN_onclick", e);
    }
}

function X400_ORD_BK_ID_BTN_onclick() {
    try {
        SYT_BankLookUp(document.MAINFORM.X400_ORD_BK_ID_BTN);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_ORD_BK_ID_BTN_onclick", e);
    }
}

function X400_RECCOR_BK_ADD_BTN_onclick() {
    try {
        //SYS_InqCUBK('X400_RECCORR_ADD_54A', 'X400_RECCOR_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('X400_RECCORR_ADD_54A', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_RECCOR_BK_ADD_BTN_onclick", e);
    }
}

function X400_RECCOR_BK_ID_BTN_onclick() {
    try {
        SYT_BankLookUp(document.MAINFORM.X400_RECCOR_BK_ID_BTN);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_RECCOR_BK_ID_BTN_onclick", e);
    }
}

function X400_SENDCORR_BK_ADD_BTN_onclick() {
    try {
        //SYS_InqCUBK('X400_SENDCORR_ADD_53A', 'X400_SENDCORR_BK_ID', 'ID');
        SYS_InqCUBK_byCondition('X400_SENDCORR_ADD_53A', '1');
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_SENDCORR_BK_ADD_BTN_onclick", e);
    }
}

function X400_SENDCORR_BK_ID_BTN_onclick() {
    try {
        SYT_BankLookUp(document.MAINFORM.X400_SENDCORR_BK_ID_BTN);
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*X400_SENDCORR_BK_ID_BTN_onclick", e);
    }
}

function PaymentCredit_initFieldEvent() {
    try {
        document.MAINFORM.CPYT_ASSGN_ID.onchange = CPYT_ASSGN_ID_onchange;
        document.MAINFORM.CPYT_CR_AC_TYPE.onchange = CPYT_CR_AC_TYPE_onchange;
        document.MAINFORM.CPYT_CR_AMT_CRCCY.onchange = CPYT_CR_AMT_CRCCY_onchange;
        document.MAINFORM.CPYT_CR_AMT_TXCCY.onchange = CPYT_CR_AMT_TXCCY_onchange;
        document.MAINFORM.CPYT_CR_BUY_RATE.onchange = CPYT_CR_BUY_RATE_onchange;
        document.MAINFORM.CPYT_CR_CCY.onchange = CPYT_CR_CCY_onchange;
        document.MAINFORM.CPYT_CR_PER.onchange = CPYT_CR_PER_onchange;
        document.MAINFORM.CPYT_CR_VAL_DATE.onchange = CPYT_CR_VAL_DATE_onchange;
        document.MAINFORM.CPYT_PAY_ADV_MSG.onchange = CPYT_PAY_ADV_MSG_onchange;
        document.MAINFORM.CPYT_PAY_COV_MSG.onchange = CPYT_PAY_COV_MSG_onchange;
        document.MAINFORM.IS_GPI_MEMBER.onchange = IS_GPI_MEMBER_onchange;
        document.MAINFORM.X103BENECUADD1_59A.onchange = X103BENECUADD1_59A_onchange;
        document.MAINFORM.X103BENECUADD2_59A.onchange = X103BENECUADD2_59A_onchange;
        document.MAINFORM.X103BENECUADD3_59A.onchange = X103BENECUADD3_59A_onchange;
        document.MAINFORM.X103MEDIBKADD1_56A.onchange = X103MEDIBKADD1_56A_onchange;
        document.MAINFORM.X103MEDIBKADD2_56A.onchange = X103MEDIBKADD2_56A_onchange;
        document.MAINFORM.X103MEDIBKADD3_56A.onchange = X103MEDIBKADD3_56A_onchange;
        document.MAINFORM.X103RECCORRACNO54A.onchange = X103RECCORRACNO54A_onchange;
        document.MAINFORM.X103SENDBKADD1_51A.onchange = X103SENDBKADD1_51A_onchange;
        document.MAINFORM.X103SENDBKADD2_51A.onchange = X103SENDBKADD2_51A_onchange;
        document.MAINFORM.X103SENDBKADD3_51A.onchange = X103SENDBKADD3_51A_onchange;
        document.MAINFORM.X103SENDCORACNO53A.onchange = X103SENDCORACNO53A_onchange;
        document.MAINFORM.X103SENDCORADD153A.onchange = X103SENDCORADD153A_onchange;
        document.MAINFORM.X103SENDCORADD253A.onchange = X103SENDCORADD253A_onchange;
        document.MAINFORM.X103SENDCORADD353A.onchange = X103SENDCORADD353A_onchange;
        document.MAINFORM.X103_50_ORDER_NO.onchange = X103_50_ORDER_NO_onchange;
        document.MAINFORM.X103_51_ORDER_NO.onchange = X103_51_ORDER_NO_onchange;
        document.MAINFORM.X103_52_ORDER_NO.onchange = X103_52_ORDER_NO_onchange;
        document.MAINFORM.X103_53_ORDER_NO.onchange = X103_53_ORDER_NO_onchange;
        document.MAINFORM.X103_54_ORDER_NO.onchange = X103_54_ORDER_NO_onchange;
        document.MAINFORM.X103_56_ORDER_NO.onchange = X103_56_ORDER_NO_onchange;
        document.MAINFORM.X103_57_ORDER_NO.onchange = X103_57_ORDER_NO_onchange;
        document.MAINFORM.X103_59_ORDER_NO.onchange = X103_59_ORDER_NO_onchange;
        document.MAINFORM.X103_ACCBKADD1_57A.onchange = X103_ACCBKADD1_57A_onchange;
        document.MAINFORM.X103_ACCBKADD2_57A.onchange = X103_ACCBKADD2_57A_onchange;
        document.MAINFORM.X103_ACCBKADD3_57A.onchange = X103_ACCBKADD3_57A_onchange;
        document.MAINFORM.X103_ACC_BKACNO57A.onchange = X103_ACC_BKACNO57A_onchange;
        document.MAINFORM.X103_ACC_BKID_57A.onchange = X103_ACC_BKID_57A_onchange;
        document.MAINFORM.X103_ACC_BKNM_57A.onchange = X103_ACC_BKNM_57A_onchange;
        document.MAINFORM.X103_ACC_BKSW_57A.onchange = X103_ACC_BKSW_57A_onchange;
        document.MAINFORM.X103_ADV_BKADD1_B2.onchange = X103_ADV_BKADD1_B2_onchange;
        document.MAINFORM.X103_ADV_BKADD2_B2.onchange = X103_ADV_BKADD2_B2_onchange;
        document.MAINFORM.X103_ADV_BKADD3_B2.onchange = X103_ADV_BKADD3_B2_onchange;
        document.MAINFORM.X103_ADV_BKID_B2.onchange = X103_ADV_BKID_B2_onchange;
        document.MAINFORM.X103_ADV_BKNM_B2.onchange = X103_ADV_BKNM_B2_onchange;
        document.MAINFORM.X103_ADV_BKSW_B2.onchange = X103_ADV_BKSW_B2_onchange;
        document.MAINFORM.X103_B2_ORDER_NO.onchange = X103_B2_ORDER_NO_onchange;
        document.MAINFORM.X103_BENECUACNO59A.onchange = X103_BENECUACNO59A_onchange;
        document.MAINFORM.X103_BENECU_BKSW_59.onchange = X103_BENECU_BKSW_59_onchange;
        document.MAINFORM.X103_BENECU_ID_59A.onchange = X103_BENECU_ID_59A_onchange;
        document.MAINFORM.X103_BENECU_NM_59A.onchange = X103_BENECU_NM_59A_onchange;
        document.MAINFORM.X103_BKTOBK_INFO72.onchange = X103_BKTOBK_INFO72_onchange;
        document.MAINFORM.X103_DET_CHG_71A.onchange = X103_DET_CHG_71A_onchange;
        document.MAINFORM.X103_MEDIBKACNO56A.onchange = X103_MEDIBKACNO56A_onchange;
        document.MAINFORM.X103_MEDI_BKID_56A.onchange = X103_MEDI_BKID_56A_onchange;
        document.MAINFORM.X103_MEDI_BKNM_56A.onchange = X103_MEDI_BKNM_56A_onchange;
        document.MAINFORM.X103_MEDI_BKSW_56A.onchange = X103_MEDI_BKSW_56A_onchange;
        document.MAINFORM.X103_ORDBKACNO_52A.onchange = X103_ORDBKACNO_52A_onchange;
        document.MAINFORM.X103_ORDBKADD1_52A.onchange = X103_ORDBKADD1_52A_onchange;
        document.MAINFORM.X103_ORDBKADD2_52A.onchange = X103_ORDBKADD2_52A_onchange;
        document.MAINFORM.X103_ORDBKADD3_52A.onchange = X103_ORDBKADD3_52A_onchange;
        document.MAINFORM.X103_ORDCUACNO_50A.onchange = X103_ORDCUACNO_50A_onchange;
        document.MAINFORM.X103_ORDCUADD1_50A.onchange = X103_ORDCUADD1_50A_onchange;
        document.MAINFORM.X103_ORDCUADD2_50A.onchange = X103_ORDCUADD2_50A_onchange;
        document.MAINFORM.X103_ORDCUADD3_50A.onchange = X103_ORDCUADD3_50A_onchange;
        document.MAINFORM.X103_ORDCU_ID_50A.onchange = X103_ORDCU_ID_50A_onchange;
        document.MAINFORM.X103_ORDCU_ID_OP.onchange = X103_ORDCU_ID_OP_onchange;
        document.MAINFORM.X103_ORDCU_NM_50A.onchange = X103_ORDCU_NM_50A_onchange;
        document.MAINFORM.X103_ORDCU_SW_50A.onchange = X103_ORDCU_SW_50A_onchange;
        document.MAINFORM.X103_ORD_BKID_52A.onchange = X103_ORD_BKID_52A_onchange;
        document.MAINFORM.X103_ORD_BKNM_52A.onchange = X103_ORD_BKNM_52A_onchange;
        document.MAINFORM.X103_ORD_BKSW_52A.onchange = X103_ORD_BKSW_52A_onchange;
        document.MAINFORM.X103_RECCHGAMT_71G.onchange = X103_RECCHGAMT_71G_onchange;
        document.MAINFORM.X103_RECCHGCCY_71G.onchange = X103_RECCHGCCY_71G_onchange;
        document.MAINFORM.X103_RECCORADD154A.onchange = X103_RECCORADD154A_onchange;
        document.MAINFORM.X103_RECCORADD254A.onchange = X103_RECCORADD254A_onchange;
        document.MAINFORM.X103_RECCORADD354A.onchange = X103_RECCORADD354A_onchange;
        document.MAINFORM.X103_RECCORRID_54A.onchange = X103_RECCORRID_54A_onchange;
        document.MAINFORM.X103_RECCORRNM_54A.onchange = X103_RECCORRNM_54A_onchange;
        document.MAINFORM.X103_RECCORRSW_54A.onchange = X103_RECCORRSW_54A_onchange;
        document.MAINFORM.X103_REG_REP_77B.onchange = X103_REG_REP_77B_onchange;
        document.MAINFORM.X103_REMIT_INFO_70.onchange = X103_REMIT_INFO_70_onchange;
        document.MAINFORM.X103_SENDBKACNO51A.onchange = X103_SENDBKACNO51A_onchange;
        document.MAINFORM.X103_SENDCHGAMT71F.onchange = X103_SENDCHGAMT71F_onchange;
        document.MAINFORM.X103_SENDCHGCCY71F.onchange = X103_SENDCHGCCY71F_onchange;
        document.MAINFORM.X103_SENDCORRID53A.onchange = X103_SENDCORRID53A_onchange;
        document.MAINFORM.X103_SENDCORRNM53A.onchange = X103_SENDCORRNM53A_onchange;
        document.MAINFORM.X103_SENDCORRSW53A.onchange = X103_SENDCORRSW53A_onchange;
        document.MAINFORM.X103_SEND_BKID_51A.onchange = X103_SEND_BKID_51A_onchange;
        document.MAINFORM.X103_SEND_BKNM_51A.onchange = X103_SEND_BKNM_51A_onchange;
        document.MAINFORM.X103_SEND_BKSW_51A.onchange = X103_SEND_BKSW_51A_onchange;
        document.MAINFORM.X103_TAG_50A.onchange = X103_TAG_50A_onchange;
        document.MAINFORM.X202BENEBKADD1_58A.onchange = X202BENEBKADD1_58A_onchange;
        document.MAINFORM.X202BENEBKADD2_58A.onchange = X202BENEBKADD2_58A_onchange;
        document.MAINFORM.X202BENEBKADD3_58A.onchange = X202BENEBKADD3_58A_onchange;
        document.MAINFORM.X202MEDIBKADD1_56A.onchange = X202MEDIBKADD1_56A_onchange;
        document.MAINFORM.X202MEDIBKADD2_56A.onchange = X202MEDIBKADD2_56A_onchange;
        document.MAINFORM.X202MEDIBKADD3_56A.onchange = X202MEDIBKADD3_56A_onchange;
        document.MAINFORM.X202RECCORRACNO54A.onchange = X202RECCORRACNO54A_onchange;
        document.MAINFORM.X202SENDCORACNO53A.onchange = X202SENDCORACNO53A_onchange;
        document.MAINFORM.X202SENDCORADD153A.onchange = X202SENDCORADD153A_onchange;
        document.MAINFORM.X202SENDCORADD253A.onchange = X202SENDCORADD253A_onchange;
        document.MAINFORM.X202SENDCORADD353A.onchange = X202SENDCORADD353A_onchange;
        document.MAINFORM.X202_52_ORDER_NO.onchange = X202_52_ORDER_NO_onchange;
        document.MAINFORM.X202_53_ORDER_NO.onchange = X202_53_ORDER_NO_onchange;
        document.MAINFORM.X202_54_ORDER_NO.onchange = X202_54_ORDER_NO_onchange;
        document.MAINFORM.X202_56_ORDER_NO.onchange = X202_56_ORDER_NO_onchange;
        document.MAINFORM.X202_ACCBKADD1_57A.onchange = X202_ACCBKADD1_57A_onchange;
        document.MAINFORM.X202_ACCBKADD2_57A.onchange = X202_ACCBKADD2_57A_onchange;
        document.MAINFORM.X202_ACCBKADD3_57A.onchange = X202_ACCBKADD3_57A_onchange;
        document.MAINFORM.X202_ACC_BKACNO57A.onchange = X202_ACC_BKACNO57A_onchange;
        document.MAINFORM.X202_ACC_BKID_57A.onchange = X202_ACC_BKID_57A_onchange;
        document.MAINFORM.X202_ACC_BKNM_57A.onchange = X202_ACC_BKNM_57A_onchange;
        document.MAINFORM.X202_ACC_BKSW_57A.onchange = X202_ACC_BKSW_57A_onchange;
        document.MAINFORM.X202_ADV_BKADD1_B2.onchange = X202_ADV_BKADD1_B2_onchange;
        document.MAINFORM.X202_ADV_BKADD2_B2.onchange = X202_ADV_BKADD2_B2_onchange;
        document.MAINFORM.X202_ADV_BKADD3_B2.onchange = X202_ADV_BKADD3_B2_onchange;
        document.MAINFORM.X202_ADV_BKID_B2.onchange = X202_ADV_BKID_B2_onchange;
        document.MAINFORM.X202_ADV_BKNM_B2.onchange = X202_ADV_BKNM_B2_onchange;
        document.MAINFORM.X202_ADV_BKSW_B2.onchange = X202_ADV_BKSW_B2_onchange;
        document.MAINFORM.X202_BENEBKACNO58A.onchange = X202_BENEBKACNO58A_onchange;
        document.MAINFORM.X202_BENE_BKID_58A.onchange = X202_BENE_BKID_58A_onchange;
        document.MAINFORM.X202_BENE_BKNM_58A.onchange = X202_BENE_BKNM_58A_onchange;
        document.MAINFORM.X202_BENE_BKSW_58A.onchange = X202_BENE_BKSW_58A_onchange;
        document.MAINFORM.X202_BKTOBK_INFO72.onchange = X202_BKTOBK_INFO72_onchange;
        document.MAINFORM.X202_MEDIBKACNO56A.onchange = X202_MEDIBKACNO56A_onchange;
        document.MAINFORM.X202_MEDI_BKID_56A.onchange = X202_MEDI_BKID_56A_onchange;
        document.MAINFORM.X202_MEDI_BKNM_56A.onchange = X202_MEDI_BKNM_56A_onchange;
        document.MAINFORM.X202_MEDI_BKSW_56A.onchange = X202_MEDI_BKSW_56A_onchange;
        document.MAINFORM.X202_ORDBKACNO_52A.onchange = X202_ORDBKACNO_52A_onchange;
        document.MAINFORM.X202_ORDBKADD1_52A.onchange = X202_ORDBKADD1_52A_onchange;
        document.MAINFORM.X202_ORDBKADD2_52A.onchange = X202_ORDBKADD2_52A_onchange;
        document.MAINFORM.X202_ORDBKADD3_52A.onchange = X202_ORDBKADD3_52A_onchange;
        document.MAINFORM.X202_ORDBK_ID_52A.onchange = X202_ORDBK_ID_52A_onchange;
        document.MAINFORM.X202_ORDBK_NM_52A.onchange = X202_ORDBK_NM_52A_onchange;
        document.MAINFORM.X202_ORDBK_SW_52A.onchange = X202_ORDBK_SW_52A_onchange;
        document.MAINFORM.X202_RECCORADD154A.onchange = X202_RECCORADD154A_onchange;
        document.MAINFORM.X202_RECCORADD254A.onchange = X202_RECCORADD254A_onchange;
        document.MAINFORM.X202_RECCORADD354A.onchange = X202_RECCORADD354A_onchange;
        document.MAINFORM.X202_RECCORRID_54A.onchange = X202_RECCORRID_54A_onchange;
        document.MAINFORM.X202_RECCORRNM_54A.onchange = X202_RECCORRNM_54A_onchange;
        document.MAINFORM.X202_RECCORRSW_54A.onchange = X202_RECCORRSW_54A_onchange;
        document.MAINFORM.X202_SENDCORRID53A.onchange = X202_SENDCORRID53A_onchange;
        document.MAINFORM.X202_SENDCORRNM53A.onchange = X202_SENDCORRNM53A_onchange;
        document.MAINFORM.X202_SENDCORRSW53A.onchange = X202_SENDCORRSW53A_onchange;
        document.MAINFORM.X400_ACC_BK_ACNO.onchange = X400_ACC_BK_ACNO_onchange;
        document.MAINFORM.X400_ACC_BK_ID.onchange = X400_ACC_BK_ID_onchange;
        document.MAINFORM.X400_ACC_BK_NM.onchange = X400_ACC_BK_NM_onchange;
        document.MAINFORM.X400_ACC_BK_SW_ADD.onchange = X400_ACC_BK_SW_ADD_onchange;
        document.MAINFORM.X400_ADV_BK_ID.onchange = X400_ADV_BK_ID_onchange;
        document.MAINFORM.X400_ADV_BK_NM.onchange = X400_ADV_BK_NM_onchange;
        document.MAINFORM.X400_ADV_BK_SW_ADD.onchange = X400_ADV_BK_SW_ADD_onchange;
        document.MAINFORM.X400_BENE_BK_ID.onchange = X400_BENE_BK_ID_onchange;
        document.MAINFORM.X400_BENE_BK_NM.onchange = X400_BENE_BK_NM_onchange;
        document.MAINFORM.X400_BENE_BK_SW_ADD.onchange = X400_BENE_BK_SW_ADD_onchange;
        document.MAINFORM.X400_BKTOBK_INFO_72.onchange = X400_BKTOBK_INFO_72_onchange;
        document.MAINFORM.X400_ORD_BK_ACNO.onchange = X400_ORD_BK_ACNO_onchange;
        document.MAINFORM.X400_ORD_BK_ID.onchange = X400_ORD_BK_ID_onchange;
        document.MAINFORM.X400_ORD_BK_NM.onchange = X400_ORD_BK_NM_onchange;
        document.MAINFORM.X400_ORD_BK_SW_ADD.onchange = X400_ORD_BK_SW_ADD_onchange;
        document.MAINFORM.X400_RECCOR_BK_ACNO.onchange = X400_RECCOR_BK_ACNO_onchange;
        document.MAINFORM.X400_RECCOR_BK_ID.onchange = X400_RECCOR_BK_ID_onchange;
        document.MAINFORM.X400_RECCOR_BK_NM.onchange = X400_RECCOR_BK_NM_onchange;
        document.MAINFORM.X400_RECCOR_BK_SW_ADD.onchange = X400_RECCOR_BK_SW_ADD_onchange;
        document.MAINFORM.X400_SENDCORR_BK_ACNO.onchange = X400_SENDCORR_BK_ACNO_onchange;
        document.MAINFORM.X400_SENDCORR_BK_ID.onchange = X400_SENDCORR_BK_ID_onchange;
        document.MAINFORM.X400_SENDCORR_BK_NM.onchange = X400_SENDCORR_BK_NM_onchange;
        document.MAINFORM.X400_SENDCORR_BK_SW_ADD.onchange = X400_SENDCORR_BK_SW_ADD_onchange;
        document.MAINFORM.CPYT_ASSGN_ID_BTN.onclick = CPYT_ASSGN_ID_BTN_onclick;
        document.MAINFORM.CPYT_ASSIGNEE_BTN.onclick = CPYT_ASSIGNEE_BTN_onclick;
        document.MAINFORM.CPYT_CR_AC_BTN.onclick = CPYT_CR_AC_BTN_onclick;
        document.MAINFORM.X103BENECUADD1_59A_BTN.onclick = X103BENECUADD1_59A_BTN_onclick;
        document.MAINFORM.X103_50_ADD_BTN.onclick = X103_50_ADD_BTN_onclick;
        document.MAINFORM.X103_50_BTN.onclick = X103_50_BTN_onclick;
        document.MAINFORM.X103_51_ADD_BTN.onclick = X103_51_ADD_BTN_onclick;
        document.MAINFORM.X103_51_BTN.onclick = X103_51_BTN_onclick;
        document.MAINFORM.X103_52A_ADD_BTN.onclick = X103_52A_ADD_BTN_onclick;
        document.MAINFORM.X103_52A_BTN.onclick = X103_52A_BTN_onclick;
        document.MAINFORM.X103_53A_ADD_BTN.onclick = X103_53A_ADD_BTN_onclick;
        document.MAINFORM.X103_53A_BTN.onclick = X103_53A_BTN_onclick;
        document.MAINFORM.X103_54A_ADD_BTN.onclick = X103_54A_ADD_BTN_onclick;
        document.MAINFORM.X103_54A_BTN.onclick = X103_54A_BTN_onclick;
        document.MAINFORM.X103_56A_ADD_BTN.onclick = X103_56A_ADD_BTN_onclick;
        document.MAINFORM.X103_56A_BTN.onclick = X103_56A_BTN_onclick;
        document.MAINFORM.X103_57A_ADD_BTN.onclick = X103_57A_ADD_BTN_onclick;
        document.MAINFORM.X103_57A_BTN.onclick = X103_57A_BTN_onclick;
        document.MAINFORM.X103_59_ADD_BTN.onclick = X103_59_ADD_BTN_onclick;
        document.MAINFORM.X103_59_BTN.onclick = X103_59_BTN_onclick;
        document.MAINFORM.X103_B2_ADD_BTN.onclick = X103_B2_ADD_BTN_onclick;
        document.MAINFORM.X103_B2_BTN.onclick = X103_B2_BTN_onclick;
        document.MAINFORM.X202_52_ADD_BTN.onclick = X202_52_ADD_BTN_onclick;
        document.MAINFORM.X202_52_BTN.onclick = X202_52_BTN_onclick;
        document.MAINFORM.X202_53_ADD_BTN.onclick = X202_53_ADD_BTN_onclick;
        document.MAINFORM.X202_53_BTN.onclick = X202_53_BTN_onclick;
        document.MAINFORM.X202_54_ADD_BTN.onclick = X202_54_ADD_BTN_onclick;
        document.MAINFORM.X202_54_BTN.onclick = X202_54_BTN_onclick;
        document.MAINFORM.X202_56_ADD_BTN.onclick = X202_56_ADD_BTN_onclick;
        document.MAINFORM.X202_56_BTN.onclick = X202_56_BTN_onclick;
        document.MAINFORM.X202_57_ADD_BTN.onclick = X202_57_ADD_BTN_onclick;
        document.MAINFORM.X202_57_BTN.onclick = X202_57_BTN_onclick;
        document.MAINFORM.X202_58_ADD_BTN.onclick = X202_58_ADD_BTN_onclick;
        document.MAINFORM.X202_58_BTN.onclick = X202_58_BTN_onclick;
        document.MAINFORM.X202_B2_ADD_BTN.onclick = X202_B2_ADD_BTN_onclick;
        document.MAINFORM.X202_B2_BTN.onclick = X202_B2_BTN_onclick;
        //document.MAINFORM.X202_TAB.onclick = X202_TAB_onclick;
        document.MAINFORM.X400_ACC_BK_ADD_BTN.onclick = X400_ACC_BK_ADD_BTN_onclick;
        document.MAINFORM.X400_ACC_BK_ID_BTN.onclick = X400_ACC_BK_ID_BTN_onclick;
        document.MAINFORM.X400_ADV_BK_ADD_BTN.onclick = X400_ADV_BK_ADD_BTN_onclick;
        document.MAINFORM.X400_ADV_BK_ID_BTN.onclick = X400_ADV_BK_ID_BTN_onclick;
        document.MAINFORM.X400_BENE_BK_ADD_BTN.onclick = X400_BENE_BK_ADD_BTN_onclick;
        document.MAINFORM.X400_BENE_BK_ID_BTN.onclick = X400_BENE_BK_ID_BTN_onclick;
        document.MAINFORM.X400_ORD_BK_ADD_BTN.onclick = X400_ORD_BK_ADD_BTN_onclick;
        document.MAINFORM.X400_ORD_BK_ID_BTN.onclick = X400_ORD_BK_ID_BTN_onclick;
        document.MAINFORM.X400_RECCOR_BK_ADD_BTN.onclick = X400_RECCOR_BK_ADD_BTN_onclick;
        document.MAINFORM.X400_RECCOR_BK_ID_BTN.onclick = X400_RECCOR_BK_ID_BTN_onclick;
        document.MAINFORM.X400_SENDCORR_BK_ADD_BTN.onclick = X400_SENDCORR_BK_ADD_BTN_onclick;
        document.MAINFORM.X400_SENDCORR_BK_ID_BTN.onclick = X400_SENDCORR_BK_ID_BTN_onclick;
    } catch (e) {
        DisExcpt("SSSS_PaymentCredit.js*PaymentCredit_initFieldEvent", e);
    }
}

//window.onunload = OnLeave;