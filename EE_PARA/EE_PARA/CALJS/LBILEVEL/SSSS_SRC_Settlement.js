"path:SCRN/Library/FFIT/Settlement.lbi";

var csLbiCompProto = {};

var BUSI_TYPE_GL = 'GL';
var GTS_BR_ID_FOREXCHRT = '';
var acNoType8114 = '8114';
var ifReturnFlg = '';

csLbiCompProto.CABLEFEE_AC_AMT = function() {
    try {
        var buyingRt; // Utility Auto Fix Comments
        var cablefeeAcAmt; // Utility Auto Fix Comments
        buyingRt = SYS_GetExchangeRate_Fee(document.MAINFORM.SETT_AC_CCY8.value, 'USD', 'Buying Rate', '');
        if (document.MAINFORM.IN_OUT_FLAG_SETT.value == 'OUT' && document.MAINFORM.FREE_FLAG_SETT.value == 'NO' && document.MAINFORM.SETT_AC_CCY8.value != '') {
            cablefeeAcAmt = SYS_BeFloat(document.MAINFORM.SETT_CABLE_COMM.value) / SYS_BeFloat(buyingRt[0][1]) * 100;
            document.MAINFORM.SETT_AC_AMT8.value = SYT_CCY_AMT(document.MAINFORM.SETT_AC_CCY8.value, cablefeeAcAmt);
        } else {
            document.MAINFORM.SETT_AC_AMT8.value = 0;
            document.MAINFORM.SETT_AC_CCY8.value = '';
            document.MAINFORM.SETT_CUST_AC_NO8.value = '';
            document.MAINFORM.SETT_CUST_AC_NO8_S.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.CABLE_FAV_RMB = function() {
    try {
        var SETT_CABLE_HEAD; // Utility Auto Fix Comments
        var SETT_CABLE_TEMP; // Utility Auto Fix Comments
        var SETT_EXCH_FAV_RMB; // Utility Auto Fix Comments
        var SettEqAmtObject; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var settCableAmtObject; // Utility Auto Fix Comments
        var settTransFlgObject; // Utility Auto Fix Comments
        var ttlfavrmb; // Utility Auto Fix Comments
        ttlfavrmb = 0;
        for (i = 1; i <= 5; i++) { // Utility Auto Fix Comments
            settCableAmtObject = EEHtml.getElementById('SETT_CABLE_AMT' + i);
            SettEqAmtObject = EEHtml.getElementById('SETT_EQ_AMT' + i);
            settTransFlgObject = EEHtml.getElementById('SETT_TRANS_FLG' + i);
            SETT_EXCH_FAV_RMB = EEHtml.getElementById('SETT_EXCH_FAV_RMB' + i);
            SETT_CABLE_HEAD = EEHtml.getElementById('SETT_CABLE_HEAD' + i);
            SETT_CABLE_TEMP = EEHtml.getElementById('SETT_CABLE_TEMP' + i);
            if ((settTransFlgObject.value == '5' || settTransFlgObject.value == '6') && SYS_BeFloat(SettEqAmtObject.value) > 0 && document.MAINFORM.FREE_FLAG_SETT.value == 'YES') {
                SETT_EXCH_FAV_RMB.value = SYS_BeFloat(SETT_CABLE_HEAD.value);
                SETT_EXCH_FAV_RMB.value = SYT_CCY_AMT('USD', SETT_EXCH_FAV_RMB.value);
            } else if ((settTransFlgObject.value == '5' || settTransFlgObject.value == '6') && SettEqAmtObject.value > 0 && document.MAINFORM.FREE_FLAG_SETT.value == 'NO') {
                SETT_EXCH_FAV_RMB.value = SYS_BeFloat(SETT_CABLE_HEAD.value) - SYS_BeFloat(SETT_CABLE_TEMP.value);
                SETT_EXCH_FAV_RMB.value = SYT_CCY_AMT('USD', SETT_EXCH_FAV_RMB.value);
            } else {
                SETT_EXCH_FAV_RMB.value = 0.00;
            }
        }

        if (ifReturnFlg && document.MAINFORM.FREE_FLAG_SETT.value == 'YES') {
            document.MAINFORM.SETT_EXCH_FAV_RMB7.value = document.MAINFORM.SETT_CABLE_HEAD7.value;
        } else if (ifReturnFlg && document.MAINFORM.FREE_FLAG_SETT.value == 'NO') {
            document.MAINFORM.SETT_EXCH_FAV_RMB7.value = SYS_BeFloat(document.MAINFORM.SETT_CABLE_HEAD7.value) - SYS_BeFloat(document.MAINFORM.SETT_CABLE_TEMP7.value);
            document.MAINFORM.SETT_EXCH_FAV_RMB7.value = SYT_CCY_AMT('USD', document.MAINFORM.SETT_EXCH_FAV_RMB7.value);
        } else {
            document.MAINFORM.SETT_EXCH_FAV_RMB7.value = 0.00;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.FREE_FLAG_SETT_onchange = function() {
    try {
        var SETT_EXCH_FAV_RMB; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var settAmtToIdObject; // Utility Auto Fix Comments
        var settTransFlgObject; // Utility Auto Fix Comments
        j = 7;
        SETT_EXCH_FAV_RMB = EEHtml.getElementById('SETT_EXCH_FAV_RMB' + j);
        for (i = 1; i <= 5; i++) {
            settAmtToIdObject = EEHtml.getElementById('SETT_AMT_TO_ID' + i);
            settTransFlgObject = EEHtml.getElementById('SETT_TRANS_FLG' + i);
            if (settTransFlgObject.value != '5' && settTransFlgObject.value != '6') {
                continue;
            }
            if (document.MAINFORM.FREE_FLAG_SETT.value == 'YES') {
                GetCablePostFee_SETT('SETT_TRANS_FLG' + i, settAmtToIdObject.value, 'N');
                SETT_EXCH_FAV_RMB.value = 0.00;
            } else if ((settTransFlgObject.value == '5' || settTransFlgObject.value == '6') && document.MAINFORM.FREE_FLAG_SETT.value == 'NO') {
                GetCablePostFee_SETT('SETT_TRANS_FLG' + i, settAmtToIdObject.value, 'Y');
            } else {
                GetCablePostFee_SETT('SETT_TRANS_FLG' + i, settAmtToIdObject.value, 'N');
            }
        }

        if (document.MAINFORM.FREE_FLAG_SETT.value == 'YES') {
            GetCablePostFee_SETT('SETT_TRANS_FLG7', cableCustId, 'N');
        } else if (ifReturnFlg && document.MAINFORM.FREE_FLAG_SETT.value == 'NO') {
            GetCablePostFee_SETT('SETT_TRANS_FLG7', cableCustId, 'Y');
        }
        if (document.MAINFORM.IN_OUT_FLAG_SETT.value == 'OUT' && document.MAINFORM.FREE_FLAG_SETT.value == 'NO') {
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO8, 'M');
            document.MAINFORM.SETT_CUST_AC_NO8.readOnly = true;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO8, 'P');
        }
        SettleNonExchComm();
        SETT_PAGE_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.GetCablePostFee_SETT = function(fieldName, sBankId, chgFlg) {
    try {
        var CableFeeArr; // Utility Auto Fix Comments
        var FEE_AMT_BR; // Utility Auto Fix Comments
        var FEE_AMT_CUST; // Utility Auto Fix Comments
        var FEE_AMT_HEAD; // Utility Auto Fix Comments
        var SETT_CABLE_HEAD; // Utility Auto Fix Comments
        var SETT_CABLE_TEMP; // Utility Auto Fix Comments
        var SETT_EXCH_FAV_RMB; // Utility Auto Fix Comments
        var amtNumber; // Utility Auto Fix Comments
        var feebr; // Utility Auto Fix Comments
        var feecust; // Utility Auto Fix Comments
        var feehead; // Utility Auto Fix Comments
        var placecodeArray; // Utility Auto Fix Comments
        var sCntyCode; // Utility Auto Fix Comments
        var settCableAmtObject; // Utility Auto Fix Comments
        var settEqamtObject; // Utility Auto Fix Comments
        FEE_AMT_CUST = 0;
        FEE_AMT_HEAD = 0;
        FEE_AMT_BR = 0;
        feecust = false;
        feehead = false;
        feebr = false;
        CableFeeArr = new Array();
        amtNumber = fieldName.substr(14, 1);
        settCableAmtObject = EEHtml.getElementById('SETT_CABLE_AMT' + amtNumber);
        settEqamtObject = EEHtml.getElementById('SETT_EQ_AMT' + amtNumber);
        SETT_CABLE_HEAD = EEHtml.getElementById('SETT_CABLE_HEAD' + amtNumber);
        SETT_EXCH_FAV_RMB = EEHtml.getElementById('SETT_EXCH_FAV_RMB' + amtNumber);
        SETT_CABLE_TEMP = EEHtml.getElementById('SETT_CABLE_TEMP' + amtNumber);
        if (SYS_MODULE_NAME == 'DISC') {
            return;
        }
        if (chgFlg == 'N') {
            settCableAmtObject.value = 0;
            CABLE_FAV_RMB();
            SETT_AC_AMT(fieldName);
        }
        try {
            if (cpArr.length <= 0 || SYS_BeFloat(settEqamtObject.value) <= 0) {
                return;
            }
        } catch (e1) {
            return;
        }

        if (sBankId.length == 11) {
            sCntyCode = sBankId.substr(4, 2);
            sCntyCodeCUBK = sCntyCode;
            SYS_GetTableDataByRule('SSSS_SRC_Settlement_GetCablePostFee_SETT_0', '1');
            placecode = placecodeArray;
        } else if (sBankId.length == 3) {

            placecode = sBankId;
        } else {
            sBankIdCUBK = sBankId;
            SYS_GetTableDataByRule('SSSS_SRC_Settlement_GetCablePostFee_SETT_1', '1');
            sCntyCodeCUBK = sCntyCode;
            SYS_GetTableDataByRule('SSSS_SRC_Settlement_GetCablePostFee_SETT_2', '1');
            placecode = placecodeArray;
        }

        for (number = 0; number < cpArr.length; number++) {
            if (chgFlg == 'Y' && cpArr[number][3] == 'CABLEB') {
                if (placecode != 'DOM' && placecode != 'HKM' && placecode != '') {
                    placecode = 'OVR';
                }
                if (cpArr[number][1] == placecode) {
                    FLAT_AMT = SYS_BeFloat(cpArr[number][2]);
                }
                FEE_LEVEL = cpArr[number][5];
                if (FEE_LEVEL == 'HEADOFFICE') {
                    SETT_CABLE_HEAD.value = SYS_BeFloat(FLAT_AMT);
                    if (document.MAINFORM.FREE_FLAG_SETT.value == 'NO') {
                        settCableAmtObject.value = SYS_BeFloat(FLAT_AMT);
                        SETT_CABLE_TEMP.value = settCableAmtObject.value;
                    } else {
                        settCableAmtObject.value = 0.00;
                    }
                    feecust = true;
                }
                if (FEE_LEVEL == 'BRANCH') {
                    if (document.MAINFORM.FREE_FLAG_SETT.value == 'NO') {
                        settCableAmtObject.value = SYS_BeFloat(FLAT_AMT);
                        SETT_CABLE_TEMP.value = settCableAmtObject.value;
                    } else {
                        settCableAmtObject.value = 0.00; // Utility Auto Fix Comments
                    }
                    feebr = true;
                }
            } else if (chgFlg == 'N') {
                settCableAmtObject.value = 0;
            }
        }

        CABLE_FAV_RMB();
        SETT_AC_AMT(fieldName);
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.GetFee_SETT = function() {
    try {
        if (SYS_FUNCTION_TYPE == 'RE' || SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ') {
            return;
        }
        if (document.MAINFORM.GTS_BR_ID.value == GTS_BR_ID_FOREXCHRT && document.MAINFORM.SETT_CUST_ID.value == SETT_CUST_ID_FOREXCHRT && settGetFeeFlg == true) {
            return;
        }
        //settFeeArr=SYS_GetFee('COMM_MASTER','NONEXCH_CUST;NONEXCH_BK;NONEXCH_LH;NONEXCH_MT','CNY;USD',document.MAINFORM.GTS_BR_ID.value,document.MAINFORM.SETT_CUST_ID.value);
        GTS_BR_ID_FOREXCHRT = document.MAINFORM.GTS_BR_ID.value;
        SETT_CUST_ID_FOREXCHRT = document.MAINFORM.SETT_CUST_ID.value;
        settGetFeeFlg = true;
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.GetNonExchFee_SETT = function(feeName, fieldNumber) {
    try {
        var FEE_LEVEL; // Utility Auto Fix Comments
        var FEE_RT_BR; // Utility Auto Fix Comments
        var FEE_RT_CUST; // Utility Auto Fix Comments
        var FEE_RT_HEAD; // Utility Auto Fix Comments
        var MAX_FEE_BR; // Utility Auto Fix Comments
        var MAX_FEE_CUST; // Utility Auto Fix Comments
        var MAX_FEE_HEAD; // Utility Auto Fix Comments
        var MIN_FEE_BR; // Utility Auto Fix Comments
        var MIN_FEE_CUST; // Utility Auto Fix Comments
        var MIN_FEE_HEAD; // Utility Auto Fix Comments
        var custEqAmt; // Utility Auto Fix Comments
        var feebr; // Utility Auto Fix Comments
        var feecust; // Utility Auto Fix Comments
        var feehead; // Utility Auto Fix Comments
        var nonExchCommOriginValue; // Utility Auto Fix Comments
        var nonExchFeeArr; // Utility Auto Fix Comments
        var number; // Utility Auto Fix Comments
        var settexchhead; // Utility Auto Fix Comments
        GetFee_SETT();
        FEE_RT_CUST = 0;
        MIN_FEE_CUST = 0;
        MAX_FEE_CUST = 0;
        FEE_RT_HEAD = 0;
        MIN_FEE_HEAD = 0;
        MAX_FEE_HEAD = 0;
        FEE_RT_BR = 0;
        MIN_FEE_BR = 0;
        MAX_FEE_BR = 0;
        feecust = false;
        feehead = false;
        feebr = false;
        nonExchFeeArr = new Array();
        custEqAmt = EEHtml.getElementById('SETT_EQ_AMT' + fieldNumber);
        settexchhead = EEHtml.getElementById('SETT_EXCH_COMM_HEAD' + fieldNumber);
        for (number = 0; number < settFeeArr.length; number++) {
            if (settFeeArr[number][1] == feeName) {
                FEE_LEVEL = settFeeArr[number][3];
                if (FEE_LEVEL == 'CUST') {
                    FEE_RT_CUST = SYS_BeFloat(settFeeArr[number][8]);
                    MIN_FEE_CUST = SYS_BeFloat(settFeeArr[number][7]);
                    MAX_FEE_CUST = SYS_BeFloat(settFeeArr[number][6]);
                    feecust = true;
                }
                if (FEE_LEVEL == 'HEADOFFICE') {
                    FEE_RT_HEAD = SYS_BeFloat(settFeeArr[number][8]);
                    MIN_FEE_HEAD = SYS_BeFloat(settFeeArr[number][7]);
                    MAX_FEE_HEAD = SYS_BeFloat(settFeeArr[number][6]);
                    nonExchCommOriginValue = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(FEE_RT_HEAD) / 1000 * SYS_BeFloat(document.MAINFORM.SETT_NET_EXCH_RT1.value) / 100;
                    if (nonExchCommOriginValue < MAX_FEE_HEAD && nonExchCommOriginValue > MIN_FEE_HEAD) {
                        settexchhead.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(FEE_RT_HEAD) / 1000;
                        settexchhead.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, settexchhead.value);
                    } else if (nonExchCommOriginValue >= MAX_FEE_HEAD) {
                        settexchhead.value = MAX_FEE_HEAD / SYS_BeFloat(document.MAINFORM.SETT_NET_EXCH_RT1.value) * 100;
                        settexchhead.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, settexchhead.value);
                    } else {
                        settexchhead.value = MIN_FEE_HEAD / SYS_BeFloat(document.MAINFORM.SETT_NET_EXCH_RT1.value) * 100;
                        settexchhead.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, settexchhead.value);
                    }
                    feehead = true;
                }
                if (FEE_LEVEL == 'BRANCH') {
                    FEE_RT_BR = SYS_BeFloat(settFeeArr[number][8]);
                    MIN_FEE_BR = SYS_BeFloat(settFeeArr[number][7]);
                    MAX_FEE_BR = SYS_BeFloat(settFeeArr[number][6]);
                    feebr = true;
                }
            }
        }
        if (feecust) {
            nonExchFeeArr[0] = FEE_RT_CUST;
            nonExchFeeArr[1] = MIN_FEE_CUST;
            nonExchFeeArr[2] = MAX_FEE_CUST;
            return nonExchFeeArr;
        } else if (!feecust && feebr) {
            nonExchFeeArr[0] = FEE_RT_BR;
            nonExchFeeArr[1] = MIN_FEE_BR;
            nonExchFeeArr[2] = MAX_FEE_BR;
            return nonExchFeeArr;
        } else if (!feecust && !feebr && feehead) {
            nonExchFeeArr[0] = FEE_RT_HEAD;
            nonExchFeeArr[1] = MIN_FEE_HEAD;
            nonExchFeeArr[2] = MAX_FEE_HEAD;
            return nonExchFeeArr;
        } else {
            nonExchFeeArr[0] = 0;
            nonExchFeeArr[1] = 0;
            nonExchFeeArr[2] = 0;
            alert('There is no  rate for nonExch fee!');
            return nonExchFeeArr;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.GetVoucherDesc_Sett = function(counterBank, counterCustomer, clerkName) {
    try {
        for (i = 1; i <= 5; i++) {
            SETT_VCH_DESC_S = EEHtml.getElementById("SETT_VCH_DESC_S" + i);
            SETT_CUST_NM = EEHtml.getElementById("SETT_CUST_NM" + i);
            if (SETT_CUST_NM.value != "") {
                if (WHZH_CODE_814 == '8114') {
                    SETT_VCH_DESC_S.value = SETT_CUST_NM.value + "|" + settDclr[i] + "|";
                } else {
                    SETT_VCH_DESC_S.value = SETT_CUST_NM.value + "|" + document.MAINFORM.SETT_DCLR_NO1.value + "|";
                }


            }

        }



        if (EEHtml.getElementById("SETT_CUST_NM6").value != "") {
            EEHtml.getElementById("SETT_VCH_DESC_P6").value = EEHtml.getElementById("SETT_CUST_NM6").value + "|" + document.MAINFORM.SETT_DCLR_NO3.value + "|";
        }

        if (EEHtml.getElementById("SETT_CUST_NM8").value != "") {
            EEHtml.getElementById("SETT_VCH_DESC_P8").value = EEHtml.getElementById("SETT_CUST_NM8").value + "|" + document.MAINFORM.SETT_DCLR_NO2.value + "|";
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.IN_OUT_FLAG_SETT_onchange = function() {
    try {
        var i; // Utility Auto Fix Comments
        var settTransFlgObject; // Utility Auto Fix Comments
        for (i = 1; i <= 5; i++) {
            settTransFlgObject = EEHtml.getElementById('SETT_TRANS_FLG' + i);
            if (settTransFlgObject.value != '5' && settTransFlgObject.value != '6') {
                continue;
            }
            SETT_AC_AMT('SETT_TRANS_FLG' + i);
        }
        if (document.MAINFORM.IN_OUT_FLAG_SETT.value == 'OUT' && document.MAINFORM.FREE_FLAG_SETT.value == 'NO') {
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO8, 'M');
            document.MAINFORM.SETT_CUST_AC_NO8.readOnly = true;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO8, 'P');
        }
        CABLE_FAV_RMB();
        SETT_AC_AMT('SETT_TRANS_FLG7');
        SettleNonExchComm();
        SETT_PAGE_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.NONEXCH_FAV_RT1_onchange = function(intType) {
    try {
        document.MAINFORM.NONEXCHRT_onchange_flag.value = '1';
        SETT_EQ_AMT1_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.NONEXCH_FAV_RT2_onchange = function() {
    try {
        document.MAINFORM.NONEXCHRT_onchange_flag.value = '1';
        SETT_EQ_AMT_onchange('SETT_EQ_AMT2');
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.NONEXCH_FAV_RT3_onchange = function() {
    try {
        document.MAINFORM.NONEXCHRT_onchange_flag.value = '1';
        SETT_EQ_AMT_onchange('SETT_EQ_AMT3');
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.NONEXCH_FAV_RT4_onchange = function() {
    try {
        document.MAINFORM.NONEXCHRT_onchange_flag.value = '1';
        SETT_EQ_AMT_onchange('SETT_EQ_AMT4');
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.NONEXCH_FAV_RT5_onchange = function() {
    try {
        document.MAINFORM.NONEXCHRT_onchange_flag.value = '1';
        SETT_EQ_AMT_onchange('SETT_EQ_AMT5');
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.RPT_SETT_CNY_AMT = function() {
    try {
        var PRT_SETT_IN_CHG; // Utility Auto Fix Comments
        var SETT_AC_CCY; // Utility Auto Fix Comments
        var SETT_CUST_AC_NO; // Utility Auto Fix Comments
        var SETT_EQ_AMT; // Utility Auto Fix Comments
        var SETT_TRANS_FLG; // Utility Auto Fix Comments
        var custNonExchComm; // Utility Auto Fix Comments
        var vRPT_SETT_CNY_AMT; // Utility Auto Fix Comments
        document.MAINFORM.RPT_SETT_CNY_AC_NO.value = '';
        document.MAINFORM.RPT_SETT_EXCH_RT.value = 0;
        document.MAINFORM.RPT_SETT_CCY_AC_NO.value = '';

        vRPT_SETT_CNY_AMT = 0;
        PRT_SETT_IN_CHG = 0;
        for (i = 1; i <= 5; i++) {
            SETT_TRANS_FLG = EEHtml.getElementById('SETT_TRANS_FLG' + i);
            SETT_AC_CCY = EEHtml.getElementById('SETT_AC_CCY' + i);
            custNonExchComm = EEHtml.getElementById('SETT_EXCH_COMM' + i);
            if (SETT_TRANS_FLG.value == '1' || SETT_AC_CCY.value == 'USD') {
                PRT_SETT_IN_CHG = PRT_SETT_IN_CHG + SYS_BeFloat(custNonExchComm.value);
            }
            SETT_EQ_AMT = EEHtml.getElementById('SETT_EQ_AMT' + i);
            SETT_CUST_AC_NO = EEHtml.getElementById('SETT_CUST_AC_NO' + i);
            if (SETT_AC_CCY.value == 'USD' && SYS_BeFloat(SETT_EQ_AMT.value) > 0) {
                vRPT_SETT_CNY_AMT = vRPT_SETT_CNY_AMT + SYS_BeFloat(SETT_EQ_AMT.value) - SYS_BeFloat(custNonExchComm.value);
                document.MAINFORM.RPT_SETT_CNY_AC_NO.value = SETT_CUST_AC_NO.value;
                document.MAINFORM.RPT_SETT_EXCH_RT.value = document.MAINFORM.SETT_NET_CUST_RT1.value;
            }
            if (SETT_AC_CCY.value != 'USD' && SYS_BeFloat(SETT_EQ_AMT.value) > 0 && SETT_TRANS_FLG.value == '1') {
                document.MAINFORM.RPT_SETT_CCY_AC_NO.value = SETT_CUST_AC_NO.value;
            }
        }

        document.MAINFORM.RPT_SETT_CNY_AMT.value = vRPT_SETT_CNY_AMT;
        document.MAINFORM.RPT_SETT_IN_CHG.value = PRT_SETT_IN_CHG;
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_AC_AMT = function(fieldName) {
    try {
        var SettEqAmtObject; // Utility Auto Fix Comments
        var amtNumber; // Utility Auto Fix Comments
        var netCrCcyByRt; // Utility Auto Fix Comments
        var netretCcyByRt; // Utility Auto Fix Comments
        var settAcAmt; // Utility Auto Fix Comments
        var settAcAmtObject; // Utility Auto Fix Comments
        var settAcCcyObject; // Utility Auto Fix Comments
        var settCableAmtObject; // Utility Auto Fix Comments
        var settExchCommObject; // Utility Auto Fix Comments
        var settTransFlgObject; // Utility Auto Fix Comments
        amtNumber = fieldName.substr(14, 1);
        settAcAmt = 0.00;
        settCableAmtObject = EEHtml.getElementById('SETT_CABLE_AMT' + amtNumber);
        SettEqAmtObject = EEHtml.getElementById('SETT_EQ_AMT' + amtNumber);
        settAcAmtObject = EEHtml.getElementById('SETT_AC_AMT' + amtNumber);
        settAcCcyObject = EEHtml.getElementById('SETT_AC_CCY' + amtNumber);
        settTransFlgObject = EEHtml.getElementById('SETT_TRANS_FLG' + amtNumber);
        if (amtNumber != '7' && document.MAINFORM.NET_CR_CCY.value != '' && (settTransFlgObject.value == '5' || settTransFlgObject.value == '6')) {
            settExchCommObject = EEHtml.getElementById('SETT_EXCH_COMM' + amtNumber);
            netCrCcyByRt = SYS_GetExchangeRate_Fee(document.MAINFORM.NET_CR_CCY.value, 'USD', 'Buying Rate', '');
            if (document.MAINFORM.IN_OUT_FLAG_SETT.value == 'IN') {
                settAcAmt = SYS_BeFloat(SettEqAmtObject.value) - (SYS_BeFloat(settCableAmtObject.value) / SYS_BeFloat(netCrCcyByRt[0][1]) * 100);
            } else {
                settAcAmt = SYS_BeFloat(SettEqAmtObject.value);
            }
            settAcAmtObject.value = SYT_CCY_AMT(settAcCcyObject.value, settAcAmt);
        } else if (amtNumber != '7' && document.MAINFORM.NET_CR_CCY.value != '' && settTransFlgObject.value == '4') {
            settAcAmt = SYS_BeFloat(SettEqAmtObject.value);
            settAcAmtObject.value = SYT_CCY_AMT(settAcCcyObject.value, settAcAmt);
        } else if (document.MAINFORM.NET_RET_CCY.value != '' && amtNumber == '7') {
            netretCcyByRt = SYS_GetExchangeRate_Fee(document.MAINFORM.NET_RET_CCY.value, 'USD', 'Buying Rate', '');
            if (document.MAINFORM.IN_OUT_FLAG_SETT.value == 'IN') {
                settAcAmt = SYS_BeFloat(SettEqAmtObject.value) - (SYS_BeFloat(settCableAmtObject.value) / SYS_BeFloat(netretCcyByRt[0][1]) * 100);
            } else {
                settAcAmt = SYS_BeFloat(SettEqAmtObject.value);
            }
            settAcAmtObject.value = SYT_CCY_AMT(document.MAINFORM.NET_RET_CCY.value, settAcAmt);
        }
        TTL_SETT_CABLE_COMM();
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_BUTTON_onclick = function(buttonName) {
    try {
        var SETT_BUTTON; // Utility Auto Fix Comments
        var buttonNumber; // Utility Auto Fix Comments
        var tr_SETT_AMT_TO_ID; // Utility Auto Fix Comments
        buttonNumber = buttonName.substr(11, 1);
        SETT_BUTTON = EEHtml.getElementById('SETT_BUTTON' + buttonNumber);

        tr_SETT_AMT_TO_ID = EEHtml.getElementById('tr_SETT_AMT_TO_ID' + buttonNumber);
        if (SETT_BUTTON.value == 'Inq ID') {
            SETT_BUTTON.value = 'Hid ID';
            tr_SETT_AMT_TO_ID.style.display = '';
        } else {
            SETT_BUTTON.value = 'Inq ID';
            tr_SETT_AMT_TO_ID.style.display = 'none';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_CRNO_onchange = function(fieldname) {
    try {
        var SETT_TRANS_FLG; // Utility Auto Fix Comments
        var fieldNumber; // Utility Auto Fix Comments
        fieldNumber = fieldname.substr(9, 1);
        SETT_TRANS_FLG = EEHtml.getElementById('SETT_TRANS_FLG' + fieldNumber);
        SETT_TRANS_FLG_onchange(SETT_TRANS_FLG.name);
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_CUST_AC_NO_O_style = function() {
    try {
        var SETT_CUST_AC_NO_O; // Utility Auto Fix Comments
        var fieldNumber; // Utility Auto Fix Comments
        fieldNumber = this.name.substr(15, 1);
        SETT_CUST_AC_NO_O = EEHtml.getElementById('SETT_CUST_AC_NO' + fieldNumber + '_O');
        SETT_CUST_AC_NO_O.style.display = '';
        SETT_CUST_AC_NO_O.focus();
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_ConfirmCall = function(counterBank, counterCustomer, clerkName, aa, bb, cc) {
    try {
        var FREEZE_FLG; // Utility Auto Fix Comments
        var NET_CR_AMT; // Utility Auto Fix Comments
        var NET_CR_CCY; // Utility Auto Fix Comments
        var SETT_AC_CCY; // Utility Auto Fix Comments
        var SETT_EQ_AMT; // Utility Auto Fix Comments
        var SETT_EXCH_RPTNO; // Utility Auto Fix Comments
        var SETT_PMT_EXCH_RPTNO; // Utility Auto Fix Comments
        var SETT_TRANS_FLG; // Utility Auto Fix Comments
        var SettAcCcy; // Utility Auto Fix Comments
        var custacno; // Utility Auto Fix Comments
        var custacno_s; // Utility Auto Fix Comments
        var freezeFlag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var settbusitype; // Utility Auto Fix Comments
        switch (SYS_MODULE_NAME) {
            case 'EPLC':
                document.MAINFORM.SETT_NET_EXCH_NO.value = NONEXCHRT_EXLC;
                document.MAINFORM.SETT_OTHER_COMM_AC_NO.value = CABLEAC;
                break;
            case 'EXCO':
                document.MAINFORM.SETT_NET_EXCH_NO.value = NONEXCHRT_EXCL;
                document.MAINFORM.SETT_OTHER_COMM_AC_NO.value = CABLEAC;
                break;
            case 'FFIT':
                document.MAINFORM.SETT_NET_EXCH_NO.value = NONEXCHRT_FFIT;
                document.MAINFORM.SETT_OTHER_COMM_AC_NO.value = CABLEAC;
                break;
            case 'LGAD':
                document.MAINFORM.SETT_NET_EXCH_NO.value = NONEXCHRT_LGAD;
                document.MAINFORM.SETT_OTHER_COMM_AC_NO.value = CABLEAC;
                break;
            case 'LOFG':
                document.MAINFORM.SETT_NET_EXCH_NO.value = NONEXCHRT_LOFG;
                document.MAINFORM.SETT_OTHER_COMM_AC_NO.value = CABLEAC;
                break;
            case 'FAEF':
                document.MAINFORM.SETT_NET_EXCH_NO.value = NONEXCHRT_FAEF;
                document.MAINFORM.SETT_OTHER_COMM_AC_NO.value = CABLEAC;
                break;
            case 'DISC':
                document.MAINFORM.SETT_NET_EXCH_NO.value = NONEXCHRT_DISC;
                document.MAINFORM.SETT_OTHER_COMM_AC_NO.value = CABLEAC;
                break;
            case 'FINC':
                if (document.MAINFORM.COMMON_PRDT_CODE.value == '0001') {
                    document.MAINFORM.SETT_NET_EXCH_NO.value = '5355';
                } else if (document.MAINFORM.COMMON_PRDT_CODE.value == '0003') {
                    document.MAINFORM.SETT_NET_EXCH_NO.value = '5325';
                } else if (document.MAINFORM.COMMON_PRDT_CODE.value == '0007') {
                    document.MAINFORM.SETT_NET_EXCH_NO.value = '5345';
                } else if (document.MAINFORM.COMMON_PRDT_CODE.value == '0011') {
                    document.MAINFORM.SETT_NET_EXCH_NO.value = '5345';
                } else if (document.MAINFORM.COMMON_PRDT_CODE.value == '0013') {
                    document.MAINFORM.SETT_NET_EXCH_NO.value = '5303';
                } else if (document.MAINFORM.COMMON_PRDT_CODE.value == '0014') {
                    document.MAINFORM.SETT_NET_EXCH_NO.value = '5303';
                } else if (document.MAINFORM.COMMON_PRDT_CODE.value == '0015') {
                    document.MAINFORM.SETT_NET_EXCH_NO.value = '5305';
                } else if (document.MAINFORM.COMMON_PRDT_CODE.value == '0016') {
                    document.MAINFORM.SETT_NET_EXCH_NO.value = '5305';
                } else if (document.MAINFORM.COMMON_PRDT_CODE.value == '0019') {
                    document.MAINFORM.SETT_NET_EXCH_NO.value = '5375';
                } else {
                    document.MAINFORM.SETT_NET_EXCH_NO.value = '';
                }
                break;
            default:
                document.MAINFORM.SETT_NET_EXCH_NO.value = NONEXINCM;
                document.MAINFORM.SETT_OTHER_COMM_AC_NO.value = CABLEAC;
        }
        document.MAINFORM.SETT_930_AC_NO.value = EXCHAC;
        NET_CR_CCY = EEHtml.getElementById("NET_CR_CCY");
        NET_CR_AMT = EEHtml.getElementById("NET_CR_AMT"); // Utility Auto Fix Comments
        for (i = 1; i <= 5; i++) {
            SETT_PMT_EXCH_RPTNO = EEHtml.getElementById("SETT_PMT_EXCH_RPTNO" + i);
            SETT_EXCH_RPTNO = EEHtml.getElementById("SETT_EXCH_RPTNO" + i);
            SETT_AC_CCY = EEHtml.getElementById("SETT_AC_CCY" + i);
            SETT_EQ_AMT = EEHtml.getElementById("SETT_EQ_AMT" + i);
            if (NET_CR_CCY.value == "" || SETT_AC_CCY.value == "" || SYS_BeFloat(SETT_EQ_AMT.value) == 0) {
                continue;
            }
            if (SETT_AC_CCY.value == 'USD' && NET_CR_CCY.value != 'USD') {
                SETT_PMT_EXCH_RPTNO.value = '';
                SETT_EXCH_RPTNO.value = EEHtml.getElementById('SETT_EXCH_RPTNO').value;
            } else if (SETT_AC_CCY.value != 'USD' && NET_CR_CCY.value != 'USD') {
                SETT_PMT_EXCH_RPTNO.value = '';
                SETT_EXCH_RPTNO.value = EEHtml.getElementById('SETT_TH_RPTN').value;
            } else if (SETT_AC_CCY.value != 'USD' && NET_CR_CCY.value == 'USD') {
                SETT_EXCH_RPTNO.value = '';
                SETT_PMT_EXCH_RPTNO.value = EEHtml.getElementById('SETT_PMT_EXCH_RPTNO').value;
            } else {
                SETT_EXCH_RPTNO.value = '';
                SETT_PMT_EXCH_RPTNO.value = '';
            }
        }
        if (SYS_BeFloat(EEHtml.getElementById('SETT_AC_AMT6').value) > 0) {
            if (NET_CR_CCY != 'USD' && EEHtml.getElementById('SETT_AC_CCY6').value == 'USD') {
                EEHtml.getElementById('SETT_EXCH_RPTNO6').value = '';
                EEHtml.getElementById('SETT_PMT_EXCH_RPTNO6').value = EEHtml.getElementById('SETT_PMT_EXCH_RPTNO').value;
            } else if (NET_CR_CCY == 'USD' && EEHtml.getElementById('SETT_AC_CCY6').value != 'USD') {
                EEHtml.getElementById('SETT_PMT_EXCH_RPTNO6').value = '';
                EEHtml.getElementById('SETT_EXCH_RPTNO6').value = EEHtml.getElementById('SETT_EXCH_RPTNO').value;
            } else if (NET_CR_CCY != 'USD' && EEHtml.getElementById('SETT_AC_CCY6').value != 'USD') {
                EEHtml.getElementById('SETT_EXCH_RPTNO6').value = '';
                EEHtml.getElementById('SETT_PMT_EXCH_RPTNO6').value = EEHtml.getElementById('SETT_TH_RPTN').value;
            } else {
                EEHtml.getElementById('SETT_EXCH_RPTNO6').value = '';
                EEHtml.getElementById('SETT_PMT_EXCH_RPTNO6').value = '';
            }
        }
        for (j = 1; j <= 5; j++) {
            if (EEHtml.getElementById('SETT_TRANS_FLG' + j).value !== 5 && EEHtml.getElementById('SETT_TRANS_FLG' + j).value !== 6) {
                //SYS_Get22TableDataByRule_S('SSSS_SRC_Settlement_SETT_ConfirmCall_5', '1'+ j);

                EEHtml.getElementById('SETT_BR_ID' + j).value = EEHtml.getElementById('GTS_BR_ID').value;
            }
        }
        if (EEHtml.getElementById('SETT_CUST_AC_NO7').value !== GL9992) {
            //SYS_Get22TableDataByRule_S('SSSS_SRC_Settlement_SETT_ConfirmCall_6', '1');
            EEHtml.getElementById('SETT_BR_ID7').value = EEHtml.getElementById('GTS_BR_ID').value;
        }
        aa = counterBank;
        bb = counterCustomer;
        cc = clerkName;

        if (SYS_MODULE_NAME.indexOf("FINC") == -1) {
            SettInitCnty1();
        }
        SettInitCnty2();
        SettInitCnty3();

        GetVoucherDesc_Sett(counterBank, counterCustomer, clerkName);

        freezeFlag = '';
        FREEZE_FLG = EEHtml.getElementById('FREEZE_FLG');
        if (FREEZE_FLG != null) {
            if (FREEZE_FLG.value == '2') {
                freezeFlag = '2';
            }
        }

        for (i = 1; i <= 5; i++) {
            SettAcCcy = EEHtml.getElementById('SETT_AC_CCY' + i);
            custacno = EEHtml.getElementById('SETT_CUST_AC_NO' + i);
            settbusitype = EEHtml.getElementById('SETT_BUSI_TYPE' + i);
            custacno_s = EEHtml.getElementById('SETT_CUST_AC_NO' + i + '_S');
            SETT_TRANS_FLG = EEHtml.getElementById('SETT_TRANS_FLG' + i);
            if (SETT_TRANS_FLG.value == "2") {
                settbusitype.value = INTERFACE_BANCS_BGLCR_TRX_CODE;
            } else if (custacno_s.value != '' && custacno_s.value != BUSI_TYPE_GL && SettAcCcy.value == 'USD') {
                settbusitype.value = INTERFACE_BANCS_CR_TRX_CODE;
            } else if (custacno_s.value != '' && custacno_s.value != BUSI_TYPE_GL && SettAcCcy.value != 'USD' && SettAcCcy.value != '') {
                if (SYS_MODULE_NAME.indexOf("FINC") == -1) {
                    settbusitype.value = INTERFACE_BANCS_CR_TRX_CODE + '|' + INTERFACE_BANCS_AC_TRX_CODE;
                } else {
                    settbusitype.value = INTERFACE_BANCS_CR_TRX_CODE;
                }
            } else if (custacno_s.value == BUSI_TYPE_GL) {
                settbusitype.value = INTERFACE_GL_TRX_CODE;
            } else {
                settbusitype.value = '';
            }
            if (freezeFlag == '2' && custacno_s.value != '' && custacno_s.value != BUSI_TYPE_GL) {
                settbusitype.value = settbusitype.value + '|' + INTERFACE_BANCS_FREEZE;
            }
        }
        if (document.MAINFORM.SETT_CUST_AC_NO8_S.value != '' && document.MAINFORM.SETT_CUST_AC_NO8_S.value != BUSI_TYPE_GL && document.MAINFORM.SETT_AC_CCY8.value == 'USD') {
            document.MAINFORM.SETT_BUSI_TYPE8.value = INTERFACE_BANCS_DR_TRX_CODE;
        } else if (document.MAINFORM.SETT_CUST_AC_NO8_S.value != '' && document.MAINFORM.SETT_CUST_AC_NO8_S.value != BUSI_TYPE_GL && document.MAINFORM.SETT_AC_CCY8.value.value != 'USD' && document.MAINFORM.SETT_AC_CCY8.value.value != '') {
            document.MAINFORM.SETT_BUSI_TYPE8.value = INTERFACE_BANCS_DR_TRX_CODE + '|' + INTERFACE_BANCS_AC_TRX_CODE;
        } else if (document.MAINFORM.SETT_CUST_AC_NO8_S.value == BUSI_TYPE_GL) {
            document.MAINFORM.SETT_BUSI_TYPE8.value = INTERFACE_GL_TRX_CODE;
        } else {
            document.MAINFORM.SETT_BUSI_TYPE8.value.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_EQ_AMT1_onchange = function() {
    try {
        var SETT_EXCH_COMM_HEAD; // Utility Auto Fix Comments
        var SETT_EXCH_FAV_RMB; // Utility Auto Fix Comments
        var SETT_TRANS_FLG; // Utility Auto Fix Comments
        var amtNumber; // Utility Auto Fix Comments
        var custAcnoS; // Utility Auto Fix Comments
        var custAmt; // Utility Auto Fix Comments
        var custCcy; // Utility Auto Fix Comments
        var custCloseRate; // Utility Auto Fix Comments
        var custCustRate; // Utility Auto Fix Comments
        var custEqAmt; // Utility Auto Fix Comments
        var custExchRate; // Utility Auto Fix Comments
        var custNonExchComm; // Utility Auto Fix Comments
        var nonExchCommMaxAmt; // Utility Auto Fix Comments
        var nonExchCommMinAmt; // Utility Auto Fix Comments
        var nonExchCommOriginValue; // Utility Auto Fix Comments
        var nonExchFeeStandard; // Utility Auto Fix Comments
        var nonExchRT; // Utility Auto Fix Comments
        var settCnyAmt; // Utility Auto Fix Comments
        var settCnyAmt1; // Utility Auto Fix Comments
        var settCnyAmt2; // Utility Auto Fix Comments
        var settCrAmt; // Utility Auto Fix Comments
        var settDrAmt; // Utility Auto Fix Comments
        var settbusitype; // Utility Auto Fix Comments
        document.MAINFORM.SETT_EQ_AMT1.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, document.MAINFORM.SETT_EQ_AMT1.value);

        amtNumber = '1';
        custCcy = EEHtml.getElementById('SETT_AC_CCY' + amtNumber);
        custAcnoS = EEHtml.getElementById('SETT_CUST_AC_NO' + amtNumber + '_S');
        custAmt = EEHtml.getElementById('SETT_AC_AMT' + amtNumber);
        custEqAmt = EEHtml.getElementById('SETT_EQ_AMT' + amtNumber);
        settDrAmt = EEHtml.getElementById('SETT_DR_AMT' + amtNumber);
        settCnyAmt = EEHtml.getElementById('SETT_CNY_AMT' + amtNumber);
        settCnyAmt1 = EEHtml.getElementById('SETT_CNY_AMT1' + amtNumber);
        settCnyAmt2 = EEHtml.getElementById('SETT_CNY_AMT2' + amtNumber);
        settCrAmt = EEHtml.getElementById('SETT_CR_AMT' + amtNumber);
        custExchRate = EEHtml.getElementById('SETT_EXCH_RT' + amtNumber);
        custCloseRate = EEHtml.getElementById('SETT_CLOSE_RT' + amtNumber);
        custCustRate = EEHtml.getElementById('SETT_CUST_RT' + amtNumber);
        custNonExchComm = EEHtml.getElementById('SETT_EXCH_COMM' + amtNumber);
        settbusitype = EEHtml.getElementById('SETT_BUSI_TYPE' + amtNumber);
        SETT_TRANS_FLG = EEHtml.getElementById('SETT_TRANS_FLG' + amtNumber);
        SETT_EXCH_FAV_RMB = EEHtml.getElementById('SETT_EXCH_FAV_RMB' + amtNumber);
        SETT_EXCH_COMM_HEAD = EEHtml.getElementById('SETT_EXCH_COMM_HEAD' + amtNumber);
        if (custCcy.value != '' && document.MAINFORM.NET_CR_CCY.value != '' && custCcy.value != document.MAINFORM.NET_CR_CCY.value) {
            custAmt.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.SETT_NET_CUST_RT1.value) / SYS_BeFloat(custCustRate.value);
            custAmt.value = SYT_CCY_AMT(custCcy.value, custAmt.value);
            custNonExchComm.value = 0;

            settDrAmt.value = custEqAmt.value;
            settCnyAmt1.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.SETT_NET_CLOSE_RT1.value) / 100;
            settCnyAmt1.value = SYT_CCY_AMT(custCcy.value, settCnyAmt1.value);

            if (custCcy.value != 'USD' && document.MAINFORM.NET_CR_CCY.value != 'USD') {

                settCrAmt.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.SETT_NET_CUST_RT1.value) / SYS_BeFloat(custCustRate.value);
                settCnyAmt2.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.SETT_NET_CUST_RT1.value) / SYS_BeFloat(custCustRate.value) * SYS_BeFloat(custCloseRate.value) / 100;
                settCnyAmt2.value = SYT_CCY_AMT(custCcy.value, settCnyAmt2.value);

                settCnyAmt.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.SETT_NET_CUST_RT1.value) / 100;
                settCnyAmt.value = SYT_CCY_AMT('USD', settCnyAmt.value);
            } else {
                settCnyAmt2.value = 0;
                settCrAmt.value = 0;
                settCnyAmt.value = 0;
            }

        } else if (custCcy.value != '' && document.MAINFORM.NET_CR_CCY.value != '' && custCcy.value == document.MAINFORM.NET_CR_CCY.value) {

            nonExchRT = EEHtml.getElementById('NONEXCH_FAV_RT1');
            nonExchCommMaxAmt = 0;
            nonExchCommMinAmt = 0;
            nonExchFeeStandard = new Array();
            if (document.MAINFORM.NONEXCHRT_onchange_flag.value == '0') {
                if (SETT_TRANS_FLG.value == '1') {
                    nonExchFeeStandard = GetNonExchFee_SETT('NONEXCH_CUST', amtNumber);
                } else if (SETT_TRANS_FLG.value == '2') {
                    nonExchFeeStandard = GetNonExchFee_SETT('NONEXCH_BK', amtNumber);
                } else if (SETT_TRANS_FLG.value == '4') {
                    nonExchFeeStandard = GetNonExchFee_SETT('NONEXCH_LH', amtNumber);
                }
                if (nonExchFeeStandard.length > 0) {
                    nonExchCommMaxAmt = nonExchFeeStandard[2];
                    nonExchCommMinAmt = nonExchFeeStandard[1];
                    nonExchRT.value = nonExchFeeStandard[0];
                }
            } else if (document.MAINFORM.NONEXCHRT_onchange_flag.value == '1') {
                if (SETT_TRANS_FLG.value == '1') {
                    nonExchFeeStandard = GetNonExchFee_SETT('NONEXCH_CUST', amtNumber);
                } else if (SETT_TRANS_FLG.value == '2') {
                    nonExchFeeStandard = GetNonExchFee_SETT('NONEXCH_BK', amtNumber);
                } else if (SETT_TRANS_FLG.value == '4') {
                    nonExchFeeStandard = GetNonExchFee_SETT('NONEXCH_LH', amtNumber);
                }
                if (nonExchFeeStandard.length > 0) {
                    nonExchCommMaxAmt = nonExchFeeStandard[2];
                    nonExchCommMinAmt = nonExchFeeStandard[1];
                }
            }
            nonExchCommOriginValue = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(nonExchRT.value) / 1000 * SYS_BeFloat(document.MAINFORM.SETT_NET_EXCH_RT1.value) / 100;
            if (custCcy.value == 'USD' || custCcy.value != document.MAINFORM.NET_CR_CCY.value || (custAcnoS.value == BUSI_TYPE_GL && SETT_TRANS_FLG.value == '1') || SYS_BeFloat(custEqAmt.value) == 0 || SYS_BeFloat(nonExchRT.value) < 0) {

                custNonExchComm.value = 0;
                SETT_EXCH_FAV_RMB.value = 0;
            } else if (nonExchCommOriginValue < nonExchCommMaxAmt && nonExchCommOriginValue > nonExchCommMinAmt) {
                custNonExchComm.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(nonExchRT.value) / 1000;
                custNonExchComm.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, custNonExchComm.value);
            } else if (nonExchCommOriginValue >= nonExchCommMaxAmt) {
                custNonExchComm.value = nonExchCommMaxAmt / SYS_BeFloat(document.MAINFORM.SETT_NET_EXCH_RT1.value) * 100;
                custNonExchComm.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, custNonExchComm.value);
            } else {
                custNonExchComm.value = nonExchCommMinAmt / SYS_BeFloat(document.MAINFORM.SETT_NET_EXCH_RT1.value) * 100;
                custNonExchComm.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, custNonExchComm.value);
            }
            if (document.MAINFORM.SETT_NONEXCH_FLG.value == 'YES') {
                custNonExchComm.value = 0.00;
            }
            if (document.MAINFORM.SETT_NONEXCH_FLG.value == 'YES' || document.MAINFORM.SETT_NONEXCH_FLG.value == '0') {
                SETT_EXCH_FAV_RMB.value = 0.00;
            } else {
                if ((custAcnoS.value != BUSI_TYPE_GL && SETT_TRANS_FLG.value == '1') || (custAcnoS.value != BUSI_TYPE_GL && SETT_TRANS_FLG.value == '2')) {

                    SETT_EXCH_FAV_RMB.value = (SETT_EXCH_COMM_HEAD.value - custNonExchComm.value) * document.MAINFORM.SETT_NET_EXCH_RT1.value / 100;
                    SETT_EXCH_FAV_RMB.value = SYT_CCY_AMT('USD', SETT_EXCH_FAV_RMB.value);
                }
            }
            if (custCcy.value == 'USD' || custCcy.value != document.MAINFORM.NET_CR_CCY.value || (custAcnoS.value == BUSI_TYPE_GL && SETT_TRANS_FLG.value == '1') || SYS_BeFloat(custEqAmt.value) == 0 || SYS_BeFloat(nonExchRT.value) < 0) {

                custNonExchComm.value = 0;
                SETT_EXCH_FAV_RMB.value = 0;
            }
            if (SETT_TRANS_FLG.value == '1' || SETT_TRANS_FLG.value == '2') {
                custAmt.value = SYS_BeFloat(custEqAmt.value) - SYS_BeFloat(custNonExchComm.value);
                custAmt.value = SYT_CCY_AMT(custCcy.value, custAmt.value);
            }
            settCrAmt.value = 0;
            settCnyAmt.value = 0;
            settDrAmt.value = 0;
            settCnyAmt1.value = 0;
            settCnyAmt2.value = 0;
        } else {

            custAmt.value = 0;
            custNonExchComm.value = 0;
            SETT_EXCH_FAV_RMB.value = 0;
            settCrAmt.value = 0;
            settCnyAmt.value = 0;
            settDrAmt.value = 0;
            settCnyAmt1.value = 0;
            settCnyAmt2.value = 0;

        }
        SettleExchIncm(amtNumber);
        SETT_AC_AMT('SETT_TRANS_FLG' + amtNumber);
        SettleNonExchComm();
        RPT_SETT_CNY_AMT();
        SETT_PAGE_onchange();
        if (custCcy.value == 'USD') {
            custNonExchComm.value = 0;
            SETT_EXCH_FAV_RMB.value = 0;
        }
        if (SETT_TRANS_FLG.value == '4') {
            custNonExchComm.value = 0;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_EQ_AMT6_onchange = function() {
    try {
        var amtNumber; // Utility Auto Fix Comments
        var custAmt; // Utility Auto Fix Comments
        var custCcy; // Utility Auto Fix Comments
        var custCloseRate; // Utility Auto Fix Comments
        var custCustRate; // Utility Auto Fix Comments
        var custEqAmt; // Utility Auto Fix Comments
        var custExchRate; // Utility Auto Fix Comments
        var custNonExchComm; // Utility Auto Fix Comments
        var settCnyAmt; // Utility Auto Fix Comments
        var settCnyAmt1; // Utility Auto Fix Comments
        var settCnyAmt2; // Utility Auto Fix Comments
        var settCrAmt; // Utility Auto Fix Comments
        var settDrAmt; // Utility Auto Fix Comments
        var settbusitype; // Utility Auto Fix Comments
        amtNumber = '6';
        custCcy = EEHtml.getElementById('SETT_AC_CCY' + amtNumber);
        custAmt = EEHtml.getElementById('SETT_AC_AMT' + amtNumber);
        custEqAmt = EEHtml.getElementById('SETT_EQ_AMT' + amtNumber);
        settDrAmt = EEHtml.getElementById('SETT_DR_AMT' + amtNumber);
        settCnyAmt1 = EEHtml.getElementById('SETT_CNY_AMT1' + amtNumber);
        settCnyAmt2 = EEHtml.getElementById('SETT_CNY_AMT2' + amtNumber);
        settCnyAmt = EEHtml.getElementById('SETT_CNY_AMT' + amtNumber);
        settCrAmt = EEHtml.getElementById('SETT_CR_AMT' + amtNumber);
        custExchRate = EEHtml.getElementById('SETT_EXCH_RT' + amtNumber);
        custCloseRate = EEHtml.getElementById('SETT_CLOSE_RT' + amtNumber);
        custCustRate = EEHtml.getElementById('SETT_CUST_RT' + amtNumber);
        custNonExchComm = EEHtml.getElementById('SETT_EXCH_COMM' + amtNumber);
        settbusitype = EEHtml.getElementById('SETT_BUSI_TYPE' + amtNumber);

        if (custCcy.value != '' && document.MAINFORM.NET_CR_CCY.value != '' && custCcy.value != document.MAINFORM.NET_CR_CCY.value) {
            custAmt.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.SETT_NET_CUST_RT2.value) / SYS_BeFloat(custCustRate.value);
            custAmt.value = SYT_CCY_AMT(custCcy.value, custAmt.value);
            custNonExchComm.value = 0;

            settCnyAmt2.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.SETT_NET_CLOSE_RT2.value) / 100;
            settCnyAmt2.value = SYT_CCY_AMT(custCcy.value, settCnyAmt2.value);

            settCrAmt.value = custEqAmt.value;

            if (custCcy.value != 'USD' && document.MAINFORM.NET_CR_CCY.value != 'USD') {
                settDrAmt.value = custAmt.value;
                settCnyAmt1.value = SYS_BeFloat(custAmt.value) * SYS_BeFloat(custCloseRate.value) / 100;
                settCnyAmt1.value = SYT_CCY_AMT(custCcy.value, settCnyAmt1.value);


                settCnyAmt.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.SETT_NET_CUST_RT1.value) / 100;
                settCnyAmt.value = SYT_CCY_AMT('USD', settCnyAmt.value);
            } else {
                settDrAmt.value = 0;
                settCnyAmt1.value = 0;
                settCnyAmt.value = 0;
            }

        } else if (custCcy.value != '' && document.MAINFORM.NET_CR_CCY.value != '' && custCcy.value == document.MAINFORM.NET_CR_CCY.value) {
            custAmt.value = SYS_BeFloat(custEqAmt.value) - SYS_BeFloat(custNonExchComm.value);
            custAmt.value = SYT_CCY_AMT(custCcy.value, custAmt.value);
            settCrAmt.value = 0;
            settCnyAmt.value = 0;
            settDrAmt.value = 0;
            settCnyAmt1.value = 0;
            settCnyAmt2.value = 0;

        } else {
            custAmt.value = 0;
            custNonExchComm.value = 0;
            settCrAmt.value = 0;
            settCnyAmt.value = 0;
            settDrAmt.value = 0;
            settCnyAmt1.value = 0;
            settCnyAmt2.value = 0;
        }

        if (document.MAINFORM.SETT_CUST_AC_NO6_S.value != '' && document.MAINFORM.SETT_CUST_AC_NO6_S.value != BUSI_TYPE_GL && custCcy.value == 'USD') {
            settbusitype.value = INTERFACE_BANCS_DR_TRX_CODE;
        } else if (document.MAINFORM.SETT_CUST_AC_NO6_S.value != '' && document.MAINFORM.SETT_CUST_AC_NO6_S.value != BUSI_TYPE_GL && custCcy.value != 'USD' && custCcy.value != '') {
            settbusitype.value = INTERFACE_BANCS_DR_TRX_CODE + '|' + INTERFACE_BANCS_AC_TRX_CODE;
        } else if (document.MAINFORM.SETT_CUST_AC_NO6_S.value == BUSI_TYPE_GL) {
            settbusitype.value = INTERFACE_GL_TRX_CODE;
        } else {
            settbusitype.value = '';
        }

        SettleExchIncm(amtNumber);
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_EQ_AMT_onchange = function(fieldName) {
    try {
        var SETT_EQ_AMT; // Utility Auto Fix Comments
        var SETT_EXCH_COMM_HEAD; // Utility Auto Fix Comments
        var SETT_EXCH_FAV_RMB; // Utility Auto Fix Comments
        var SETT_TRANS_FLG; // Utility Auto Fix Comments
        var amtNumber; // Utility Auto Fix Comments
        var custAcnoS; // Utility Auto Fix Comments
        var custAmt; // Utility Auto Fix Comments
        var custCcy; // Utility Auto Fix Comments
        var custCloseRate; // Utility Auto Fix Comments
        var custCustRate; // Utility Auto Fix Comments
        var custEqAmt; // Utility Auto Fix Comments
        var custExchRate; // Utility Auto Fix Comments
        var custNonExchComm; // Utility Auto Fix Comments
        var custacno; // Utility Auto Fix Comments
        var eqAmt1; // Utility Auto Fix Comments
        var fieldNameObject; // Utility Auto Fix Comments
        var nonExchCommMaxAmt; // Utility Auto Fix Comments
        var nonExchCommMinAmt; // Utility Auto Fix Comments
        var nonExchCommOriginValue; // Utility Auto Fix Comments
        var nonExchFeeStandard; // Utility Auto Fix Comments
        var nonExchRT; // Utility Auto Fix Comments
        var settAmtToIdObject; // Utility Auto Fix Comments
        var settCnyAmt; // Utility Auto Fix Comments
        var settCnyAmt1; // Utility Auto Fix Comments
        var settCnyAmt2; // Utility Auto Fix Comments
        var settCrAmt; // Utility Auto Fix Comments
        var settDrAmt; // Utility Auto Fix Comments
        var settbusitype; // Utility Auto Fix Comments
        amtNumber = SYS_BeFloat(fieldName.substr(11, 1));
        fieldNameObject = EEHtml.getElementById('SETT_EQ_AMT' + amtNumber);
        fieldNameObject.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, fieldNameObject.value);

        if (amtNumber == 6) {
            SETT_EQ_AMT6_onchange();
        } else {
            if (SYS_BeFloat(document.MAINFORM.NET_CR_AMT.value) <= 0) {
                fieldNameObject.value = 0;
                document.MAINFORM.SETT_EQ_AMT1.value = 0;
            } else {
                eqAmt1 = SYS_BeFloat(document.MAINFORM.NET_CR_AMT.value);
                for (i = 2; i <= 5; i++) {
                    SETT_EQ_AMT = EEHtml.getElementById('SETT_EQ_AMT' + i);
                    SETT_EQ_AMT.className = 'AMT_O';
                    SETT_EQ_AMT.readOnly = false;
                    eqAmt1 -= SYS_BeFloat(SETT_EQ_AMT.value);
                }
                if (eqAmt1 < 0) {
                    if (SYS_BeFloat(document.MAINFORM.NET_CR_AMT.value)) {
                        alert('The EQ amount1 is less than 0,please reduce other cr amount of other acno!');
                    }
                    fieldNameObject.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, 0);

                }
                eqAmt1 = SYS_BeFloat(document.MAINFORM.NET_CR_AMT.value);
                for (i = 2; i <= 5; i++) {
                    SETT_EQ_AMT = EEHtml.getElementById('SETT_EQ_AMT' + i);
                    SETT_EQ_AMT.className = 'AMT_O';
                    SETT_EQ_AMT.readOnly = false;
                    eqAmt1 -= SYS_BeFloat(SETT_EQ_AMT.value);
                }
                document.MAINFORM.SETT_EQ_AMT1.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, eqAmt1);
            }

            SETT_EQ_AMT1_onchange();

            custCcy = EEHtml.getElementById('SETT_AC_CCY' + amtNumber);
            custAcnoS = EEHtml.getElementById('SETT_CUST_AC_NO' + amtNumber + '_S');
            custAmt = EEHtml.getElementById('SETT_AC_AMT' + amtNumber);
            custEqAmt = EEHtml.getElementById('SETT_EQ_AMT' + amtNumber);
            settDrAmt = EEHtml.getElementById('SETT_DR_AMT' + amtNumber);
            settCnyAmt = EEHtml.getElementById('SETT_CNY_AMT' + amtNumber);
            settCnyAmt1 = EEHtml.getElementById('SETT_CNY_AMT1' + amtNumber);
            settCnyAmt2 = EEHtml.getElementById('SETT_CNY_AMT2' + amtNumber);
            settCrAmt = EEHtml.getElementById('SETT_CR_AMT' + amtNumber);
            custExchRate = EEHtml.getElementById('SETT_EXCH_RT' + amtNumber);
            custCloseRate = EEHtml.getElementById('SETT_CLOSE_RT' + amtNumber);
            custCustRate = EEHtml.getElementById('SETT_CUST_RT' + amtNumber);
            custNonExchComm = EEHtml.getElementById('SETT_EXCH_COMM' + amtNumber);
            custacno = EEHtml.getElementById('SETT_CUST_AC_NO' + amtNumber);
            settbusitype = EEHtml.getElementById('SETT_BUSI_TYPE' + amtNumber);
            SETT_TRANS_FLG = EEHtml.getElementById('SETT_TRANS_FLG' + amtNumber);
            settAmtToIdObject = EEHtml.getElementById('SETT_AMT_TO_ID' + amtNumber);
            SETT_EXCH_FAV_RMB = EEHtml.getElementById('SETT_EXCH_FAV_RMB' + amtNumber);
            SETT_EXCH_COMM_HEAD = EEHtml.getElementById('SETT_EXCH_COMM_HEAD' + amtNumber);
            if (SYS_BeFloat(custEqAmt.value) > 0 && SETT_TRANS_FLG.value == 2) {
                SYT_ChangeFldClass(custacno, "M");
            } else {
                SYT_ChangeFldClass(custacno, "P");
            }
            if (custCcy.value != '' && document.MAINFORM.NET_CR_CCY.value != '' && custCcy.value != document.MAINFORM.NET_CR_CCY.value) {
                custAmt.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.SETT_NET_CUST_RT1.value) / SYS_BeFloat(custCustRate.value);
                custAmt.value = SYT_CCY_AMT(custCcy.value, custAmt.value);
                settDrAmt.value = custEqAmt.value;
                settCnyAmt1.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.SETT_NET_CLOSE_RT1.value) / 100;
                settCnyAmt1.value = SYT_CCY_AMT(custCcy.value, settCnyAmt1.value);

                custNonExchComm.value = 0;
                if (custCcy.value != 'USD' && document.MAINFORM.NET_CR_CCY.value != 'USD') {
                    settCrAmt.value = custAmt.value;
                    settCnyAmt2.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.SETT_NET_CUST_RT1.value) / SYS_BeFloat(custCustRate.value) * SYS_BeFloat(custCloseRate.value) / 100;
                    settCnyAmt2.value = SYT_CCY_AMT(custCcy.value, settCnyAmt2.value);


                    settCnyAmt.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(document.MAINFORM.SETT_NET_CUST_RT1.value) / 100;
                    settCnyAmt.value = SYT_CCY_AMT('USD', settCnyAmt.value);
                } else {
                    settCnyAmt.value = 0;
                    settCnyAmt2.value = 0;
                    settCrAmt.value = 0;
                }

            } else if (custCcy.value != '' && document.MAINFORM.NET_CR_CCY.value != '' && custCcy.value == document.MAINFORM.NET_CR_CCY.value) {
                nonExchRT = EEHtml.getElementById('NONEXCH_FAV_RT' + amtNumber);
                nonExchCommMaxAmt = 0;
                nonExchCommMinAmt = 0;

                nonExchFeeStandard = new Array();
                if (document.MAINFORM.NONEXCHRT_onchange_flag.value == '0') {

                    if (SETT_TRANS_FLG.value == '1') {
                        nonExchFeeStandard = GetNonExchFee_SETT('NONEXCH_CUST', amtNumber);
                    } else if (SETT_TRANS_FLG.value == '2') {
                        nonExchFeeStandard = GetNonExchFee_SETT('NONEXCH_BK', amtNumber);
                    } else if (SETT_TRANS_FLG.value == '4') {
                        nonExchFeeStandard = GetNonExchFee_SETT('NONEXCH_LH', amtNumber);
                    } else if ((SETT_TRANS_FLG.value == '5' || SETT_TRANS_FLG.value == '6')) {
                        GetCablePostFee_SETT('SETT_TRANS_FLG' + amtNumber, settAmtToIdObject.value, 'N');
                        GetCablePostFee_SETT('SETT_TRANS_FLG' + amtNumber, settAmtToIdObject.value, 'Y');
                    }
                    if (nonExchFeeStandard.length > 0) {
                        nonExchCommMaxAmt = nonExchFeeStandard[2];
                        nonExchCommMinAmt = nonExchFeeStandard[1];
                        nonExchRT.value = nonExchFeeStandard[0];
                    }

                } else if (document.MAINFORM.NONEXCHRT_onchange_flag.value == '1') {
                    if (SETT_TRANS_FLG.value == '1') {
                        nonExchFeeStandard = GetNonExchFee_SETT('NONEXCH_CUST', amtNumber);
                    } else if (SETT_TRANS_FLG.value == '2') {
                        nonExchFeeStandard = GetNonExchFee_SETT('NONEXCH_BK', amtNumber);
                        if (SETT_TRANS_FLG.value == '4') {
                            nonExchFeeStandard = GetNonExchFee_SETT('NONEXCH_LH', amtNumber);
                        }
                        if (SETT_TRANS_FLG.value == '5' || SETT_TRANS_FLG.value == '6') {
                            GetCablePostFee_SETT('SETT_TRANS_FLG' + amtNumber, settAmtToIdObject.value, 'N');
                            GetCablePostFee_SETT('SETT_TRANS_FLG' + amtNumber, settAmtToIdObject.value, 'Y');
                        }
                        if (nonExchFeeStandard.length > 0) {
                            nonExchCommMaxAmt = nonExchFeeStandard[2];
                            nonExchCommMinAmt = nonExchFeeStandard[1];
                        }
                    }
                    nonExchCommOriginValue = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(nonExchRT.value) / 1000 * SYS_BeFloat(document.MAINFORM.SETT_NET_EXCH_RT1.value) / 100;
                    if (custCcy.value == 'USD' || custCcy.value != document.MAINFORM.NET_CR_CCY.value || (custAcnoS.value == BUSI_TYPE_GL && SETT_TRANS_FLG.value == '1') || SYS_BeFloat(custEqAmt.value) == 0) {
                        custNonExchComm.value = 0;
                        SETT_EXCH_FAV_RMB.value = 0;
                    } else if (nonExchCommOriginValue < nonExchCommMaxAmt && nonExchCommOriginValue > nonExchCommMinAmt) {
                        custNonExchComm.value = SYS_BeFloat(custEqAmt.value) * SYS_BeFloat(nonExchRT.value) / 1000;
                        custNonExchComm.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, custNonExchComm.value);
                    } else if (nonExchCommOriginValue >= nonExchCommMaxAmt) {
                        custNonExchComm.value = nonExchCommMaxAmt / SYS_BeFloat(document.MAINFORM.SETT_NET_EXCH_RT1.value) * 100;
                        custNonExchComm.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, custNonExchComm.value);
                    } else {
                        custNonExchComm.value = nonExchCommMinAmt / SYS_BeFloat(document.MAINFORM.SETT_NET_EXCH_RT1.value) * 100;
                        custNonExchComm.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, custNonExchComm.value);
                    }
                    SETT_EXCH_FAV_RMB.value = (SETT_EXCH_COMM_HEAD.value - custNonExchComm.value) * document.MAINFORM.SETT_NET_EXCH_RT1.value / 100;
                    SETT_EXCH_FAV_RMB.value = SYT_CCY_AMT('USD', SETT_EXCH_FAV_RMB.value);
                    if (SETT_TRANS_FLG.value == '1' || SETT_TRANS_FLG.value == '2') {
                        custAmt.value = SYS_BeFloat(custEqAmt.value) - SYS_BeFloat(custNonExchComm.value);
                        custAmt.value = SYT_CCY_AMT(custCcy.value, custAmt.value);
                        SETT_EXCH_FAV_RMB.value = (SETT_EXCH_COMM_HEAD.value - custNonExchComm.value) * document.MAINFORM.SETT_NET_EXCH_RT1.value / 100;
                        SETT_EXCH_FAV_RMB.value = SYT_CCY_AMT('USD', SETT_EXCH_FAV_RMB.value);
                    }
                    settCrAmt.value = 0;
                    settCnyAmt.value = 0;
                    settDrAmt.value = 0;
                    settCnyAmt1.value = 0;
                    settCnyAmt2.value = 0;
                } else {
                    custAmt.value = 0;
                    custNonExchComm.value = 0;
                    SETT_EXCH_FAV_RMB.value = 0;
                    settCrAmt.value = 0;
                    settCnyAmt.value = 0;
                    settDrAmt.value = 0;
                    settCnyAmt1.value = 0;
                    settCnyAmt2.value = 0;
                }
            }
            SettleExchIncm(amtNumber);
            SETT_AC_AMT('SETT_TRANS_FLG' + amtNumber);
            SettleNonExchComm();
            RPT_SETT_CNY_AMT();
            SETT_PAGE_onchange();
            if (SETT_TRANS_FLG.value == '4') {
                custNonExchComm.value = 0;
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_EXCH_FAV_RT_onchange = function() {
    try {
        var acnoFieldNameObject; // Utility Auto Fix Comments
        var ccyFieldNameObject; // Utility Auto Fix Comments
        var closeRateObject; // Utility Auto Fix Comments
        var custEqAmtObject; // Utility Auto Fix Comments
        var custRateObject; // Utility Auto Fix Comments
        var exchRateObject; // Utility Auto Fix Comments
        if (document.MAINFORM.NET_CR_CCY.value != '') {
            GetExchCustRate('1', document.MAINFORM.SETT_NET_EXCH_RT1.value, document.MAINFORM.SETT_NET_CLOSE_RT1.value, document.MAINFORM.SETT_NET_CUST_RT1);
            GetExchCustRate('2', document.MAINFORM.SETT_NET_EXCH_RT2.value, document.MAINFORM.SETT_NET_CLOSE_RT2.value, document.MAINFORM.SETT_NET_CUST_RT2);

        }

        for (SETT_times = 1; SETT_times <= 6; SETT_times++) {

            acnoFieldNameObject = EEHtml.getElementById('SETT_CUST_AC_NO' + SETT_times);
            ccyFieldNameObject = EEHtml.getElementById('SETT_AC_CCY' + SETT_times);

            exchRateObject = EEHtml.getElementById('SETT_EXCH_RT' + SETT_times);
            closeRateObject = EEHtml.getElementById('SETT_CLOSE_RT' + SETT_times);
            custRateObject = EEHtml.getElementById('SETT_CUST_RT' + SETT_times);
            custEqAmtObject = EEHtml.getElementById('SETT_EQ_AMT' + SETT_times);
            if (SETT_times == 1 && ccyFieldNameObject.value != '') {
                GetExchCustRate('2', exchRateObject.value, closeRateObject.value, custRateObject);
                SETT_EQ_AMT1_onchange();
            } else if (SETT_times == 6 && ccyFieldNameObject.value != '') {
                GetExchCustRate('1', exchRateObject.value, closeRateObject.value, custRateObject);
                SETT_EQ_AMT6_onchange();
            } else if (ccyFieldNameObject.value != '') {
                GetExchCustRate('2', exchRateObject.value, closeRateObject.value, custRateObject);
                SETT_EQ_AMT_onchange(custEqAmtObject.name);
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_EXCH_FIX_PENDING = function() {
    try {
        var NET_CR_AMT; // Utility Auto Fix Comments
        var SETT_CUST_AC_NO; // Utility Auto Fix Comments
        var SETT_EQ_AMT; // Utility Auto Fix Comments
        var aa; // Utility Auto Fix Comments
        var acnoFieldNameObject; // Utility Auto Fix Comments
        var ccyFieldNameObject; // Utility Auto Fix Comments
        var closeRateObject; // Utility Auto Fix Comments
        var custEqAmtObject; // Utility Auto Fix Comments
        var custRateObject; // Utility Auto Fix Comments
        var exchFieldList; // Utility Auto Fix Comments
        var exchRateObject; // Utility Auto Fix Comments
        if (document.MAINFORM.NET_CR_CCY.value != '') {
            exchFieldList = 'SETT_NET_EXCH_RT1' + ';' + 'SETT_NET_CLOSE_RT1' + ';' + 'SETT_NET_EXCH_RT2' + ';' + 'SETT_NET_CLOSE_RT2';
            SYS_GetExchangeRate_Boc(document.MAINFORM.NET_CR_CCY.value, 'USD', "Buying Rate;Buying Close Rate;Selling Rate;Selling Close Rate", exchFieldList);
            GetExchCustRate('1', document.MAINFORM.SETT_NET_EXCH_RT1.value, document.MAINFORM.SETT_NET_CLOSE_RT1.value, document.MAINFORM.SETT_NET_CUST_RT1);
            GetExchCustRate('2', document.MAINFORM.SETT_NET_EXCH_RT2.value, document.MAINFORM.SETT_NET_CLOSE_RT2.value, document.MAINFORM.SETT_NET_CUST_RT2);
        }

        if (document.MAINFORM.NET_CR_CCY.value != '') {
            exchFieldList = 'SETT_NET_EXCH_RT2' + ';' + 'SETT_NET_CLOSE_RT2';
            SYS_GetExchangeRate_Boc(document.MAINFORM.NET_CR_CCY.value, 'USD', "Selling Rate;Selling Close Rate", exchFieldList);
            GetExchCustRate('2', document.MAINFORM.SETT_NET_EXCH_RT2.value, document.MAINFORM.SETT_NET_CLOSE_RT2.value, document.MAINFORM.SETT_NET_CUST_RT2);
        }
        NET_CR_AMT = document.MAINFORM.NET_CR_AMT.value;
        if (SYS_BeFloat(NET_CR_AMT) > 0) {
            for (i = 2; i <= 5; i++) {
                SETT_EQ_AMT = EEHtml.getElementById('SETT_EQ_AMT' + i);
                SETT_EQ_AMT.className = 'AMT_O';
                SETT_EQ_AMT.readOnly = false;
            }
        }
        for (SETT_times = 1; SETT_times <= 6; SETT_times++) {

            acnoFieldNameObject = EEHtml.getElementById('SETT_CUST_AC_NO' + SETT_times);
            ccyFieldNameObject = EEHtml.getElementById('SETT_AC_CCY' + SETT_times);

            exchRateObject = EEHtml.getElementById('SETT_EXCH_RT' + SETT_times);
            closeRateObject = EEHtml.getElementById('SETT_CLOSE_RT' + SETT_times);
            custRateObject = EEHtml.getElementById('SETT_CUST_RT' + SETT_times);
            custEqAmtObject = EEHtml.getElementById('SETT_EQ_AMT' + SETT_times);



            if (SETT_times == 1 && ccyFieldNameObject.value != '') {
                exchFieldList = exchRateObject.name + ';' + closeRateObject.name;
                SYS_GetExchangeRate_Boc(ccyFieldNameObject.value, 'USD', "Selling Rate;Selling Close Rate", exchFieldList);

                GetExchCustRate('2', exchRateObject.value, closeRateObject.value, custRateObject);
                SETT_EQ_AMT1_onchange();
            } else if (SETT_times == 6 && ccyFieldNameObject.value != '') {
                exchFieldList = exchRateObject.name + ';' + closeRateObject.name;
                SYS_GetExchangeRate_Boc(ccyFieldNameObject.value, 'USD', "Buying Rate;Buying Close Rate", exchFieldList);

                GetExchCustRate('1', exchRateObject.value, closeRateObject.value, custRateObject);
                SETT_EQ_AMT6_onchange();
            } else if (ccyFieldNameObject.value != '') {
                exchFieldList = exchRateObject.name + ';' + closeRateObject.name;
                SYS_GetExchangeRate_Boc(ccyFieldNameObject.value, 'USD', "Selling Rate;Selling Close Rate", exchFieldList);

                GetExchCustRate('2', exchRateObject.value, closeRateObject.value, custRateObject);
                SETT_EQ_AMT_onchange(custEqAmtObject.name);
            }
        }
        for (SETT_times = 1; SETT_times < 6; SETT_times++) {
            aa = EEHtml.getElementById('SETT_TRANS_FLG' + SETT_times);
            SETT_CUST_AC_NO = EEHtml.getElementById('SETT_CUST_AC_NO' + SETT_times);

            if (aa.value == '2' || aa.value == '4' || aa.value == '5' || aa.value == '6') {
                SETT_CUST_AC_NO.onclick = "";
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_NONEXCH_FLG_onchange = function() {
    try {
        try {
            document.MAINFORM.SETT_CUST_AC_NO1_S.value = '';
            document.MAINFORM.SETT_CUST_AC_NO1.value = '';
            document.MAINFORM.SETT_AC_CCY1.value = '';
            document.MAINFORM.SETT_EXCH_RT1.value = 0;
            document.MAINFORM.SETT_CLOSE_RT1.value = 0;
            document.MAINFORM.SETT_CUST_RT1.value = 0;
            document.MAINFORM.SETT_ORGAN_ID1.value = "";
            document.MAINFORM.SETT_CUST_NM1.value = "";
            document.MAINFORM.SETT_CUST_NM_ZH1.value = "";
            SETT_EQ_AMT1_onchange();
        } catch (e1) {
            return;
        }
        settSetAcNoValue();
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_PAGE_onchange = function() {
    try {
        if (SYS_MODULE_NAME == 'IPLC') {
            SYF_IMLC_SETT_PAGE_onchange();
        } else if (SYS_MODULE_NAME == 'LOFG') {
            SYF_LOFG_SETT_PAGE_onchange();
        } else if (SYS_MODULE_NAME == 'EPLC') {
            SYF_EXLC_SETT_PAGE_onchange();
        } else if (SYS_MODULE_NAME == 'FFIT') {
            SYF_FFIT_SETT_PAGE_onchange();
        } else if (SYS_MODULE_NAME == 'EXCO') {
            SYF_EXCL_SETT_PAGE_onchange();
        } else if (SYS_MODULE_NAME == 'IMCO') {
            SYF_IMCL_SETT_PAGE_onchange();
        } else if (SYS_MODULE_NAME == 'DISC') {
            SYF_DISC_SETT_PAGE_onchange();
        } else if (SYS_MODULE_NAME == 'FAEF') {
            SYF_FAEF_SETT_PAGE_onchange();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_PRTNO_onclick = function(fieldvalue) {
    try {
        var prtno; // Utility Auto Fix Comments
        prtno = fieldvalue.substr(0, 6);
        document.MAINFORM.SETT_EXCH_RPTNO.value = prtno;
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_SECD_ACNO_CHECK = function() {
    try {
        var SETT_TRANS_FLG; // Utility Auto Fix Comments
        var acnoFlag; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var sett_cust_acno; // Utility Auto Fix Comments
        var sett_cust_acno_o; // Utility Auto Fix Comments
        var temp; // Utility Auto Fix Comments
        for (j = 1; j <= 6; j++) {
            sett_cust_acno_o = EEHtml.getElementById("SETT_CUST_AC_NO" + j + "_O");
            sett_cust_acno = EEHtml.getElementById("SETT_CUST_AC_NO" + j);
            SETT_TRANS_FLG = EEHtml.getElementById("SETT_TRANS_FLG" + j);
            acnoFlag = false;
            if (sett_cust_acno && sett_cust_acno_o && sett_cust_acno.value != "" && SETT_TRANS_FLG && SETT_TRANS_FLG.value != "2") {
                for (i = 0; i < sett_cust_acno_o.length; i++) {
                    temp = sett_cust_acno_o.options[i].value.split(' ');
                    if (temp[1] != null && sett_cust_acno.value == temp[1]) {
                        acnoFlag = true;
                        break;
                    } else if (temp[1] == null && sett_cust_acno.value == temp[0]) {
                        acnoFlag = true;
                        break;
                    }
                }
            }
            if (!acnoFlag) {
                sett_cust_acno.select();
                alert("CUST_ID & CUST_ACNO check false! Please input again!");
                EEHtml.fireEvent(sett_cust_acno_o, "onclick");
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_SECD_CUST_ID_onchange = function() {
    try {
        var condition; // Utility Auto Fix Comments
        var custCcySwitch; // Utility Auto Fix Comments
        var isGetCustData; // Utility Auto Fix Comments
        /*

if(document.MAINFORM.SETT_SECD_CUST_ID.value==''){
	document.MAINFORM.SETT_SECD_CUST_NM.value='';
	settSecdCustAcno.length=0;
	SettleGetCustAcno(custCcySwitch);
	SETT_SECD_ACNO_CHECK();
	settSetAcNoValue();
	return true;
}
	
isGetCustData=SYS_Get22TableData_Boc('CUST_MASTER',"CUST_ID='"+document.MAINFORM.SETT_SECD_CUST_ID.value+"'",'CUST_NM','SETT_SECD_CUST_NM');

if(isGetCustData=='N'){
	alert('???');
	document.MAINFORM.SETT_SECD_CUST_ID.value='';
	document.MAINFORM.SETT_SECD_CUST_NM.value='';
	settSecdCustAcno.length=0;
}

if(isGetCustData!='N'){
	settSecdCustAcno.length=0;
	condition="CUST_ID='"+document.MAINFORM.SETT_SECD_CUST_ID.value+"'";
	settSecdCustAcno=SYS_GetMultiData_Boc("ACNO_MASTER",condition,"CUST_AC_TYPE,CUST_AC_NO,CUST_AC_CCY,AC_TYPE,AC_SUB_TYPE");
SECOND_SETT_ARRAY=SYS_GetMultiData_Boc("CUST_MASTER",condition,"CUST_ORGAN_ID,CUST_NM,CUST_NM_C");
	CUST_NM_ORGAN['SECOND_SETT_ORGAN']=SECOND_SETT_ARRAY[0][0];
	CUST_NM_ORGAN['SECOND_SETT_NM']=SECOND_SETT_ARRAY[0][1];
	CUST_NM_ORGAN['SECOND_SETT_NM_C']=SECOND_SETT_ARRAY[0][2];
}
SettleGetCustAcno(custCcySwitch);
SETT_SECD_ACNO_CHECK();
settSetAcNoValue();
*/
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_TRANS_FLDCLASS_onchange = function() {
    try {
        var i; // Utility Auto Fix Comments
        for (i = 1; i <= 5; i++) {
            if (EEHtml.getElementById("SETT_TRANS_FLG" + i).value == "2") {
                SYT_ChangeFldClass(EEHtml.getElementById("SETT_CUST_AC_NO" + i), "M");
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_TRANS_FLG_onchange = function(fieldName) {
    try {
        var SETT_AC_AMT; // Utility Auto Fix Comments
        var SETT_AC_CCY; // Utility Auto Fix Comments
        var SETT_AMT_TO_BIC; // Utility Auto Fix Comments
        var SETT_AMT_TO_ID; // Utility Auto Fix Comments
        var SETT_AMT_TO_NM; // Utility Auto Fix Comments
        var SETT_CRNO; // Utility Auto Fix Comments
        var SETT_CUST_AC_NO; // Utility Auto Fix Comments
        var SETT_CUST_AC_NO_O; // Utility Auto Fix Comments
        var SETT_CUST_AC_NO_S; // Utility Auto Fix Comments
        var SETT_TRANS_FLG; // Utility Auto Fix Comments
        var closeRateObject; // Utility Auto Fix Comments
        var custNonExchComm; // Utility Auto Fix Comments
        var custRateObject; // Utility Auto Fix Comments
        var exchFieldList; // Utility Auto Fix Comments
        var exchRateNameObject; // Utility Auto Fix Comments
        var fieldNumber; // Utility Auto Fix Comments
        var settAmtToIdObject; // Utility Auto Fix Comments
        var setteqAmtObject; // Utility Auto Fix Comments
        fieldNumber = fieldName.substr(14, 1);
        SETT_TRANS_FLG = EEHtml.getElementById(fieldName);
        SETT_CUST_AC_NO = EEHtml.getElementById('SETT_CUST_AC_NO' + fieldNumber);
        SETT_CUST_AC_NO_O = EEHtml.getElementById('SETT_CUST_AC_NO' + fieldNumber + '_O');
        SETT_CUST_AC_NO_S = EEHtml.getElementById('SETT_CUST_AC_NO' + fieldNumber + '_S');
        SETT_AC_CCY = EEHtml.getElementById('SETT_AC_CCY' + fieldNumber);
        SETT_AC_AMT = EEHtml.getElementById('SETT_AC_AMT' + fieldNumber);
        SETT_AMT_TO_ID = EEHtml.getElementById('SETT_AMT_TO_ID' + fieldNumber);
        SETT_AMT_TO_NM = EEHtml.getElementById('SETT_AMT_TO_NM' + fieldNumber);
        SETT_AMT_TO_BIC = EEHtml.getElementById('SETT_AMT_TO_BIC' + fieldNumber);

        exchRateNameObject = EEHtml.getElementById('SETT_EXCH_RT' + fieldNumber);
        closeRateObject = EEHtml.getElementById('SETT_CLOSE_RT' + fieldNumber);
        custRateObject = EEHtml.getElementById('SETT_CUST_RT' + fieldNumber);
        settAmtToIdObject = EEHtml.getElementById('SETT_AMT_TO_ID' + fieldNumber);
        setteqAmtObject = EEHtml.getElementById('SETT_EQ_AMT' + fieldNumber);
        SETT_CRNO = EEHtml.getElementById('SETT_CRNO' + fieldNumber);
        custNonExchComm = EEHtml.getElementById('SETT_EXCH_COMM' + fieldNumber);
        if (SETT_TRANS_FLG.value == '4') {
            custNonExchComm.value = 0;
        }
        if (SETT_TRANS_FLG.value == 2 && SYS_BeFloat(setteqAmtObject.value) > 0) {
            SYT_ChangeFldClass(SETT_CUST_AC_NO, "M");
        } else {
            SYT_ChangeFldClass(SETT_CUST_AC_NO, "P");
        }
        if (SETT_TRANS_FLG.value == '1') {
            SETT_CUST_AC_NO.value = '';
            SETT_AC_CCY.value = '';
            SETT_AC_AMT.value = 0;
            if (SYS_BeFloat(EEHtml.getElementById("NET_CR_AMT").value) > 0) {
                if (fieldNumber == 1) {
                    SETT_CUST_AC_NO.className = 'CHAR_M';
                }
            } else {
                SETT_CUST_AC_NO.className = 'CHAR_P';
            }
            SETT_CUST_AC_NO.readOnly = true;
            SETT_CUST_AC_NO.onclick = SETT_CUST_AC_NO_O_style;
            SETT_CUST_AC_NO_O.style.display = 'none';
            if (fieldNumber == '1') {
                SETT_EQ_AMT1_onchange();
            } else {
                SETT_EQ_AMT_onchange('SETT_EQ_AMT' + fieldNumber);
            }
            GetCablePostFee_SETT(fieldName, settAmtToIdObject.value, 'N');
        } else {
            GetCablePostFee_SETT(fieldName, settAmtToIdObject.value, 'N');
            if (SETT_TRANS_FLG.value == '5' || SETT_TRANS_FLG.value == '6') {
                if (SYS_BeFloat(setteqAmtObject.value) > 0) {
                    GetCablePostFee_SETT(fieldName, settAmtToIdObject.value, 'Y');
                }
            }
            SETT_CUST_AC_NO_S.value = BUSI_TYPE_GL;
            SETT_CUST_AC_NO.value = GL9992;

            SETT_CUST_AC_NO.className = 'CHAR_P';
            SETT_CUST_AC_NO.readOnly = true;
            SETT_CUST_AC_NO.onclick = "";
            if (SETT_TRANS_FLG.value == '2' && SETT_CRNO.value == '') {
                SETT_CUST_AC_NO_S.value = "";
                SETT_CUST_AC_NO.value = "";
                SYT_ChangeFldClass(SETT_CUST_AC_NO, "M");
                SETT_AC_CCY.value = 'USD';
                exchFieldList = exchRateNameObject.name + ';' + closeRateObject.name;
                SYS_GetExchangeRate_Boc(SETT_AC_CCY.value, 'USD', "Selling Rate;Selling Close Rate", exchFieldList);
                GetExchCustRate('2', exchRateNameObject.value, closeRateObject.value, custRateObject);
            } else if (SETT_TRANS_FLG.value == '2' && SETT_CRNO.value != '') {
                SETT_CUST_AC_NO_S.value = "";
                SETT_CUST_AC_NO.value = "";
                SYT_ChangeFldClass(SETT_CUST_AC_NO, "M");
                SETT_AC_CCY.value = document.MAINFORM.NET_CR_CCY.value;
            } else {
                SETT_AC_CCY.value = document.MAINFORM.NET_CR_CCY.value;
            }
            if (SETT_TRANS_FLG.value == '4') {
                SETT_CUST_AC_NO.value = CGL9991;
            }
            if (SETT_TRANS_FLG.value == '5' || SETT_TRANS_FLG.value == '6') {
                SETT_CUST_AC_NO.value = GL9992;
            }

            if (fieldNumber == '1') {
                SETT_EQ_AMT1_onchange();
            } else {
                SETT_EQ_AMT_onchange('SETT_EQ_AMT' + fieldNumber);
            }
        }
        SETT_TRANS_onchange();
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_TRANS_onchange = function(idFlag) {
    try {
        if (SYS_MODULE_NAME == 'IPLC') {
            SYF_IMLC_SETT_TRANS_FLG_onchange();
        } else if (SYS_MODULE_NAME == 'LOFG') {
            SYF_LOFG_SETT_TRANS_FLG_onchange();
        } else if (SYS_MODULE_NAME == 'EPLC') {
            SYF_EXLC_SETT_TRANS_FLG_onchange(idFlag);
        } else if (SYS_MODULE_NAME == 'FFIT') {
            SYF_FFIT_SETT_TRANS_FLG_onchange();
        } else if (SYS_MODULE_NAME == 'EXCO') {
            SYF_EXCL_SETT_TRANS_FLG_onchange(idFlag);
        } else if (SYS_MODULE_NAME == 'IMCO') {
            SYF_IMCL_SETT_TRANS_FLG_onchange();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SETT_WHZH_TRX_CODE_CHECK = function() {
    try {
        var i; // Utility Auto Fix Comments
        for (i = 1; i <= 8; i++) {
            if (i == 7) {
                continue;
            }
            if (EEHtml.getElementById("SETT_BUSI_TYPE" + i) && EEHtml.getElementById("SETT_BUSI_TYPE" + i).value.indexOf(INTERFACE_BANCS_AC_TRX_CODE) >= 0 && SYS_BeFloat(EEHtml.getElementById("SETT_AC_AMT" + i).value) > 0) {
                if (EEHtml.getElementById('WHZH_TRX_CODE').value == '') {
                    return false;
                }

            }
        }
        return true;
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettInitCnty1 = function() {
    try {
        var c; // Utility Auto Fix Comments
        var ccy; // Utility Auto Fix Comments
        var custac; // Utility Auto Fix Comments
        var custac_s; // Utility Auto Fix Comments
        var rptNoSett; // Utility Auto Fix Comments
        c = 0;
        for (i = 1; i <= 5; i++) {
            custac = EEHtml.getElementById('SETT_CUST_AC_NO' + i);
            custac_s = EEHtml.getElementById('SETT_CUST_AC_NO' + i + '_S');
            ccy = EEHtml.getElementById('SETT_AC_CCY' + i);
            if (custac.value != '' && custac_s.value != '' && custac_s.value != BUSI_TYPE_GL && ccy.value != 'USD') {
                c = 1;
            }
        }
        if (c == 1) {
            rptNoSett = SYT_GET_RPT_DCLR_NO();
            if (document.MAINFORM.SETT_CNTY_CODE.value != 'CHN' && document.MAINFORM.SETT_CNTY_CODE.value != '') {
                if (rptNoSett) {
                    SettRef1(rptNoSett);
                } else {
                    SYS_GetRefNo_S('IBPD01', 'SettRef1', '', 'IBPD01');
                }
                //rptNoSett?SettRef1(rptNoSett):SYS_GetRefNo_S('IBPD01','SettRef1','','IBPD01');
            } else if (document.MAINFORM.SETT_CNTY_CODE.value == 'CHN') {
                if (rptNoSett) {
                    SettRef1(rptNoSett);
                } else {
                    SYS_GetRefNo_S('IBPD03', 'SettRef1', '', 'IBPD03');
                }
                //rptNoSett?SettRef1(rptNoSett):SYS_GetRefNo_S('IBPD03','SettRef1','','IBPD03');
            } else {
                document.MAINFORM.SETT_DCLR_NO1.value = '';
            }
        } else {
            document.MAINFORM.SETT_DCLR_NO1.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettInitCnty2 = function() {
    try {
        var rptNoSett; // Utility Auto Fix Comments
        rptNoSett = SYT_GET_RPT_DCLR_NO();
        if (document.MAINFORM.SETT_CUST_AC_NO8.value != '' && document.MAINFORM.SETT_CUST_AC_NO8_S.value != '' && document.MAINFORM.SETT_CUST_AC_NO8_S.value != BUSI_TYPE_GL && document.MAINFORM.SETT_AC_CCY8.value != 'USD') {
            if (document.MAINFORM.SETT_CNTY_CODE.value != 'CHN' && document.MAINFORM.SETT_CNTY_CODE.value != '') {
                if (rptNoSett) {
                    SettRef2(rptNoSett);
                } else {
                    SYS_GetRefNo_S('IBPD07', 'SettRef2', '', 'IBPD07');
                }
                //rptNoSett?SettRef2(rptNoSett):SYS_GetRefNo_S('IBPD07','SettRef2','','IBPD07');
            } else if (document.MAINFORM.SETT_CNTY_CODE.value == 'CHN') {
                if (rptNoSett) {
                    SettRef2(rptNoSett);
                } else {
                    SYS_GetRefNo_S('IBPD09', 'SettRef2', '', 'IBPD09');
                }
                //rptNoSett?SettRef2(rptNoSett):SYS_GetRefNo_S('IBPD09','SettRef2','','IBPD09');
            } else {
                document.MAINFORM.SETT_DCLR_NO2.value = '';
            }
        } else {
            document.MAINFORM.SETT_DCLR_NO2.value = '';
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettInitCnty3 = function() {
    try {
        var rptNoSett; // Utility Auto Fix Comments
        rptNoSett = SYT_GET_RPT_DCLR_NO();
        if (document.MAINFORM.SETT_CUST_AC_NO6.value != '' && document.MAINFORM.SETT_CUST_AC_NO6_S.value != '' && document.MAINFORM.SETT_CUST_AC_NO6_S.value != BUSI_TYPE_GL && document.MAINFORM.SETT_AC_CCY6.value != 'USD') {
            if (document.MAINFORM.SETT_CNTY_CODE.value != '') {
                if (rptNoSett) {
                    SettRef3(rptNoSett);
                } else {
                    SYS_GetRefNo_S('IBPD09', 'SettRef3', '', 'IBPD09');
                }
                //rptNoSett?SettRef3(rptNoSett):SYS_GetRefNo_S('IBPD09','SettRef3','','IBPD09');
            } else {
                document.MAINFORM.SETT_DCLR_NO3.value = '';
            }
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettRef1 = function(ref) {
    try {
        var i; // Utility Auto Fix Comments
        if (document.MAINFORM.SETT_CNTY_CODE.value != 'CHN' && document.MAINFORM.SETT_CNTY_CODE.value != '') {
            document.MAINFORM.SETT_DCLR_NO1.value = '1' + ref;
        } else if (document.MAINFORM.SETT_CNTY_CODE.value == 'CHN' && WHZH_CODE_814 != '8114') {
            document.MAINFORM.SETT_DCLR_NO1.value = '2' + ref;
        } else if (WHZH_CODE_814 == '8114') {
            for (i = 1; i <= 5; i++) {
                if (document.MAINFORM.NET_CR_CCY.value == EEHtml.getElementById("SETT_AC_CCY" + i).value && document.MAINFORM.NET_CR_CCY.value != '' && EEHtml.getElementById("SETT_AC_CCY" + i).value != '') {
                    settDclr[i] = '2' + ref;

                } else if (document.MAINFORM.NET_CR_CCY.value != EEHtml.getElementById("SETT_AC_CCY" + i).value && document.MAINFORM.NET_CR_CCY.value != '' && EEHtml.getElementById("SETT_AC_CCY" + i).value != '') {
                    settDclr[i] = '3' + ref;
                }
            }

        } else {
            document.MAINFORM.SETT_DCLR_NO1.value = ref;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettRef2 = function(ref) {
    try {
        if (document.MAINFORM.SETT_CNTY_CODE.value != 'CHN' && document.MAINFORM.SETT_CNTY_CODE.value != '') {
            document.MAINFORM.SETT_DCLR_NO2.value = '1' + ref;
        } else if (document.MAINFORM.SETT_CNTY_CODE.value == 'CHN') {
            document.MAINFORM.SETT_DCLR_NO2.value = '2' + ref;
        } else {
            document.MAINFORM.SETT_DCLR_NO2.value = ref;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettRef3 = function(ref) {
    try {
        document.MAINFORM.SETT_DCLR_NO3.value = '2' + ref;
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettleCcyAmt = function(ccy, amt) {
    try {
        var SETT_AC_AMT; // Utility Auto Fix Comments
        var SETT_AC_CCY; // Utility Auto Fix Comments
        var SETT_CNY_AMT; // Utility Auto Fix Comments
        var SETT_CNY_AMT1; // Utility Auto Fix Comments
        var SETT_CNY_AMT2; // Utility Auto Fix Comments
        var SETT_CR_AMT; // Utility Auto Fix Comments
        var SETT_CUST_AC_NO; // Utility Auto Fix Comments
        var SETT_CUST_RT; // Utility Auto Fix Comments
        var SETT_DR_AMT; // Utility Auto Fix Comments
        var SETT_EQ_AMT; // Utility Auto Fix Comments
        var SETT_EXCH_COMM; // Utility Auto Fix Comments
        var SETT_EXCH_FAV; // Utility Auto Fix Comments
        var SETT_EXCH_INCM; // Utility Auto Fix Comments
        var eqAmt1; // Utility Auto Fix Comments
        var exchFieldList; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return;
        }

        if (document.MAINFORM.NET_CR_CCY.value == ccy && document.MAINFORM.NET_CR_AMT.value == SYT_CCY_AMT(ccy, amt)) {
            return;
        }
        document.MAINFORM.NET_CR_CCY.value = ccy;
        document.MAINFORM.NET_CR_AMT.value = SYT_CCY_AMT(ccy, amt);

        if (ccy != '') {
            exchFieldList = 'SETT_NET_EXCH_RT1' + ';' + 'SETT_NET_CLOSE_RT1' + ';' + 'SETT_NET_EXCH_RT2' + ';' + 'SETT_NET_CLOSE_RT2';
            SYS_GetExchangeRate_Boc(ccy, 'USD', "Buying Rate;Buying Close Rate;Selling Rate;Selling Close Rate", exchFieldList);
            GetExchCustRate('1', document.MAINFORM.SETT_NET_EXCH_RT1.value, document.MAINFORM.SETT_NET_CLOSE_RT1.value, document.MAINFORM.SETT_NET_CUST_RT1);
            GetExchCustRate('2', document.MAINFORM.SETT_NET_EXCH_RT2.value, document.MAINFORM.SETT_NET_CLOSE_RT2.value, document.MAINFORM.SETT_NET_CUST_RT2);
        }

        if (SYS_BeFloat(document.MAINFORM.SETT_NON_EXCH_RT.value) == 0 && document.MAINFORM.NONEXCHRT_onchange_flag.value == '0' && SYS_FUNCTION_TYPE == 'PM' && ccy != 'USD') {
            document.MAINFORM.SETT_NON_EXCH_RT.value = NONEXCHRT;
        }
        if (SYS_BeFloat(amt) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO1, 'M', 'N');
            document.MAINFORM.SETT_CUST_AC_NO1.readOnly = true; // Utility Auto Fix Comments
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO6, 'O', 'N');
            document.MAINFORM.SETT_CUST_AC_NO6.readOnly = true;
            eqAmt1 = SYS_BeFloat(amt);
            for (i = 2; i <= 5; i++) {
                SETT_EQ_AMT = EEHtml.getElementById('SETT_EQ_AMT' + i);
                SETT_EQ_AMT.className = 'AMT_O';
                SETT_EQ_AMT.readOnly = false;
                eqAmt1 -= SYS_BeFloat(SETT_EQ_AMT.value);
            }
            if (eqAmt1 < 0) {
                alert('The EQ amount1 is less than 0,please reduce other cr amount of other acno!');
            }
            document.MAINFORM.SETT_EQ_AMT1.value = SYT_CCY_AMT(ccy, eqAmt1);
            SETT_EQ_AMT1_onchange();
            document.MAINFORM.SETT_EQ_AMT6.value = 0;
            SETT_EQ_AMT6_onchange();
            document.MAINFORM.SETT_AC_AMT6.value = 0;
            document.MAINFORM.SETT_AC_CCY6.value = '';
            document.MAINFORM.SETT_CUST_AC_NO6.value = '';
            document.MAINFORM.SETT_CUST_RT6.value = 0;
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO1, 'O', 'N');
            document.MAINFORM.SETT_CUST_AC_NO1.readOnly = true;
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO2, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO3, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO4, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO5, 'P', 'N');
            for (i = 1; i <= 5; i++) {
                SETT_EQ_AMT = EEHtml.getElementById('SETT_EQ_AMT' + i);
                SETT_AC_CCY = EEHtml.getElementById('SETT_AC_CCY' + i);
                SETT_CUST_AC_NO = EEHtml.getElementById('SETT_CUST_AC_NO' + i);
                SETT_CUST_RT = EEHtml.getElementById('SETT_CUST_RT' + i);
                SETT_EXCH_INCM = EEHtml.getElementById('SETT_EXCH_INCM' + i);
                SETT_EXCH_FAV = EEHtml.getElementById('SETT_EXCH_FAV' + i);
                SETT_EXCH_COMM = EEHtml.getElementById('SETT_EXCH_COMM' + i);
                SETT_DR_AMT = EEHtml.getElementById('SETT_DR_AMT' + i);
                SETT_CNY_AMT = EEHtml.getElementById('SETT_CNY_AMT' + i);
                SETT_CNY_AMT1 = EEHtml.getElementById('SETT_CNY_AMT1' + i);
                SETT_CNY_AMT2 = EEHtml.getElementById('SETT_CNY_AMT2' + i);
                SETT_CR_AMT = EEHtml.getElementById('SETT_CR_AMT' + i);
                SETT_AC_AMT = EEHtml.getElementById('SETT_AC_AMT' + i);
                SETT_EQ_AMT.value = 0;
                SETT_EQ_AMT.className = 'AMT_P';
                SETT_EQ_AMT.readOnly = true;
                SETT_AC_AMT.value = 0;
                SETT_AC_CCY.value = '';
                SETT_CUST_AC_NO.value = '';
                SETT_CUST_AC_NO.readOnly = true;
                SETT_CUST_RT.value = 0;
                SETT_EXCH_INCM.value = 0;
                SETT_EXCH_FAV.value = 0;
                SETT_EXCH_COMM.value = 0;
                SETT_DR_AMT.value = 0;
                SETT_CNY_AMT.value = 0;
                SETT_CNY_AMT1.value = 0;
                SETT_CNY_AMT2.value = 0;
                SETT_CR_AMT.value = 0;
            }
            document.MAINFORM.SETT_NET_EXCH_COMM.value = 0;
            SETT_EQ_AMT1_onchange();
            if (SYS_BeFloat(amt) < 0) {
                SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO6, 'M', 'N');
            } else {
                SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO6, 'O', 'N');
            }
            document.MAINFORM.SETT_CUST_AC_NO6.readOnly = true;
            document.MAINFORM.SETT_EQ_AMT6.value = Math.abs(SYS_BeFloat(document.MAINFORM.NET_CR_AMT.value));
            document.MAINFORM.SETT_EQ_AMT6.value = SYT_CCY_AMT(ccy, document.MAINFORM.SETT_EQ_AMT6.value);
            SETT_EQ_AMT6_onchange();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettleCustAcNoInitValue = function(fieldList) {
    try {
        var fieldArray; // Utility Auto Fix Comments
        var fieldObject; // Utility Auto Fix Comments
        var settAcnoNumber; // Utility Auto Fix Comments
        fieldArray = fieldList.split(',');
        for (i = 0; i <= fieldArray.length - 1; i++) {
            if (document.MAINFORM.SETT_NONEXCH_FLG.value == 'YES' && fieldArray[i] == 'SETT_CUST_AC_NO1_O') {
                continue;
            }
            fieldObject = EEHtml.getElementById(fieldArray[i]);
            fieldObject.length = 0;
        }

        for (i = 0; i <= fieldArray.length - 1; i++) {
            fieldObject = EEHtml.getElementById(fieldArray[i]);

            settAcnoNumber = 0;
            fieldObject[0] = new Option('Acno of First Cust');
            fieldObject[0].value = '';
            for (j = 0; j <= custAcno.length - 1; j++) {
                if (custCcySwitch == '1') {
                    if (custAcno[j][2] == 'USD') {
                        fieldObject[settAcnoNumber + 1] = new Option(custAcno[j][3] + custAcno[j][4] + ' ' + custAcno[j][1] + ' ' + custAcno[j][2]);
                        fieldObject[settAcnoNumber + 1].value = custAcno[j][3] + custAcno[j][4] + ' ' + custAcno[j][1] + ' ' + custAcno[j][2] + ' FIRST';
                        settAcnoNumber++;
                    }
                } else {
                    fieldObject[settAcnoNumber + 1] = new Option(custAcno[j][3] + custAcno[j][4] + ' ' + custAcno[j][1] + ' ' + custAcno[j][2]);
                    fieldObject[settAcnoNumber + 1].value = custAcno[j][3] + custAcno[j][4] + ' ' + custAcno[j][1] + ' ' + custAcno[j][2] + ' FIRST';
                    settAcnoNumber++;
                }
            }
            if (settSecdCustAcno.length > 0) {
                fieldObject[settAcnoNumber + 1] = new Option('');
                fieldObject[settAcnoNumber + 1].value = '';
                settAcnoNumber++;
                fieldObject[settAcnoNumber + 1] = new Option('Acno of Second Cust');
                fieldObject[settAcnoNumber + 1].value = '';
                settAcnoNumber++;
            }
            for (j = 0; j <= settSecdCustAcno.length - 1; j++) {
                if (custCcySwitch == '1') {
                    if (settSecdCustAcno[j][2] == 'USD') {
                        fieldObject[settAcnoNumber + 1] = new Option(settSecdCustAcno[j][3] + settSecdCustAcno[j][4] + ' ' + settSecdCustAcno[j][1] + ' ' + settSecdCustAcno[j][2]);
                        fieldObject[settAcnoNumber + 1].value = settSecdCustAcno[j][3] + settSecdCustAcno[j][4] + ' ' + settSecdCustAcno[j][1] + ' ' + settSecdCustAcno[j][2] + ' SECOND_SETT';
                        settAcnoNumber++;
                    }
                } else {
                    fieldObject[settAcnoNumber + 1] = new Option(settSecdCustAcno[j][3] + settSecdCustAcno[j][4] + ' ' + settSecdCustAcno[j][1] + ' ' + settSecdCustAcno[j][2]);
                    fieldObject[settAcnoNumber + 1].value = settSecdCustAcno[j][3] + settSecdCustAcno[j][4] + ' ' + settSecdCustAcno[j][1] + ' ' + settSecdCustAcno[j][2] + ' SECOND_SETT';
                    settAcnoNumber++;

                }
            }
            fieldObject[settAcnoNumber + 1] = new Option('');
            fieldObject[settAcnoNumber + 1].value = '';
            settAcnoNumber++;
            fieldObject[settAcnoNumber + 1] = new Option('Acno of GL');
            fieldObject[settAcnoNumber + 1].value = '';
            settAcnoNumber++;

            fieldObject[settAcnoNumber + 1] = new Option(BUSI_TYPE_GL + ' ' + CGL9991);
            fieldObject[settAcnoNumber + 1].value = BUSI_TYPE_GL + ' ' + CGL9991;
            settAcnoNumber++;
            if (["LOFG", "LGAD", "IPLC", "IMCO", "DISC", "FAEF", "FADA"].join(",").indexOf(SYS_MODULE_NAME) == -1) {

                fieldObject[settAcnoNumber + 1] = new Option(BUSI_TYPE_GL + ' ' + GL8421);
                fieldObject[settAcnoNumber + 1].value = BUSI_TYPE_GL + ' ' + GL8421;
                settAcnoNumber++;
            }
            if ((SYS_MODULE_NAME !== "FFIT" && SYS_MODULE_NAME !== "EPLC" && SYS_MODULE_NAME !== "EXCO") ||
                (fieldObject.name.indexOf('6') < 0 && fieldObject.name.indexOf('8') < 0)) {
                fieldObject[settAcnoNumber + 1] = new Option(BUSI_TYPE_GL + ' ' + GL5365);
                fieldObject[settAcnoNumber + 1].value = BUSI_TYPE_GL + ' ' + GL5365;
                settAcnoNumber++;
                fieldObject[settAcnoNumber + 1] = new Option(BUSI_TYPE_GL + ' ' + GL5113);
                fieldObject[settAcnoNumber + 1].value = BUSI_TYPE_GL + ' ' + GL5113;
                settAcnoNumber++;

            }
            fieldObject.size = settAcnoNumber + 1;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettleCustAcNoOnclick = function(acnoFieldName, selectValue, subjectFieldName, ccyFieldName) {
    try {
        var SETT_CUST_NM; // Utility Auto Fix Comments
        var SETT_CUST_NM_C; // Utility Auto Fix Comments
        var SETT_ORGAN_ID; // Utility Auto Fix Comments
        var acno; // Utility Auto Fix Comments
        var acnoFieldNameObject; // Utility Auto Fix Comments
        var amtNumber; // Utility Auto Fix Comments
        var ccyFieldNameObject; // Utility Auto Fix Comments
        var closeRateName; // Utility Auto Fix Comments
        var closeRateObject; // Utility Auto Fix Comments
        var custRateName; // Utility Auto Fix Comments
        var custRateObject; // Utility Auto Fix Comments
        var eqAmtName; // Utility Auto Fix Comments
        var exchFieldList; // Utility Auto Fix Comments
        var exchRateName; // Utility Auto Fix Comments
        var exchRateNameObject; // Utility Auto Fix Comments
        var subjectFieldNameObject; // Utility Auto Fix Comments
        if (subjectFieldName == "" || subjectFieldName == "null" || subjectFieldName == null || subjectFieldName == "undefined") {
            return;
        }
        acno = selectValue.split(' ');
        amtNumber = SYS_BeFloat(acnoFieldName.substr(15, 1));
        subjectFieldNameObject = EEHtml.getElementById(subjectFieldName);
        if (subjectFieldNameObject == "" || subjectFieldNameObject == "null" || subjectFieldNameObject == null || subjectFieldNameObject == "undefined") {
            return;
        }
        acnoFieldNameObject = EEHtml.getElementById(acnoFieldName);
        if (acnoFieldNameObject == "" || acnoFieldNameObject == "null" || acnoFieldNameObject == null || acnoFieldNameObject == "undefined") {
            return;
        }
        ccyFieldNameObject = EEHtml.getElementById(ccyFieldName);
        if (ccyFieldNameObject == "" || ccyFieldNameObject == "null" || ccyFieldNameObject == null || ccyFieldNameObject == "undefined") {
            return;
        }

        exchRateName = acnoFieldName.replace('SETT_CUST_AC_NO', 'SETT_EXCH_RT');
        closeRateName = acnoFieldName.replace('SETT_CUST_AC_NO', 'SETT_CLOSE_RT');
        custRateName = acnoFieldName.replace('SETT_CUST_AC_NO', 'SETT_CUST_RT');
        SETT_ORGAN_ID = acnoFieldName.replace('SETT_CUST_AC_NO', 'SETT_ORGAN_ID');
        SETT_CUST_NM = acnoFieldName.replace('SETT_CUST_AC_NO', 'SETT_CUST_NM');
        SETT_CUST_NM_C = acnoFieldName.replace('SETT_CUST_AC_NO', 'SETT_CUST_NM_ZH');

        exchRateNameObject = EEHtml.getElementById(exchRateName);
        if (exchRateNameObject == "" || exchRateNameObject == "null" || exchRateNameObject == null || exchRateNameObject == "undefined") {
            return;
        }
        closeRateObject = EEHtml.getElementById(closeRateName);
        if (closeRateObject == "" || closeRateObject == "null" || closeRateObject == null || closeRateObject == "undefined") {
            return;
        }
        custRateObject = EEHtml.getElementById(custRateName);
        if (custRateObject == "" || custRateObject == "null" || custRateObject == null || custRateObject == "undefined") {
            return;
        }
        SETT_ORGAN_ID = EEHtml.getElementById(SETT_ORGAN_ID);
        SETT_CUST_NM = EEHtml.getElementById(SETT_CUST_NM);
        SETT_CUST_NM_C = EEHtml.getElementById(SETT_CUST_NM_C);
        if (selectValue.indexOf(BUSI_TYPE_GL) >= 0) {
            acnoFieldNameObject.value = acno[1];
            ccyFieldNameObject.value = document.MAINFORM.NET_CR_CCY.value;

            if (amtNumber == 8 && document.MAINFORM.NET_RET_CCY.value != '') {
                ccyFieldNameObject.value = document.MAINFORM.NET_RET_CCY.value;
            }
            subjectFieldNameObject.value = acno[0];
            if (amtNumber != 8) {
                exchFieldList = exchRateNameObject.name + ';' + closeRateObject.name;
                SYS_GetExchangeRate_Boc(ccyFieldNameObject.value, 'USD', "Selling Rate;Selling Close Rate", exchFieldList);
                GetExchCustRate('2', exchRateNameObject.value, closeRateObject.value, custRateObject);
            } else if (amtNumber == 8) {
                CABLEFEE_AC_AMT();
            }
            SETT_ORGAN_ID.value = "";
            SETT_CUST_NM.value = "";
            SETT_CUST_NM_C.value = "";
        } else if (selectValue != '' && selectValue.indexOf(BUSI_TYPE_GL) < 0) {
            subjectFieldNameObject.value = acno[0];
            acnoFieldNameObject.value = acno[1];
            ccyFieldNameObject.value = acno[2];

            if (amtNumber == 8) {
                CABLEFEE_AC_AMT();
            }
            if (amtNumber == 6) {
                exchFieldList = exchRateNameObject.name + ';' + closeRateObject.name;
                SYS_GetExchangeRate_Boc(ccyFieldNameObject.value, 'USD', "Buying Rate;Buying Close Rate", exchFieldList);
                GetExchCustRate('1', exchRateNameObject.value, closeRateObject.value, custRateObject);
            } else if (amtNumber != 8) {
                exchFieldList = exchRateNameObject.name + ';' + closeRateObject.name;
                SYS_GetExchangeRate_Boc(ccyFieldNameObject.value, 'USD', "Selling Rate;Selling Close Rate", exchFieldList);
                GetExchCustRate('2', exchRateNameObject.value, closeRateObject.value, custRateObject);
            }

            SETT_ORGAN_ID.value = CUST_NM_ORGAN[acno[3] + '_ORGAN'];
            SETT_CUST_NM.value = CUST_NM_ORGAN[acno[3] + '_NM'];
            SETT_CUST_NM_C.value = CUST_NM_ORGAN[acno[3] + '_NM_C'];
        } else {
            try {
                subjectFieldNameObject.value = '';
                acnoFieldNameObject.value = '';
                ccyFieldNameObject.value = '';
                exchRateNameObject.value = 0;
                closeRateObject.value = 0;
                custRateObject.value = 0;
                SETT_ORGAN_ID.value = "";
                SETT_CUST_NM.value = "";
                SETT_CUST_NM_C.value = "";
            } catch (e1) {
                return;
            }
        }

        amtNumber = SYS_BeFloat(acnoFieldName.substr(15, 1));
        eqAmtName = 'SETT_EQ_AMT' + amtNumber;

        if (amtNumber == '1') {
            SETT_EQ_AMT1_onchange();
        } else if (amtNumber == '6') {
            SETT_EQ_AMT6_onchange();
        } else if (amtNumber != '8') {
            SETT_EQ_AMT_onchange(eqAmtName);
        } else if (amtNumber == '8') {
            SettleNonExchComm();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettleCustId = function(trxno, cntycode, custid) {
    try {
        document.MAINFORM.SETT_930_BUSI_TYPE.value = INTERFACE_930_TRX_CODE + '|' + INTERFACE_GL_TRX_CODE;
        document.MAINFORM.SETT_BGL_AC_NO.value = '9991';
        document.MAINFORM.SETT_TRX_NO.value = trxno;
        document.MAINFORM.SETT_CNTY_CODE.value = cntycode;
        if (cntycode == '8114') {
            document.MAINFORM.SETT_CNTY_CODE.value = 'CHN';
            WHZH_CODE_814 = cntycode;
        }

        document.MAINFORM.SETT_CUST_ID.value = custid;
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettleExchIncm = function(amtNumber) {
    try {
        var custAmt; // Utility Auto Fix Comments
        var custCcy; // Utility Auto Fix Comments
        var custCloseRate; // Utility Auto Fix Comments
        var custCustRate; // Utility Auto Fix Comments
        var custEqAmt; // Utility Auto Fix Comments
        var custExchFav; // Utility Auto Fix Comments
        var custExchIncm; // Utility Auto Fix Comments
        var custExchRate; // Utility Auto Fix Comments
        var exchFav; // Utility Auto Fix Comments
        var exchIncm; // Utility Auto Fix Comments
        var netCcy; // Utility Auto Fix Comments
        var netCloseRate; // Utility Auto Fix Comments
        var netCustRate; // Utility Auto Fix Comments
        var netExchRate; // Utility Auto Fix Comments
        var settCnyAmt1; // Utility Auto Fix Comments
        var settCnyAmt2; // Utility Auto Fix Comments
        netCcy = EEHtml.getElementById('NET_CR_CCY');
        netExchRate = EEHtml.getElementById('SETT_NET_EXCH_RT');
        netCloseRate = EEHtml.getElementById('SETT_NET_CLOSE_RT');
        netCustRate = EEHtml.getElementById('SETT_NET_CUST_RT');

        custCcy = EEHtml.getElementById('SETT_AC_CCY' + amtNumber);
        custAmt = EEHtml.getElementById('SETT_AC_AMT' + amtNumber);
        settCnyAmt1 = EEHtml.getElementById('SETT_CNY_AMT1' + amtNumber);
        settCnyAmt2 = EEHtml.getElementById('SETT_CNY_AMT2' + amtNumber);
        custEqAmt = EEHtml.getElementById('SETT_EQ_AMT' + amtNumber);
        custExchRate = EEHtml.getElementById('SETT_EXCH_RT' + amtNumber);
        custCloseRate = EEHtml.getElementById('SETT_CLOSE_RT' + amtNumber);
        custCustRate = EEHtml.getElementById('SETT_CUST_RT' + amtNumber);
        custExchIncm = EEHtml.getElementById('SETT_EXCH_INCM' + amtNumber);
        custExchFav = EEHtml.getElementById('SETT_EXCH_FAV' + amtNumber);

        if (amtNumber != '6') {
            if (netCcy.value != '' && custCcy.value != '' && netCcy.value != custCcy.value) {
                exchFav = 0;
                exchIncm = 0;
                exchFav = SYS_BeFloat(custEqAmt.value) * (SYS_BeFloat(document.MAINFORM.SETT_NET_CUST_RT1.value) - SYS_BeFloat(document.MAINFORM.SETT_NET_EXCH_RT1.value));
                exchFav = exchFav + SYS_BeFloat(custAmt.value) * (SYS_BeFloat(custExchRate.value) - SYS_BeFloat(custCustRate.value));
                custExchFav.value = SYT_CCY_AMT('USD', exchFav / 100);

                if (custCcy.value != 'USD' && document.MAINFORM.NET_CR_CCY.value != 'USD') {
                    custExchIncm.value = Math.abs(SYS_BeFloat(settCnyAmt1.value) - SYS_BeFloat(settCnyAmt2.value));
                    custExchIncm.value = SYT_CCY_AMT('USD', custExchIncm.value);
                } else {
                    custExchIncm.value = Math.abs(SYS_BeFloat(settCnyAmt1.value) - SYS_BeFloat(custAmt.value));
                    custExchIncm.value = SYT_CCY_AMT('USD', custExchIncm.value);
                }
            } else {
                custExchFav.value = 0;
                custExchIncm.value = 0;
            }
        } else {
            if (netCcy.value != '' && custCcy.value != '' && netCcy.value != custCcy.value) {
                exchFav = 0;
                exchIncm = 0;
                exchFav = SYS_BeFloat(custEqAmt.value) * (SYS_BeFloat(document.MAINFORM.SETT_NET_EXCH_RT2.value) - SYS_BeFloat(document.MAINFORM.SETT_NET_CUST_RT2.value));
                exchFav = exchFav + SYS_BeFloat(custAmt.value) * (SYS_BeFloat(custCustRate.value) - SYS_BeFloat(custExchRate.value));
                custExchFav.value = SYT_CCY_AMT('USD', exchFav / 100);
                if (custCcy.value != 'USD' && document.MAINFORM.NET_CR_CCY.value != 'USD') {
                    custExchIncm.value = Math.abs(SYS_BeFloat(settCnyAmt1.value) - SYS_BeFloat(settCnyAmt2.value));
                    custExchIncm.value = SYT_CCY_AMT('USD', custExchIncm.value);
                } else {
                    custExchIncm.value = Math.abs(SYS_BeFloat(settCnyAmt2.value) - SYS_BeFloat(custAmt.value));
                    custExchIncm.value = SYT_CCY_AMT('USD', custExchIncm.value);
                }
            } else {
                custExchFav.value = 0;
                custExchIncm.value = 0;
            }
        }
        SettleTtlExchIncmFav();
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettleGetCustAcno = function(CcySwitch) {
    try {
        if (SYS_BeFloat(document.MAINFORM.NET_CR_AMT.value) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO1, 'M', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO6, 'O', 'N');
        } else if (SYS_BeFloat(document.MAINFORM.NET_CR_AMT.value) == 0) {
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO1, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO6, 'O', 'N');
        } else {
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO1, 'P', 'N');
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO6, 'M', 'N');
        }

        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return;
        }
        if (document.MAINFORM.SETT_TRANS_FLG1.value != "2") {
            document.MAINFORM.SETT_CUST_AC_NO1.readOnly = true;
        }
        document.MAINFORM.SETT_CUST_AC_NO6.readOnly = true;
        custCcySwitch = CcySwitch;
        SettleCustAcNoInitValue("SETT_CUST_AC_NO1_O,SETT_CUST_AC_NO2_O,SETT_CUST_AC_NO3_O,SETT_CUST_AC_NO4_O,SETT_CUST_AC_NO5_O,SETT_CUST_AC_NO6_O,SETT_CUST_AC_NO8_O");
        settSetAcNoValue();
        /*
 	if(SYS_FUNCTION_TYPE=='KP' || SYS_FUNCTION_TYPE=='PM' || SYS_FUNCTION_TYPE=='MM'){ 
  }
*/
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettleNonExchComm = function() {
    try {
        var CableComm; // Utility Auto Fix Comments
        var SETT_TRANS_FLG; // Utility Auto Fix Comments
        var acCcyBuyRt; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var netCrccyBuyRt; // Utility Auto Fix Comments
        var nonExchComm; // Utility Auto Fix Comments
        var returnCableComm; // Utility Auto Fix Comments
        var settCableamtObject; // Utility Auto Fix Comments
        var settEqamtObject; // Utility Auto Fix Comments
        var settacamtObject; // Utility Auto Fix Comments
        var ttlCableComm; // Utility Auto Fix Comments
        var ttlNonExchComm; // Utility Auto Fix Comments
        ttlNonExchComm = 0;
        ttlCableComm = 0;
        returnCableComm = 0;
        for (i = 1; i <= 5; i++) {
            nonExchComm = EEHtml.getElementById('SETT_EXCH_COMM' + i);

            SETT_TRANS_FLG = EEHtml.getElementById('SETT_TRANS_FLG' + i);
            if (SETT_TRANS_FLG.value == '1' || SETT_TRANS_FLG.value == '2') {
                ttlNonExchComm += SYS_BeFloat(nonExchComm.value);
            }
        }
        document.MAINFORM.SETT_NET_EXCH_COMM.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, ttlNonExchComm);
        document.MAINFORM.SETT_NET_EXCH_CCY.value = document.MAINFORM.NET_CR_CCY.value;
        document.MAINFORM.SETT_OTHER_COMM.value = 0;
        if (document.MAINFORM.IN_OUT_FLAG_SETT.value == 'OUT' && document.MAINFORM.SETT_AC_CCY8.value != '') {
            acCcyBuyRt = SYS_GetExchangeRate_Fee(document.MAINFORM.SETT_AC_CCY8.value, 'USD', 'Buying Rate', '');
            document.MAINFORM.SETT_OTHER_COMM_CCY.value = document.MAINFORM.SETT_AC_CCY8.value;
            document.MAINFORM.SETT_OTHER_COMM.value = SYS_BeFloat(document.MAINFORM.SETT_CABLE_COMM.value) / SYS_BeFloat(acCcyBuyRt[0][1]) * 100;
            document.MAINFORM.SETT_OTHER_COMM.value = SYT_CCY_AMT(document.MAINFORM.SETT_AC_CCY8.value, document.MAINFORM.SETT_OTHER_COMM.value);
        }
        if (document.MAINFORM.IN_OUT_FLAG_SETT.value == 'IN' && document.MAINFORM.NET_CR_CCY.value != '') {
            document.MAINFORM.SETT_OTHER_COMM_CCY.value = document.MAINFORM.NET_CR_CCY.value;
            netCrccyBuyRt = SYS_GetExchangeRate_Fee(document.MAINFORM.NET_CR_CCY.value, 'USD', 'Buying Rate', '');
            for (i = 1; i <= 5; i++)

            {
                settEqamtObject = EEHtml.getElementById('SETT_EQ_AMT' + i);
                settacamtObject = EEHtml.getElementById('SETT_AC_AMT' + i);
                settCableamtObject = EEHtml.getElementById('SETT_CABLE_AMT' + i);
                if (settCableamtObject.value > 0) {
                    CableComm = (SYS_BeFloat(settEqamtObject.value) - SYS_BeFloat(settacamtObject.value));
                } else {
                    CableComm = 0;
                }
                ttlCableComm += CableComm;
            }
            document.MAINFORM.SETT_OTHER_COMM.value = SYT_CCY_AMT(document.MAINFORM.NET_CR_CCY.value, ttlCableComm);


        }
        if (document.MAINFORM.IN_OUT_FLAG_SETT.value == 'IN' && document.MAINFORM.NET_RET_CCY.value != '') {
            netCrccyBuyRt = SYS_GetExchangeRate_Fee(document.MAINFORM.NET_RET_CCY.value, 'USD', 'Buying Rate', '');
            returnCableComm = SYS_BeFloat(document.MAINFORM.SETT_CABLE_AMT7.value) / SYS_BeFloat(netCrccyBuyRt[0][1]) * 100;
            returnCableComm = SYT_CCY_AMT(document.MAINFORM.NET_RET_CCY.value, returnCableComm);
            document.MAINFORM.SETT_OTHER_COMM_CCY.value = document.MAINFORM.NET_RET_CCY.value;
            document.MAINFORM.SETT_OTHER_COMM.value = SYS_BeFloat(document.MAINFORM.SETT_OTHER_COMM.value) + SYS_BeFloat(returnCableComm);
            document.MAINFORM.SETT_OTHER_COMM.value = SYT_CCY_AMT(document.MAINFORM.NET_RET_CCY.value, document.MAINFORM.SETT_OTHER_COMM.value);
        }
        if (document.MAINFORM.NET_RET_CCY.value == '' && document.MAINFORM.NET_CR_CCY.value == '' && document.MAINFORM.SETT_AC_CCY8.value == '') {
            document.MAINFORM.SETT_OTHER_COMM_CCY.value = '';
            document.MAINFORM.SETT_OTHER_COMM.value = 0.00;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettleReturnOvsAmt = function(ccy, amt, acno, custId, flg) {
    try {
        var i; // Utility Auto Fix Comments
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return;
        }

        if (SYS_BeFloat(amt) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO1, 'O', 'N');
            document.MAINFORM.SETT_CUST_AC_NO1.readOnly = true;
            document.MAINFORM.NET_RET_CCY.value = ccy;
            document.MAINFORM.NET_RET_AMT.value = SYT_CCY_AMT(ccy, amt);
            document.MAINFORM.SETT_AC_CCY7.value = ccy;
            document.MAINFORM.SETT_AC_AMT7.value = SYT_CCY_AMT(ccy, amt);
            document.MAINFORM.SETT_EQ_AMT7.value = SYT_CCY_AMT(ccy, amt);
            document.MAINFORM.SETT_CUST_AC_NO7.value = acno;
            ifReturnFlg = flg;
            cableCustId = custId;
            GetCablePostFee_SETT('SETT_TRANS_FLG7', cableCustId, 'N');
            if (flg) {
                GetCablePostFee_SETT('SETT_TRANS_FLG7', cableCustId, 'Y');
            }
            for (i = 1; i <= 5; i++) {
                GetCablePostFee_SETT('SETT_TRANS_FLG' + i, cableCustId, 'N');
            }
            SettleNonExchComm();
        } else {
            document.MAINFORM.NET_RET_CCY.value = '';
            document.MAINFORM.NET_RET_AMT.value = 0;
            document.MAINFORM.SETT_AC_CCY7.value = '';
            document.MAINFORM.SETT_AC_AMT7.value = 0;
            document.MAINFORM.SETT_EQ_AMT7.value = 0;
            document.MAINFORM.SETT_CUST_AC_NO7.value = '';
            cableCustId = '';
            ifReturnFlg = flg;
            GetCablePostFee_SETT('SETT_TRANS_FLG7', cableCustId, 'N');
            SettleNonExchComm();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettleReturnOvsAmt_afterSett = function(ccy, amt, acno, custId, flg) {
    try {
        if (SYS_FUNCTION_TYPE == 'INQU' || SYS_FUNCTION_TYPE == 'IQ' || SYS_FUNCTION_TYPE == 'RE') {
            return;
        }

        if (SYS_BeFloat(amt) > 0) {
            SYT_ChangeFldClass(document.MAINFORM.SETT_CUST_AC_NO1, 'O', 'N'); //wjp	
            document.MAINFORM.SETT_CUST_AC_NO1.readOnly = true;
            document.MAINFORM.NET_RET_CCY.value = ccy;
            document.MAINFORM.NET_RET_AMT.value = SYT_CCY_AMT(ccy, amt);
            document.MAINFORM.SETT_AC_CCY7.value = ccy;
            document.MAINFORM.SETT_AC_AMT7.value = SYT_CCY_AMT(ccy, amt);
            document.MAINFORM.SETT_EQ_AMT7.value = SYT_CCY_AMT(ccy, amt);
            document.MAINFORM.SETT_CUST_AC_NO7.value = acno;
            ifReturnFlg = flg;
            cableCustId = custId;
            GetCablePostFee_SETT('SETT_TRANS_FLG7', cableCustId, 'N');
            if (flg) {
                GetCablePostFee_SETT('SETT_TRANS_FLG7', cableCustId, 'Y');
            }
            SettleNonExchComm();
        } else {
            document.MAINFORM.NET_RET_CCY.value = '';
            document.MAINFORM.NET_RET_AMT.value = 0;
            document.MAINFORM.SETT_AC_CCY7.value = '';
            document.MAINFORM.SETT_AC_AMT7.value = 0;
            document.MAINFORM.SETT_EQ_AMT7.value = 0;
            document.MAINFORM.SETT_CUST_AC_NO7.value = '';
            cableCustId = '';
            ifReturnFlg = flg;
            GetCablePostFee_SETT('SETT_TRANS_FLG7', cableCustId, 'N');
            SettleNonExchComm();
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.SettleTtlExchIncmFav = function() {
    try {
        var custExchFav; // Utility Auto Fix Comments
        var custExchIncm; // Utility Auto Fix Comments
        var exchFav; // Utility Auto Fix Comments
        var exchIncm; // Utility Auto Fix Comments
        exchIncm = 0;
        exchFav = 0;
        for (i = 1; i <= 6; i++) {
            custExchIncm = EEHtml.getElementById('SETT_EXCH_INCM' + i);
            custExchFav = EEHtml.getElementById('SETT_EXCH_FAV' + i);
            exchIncm = exchIncm + SYS_BeFloat(custExchIncm.value);
            exchFav = exchFav + SYS_BeFloat(custExchFav.value);
        }
        document.MAINFORM.SETT_TTL_EXCH_FAV.value = SYT_CCY_AMT('USD', exchFav);
        document.MAINFORM.SETT_TTL_EXCH_INCM.value = SYT_CCY_AMT('USD', exchIncm);
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.TTL_SETT_CABLE_COMM = function() {
    try {
        var i; // Utility Auto Fix Comments
        var settCableAmtObject; // Utility Auto Fix Comments
        var ttlCableAmt; // Utility Auto Fix Comments
        settCableAmtObject = '';
        ttlCableAmt = 0;
        for (i = 1; i <= 5; i++) {
            settCableAmtObject = EEHtml.getElementById('SETT_CABLE_AMT' + i);
            ttlCableAmt += SYS_BeFloat(settCableAmtObject.value);
        }
        ttlCableAmt += SYS_BeFloat(document.MAINFORM.SETT_CABLE_AMT7.value);
        document.MAINFORM.SETT_CABLE_CCY.value = 'USD';
        document.MAINFORM.SETT_CABLE_COMM.value = SYT_CCY_AMT('USD', ttlCableAmt);
        CABLEFEE_AC_AMT();
        SettleNonExchComm();
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}

csLbiCompProto.settSetAcNoValue = function() {
    try {
        var fieldObject; // Utility Auto Fix Comments
        var i; // Utility Auto Fix Comments
        var j; // Utility Auto Fix Comments
        var settAcnoNum; // Utility Auto Fix Comments
        fieldObject = document.MAINFORM.SETT_CUST_AC_NO1_O;
        if (document.MAINFORM.SETT_NONEXCH_FLG.value != 'YES') {
            SettleCustAcNoInitValue('SETT_CUST_AC_NO1_O');
            if (SYS_MODULE_NAME.indexOf("FINC") == -1) {
                document.MAINFORM.SETT_TRANS_FLG1.readOnly = false;
                document.MAINFORM.SETT_TRANS_FLG1.disabled = false;
            }
        } else {
            document.MAINFORM.SETT_TRANS_FLG1.value = '1';
            document.MAINFORM.SETT_TRANS_FLG1.readOnly = true;
            document.MAINFORM.SETT_TRANS_FLG1.disabled = true;
            if (SYS_BeFloat(EEHtml.getElementById("NET_CR_AMT").value) > 0) {
                document.MAINFORM.SETT_CUST_AC_NO1.className = 'CHAR_M';
                document.MAINFORM.SETT_CUST_AC_NO1.readOnly = true;
            }
            document.MAINFORM.SETT_CUST_AC_NO1.onclick = SETT_CUST_AC_NO_O_style;
            document.MAINFORM.SETT_CUST_AC_NO1_O.style.display = 'none';

            SETT_EQ_AMT1_onchange();
            GetCablePostFee_SETT('SETT_TRANS_FLG1', '', 'N');
            for (i = 0; i < fieldObject.length; i++) {
                fieldObject.remove(0);
            }
            fieldObject.length = 0;
            fieldObject.size = 0;
            fieldObject[0] = new Option('Acno of 8114 For First Cust');
            fieldObject.value = '';
            settAcnoNum = 0;
            for (j = 0; j <= custAcno.length - 1; j++) {
                if (custAcno[j][0] == acNoType8114 && custAcno[j][2] == document.MAINFORM.NET_CR_CCY.value) {
                    fieldObject[settAcnoNum + 1] = new Option(custAcno[j][3] + custAcno[j][4] + ' ' + custAcno[j][1] + ' ' + custAcno[j][2]);
                    fieldObject[settAcnoNum + 1].value = custAcno[j][3] + custAcno[j][4] + ' ' + custAcno[j][1] + ' ' + custAcno[j][2] + ' FIRST';
                    settAcnoNum++;
                }

            }

            if (settSecdCustAcno.length > 0) {
                fieldObject[settAcnoNum + 1] = new Option('');
                fieldObject[settAcnoNum + 1].value = '';
                settAcnoNum++;
                fieldObject[settAcnoNum + 1] = new Option('Acno of  8114 For Second Cust');
                fieldObject[settAcnoNum + 1].value = '';
                settAcnoNum++;
            }
            for (j = 0; j <= settSecdCustAcno.length - 1; j++) {
                if (settSecdCustAcno[j][0] == acNoType8114 && settSecdCustAcno[j][2] == document.MAINFORM.NET_CR_CCY.value) {
                    fieldObject[settAcnoNum + 1] = new Option(settSecdCustAcno[j][3] + settSecdCustAcno[j][4] + ' ' + settSecdCustAcno[j][1] + ' ' + settSecdCustAcno[j][2]);
                    fieldObject[settAcnoNum + 1].value = settSecdCustAcno[j][3] + settSecdCustAcno[j][4] + ' ' + settSecdCustAcno[j][1] + ' ' + settSecdCustAcno[j][2] + ' SECOND_SETT';
                    settAcnoNum++;
                }
            }
            fieldObject.size = settAcnoNum + 1;
        }
    } catch (e) {
        DisExcpt("SSSS_SRC_Settlement.js", e);
    }
}